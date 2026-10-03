// Buổi 5 — EVM1110E · CVP & Value Co-creation
// Deck generated from courses/EVM1110E/lessons/W05_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W05_CVP_Value_Cocreation.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 5: CVP & Value Co-creation";
const OUT = "EVM1110E_W05_CVP_Value_Cocreation.pptx";
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
  { key: "s51", label: "5.1 Cấu trúc CVP", c: C.purple },
  { key: "s52", label: "5.2 Năm nguồn giá trị", c: C.blue },
  { key: "s53", label: "5.3 Đồng kiến tạo", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a tiny bridge — future state (left) · offering (right) · value appraisal (deck)
function glyph(slide, x, y, s) {
  const pw = s * 0.28;
  slide.addShape(pres.shapes.RECTANGLE, { x, y: y + s * 0.3, w: pw, h: s * 0.7, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: x + s - pw, y: y + s * 0.3, w: pw, h: s * 0.7, fill: { color: C.purple }, line: { color: C.purple, width: 0 } });
  slide.addShape(pres.shapes.RECTANGLE, { x, y: y + s * 0.08, w: s, h: s * 0.16, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
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
  T(s, `EVM1110E · Buổi 5   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
  T(s, "EVM1110E · Buổi 5   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
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
function bridge(s, x, y, w, h, o = {}) {
  const bw = w * 0.36, sz = o.size || 16, dh = h * 0.3, py = y + dh + 0.12, ph = h - dh - 0.12;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: dh, rectRadius: 0.08, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, o.mid ? [{ text: "Value appraisal", options: { bold: true, breakLine: true } }, { text: o.mid, options: { fontSize: sz - 4 } }] : [{ text: "Value appraisal", options: { bold: true } }],
    { x: x + 0.2, y, w: w - 0.4, h: dh, fontSize: sz, align: "center", valign: "middle" });
  card(s, x, py, bw, ph, C.tBlue, C.blue, 1.5);
  T(s, [{ text: "Future state", options: { bold: true, breakLine: true } }, { text: o.left || "của khách hàng", options: { fontSize: sz - 3 } }], { x: x + 0.15, y: py, w: bw - 0.3, h: ph, fontSize: sz, align: "center", valign: "middle" });
  card(s, x + w - bw, py, bw, ph, C.tPurple, C.purple, 1.5);
  T(s, [{ text: "Offering · 7Ps", options: { bold: true, breakLine: true } }, { text: o.right || "của agency", options: { fontSize: sz - 3 } }], { x: x + w - bw + 0.15, y: py, w: bw - 0.3, h: ph, fontSize: sz, align: "center", valign: "middle" });
}

// ───────────────────────── 1 — Title ─────────────────────────
titleSlide(5, "CVP & Value Co-creation", "Phần 2 · Quản trị khách hàng trọng điểm — buổi 4/7", (s) => {
  bridge(s, 7.9, 1.5, 4.8, 3.6, { size: 16 });
  [C.green, C.orange, C.pink, C.blue].forEach((c, i) => s.addShape(pres.shapes.OVAL, { x: 8.9 + i * 0.75, y: 5.6, w: 0.5, h: 0.5, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "co-diagnosis · ideation · design · testing", { x: 7.9, y: 6.15, w: 4.8, h: 0.35, fontSize: 11, color: C.muted, align: "center" });
}, "Slide 1. Buổi 5 — Nova xây đề xuất giá trị cho An Phát và cùng An Phát tạo giá trị.\nAlt-text: sơ đồ cây cầu — bờ trái Future state, bờ phải Offering 7Ps, mặt cầu Value appraisal; bên dưới bốn chấm của bốn thực hành đồng kiến tạo.");

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Hồ sơ năng lực nói về Nova, đề xuất giá trị nói về khách hàng", {
    source: "Hồ sơ năng lực GIẢ ĐỊNH.",
    notes: "S1 — Khởi động (5 phút). Chiếu trang đầu hồ sơ năng lực Nova (giả định).\nGiơ tay: “Đọc xong, chị Hạnh biết An Phát sẽ được gì không?”\nChốt: “Đó là nói về Nova. Đề xuất giá trị phải nói về An Phát — và tốt nhất là nói bằng con số.”",
  });
  card(s, M, 2.1, 6.4, 4.45, C.white, C.line);
  pill(s, M + 0.35, 2.35, 2.6, 0.42, C.muted, "HỒ SƠ NĂNG LỰC NOVA", { color: C.white, text: { fontSize: 11 } });
  T(s, "Sáng tạo – Chuyên nghiệp – Tận tâm", { x: M + 0.35, y: 3.0, w: 5.7, h: 1.0, fontSize: 26, bold: true, color: C.muted });
  T(s, "Hơn 10 năm kinh nghiệm, 500 sự kiện.", { x: M + 0.35, y: 4.1, w: 5.7, h: 0.6, fontSize: 18, color: C.muted });
  ["Nova", "Nova", "Nova"].forEach((t, i) => pill(s, M + 0.35 + i * 1.4, 5.3, 1.2, 0.5, C.band, t, { color: C.muted, line: C.line, text: { fontSize: 12 } }));
  const rx = M + 6.8, rw = CW - 6.8;
  T(s, "Đọc xong, chị Hạnh biết An Phát sẽ được gì không?", { x: rx, y: 2.1, w: rw, h: 1.0, fontSize: 21, bold: true });
  card(s, rx, 3.4, rw, 3.15, C.tPurple, C.purple);
  T(s, [{ text: "Đó là nói về Nova.", options: { bold: true, breakLine: true } }, { text: "Đề xuất giá trị phải nói về ", options: {} }, { text: "An Phát", options: { bold: true, color: C.purple } }, { text: " — và tốt nhất là nói bằng con số." }],
    { x: rx + 0.35, y: 3.4, w: rw - 0.7, h: 3.15, fontSize: 20, valign: "middle", paraSpaceAfter: 8 });
}

// ───────────────────────── 3 — puffery ─────────────────────────
{
  const s = base("s51", "Phần lớn CVP tuyên bố mà không chứng minh", {
    source: "E02: Anderson, Narus & van Rossum (2006), Harvard Business Review, 84(3).",
    notes: "Anderson, Narus & van Rossum (2006): không có sự thống nhất CVP là gì; phần lớn CVP tuyên bố tiết kiệm và lợi ích mà không chứng minh, nên khách hàng coi là “marketing puffery”.",
  });
  card(s, M, 2.1, CW, 2.3, C.tPink, C.pink);
  T(s, [{ text: "“marketing puffery”", options: { bold: true, italic: true, fontSize: 44, color: C.dPink, breakLine: true } }, { text: "lời quảng cáo phóng đại — khách hàng nghe xong bỏ qua", options: { fontSize: 18 } }], { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 2.3, align: "center", valign: "middle", paraSpaceAfter: 6 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.7, cw, 1.85, C.white, C.line);
  T(s, [{ text: "Tuyên bố", options: { bold: true, breakLine: true, color: C.muted } }, { text: "“tiết kiệm”, “hiệu quả”, “chuyên nghiệp”", options: { fontSize: 17, italic: true, color: C.muted } }], { x: M + 0.35, y: 4.7, w: cw - 0.7, h: 1.85, fontSize: 20, valign: "middle" });
  card(s, M + cw + 0.3, 4.7, cw, 1.85, C.tGreen, C.green);
  T(s, [{ text: "Chứng minh", options: { bold: true, breakLine: true } }, { text: "bằng số liệu, cách đo, so với chi phí", options: { fontSize: 17 } }], { x: M + cw + 0.65, y: 4.7, w: cw - 0.7, h: 1.85, fontSize: 20, valign: "middle" });
}

// ───────────────────────── 4 — three types ─────────────────────────
{
  const s = base("s51", "Có ba kiểu CVP — nên dùng resonating focus", {
    source: "E02: Anderson, Narus & van Rossum (2006) [VERIFY: ba kiểu CVP mới đọc qua nguồn thứ cấp].",
    notes: "[VERIFY: ba kiểu CVP mới đọc qua nguồn thứ cấp]\nResonating focus: 1–2 điểm khác biệt tạo giá trị lớn nhất cho khách hàng — cần hiểu sâu khách hàng (Buổi 3).",
  });
  const t = [["All benefits", "Liệt kê mọi lợi ích", "Dễ “tuyên bố lợi ích” không có thật với khách hàng", C.muted, C.white, "✗"], ["Favorable points of difference", "Điểm khác biệt có lợi so với đối thủ", "Khác biệt chưa chắc có giá trị với khách hàng này", C.blue, C.tBlue, "~"], ["Resonating focus", "1–2 điểm khác biệt tạo giá trị lớn nhất cho khách hàng", "Cần hiểu sâu khách hàng — nên dùng", C.purple, C.tPurple, "✓"]];
  const cw = (CW - 0.6) / 3;
  t.forEach(([h, d, p, c, f, m], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 4.5, f, i === 0 ? C.line : c, i === 2 ? 3 : 1.5);
    badge(s, x + 0.3, 2.3, 0.75, i === 0 ? C.band : c, m, i === 0 ? C.muted : null, 22);
    T(s, h, { x: x + 0.3, y: 3.2, w: cw - 0.6, h: 0.9, fontSize: 20, bold: true, valign: "top", color: i === 0 ? C.muted : C.ink });
    T(s, d, { x: x + 0.3, y: 4.1, w: cw - 0.6, h: 1.0, fontSize: 15, valign: "top" });
    T(s, p, { x: x + 0.3, y: 5.2, w: cw - 0.6, h: 1.2, fontSize: 13, italic: true, color: C.muted, valign: "top" });
  });
  pill(s, W - M - 2.2, 1.45, 2.2, 0.4, C.yellow, "[VERIFY]", { text: { fontSize: 11 } });
}

// ───────────────────────── 5 — McDonald ─────────────────────────
{
  const s = base("s51", "CVP là đóng góp vào lợi nhuận của khách hàng, quy ra tiền", {
    source: "E04: McDonald, How to create financially quantified value propositions in six (actionable!) steps, SAMA.",
    notes: "Định nghĩa McDonald: CVP là chuyển các đề xuất của nhà cung cấp thành giá trị tiền, chứng minh đóng góp vào lợi nhuận của khách hàng.",
  });
  card(s, M, 2.1, CW, 2.5, C.tPurple, C.purple);
  T(s, [{ text: "“the translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.”", options: { italic: true, breakLine: true } }, { text: "— Malcolm McDonald (E04)", options: { fontSize: 14, color: C.muted, italic: false } }],
    { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 2.5, fontSize: 24, align: "center", valign: "middle", paraSpaceAfter: 8 });
  const k = [["offers", "những gì agency đưa", C.purple], ["monetary terms", "quy ra tiền", C.yellow], ["customer’s profitability", "lợi nhuận của khách hàng", C.blue]];
  const cw = (CW - 1.2) / 3;
  k.forEach(([h, d, c], i) => {
    const x = M + i * (cw + 0.6);
    pill(s, x, 5.0, cw, 0.75, c, h, { text: { fontSize: 17 } });
    T(s, d, { x, y: 5.85, w: cw, h: 0.5, fontSize: 15, align: "center", color: C.muted });
    if (i < 2) arrow(s, x + cw + 0.08, 5.375, x + cw + 0.52, 5.375, C.ink, 3);
  });
}

// ───────────────────────── 6 — bridge ─────────────────────────
{
  const s = base("s51", "CVP có ba phần: Future state – Offering – Value appraisal", {
    source: "Định nghĩa làm việc của môn — nguồn gốc cấu trúc trong đề cương chưa tìm được bản công khai.",
    notes: "Nói: “Future state là của An Phát. Offering là của Nova. Value appraisal là cây cầu — và là câu hội đồng sẽ hỏi ở Buổi 14.”\nAlt-text: hai bờ nối bằng cầu — bờ trái Future state (của khách hàng), bờ phải Offering 7Ps (của agency), mặt cầu Value appraisal.",
  });
  pill(s, M, 1.95, 3.6, 0.42, C.band, "Định nghĩa làm việc của môn", { color: C.muted, line: C.line, text: { fontSize: 12 } });
  bridge(s, M + 0.5, 2.7, CW - 1.0, 3.2, { size: 22, left: "khách hàng muốn ở đâu sau 1–3 năm?", right: "agency đưa gì?", mid: "được bao nhiêu, đo thế nào, so với chi phí?" });
  T(s, "Value appraisal là cây cầu — và là câu hội đồng sẽ hỏi ở Buổi 14.", { x: M, y: 6.05, w: CW, h: 0.5, fontSize: 18, bold: true, align: "center" });
}

// ───────────────────────── 7 — 7Ps ─────────────────────────
{
  const s = base("s51", "Offering của dịch vụ có 7Ps", {
    source: "E03: Booms & Bitner (1981), Marketing of services, AMA.",
    notes: "7Ps theo Booms & Bitner (1981) — marketing dịch vụ. Agency sự kiện là dịch vụ nên People, Process, Physical evidence đặc biệt quan trọng.",
  });
  const ps = [["Product", false], ["Price", false], ["Place", false], ["Promotion", false], ["People", true], ["Process", true], ["Physical evidence", true]];
  const cw = (CW - 1.2) / 7;
  ps.forEach(([t, hi], i) => {
    const x = M + i * (cw + 0.2), c = hi ? [C.purple, C.blue, C.pink][i - 4] : C.band;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: hi ? 2.2 : 2.9, w: cw, h: hi ? 3.0 : 2.3, rectRadius: 0.12, fill: { color: c }, line: { color: hi ? c : C.line, width: 1 } });
    badge(s, x + cw / 2 - 0.35, hi ? 2.45 : 3.15, 0.7, hi ? C.white : C.bg, "P", hi ? c : C.muted, 20);
    T(s, t, { x: x + 0.05, y: hi ? 3.4 : 4.0, w: cw - 0.1, h: 1.2, fontSize: hi ? 17 : 15, bold: true, color: hi ? C.white : C.muted, align: "center", valign: "middle" });
  });
  T(s, "4Ps của sản phẩm", { x: M, y: 5.35, w: 4 * cw + 0.6, h: 0.4, fontSize: 13, color: C.muted, align: "center" });
  T(s, "+ 3Ps của dịch vụ — nhấn với agency sự kiện", { x: M + 4 * (cw + 0.2), y: 5.35, w: 3 * cw + 0.4, h: 0.4, fontSize: 13, bold: true, color: C.purple, align: "center" });
  card(s, M, 5.9, CW, 0.7, C.tYellow, C.yellow);
  T(s, "Dịch vụ của Nova là con người và quy trình — An Phát thấy gì ở đó?", { x: M + 0.3, y: 5.9, w: CW - 0.6, h: 0.7, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 8 — CVP An Phát ─────────────────────────
{
  const s = base("s51", "CVP của Nova cho An Phát", {
    source: "Ví dụ GIẢ ĐỊNH; bối cảnh tín dụng từ Buổi 3 (C05).",
    notes: "Future state nối Buổi 3: tín dụng bị giới hạn → An Phát cần giữ khách doanh nghiệp VIP bằng giá trị ngoài lãi suất.",
  });
  pill(s, W - M - 2.0, 1.45, 2.0, 0.4, C.yellow, "GIẢ ĐỊNH", { text: { fontSize: 11 } });
  card(s, M, 1.95, CW, 0.95, C.tBlue, C.blue);
  T(s, [{ text: "Future state  ", options: { bold: true, color: C.dBlue } }, { text: "An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP trong bối cảnh tín dụng bị giới hạn" }], { x: M + 0.3, y: 1.95, w: CW - 0.6, h: 0.95, fontSize: 16, valign: "middle" });
  const ps = [["Product", "Chương trình khách hàng cả năm (hội thảo quý + gala)"], ["Price", "Gói giá theo năm"], ["Place", "Offline + livestream 80 chi nhánh"], ["Promotion", "Thư mời, bài chuyên gia"], ["People", "Đội Nova cố định"], ["Process", "Quy trình duyệt, đánh giá chung"], ["Physical evidence", "Không gian, ảnh, báo cáo"]];
  const cw = (CW - 0.45) / 4;
  ps.forEach(([h, d], i) => {
    const x = M + (i % 4) * (cw + 0.15), y = 3.05 + Math.floor(i / 4) * 1.15;
    card(s, x, y, cw, 1.02, i >= 4 ? C.tPurple : C.white, i >= 4 ? C.purple : C.line);
    T(s, [{ text: h, options: { bold: true, fontSize: 13, color: C.purple, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.15, y, w: cw - 0.3, h: 1.02, valign: "middle" });
  });
  const lx = M + 3 * (cw + 0.15);
  T(s, "Offering · 7Ps", { x: lx, y: 4.2, w: cw, h: 1.02, fontSize: 16, bold: true, color: C.purple, align: "center", valign: "middle" });
  card(s, M, 5.45, CW, 1.1, C.tYellow, C.yellow);
  T(s, [{ text: "Value appraisal  ", options: { bold: true } }, { text: "tỷ lệ CEO đến trực tiếp · số cuộc hẹn kinh doanh sau sự kiện (An Phát báo) · chi phí gộp so với từng sự kiện rời" }], { x: M + 0.3, y: 5.45, w: CW - 0.6, h: 1.1, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 9 — value appraisal ─────────────────────────
{
  const s = base("s51", "Value appraisal là câu hội đồng sẽ hỏi", {
    notes: "Nối Buổi 14 (bảo vệ kế hoạch): hội đồng sẽ hỏi “An Phát được bao nhiêu, đo thế nào?”. Không có value appraisal thì CVP chỉ là lời hứa.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  card(s, M, 2.1, CW, 2.0, C.tYellow, C.yellow);
  T(s, "“An Phát được bao nhiêu — và đo thế nào?”", { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.0, fontSize: 32, bold: true, italic: true, align: "center", valign: "middle" });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.45, cw, 2.1, C.tPink, C.pink);
  T(s, [{ text: "Chỉ số yếu", options: { bold: true, color: C.dPink, breakLine: true } }, { text: "“khách hài lòng” — Buổi 8 sẽ học ROI 6 cấp", options: { fontSize: 16 } }], { x: M + 0.35, y: 4.45, w: cw - 0.7, h: 2.1, fontSize: 20, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + cw + 0.3, 4.45, cw, 2.1, C.tGreen, C.green);
  T(s, [{ text: "Chỉ số mạnh", options: { bold: true, color: C.dGreen, breakLine: true } }, { text: "tỷ lệ CEO đến trực tiếp · số cuộc hẹn sau sự kiện · chi phí so sánh", options: { fontSize: 16 } }], { x: M + cw + 0.65, y: 4.45, w: cw - 0.7, h: 2.1, fontSize: 20, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s51", "Thực hành 1 · Viết lại CVP của Nova cho An Phát", {
    source: "Phiếu W05_activity_S3_viet_lai_cvp.md · CVP GIẢ ĐỊNH.",
    notes: "S3 — Thực hành 1 (20 phút): 4 · 12 · 4.\nGV hỏi: “Future state này là của An Phát hay của Nova?”\nNếu Value appraisal = “khách hài lòng” → gợi: tỷ lệ CEO đến trực tiếp, số cuộc hẹn sau sự kiện.\nNếu 7Ps bỏ trống People/Process → “Dịch vụ của Nova là con người và quy trình — An Phát thấy gì ở đó?”",
  });
  card(s, M, 1.95, 7.6, 2.75, C.white, C.line);
  T(s, [{ text: "CVP hiện tại", options: { bold: true, fontSize: 13, color: C.muted, breakLine: true } }, { text: "“Nova Events mang đến cho Ngân hàng An Phát: ý tưởng sáng tạo độc đáo, đội ngũ chuyên nghiệp hơn 10 năm kinh nghiệm, hệ thống âm thanh ánh sáng hiện đại, giá cả cạnh tranh, phục vụ tận tâm 24/7, mạng lưới nhà cung cấp rộng khắp, và kinh nghiệm tổ chức hơn 500 sự kiện.”", options: { fontSize: 14, italic: true } }], { x: M + 0.3, y: 1.95, w: 7.0, h: 2.75, valign: "middle", paraSpaceAfter: 4 });
  card(s, M, 4.9, 7.6, 1.7, C.tBlue, C.blue);
  T(s, [{ text: "Bối cảnh An Phát (Buổi 3): ", options: { bold: true } }, { text: "tín dụng 2026 ~15%; đối thủ mở hội thảo quý; khách DN lo chi phí vốn, dòng tiền; chủ DN trẻ; livestream 80 chi nhánh từng chậm." }], { x: M + 0.3, y: 4.9, w: 7.0, h: 1.7, fontSize: 13, valign: "middle" });
  const steps = [["4’", "Kiểu CVP nào? Gạch chân câu nói về Nova", C.blue], ["12’", "Viết lại: Future state · 7Ps · 2 chỉ số value appraisal; in đậm 1–2 điểm trọng tâm", C.purple], ["4’", "Một câu chị Hạnh có thể nói lại với ông Tuấn", C.pink]];
  const rx = M + 7.9, rw = CW - 7.9;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.55;
    badge(s, rx, y + 0.3, 0.8, c, t, null, 16);
    T(s, d, { x: rx + 1.0, y, w: rw - 1.0, h: 1.4, fontSize: 13, valign: "middle" });
  });
}

breakSlide();

// ───────────────────────── 10 — five sources ─────────────────────────
const SRC = [["Top-line", "tăng doanh thu", C.green, C.tGreen, "↑"], ["Bottom-line", "giảm / tránh chi phí", C.blue, C.tBlue, "↓"], ["HSSEQ", "health · safety · security · environment · quality", C.orange, C.tOrange, "◆"], ["Advisory", "tư vấn, tri thức", C.purple, C.tPurple, "?"], ["Customer’s customer", "giá trị cho khách của khách hàng", C.pink, C.tPink, "♥"]];
{
  const s = base("s52", "Giá trị có năm nguồn", {
    source: "Định nghĩa làm việc của môn. Gần nhất: McDonald (E04) — tăng giá trị, giảm chi phí, tránh chi phí, đóng góp cảm xúc.",
    notes: "Năm nguồn là định nghĩa làm việc của môn — nói rõ với lớp. Nguồn gần nhất tìm được: McDonald (E04) — tăng giá trị, giảm chi phí, tránh chi phí, đóng góp cảm xúc — tương ứng một phần với top-line và bottom-line (nhận định).\nAlt-text: năm biểu tượng tròn, mỗi biểu tượng một nguồn giá trị.",
  });
  const cw = (CW - 0.8) / 5;
  SRC.forEach(([h, d, c, f, ic], i) => {
    const x = M + i * (cw + 0.2);
    card(s, x, 2.05, cw, 4.5, f, c, 1.5);
    badge(s, x + cw / 2 - 0.65, 2.4, 1.3, c, ic, null, 34);
    T(s, h, { x: x + 0.1, y: 3.95, w: cw - 0.2, h: 0.9, fontSize: 18, bold: true, align: "center", valign: "middle" });
    T(s, d, { x: x + 0.15, y: 4.9, w: cw - 0.3, h: 1.4, fontSize: 14, align: "center", valign: "top" });
  });
  pill(s, W - M - 3.6, 1.45, 3.6, 0.4, C.band, "Định nghĩa làm việc của môn", { color: C.muted, line: C.line, text: { fontSize: 11 } });
}

// ───────────────────────── 11 — top/bottom line ─────────────────────────
{
  const s = base("s52", "Top-line và bottom-line: tăng doanh thu, giảm chi phí cho khách hàng", {
    source: "Ví dụ GIẢ ĐỊNH; nối Buổi 7, 8, 10.",
    notes: "Top-line: khách DN gắn bó hơn → giao dịch với An Phát tăng (cấp 4 ROI — Buổi 8).\nBottom-line: gộp sự kiện cả năm, đàm phán nhà cung cấp (Buổi 7, 10).",
  });
  const cw = (CW - 0.3) / 2;
  [["↑", "Top-line", "giúp khách hàng tăng doanh thu", "Khách doanh nghiệp gắn bó hơn → giao dịch với An Phát tăng", "Buổi 8 · cấp 4 ROI", C.green, C.tGreen], ["↓", "Bottom-line", "giúp khách hàng giảm / tránh chi phí", "Gộp sự kiện cả năm, đàm phán nhà cung cấp", "Buổi 7 · 10", C.blue, C.tBlue]].forEach(([ic, h, d, e, b, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 4.5, f, c, 1.5);
    badge(s, x + 0.35, 2.35, 1.1, c, ic, null, 36);
    T(s, [{ text: h, options: { bold: true, fontSize: 28, breakLine: true } }, { text: d, options: { fontSize: 15, color: C.muted } }], { x: x + 1.7, y: 2.3, w: cw - 2.0, h: 1.2, valign: "middle" });
    T(s, [{ text: "Với An Phát: ", options: { bold: true } }, { text: e }], { x: x + 0.35, y: 3.85, w: cw - 0.7, h: 1.6, fontSize: 18, valign: "top" });
    T(s, b, { x: x + 0.35, y: 5.75, w: cw - 0.7, h: 0.5, fontSize: 13, bold: true, color: C.muted });
  });
}

// ───────────────────────── 12 — five sources table ─────────────────────────
{
  const s = base("s52", "Năm nguồn giá trị với Nova – An Phát", {
    source: "Ví dụ GIẢ ĐỊNH · định nghĩa làm việc của môn.",
    notes: "Chiếu suốt S6 — các nhóm gắn nguồn giá trị chính cho từng bước đồng kiến tạo.",
  });
  const ex = ["Khách DN gắn bó hơn → giao dịch với An Phát tăng (Buổi 8)", "Gộp sự kiện cả năm, đàm phán nhà cung cấp (Buổi 7, 10)", "Bảo vệ dữ liệu khách mời; sự kiện xanh; chất lượng ổn định; giảm rủi ro uy tín", "Nova chia sẻ insight về khách VIP, xu hướng sự kiện B2B", "600 khách VIP được kiến thức, kết nối, trải nghiệm → An Phát được lợi"];
  SRC.forEach(([h, d, c, f], i) => {
    const y = 1.95 + i * 0.93;
    card(s, M, y, CW, 0.82, f, f);
    s.addShape(pres.shapes.RECTANGLE, { x: M, y, w: 0.14, h: 0.82, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, h, { x: M + 0.35, y, w: 2.8, h: 0.82, fontSize: 17, bold: true, valign: "middle" });
    T(s, ex[i], { x: M + 3.2, y, w: CW - 3.4, h: 0.82, fontSize: 15, valign: "middle" });
  });
}

// ───────────────────────── 13 — HSSEQ ─────────────────────────
{
  const s = base("s52", "HSSEQ: an toàn, an ninh, môi trường, chất lượng", {
    source: "Ví dụ: nhận định của người soạn; nối Buổi 9, 11.",
    notes: "Không đi sâu an toàn đám đông — ngoài phạm vi buổi này.\nVới ngân hàng, bảo vệ dữ liệu khách mời là giá trị HSSEQ rõ nhất.",
  });
  const h = [["H", "Health"], ["S", "Safety"], ["S", "Security"], ["E", "Environment"], ["Q", "Quality"]];
  const cw = (CW - 0.8) / 5;
  h.forEach(([k, t], i) => {
    const x = M + i * (cw + 0.2);
    pill(s, x, 2.05, cw, 0.9, [C.green, C.orange, C.purple, C.blue, C.pink][i], `${k} · ${t}`, { text: { fontSize: 15 } });
  });
  const ex = [["Bảo vệ dữ liệu khách mời", "security — danh sách khách của ngân hàng", C.purple, C.tPurple], ["Sự kiện xanh", "environment — giảm rác, vật liệu tái sử dụng", C.blue, C.tBlue], ["Chất lượng ổn định", "quality — livestream không lỗi, giảm rủi ro uy tín", C.pink, C.tPink]];
  const ew = (CW - 0.6) / 3;
  ex.forEach(([t, d, c, f], i) => {
    const x = M + i * (ew + 0.3);
    card(s, x, 3.3, ew, 2.4, f, c, 1.5);
    T(s, [{ text: t, options: { bold: true, fontSize: 20, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: x + 0.3, y: 3.3, w: ew - 0.6, h: 2.4, valign: "middle", paraSpaceAfter: 6 });
  });
  T(s, "Buổi 9 (rủi ro uy tín) · Buổi 11 (sự kiện bền vững)", { x: M, y: 5.95, w: CW, h: 0.45, fontSize: 14, color: C.muted, align: "center" });
}

// ───────────────────────── 14 — advisory ─────────────────────────
{
  const s = base("s52", "Advisory là nguồn giá trị agency hay quên", {
    notes: "Hỏi: “Nguồn nào agency sự kiện hay quên nhất?” — Gợi ý: advisory.\nNova làm sự kiện cho nhiều ngân hàng, nhiều ngành → có insight về khách VIP mà An Phát không có.",
  });
  s.addShape(pres.shapes.OVAL, { x: M + 0.4, y: 2.2, w: 3.6, h: 3.6, fill: { color: C.tPurple }, line: { color: C.purple, width: 3 } });
  T(s, "?", { x: M + 0.4, y: 2.2, w: 3.6, h: 3.6, fontSize: 120, bold: true, color: C.purple, align: "center", valign: "middle" });
  const rx = M + 4.6, rw = CW - 4.6;
  T(s, "Nova biết điều An Phát chưa biết:", { x: rx, y: 2.1, w: rw, h: 0.5, fontSize: 18, bold: true, color: C.muted });
  [["Insight về khách VIP", "họ đến vì gì, bỏ về lúc nào, thích gì"], ["Xu hướng sự kiện B2B", "định dạng mới, công nghệ, chi phí"], ["Kinh nghiệm từ ngành khác", "điều đã thử ở nơi khác"]].forEach(([h, d], i) => {
    const y = 2.7 + i * 1.1;
    card(s, rx, y, rw, 1.0, C.white, C.purple);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 14, color: C.muted } }], { x: rx + 0.3, y, w: rw - 0.6, h: 1.0, fontSize: 18, valign: "middle" });
  });
  T(s, "Chia sẻ tri thức là giá trị — không chỉ “làm sự kiện”.", { x: rx, y: 6.1, w: rw, h: 0.5, fontSize: 16, bold: true, color: C.purple });
}

// ───────────────────────── 15 — customer's customer ─────────────────────────
{
  const s = base("s52", "Giá trị cho khách của khách hàng", {
    source: "E07 → U10 (Buổi 9): VnExpress (5/10/2025) [nội dung được tài trợ]. Ví dụ TƯƠNG TỰ — không phải quan hệ agency.",
    notes: "VPBank dành quyền mua vé sớm concert G-DRAGON cho chủ thẻ — ngân hàng tạo giá trị cho khách của mình qua một sự kiện. Tương tự; không phải quan hệ agency.",
  });
  pill(s, W - M - 3.0, 1.45, 3.0, 0.4, C.yellow, "VÍ DỤ TƯƠNG TỰ", { text: { fontSize: 11 } });
  const n = [["Sự kiện", "concert G-DRAGON", C.orange], ["Ngân hàng", "VPBank", C.blue], ["Khách của ngân hàng", "chủ thẻ — quyền mua vé sớm", C.pink]];
  const cw = (CW - 1.2) / 3;
  n.forEach(([h, d, c], i) => {
    const x = M + i * (cw + 0.6);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.3, w: cw, h: 2.0, rectRadius: 0.15, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, [{ text: h, options: { fontSize: 14, breakLine: true } }, { text: d, options: { bold: true, fontSize: 20 } }], { x: x + 0.2, y: 2.3, w: cw - 0.4, h: 2.0, color: dark(c), align: "center", valign: "middle", paraSpaceAfter: 4 });
    if (i < 2) arrow(s, x + cw + 0.08, 3.3, x + cw + 0.52, 3.3, C.ink, 3);
  });
  card(s, M, 4.75, CW, 1.8, C.tPink, C.pink);
  T(s, [{ text: "Với An Phát: ", options: { bold: true } }, { text: "600 khách VIP được kiến thức, kết nối, trải nghiệm → khách gắn bó hơn → An Phát được lợi." }], { x: M + 0.4, y: 4.75, w: CW - 0.8, h: 1.8, fontSize: 20, valign: "middle" });
}

// ───────────────────────── 16 — co-creation ─────────────────────────
{
  const s = base("s53", "Đồng kiến tạo là khách hàng cùng làm", {
    source: "E05: Marcos-Cuevas, Nätti, Palo & Baumann (2016), Industrial Marketing Management, 56.",
    notes: "Nova không thiết kế cho An Phát mà cùng An Phát. Hiểu lầm hay gặp: mọi bước chỉ Nova làm, An Phát “duyệt”.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.1, cw, 4.45, C.white, C.line);
  T(s, "Thiết kế CHO khách hàng", { x: M + 0.35, y: 2.3, w: cw - 0.7, h: 0.6, fontSize: 22, bold: true, color: C.muted });
  pill(s, M + 0.5, 3.4, 2.2, 0.8, C.muted, "Nova làm", { color: C.white, text: { fontSize: 16 } });
  arrow(s, M + 2.8, 3.8, M + 3.7, 3.8, C.muted, 3);
  pill(s, M + 3.8, 3.4, 2.0, 0.8, C.band, "An Phát duyệt", { color: C.muted, line: C.line, text: { fontSize: 14 } });
  T(s, "✗  khách hàng chỉ duyệt", { x: M + 0.35, y: 5.3, w: cw - 0.7, h: 0.6, fontSize: 17, color: C.muted });
  card(s, M + cw + 0.3, 2.1, cw, 4.45, C.tPink, C.pink, 1.5);
  T(s, "Thiết kế CÙNG khách hàng", { x: M + cw + 0.65, y: 2.3, w: cw - 0.7, h: 0.6, fontSize: 22, bold: true, color: C.dPink });
  const cx = M + cw + 0.3 + cw / 2;
  s.addShape(pres.shapes.OVAL, { x: cx - 2.0, y: 3.2, w: 2.4, h: 1.3, fill: { color: C.purple, transparency: 25 }, line: { color: C.purple, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: cx - 0.4, y: 3.2, w: 2.4, h: 1.3, fill: { color: C.blue, transparency: 25 }, line: { color: C.blue, width: 0 } });
  T(s, "Nova", { x: cx - 2.0, y: 3.2, w: 1.5, h: 1.3, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  T(s, "An Phát", { x: cx + 0.5, y: 3.2, w: 1.5, h: 1.3, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  T(s, "✓  khách hàng cùng làm từ đầu", { x: M + cw + 0.65, y: 5.3, w: cw - 0.7, h: 0.6, fontSize: 17, bold: true });
}

// ───────────────────────── 17 — four practices ─────────────────────────
{
  const s = base("s53", "Bốn thực hành: co-diagnosis, co-ideation, co-design, co-testing", {
    source: "E05: Marcos-Cuevas et al. (2016) — định nghĩa nguyên văn, đã đọc toàn văn. Ví dụ An Phát: GIẢ ĐỊNH.",
    notes: "Chiếu suốt S6. Định nghĩa là nguyên văn Marcos-Cuevas et al. (2016).",
  });
  const cols = [{ w: 2.3 }, { w: 5.2, head: "Định nghĩa (nguyên văn)", fill: C.pink }, { w: CW - 7.5, head: "Với An Phát (ví dụ)", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["Co-diagnosis", "“Collecting and organizing information for collaborative use”", "Cùng phân tích khảo sát khách mời các năm"],
    ["Co-ideation", "“Generating and suggesting ideas, communicating and sharing, engaging”", "Workshop ý tưởng với chị Hạnh, chị Vy"],
    ["Co-design", "“Developing concepts and knowledge”", "Cùng thiết kế hành trình khách VIP"],
    ["Co-testing", "“Prototyping and improving the offering, giving feedback”", "Thí điểm một hội thảo quý; chạy thử livestream với chị Lan"],
  ], { rowH: 0.95, size: 15, headH: 0.55 });
}

// ───────────────────────── 18 — three groups ─────────────────────────
{
  const s = base("s53", "Ba nhóm: linking – materializing – institutionalizing", {
    source: "E05: Marcos-Cuevas et al. (2016), Industrial Marketing Management, 56, 97–107.",
    notes: "Linking (huy động kết nối): co-diagnosis, co-ideation, co-evaluation. Materializing (tạo ra sản phẩm): co-design, co-testing, co-launching. Institutionalizing: embedding — xây quy tắc, chuẩn mực để đồng kiến tạo thành cách làm việc.\nCơ chế chung: “sustained purposeful engagement”.\nAlt-text: sơ đồ ba tầng chồng lên nhau.",
  });
  const t = [["Institutionalizing", "embedding — quy tắc, chuẩn mực → đồng kiến tạo thành cách làm việc", C.purple, 1], ["Materializing", "co-design · co-testing · co-launching — tạo ra sản phẩm", C.pink, 2], ["Linking", "co-diagnosis · co-ideation · co-evaluation — huy động kết nối", C.blue, 3]];
  t.forEach(([h, d, c, k], i) => {
    const w = 5.0 + i * 1.6, x = M + (8.2 - w) / 2, y = 2.05 + i * 1.3;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.15, rectRadius: 0.1, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, [{ text: h, options: { bold: true, fontSize: 18, breakLine: true } }, { text: d, options: { fontSize: 12 } }], { x: x + 0.25, y, w: w - 0.5, h: 1.15, color: C.white, align: "center", valign: "middle" });
  });
  const rx = M + 8.6, rw = CW - 8.6;
  card(s, rx, 2.05, rw, 3.75, C.tYellow, C.yellow);
  T(s, [{ text: "“sustained purposeful engagement”", options: { bold: true, italic: true, fontSize: 20, breakLine: true } }, { text: "gắn kết có mục đích, bền bỉ — cơ chế chung của cả ba nhóm", options: { fontSize: 15 } }], { x: rx + 0.3, y: 2.05, w: rw - 0.6, h: 3.75, valign: "middle", paraSpaceAfter: 8 });
  T(s, "Bốn thực hành của đề cương nằm ở hai tầng dưới.", { x: M, y: 6.05, w: CW, h: 0.45, fontSize: 14, color: C.muted, align: "center" });
}

// ───────────────────────── 19 — alignment ─────────────────────────
{
  const s = base("s53", "Điều kiện đầu tiên là cùng mục đích", {
    source: "Blog Cranfield (Marcos) · E07 → U08 (Buổi 9): Znews (20/1/2025). Ví dụ TƯƠNG TỰ.",
    notes: "Blog Cranfield (Marcos): điều kiện đầu tiên là alignment of purpose — hai bên cùng mục tiêu. Đồng kiến tạo tốn công, nên dành cho Key Account (nối Buổi 2).\nVí dụ thật: Techcombank từ nhà tài trợ trở thành đồng đầu tư — đồng kiến tạo ở mức chia sẻ rủi ro – lợi ích.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  card(s, M, 2.1, CW, 1.6, C.tPurple, C.purple);
  T(s, [{ text: "alignment of purpose", options: { bold: true, italic: true, color: C.purple } }, { text: "  —  hai bên cùng mục tiêu" }], { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.6, fontSize: 28, align: "center", valign: "middle" });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.0, cw, 2.55, C.tYellow, C.yellow);
  T(s, [{ text: "Tốn công → dành cho Key Account", options: { bold: true, breakLine: true } }, { text: "nối Buổi 2: chỉ chọn tối đa hai Key Account", options: { fontSize: 15 } }], { x: M + 0.35, y: 4.0, w: cw - 0.7, h: 2.55, fontSize: 19, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + cw + 0.3, 4.0, cw, 2.55, C.tBlue, C.blue);
  T(s, [{ text: "Techcombank: nhà tài trợ → đồng đầu tư", options: { bold: true, breakLine: true } }, { text: "đồng kiến tạo ở mức chia sẻ rủi ro – lợi ích (ví dụ tương tự)", options: { fontSize: 15 } }], { x: M + cw + 0.65, y: 4.0, w: cw - 0.7, h: 2.55, fontSize: 19, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s53", "Thực hành 2 · Kế hoạch đồng kiến tạo với An Phát", {
    source: "Phiếu W05_activity_S6_dong_kien_tao.md · Tình huống GIẢ ĐỊNH.",
    notes: "S6 — Thực hành 2 (30 phút): 3 · 13 · 8 · 6. Chỉ slide bốn định nghĩa và slide năm nguồn.\nGV hỏi: “Co-diagnosis dùng thông tin gì của An Phát?”\nNếu mọi bước chỉ Nova làm → “Ở đâu An Phát cùng làm?”\nNếu mời khách VIP khảo sát mà không nói đến đồng ý → “Dữ liệu khách của ngân hàng — ai đồng ý, bảo vệ thế nào?” (HSSEQ)",
  });
  card(s, M, 1.95, CW, 0.95, C.tBlue, C.blue);
  T(s, "Chị Hạnh đồng ý thử chương trình khách hàng cả năm thay cho một gala; muốn An Phát tham gia từ đầu nhưng lo tốn thời gian đội An Phát. Có thể tham gia: chị Hạnh, chị Vy, chị Lan, anh Khoa, một nhóm nhỏ khách VIP.", { x: M + 0.3, y: 1.95, w: CW - 0.6, h: 0.95, fontSize: 13, valign: "middle" });
  const cols = [{ w: 2.2, head: "Bước", fill: C.pink }, { w: 2.5, head: "Làm gì", fill: C.band, color: C.ink }, { w: 2.6, head: "Ai · bao lâu", fill: C.band, color: C.ink }, { w: 1.9, head: "Đầu ra", fill: C.band, color: C.ink }, { w: CW - 9.2, head: "Nguồn giá trị", fill: C.band, color: C.ink }];
  table(s, M, 3.05, cols, [["Co-diagnosis", "", "", "", ""], ["Co-ideation", "", "", "", ""], ["Co-design", "", "", "", ""], ["Co-testing", "", "", "", ""]], { rowH: 0.42, size: 13, headH: 0.42 });
  const st = [["13’", "Kế hoạch 4 bước + 1 điều kiện thành công", C.pink], ["2×4’", "Xoay trạm · vai chị Hạnh · 🟨 câu hỏi · 🟥 lo ngại", C.blue], ["6’", "Về bàn, sửa một bước", C.green]];
  const sw = (CW - 0.6) / 3;
  st.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 5.6, 0.8, c, t, null, t.length > 3 ? 13 : 16);
    T(s, d, { x: x + 0.95, y: 5.5, w: sw - 0.95, h: 1.0, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── 20 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 5", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ SMP: đây là phần C. Value Propositions (Buổi 13).",
  });
  summary3([["5.1", "CVP = Future state (của khách hàng) + Offering 7Ps (của agency) + Value appraisal (giá trị có số); dùng resonating focus."],
    ["5.2", "Tìm giá trị ở năm nguồn — đừng quên advisory và khách của khách hàng."],
    ["5.3", "Đồng kiến tạo qua co-diagnosis → co-ideation → co-design → co-testing, với cùng mục đích."]], s,
    [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "đây là phần C. Value Propositions cho khách hàng từ dự án cũ của nhóm." }]);
}

// ───────────────────────── 21 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm.\nCần xem: (a) CVP nói về giá trị cho khách hàng, có 1–2 điểm trọng tâm; (b) SV nhận ra advisory hoặc customer’s customer.\nCâu nối Buổi 6: “Giá trị cho khách hàng phải đi cùng giá trị cho agency. Buổi sau: khách hàng này đáng bao nhiêu với Nova (CLV), và phục vụ họ tốn bao nhiêu (cost-to-serve)?”",
  });
  exitTicket(s, ["Viết một câu CVP cho khách hàng dự án cũ của nhóm theo kiểu resonating focus.", "Nguồn giá trị nào (trong năm nguồn) nhóm chưa từng nghĩ tới với khách hàng đó?"],
    [{ text: "Buổi 6: ", options: { bold: true } }, { text: "giá trị cho khách hàng phải đi cùng giá trị cho agency — khách hàng này đáng bao nhiêu với Nova (CLV), và phục vụ họ tốn bao nhiêu (cost-to-serve)?" }]);
}

refSlides([
  ["E01", "Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management. Kogan Page. (chương 5, 6)"],
  ["E02", "Anderson, J. C., Narus, J. A., & van Rossum, W. (2006). Customer value propositions in business markets. Harvard Business Review, 84(3), 90–99."],
  ["E03", "Booms, B. H., & Bitner, M. J. (1981). Marketing strategies and organization structures for service firms. In J. H. Donnelly & W. R. George (Eds.), Marketing of services (pp. 47–51). AMA."],
  ["E04", "McDonald, M. (n.d.). How to create financially quantified value propositions in six (actionable!) steps. Strategic Account Management Association."],
  ["E05", "Marcos-Cuevas, J., Nätti, S., Palo, T., & Baumann, J. (2016). Value co-creation practices and capabilities: Sustained purposeful engagement across B2B systems. Industrial Marketing Management, 56, 97–107."],
  ["E06", "Payne, A. F., Storbacka, K., & Frow, P. (2008). Managing the co-creation of value. Journal of the Academy of Marketing Science, 36(1), 83–96."],
  ["E07", "Xem U08, U10 (Buổi 9): Znews (2025, January 20) — Techcombank; VnExpress (2025, October 5) — VPBank, G-DRAGON [nội dung được tài trợ]."],
], "buoi-05_tu-lieu-tong-hop.md", 7);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
