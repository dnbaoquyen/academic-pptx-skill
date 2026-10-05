// Text measurement for Alexandria using real glyph advance widths, so the
// builder can pick a font size that fits each box (never below MIN_PT).
const M = require("./alexandria_metrics.json");

const MIN_PT = 24;
const LINE = 1.3; // line spacing multiple, written into the deck as exact points
const INSET = 6; // text box inset in points (all sides)

function textWidthIn(str, pt, bold) {
  const tbl = bold ? M.bold : M.regular;
  let u = 0;
  for (const ch of str) u += tbl[ch.codePointAt(0)] ?? 560;
  return (u / M.upm) * (pt / 72);
}

// Greedy word wrap; returns number of lines for one paragraph.
function countLines(text, widthIn, pt, bold) {
  // split on breakable whitespace only: U+00A0 keeps words together, as in PowerPoint
  const words = String(text).split(/[ \t\n\r]+/).filter(Boolean);
  if (!words.length) return 1;
  const space = textWidthIn(" ", pt, bold);
  let lines = 1;
  let cur = 0;
  for (const w of words) {
    const ww = textWidthIn(w, pt, bold);
    if (cur === 0) cur = ww;
    else if (cur + space + ww <= widthIn) cur += space + ww;
    else {
      lines++;
      cur = ww;
    }
    // a single word wider than the box wraps mid-word in PowerPoint
    if (ww > widthIn) lines += Math.floor(ww / widthIn);
  }
  return lines;
}

// Height in inches of paragraphs (array of strings) at pt in a box of width w.
function blockHeight(paras, w, pt, { bold = false, gapPt = 0 } = {}) {
  const inner = w - (2 * INSET) / 72;
  let lines = 0;
  for (const p of paras) lines += countLines(p, inner, pt, bold);
  return (lines * pt * LINE + gapPt * Math.max(0, paras.length - 1)) / 72 + (2 * INSET) / 72;
}

// Largest size in [min,max] whose block fits in h; null if even min overflows.
function fitSize(paras, w, h, { max = 28, min = MIN_PT, bold = false, gapPt = 0 } = {}) {
  paras = Array.isArray(paras) ? paras : [paras];
  for (let pt = max; pt >= min; pt -= 1) {
    if (blockHeight(paras, w, pt, { bold, gapPt }) <= h + 1e-6) return pt;
  }
  return null;
}

module.exports = { MIN_PT, LINE, INSET, textWidthIn, countLines, blockHeight, fitSize };
