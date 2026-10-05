#!/usr/bin/env node
// Builds the MKT1107 lecture decks from content/W*.json.
// Usage: node build.js            (all weeks)
//        node build.js W1 W3      (selected weeks)
// Every text run is >= 24 pt; the builder measures text with Alexandria's
// glyph widths and reports any box that would overflow at 24 pt.
const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const { MIN_PT, LINE, INSET, fitSize, blockHeight, textWidthIn } = require("./lib/fit");

const FONT = "Alexandria";
const BG = "FBFAF4";
const INK = "2E2A3A";
const MUTED = "5B5668";
const WHITE = "FFFFFF";
const P = {
  green: "49B296",
  yellow: "FFD23B",
  pink: "FF5178",
  purple: "962B7C",
  blue: "09A1E5",
  orange: "FF9259",
};
const ROT = [P.green, P.pink, P.blue, P.orange, P.purple, P.yellow];

const W = 13.333;
const H = 7.5;
const X0 = 0.6;
const CW = 12.1;
const Y0 = 1.95;
const Y1 = 6.65;
const GAP = 0.3;

const THEME = {
  name: "MKT1107",
  headFontFace: FONT,
  bodyFontFace: FONT,
  colors: {
    dk1: INK, lt1: WHITE, dk2: P.purple, lt2: BG,
    accent1: P.green, accent2: P.yellow, accent3: P.pink,
    accent4: P.purple, accent5: P.blue, accent6: P.orange,
    hlink: P.blue, folHlink: P.purple,
  },
};

// ---------- helpers ----------
function tint(hex, a) {
  const c = (h, i) => parseInt(h.slice(i, i + 2), 16);
  const out = [0, 2, 4].map((i) => Math.round(c(BG, i) * (1 - a) + c(hex, i) * a));
  return out.map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}
const onColor = (hex) => (hex === P.purple ? WHITE : INK);

// Inline **bold** / *italic* markup -> runs; plain() strips markup for measuring.
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*.+?\*\*(?!\*)|\*[^*]+\*)/g;
  let last = 0;
  let m;
  // "\\*" in content is a literal asterisk (e.g. Excel formulas)
  const s = String(text ?? "").replace(/\\\*/g, "\u2217");
  while ((m = re.exec(s))) {
    if (m.index > last) out.push({ text: s.slice(last, m.index), options: { ...base } });
    const t = m[0];
    if (t.startsWith("**")) out.push(...runs(t.slice(2, -2), { ...base, bold: true }));
    else out.push({ text: t.slice(1, -1), options: { ...base, italic: true } });
    last = m.index + t.length;
  }
  if (last < s.length) out.push({ text: s.slice(last), options: { ...base } });
  out.forEach((r) => (r.text = r.text.replace(/\u2217/g, "*")));
  return out.length ? out : [{ text: "", options: { ...base } }];
}
const plain = (t) => String(t ?? "").replace(/\\\*/g, "\u2217").replace(/\*\*(.+?)\*\*(?!\*)/g, "$1").replace(/\*([^*]+)\*/g, "$1");

class Ctx {
  constructor(week) {
    this.week = week;
    this.warnings = [];
    this.n = 0;
  }
  warn(msg) {
    this.warnings.push(`${this.week} slide ${this.n}: ${msg}`);
  }
  // fit or warn; returns a size >= MIN_PT
  fit(label, paras, w, h, opts = {}) {
    const p = (Array.isArray(paras) ? paras : [paras]).map(plain);
    const sz = fitSize(p, w, h, opts);
    if (sz === null) {
      const need = blockHeight(p, w, opts.min || MIN_PT, opts).toFixed(2);
      this.warn(`${label} overflows (needs ${need}in, has ${h.toFixed(2)}in) — shorten text`);
      return opts.min || MIN_PT;
    }
    return sz;
  }
}

function txt(slide, text, o) {
  const pt = o.fontSize;
  const base = { color: o.color || INK, bold: !!o.bold, italic: !!o.italic };
  const paras = Array.isArray(text) ? text : [text];
  const arr = [];
  paras.forEach((p, i) => {
    const r = runs(p, base);
    if (i < paras.length - 1) r[r.length - 1].options.breakLine = true;
    arr.push(...r);
  });
  slide.addText(arr, {
    x: o.x, y: o.y, w: o.w, h: o.h,
    fontFace: FONT, fontSize: pt, lineSpacing: Math.round(pt * LINE),
    margin: INSET, valign: o.valign || "top", align: o.align || "left",
    paraSpaceAfter: o.paraSpaceAfter || 0, fit: "none", isTextBox: true,
    objectName: o.name,
  });
}

function circle(slide, x, y, d, color, name = "Trang trí") {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color }, line: { type: "none" }, objectName: name });
}
function rrect(slide, x, y, w, h, color, name, radius = 0.18) {
  slide.addShape("roundRect", {
    x, y, w, h, fill: { color }, line: { type: "none" }, rectRadius: radius, objectName: name,
  });
}
function disc(slide, x, y, d, color, label, pt) {
  circle(slide, x, y, d, color, "Nhãn " + label);
  if (label !== undefined && label !== "") {
    slide.addText(String(label), {
      x, y, w: d, h: d, fontFace: FONT, fontSize: pt || Math.max(MIN_PT, Math.round(d * 40)),
      bold: true, color: onColor(color), align: "center", valign: "middle", margin: 0,
      fit: "none", isTextBox: true,
    });
  }
}
function arrow(slide, x1, y1, x2, y2, color = MUTED) {
  const o = {
    x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.001),
    h: Math.max(Math.abs(y2 - y1), 0.001),
    line: { color, width: 2.5, endArrowType: "triangle" }, objectName: "Mũi tên",
  };
  if ((x2 - x1) * (y2 - y1) < 0) o.flipV = true;
  if (x2 < x1) o.flipH = true;
  slide.addShape("line", o);
}

