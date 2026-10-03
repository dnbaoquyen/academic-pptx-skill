// Buổi 3 — EVM1110E · Understanding the Customer & Customer Journey
// Deck generated from courses/EVM1110E/lessons/W03_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W03_Customer_Understanding_Journey.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 3: Understanding the Customer & Customer Journey";
const OUT = "EVM1110E_W03_Customer_Understanding_Journey.pptx";
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
  { key: "s31", label: "3.1 Thế giới khách hàng", c: C.blue },
  { key: "s32", label: "3.2 Hành trình", c: C.pink },
  { key: "s33", label: "3.3 DMU · GRASP", c: C.purple },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a tiny three-stage journey (before · during · after)
function glyph(slide, x, y, s) {
  const d = s * 0.3, cy = y + s / 2;
  slide.addShape(pres.shapes.LINE, { x: x + d / 2, y: cy, w: s - d, h: 0.001, line: { color: C.line, width: 1.5 } });
  [C.blue, C.pink, C.purple].forEach((c, i) =>
    slide.addShape(pres.shapes.OVAL, { x: x + i * (s - d) / 2, y: cy - d / 2, w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 3   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
  T(s, "EVM1110E · Buổi 3   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
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
// ───────────────────────── 1 — Title ─────────────────────────
function journeyArt(s, x, y, w, pts) {
  const n = pts.length, step = w / (n - 1);
  line(s, x, y, x + w, y, C.line, 3);
  pts.forEach(([t, c, up], i) => {
    const px = x + i * step;
    s.addShape(pres.shapes.OVAL, { x: px - 0.22, y: y - 0.22, w: 0.44, h: 0.44, fill: { color: c }, line: { color: C.white, width: 2 } });
    T(s, t, { x: px - 0.9, y: up ? y - 0.85 : y + 0.32, w: 1.8, h: 0.5, fontSize: 11, align: "center", valign: up ? "bottom" : "top" });
  });
}
titleSlide(3, "Understanding the Customer & Customer Journey", "Phần 2 · Quản trị khách hàng trọng điểm — buổi 2/7", (s) => {
  const cx = 10.35, cy = 2.75;
  [[2.1, C.tBlue, C.blue], [1.45, C.tPink, C.pink], [0.8, C.tPurple, C.purple]].forEach(([r, f, c]) =>
    s.addShape(pres.shapes.OVAL, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color: f }, line: { color: c, width: 1.5 } }));
  T(s, "PESTEL", { x: cx - 1.0, y: cy - 1.95, w: 2.0, h: 0.35, fontSize: 12, bold: true, color: C.dBlue, align: "center" });
  T(s, "Đối thủ", { x: cx - 1.0, y: cy - 1.32, w: 2.0, h: 0.35, fontSize: 12, bold: true, color: C.dPink, align: "center" });
  T(s, "An Phát", { x: cx - 0.8, y: cy - 0.2, w: 1.6, h: 0.4, fontSize: 14, bold: true, color: C.purple, align: "center" });
  journeyArt(s, 8.1, 5.75, 4.5, [["Trước", C.blue, false], ["Trong", C.pink, false], ["Sau", C.purple, false]]);
}, "Slide 1. Buổi 3 — nhìn thế giới bằng mắt của Key Account.\nAlt-text: ba vòng tròn đồng tâm (PESTEL, đối thủ, nội bộ An Phát) và một dòng thời gian ba giai đoạn trước–trong–sau.");

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Tín dụng ngân hàng năm 2026 là chuyện của Nova", {
    source: "C05: VnEconomy (11/1/2026); VnExpress (2026) — dữ kiện thật.",
    notes: "S1 — Khởi động (5 phút). Chiếu: “Năm 2026, Ngân hàng Nhà nước định hướng tín dụng toàn hệ thống tăng khoảng 15% và kiểm soát chặt tín dụng bất động sản (VnEconomy, 11/1/2026).”\nGiơ tay: “Nova là agency sự kiện. Nova có cần biết điều này không?”\nChốt: “Có — vì An Phát cần biết. Khi tín dụng bị giới hạn, ngân hàng phải giữ khách doanh nghiệp tốt bằng cách khác. Đó có thể chính là lý do An Phát cần một chương trình khách hàng. Hôm nay: nhìn thế giới bằng mắt của khách hàng.”",
  });
  card(s, M, 2.1, 5.6, 4.45, C.tBlue, C.blue);
  pill(s, M + 0.35, 2.35, 1.9, 0.42, C.green, "DỮ KIỆN THẬT", { text: { fontSize: 11 } });
  T(s, "~15%", { x: M + 0.35, y: 2.9, w: 4.9, h: 1.2, fontSize: 64, bold: true, color: C.dBlue });
  T(s, "tăng trưởng tín dụng toàn hệ thống định hướng cho năm 2026", { x: M + 0.35, y: 4.1, w: 4.9, h: 0.8, fontSize: 16, valign: "top" });
  T(s, [{ text: "+ ", options: { bold: true } }, { text: "kiểm soát chặt tín dụng bất động sản", options: { bold: true } }], { x: M + 0.35, y: 5.0, w: 4.9, h: 0.5, fontSize: 16 });
  T(s, "Ngân hàng Nhà nước · VnEconomy, 11/1/2026", { x: M + 0.35, y: 5.75, w: 4.9, h: 0.4, fontSize: 12, italic: true, color: C.muted });
  const rx = M + 6.0, rw = CW - 6.0;
  T(s, "Nova là agency sự kiện. Nova có cần biết điều này không?", { x: rx, y: 2.1, w: rw, h: 0.9, fontSize: 21, bold: true });
  [["Có", C.green], ["Không", C.pink]].forEach(([t, c], i) => pill(s, rx + i * ((rw - 0.25) / 2 + 0.25), 3.15, (rw - 0.25) / 2, 0.75, c, t, { text: { fontSize: 18 } }));
  card(s, rx, 4.25, rw, 2.3, C.tYellow, C.yellow);
  T(s, [{ text: "Có — vì An Phát cần biết. ", options: { bold: true } }, { text: "Tín dụng bị giới hạn → ngân hàng phải giữ khách doanh nghiệp tốt bằng cách khác → có thể chính là lý do An Phát cần một chương trình khách hàng." }],
    { x: rx + 0.3, y: 4.25, w: rw - 0.6, h: 2.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 3 — Stage A ─────────────────────────
{
  const s = base("s31", "Hiểu khách hàng hơn chính họ", {
    source: "C01: Davies, The value planning framework for key accounts, KAM Forum (Cranfield).",
    notes: "Theo Cranfield KAM Forum, bước đầu của kế hoạch Key Account là Stage A — phân tích thế giới của khách hàng.\nGóc nhìn của buổi: Nova phân tích thế giới của Key Account (An Phát), không phải thị trường của Nova.",
  });
  card(s, M, 2.1, CW, 2.0, C.tBlue, C.blue);
  T(s, [{ text: "Stage A", options: { fontSize: 16, color: C.dBlue, bold: true, breakLine: true } }, { text: "“analysing the customer’s world”", options: { fontSize: 34, bold: true, italic: true } }],
    { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 2.0, align: "center", valign: "middle", paraSpaceAfter: 4 });
  const it = [["Thị trường của Nova", "agency khác, giá dịch vụ sự kiện", C.muted, C.white, "✗"], ["Thế giới của An Phát", "ngành ngân hàng, đối thủ của An Phát, người trong An Phát", C.blue, C.tBlue, "✓"]];
  const cw = (CW - 0.3) / 2;
  it.forEach(([h, d, c, f, m], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 4.45, cw, 2.1, f, i ? c : C.line, 1.5);
    T(s, [{ text: `${m}  ${h}`, options: { bold: true, fontSize: 22, color: i ? C.ink : C.muted, breakLine: true } }, { text: d, options: { fontSize: 15, color: i ? C.ink : C.muted } }], { x: x + 0.35, y: 4.45, w: cw - 0.7, h: 2.1, valign: "middle", paraSpaceAfter: 6 });
  });
}

// ───────────────────────── 4 — three tools ─────────────────────────
{
  const s = base("s31", "Ba công cụ: PESTEL, đối thủ, nội bộ khách hàng", {
    source: "C01: Davies, KAM Forum (Cranfield) — “wheel of customer understanding” của Dr Sue Holt.",
    notes: "Ba công cụ của Stage A, qua “wheel of customer understanding” (Dr Sue Holt).\nLời khuyên: nghiên cứu tương xứng với tầm quan trọng của khách hàng; thiếu thông tin thì đặt giả định và ghi rõ; xác nhận lại với khách hàng.\nAlt-text: ba ô — PESTEL, phân tích đối thủ, phân tích nội bộ khách hàng.",
  });
  const t = [["PESTEL", "Chính sách, kinh tế, xã hội, công nghệ, môi trường, pháp lý — của ngành khách hàng", C.blue, C.tBlue], ["Đối thủ", "Ai đang giành khách hàng của khách hàng ta?", C.pink, C.tPink], ["Nội bộ khách hàng", "Chiến lược, mục tiêu, cơ cấu, người ra quyết định", C.purple, C.tPurple]];
  const cw = (CW - 0.6) / 3;
  t.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.1, cw, 2.9, f, c, 1.5);
    badge(s, x + 0.3, 2.35, 0.75, c, String(i + 1), null, 20);
    T(s, h, { x: x + 0.3, y: 3.2, w: cw - 0.6, h: 0.55, fontSize: 22, bold: true });
    T(s, d, { x: x + 0.3, y: 3.8, w: cw - 0.6, h: 1.1, fontSize: 15, valign: "top" });
  });
  const a = [["Tương xứng", "nghiên cứu theo tầm quan trọng của khách hàng"], ["Ghi giả định", "thiếu thông tin thì đặt giả định, ghi rõ"], ["Xác nhận lại", "kiểm chứng với chính khách hàng"]];
  a.forEach(([h, d], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 5.3, cw, 1.25, C.tYellow, C.yellow);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.25, y: 5.3, w: cw - 0.5, h: 1.25, fontSize: 16, valign: "middle" });
  });
}

