// Buổi 13 — EVM1110E · Building the SMP around the Key Account Plan
// Deck generated from courses/EVM1110E/lessons/W13_lesson_plan.md + W13_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W13_SMP_KAP.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 13: Building the Stakeholder Management Plan around the Key Account Plan";
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
  { key: "s131", label: "13.1 Khung A–E", c: C.purple },
  { key: "s132", label: "Phần C · D (13.2)", c: C.blue },
  { key: "s133", label: "Phần E · bảo vệ", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: A–D steps rising, with E on top
function glyph(slide, x, y, s) {
  const bw = s * 0.2, g = s * 0.066;
  [[C.purple, 0.35], [C.blue, 0.5], [C.orange, 0.65], [C.green, 0.8]].forEach(([c, k], i) => {
    const bh = s * k;
    slide.addShape(pres.shapes.RECTANGLE, { x: x + i * (bw + g), y: y + s - bh, w: bw, h: bh, fill: { color: c }, line: { color: c, width: 0 } });
  });
  slide.addShape(pres.shapes.OVAL, { x: x + 3 * (bw + g), y: y - s * 0.02, w: bw, h: bw, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
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
  T(s, `EVM1110E · Buổi 13   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
function rings(s, cx, cy, R, o = {}) {
  s.addShape(pres.shapes.OVAL, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, fill: { color: C.tBlue }, line: { color: C.blue, width: 2, dashType: "dash" } });
  const r = R * 0.5;
  s.addShape(pres.shapes.OVAL, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, o.core || "KAP", { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fontSize: o.coreSize || 16, bold: true, align: "center", valign: "middle" });
  (o.sats || []).forEach(([t, c, ang]) => {
    const a = ang * Math.PI / 180, px = cx + R * 0.76 * Math.cos(a), py = cy + R * 0.76 * Math.sin(a);
    const pw = o.pw || 2.3;
    pill(s, px - pw / 2, py - 0.25, pw, 0.5, c, t, { text: { fontSize: o.satSize || 12 } });
  });
}
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  rings(s, 10.15, 3.6, 2.45, { core: "Key Account Plan", coreSize: 14, sats: [["Nhà tài trợ", C.purple, -90], ["Nhà cung cấp", C.orange, 30], ["Báo chí – KOL", C.pink, 150]], pw: 1.9 });
  pill(s, M, 1.0, 3.1, 0.46, C.yellow, "EVM1110E  ·  Buổi 13 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Building the Stakeholder Management Plan around the Key Account Plan", { x: M, y: 3.75, w: 6.6, h: 1.1, fontSize: 21, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Phần 4 · buổi 1/3 — Đánh giá: bảo vệ dự án SMP · buổi xưởng", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: [Tên giảng viên]" },
  ], { x: M, y: 5.05, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Mở Phần 4 — buổi xưởng. Nhắc SV đã mang đủ các trang SMP (Buổi 1, 7–12). Điền tên giảng viên trước khi dạy.\nAlt-text: hai vòng tròn đồng tâm — lõi là Key Account Plan, vòng ngoài là nhà tài trợ, nhà cung cấp, báo chí – KOL.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Customer Board sẽ hỏi: kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị?", {
    source: "Z07: Đề cương chi tiết học phần EVM1110E (UEF), Buổi 14–15.",
    notes: "S1 — Khởi động (5 phút). Chiếu và đọc: “Buổi 14. Nhóm bạn bước vào phòng. Customer Board — ba giảng viên — ngồi đối diện. Câu hỏi đầu tiên của họ nhiều khả năng là gì?” Giơ tay A/B/C.\nChốt: “Đề cương ghi rõ: các bạn bảo vệ logic tài chính và chiến lược điểm chạm trước câu hỏi trực tiếp. Hội đồng đóng vai khách hàng, và khách hàng quan tâm đến giá trị cho họ. Hôm nay: ráp mọi trang đã làm thành một kế hoạch trả lời được câu (B).”",
  });
  card(s, M, 2.1, 4.6, 4.45, C.tPurple, C.purple);
  T(s, "Buổi 14 · phòng bảo vệ", { x: M + 0.3, y: 2.25, w: 4.0, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  [0, 1, 2].forEach((i) => badge(s, M + 0.5 + i * 1.3, 2.85, 0.9, C.purple, ""));
  T(s, "Customer Board — ba giảng viên đóng vai khách hàng", { x: M + 0.3, y: 3.9, w: 4.0, h: 0.9, fontSize: 16, bold: true, valign: "top" });
  T(s, "Đề cương: bảo vệ logic tài chính và chiến lược điểm chạm trước câu hỏi trực tiếp.", { x: M + 0.3, y: 4.9, w: 4.0, h: 1.4, fontSize: 14, italic: true, valign: "top" });
  const opts = [["A", "“Nhóm đã làm những gì?”", C.orange, false], ["B", "“Kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị?”", C.purple, true], ["C", "“Nhóm có bao nhiêu slide?”", C.blue, false]];
  const ox = M + 4.9, ow = CW - 4.9;
  T(s, "Câu hỏi đầu tiên nhiều khả năng là gì?", { x: ox, y: 2.1, w: ow, h: 0.5, fontSize: 17, bold: true });
  opts.forEach(([l, t, c], i) => {
    const y = 2.75 + i * 1.25;
    card(s, ox, y, ow, 1.05, C.white, C.line);
    badge(s, ox + 0.22, y + 0.2, 0.64, c, l);
    T(s, t, { x: ox + 1.1, y, w: ow - 1.3, h: 1.05, fontSize: 18, italic: true, valign: "middle" });
  });
}

// ───────────────────────── 3 — SMP = KAP + external ─────────────────────────
{
  const s = base("s131", "SMP của môn = Key Account Plan + điều phối bên liên quan bên ngoài", {
    notes: "Key Account Plan (KAP) là phần lõi: kế hoạch cho MỘT khách hàng quan trọng — hiểu họ, tạo giá trị gì cho họ, thực hiện ra sao.\nStakeholder Management Plan (SMP) của môn = KAP cộng với việc điều phối các bên liên quan bên ngoài (nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL) để giao giá trị cho Key Account (13.2).\nAlt-text: hai vòng tròn đồng tâm — vòng trong là KAP, vòng ngoài có nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL.",
  });
  rings(s, 3.9, 4.35, 2.35, { core: "KAP", coreSize: 22, sats: [["Nhà tài trợ / đầu tư", C.purple, -90], ["Nhà cung cấp – địa điểm", C.orange, 30], ["Báo chí – KOL", C.pink, 150]], pw: 2.4, satSize: 11 });
  const rx = M + 6.6, rw = CW - 6.6;
  card(s, rx, 2.1, rw, 1.95, C.tYellow, C.yellow);
  T(s, [{ text: "Lõi · Key Account Plan (KAP)", options: { bold: true, breakLine: true } }, { text: "kế hoạch cho một khách hàng quan trọng: hiểu họ, tạo giá trị gì, thực hiện ra sao", options: { fontSize: 14 } }],
    { x: rx + 0.3, y: 2.1, w: rw - 0.6, h: 1.95, fontSize: 17, valign: "middle" });
  card(s, rx, 4.3, rw, 2.25, C.tBlue, C.blue);
  T(s, [{ text: "Vòng ngoài · điều phối bên liên quan bên ngoài (13.2)", options: { bold: true, breakLine: true } }, { text: "nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL cùng giao giá trị cho Key Account", options: { fontSize: 14 } }],
    { x: rx + 0.3, y: 4.3, w: rw - 0.6, h: 2.25, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 4 — process ─────────────────────────
{
  const s = base("s131", "Kế hoạch key account là một quy trình, không phải một tài liệu", {
    source: "Z03: Ryals & Rogers (2007), Journal of Strategic Marketing · Z02: Holt, Cranfield School of Management blog.",
    notes: "Nghiên cứu 78 công ty quốc tế mô tả lợi ích, nội dung và các khiếm khuyết thường gặp của key account plan (Ryals & Rogers, 2007). Cranfield khuyến nghị kế hoạch chiến lược cho key account có tầm nhìn 3–5 năm.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.1, cw, 3.1, C.tPurple, C.tPurple);
  T(s, "78", { x: M + 0.4, y: 2.3, w: cw - 0.8, h: 1.3, fontSize: 64, bold: true, color: C.purple });
  T(s, "công ty quốc tế được nghiên cứu về lợi ích, nội dung và khiếm khuyết của key account plan", { x: M + 0.4, y: 3.65, w: cw - 0.8, h: 1.3, fontSize: 16, valign: "top" });
  card(s, M + cw + 0.3, 2.1, cw, 3.1, C.tBlue, C.tBlue);
  T(s, "3–5 năm", { x: M + cw + 0.7, y: 2.3, w: cw - 0.8, h: 1.3, fontSize: 60, bold: true, color: C.dBlue });
  T(s, "tầm nhìn khuyến nghị cho kế hoạch chiến lược với một key account", { x: M + cw + 0.7, y: 3.65, w: cw - 0.8, h: 1.3, fontSize: 16, valign: "top" });
  card(s, M, 5.5, CW, 1.05, C.tYellow, C.yellow);
  T(s, "Lập → thực hiện → rà soát → cập nhật — kế hoạch sống cùng quan hệ, không nằm trong ngăn kéo.", { x: M + 0.35, y: 5.5, w: CW - 0.7, h: 1.05, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 5 — value planning ─────────────────────────
{
  const s = base("s131", "Value Planning đặt khách hàng ở điểm bắt đầu và ở trung tâm", {
    source: "Z01: Davies, KAM Forum (Cranfield) · Z02: Holt, Cranfield blog · Z04: Ryals & McDonald (2010), Key account plans, Routledge.",
    notes: "Khung do Mark Davies và Dr Sue Holt (Cranfield) trình bày năm 2013, phát triển từ quy trình lập kế hoạch KAM của Ryals & McDonald (sách Key Account Plans, 2010). Cranfield gọi cách làm này là Value Planning.",
  });
  card(s, M, 2.1, CW, 1.8, C.tPurple, C.purple);
  T(s, [{ text: "“This puts the customer at the start and heart of the planning process.” ", options: { italic: true, bold: true } }, { text: "— Cranfield (Z02)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.8, fontSize: 24, align: "center", valign: "middle" });
  T(s, "Nguồn gốc của khung", { x: M, y: 4.2, w: CW, h: 0.45, fontSize: 15, bold: true, color: C.muted });
  pill(s, M, 4.8, 4.8, 0.85, C.blue, "Ryals & McDonald (2010) · quy trình lập KAP", { text: { fontSize: 15 } });
  arrow(s, M + 4.95, 5.22, M + 6.2, 5.22, C.ink, 3);
  pill(s, M + 6.35, 4.8, CW - 6.35, 0.85, C.purple, "Davies & Holt (2013) · Value Planning Framework", { text: { fontSize: 15 } });
  T(s, "“The framework divides the planning process into five key sections: value insights, value opportunities, value proposition, value delivery and executive summary.” — KAM Forum (Z01)", { x: M, y: 5.85, w: CW, h: 0.75, fontSize: 13, italic: true, color: C.muted, valign: "middle" });
}

// ───────────────────────── 6 — A–E ─────────────────────────
{
  const s = base("s131", "Năm phần: Insights → Opportunities → Propositions → Delivery → Executive Summary", {
    source: "Z01: KAM Forum (Cranfield).",
    notes: "Nói: “Viết theo thứ tự A → D, rồi mới viết E. Nhưng đọc theo thứ tự E → A: hội đồng đọc E trước.”\nAlt-text: năm ô A, B, C, D nối bằng mũi tên theo thứ tự; ô E tách riêng ở đầu, ghi “đọc đầu”.",
  });
  card(s, M, 2.05, CW, 1.05, C.tPink, C.pink, 1.5);
  badge(s, M + 0.2, 2.2, 0.75, C.pink, "E", C.white, 24);
  T(s, [{ text: "Executive Summary", options: { bold: true } }, { text: "  — viết cuối, nhưng đặt ở đầu kế hoạch: hội đồng đọc trước tiên", options: { fontSize: 14 } }], { x: M + 1.15, y: 2.05, w: CW - 1.4, h: 1.05, fontSize: 19, valign: "middle" });
  const parts = [["A", "Value Insights", "hiểu thế giới của khách hàng", C.purple, C.tPurple], ["B", "Value Opportunities", "cơ hội tạo thêm giá trị", C.blue, C.tBlue], ["C", "Value Propositions", "agency hứa gì, bao nhiêu", C.orange, C.tOrange], ["D", "Value Delivery", "ai làm gì, đo bằng gì", C.green, C.tGreen]];
  const cw = (CW - 3 * 0.45) / 4;
  parts.forEach(([k, h, d, c, f], i) => {
    const x = M + i * (cw + 0.45);
    card(s, x, 3.45, cw, 3.1, f, c, 1.5);
    badge(s, x + 0.3, 3.65, 0.9, c, k, C.white, 28);
    T(s, h, { x: x + 0.3, y: 4.7, w: cw - 0.6, h: 0.9, fontSize: 18, bold: true, valign: "top" });
    T(s, d, { x: x + 0.3, y: 5.6, w: cw - 0.6, h: 0.8, fontSize: 14, color: C.muted, valign: "top" });
    if (i < 3) arrow(s, x + cw + 0.05, 5.0, x + cw + 0.4, 5.0, C.ink, 2.5);
  });
}

// ───────────────────────── 7 — questions per part ─────────────────────────
{
  const s = base("s131", "Mỗi phần trả lời một câu hỏi", {
    source: "A theo Z01 · câu hỏi và công cụ của B–E: định nghĩa làm việc của người soạn (Z09) — ưu tiên giáo trình nội bộ UEF nếu có.",
    notes: "[VERIFY: định nghĩa phần B–E theo giáo trình nội bộ UEF, nếu có]\nCột “công cụ đã học” giúp nhóm biết trang nào đã làm ở buổi nào đi vào phần nào.",
  });
  const cols = [{ w: 2.4 }, { w: 5.0, head: "Câu hỏi chính", fill: C.purple }, { w: CW - 7.4 + 0.1, head: "Công cụ đã học", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["A. Insights", "Môi trường, đối thủ, nội bộ khách hàng; ai quyết định; khách của khách hàng đi hành trình nào?", "PESTEL, đối thủ, nội bộ; Grid, Salience (B1); hành trình, DMU (B3)"],
    ["B. Opportunities", "Ở đâu tạo thêm giá trị cho khách và agency? Quan hệ đáng đầu tư đến đâu, rủi ro gì?", "Chọn Key Account (B2); chất lượng quan hệ (B4); CLV, cost-to-serve (B6); sức khỏe quan hệ (B8)"],
    ["C. Propositions", "Agency hứa gì, bao nhiêu tiền/chỉ số, khác đối thủ ở đâu?", "CVP (B5); win-win, ROI + ROO (B9)"],
    ["D. Delivery", "Ai làm gì, khi nào, nguồn lực nào, đo bằng gì; điều phối bên ngoài thế nào?", "Kraljic, đàm phán (B7); Diamond, ROI 6 cấp (B8); B9–12"],
    ["E. Exec Summary", "Một trang: vấn đề – đề xuất – giá trị có số – việc cần quyết", "Tổng hợp A–D"],
  ], { rowH: [0.82, 0.82, 0.62, 0.82, 0.62], size: 12, headH: 0.5 });
}

// ───────────────────────── 8 — assumptions ─────────────────────────
{
  const s = base("s131", "Giả định có lý do là câu trả lời hợp lệ — con số bịa thì không", {
    source: "Z01: KAM Forum (Cranfield).",
    notes: "Khi chưa có đủ thông tin về khách hàng, Cranfield khuyên được đặt giả định và lập kịch bản — và xác nhận lại với khách hàng.\nNói: “Khách hàng của các bạn là từ dự án cũ. Có nhiều điều các bạn không biết chắc: ngân sách năm sau, doanh thu, số khách. Không sao. Ghi ‘Giả định:’ và nói vì sao chọn con số đó. Hội đồng sẽ hỏi — và giả định có lý do là một câu trả lời tốt; con số bịa thì không.”",
  });
  card(s, M, 2.05, CW, 1.3, C.tPurple, C.purple);
  T(s, [{ text: "“But do make sure to make it clear in your plan that these are assumptions!” ", options: { italic: true, bold: true } }, { text: "— KAM Forum (Z01)", options: { fontSize: 12, color: C.muted } }],
    { x: M + 0.4, y: 2.05, w: CW - 0.8, h: 1.3, fontSize: 20, align: "center", valign: "middle" });
  card(s, M, 3.65, CW, 1.3, C.tYellow, C.yellow);
  T(s, [{ text: "Mẫu: ", options: { bold: true } }, { text: "“Giả định: … vì …; sẽ kiểm chứng bằng …”", options: { italic: true } }], { x: M + 0.4, y: 3.65, w: CW - 0.8, h: 1.3, fontSize: 22, valign: "middle" });
  const cw = (CW - 0.3) / 2;
  card(s, M, 5.25, cw, 1.3, C.tGreen, C.green, 1.5);
  T(s, [{ text: "✓ Giả định có lý do", options: { bold: true, color: C.dGreen, breakLine: true } }, { text: "nói được vì sao chọn con số, sẽ kiểm tra lại với khách", options: { fontSize: 14 } }], { x: M + 0.3, y: 5.25, w: cw - 0.6, h: 1.3, fontSize: 18, valign: "middle" });
  card(s, M + cw + 0.3, 5.25, cw, 1.3, C.tPink, C.pink, 1.5);
  T(s, [{ text: "✗ Con số bịa", options: { bold: true, color: C.dPink, breakLine: true } }, { text: "không nguồn, không lý do — hội đồng hỏi là lộ", options: { fontSize: 14 } }], { x: M + cw + 0.6, y: 5.25, w: cw - 0.6, h: 1.3, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 9 — An Phát frame ─────────────────────────
{
  const s = base("s131", "Bộ khung An Phát cho thấy cách ráp, không phải bài để chép", {
    source: "Tình huống giả định — mọi tên, con số chỉ dùng cho học tập (quyết định GV 6: không phát bài mẫu hoàn chỉnh).",
    notes: "Nhắc: “Đây là khung, không phải bài mẫu. Khách hàng của nhóm bạn khác An Phát — phần A của bạn phải khác hoàn toàn.”\n→ Chuyển sang S3 — Thực hành 1.",
  });
  pill(s, W - M - 2.4, 1.95, 2.4, 0.45, C.yellow, "GIẢ ĐỊNH · khung", { text: { fontSize: 12 } });
  const rows = [
    ["A", "Ngân hàng TMCP, mảng khách doanh nghiệp VIP; GĐ Marketing mới (anh Minh); DMU: anh Minh, ông Tuấn, anh Khoa, chị Lan, chị Vy; khách của An Phát: 600 lãnh đạo DN", C.purple, C.tPurple],
    ["B", "Cơ hội: tăng số CEO đến trực tiếp; từ một gala/năm sang chương trình khách hàng cả năm. Rủi ro: đổi đầu mối, ngân sách giảm ~10%", C.blue, C.tBlue],
    ["C", "Nova giúp An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP, đo bằng ROI 6 cấp (cấp 0–3 Nova cam kết; cấp 4–5 cùng An Phát)", C.orange, C.tOrange],
    ["D", "Nhà tài trợ đối tác (Bình An, GlobalCard); khách sạn, AV, nhà in; báo kinh tế, diễn giả; ESG chung; 5 bước xử lý xung đột", C.green, C.tGreen],
    ["E", "5 câu (phần sau)", C.pink, C.tPink],
  ];
  rows.forEach(([k, d, c, f], i) => {
    const y = 2.55 + i * 0.82;
    card(s, M, y, CW, 0.72, f, c);
    badge(s, M + 0.15, y + 0.09, 0.54, c, k, C.white, 18);
    T(s, d, { x: M + 0.9, y, w: CW - 1.1, h: 0.72, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s131", "Thực hành 1 · Ráp khung A–E cho SMP của nhóm", {
    source: "Phiếu W13_activity_S3_rap_khung_A_E.md.",
    notes: "S3 — Thực hành 1 (30 phút): 3 mở đầu · 10 · 12 · 5. GV đi vòng từng nhóm; 3 phút cuối chốt chung.\nBày tất cả trang SMP đã làm (Buổi 1, 3, 7–12).\nKhi chốt: ghi các phần có 🔴 của 6 nhóm lên bảng — để biết nhóm nào cần hỗ trợ. Phần nào nhiều nhóm 🔴 nhất? Giả định nào khó giải thích nhất?\nNếu nhóm thiếu nhiều trang cũ: ráp khung với ô trống ghi “cần bổ sung”, ưu tiên phần D.",
  });
  const steps = [["10’", "Khung một dòng", "Kẻ 5 ô A–E trên A1; mỗi ô A–D viết một câu (E để trống)", C.orange],
    ["12’", "Bảng truy vết", "Trang đã làm · vào phần nào · còn thiếu gì · giả định · ai hoàn thiện. Phần không có trang nào → 🔴", C.purple],
    ["5’", "Ba giả định quan trọng nhất", "“Giả định: … vì …; sẽ kiểm chứng bằng …”", C.blue]];
  steps.forEach(([t, h, d, c], i) => {
    const y = 2.05 + i * 1.2;
    card(s, M, y, CW, 1.05, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.15, 0.75, c, t, null, 16);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: M + 1.15, y, w: CW - 1.4, h: 1.05, fontSize: 17, valign: "middle" });
  });
  const heads = [["Trang đã làm (buổi)", C.orange], ["Vào phần nào", C.purple], ["Còn thiếu gì", C.blue], ["Giả định", C.pink], ["Ai hoàn thiện", C.green]];
  const hw = (CW - 4 * 0.1) / 5;
  heads.forEach(([h, c], i) => {
    const x = M + i * (hw + 0.1);
    pill(s, x, 5.8, hw, 0.55, c, h, { text: { fontSize: 12 } });
  });
  T(s, "Mỗi phần A–D phải có ít nhất 1 trang đã làm đưa vào.", { x: M, y: 6.45, w: CW, h: 0.35, fontSize: 12, italic: true, color: C.muted });
}

// ───────────────────────── Break ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink].forEach((c, i) =>
    s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 13   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── 10 — McDonald definition ─────────────────────────
{
  const s = base("s132", "Value proposition là đóng góp của agency vào lợi nhuận của khách hàng, quy ra tiền", {
    source: "Z05: McDonald, SAMA — How to create financially quantified value propositions.",
    notes: "Quyết định GV 7: không dùng các số liệu 5%/1%/25% thường được trích kèm.\nNói: phần C không phải “dịch vụ của chúng tôi gồm…”, mà là khách hàng được thêm bao nhiêu.",
  });
  card(s, M, 2.1, CW, 2.4, C.tBlue, C.blue);
  T(s, [{ text: "Value proposition là ", options: {} }, { text: "“the translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.”", options: { italic: true, bold: true, breakLine: true } }, { text: "— McDonald (Z05)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.4, fontSize: 22, valign: "middle", paraSpaceAfter: 8 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.8, cw, 1.75, C.white, C.line);
  T(s, [{ text: "Không phải", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: "“Dịch vụ của chúng tôi gồm…”", options: { fontSize: 20, italic: true, color: C.muted } }], { x: M + 0.35, y: 4.8, w: cw - 0.7, h: 1.75, valign: "middle" });
  card(s, M + cw + 0.3, 4.8, cw, 1.75, C.tYellow, C.yellow);
  T(s, [{ text: "Mà là", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: "“Khách hàng được thêm bao nhiêu — quy ra tiền”", options: { fontSize: 20, bold: true } }], { x: M + cw + 0.65, y: 4.8, w: cw - 0.7, h: 1.75, valign: "middle" });
}

// ───────────────────────── 11 — four sources ─────────────────────────
{
  const s = base("s132", "Giá trị đến từ bốn nguồn", {
    source: "Z05: McDonald (SAMA) · ví dụ cho agency sự kiện: nhận định của người soạn.",
    notes: "Ba cách tạo giá trị tiền tệ cho khách hàng: tăng giá trị (doanh thu, năng suất, tốc độ…), giảm chi phí, tránh chi phí; thêm đóng góp cảm xúc — khó định lượng nhưng có thật.",
  });
  const src = [["Tăng giá trị", "Khách doanh nghiệp giữ quan hệ, tăng giao dịch sau sự kiện (ROI cấp 4–5)", "Buổi 8", C.purple, C.tPurple],
    ["Giảm chi phí", "Chọn nhà cung cấp, đàm phán tốt, dùng quan hệ dài hạn", "Buổi 7, 10, 12", C.blue, C.tBlue],
    ["Tránh chi phí", "Due diligence KOL, hợp đồng chặt, xử lý xung đột sớm → tránh sự cố uy tín", "Buổi 9, 11, 12", C.orange, C.tOrange],
    ["Đóng góp cảm xúc", "Trải nghiệm khách VIP, hình ảnh thương hiệu — khó định lượng nhưng có thật", "Buổi 3, 9", C.pink, C.tPink]];
  const cw = (CW - 0.3) / 2;
  src.forEach(([h, d, b, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 2.3;
    card(s, x, y, cw, 2.1, f, c);
    T(s, h, { x: x + 0.35, y: y + 0.2, w: cw - 2.3, h: 0.55, fontSize: 21, bold: true });
    pill(s, x + cw - 2.05, y + 0.22, 1.75, 0.45, C.white, b, { line: c, color: C.ink, text: { fontSize: 11 } });
    T(s, d, { x: x + 0.35, y: y + 0.85, w: cw - 0.7, h: 1.1, fontSize: 15, valign: "top" });
  });
}

// ───────────────────────── 12 — formula ─────────────────────────
{
  const s = base("s132", "Mỗi con số trong giá trị phải có nguồn hoặc giả định", {
    source: "Công thức minh họa — GIẢ ĐỊNH, để luyện cách lập luận, không phải số thật.",
    notes: "Tính trên bảng nếu có thời gian. Nếu trễ giờ: rút ví dụ tính, giữ công thức trên slide.\nMỗi con số phải ghi nguồn hoặc ghi “Giả định: … vì …”.",
  });
  pill(s, W - M - 2.4, 1.95, 2.4, 0.45, C.yellow, "GIẢ ĐỊNH", { text: { fontSize: 12 } });
  T(s, "Giá trị ước tính =", { x: M, y: 2.55, w: CW, h: 0.5, fontSize: 20, bold: true });
  const terms = [["số khách DN giữ thêm nhờ chương trình", "×", C.purple, C.tPurple], ["lợi nhuận bình quân mỗi khách/năm", "+", C.blue, C.tBlue], ["chi phí tránh được", "−", C.green, C.tGreen], ["chi phí chương trình", "", C.pink, C.tPink]];
  const tw = (CW - 3 * 0.55) / 4;
  terms.forEach(([t, op, c, f], i) => {
    const x = M + i * (tw + 0.55);
    card(s, x, 3.2, tw, 1.5, f, c, 1.5);
    T(s, t, { x: x + 0.2, y: 3.2, w: tw - 0.4, h: 1.5, fontSize: 16, bold: true, align: "center", valign: "middle" });
    if (op) T(s, op, { x: x + tw, y: 3.2, w: 0.55, h: 1.5, fontSize: 30, bold: true, align: "center", valign: "middle" });
  });
  T(s, "Dưới mỗi ô ghi một trong hai:", { x: M, y: 5.0, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
  const cw = (CW - 0.3) / 2;
  card(s, M, 5.5, cw, 1.05, C.white, C.line);
  T(s, [{ text: "Nguồn: ", options: { bold: true } }, { text: "dữ liệu khách cung cấp, báo cáo, hợp đồng" }], { x: M + 0.3, y: 5.5, w: cw - 0.6, h: 1.05, fontSize: 16, valign: "middle" });
  card(s, M + cw + 0.3, 5.5, cw, 1.05, C.tYellow, C.yellow);
  T(s, [{ text: "Giả định: ", options: { bold: true } }, { text: "… vì …; kiểm chứng bằng …", options: { italic: true } }], { x: M + cw + 0.6, y: 5.5, w: cw - 0.6, h: 1.05, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 13 — promise → measure ─────────────────────────
{
  const s = base("s132", "Mỗi lời hứa ở phần C cần một dòng đo ở phần D", {
    source: "Z06: Davies, Creating compelling customer value propositions, Cranfield blog.",
    notes: "Nói: “Mỗi lời hứa ở phần C phải có một dòng đo ở phần D.” Ví dụ trên slide là giả định từ khung An Phát.",
  });
  card(s, M, 2.05, CW, 1.4, C.tPurple, C.purple);
  T(s, [{ text: "“It is the supplier’s job to advise how the value that they promise within their value proposition will be captured (in ROI and KPI measures).” ", options: { italic: true } }, { text: "— Davies (Z06)", options: { fontSize: 12, color: C.muted } }],
    { x: M + 0.4, y: 2.05, w: CW - 0.8, h: 1.4, fontSize: 17, valign: "middle" });
  const hw = (CW - 1.2) / 2;
  pill(s, M, 3.75, hw, 0.55, C.orange, "C · Lời hứa", { text: { fontSize: 15 } });
  pill(s, M + hw + 1.2, 3.75, hw, 0.55, C.green, "D · Dòng đo", { text: { fontSize: 15 } });
  const pairs = [["Tăng tỷ lệ CEO đến trực tiếp", "Tỷ lệ CEO đến / số được mời (cấp 0)"], ["Khách biết thêm về giải pháp mới", "% khách trả lời đúng sau phiên (cấp 2)"], ["Không sự cố uy tín từ đối tác", "Due diligence 100% KOL, diễn giả trước khi ký"]];
  pairs.forEach(([a, b], i) => {
    const y = 4.45 + i * 0.72;
    card(s, M, y, hw, 0.6, C.tOrange, C.tOrange);
    T(s, a, { x: M + 0.2, y, w: hw - 0.4, h: 0.6, fontSize: 14, valign: "middle" });
    arrow(s, M + hw + 0.1, y + 0.3, M + hw + 1.1, y + 0.3, C.ink, 2.5);
    card(s, M + hw + 1.2, y, hw, 0.6, C.tGreen, C.tGreen);
    T(s, b, { x: M + hw + 1.4, y, w: hw - 0.4, h: 0.6, fontSize: 14, valign: "middle" });
  });
  T(s, "ví dụ giả định từ khung An Phát", { x: M, y: 6.6, w: CW, h: 0.3, fontSize: 11, italic: true, color: C.muted });
}

// ───────────────────────── 14 — four questions in D ─────────────────────────
{
  const s = base("s132", "Trong phần D, mỗi bên liên quan bên ngoài trả lời bốn câu", {
    source: "Z09: tư liệu Buổi 7–12; Lemon & Verhoef (2016).",
    notes: "Để chiếu suốt S6.\nĐiểm chạm theo Lemon & Verhoef: trước / trong / sau; đối tác sở hữu (partner-owned) hay bên ngoài (social/external).",
  });
  const qs = [["Gắn vào điểm chạm nào trên hành trình?", "trước / trong / sau · đối tác sở hữu hay bên ngoài", C.purple], ["Tạo giá trị gì cho khách của Key Account?", "", C.blue], ["Quản lý bằng gì?", "hợp đồng · ESG · KPI · người phụ trách", C.orange], ["Rủi ro, xung đột — bảo vệ deliverables thế nào?", "", C.pink]];
  qs.forEach(([q, d, c], i) => {
    const y = 2.0 + i * 1.15;
    card(s, M, y, CW, 1.0, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.16, 0.68, c, String(i + 1));
    T(s, d ? [{ text: q, options: { bold: true, fontSize: 19, breakLine: true } }, { text: d, options: { fontSize: 13, color: C.muted } }] : [{ text: q, options: { bold: true, fontSize: 19 } }],
      { x: M + 1.1, y, w: CW - 1.3, h: 1.0, valign: "middle" });
  });
}

// ───────────────────────── 15 — 13.2 is one table ─────────────────────────
{
  const s = base("s132", "13.2 là một bảng, không phải ba chương rời", {
    source: "Z07: Đề cương 13.2 · Z09: tư liệu Buổi 9–12.",
    notes: "Chốt: “13.2 không phải thêm ba chương rời. Đó là một bảng trong phần D, nơi mọi bên đều phục vụ cùng một hành trình của khách hàng.”",
  });
  const cols = [{ w: 3.6 }, { w: 1.6, head: "Đã học", fill: C.purple }, { w: CW - 5.2 + 0.1, head: "Trang SMP đã có", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Nhà đầu tư & nhà tài trợ", "Buổi 9", "Bản đồ điểm chạm tài trợ, đề xuất win-win"],
    ["Nhà cung cấp & địa điểm", "Buổi 10", "Chấm hồ sơ, phân bổ theo giai đoạn mua – sau mua"],
    ["Báo chí & KOL", "Buổi 11", "Chọn diễn giả/KOL, khuếch đại điểm chạm trước sự kiện"],
    ["Cả mạng lưới", "Buổi 12", "Mạng lưới, xung đột, cơ chế minh bạch"],
  ], { rowH: 0.66, size: 15 });
  card(s, M, 5.75, CW, 0.85, C.tYellow, C.yellow);
  T(s, "→ Một bảng trong phần D: mọi bên cùng phục vụ một hành trình của khách hàng.", { x: M + 0.35, y: 5.75, w: CW - 0.7, h: 0.85, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 16 — exec summary 5 sentences ─────────────────────────
{
  const s = base("s133", "Executive Summary: năm câu cho người quyết định", {
    source: "Khung 5 câu: đề xuất của người soạn.",
    notes: "Để chiếu suốt S6.\nCâu 5: “Hội đồng cần quyết gì” — ngân sách, cam kết, chia sẻ dữ liệu cấp 4–5…",
  });
  const qs = [["Khách hàng là ai, đang cần gì", "từ A", C.purple], ["Cơ hội lớn nhất", "từ B", C.blue], ["Đề xuất của agency — một câu", "từ C", C.orange], ["Giá trị có số và cách đo (ghi giả định)", "C + D", C.green], ["Hội đồng cần quyết gì", "ngân sách · cam kết · chia sẻ dữ liệu cấp 4–5", C.pink]];
  qs.forEach(([q, d, c], i) => {
    const y = 2.0 + i * 0.93;
    card(s, M, y, CW, 0.8, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.1, 0.6, c, String(i + 1));
    T(s, [{ text: q, options: { bold: true } }, { text: "   " + d, options: { fontSize: 13, color: C.muted } }], { x: M + 1.05, y, w: CW - 1.3, h: 0.8, fontSize: 19, valign: "middle" });
  });
}

// ───────────────────────── 17 — write last, read first ─────────────────────────
{
  const s = base("s133", "Viết cuối, đọc đầu", {
    notes: "Nhóm viết theo thứ tự A → B → C → D → E. Hội đồng đọc E trước, rồi mới lật A → D để kiểm tra.",
  });
  const order = [["A", C.purple], ["B", C.blue], ["C", C.orange], ["D", C.green], ["E", C.pink]];
  const d = 1.05, gap = 0.75, total = 5 * d + 4 * gap, sx = M + 2.9;
  T(s, "Nhóm VIẾT", { x: M, y: 2.35, w: 2.2, h: 0.6, fontSize: 18, bold: true, color: C.purple, valign: "middle" });
  order.forEach(([k, c], i) => {
    const x = sx + i * (d + gap);
    badge(s, x, 2.15, d, c, k, C.white, 28);
    if (i < 4) arrow(s, x + d + 0.08, 2.67, x + d + gap - 0.08, 2.67, C.ink, 2.5);
  });
  T(s, "Hội đồng ĐỌC", { x: M, y: 4.25, w: 2.4, h: 0.6, fontSize: 18, bold: true, color: C.dPink, valign: "middle" });
  ["E", "A", "B", "C", "D"].forEach((k, i) => {
    const x = sx + i * (d + gap), c = order.find(([kk]) => kk === k)[1];
    badge(s, x, 4.05, d, c, k, C.white, 28);
    if (i < 4) arrow(s, x + d + 0.08, 4.57, x + d + gap - 0.08, 4.57, C.ink, 2.5);
  });
  card(s, M, 5.6, CW, 0.95, C.tYellow, C.yellow);
  T(s, "Phần E là trang hội đồng đọc đầu tiên — và có thể là trang duy nhất họ đọc kỹ.", { x: M + 0.35, y: 5.6, w: CW - 0.7, h: 0.95, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 18 — ten errors ─────────────────────────
{
  const s = base("s133", "Mười lỗi khiến key account plan thất bại", {
    source: "Z02: Holt, Cranfield School of Management blog.",
    notes: "Hỏi: “Với nhóm sinh viên, lỗi nào dễ gặp nhất?” — gợi ý: “một người viết” (2), “nói về mình” (7), “điền ô” (9).",
  });
  const errs = ["Kế hoạch là của riêng người KAM", "KAM làm một mình", "Lãnh đạo không quan tâm", "Làm một lần rồi bỏ", "Quá ngắn hạn, giao dịch", "Không rà soát, cập nhật", "Toàn nói về nhà cung cấp, ít hiểu khách hàng", "Giữ kế hoạch cho riêng mình", "Coi là điền ô", "Không ai sở hữu"];
  const hl = [1, 6, 8];
  const cw = (CW - 0.3) / 2;
  errs.forEach((t, i) => {
    const x = M + Math.floor(i / 5) * (cw + 0.3), y = 2.0 + (i % 5) * 0.9, h = hl.includes(i);
    card(s, x, y, cw, 0.76, h ? C.tPink : C.white, h ? C.pink : C.line, h ? 2 : 1);
    badge(s, x + 0.15, y + 0.12, 0.52, h ? C.pink : C.muted, String(i + 1), C.white, 15);
    T(s, t, { x: x + 0.85, y, w: cw - 1.0, h: 0.76, fontSize: 15, bold: h, valign: "middle" });
  });
  T(s, "● lỗi nhóm sinh viên dễ gặp nhất", { x: M, y: 6.55, w: CW, h: 0.3, fontSize: 11, color: C.dPink });
}

// ───────────────────────── 19 — AI policy ─────────────────────────
{
  const s = base("s133", "Được dùng AI — nhưng phải công bố và tự bảo vệ được", {
    source: "Chính sách AI cho SMP: mức D — cho phép kèm công bố (quyết định GV 5).",
    notes: "[NEEDS PROFESSOR INPUT: mẫu phụ lục công bố sử dụng AI — dùng mẫu đề xuất trong checklist hay mẫu của Khoa/Trường]\nNói: “AI không biết khách hàng của các bạn, không có mặt ở dự án cũ, và không đứng trả lời Customer Board thay các bạn.”\nGiới thiệu checklist tự rà soát (W13_checklist_tu_ra_soat_SMP.md) — dùng ở S6 và trước Buổi 14; checklist chỉ để tự rà soát, không thay rubric chính thức.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  pill(s, M, 2.0, 3.6, 0.55, C.green, "Mức D · cho phép kèm công bố", { text: { fontSize: 14 } });
  const items = [["Phụ lục công bố", "công cụ nào · dùng cho việc gì · nhóm đã kiểm tra và sửa gì", C.purple, C.tPurple], ["Bảo vệ trực tiếp", "nơi hội đồng thấy nhóm hiểu kế hoạch của mình đến đâu", C.blue, C.tBlue], ["Trang làm trên lớp", "Buổi 1, 7–13 là dấu vết quá trình của nhóm", C.orange, C.tOrange]];
  const cw = (CW - 0.6) / 3;
  items.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.8, cw, 2.1, f, c);
    T(s, h, { x: x + 0.3, y: 2.95, w: cw - 0.6, h: 0.55, fontSize: 19, bold: true });
    T(s, d, { x: x + 0.3, y: 3.55, w: cw - 0.6, h: 1.2, fontSize: 15, valign: "top" });
  });
  card(s, M, 5.2, 7.4, 1.35, C.tYellow, C.yellow);
  T(s, "AI không biết khách hàng của các bạn, không có mặt ở dự án cũ, và không đứng trả lời Customer Board thay các bạn.", { x: M + 0.3, y: 5.2, w: 6.8, h: 1.35, fontSize: 15, bold: true, valign: "middle" });
  card(s, M + 7.7, 5.2, CW - 7.7, 1.35, C.white, C.green, 1.5);
  T(s, [{ text: "Checklist tự rà soát SMP", options: { bold: true, breakLine: true } }, { text: "dùng ở S6 và trước Buổi 14", options: { fontSize: 13 } }], { x: M + 8.0, y: 5.2, w: CW - 8.3, h: 1.35, fontSize: 16, valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s133", "Thực hành 2 · Value Delivery + Executive Summary, rồi gặp Customer Board", {
    source: "Phiếu W13_activity_S6_value_delivery_exec_summary.md.",
    notes: "S6 — Thực hành 2 (35 phút): 3 mở đầu · 12 bảng · 5 tóm tắt · 10 xoay trạm (2 vòng × 5 phút) · 5 sửa.\nLời mở đầu: “Đây là phần mà hội đồng sẽ đọc kỹ nhất: các bạn giao giá trị bằng cách nào, cùng với ai. 12 phút cho bảng — ít nhất một nhà tài trợ hoặc nhà đầu tư, một nhà cung cấp hoặc địa điểm, một báo chí hoặc KOL. 5 phút cho năm câu tóm tắt. Rồi các bạn đi làm Customer Board: mỗi bàn nhận một câu hỏi tiền và một câu hỏi điểm chạm. Hỏi như hội đồng thật.”\nKhi chốt: ghi các câu hỏi tài chính lặp lại ở nhiều bàn.",
  });
  T(s, "≥ 3 bên liên quan bên ngoài: mỗi nhóm (i) tài trợ/đầu tư, (ii) nhà cung cấp/địa điểm, (iii) báo chí/KOL — ít nhất 1 bên", { x: M, y: 1.9, w: CW, h: 0.45, fontSize: 13, color: C.muted });
  const heads = [["Bên liên quan", C.orange], ["Điểm chạm", C.purple], ["Giá trị cho khách", C.blue], ["Quản lý bằng gì", C.green], ["Rủi ro & bảo vệ", C.pink], ["Chỉ số (cấp mấy)", C.purple]];
  const hw = (CW - 5 * 0.1) / 6;
  heads.forEach(([h, c], i) => {
    const x = M + i * (hw + 0.1);
    pill(s, x, 2.45, hw, 0.6, c, h, { text: { fontSize: 12 } });
    [0, 1, 2].forEach((j) => card(s, x, 3.15 + j * 0.42, hw, 0.34, i === 0 ? C.band : C.white, C.line));
  });
  const steps = [["12’", "Bảng Value Delivery (A1)", C.orange], ["5’", "Executive Summary 5 câu (A3)", C.purple], ["2×5’", "Customer Board — 🟨 1 câu hỏi tài chính, 🟥 1 câu hỏi điểm chạm", C.pink], ["5’", "Trả lời thử, sửa một dòng hoặc một câu", C.green]];
  const sw = (CW - 0.9) / 4;
  steps.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 4.65, 0.8, c, t, null, t.length > 3 ? 13 : 17);
    T(s, d, { x: x + 0.95, y: 4.5, w: sw - 0.95, h: 1.15, fontSize: 12, valign: "middle" });
  });
  card(s, M, 5.95, CW, 0.65, C.tYellow, C.yellow);
  T(s, "Dùng bốn câu của phần D, khung 5 câu của phần E và checklist tự rà soát khi sửa.", { x: M + 0.3, y: 5.95, w: CW - 0.6, h: 0.65, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── 20 — summary + to-do ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 13 và việc cần làm trước Buổi 14", {
    notes: "S7 — Tổng hợp (3 phút). Ba câu chốt và bốn việc nhóm cần làm trước Buổi 14.",
  });
  const pts = [["1", "SMP = KAP + điều phối bên liên quan bên ngoài, viết theo A–E, khách hàng ở trung tâm; giả định ghi rõ.", C.purple, C.tPurple],
    ["2", "Phần C có số, phần D có cách đo; 13.2 là một bảng gắn mọi bên vào hành trình của khách hàng.", C.blue, C.tBlue],
    ["3", "Phần E viết cuối, đọc đầu; tự rà soát bằng checklist trước Buổi 14.", C.pink, C.tPink]];
  pts.forEach(([k, d, c, f], i) => {
    const y = 2.0 + i * 0.95;
    card(s, M, y, CW, 0.82, f, c);
    badge(s, M + 0.18, y + 0.11, 0.6, c, k);
    T(s, d, { x: M + 1.0, y, w: CW - 1.2, h: 0.82, fontSize: 15, valign: "middle" });
  });
  T(s, "Việc cần làm trước Buổi 14", { x: M, y: 4.95, w: CW, h: 0.4, fontSize: 15, bold: true, color: C.dGreen });
  const todo = ["Điền ô “cần bổ sung” trong bảng truy vết", "Sửa theo note của Customer Board", "Chạy checklist tự rà soát", "Phụ lục công bố AI (nếu có dùng)"];
  const tw = (CW - 3 * 0.2) / 4;
  todo.forEach((t, i) => {
    const x = M + i * (tw + 0.2);
    card(s, x, 5.45, tw, 1.1, C.tGreen, C.green);
    T(s, "☐  " + t, { x: x + 0.2, y: 5.45, w: tw - 0.4, h: 1.1, fontSize: 13, bold: true, valign: "middle" });
  });
}

// ───────────────────────── 21 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) nhận ra phần yếu cụ thể, không trả lời “phần nào cũng ổn”; (b) value proposition nói về giá trị cho khách hàng, không chỉ “dịch vụ của chúng tôi”; (c) có số và phân biệt số thật với giả định.\nCâu nối Buổi 14: “Buổi sau các bạn không còn là sinh viên trình bày bài tập. Các bạn là KAM Director đứng trước Customer Board. Hội đồng sẽ hỏi hai điều: giá trị này bao nhiêu tiền, và các bạn chạm vào khách hàng của họ ở đâu, bằng ai.”",
  });
  const qs = [["1", "Phần nào trong A–E của SMP nhóm bạn đang yếu nhất? Nhóm cần thông tin gì, từ đâu để hoàn thiện?", C.purple],
    ["2", "Viết 1 câu value proposition cho khách hàng của nhóm, có con số (ghi rõ đâu là giả định).", C.blue]];
  qs.forEach(([n, q, c], i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, [{ text: "Buổi 14: ", options: { bold: true } }, { text: "các bạn là KAM Director trước Customer Board — giá trị này bao nhiêu tiền, và các bạn chạm vào khách hàng của họ ở đâu, bằng ai?" }],
    { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["Z01", "Davies, M. (n.d.). The value planning framework for key accounts. Key Account Management Forum (Cranfield). LinkedIn."],
  ["Z02", "Holt, S. (n.d.). World class key account planning; Implementing key account management: To plan or not to plan… Cranfield School of Management Executive Development Blog."],
  ["Z03", "Ryals, L. J., & Rogers, B. (2007). Key account planning: Benefits, barriers and best practice. Journal of Strategic Marketing, 15, 209–222."],
  ["Z04", "Ryals, L., & McDonald, M. (2010). Key account plans. Routledge."],
  ["Z05", "McDonald, M. (n.d.). How to create financially quantified value propositions in six (actionable!) steps. Strategic Account Management Association."],
  ["Z06", "Davies, M. (n.d.). Creating compelling customer value propositions. Cranfield School of Management Executive Development Blog."],
  ["Z07", "Trường Đại học Kinh tế – Tài chính TP.HCM (UEF). (n.d.). Đề cương chi tiết học phần EVM1110E – Quản trị mối quan hệ trong tổ chức sự kiện [Tài liệu nội bộ]."],
  ["Z09", "Tư liệu Buổi 7–12 · Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96."],
];
[REFS.slice(0, 4), REFS.slice(4)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-13_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy. Z08 (chuẩn nội bộ của bộ kỹ năng về liêm chính học thuật trong thời AI) không đưa lên slide vì là tài liệu nội bộ và buổi này không nhắc đến công cụ phát hiện AI.",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 1.05;
    T(s, k, { x: M, y, w: 0.7, h: 0.9, fontSize: 13, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.9, fontSize: 13, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W13_SMP_KAP.pptx" }).then((f) => console.log("wrote", f));