function decorate(slide, i) {
  circle(slide, W - 0.8, -0.8, 1.6, ROT[i % 6]);
  circle(slide, W - 0.75, 0.95, 0.3, ROT[(i + 2) % 6]);
  circle(slide, -0.5, H - 0.5, 1.0, ROT[(i + 4) % 6]);
}

// ---------- callout (shared) ----------
function calloutHeight(ctx, text) {
  if (!text) return 0;
  const w = CW - 1.0;
  const sz = ctx.fit("callout", text, w, 1.6, { max: 26, bold: true });
  return Math.max(0.75, blockHeight([plain(text)], w, sz, { bold: true }) + 0.1);
}
const reserve = (ctx, text) => (text ? Y1 - calloutHeight(ctx, text) - GAP : Y1);
function callout(ctx, slide, text, color, yBottom = Y1, yTop = null) {
  if (!text) return Y1;
  const h = calloutHeight(ctx, text);
  const y = yTop !== null ? Math.min(yTop, yBottom - h) : yBottom - h;
  rrect(slide, X0, y, CW, h, tint(color, 0.3), "Ghi chú nổi bật");
  disc(slide, X0 + 0.2, y + h / 2 - 0.25, 0.5, color, "!", 26);
  const w = CW - 1.0;
  const sz = ctx.fit("callout", text, w, h, { max: 26, bold: true });
  txt(slide, text, { x: X0 + 0.85, y, w, h, fontSize: sz, bold: true, valign: "middle" });
  return y - GAP;
}

// ---------- layouts ----------
const L = {};

L.cover = (ctx, pres, s) => {
  const slide = pres.addSlide({ masterName: "COVER", sectionTitle: ctx.section });
  circle(slide, 9.0, 0.9, 4.4, P.purple);
  circle(slide, 8.3, 4.6, 2.1, P.yellow);
  circle(slide, 12.1, 0.2, 1.5, P.green);
  circle(slide, 11.6, 4.9, 1.9, P.orange);
  circle(slide, 10.9, 6.6, 0.7, P.pink);
  circle(slide, 8.55, 0.55, 0.6, P.blue);
  slide.addText(
    [
      { text: (s.lessonTag || "BUỔI").toUpperCase(), options: { fontSize: 28, bold: true, breakLine: true } },
      { text: String(s.number ?? ""), options: { fontSize: 96, bold: true } },
    ],
    { x: 9.0, y: 0.9, w: 4.4, h: 4.4, fontFace: FONT, color: WHITE, align: "center", valign: "middle",
      margin: 0, isTextBox: true, lineSpacing: 100 }
  );
  txt(slide, s.kicker || "MKT1107 · NGHIÊN CỨU MARKETING", {
    x: X0, y: 0.8, w: 7.6, h: 0.6, fontSize: 24, bold: true, color: P.purple,
  });
  const tsz = ctx.fit("cover title", s.title, 7.6, 2.9, { max: 48, min: 32, bold: true });
  txt(slide, s.title, { x: X0, y: 1.6, w: 7.6, h: 2.9, fontSize: tsz, bold: true, valign: "middle" });
  if (s.subtitle) {
    const ssz = ctx.fit("cover subtitle", s.subtitle, 7.4, 1.0, { max: 28 });
    txt(slide, s.subtitle, { x: X0, y: 4.65, w: 7.4, h: 1.0, fontSize: ssz, color: MUTED });
  }
  if (s.presenter) {
    txt(slide, s.presenter, { x: X0, y: 5.85, w: 7.4, h: 0.6, fontSize: 24, bold: true });
  }
  return slide;
};

L.section = (ctx, pres, s) => {
  const slide = pres.addSlide({ masterName: "SECTION", sectionTitle: ctx.section });
  const c = ROT[ctx.n % 6];
  circle(slide, -1.2, 1.4, 5.2, tint(c, 0.25));
  disc(slide, 0.9, 2.45, 2.6, c, s.tag || "", 60);
  circle(slide, 11.9, 0.5, 0.9, ROT[(ctx.n + 2) % 6]);
  circle(slide, 11.2, 4.9, 1.3, ROT[(ctx.n + 3) % 6]);
  circle(slide, 10.7, 6.3, 0.4, ROT[(ctx.n + 4) % 6]);
  if (s.kicker) {
    txt(slide, s.kicker, { x: 4.2, y: 1.55, w: 7.4, h: 0.65, fontSize: 28, bold: true, color: P.purple });
  }
  const tsz = ctx.fit("section title", s.title, 7.4, 2.4, { max: 44, min: 30, bold: true });
  slide.addText(runs(s.title, { bold: true, color: INK }), {
    placeholder: "title", fontSize: tsz, lineSpacing: Math.round(tsz * LINE), valign: "top",
  });
  return slide;
};

