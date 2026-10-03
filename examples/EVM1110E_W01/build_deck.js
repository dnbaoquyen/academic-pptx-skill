// Buổi 1 — EVM1110E · Định hình hệ sinh thái các bên liên quan bên ngoài
// Deck generated from courses/EVM1110E/lessons/W01_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W01_Stakeholder_Ecosystem.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 1: Định hình hệ sinh thái các bên liên quan bên ngoài";
const OUT = "EVM1110E_W01_Stakeholder_Ecosystem.pptx";
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
  { key: "s11", label: "1.1 Hệ sinh thái", c: C.purple },
  { key: "s12", label: "1.2 Primary · Secondary", c: C.blue },
  { key: "s13", label: "1.3 Đo quyền lực", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a tiny Power-Interest grid
function glyph(slide, x, y, s) {
  const g = s * 0.1, c = (s - g) / 2;
  [[C.blue, 0, 0], [C.purple, 1, 0], [C.green, 0, 1], [C.orange, 1, 1]].forEach(([col, i, j]) =>
    slide.addShape(pres.shapes.RECTANGLE, { x: x + i * (c + g), y: y + j * (c + g), w: c, h: c, fill: { color: col }, line: { color: col, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 1   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
  T(s, "EVM1110E · Buổi 1   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
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
// ───────────────────────── shared helpers for this deck ─────────────────────────
function venn3(s, cx, cy, r, labels, cols, o = {}) {
  const pts = [[cx - r * 0.6, cy - r * 0.35], [cx + r * 0.6, cy - r * 0.35], [cx, cy + r * 0.62]];
  pts.forEach(([x, y], i) => s.addShape(pres.shapes.OVAL, { x: x - r, y: y - r, w: 2 * r, h: 2 * r, fill: { color: cols[i], transparency: 72 }, line: { color: cols[i], width: 2 } }));
  const lp = [[cx - r * 1.5, cy - r * 1.72], [cx + r * 0.3, cy - r * 1.72], [cx - r * 0.6, cy + r * 1.2]];
  labels.forEach((t, i) => T(s, t, { x: lp[i][0], y: lp[i][1], w: r * 1.2, h: 0.45, fontSize: o.size || 14, bold: true, align: "center" }));
}
function grid2x2(s, x, y, w, h, cells, o = {}) {
  const ax = 0.45, gx = x + ax, gw = w - ax, gh = h - ax, gap = 0.1, cw = (gw - gap) / 2, ch = (gh - gap) / 2;
  const pos = [[0, 0], [1, 0], [0, 1], [1, 1]];
  const geo = [];
  cells.forEach(([name, body, c, f], i) => {
    const [ci, cj] = pos[i], cx = gx + ci * (cw + gap), cy = y + cj * (ch + gap);
    geo.push({ x: cx, y: cy, w: cw, h: ch });
    card(s, cx, cy, cw, ch, f, c, 1.5);
    T(s, name, { x: cx + 0.2, y: cy + 0.12, w: cw - 0.4, h: 0.45, fontSize: o.nameSize || 16, bold: true });
    if (body) T(s, body, { x: cx + 0.2, y: cy + 0.6, w: cw - 0.4, h: ch - 0.7, fontSize: o.bodySize || 13, valign: "top" });
  });
  line(s, x + 0.36, y + gh, x + 0.36, y, C.muted, 1.5, { end: "triangle" });
  T(s, o.yLabel || "Quyền lực  →  cao", { x: x - gh / 2 + 0.1, y: y + gh / 2 - 0.15, w: gh, h: 0.3, fontSize: 11, color: C.muted, align: "center", rotate: 270 });
  line(s, gx, y + gh + 0.2, gx + gw, y + gh + 0.2, C.muted, 1.5, { end: "triangle" });
  T(s, o.xLabel || "Mức độ quan tâm  →  cao", { x: gx, y: y + gh + 0.24, w: gw, h: 0.22, fontSize: 11, color: C.muted, align: "center" });
  return geo;
}
const GRID = [["Keep Satisfied", "Giữ hài lòng: đáp ứng yêu cầu, không làm phiền quá mức, theo dõi dấu hiệu họ “thức dậy”", C.blue, C.tBlue],
  ["Manage Closely", "Quản lý chặt: tham vấn thường xuyên, cùng ra quyết định", C.purple, C.tPurple],
  ["Monitor", "Theo dõi: nỗ lực tối thiểu", C.green, C.tGreen],
  ["Keep Informed", "Thông tin đầy đủ: cập nhật định kỳ, lắng nghe — có thể thành đồng minh hoặc nguồn khủng hoảng", C.orange, C.tOrange]];

// ───────────────────────── 1 — Title ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  // ecosystem: agency in middle, six partners around
  const cx = 10.15, cy = 3.6, R = 2.1;
  const parts = [["Khách hàng", C.purple], ["Nhà tài trợ", C.pink], ["Địa điểm", C.blue], ["Báo chí – KOL", C.orange], ["Nhà cung cấp", C.green], ["Cơ quan quản lý", C.purple]];
  parts.forEach(([t, c], i) => {
    const a = (-90 + i * 60) * Math.PI / 180, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    line(s, cx, cy, x, y, c, 2);
    const nx = cx + R * Math.cos((-90 + ((i + 1) % 6) * 60) * Math.PI / 180), ny = cy + R * Math.sin((-90 + ((i + 1) % 6) * 60) * Math.PI / 180);
    line(s, x, y, nx, ny, C.line, 1.25, { dash: "dash" });
  });
  parts.forEach(([t, c], i) => {
    const a = (-90 + i * 60) * Math.PI / 180, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    pill(s, x - 0.95, y - 0.27, 1.9, 0.54, c, t, { text: { fontSize: 11 } });
  });
  s.addShape(pres.shapes.OVAL, { x: cx - 0.7, y: cy - 0.7, w: 1.4, h: 1.4, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, "Agency", { x: cx - 0.7, y: cy - 0.7, w: 1.4, h: 1.4, fontSize: 15, bold: true, align: "center", valign: "middle" });
  pill(s, M, 1.0, 2.9, 0.46, C.yellow, "EVM1110E  ·  Buổi 1 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Định hình hệ sinh thái các bên liên quan bên ngoài", { x: M, y: 3.75, w: 6.6, h: 1.0, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Stakeholders Management for Events", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: LECTURER },
  ], { x: M, y: 5.0, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1).\nAlt-text: agency ở giữa, sáu nhóm bên liên quan bên ngoài xếp quanh và nối với nhau bằng nét đứt — một hệ sinh thái, không chỉ một danh sách.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Sự kiện hỏng thường vì những người ta không trực tiếp quản lý", {
    notes: "S1 — Khởi động. Hỏi to: “Nhớ lại một sự kiện các bạn từng làm hoặc từng dự mà có trục trặc. Trục trặc đến từ ai?”\nGhi từ khóa SV trả lời lên bảng — thường là khách sạn, nhà cung cấp, khách hàng đổi ý, thời tiết, giấy phép… Gần như không ai trong số đó là nhân viên của agency.",
  });
  card(s, M, 2.2, CW, 2.3, C.tPink, C.pink);
  T(s, "Nhớ lại một sự kiện có trục trặc. Trục trặc đến từ ai?", { x: M + 0.5, y: 2.2, w: CW - 1.0, h: 2.3, fontSize: 32, bold: true, align: "center", valign: "middle" });
  T(s, "Ghi từ khóa lên bảng", { x: M, y: 4.85, w: CW, h: 0.45, fontSize: 15, bold: true, color: C.muted, align: "center" });
  ["khách sạn?", "nhà cung cấp?", "khách hàng đổi ý?", "giấy phép?", "báo chí?"].forEach((t, i) => {
    const pw = (CW - 4 * 0.2) / 5;
    pill(s, M + i * (pw + 0.2), 5.45, pw, 0.7, C.white, t, { line: [C.blue, C.orange, C.purple, C.green, C.pink][i], color: C.ink, text: { fontSize: 15, bold: false } });
  });
}

// ───────────────────────── 3 — coordinate people we don't manage ─────────────────────────
{
  const s = base("open", "Nghề sự kiện là điều phối những người mình không quản lý", {
    notes: "Một công ty tổ chức sự kiện không tự làm ra sự kiện. Địa điểm là của khách sạn, âm thanh ánh sáng là của nhà cung cấp, tiền là của khách hàng và nhà tài trợ, sự chú ý là của báo chí và KOL, giấy phép là của cơ quan chức năng.\nCâu hỏi của môn: làm thế nào để xây dựng, duy trì và phát triển quan hệ với các bên liên quan bên ngoài sao cho sự kiện thành công — và khách hàng quay lại?\nAlt-text: năm nguồn lực của sự kiện đến từ năm bên khác nhau.",
  });
  const res = [["Địa điểm", "khách sạn, trung tâm hội nghị", C.blue, C.tBlue], ["Tiền", "khách hàng, nhà tài trợ", C.purple, C.tPurple], ["Sự chú ý", "báo chí, KOL", C.orange, C.tOrange], ["Giấy phép", "cơ quan chức năng", C.green, C.tGreen], ["Thiết bị", "nhà cung cấp AV, sân khấu", C.pink, C.tPink]];
  const cw = (CW - 4 * 0.25) / 5;
  res.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.25);
    card(s, x, 2.15, cw, 2.7, f, c, 1.5);
    badge(s, x + cw / 2 - 0.45, 2.35, 0.9, c, String(i + 1), null, 22);
    T(s, h, { x: x + 0.15, y: 3.4, w: cw - 0.3, h: 0.5, fontSize: 19, bold: true, align: "center" });
    T(s, "đến từ", { x: x + 0.15, y: 3.9, w: cw - 0.3, h: 0.3, fontSize: 11, color: C.muted, align: "center" });
    T(s, d, { x: x + 0.15, y: 4.2, w: cw - 0.3, h: 0.6, fontSize: 13, bold: true, align: "center", valign: "top" });
  });
  card(s, M, 5.2, CW, 1.35, C.tYellow, C.yellow);
  T(s, [{ text: "Câu hỏi của môn: ", options: { bold: true } }, { text: "xây dựng, duy trì và phát triển quan hệ với các bên bên ngoài thế nào để sự kiện thành công — và khách hàng quay lại?" }],
    { x: M + 0.35, y: 5.2, w: CW - 0.7, h: 1.35, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 4 — scope ─────────────────────────
{
  const s = base("open", "Môn học chỉ xét các bên liên quan bên ngoài", {
    notes: "Nói rõ: nhân sự, crew, tình nguyện viên thuộc môn Quản lý đội nhóm trong tổ chức sự kiện; quản lý và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện.",
  });
  const cw = (CW - 0.3) / 2;
  pill(s, M, 2.05, cw, 0.6, C.green, "Trong môn này", { text: { fontSize: 17 } });
  card(s, M, 2.8, cw, 3.75, C.tGreen, C.tGreen);
  T(s, bullets(["Khách hàng (Key Account)", "Nhà đầu tư, nhà tài trợ", "Nhà cung ứng", "Địa điểm & hạ tầng", "Truyền thông, báo chí", "KOL, influencer", "Công chúng mục tiêu", "Cơ quan quản lý"]), { x: M + 0.35, y: 2.95, w: cw - 0.7, h: 3.5, fontSize: 16, valign: "top", paraSpaceAfter: 4 });
  pill(s, M + cw + 0.3, 2.05, cw, 0.6, C.muted, "Không thuộc môn này", { text: { fontSize: 17 } });
  card(s, M + cw + 0.3, 2.8, cw, 3.75, C.white, C.line);
  T(s, [{ text: "Nhân sự, crew, tình nguyện viên", options: { bold: true, breakLine: true } }, { text: "→ Quản lý đội nhóm trong tổ chức sự kiện", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: " ", options: { breakLine: true } }, { text: "Quản lý, an toàn đám đông", options: { bold: true, breakLine: true } }, { text: "→ Quản trị rủi ro sự kiện", options: { fontSize: 14, color: C.muted } }],
    { x: M + cw + 0.65, y: 2.95, w: cw - 0.7, h: 3.5, fontSize: 17, valign: "top", paraSpaceAfter: 4 });
}

// ───────────────────────── 5 — client is the axis ─────────────────────────
{
  const s = base("open", "Khách hàng là trục; mọi bên khác phục vụ hành trình của khách hàng", {
    notes: "Bản đồ 4 phần: (1) Nền tảng — Buổi 1: nhìn thấy toàn bộ hệ sinh thái, đo quyền lực. (2) KAM — Buổi 2–8: trục của môn. (3) Điều phối các bên liên quan phục vụ hành trình khách hàng — Buổi 9–12: mỗi bên được gắn vào một điểm chạm trên hành trình của khách hàng. (4) Đánh giá — Buổi 13–15: hoàn thiện và bảo vệ kế hoạch.\nNói: “Hãy hình dung khách hàng ở giữa; mọi bên khác là nguồn lực ta huy động để phục vụ hành trình của khách hàng đó.”\nAlt-text: sơ đồ tâm – vòng ngoài: khách hàng ở tâm, bốn phần học phần xếp quanh.",
  });
  const cx = W / 2, cy = 4.3;
  s.addShape(pres.shapes.OVAL, { x: cx - 1.3, y: cy - 0.85, w: 2.6, h: 1.7, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, "Khách hàng", { x: cx - 1.3, y: cy - 0.85, w: 2.6, h: 1.7, fontSize: 22, bold: true, align: "center", valign: "middle" });
  const ps = [["Phần 1 · Buổi 1", "Nền tảng: hệ sinh thái, đo quyền lực", M, 2.0, C.orange, true], ["Phần 2 · Buổi 2–8", "Quản trị khách hàng trọng điểm (KAM)", W - M - 4.2, 2.0, C.purple], ["Phần 3 · Buổi 9–12", "Điều phối các bên phục vụ hành trình khách hàng", M, 5.25, C.blue], ["Phần 4 · Buổi 13–15", "Đánh giá: hoàn thiện, bảo vệ kế hoạch", W - M - 4.2, 5.25, C.green]];
  ps.forEach(([k, t, x, y, c, hl]) => {
    card(s, x, y, 4.2, 1.3, hl ? c : C.white, c, 1.5);
    T(s, [{ text: k, options: { bold: true, fontSize: 13, breakLine: true } }, { text: t, options: { fontSize: 15, bold: true } }], { x: x + 0.25, y, w: 3.7, h: 1.3, color: hl ? C.ink : C.ink, valign: "middle" });
    line(s, x < cx ? x + 4.2 : x, y + 0.65, x < cx ? cx - 1.15 : cx + 1.15, y < cy ? cy - 0.4 : cy + 0.4, c, 2, { dash: "dash" });
  });
}

// ───────────────────────── 6 — assessment ─────────────────────────
{
  const s = base("open", "Điểm cuối kỳ chiếm 50% và được xây dần từ hôm nay", {
    source: "Đề cương chi tiết học phần EVM1110E (UEF).",
    notes: "Bảng đánh giá theo đề cương: chuyên cần 10% · bài tập 20% · giữa kỳ (thuyết trình + làm việc nhóm) 20% · cuối kỳ (Stakeholder Management Plan + phản biện) 50%.",
  });
  const parts = [["Chuyên cần", "AM1", 10, C.green], ["Bài tập", "AM2", 20, C.blue], ["Giữa kỳ · thuyết trình + làm việc nhóm", "AM3, AM9", 20, C.orange], ["Cuối kỳ · Stakeholder Management Plan + phản biện", "AM7, AM9", 50, C.purple]];
  let x = M;
  parts.forEach(([t, am, p, c]) => {
    const w = CW * p / 100;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.3, w: w - 0.05, h: 1.3, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, p + "%", { x, y: 2.3, w: w - 0.05, h: 1.3, fontSize: p >= 20 ? 32 : 22, bold: true, color: dark(c), align: "center", valign: "middle" });
    x += w;
  });
  const cw = (CW - 0.9) / 4;
  parts.forEach(([t, am, p, c], i) => {
    const xx = M + i * (cw + 0.3);
    card(s, xx, 4.0, cw, 1.6, C.white, c, 1.5);
    T(s, [{ text: t, options: { bold: true, breakLine: true } }, { text: am, options: { fontSize: 12, color: C.muted } }], { x: xx + 0.2, y: 4.0, w: cw - 0.4, h: 1.6, fontSize: 15, valign: "middle" });
  });
  card(s, M, 5.85, CW, 0.75, C.tYellow, C.yellow);
  T(s, "Bài cuối kỳ được xây từng mảnh qua mỗi buổi học — hôm nay là mảnh đầu tiên.", { x: M + 0.3, y: 5.85, w: CW - 0.6, h: 0.75, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 7 — final project ─────────────────────────
{
  const s = base("open", "Bài cuối kỳ: Stakeholder Management Plan cho khách hàng từ dự án cũ", {
    notes: "Mỗi nhóm chọn 1 khách hàng từ dự án sự kiện đã làm ở các môn trước — không làm dự án mới. Mỗi buổi học bổ sung một mảnh; hôm nay là bản đồ các bên liên quan. Mọi bài nộp qua LMS theo thời hạn quy định.\n[NEEDS PROFESSOR INPUT: quy định chuyên cần, nộp trễ, sử dụng AI — nếu có]",
  });
  const st = [["1", "Chọn 1 khách hàng từ dự án cũ", "không làm dự án mới", C.purple, C.tPurple], ["2", "Mỗi buổi thêm 1 mảnh", "hôm nay: bản đồ các bên liên quan", C.blue, C.tBlue], ["3", "Phản biện cuối kỳ", "bảo vệ kế hoạch trước hội đồng", C.pink, C.tPink]];
  const cw = (CW - 2 * 0.55) / 3;
  st.forEach(([k, h, d, c, f], i) => {
    const x = M + i * (cw + 0.55);
    card(s, x, 2.2, cw, 3.0, f, c, 1.5);
    badge(s, x + 0.3, 2.45, 0.9, c, k, C.white, 26);
    T(s, h, { x: x + 0.3, y: 3.55, w: cw - 0.6, h: 0.9, fontSize: 20, bold: true, valign: "top" });
    T(s, d, { x: x + 0.3, y: 4.45, w: cw - 0.6, h: 0.65, fontSize: 14, color: C.muted, valign: "top" });
    if (i < 2) arrow(s, x + cw + 0.08, 3.7, x + cw + 0.47, 3.7, C.ink, 2.5);
  });
  card(s, M, 5.55, CW, 1.0, C.white, C.line);
  T(s, [{ text: "Nộp qua LMS ", options: { bold: true } }, { text: "theo thời hạn quy định · quy định chuyên cần, nộp trễ, dùng AI: [giảng viên bổ sung]" }], { x: M + 0.35, y: 5.55, w: CW - 0.7, h: 1.0, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 8 — Freeman ─────────────────────────
{
  const s = base("s11", "Bên liên quan là ai có thể ảnh hưởng — hoặc bị ảnh hưởng — bởi sự kiện", {
    source: "A01: Freeman (1984), Strategic management: A stakeholder approach · A02: Van Niekerk & Getz (2019).",
    notes: "Chú ý hai chiều của định nghĩa: có thể ảnh hưởng (nhà tài trợ rút tiền) hoặc bị ảnh hưởng (cư dân quanh địa điểm chịu tiếng ồn). Cả hai đều là bên liên quan.\nÁp dụng vào sự kiện (Van Niekerk & Getz, 2019): bên liên quan của sự kiện là những ai có “phần” (stake) trong sự kiện — góp nguồn lực, nhận lợi ích, chịu tác động, hoặc có quyền cho phép/ngăn cản sự kiện diễn ra.\nHiểu lầm: “Bên liên quan = người trả tiền cho mình” → định nghĩa gồm cả người bị ảnh hưởng và người có quyền ngăn cản.",
  });
  card(s, M, 2.05, CW, 1.5, C.tPurple, C.purple);
  T(s, [{ text: "Bên liên quan (stakeholder): ", options: { bold: true } }, { text: "bất kỳ nhóm hoặc cá nhân nào có thể ảnh hưởng đến, hoặc bị ảnh hưởng bởi, việc đạt được mục tiêu của tổ chức." }, { text: "  — Freeman (1984)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.35, y: 2.05, w: CW - 0.7, h: 1.5, fontSize: 19, valign: "middle" });
  pill(s, M + 4.1, 4.4, 4.2, 1.0, C.yellow, "Sự kiện", { text: { fontSize: 22 } });
  card(s, M, 4.0, 3.4, 1.8, C.tPink, C.pink);
  T(s, [{ text: "Có thể ảnh hưởng", options: { bold: true, breakLine: true } }, { text: "nhà tài trợ rút tiền", options: { fontSize: 14 } }], { x: M + 0.25, y: 4.0, w: 2.9, h: 1.8, fontSize: 18, valign: "middle" });
  arrow(s, M + 3.45, 4.7, M + 4.05, 4.7, C.pink, 3);
  card(s, W - M - 3.4, 4.0, 3.4, 1.8, C.tBlue, C.blue);
  T(s, [{ text: "Bị ảnh hưởng", options: { bold: true, breakLine: true } }, { text: "cư dân chịu tiếng ồn", options: { fontSize: 14 } }], { x: W - M - 3.15, y: 4.0, w: 2.9, h: 1.8, fontSize: 18, valign: "middle" });
  arrow(s, M + 8.35, 5.1, W - M - 3.45, 5.1, C.blue, 3);
  T(s, "+ ai góp nguồn lực, nhận lợi ích, hoặc có quyền cho phép / ngăn cản sự kiện (Van Niekerk & Getz, 2019)", { x: M, y: 6.05, w: CW, h: 0.5, fontSize: 13, italic: true, color: C.muted, align: "center" });
}

// ───────────────────────── 9 — list vs ecosystem ─────────────────────────
{
  const s = base("s11", "Một hệ sinh thái nhìn thấy quan hệ giữa các bên, không chỉ danh sách", {
    notes: "Một danh sách liệt kê từng bên riêng lẻ. Một hệ sinh thái nhìn thêm quan hệ giữa các bên với nhau: nhà tài trợ quan tâm vì báo chí đưa tin; báo chí đến vì có KOL; KOL nhận lời vì thương hiệu của khách hàng. Kéo một sợi dây, cả mạng rung.\nCâu hỏi gợi mở: “Nếu khách sạn đột ngột đổi phòng hội nghị sang phòng nhỏ hơn, những bên nào khác bị ảnh hưởng dây chuyền?” — vẽ nhanh chuỗi lên bảng.\nAlt-text: bên trái danh sách rời rạc; bên phải cùng các bên nối thành mạng lưới.",
  });
  const names = ["Khách hàng", "Nhà tài trợ", "Báo chí", "KOL", "Khách sạn"];
  const cols = [C.purple, C.pink, C.orange, C.green, C.blue];
  T(s, "Danh sách", { x: M, y: 2.0, w: 4.8, h: 0.45, fontSize: 17, bold: true, color: C.muted });
  names.forEach((t, i) => {
    card(s, M, 2.55 + i * 0.68, 4.8, 0.56, C.white, C.line);
    T(s, "•  " + t, { x: M + 0.25, y: 2.55 + i * 0.68, w: 4.4, h: 0.56, fontSize: 15, valign: "middle" });
  });
  T(s, "Hệ sinh thái", { x: M + 5.6, y: 2.0, w: 6.0, h: 0.45, fontSize: 17, bold: true, color: C.purple });
  const cx = M + 8.6, cy = 4.3, R = 1.75;
  const pts = names.map((_, i) => { const a = (-90 + i * 72) * Math.PI / 180; return [cx + R * 1.3 * Math.cos(a), cy + R * Math.sin(a)]; });
  [[0, 1], [1, 2], [2, 3], [3, 0], [4, 0], [4, 1], [1, 3]].forEach(([a, b]) => line(s, pts[a][0], pts[a][1], pts[b][0], pts[b][1], C.muted, 1.5));
  pts.forEach(([x, y], i) => pill(s, x - 0.9, y - 0.27, 1.8, 0.54, cols[i], names[i], { text: { fontSize: 12 } }));
  card(s, M, 6.05, 4.8, 0.55, C.tYellow, C.yellow);
  T(s, "Kéo một sợi dây, cả mạng rung.", { x: M + 0.25, y: 6.05, w: 4.4, h: 0.55, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 10 — six features ─────────────────────────
{
  const s = base("s11", "Hệ sinh thái sự kiện có 6 đặc điểm riêng", {
    source: "Định nghĩa làm việc của môn, dựng từ Freeman (1984), Van Niekerk & Getz (2019), Getz, Andersson & Larson (2006) · A09: Tuổi Trẻ (29/1/2026).",
    notes: "[VERIFY: thuật ngữ “pulsating organisation” (Toffler, 1990; Hanlon & Cuskelly, 2002) — kiểm tra trích dẫn trước khi dùng]\nĐịnh nghĩa làm việc: hệ sinh thái bên liên quan bên ngoài của sự kiện là mạng lưới các tổ chức, cá nhân ngoài agency cùng góp nguồn lực, nhận giá trị, chịu tác động hoặc có quyền cho phép sự kiện, và phụ thuộc lẫn nhau.\nMột bên, nhiều vai (Getz, Andersson & Larson, 2006): bên liên quan chủ chốt giữ nhiều vai cùng lúc — ví dụ khách sạn vừa là địa điểm vừa là nhà cung cấp dịch vụ (quay lại ở Buổi 12).\nVí dụ thật — DIFF 2026 (30/5–11/7/2026): UBND TP Đà Nẵng và các đơn vị tổ chức; 10 đội pháo hoa từ 9 quốc gia, vùng lãnh thổ; khán giả, du khách; doanh nghiệp du lịch – lưu trú; nhà tài trợ; báo chí; người dân quanh sông Hàn. Hỏi: “Nếu Nova là agency làm dịch vụ cho một nhà tài trợ của DIFF, hệ sinh thái của Nova gồm những ai?” Vai trò cụ thể của từng doanh nghiệp trong DIFF chưa kiểm chứng — không khẳng định.",
  });
  const f = [["Tạm thời", "tập hợp quanh một sự kiện rồi tan", C.purple], ["Phụ thuộc lẫn nhau", "một mắt xích hỏng kéo cả chuỗi", C.blue], ["Mục tiêu có thể xung đột", "tiết kiệm ↔ biên lợi nhuận ↔ hiển thị ↔ yên tĩnh", C.pink], ["Trao đổi giá trị", "góp nguồn lực để đổi lấy lợi ích", C.orange], ["Thay đổi theo giai đoạn", "trước – trong – sau, mỗi lúc một bên nổi bật", C.green], ["Lây lan danh tiếng", "sự cố của một bên lan sang khách hàng và agency", C.purple]];
  const cw = (CW - 2 * 0.3) / 3;
  f.forEach(([h, d, c], i) => {
    const x = M + (i % 3) * (cw + 0.3), y = 2.0 + Math.floor(i / 3) * 1.7;
    card(s, x, y, cw, 1.5, C.white, c, 1.5);
    badge(s, x + 0.2, y + 0.42, 0.66, c, String(i + 1));
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 12, color: C.muted } }], { x: x + 1.05, y, w: cw - 1.2, h: 1.5, fontSize: 16, valign: "middle" });
  });
  card(s, M, 5.5, CW, 1.1, C.tYellow, C.yellow);
  T(s, [{ text: "Một bên, nhiều vai: ", options: { bold: true } }, { text: "khách sạn vừa là địa điểm vừa là nhà cung cấp dịch vụ (Getz et al., 2006). Ví dụ thật: DIFF 2026 — chính quyền, đội pháo hoa, du khách, doanh nghiệp lưu trú, nhà tài trợ, báo chí, người dân sông Hàn." }],
    { x: M + 0.3, y: 5.5, w: CW - 0.6, h: 1.1, fontSize: 13, valign: "middle" });
}

// ───────────────────────── 11 — phases ─────────────────────────
{
  const s = base("s11", "Tầm quan trọng của mỗi bên thay đổi theo giai đoạn sự kiện", {
    notes: "Trước sự kiện: nhà tài trợ, địa điểm, cơ quan cấp phép nổi bật; trong sự kiện: nhà cung cấp kỹ thuật, khách tham dự; sau sự kiện: báo chí, khách hàng (đánh giá, tái ký).",
  });
  const ph = [["Trước", ["Nhà tài trợ", "Địa điểm", "Cơ quan cấp phép"], C.orange, C.tOrange], ["Trong", ["Nhà cung cấp kỹ thuật", "Khách tham dự"], C.purple, C.tPurple], ["Sau", ["Báo chí", "Khách hàng — đánh giá, tái ký"], C.blue, C.tBlue]];
  const cw = (CW - 0.4) / 3;
  ph.forEach(([h, items, c, f], i) => {
    const x = M + i * (cw + 0.2);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.1, w: cw, h: 1.0, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, h + " sự kiện", { x: x + 0.5, y: 2.1, w: cw - 1.0, h: 1.0, fontSize: 21, bold: true, color: dark(c), valign: "middle" });
    items.forEach((t, j) => {
      card(s, x, 3.4 + j * 1.0, cw, 0.82, f, c);
      T(s, t, { x: x + 0.3, y: 3.4 + j * 1.0, w: cw - 0.6, h: 0.82, fontSize: 17, bold: true, valign: "middle" });
    });
  });
}

// ───────────────────────── 12 — primary ─────────────────────────
{
  const s = base("s12", "Primary: không có họ, sự kiện không diễn ra", {
    source: "A03: Clarkson (1995), Academy of Management Review.",
    notes: "Clarkson xếp cả chính quyền và cộng đồng — những bên cung cấp hạ tầng, thị trường, luật lệ — vào nhóm primary.",
  });
  card(s, M, 2.1, CW, 2.2, C.tPurple, C.purple);
  T(s, [{ text: "Bên liên quan chính (Primary)", options: { bold: true, fontSize: 22, color: C.purple, breakLine: true } }, { text: "nếu không có sự tham gia liên tục của họ, tổ chức — ở đây là sự kiện — không thể tồn tại, diễn ra.", options: { fontSize: 20 } }, { text: "  — Clarkson (1995)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.2, valign: "middle", paraSpaceAfter: 6 });
  card(s, M, 4.65, CW, 1.9, C.tYellow, C.yellow);
  T(s, [{ text: "Câu kiểm tra nhanh", options: { fontSize: 15, color: C.muted, breakLine: true } }, { text: "“Không có họ, sự kiện có diễn ra được không?”", options: { fontSize: 26, bold: true, breakLine: true } }, { text: "Không → thường là primary · Có → thường là secondary", options: { fontSize: 15 } }],
    { x: M + 0.4, y: 4.65, w: CW - 0.8, h: 1.9, align: "center", valign: "middle" });
}

// ───────────────────────── 13 — secondary ─────────────────────────
{
  const s = base("s12", "Secondary: ảnh hưởng hoặc bị ảnh hưởng, nhưng không thiết yếu", {
    source: "A03: Clarkson (1995).",
    notes: "Nhắc phạm vi: nhiều tài liệu xếp nhân viên, tình nguyện viên vào nhóm primary — đúng về lý thuyết — nhưng môn này không xét họ (bên nội bộ, thuộc môn Quản lý đội nhóm). Chỉ các bên nằm ngoài ranh giới công ty tổ chức sự kiện.",
  });
  card(s, M, 2.1, CW, 2.0, C.tBlue, C.blue);
  T(s, [{ text: "Bên liên quan thứ yếu (Secondary)", options: { bold: true, fontSize: 22, color: C.dBlue, breakLine: true } }, { text: "ảnh hưởng hoặc bị ảnh hưởng bởi tổ chức, nhưng không giao dịch trực tiếp và không thiết yếu cho sự tồn tại của tổ chức.", options: { fontSize: 19 } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.0, valign: "middle", paraSpaceAfter: 6 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.4, cw, 2.15, C.white, C.line);
  T(s, [{ text: "Ví dụ: báo chí", options: { bold: true, breakLine: true } }, { text: "Sự kiện vẫn diễn ra nếu báo chí không đến — nhưng họ ảnh hưởng hình ảnh sau sự kiện.", options: { fontSize: 15 } }], { x: M + 0.3, y: 4.4, w: cw - 0.6, h: 2.15, fontSize: 18, valign: "middle" });
  card(s, M + cw + 0.3, 4.4, cw, 2.15, C.tPink, C.pink);
  T(s, [{ text: "Nhắc phạm vi", options: { bold: true, breakLine: true } }, { text: "Nhân viên, tình nguyện viên có thể là primary trong lý thuyết — nhưng môn này không xét bên nội bộ.", options: { fontSize: 15 } }], { x: M + cw + 0.6, y: 4.4, w: cw - 0.6, h: 2.15, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 14 — classification example ─────────────────────────
{
  const s = base("s12", "Phân loại là quyết định có lập luận, không phải tra bảng", {
    source: "Tình huống giả định Nova Events – Ngân hàng An Phát; góc nhìn phân tích: Nova Events.",
    notes: "GV nói to lập luận từng dòng.\nĐiểm nhấn: cùng là báo chí, trong một sự kiện ra mắt sản phẩm mà mục tiêu chính là phủ sóng truyền thông, báo chí có thể là primary.\n[VERIFY: hội nghị khách hàng trong khách sạn có phải thông báo/xin phép cơ quan địa phương hay không, tùy quy mô và nội dung — kiểm tra trước khi dùng cơ quan quản lý làm ví dụ primary]\n→ Chuyển sang S4 — Thực hành 1.",
  });
  T(s, "Nova Events tổ chức Hội nghị khách hàng thường niên cho Ngân hàng An Phát · ~600 khách VIP · khách sạn 5 sao, TP.HCM", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const cols = [{ w: 3.6 }, { w: 2.3, head: "Phân loại", fill: C.purple }, { w: CW - 5.9 + 0.1, head: "Lập luận", fill: C.blue }];
  table(s, M, 2.45, cols, [
    ["Ngân hàng An Phát (khách hàng)", "Primary", "Người đặt hàng và trả tiền; không có họ, không có sự kiện"],
    ["Khách sạn (địa điểm)", "Primary", "Không có địa điểm, sự kiện không diễn ra vào ngày đã định"],
    ["Công ty bảo hiểm (nhà tài trợ)", "Tùy bối cảnh", "Khoản cộng thêm → secondary; ngân sách phụ thuộc khoản tài trợ → primary"],
    ["Báo chí tài chính", "Secondary", "Sự kiện vẫn diễn ra nếu báo không đến; nhưng ảnh hưởng hình ảnh sau sự kiện"],
  ], { rowH: 0.82, size: 14 });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s12", "Thực hành 1 · Ai đứng quanh sự kiện này?", {
    source: "Phiếu W01_activity_S4_phan_loai_ben_lien_quan.md · Tình huống giả định.",
    notes: "S4 — Thực hành 1 (15 phút): 1 đọc · 9 làm · 5 chia sẻ. Đồng hồ đếm ngược 10 phút.\nThảo luận: bên nào các nhóm phân loại khác nhau? Có bên nào không ký hợp đồng với Nova nhưng vẫn có thể làm hỏng sự kiện?\nGiữ lại tờ A0 để đối chiếu ở S6.",
  });
  card(s, M, 2.0, 6.4, 4.6, C.white, C.line);
  T(s, "Tình huống", { x: M + 0.3, y: 2.1, w: 5.8, h: 0.4, fontSize: 14, bold: true, color: C.purple });
  T(s, bullets(["Hội nghị khách hàng thường niên của Ngân hàng An Phát: hội thảo, gala, nghệ thuật · ~600 khách VIP", "Phòng đại tiệc khách sạn 5 sao, Quận 1 — cạnh khu dân cư; chương trình đến 22h", "Công ty bảo hiểm đồng tài trợ: gian trưng bày + 5 phút phát biểu", "Nova thuê ngoài AV – LED, in ấn, quà, xe đưa đón", "Diễn giả kinh tế nổi tiếng · MC/KOL · bài trên báo tài chính"]),
    { x: M + 0.3, y: 2.55, w: 5.8, h: 3.95, fontSize: 13, valign: "top", paraSpaceAfter: 6 });
  const steps = [["1", "Sơ đồ tư duy: Nova ở giữa, ≥ 10 bên bên ngoài", C.orange], ["2", "Đánh dấu P (primary) hoặc S (secondary)", C.purple], ["3", "3 bên tranh luận nhiều nhất: 1 câu lý do", C.blue], ["4", "≥ 2 mũi tên giữa các bên với nhau (không qua Nova)", C.green]];
  const rx = M + 6.7, rw = CW - 6.7;
  steps.forEach(([k, d, c], i) => {
    const y = 2.0 + i * 0.95;
    badge(s, rx, y + 0.1, 0.62, c, k);
    T(s, d, { x: rx + 0.8, y, w: rw - 0.8, h: 0.82, fontSize: 14, valign: "middle" });
  });
  card(s, rx, 5.85, rw, 0.75, C.tPink, C.pink);
  T(s, "Không liệt kê nhân sự, crew, tình nguyện viên của Nova.", { x: rx + 0.2, y: 5.85, w: rw - 0.4, h: 0.75, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── Break ─────────────────────────
breakSlide();

// ───────────────────────── 15 — need prioritisation ─────────────────────────
{
  const s = base("s13", "Không thể chăm sóc mọi bên như nhau — cần công cụ ưu tiên", {
    notes: "Mở đoạn S5: “Danh sách của các bạn ở S4 có 12–15 bên. Ta không thể chăm sóc tất cả như nhau — thời gian và ngân sách có hạn. Câu hỏi bây giờ: ai cần được ưu tiên, và ưu tiên theo cách nào?”",
  });
  for (let i = 0; i < 14; i++) {
    const c = [C.purple, C.blue, C.orange, C.green, C.pink][i % 5];
    s.addShape(pres.shapes.OVAL, { x: M + 0.2 + (i % 7) * 0.95, y: 2.4 + Math.floor(i / 7) * 1.0, w: 0.7, h: 0.7, fill: { color: c }, line: { color: c, width: 0 } });
  }
  T(s, "12–15 bên liên quan trên sơ đồ của các bạn", { x: M, y: 4.5, w: 7.0, h: 0.45, fontSize: 15, color: C.muted });
  const rx = M + 7.3, rw = CW - 7.3;
  card(s, rx, 2.1, rw, 3.0, C.tYellow, C.yellow);
  T(s, [{ text: "Thời gian và ngân sách có hạn.", options: { breakLine: true } }, { text: "Ai cần được ưu tiên — và ưu tiên theo cách nào?", options: { bold: true, fontSize: 22 } }], { x: rx + 0.35, y: 2.1, w: rw - 0.7, h: 3.0, fontSize: 17, valign: "middle", paraSpaceAfter: 8 });
  const cw = (CW - 0.3) / 2;
  pill(s, M, 5.6, cw, 0.8, C.purple, "Power-Interest Grid", { text: { fontSize: 16 } });
  pill(s, M + cw + 0.3, 5.6, cw, 0.8, C.blue, "Stakeholder Salience Model", { text: { fontSize: 16 } });
}

// ───────────────────────── 16 — grid ─────────────────────────
{
  const s = base("s13", "Power-Interest Grid chia các bên thành 4 chiến lược ứng xử", {
    source: "A07: phát triển từ Mendelow (1981), ICIS 1981 Proceedings — đã xác minh.",
    notes: "Hai trục: quyền lực (khả năng tác động đến sự kiện) và mức độ quan tâm (mức độ họ để ý/bị ảnh hưởng). Dạng lưới 2×2 quen thuộc là phiên bản được các giáo trình chiến lược phổ biến lại; khi trình bày, ghi “phát triển từ Mendelow (1981)”.\nMỗi ô có tên và mô tả riêng, không phân biệt chỉ bằng màu.\nAlt-text: ma trận 2×2 — trục dọc quyền lực, trục ngang mức độ quan tâm; bốn ô Keep Satisfied, Manage Closely, Monitor, Keep Informed.",
  });
  grid2x2(s, M, 2.0, CW, 4.8, GRID, { bodySize: 14 });
}

// ───────────────────────── 17 — grid example ─────────────────────────
{
  const s = base("s13", "Ví dụ: ngân hàng cần quản lý chặt, khách sạn cần giữ hài lòng", {
    source: "Ví dụ mẫu — tình huống giả định Nova Events – An Phát.",
    notes: "Ngân hàng An Phát → Manage Closely (quyền lực cao: ký hợp đồng, trả tiền; quan tâm cao: sự kiện mang thương hiệu của họ).\nBan quản lý khách sạn → Keep Satisfied (quyền lực cao: kiểm soát không gian, giờ giấc, quy định; quan tâm vừa phải: một hợp đồng trong nhiều hợp đồng).\nBáo chí tài chính → Keep Informed (quan tâm nếu có câu chuyện; quyền lực trực tiếp lên việc tổ chức thấp).",
  });
  const geo = grid2x2(s, M, 2.0, 7.6, 4.8, GRID.map(([n, , c, f]) => [n, "", c, f]), { nameSize: 15 });
  const pin = (g, t, c) => { card(s, g.x + 0.25, g.y + 0.8, g.w - 0.5, 0.75, C.white, c, 2); T(s, t, { x: g.x + 0.35, y: g.y + 0.8, w: g.w - 0.7, h: 0.75, fontSize: 14, bold: true, valign: "middle" }); };
  pin(geo[1], "Ngân hàng An Phát", C.purple);
  pin(geo[0], "Ban quản lý khách sạn", C.blue);
  pin(geo[3], "Báo chí tài chính", C.orange);
  const rx = M + 8.0, rw = CW - 8.0;
  [["Ngân hàng", "ký hợp đồng, trả tiền; sự kiện mang thương hiệu của họ", C.purple, C.tPurple], ["Khách sạn", "kiểm soát không gian, giờ giấc; một hợp đồng trong nhiều hợp đồng", C.blue, C.tBlue], ["Báo chí", "quan tâm nếu có câu chuyện; quyền lực trực tiếp thấp", C.orange, C.tOrange]].forEach(([h, d, c, f], i) => {
    const y = 2.0 + i * 1.5;
    card(s, rx, y, rw, 1.35, f, c);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: rx + 0.25, y, w: rw - 0.5, h: 1.35, fontSize: 16, valign: "middle" });
  });
}

// ───────────────────────── 18 — grid limits ─────────────────────────
{
  const s = base("s13", "Grid là ảnh chụp tĩnh và bỏ qua tính chính đáng", {
    notes: "Hỏi lớp trước khi lật: “Grid bỏ sót điều gì?”",
  });
  const lim = [["Chỉ có 2 chiều", "quyền lực và quan tâm", C.purple], ["Ảnh chụp tĩnh", "vị trí thay đổi theo thời gian", C.blue], ["Đánh giá chủ quan", "cần bằng chứng", C.orange], ["Bỏ qua tính chính đáng", "yêu cầu của họ có hợp lý không?", C.pink]];
  const cw = (CW - 0.3) / 2;
  lim.forEach(([h, d, c], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.1 + Math.floor(i / 2) * 1.9;
    card(s, x, y, cw, 1.65, i === 3 ? C.tPink : C.white, c, 1.5);
    badge(s, x + 0.3, y + 0.4, 0.85, c, String(i + 1), null, 22);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 14, color: C.muted } }], { x: x + 1.4, y, w: cw - 1.6, h: 1.65, fontSize: 20, valign: "middle" });
  });
  T(s, "→ cần thêm một công cụ: Salience Model", { x: M, y: 6.0, w: CW, h: 0.5, fontSize: 16, bold: true, color: C.dBlue });
}

// ───────────────────────── 19 — salience attributes ─────────────────────────
{
  const s = base("s13", "Salience Model đo 3 thuộc tính: quyền lực, chính đáng, cấp bách", {
    source: "A08: Mitchell, Agle & Wood (1997), Academy of Management Review.",
    notes: "Độ nổi bật (salience) = mức độ nhà quản lý ưu tiên yêu cầu của bên đó — tăng theo số thuộc tính họ có.",
  });
  const at = [["Quyền lực", "Power", "khả năng buộc bên kia làm điều họ lẽ ra không làm — bằng sức ép, tiền/nguồn lực, hoặc uy tín", C.purple, C.tPurple], ["Tính chính đáng", "Legitimacy", "yêu cầu được xem là hợp lý, phù hợp chuẩn mực: hợp đồng, luật, đạo đức xã hội", C.blue, C.tBlue], ["Tính cấp bách", "Urgency", "yêu cầu nhạy cảm về thời gian và quan trọng với họ, đòi phản hồi ngay", C.pink, C.tPink]];
  const cw = (CW - 0.6) / 3;
  at.forEach(([h, e, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.1, cw, 3.4, f, c, 1.5);
    T(s, h, { x: x + 0.35, y: 2.3, w: cw - 0.7, h: 0.6, fontSize: 24, bold: true, color: c === C.blue ? C.dBlue : c === C.pink ? C.dPink : c });
    T(s, e, { x: x + 0.35, y: 2.9, w: cw - 0.7, h: 0.4, fontSize: 14, italic: true, color: C.muted });
    T(s, d, { x: x + 0.35, y: 3.45, w: cw - 0.7, h: 1.9, fontSize: 15, valign: "top" });
  });
  card(s, M, 5.8, CW, 0.8, C.tYellow, C.yellow);
  T(s, "Độ nổi bật (salience) tăng theo số thuộc tính một bên có.", { x: M + 0.35, y: 5.8, w: CW - 0.7, h: 0.8, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 20 — venn ─────────────────────────
{
  const s = base("s13", "Càng nhiều thuộc tính, bên liên quan càng nổi bật", {
    source: "A08: Mitchell, Agle & Wood (1997).",
    notes: "Bảy vùng: 1 thuộc tính (tiềm ẩn — latent): Dormant (P), Discretionary (L), Demanding (U). 2 thuộc tính (kỳ vọng — expectant): Dominant (P+L), Dangerous (P+U), Dependent (L+U). 3 thuộc tính: Definitive.\nAlt-text: ba vòng tròn giao nhau Power, Legitimacy, Urgency tạo bảy loại bên liên quan.",
  });
  const cx = 4.3, cy = 4.3, r = 1.4;
  venn3(s, cx, cy, r, ["Power", "Legitimacy", "Urgency"], [C.purple, C.blue, C.pink]);
  const lab = (t, x, y) => T(s, t, { x: x - 0.8, y: y - 0.2, w: 1.6, h: 0.4, fontSize: 11, bold: true, align: "center" });
  lab("Dormant", cx - r * 1.05, cy - r * 0.55);
  lab("Discretionary", cx + r * 1.05, cy - r * 0.55);
  lab("Demanding", cx, cy + r * 1.05);
  lab("Dominant", cx, cy - r * 0.75);
  lab("Dangerous", cx - r * 0.62, cy + r * 0.35);
  lab("Dependent", cx + r * 0.62, cy + r * 0.35);
  pill(s, cx - 0.65, cy - 0.12, 1.3, 0.4, C.yellow, "Definitive", { text: { fontSize: 11 } });
  const rx = M + 7.6, rw = CW - 7.6;
  [["1 thuộc tính · Tiềm ẩn", "Dormant · Discretionary · Demanding", C.green, C.tGreen], ["2 thuộc tính · Kỳ vọng", "Dominant · Dangerous · Dependent", C.orange, C.tOrange], ["3 thuộc tính · Quyết định", "Definitive — ưu tiên cao nhất", C.purple, C.tPurple]].forEach(([h, d, c, f], i) => {
    const y = 2.1 + i * 1.5;
    card(s, rx, y, rw, 1.3, f, c);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: rx + 0.3, y, w: rw - 0.6, h: 1.3, fontSize: 17, valign: "middle" });
  });
}

// ───────────────────────── 21 — seven types ─────────────────────────
{
  const s = base("s13", "Mỗi loại salience có một ví dụ trong sự kiện", {
    source: "A08: Mitchell, Agle & Wood (1997) · ví dụ trong sự kiện: nhận định của người soạn.",
    notes: "Cho lớp giơ tay đoán loại của 1–2 ví dụ trước khi chiếu cột “Loại”.\nHiểu lầm: “Quyền lực cao = phải chiều theo mọi yêu cầu” → nhóm Dangerous có quyền lực nhưng thiếu chính đáng; chiến lược là bảo vệ bằng hợp đồng/phương án dự phòng, không phải nhượng bộ.\n“Salience và Grid cho cùng một kết quả” → Grid hỏi “họ quan tâm bao nhiêu”; Salience hỏi “yêu cầu của họ có chính đáng và gấp không”. Một bên Keep Informed trên Grid có thể là Dependent trên Salience — tín hiệu cảnh báo sớm.",
  });
  const cols = [{ w: 2.7 }, { w: 2.1, head: "Thuộc tính", fill: C.purple }, { w: CW - 4.8 + 0.1, head: "Ví dụ trong sự kiện", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Dormant", "P", "Cơ quan quản lý khi mọi thủ tục đã ổn"],
    ["Discretionary", "L", "Hội đoàn từ thiện muốn được mời tham dự"],
    ["Demanding", "U", "Cá nhân liên tục phàn nàn trên mạng xã hội nhưng ít ảnh hưởng"],
    ["Dominant", "P + L", "Nhà tài trợ chính có hợp đồng"],
    ["Dangerous", "P + U", "Nhà cung cấp dọa ngừng thi công ngay trước giờ G để ép giá"],
    ["Dependent", "L + U", "Cư dân quanh địa điểm phản ánh tiếng ồn"],
    ["Definitive", "P + L + U", "Khách hàng yêu cầu đổi kịch bản 48 giờ trước sự kiện"],
  ], { rowH: 0.55, size: 14, headH: 0.5 });
}

// ───────────────────────── 22 — moving up ─────────────────────────
{
  const s = base("s13", "Bên liên quan có thể “leo hạng” — cư dân thành Definitive khi có báo chí và chính quyền vào cuộc", {
    source: "A08: Mitchell, Agle & Wood (1997) — mô hình động · ví dụ: nhận định của người soạn.",
    notes: "Ví dụ: cư dân quanh địa điểm (Dependent: L + U) → một bài báo đưa tin + phường vào cuộc kiểm tra → họ “mượn” được quyền lực → trở thành Definitive.\nHỏi lớp: “Nova Events nên làm gì từ khi họ còn là Dependent để không phải đối mặt khi họ đã là Definitive?”\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const st = [["Dependent", "L + U", "Cư dân phản ánh tiếng ồn", C.blue, C.tBlue], ["+ báo chí đưa tin\n+ phường kiểm tra", "mượn quyền lực", "", C.orange, C.tOrange], ["Definitive", "P + L + U", "Yêu cầu của cư dân phải xử lý ngay", C.purple, C.tPurple]];
  const cw = 3.5;
  st.forEach(([h, a, d, c, f], i) => {
    const x = M + i * (cw + 0.65);
    card(s, x, 2.3, cw, 2.3, f, c, 1.5);
    T(s, h, { x: x + 0.25, y: 2.45, w: cw - 0.5, h: 0.9, fontSize: i === 1 ? 16 : 24, bold: true, color: i === 1 ? C.ink : (c === C.blue ? C.dBlue : c), valign: "top" });
    T(s, a, { x: x + 0.25, y: 3.4, w: cw - 0.5, h: 0.4, fontSize: 14, italic: true, color: C.muted });
    if (d) T(s, d, { x: x + 0.25, y: 3.85, w: cw - 0.5, h: 0.65, fontSize: 14, valign: "top" });
    if (i < 2) arrow(s, x + cw + 0.08, 3.45, x + cw + 0.57, 3.45, C.ink, 3);
  });
  card(s, M, 5.0, CW, 1.55, C.tYellow, C.yellow);
  T(s, "Nova nên làm gì từ khi họ còn là Dependent — để không phải đối mặt khi họ đã là Definitive?", { x: M + 0.4, y: 5.0, w: CW - 0.8, h: 1.55, fontSize: 21, bold: true, valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s13", "Thực hành 2 · Bản đồ quyền lực quanh khách hàng của nhóm", {
    source: "Phiếu W01_activity_S6_ban_do_quyen_luc.md.",
    notes: "S6 — Thực hành 2 (33 phút): 3 chọn khách hàng · 18 làm poster · 12 xoay vòng các trạm + chốt.\nLời mở đầu: “Bây giờ các bạn áp dụng hai công cụ lên khách hàng thật của nhóm — khách hàng từ dự án cũ, cũng chính là khách hàng các bạn sẽ dùng cho bài cuối kỳ…”\nKhông chấp nhận phản biện kiểu “đẹp quá”, “tốt lắm”. Chỉ các bên bên ngoài.",
  });
  T(s, "Khách hàng thật từ dự án cũ của nhóm — đây là phần 1 của Stakeholder Management Plan", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const zones = [["A · Danh sách", "≥ 8 bên bên ngoài, đánh dấu P/S", C.orange, C.tOrange], ["B · Power-Interest Grid", "đặt từng bên vào ô; mỗi ô 1 hành động cụ thể", C.purple, C.tPurple], ["C · Salience Model", "3 vòng tròn; đặt từng bên vào đúng vùng", C.blue, C.tBlue]];
  const cw = (CW - 0.6) / 3;
  zones.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.45, cw, 1.55, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.3, y: 2.45, w: cw - 0.6, h: 1.55, fontSize: 17, valign: "middle" });
  });
  card(s, M, 4.2, CW, 0.75, C.tYellow, C.yellow);
  T(s, "⭐ Một bên mà Grid và Salience “không khớp nhau” — viết 1 câu: điều đó cảnh báo gì?", { x: M + 0.3, y: 4.2, w: CW - 0.6, h: 0.75, fontSize: 15, bold: true, valign: "middle" });
  const steps = [["3’", "Chọn khách hàng từ dự án cũ", C.orange], ["18’", "Làm poster 3 khu vực trên A0", C.purple], ["12’", "Xoay trạm: 🟨 1 câu hỏi, 🟥 1 phản biện có lý do", C.pink]];
  const sw = (CW - 0.6) / 3;
  steps.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 5.3, 0.85, c, t, null, 17);
    T(s, d, { x: x + 1.0, y: 5.2, w: sw - 1.0, h: 1.05, fontSize: 14, valign: "middle" });
  });
}

// ───────────────────────── 23 — fix poster (shown first per outline) ─────────────────────────
{
  const s = base("end", "Sửa poster ngay bây giờ — mỗi phản biện là một cơ hội", {
    notes: "S7 — chiếu slide này TRƯỚC (sửa poster), slide lộ trình SAU.\nĐồng hồ 5 phút. Nhắc: ghi “sửa gì, vì sao” ở góc poster; chụp ảnh lưu lại (không nộp).",
  });
  badge(s, M + 0.3, 2.3, 2.6, C.pink, "5’", C.white, 60);
  const rx = M + 3.5, rw = CW - 3.5;
  [["Đọc các note vàng và hồng", C.orange], ["Sửa ít nhất một vị trí trên Grid hoặc Salience", C.purple], ["Ghi “sửa gì, vì sao” ở góc poster", C.blue], ["Chụp ảnh lưu lại — không nộp", C.green]].forEach(([t, c], i) => {
    const y = 2.1 + i * 1.05;
    card(s, rx, y, rw, 0.88, C.white, c, 1.5);
    badge(s, rx + 0.2, y + 0.14, 0.6, c, String(i + 1));
    T(s, t, { x: rx + 1.0, y, w: rw - 1.2, h: 0.88, fontSize: 18, bold: true, valign: "middle" });
  });
}

// ───────────────────────── 24 — roadmap ─────────────────────────
{
  const s = base("end", "Poster hôm nay là trang 1 của Stakeholder Management Plan", {
    notes: "Lộ trình bài cuối kỳ: Buổi 1 bản đồ → Buổi 2–8 khách hàng → Buổi 9–12 các bên khác → Buổi 13–15 hoàn thiện và bảo vệ.",
  });
  const rd = [["Buổi 1", "Bản đồ các bên liên quan", C.orange, true], ["Buổi 2–8", "Khách hàng trọng điểm", C.purple], ["Buổi 9–12", "Các bên khác quanh hành trình khách hàng", C.blue], ["Buổi 13–15", "Hoàn thiện và bảo vệ", C.green]];
  const cw = (CW - 3 * 0.15) / 4;
  rd.forEach(([k, t, c, hl], i) => {
    const x = M + i * (cw + 0.15);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.4, w: cw, h: 1.5, fill: { color: hl ? c : C.white }, line: { color: c, width: 2 } });
    T(s, [{ text: k, options: { bold: true, fontSize: 18, breakLine: true } }, { text: t, options: { fontSize: 12 } }], { x: x + 0.85, y: 2.4, w: cw - 1.45, h: 1.5, color: C.ink, valign: "middle" });
  });
  card(s, M, 4.5, CW, 1.6, C.tYellow, C.yellow);
  T(s, [{ text: "Hôm nay: ", options: { bold: true } }, { text: "danh sách P/S, Power-Interest Grid và Salience Model cho khách hàng từ dự án cũ — trang đầu tiên của kế hoạch cuối kỳ." }], { x: M + 0.4, y: 4.5, w: CW - 0.8, h: 1.6, fontSize: 19, valign: "middle" });
}

// ───────────────────────── 25 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) SV có dùng đúng 3 thuộc tính power/legitimacy/urgency để lập luận không, hay chỉ ghi cảm tính; (b) SV có còn liệt kê nhân sự nội bộ như một bên liên quan không (dấu hiệu chưa nắm phạm vi).\nCâu nối Buổi 2: “Trong tất cả các bên liên quan, có một bên mà nếu mất, công ty sự kiện mất luôn doanh thu năm sau — khách hàng. Buổi sau: vì sao không phải khách hàng nào cũng là Key Account.”",
  });
  exitTicket(s, ["Trong dự án cũ của nhóm, bên liên quan nào bạn đã đánh giá thấp? Theo Salience Model, nó thiếu thuộc tính nào — và điều gì có thể khiến nó có thêm thuộc tính đó?", "Điều bạn còn mơ hồ nhất sau buổi hôm nay là gì?"],
    [{ text: "Buổi 2: ", options: { bold: true } }, { text: "nếu mất khách hàng, agency mất luôn doanh thu năm sau — vì sao không phải khách hàng nào cũng là Key Account." }]);
}

refSlides([
  ["A01", "Freeman, R. E. (1984). Strategic management: A stakeholder approach. Pitman."],
  ["A02", "Van Niekerk, M., & Getz, D. (2019). Event stakeholders: Theory and methods for event management and tourism. Goodfellow Publishers."],
  ["A03", "Clarkson, M. B. E. (1995). A stakeholder framework for analyzing and evaluating corporate social performance. Academy of Management Review, 20(1), 92–117."],
  ["A04", "Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. Event Management, 10(2), 103–122."],
  ["A07", "Mendelow, A. L. (1981). Environmental scanning — The impact of the stakeholder concept. ICIS 1981 Proceedings, 20."],
  ["A08", "Mitchell, R. K., Agle, B. R., & Wood, D. J. (1997). Toward a theory of stakeholder identification and salience. Academy of Management Review, 22(4), 853–886."],
  ["A09", "Tuổi Trẻ Online. (2026, January 29). Công bố lịch thi đấu Lễ hội Pháo hoa quốc tế Đà Nẵng DIFF 2026, sông Hàn lại bùng nổ."],
], "buoi-01_tu-lieu-tong-hop.md", 7);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