// ───────────────────────── 5 — PESTEL table ─────────────────────────
{
  const s = base("s31", "PESTEL trong KAM là PESTEL của khách hàng", {
    source: "Dòng P: C05 (dữ kiện thật). Các dòng khác: GIẢ ĐỊNH để học tập.",
    notes: "Ghi rõ dòng nào là giả định. Chỉ dòng P (tín dụng ~15%, siết BĐS) là dữ kiện thật.\n[VERIFY: văn bản hiện hành về bảo vệ dữ liệu khách hàng] — dòng L. Bán bảo hiểm qua ngân hàng nối Buổi 9 (U13).",
  });
  const cols = [{ w: 2.3 }, { w: 4.7, head: "Câu hỏi cho An Phát", fill: C.blue }, { w: CW - 7.0, head: "Ví dụ", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["P – Chính trị", "Chính sách nào ảnh hưởng ngân hàng?", "THẬT: NHNN định hướng tín dụng ~15% năm 2026, siết tín dụng BĐS (C05)"],
    ["E – Kinh tế", "Khách doanh nghiệp của An Phát đang lo gì?", "(giả định) chi phí vốn, dòng tiền"],
    ["S – Xã hội", "Thế hệ chủ doanh nghiệp thay đổi thế nào?", "(giả định) chủ doanh nghiệp trẻ, ưa trải nghiệm"],
    ["T – Công nghệ", "Ngân hàng số ảnh hưởng quan hệ với khách?", "(giả định) khách ít đến chi nhánh"],
    ["E – Môi trường", "Xu hướng xanh?", "(giả định) tín dụng xanh"],
    ["L – Pháp lý", "Quy định nào ràng buộc cách An Phát làm sự kiện?", "bảo vệ dữ liệu khách hàng [VERIFY]; bán bảo hiểm qua ngân hàng (Buổi 9)"],
  ], { rowH: 0.62, size: 13, headH: 0.5 });
}

