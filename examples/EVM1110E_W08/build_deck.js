// Buổi 8 — EVM1110E · Governing the Key Account Relationship & Multi-dimensional Performance Measurement
// Deck generated from courses/EVM1110E/lessons/W08_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W08_KAM_Governance_Measurement.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 8: Governing the Key Account Relationship & Multi-dimensional Performance Measurement";
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
  { key: "s81", label: "8.1 Bow-tie → Diamond", c: C.purple },
  { key: "s82", label: "8.2 Đo lường", c: C.blue },
  { key: "s83", label: "8.3 Đánh giá chung", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: four dots in a diamond — the Diamond structure in miniature
function glyph(slide, x, y, s) {
  const d = s * 0.36;
  [[C.purple, 0.5, 0], [C.blue, 0, 0.5], [C.pink, 1, 0.5], [C.green, 0.5, 1]].forEach(([c, i, j]) =>
    slide.addShape(pres.shapes.OVAL, { x: x + i * (s - d), y: y + j * (s - d), w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 8   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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

// ───────────────────────── 1 — Title ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  // Diamond illustration: two groups joined by parallel ties
  const lx = 8.2, rx = 11.6, ys = [1.35, 2.35, 3.35, 4.35, 5.35], cols = [C.purple, C.blue, C.orange, C.green, C.pink];
  s.addShape(pres.shapes.DIAMOND, { x: 7.75, y: 0.9, w: 5.15, h: 5.75, fill: { color: C.tYellow }, line: { color: C.yellow, width: 1.5 } });
  ys.forEach((y, i) => {
    line(s, lx + 0.6, y + 0.3, rx, y + 0.3, cols[i], 3);
    badge(s, lx, y, 0.6, cols[i], "");
    badge(s, rx, y, 0.6, cols[i], "");
  });
  T(s, "Agency", { x: lx - 0.3, y: 6.05, w: 1.2, h: 0.35, fontSize: 13, bold: true, align: "center" });
  T(s, "Key Account", { x: rx - 0.45, y: 6.05, w: 1.5, h: 0.35, fontSize: 13, bold: true, align: "center" });

  pill(s, M, 1.0, 2.9, 0.46, C.yellow, "EVM1110E  ·  Buổi 8 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.8, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Governing the Key Account Relationship & Multi-dimensional Performance Measurement", { x: M, y: 3.75, w: 6.8, h: 1.2, fontSize: 20, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Stakeholders Management for Events", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: [Tên giảng viên]" },
  ], { x: M, y: 5.2, w: 6.8, h: 1.3, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Điền tên giảng viên trước khi dạy.\nAlt-text: hình kim cương, bên trái là nhóm người của agency, bên phải là nhóm người của Key Account, nối với nhau bằng năm đường song song.");
}

// ───────────────────────── 2 — S1 opener ─────────────────────────
{
  const s = base("open", "Đầu mối duy nhất nghỉ việc — Nova còn gọi được cho ai?", {
    source: "Tình huống giả định (tiếp nối Buổi 1 và Buổi 7) — tên người và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Đọc: “Tháng 1, gala 12/12 của An Phát vừa thành công. Sáng nay, KAMer của Nova nhận tin nhắn từ chị Hạnh, Giám đốc Marketing của An Phát, người làm việc với Nova suốt 3 năm: ‘Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc mới là anh Minh.’ Nova chưa từng gặp anh Minh.”\nCho lớp giơ tay; ghi số phiếu lên bảng.\nChốt: “Ba năm làm tốt chưa chắc đã đủ. Nếu toàn bộ quan hệ nằm trong một sợi dây, sợi dây đó đứt là mất khách. Hôm nay ta học cách tổ chức quan hệ với Key Account (8.1), đo nó (8.2) và cùng khách hàng kiểm tra nó định kỳ (8.3).”",
  });
  // phone-style message
  card(s, M, 2.1, 5.3, 4.5, C.white, C.line);
  T(s, "Chị Hạnh · GĐ Marketing, An Phát", { x: M + 0.35, y: 2.3, w: 4.6, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M + 0.35, y: 2.85, w: 4.6, h: 1.75, rectRadius: 0.25, fill: { color: C.tPink }, line: { color: C.pink, width: 1 } });
  T(s, "“Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc mới là anh Minh.”", { x: M + 0.6, y: 2.85, w: 4.1, h: 1.75, fontSize: 18, italic: true, valign: "middle" });
  T(s, bullets(["3 năm làm việc — mọi việc đều qua chị Hạnh", "Gala 12/12 vừa thành công", "Nova chưa từng gặp anh Minh"]),
    { x: M + 0.35, y: 4.8, w: 4.6, h: 1.6, fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  const rx = M + 5.7, rw = CW - 5.7;
  badge(s, rx, 2.15, 0.6, C.orange, "1");
  T(s, "Ngoài chị Hạnh, Nova quen bao nhiêu người ở An Phát?", { x: rx + 0.8, y: 2.1, w: rw - 0.8, h: 0.75, fontSize: 18, bold: true, valign: "middle" });
  [["0", C.tOrange], ["1–2", C.tOrange], ["3 trở lên", C.tOrange]].forEach(([t, f], i) =>
    pill(s, rx + 0.8 + i * 1.75, 3.0, 1.55, 0.55, f, t, { line: C.orange, color: C.ink, text: { fontSize: 15 } }));
  badge(s, rx, 4.2, 0.6, C.purple, "2");
  T(s, "Dự án cũ của nhóm bạn: nếu người liên hệ phía khách hàng nghỉ việc ngày mai, nhóm còn gọi được cho ai?", { x: rx + 0.8, y: 4.1, w: rw - 0.8, h: 1.3, fontSize: 18, bold: true, valign: "middle" });
}

// ───────────────────────── 3 — three questions ─────────────────────────
{
  const s = base("open", "Buổi 8 trả lời ba câu hỏi: tổ chức, đo lường, cùng kiểm tra", {
    notes: "Giới thiệu cấu trúc buổi: 8.1 cấu trúc quan hệ nhiều cấp; 8.2 chỉ số đo hiệu quả quan hệ và từng sự kiện; 8.3 đánh giá chung định kỳ với Key Account.",
  });
  const items = [
    ["8.1", "Tổ chức", "Ai của agency gặp ai của Key Account? Từ Bow-tie đến Diamond", C.purple, C.tPurple],
    ["8.2", "Đo lường", "Chỉ số quá trình báo trước, chỉ số kết quả xác nhận; khung ROI cho từng sự kiện", C.blue, C.tBlue],
    ["8.3", "Cùng kiểm tra", "Đánh giá chung hai chiều và dấu hiệu cảnh báo sớm", C.pink, C.tPink],
  ];
  const cw = (CW - 0.6) / 3;
  items.forEach(([k, h, d, c, t], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.2, cw, 4.2, t, c);
    badge(s, x + 0.35, 2.55, 1.1, c, k, C.white, 24);
    T(s, h, { x: x + 0.35, y: 3.9, w: cw - 0.7, h: 0.6, fontSize: 24, bold: true });
    T(s, d, { x: x + 0.35, y: 4.6, w: cw - 0.7, h: 1.6, fontSize: 16, valign: "top" });
  });
}

// ───────────────────────── 4 — Bow-tie ─────────────────────────
{
  const s = base("s81", "Bow-tie: mọi thông tin đi qua một điểm", {
    source: "T01: McDonald, Millman & Rogers (1997) · T03: pharmaphorum · T05: Kim Tasso.",
    notes: "Nguồn gốc: nhóm nghiên cứu KAM ở Cranfield (McDonald, Millman & Rogers, 1997, T01) mô tả quan hệ với Key Account phát triển qua nhiều giai đoạn. Trước đó Millman & Wilson (1995, T02): từ “key account selling” sang “key account management”.\nAlt-text: hình nơ bướm — hai tam giác chạm nhau ở một điểm; các bộ phận của agency (trái) và của Key Account (phải) chỉ nối với nhau qua KAMer và đầu mối.",
  });
  const cy = 4.15, kx = 4.55, dx = 7.05, pw = 1.75, ph = 0.55;
  // triangles as translucent backgrounds
  s.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: 1.35, y: 2.45, w: 3.4, h: 3.4, rotate: 90, fill: { color: C.tPurple }, line: { color: C.purple, width: 1 } });
  s.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: 6.9, y: 2.45, w: 3.4, h: 3.4, rotate: 270, fill: { color: C.tBlue }, line: { color: C.blue, width: 1 } });
  const left = ["CEO", "Sản xuất", "Tài chính"], right = ["Lãnh đạo", "Truyền thông", "Tài chính"];
  left.forEach((t, i) => {
    const y = 2.6 + i * 1.25;
    pill(s, M + 0.2, y, pw, ph, C.white, t, { line: C.purple, color: C.ink });
    line(s, M + 0.2 + pw, y + ph / 2, kx, cy, C.purple, 1.5);
  });
  right.forEach((t, i) => {
    const y = 2.6 + i * 1.25;
    pill(s, 9.55, y, pw, ph, C.white, t, { line: C.blue, color: C.ink });
    line(s, dx + 1.3, cy, 9.55, y + ph / 2, C.blue, 1.5);
  });
  pill(s, kx - 0.2, cy - 0.33, 1.5, 0.66, C.purple, "KAMer");
  pill(s, dx - 0.1, cy - 0.33, 1.5, 0.66, C.blue, "Đầu mối");
  line(s, kx + 1.3, cy, dx - 0.1, cy, C.ink, 5);
  T(s, "Agency", { x: M + 0.2, y: 2.05, w: 2.5, h: 0.4, fontSize: 15, bold: true, color: C.purple });
  T(s, "Key Account", { x: 9.3, y: 2.05, w: 2.5, h: 0.4, fontSize: 15, bold: true, color: C.dBlue, align: "right" });
  pill(s, 4.4, 5.75, 4.3, 0.55, C.yellow, "một điểm nối duy nhất");
}

// ───────────────────────── 5 — Diamond ─────────────────────────
{
  const s = base("s81", "Diamond: các bộ phận hai bên làm việc trực tiếp, KAMer điều phối", {
    source: "T03: pharmaphorum · T04: SBI.",
    notes: "[VERIFY: tên và số giai đoạn trong mô hình gốc (ví dụ Exploratory, Basic, Cooperative, Interdependent, Integrated) mới đọc qua nguồn thứ cấp T03 — đối chiếu T01 trước khi nói chi tiết]\nDiamond: các bộ phận tương ứng hai bên làm việc trực tiếp; KAMer vẫn điều phối toàn bộ.\nAlt-text: hai nhóm người (agency bên trái, Key Account bên phải) nối với nhau bằng năm đường song song; KAMer ở giữa nhóm agency có vòng điều phối.",
  });
  s.addShape(pres.shapes.DIAMOND, { x: 3.2, y: 1.9, w: 6.9, h: 4.95, fill: { color: C.tYellow }, line: { color: C.yellow, width: 1.5 } });
  const pairs = [["CEO", "Phó TGĐ Khối Marketing"], ["KAMer", "GĐ Marketing"], ["Producer", "Truyền thông nội bộ"], ["Creative Lead", "Brand team"], ["Kế toán dự án", "Tài chính / Mua sắm"]];
  const cols = [C.purple, C.pink, C.orange, C.blue, C.green];
  const lx = M + 0.4, rx = 8.9, pw = 2.6, ph = 0.56;
  T(s, "Nova (agency)", { x: lx, y: 1.95, w: pw, h: 0.35, fontSize: 14, bold: true, color: C.purple });
  T(s, "An Phát (Key Account)", { x: rx + 0.6, y: 1.95, w: 3.2, h: 0.35, fontSize: 14, bold: true, color: C.dBlue, align: "right" });
  pairs.forEach(([a, b], i) => {
    const y = 2.45 + i * 0.85, c = cols[i];
    line(s, lx + pw, y + ph / 2, rx + 0.6, y + ph / 2, c, 3);
    pill(s, lx, y, pw, ph, i === 1 ? C.pink : C.white, a, { line: c, color: i === 1 ? C.white : C.ink });
    pill(s, rx + 0.6, y, 3.2, ph, C.white, b, { line: c, color: C.ink });
  });
  // coordination bracket from KAMer
  T(s, "KAMer điều phối mọi cặp", { x: 4.3, y: 6.35, w: 4.8, h: 0.4, fontSize: 14, bold: true, italic: true, color: C.dPink, align: "center" });
}

// ───────────────────────── 6 — journey ─────────────────────────
{
  const s = base("s81", "Bow-tie → Diamond là lộ trình, không phải sai → đúng", {
    source: "T03: mô tả của McDonald được dẫn lại (nguồn thứ cấp).",
    notes: "Ý cần chốt: “Mới làm sự kiện đầu tiên cho một khách hàng mà đã đòi gặp Ban giám đốc, đòi mọi bộ phận hai bên kết nối, thì vừa tốn nguồn lực, vừa có thể làm khách hàng khó chịu. Diamond là ĐÍCH ĐẾN khi quan hệ đã đủ sâu và Key Account đủ quan trọng.”\nNối Buổi 2 (chọn Key Account) và Buổi 6 (cost-to-serve).\n[VERIFY: tên các giai đoạn quan hệ — đối chiếu T01]",
  });
  s.addShape(pres.shapes.CHEVRON, { x: M, y: 2.2, w: 6.2, h: 2.1, fill: { color: C.tPurple }, line: { color: C.purple, width: 1.5 } });
  s.addShape(pres.shapes.CHEVRON, { x: M + 6.0, y: 2.2, w: 6.2, h: 2.1, fill: { color: C.tBlue }, line: { color: C.blue, width: 1.5 } });
  bowtieIcon(s, M + 0.95, 2.55, 0.9, C.purple, C.purple);
  T(s, "Giai đoạn đầu", { x: M + 2.05, y: 2.45, w: 3.4, h: 0.5, fontSize: 20, bold: true, valign: "middle" });
  T(s, "thăm dò, cơ bản → Bow-tie", { x: M + 2.05, y: 2.95, w: 3.4, h: 0.9, fontSize: 15, valign: "top" });
  s.addShape(pres.shapes.DIAMOND, { x: M + 7.0, y: 2.62, w: 0.8, h: 0.8, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  T(s, "Gắn kết sâu", { x: M + 8.05, y: 2.45, w: 3.4, h: 0.5, fontSize: 20, bold: true, valign: "middle" });
  T(s, "phụ thuộc lẫn nhau, tích hợp → Diamond", { x: M + 8.05, y: 2.95, w: 3.4, h: 0.9, fontSize: 15, valign: "top" });
  card(s, M, 4.75, 7.3, 1.75, C.tYellow, C.yellow);
  T(s, [
    { text: "Diamond là đích đến ", options: { bold: true } },
    { text: "khi quan hệ đã đủ sâu và Key Account đủ quan trọng — không phải điểm xuất phát." },
  ], { x: M + 0.3, y: 4.75, w: 6.7, h: 1.75, fontSize: 17, valign: "middle" });
  const rx = M + 7.6, rw = CW - 7.6;
  pill(s, rx, 4.8, rw, 0.7, C.orange, "Buổi 2: chọn Key Account", { text: { fontSize: 14 } });
  pill(s, rx, 5.75, rw, 0.7, C.green, "Buổi 6: cost-to-serve", { text: { fontSize: 14 } });
}

// ───────────────────────── 7 — pros & cons ─────────────────────────
{
  const s = base("s81", "Bow-tie đứt khi người chủ chốt ở bất kỳ bên nào rời đi", {
    source: "T03, T04, T05.",
    notes: "Nhấn mạnh chữ “ở phía mình HOẶC phía khách hàng” — KAMer của agency nghỉ việc cũng làm đứt Bow-tie.",
  });
  const cols = [{ w: 2.3 }, { w: (CW - 2.3) / 2, head: "Bow-tie", fill: C.purple }, { w: (CW - 2.3) / 2, head: "Diamond", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Ưu điểm", "Đơn giản; KAMer kiểm soát nhiều, ít bất ngờ", "Quan hệ sâu, hiểu khách hàng hơn, cơ hội giải pháp lớn, không phụ thuộc một người"],
    ["Nhược điểm", "Người chủ chốt ở phía mình hoặc phía khách hàng rời đi → có thể mất quan hệ", "Tốn nguồn lực; nhiều quyết định lớn nằm ngoài tầm kiểm soát của KAMer"],
  ], { rowH: 1.05, size: 15 });
  card(s, M, 4.85, CW, 1.65, C.tPink, C.pink);
  T(s, [
    { text: "“First, if anything happens to the key person in your firm or client-side you are at risk of losing that relationship”", options: { italic: true, breakLine: true } },
    { text: "— Kim Tasso (T05)", options: { color: C.muted, fontSize: 13 } },
  ], { x: M + 0.35, y: 4.85, w: CW - 0.7, h: 1.65, fontSize: 18, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── 8 — tenure numbers ─────────────────────────
{
  const s = base("s81", "Quan hệ kéo dài hơn nhiệm kỳ người ra quyết định", {
    source: "T07: ANA & 4As (2025) · T08: Spencer Stuart (2025). Số liệu Mỹ, doanh nghiệp rất lớn — chưa kiểm chứng chéo.",
    notes: "Quan hệ khách hàng – agency trung bình khoảng 7 năm (2016: 3,2 năm); agency trải nghiệm dài nhất, khoảng 10 năm (T07).\nNói to phép tính: “Nếu quan hệ kéo dài 10 năm mà người ra quyết định phía khách hàng chỉ ngồi ghế khoảng 4 năm, thì trong một quan hệ agency có thể làm việc với 2–3 người khác nhau ở cùng một vị trí. Mỗi lần đổi người là một lần quan hệ có thể đứt.”\nNói rõ: số liệu Mỹ, không suy rộng nguyên xi cho Việt Nam.",
  });
  const stats = [
    ["~10 năm", "quan hệ khách hàng – agency trải nghiệm (dài nhất trong các loại agency)", "T07", C.purple, C.tPurple],
    ["4,3 năm", "nhiệm kỳ trung bình của CMO tại Fortune 500, năm 2024", "T08", C.dBlue, C.tBlue],
  ];
  const cw = 3.9;
  stats.forEach(([n, d, src, c, t], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.1, cw, 4.35, t, t);
    T(s, n, { x: x + 0.3, y: 2.4, w: cw - 0.6, h: 1.2, fontSize: 50, bold: true, color: c });
    T(s, d, { x: x + 0.3, y: 3.75, w: cw - 0.6, h: 1.8, fontSize: 16, valign: "top" });
    T(s, src, { x: x + 0.3, y: 5.8, w: cw - 0.6, h: 0.35, fontSize: 12, color: C.muted });
  });
  const rx = M + 2 * (cw + 0.3), rw = CW - 2 * (cw + 0.3);
  card(s, rx, 2.1, rw, 4.35, C.tYellow, C.yellow);
  T(s, "Một quan hệ", { x: rx + 0.3, y: 2.4, w: rw - 0.6, h: 0.5, fontSize: 17, color: C.muted });
  T(s, "→ 2–3 người khác nhau ở cùng một ghế", { x: rx + 0.3, y: 2.9, w: rw - 0.6, h: 1.3, fontSize: 22, bold: true, valign: "top" });
  [C.purple, C.pink, C.blue].forEach((c, i) => badge(s, rx + 0.3 + i * 0.85, 4.55, 0.65, c, ""));
  T(s, "Mỗi lần đổi người là một lần quan hệ có thể đứt.", { x: rx + 0.3, y: 5.35, w: rw - 0.6, h: 0.9, fontSize: 15, valign: "top" });
}

// ───────────────────────── 9 — quan hệ in Vietnam ─────────────────────────
{
  const s = base("s81", "Ở Việt Nam, “quan hệ” làm Bow-tie vừa bền vừa mong manh", {
    source: "T17: Pham & Pham (2025) · T18: McMillan & Woodruff (1999).",
    notes: "Nghiên cứu về “quan hệ” trong kinh doanh Việt Nam nêu ba thành tố: thể diện, có qua có lại, tình cảm (T17). Nghiên cứu thời kỳ đầu đổi mới: quan hệ giao dịch càng lâu thì bên bán càng tin cho khách trả chậm (T18).\nNhận định của người soạn: tình cảm gắn với con người, không gắn với tổ chức. Khi đầu mối rời đi, người mới có thể coi agency là “người của sếp cũ”.",
  });
  const parts = [["Thể diện", C.purple], ["Có qua có lại", C.orange], ["Tình cảm", C.pink]];
  parts.forEach(([t, c], i) => {
    const x = M + 0.3 + i * 2.35;
    s.addShape(pres.shapes.OVAL, { x, y: 2.3, w: 2.1, h: 2.1, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, t, { x: x + 0.1, y: 2.3, w: 1.9, h: 2.1, fontSize: 18, bold: true, color: dark(c), align: "center", valign: "middle" });
  });
  T(s, "Ba thành tố của “quan hệ” (T17)", { x: M + 0.3, y: 4.6, w: 6.9, h: 0.4, fontSize: 13, color: C.muted, align: "center" });
  const rx = M + 7.9, rw = CW - 7.9;
  card(s, rx, 2.2, rw, 1.8, C.tGreen, C.green);
  T(s, [{ text: "Bền: ", options: { bold: true } }, { text: "quan hệ tình cảm KAMer – đầu mối giữ Bow-tie chạy tốt nhiều năm" }],
    { x: rx + 0.3, y: 2.2, w: rw - 0.6, h: 1.8, fontSize: 16, valign: "middle" });
  card(s, rx, 4.2, rw, 1.8, C.tPink, C.pink);
  T(s, [{ text: "Mong manh: ", options: { bold: true } }, { text: "tình cảm gắn với người, không gắn với tổ chức" }],
    { x: rx + 0.3, y: 4.2, w: rw - 0.6, h: 1.8, fontSize: 16, valign: "middle" });
  T(s, "→ Diamond chuyển một phần quan hệ cá nhân thành quan hệ giữa hai tổ chức.", { x: M, y: 6.2, w: CW, h: 0.55, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 10 — who meets whom ─────────────────────────
{
  const s = base("s81", "Diamond của event agency: mỗi cặp một mục đích, một nhịp gặp", {
    source: "Nhận định của người soạn, dựa trên T04 (ghép chuyên môn với chuyên môn) và T06 (lãnh đạo tham gia nhiều cấp).",
    notes: "Ranh giới (quyết định GV): chỉ bàn AI của agency gặp AI của Key Account; không đi vào tuyển dụng, đánh giá, đãi ngộ đội KAM.\n[NEEDS PROFESSOR INPUT: ví dụ sơ đồ tiếp xúc thực tế của một event agency Việt Nam]\nHiểu lầm: “Diamond là cho càng nhiều người gặp khách hàng càng tốt” → mỗi cặp phải có mục đích và nhịp gặp; KAMer vẫn điều phối. Nhiều người nói nhiều thông điệp khác nhau còn nguy hiểm hơn Bow-tie.",
  });
  const cols = [
    { w: 2.75, head: "Nova (agency)", fill: C.purple },
    { w: 3.2, head: "An Phát (Key Account)", fill: C.blue },
    { w: 3.65, head: "Làm việc về", fill: C.orange },
    { w: CW - 9.6 + 0.1, head: "Nhịp gặp", fill: C.green, color: C.ink },
  ];
  table(s, M, 1.95, cols, [
    ["CEO / GĐ điều hành", "Phó TGĐ Khối Marketing", "Định hướng hợp tác nhiều năm", "1–2 lần/năm + sự kiện lớn"],
    ["KAMer / Account Director", "Giám đốc Marketing", "Kế hoạch năm, ngân sách, ưu tiên", "Hằng tháng + đánh giá định kỳ"],
    ["Producer", "Trưởng ban Sự kiện / Truyền thông nội bộ", "Kịch bản, tiến độ, chất lượng", "Theo dự án"],
    ["Creative Lead", "Brand team", "Ý tưởng, nhận diện thương hiệu", "Theo dự án"],
    ["Kế toán dự án", "Tài chính / Mua sắm", "Hợp đồng, thanh toán, chứng từ", "Theo dự án + cuối năm"],
  ], { rowH: 0.74, size: 13 });
}

// ───────────────────────── 11 — executive engagement ─────────────────────────
{
  const s = base("s81", "Lãnh đạo agency là thành viên của đội khách hàng, không chỉ là cái tên", {
    source: "T06: Côté (2021), SAMA · T04: SBI.",
    notes: "SAMA: nhiều công ty coi executive sponsor chỉ là một cái tên trên slide, hoặc người gọi khi có sự cố. Nên chuyển sang executive engagement — lãnh đạo là thành viên có trách nhiệm của đội khách hàng; ghép đúng lãnh đạo với đúng khách hàng.\nHiểu lầm: “Có quan hệ tốt với sếp là đủ” → vẫn là Bow-tie, chỉ là nơ bướm ở tầng cao hơn.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  card(s, M, 2.1, 5.2, 2.2, C.white, C.line);
  T(s, "Executive sponsorship", { x: M + 0.3, y: 2.3, w: 4.6, h: 0.5, fontSize: 19, bold: true, color: C.muted });
  T(s, "Lãnh đạo chỉ đứng tên, xuất hiện khi có sự cố", { x: M + 0.3, y: 2.9, w: 4.6, h: 1.2, fontSize: 16, valign: "top", color: C.muted });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: M + 5.4, y: 2.85, w: 1.0, h: 0.7, fill: { color: C.purple }, line: { color: C.purple, width: 0 } });
  card(s, M + 6.6, 2.1, CW - 6.6, 2.2, C.tPurple, C.purple);
  T(s, "Executive engagement", { x: M + 6.9, y: 2.3, w: CW - 7.2, h: 0.5, fontSize: 19, bold: true, color: C.purple });
  T(s, "Lãnh đạo là thành viên có trách nhiệm của đội khách hàng", { x: M + 6.9, y: 2.9, w: CW - 7.2, h: 1.2, fontSize: 16, valign: "top" });
  card(s, M, 4.6, 7.9, 1.9, C.tYellow, C.yellow);
  T(s, [
    { text: "“Strategic account management is a team sport and requires cross-functional, multi-tiered vertical level engagement and strong accountability.”", options: { italic: true, breakLine: true } },
    { text: "— SAMA (T06)", options: { color: C.muted, fontSize: 12 } },
  ], { x: M + 0.3, y: 4.6, w: 7.3, h: 1.9, fontSize: 15, valign: "middle", paraSpaceAfter: 4 });
  card(s, M + 8.2, 4.6, CW - 8.2, 1.9, C.tGreen, C.green);
  T(s, [{ text: "Dấu hiệu đã đạt Diamond: ", options: { bold: true } }, { text: "agency được mời vào họp nội bộ của khách hàng, như lập kế hoạch năm (T04)." }],
    { x: M + 8.45, y: 4.6, w: CW - 8.7, h: 1.9, fontSize: 14, valign: "middle" });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s81", "Thực hành 1 · Từ nơ bướm sang kim cương: sơ đồ tiếp xúc Nova – An Phát", {
    source: "Phiếu W08_activity_S3_so_do_tiep_xuc.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Đồng hồ 5 / 10 / 5 phút.\nLời mở đầu: “Bước 1: vẽ đúng những đường quan hệ đang có, đừng vẽ điều mình mong muốn. Bước 2: Diamond mục tiêu 6 tháng, tối đa 5 cặp, mỗi cặp có mục đích và nhịp gặp. Bước 3: 3 việc trong 30 ngày để giữ An Phát. Giữ lại tờ giấy: lát nữa mang vào buổi họp với anh Minh.”\nKhi chốt: vẽ nhanh Bow-tie Nova – An Phát lên bảng. Thảo luận: nên để ai của Nova gặp anh Minh trước — KAMer hay CEO?",
  });
  T(s, "5/1: chị Hạnh báo nghỉ từ 1/2 · anh Minh (GĐ Marketing mới) chưa gặp Nova · hợp đồng gala vừa rồi ~2,2 tỷ", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  card(s, M, 2.45, 6.0, 4.3, C.white, C.line);
  T(s, "Người ở An Phát — Nova quen đến đâu?", { x: M + 0.3, y: 2.55, w: 5.4, h: 0.4, fontSize: 14, bold: true });
  const ppl = [["Chị Hạnh · GĐ Marketing (sắp nghỉ)", "rất thân", C.green], ["Anh Minh · GĐ Marketing mới", "chưa gặp", C.pink], ["Ông Tuấn · Phó TGĐ", "chỉ bắt tay", C.orange],
    ["Chị Lan · Truyền thông nội bộ", "qua chị Hạnh", C.orange], ["Anh Khoa · Ngân sách – mua sắm", "chỉ gửi hồ sơ", C.orange], ["Chị Vy · Thương hiệu", "chưa làm việc", C.pink]];
  ppl.forEach(([p, lv, c], i) => {
    const y = 3.05 + i * 0.58;
    T(s, p, { x: M + 0.3, y, w: 3.75, h: 0.48, fontSize: 12, valign: "middle" });
    pill(s, M + 4.1, y + 0.04, 1.65, 0.4, c === C.green ? C.tGreen : (c === C.pink ? C.tPink : C.tOrange), lv, { line: c, color: C.ink, text: { fontSize: 11, bold: false } });
  });
  const steps = [
    ["5’", "Vẽ hiện trạng: đây là Bow-tie hay Diamond?", C.orange],
    ["10’", "Diamond mục tiêu 6 tháng: ≤ 5 cặp — ai ↔ ai, mục đích, nhịp gặp", C.purple],
    ["5’", "3 việc trong 30 ngày để anh Minh không coi Nova là “agency của sếp cũ”", C.blue],
  ];
  const rx = M + 6.3, rw = CW - 6.3;
  steps.forEach(([t, d, c], i) => {
    const y = 2.45 + i * 1.1;
    badge(s, rx, y + 0.08, 0.8, c, t, null, 17);
    T(s, d, { x: rx + 1.0, y, w: rw - 1.0, h: 0.95, fontSize: 14, valign: "middle" });
  });
  card(s, rx, 5.85, rw, 0.9, C.tPink, C.pink);
  T(s, "Chỉ bàn ai của Nova gặp ai của An Phát — không bàn tổ chức đội ngũ bên trong Nova.", { x: rx + 0.25, y: 5.85, w: rw - 0.5, h: 0.9, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── Break ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink].forEach((c, i) =>
    s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 8   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng. Xếp cặp cho S6 trong giờ giải lao.");
}

// ───────────────────────── 12 — Minh's question ─────────────────────────
{
  const s = base("s82", "Anh Minh hỏi: “Nova đã mang lại gì?” — trả lời bằng số", {
    notes: "Mở đoạn S4: “Nova giữ An Phát 3 năm. Nhưng nếu anh Minh hỏi: ‘Nova đã mang lại gì cho ngân hàng?’, Nova trả lời bằng gì? Bằng cảm giác ‘khách vui lắm’, hay bằng số?”",
  });
  card(s, M, 2.1, CW, 1.5, C.tBlue, C.blue);
  T(s, "“Ba năm qua, Nova đã mang lại gì cho ngân hàng?”", { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.5, fontSize: 28, bold: true, italic: true, valign: "middle", align: "center" });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.0, cw, 2.5, C.white, C.line);
  T(s, "Cảm giác", { x: M + 0.35, y: 4.2, w: cw - 0.7, h: 0.5, fontSize: 20, bold: true, color: C.muted });
  T(s, "“Khách vui lắm anh ạ.”", { x: M + 0.35, y: 4.8, w: cw - 0.7, h: 1.4, fontSize: 22, italic: true, color: C.muted, valign: "top" });
  card(s, M + cw + 0.3, 4.0, cw, 2.5, C.tYellow, C.yellow);
  T(s, "Số liệu", { x: M + cw + 0.65, y: 4.2, w: cw - 0.7, h: 0.5, fontSize: 20, bold: true });
  T(s, "Chỉ số quá trình + chỉ số kết quả mà hai bên cùng theo dõi", { x: M + cw + 0.65, y: 4.8, w: cw - 0.7, h: 1.4, fontSize: 20, valign: "top" });
}

// ───────────────────────── 13 — process vs results ─────────────────────────
{
  const s = base("s82", "Chỉ số quá trình báo trước, chỉ số kết quả xác nhận", {
    source: "T09: Tzempelikos & Gounaris (2015) · T10: Fakhreddin, Foroudi & Kooli (2025).",
    notes: "Ý cần chốt: “Chỉ số quá trình là đèn báo trên taplô, chỉ số kết quả là đồng hồ cây số. Chỉ nhìn đồng hồ cây số thì khi biết xe hỏng đã quá muộn.”\n[VERIFY: danh sách thực hành KAM ở cấp “control” và các biến đo trong T09 mới đọc qua tóm tắt — đọc toàn văn trước khi trích chi tiết]",
  });
  const cols = [{ w: 2.2 }, { w: (CW - 2.2) / 2, head: "Process-driven · chỉ số quá trình", fill: C.blue }, { w: (CW - 2.2) / 2, head: "Results-driven · chỉ số kết quả", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["Đo gì", "Việc đang làm và sức khỏe quan hệ: tiếp xúc, đánh giá định kỳ, hài lòng", "Điều đã xảy ra: doanh thu, lợi nhuận, tái ký"],
    ["Tính chất", "Leading — dẫn dắt, báo trước kết quả", "Lagging — chỉ số trễ, biết khi đã muộn"],
  ], { rowH: 0.95, size: 15 });
  const y = 4.65, cw = (CW - 0.3) / 2;
  card(s, M, y, cw, 1.85, C.tBlue, C.blue);
  badge(s, M + 0.35, y + 0.5, 0.85, C.blue, "!", C.white, 30);
  T(s, [{ text: "Đèn báo trên taplô", options: { bold: true, breakLine: true } }, { text: "thấy vấn đề trước khi xe hỏng" }], { x: M + 1.45, y, w: cw - 1.7, h: 1.85, fontSize: 17, valign: "middle" });
  card(s, M + cw + 0.3, y, cw, 1.85, C.tPurple, C.purple);
  badge(s, M + cw + 0.65, y + 0.5, 0.85, C.purple, "km", C.white, 20);
  T(s, [{ text: "Đồng hồ cây số", options: { bold: true, breakLine: true } }, { text: "xác nhận quãng đường đã đi" }], { x: M + cw + 1.75, y, w: cw - 1.7, h: 1.85, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 14 — research chain ─────────────────────────
{
  const s = base("s82", "Nghiên cứu: thực hành KAM tạo kết quả thông qua quan hệ", {
    source: "T09: Tzempelikos & Gounaris (2015), Industrial Marketing Management · T10: Fakhreddin et al. (2025), Industrial Marketing Management.",
    notes: "T09: thực hành KAM (cấp chiến lược, tổ chức, chiến thuật, kiểm soát) ảnh hưởng đến hiệu quả thông qua năng lực quan hệ và các kết quả quan hệ.\nT10: khảo sát 568 doanh nghiệp B2B châu Âu — định hướng KAM → năng lực quan hệ và năng lực KAM → lợi thế cạnh tranh → hiệu quả thị trường và tài chính. Sự hài lòng của Key Account bổ trợ lợi thế khác biệt hóa, làm tăng hiệu quả tài chính.\nAlt-text: chuỗi mũi tên bốn bước.",
  });
  const steps = [["Định hướng KAM", C.purple, C.tPurple], ["Năng lực quan hệ & năng lực KAM", C.blue, C.tBlue], ["Lợi thế cạnh tranh", C.orange, C.tOrange], ["Hiệu quả thị trường & tài chính", C.green, C.tGreen]];
  const sw = (CW - 3 * 0.55) / 4;
  steps.forEach(([t, c, f], i) => {
    const x = M + i * (sw + 0.55);
    card(s, x, 2.3, sw, 1.9, f, c, 1.5);
    badge(s, x + 0.2, 2.45, 0.5, c, String(i + 1), null, 16);
    T(s, t, { x: x + 0.2, y: 3.0, w: sw - 0.4, h: 1.1, fontSize: 16, bold: true, valign: "top" });
    if (i < 3) arrow(s, x + sw + 0.07, 3.25, x + sw + 0.48, 3.25, C.ink, 2.5);
  });
  card(s, M, 4.6, 5.6, 1.9, C.white, C.line);
  T(s, [{ text: "568", options: { bold: true, fontSize: 40, color: C.dBlue, breakLine: true } }, { text: "doanh nghiệp B2B châu Âu được khảo sát (T10)", options: { fontSize: 15 } }],
    { x: M + 0.3, y: 4.6, w: 5.0, h: 1.9, valign: "middle" });
  card(s, M + 5.9, 4.6, CW - 5.9, 1.9, C.tYellow, C.yellow);
  T(s, [{ text: "Sự hài lòng của Key Account ", options: { bold: true } }, { text: "bổ trợ lợi thế khác biệt hóa, làm tăng hiệu quả tài chính." }],
    { x: M + 6.2, y: 4.6, w: CW - 6.5, h: 1.9, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 15 — indicator set ─────────────────────────
{
  const s = base("s82", "Bộ chỉ số cho quan hệ Nova – An Phát", {
    source: "Nhận định của người soạn; “được mời họp kế hoạch năm” theo T04; biên lợi nhuận nối cost-to-serve (Buổi 6).",
    notes: "Cho lớp đoán nhanh: đọc to từng chỉ số (xáo trộn), lớp nói thuộc cột nào, rồi mới chiếu.\nHiểu lầm: “Đo càng nhiều chỉ số càng tốt” → chọn vài chỉ số mà hai bên cùng đồng ý và cùng theo dõi.",
  });
  const cw = (CW - 0.3) / 2;
  const colsData = [
    ["Quá trình · leading", C.blue, C.tBlue, ["Số đầu mối và số cấp Nova có quan hệ", "Nhịp gặp lãnh đạo hai bên", "Số buổi đánh giá định kỳ đúng hạn", "Thời gian phản hồi", "Mức hài lòng sau mỗi sự kiện", "Được mời vào họp kế hoạch năm?"]],
    ["Kết quả · lagging", C.purple, C.tPurple, ["Doanh thu từ An Phát / năm", "Biên lợi nhuận trên An Phát (cost-to-serve)", "Share of wallet: tỷ trọng ngân sách sự kiện Nova nắm", "Số năm quan hệ, tái ký"]],
  ];
  colsData.forEach(([h, c, f, items], i) => {
    const x = M + i * (cw + 0.3);
    pill(s, x, 1.95, cw, 0.55, c, h, { text: { fontSize: 16 } });
    card(s, x, 2.65, cw, 3.95, f, f);
    T(s, bullets(items), { x: x + 0.35, y: 2.8, w: cw - 0.7, h: 3.65, fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  });
}

// ───────────────────────── 16 — two staircases ─────────────────────────
function stairs(s, x, y, w, h, levels, color, fill, o = {}) {
  const n = levels.length, sw = w / n, base = 0.95, stepH = (h - base) / (n - 1);
  levels.forEach(([k, name], i) => {
    const bh = base + stepH * i, bx = x + i * sw, by = y + h - bh;
    const hl = o.highlight && o.highlight.includes(i);
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by, w: sw - 0.06, h: bh, fill: { color: hl ? color : fill }, line: { color, width: 1 } });
    T(s, k, { x: bx, y: by + 0.08, w: sw - 0.06, h: 0.4, fontSize: 16, bold: true, align: "center", color: hl ? C.white : C.ink });
    T(s, name, { x: bx + 0.04, y: by + 0.48, w: sw - 0.14, h: Math.max(bh - 0.55, 0.4), fontSize: o.size || 10, align: "center", valign: "top", color: hl ? C.white : C.ink });
  });
}
{
  const s = base("s82", "ROI Methodology: đặt mục tiêu từ trên xuống, đo từ dưới lên", {
    source: "T11: Phillips, Breining & Phillips (2008); Event ROI Institute · T12: Amex GBT (2025), chưa KCC.",
    notes: "Phương pháp phát triển từ mô hình đánh giá đào tạo của Kirkpatrick (1959); Jack Phillips và ROI Institute đưa vào vận hành (T11).\nThực tế: hầu hết tổ chức chỉ đo cấp 1 bằng phiếu khảo sát cuối sự kiện. Theo Amex GBT, chỉ khoảng 1/4 tổ chức có chỉ số ROI trong chính sách sự kiện; báo cáo đề xuất đo Return on Experience (ROE).\n[VERIFY: 24%/26% Amex — đối chiếu biểu đồ gốc để chắc con số nào đi với nhãn “ROI metrics”]\nAlt-text: hai cầu thang đặt cạnh nhau; cầu thang bên phải có thêm bậc 0.",
  });
  const sy = 2.35, sh = 3.7;
  T(s, "5 cấp — ROI Institute", { x: M, y: 1.9, w: 5.2, h: 0.4, fontSize: 15, bold: true, color: C.dOrange });
  stairs(s, M, sy, 4.9, sh, [["1", "Reaction"], ["2", "Learning"], ["3", "Application"], ["4", "Impact"], ["5", "ROI"]], C.orange, C.tOrange);
  const x2 = M + 5.25;
  T(s, "6 cấp — Event ROI Institute", { x: x2, y: 1.9, w: 5.4, h: 0.4, fontSize: 15, bold: true, color: C.dBlue });
  stairs(s, x2, sy, 5.4, sh, [["0", "Đúng người"], ["1", "Hài lòng"], ["2", "Learning"], ["3", "Behaviour"], ["4", "Impact"], ["5", "ROI"]], C.blue, C.tBlue, { highlight: [0] });
  const ax = x2 + 5.6, aw = W - M - ax;
  arrow(s, ax + 0.15, sy, ax + 0.15, sy + 1.6, C.purple, 3);
  T(s, "đặt mục tiêu từ cấp 5", { x: ax + 0.35, y: sy, w: aw - 0.35, h: 1.6, fontSize: 12, bold: true, color: C.purple, valign: "middle" });
  arrow(s, ax + 0.15, sy + sh, ax + 0.15, sy + sh - 1.6, C.green, 3);
  T(s, "đo từ cấp 0 / 1", { x: ax + 0.35, y: sy + sh - 1.6, w: aw - 0.35, h: 1.6, fontSize: 12, bold: true, color: C.dGreen, valign: "middle" });
  card(s, M, 6.2, CW, 0.6, C.tYellow, C.yellow);
  T(s, "Thực tế: hầu hết tổ chức chỉ đo cấp 1 — phiếu khảo sát cuối sự kiện (T11).", { x: M + 0.25, y: 6.2, w: CW - 0.5, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 17 — what 6-level adds ─────────────────────────
{
  const s = base("s82", "Khung 6 cấp thêm “đúng người”, “học về quan hệ” và “sứ mệnh thay ROI”", {
    source: "T11: Event ROI Institute, Methodology.",
    notes: "Cấp 0: mời những người có khoảng trống lớn nhất về hiểu biết và hành vi — “không cần nói với người đã được thuyết phục”.\nCấp 1 trong khung 6 cấp: hài lòng chỉ là biến đại diện cho chất lượng môi trường học. Cấp 4: luôn phải tách riêng tác động của sự kiện (tốt nhất nhóm đối chứng; thay thế: người tham dự tự ước lượng).\nTrích bổ sung: “For association and government events, profit is usually not an objective… this is the mission that replaces ROI.”\nHiểu lầm: “Khách hài lòng 4,5/5 là sự kiện thành công” → mới là cấp 1; thành công khi người tham dự làm điều gì đó khác đi.",
  });
  const items = [
    ["0", "Đúng người tham dự", "Mời người có khoảng trống lớn nhất về hiểu biết và hành vi", C.purple, C.tPurple],
    ["2", "Học về quan hệ", "Learning gồm cả relationship learning", C.blue, C.tBlue],
    ["5", "Sứ mệnh thay ROI", "Sự kiện hiệp hội, nhà nước: lợi nhuận không phải mục tiêu", C.pink, C.tPink],
  ];
  const cw = (CW - 0.6) / 3;
  items.forEach(([k, h, d, c, t], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 3.0, t, c);
    T(s, "Cấp", { x: x + 0.35, y: 2.25, w: 1.0, h: 0.35, fontSize: 13, color: C.muted });
    T(s, k, { x: x + 0.35, y: 2.55, w: 1.5, h: 0.9, fontSize: 44, bold: true, color: c === C.blue ? C.dBlue : (c === C.pink ? C.dPink : c) });
    T(s, h, { x: x + 0.35, y: 3.5, w: cw - 0.7, h: 0.5, fontSize: 18, bold: true });
    T(s, d, { x: x + 0.35, y: 4.0, w: cw - 0.7, h: 0.95, fontSize: 14, valign: "top" });
  });
  card(s, M, 5.35, CW, 1.2, C.tYellow, C.yellow);
  T(s, [
    { text: "“Meetings and events create value to stakeholders by influencing the behavior of the participants.” ", options: { italic: true } },
    { text: "— Event ROI Institute", options: { color: C.muted, fontSize: 12 } },
  ], { x: M + 0.35, y: 5.35, w: CW - 0.7, h: 1.2, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 18 — Vietnam fit ─────────────────────────
{
  const s = base("s82", "Với agency Việt Nam: khung 6 cấp, bản rút gọn", {
    source: "T16: Hofstede (2015), thang 0–100 · T17, T18 · Nhận định của người soạn (đã được GV duyệt).",
    notes: "Chưa có nghiên cứu thực nghiệm so sánh hai phiên bản cho sự kiện tại Việt Nam.\n• Khoảng cách quyền lực cao (PDI 70 vs Mỹ 40): lãnh đạo khách hàng quyết định mục tiêu và danh sách khách mời → cấp 0 biến “mời đúng người” thành chỉ số.\n• Tập thể cao (IDV 20), coi trọng quan hệ: giá trị lớn của sự kiện là quan hệ, khó quy ra tiền → cấp 2 có “học về quan hệ”.\n• Quan hệ dài hạn có giá trị kinh tế (T18): kết quả đến muộn → chấp nhận ước lượng của người tham dự.\n• Né tránh bất định thấp (UAI 30): bộ đo nặng khó duy trì → bản rút gọn vài KPI then chốt.\n• Nhiều sự kiện nhà nước, hiệp hội → sứ mệnh thay ROI.\nLưu ý thể diện: phiếu hài lòng ngay sau sự kiện dễ nghiêng về tích cực → bổ sung chỉ số hành vi quan sát được. [VERIFY: chưa có nguồn thực nghiệm về độ lệch khảo sát do thể diện tại VN]\nNhắc lớp: điểm Hofstede là xu hướng quốc gia, không dùng để đóng khung một khách hàng cụ thể (Buổi 3).",
  });
  // Hofstede bars
  const dims = [["PDI · khoảng cách quyền lực", 70, 40], ["IDV · chủ nghĩa cá nhân", 20, 91], ["UAI · né tránh bất định", 30, 46]];
  const bx = M, bw = 4.6, scale = (bw - 0.2) / 100;
  T(s, [{ text: "■ ", options: { color: C.pink } }, { text: "Việt Nam   " }, { text: "■ ", options: { color: C.muted } }, { text: "Hoa Kỳ" }], { x: bx, y: 1.95, w: bw, h: 0.35, fontSize: 12 });
  dims.forEach(([name, vn, us], i) => {
    const y = 2.45 + i * 1.3;
    T(s, name, { x: bx, y, w: bw, h: 0.35, fontSize: 13, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + 0.4, w: vn * scale, h: 0.32, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
    T(s, String(vn), { x: bx + vn * scale + 0.08, y: y + 0.4, w: 0.6, h: 0.32, fontSize: 12, bold: true, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + 0.76, w: us * scale, h: 0.24, fill: { color: "B9B3A6" }, line: { color: "B9B3A6", width: 0 } });
    T(s, String(us), { x: bx + us * scale + 0.08, y: y + 0.74, w: 0.6, h: 0.28, fontSize: 11, color: C.muted, valign: "middle" });
  });
  T(s, "Điểm quốc gia ≠ từng khách hàng.", { x: bx, y: 6.4, w: bw, h: 0.35, fontSize: 12, italic: true, color: C.muted });
  const rx = M + 5.1, rw = CW - 5.1;
  const rows = [
    ["Quyền lực tập trung ở lãnh đạo", "Cấp 0: “mời đúng người” thành chỉ số"],
    ["Coi trọng quan hệ, tập thể", "Cấp 2: đo cả “học về quan hệ”"],
    ["Kết quả đến muộn, khó tách riêng", "Chấp nhận người tham dự tự ước lượng"],
    ["Ít chuộng quy trình nặng", "Bản rút gọn: vài KPI then chốt"],
    ["Nhiều sự kiện nhà nước, hiệp hội", "Sứ mệnh thay cho ROI"],
  ];
  rows.forEach(([a, b], i) => {
    const y = 1.95 + i * 0.86;
    card(s, rx, y, rw, 0.74, i % 2 ? C.white : C.tBlue, i % 2 ? C.line : C.tBlue);
    T(s, a, { x: rx + 0.2, y, w: rw * 0.5 - 0.3, h: 0.74, fontSize: 13, bold: true, valign: "middle" });
    T(s, "→ " + b, { x: rx + rw * 0.5, y, w: rw * 0.5 - 0.2, h: 0.74, fontSize: 13, valign: "middle" });
  });
  T(s, "Thể diện: phiếu hài lòng dễ nghiêng về tích cực → thêm chỉ số hành vi quan sát được.", { x: rx, y: 6.3, w: rw, h: 0.5, fontSize: 12, italic: true, color: C.purple, valign: "middle" });
}

// ───────────────────────── 19 — who commits which level ─────────────────────────
{
  const s = base("s82", "Agency cam kết cấp 0–3; cấp 4–5 đo cùng Key Account", {
    source: "Nhận định của người soạn, dựa trên T11, T12 (đã được GV duyệt).",
    notes: "Cấp 0–3: agency chủ động cam kết và báo cáo vì kiểm soát được nhiều.\nCấp 4–5: chỉ đo khi Key Account đồng ý chia sẻ dữ liệu, thống nhất từ đầu trong buổi đánh giá định kỳ (8.3). Sự kiện nhà nước, hiệp hội: thay cấp 5 bằng mục tiêu sứ mệnh.\nHiểu lầm: “Chỉ số là việc của khách hàng” → Key Account thường còn yếu trong đo lường (T12); agency chủ động đề xuất bộ chỉ số là giá trị cộng thêm (nối Buổi 5, CVP).\nAlt-text: bậc thang 6 cấp chia hai vùng — cấp 0–3 agency cam kết, cấp 4–5 đo cùng Key Account.",
  });
  const lv = [["0", "Đúng người"], ["1", "Hài lòng"], ["2", "Learning"], ["3", "Behaviour"], ["4", "Impact"], ["5", "ROI"]];
  const x = M, y = 2.1, w = 7.4, h = 4.1, n = 6, sw = w / n, b0 = 1.0, stepH = (h - b0) / (n - 1);
  lv.forEach(([k, name], i) => {
    const agency = i <= 3, c = agency ? C.green : C.purple, f = agency ? C.tGreen : C.tPurple;
    const bh = b0 + stepH * i, bx = x + i * sw, by = y + h - bh;
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by, w: sw - 0.06, h: bh, fill: { color: f }, line: { color: c, width: 1.25 } });
    T(s, k, { x: bx, y: by + 0.08, w: sw - 0.06, h: 0.4, fontSize: 18, bold: true, align: "center" });
    T(s, name, { x: bx, y: by + 0.5, w: sw - 0.06, h: 0.4, fontSize: 11, align: "center" });
  });
  line(s, x, y + h + 0.2, x + 4 * sw - 0.06, y + h + 0.2, C.green, 4);
  line(s, x + 4 * sw, y + h + 0.2, x + w - 0.06, y + h + 0.2, C.purple, 4);
  T(s, "agency cam kết", { x, y: y + h + 0.28, w: 4 * sw, h: 0.35, fontSize: 13, bold: true, color: C.dGreen, align: "center" });
  T(s, "đo cùng Key Account", { x: x + 4 * sw, y: y + h + 0.28, w: 2 * sw, h: 0.35, fontSize: 12, bold: true, color: C.purple, align: "center" });
  const rx = M + 7.9, rw = CW - 7.9;
  card(s, rx, 2.1, rw, 2.0, C.tGreen, C.green);
  T(s, [{ text: "Cấp 0–3", options: { bold: true, breakLine: true } }, { text: "Agency chủ động cam kết và báo cáo — kiểm soát được nhiều." }], { x: rx + 0.3, y: 2.1, w: rw - 0.6, h: 2.0, fontSize: 16, valign: "middle" });
  card(s, rx, 4.35, rw, 2.2, C.tPurple, C.purple);
  T(s, [{ text: "Cấp 4–5", options: { bold: true, breakLine: true } }, { text: "Chỉ đo khi Key Account đồng ý chia sẻ dữ liệu — thống nhất từ đầu trong buổi đánh giá định kỳ." }], { x: rx + 0.3, y: 4.35, w: rw - 0.6, h: 2.2, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 20 — joint review agenda ─────────────────────────
{
  const s = base("s83", "Đánh giá chung là họp hai bên, không phải khách chấm điểm agency", {
    source: "T13: Promethean Research (2026) — khảo sát 165 agency kỹ thuật số, không phải event agency, chưa KCC · T06.",
    notes: "Nhiều agency họp đánh giá theo quý (QBR). T13: 66% có QBR chính thức cho tất cả hoặc một phần khách hàng; agency có QBR chính thức báo cáo quan hệ dài hơn. Nói rõ: agency kỹ thuật số.\nVới event agency: nhịp theo quý hoặc theo mùa sự kiện của Key Account (nhận định của người soạn).\nAi dự: lãnh đạo hai bên, không chỉ KAMer và đầu mối (T06) — đây cũng là lúc vẽ thêm các cạnh của Diamond.\nHiểu lầm: “Không có vấn đề thì không cần họp” → khoảng lặng giữa các lần gặp là lúc dễ mất khách nhất.",
  });
  const steps = [["Hỏi thăm quan hệ", C.orange], ["Đã hứa gì – đã làm gì", C.purple], ["Kết quả theo chỉ số đã thống nhất", C.blue], ["Đánh giá hai chiều", C.pink], ["Đề xuất quý tới + hẹn buổi sau", C.green]];
  const sw = (CW - 4 * 0.2) / 5;
  steps.forEach(([t, c], i) => {
    const x = M + i * (sw + 0.2);
    card(s, x, 2.1, sw, 2.5, C.white, c, 1.5);
    badge(s, x + 0.25, 2.3, 0.7, c, String(i + 1));
    T(s, t, { x: x + 0.25, y: 3.2, w: sw - 0.5, h: 1.25, fontSize: 16, bold: true, valign: "top" });
  });
  card(s, M, 4.95, 5.6, 1.6, C.tYellow, C.yellow);
  T(s, [{ text: "Ai dự: ", options: { bold: true } }, { text: "lãnh đạo hai bên, không chỉ KAMer và đầu mối" }], { x: M + 0.3, y: 4.95, w: 5.0, h: 1.6, fontSize: 17, valign: "middle" });
  card(s, M + 5.9, 4.95, CW - 5.9, 1.6, C.tBlue, C.tBlue);
  T(s, [{ text: "66% ", options: { bold: true, fontSize: 30, color: C.dBlue } }, { text: "agency kỹ thuật số có họp đánh giá theo quý (QBR) chính thức cho tất cả hoặc một phần khách hàng", options: { fontSize: 14 } }],
    { x: M + 6.2, y: 4.95, w: CW - 6.5, h: 1.6, valign: "middle" });
}

// ───────────────────────── 21 — two-way evaluation ─────────────────────────
{
  const s = base("s83", "Đánh giá hai chiều cho agency cơ hội góp ý mà không mất thể diện", {
    source: "T14: ANA (2009) — khảo sát tại Mỹ, nguồn cũ; bản cập nhật chỉ dành cho thành viên.",
    notes: "Thực hành tốt (T14): người điều phối trung lập, mẫu đánh giá thống nhất, kế hoạch hành động sau đánh giá.\nNhận định của người soạn: đây là dịp chính thức để agency nói những điều khách hàng làm khiến chất lượng giảm (duyệt kịch bản chậm, đổi brief sát ngày) mà không làm mất thể diện của ai — vì đó là phần của quy trình, không phải lời phàn nàn.",
  });
  const stats = [["82%", "doanh nghiệp đánh giá agency định kỳ, chính thức", C.purple, C.tPurple], ["59%", "dùng đánh giá hai chiều (360°) — agency cũng đánh giá khách hàng", C.dPink, C.tPink]];
  stats.forEach(([n, d, c, t], i) => {
    const x = M + i * 3.55;
    card(s, x, 2.1, 3.3, 3.0, t, t);
    T(s, n, { x: x + 0.3, y: 2.3, w: 2.7, h: 1.1, fontSize: 50, bold: true, color: c });
    T(s, d, { x: x + 0.3, y: 3.45, w: 2.7, h: 1.5, fontSize: 15, valign: "top" });
  });
  const rx = M + 7.2, rw = CW - 7.2;
  T(s, "Agency có thể nêu, như một phần quy trình:", { x: rx, y: 2.1, w: rw, h: 0.45, fontSize: 15, bold: true });
  T(s, bullets(["Duyệt kịch bản chậm", "Đổi brief sát ngày", "Thay người phụ trách giữa chừng"]), { x: rx, y: 2.6, w: rw, h: 2.2, fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  card(s, M, 5.35, CW, 1.2, C.tYellow, C.yellow);
  T(s, [
    { text: "“Two-way, or 360-degree, evaluations in which the agency also evaluates the client are used by a majority of firms (59 percent).” ", options: { italic: true } },
    { text: "— ANA (T14)", options: { color: C.muted, fontSize: 12 } },
  ], { x: M + 0.35, y: 5.35, w: CW - 0.7, h: 1.2, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 22 — PER ─────────────────────────
{
  const s = base("s83", "Mỗi sự kiện một báo cáo; nhiều báo cáo là trí nhớ của quan hệ", {
    source: "T15: Convention Industry Council (2005), APEX Post-Event Report — mẫu gốc dùng giữa nhà tổ chức và địa điểm.",
    notes: "Nói rõ: mẫu APEX PER gốc dùng giữa nhà tổ chức và địa điểm; agency mượn logic này cho quan hệ với Key Account (nhận định của người soạn).\nBáo cáo sau từng sự kiện là dữ liệu đầu vào cho buổi đánh giá định kỳ; khi đầu mối phía khách hàng thay người, đây là “trí nhớ” của quan hệ.\nAlt-text: dòng chảy từ sự kiện → họp ngay sau sự kiện → báo cáo trong 60 ngày → chồng báo cáo thành lịch sử quan hệ → đánh giá định kỳ.",
  });
  const flow = [["Sự kiện", C.orange, C.tOrange], ["Họp trực tiếp ngay sau sự kiện", C.purple, C.tPurple], ["Báo cáo xong trong 60 ngày", C.blue, C.tBlue]];
  const fw = 2.55;
  flow.forEach(([t, c, f], i) => {
    const x = M + i * (fw + 0.5);
    card(s, x, 2.3, fw, 1.6, f, c, 1.5);
    T(s, t, { x: x + 0.2, y: 2.3, w: fw - 0.4, h: 1.6, fontSize: 16, bold: true, align: "center", valign: "middle" });
    arrow(s, x + fw + 0.07, 3.1, x + fw + 0.43, 3.1, C.ink, 2.5);
  });
  // stack of reports
  const sx = M + 3 * (fw + 0.5);
  [3, 2, 1, 0].forEach((k) => card(s, sx + k * 0.14, 2.1 + k * 0.14, 2.3, 1.65, k ? C.white : C.tGreen, C.green));
  T(s, "Lịch sử quan hệ", { x: sx, y: 2.1, w: 2.3, h: 1.65, fontSize: 16, bold: true, align: "center", valign: "middle" });
  arrow(s, sx + 1.3, 4.1, sx + 1.3, 4.6, C.ink, 2.5);
  pill(s, sx - 0.6, 4.7, 3.6, 0.6, C.pink, "Đầu vào cho đánh giá định kỳ", { text: { fontSize: 13 } });
  card(s, M, 4.6, 8.4, 1.9, C.tYellow, C.yellow);
  T(s, [
    { text: "“A collection of PERs over time will provide the complete history for an event.”", options: { italic: true, breakLine: true } },
    { text: "Khi đầu mối phía khách hàng thay người, đây là trí nhớ của quan hệ.", options: { bold: true, fontSize: 15 } },
  ], { x: M + 0.3, y: 4.6, w: 7.8, h: 1.9, fontSize: 16, valign: "middle", paraSpaceAfter: 8 });
}

// ───────────────────────── 23 — warning signs ─────────────────────────
{
  const s = base("s83", "Khách hàng hiếm khi báo trước là sẽ rời đi", {
    source: "T13: Promethean Research (2026) — khảo sát 165 agency kỹ thuật số, chưa KCC.",
    notes: "T13: 88% agency theo dõi ít nhất một chỉ số “sức khỏe” khách hàng (mức tương tác, biến động nhân sự phía khách hàng, khảo sát hài lòng, trả tiền đúng hạn, lợi nhuận).\nNối lại S1: “Tin nhắn của chị Hạnh là dấu hiệu cảnh báo lớn nhất trong danh sách này. Và Nova chỉ có một sợi dây.”\nHiểu lầm: “Họp càng hình thức càng chuyên nghiệp” → quy trình quá cứng có thể làm yếu quan hệ (T10); giữ ngắn, có số liệu, có hành động tiếp theo.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const signs = [["Trả lời chậm hơn", C.orange], ["Bỏ buổi đánh giá", C.purple], ["Giao quan hệ cho người cấp thấp hơn", C.blue], ["Thanh toán chậm", C.green], ["Đầu mối phía khách hàng thay người", C.pink]];
  const sw = (CW - 4 * 0.2) / 5;
  signs.forEach(([t, c], i) => {
    const x = M + i * (sw + 0.2), last = i === 4;
    card(s, x, 2.1, sw, 2.3, last ? C.tPink : C.white, c, last ? 2.5 : 1.25);
    s.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: x + 0.25, y: 2.3, w: 0.62, h: 0.54, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, "!", { x: x + 0.25, y: 2.38, w: 0.62, h: 0.46, fontSize: 16, bold: true, color: dark(c), align: "center", valign: "middle" });
    T(s, t, { x: x + 0.25, y: 3.0, w: sw - 0.5, h: 1.25, fontSize: 16, bold: true, valign: "top" });
  });
  T(s, "↑ như tin nhắn của chị Hạnh (slide 2)", { x: M + 4 * (sw + 0.2) - 1.0, y: 4.5, w: sw + 1.0, h: 0.35, fontSize: 12, italic: true, color: C.dPink, align: "right" });
  card(s, M, 5.1, 3.3, 1.45, C.tBlue, C.tBlue);
  T(s, [{ text: "88% ", options: { bold: true, fontSize: 30, color: C.dBlue } }, { text: "agency theo dõi ít nhất một chỉ số sức khỏe khách hàng", options: { fontSize: 13 } }], { x: M + 0.25, y: 5.1, w: 2.85, h: 1.45, valign: "middle" });
  card(s, M + 3.6, 5.1, CW - 3.6, 1.45, C.tYellow, C.yellow);
  T(s, [
    { text: "“An account that runs through a single client contact ends when that contact changes jobs.” ", options: { italic: true } },
    { text: "— T13", options: { color: C.muted, fontSize: 12 } },
  ], { x: M + 3.9, y: 5.1, w: CW - 4.2, h: 1.45, fontSize: 16, valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s83", "Thực hành 2 · Buổi đánh giá chung đầu tiên với anh Minh", {
    source: "Phiếu W08_activity_S6_danh_gia_chung.md · Tình huống giả định.",
    notes: "S6 — Thực hành 2 (30 phút). Đồng hồ 8 / 10 / 3 / 6 phút. Phát thẻ vai cắt riêng; không cho bên kia xem trước bước lật thẻ.\nVai An Phát: anh Minh (chủ trì), chị Lan, anh Khoa. Vai Nova: anh Đức (CEO), chị Thảo (KAMer, dẫn họp), Producer. 1 người quan sát/nhóm.\nTổng kết từ góc agency: Nova chứng minh giá trị bằng chỉ số quá trình hay kết quả? Có dùng phần đánh giá hai chiều để nêu điều An Phát cần cải thiện không, có khéo không? Sơ đồ quan hệ có thêm cạnh nào?\nGhi biên bản 3 dòng của từng cặp lên bảng.",
  });
  T(s, "20/2 · anh Minh dành 10 phút · Quý 1 anh rà soát toàn bộ nhà cung cấp marketing", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  card(s, M, 2.45, 6.3, 4.3, C.white, C.line);
  T(s, "Dữ liệu gala 12/12 theo khung 6 cấp", { x: M + 0.3, y: 2.55, w: 5.7, h: 0.4, fontSize: 14, bold: true });
  const data = [["0", "540/600 khách (90%); 48/50 DN VIP có mặt"], ["1", "Khảo sát 4,5/5 (210 phiếu)"], ["2", "72% biết thêm về gói tài chính DN mới"], ["3", "35 DN đặt lịch gặp chuyên viên trong 2 tuần"], ["4", "Nova chưa có dữ liệu (của ngân hàng)"], ["5", "Chưa tính được"]];
  data.forEach(([k, d], i) => {
    const y = 3.02 + i * 0.6, miss = i >= 4;
    badge(s, M + 0.3, y + 0.06, 0.42, miss ? C.line : (i <= 3 ? C.green : C.purple), k, miss ? C.ink : C.white, 13);
    T(s, d, { x: M + 0.9, y, w: 5.2, h: 0.55, fontSize: 13, valign: "middle", italic: miss, color: miss ? C.muted : C.ink });
  });
  const steps = [["8’", "Chuẩn bị: đội Nova soạn chương trình 5 phần", C.orange], ["10’", "Họp — Nova dẫn; kết bằng biên bản 3 dòng", C.pink], ["3’", "Lật thẻ", C.purple], ["6’", "Tổng kết toàn lớp", C.green]];
  const rx = M + 6.6, rw = CW - 6.6;
  steps.forEach(([t, d, c], i) => {
    const y = 2.45 + i * 0.85;
    badge(s, rx, y + 0.04, 0.7, c, t, null, 15);
    T(s, d, { x: rx + 0.9, y, w: rw - 0.9, h: 0.78, fontSize: 14, valign: "middle" });
  });
  card(s, rx, 5.95, rw, 0.8, C.tYellow, C.yellow);
  T(s, "Biên bản: thống nhất gì · chỉ số nào theo dõi chung · buổi sau khi nào, ai dự", { x: rx + 0.2, y: 5.95, w: rw - 0.4, h: 0.8, fontSize: 12, bold: true, valign: "middle" });
}

// ───────────────────────── 24 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 8", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang — sơ đồ tiếp xúc hiện tại và mục tiêu (Bow-tie → Diamond), 3 chỉ số quá trình và 3 chỉ số kết quả, nhịp đánh giá chung. Làm dần trên lớp, không giao về nhà.",
  });
  const pts = [
    ["8.1", "Bow-tie → Diamond là lộ trình theo giai đoạn. Diamond đưa quan hệ từ người với người thành tổ chức với tổ chức.", C.purple, C.tPurple],
    ["8.2", "Đo cả chỉ số quá trình (báo trước) và kết quả (xác nhận). Mỗi sự kiện: khung 6 cấp rút gọn — agency cam kết cấp 0–3, thống nhất cấp 4–5 với khách hàng.", C.blue, C.tBlue],
    ["8.3", "Đánh giá chung định kỳ, hai chiều, có số liệu; theo dõi dấu hiệu cảnh báo sớm.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.3;
    card(s, M, y, CW, 1.15, t, c);
    badge(s, M + 0.25, y + 0.15, 0.85, c, k, C.white, 22);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.15, fontSize: 16, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.75, C.tYellow, C.yellow);
  T(s, [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "thêm một trang — sơ đồ tiếp xúc, 3 + 3 chỉ số, nhịp đánh giá chung." }],
    { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.75, fontSize: 14, valign: "middle" });
}

// ───────────────────────── 25 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) SV nhận ra quan hệ của mình phụ thuộc một người không; (b) phân biệt đúng chỉ số dẫn dắt và chỉ số trễ; (c) chỉ số có đo được thật không (không viết “khách hài lòng” chung chung).\nCâu nối Buổi 9: “Trong buổi đánh giá, anh Minh có thể hỏi: ‘Năm sau gala có thể bớt chi phí nhờ nhà tài trợ không?’ Buổi sau: nhà đầu tư và nhà tài trợ, những bên liên quan giúp agency tạo thêm giá trị cho Key Account.”",
  });
  const qs = [
    ["1", "Với khách hàng trong dự án cũ của nhóm bạn, quan hệ là Bow-tie hay Diamond? Nếu đầu mối phía khách hàng nghỉ việc ngày mai, nhóm gọi cho ai tiếp theo?", C.purple],
    ["2", "Viết 1 chỉ số quá trình và 1 chỉ số kết quả nhóm bạn sẽ đưa vào Stakeholder Management Plan. Chỉ số nào báo trước chỉ số nào?", C.blue],
  ];
  qs.forEach(([n, q, c], i) => {
    const y = 2.0 + i * 1.65;
    card(s, M, y, CW, 1.45, C.white, C.line);
    badge(s, M + 0.25, y + 0.37, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.45, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.4, CW, 1.25, C.tGreen, C.green);
  T(s, [{ text: "Buổi 9: ", options: { bold: true } }, { text: "nhà đầu tư và nhà tài trợ — những bên liên quan giúp agency tạo thêm giá trị cho Key Account." }],
    { x: M + 0.3, y: 5.4, w: CW - 0.6, h: 1.25, fontSize: 17, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["T01", "McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757."],
  ["T02", "Millman, T., & Wilson, K. (1995). From key account selling to key account management. Journal of Marketing Practice: Applied Marketing Science, 1(1), 9–21."],
  ["T03", "pharmaphorum. (n.d.). Of bow ties and diamonds."],
  ["T04", "SBI. (n.d.). Key account management: Avoiding the “bow-tie” resource approach."],
  ["T05", "Tasso, K. (n.d.). KAM basics – Bowties and diamonds [Video]."],
  ["T06", "Côté, D. (2021, October 26). From executive sponsorship to executive engagement. Strategic Account Management Association."],
  ["T07", "Association of National Advertisers. (2025, April). New ANA and 4As report reveals client-agency relationship tenure has doubled since 2016 [Press release]."],
  ["T08", "Spencer Stuart. (2025). CMO tenure study 2025: The evolution of marketing leadership."],
  ["T09", "Tzempelikos, N., & Gounaris, S. (2015). Linking key account management practices to performance outcomes. Industrial Marketing Management, 45, 22–34."],
  ["T10", "Fakhreddin, F., Foroudi, P., & Kooli, K. (2025). The influence of key account management on competitive advantage and firm performance. Industrial Marketing Management, 124, 266–286."],
  ["T11", "Phillips, J. J., Breining, M. T., & Phillips, P. P. (2008). Return on investment in meetings and events. Elsevier/Butterworth-Heinemann. · Event ROI Institute. (n.d.). Methodology."],
  ["T12", "American Express Global Business Travel. (2025). 2026 global meetings & events forecast."],
  ["T13", "Promethean Research. (2026, July 3). Client retention strategies for agencies (2026 guide)."],
  ["T14", "Association of National Advertisers. (2009). Majority of marketers conduct formal agency performance evaluations according to new ANA survey [Press release]."],
  ["T15", "Convention Industry Council. (2005). The APEX post-event report template."],
  ["T16", "Hofstede, G. (2015). Dimension data matrix (version 2015-12-08) [Data set]."],
  ["T17", "Pham, H. H., & Pham, N. C. (2025). Marketing insights from Quan He: Navigating Vietnamese business practices for foreign investors in an emerging market. BIMTECH Business Perspectives."],
  ["T18", "McMillan, J., & Woodruff, C. (1999). Interfirm relationships and informal credit in Vietnam. The Quarterly Journal of Economics, 114(4), 1285–1320."],
];
[REFS.slice(0, 9), REFS.slice(9)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-08_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn T01–T18 ghi ở chân slide.",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.53;
    T(s, k, { x: M, y, w: 0.7, h: 0.48, fontSize: 11, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.48, fontSize: 11, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W08_KAM_Governance_Measurement.pptx" }).then((f) => console.log("wrote", f));