function contentSlide(ctx, pres, s) {
  const slide = pres.addSlide({ masterName: "CONTENT", sectionTitle: ctx.section });
  decorate(slide, ctx.n);
  const tsz = ctx.fit("title", s.title, 11.8, 1.4, { max: 36, min: 28, bold: true });
  slide.addText(runs(s.title, { bold: true, color: INK }), {
    placeholder: "title", fontSize: tsz, lineSpacing: Math.round(tsz * LINE),
  });
  return slide;
}

L.bullets = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const c0 = ctx.n;
  const bottom = reserve(ctx, s.callout);
  const items = (s.bullets || []).map((b) => (typeof b === "string" ? { text: b } : b));
  const paras = items.map((b) => (b.head ? `${b.head}: ${b.text || ""}` : b.text));
  const mark = s.numbered ? 0.55 : 0.3;
  const tw = CW - mark - 0.25;
  const avail = bottom - Y0;
  const gap = 0.22;
  let sz = null;
  for (let pt = 30; pt >= MIN_PT; pt--) {
    const tot = paras.reduce((a, p) => a + blockHeight([plain(p)], tw, pt, { bold: false }), 0) + gap * (paras.length - 1);
    if (tot <= avail) { sz = pt; break; }
  }
  if (sz === null) { ctx.warn("bullets overflow — cut words or split slide"); sz = MIN_PT; }
  let y = Y0;
  items.forEach((b, i) => {
    const h = blockHeight([plain(paras[i])], tw, sz);
    const col = ROT[(c0 + i) % 6];
    const lineH = (sz * LINE) / 72;
    if (s.numbered) disc(slide, X0, y + INSET / 72 + lineH / 2 - mark / 2, mark, col, i + 1, 24);
    else circle(slide, X0 + 0.04, y + INSET / 72 + lineH / 2 - 0.11, 0.22, col, "Dấu đầu dòng");
    const t = b.head ? `**${b.head}:** ${b.text || ""}` : b.text;
    txt(slide, t, { x: X0 + mark + 0.2, y, w: tw, h, fontSize: sz });
    y += h + gap;
  });
  callout(ctx, slide, s.callout, ROT[(c0 + 1) % 6], Y1, y - gap + GAP + 0.1);
  return slide;
};

L.cards = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const cards = s.cards || [];
  const n = cards.length;
  const bottom = reserve(ctx, s.callout);
  const cols = n <= 3 ? n : n === 4 ? 2 : 3;
  const rowsN = Math.ceil(n / cols);
  const cw = (CW - GAP * (cols - 1)) / cols;
  let ch = (bottom - Y0 - GAP * (rowsN - 1)) / rowsN;
  const d = 0.6;
  const headW = cw - d - 0.5;
  const bodyW = cw - 0.3;
  // one head size and one body size for all cards
  let hs = 28, bs = 26, ok = false;
  for (hs = 28; hs >= MIN_PT && !ok; hs--) {
    for (bs = Math.min(hs, 26); bs >= MIN_PT; bs--) {
      ok = cards.every((c) => {
        const hh = Math.max(d, blockHeight([plain(c.head || "")], headW, hs, { bold: true }));
        const bh = c.text ? blockHeight([plain(c.text)], bodyW, bs) : 0;
        return 0.15 + hh + 0.05 + bh + 0.1 <= ch;
      });
      if (ok) break;
    }
    if (ok) break;
  }
  if (!ok) { ctx.warn("cards overflow — shorten card text or use fewer cards"); hs = MIN_PT; bs = MIN_PT; }
  else {
    const need = Math.max(...cards.map((c) => 0.15 + Math.max(d, blockHeight([plain(c.head || "")], headW, hs, { bold: true })) + 0.05 + (c.text ? blockHeight([plain(c.text)], bodyW, bs) : 0) + 0.1));
    ch = Math.min(ch, need + 0.45);
  }
  cards.forEach((c, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = X0 + col * (cw + GAP), y = Y0 + row * (ch + GAP);
    const color = ROT[(ctx.n + i) % 6];
    rrect(slide, x, y, cw, ch, tint(color, 0.18), "Thẻ " + plain(c.head || i + 1));
    disc(slide, x + 0.18, y + 0.18, d, color, c.tag ?? i + 1, 24);
    const hh = Math.max(d, blockHeight([plain(c.head || "")], headW, hs, { bold: true }));
    txt(slide, c.head || "", { x: x + d + 0.3, y: y + 0.15, w: headW, h: hh, fontSize: hs, bold: true, valign: "middle" });
    if (c.text) {
      txt(slide, c.text, { x: x + 0.15, y: y + 0.2 + hh, w: bodyW, h: ch - hh - 0.25, fontSize: bs });
    }
  });
  callout(ctx, slide, s.callout, ROT[(ctx.n + 3) % 6], Y1, Y0 + rowsN * ch + (rowsN - 1) * GAP + GAP + 0.1);
  return slide;
};