// ───────────────────────── 6 — fact → need ─────────────────────────
{
  const s = base("s31", "Dữ kiện chỉ có giá trị khi thành nhu cầu", {
    source: "Chuỗi suy luận: nhận định của người soạn, dựa trên C05.",
    notes: "Từ dữ kiện đến hàm ý: tín dụng bị giới hạn → cạnh tranh giữ khách doanh nghiệp tốt bằng dịch vụ và quan hệ → An Phát cần sự kiện tạo giá trị thật cho khách doanh nghiệp, không chỉ tiệc.",
  });
  const st = [["Dữ kiện", "Tín dụng bị giới hạn (~15%, siết BĐS)", C.blue, C.tBlue], ["Hệ quả cho ngân hàng", "Cạnh tranh giữ khách doanh nghiệp tốt bằng dịch vụ và quan hệ", C.pink, C.tPink], ["Nhu cầu của An Phát", "Sự kiện tạo giá trị thật cho khách doanh nghiệp — không chỉ tiệc", C.purple, C.tPurple]];
  const cw = (CW - 1.2) / 3;
  st.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.6);
    pill(s, x, 2.2, cw, 0.6, c, h, { text: { fontSize: 16 } });
    card(s, x, 2.95, cw, 2.2, f, c, 1.5);
    T(s, d, { x: x + 0.3, y: 2.95, w: cw - 0.6, h: 2.2, fontSize: 18, bold: i === 2, valign: "middle", align: "center" });
    if (i < 2) arrow(s, x + cw + 0.08, 4.05, x + cw + 0.52, 4.05, C.ink, 3);
  });
  card(s, M, 5.5, CW, 1.05, C.tYellow, C.yellow);
  T(s, "Giá trị của phân tích nằm ở nhu cầu rút ra — không ở bảng điền đủ sáu chữ cái.", { x: M + 0.35, y: 5.5, w: CW - 0.7, h: 1.05, fontSize: 18, bold: true, valign: "middle" });
}

