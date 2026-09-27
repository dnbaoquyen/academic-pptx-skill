// Buổi 10 — EVM1110E · Building Solutions: Supplier & Venue Management
// Deck generated from courses/EVM1110E/lessons/W10_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W10_Supplier_Venue.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 10: Building Solutions: Supplier & Venue Management";
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
  { key: "s101", label: "10.1 Quy trình mua", c: C.purple },
  { key: "s102", label: "10.2 Địa điểm", c: C.blue },
  { key: "s103", label: "10.3 Hành trình Key Account", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a tiny floor plan — stage bar and four round tables
function glyph(slide, x, y, s) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: s, h: s, rectRadius: s * 0.18, fill: { color: C.white }, line: { color: C.ink, width: 1 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: x + s * 0.22, y: y + s * 0.12, w: s * 0.56, h: s * 0.14, fill: { color: C.purple }, line: { color: C.purple, width: 0 } });
  const d = s * 0.2;
  [[C.orange, 0.2, 0.42], [C.blue, 0.6, 0.42], [C.green, 0.2, 0.7], [C.pink, 0.6, 0.7]].forEach(([c, i, j]) =>
    slide.addShape(pres.shapes.OVAL, { x: x + s * i, y: y + s * j, w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 10   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
function floorPlan(s, x, y, w, h, o = {}) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.2, fill: { color: C.white }, line: { color: C.ink, width: 2 } });
  s.addShape(pres.shapes.RECTANGLE, { x: x + w * 0.25, y: y + 0.2, w: w * 0.5, h: h * 0.14, fill: { color: C.purple }, line: { color: C.purple, width: 0 } });
  if (o.label) T(s, "sân khấu", { x: x + w * 0.25, y: y + 0.2, w: w * 0.5, h: h * 0.14, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle" });
  const cols = [C.orange, C.blue, C.green, C.pink, C.yellow];
  const nx = 5, ny = 3, d = Math.min(w / (nx * 1.9), h / (ny * 2.4));
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const cx = x + w * (0.1 + i * 0.175), cy = y + h * (0.36 + j * 0.2);
    const c = cols[(i + j) % cols.length];
    s.addShape(pres.shapes.OVAL, { x: cx, y: cy, w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } });
  }
  // pillar
  if (o.pillar) s.addShape(pres.shapes.RECTANGLE, { x: x + w * 0.47, y: y + h * 0.55, w: 0.18, h: 0.18, fill: { color: C.muted }, line: { color: C.muted, width: 0 } });
}
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  floorPlan(s, 7.9, 1.2, 4.8, 4.9, { label: true });
  T(s, "sơ đồ mặt bằng · bàn tròn 600 khách", { x: 7.9, y: 6.2, w: 4.8, h: 0.35, fontSize: 12, italic: true, color: C.muted, align: "center" });
  pill(s, M, 1.0, 3.1, 0.46, C.yellow, "EVM1110E  ·  Buổi 10 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.8, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Building Solutions: Supplier & Venue Management", { x: M, y: 3.75, w: 6.8, h: 0.9, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Phần 3 · buổi 2/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: [Tên giảng viên]" },
  ], { x: M, y: 5.0, w: 6.8, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Phần 3, buổi 2/4. Điền tên giảng viên trước khi dạy.\nAlt-text: sơ đồ mặt bằng ballroom nhìn từ trên xuống — sân khấu phía trên, các bàn tròn xếp thành hàng.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Tình huống AV ở Buổi 7 đã được quyết định từ lúc chọn và ký", {
    source: "Tình huống giả định (tiếp nối Buổi 7) — tên và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Nhắc: “Buổi 7, ba tuần trước gala 12/12, khách sạn báo AV nội bộ tăng giá 30% và không cho mang AV ngoài vào. Ta đã kết luận: tình huống đó được quyết định từ lúc chọn và ký với nhà cung cấp.”\nĐọc tiếp: “Hôm nay ta quay lại đúng lúc đó. Tháng 7. Anh Minh vừa duyệt concept gala 600 khách. Nova có ba tuần để chọn khách sạn và các nhà cung cấp.”\nGiơ tay A/B. Chốt: “Gọi điện nhanh hơn. Nhưng khi anh Minh hỏi ‘vì sao chọn khách sạn này’, Nova cần trả lời bằng tiêu chí và hồ sơ, không phải bằng cảm giác.”",
  });
  card(s, M, 2.1, 4.6, 2.3, C.tPink, C.pink);
  T(s, "Nhắc Buổi 7 · tháng 11", { x: M + 0.3, y: 2.25, w: 4.0, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  T(s, "+30%", { x: M + 0.3, y: 2.65, w: 4.0, h: 0.9, fontSize: 44, bold: true, color: C.dPink });
  T(s, "AV độc quyền của khách sạn, ba tuần trước gala", { x: M + 0.3, y: 3.55, w: 4.0, h: 0.75, fontSize: 14, valign: "top" });
  arrow(s, M + 4.75, 3.25, M + 5.45, 3.25, C.ink, 3);
  card(s, M + 5.6, 2.1, CW - 5.6, 2.3, C.tBlue, C.blue);
  T(s, "Hôm nay · quay lại tháng 7", { x: M + 5.9, y: 2.25, w: CW - 6.2, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  T(s, [{ text: "Anh Minh vừa duyệt concept gala 600 khách.", options: { breakLine: true } }, { text: "Nova có 3 tuần", options: { bold: true } }, { text: " để chọn khách sạn và các nhà cung cấp." }],
    { x: M + 5.9, y: 2.7, w: CW - 6.2, h: 1.55, fontSize: 18, valign: "top" });
  const opts = [["A", "Gọi ba khách sạn quen hỏi giá", C.orange], ["B", "Gửi cùng một bộ yêu cầu bằng văn bản cho cả ba", C.purple]];
  const cw = (CW - 0.3) / 2;
  opts.forEach(([l, t, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 4.75, cw, 1.1, C.white, C.line);
    badge(s, x + 0.25, 4.95, 0.7, c, l);
    T(s, t, { x: x + 1.15, y: 4.75, w: cw - 1.35, h: 1.1, fontSize: 18, valign: "middle" });
  });
  T(s, "Giơ tay: bạn chọn A hay B?", { x: M, y: 6.05, w: CW, h: 0.5, fontSize: 16, bold: true, color: C.purple });
}

// ───────────────────────── 3 — B7 vs B10 ─────────────────────────
{
  const s = base("s101", "Buổi 7 là chiến lược, Buổi 10 là tác nghiệp", {
    notes: "Nói: “Ô Kraljic quyết định cách mua. Hạng mục Non-critical thì hỏi giá nhanh; hạng mục Strategic như ballroom tháng 12 thì cần RFP, site check và đàm phán quan hệ.”\nRanh giới: PCCC và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện.",
  });
  const cols = [{ w: 2.1 }, { w: (CW - 2.1) / 2, head: "Buổi 7 — chiến lược", fill: C.purple }, { w: (CW - 2.1) / 2, head: "Buổi 10 — tác nghiệp", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Câu hỏi", "Hạng mục quan trọng và rủi ro đến đâu? Quan hệ với nhà cung cấp nên thế nào?", "Mời ai, hỏi gì, chấm thế nào, kiểm tra tại chỗ ra sao?"],
    ["Công cụ", "Kraljic, Procurement vs Buying, customer of choice", "RFI – RFP – RFQ, bảng chấm điểm, site check, sơ đồ mặt bằng"],
    ["Đầu ra", "Chiến lược cho từng hạng mục", "Nhà cung cấp được chọn + hồ sơ giải thích được"],
  ], { rowH: 0.95, size: 15 });
  card(s, M, 5.75, CW, 0.85, C.tYellow, C.yellow);
  T(s, [{ text: "Ô Kraljic quyết định cách mua: ", options: { bold: true } }, { text: "Non-critical → hỏi giá nhanh · Strategic (ballroom tháng 12) → RFP, site check, đàm phán quan hệ" }],
    { x: M + 0.3, y: 5.75, w: CW - 0.6, h: 0.85, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 4 — RFI/RFP/RFQ ─────────────────────────
{
  const s = base("s101", "RFI hỏi “ai”, RFP hỏi “giải pháp”, RFQ hỏi “giá”", {
    source: "Bảng do người soạn tổng hợp theo cách dùng phổ biến trong ngành; RFQ theo V01 (CIPS).",
    notes: "Hiểu lầm: “RFP chỉ để lấy giá” → đó là RFQ. RFP để lấy GIẢI PHÁP.",
  });
  const cols = [{ w: 2.4 }, { w: 2.9, head: "Hỏi gì", fill: C.purple }, { w: 3.2, head: "Khi nào dùng", fill: C.blue }, { w: CW - 8.5 + 0.1, head: "Ví dụ gala An Phát", fill: C.orange }];
  table(s, M, 1.95, cols, [
    ["RFI · request for information", "Nhà cung cấp là ai, làm được gì", "Chưa biết thị trường; lọc danh sách", "Tìm đơn vị livestream về 80 chi nhánh"],
    ["RFP · request for proposal", "Giải pháp + giá, chấm nhiều tiêu chí", "Hạng mục phức tạp, nhiều cách làm", "Ballroom + F&B; AV và livestream"],
    ["RFQ · request for quotation", "Giá cho thông số đã rõ", "Hạng mục chuẩn, nhiều nhà cung cấp", "In backdrop, thuê xe 45 chỗ, quà theo mẫu"],
  ], { rowH: 1.2, size: 15 });
}

// ───────────────────────── 5 — methods ─────────────────────────
{
  const s = base("s101", "Mỗi hạng mục có một phương thức mua phù hợp", {
    source: "V01: CIPS, What is procurement? — tiêu đề các phương thức chưa đối chiếu lại.",
    notes: "[VERIFY: tên tiêu đề từng phương thức trên trang CIPS]\nHai giai đoạn: hữu ích khi sợ “giá rẻ che mắt”, ví dụ chọn ý tưởng sân khấu.\nMột nguồn: AV độc quyền của khách sạn — một khi đã chọn khách sạn, AV thành một nguồn.\nMột câu về Key Account (quyết định GV): quy trình mua của Key Account có thể chịu quy định nội bộ hoặc pháp luật; hỏi phòng mua sắm của khách (anh Khoa) ngay từ đầu.",
  });
  const m = [
    ["Đấu thầu rộng rãi", "Mọi bên quan tâm được dự; công bằng nhưng tốn công đánh giá", C.orange],
    ["Hai giai đoạn", "Vòng 1 giải pháp không kèm giá; vòng 2 mới nộp giá", C.purple],
    ["RFQ", "Mời ít nhất ba nhà cung cấp báo giá", C.blue],
    ["Đấu thầu hạn chế", "Chỉ mời bên đã qua sàng lọc hồ sơ năng lực", C.green],
    ["Một nguồn", "Chỉ một bên đủ năng lực hoặc khẩn cấp — ví dụ AV độc quyền", C.pink],
  ];
  const cw = (CW - 4 * 0.2) / 5;
  m.forEach(([h, d, c], i) => {
    const x = M + i * (cw + 0.2);
    card(s, x, 2.05, cw, 3.1, C.white, c, 1.5);
    badge(s, x + 0.2, 2.25, 0.55, c, String(i + 1), null, 16);
    T(s, h, { x: x + 0.2, y: 2.95, w: cw - 0.4, h: 0.75, fontSize: 16, bold: true, valign: "top" });
    T(s, d, { x: x + 0.2, y: 3.7, w: cw - 0.4, h: 1.35, fontSize: 13, valign: "top" });
  });
  card(s, M, 5.45, CW, 1.1, C.tYellow, C.yellow);
  T(s, [{ text: "“You’ll typically pick at least three suppliers to submit quotes.” ", options: { italic: true } }, { text: "— CIPS (V01)", options: { fontSize: 12, color: C.muted } }],
    { x: M + 0.35, y: 5.45, w: CW - 0.7, h: 1.1, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 6 — lost AV choice ─────────────────────────
{
  const s = base("s101", "Nova mất quyền chọn AV ngay lúc ký với khách sạn", {
    notes: "Hỏi trước khi lật đáp án: “Vậy lúc nào Nova mất quyền chọn AV?” — Chốt: “Lúc ký với khách sạn. Nên câu hỏi về AV độc quyền phải nằm trong RFP gửi khách sạn.”\nAlt-text: ba ô nối bằng mũi tên — chọn và ký khách sạn → AV độc quyền → AV thành một nguồn.",
  });
  const steps = [["Chọn và ký khách sạn", C.blue, C.tBlue], ["Hợp đồng có AV độc quyền", C.orange, C.tOrange], ["AV thành “một nguồn”", C.pink, C.tPink]];
  const sw = 3.4;
  steps.forEach(([t, c, f], i) => {
    const x = M + i * (sw + 0.75);
    card(s, x, 2.3, sw, 1.7, f, c, 1.5);
    badge(s, x + 0.25, 2.45, 0.5, c, String(i + 1), null, 15);
    T(s, t, { x: x + 0.25, y: 3.0, w: sw - 0.5, h: 0.85, fontSize: 19, bold: true, valign: "top" });
    if (i < 2) arrow(s, x + sw + 0.1, 3.15, x + sw + 0.65, 3.15, C.ink, 3);
  });
  card(s, M, 4.5, CW, 1.95, C.tYellow, C.yellow);
  T(s, [
    { text: "Lúc nào Nova mất quyền chọn AV?", options: { bold: true, fontSize: 20, breakLine: true } },
    { text: "Lúc ký với khách sạn → câu hỏi về AV độc quyền và phụ thu mang AV ngoài vào phải nằm ", options: { fontSize: 17 } },
    { text: "trong RFP gửi khách sạn.", options: { fontSize: 17, bold: true } },
  ], { x: M + 0.35, y: 4.5, w: CW - 0.7, h: 1.95, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── 7 — RFP 8 parts ─────────────────────────
{
  const s = base("s101", "RFP tốt mang Key Account và khách của Key Account vào", {
    source: "Khung rút gọn do người soạn dựng từ mẫu APEX RFP của Events Industry Council (V05).",
    notes: "Mẫu APEX có các phần như mục tiêu sự kiện, hồ sơ người tham dự, lịch sử sự kiện, và đề nghị đính kèm báo cáo sau sự kiện (PER) kỳ trước. Nhà cung cấp chỉ đề xuất đúng nếu họ hiểu Key Account và khách của Key Account.\nNhắc bảo mật (nhận định): thông tin về khách của An Phát chỉ chia sẻ ở mức cần thiết; xin cam kết bảo mật nếu cần.",
  });
  const parts = [
    ["Về An Phát và mục tiêu gala", "tri ân 600 lãnh đạo DN VIP", true],
    ["Hồ sơ khách", "độ tuổi, kỳ vọng, nhu cầu đặc biệt", true],
    ["Ngày, giờ, giờ dựng – tháo", "load-in / load-out"],
    ["Bố trí + sơ đồ mặt bằng", "bàn tròn, sân khấu, LED, khu tài trợ"],
    ["F&B, phòng ngủ", "nếu có"],
    ["Nhà cung cấp độc quyền", "AV, hoa, trang trí; phụ thu mang ngoài", false, true],
    ["Điều khoản", "cọc, hủy, thay đổi số khách"],
    ["Tiêu chí chấm và hạn trả lời", "công khai như nhau cho mọi bên"],
  ];
  const cw = (CW - 3 * 0.2) / 4;
  parts.forEach(([h, d, ka, excl], i) => {
    const x = M + (i % 4) * (cw + 0.2), y = 2.0 + Math.floor(i / 4) * 1.95;
    const c = ka ? C.purple : excl ? C.pink : C.blue, f = ka ? C.tPurple : excl ? C.tPink : C.white;
    card(s, x, y, cw, 1.75, f, c, 1.25);
    badge(s, x + 0.2, y + 0.18, 0.5, c, String(i + 1), null, 15);
    T(s, h, { x: x + 0.2, y: y + 0.75, w: cw - 0.4, h: 0.55, fontSize: 14, bold: true, valign: "top" });
    T(s, d, { x: x + 0.2, y: y + 1.25, w: cw - 0.4, h: 0.45, fontSize: 11, color: C.muted, valign: "top" });
  });
  T(s, [{ text: "● ", options: { color: C.purple } }, { text: "phần mang Key Account vào   " }, { text: "● ", options: { color: C.pink } }, { text: "phần chặn tình huống AV của Buổi 7" }],
    { x: M, y: 6.0, w: CW, h: 0.4, fontSize: 12, color: C.muted });
}

// ───────────────────────── 8 — RFP speed ─────────────────────────
{
  const s = base("s101", "Tốc độ trả lời RFP cho biết cách nhà cung cấp sẽ phục vụ", {
    source: "V06: Cvent (2025 Planner Sourcing Report, qua blog Cvent và BizBash) — chưa kiểm chứng chéo.",
    notes: "Hỏi: “Tốc độ trả lời RFP nói gì về cách nhà cung cấp sẽ phục vụ ta sau này?”\nNguồn là Cvent — một nền tảng bán phần mềm tìm địa điểm, có lợi ích liên quan.",
  });
  card(s, M, 2.1, 5.2, 4.4, C.tBlue, C.tBlue);
  T(s, "80%", { x: M + 0.35, y: 2.4, w: 4.5, h: 1.5, fontSize: 72, bold: true, color: C.dBlue });
  T(s, "người tổ chức muốn địa điểm trả lời RFP trong ≤ 4 ngày", { x: M + 0.35, y: 4.0, w: 4.5, h: 1.3, fontSize: 19, valign: "top" });
  T(s, "V06 · chưa KCC", { x: M + 0.35, y: 5.9, w: 4.5, h: 0.35, fontSize: 12, color: C.muted });
  const rx = M + 5.6, rw = CW - 5.6;
  const days = [["2 ngày", "Khách sạn A", C.green], ["3 ngày", "Khách sạn C", C.yellow], ["5 ngày", "Khách sạn B", C.pink]];
  T(s, "Ba khách sạn trong Thực hành 1 trả lời sau:", { x: rx, y: 2.1, w: rw, h: 0.45, fontSize: 15, bold: true });
  days.forEach(([d, h, c], i) => {
    const y = 2.7 + i * 0.85;
    const bw = (rw - 3.4) * (parseInt(d) / 5);
    T(s, h, { x: rx, y, w: 1.9, h: 0.6, fontSize: 14, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: rx + 2.0, y: y + 0.1, w: bw, h: 0.42, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, d, { x: rx + 2.1 + bw, y, w: 1.2, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
  });
  card(s, rx, 5.35, rw, 1.15, C.tYellow, C.yellow);
  T(s, "Chậm trả lời RFP hôm nay có thể là chậm xử lý sự cố vào ngày 12/12.", { x: rx + 0.3, y: 5.35, w: rw - 0.6, h: 1.15, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 9 — weighted scoring ─────────────────────────
{
  const s = base("s101", "Chấm điểm có trọng số biến lựa chọn thành lời giải thích", {
    source: "Trọng số 60/40: GIẢ ĐỊNH (quyết định GV) · điều kiện bắt buộc: nhận định của người soạn, gần V02.",
    notes: "Ghi rõ: trọng số là GIẢ ĐỊNH — chất lượng – năng lực 60 / tổng chi phí 40.\nMột hồ sơ trượt điều kiện bắt buộc thì điểm cao cũng không cứu được.\nHiểu lầm: “Chọn nhà cung cấp rẻ nhất là tiết kiệm cho khách” → tính tổng chi phí và rủi ro; giá thuê rẻ có thể đi kèm AV độc quyền đắt. “Chấm điểm là thủ tục” → bảng chấm là lời giải thích Nova đưa cho Key Account.",
  });
  card(s, M, 2.0, 4.0, 4.55, C.tPink, C.pink);
  T(s, "① Trước khi chấm", { x: M + 0.3, y: 2.15, w: 3.4, h: 0.45, fontSize: 15, bold: true, color: C.dPink });
  T(s, "Điều kiện bắt buộc — đạt / không đạt", { x: M + 0.3, y: 2.6, w: 3.4, h: 0.75, fontSize: 17, bold: true, valign: "top" });
  T(s, bullets(["Còn trống ngày 12/12", "Đủ diện tích dùng được cho 600 khách"]), { x: M + 0.3, y: 3.45, w: 3.4, h: 1.4, fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  T(s, "Trượt điều kiện bắt buộc thì điểm cao cũng không cứu được.", { x: M + 0.3, y: 5.1, w: 3.4, h: 1.2, fontSize: 13, italic: true, valign: "top" });
  const rx = M + 4.3, rw = CW - 4.3;
  T(s, "② Chấm có trọng số (GIẢ ĐỊNH 60/40)", { x: rx, y: 2.0, w: rw, h: 0.45, fontSize: 15, bold: true, color: C.purple });
  const crit = [["Không gian phù hợp khách của An Phát", 20, C.purple], ["Kỹ thuật – AV – livestream (gồm độc quyền)", 15, C.purple], ["Điều khoản: hủy, số khách, giờ dựng", 15, C.purple], ["Dịch vụ, F&B", 10, C.purple], ["Tổng chi phí (thuê + AV + phụ thu)", 40, C.blue]];
  const bx = rx + 4.5, bwMax = rw - 5.2;
  crit.forEach(([t, wgt, c], i) => {
    const y = 2.55 + i * 0.62;
    T(s, t, { x: rx, y, w: 4.4, h: 0.52, fontSize: 13, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + 0.08, w: bwMax * wgt / 40, h: 0.36, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, String(wgt), { x: bx + bwMax * wgt / 40 + 0.08, y, w: 0.6, h: 0.52, fontSize: 14, bold: true, valign: "middle" });
  });
  card(s, rx, 5.8, rw, 0.75, C.tYellow, C.yellow);
  T(s, [{ text: "Điểm = Σ (điểm 1–5 × trọng số) ÷ 5", options: { bold: true } }, { text: "  → thang 100" }], { x: rx + 0.3, y: 5.8, w: rw - 0.6, h: 0.75, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 10 — four principles ─────────────────────────
{
  const s = base("s101", "Bốn nguyên tắc: value for money, công bằng, dấu vết, phản hồi bên trượt", {
    source: "V02: CIPS, Tender evaluation · V04: Dickson (1966); Weber et al. (1991); Ho et al. (2010) — chưa đọc toàn văn.",
    notes: "Chọn nhà cung cấp là bài toán nhiều tiêu chí — một dòng nghiên cứu lâu đời trong mua hàng (Dickson 1966; Weber và cộng sự 1991; Ho và cộng sự 2010).\nAudit trail: anh Minh và anh Khoa đều có thể hỏi lại.\nNối Buổi 7: bên trượt hôm nay là đối tác ngày mai (customer of choice).\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const pr = [
    ["Value for money", "không phải giá thấp nhất", C.orange, C.tOrange],
    ["Đối xử công bằng", "cùng yêu cầu, cùng hạn, cùng tiêu chí cho mọi bên", C.purple, C.tPurple],
    ["Audit trail", "giữ dấu vết: ai chấm, chấm gì, vì sao", C.blue, C.tBlue],
    ["Phản hồi bên trượt", "bên trượt hôm nay là đối tác ngày mai (Buổi 7)", C.green, C.tGreen],
  ];
  const cw = (CW - 0.3) / 2;
  pr.forEach(([h, d, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 1.75;
    card(s, x, y, cw, 1.55, f, c);
    badge(s, x + 0.3, y + 0.38, 0.8, c, String(i + 1), null, 24);
    T(s, h, { x: x + 1.35, y: y + 0.2, w: cw - 1.6, h: 0.55, fontSize: 20, bold: true, valign: "middle" });
    T(s, d, { x: x + 1.35, y: y + 0.75, w: cw - 1.6, h: 0.65, fontSize: 15, valign: "top" });
  });
  T(s, "Chọn nhà cung cấp là bài toán nhiều tiêu chí: Dickson (1966) · Weber và cộng sự (1991) · Ho và cộng sự (2010)", { x: M, y: 5.7, w: CW, h: 0.45, fontSize: 13, italic: true, color: C.muted });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s101", "Thực hành 1 · Chấm hồ sơ ba khách sạn cho gala 12/12", {
    source: "Phiếu W10_activity_S3_cham_ho_so_khach_san.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Đồng hồ 4 / 8 / 5 phút, GV chốt 3 phút. Ghi lựa chọn khách sạn của 6 nhóm lên bảng.\nThêm chi tiết trên phiếu: A — hủy trong 60 ngày mất 50% cọc, giảm tối đa 5% số khách; B — giảm tới 10% số khách không phạt, không cột, trần 7 m; C — AV nội bộ có kinh nghiệm livestream (mang ngoài phụ thu 15%), F&B được đánh giá rất tốt, phòng phụ liền kề 200 m².\nThảo luận: các nhóm có chọn giống nhau không? Khách sạn nào rẻ nhất nhưng không phải lựa chọn tốt nhất?\nKhách sạn nhóm chọn dùng ở S6 (mặc định: khách sạn B).",
  });
  T(s, "600 khách VIP · cần ~860–920 m² dùng được · ngân sách địa điểm + F&B + AV ≤ 1,50 tỷ", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const cols = [{ w: 1.75 }, { w: 2.35, head: "Khách sạn A", fill: C.orange }, { w: 2.35, head: "Khách sạn B", fill: C.purple }, { w: 2.35, head: "Khách sạn C", fill: C.blue }];
  table(s, M, 2.4, cols, [
    ["Dùng được", "~950 m²; 4 cột, ~8 bàn bị che", "1.000 m², không cột", "~700 m² + phòng phụ 200 m²"],
    ["Lịch 12/12", "Trống", "Khách khác giữ tạm đến 15/8", "Trống; chỉ dựng từ 14h"],
    ["AV", "Độc quyền, 300 tr", "Mang ngoài: 200 + 20 tr", "Nội bộ 240 tr"],
    ["Tổng", "1,45 tỷ", "1,52 tỷ", "1,44 tỷ"],
    ["Trả lời RFP", "2 ngày", "5 ngày", "3 ngày"],
  ], { rowH: 0.62, size: 12, headH: 0.45 });
  const steps = [["4’", "Chuyển tối đa 10 điểm trọng số, ghi 1 câu lý do", C.orange], ["8’", "Kiểm tra điều kiện bắt buộc, rồi chấm 1–5", C.purple], ["5’", "Chọn (có thể có điều kiện): 1 câu báo anh Minh + 1 câu phản hồi bên trượt", C.blue]];
  const rx = M + 9.05, rw = CW - 9.05;
  steps.forEach(([t, d, c], i) => {
    const y = 2.4 + i * 1.4;
    badge(s, rx, y + 0.1, 0.7, c, t, null, 16);
    T(s, d, { x: rx + 0.85, y, w: rw - 0.85, h: 1.25, fontSize: 12, valign: "middle" });
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
  T(s, "EVM1110E · Buổi 10   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── 11 — Mỹ Đình ─────────────────────────
{
  const s = base("s102", "Một địa điểm phục vụ nhiều bên thuê", {
    source: "V10: Tuổi Trẻ Online (11/11/2024) và các báo khác — đã kiểm chứng chéo.",
    notes: "Cuối 2024, sân vận động quốc gia Mỹ Đình tổ chức concert tối 7/12, một tuần trước trận ASEAN Cup của đội tuyển Việt Nam gặp Indonesia (15/12). VFF xin đổi sân nhà về Việt Trì.\n[VERIFY: tiêu đề chính xác các bài báo tiếng Việt trước khi đưa lên slide] — slide này chỉ mô tả sự việc, không trích tiêu đề báo. Ảnh sân Mỹ Đình chỉ dùng khi GV chấp nhận.\nHỏi: “Nếu Nova là agency của concert đó, ta cần hỏi địa điểm điều gì? Nếu Nova làm cho bên thuê sau, ta cần hỏi gì?”",
  });
  line(s, M + 0.3, 2.85, M + 7.5, 2.85, C.ink, 3, { end: "triangle" });
  [[M + 0.5, "7/12/2024", "Concert ca nhạc tại SVĐ Mỹ Đình", C.purple, C.tPurple], [M + 4.1, "15/12/2024", "ASEAN Cup: Việt Nam – Indonesia", C.blue, C.tBlue]].forEach(([x, d, t, c, f]) => {
    badge(s, x, 2.58, 0.54, c, "");
    T(s, d, { x, y: 1.98, w: 3.0, h: 0.5, fontSize: 18, bold: true, color: c === C.blue ? C.dBlue : c });
    card(s, x - 0.05, 3.35, 3.3, 1.2, f, c);
    T(s, t, { x: x + 0.15, y: 3.35, w: 2.9, h: 1.2, fontSize: 15, bold: true, valign: "middle" });
  });
  card(s, M, 4.85, 7.35, 1.7, C.tPink, C.pink);
  T(s, [{ text: "Kết quả: ", options: { bold: true } }, { text: "VFF xin đổi sân nhà của đội tuyển về Việt Trì — mặt sân sau concert là mối lo." }], { x: M + 0.3, y: 4.85, w: 6.75, h: 1.7, fontSize: 17, valign: "middle" });
  const rx = M + 7.75, rw = CW - 7.75;
  card(s, rx, 1.98, rw, 4.57, C.tYellow, C.yellow);
  T(s, "Luôn hỏi địa điểm:", { x: rx + 0.3, y: 2.15, w: rw - 0.6, h: 0.5, fontSize: 17, bold: true });
  T(s, bullets(["Trước và sau ngày của tôi có sự kiện gì?", "Giờ dựng – tháo thế nào?", "Ai chịu trách nhiệm trả lại mặt bằng?"]), { x: rx + 0.3, y: 2.75, w: rw - 0.6, h: 3.5, fontSize: 17, valign: "top", paraSpaceAfter: 14 });
}

// ───────────────────────── 12 — venue first ─────────────────────────
{
  const s = base("s102", "Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp", {
    source: "V07: Blumin, trong BizBash · V06: Cvent (2025) — chưa kiểm chứng chéo.",
    notes: "Khách sạn có AV độc quyền → Nova mất quyền chọn AV. Khách sạn cho mang AV ngoài → Nova tự chọn được đơn vị livestream quen.\nHiểu lầm: “Chọn địa điểm xong mới chọn nhà cung cấp khác” → đúng một nửa: chọn địa điểm trước, nhưng câu hỏi về nhà cung cấp độc quyền phải có TRƯỚC KHI KÝ.",
  });
  card(s, M, 2.05, 6.2, 2.6, C.tBlue, C.blue);
  T(s, [{ text: "“The venue is often the first step in a search because that influences which vendors are used.”", options: { italic: true, breakLine: true } }, { text: "— Blumin, trong BizBash (V07)", options: { fontSize: 13, color: C.muted } }],
    { x: M + 0.35, y: 2.05, w: 5.5, h: 2.6, fontSize: 20, valign: "middle", paraSpaceAfter: 8 });
  card(s, M, 4.9, 6.2, 1.65, C.white, C.line);
  T(s, [{ text: "AV độc quyền → ", options: { bold: true } }, { text: "Nova mất quyền chọn AV", options: { breakLine: true } }, { text: "Cho mang AV ngoài → ", options: { bold: true } }, { text: "Nova tự chọn đơn vị livestream quen" }],
    { x: M + 0.3, y: 4.9, w: 5.6, h: 1.65, fontSize: 15, valign: "middle", paraSpaceAfter: 8 });
  const rx = M + 6.6, rw = CW - 6.6;
  T(s, "Nguồn ảnh hưởng nhiều nhất đến quyết định gửi RFP (V06)", { x: rx, y: 2.05, w: rw, h: 0.75, fontSize: 15, bold: true, valign: "top" });
  [["Thông số phòng", 50, C.purple], ["Hình ảnh", 48, C.orange], ["Sơ đồ mặt bằng", 46, C.blue]].forEach(([t, v, c], i) => {
    const y = 3.0 + i * 1.15, bw = (rw - 0.9) * v / 55;
    T(s, t, { x: rx, y, w: rw, h: 0.4, fontSize: 14 });
    s.addShape(pres.shapes.RECTANGLE, { x: rx, y: y + 0.42, w: bw, h: 0.45, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, v + "%", { x: rx + bw + 0.1, y: y + 0.4, w: 0.9, h: 0.5, fontSize: 16, bold: true, valign: "middle" });
  });
}

// ───────────────────────── 13 — price vs relationship ─────────────────────────
{
  const s = base("s102", "Giá quan trọng, nhưng quan hệ với địa điểm cũng có giá", {
    source: "V06: Cvent (2025) — chưa kiểm chứng chéo.",
    notes: "Hỏi: “Hai con số này mâu thuẫn không?” — Chốt: “Không hẳn. Giá quan trọng, nhưng quan hệ với địa điểm cũng có giá trị.” Nối Buổi 7: customer of choice.",
  });
  const cw = (CW - 0.3) / 2;
  [["97%", "sẵn sàng đổi sang địa điểm thứ hai nếu tiết kiệm ≤ 20%", "→ giá quan trọng", C.dOrange, C.tOrange],
   ["94%", "sẵn sàng trả thêm để giữ địa điểm ưu tiên", "→ quan hệ cũng có giá", C.purple, C.tPurple]].forEach(([n, d, k, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 3.3, f, f);
    T(s, n, { x: x + 0.4, y: 2.25, w: cw - 0.8, h: 1.3, fontSize: 64, bold: true, color: c });
    T(s, d, { x: x + 0.4, y: 3.6, w: cw - 0.8, h: 0.95, fontSize: 18, valign: "top" });
    T(s, k, { x: x + 0.4, y: 4.6, w: cw - 0.8, h: 0.5, fontSize: 16, bold: true, color: c });
  });
  card(s, M, 5.6, CW, 0.95, C.tYellow, C.yellow);
  T(s, "Hai con số này có mâu thuẫn không?", { x: M + 0.35, y: 5.6, w: CW - 0.7, h: 0.95, fontSize: 19, bold: true, valign: "middle" });
}

// ───────────────────────── 14 — six criteria ─────────────────────────
{
  const s = base("s102", "Sáu nhóm tiêu chí chọn địa điểm cho sự kiện của Key Account", {
    source: "Nhận định của người soạn, tổng hợp từ V06 và V07.",
    notes: "Mỗi nhóm tiêu chí gắn với một người cụ thể của An Phát: chị Lan (livestream), anh Khoa (ngân sách), và 600 khách VIP.",
  });
  const cols = [{ w: 3.9 }, { w: 3.9, head: "Hỏi gì", fill: C.blue }, { w: CW - 7.8 + 0.1, head: "Vì sao quan trọng với An Phát", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["1. Phù hợp khách của Key Account", "Vị trí, đẳng cấp, cảm giác", "600 lãnh đạo doanh nghiệp VIP"],
    ["2. Sức chứa và bố trí", "Diện tích dùng được, cột, trần, tầm nhìn", "Không khách nào “ngồi sau cột”"],
    ["3. Kỹ thuật", "Điện, rigging, Wi-Fi, livestream", "Chị Lan: livestream về 80 chi nhánh"],
    ["4. Dịch vụ và nhà cung cấp độc quyền", "AV, hoa, F&B nội bộ; phụ thu", "Quyết định chi phí và chất lượng"],
    ["5. Lịch và điều khoản", "Lịch trước – sau, giờ dựng – tháo, hủy, cọc", "Rủi ro bị động sát ngày"],
    ["6. Tổng chi phí", "Thuê + F&B + AV + phụ thu", "Anh Khoa duyệt ngân sách"],
  ], { rowH: 0.66, size: 13 });
}

// ───────────────────────── 15 — site check ─────────────────────────
{
  const s = base("s102", "Site check là đi để hỏi, không phải đi để chụp ảnh", {
    source: "V07: BizBash, 11 câu hỏi site inspection (Việt hóa, chọn 8) · V11: Tiền Phong (13/7/2026), một báo — chưa kiểm chứng chéo.",
    notes: "[VERIFY: năm đăng bài BizBash về 11 câu hỏi site inspection]\nCase Những thành phố mơ màng Summer 2026 (Hà Nội, 12/7/2026): mưa lớn làm khu vực ngoài trời không đảm bảo vệ sinh, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi và cam kết rà soát “từ việc đánh giá điều kiện mặt bằng, xây dựng các phương án ứng phó với thời tiết đến việc chủ động cân nhắc điều chỉnh phương án tổ chức hoặc địa điểm”. [VERIFY: đối chiếu thêm một báo]\nHỏi: “Site check trước đó thiếu câu hỏi nào?” — gợi ý: thoát nước khi mưa, phương án B, tầm nhìn sân khấu từ cuối khán đài. (Không dùng ảnh khán giả lội bùn trừ khi có quyền dùng.)\nĐi site check cùng Key Account (anh Minh, chị Lan) là một điểm chạm quan trọng ở giai đoạn trước mua.\nHiểu lầm: “Site check là đi chụp ảnh” → là đánh giá nhà cung cấp tại chỗ (V03) với danh sách câu hỏi.\nChi tiết PCCC: môn Quản trị rủi ro sự kiện.",
  });
  const qs = [
    ["Sức chứa tối đa và giấy phép?", "Không vượt giới hạn chính thức"],
    ["Nhà cung cấp độc quyền? Phụ thu mang ngoài?", "Chi phí, chất lượng AV"],
    ["AV, rigging, máy phát dự phòng?", "Livestream không bị đứt"],
    ["Back-of-house, khu chuẩn bị F&B?", "Phục vụ 600 khách đúng giờ"],
    ["Giờ load-in, thang hàng?", "Sân khấu kịp dựng"],
    ["Wi-Fi cho khách và kỹ thuật?", "Trải nghiệm khách, livestream"],
    ["Bãi đỗ xe?", "Khách VIP đến – về thuận tiện"],
    ["Quy định gắn thương hiệu?", "Nhận diện An Phát và nhà tài trợ"],
  ];
  const cols = [{ w: 4.6, head: "Câu hỏi site check", fill: C.blue }, { w: 3.6, head: "Ảnh hưởng đến An Phát", fill: C.purple }];
  table(s, M, 1.95, cols, qs, { rowH: 0.47, size: 12, headH: 0.45, firstBold: false });
  const rx = M + 8.5, rw = CW - 8.5;
  card(s, rx, 1.95, rw, 4.6, C.tPink, C.pink);
  T(s, "Những thành phố mơ màng · Hà Nội · 7/2026", { x: rx + 0.25, y: 2.1, w: rw - 0.5, h: 0.7, fontSize: 13, bold: true, color: C.dPink, valign: "top" });
  T(s, "Mưa lớn, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi.", { x: rx + 0.25, y: 2.85, w: rw - 0.5, h: 1.6, fontSize: 13, valign: "top" });
  T(s, "Site check trước đó thiếu câu hỏi nào?", { x: rx + 0.25, y: 4.6, w: rw - 0.5, h: 0.9, fontSize: 15, bold: true, valign: "top" });
  T(s, "V11 · một báo, chưa KCC", { x: rx + 0.25, y: 5.95, w: rw - 0.5, h: 0.35, fontSize: 11, color: C.muted });
}

// ───────────────────────── 16 — usable area ─────────────────────────
{
  const s = base("s102", "Diện tích trên brochure không phải diện tích dùng được", {
    source: "V08: Social Tables (tính theo sq ft: đứng 6, hỗn hợp 8, sàn nhảy 9, lớp học 14–18); bàn tròn 11–12 sq ft từ blog địa điểm, chưa KCC. 1 m² ≈ 10,76 sq ft.",
    notes: "Tính trên bảng cùng lớp, từng bước.\nQuy tắc ước lượng: sức chứa ≈ diện tích dùng được ÷ diện tích mỗi người theo kiểu bố trí. Là quy tắc ước lượng, không phải tiêu chuẩn.\n600 khách × 1,0–1,1 m² ≈ 610–670 m² chỉ cho khu bàn; cộng sân khấu, LED, lối đi, buffet, khu nhà tài trợ (giả định ~250 m²) → ~860–920 m² dùng được.\nHiểu lầm: “Ballroom 1.200 m² thì chứa thoải mái 600 khách” → trừ cột, sân khấu, lối đi; kiểm tra tầm nhìn.",
  });
  const cols = [{ w: 3.3, head: "Kiểu bố trí", fill: C.blue }, { w: 2.2, head: "m²/người", fill: C.blue }];
  table(s, M, 1.95, cols, [["Đứng (tiệc đứng)", "≈ 0,56"], ["Hỗn hợp đứng – ngồi", "≈ 0,74"], ["Có sàn nhảy", "≈ 0,84"], ["Bàn tròn tiệc", "≈ 1,0–1,1*"], ["Lớp học", "≈ 1,3–1,7"]], { rowH: 0.58, size: 14 });
  T(s, "* chưa kiểm chứng chéo · quy tắc ước lượng, không phải tiêu chuẩn", { x: M, y: 5.95, w: 5.5, h: 0.5, fontSize: 11, italic: true, color: C.muted });
  const rx = M + 6.0, rw = CW - 6.0;
  T(s, "Tính cùng lớp: gala 600 khách, bàn tròn", { x: rx, y: 1.95, w: rw, h: 0.45, fontSize: 15, bold: true });
  const st = [["600 × 1,0–1,1 m²", "610–670 m²", "chỉ cho khu bàn", C.blue, C.tBlue], ["+ sân khấu, LED, lối đi, buffet, khu tài trợ", "~250 m²", "giả định", C.orange, C.tOrange], ["Cần", "~860–920 m²", "diện tích dùng được", C.purple, C.tPurple]];
  st.forEach(([a, b, c2, c, f], i) => {
    const y = 2.55 + i * 1.3;
    card(s, rx, y, rw, 1.15, f, c);
    T(s, a, { x: rx + 0.3, y, w: rw * 0.5 - 0.3, h: 1.15, fontSize: 14, valign: "middle" });
    T(s, [{ text: b, options: { bold: true, fontSize: 26, breakLine: true } }, { text: c2, options: { fontSize: 12, color: C.muted } }], { x: rx + rw * 0.5, y, w: rw * 0.5 - 0.3, h: 1.15, valign: "middle" });
  });
}

// ───────────────────────── 17 — ask what the area is ─────────────────────────
{
  const s = base("s102", "Luôn xin sơ đồ mặt bằng và hỏi “diện tích này là gì?”", {
    notes: "Thông số một trung tâm hội nghị lớn ở TP.HCM trên các trang khác nhau ghi từ “hơn 4.000 m²” đến khoảng 10.000 m² — có thể đo khác nhau (tổng sàn, một sảnh…). Không nêu tên địa điểm — quyết định GV; nguồn V12 trong tư liệu tổng hợp.\nSức chứa chính thức theo giấy phép của địa điểm và quy định PCCC → môn Quản trị rủi ro sự kiện.",
  });
  T(s, "Cùng một trung tâm hội nghị lớn ở TP.HCM, các trang ghi:", { x: M, y: 1.95, w: CW, h: 0.45, fontSize: 15, color: C.muted });
  const cw = 3.4;
  [["“hơn 4.000 m²”", C.orange, C.tOrange], ["“khoảng 10.000 m²”", C.blue, C.tBlue]].forEach(([t, c, f], i) => {
    const x = M + i * (cw + 0.8);
    card(s, x, 2.55, cw, 1.55, f, c, 1.5);
    T(s, t, { x: x + 0.15, y: 2.55, w: cw - 0.3, h: 1.55, fontSize: 20, bold: true, align: "center", valign: "middle" });
  });
  T(s, "≠", { x: M + cw, y: 2.55, w: 0.8, h: 1.55, fontSize: 44, bold: true, color: C.dPink, align: "center", valign: "middle" });
  T(s, "Có thể là tổng sàn, một sảnh, hay diện tích có cột…", { x: M, y: 4.25, w: 7.6, h: 0.45, fontSize: 14, italic: true, color: C.muted });
  const acts = [["Xin sơ đồ mặt bằng chính thức", C.purple], ["Hỏi “diện tích này là gì?”", C.blue], ["Đo khi site check", C.green]];
  acts.forEach(([t, c], i) => {
    const y = 1.95 + i * 1.05, rx = M + 8.0, rw = CW - 8.0;
    card(s, rx, y, rw, 0.88, C.white, c, 1.5);
    badge(s, rx + 0.2, y + 0.16, 0.56, c, String(i + 1), null, 16);
    T(s, t, { x: rx + 0.95, y, w: rw - 1.1, h: 0.88, fontSize: 15, bold: true, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.25, C.tYellow, C.yellow);
  T(s, [{ text: "Sức chứa chính thức ", options: { bold: true } }, { text: "theo giấy phép của địa điểm và quy định PCCC → học ở môn Quản trị rủi ro sự kiện." }],
    { x: M + 0.35, y: 5.3, w: CW - 0.7, h: 1.25, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 18 — Lemon & Verhoef ─────────────────────────
{
  const s = base("s103", "Hành trình có ba giai đoạn và bốn loại điểm chạm", {
    source: "V09: Lemon & Verhoef (2016), Journal of Marketing, 80(6), 69–96.",
    notes: "Lemon & Verhoef: hành trình gồm prepurchase – purchase – postpurchase. Tác giả viết: “Partners can include marketing agencies…”.",
  });
  const stages = [["Trước mua", "prepurchase", C.orange], ["Mua", "purchase", C.purple], ["Sau mua", "postpurchase", C.blue]];
  const cw = (CW - 0.4) / 3;
  stages.forEach(([h, e, c], i) => {
    const x = M + i * (cw + 0.2);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.05, w: cw, h: 1.0, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, [{ text: h, options: { bold: true, fontSize: 20, breakLine: true } }, { text: e, options: { italic: true, fontSize: 12 } }], { x: x + 0.5, y: 2.05, w: cw - 1.0, h: 1.0, color: dark(c), valign: "middle" });
  });
  T(s, "Bốn loại điểm chạm", { x: M, y: 3.35, w: CW, h: 0.45, fontSize: 15, bold: true, color: C.muted });
  const tp = [["Brand-owned", "do doanh nghiệp sở hữu", C.white, C.line], ["Partner-owned", "do đối tác sở hữu — hôm nay: nhà cung cấp", C.tPink, C.pink], ["Customer-owned", "do khách tự làm", C.white, C.line], ["Social / external", "bên ngoài", C.white, C.line]];
  const tw = (CW - 3 * 0.2) / 4;
  tp.forEach(([h, d, f, l], i) => {
    const x = M + i * (tw + 0.2);
    card(s, x, 3.9, tw, 1.55, f, l, i === 1 ? 2 : 1);
    T(s, h, { x: x + 0.2, y: 4.0, w: tw - 0.4, h: 0.5, fontSize: 16, bold: true });
    T(s, d, { x: x + 0.2, y: 4.5, w: tw - 0.4, h: 0.85, fontSize: 13, valign: "top" });
  });
  card(s, M, 5.7, CW, 0.85, C.tYellow, C.yellow);
  T(s, [{ text: "“Partners can include marketing agencies…” ", options: { italic: true } }, { text: "— Lemon & Verhoef (2016)", options: { fontSize: 12, color: C.muted } }], { x: M + 0.35, y: 5.7, w: CW - 0.7, h: 0.85, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 19 — role switch ─────────────────────────
{
  const s = base("s103", "Hôm nay An Phát là khách hàng của Nova", {
    notes: "Nói: “Ở Buổi 3 và Buổi 9 ta vẽ hành trình của khách của An Phát. Hôm nay đổi vai: An Phát là khách hàng của Nova. Và khách sạn, AV, nhà in… là điểm chạm partner-owned trên hành trình của An Phát.”\nAlt-text: hai hành trình lồng nhau — hàng trên: An Phát phục vụ khách của An Phát (Buổi 3, 9); hàng dưới: Nova phục vụ An Phát, với nhà cung cấp là điểm chạm (Buổi 10).",
  });
  const row = (y, lab, a, b, ca, cb, note) => {
    T(s, lab, { x: M, y, w: 2.0, h: 1.2, fontSize: 15, bold: true, color: C.muted, valign: "middle" });
    pill(s, M + 2.1, y + 0.2, 3.2, 0.8, ca, a, { text: { fontSize: 15 } });
    arrow(s, M + 5.4, y + 0.6, M + 6.4, y + 0.6, C.ink, 3);
    T(s, "phục vụ", { x: M + 5.3, y: y + 0.05, w: 1.2, h: 0.35, fontSize: 11, italic: true, color: C.muted, align: "center" });
    pill(s, M + 6.5, y + 0.2, 3.2, 0.8, cb, b, { text: { fontSize: 15 } });
    T(s, note, { x: M + 9.9, y, w: CW - 9.9, h: 1.2, fontSize: 13, valign: "middle" });
  };
  row(2.1, "Buổi 3, 9", "An Phát", "Khách của An Phát", C.purple, C.blue, "600 lãnh đạo DN VIP là khách hàng");
  row(3.6, "Buổi 10", "Nova", "An Phát", C.pink, C.purple, "An Phát là khách hàng của Nova");
  card(s, M + 2.1, 5.05, 7.6, 1.45, C.tPink, C.pink);
  T(s, [{ text: "Khách sạn · AV · nhà in · xe · nhiếp ảnh… ", options: { bold: true } }, { text: "= điểm chạm partner-owned trên hành trình của An Phát" }],
    { x: M + 2.4, y: 5.05, w: 7.0, h: 1.45, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 20 — journey table ─────────────────────────
{
  const s = base("s103", "Nhà cung cấp chạm An Phát ở cả giai đoạn mua và sau mua", {
    source: "Hành trình do người soạn dựng từ V09 và V05 (PER đã học ở Buổi 8) — quyết định GV, phương án A.",
    notes: "Nhấn giai đoạn SAU MUA: “Hồ sơ thanh toán chậm, ảnh gửi muộn cũng là trải nghiệm của An Phát — và là thứ anh Minh nhớ khi quyết định có tái ký năm sau.”",
  });
  const cols = [{ w: 2.2 }, { w: 4.4, head: "An Phát trải qua gì", fill: C.purple }, { w: CW - 6.6 + 0.1, head: "Nhà cung cấp chạm An Phát ở đâu", fill: C.pink }];
  table(s, M, 1.95, cols, [
    ["Trước mua (nhắc lại)", "Brief, đề xuất, báo giá, site check cùng Nova", "Khách sạn đón đoàn site check"],
    ["Mua", "Ký hợp đồng; tổng duyệt; ngày 12/12", "Khách sạn (sảnh, F&B), AV – livestream, in ấn – backdrop, xe đưa đón, nhiếp ảnh, lễ tân thời vụ, quà tặng"],
    ["Sau mua", "Nghiệm thu, báo cáo sau sự kiện (PER), hóa đơn – thanh toán, khiếu nại, đánh giá, đề xuất năm sau", "Album ảnh, bản ghi livestream, đối soát số khách thực tế với khách sạn, hồ sơ thanh toán gửi anh Khoa"],
  ], { rowH: [0.9, 1.25, 1.5], size: 14 });
}

// ───────────────────────── 21 — supplier error = agency error ─────────────────────────
{
  const s = base("s103", "Trong mắt Key Account, lỗi của nhà cung cấp là lỗi của agency", {
    source: "Nhận định của người soạn · tình huống giả định.",
    notes: "An Phát ký với Nova, không ký với nhà in hay khách sạn. Vì vậy quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.",
  });
  const ex = [
    ["Nhà in", "Backdrop in sai logo", "Chị Vy (Thương hiệu)", C.orange, C.tOrange],
    ["Khách sạn", "Hóa đơn tính dư 30 khách", "Anh Khoa (ngân sách – mua sắm)", C.purple, C.tPurple],
    ["AV – livestream", "Đứt livestream về 80 chi nhánh", "Chị Lan (Truyền thông nội bộ)", C.blue, C.tBlue],
  ];
  const cw = (CW - 0.6) / 3;
  ex.forEach(([sup, err, who, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 3.3, f, c);
    T(s, sup, { x: x + 0.3, y: 2.2, w: cw - 0.6, h: 0.45, fontSize: 14, bold: true, color: C.muted });
    T(s, err, { x: x + 0.3, y: 2.7, w: cw - 0.6, h: 1.0, fontSize: 20, bold: true, valign: "top" });
    arrow(s, x + 0.5, 3.85, x + 0.5, 4.35, C.ink, 2.5);
    T(s, [{ text: who, options: { bold: true, breakLine: true } }, { text: "sẽ hỏi Nova", options: { color: C.dPink } }], { x: x + 0.8, y: 3.8, w: cw - 1.1, h: 1.35, fontSize: 15, valign: "middle" });
  });
  card(s, M, 5.65, CW, 0.9, C.tYellow, C.yellow);
  T(s, "An Phát ký với Nova → quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.", { x: M + 0.35, y: 5.65, w: CW - 0.7, h: 0.9, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 22 — four questions ─────────────────────────
{
  const s = base("s103", "Bốn câu hỏi phân bổ nhà cung cấp", {
    notes: "Để chiếu suốt S6 — các nhóm dùng khi lập bảng phân bổ và khi phản biện chéo.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const qs = [
    ["Chạm An Phát ở giai đoạn nào?", "mua / sau mua", C.purple],
    ["Ai của An Phát nhìn thấy họ?", "anh Minh, ông Tuấn, chị Lan, chị Vy, anh Khoa, hay khách của An Phát", C.blue],
    ["Nếu họ làm hỏng, quan hệ Nova – An Phát bị ảnh hưởng thế nào?", "", C.pink],
    ["Nova quản lý bằng gì?", "điều khoản hợp đồng, checklist, người phụ trách, chỉ số, đánh giá sau sự kiện", C.green],
  ];
  qs.forEach(([q, d, c], i) => {
    const y = 2.0 + i * 1.15;
    card(s, M, y, CW, 1.0, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.16, 0.68, c, String(i + 1));
    T(s, d ? [{ text: q, options: { bold: true, fontSize: 19, breakLine: true } }, { text: d, options: { fontSize: 13, color: C.muted } }] : [{ text: q, options: { bold: true, fontSize: 19 } }],
      { x: M + 1.1, y, w: CW - 1.3, h: 1.0, valign: "middle" });
  });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s103", "Thực hành 2 · Phân bổ nhà cung cấp vào giai đoạn mua và sau mua", {
    source: "Phiếu W10_activity_S6_phan_bo_nha_cung_cap.md · Tình huống giả định.",
    notes: "S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 lập bảng · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt.\nMặc định: khách sạn B. Nhà cung cấp: AV – livestream, in ấn – backdrop, xe đưa đón VIP, nhiếp ảnh – quay phim, lễ tân thời vụ, quà tặng.\nKhi xoay trạm, nhóm đóng vai anh Khoa (ngân sách – mua sắm): 🟨 1 câu hỏi, 🟥 1 lo ngại về chi phí, hồ sơ, thanh toán hoặc trách nhiệm khi có sự cố.\nKhi chốt: ghi các câu hỏi “anh Khoa” lặp lại nhiều nhất lên bảng. Có nhóm nào quên giai đoạn sau mua không?",
  });
  T(s, "≥ 5 nhà cung cấp (bắt buộc khách sạn + AV) · ≥ 2 dòng ở giai đoạn sau mua · đánh dấu ⚠️ dòng rủi ro nhất", { x: M, y: 1.9, w: CW, h: 0.45, fontSize: 13, color: C.muted });
  const heads = [["Nhà cung cấp", C.orange], ["Giai đoạn", C.purple], ["Điểm chạm với An Phát", C.blue], ["Ai của An Phát thấy", C.pink], ["Hỏng thì ảnh hưởng gì", C.green], ["Nova quản lý bằng gì", C.purple]];
  const hw = (CW - 5 * 0.1) / 6;
  heads.forEach(([h, c], i) => {
    const x = M + i * (hw + 0.1);
    pill(s, x, 2.5, hw, 0.7, c, h, { text: { fontSize: 12 } });
    ["Khách sạn", "AV – livestream", "…"].forEach((st, j) => {
      card(s, x, 3.35 + j * 0.5, hw, 0.42, i === 0 ? C.band : C.white, C.line);
      if (i === 0) T(s, st, { x: x + 0.1, y: 3.35 + j * 0.5, w: hw - 0.2, h: 0.42, fontSize: 12, bold: true, valign: "middle", align: "center" });
      if (i === 1 && j < 2) T(s, j ? "mua / sau mua" : "mua", { x: x + 0.1, y: 3.35 + j * 0.5, w: hw - 0.2, h: 0.42, fontSize: 11, color: C.muted, valign: "middle", align: "center" });
    });
  });
  const steps = [["15’", "Lập bảng phân bổ trên A1", C.orange], ["2×4’", "Xoay trạm: vai anh Khoa — 🟨 1 câu hỏi, 🟥 1 lo ngại", C.pink], ["4’", "Về bàn, sửa một dòng", C.green]];
  const sw = (CW - 0.6) / 3;
  steps.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 5.0, 0.85, c, t, null, t.length > 3 ? 13 : 17);
    T(s, d, { x: x + 1.0, y: 4.9, w: sw - 1.0, h: 1.05, fontSize: 13, valign: "middle" });
  });
  card(s, M, 6.1, CW, 0.6, C.tYellow, C.yellow);
  T(s, "Dùng bốn câu hỏi phân bổ (slide trước) cho mọi dòng.", { x: M + 0.3, y: 6.1, w: CW - 0.6, h: 0.6, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── 23 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 10", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang “nhà cung cấp và địa điểm”: hạng mục chính, phương thức mua, 3 tiêu chí chọn, bảng phân bổ theo giai đoạn của Key Account. Làm dần trên lớp, không giao về nhà.",
  });
  const pts = [
    ["10.1", "Chọn phương thức mua theo hạng mục (RFQ cho thông số rõ, RFP cho giải pháp). RFP tốt mang Key Account và khách của họ vào. Chấm có trọng số: value for money, công bằng, có dấu vết, phản hồi bên trượt.", C.purple, C.tPurple],
    ["10.2", "Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp. Site check là đi để hỏi: độc quyền, giờ dựng, lịch trước – sau, diện tích dùng được.", C.blue, C.tBlue],
    ["10.3", "Nhà cung cấp là điểm chạm do đối tác sở hữu trên hành trình mua của Key Account — quản lý họ ở cả giai đoạn mua và sau mua.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.3;
    card(s, M, y, CW, 1.15, t, c);
    badge(s, M + 0.2, y + 0.12, 0.9, c, k, C.white, 20);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.15, fontSize: 15, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.75, C.tYellow, C.yellow);
  T(s, [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "thêm trang “nhà cung cấp và địa điểm” — hạng mục, phương thức mua, 3 tiêu chí, bảng phân bổ." }],
    { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.75, fontSize: 14, valign: "middle" });
}

// ───────────────────────── 24 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) RFQ cho hạng mục thông số rõ, nhiều nhà cung cấp; RFP cho hạng mục cần giải pháp, có tiêu chí ngoài giá; (b) câu hỏi site check cụ thể (độc quyền, giờ dựng, diện tích dùng được, lịch trước – sau), không chung chung; (c) nối được với Key Account, không chỉ với Nova.\nCâu nối Buổi 11: “Hôm nay ta chọn và quản lý những đối tác làm ra sự kiện. Buổi sau là những đối tác kể lại sự kiện: báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account.”",
  });
  const qs = [
    ["1", "Với sự kiện trong dự án cũ của nhóm bạn, nêu 1 hạng mục bạn sẽ mua bằng RFQ và 1 hạng mục bằng RFP. Vì sao khác nhau?", C.purple],
    ["2", "Một câu hỏi site check bạn sẽ không bao giờ quên hỏi. Câu đó bảo vệ Key Account thế nào?", C.blue],
  ];
  qs.forEach(([n, q, c], i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, [{ text: "Buổi 11: ", options: { bold: true } }, { text: "những đối tác kể lại sự kiện — báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account." }],
    { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["V01", "Chartered Institute of Procurement & Supply. (n.d.). What is procurement?"],
  ["V02", "Chartered Institute of Procurement & Supply. (n.d.). Tender evaluation."],
  ["V03", "Chartered Institute of Procurement & Supply. (n.d.). Supplier evaluation."],
  ["V04", "Dickson, G. W. (1966). An analysis of vendor selection systems and decisions. Journal of Purchasing, 2(1), 5–17. · Weber, C. A., Current, J. R., & Benton, W. C. (1991). Vendor selection criteria and methods. EJOR, 50(1), 2–18. · Ho, W., Xu, X., & Dey, P. K. (2010). EJOR, 202(1), 16–24."],
  ["V05", "Events Industry Council. (n.d.). APEX RFP templates; APEX post-event report [Mẫu]."],
  ["V06", "Cvent. (n.d.). Event statistics. · BizBash. (n.d.). Cvent’s 2025 planner sourcing report."],
  ["V07", "BizBash. (n.d.). Site inspection checklist: 11 things event planners should never forget to ask."],
  ["V08", "Social Tables. (n.d.). Capacity party space calculator."],
  ["V09", "Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96."],
  ["V10", "Tuổi Trẻ Online. (2024, November 11); Thanh Niên (2025); Thể thao & Văn hóa (2025); Dân trí (2025) — bài về sân Mỹ Đình và concert."],
  ["V11", "Tiền Phong. (2026, July 13). Ban tổ chức concert Những thành phố mơ màng xin lỗi."],
];
[REFS.slice(0, 6), REFS.slice(6)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-10_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn V01–V11 ghi ở chân slide. V12 (trung tâm hội nghị có thông số vênh nhau) cố ý không liệt kê vì GV quyết định không nêu tên địa điểm. Năm bài BizBash (V07) và tiêu đề báo V10 còn chờ [VERIFY].",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.72;
    T(s, k, { x: M, y, w: 0.7, h: 0.62, fontSize: 11, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.62, fontSize: 11, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W10_Supplier_Venue.pptx" }).then((f) => console.log("wrote", f));
