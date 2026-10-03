// Buổi 2 — EVM1110E · KAM Mindset & Key Account Selection
// Deck generated from courses/EVM1110E/lessons/W02_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W02_KAM_Mindset_Selection.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 2: KAM Mindset & Key Account Selection";
const OUT = "EVM1110E_W02_KAM_Mindset_Selection.pptx";
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
  { key: "s21", label: "2.1 Sales vs KAM", c: C.purple },
  { key: "s22", label: "2.2 Chọn Key Account", c: C.blue },
  { key: "s23", label: "Đồng đầu tư", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a tiny 3×3 attractiveness matrix, top-right zone highlighted
function glyph(slide, x, y, s) {
  const g = s * 0.08, c = (s - 2 * g) / 3;
  for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) {
    const col = i === 2 && j === 0 ? C.pink : (i >= 1 && j <= 1 ? C.purple : C.blue);
    slide.addShape(pres.shapes.RECTANGLE, { x: x + i * (c + g), y: y + j * (c + g), w: c, h: c, fill: { color: col, transparency: (i >= 1 && j <= 1) ? 0 : 60 }, line: { color: col, width: 0 } });
  }
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
  T(s, `EVM1110E · Buổi 2   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
  T(s, "EVM1110E · Buổi 2   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
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
// ───────────────────────── 1 — Title ─────────────────────────
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
function attractMatrix(s, x, y, w, h, o = {}) {
  const ax = 0.5, gx = x + ax, gw = w - ax, gh = h - ax, n = 3, cw = gw / n, ch = gh / n;
  const fills = [[C.tBlue, C.tPurple, C.tPurple], [C.tGreen, C.tBlue, C.tPurple], [C.band, C.tGreen, C.tBlue]];
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++)
    s.addShape(pres.shapes.RECTANGLE, { x: gx + i * cw, y: y + j * ch, w: cw - 0.04, h: ch - 0.04, fill: { color: fills[j][i] }, line: { color: C.white, width: 1 } });
  line(s, x + 0.38, y + gh, x + 0.38, y, C.muted, 1.5, { end: "triangle" });
  T(s, "Sức hấp dẫn của khách hàng  →", { x: x - gh / 2 + 0.1, y: y + gh / 2 - 0.15, w: gh, h: 0.3, fontSize: 11, color: C.muted, align: "center", rotate: 270 });
  line(s, gx, y + gh + 0.2, gx + gw, y + gh + 0.2, C.muted, 1.5, { end: "triangle" });
  T(s, "Vị thế cạnh tranh của agency  →", { x: gx, y: y + gh + 0.24, w: gw, h: 0.24, fontSize: 11, color: C.muted, align: "center" });
  return { gx, gy: y, gw, gh };
}
titleSlide(2, "KAM Mindset & Key Account Selection", "Phần 2 · Quản trị khách hàng trọng điểm — buổi 1/7", (s) => {
  const g = attractMatrix(s, 7.9, 1.2, 4.9, 4.7);
  [[0.25, 0.7, C.muted, "Sông Xanh"], [0.62, 0.22, C.purple, "An Phát"], [0.45, 0.45, C.blue, "Bếp Việt"]].forEach(([fx, fy, c, t]) => {
    const px = g.gx + fx * g.gw, py = g.gy + fy * g.gh;
    s.addShape(pres.shapes.OVAL, { x: px - 0.28, y: py - 0.28, w: 0.56, h: 0.56, fill: { color: c }, line: { color: C.white, width: 2 } });
    T(s, t, { x: px - 1, y: py + 0.3, w: 2, h: 0.3, fontSize: 11, bold: true, align: "center" });
  });
}, "Slide 1 (dàn ý #1). Mở Phần 2 — Quản trị khách hàng trọng điểm (KAM).\nAlt-text: ma trận hai trục sức hấp dẫn × vị thế cạnh tranh với ba khách hàng giả định đặt ở các ô khác nhau.");

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Khách hàng lớn nhất chưa chắc là Key Account", {
    source: "Tình huống giả định — tên và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Chiếu và đọc: “Năm nay khách hàng đem doanh thu lớn nhất cho Nova là một công ty địa ốc: 3,5 tỷ đồng. Nhưng họ đấu thầu từng sự kiện, trả tiền sau 90 ngày, và năm nào cũng đổi agency.”\nGiơ tay: “Đó có phải Key Account của Nova?” (Có / Không / Chưa biết)\nChốt: “Key Account không phải khách hàng lớn nhất, mà là khách hàng đáng đầu tư quan hệ nhất — và cũng muốn đầu tư lại vào ta.”",
  });
  card(s, M, 2.1, 5.2, 4.45, C.tOrange, C.orange);
  T(s, "Địa ốc Sông Xanh", { x: M + 0.35, y: 2.25, w: 4.5, h: 0.45, fontSize: 15, bold: true, color: C.dOrange });
  T(s, "3,5 tỷ", { x: M + 0.35, y: 2.75, w: 4.5, h: 1.1, fontSize: 54, bold: true, color: C.dOrange });
  T(s, "doanh thu lớn nhất của Nova năm nay", { x: M + 0.35, y: 3.85, w: 4.5, h: 0.45, fontSize: 15 });
  T(s, bullets(["Đấu thầu từng sự kiện", "Trả tiền sau 90 ngày", "Năm nào cũng đổi agency"]), { x: M + 0.35, y: 4.45, w: 4.5, h: 1.9, fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  const rx = M + 5.6, rw = CW - 5.6;
  T(s, "Đó có phải Key Account của Nova?", { x: rx, y: 2.1, w: rw, h: 0.7, fontSize: 22, bold: true });
  [["Có", C.green], ["Không", C.pink], ["Chưa biết", C.blue]].forEach(([t, c], i) => pill(s, rx + i * ((rw - 0.4) / 3 + 0.2), 3.0, (rw - 0.4) / 3, 0.8, c, t, { text: { fontSize: 18 } }));
  card(s, rx, 4.2, rw, 2.35, C.tYellow, C.yellow);
  T(s, [{ text: "Key Account không phải khách hàng ", options: {} }, { text: "lớn nhất", options: { bold: true } }, { text: ", mà là khách hàng " }, { text: "đáng đầu tư quan hệ nhất", options: { bold: true } }, { text: " — và cũng muốn đầu tư lại vào ta." }],
    { x: rx + 0.35, y: 4.2, w: rw - 0.7, h: 2.35, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 3 — not "selling with knobs on" ─────────────────────────
{
  const s = base("s21", "KAM không phải “bán hàng xịn hơn”", {
    source: "B05: McDonald, Why many companies get key account management hopelessly wrong, Cranfield blog.",
    notes: "McDonald: nhiều công ty nghĩ KAM là “bán hàng có gắn thêm núm” — tức là bán hàng phiên bản xịn. Đó là hiểu sai.",
  });
  card(s, M, 2.2, CW, 2.4, C.tPurple, C.purple);
  T(s, [{ text: "“Most companies think that KAM is ‘selling with knobs on’.”", options: { italic: true, bold: true, breakLine: true } }, { text: "— Malcolm McDonald, Cranfield (B05)", options: { fontSize: 14, color: C.muted } }],
    { x: M + 0.5, y: 2.2, w: CW - 1.0, h: 2.4, fontSize: 30, align: "center", valign: "middle", paraSpaceAfter: 8 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.95, cw, 1.6, C.white, C.line);
  T(s, [{ text: "Hiểu sai", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: "KAM = bán hàng phiên bản xịn", options: { fontSize: 20, bold: true, color: C.muted } }], { x: M + 0.35, y: 4.95, w: cw - 0.7, h: 1.6, valign: "middle" });
  card(s, M + cw + 0.3, 4.95, cw, 1.6, C.tYellow, C.yellow);
  T(s, [{ text: "Hiểu đúng", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: "KAM = quản trị quan hệ dài hạn, hai chiều", options: { fontSize: 20, bold: true } }], { x: M + cw + 0.65, y: 4.95, w: cw - 0.7, h: 1.6, valign: "middle" });
}

// ───────────────────────── 4 — big clients don't want to be sold to ─────────────────────────
{
  const s = base("s21", "Khách hàng lớn không muốn bị bán hàng", {
    source: "B05: McDonald, Cranfield blog.",
    notes: "Theo McDonald, khách hàng lớn không muốn bị bán hàng; họ cần người hiểu tài chính, quy trình, tổ chức, văn hóa của họ và đưa giải pháp tạo lợi thế cho họ.",
  });
  T(s, "Họ cần người hiểu…", { x: M, y: 2.0, w: CW, h: 0.5, fontSize: 18, bold: true, color: C.muted });
  const it = [["Tài chính", C.purple, C.tPurple], ["Quy trình", C.blue, C.tBlue], ["Tổ chức", C.orange, C.tOrange], ["Văn hóa", C.green, C.tGreen]];
  const cw = (CW - 0.9) / 4;
  it.forEach(([t, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.65, cw, 1.7, f, c, 1.5);
    T(s, t, { x, y: 2.65, w: cw, h: 1.7, fontSize: 26, bold: true, align: "center", valign: "middle" });
  });
  arrow(s, W / 2, 4.5, W / 2, 5.05, C.ink, 3);
  card(s, M, 5.15, CW, 1.4, C.tYellow, C.yellow);
  T(s, "…và đưa giải pháp tạo lợi thế cho chính họ.", { x: M + 0.4, y: 5.15, w: CW - 0.8, h: 1.4, fontSize: 24, bold: true, align: "center", valign: "middle" });
}

// ───────────────────────── 5 — selling → management ─────────────────────────
{
  const s = base("s21", "Từ key account selling đến key account management", {
    source: "B02: Millman & Wilson (1995) · B03: McDonald, Millman & Rogers (1997).",
    notes: "Millman & Wilson (1995) — chính tên bài là thông điệp: từ bán cho khách hàng lớn sang quản trị khách hàng trọng điểm; phần lớn tài liệu KAM nhìn từ phía người bán; người làm KAM cần năng lực rộng hơn: phát triển kinh doanh, phân tích ngành, quản trị quan hệ.\nMcDonald, Millman & Rogers (1997): KAM có lợi cho cả hai phía, phát triển qua các giai đoạn quan hệ (Buổi 4, 8).",
  });
  pill(s, M, 2.3, 4.6, 1.0, C.muted, "Key account SELLING", { text: { fontSize: 20 } });
  arrow(s, M + 4.75, 2.8, M + 6.6, 2.8, C.ink, 4);
  T(s, "Millman & Wilson (1995)", { x: M + 4.6, y: 2.2, w: 2.2, h: 0.4, fontSize: 11, italic: true, color: C.muted, align: "center" });
  pill(s, M + 6.75, 2.3, CW - 6.75, 1.0, C.purple, "Key account MANAGEMENT", { text: { fontSize: 20 } });
  const cw = (CW - 0.3) / 2;
  card(s, M, 3.8, cw, 2.75, C.tBlue, C.blue);
  T(s, [{ text: "Người làm KAM cần năng lực rộng hơn", options: { bold: true, breakLine: true } }, { text: "phát triển kinh doanh · phân tích ngành · quản trị quan hệ", options: { fontSize: 15 } }], { x: M + 0.35, y: 3.8, w: cw - 0.7, h: 2.75, fontSize: 19, valign: "middle", paraSpaceAfter: 8 });
  card(s, M + cw + 0.3, 3.8, cw, 2.75, C.tGreen, C.green);
  T(s, [{ text: "Lợi ích cho cả hai phía", options: { bold: true, breakLine: true } }, { text: "quan hệ phát triển qua nhiều giai đoạn — McDonald, Millman & Rogers (1997); học tiếp ở Buổi 4, 8", options: { fontSize: 15 } }], { x: M + cw + 0.65, y: 3.8, w: cw - 0.7, h: 2.75, fontSize: 19, valign: "middle", paraSpaceAfter: 8 });
}

// ───────────────────────── 6 — four dimensions ─────────────────────────
{
  const s = base("s21", "KAM có bốn khía cạnh: hoạt động, người tham gia, nguồn lực, mức chính thức hóa", {
    source: "B04: Homburg, Workman & Jensen (2002), Journal of Marketing.",
    notes: "Homburg, Workman & Jensen (2002) khái niệm hóa KAM theo bốn khía cạnh: activities, actors, resources, approach formalization.\nAlt-text: bốn ô, mỗi ô một khía cạnh.",
  });
  const d = [["Hoạt động", "activities", "Hiểu sâu khách hàng, lập kế hoạch riêng, đồng kiến tạo", C.purple, C.tPurple], ["Người tham gia", "actors", "Nhiều người, nhiều cấp ở cả hai bên", C.blue, C.tBlue], ["Nguồn lực", "resources", "Dành riêng cho khách hàng này", C.orange, C.tOrange], ["Mức chính thức hóa", "formalization", "Có quy trình, kế hoạch, đánh giá định kỳ", C.green, C.tGreen]];
  const cw = (CW - 0.3) / 2;
  d.forEach(([h, e, t, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 2.3;
    card(s, x, y, cw, 2.1, f, c, 1.5);
    T(s, h, { x: x + 0.35, y: y + 0.2, w: cw - 0.7, h: 0.55, fontSize: 22, bold: true });
    T(s, e, { x: x + 0.35, y: y + 0.75, w: cw - 0.7, h: 0.35, fontSize: 13, italic: true, color: C.muted });
    T(s, t, { x: x + 0.35, y: y + 1.15, w: cw - 0.7, h: 0.8, fontSize: 16, valign: "top" });
  });
}

// ───────────────────────── 7 — comparison ─────────────────────────
{
  const s = base("s21", "Sales và KAM khác nhau ở mục tiêu, thời gian và cách tạo giá trị", {
    source: "Bảng tổng hợp của người soạn, dựa trên B02–B05; bốn khía cạnh theo Homburg et al. (2002).",
    notes: "Bảng này dùng tiếp ở Thực hành 1 — các nhóm phân loại 8 hành vi theo các dòng của bảng.",
  });
  const cols = [{ w: 2.9 }, { w: (CW - 2.9) / 2, head: "Sales · bán cho khách lớn", fill: C.muted, color: C.white }, { w: (CW - 2.9) / 2, head: "KAM", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["Mục tiêu", "Chốt hợp đồng, doanh số kỳ này", "Giá trị dài hạn cho cả hai bên"],
    ["Tầm nhìn thời gian", "Từng sự kiện, từng quý", "Nhiều năm (3–5 năm)"],
    ["Hoạt động", "Chào giá, đấu thầu, chăm sóc", "Hiểu sâu, kế hoạch riêng, đồng kiến tạo"],
    ["Người tham gia", "Một người bán ↔ một người mua", "Nhiều người, nhiều cấp hai bên"],
    ["Nguồn lực", "Chung cho mọi khách", "Dành riêng cho khách hàng này"],
    ["Mức chính thức hóa", "Tùy người", "Quy trình, kế hoạch, đánh giá định kỳ"],
    ["Cách tạo giá trị", "Dịch vụ tốt, giá tốt", "Lợi thế cho khách hàng (và khách của họ)"],
  ], { rowH: 0.55, size: 14, headH: 0.5 });
}

// ───────────────────────── 8 — An Phát ─────────────────────────
{
  const s = base("s21", "Với An Phát: chờ brief gala, hay đề xuất chương trình cả năm?", {
    source: "Tình huống giả định Nova Events – Ngân hàng An Phát.",
    notes: "Ở Buổi 1–6, GĐ Marketing An Phát là chị Hạnh.",
  });
  const cw = (CW - 0.3) / 2;
  pill(s, M, 2.05, cw, 0.6, C.muted, "Cách Sales", { color: C.white, text: { fontSize: 17 } });
  card(s, M, 2.8, cw, 3.75, C.white, C.line);
  T(s, bullets(["Mỗi năm chờ An Phát gửi brief gala", "Làm đề xuất, chào giá", "Làm xong thì chờ năm sau"]), { x: M + 0.35, y: 3.0, w: cw - 0.7, h: 3.4, fontSize: 18, color: C.muted, valign: "top", paraSpaceAfter: 14 });
  pill(s, M + cw + 0.3, 2.05, cw, 0.6, C.purple, "Cách KAM", { text: { fontSize: 17 } });
  card(s, M + cw + 0.3, 2.8, cw, 3.75, C.tPurple, C.purple);
  T(s, bullets(["Hiểu mục tiêu kinh doanh năm tới của An Phát: giữ khách doanh nghiệp", "Đề xuất chương trình khách hàng cả năm", "Đầu mối nhiều cấp", "Đánh giá chung sau mỗi sự kiện"]), { x: M + cw + 0.65, y: 3.0, w: cw - 0.7, h: 3.4, fontSize: 18, valign: "top", paraSpaceAfter: 14 });
}

// ───────────────────────── 9 — not pleasing ─────────────────────────
{
  const s = base("s21", "KAM không có nghĩa là chiều khách", {
    notes: "Hiểu lầm: “KAM = chăm sóc khách VIP chu đáo hơn” → KAM là cách vận hành quan hệ, có kế hoạch và nguồn lực riêng.\n“Làm KAM là phải chiều khách” → KAM hướng tới lợi ích hai phía; Buổi 6 sẽ tính chi phí phục vụ.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const m = [["“KAM = chăm sóc khách VIP chu đáo hơn”", "KAM là cách vận hành quan hệ — có kế hoạch và nguồn lực riêng"], ["“Làm KAM là phải chiều khách”", "KAM hướng tới lợi ích hai phía — Buổi 6 sẽ tính chi phí phục vụ"]];
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
  const s = base("s21", "Thực hành 1 · Sales hay KAM?", {
    source: "Phiếu W02_activity_S3_sales_hay_kam.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút): 8 · 8 · 4, GV chốt trong đoạn.\nThảo luận: hành vi nào gây tranh luận nhất? Giảm giá để giữ hợp đồng có bao giờ là KAM không?",
  });
  T(s, "Nova làm gala cho An Phát đã 4 năm. Tám việc nhân viên Nova đã làm năm qua:", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const b = ["Tháng 10 mới gọi hỏi “năm nay có làm gala không?”", "Đọc báo cáo thường niên để biết năm tới ưu tiên nhóm khách nào", "Giảm giá 10% khi An Phát nói có agency chào rẻ hơn", "Sau gala, mời đội An Phát họp đánh giá chung", "Gửi hồ sơ năng lực chung như mọi khách khác", "Đề xuất chương trình tri ân khách hàng cả năm", "Chỉ nhân viên kinh doanh làm việc với An Phát", "Hỏi: khách VIP của ngân hàng năm nay lo điều gì nhất?"];
  const cw = (7.8 - 0.2) / 2;
  b.forEach((t, i) => {
    const x = M + (i % 2) * (cw + 0.2), y = 2.45 + Math.floor(i / 2) * 1.05;
    card(s, x, y, cw, 0.92, C.white, C.line);
    badge(s, x + 0.12, y + 0.22, 0.48, [C.purple, C.blue, C.orange, C.green][Math.floor(i / 2)], String(i + 1), null, 14);
    T(s, t, { x: x + 0.7, y, w: cw - 0.8, h: 0.92, fontSize: 12, valign: "middle" });
  });
  const steps = [["8’", "Ghi S hay K + một lý do theo bảng so sánh", C.orange], ["8’", "Viết lại 2 hành vi S thành K: ai làm, làm gì, khi nào", C.purple], ["4’", "“Với An Phát, Nova làm KAM khi …”", C.blue]];
  const rx = M + 8.1, rw = CW - 8.1;
  steps.forEach(([t, d, c], i) => {
    const y = 2.45 + i * 1.4;
    badge(s, rx, y + 0.2, 0.75, c, t, null, 16);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 1.2, fontSize: 13, valign: "middle" });
  });
}

breakSlide();

// ───────────────────────── 10 — delight = bankrupt ─────────────────────────
{
  const s = base("s22", "Làm hài lòng mọi khách hàng là con đường phá sản", {
    source: "B05: McDonald, Cranfield blog.",
    notes: "McDonald: phải phân loại khách hàng lớn theo tiềm năng tăng lợi nhuận cho nhà cung cấp trong khoảng 3 năm và theo thế mạnh cạnh tranh của nhà cung cấp với từng khách hàng — để đặt mục tiêu và phân bổ nguồn lực có hạn.",
  });
  card(s, M, 2.1, CW, 1.9, C.tPink, C.pink);
  T(s, [{ text: "“One of the quickest ways to go bankrupt is to ‘delight’ your customers!” ", options: { italic: true, bold: true } }, { text: "— McDonald (B05)", options: { fontSize: 14, color: C.muted } }],
    { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 1.9, fontSize: 26, align: "center", valign: "middle" });
  T(s, "Phân loại khách hàng lớn theo:", { x: M, y: 4.3, w: CW, h: 0.45, fontSize: 16, bold: true, color: C.muted });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.85, cw, 1.7, C.tPurple, C.purple);
  T(s, [{ text: "Tiềm năng tăng lợi nhuận", options: { bold: true, breakLine: true } }, { text: "cho agency trong khoảng 3 năm", options: { fontSize: 15 } }], { x: M + 0.35, y: 4.85, w: cw - 0.7, h: 1.7, fontSize: 20, valign: "middle" });
  card(s, M + cw + 0.3, 4.85, cw, 1.7, C.tBlue, C.blue);
  T(s, [{ text: "Thế mạnh cạnh tranh", options: { bold: true, breakLine: true } }, { text: "của agency với từng khách hàng", options: { fontSize: 15 } }], { x: M + cw + 0.65, y: 4.85, w: cw - 0.7, h: 1.7, fontSize: 20, valign: "middle" });
}

// ───────────────────────── 11 — three questions ─────────────────────────
{
  const s = base("s22", "Ba câu hỏi để chọn Key Account", {
    source: "B07: Guesalaga, Adopting key account management – Choose me and I will choose you, Cranfield blog.",
    notes: "Câu thứ ba (đồng đầu tư) là tiêu chí mới nhất, phát hiện qua phỏng vấn lãnh đạo làm KAM.",
  });
  const q = [["Khách hàng này có hấp dẫn không?", "customer attractiveness — chấm có trọng số", C.purple, C.tPurple], ["Agency có vị thế cạnh tranh mạnh với khách hàng này không?", "“Does our company have a strong competitive position to deal with this customer?”", C.blue, C.tBlue], ["Khách hàng có sẵn sàng đồng đầu tư vào quan hệ không?", "“Is this customer willing to co-invest in a partnering relationship with us?”", C.pink, C.tPink]];
  q.forEach(([h, d, c, f], i) => {
    const y = 2.05 + i * 1.5;
    card(s, M, y, CW, 1.32, f, c, 1.5);
    badge(s, M + 0.25, y + 0.26, 0.8, c, String(i + 1), null, 22);
    T(s, [{ text: h, options: { bold: true, fontSize: 20, breakLine: true } }, { text: d, options: { fontSize: 13, italic: true, color: C.muted } }], { x: M + 1.3, y, w: CW - 1.5, h: 1.32, valign: "middle" });
  });
}

// ───────────────────────── 12 — matrix ─────────────────────────
{
  const s = base("s22", "Hai trục đầu điều chỉnh từ khung GE–McKinsey", {
    source: "B07: Guesalaga, Cranfield blog · cách trình bày “cổng” đồng đầu tư: nhận định của người soạn.",
    notes: "Hai câu đầu điều chỉnh từ khung GE–McKinsey (đánh giá danh mục kinh doanh) → đặt ứng viên lên ma trận hai trục. Câu thứ ba là cổng.\nAlt-text: ma trận chín ô, trục dọc sức hấp dẫn của khách hàng, trục ngang vị thế cạnh tranh của agency; góc trên phải tô đậm là vùng ứng viên Key Account.",
  });
  const g = attractMatrix(s, M, 2.0, 6.6, 4.8);
  const cw3 = g.gw / 3, ch3 = g.gh / 3;
  s.addShape(pres.shapes.RECTANGLE, { x: g.gx + cw3, y: g.gy, w: 2 * cw3 - 0.04, h: 2 * ch3 - 0.04, fill: { type: "none" }, line: { color: C.purple, width: 3, dashType: "dash" } });
  T(s, "vùng ứng viên Key Account", { x: g.gx + cw3 + 0.15, y: g.gy + 0.15, w: 2 * cw3 - 0.3, h: 0.4, fontSize: 13, bold: true, color: C.purple });
  const rx = M + 7.0, rw = CW - 7.0;
  card(s, rx, 2.0, rw, 2.0, C.tPurple, C.purple);
  T(s, [{ text: "Trục 1 + 2", options: { bold: true, breakLine: true } }, { text: "hấp dẫn × vị thế — điều chỉnh từ ma trận GE–McKinsey, chấm có trọng số", options: { fontSize: 15 } }], { x: rx + 0.3, y: 2.0, w: rw - 0.6, h: 2.0, fontSize: 18, valign: "middle" });
  card(s, rx, 4.25, rw, 2.0, C.tPink, C.pink);
  T(s, [{ text: "Câu 3 là cổng", options: { bold: true, breakLine: true } }, { text: "ứng viên trong vùng vẫn phải qua cổng đồng đầu tư mới thành Key Account", options: { fontSize: 15 } }], { x: rx + 0.3, y: 4.25, w: rw - 0.6, h: 2.0, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 13 — sub-criteria ─────────────────────────
{
  const s = base("s22", "Mỗi trục có tiêu chí con và trọng số", {
    source: "Tiêu chí con gợi ý cho agency sự kiện: nhận định của người soạn — nhóm có thể sửa.",
    notes: "Để chiếu suốt S6.\nCách chấm: mỗi tiêu chí 1–5 × trọng số (tổng 100) → điểm mỗi trục (thang 100).",
  });
  const cw = (CW - 0.3) / 2;
  [["Sức hấp dẫn của khách hàng", ["Ngân sách sự kiện/năm", "Tiềm năng tăng trong 3 năm", "Biên lợi nhuận kỳ vọng", "Uy tín để làm hồ sơ năng lực", "Thanh toán đúng hạn", "Ngành phù hợp năng lực Nova"], C.purple, C.tPurple],
   ["Vị thế cạnh tranh của agency", ["Quan hệ hiện có: số đầu mối, cấp", "Hiểu ngành và khách của khách hàng", "Kết quả các sự kiện đã làm", "Năng lực đúng loại sự kiện khách cần", "Vị trí so với agency khác"], C.blue, C.tBlue]].forEach(([h, items, c, f], i) => {
    const x = M + i * (cw + 0.3);
    pill(s, x, 1.95, cw, 0.6, c, h, { text: { fontSize: 16 } });
    card(s, x, 2.7, cw, 3.0, f, f);
    T(s, bullets(items), { x: x + 0.35, y: 2.85, w: cw - 0.7, h: 2.75, fontSize: 15, valign: "top", paraSpaceAfter: 5 });
  });
  card(s, M, 5.9, CW, 0.7, C.tYellow, C.yellow);
  T(s, [{ text: "Cách chấm: ", options: { bold: true } }, { text: "mỗi tiêu chí 1–5 × trọng số (tổng 100) → điểm mỗi trục, thang 100" }], { x: M + 0.3, y: 5.9, w: CW - 0.6, h: 0.7, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 14 — scoring An Phát ─────────────────────────
{
  const s = base("s22", "Chấm thử An Phát: hấp dẫn cao, vị thế khá", {
    source: "GIẢ ĐỊNH — chấm trên bảng cùng lớp.",
    notes: "Chấm trên bảng: ngân sách ~2,2–2,4 tỷ/năm, 4 năm hợp tác, thanh toán đúng hạn, chị Hạnh tin Nova, nhưng Nova mới chỉ quen 1–2 người ở An Phát. → hấp dẫn cao, vị thế khá.",
  });
  pill(s, W - M - 2.0, 1.95, 2.0, 0.45, C.yellow, "GIẢ ĐỊNH", { text: { fontSize: 12 } });
  const facts = [["Ngân sách ~2,2–2,4 tỷ/năm", true], ["4 năm hợp tác", true], ["Thanh toán đúng hạn", true], ["Chị Hạnh tin Nova", true], ["Nova chỉ quen 1–2 người ở An Phát", false]];
  facts.forEach(([t, ok], i) => {
    const y = 2.6 + i * 0.78;
    card(s, M, y, 6.0, 0.66, ok ? C.tGreen : C.tPink, ok ? C.green : C.pink);
    T(s, (ok ? "✓  " : "✗  ") + t, { x: M + 0.25, y, w: 5.5, h: 0.66, fontSize: 16, bold: !ok, valign: "middle" });
  });
  const rx = M + 6.4, rw = CW - 6.4;
  [["Sức hấp dẫn", "CAO", 0.85, C.purple], ["Vị thế cạnh tranh", "KHÁ", 0.6, C.blue]].forEach(([h, v, p, c], i) => {
    const y = 2.6 + i * 1.75;
    T(s, h, { x: rx, y, w: rw, h: 0.45, fontSize: 16, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: rx, y: y + 0.55, w: rw, h: 0.6, fill: { color: C.band }, line: { color: C.band, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: rx, y: y + 0.55, w: rw * p, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, v, { x: rx + 0.2, y: y + 0.55, w: 2, h: 0.6, fontSize: 18, bold: true, color: C.white, valign: "middle" });
  });
}

// ───────────────────────── 15 — weak point ─────────────────────────
{
  const s = base("s22", "Điểm yếu của Nova với An Phát là chỉ quen một hai người", {
    notes: "Gợi mở Buổi 8: từ Bow-tie (mọi thông tin đi qua một điểm) sang Diamond (các bộ phận hai bên làm việc trực tiếp).",
  });
  pill(s, M + 0.5, 3.6, 2.4, 0.8, C.purple, "Nova", { text: { fontSize: 18 } });
  pill(s, W - M - 2.9, 3.6, 2.4, 0.8, C.blue, "An Phát", { text: { fontSize: 18 } });
  line(s, M + 2.9, 4.0, W - M - 2.9, 4.0, C.pink, 4);
  pill(s, W / 2 - 1.4, 3.65, 2.8, 0.7, C.white, "chị Hạnh — một sợi dây", { line: C.pink, color: C.ink, text: { fontSize: 14 } });
  card(s, M, 5.0, CW, 1.55, C.tYellow, C.yellow);
  T(s, [{ text: "Nếu đầu mối duy nhất rời đi, quan hệ có thể đứt. ", options: { bold: true } }, { text: "Buổi 8: từ Bow-tie (một điểm nối) sang Diamond (nhiều cặp đối ứng)." }], { x: M + 0.4, y: 5.0, w: CW - 0.8, h: 1.55, fontSize: 18, valign: "middle" });
  T(s, "Vị thế “khá” — chưa “cao” — vì quan hệ chỉ đi qua một người", { x: M, y: 2.2, w: CW, h: 0.6, fontSize: 18, color: C.muted, align: "center" });
}

// ───────────────────────── 16 — choose me ─────────────────────────
{
  const s = base("s23", "Choose me and I will choose you", {
    source: "B07: Guesalaga, Cranfield blog.",
    notes: "KAM hiệu quả cần đồng phát triển, đồng đầu tư. Một khách hàng hấp dẫn, agency có vị thế tốt, nhưng khách hàng không muốn đầu tư lại vào quan hệ → khó thành Key Account.",
  });
  card(s, M, 2.1, CW, 1.7, C.tPurple, C.purple);
  T(s, "“Choose me and I will choose you”", { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.7, fontSize: 34, bold: true, italic: true, color: C.purple, align: "center", valign: "middle" });
  const st = [["Hấp dẫn", C.purple], ["Vị thế tốt", C.blue], ["Đồng đầu tư", C.pink]];
  const cw = 3.0;
  st.forEach(([t, c], i) => {
    const x = M + 0.6 + i * (cw + 0.75);
    pill(s, x, 4.3, cw, 0.9, c, t, { text: { fontSize: 18 } });
    if (i < 2) T(s, "+", { x: x + cw, y: 4.3, w: 0.75, h: 0.9, fontSize: 28, bold: true, align: "center", valign: "middle" });
  });
  card(s, M, 5.6, CW, 0.95, C.tYellow, C.yellow);
  T(s, "Thiếu cổng thứ ba — khách hàng không muốn đầu tư lại — thì khó thành Key Account.", { x: M + 0.35, y: 5.6, w: CW - 0.7, h: 0.95, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 17 — four signs ─────────────────────────
{
  const s = base("s23", "Đồng đầu tư có bốn biểu hiện", {
    source: "Biểu hiện với agency sự kiện: nhận định của người soạn.",
    notes: "Bốn biểu hiện giúp SV tìm bằng chứng “đồng đầu tư” cho từng ứng viên ở Thực hành 2.",
  });
  const sg = [["Hợp đồng khung nhiều năm", "thay vì đấu thầu từng sự kiện", C.purple, C.tPurple], ["Chia sẻ thông tin", "mục tiêu kinh doanh, dữ liệu khách mời, kết quả sau sự kiện", C.blue, C.tBlue], ["Đầu mối cấp cao", "mời agency vào họp kế hoạch năm", C.orange, C.tOrange], ["Thí điểm cùng làm", "chia chi phí, chia rủi ro", C.green, C.tGreen]];
  const cw = (CW - 0.3) / 2;
  sg.forEach(([h, d, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 2.3;
    card(s, x, y, cw, 2.1, f, c, 1.5);
    badge(s, x + 0.3, y + 0.6, 0.9, c, String(i + 1), null, 24);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 15 } }], { x: x + 1.45, y, w: cw - 1.7, h: 2.1, fontSize: 20, valign: "middle" });
  });
}

// ───────────────────────── 18 — Techcombank ─────────────────────────
{
  const s = base("s23", "Khi đối tác muốn đầu tư lại, quan hệ đổi chất", {
    source: "B08 → U08 (Buổi 9): Znews; Tuổi Trẻ (1/2025). Ví dụ TƯƠNG TỰ — quan hệ nhà sản xuất – nhà tài trợ, không phải agency – khách hàng.",
    notes: "Nói: “Đây là quan hệ nhà sản xuất – nhà tài trợ, không phải agency – khách hàng. Nhưng nó cho thấy khi một đối tác muốn đầu tư lại, quan hệ đổi hẳn chất.”",
  });
  pill(s, W - M - 3.0, 1.95, 3.0, 0.45, C.yellow, "VÍ DỤ TƯƠNG TỰ", { text: { fontSize: 12 } });
  pill(s, M, 2.9, 4.8, 1.0, C.purple, "2024 · nhà tài trợ concert", { text: { fontSize: 18 } });
  arrow(s, M + 4.95, 3.4, M + 6.4, 3.4, C.ink, 4);
  pill(s, M + 6.55, 2.9, CW - 6.55, 1.0, C.blue, "2025 · “nhà đồng đầu tư”", { text: { fontSize: 18 } });
  T(s, "Techcombank và các concert “Anh trai vượt ngàn chông gai” (Yeah1)", { x: M, y: 4.05, w: CW, h: 0.45, fontSize: 14, italic: true, color: C.muted, align: "center" });
  card(s, M, 4.9, CW, 1.65, C.tYellow, C.yellow);
  T(s, "Khi một đối tác muốn đầu tư lại vào quan hệ, quan hệ đổi hẳn chất — từ mua bán sang cùng làm.", { x: M + 0.4, y: 4.9, w: CW - 0.8, h: 1.65, fontSize: 20, bold: true, valign: "middle" });
}

// ───────────────────────── 19 — not chosen ─────────────────────────
{
  const s = base("s23", "Không chọn không có nghĩa là bỏ", {
    source: "Nhận định của người soạn.",
    notes: "Khách hàng không phải Key Account vẫn được phục vụ tốt và có lời, nhưng theo cách chuẩn hóa hơn (ít nguồn lực riêng). Buổi 6 sẽ dùng CLV và chi phí phục vụ để quyết định chính xác hơn.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.1, cw, 3.2, C.tPurple, C.purple);
  T(s, [{ text: "Key Account", options: { bold: true, fontSize: 24, breakLine: true } }, { text: "nguồn lực riêng, kế hoạch riêng, đầu mối nhiều cấp", options: { fontSize: 16 } }], { x: M + 0.4, y: 2.1, w: cw - 0.8, h: 3.2, valign: "middle", paraSpaceAfter: 8 });
  card(s, M + cw + 0.3, 2.1, cw, 3.2, C.tGreen, C.green);
  T(s, [{ text: "Khách hàng khác", options: { bold: true, fontSize: 24, breakLine: true } }, { text: "vẫn phục vụ tốt và có lời — theo cách chuẩn hóa, ít nguồn lực riêng", options: { fontSize: 16 } }], { x: M + cw + 0.7, y: 2.1, w: cw - 0.8, h: 3.2, valign: "middle", paraSpaceAfter: 8 });
  card(s, M, 5.6, CW, 0.95, C.tYellow, C.yellow);
  T(s, "Buổi 6: CLV và chi phí phục vụ (cost-to-serve) giúp quyết định chính xác hơn.", { x: M + 0.35, y: 5.6, w: CW - 0.7, h: 0.95, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s23", "Thực hành 2 · Nova chọn tối đa hai Key Account", {
    source: "Phiếu W02_activity_S6_chon_key_account.md · Tình huống giả định.",
    notes: "S6 — Thực hành 2 (30 phút): 3 · 15 · 8 · 4.\nLời mở đầu: “Nova chỉ đủ người cho hai Key Account. Chấm năm ứng viên theo hai trục và qua cổng đồng đầu tư. Sau đó anh Đức — CEO — sẽ đi hỏi từng bàn: vì sao?”\nVới 3 khách hàng không chọn, nhóm ghi Nova phục vụ theo cách nào.",
  });
  const cand = [["Ngân hàng An Phát", "~2,3 tỷ", "4 năm; đúng hạn; chỉ quen 1–2 người; sẵn sàng bàn hợp đồng khung 2 năm"], ["Địa ốc Sông Xanh", "~3,5 tỷ", "đấu thầu theo giá; trả sau ~90 ngày; năm nào cũng đổi agency"], ["Dược phẩm MediPharm", "~1,2 tỷ", "biên cao; tuân thủ chặt; Nova ít kinh nghiệm; muốn cùng thiết kế định dạng mới"], ["Đại học Bright Future", "~0,6 tỷ", "ổn định, đơn giản, ít tiềm năng tăng"], ["Thực phẩm Bếp Việt", "~1,8 tỷ", "tăng nhanh; đề nghị chia chi phí thí điểm; Nova yếu activation ngoài trời"]];
  const tw = 8.0;
  cand.forEach(([n, rev, note], i) => {
    const y = 1.95 + i * 0.86;
    card(s, M, y, tw, 0.76, i % 2 ? C.white : C.band, i % 2 ? C.line : C.band);
    badge(s, M + 0.15, y + 0.15, 0.46, [C.purple, C.orange, C.blue, C.green, C.pink][i], String(i + 1), null, 14);
    T(s, n, { x: M + 0.75, y, w: 2.3, h: 0.76, fontSize: 13, bold: true, valign: "middle" });
    T(s, rev, { x: M + 3.05, y, w: 0.9, h: 0.76, fontSize: 13, bold: true, valign: "middle" });
    T(s, note, { x: M + 3.95, y, w: tw - 4.1, h: 0.76, fontSize: 11, valign: "middle" });
  });
  const steps = [["15’", "Chấm 2 trục + cổng đồng đầu tư; đặt lên ma trận; chọn ≤ 2", C.orange], ["2×4’", "Xoay trạm: vai anh Đức — CEO Nova · 🟨 câu hỏi · 🟥 lo ngại", C.pink], ["4’", "Về bàn, sửa một điểm", C.green]];
  const rx = M + 8.3, rw = CW - 8.3;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.45;
    badge(s, rx, y + 0.2, 0.8, c, t, null, t.length > 3 ? 13 : 16);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 1.25, fontSize: 12, valign: "middle" });
  });
  card(s, rx, 6.2, rw, 0.45, C.tYellow, C.yellow);
  T(s, "Nova chỉ đủ người cho tối đa 2 Key Account", { x: rx + 0.15, y: 6.2, w: rw - 0.3, h: 0.45, fontSize: 11, bold: true, valign: "middle" });
}

// ───────────────────────── 20 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 2", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ SMP: với khách hàng từ dự án cũ, nhóm ghi một đoạn: khách hàng đạt ba tiêu chí đến đâu, vì sao chọn làm Key Account cho kế hoạch.",
  });
  summary3([["2.1", "KAM không phải “bán hàng xịn hơn” mà là quản trị quan hệ dài hạn, hai chiều — nhiều người, có kế hoạch và nguồn lực riêng."],
    ["2.2", "Chọn Key Account bằng hai trục chấm có trọng số (sức hấp dẫn, vị thế cạnh tranh) và cổng đồng đầu tư."],
    ["→", "Key Account không phải khách hàng lớn nhất, mà là khách hàng đáng và muốn cùng đầu tư."]], s,
    [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "một đoạn — khách hàng của nhóm đạt ba tiêu chí đến đâu, vì sao chọn làm Key Account." }]);
}

// ───────────────────────── 21 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) khác biệt nói về quan hệ, thời gian, giá trị cho khách hàng, không chỉ “chăm sóc kỹ hơn”; (b) SV không mặc định khách hàng cũ là Key Account.\nCâu nối Buổi 3: “Đã chọn Key Account thì phải hiểu họ hơn chính họ. Buổi sau: thế giới của khách hàng, hành trình của khách hàng, và ai thật sự quyết định.”",
  });
  exitTicket(s, ["Một điểm khác biệt giữa Sales và KAM, kèm ví dụ từ dự án sự kiện cũ của nhóm bạn.", "Khách hàng trong dự án cũ của nhóm đạt ba tiêu chí đến đâu? Tiêu chí nào yếu nhất?"],
    [{ text: "Buổi 3: ", options: { bold: true } }, { text: "đã chọn Key Account thì phải hiểu họ hơn chính họ — thế giới của khách hàng, hành trình của khách hàng, và ai thật sự quyết định." }]);
}

refSlides([
  ["B01", "Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management: Designing customer-centric processes for mutual growth. Kogan Page."],
  ["B02", "Millman, T., & Wilson, K. (1995). From key account selling to key account management. Journal of Marketing Practice: Applied Marketing Science, 1(1), 9–21."],
  ["B03", "McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757."],
  ["B04", "Homburg, C., Workman, J. P., Jr., & Jensen, O. (2002). A configurational perspective on key account management. Journal of Marketing, 66(2), 38–60."],
  ["B05", "McDonald, M. (n.d.). Why many companies get key account management hopelessly wrong. Cranfield School of Management Executive Development Blog."],
  ["B07", "Guesalaga, R. (n.d.). Adopting key account management – Choose me and I will choose you. Cranfield School of Management Executive Development Blog."],
  ["B08", "Xem U08, U11 (Buổi 9): Znews (2025); Tuổi Trẻ Online (2025) — Techcombank và “Anh trai vượt ngàn chông gai”."],
], "buoi-02_tu-lieu-tong-hop.md", 7);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