// ───────────────────────── 7 — competitors ─────────────────────────
{
  const s = base("s31", "Đối thủ của An Phát là ngân hàng khác, không phải agency khác", {
    source: "C01; ví dụ ngân hàng đối thủ: nhận định của người soạn.",
    notes: "Đối thủ = ngân hàng khác đang giành khách doanh nghiệp VIP của An Phát (không phải agency khác của Nova).\nNội bộ = chiến lược, mục tiêu, cơ cấu, người ra quyết định của An Phát (→ phần 3.3).",
  });
  pill(s, W / 2 - 1.5, 3.55, 3.0, 0.9, C.purple, "An Phát", { text: { fontSize: 20 } });
  T(s, "khách doanh nghiệp VIP", { x: W / 2 - 1.5, y: 4.5, w: 3.0, h: 0.4, fontSize: 13, italic: true, color: C.muted, align: "center" });
  [["Ngân hàng X", "hội thảo chuyên đề hàng quý", M, 2.15], ["Ngân hàng Y", "lãi suất ưu đãi", M, 4.9], ["Ngân hàng Z", "(nhóm tự bổ sung)", W - M - 3.6, 2.15]].forEach(([n, d, x, y]) => {
    card(s, x, y, 3.6, 1.3, C.tPink, C.pink);
    T(s, [{ text: n, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.25, y, w: 3.1, h: 1.3, fontSize: 17, valign: "middle" });
  });
  arrow(s, M + 3.7, 2.95, W / 2 - 1.55, 3.75, C.pink, 2.5);
  arrow(s, M + 3.7, 5.4, W / 2 - 1.55, 4.3, C.pink, 2.5);
  arrow(s, W - M - 3.7, 2.95, W / 2 + 1.55, 3.75, C.pink, 2.5);
  card(s, W - M - 3.6, 4.9, 3.6, 1.3, C.white, C.line);
  T(s, [{ text: "✗ Agency khác", options: { bold: true, breakLine: true } }, { text: "là đối thủ của Nova — không phải của An Phát", options: { fontSize: 13 } }], { x: W - M - 3.35, y: 4.9, w: 3.1, h: 1.3, fontSize: 17, color: C.muted, valign: "middle" });
  T(s, "Đối thủ giành khách của An Phát", { x: M, y: 3.6, w: 3.6, h: 0.8, fontSize: 13, italic: true, color: C.dPink, valign: "middle" });
}

// ───────────────────────── 8 — assumptions ─────────────────────────
{
  const s = base("s31", "Thiếu dữ liệu thì ghi giả định, không bịa", {
    source: "C01: Davies, KAM Forum (Cranfield).",
    notes: "Hiểu lầm: “PESTEL là để phân tích thị trường sự kiện” → trong KAM, phân tích ngành và đối thủ của khách hàng.\n“Không có số liệu thì bỏ qua” → đặt giả định, ghi rõ, kiểm chứng sau (C01).\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const m = [["“PESTEL là để phân tích thị trường sự kiện”", "Trong KAM, phân tích ngành và đối thủ của khách hàng"], ["“Không có số liệu thì bỏ qua”", "Đặt giả định → ghi rõ → kiểm chứng với khách hàng"]];
  m.forEach(([a, b], i) => {
    const y = 2.1 + i * 2.25;
    card(s, M, y, 5.4, 1.9, C.tPink, C.pink);
    T(s, [{ text: "Hiểu lầm", options: { fontSize: 13, color: C.dPink, bold: true, breakLine: true } }, { text: a, options: { fontSize: 18, italic: true } }], { x: M + 0.3, y, w: 4.8, h: 1.9, valign: "middle" });
    arrow(s, M + 5.55, y + 0.95, M + 6.4, y + 0.95, C.ink, 3);
    card(s, M + 6.55, y, CW - 6.55, 1.9, C.tGreen, C.green);
    T(s, [{ text: "Sửa", options: { fontSize: 13, color: C.dGreen, bold: true, breakLine: true } }, { text: b, options: { fontSize: 18, bold: true } }], { x: M + 6.85, y, w: CW - 7.15, h: 1.9, valign: "middle" });
  });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s31", "Thực hành 1 · Thế giới của An Phát", {
    source: "Phiếu W03_activity_S3_the_gioi_an_phat.md · Thẻ 1 thật (C05); thẻ 2–8 GIẢ ĐỊNH.",
    notes: "S3 — Thực hành 1 (20 phút): 7 · 8 · 5, GV chốt trong đoạn.\nLời mở đầu: “Tám thẻ về thế giới của An Phát — một thẻ thật, bảy thẻ giả định. Xếp chúng, rồi trả lời: năm tới An Phát cần gì? Nova chỉ có ích khi giúp được điều đó.”\nNếu nhóm viết “An Phát cần một gala hoành tráng” → hỏi: “Đó là giải pháp của Nova. Nhu cầu kinh doanh của An Phát là gì?”\n[VERIFY: văn bản hiện hành] cho thẻ 7.",
  });
  const cards = ["THẬT · NHNN: tín dụng ~15% năm 2026, siết BĐS", "Ngân hàng X mở hội thảo chuyên đề hàng quý", "Khách VIP lo nhất: chi phí vốn, dòng tiền", "70% giao dịch qua ngân hàng số", "Nhiều chủ DN là thế hệ thứ hai, dưới 40", "An Phát muốn tăng tín dụng xanh", "Quy định chặt hơn về bảo vệ dữ liệu cá nhân", "Ngân hàng Y chào lãi suất ưu đãi"];
  const cw = (7.8 - 0.2) / 2;
  cards.forEach((t, i) => {
    const x = M + (i % 2) * (cw + 0.2), y = 1.95 + Math.floor(i / 2) * 1.05;
    card(s, x, y, cw, 0.92, i === 0 ? C.tGreen : C.white, i === 0 ? C.green : C.line);
    badge(s, x + 0.12, y + 0.22, 0.48, i === 0 ? C.green : C.blue, String(i + 1), null, 14);
    T(s, t, { x: x + 0.7, y, w: cw - 0.8, h: 0.92, fontSize: 12, bold: i === 0, valign: "middle" });
  });
  const steps = [["7’", "Xếp 8 thẻ vào P·E·S·T·E·L hoặc “Đối thủ của An Phát”", C.blue], ["8’", "3 nhu cầu, mỗi nhu cầu ≥ 2 thẻ: “Vì [thẻ…] và [thẻ…], An Phát cần …”", C.pink], ["5’", "1 nhu cầu → Nova giúp bằng gì? + 1 giả định cần hỏi chị Hạnh", C.purple]];
  const rx = M + 8.1, rw = CW - 8.1;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.45;
    badge(s, rx, y + 0.22, 0.75, c, t, null, 16);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 1.2, fontSize: 13, valign: "middle" });
  });
  card(s, rx, 6.1, rw, 0.55, C.tYellow, C.yellow);
  T(s, "Nhu cầu của An Phát — không phải của Nova", { x: rx + 0.15, y: 6.1, w: rw - 0.3, h: 0.55, fontSize: 11, bold: true, valign: "middle" });
}

breakSlide();

// ───────────────────────── 9 — three stages ─────────────────────────
{
  const s = base("s32", "Hành trình có ba giai đoạn", {
    source: "C03: Lemon & Verhoef (2016), Journal of Marketing.",
    notes: "Lemon & Verhoef (2016): prepurchase – purchase – postpurchase. Đây là nguồn gốc học thuật trực tiếp của ba giai đoạn trong đề cương.\nNhấn: hành trình bắt đầu trước ngày sự kiện và kéo dài sau đó.",
  });
  const st = [["Trước", "prepurchase", "nhận thư mời, nghe kể, quyết định có đến", C.blue, C.tBlue], ["Trong", "purchase", "đón tiếp, chương trình, gặp gỡ", C.pink, C.tPink], ["Sau", "postpurchase", "ảnh, thư cảm ơn, tin báo chí, liên lạc tiếp", C.purple, C.tPurple]];
  const cw = (CW - 0.4) / 3;
  st.forEach(([h, e, d, c, f], i) => {
    const x = M + i * (cw + 0.2);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.3, w: i < 2 ? cw + 0.15 : cw, h: 1.3, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, [{ text: h, options: { bold: true, fontSize: 26, breakLine: true } }, { text: e, options: { fontSize: 13, italic: true } }], { x: x + 0.6, y: 2.3, w: cw - 0.9, h: 1.3, color: C.white, valign: "middle", align: "center" });
    card(s, x, 3.95, cw, 1.6, f, c);
    T(s, d, { x: x + 0.3, y: 3.95, w: cw - 0.6, h: 1.6, fontSize: 17, valign: "middle", align: "center" });
  });
  T(s, "Hành trình bắt đầu trước ngày sự kiện và kéo dài sau đó.", { x: M, y: 5.85, w: CW, h: 0.6, fontSize: 19, bold: true, align: "center" });
}