L.compare = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const bottom = callout(ctx, slide, s.callout, ROT[(ctx.n + 2) % 6]);
  const cols = [s.left, s.right];
  const colors = [ROT[(ctx.n + 2) % 6], ROT[(ctx.n + 4) % 6]].map((c) => (c === P.yellow ? P.orange : c));
  const vsGap = s.vs ? 0.9 : GAP;
  const cw = (CW - vsGap) / 2;
  const headH = Math.max(
    ...cols.map((c) => blockHeight([plain(c.head)], cw - 0.3, ctx.fit("compare head", c.head, cw - 0.3, 1.4, { max: 28, bold: true }), { bold: true }))
  ) + 0.1;
  const bodyH = bottom - Y0 - headH - 0.15;
  const tw = cw - 0.75;
  const gap = 0.15;
  let sz = null;
  for (let pt = 28; pt >= MIN_PT; pt--) {
    const fits = cols.every((c) => (c.items || []).reduce((a, it) => a + blockHeight([plain(it)], tw, pt), 0) + gap * ((c.items || []).length - 1) + 0.3 <= bodyH);
    if (fits) { sz = pt; break; }
  }
  if (sz === null) { ctx.warn("compare items overflow"); sz = MIN_PT; }
  cols.forEach((c, i) => {
    const x = X0 + i * (cw + vsGap);
    const color = colors[i];
    const hsz = ctx.fit("compare head", c.head, cw - 0.3, headH, { max: 28, bold: true });
    rrect(slide, x, Y0, cw, headH, color, "Tiêu đề cột");
    txt(slide, c.head, { x: x + 0.15, y: Y0, w: cw - 0.3, h: headH, fontSize: hsz, bold: true, color: onColor(color), valign: "middle" });
    rrect(slide, x, Y0 + headH + 0.15, cw, bodyH, tint(color, 0.16), "Nội dung cột");
    let y = Y0 + headH + 0.3;
    (c.items || []).forEach((it) => {
      const h = blockHeight([plain(it)], tw, sz);
      circle(slide, x + 0.3, y + INSET / 72 + (sz * LINE) / 144 - 0.1, 0.2, color, "Dấu đầu dòng");
      txt(slide, it, { x: x + 0.6, y, w: tw, h, fontSize: sz });
      y += h + gap;
    });
  });
  if (s.vs) disc(slide, X0 + cw + 0.1, Y0 + headH + bodyH / 2 - 0.35, 0.7, P.yellow, "vs", 24);
  return slide;
};

L.steps = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const steps = s.steps || [];
  const n = steps.length;
  const bottom = reserve(ctx, s.callout);
  const hasText = steps.some((st) => st.text);
  const horizontal = s.direction ? s.direction === "h" : n <= 4 || !hasText;
  if (horizontal) {
    const cw = (CW - GAP * (n - 1)) / n;
    const d = 0.8;
    // without step texts the row is short: centre it vertically
    const top = !hasText && !s.callout ? Y0 + Math.max(0, (bottom - Y0) / 2 - 1.3) : Y0;
    const lineY = top + 0.1 + d / 2;
    for (let i = 0; i < n - 1; i++) {
      arrow(slide, X0 + i * (cw + GAP) + d + 0.1, lineY, X0 + (i + 1) * (cw + GAP) - 0.1, lineY, MUTED);
    }
    const headH = Math.max(...steps.map((st) => blockHeight([plain(st.head)], cw, ctx.fit("step head", st.head, cw, 1.6, { max: 28, bold: true }), { bold: true })));
    const hs = Math.min(...steps.map((st) => ctx.fit("step head", st.head, cw, headH, { max: 28, bold: true })));
    const ty = top + 0.1 + d + 0.15;
    const textH = bottom - ty - headH - 0.1;
    const bs = hasText ? Math.min(...steps.map((st) => (st.text ? ctx.fit("step text", st.text, cw, textH, { max: 26 }) : 26))) : 0;
    const needText = hasText ? Math.max(...steps.map((st) => (st.text ? blockHeight([plain(st.text)], cw, bs) : 0))) : 0;
    const boxBottom = Math.min(bottom, ty + headH + needText + 0.4);
    steps.forEach((st, i) => {
      const x = X0 + i * (cw + GAP);
      const color = ROT[(ctx.n + i) % 6];
      rrect(slide, x - 0.05, ty - 0.05, cw + 0.1, boxBottom - ty + 0.05, tint(color, 0.14), "Bước " + (i + 1));
      disc(slide, x, top + 0.1, d, color, st.tag ?? i + 1, 28);
      txt(slide, st.head, { x, y: ty, w: cw, h: headH, fontSize: hs, bold: true });
      if (st.text) txt(slide, st.text, { x, y: ty + headH, w: cw, h: boxBottom - ty - headH, fontSize: bs });
    });
    callout(ctx, slide, s.callout, ROT[(ctx.n + 1) % 6], Y1, boxBottom + GAP + 0.1);
  } else {
    const d = 0.6;
    const tw = CW - d - 0.3;
    const paras = steps.map((st) => (st.text ? `**${st.head}** — ${st.text}` : `**${st.head}**`));
    const avail = bottom - Y0;
    const gap = 0.12;
    let sz = null;
    for (let pt = 28; pt >= MIN_PT; pt--) {
      const tot = paras.reduce((a, p) => a + Math.max(d, blockHeight([plain(p)], tw, pt)), 0) + gap * (n - 1);
      if (tot <= avail) { sz = pt; break; }
    }
    if (sz === null) { ctx.warn("steps overflow — shorten step text"); sz = MIN_PT; }
    let y = Y0;
    const ys = [];
    paras.forEach((p) => { const h = Math.max(d, blockHeight([plain(p)], tw, sz)); ys.push([y, h]); y += h + gap; });
    for (let i = 0; i < n - 1; i++) {
      slide.addShape("line", { x: X0 + d / 2, y: ys[i][0] + d, w: 0, h: ys[i + 1][0] - ys[i][0] - d, line: { color: MUTED, width: 2 }, objectName: "Đường nối" });
    }
    paras.forEach((p, i) => {
      const [yy, h] = ys[i];
      disc(slide, X0, yy, d, ROT[(ctx.n + i) % 6], steps[i].tag ?? i + 1, 24);
      txt(slide, p, { x: X0 + d + 0.3, y: yy + d / 2 - ((sz * LINE) / 72 + (2 * INSET) / 72) / 2, w: tw, h, fontSize: sz });
    });
    callout(ctx, slide, s.callout, ROT[(ctx.n + 1) % 6], Y1, y - gap + GAP + 0.1);
  }
  return slide;
};

