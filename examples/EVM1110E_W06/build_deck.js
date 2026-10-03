// Buổi 6 — EVM1110E · Financial Acumen in KAM
// Deck generated from courses/EVM1110E/lessons/W06_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W06_Financial_Acumen_KAM.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 6: Financial Acumen in KAM";
const OUT = "EVM1110E_W06_Financial_Acumen_KAM.pptx";
pres.subject = "Quản trị mối quan hệ trong tổ chức sự kiện";

const W = 13.333, M = 0.6, CW = W - 2 * M;
const F = "Alexandria";
const C = {
  bg: "FBFAF4", ink: "2A2238", muted: "6E6878", line: "DCD7C8", white: "FFFFFF", band: "F3F0E6",
  green: "49B296", yellow: "FFD23B", pink: "FF5178", purple: "962B7C", blue: "09A1E5", orange: "FF9259",
  tGreen: "E1F3EE", tYellow: "FFF3C4", tPink: "FFE4EA", tPurple: "F1E1EE", tBlue: "DDF1FB", tOrange: "FFE9DE",
  // darker variants for coloured text on light backgrounds
  dOrange: "D9622B", dBlue: "0A7FB5", dPink: "E03A62", dGreen: "2E8A71",
};
const SECTIONS = [
  { key: "open", label: "Mở đầu", c: C.orange },
  { key: "s61", label: "6.1 CLV", c: C.purple },
  { key: "s62", label: "6.2 Cost-to-serve", c: C.blue },
  { key: "s63", label: "Ma trận · công bằng", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a coin (value to Nova) overlapping a smaller cost dot
function glyph(slide, x, y, s) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: s * 0.82, h: s * 0.82, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  slide.addShape(pres.shapes.OVAL, { x: x + s * 0.18, y: y + s * 0.18, w: s * 0.46, h: s * 0.46, fill: { color: C.yellow }, line: { color: C.ink, width: 1 } });
  slide.addShape(pres.shapes.OVAL, { x: x + s * 0.6, y: y + s * 0.6, w: s * 0.4, h: s * 0.4, fill: { color: C.pink }, line: { color: C.bg, width: 1 } });
}


function base(section, title, { notes, source } = {}) {
  const s = pres.addSlide();
  slideNo++;
  s.background = { color: C.bg };
  let x = M;
  SECTIONS.forEach((sec) => {
    const active = sec.key === section;
    const w = 0.28 + sec.label.length * 0.085;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 0.3, w, h: 0.32, rectRadius: 0.16,
      fill: { color: active ? sec.c : C.bg }, line: { color: active ? sec.c : C.line, width: 0.75 } });
    T(s, sec.label, { x, y: 0.3, w, h: 0.32, fontSize: 10, bold: active, color: active ? dark(sec.c) : C.muted, align: "center", valign: "middle" });
    x += w + 0.12;
  });
  glyph(s, W - M - 0.42, 0.24, 0.42);
  if (title) T(s, title, { x: M, y: 0.85, w: CW, h: 1.05, fontSize: 26, bold: true, valign: "middle", fit: "shrink" });
  if (source) T(s, source, { x: M, y: 6.95, w: CW - 2.2, h: 0.3, fontSize: 10, color: C.muted, valign: "middle" });
  T(s, `EVM1110E · Buổi 6   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
  if (notes) s.addNotes(notes);
  return s;
}

function card(slide, x, y, w, h, fill, line, lw) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: line || fill, width: lw || 1 } });
}
function pill(slide, x, y, w, h, fill, text, o = {}) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: h / 2, fill: { color: fill }, line: { color: o.line || fill, width: o.lw || 1 } });
  T(slide, text, Object.assign({ x: x + 0.08, y, w: w - 0.16, h, fontSize: 13, bold: true, color: o.color || dark(fill), align: "center", valign: "middle" }, o.text || {}));
}
function badge(slide, x, y, d, color, text, textColor, size) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  T(slide, text, { x, y, w: d, h: d, fontSize: size || d * 34, bold: true, color: textColor || dark(color), align: "center", valign: "middle" });
}
function line(slide, x1, y1, x2, y2, color, width, o = {}) {
  const opt = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1) || 0.001, h: Math.abs(y2 - y1) || 0.001,
    line: { color, width: width || 2, endArrowType: o.end, beginArrowType: o.begin, dashType: o.dash } };
  if (x2 < x1) opt.flipH = true;
  if (y2 < y1) opt.flipV = true;
  slide.addShape(pres.shapes.LINE, opt);
}
const arrow = (s, x1, y1, x2, y2, c, w) => line(s, x1, y1, x2, y2, c, w || 2.5, { end: "triangle" });
function bowtieIcon(slide, x, y, s, c1, c2) {
  slide.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x, y, w: s * 0.5, h: s * 0.62, rotate: 90, fill: { color: c1 }, line: { color: c1, width: 0 } });
  slide.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: x + s * 0.5, y, w: s * 0.5, h: s * 0.62, rotate: 270, fill: { color: c2 }, line: { color: c2, width: 0 } });
}
function bullets(items) {
  return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } }));
}
// Simple table: cols = [{w, head, fill, color}], rows = [[...cells]]
function table(slide, x, y, cols, rows, { rowH, size = 14, headH = 0.55, firstBold = true } = {}) {
  let cx = x;
  cols.forEach((c) => {
    if (c.head) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx, y, w: c.w - 0.1, h: headH, rectRadius: 0.12, fill: { color: c.fill }, line: { color: c.fill, width: 0 } });
      T(slide, c.head, { x: cx + 0.18, y, w: c.w - 0.46, h: headH, fontSize: 15, bold: true, color: c.color || dark(c.fill), valign: "middle" });
    }
    cx += c.w;
  });
  let cy = y + headH + 0.12;
  const totalW = cols.reduce((a, c) => a + c.w, 0) - 0.1;
  rows.forEach((r, i) => {
    const h = Array.isArray(rowH) ? rowH[i] : rowH;
    if (i % 2 === 0) slide.addShape(pres.shapes.RECTANGLE, { x, y: cy, w: totalW, h, fill: { color: C.band }, line: { color: C.band, width: 0 } });
    let rx = x;
    r.forEach((cell, j) => {
      T(slide, cell, { x: rx + 0.18, y: cy, w: cols[j].w - 0.36, h, fontSize: size, bold: firstBold && j === 0, valign: "middle", color: cols[j].textColor || C.ink });
      rx += cols[j].w;
    });
    cy += h + 0.06;
  });
  return cy;
}


function breakSlide() {
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink].forEach((c, i) =>
    s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 6   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}
function exitTicket(s, qs, bridge) {
  const cols = [C.purple, C.blue];
  qs.forEach((q, i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, cols[i], String(i + 1));
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, bridge, { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}
function refSlides(refs, file, per) {
  const parts = [];
  for (let i = 0; i < refs.length; i += per) parts.push(refs.slice(i, i + per));
  parts.forEach((part, pi) => {
    const s = base("end", parts.length > 1 ? `Tài liệu tham khảo (${pi + 1}/${parts.length})` : "Tài liệu tham khảo", {
      source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): " + file + ", mục 6.",
      notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.",
    });
    const rh = Math.min(0.95, 4.7 / part.length);
    part.forEach(([k, r], i) => {
      const y = 1.95 + i * rh;
      T(s, k, { x: M, y, w: 0.7, h: rh - 0.08, fontSize: 12, bold: true, color: C.purple, valign: "middle" });
      T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: rh - 0.08, fontSize: 12, valign: "middle" });
    });
  });
}
const LECTURER = "Giảng viên: Đoàn Nguyễn Bảo Quyên";
function summary3(items, s, smp) {
  const cols = [[C.purple, C.tPurple], [C.blue, C.tBlue], [C.pink, C.tPink]];
  const n = items.length, gap = 0.2, rh = (smp ? 3.3 : 4.4) / n;
  items.forEach(([k, t], i) => {
    const y = 2.0 + i * rh, [c, f] = cols[i % 3];
    card(s, M, y, CW, rh - gap, f, c, 1.5);
    badge(s, M + 0.25, y + (rh - gap - 0.75) / 2, 0.75, c, k, null, k.length > 2 ? 13 : 18);
    T(s, t, { x: M + 1.25, y, w: CW - 1.5, h: rh - gap, fontSize: 17, valign: "middle" });
  });
  if (smp) {
    card(s, M, 5.45, CW, 1.1, C.tYellow, C.yellow);
    T(s, smp, { x: M + 0.35, y: 5.45, w: CW - 0.7, h: 1.1, fontSize: 15, valign: "middle" });
  }
}
function titleSlide(n, sub, extra, art, notes) {
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  art(s);
  pill(s, M, 1.0, 2.9, 0.46, C.yellow, `EVM1110E  ·  Buổi ${n} / 15`, { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, sub, { x: M, y: 3.75, w: 6.6, h: 1.0, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [{ text: extra, options: { breakLine: true } }, { text: "Khoa Marketing · UEF", options: { breakLine: true } }, { text: LECTURER }],
    { x: M, y: 5.0, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes(notes);
}
// ───────────────────────── helpers ─────────────────────────
// Margin × cost-to-serve matrix; returns geometry for placing dots
function ctsMatrix(s, x, y, w, h, o = {}) {
  const ax = 0.45, gx = x + ax, gw = w - ax, gh = h - ax, cw = gw / 2, ch = gh / 2, fs = o.fs || 15;
  const cells = [["Passive", "giữ gìn, đầu tư quan hệ", C.tGreen, C.green, 0, 0], ["Carriage trade", "kiểm soát chi phí phục vụ", C.tBlue, C.blue, 1, 0], ["Bargain basement", "phục vụ chuẩn hóa, hiệu quả", C.band, C.muted, 0, 1], ["Aggressive", "cùng khách giảm chi phí / điều chỉnh phạm vi, giá", C.tPink, C.pink, 1, 1]];
  cells.forEach(([t, d, f, c, i, j]) => {
    s.addShape(pres.shapes.RECTANGLE, { x: gx + i * cw, y: y + j * ch, w: cw - 0.05, h: ch - 0.05, fill: { color: f }, line: { color: c, width: 1 } });
    if (!o.bare) T(s, o.short ? [{ text: t, options: { bold: true } }] : [{ text: t, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: fs - 3 } }],
      { x: gx + i * cw + 0.15, y: y + j * ch + 0.1, w: cw - 0.35, h: o.short ? 0.4 : ch - 0.25, fontSize: fs, valign: "top", color: c === C.muted ? C.muted : C.ink });
  });
  line(s, x + 0.3, y + gh, x + 0.3, y, C.muted, 1.5, { end: "triangle" });
  T(s, "Biên lợi nhuận gộp →", { x: x - gh / 2 + 0.05, y: y + gh / 2 - 0.15, w: gh, h: 0.3, fontSize: 11, color: C.muted, align: "center", rotate: 270 });
  line(s, gx, y + gh + 0.15, gx + gw, y + gh + 0.15, C.muted, 1.5, { end: "triangle" });
  T(s, "Cost-to-serve →", { x: gx, y: y + gh + 0.18, w: gw, h: 0.25, fontSize: 11, color: C.muted, align: "center" });
  return { gx, gy: y, gw, gh };
}

// ───────────────────────── 1 — Title ─────────────────────────
titleSlide(6, "Financial Acumen in KAM", "Phần 2 · Quản trị khách hàng trọng điểm — buổi 5/7", (s) => {
  const g = ctsMatrix(s, 7.9, 1.2, 4.9, 4.7, { short: true, fs: 13 });
  // x: CTS/revenue 0–12%; y: margin 0–30% (top = high)
  [["An Phát", 2300, 3.5, 18, C.purple], ["Sông Xanh", 3500, 7.1, 10, C.muted], ["MediPharm", 1200, 10, 28, C.blue], ["Bright Future", 600, 3.3, 20, C.green], ["Bếp Việt", 1800, 6.1, 16, C.orange]].forEach(([n, rev, cts, mg, c]) => {
    const d = 0.25 + rev / 3500 * 0.45, px = g.gx + (cts <= 5 ? cts / 5 * 0.5 : 0.5 + (cts - 5) / 7 * 0.5) * g.gw, py = g.gy + (mg >= 15 ? (1 - (mg - 15) / 15) * 0.5 : 0.5 + (1 - mg / 15) * 0.5) * g.gh;
    const cx = Math.min(px, g.gx + g.gw - 0.45), cy = Math.max(py, g.gy + 0.75) + (n === "Bright Future" ? -0.45 : 0);
    s.addShape(pres.shapes.OVAL, { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fill: { color: c }, line: { color: C.white, width: 1.5 } });
  });
}, "Slide 1. Buổi 6 — Nova tính giá trị của khách hàng với Nova và chi phí phục vụ, để quan hệ công bằng hai chiều.\nAlt-text: ma trận biên lợi nhuận gộp × cost-to-serve với năm chấm tròn — năm khách hàng của Buổi 2, kích thước theo doanh thu.");

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Doanh thu lớn nhất chưa chắc đáng giá nhất", {
    source: "Số liệu GIẢ ĐỊNH — dùng lại năm khách hàng của Buổi 2.",
    notes: "S1 — Khởi động (5 phút). Chiếu: “Địa ốc Sông Xanh: doanh thu cho Nova 3,5 tỷ/năm. Ngân hàng An Phát: 2,3 tỷ/năm.”\nGiơ tay: “Khách hàng nào đáng giá hơn với Nova?”\nChốt: “Doanh thu chỉ là một phần. Cần biết: lãi bao nhiêu, tốn bao nhiêu để phục vụ, và ở lại bao lâu. Hôm nay ta tính.”",
  });
  const cw = (CW - 0.3) / 2;
  [["Địa ốc Sông Xanh", "3,5 tỷ", 1.0, C.orange, C.tOrange, C.dOrange], ["Ngân hàng An Phát", "2,3 tỷ", 0.66, C.purple, C.tPurple, C.purple]].forEach(([n, v, p, c, f, dc], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 2.7, f, c, 1.5);
    T(s, n, { x: x + 0.35, y: 2.2, w: cw - 0.7, h: 0.5, fontSize: 17, bold: true, color: dc });
    T(s, v, { x: x + 0.35, y: 2.75, w: cw - 0.7, h: 1.0, fontSize: 50, bold: true, color: dc });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.35, y: 3.95, w: (cw - 0.7) * p, h: 0.45, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, "doanh thu/năm", { x: x + 0.35, y: 4.4, w: cw - 0.7, h: 0.3, fontSize: 12, color: C.muted });
  });
  T(s, "Khách hàng nào đáng giá hơn với Nova?", { x: M, y: 4.95, w: CW, h: 0.6, fontSize: 21, bold: true, align: "center" });
  const q = [["lãi bao nhiêu?", C.green], ["tốn bao nhiêu để phục vụ?", C.blue], ["ở lại bao lâu?", C.pink]];
  const qw = (CW - 0.6) / 3;
  q.forEach(([t, c], i) => pill(s, M + i * (qw + 0.3), 5.75, qw, 0.7, c, t, { text: { fontSize: 16 } }));
}

// ───────────────────────── 3 — why CLV ─────────────────────────
{
  const s = base("s61", "CLV giúp phân bổ nguồn lực cho quan hệ dài hạn", {
    source: "F01: Gupta et al. (2006), Journal of Service Research, 9(2), 139–155.",
    notes: "Gupta et al. (2006): khi doanh thu đến từ quan hệ dài hạn, marketing nhằm tối đa hóa CLV và customer equity (tổng CLV của mọi khách hàng); CLV dùng để phân bổ nguồn lực cho thu hút, giữ chân, bán thêm.\nNối Buổi 2: chọn Key Account là quyết định phân bổ nguồn lực.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.05, cw, 2.4, C.tPurple, C.purple, 1.5);
  T(s, [{ text: "CLV", options: { bold: true, fontSize: 36, color: C.purple, breakLine: true } }, { text: "customer lifetime value — giá trị trọn đời của một khách hàng", options: { fontSize: 16 } }], { x: M + 0.35, y: 2.05, w: cw - 0.7, h: 2.4, valign: "middle", paraSpaceAfter: 4 });
  card(s, M + cw + 0.3, 2.05, cw, 2.4, C.tBlue, C.blue, 1.5);
  T(s, [{ text: "Customer equity", options: { bold: true, fontSize: 30, color: C.dBlue, breakLine: true } }, { text: "tổng CLV của mọi khách hàng", options: { fontSize: 16 } }], { x: M + cw + 0.65, y: 2.05, w: cw - 0.7, h: 2.4, valign: "middle", paraSpaceAfter: 4 });
  T(s, "CLV dùng để phân bổ nguồn lực cho…", { x: M, y: 4.7, w: CW, h: 0.45, fontSize: 16, bold: true, color: C.muted });
  const q = [["Thu hút", C.green], ["Giữ chân", C.purple], ["Bán thêm", C.blue]];
  const qw = (CW - 0.6) / 3;
  q.forEach(([t, c], i) => pill(s, M + i * (qw + 0.3), 5.25, qw, 0.75, c, t, { text: { fontSize: 18 } }));
  T(s, "Nối Buổi 2: chọn Key Account là quyết định phân bổ nguồn lực.", { x: M, y: 6.15, w: CW, h: 0.4, fontSize: 14, italic: true, color: C.muted, align: "center" });
}

// ───────────────────────── 4 — net contribution ─────────────────────────
{
  const s = base("s61", "CLV tính trên đóng góp ròng, không trên doanh thu", {
    source: "Ví dụ An Phát: GIẢ ĐỊNH.",
    notes: "m = lợi nhuận gộp − cost-to-serve riêng của khách hàng. Với An Phát: 2.300 × 18% = 414; 414 − 80 = 334 triệu.\nLỗi hay gặp ở Thực hành 1: dùng doanh thu thay cho m → hỏi “Nova giữ lại bao nhiêu sau khi trả nhà cung cấp và chi phí phục vụ?”",
  });
  const st = [["Doanh thu", "2.300", C.band, C.muted], ["× biên gộp 18%", "= 414", C.tBlue, C.blue], ["− cost-to-serve", "80", C.tPink, C.pink], ["m · đóng góp ròng", "= 334", C.tPurple, C.purple]];
  const cw = (CW - 0.9) / 4;
  st.forEach(([h, v, f, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.2, cw, 2.5, f, c, i === 3 ? 3 : 1.5);
    T(s, h, { x: x + 0.2, y: 2.35, w: cw - 0.4, h: 0.5, fontSize: 16, bold: true, align: "center", color: i === 0 ? C.muted : C.ink });
    T(s, v, { x: x + 0.2, y: 3.0, w: cw - 0.4, h: 1.0, fontSize: 38, bold: true, align: "center", color: i === 3 ? C.purple : C.ink });
    T(s, "triệu/năm", { x: x + 0.2, y: 4.0, w: cw - 0.4, h: 0.4, fontSize: 12, align: "center", color: C.muted });
  });
  card(s, M, 5.1, CW, 1.45, C.tYellow, C.yellow);
  T(s, [{ text: "m = lợi nhuận gộp − cost-to-serve riêng của khách hàng", options: { bold: true, breakLine: true } }, { text: "Doanh thu không phải tiền Nova giữ lại.", options: { fontSize: 16 } }], { x: M + 0.4, y: 5.1, w: CW - 0.8, h: 1.45, fontSize: 21, valign: "middle", align: "center" });
}

// ───────────────────────── 5 — formula ─────────────────────────
{
  const s = base("s61", "Công thức đơn giản: đóng góp × tỷ lệ giữ chân, chiết khấu về hiện tại", {
    source: "Dạng học tập [VERIFY] · F02: Berger & Nasr (1998) trình bày nhiều mô hình CLV.",
    notes: "[VERIFY] Công thức là dạng đơn giản cho học tập. Berger & Nasr (1998) trình bày nhiều mô hình CLV cho các trường hợp khác nhau; ta dùng dạng đơn giản nhất.\nNăm 1 coi như chắc chắn (r^0 = 1).",
  });
  card(s, M, 2.05, CW, 1.6, C.tPurple, C.purple, 1.5);
  T(s, [{ text: "CLV ≈ Σ", options: {} }, { text: "t = 1…T", options: { fontSize: 16, color: C.muted } }, { text: "   m × r", options: {} }, { text: "(t − 1)", options: { superscript: true } }, { text: "  /  (1 + d)", options: {} }, { text: "t", options: { superscript: true } }],
    { x: M + 0.4, y: 2.05, w: CW - 0.8, h: 1.6, fontSize: 36, bold: true, color: C.purple, align: "center", valign: "middle" });
  const v = [["m", "đóng góp ròng mỗi năm", "lợi nhuận gộp − cost-to-serve", C.purple], ["r", "tỷ lệ giữ chân", "xác suất tái ký mỗi năm; năm 1 coi như chắc chắn", C.pink], ["d", "tỷ lệ chiết khấu", "giá trị tiền theo thời gian", C.blue], ["T", "số năm xem xét", "ví dụ 5 năm", C.green]];
  const cw = (CW - 0.9) / 4;
  v.forEach(([k, h, d, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 3.95, cw, 2.6, C.white, c, 1.5);
    badge(s, x + cw / 2 - 0.4, 4.15, 0.8, c, k, null, 24);
    T(s, h, { x: x + 0.15, y: 5.05, w: cw - 0.3, h: 0.5, fontSize: 16, bold: true, align: "center" });
    T(s, d, { x: x + 0.15, y: 5.55, w: cw - 0.3, h: 0.9, fontSize: 13, align: "center", valign: "top", color: C.muted });
  });
  pill(s, W - M - 2.0, 1.45, 2.0, 0.4, C.yellow, "[VERIFY]", { text: { fontSize: 11 } });
}

// ───────────────────────── 6 — An Phát CLV ─────────────────────────
{
  const s = base("s61", "CLV 5 năm của An Phát khoảng 926 triệu", {
    source: "GIẢ ĐỊNH: m = 334 triệu · r = 85% · d = 12% · T = 5. Tính cùng lớp.",
    notes: "Tính cùng lớp từng dòng.\nHỏi: “Nếu r giảm còn 70%, CLV giảm nhiều hay ít?” — trả lời ở slide sau.\nAlt-text: bảng năm dòng và biểu đồ cột giá trị hiện tại giảm dần qua năm năm.",
  });
  const rows = [["1", "334 / 1,12", "298,2"], ["2", "334 × 0,85 / 1,12²", "226,3"], ["3", "334 × 0,85² / 1,12³", "171,8"], ["4", "334 × 0,85³ / 1,12⁴", "130,4"], ["5", "334 × 0,85⁴ / 1,12⁵", "98,9"]];
  const cols = [{ w: 1.0, head: "Năm", fill: C.purple }, { w: 3.6, head: "Tính", fill: C.band, color: C.ink }, { w: 2.4, head: "Giá trị hiện tại", fill: C.band, color: C.ink }];
  const ey = table(s, M, 1.95, cols, rows, { rowH: 0.58, size: 16, headH: 0.5 });
  card(s, M, ey + 0.05, 6.9, 0.75, C.tPurple, C.purple, 2);
  T(s, [{ text: "CLV 5 năm  ", options: { bold: true } }, { text: "≈ 926 triệu", options: { bold: true, color: C.purple, fontSize: 24 } }], { x: M + 0.2, y: ey + 0.05, w: 6.5, h: 0.75, fontSize: 18, valign: "middle" });
  const bx = M + 7.6, bw = CW - 7.6, by = 6.2, bh = 3.8;
  const vals = [298.2, 226.3, 171.8, 130.4, 98.9], cw = bw / 5;
  vals.forEach((v, i) => {
    const h = v / 300 * bh;
    s.addShape(pres.shapes.RECTANGLE, { x: bx + i * cw + 0.1, y: by - h, w: cw - 0.2, h, fill: { color: C.purple, transparency: i * 12 }, line: { color: C.purple, width: 0 } });
    T(s, String(v).replace(".", ","), { x: bx + i * cw, y: by - h - 0.35, w: cw, h: 0.3, fontSize: 12, bold: true, align: "center" });
    T(s, "Năm " + (i + 1), { x: bx + i * cw, y: by + 0.05, w: cw, h: 0.3, fontSize: 11, color: C.muted, align: "center" });
  });
  line(s, bx, by, bx + bw, by, C.muted, 1);
  pill(s, W - M - 2.0, 1.45, 2.0, 0.4, C.yellow, "GIẢ ĐỊNH", { text: { fontSize: 11 } });
}

// ───────────────────────── 7 — retention sensitivity ─────────────────────────
{
  const s = base("s61", "Tỷ lệ giữ chân thay đổi CLV rất mạnh", {
    source: "GIẢ ĐỊNH: m = 334 triệu · d = 12% · T = 5. Tính theo công thức slide trước.",
    notes: "r = 85% → CLV ≈ 926 triệu; r = 70% → CLV ≈ 719 triệu: giảm khoảng 207 triệu (≈ 22%) chỉ vì tỷ lệ tái ký giảm 15 điểm.\nChốt: “Rất nhiều. Vì thế giữ chân — chất lượng quan hệ ở Buổi 4 — là tiền thật.”",
  });
  const d = [["r = 85%", 926, C.purple, [298.2, 226.3, 171.8, 130.4, 98.9]], ["r = 70%", 719, C.pink, [298.2, 186.4, 116.5, 72.8, 45.5]]];
  const cw = (CW - 0.3) / 2;
  d.forEach(([h, v, c, vals], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 3.4, C.white, c, 1.5);
    T(s, h, { x: x + 0.35, y: 2.2, w: 2.5, h: 0.5, fontSize: 20, bold: true, color: c });
    T(s, `CLV ≈ ${v} triệu`, { x: x + cw - 3.4, y: 2.2, w: 3.1, h: 0.5, fontSize: 20, bold: true, align: "right" });
    const bx = x + 0.4, bw = cw - 0.8, by = 5.1, bh = 2.0, bwi = bw / 5;
    vals.forEach((vv, k) => {
      const hh = vv / 300 * bh;
      s.addShape(pres.shapes.RECTANGLE, { x: bx + k * bwi + 0.12, y: by - hh, w: bwi - 0.24, h: hh, fill: { color: c }, line: { color: c, width: 0 } });
      T(s, String(vv).replace(".", ","), { x: bx + k * bwi, y: by - hh - 0.3, w: bwi, h: 0.28, fontSize: 11, align: "center" });
    });
    line(s, bx, by, bx + bw, by, C.muted, 1);
  });
  card(s, M, 5.75, CW, 0.8, C.tYellow, C.yellow);
  T(s, "Giữ chân giảm 15 điểm → CLV giảm ≈ 207 triệu (≈ 22%).", { x: M + 0.35, y: 5.75, w: CW - 0.7, h: 0.8, fontSize: 19, bold: true, valign: "middle", align: "center" });
}

// ───────────────────────── 8 — relationship = money ─────────────────────────
{
  const s = base("s61", "Quan hệ tốt là tiền thật", {
    notes: "Nối Buổi 4: trust, commitment, functional conflict → tỷ lệ tái ký → CLV.",
  });
  const st = [["Chất lượng quan hệ", "trust · commitment · functional conflict (Buổi 4)", C.purple, C.tPurple], ["Tỷ lệ tái ký r", "khách hàng ở lại năm sau", C.pink, C.tPink], ["CLV", "giá trị của khách hàng với Nova", C.yellow, C.tYellow]];
  const cw = (CW - 1.2) / 3;
  st.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.6);
    card(s, x, 2.4, cw, 2.6, f, c, 2);
    T(s, [{ text: h, options: { bold: true, fontSize: 24, breakLine: true } }, { text: d, options: { fontSize: 15 } }], { x: x + 0.3, y: 2.4, w: cw - 0.6, h: 2.6, align: "center", valign: "middle", paraSpaceAfter: 8 });
    if (i < 2) arrow(s, x + cw + 0.08, 3.7, x + cw + 0.52, 3.7, C.ink, 3);
  });
  T(s, "Đầu tư vào quan hệ không phải chi phí “mềm” — nó hiện ra trong CLV.", { x: M, y: 5.5, w: CW, h: 0.7, fontSize: 20, bold: true, align: "center" });
}

// ───────────────────────── 9 — limits ─────────────────────────
{
  const s = base("s61", "CLV là ước lượng theo giả định", {
    notes: "Kết quả phụ thuộc giả định (r, d, m) → ghi rõ giả định, thử độ nhạy.\nCLV không đo được hết giá trị vô hình (uy tín, hồ sơ năng lực, học hỏi) — ghi bên cạnh, không bỏ.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.05, cw, 4.5, C.tBlue, C.blue, 1.5);
  T(s, "Phụ thuộc giả định", { x: M + 0.35, y: 2.2, w: cw - 0.7, h: 0.6, fontSize: 24, bold: true });
  T(s, bullets(["Ghi rõ r, d, m đã dùng", "Thử độ nhạy: r thay đổi thì sao?", "Nói CLV kèm giả định — không phải con số chính xác"]), { x: M + 0.35, y: 2.95, w: cw - 0.7, h: 3.4, fontSize: 18, valign: "top", paraSpaceAfter: 14 });
  card(s, M + cw + 0.3, 2.05, cw, 4.5, C.tGreen, C.green, 1.5);
  T(s, "Không đo hết giá trị vô hình", { x: M + cw + 0.65, y: 2.2, w: cw - 0.7, h: 0.6, fontSize: 24, bold: true });
  T(s, bullets(["Uy tín, thương hiệu", "Hồ sơ năng lực", "Học hỏi mảng mới", "→ ghi bên cạnh, không bỏ"]), { x: M + cw + 0.65, y: 2.95, w: cw - 0.7, h: 3.4, fontSize: 18, valign: "top", paraSpaceAfter: 14 });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s61", "Thực hành 1 · Tính CLV của Sông Xanh và Bếp Việt", {
    source: "Phiếu W06_activity_S3_tinh_clv.md · Số liệu GIẢ ĐỊNH (khách hàng Buổi 2).",
    notes: "S3 — Thực hành 1 (20 phút): 3 · 10 · 7. Chia đôi nhóm: một nửa tính Sông Xanh, một nửa Bếp Việt.\nĐáp án: Sông Xanh m = 100, CLV ≈ 138 triệu; Bếp Việt m = 178, CLV ≈ 416 triệu (r = 75%), ≈ 494 nếu r = 85%.\nQuên chiết khấu → “1 đồng năm thứ 5 có bằng 1 đồng hôm nay?”",
  });
  const cols = [{ w: 3.0 }, { w: 2.6, head: "Sông Xanh", fill: C.orange }, { w: 2.6, head: "Bếp Việt", fill: C.green }];
  table(s, M, 1.95, cols, [
    ["Doanh thu/năm", "3.500 triệu", "1.800 triệu"],
    ["Biên lợi nhuận gộp", "10%", "16%"],
    ["Cost-to-serve riêng", "250 triệu", "110 triệu"],
    ["Tỷ lệ tái ký r", "40%", "75%"],
  ], { rowH: 0.55, size: 15, headH: 0.5 });
  card(s, M, 5.15, 8.1, 1.4, C.tYellow, C.yellow);
  T(s, [{ text: "d = 12% · T = 5 năm · ", options: { bold: true } }, { text: "Sông Xanh: CTS gồm chi phí vốn trả sau 90 ngày ~104, đấu thầu lại ~60, phát sinh ~86. Bếp Việt: thí điểm, học mảng mới." }], { x: M + 0.3, y: 5.15, w: 7.5, h: 1.4, fontSize: 13, valign: "middle" });
  const steps = [["3’", "Tính m cho hai khách hàng", C.purple], ["10’", "Nửa nhóm tính CLV 5 năm Sông Xanh, nửa kia Bếp Việt (bảng 5 dòng)", C.pink], ["7’", "Nếu Bếp Việt r = 85%? + 2 câu so sánh ba khách hàng cho anh Đức", C.blue]];
  const rx = M + 8.4, rw = CW - 8.4;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.55;
    badge(s, rx, y + 0.3, 0.8, c, t, null, 16);
    T(s, d, { x: rx + 1.0, y, w: rw - 1.0, h: 1.4, fontSize: 13, valign: "middle" });
  });
  pill(s, rx, 6.15, rw, 0.42, C.tPurple, "So với An Phát: CLV ≈ 926 triệu", { color: C.purple, text: { fontSize: 11 } });
}

breakSlide();

// ───────────────────────── 10 — sales ≠ profit ─────────────────────────
{
  const s = base("s62", "Doanh số cao không có nghĩa lợi nhuận cao", {
    source: "F03: Shapiro, Rangan, Moriarty & Ross (1987), Harvard Business Review, 65(5).",
    notes: "Shapiro et al. (1987): lợi nhuận trên từng đơn hàng, từng khách hàng khác nhau rất lớn, nhiều khi quản lý không hiểu vì sao — vì giá thực nhận và chi phí phục vụ khác nhau.",
  });
  card(s, M, 2.05, CW, 1.5, C.tBlue, C.blue);
  T(s, "“Manage customers for profits (not just sales)”", { x: M + 0.4, y: 2.05, w: CW - 0.8, h: 1.5, fontSize: 30, bold: true, italic: true, color: C.dBlue, align: "center", valign: "middle" });
  T(s, "Lợi nhuận từng khách hàng khác nhau rất lớn — vì hai thứ khác nhau:", { x: M, y: 3.85, w: CW, h: 0.5, fontSize: 17, color: C.muted, align: "center" });
  const cw = (CW - 0.3) / 2;
  [["Giá thực nhận", "sau chiết khấu, đàm phán, phát sinh không tính tiền", C.purple, C.tPurple], ["Chi phí phục vụ", "cost-to-serve — khác nhau theo từng khách hàng", C.pink, C.tPink]].forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 4.55, cw, 2.0, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, fontSize: 24, breakLine: true } }, { text: d, options: { fontSize: 15 } }], { x: x + 0.35, y: 4.55, w: cw - 0.7, h: 2.0, valign: "middle", align: "center", paraSpaceAfter: 6 });
  });
}

// ───────────────────────── 11 — whale curve ─────────────────────────
{
  const s = base("s62", "Chi phí phục vụ phụ thuộc hành vi khách hàng", {
    source: "F05: Guerreiro, Bio & Merschmann (n.d.), dẫn Kaplan & Narayanan (2001); Kaplan (1989) theo dẫn lại — chưa kiểm chứng chéo.",
    notes: "Doanh nghiệp thường biết rõ chi phí làm ra sản phẩm nhưng ít biết chi phí phục vụ khách hàng; chi phí phục vụ phụ thuộc hành vi của khách hàng.\nNghiên cứu Kanthal của Kaplan (1989), theo dẫn lại: 20% khách hàng tạo 225% lợi nhuận, 10% khách hàng gây lỗ bằng 125% lợi nhuận — “whale curve”. Chưa kiểm chứng chéo.\nAlt-text: đường cong cá voi — lợi nhuận tích lũy tăng lên 225% rồi giảm về 100%.",
  });
  pill(s, W - M - 3.0, 1.45, 3.0, 0.4, C.yellow, "CHƯA KIỂM CHỨNG CHÉO", { text: { fontSize: 11 } });
  const bx = M + 0.6, by = 6.1, bw = 6.8, bh = 3.6;
  line(s, bx, by, bx + bw, by, C.muted, 1.5, { end: "triangle" });
  line(s, bx, by, bx, by - bh - 0.2, C.muted, 1.5, { end: "triangle" });
  T(s, "% khách hàng (xếp theo lợi nhuận) →", { x: bx, y: by + 0.05, w: bw, h: 0.3, fontSize: 11, color: C.muted, align: "center" });
  const pts = [[0, 0], [0.1, 150], [0.2, 225], [0.4, 215], [0.6, 195], [0.8, 165], [0.9, 145], [1.0, 100]];
  const P = pts.map(([px, py]) => [bx + px * bw, by - py / 225 * bh]);
  for (let i = 0; i < P.length - 1; i++) line(s, P[i][0], P[i][1], P[i + 1][0], P[i + 1][1], C.purple, 4);
  line(s, bx, by - 100 / 225 * bh, bx + bw, by - 100 / 225 * bh, C.line, 1, { dash: "dash" });
  T(s, "100%", { x: bx - 0.75, y: by - 100 / 225 * bh - 0.15, w: 0.7, h: 0.3, fontSize: 11, color: C.muted, align: "right" });
  T(s, "225%", { x: P[2][0] - 0.5, y: P[2][1] - 0.45, w: 1.0, h: 0.35, fontSize: 15, bold: true, color: C.purple, align: "center" });
  const rx = M + 7.9, rw = CW - 7.9;
  card(s, rx, 2.05, rw, 1.55, C.tGreen, C.green);
  T(s, [{ text: "20% khách hàng", options: { bold: true, breakLine: true } }, { text: "tạo 225% lợi nhuận", options: { fontSize: 16 } }], { x: rx + 0.3, y: 2.05, w: rw - 0.6, h: 1.55, fontSize: 20, valign: "middle" });
  card(s, rx, 3.8, rw, 1.55, C.tPink, C.pink);
  T(s, [{ text: "10% khách hàng", options: { bold: true, breakLine: true } }, { text: "gây lỗ bằng 125% lợi nhuận", options: { fontSize: 16 } }], { x: rx + 0.3, y: 3.8, w: rw - 0.6, h: 1.55, fontSize: 20, valign: "middle" });
  T(s, "“whale curve” — Kaplan (1989), nghiên cứu Kanthal", { x: rx, y: 5.55, w: rw, h: 0.6, fontSize: 13, italic: true, color: C.muted });
}

// ───────────────────────── 12 — six hidden costs ─────────────────────────
{
  const s = base("s62", "Agency có sáu loại chi phí phục vụ ẩn", {
    source: "Nhận định của người soạn.",
    notes: "Chi phí vốn do trả chậm nối Buổi 7 (Nova phải đặt cọc nhà cung cấp trước).",
  });
  const c6 = [["Giờ đội KAM, họp", "số buổi họp, số người tham gia", C.purple, C.tPurple], ["Sửa concept nhiều vòng", "2 vòng hay 6 vòng", C.blue, C.tBlue], ["Scope creep", "phát sinh ngoài phạm vi không tính tiền — thêm hạng mục sát ngày", C.orange, C.tOrange], ["Chi phí vốn do trả chậm", "trả sau 90 ngày, Nova phải đặt cọc nhà cung cấp trước (Buổi 7)", C.pink, C.tPink], ["Đấu thầu lại mỗi năm", "làm đề xuất, pitch", C.green, C.tGreen], ["Nhân sự cấp cao phải có mặt", "CEO, trưởng bộ phận", C.purple, C.tPurple]];
  const cw = (CW - 0.6) / 3;
  c6.forEach(([h, d, c, f], i) => {
    const x = M + (i % 3) * (cw + 0.3), y = 2.0 + Math.floor(i / 3) * 2.3;
    card(s, x, y, cw, 2.1, f, c, i === 3 ? 3 : 1.5);
    badge(s, x + 0.25, y + 0.25, 0.6, c, String(i + 1), null, 16);
    T(s, h, { x: x + 1.0, y: y + 0.2, w: cw - 1.2, h: 0.7, fontSize: 17, bold: true, valign: "middle" });
    T(s, d, { x: x + 0.25, y: y + 1.0, w: cw - 0.5, h: 1.0, fontSize: 14, valign: "top" });
  });
}

// ───────────────────────── 13 — cost of capital ─────────────────────────
{
  const s = base("s62", "Trả chậm 90 ngày tốn khoảng 104 triệu chi phí vốn", {
    source: "Tính nhanh GIẢ ĐỊNH: chi phí vốn 12%/năm.",
    notes: "Sông Xanh trả sau 90 ngày trên 3.500 triệu, chi phí vốn 12%/năm → khoảng 3.500 × 12% × 90/365 ≈ 104 triệu/năm — chỉ riêng chi phí vốn.\nSo với lợi nhuận gộp của Sông Xanh: 350 triệu.",
  });
  const t = [["3.500", "triệu doanh thu", C.orange], ["× 12%", "chi phí vốn/năm", C.blue], ["× 90/365", "số ngày chờ tiền", C.purple], ["≈ 104", "triệu/năm", C.pink]];
  const cw = (CW - 0.9) / 4;
  t.forEach(([v, d, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.2, cw, 2.4, i === 3 ? C.tPink : C.white, c, i === 3 ? 3 : 1.5);
    T(s, v, { x: x + 0.15, y: 2.4, w: cw - 0.3, h: 1.2, fontSize: 40, bold: true, align: "center", color: i === 3 ? C.dPink : C.ink, valign: "middle" });
    T(s, d, { x: x + 0.15, y: 3.65, w: cw - 0.3, h: 0.6, fontSize: 15, align: "center", color: C.muted });
  });
  card(s, M, 5.0, CW, 1.55, C.tYellow, C.yellow);
  T(s, [{ text: "Chỉ riêng chi phí vốn ", options: {} }, { text: "≈ 104 triệu", options: { bold: true } }, { text: " — gần 1/3 lợi nhuận gộp 350 triệu của Sông Xanh." }], { x: M + 0.4, y: 5.0, w: CW - 0.8, h: 1.55, fontSize: 21, valign: "middle", align: "center" });
}

// ───────────────────────── 14 — The Drum ─────────────────────────
{
  const s = base("s62", "Agency khắp nơi gặp trả chậm và phát sinh ngoài phạm vi", {
    source: "F07 → S19 (Buổi 7): The Drum (22/5/2025). Chưa kiểm chứng chéo; agency marketing ở Mỹ, không phải event agency.",
    notes: "Minh họa quốc tế: khảo sát 273 lãnh đạo agency ở Mỹ: 97% gặp khách trả chậm; 57% mất 1.000–5.000 USD/tháng do scope creep.\nChưa kiểm chứng chéo; không phải event agency — dùng để minh họa, không suy rộng.",
  });
  pill(s, M, 1.95, 4.4, 0.42, C.yellow, "MINH HỌA QUỐC TẾ · CHƯA KIỂM CHỨNG CHÉO", { text: { fontSize: 11 } });
  T(s, "Khảo sát 273 lãnh đạo agency ở Mỹ", { x: M, y: 2.55, w: CW, h: 0.5, fontSize: 18, color: C.muted });
  const cw = (CW - 0.3) / 2;
  [["97%", "gặp khách hàng trả chậm", C.pink, C.tPink, C.dPink], ["57%", "mất 1.000–5.000 USD/tháng do scope creep", C.blue, C.tBlue, C.dBlue]].forEach(([v, d, c, f, dc], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 3.25, cw, 3.3, f, c, 1.5);
    T(s, v, { x: x + 0.35, y: 3.5, w: cw - 0.7, h: 1.6, fontSize: 80, bold: true, color: dc, align: "center" });
    T(s, d, { x: x + 0.35, y: 5.15, w: cw - 0.7, h: 1.1, fontSize: 19, align: "center", valign: "top" });
  });
}

// ───────────────────────── 15 — matrix origin ─────────────────────────
{
  const s = base("s63", "Ma trận đặt khách hàng theo biên lợi nhuận và chi phí phục vụ", {
    source: "F03: Shapiro et al. (1987) · F04: Ang & Taylor (2005). Trục dọc biên lợi nhuận gộp: biến thể của môn.",
    notes: "Ma trận của Shapiro et al. (1987) dùng hai trục giá thực nhận và chi phí phục vụ; Ang & Taylor (2005) ghi nhận đây là mô hình đầu tiên gần với lợi nhuận khách hàng: khách chi phí phục vụ thấp mà trả giá cao là có lợi nhất.\nMôn dùng biên lợi nhuận gộp thay cho giá thực nhận (quyết định của giảng viên).",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.05, cw, 2.4, C.white, C.line);
  T(s, [{ text: "Shapiro et al. (1987)", options: { bold: true, fontSize: 20, breakLine: true } }, { text: "trục dọc: giá thực nhận", options: { fontSize: 16, breakLine: true } }, { text: "trục ngang: chi phí phục vụ", options: { fontSize: 16 } }], { x: M + 0.35, y: 2.05, w: cw - 0.7, h: 2.4, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + cw + 0.3, 2.05, cw, 2.4, C.tPink, C.pink, 1.5);
  T(s, [{ text: "Biến thể của môn", options: { bold: true, fontSize: 20, breakLine: true } }, { text: "trục dọc: biên lợi nhuận gộp", options: { fontSize: 16, bold: true, breakLine: true } }, { text: "trục ngang: cost-to-serve / doanh thu", options: { fontSize: 16 } }], { x: M + cw + 0.65, y: 2.05, w: cw - 0.7, h: 2.4, valign: "middle", paraSpaceAfter: 6 });
  card(s, M, 4.75, CW, 1.8, C.tYellow, C.yellow);
  T(s, [{ text: "Ang & Taylor (2005): ", options: { bold: true } }, { text: "mô hình đầu tiên gần với lợi nhuận khách hàng — khách chi phí phục vụ thấp mà trả giá cao là có lợi nhất." }], { x: M + 0.4, y: 4.75, w: CW - 0.8, h: 1.8, fontSize: 19, valign: "middle" });
}

// ───────────────────────── 16 — four quadrants ─────────────────────────
{
  const s = base("s63", "Bốn ô, bốn hướng hành động", {
    source: "Tên ô theo nguồn thứ cấp [VERIFY]; hướng hành động: nhận định của người soạn.",
    notes: "Chiếu suốt S6. [VERIFY] tên bốn ô — mới có từ nguồn thứ cấp.\nAlt-text: ma trận 2×2 — dọc biên lợi nhuận gộp, ngang cost-to-serve. Trên trái Passive, trên phải Carriage trade, dưới trái Bargain basement, dưới phải Aggressive.",
  });
  ctsMatrix(s, M, 2.0, 8.0, 4.75, { fs: 18 });
  const rx = M + 8.4, rw = CW - 8.4;
  card(s, rx, 2.0, rw, 2.0, C.tYellow, C.yellow);
  T(s, [{ text: "Ngưỡng ở Thực hành 2", options: { bold: true, breakLine: true } }, { text: "biên gộp 15% · cost-to-serve / doanh thu 5%", options: { fontSize: 14 } }], { x: rx + 0.25, y: 2.0, w: rw - 0.5, h: 2.0, fontSize: 16, valign: "middle", paraSpaceAfter: 4 });
  card(s, rx, 4.25, rw, 2.05, C.white, C.line);
  T(s, [{ text: "Ma trận cho thấy ", options: {} }, { text: "vì sao", options: { bold: true } }, { text: " một khách hàng lời hay lỗ — không chỉ " }, { text: "ai", options: { bold: true } }, { text: "." }], { x: rx + 0.25, y: 4.25, w: rw - 0.5, h: 2.05, fontSize: 16, valign: "middle" });
  pill(s, W - M - 2.2, 1.45, 2.2, 0.4, C.yellow, "[VERIFY] tên ô", { text: { fontSize: 11 } });
}

// ───────────────────────── 17 — no unprofitable sales ─────────────────────────
{
  const s = base("s63", "Không bán lỗ cho khách hàng nào", {
    source: "F06: McDonald — câu trong bảng tự đánh giá (Z05, E04).",
    notes: "Câu tự đánh giá trong bài của McDonald. Cost-to-serve là điều kiện để value proposition bền vững; nối Buổi 13.",
  });
  card(s, M, 2.1, CW, 2.8, C.tPink, C.pink);
  T(s, [{ text: "“We do not sell unprofitably to any customer. We analyze our cost-to-serve customer figures to be sure of this.”", options: { italic: true, bold: true, breakLine: true } }, { text: "— McDonald, bảng tự đánh giá KAM", options: { fontSize: 14, color: C.muted, bold: false, italic: false } }],
    { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 2.8, fontSize: 26, align: "center", valign: "middle", paraSpaceAfter: 10 });
  card(s, M, 5.2, CW, 1.35, C.tYellow, C.yellow);
  T(s, "Value proposition chỉ bền vững khi chính agency cũng có lãi — nối Buổi 13.", { x: M + 0.4, y: 5.2, w: CW - 0.8, h: 1.35, fontSize: 19, bold: true, align: "center", valign: "middle" });
}

// ───────────────────────── 18 — reduce together ─────────────────────────
{
  const s = base("s63", "Nhưng giảm chi phí phục vụ cùng khách hàng", {
    source: "Nhận định của người soạn — “bilateral benefits and fair relationships”.",
    notes: "Không ép khách: nhiều chi phí phục vụ giảm được khi cùng khách hàng thay đổi cách làm.\nNói: “Công bằng là cả hai cùng thấy quan hệ đáng giữ.”\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const a = [["Lịch duyệt rõ", "ít vòng sửa concept", C.purple, C.tPurple], ["Gộp sự kiện", "một gói năm thay vì từng lần", C.blue, C.tBlue], ["Thanh toán theo tiến độ", "ví dụ cọc 30% – 40% – 30%", C.pink, C.tPink], ["Phạm vi viết rõ", "giảm scope creep", C.green, C.tGreen]];
  const cw = (CW - 0.3) / 2;
  a.forEach(([h, d, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.0 + Math.floor(i / 2) * 1.65;
    card(s, x, y, cw, 1.45, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, fontSize: 20, breakLine: true } }, { text: d, options: { fontSize: 15 } }], { x: x + 0.35, y, w: cw - 0.7, h: 1.45, valign: "middle", paraSpaceAfter: 4 });
  });
  card(s, M, 5.45, CW, 1.1, C.tYellow, C.yellow);
  T(s, "Công bằng là cả hai cùng thấy quan hệ đáng giữ.", { x: M + 0.4, y: 5.45, w: CW - 0.8, h: 1.1, fontSize: 22, bold: true, align: "center", valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s63", "Thực hành 2 · Ma trận năm khách hàng của Nova", {
    source: "Phiếu W06_activity_S6_ma_tran_cost_to_serve.md · Số liệu GIẢ ĐỊNH.",
    notes: "S6 — Thực hành 2 (30 phút): 3 · 5 · 8 · 8 · 6.\nGV hỏi: “Khách hàng được gì từ đề xuất này?”\nXoay trạm: vòng 1 vai anh Đức (CEO Nova) — 🟨 câu hỏi về lợi nhuận của Nova; vòng 2 vai anh Khoa (ngân sách – mua sắm An Phát) — 🟥 lo ngại “đề xuất này có công bằng với khách hàng không?”",
  });
  const cols = [{ w: 2.0, head: "Khách hàng", fill: C.pink }, { w: 1.5, head: "Doanh thu", fill: C.band, color: C.ink }, { w: 0.95, head: "Biên", fill: C.band, color: C.ink }, { w: 0.95, head: "CTS", fill: C.band, color: C.ink }, { w: 1.2, head: "CTS/DT", fill: C.band, color: C.ink }, { w: 2.2, head: "Hành vi", fill: C.band, color: C.ink }];
  table(s, M, 1.95, cols, [
    ["An Phát", "2.300", "18%", "80", "3,5%", "đúng hạn; 2 vòng"],
    ["Sông Xanh", "3.500", "10%", "250", "7,1%", "trả 90 ngày; thầu lại"],
    ["MediPharm", "1.200", "28%", "120", "10,0%", "duyệt pháp chế"],
    ["Bright Future", "600", "20%", "20", "3,3%", "đơn giản, lặp lại"],
    ["Bếp Việt", "1.800", "16%", "110", "6,1%", "thí điểm mảng mới"],
  ], { rowH: 0.5, size: 12, headH: 0.45 });
  T(s, "Ngưỡng: biên 15% · CTS/doanh thu 5% · đơn vị triệu/năm", { x: M, y: 5.35, w: 8.8, h: 0.35, fontSize: 11, color: C.muted });
  const steps = [["5’", "Đặt 5 khách hàng lên ma trận; chấm to theo doanh thu", C.blue], ["8’", "2 khách ô bất lợi → 1 hành động bàn cùng khách: Nova được gì · khách được gì", C.pink], ["2×4’", "Xoay trạm: 🟨 anh Đức (CEO Nova) · 🟥 anh Khoa (An Phát)", C.purple], ["6’", "Về bàn, sửa một hành động", C.green]];
  const rx = M + 9.0, rw = CW - 9.0;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.18;
    badge(s, rx, y + 0.15, 0.75, c, t, null, t.length > 3 ? 12 : 15);
    T(s, d, { x: rx + 0.9, y, w: rw - 0.9, h: 1.05, fontSize: 12, valign: "middle" });
  });
}

// ───────────────────────── 19 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 6", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ SMP: phần B. Value Opportunities — CLV và vị trí trên ma trận của khách hàng dự án cũ (số giả định ghi rõ). Đây cũng là nền cho câu hỏi “logic tài chính” ở Buổi 14–15.",
  });
  summary3([["6.1", "CLV = giá trị hiện tại của đóng góp ròng trong nhiều năm; rất nhạy với tỷ lệ giữ chân → quan hệ là tiền thật."],
    ["6.2", "Doanh số ≠ lợi nhuận; cost-to-serve phụ thuộc hành vi khách hàng; agency có nhiều chi phí ẩn."],
    ["→", "Ma trận biên lợi nhuận gộp × cost-to-serve giúp chọn hành động; mục tiêu là quan hệ có lợi cho cả hai."]], s,
    [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "phần B. Value Opportunities — CLV và vị trí trên ma trận (số giả định ghi rõ); nền cho “logic tài chính” ở Buổi 14–15." }]);
}

// ───────────────────────── 20 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm.\nCần xem: (a) hiểu CLV nhạy với tỷ lệ giữ chân (định hướng dài hạn); (b) đề xuất giảm chi phí cùng khách hàng, không chỉ tăng giá.\nCâu nối Buổi 7: “Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được. Buổi sau: hiểu phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị.”",
  });
  exitTicket(s, ["Nếu tỷ lệ tái ký của An Phát giảm từ 85% xuống 70%, CLV thay đổi thế nào? Vì sao?", "Hai thành phần cost-to-serve lớn nhất với khách hàng trong dự án cũ của nhóm là gì? Có cách nào cùng khách hàng giảm chúng?"],
    [{ text: "Buổi 7: ", options: { bold: true } }, { text: "biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được — phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị." }]);
}

refSlides([
  ["F01", "Gupta, S., Hanssens, D., Hardie, B., Kahn, W., Kumar, V., Lin, N., Ravishanker, N., & Sriram, S. (2006). Modeling customer lifetime value. Journal of Service Research, 9(2), 139–155. [VERIFY: đủ tác giả]"],
  ["F02", "Berger, P. D., & Nasr, N. I. (1998). Customer lifetime value: Marketing models and applications. Journal of Interactive Marketing, 12(1), 17–30."],
  ["F03", "Shapiro, B. P., Rangan, V. K., Moriarty, R. T., & Ross, E. B. (1987). Manage customers for profits (not just sales). Harvard Business Review, 65(5), 101–108."],
  ["F04", "Ang, L., & Taylor, B. (2005). Managing customer profitability using portfolio matrices. Journal of Database Marketing & Customer Strategy Management, 12(4), 298–304."],
  ["F05", "Guerreiro, R., Bio, S. R., & Merschmann, E. V. V. (n.d.). Cost-to-serve measurement and customer profitability analysis: A case study at a food industry in Brazil [Bài hội thảo]. Intercostos."],
  ["F06", "Xem B01 (Marcos et al., 2018) và McDonald (Z05, E04) — câu “We do not sell unprofitably to any customer.”"],
  ["F07", "The Drum. (2025, May 22). Cash flow crunch: US agencies struggle to grow as late payments and scope creep bite."],
], "buoi-06_tu-lieu-tong-hop.md", 7);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