// ───────────────────────── 10 — four touchpoints ─────────────────────────
{
  const s = base("s32", "Điểm chạm có bốn loại", {
    source: "C03: Lemon & Verhoef (2016), Journal of Marketing, 80(6), 69–96.",
    notes: "Chiếu suốt S6 (Thực hành 2). Ký hiệu B · P · C · S dùng trên bản đồ hành trình.\nTrích: “Partners can include marketing agencies…” — Nova chính là partner-owned.",
  });
  const tp = [["B", "brand-owned", "do doanh nghiệp sở hữu", C.purple, C.tPurple], ["P", "partner-owned", "do đối tác — Nova ở đây", C.pink, C.tPink], ["C", "customer-owned", "khách tự làm", C.blue, C.tBlue], ["S", "social / external", "người khác, báo chí, mạng xã hội", C.orange, C.tOrange]];
  const cw = (CW - 0.9) / 4;
  tp.forEach(([k, h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 2.9, f, c, i === 1 ? 3 : 1.5);
    badge(s, x + cw / 2 - 0.45, 2.3, 0.9, c, k, null, 28);
    T(s, h, { x: x + 0.2, y: 3.35, w: cw - 0.4, h: 0.5, fontSize: 18, bold: true, align: "center" });
    T(s, d, { x: x + 0.2, y: 3.9, w: cw - 0.4, h: 0.9, fontSize: 14, align: "center", valign: "top" });
  });
  card(s, M, 5.3, CW, 1.25, C.tYellow, C.yellow);
  T(s, [{ text: "“Partners can include marketing agencies…” ", options: { italic: true, bold: true } }, { text: "— Lemon & Verhoef (2016)", options: { fontSize: 14, color: C.muted } }], { x: M + 0.4, y: 5.3, w: CW - 0.8, h: 1.25, fontSize: 22, align: "center", valign: "middle" });
}

// ───────────────────────── 11 — two layers ─────────────────────────
{
  const s = base("s32", "Môn học có hai lớp hành trình", {
    source: "Hai lớp hành trình: quyết định của giảng viên; nhận định của người soạn.",
    notes: "Lớp 1 dùng ở Buổi 3, 5, 9, 11. Lớp 2 dùng ở Buổi 10.",
  });
  const cw = (CW - 0.3) / 2;
  [["Lớp 1", "Khách của Key Account", "600 lãnh đạo doanh nghiệp VIP của An Phát — từ nhận thư mời đến sau gala", "Buổi 3 · 5 · 9 · 11", C.pink, C.tPink], ["Lớp 2", "Chính Key Account", "An Phát mua dịch vụ của Nova: brief → đề xuất → hợp đồng → sự kiện → nghiệm thu", "Buổi 10", C.purple, C.tPurple]].forEach(([l, h, d, b, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 4.5, f, c, 1.5);
    pill(s, x + 0.35, 2.35, 1.5, 0.5, c, l, { text: { fontSize: 15 } });
    T(s, h, { x: x + 0.35, y: 3.05, w: cw - 0.7, h: 0.7, fontSize: 26, bold: true });
    T(s, d, { x: x + 0.35, y: 3.8, w: cw - 0.7, h: 1.6, fontSize: 17, valign: "top" });
    T(s, "Dùng ở: " + b, { x: x + 0.35, y: 5.7, w: cw - 0.7, h: 0.5, fontSize: 14, bold: true, color: C.muted });
  });
}