L.table = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const bottom = reserve(ctx, s.callout);
  const header = s.header || [];
  const rows = s.rows || [];
  const nc = header.length || (rows[0] || []).length;
  const pt = MIN_PT;
  const cellPad = 0.2;
  // column widths: proportional to longest single-line width, floor 1.6in
  const want = [];
  for (let j = 0; j < nc; j++) {
    const cells = [header[j], ...rows.map((r) => r[j])].filter((v) => v !== undefined);
    const widest = Math.max(...cells.map((c, k) => textWidthIn(plain(c), pt, k === 0 && header.length > 0) / 1.6));
    want.push(Math.max(1.6, Math.min(6, widest)));
  }
  const tot = want.reduce((a, b) => a + b, 0);
  const colW = want.map((w) => (w / tot) * CW);
  const rowH = (r, bold) => Math.max(...r.map((c, j) => {
    const inner = colW[j] - cellPad;
    let lines = 0;
    String(plain(c)).split("\n").forEach((p) => {
      lines += require("./lib/fit").countLines(p, inner, pt, bold || (s.boldFirstCol && j === 0));
    });
    return (lines * pt * LINE) / 72 + 0.14;
  }));
  const heights = [header.length ? rowH(header, true) : 0, ...rows.map((r) => rowH(r, false))];
  const total = heights.reduce((a, b) => a + b, 0);
  if (total > bottom - Y0 + 0.01) ctx.warn(`table overflows (needs ${total.toFixed(2)}in, has ${(bottom - Y0).toFixed(2)}in) — shorten cells or split`);
  const hc = ROT[(ctx.n + 4) % 6] === P.yellow ? P.purple : ROT[(ctx.n + 4) % 6];
  const cell = (t, o) => ({
    text: runs(t, { color: o.color || INK, bold: !!o.bold }),
    options: { fill: { color: o.fill }, fontFace: FONT, fontSize: pt, lineSpacing: Math.round(pt * LINE), valign: "middle", margin: [0.07, 0.1, 0.07, 0.1] },
  });
  const data = [];
  if (header.length) data.push(header.map((h) => cell(h, { fill: hc, color: onColor(hc), bold: true })));
  rows.forEach((r, i) => data.push(r.map((c, j) => cell(c, { fill: i % 2 ? tint(hc, 0.1) : WHITE, bold: s.boldFirstCol && j === 0 }))));
  slide.addTable(data, {
    x: X0, y: Y0, w: CW, colW, rowH: heights,
    border: { type: "solid", pt: 1, color: tint(hc, 0.35) }, objectName: "Bảng",
  });
  callout(ctx, slide, s.callout, ROT[(ctx.n + 2) % 6], Y1, Y0 + total + GAP + 0.25);
  return slide;
};

L.statement = (ctx, pres, s) => {
  const hasTitle = !!s.title;
  const slide = hasTitle ? contentSlide(ctx, pres, s) : pres.addSlide({ masterName: "BLANK", sectionTitle: ctx.section });
  if (!hasTitle) decorate(slide, ctx.n);
  const color = ROT[(ctx.n + 1) % 6];
  const top = hasTitle ? Y0 : 1.0;
  const bottom = hasTitle ? Y1 : 6.5;
  rrect(slide, X0, top, CW, bottom - top, tint(color, 0.2), "Khung nhận định", 0.3);
  const d = 1.6;
  disc(slide, X0 + 0.45, top + (bottom - top) / 2 - d / 2, d, color, s.mark || "?", 66);
  const tx = X0 + 0.45 + d + 0.45;
  const tw = X0 + CW - tx - 0.4;
  const subH = s.sub ? Math.min(1.8, blockHeight([plain(s.sub)], tw, 26) + 0.05) : 0;
  const bigH = bottom - top - 0.6 - subH;
  const bsz = ctx.fit("statement", s.big, tw, bigH, { max: 40, min: 28, bold: true });
  const realBig = blockHeight([plain(s.big)], tw, bsz, { bold: true });
  const blockTop = top + (bottom - top - realBig - subH) / 2;
  txt(slide, s.big, { x: tx, y: blockTop, w: tw, h: realBig, fontSize: bsz, bold: true });
  if (s.sub) {
    const ssz = ctx.fit("statement sub", s.sub, tw, subH, { max: 26 });
    txt(slide, s.sub, { x: tx, y: blockTop + realBig, w: tw, h: subH, fontSize: ssz, color: MUTED });
  }
  return slide;
};

