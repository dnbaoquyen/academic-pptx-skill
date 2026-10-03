// Buổi 9 — EVM1110E · Resource Matching: Investors & Sponsors
// Deck generated from courses/EVM1110E/lessons/W09_lesson_plan.md + W09_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W09_Investors_Sponsors.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 9: Resource Matching: Investors & Sponsors";
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
  { key: "s91", label: "9.1 Tài trợ & đầu tư", c: C.purple },
  { key: "s92", label: "9.2 Đề xuất & ROI", c: C.blue },
  { key: "s93", label: "9.3 Điểm chạm", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: three overlapping circles — sponsor, Key Account, Key Account's customer
function glyph(slide, x, y, s) {
  const d = s * 0.62;
  [[C.purple, 0, 0], [C.blue, s - d, 0], [C.pink, (s - d) / 2, s - d]].forEach(([c, dx, dy]) =>
    slide.addShape(pres.shapes.OVAL, { x: x + dx, y: y + dy, w: d, h: d, fill: { color: c, transparency: 25 }, line: { color: c, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 9   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
function venn(s, cx, cy, r, labels, o = {}) {
  const pts = [[cx - r * 0.55, cy - r * 0.32], [cx + r * 0.55, cy - r * 0.32], [cx, cy + r * 0.62]];
  const cols = [C.purple, C.blue, C.pink];
  pts.forEach(([x, y], i) => s.addShape(pres.shapes.OVAL, { x: x - r, y: y - r, w: 2 * r, h: 2 * r, fill: { color: cols[i], transparency: o.tr || 72 }, line: { color: cols[i], width: 2 } }));
  const lp = [[cx - r * 1.05, cy - r * 0.75], [cx + r * 0.2, cy - r * 0.75], [cx - r * 0.42, cy + r * 1.0]];
  labels.forEach((t, i) => T(s, t, { x: lp[i][0] - 0.1, y: lp[i][1], w: r * 0.95 + 0.2, h: 0.7, fontSize: o.size || 14, bold: true, align: "center", valign: "middle" }));
  if (o.center) pill(s, cx - 0.75, cy - 0.12, 1.5, 0.5, C.yellow, o.center, { text: { fontSize: 13 } });
}
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  venn(s, 10.15, 3.45, 1.75, ["Nhà tài trợ", "Key Account", "Khách của Key Account"], { center: "Agency", size: 14 });
  pill(s, M, 1.0, 2.9, 0.46, C.yellow, "EVM1110E  ·  Buổi 9 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.8, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Resource Matching: Investors & Sponsors", { x: M, y: 3.75, w: 6.8, h: 0.9, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Phần 3 · Điều phối các bên liên quan phục vụ hành trình khách hàng", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: Đoàn Nguyễn Bảo Quyên" },
  ], { x: M, y: 5.0, w: 6.8, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Mở Phần 3 của học phần.\nAlt-text: ba vòng tròn giao nhau — nhà tài trợ, Key Account, khách của Key Account — agency ở vùng giao giữa.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Ngân sách giảm 10%, hai đối tác muốn “có mặt” — cứu cánh hay rắc rối?", {
    source: "Tình huống giả định (tiếp nối Buổi 1, 7, 8) — tên và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Đọc: “Tháng 6. An Phát báo Nova: ngân sách gala cuối năm nay giảm khoảng 10%, nhưng anh Minh muốn chất lượng không giảm. Cùng tuần đó, hai đối tác của ngân hàng là Bảo hiểm Bình An và tổ chức thẻ GlobalCard ngỏ ý muốn ‘có mặt’ ở gala.”\nGiơ tay: cứu cánh hay rắc rối? Ghi số phiếu lên bảng.\nChốt: “Cả hai. Nhà tài trợ có thể bù phần ngân sách bị cắt, và nếu làm khéo còn làm sự kiện hay hơn. Nhưng nếu làm vụng, 600 khách VIP của An Phát sẽ thấy mình bị mời đến để nghe bán hàng. Hôm nay: làm sao để nhà tài trợ, An Phát và khách của An Phát cùng được lợi.”",
  });
  const rows = [["Tháng 6", "An Phát báo ngân sách gala cuối năm giảm ~10%", C.orange], ["Anh Minh", "muốn chất lượng không giảm", C.purple], ["Cùng tuần", "Bảo hiểm Bình An và GlobalCard muốn “có mặt” ở gala", C.blue]];
  rows.forEach(([k, d, c], i) => {
    const y = 2.1 + i * 0.95;
    pill(s, M, y + 0.1, 1.9, 0.6, c, k, { text: { fontSize: 14 } });
    T(s, d, { x: M + 2.15, y, w: 5.2, h: 0.8, fontSize: 17, valign: "middle" });
  });
  const rx = M + 7.7, rw = CW - 7.7;
  card(s, rx, 2.1, rw, 1.9, C.tGreen, C.green, 1.5);
  T(s, [{ text: "Cứu cánh?", options: { bold: true, fontSize: 24, breakLine: true } }, { text: "bù ngân sách, thêm nội dung cho khách", options: { fontSize: 14 } }], { x: rx + 0.3, y: 2.1, w: rw - 0.6, h: 1.9, valign: "middle" });
  card(s, rx, 4.2, rw, 1.9, C.tPink, C.pink, 1.5);
  T(s, [{ text: "Rắc rối?", options: { bold: true, fontSize: 24, breakLine: true } }, { text: "600 khách VIP thấy mình bị mời đến để nghe bán hàng", options: { fontSize: 14 } }], { x: rx + 0.3, y: 4.2, w: rw - 0.6, h: 1.9, valign: "middle" });
  card(s, M, 5.25, 7.3, 0.85, C.tYellow, C.yellow);
  T(s, "Giơ tay: với Nova, hai đối tác này là gì?", { x: M + 0.3, y: 5.25, w: 6.7, h: 0.85, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 3 — Part 3 map ─────────────────────────
{
  const s = base("open", "Phần 3: mỗi bên liên quan được gắn vào hành trình của Key Account", {
    notes: "Mở Phần 3 (Buổi 9–12): điều phối các bên liên quan phục vụ hành trình khách hàng. Buổi 9 bắt đầu với nhà tài trợ và nhà đầu tư — đối tác của Key Account.\nAlt-text: Key Account ở giữa, bốn buổi học xếp quanh: 9 nhà tài trợ – nhà đầu tư, 10 nhà cung cấp – địa điểm, 11 truyền thông – KOL, 12 xung đột.",
  });
  const cx = W / 2, cy = 4.3;
  s.addShape(pres.shapes.OVAL, { x: cx - 1.55, y: cy - 1.0, w: 3.1, h: 2.0, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, [{ text: "Key Account", options: { bold: true, fontSize: 20, breakLine: true } }, { text: "và hành trình khách hàng", options: { fontSize: 13 } }], { x: cx - 1.45, y: cy - 1.0, w: 2.9, h: 2.0, align: "center", valign: "middle" });
  const nodes = [
    ["Buổi 9", "Nhà tài trợ – nhà đầu tư", M, 2.05, C.purple, true],
    ["Buổi 10", "Nhà cung cấp – địa điểm", W - M - 3.6, 2.05, C.blue],
    ["Buổi 11", "Truyền thông – KOL", M, 5.15, C.orange],
    ["Buổi 12", "Xung đột giữa các bên", W - M - 3.6, 5.15, C.green],
  ];
  nodes.forEach(([k, t, x, y, c, hl]) => {
    card(s, x, y, 3.6, 1.35, hl ? c : C.white, c, hl ? 1 : 1.5);
    T(s, k, { x: x + 0.3, y: y + 0.15, w: 3.0, h: 0.45, fontSize: 14, bold: true, color: hl ? C.white : c === C.orange ? C.dOrange : c === C.green ? C.dGreen : c === C.blue ? C.dBlue : c });
    T(s, t, { x: x + 0.3, y: y + 0.6, w: 3.0, h: 0.55, fontSize: 17, bold: true, color: hl ? C.white : C.ink });
    const ex = x < cx ? x + 3.6 : x, ey = y + 0.67;
    line(s, ex, ey, x < cx ? cx - 1.4 : cx + 1.4, ey < cy ? cy - 0.5 : cy + 0.5, c, 2, { dash: hl ? undefined : "dash" });
  });
}

// ───────────────────────── 4 — Meenaghan ─────────────────────────
{
  const s = base("s91", "Tài trợ bắt đầu từ mục tiêu của nhà tài trợ, không từ chỗ in logo", {
    source: "U01: Meenaghan (1983), European Journal of Marketing · U02: Cornwell & Maignan (1998), Journal of Advertising.",
    notes: "Tài trợ thương mại được nghiên cứu có hệ thống từ Meenaghan (1983). Đặt mục tiêu là nền tảng: bắt đầu từ câu hỏi nhà tài trợ muốn đạt điều gì.\nNghiên cứu tài trợ đi theo năm dòng (Cornwell & Maignan, 1998): bản chất tài trợ; quản trị tài trợ; đo lường hiệu quả; sử dụng chiến lược; pháp lý – đạo đức. Buổi 9 đi qua cả năm dòng.\nHiểu lầm: “Nhà tài trợ = người cho tiền để in logo” → nhà tài trợ mua quyền lợi để đạt mục tiêu; logo chỉ là một quyền lợi, thường không phải quan trọng nhất.",
  });
  card(s, M, 2.1, 6.6, 2.4, C.tPurple, C.purple);
  T(s, [
    { text: "“Views objective‐setting as the cornerstone of sponsorship management…”", options: { italic: true, breakLine: true } },
    { text: "— Meenaghan (1983)", options: { fontSize: 13, color: C.muted } },
  ], { x: M + 0.35, y: 2.1, w: 5.9, h: 2.4, fontSize: 22, valign: "middle", paraSpaceAfter: 8 });
  const rx = M + 7.0, rw = CW - 7.0;
  card(s, rx, 2.1, rw, 1.1, C.tGreen, C.green);
  T(s, [{ text: "Bắt đầu từ: ", options: { bold: true } }, { text: "nhà tài trợ muốn đạt điều gì?" }], { x: rx + 0.3, y: 2.1, w: rw - 0.6, h: 1.1, fontSize: 17, valign: "middle" });
  card(s, rx, 3.4, rw, 1.1, C.white, C.line);
  T(s, [{ text: "Không phải: ", options: { bold: true, color: C.muted } }, { text: "sự kiện có chỗ nào để in logo?", options: { color: C.muted } }], { x: rx + 0.3, y: 3.4, w: rw - 0.6, h: 1.1, fontSize: 17, valign: "middle" });
  T(s, "Năm dòng nghiên cứu tài trợ (U02) — Buổi 9 đi qua cả năm", { x: M, y: 4.85, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
  const streams = [["Bản chất", C.orange], ["Quản trị", C.purple], ["Đo lường hiệu quả", C.blue], ["Sử dụng chiến lược", C.green], ["Pháp lý – đạo đức", C.pink]];
  const sw = (CW - 4 * 0.2) / 5;
  streams.forEach(([t, c], i) => pill(s, M + i * (sw + 0.2), 5.4, sw, 0.8, c, t, { text: { fontSize: 14 } }));
}

// ───────────────────────── 5 — sponsor vs investor ─────────────────────────
{
  const s = base("s91", "Nhà tài trợ mua quyền lợi, nhà đầu tư chia sẻ rủi ro – lợi nhuận", {
    source: "Định nghĩa làm việc của môn học (quyết định GV) — không phải định nghĩa chuẩn từ một nguồn học thuật.",
    notes: "Ghi chú: đây là định nghĩa làm việc của môn.\nHiểu lầm: “Nhà đầu tư và nhà tài trợ như nhau” → khác nhau ở chỗ ai chịu rủi ro tài chính và ai nhận phần lợi nhuận.",
  });
  const cols = [{ w: 2.2 }, { w: (CW - 2.2) / 2, head: "Nhà tài trợ · sponsor", fill: C.purple }, { w: (CW - 2.2) / 2, head: "Nhà đầu tư · investor", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Đưa gì", "Tiền, hiện vật, dịch vụ", "Vốn cho sự kiện hoặc cho đơn vị sở hữu sự kiện"],
    ["Nhận gì", "Quyền lợi đã thỏa thuận: hiển thị, kích hoạt, tiếp cận khán giả, dữ liệu", "Phần lợi nhuận (hoặc lỗ) của sự kiện"],
    ["Rủi ro", "Chủ yếu rủi ro hình ảnh và hiệu quả truyền thông", "Thêm rủi ro tài chính: sự kiện lỗ thì mất vốn"],
    ["Câu hỏi chính", "“Quyền lợi này giúp tôi đạt mục tiêu marketing không?”", "“Sự kiện này có sinh lời không?”"],
  ], { rowH: [0.8, 1.0, 0.85, 0.95], size: 15 });
}

// ───────────────────────── 6 — Techcombank ─────────────────────────
{
  const s = base("s91", "Techcombank: từ nhà tài trợ kim cương đến “nhà đồng đầu tư”", {
    source: "U08: Znews (20/1/2025); Tuổi Trẻ (3/1/2025) · U11: Tuổi Trẻ (23/1/2025). Đã kiểm chứng chéo.",
    notes: "Case tham chiếu: “Anh trai vượt ngàn chông gai” do Yeah1 sản xuất.\nHỏi lớp: “Vì sao một ngân hàng muốn chuyển từ nhà tài trợ sang nhà đồng đầu tư?” Gợi ý: khi sự kiện thành công vượt kỳ vọng, nhà tài trợ chỉ nhận quyền lợi cố định, còn nhà đầu tư nhận thêm phần lợi nhuận; đổi lại phải chịu rủi ro lỗ.\nLưu ý: hình thức đầu tư mới, không phải đầu tư cổ phần. Logo thương hiệu thật chỉ dùng khi GV chấp nhận — slide này dùng tên chữ.",
  });
  line(s, M + 0.5, 3.0, M + 7.3, 3.0, C.ink, 3, { end: "triangle" });
  [[M + 0.5, "2024", "Nhà tài trợ kim cương", "chương trình và các đêm concert do Yeah1 sản xuất", C.purple, C.tPurple],
   [M + 4.1, "2025", "“Nhà đồng đầu tư”", "đầu tư vào Yeah1 theo hình thức mới, không phải cổ phần", C.blue, C.tBlue]].forEach(([x, yr, h, d, c, f]) => {
    badge(s, x - 0.05, 2.72, 0.56, c, "");
    T(s, yr, { x, y: 2.05, w: 2.0, h: 0.5, fontSize: 20, bold: true, color: c === C.blue ? C.dBlue : c });
    card(s, x - 0.05, 3.45, 3.3, 1.75, f, c);
    T(s, h, { x: x + 0.15, y: 3.55, w: 2.9, h: 0.5, fontSize: 16, bold: true });
    T(s, d, { x: x + 0.15, y: 4.05, w: 2.9, h: 1.05, fontSize: 13, valign: "top" });
  });
  card(s, M, 5.45, 7.35, 1.15, C.tYellow, C.yellow);
  T(s, [{ text: "“…Techcombank đều sẽ đồng hành không chỉ với vai trò nhà tài trợ, mà trở thành ‘nhà đồng đầu tư’.” ", options: { italic: true } }, { text: "— Znews", options: { fontSize: 12, color: C.muted } }],
    { x: M + 0.3, y: 5.45, w: 6.75, h: 1.15, fontSize: 14, valign: "middle" });
  const rx = M + 7.75, rw = CW - 7.75;
  card(s, rx, 2.05, rw, 4.55, C.white, C.line);
  T(s, "Phía được tài trợ: Yeah1, năm 2024", { x: rx + 0.3, y: 2.2, w: rw - 0.6, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  T(s, [{ text: "845", options: { bold: true, fontSize: 44, color: C.purple } }, { text: " / 1.000+ tỷ", options: { bold: true, fontSize: 20 } }], { x: rx + 0.3, y: 2.7, w: rw - 0.6, h: 0.9, valign: "middle" });
  T(s, "doanh thu từ quảng cáo và tư vấn truyền thông", { x: rx + 0.3, y: 3.6, w: rw - 0.6, h: 0.75, fontSize: 14, valign: "top" });
  T(s, [{ text: "126 tỷ ", options: { bold: true, fontSize: 26, color: C.dGreen } }, { text: "lãi sau thuế (+378%)", options: { fontSize: 14 } }], { x: rx + 0.3, y: 4.5, w: rw - 0.6, h: 0.7, valign: "middle" });
  card(s, rx + 0.3, 5.4, rw - 0.6, 0.95, C.tBlue, C.tBlue);
  T(s, "Vì sao ngân hàng muốn chuyển vai?", { x: rx + 0.45, y: 5.4, w: rw - 0.9, h: 0.95, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 7 — four parties ─────────────────────────
{
  const s = base("s91", "Một thỏa thuận tốt có lợi cho bốn bên", {
    notes: "Từ góc agency, một thỏa thuận tài trợ tốt phải có lợi cho bốn bên. Agency: nối Buổi 5 (CVP).\nHiểu lầm: “Nhà tài trợ càng lớn càng tốt” → phải phù hợp với Key Account và với khách của Key Account; sai phù hợp thì hại cả ba.\nAlt-text: bảng bốn hàng (nhà tài trợ, Key Account, khách của Key Account, agency) × hai cột (hữu hình, vô hình).",
  });
  const cols = [{ w: 2.9 }, { w: (CW - 2.9) / 2, head: "Hữu hình", fill: C.orange }, { w: (CW - 2.9) / 2, head: "Vô hình", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["Nhà tài trợ", "Khách hàng tiềm năng, doanh số, dữ liệu (có đồng ý), mở tài khoản/thẻ", "Nhận biết, thái độ tích cực, liên tưởng hình ảnh, quan hệ đối tác"],
    ["Key Account (An Phát)", "Bù ngân sách, thêm nội dung/tiện ích cho khách", "Hình ảnh “hệ sinh thái đối tác”, quan hệ đối tác được củng cố"],
    ["Khách của Key Account", "Quà, dịch vụ, tư vấn hữu ích", "Trải nghiệm tốt hơn, cảm giác được quan tâm"],
    ["Agency (Nova)", "Đủ ngân sách giữ chất lượng; phí dịch vụ kích hoạt", "Vị thế đối tác tạo giá trị với Key Account"],
  ], { rowH: 0.95, size: 14 });
}

// ───────────────────────── 8 — behaviour evidence ─────────────────────────
{
  const s = base("s91", "Nhà tài trợ đo lợi ích bằng hành vi khách: gửi tiền, mở thẻ", {
    source: "U08: Znews, Báo Đầu tư (đã KCC) · U09: Báo Đầu tư, số liệu VPBankS (chưa KCC) · U10: VnExpress, nội dung được tài trợ.",
    notes: "Nhấn: Techcombank CASA “ở mức” khoảng 40%, không phải “tăng” 40%. Khách “săn vé 0 đồng” qua ứng dụng, gắn với tiền gửi và tính năng sinh lời tự động; số dư mảng sinh lời tự động tăng 35% so với quý trước.\nVIB: hỏi “Có thể quy hết mức tăng 6 năm này cho một chương trình tài trợ không?” → không; nối Buổi 8: phải tách tác động.\nVPBank: nhà tài trợ danh vị (title sponsor) tour G-Dragon tại Hà Nội.",
  });
  const cards = [
    ["Techcombank", "~40%", "tỷ lệ CASA giữ ở mức khoảng 40% — vé 0 đồng gắn với tiền gửi, sinh lời tự động", "“ở mức”, không phải “tăng”", C.purple, C.tPurple, "U08"],
    ["VIB", "+44%/năm", "số thẻ tăng kép trong 6 năm (nhà tài trợ kim cương Anh trai Say Hi)", "không quy hết cho tài trợ → tách tác động", C.blue, C.tBlue, "U09 · chưa KCC"],
    ["VPBank", "sớm 1 ngày", "chủ thẻ VPBank Mastercard được mua vé tour G-Dragon trước (title sponsor)", "quyền lợi gắn với mở thẻ", C.orange, C.tOrange, "U10"],
  ];
  const cw = (CW - 0.6) / 3;
  cards.forEach(([b, n, d, warn, c, f, src], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 4.5, f, c);
    T(s, b, { x: x + 0.3, y: 2.2, w: cw - 0.6, h: 0.45, fontSize: 16, bold: true });
    T(s, n, { x: x + 0.3, y: 2.7, w: cw - 0.6, h: 0.95, fontSize: 36, bold: true, color: c === C.blue ? C.dBlue : c === C.orange ? C.dOrange : c });
    T(s, d, { x: x + 0.3, y: 3.7, w: cw - 0.6, h: 1.4, fontSize: 14, valign: "top" });
    pill(s, x + 0.3, 5.2, cw - 0.6, 0.55, C.white, warn, { line: c, color: C.ink, text: { fontSize: 11 } });
    T(s, src, { x: x + 0.3, y: 5.9, w: cw - 0.6, h: 0.35, fontSize: 11, color: C.muted });
  });
}

// ───────────────────────── 9 — feasibility ─────────────────────────
{
  const s = base("s91", "Ở Việt Nam, nhà tài trợ quyết định sự kiện có khả thi hay không", {
    source: "U14: Nhân Dân (7/9/2026) · U15: Amex GBT, 2026 Global Meetings & Events Forecast. Cả hai chưa kiểm chứng chéo.",
    notes: "Với nhiều liveshow và concert tầm trung tại Việt Nam, theo một số bầu show, chỉ nên làm khi nhà tài trợ gánh ít nhất 50% chi phí (U14).\nNối Buổi 1: nhà tài trợ là primary hay secondary TÙY BỐI CẢNH. Khi ngân sách phụ thuộc vào nhà tài trợ, họ trở thành primary.",
  });
  const stats = [["≥ 50%", "chi phí liveshow, concert tầm trung nên do nhà tài trợ gánh — theo một số bầu show", "U14", C.pink, C.tPink, C.dPink], ["35%", "chuyên gia sự kiện trên thế giới tìm thêm nguồn tài trợ trước áp lực chi phí", "U15", C.blue, C.tBlue, C.dBlue]];
  const cw = 3.9;
  stats.forEach(([n, d, src, c, f, dc], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.1, cw, 4.35, f, f);
    T(s, n, { x: x + 0.3, y: 2.4, w: cw - 0.6, h: 1.2, fontSize: 52, bold: true, color: dc });
    T(s, d, { x: x + 0.3, y: 3.75, w: cw - 0.6, h: 1.8, fontSize: 16, valign: "top" });
    T(s, src, { x: x + 0.3, y: 5.8, w: cw - 0.6, h: 0.35, fontSize: 12, color: C.muted });
  });
  const rx = M + 2 * (cw + 0.3), rw = CW - 2 * (cw + 0.3);
  card(s, rx, 2.1, rw, 4.35, C.tYellow, C.yellow);
  T(s, "Nối Buổi 1", { x: rx + 0.3, y: 2.35, w: rw - 0.6, h: 0.45, fontSize: 15, bold: true, color: C.muted });
  T(s, "Primary hay secondary tùy bối cảnh", { x: rx + 0.3, y: 2.85, w: rw - 0.6, h: 1.2, fontSize: 21, bold: true, valign: "top" });
  T(s, "Khi ngân sách phụ thuộc vào nhà tài trợ, họ trở thành bên liên quan primary.", { x: rx + 0.3, y: 4.2, w: rw - 0.6, h: 1.8, fontSize: 16, valign: "top" });
}

// ───────────────────────── 10 — image transfer ─────────────────────────
{
  const s = base("s91", "Tài trợ là chuyển giao hình ảnh hai chiều", {
    source: "U12: Tuổi Trẻ; Công an Nhân dân (7/3/2025). Đã kiểm chứng chéo.",
    notes: "Case Happy Day Concert, Đà Lạt, 3/2025: thương hiệu của đơn vị tổ chức bị các trang cờ bạc cắt ghép để quảng cáo; nhiều nghệ sĩ rút lui sát giờ; hai đêm diễn bị dừng, sau đó dời lịch với sự chấp thuận của Sở VHTTDL Lâm Đồng.\nÝ cần chốt: “Ở đây thương hiệu bị GIẢ MẠO liên đới, không phải nhà tài trợ cờ bạc thật. Vậy mà sự kiện vẫn sụp. Với agency, thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ.”",
  });
  // two-way transfer
  pill(s, M, 2.2, 3.0, 0.9, C.purple, "Thương hiệu", { text: { fontSize: 18 } });
  pill(s, M + 4.4, 2.2, 3.0, 0.9, C.blue, "Sự kiện", { text: { fontSize: 18 } });
  line(s, M + 3.1, 2.5, M + 4.3, 2.5, C.ink, 2.5, { end: "triangle" });
  line(s, M + 4.3, 2.82, M + 3.1, 2.82, C.ink, 2.5, { end: "triangle" });
  T(s, "hình ảnh đi cả hai chiều — tốt lẫn xấu", { x: M, y: 3.25, w: 7.4, h: 0.4, fontSize: 14, italic: true, color: C.muted, align: "center" });
  T(s, "Happy Day Concert · Đà Lạt · 3/2025", { x: M, y: 3.95, w: 7.4, h: 0.4, fontSize: 15, bold: true, color: C.dPink });
  const steps = [["Thương hiệu bị trang cờ bạc cắt ghép, giả mạo", C.orange], ["Nhiều nghệ sĩ rút lui sát giờ", C.pink], ["Dừng 2 đêm diễn, dời lịch", C.purple]];
  const sw = 2.2;
  steps.forEach(([t, c], i) => {
    const x = M + i * (sw + 0.4);
    card(s, x, 4.45, sw, 1.8, C.white, c, 1.5);
    badge(s, x + 0.2, 4.6, 0.45, c, String(i + 1), null, 14);
    T(s, t, { x: x + 0.2, y: 5.15, w: sw - 0.4, h: 1.0, fontSize: 13, bold: true, valign: "top" });
    if (i < 2) arrow(s, x + sw + 0.05, 5.35, x + sw + 0.35, 5.35, C.ink, 2);
  });
  const rx = M + 7.9, rw = CW - 7.9;
  card(s, rx, 2.2, rw, 4.05, C.tYellow, C.yellow);
  T(s, [
    { text: "Thương hiệu bị giả mạo liên đới — không phải nhà tài trợ cờ bạc thật. Sự kiện vẫn sụp.", options: { breakLine: true } },
    { text: " ", options: { breakLine: true } },
    { text: "Với agency: thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ.", options: { bold: true } },
  ], { x: rx + 0.3, y: 2.2, w: rw - 0.6, h: 4.05, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 11 — where agency stands ─────────────────────────
{
  const s = base("s91", "Agency không xin tài trợ cho mình — agency biến đối tác của Key Account thành giá trị cho khách", {
    notes: "Góc nhìn của môn: Nova không “xin tài trợ cho mình”. Nova giúp An Phát biến quan hệ đối tác của An Phát thành giá trị cho khách của An Phát.\n→ Chuyển sang S3 — Thực hành 1.\nAlt-text: sơ đồ bốn bên — Key Account ở trên; nhà tài trợ bên trái là đối tác của Key Account; khách của Key Account bên phải; agency ở dưới giữa, thiết kế quyền lợi, kích hoạt, đo lường thay mặt Key Account và tạo trải nghiệm tại các điểm chạm cho khách.",
  });
  const ka = [W / 2 - 1.7, 2.15], sp = [M + 0.3, 3.75], cu = [W - M - 3.7, 3.75], ag = [W / 2 - 1.9, 5.3];
  pill(s, ka[0], ka[1], 3.4, 0.85, C.yellow, "Key Account · An Phát", { text: { fontSize: 16 } });
  card(s, sp[0], sp[1], 3.4, 1.1, C.tPurple, C.purple, 1.5);
  T(s, [{ text: "Nhà tài trợ", options: { bold: true, breakLine: true } }, { text: "Bình An, GlobalCard", options: { fontSize: 13 } }], { x: sp[0] + 0.2, y: sp[1], w: 3.0, h: 1.1, fontSize: 17, align: "center", valign: "middle" });
  card(s, cu[0], cu[1], 3.4, 1.1, C.tBlue, C.blue, 1.5);
  T(s, [{ text: "Khách của Key Account", options: { bold: true, breakLine: true } }, { text: "600 lãnh đạo doanh nghiệp VIP", options: { fontSize: 13 } }], { x: cu[0] + 0.2, y: cu[1], w: 3.0, h: 1.1, fontSize: 17, align: "center", valign: "middle" });
  card(s, ag[0], ag[1], 3.8, 1.35, C.pink, C.pink);
  T(s, [{ text: "Agency · Nova", options: { bold: true, breakLine: true } }, { text: "thiết kế quyền lợi, kích hoạt, đo lường — thay mặt Key Account", options: { fontSize: 12 } }], { x: ag[0] + 0.2, y: ag[1], w: 3.4, h: 1.35, fontSize: 17, color: C.white, align: "center", valign: "middle" });
  line(s, sp[0] + 1.7, sp[1], ka[0] + 0.4, ka[1] + 0.85, C.purple, 2);
  T(s, "đối tác của", { x: sp[0] + 1.3, y: 2.55, w: 1.9, h: 0.35, fontSize: 12, italic: true, color: C.purple });
  line(s, cu[0] + 1.7, cu[1], ka[0] + 3.0, ka[1] + 0.85, C.blue, 2);
  T(s, "khách hàng của", { x: cu[0] + 0.3, y: 2.55, w: 2.0, h: 0.35, fontSize: 12, italic: true, color: C.dBlue, align: "right" });
  line(s, ag[0], ag[1] + 0.5, sp[0] + 3.4, sp[1] + 0.8, C.ink, 2, { begin: "triangle" });
  line(s, ag[0] + 3.8, ag[1] + 0.5, cu[0], cu[1] + 0.8, C.ink, 2, { end: "triangle" });
  T(s, "trải nghiệm tại các điểm chạm", { x: ag[0] + 3.9, y: 5.55, w: 2.9, h: 0.35, fontSize: 12, italic: true, color: C.muted });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s91", "Thực hành 1 · Chọn nhà tài trợ cho gala của Key Account", {
    source: "Phiếu W09_activity_S3_chon_nha_tai_tro.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Đồng hồ 8 / 7 / 5 phút. Phát phiếu, đi vòng. 47–50’: chốt 3 ý.\nThảo luận: ứng viên nào nhóm nào cũng từ chối? Bình An là đối tác lâu năm — nhận Bình An nhưng thay đổi quyền lợi họ xin thì nên đổi thế nào?\nGiữ lại kết quả: 2 nhà tài trợ nhóm chọn sẽ dùng ở S6.",
  });
  T(s, "Gala An Phát · ~600 lãnh đạo DN VIP · ngân sách giảm ~220 triệu · không bán vé", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const cand = [
    ["Bảo hiểm Bình An", "đối tác lâu năm", "400 tr", "phát biểu 10’; bàn tư vấn cạnh khu tiệc"],
    ["GlobalCard", "đối tác thẻ DN", "300 tr", "ưu đãi chủ thẻ; nhận diện ở check-in"],
    ["Xe điện Sao Việt", "chưa có quan hệ", "500 tr", "trưng bày, lái thử; nhận danh sách khách"],
    ["Phần mềm Sổ Xanh", "chưa có quan hệ", "80 tr", "gian hàng phần mềm cho DN nhỏ"],
    ["Nhanh Tiền", "chưa có quan hệ", "800 tr", "“đồng tổ chức”, góp vốn chia lợi nhuận; từng bị phản ánh về đòi nợ"],
  ];
  const tw = 7.3;
  cand.forEach(([n, rel, amt, want], i) => {
    const y = 2.45 + i * 0.85;
    card(s, M, y, tw, 0.75, i % 2 ? C.white : C.band, i % 2 ? C.line : C.band);
    badge(s, M + 0.15, y + 0.15, 0.45, [C.purple, C.blue, C.orange, C.green, C.pink][i], String(i + 1), null, 14);
    T(s, [{ text: n, options: { bold: true, breakLine: true } }, { text: rel, options: { fontSize: 10, color: C.muted } }], { x: M + 0.75, y, w: 2.2, h: 0.75, fontSize: 13, valign: "middle" });
    T(s, amt, { x: M + 2.95, y, w: 0.9, h: 0.75, fontSize: 13, bold: true, valign: "middle" });
    T(s, want, { x: M + 3.85, y, w: tw - 4.0, h: 0.75, fontSize: 11, valign: "middle" });
  });
  const steps = [["8’", "Chấm 1–5: phù hợp với An Phát · với khách của An Phát · rủi ro", C.orange], ["7’", "Chọn 2 ứng viên: 1 lợi ích hữu hình + 1 vô hình cho bốn bên", C.purple], ["5’", "Nhanh Tiền: tài trợ hay đầu tư? + 1 câu giải thích với anh Minh về ứng viên bị từ chối", C.blue]];
  const rx = M + 7.6, rw = CW - 7.6;
  steps.forEach(([t, d, c], i) => {
    const y = 2.45 + i * 1.4;
    badge(s, rx, y + 0.2, 0.75, c, t, null, 16);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 1.2, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── Break ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink].forEach((c, i) =>
    s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 9   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── 12 — Bình An's question ─────────────────────────
{
  const s = base("s92", "“Gói 400 triệu mang lại gì cho tôi?”", {
    notes: "Mở đoạn S4: “Bình An hỏi Nova: ‘Gói 400 triệu của các bạn mang lại gì cho tôi?’ Nếu Nova chỉ trả lời ‘logo trên backdrop và 2 phút phát biểu’, Bình An sẽ trả giá 100 triệu.”",
  });
  card(s, M, 2.1, CW, 1.5, C.tPurple, C.purple);
  T(s, [{ text: "Bảo hiểm Bình An hỏi Nova: ", options: { fontSize: 16, color: C.muted, breakLine: true } }, { text: "“Gói 400 triệu của các bạn mang lại gì cho tôi?”", options: { bold: true, italic: true, fontSize: 26 } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.5, valign: "middle", align: "center" });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.0, cw, 2.5, C.white, C.line);
  T(s, "Nếu Nova trả lời", { x: M + 0.35, y: 4.2, w: cw - 0.7, h: 0.45, fontSize: 15, color: C.muted });
  T(s, "“Logo trên backdrop và 2 phút phát biểu.”", { x: M + 0.35, y: 4.7, w: cw - 0.7, h: 0.9, fontSize: 19, italic: true, color: C.muted });
  T(s, [{ text: "→ Bình An trả giá ", options: {} }, { text: "100 triệu", options: { bold: true, color: C.dPink } }], { x: M + 0.35, y: 5.7, w: cw - 0.7, h: 0.55, fontSize: 18 });
  card(s, M + cw + 0.3, 4.0, cw, 2.5, C.tYellow, C.yellow);
  T(s, "Nova cần trả lời bằng", { x: M + cw + 0.65, y: 4.2, w: cw - 0.7, h: 0.45, fontSize: 15, color: C.muted });
  T(s, "mục tiêu của Bình An → khán giả → quyền lợi → kích hoạt → cách đo", { x: M + cw + 0.65, y: 4.7, w: cw - 0.7, h: 1.5, fontSize: 19, bold: true, valign: "top" });
}

// ───────────────────────── 13 — 7 parts ─────────────────────────
{
  const s = base("s92", "Đề xuất win-win có 7 phần", {
    source: "Cấu trúc do người soạn dựng từ U01, U04–U07 — chưa có hướng dẫn chuẩn từ một hiệp hội.",
    notes: "1 Mục tiêu nhà tài trợ: nhận biết, thái độ, khách hàng tiềm năng, doanh số, quan hệ với Key Account (U01).\n2 Khán giả: ai là khách của Key Account, số lượng, hồ sơ, vì sao có giá trị với nhà tài trợ.\n3 Gói quyền lợi theo hạng (danh vị, kim cương, vàng) — gắn với điểm chạm (U07, U10).\n4 Kế hoạch kích hoạt: nhà tài trợ làm gì tại điểm chạm; ngân sách kích hoạt ngoài phí quyền (U04, U05).\n5 Cam kết đo lường: chỉ số ROO và ROI; ai cung cấp dữ liệu; báo cáo khi nào (U06; Buổi 8).\n6 Điều khoản: quyền và nghĩa vụ; kỳ vọng đo lường ghi vào hợp đồng; giới hạn pháp lý và trải nghiệm khách (U06, U13).\n7 Giá: phí quyền; phần kích hoạt nhà tài trợ tự chi.\nHiểu lầm: “Đề xuất tài trợ là bảng giá logo” → bắt đầu từ mục tiêu nhà tài trợ, kết thúc bằng cam kết đo lường.",
  });
  const parts = [["Mục tiêu", "nhà tài trợ muốn gì", C.purple], ["Khán giả", "khách của Key Account là ai", C.blue], ["Quyền lợi", "theo hạng, gắn điểm chạm", C.orange], ["Kích hoạt", "làm gì, ngân sách riêng", C.pink], ["Đo lường", "ROO + ROI, ai cấp dữ liệu", C.green], ["Điều khoản", "đo lường ghi vào hợp đồng", C.purple], ["Giá", "phí quyền + kích hoạt", C.blue]];
  const n = 7, gap = 0.12, cw = (CW - gap * (n - 1)) / n;
  parts.forEach(([h, d, c], i) => {
    const x = M + i * (cw + gap), y = 2.3 + (i % 2) * 0.0;
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.3, w: cw, h: 1.1, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, String(i + 1), { x: x + 0.2, y: 2.3, w: cw - 0.3, h: 1.1, fontSize: 26, bold: true, color: C.white, align: "center", valign: "middle" });
    T(s, h, { x, y: 3.6, w: cw, h: 0.5, fontSize: 15, bold: true, align: "center" });
    T(s, d, { x: x + 0.05, y: 4.1, w: cw - 0.1, h: 1.0, fontSize: 12, align: "center", valign: "top", color: C.muted });
  });
  card(s, M, 5.35, CW, 1.2, C.tYellow, C.yellow);
  T(s, [{ text: "Bắt đầu ", options: {} }, { text: "từ mục tiêu của nhà tài trợ", options: { bold: true } }, { text: ", kết thúc " }, { text: "bằng cam kết đo lường ghi vào hợp đồng", options: { bold: true } }, { text: " — không phải bảng giá logo." }],
    { x: M + 0.35, y: 5.35, w: CW - 0.7, h: 1.2, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 14 — win-win venn ─────────────────────────
{
  const s = base("s92", "Win-win nghĩa là cả nhà tài trợ, Key Account và khách đều được lợi", {
    notes: "Win-win nghĩa là cả ba (bốn) bên: nhà tài trợ đạt mục tiêu, Key Account giữ được hình ảnh và bù được ngân sách, khách của Key Account thấy có ích, agency làm được sự kiện chất lượng.\nAlt-text: ba vòng tròn giao nhau — nhà tài trợ, Key Account, khách của Key Account — agency ở vùng giao giữa.",
  });
  venn(s, 4.15, 4.2, 1.6, ["Nhà tài trợ", "Key Account", "Khách của KA"], { center: "Agency", size: 14 });
  const rx = M + 7.2, rw = CW - 7.2;
  const rows = [["Nhà tài trợ", "đạt mục tiêu (ROO/ROI)", C.purple, C.tPurple], ["Key Account", "giữ hình ảnh, bù ngân sách", C.blue, C.tBlue], ["Khách của Key Account", "thấy có ích, không bị làm phiền", C.pink, C.tPink], ["Agency", "làm được sự kiện chất lượng", C.orange, C.tYellow]];
  rows.forEach(([h, d, c, f], i) => {
    const y = 2.05 + i * 1.12;
    card(s, rx, y, rw, 0.98, f, c);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: rx + 0.3, y, w: rw - 0.6, h: 0.98, fontSize: 16, valign: "middle" });
  });
}

// ───────────────────────── 15 — activation ratio ─────────────────────────
{
  const s = base("s92", "Quyền lợi không kích hoạt là quyền lợi bỏ phí", {
    source: "U04: O’Reilly & Lafrance Horning (2013), Sport Management Review · U05: Lumency / WFA (2024), chưa kiểm chứng chéo.",
    notes: "Activation: khoản đầu tư của nhà tài trợ NGOÀI phí mua quyền để khai thác quyền lợi; đo bằng activation ratio = chi phí kích hoạt / phí quyền (U04).\nNghiên cứu trước khuyến nghị 1:1 đến 8:1; nhưng nghiên cứu tình huống cho thấy chất lượng chiến lược kích hoạt quan trọng hơn con số tỷ lệ.\nNhận định của người soạn: với agency, đây là cơ hội — đề xuất cả phần thiết kế kích hoạt cho nhà tài trợ, để quyền lợi không bị “mua rồi bỏ đó”.\nHiểu lầm: “Mua quyền xong là xong” → không có kích hoạt thì quyền lợi gần như vô giá trị.",
  });
  T(s, [{ text: "Activation ratio", options: { bold: true } }, { text: " = chi phí kích hoạt ÷ phí mua quyền" }], { x: M, y: 1.95, w: CW, h: 0.45, fontSize: 17 });
  const ax = M + 2.6, aw = CW - 3.0, sc = aw / 8, ay = 2.8;
  // axis ticks 0..8
  for (let k = 0; k <= 8; k++) {
    line(s, ax + k * sc, ay + 2.15, ax + k * sc, ay + 2.25, C.muted, 1);
    T(s, k + ":1", { x: ax + k * sc - 0.3, y: ay + 2.28, w: 0.6, h: 0.3, fontSize: 11, color: C.muted, align: "center" });
  }
  line(s, ax, ay + 2.15, ax + aw, ay + 2.15, C.muted, 1);
  T(s, "Khuyến nghị (U04)", { x: M, y: ay + 0.2, w: 2.5, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
  s.addShape(pres.shapes.RECTANGLE, { x: ax + sc, y: ay + 0.2, w: 7 * sc, h: 0.6, fill: { color: C.green, transparency: 40 }, line: { color: C.green, width: 1.5 } });
  T(s, "1:1 → 8:1", { x: ax + sc + 0.2, y: ay + 0.2, w: 3, h: 0.6, fontSize: 15, bold: true, valign: "middle" });
  T(s, "Thực tế toàn cầu (U05)", { x: M, y: ay + 1.2, w: 2.5, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
  s.addShape(pres.shapes.RECTANGLE, { x: ax, y: ay + 1.2, w: 0.81 * sc, h: 0.6, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  T(s, "0,81:1", { x: ax + 0.81 * sc + 0.12, y: ay + 1.2, w: 1.5, h: 0.6, fontSize: 18, bold: true, color: C.dPink, valign: "middle" });
  const stats = [["43%", "nhà tài trợ không biết mình chi bao nhiêu cho kích hoạt", C.orange, C.tOrange, C.dOrange], ["18%", "đạt tỷ lệ 1:1 trở lên", C.blue, C.tBlue, C.dBlue]];
  stats.forEach(([n, d, c, f, dc], i) => {
    const x = M + i * 3.9;
    card(s, x, 5.55, 3.7, 1.05, f, f);
    T(s, [{ text: n + " ", options: { bold: true, fontSize: 28, color: dc } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.25, y: 5.55, w: 3.2, h: 1.05, valign: "middle" });
  });
  card(s, M + 7.8, 5.55, CW - 7.8, 1.05, C.tYellow, C.yellow);
  T(s, "Chất lượng chiến lược kích hoạt quan trọng hơn con số tỷ lệ.", { x: M + 8.05, y: 5.55, w: CW - 8.3, h: 1.05, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 16 — ROI & ROO ─────────────────────────
{
  const s = base("s92", "Đo tài trợ bằng cả ROI và ROO", {
    source: "U06: ANA & MASB (2018) — số liệu Bắc Mỹ.",
    notes: "MASB khuyến nghị dùng mức độ ưa thích thương hiệu (brand preference) làm chỉ số then chốt.\nNhắc: số liệu Bắc Mỹ, 2018.\nHiểu lầm: “ROI tài trợ chỉ tính bằng doanh số” → gồm cả ROO; và phải tách tác động của sự kiện khỏi các yếu tố khác.",
  });
  const cw = (CW - 0.3) / 2;
  [["ROI", "return on investment", "Kết quả tài chính: lợi tức tài chính của khoản tài trợ, giá trị truyền thông quy đổi, doanh số", C.blue, C.tBlue],
   ["ROO", "return on objectives", "Kết quả theo mục tiêu: nhận biết thương hiệu, nhận biết việc tài trợ, thái độ, độ phủ truyền thông và mạng xã hội", C.purple, C.tPurple]].forEach(([h, sub, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 2.35, f, c);
    T(s, [{ text: h + "  ", options: { bold: true, fontSize: 30, color: c === C.blue ? C.dBlue : c } }, { text: sub, options: { italic: true, fontSize: 14, color: C.muted } }], { x: x + 0.3, y: 2.15, w: cw - 0.6, h: 0.75, valign: "middle" });
    T(s, d, { x: x + 0.3, y: 2.95, w: cw - 0.6, h: 1.3, fontSize: 15, valign: "top" });
  });
  [["37%", "có quy trình chuẩn đo lợi tức tài trợ"], ["40%", "ghi kỳ vọng đo lường vào hợp đồng"]].forEach(([n, d], i) => {
    const x = M + i * 3.35;
    card(s, x, 4.7, 3.15, 1.85, C.white, C.line);
    T(s, n, { x: x + 0.25, y: 4.8, w: 2.7, h: 0.8, fontSize: 36, bold: true, color: C.dPink });
    T(s, d, { x: x + 0.25, y: 5.6, w: 2.7, h: 0.85, fontSize: 13, valign: "top" });
  });
  card(s, M + 6.7, 4.7, CW - 6.7, 1.85, C.tYellow, C.yellow);
  T(s, [{ text: "“Only 40 percent of respondents write expectations about sponsorship measurement into contracts with properties…”", options: { italic: true, breakLine: true } }, { text: "— ANA (U06)", options: { fontSize: 12, color: C.muted } }],
    { x: M + 6.95, y: 4.7, w: CW - 7.2, h: 1.85, fontSize: 14, valign: "middle" });
}

// ───────────────────────── 17 — 6-level for sponsors ─────────────────────────
{
  const s = base("s92", "Khung 6 cấp của Buổi 8 cũng dùng được cho nhà tài trợ", {
    source: "Khung 6 cấp: Event ROI Institute (Buổi 8, T11). Ví dụ chỉ số: nhận định của người soạn, tình huống giả định.",
    notes: "Nhìn khung ROI 6 cấp từ phía nhà tài trợ, ví dụ gala An Phát – Bảo hiểm Bình An.\nCấp 3: chỉ tính doanh nghiệp ĐỒNG Ý hẹn tư vấn. Cấp 4: dữ liệu của Bình An — phải thống nhất chia sẻ từ đầu.\nAlt-text: bậc thang sáu cấp từ 0 đến 5, mỗi bậc có câu hỏi cho nhà tài trợ và ví dụ chỉ số.",
  });
  const lv = [
    ["0", "Đúng người", "Số DN thuộc phân khúc mục tiêu của Bình An có mặt"],
    ["1", "Hài lòng", "Điểm đánh giá phiên tư vấn"],
    ["2", "Learning", "% khách biết thêm về giải pháp quản trị rủi ro DN"],
    ["3", "Behaviour", "Số DN đồng ý hẹn tư vấn sau sự kiện"],
    ["4", "Impact", "Số hợp đồng mới trong 3 tháng (dữ liệu Bình An)"],
    ["5", "ROI", "Lợi ích quy tiền so với tổng chi phí"],
  ];
  const cols = [C.green, C.green, C.green, C.green, C.purple, C.purple];
  lv.forEach(([k, name, ex], i) => {
    const y = 6.05 - i * 0.78, x = M + i * 0.55, w = CW - i * 0.55;
    card(s, x, y, w, 0.66, i < 4 ? C.tGreen : C.tPurple, cols[i]);
    badge(s, x + 0.12, y + 0.08, 0.5, cols[i], k, C.white, 16);
    T(s, name, { x: x + 0.8, y, w: 1.9, h: 0.66, fontSize: 14, bold: true, valign: "middle" });
    T(s, ex, { x: x + 2.75, y, w: w - 2.95, h: 0.66, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── 18 — ROI example ─────────────────────────
{
  const s = base("s92", "ROI năm đầu có thể âm — vì vậy phải thống nhất mục tiêu từ đầu", {
    source: "VÍ DỤ GIẢ ĐỊNH, chỉ minh họa — không phải số liệu thật.",
    notes: "Ghi rõ GIẢ ĐỊNH. Nên tính từng bước trên bảng cùng lớp.\nROI = (Lợi ích quy ra tiền − Tổng chi phí tài trợ) / Tổng chi phí tài trợ; tổng chi phí = phí quyền + chi phí kích hoạt.\nBình An: phí quyền 250 tr + kích hoạt 150 tr (tỷ lệ 0,6:1) = 400 tr. 60 DN đồng ý hẹn tư vấn (cấp 3); giả sử 20% ký (12 hợp đồng) × lợi nhuận gộp năm đầu 50 tr = 600 tr. Chỉ một nửa quy cho sự kiện (tách tác động, Buổi 8) → 300 tr. ROI = (300 − 400)/400 = −25%. Tính cả tái tục năm 2 thì có thể dương.\nÝ cần chốt: “Con số âm không có nghĩa là tài trợ thất bại: có thể mục tiêu chính là ROO (thái độ, quan hệ với An Phát). Đó là lý do phải thống nhất mục tiêu và cách đo ngay trong đề xuất, và ghi vào hợp đồng.”",
  });
  pill(s, W - M - 2.6, 1.95, 2.6, 0.5, C.yellow, "VÍ DỤ GIẢ ĐỊNH", { text: { fontSize: 13 } });
  const steps = [
    ["Tổng chi phí", "250 phí quyền + 150 kích hoạt", "400 tr", C.orange, C.tOrange],
    ["Hợp đồng mới", "60 DN hẹn × 20% ký = 12 × 50 tr", "600 tr", C.blue, C.tBlue],
    ["Quy cho sự kiện", "chỉ ½ do sự kiện (tách tác động)", "300 tr", C.purple, C.tPurple],
  ];
  const sw = 2.9;
  steps.forEach(([h, d, v, c, f], i) => {
    const x = M + i * (sw + 0.45);
    card(s, x, 2.65, sw, 2.2, f, c);
    T(s, h, { x: x + 0.25, y: 2.8, w: sw - 0.5, h: 0.45, fontSize: 15, bold: true });
    T(s, v, { x: x + 0.25, y: 3.25, w: sw - 0.5, h: 0.85, fontSize: 34, bold: true, color: c === C.blue ? C.dBlue : c === C.orange ? C.dOrange : c });
    T(s, d, { x: x + 0.25, y: 4.1, w: sw - 0.5, h: 0.65, fontSize: 12, valign: "top" });
    if (i < 2) arrow(s, x + sw + 0.07, 3.75, x + sw + 0.38, 3.75, C.ink, 2.5);
  });
  const rx = M + 3 * (sw + 0.45), rw = W - M - rx;
  card(s, rx, 2.65, rw, 2.2, C.pink, C.pink);
  T(s, [{ text: "ROI", options: { fontSize: 15, bold: true, breakLine: true } }, { text: "−25%", options: { fontSize: 36, bold: true } }], { x: rx + 0.15, y: 2.65, w: rw - 0.3, h: 2.2, color: C.white, align: "center", valign: "middle" });
  card(s, M, 5.2, CW, 1.35, C.tYellow, C.yellow);
  T(s, [{ text: "ROI = (300 − 400) / 400 = −25% năm đầu. ", options: { bold: true } }, { text: "Không có nghĩa là thất bại: mục tiêu chính có thể là ROO — nên phải thống nhất mục tiêu và cách đo ngay trong đề xuất, ghi vào hợp đồng." }],
    { x: M + 0.35, y: 5.2, w: CW - 0.7, h: 1.35, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 19 — enrich not disrupt ─────────────────────────
{
  const s = base("s93", "Tài trợ phải làm giàu hành trình, không làm gián đoạn", {
    source: "U07: Bizzabo (2026), số liệu khảo sát chưa kiểm chứng chéo · U03: Cornwell (2019), Journal of Advertising.",
    notes: "Cornwell (2019): tài trợ đã được đo và vận hành như quảng cáo suốt nhiều thập kỷ; tiềm năng tạo gắn kết thật còn bị bỏ ngỏ.\nBizzabo: 57% nhà tài trợ đánh giá cao trải nghiệm thương hiệu (tiệc chọn lọc, buổi gặp riêng) hơn gian hàng; 84% coi networking của người tham dự là quan trọng.",
  });
  card(s, M, 2.1, CW, 1.4, C.tPink, C.pink);
  T(s, [{ text: "“Sponsorships should enhance the attendee journey, not disrupt it.” ", options: { italic: true, bold: true } }, { text: "— Bizzabo (U07)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 1.4, fontSize: 24, valign: "middle", align: "center" });
  const cw = (CW - 0.6) / 3;
  card(s, M, 3.85, cw, 2.7, C.white, C.line);
  T(s, "Cornwell (2019)", { x: M + 0.3, y: 4.0, w: cw - 0.6, h: 0.45, fontSize: 14, bold: true, color: C.muted });
  T(s, [{ text: "Bớt “tài trợ như quảng cáo”", options: { breakLine: true, color: C.muted } }, { text: "→ thêm gắn kết thật với người tham dự", options: { bold: true } }], { x: M + 0.3, y: 4.5, w: cw - 0.6, h: 1.8, fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  [["57%", "nhà tài trợ đánh giá cao trải nghiệm thương hiệu (tiệc chọn lọc, gặp riêng) hơn gian hàng", C.purple, C.tPurple], ["84%", "coi networking của người tham dự là quan trọng", C.dBlue, C.tBlue]].forEach(([n, d, c, f], i) => {
    const x = M + (i + 1) * (cw + 0.3);
    card(s, x, 3.85, cw, 2.7, f, f);
    T(s, n, { x: x + 0.3, y: 4.0, w: cw - 0.6, h: 1.0, fontSize: 42, bold: true, color: c });
    T(s, d, { x: x + 0.3, y: 5.0, w: cw - 0.6, h: 1.4, fontSize: 14, valign: "top" });
  });
}

// ───────────────────────── 20 — journey ─────────────────────────
{
  const s = base("s93", "Mỗi giai đoạn trước – trong – sau có điểm chạm cho nhà tài trợ", {
    source: "Nhận định của người soạn; tham chiếu cách VPBank dùng quyền mua vé sớm cho chủ thẻ (U10). Tình huống giả định.",
    notes: "Nối Buổi 3 (hành trình khách hàng).\nTrong: Bình An làm phiên chuyên đề do chuyên gia trình bày; góc tư vấn THEO LỊCH HẸN, không chào mời tại bàn tiệc.\nSau: chỉ liên hệ khách đã đồng ý.",
  });
  const stages = [
    ["Trước", "Thư mời · đăng ký · xác nhận · di chuyển", "GlobalCard: ưu đãi xe đưa đón cho chủ thẻ", C.orange, C.tOrange],
    ["Trong", "Check-in · phiên hội nghị · giải lao · networking · gala · quà", "Bình An: phiên chuyên đề “quản trị rủi ro cho doanh nghiệp”; góc tư vấn theo lịch hẹn — không chào mời tại bàn tiệc", C.purple, C.tPurple],
    ["Sau", "Thư cảm ơn · khảo sát · gặp chuyên viên quan hệ khách hàng", "Gửi tài liệu chuyên đề; chỉ liên hệ khách đã đồng ý", C.blue, C.tBlue],
  ];
  const cw = (CW - 0.4) / 3;
  stages.forEach(([h, tp, sp, c, f], i) => {
    const x = M + i * (cw + 0.2);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.0, w: cw, h: 0.75, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, h, { x: x + 0.4, y: 2.0, w: cw - 0.6, h: 0.75, fontSize: 18, bold: true, color: dark(c), valign: "middle" });
    T(s, "Điểm chạm", { x: x + 0.1, y: 2.95, w: cw - 0.2, h: 0.35, fontSize: 12, bold: true, color: C.muted });
    T(s, tp, { x: x + 0.1, y: 3.3, w: cw - 0.2, h: 0.95, fontSize: 14, valign: "top" });
    card(s, x, 4.35, cw, 2.2, f, c);
    T(s, "Gắn nhà tài trợ", { x: x + 0.25, y: 4.45, w: cw - 0.5, h: 0.35, fontSize: 12, bold: true, color: C.muted });
    T(s, sp, { x: x + 0.25, y: 4.8, w: cw - 0.5, h: 1.65, fontSize: 14, bold: true, valign: "top" });
  });
}

// ───────────────────────── 21 — legal & reputation ─────────────────────────
{
  const s = base("s93", "Điểm chạm của nhà tài trợ phải bảo vệ Key Account", {
    source: "U13: Tạp chí Tài chính (11/11/2023) — đã kiểm chứng chéo · Tạp chí Ngân hàng (2022).",
    notes: "Luật Kinh doanh bảo hiểm sửa đổi (hiệu lực 1/1/2023): tổ chức tín dụng không được ép khách vay mua bảo hiểm.\nThông tư 67/2023/TT-BTC (hiệu lực 2/11/2023): ngân hàng không được tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư cho khách trong 60 ngày trước và 60 ngày sau ngày giải ngân toàn bộ khoản vay.\nNhận định của người soạn: quy định nhắm vào hoạt động bán bảo hiểm của ngân hàng, không trực tiếp vào sự kiện; nhưng cho thấy khách hàng và cơ quan quản lý rất nhạy cảm với việc ngân hàng “bán kèm” bảo hiểm. Nếu Bình An chào bán tại gala, rủi ro uy tín rơi vào An Phát trước tiên.\n[VERIFY: quy định hiện hành về hoạt động giới thiệu bảo hiểm tại sự kiện do ngân hàng tổ chức cho khách hàng doanh nghiệp — hỏi pháp chế]\n[VERIFY: văn bản hiện hành về bảo vệ dữ liệu cá nhân áp dụng cho việc chia sẻ danh sách khách mời với nhà tài trợ]\nPhạm vi: dừng ở mức nhận diện rủi ro cho Key Account; không tư vấn pháp lý chi tiết.",
  });
  card(s, M, 2.05, 6.3, 2.45, C.tBlue, C.blue);
  T(s, "Thông tư 67/2023/TT-BTC", { x: M + 0.3, y: 2.2, w: 5.7, h: 0.45, fontSize: 15, bold: true, color: C.dBlue });
  T(s, [{ text: "60 ngày", options: { bold: true, fontSize: 34 } }, { text: "  trước và sau giải ngân", options: { fontSize: 16 } }], { x: M + 0.3, y: 2.7, w: 5.7, h: 0.85, valign: "middle" });
  T(s, "ngân hàng không được tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư cho khách vay", { x: M + 0.3, y: 3.55, w: 5.7, h: 0.85, fontSize: 13, valign: "top" });
  card(s, M, 4.75, 6.3, 1.8, C.tPurple, C.purple);
  T(s, [{ text: "Dữ liệu khách: ", options: { bold: true } }, { text: "chia sẻ danh sách khách của An Phát cho nhà tài trợ cần sự đồng ý của khách." }], { x: M + 0.3, y: 4.75, w: 5.7, h: 1.8, fontSize: 16, valign: "middle" });
  const rx = M + 6.6, rw = CW - 6.6;
  T(s, "Với Bảo hiểm Bình An tại gala", { x: rx, y: 2.05, w: rw, h: 0.45, fontSize: 15, bold: true });
  card(s, rx, 2.6, rw, 1.5, C.tGreen, C.green);
  T(s, [{ text: "Nên: ", options: { bold: true, color: C.dGreen } }, { text: "kiến thức chuyên đề + tư vấn theo lịch hẹn" }], { x: rx + 0.3, y: 2.6, w: rw - 0.6, h: 1.5, fontSize: 17, valign: "middle" });
  card(s, rx, 4.3, rw, 1.5, C.tPink, C.pink);
  T(s, [{ text: "Tránh: ", options: { bold: true, color: C.dPink } }, { text: "chào bán sản phẩm tại chỗ, bàn tư vấn cạnh khu tiệc" }], { x: rx + 0.3, y: 4.3, w: rw - 0.6, h: 1.5, fontSize: 17, valign: "middle" });
  T(s, "Rủi ro uy tín rơi vào An Phát trước tiên.", { x: rx, y: 5.95, w: rw, h: 0.55, fontSize: 14, italic: true, color: C.purple, valign: "middle" });
}

// ───────────────────────── 22 — checklist ─────────────────────────
{
  const s = base("s93", "Checklist 5 câu cho mỗi điểm chạm", {
    notes: "Để chiếu suốt S6 — các nhóm dùng checklist này khi vẽ bản đồ và khi phản biện chéo.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const qs = [["Khách được lợi gì?", C.orange], ["Nhà tài trợ đạt mục tiêu nào (ROO/ROI, cấp mấy)?", C.purple], ["Có làm phiền, gián đoạn trải nghiệm không?", C.pink], ["Có rủi ro pháp lý, uy tín cho Key Account không?", C.blue], ["Đo bằng chỉ số gì, ai cung cấp dữ liệu?", C.green]];
  qs.forEach(([q, c], i) => {
    const y = 2.0 + i * 0.93;
    card(s, M, y, CW, 0.8, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.1, 0.6, c, String(i + 1));
    T(s, q, { x: M + 1.05, y, w: CW - 1.3, h: 0.8, fontSize: 20, bold: true, valign: "middle" });
  });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s93", "Thực hành 2 · Bản đồ điểm chạm tài trợ cho khách của An Phát", {
    source: "Phiếu W09_activity_S6_ban_do_diem_cham.md · Tình huống giả định.",
    notes: "S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 vẽ · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt.\nLời mở đầu: “Hai nhà tài trợ đã vào. Giờ Nova phải cho anh Minh thấy họ xuất hiện ở đâu trên hành trình của 600 khách, và mỗi lần xuất hiện khách được gì. 15 phút vẽ ít nhất 5 điểm chạm, đủ 6 cột. Sau đó các bạn sang bàn bạn và đóng vai hội đồng An Phát: mỗi bản đồ nhận một câu hỏi và một lo ngại thật sự.”\nMặc định: Bình An và GlobalCard; nếu nhóm chọn khác ở S3, cho dùng lựa chọn của nhóm miễn có ít nhất 1 đối tác của An Phát.\nKhi chốt: ghi các lo ngại lặp lại nhiều nhất lên bảng.",
  });
  T(s, "Nhà tài trợ mặc định: Bảo hiểm Bình An + GlobalCard · ≥ 5 điểm chạm, mỗi nhà tài trợ ≥ 2 · đánh dấu ⭐ điểm chạm tự hào nhất", { x: M, y: 1.9, w: CW, h: 0.45, fontSize: 13, color: C.muted });
  const heads = [["Giai đoạn", C.orange], ["Điểm chạm", C.purple], ["Nhà tài trợ làm gì", C.blue], ["Khách được gì", C.pink], ["Nhà tài trợ đạt gì (cấp mấy)", C.green], ["Rủi ro / cách phòng", C.purple]];
  const hw = (CW - 5 * 0.1) / 6;
  heads.forEach(([h, c], i) => {
    const x = M + i * (hw + 0.1);
    pill(s, x, 2.5, hw, 0.7, c, h, { text: { fontSize: 12 } });
    ["Trước", "Trong", "Sau"].forEach((st, j) => {
      card(s, x, 3.35 + j * 0.5, hw, 0.42, i === 0 ? C.band : C.white, C.line);
      if (i === 0) T(s, st, { x: x + 0.1, y: 3.35 + j * 0.5, w: hw - 0.2, h: 0.42, fontSize: 12, bold: true, valign: "middle", align: "center" });
    });
  });
  const steps = [["15’", "Vẽ bản đồ trên A1", C.orange], ["2×4’", "Xoay trạm: vai hội đồng An Phát — 🟨 1 câu hỏi, 🟥 1 lo ngại", C.pink], ["4’", "Về bàn, sửa một điểm chạm", C.green]];
  const sw = (CW - 0.6) / 3;
  steps.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 5.0, 0.85, c, t, null, t.length > 3 ? 13 : 17);
    T(s, d, { x: x + 1.0, y: 4.9, w: sw - 1.0, h: 1.05, fontSize: 13, valign: "middle" });
  });
  card(s, M, 6.1, CW, 0.6, C.tYellow, C.yellow);
  T(s, "Dùng checklist 5 câu (slide trước) cho mọi điểm chạm.", { x: M + 0.3, y: 6.1, w: CW - 0.6, h: 0.6, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── 23 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 9", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang — 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO/ROI. Làm dần trên lớp, không giao về nhà.",
  });
  const pts = [
    ["9.1", "Nhà tài trợ mua quyền lợi, nhà đầu tư chia sẻ rủi ro – lợi nhuận. Lợi ích phải có cho cả bốn bên. Tài trợ là chuyển giao hình ảnh hai chiều.", C.purple, C.tPurple],
    ["9.2", "Đề xuất win-win bắt đầu từ mục tiêu nhà tài trợ, có kế hoạch kích hoạt, kết thúc bằng cam kết đo lường (ROI + ROO) ghi vào hợp đồng.", C.blue, C.tBlue],
    ["9.3", "Gắn nhà tài trợ vào điểm chạm để làm giàu hành trình của khách hàng của Key Account — và bảo vệ Key Account khỏi rủi ro pháp lý, uy tín.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.3;
    card(s, M, y, CW, 1.15, t, c);
    badge(s, M + 0.25, y + 0.15, 0.85, c, k, C.white, 22);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.15, fontSize: 16, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.75, C.tYellow, C.yellow);
  T(s, [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "thêm một trang — 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO/ROI." }],
    { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.75, fontSize: 14, valign: "middle" });
}

// ───────────────────────── 24 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) SV nói được lợi ích cho KHÁCH của Key Account, không chỉ cho nhà tài trợ; (b) phân biệt đúng ROO (mục tiêu) và ROI (tài chính); (c) chỉ số đo được thật.\nCâu nối Buổi 10: “Hôm nay ta đưa đối tác của Key Account vào sự kiện. Buổi sau ta quay lại phía mua: quy trình chọn nhà cung cấp và địa điểm (RFP/RFQ, site check), và gắn họ vào các giai đoạn trên hành trình của Key Account.”",
  });
  const qs = [
    ["1", "Với khách hàng trong dự án cũ của nhóm bạn, một nhà tài trợ phù hợp nhất là ai (loại doanh nghiệp)? Khách của khách hàng đó được gì từ nhà tài trợ này?", C.purple],
    ["2", "Viết 1 chỉ số ROO và 1 chỉ số ROI bạn sẽ ghi vào hợp đồng tài trợ đó.", C.blue],
  ];
  const hs = [1.6, 1.2];
  let y = 2.0;
  qs.forEach(([n, q, c], i) => {
    card(s, M, y, CW, hs[i], C.white, C.line);
    badge(s, M + 0.25, y + hs[i] / 2 - 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: hs[i], fontSize: 17, valign: "middle" });
    y += hs[i] + 0.2;
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, [{ text: "Buổi 10: ", options: { bold: true } }, { text: "quay lại phía mua — quy trình chọn nhà cung cấp và địa điểm (RFP/RFQ, site check), gắn họ vào các giai đoạn trên hành trình của Key Account." }],
    { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["U01", "Meenaghan, J. A. (1983). Commercial sponsorship. European Journal of Marketing, 17(7), 5–73."],
  ["U02", "Cornwell, T. B., & Maignan, I. (1998). An international review of sponsorship research. Journal of Advertising, 27(1), 1–21."],
  ["U03", "Cornwell, T. B. (2019). Less “sponsorship as advertising” and more sponsorship-linked marketing as authentic engagement. Journal of Advertising, 48(1), 49–60."],
  ["U04", "O’Reilly, N., & Lafrance Horning, D. (2013). Leveraging sponsorship: The activation ratio. Sport Management Review, 16(4), 424–437."],
  ["U05", "Lumency. (2024, May 10). Why activation ratios matter."],
  ["U06", "Association of National Advertisers. (2018). Sponsorship measurement needs improvement: Study [Press release]."],
  ["U07", "Bizzabo. (2026, August 5). Event sponsorship strategies: A guide for enterprise event leaders."],
  ["U08", "Znews. (2025, January 20). Techcombank lại rót tiền cho concert mới của các “anh trai”. · Tuổi Trẻ Online. (2025, January 3). Đồng đầu tư cho concert Anh trai vượt ngàn chông gai…"],
  ["U09", "Báo Đầu tư. (n.d.). Concert “Anh trai vượt ngàn chông gai” và “Anh trai Say Hi” bùng nổ, nhà sản xuất và nhà tài trợ hưởng lợi thế nào?"],
  ["U10", "VnExpress. (2025, October 5). Cơ hội mua vé sớm concert G-DRAGON khi mở thẻ VPBank Mastercard [Nội dung được tài trợ]."],
  ["U11", "Tuổi Trẻ Online. (2025, January 23). Nhà sản xuất show “Anh trai vượt ngàn chông gai” lãi đậm."],
  ["U12", "Tuổi Trẻ Online. (2025, March 7). Happy Day Concert tại Đà Lạt ngừng 2 đêm diễn vì hình ảnh nghệ sĩ bị quảng cáo cờ bạc."],
  ["U13", "Tạp chí Tài chính. (2023, November 11). Thông tư số 67/2023/TT-BTC hạn chế tình trạng ép khách mua bảo hiểm kèm khoản vay."],
  ["U14", "Nhân Dân. (2026, September 7). Nghệ sĩ Việt chật vật làm liveshow."],
  ["U15", "American Express Global Business Travel. (2025). 2026 global meetings & events forecast."],
];
[REFS.slice(0, 8), REFS.slice(8)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL và nguồn phụ): buoi-09_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn U01–U15 ghi ở chân slide.",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.58;
    T(s, k, { x: M, y, w: 0.7, h: 0.5, fontSize: 11, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.5, fontSize: 11, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W09_Investors_Sponsors.pptx" }).then((f) => console.log("wrote", f));