// ───────────────────────── 12 — VIP journey ─────────────────────────
{
  const s = base("s32", "Hành trình của khách VIP bắt đầu từ thư mời", {
    source: "Ví dụ GIẢ ĐỊNH — lớp 1 (khách của An Phát).",
    notes: "Alt-text: dòng thời gian sáu điểm chạm qua ba giai đoạn, mỗi điểm ghi loại B/P/C/S.\nHỏi: “Nova làm nhiều điểm chạm nhưng khách thấy đó là của ai?”",
  });
  const y0 = 3.75, x0 = M + 1.0, w0 = CW - 2.0;
  [["Trước", C.blue], ["Trong", C.pink], ["Sau", C.purple]].forEach(([t, c], i) => {
    const x = M + i * (CW / 3);
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.05, y: 1.95, w: CW / 3 - 0.1, h: 0.45, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, t, { x, y: 1.95, w: CW / 3, h: 0.45, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  });
  line(s, x0, y0, x0 + w0, y0, C.line, 4);
  const pts = [["Nhận thư mời từ An Phát", "B", C.purple], ["Đồng nghiệp kể về gala năm ngoái", "S", C.orange], ["Đón tiếp tại khách sạn", "P", C.pink], ["Tự chụp ảnh, đăng mạng xã hội", "C", C.blue], ["Nhận ảnh, thư cảm ơn (Nova làm hộ)", "B", C.purple], ["Báo chí đưa tin", "S", C.orange]];
  const step = w0 / 5;
  pts.forEach(([t, k, c], i) => {
    const px = x0 + i * step, up = i % 2 === 0;
    badge(s, px - 0.3, y0 - 0.3, 0.6, c, k, null, 16);
    card(s, px - 0.95, up ? 2.6 : 4.3, 1.9, 0.8, C.white, c);
    T(s, t, { x: px - 0.9, y: up ? 2.6 : 4.3, w: 1.8, h: 0.8, fontSize: 11, align: "center", valign: "middle" });
  });
  T(s, "B brand-owned · P partner-owned · C customer-owned · S social/external", { x: M, y: 5.35, w: CW, h: 0.4, fontSize: 12, color: C.muted, align: "center" });
  card(s, M, 5.85, CW, 0.75, C.tYellow, C.yellow);
  T(s, "Hỏi lớp: Nova làm nhiều điểm chạm — nhưng khách thấy đó là của ai?", { x: M + 0.3, y: 5.85, w: CW - 0.6, h: 0.75, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 13 — Nova makes, An Phát shines ─────────────────────────
{
  const s = base("s32", "Nova làm, nhưng khách thấy An Phát", {
    notes: "Chốt: “Của An Phát. Nova làm cho thương hiệu An Phát tỏa sáng.”",
  });
  s.addShape(pres.shapes.OVAL, { x: W / 2 - 1.9, y: 2.0, w: 3.8, h: 3.8, fill: { color: C.tPurple }, line: { color: C.purple, width: 3 } });
  T(s, "An Phát", { x: W / 2 - 1.9, y: 2.0, w: 3.8, h: 3.8, fontSize: 34, bold: true, color: C.purple, align: "center", valign: "middle" });
  [[-1, "thư mời"], [1, "đón tiếp"], [-1, "thư cảm ơn"], [1, "livestream"]].forEach(([sd, t], i) => {
    const y = 2.3 + Math.floor(i / 2) * 1.9, x = sd < 0 ? M + 0.4 : W - M - 3.0;
    pill(s, x, y, 2.6, 0.7, C.white, "Nova · " + t, { line: C.pink, color: C.ink, text: { fontSize: 14, bold: false } });
    arrow(s, sd < 0 ? x + 2.7 : x - 0.1, y + 0.35, sd < 0 ? W / 2 - 1.95 : W / 2 + 1.95, 3.9, C.pink, 2);
  });
  T(s, "Nova làm cho thương hiệu An Phát tỏa sáng.", { x: M, y: 6.05, w: CW, h: 0.6, fontSize: 22, bold: true, align: "center" });
}

// ───────────────────────── 14 — DMU ─────────────────────────
{
  const s = base("s33", "Quyết định mua của tổ chức do nhiều người", {
    source: "C04: Webster & Wind (1972), Journal of Marketing, 36(2), 12–19.",
    notes: "Webster & Wind (1972): hành vi mua của tổ chức là quá trình ra quyết định của tổ chức. Bài này thường được dẫn cho khái niệm buying center / DMU.\n[VERIFY: danh sách vai trò trong toàn văn — mới đọc tóm tắt]",
  });
  T(s, "buying center · DMU", { x: M, y: 1.95, w: 4.5, h: 0.45, fontSize: 15, italic: true, color: C.muted });
  const r = [["Người dùng", "user", C.blue], ["Người ảnh hưởng", "influencer", C.pink], ["Người mua", "buyer", C.orange], ["Người quyết định", "decider", C.purple], ["Người gác cổng", "gatekeeper", C.green]];
  const cx = W / 2, cy = 4.3;
  s.addShape(pres.shapes.OVAL, { x: cx - 1.1, y: cy - 1.1, w: 2.2, h: 2.2, fill: { color: C.tYellow }, line: { color: C.yellow, width: 2 } });
  T(s, "Quyết định chọn agency", { x: cx - 1.0, y: cy - 1.0, w: 2.0, h: 2.0, fontSize: 15, bold: true, align: "center", valign: "middle" });
  r.forEach(([h, e, c], i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / 5, px = cx + 3.4 * Math.cos(a), py = cy + 1.75 * Math.sin(a);
    pill(s, px - 1.35, py - 0.38, 2.7, 0.76, c, h, { text: { fontSize: 15 } });
    T(s, e, { x: px - 1.35, y: py + 0.4, w: 2.7, h: 0.3, fontSize: 11, italic: true, color: C.muted, align: "center" });
  });
  pill(s, W - M - 2.2, 1.95, 2.2, 0.42, C.yellow, "[VERIFY] vai trò", { text: { fontSize: 11 } });
}

// ───────────────────────── 15 — five people ─────────────────────────
{
  const s = base("s33", "Năm người của An Phát liên quan đến quyết định chọn Nova", {
    source: "Nhân vật GIẢ ĐỊNH.",
    notes: "Năm thẻ nhân vật dùng tiếp trong Thực hành 2.",
  });
  const p = [["Chị Hạnh", "GĐ Marketing", "Làm việc với Nova 4 năm; chịu áp lực đổi mới năm nay", C.purple, C.tPurple], ["Ông Tuấn", "Phó TGĐ khối Marketing – Truyền thông", "Chỉ bắt tay Nova ở gala; quan tâm giữ khách DN lớn", C.blue, C.tBlue], ["Anh Khoa", "Chuyên viên ngân sách – mua sắm", "Chỉ gửi hồ sơ thanh toán; khó tính về quy trình", C.orange, C.tOrange], ["Chị Lan", "Trưởng ban Truyền thông nội bộ", "Lo livestream về 80 chi nhánh; năm ngoái bị chậm", C.pink, C.tPink], ["Chị Vy", "Trưởng nhóm Thương hiệu", "Chưa làm việc trực tiếp với Nova", C.green, C.tGreen]];
  const cw = (CW - 0.8) / 5;
  p.forEach(([n, r, d, c, f], i) => {
    const x = M + i * (cw + 0.2);
    card(s, x, 2.05, cw, 4.5, f, c, 1.5);
    badge(s, x + cw / 2 - 0.55, 2.3, 1.1, c, n.split(" ").pop()[0], null, 30);
    T(s, n, { x: x + 0.15, y: 3.55, w: cw - 0.3, h: 0.45, fontSize: 18, bold: true, align: "center" });
    T(s, r, { x: x + 0.15, y: 4.0, w: cw - 0.3, h: 0.8, fontSize: 12, color: C.muted, align: "center", valign: "top" });
    T(s, d, { x: x + 0.2, y: 4.85, w: cw - 0.4, h: 1.55, fontSize: 13, align: "center", valign: "top" });
  });
}

// ───────────────────────── 16 — GRASP ─────────────────────────
{
  const s = base("s33", "GRASP: mục tiêu, vai trò, điều thu hút, thái độ, quyền lực", {
    source: "C06: định nghĩa làm việc của môn — chưa tìm được nguồn công khai của GRASP [NEEDS PROFESSOR INPUT].",
    notes: "Nói rõ: đây là định nghĩa làm việc của môn; nguồn gốc GRASP trong đề cương chưa tìm được bản công khai. [NEEDS PROFESSOR INPUT]\nChiếu suốt S6.",
  });
  const g = [["G", "Goal", "Mục tiêu của họ (tổ chức và cá nhân)? KPI của họ?", C.purple, C.tPurple], ["R", "Role", "Vai trò: quyết định, phê duyệt, ảnh hưởng, người dùng, gác cổng?", C.blue, C.tBlue], ["A", "Appeal", "Điều gì trong đề xuất thu hút họ: giá, ý tưởng, an toàn, kết quả kinh doanh?", C.pink, C.tPink], ["S", "State", "Thái độ hiện tại với Nova: ủng hộ, trung lập, hoài nghi, chưa biết?", C.orange, C.tOrange], ["P", "Power", "Mức ảnh hưởng thực tế đến quyết định?", C.green, C.tGreen]];
  g.forEach(([k, e, d, c, f], i) => {
    const y = 1.95 + i * 0.93;
    card(s, M, y, CW, 0.82, f, f);
    badge(s, M + 0.15, y + 0.08, 0.66, c, k, null, 22);
    T(s, e, { x: M + 1.0, y, w: 1.6, h: 0.82, fontSize: 20, bold: true, valign: "middle" });
    T(s, d, { x: M + 2.7, y, w: CW - 2.9, h: 0.82, fontSize: 16, valign: "middle" });
  });
}

// ───────────────────────── 17 — GRASP Hạnh ─────────────────────────
{
  const s = base("s33", "GRASP của chị Hạnh", {
    source: "Ví dụ GIẢ ĐỊNH.",
    notes: "Chị Hạnh: đầu mối chính, quyền lực cao — nhưng không phải người phê duyệt cuối (→ slide sau).",
  });
  const g = [["G", "Goal", "Hình ảnh ngân hàng với khách doanh nghiệp; tỷ lệ tham dự", C.purple, C.tPurple], ["R", "Role", "Đầu mối chính, đề xuất lên lãnh đạo", C.blue, C.tBlue], ["A", "Appeal", "Ý tưởng mới nhưng an toàn thương hiệu", C.pink, C.tPink], ["S", "State", "Tin Nova (4 năm) nhưng áp lực đổi mới", C.orange, C.tOrange], ["P", "Power", "Cao", C.green, C.tGreen]];
  const cw = (CW - 0.8) / 5;
  g.forEach(([k, e, d, c, f], i) => {
    const x = M + i * (cw + 0.2);
    card(s, x, 2.05, cw, 4.0, f, c, 1.5);
    badge(s, x + cw / 2 - 0.45, 2.3, 0.9, c, k, null, 28);
    T(s, e, { x: x + 0.15, y: 3.35, w: cw - 0.3, h: 0.45, fontSize: 17, bold: true, align: "center" });
    T(s, d, { x: x + 0.2, y: 3.9, w: cw - 0.4, h: 2.0, fontSize: i === 4 ? 28 : 15, bold: i === 4, align: "center", valign: "top" });
  });
  T(s, "Chị Hạnh · GĐ Marketing An Phát", { x: M, y: 6.2, w: CW, h: 0.45, fontSize: 15, italic: true, color: C.muted, align: "center" });
}

// ───────────────────────── 18 — contact ≠ decider ─────────────────────────
{
  const s = base("s33", "Người liên hệ nhiều nhất không phải người quyết định", {
    notes: "Hiểu lầm: “Người liên hệ nhiều nhất là người quyết định” → chị Hạnh liên hệ nhiều nhất, nhưng ông Tuấn phê duyệt, anh Khoa có thể chặn ở khâu mua sắm.\n“Chỉ cần làm hài lòng người quyết định” → người dùng (chị Lan — livestream) và người gác cổng cũng ảnh hưởng.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const m = [["“Người liên hệ nhiều nhất là người quyết định”", "Chị Hạnh liên hệ nhiều nhất — nhưng ông Tuấn phê duyệt, anh Khoa có thể chặn ở mua sắm"], ["“Chỉ cần làm hài lòng người quyết định”", "Người dùng (chị Lan — livestream) và người gác cổng cũng ảnh hưởng"]];
  m.forEach(([a, b], i) => {
    const y = 2.1 + i * 2.25;
    card(s, M, y, 5.4, 1.9, C.tPink, C.pink);
    T(s, [{ text: "Hiểu lầm", options: { fontSize: 13, color: C.dPink, bold: true, breakLine: true } }, { text: a, options: { fontSize: 18, italic: true } }], { x: M + 0.3, y, w: 4.8, h: 1.9, valign: "middle" });
    arrow(s, M + 5.55, y + 0.95, M + 6.4, y + 0.95, C.ink, 3);
    card(s, M + 6.55, y, CW - 6.55, 1.9, C.tGreen, C.green);
    T(s, [{ text: "Sửa", options: { fontSize: 13, color: C.dGreen, bold: true, breakLine: true } }, { text: b, options: { fontSize: 17, bold: true } }], { x: M + 6.85, y, w: CW - 7.15, h: 1.9, valign: "middle" });
  });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s33", "Thực hành 2 · Hành trình của khách VIP và DMU của An Phát", {
    source: "Phiếu W03_activity_S6_hanh_trinh_va_dmu.md · Tình huống GIẢ ĐỊNH.",
    notes: "S6 — Thực hành 2 (33 phút): 3 · 12 · 7 · 8 · 3. Chỉ slide bốn loại điểm chạm và slide GRASP.\nNếu hành trình chỉ có ngày gala → hỏi: “Khách quyết định có đến từ khi nào? Sau gala khách còn gặp An Phát ở đâu?”\nNếu Power của chị Hạnh cao nhất → “Ai ký phê duyệt cuối? Ai có thể chặn ở khâu mua sắm?”\nState để trống với chị Vy → “Chưa biết” cũng là một trạng thái — và là rủi ro.",
  });
  T(s, "Hội nghị khách hàng + gala cho 600 lãnh đạo doanh nghiệp VIP của An Phát", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 14, color: C.muted });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.45, cw, 2.55, C.tPink, C.pink);
  T(s, [{ text: "Nửa trái A1 · Hành trình", options: { bold: true, fontSize: 20, breakLine: true } }, { text: "Một khách VIP · trước – trong – sau · ≥ 6 điểm chạm ghi B / P / C / S · khoanh ⚠️ 1 điểm dễ hỏng nhất", options: { fontSize: 17 } }], { x: M + 0.3, y: 2.45, w: cw - 0.6, h: 2.55, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + cw + 0.3, 2.45, cw, 2.55, C.tPurple, C.purple);
  T(s, [{ text: "Nửa phải A1 · GRASP", options: { bold: true, fontSize: 20, breakLine: true } }, { text: "5 người · Power 1–5 · mỗi người 1 việc Nova nên làm · nối mỗi người với điểm chạm họ quan tâm nhất", options: { fontSize: 17 } }], { x: M + cw + 0.6, y: 2.45, w: cw - 0.6, h: 2.55, valign: "middle", paraSpaceAfter: 6 });
  const st = [["12’", "Hành trình", C.pink], ["7’", "GRASP", C.purple], ["2×4’", "Xoay trạm · vai chị Hạnh · 🟨 câu hỏi · 🟥 điều Nova hiểu sai", C.blue], ["3’", "Về bàn, sửa 1 điểm", C.green]];
  const sw = (CW - 0.6) / 4;
  st.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.2);
    badge(s, x, 5.35, 0.8, c, t, null, t.length > 3 ? 13 : 16);
    T(s, d, { x: x + 0.9, y: 5.25, w: sw - 0.9, h: 1.0, fontSize: 12, valign: "middle" });
  });
}