L.case = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const c1 = ROT[(ctx.n + 2) % 6];
  const lw = 7.5;
  const rw = CW - lw - GAP;
  const h = Y1 - Y0;
  rrect(slide, X0, Y0, lw, h, tint(c1, 0.18), "Tình huống");
  const label = s.label || "Tình huống";
  const pw = Math.min(lw - 0.5, Math.max(2.6, textWidthIn(label, 24, true) + 0.45));
  rrect(slide, X0 + 0.25, Y0 + 0.25, pw, 0.62, c1, "Nhãn tình huống", 0.3);
  txt(slide, label, { x: X0 + 0.25, y: Y0 + 0.25, w: pw, h: 0.62, fontSize: 24, bold: true, color: onColor(c1), align: "center", valign: "middle" });
  const sh = h - 1.2;
  const sitems = Array.isArray(s.scenario) ? s.scenario : [s.scenario];
  const ssz = ctx.fit("case scenario", sitems, lw - 0.5, sh, { max: 28, gapPt: 8 });
  txt(slide, sitems, { x: X0 + 0.25, y: Y0 + 1.05, w: lw - 0.5, h: sh, fontSize: ssz, paraSpaceAfter: 8 });
  const qx = X0 + lw + GAP;
  rrect(slide, qx, Y0, rw, h, P.purple, "Câu hỏi");
  disc(slide, qx + 0.3, Y0 + 0.3, 0.9, P.yellow, "?", 40);
  const qsz = ctx.fit("case question", s.question, rw - 0.5, h - 1.5, { max: 30, bold: true });
  txt(slide, s.question, { x: qx + 0.25, y: Y0 + 1.35, w: rw - 0.5, h: h - 1.5, fontSize: qsz, bold: true, color: WHITE });
  return slide;
};

L.model = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const bottom = callout(ctx, slide, s.callout, ROT[(ctx.n + 1) % 6]);
  const inputs = s.inputs || [];
  const hasMed = !!s.mediator;
  const labelH = s.inputsLabel || s.outputLabel ? 0.6 : 0;
  const top = Y0 + labelH;
  const iw = hasMed ? 4.2 : 5.0;
  const ow = hasMed ? 3.2 : 4.2;
  const ox = X0 + CW - ow;
  const gap = 0.18;
  const ih = Math.min(1.0, (bottom - top - gap * (inputs.length - 1)) / inputs.length);
  const isz = Math.min(...inputs.map((t) => ctx.fit("model input", t, iw - 0.3, ih, { max: 26, bold: true })));
  const stackH = inputs.length * ih + gap * (inputs.length - 1);
  const sy = top + (bottom - top - stackH) / 2;
  const midY = top + (bottom - top) / 2;
  const oh = Math.min(2.6, bottom - top);
  const target = hasMed ? { x: X0 + iw + 0.9, w: CW - iw - ow - 1.8 } : null;
  if (s.inputsLabel) txt(slide, s.inputsLabel, { x: X0, y: Y0 - 0.05, w: iw, h: 0.6, fontSize: 24, bold: true, color: MUTED });
  if (s.outputLabel) txt(slide, s.outputLabel, { x: ox, y: Y0 - 0.05, w: ow, h: 0.6, fontSize: 24, bold: true, color: MUTED });
  inputs.forEach((t, i) => {
    const y = sy + i * (ih + gap);
    const c = ROT[(ctx.n + i) % 6] === P.purple ? P.yellow : ROT[(ctx.n + i) % 6];
    rrect(slide, X0, y, iw, ih, c, "Biến " + plain(t));
    txt(slide, t, { x: X0 + 0.15, y, w: iw - 0.3, h: ih, fontSize: isz, bold: true, valign: "middle" });
    const tx = hasMed ? target.x : ox;
    arrow(slide, X0 + iw + 0.05, y + ih / 2, tx - 0.08, midY + (y + ih / 2 - midY) * 0.25, MUTED);
  });
  if (hasMed) {
    const mh = Math.min(2.0, bottom - top);
    rrect(slide, target.x, midY - mh / 2, target.w, mh, tint(P.blue, 0.35), "Biến trung gian");
    const msz = ctx.fit("model mediator", s.mediator, target.w - 0.3, mh, { max: 26, bold: true });
    txt(slide, s.mediator, { x: target.x + 0.15, y: midY - mh / 2, w: target.w - 0.3, h: mh, fontSize: msz, bold: true, valign: "middle" });
    arrow(slide, target.x + target.w + 0.05, midY, ox - 0.08, midY, MUTED);
  }
  rrect(slide, ox, midY - oh / 2, ow, oh, P.purple, "Biến kết quả");
  const osz = ctx.fit("model output", s.output, ow - 0.4, oh, { max: 32, bold: true });
  txt(slide, s.output, { x: ox + 0.2, y: midY - oh / 2, w: ow - 0.4, h: oh, fontSize: osz, bold: true, color: WHITE, valign: "middle" });
  return slide;
};

L.break = (ctx, pres, s) => {
  const slide = pres.addSlide({ masterName: "BLANK", sectionTitle: ctx.section });
  circle(slide, 1.2, 1.3, 4.6, P.yellow);
  circle(slide, 4.9, 0.8, 1.2, P.pink);
  circle(slide, 0.6, 5.3, 1.0, P.green);
  circle(slide, 11.4, 4.3, 1.8, P.blue);
  circle(slide, 12.2, 0.4, 0.8, P.orange);
  slide.addText(s.big || "15'", { x: 1.2, y: 1.3, w: 4.6, h: 4.6, fontFace: FONT, fontSize: 96, bold: true, color: INK, align: "center", valign: "middle", margin: 0, isTextBox: true });
  const tsz = ctx.fit("break title", s.title, 5.8, 1.6, { max: 48, min: 32, bold: true });
  txt(slide, s.title, { x: 6.5, y: 2.2, w: 5.8, h: 1.6, fontSize: tsz, bold: true });
  if (s.sub) {
    const ssz = ctx.fit("break sub", s.sub, 4.7, 2.2, { max: 30 });
    txt(slide, s.sub, { x: 6.5, y: 3.9, w: 4.7, h: 2.2, fontSize: ssz, color: MUTED });
  }
  return slide;
};

L.activity = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const prod = s.product ? `**Sản phẩm:** ${s.product}` : null;
  const bottom = reserve(ctx, prod);
  const stages = s.stages || [];
  const pw = 1.5;
  const tw = CW - pw - 0.35;
  const gap = 0.15;
  let sz = null;
  for (let pt = 28; pt >= MIN_PT; pt--) {
    const tot = stages.reduce((a, st) => a + Math.max(0.7, blockHeight([plain(st.text)], tw, pt)), 0) + gap * (stages.length - 1);
    if (tot <= bottom - Y0) { sz = pt; break; }
  }
  if (sz === null) { ctx.warn("activity stages overflow"); sz = MIN_PT; }
  let y = Y0;
  stages.forEach((st, i) => {
    const h = Math.max(0.7, blockHeight([plain(st.text)], tw, sz));
    const c = ROT[(ctx.n + i) % 6];
    rrect(slide, X0, y, CW, h, tint(c, 0.16), "Chặng " + (i + 1));
    rrect(slide, X0 + 0.1, y + h / 2 - 0.3, pw - 0.1, 0.6, c, "Thời gian", 0.3);
    txt(slide, st.time || "", { x: X0 + 0.1, y: y + h / 2 - 0.3, w: pw - 0.1, h: 0.6, fontSize: 24, bold: true, color: onColor(c), align: "center", valign: "middle" });
    txt(slide, st.text, { x: X0 + pw + 0.2, y, w: tw, h, fontSize: sz, valign: "middle" });
    y += h + gap;
  });
  callout(ctx, slide, prod, P.yellow, Y1, y - gap + GAP + 0.1);
  return slide;
};

L.stat = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const bottom = callout(ctx, slide, s.callout, ROT[(ctx.n + 1) % 6]);
  const stats = s.stats || [];
  const n = stats.length;
  const cw = (CW - GAP * (n - 1)) / n;
  const d = Math.min(2.1, cw - 0.4, bottom - Y0 - 1.3);
  stats.forEach((st, i) => {
    const x = X0 + i * (cw + GAP);
    const c = ROT[(ctx.n + i) % 6];
    rrect(slide, x, Y0, cw, bottom - Y0, tint(c, 0.15), "Số liệu");
    const vs = ctx.fit("stat value", st.value, d, d * 0.6, { max: 48, min: 28, bold: true });
    disc(slide, x + (cw - d) / 2, Y0 + 0.2, d, c, st.value, vs);
    const lh = bottom - Y0 - d - 0.35;
    const ls = ctx.fit("stat label", st.label, cw - 0.3, lh, { max: 26 });
    txt(slide, st.label, { x: x + 0.15, y: Y0 + d + 0.3, w: cw - 0.3, h: lh, fontSize: ls });
  });
  return slide;
};

L.timeline = (ctx, pres, s) => {
  const slide = contentSlide(ctx, pres, s);
  const bottom = callout(ctx, slide, s.callout, ROT[(ctx.n + 1) % 6]);
  const items = s.items || [];
  const n = items.length;
  const d = 0.8;
  const step = CW / n;
  const lineY = Y0 + (bottom - Y0) / 2;
  slide.addShape("line", { x: X0, y: lineY, w: CW, h: 0, line: { color: MUTED, width: 3 }, objectName: "Trục thời gian" });
  const bw = Math.min(2 * step - 0.2, 3.2);
  const bh = lineY - d / 2 - 0.1 - Y0;
  items.forEach((it, i) => {
    const cx = X0 + step * i + step / 2;
    const c = ROT[(ctx.n + i) % 6];
    disc(slide, cx - d / 2, lineY - d / 2, d, c, it.tag, 24);
    const up = i % 2 === 0;
    const bx = Math.max(X0, Math.min(X0 + CW - bw, cx - bw / 2));
    const sz = ctx.fit("timeline item", it.text, bw, bh, { max: 26 });
    const th = blockHeight([plain(it.text)], bw, sz);
    txt(slide, it.text, {
      x: bx, y: up ? lineY - d / 2 - 0.1 - th : lineY + d / 2 + 0.1, w: bw, h: th, fontSize: sz,
      align: "center", bold: !!it.highlight, color: it.highlight ? P.purple : INK,
    });
  });
  return slide;
};