// ───────────────────────── 19 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 3", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ SMP: đây là phần A. Value Insights (Buổi 13) cho khách hàng từ dự án cũ.",
  });
  summary3([["3.1", "PESTEL và đối thủ của khách hàng → nhu cầu thật của họ; thiếu dữ liệu thì ghi rõ giả định."],
    ["3.2", "Hành trình ba giai đoạn, bốn loại điểm chạm; hai lớp hành trình — khách của khách hàng, và chính khách hàng với agency."],
    ["3.3", "Quyết định do DMU; GRASP giúp hiểu từng người: mục tiêu, vai trò, điều thu hút, thái độ, quyền lực."]], s,
    [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "đây là phần A. Value Insights cho khách hàng từ dự án cũ của nhóm." }]);
}

// ───────────────────────── 20 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm.\nCần xem: (a) PESTEL là của khách hàng, không của agency; (b) phân biệt người liên hệ nhiều nhất với người quyết định.\nCâu nối Buổi 4: “Hiểu khách hàng rồi, làm sao biết quan hệ với họ đang tốt hay xấu? Buổi sau: đo chất lượng quan hệ — niềm tin, cam kết, và xung đột chức năng.”",
  });
  exitTicket(s, ["Một yếu tố PESTEL của khách hàng trong dự án cũ của nhóm, và nó tạo ra nhu cầu gì cho khách hàng đó?", "Người có quyền lực (Power) cao nhất trong DMU của khách hàng đó là ai? Nhóm đã từng làm việc trực tiếp với người đó chưa?"],
    [{ text: "Buổi 4: ", options: { bold: true } }, { text: "hiểu khách hàng rồi, làm sao biết quan hệ đang tốt hay xấu? Đo chất lượng quan hệ — niềm tin, cam kết, và xung đột chức năng." }]);
}

refSlides([
  ["C01", "Davies, M. (n.d.). The value planning framework for key accounts. Key Account Management Forum (Cranfield)."],
  ["C02", "Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management. Kogan Page. (chương 3)"],
  ["C03", "Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96. https://doi.org/10.1509/jm.15.0420"],
  ["C04", "Webster, F. E., Jr., & Wind, Y. (1972). A general model for understanding organizational buying behavior. Journal of Marketing, 36(2), 12–19. https://doi.org/10.1177/002224297203600204"],
  ["C05", "VnEconomy. (2026, January 11). Năm 2026, tín dụng dự kiến tăng thêm 2,79 triệu tỷ đồng, giảm 183.000 tỷ so với 2025. · VnExpress. (2026). Tăng trưởng tín dụng năm 2026 dự kiến 15%."],
  ["C06", "GRASP (Goal, Role, Appeal, State, Power) — định nghĩa làm việc của môn; chưa có nguồn công khai [NEEDS PROFESSOR INPUT]."],
], "buoi-03_tu-lieu-tong-hop.md", 6);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