L.references = (ctx, pres, s) => {
  const refs = s.refs || [];
  const maxAvail = Y1 - Y0 + 0.2;
  const hs = refs.map((r) => blockHeight([plain(r)], CW - 0.5, MIN_PT) + 0.08);
  const pack = (avail) => {
    const out = [[]];
    let used = 0;
    refs.forEach((r, i) => {
      if (used + hs[i] > avail && out[out.length - 1].length) { out.push([]); used = 0; }
      out[out.length - 1].push(r);
      used += hs[i];
    });
    return out;
  };
  // balance pages: smallest page budget that still needs no extra page
  let chunks = pack(maxAvail);
  const pages = chunks.length;
  for (let a = Math.max(...hs); a < maxAvail; a += 0.05) {
    const c = pack(a);
    if (c.length === pages) { chunks = c; break; }
  }
  let first = null;
  chunks.forEach((ch, k) => {
    if (k > 0) ctx.n++;
    const slide = contentSlide(ctx, pres, { title: (s.title || "Tài liệu tham khảo") + (k ? " (tiếp)" : "") });
    let y = Y0;
    ch.forEach((r, i) => {
      const h = blockHeight([plain(r)], CW - 0.5, MIN_PT);
      circle(slide, X0 + 0.04, y + INSET / 72 + (MIN_PT * LINE) / 144 - 0.09, 0.18, ROT[(ctx.n + i) % 6], "Dấu đầu dòng");
      txt(slide, r, { x: X0 + 0.4, y, w: CW - 0.5, h, fontSize: MIN_PT });
      y += h + 0.08;
    });
    slide.addNotes(k === 0 ? s.notes || "" : "Tiếp danh mục tài liệu tham khảo.");
    if (!first) first = slide;
  });
  return { slide: first, notesDone: true };
};

// pptxgenjs cannot write theme colours: patch the colour scheme in place so the
// palette shows up in PowerPoint's colour picker.
async function applyTheme(file) {
  const JSZip = require("jszip");
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  const tf = "ppt/theme/theme1.xml";
  const c = THEME.colors;
  const keys = ["dk1", "lt1", "dk2", "lt2", "accent1", "accent2", "accent3", "accent4", "accent5", "accent6", "hlink", "folHlink"];
  const scheme = `<a:clrScheme name="${THEME.name}">` + keys.map((k) => `<a:${k}><a:srgbClr val="${c[k]}"/></a:${k}>`).join("") + "</a:clrScheme>";
  let xml = await zip.file(tf).async("string");
  xml = xml.replace(/<a:clrScheme[\s\S]*?<\/a:clrScheme>/, scheme).replace(/(<a:theme [^>]*name=")[^"]*"/, `$1${THEME.name}"`);
  zip.file(tf, xml);
  fs.writeFileSync(file, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
}

// ---------- deck ----------
function defineLayouts(pres) {
  const sn = { x: 11.9, y: 6.85, w: 1.0, h: 0.5, fontFace: FONT, fontSize: 24, color: MUTED, align: "right" };
  pres.defineSlideMaster({ title: "COVER", background: { color: BG }, objects: [] });
  pres.defineSlideMaster({
    title: "SECTION", background: { color: BG }, slideNumber: { ...sn },
    objects: [{ placeholder: { options: { name: "title", type: "title", x: 4.2, y: 2.3, w: 7.4, h: 2.4, fontFace: FONT, color: INK, bold: true, valign: "top", align: "left", margin: INSET }, text: "" } }],
  });
  pres.defineSlideMaster({
    title: "CONTENT", background: { color: BG }, slideNumber: { ...sn },
    objects: [{ placeholder: { options: { name: "title", type: "title", x: X0, y: 0.4, w: 11.8, h: 1.4, fontFace: FONT, color: INK, bold: true, valign: "top", align: "left", margin: INSET }, text: "" } }],
  });
  pres.defineSlideMaster({ title: "BLANK", background: { color: BG }, slideNumber: { ...sn }, objects: [] });
}

async function buildWeek(file, outDir) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const week = path.basename(file, ".json");
  const ctx = new Ctx(week);
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
  pres.author = data.author || "Đoàn Nguyễn Bảo Quyên";
  pres.title = data.deckTitle || week;
  pres.subject = "MKT1107 Nghiên cứu Marketing";
  defineLayouts(pres);
  ctx.section = "Mở đầu";
  pres.addSection({ title: ctx.section });
  for (const s of data.slides) {
    ctx.n++;
    if (s.type === "section") {
      ctx.section = [s.tag, s.title].filter(Boolean).map(plain).join(" · ").slice(0, 80);
      pres.addSection({ title: ctx.section });
    }
    const fn = L[s.type];
    if (!fn) { ctx.warn(`unknown type "${s.type}"`); continue; }
    if (!s.notes || String(s.notes).trim().length < 40) ctx.warn("speaker notes missing or too short");
    const res = fn(ctx, pres, s);
    if (res && res.notesDone) continue;
    res.addNotes(s.notes || "");
  }
  const out = path.join(outDir, data.fileName || `MKT1107_${week}.pptx`);
  await pres.writeFile({ fileName: out });
  await applyTheme(out);
  return { out, warnings: ctx.warnings, slides: ctx.n };
}

(async () => {
  const dir = path.join(__dirname, "content");
  const outDir = path.join(__dirname, "output");
  fs.mkdirSync(outDir, { recursive: true });
  const sel = process.argv.slice(2);
  const files = fs.readdirSync(dir).filter((f) => /^W\d+\.json$/.test(f))
    .filter((f) => !sel.length || sel.includes(f.replace(".json", "")))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  let bad = 0;
  for (const f of files) {
    const r = await buildWeek(path.join(dir, f), outDir);
    console.log(`${f}: ${r.slides} slides -> ${path.relative(process.cwd(), r.out)}`);
    r.warnings.forEach((w) => console.log("  WARN " + w));
    bad += r.warnings.length;
  }
  if (bad) { console.log(`${bad} warning(s)`); process.exitCode = 1; }
})();
