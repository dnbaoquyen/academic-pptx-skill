// Buổi 12 — EVM1110E · Leverage & Resolving Network Conflicts
// Deck generated from courses/EVM1110E/lessons/W12_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W12_Network_Conflicts.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 12: Leverage & Resolving Network Conflicts";
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
  { key: "s121", label: "12.1 Leverage & minh bạch", c: C.purple },
  { key: "s122", label: "12.2 Xung đột lợi ích", c: C.blue },
  { key: "s123", label: "Khi có sự cố", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a small star network — Key Account in the middle, three partners around
function glyph(slide, x, y, s) {
  const cx = x + s / 2, cy = y + s / 2, r = s * 0.38, d = s * 0.26;
  [[C.purple, -90], [C.blue, 30], [C.pink, 150]].forEach(([c, a]) => {
    const nx = cx + r * Math.cos(a * Math.PI / 180), ny = cy + r * Math.sin(a * Math.PI / 180);
    line(slide, cx, cy, nx, ny, c, 1.25);
    slide.addShape(pres.shapes.OVAL, { x: nx - d / 2, y: ny - d / 2, w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } });
  });
  slide.addShape(pres.shapes.OVAL, { x: cx - d * 0.6, y: cy - d * 0.6, w: d * 1.2, h: d * 1.2, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
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
  T(s, `EVM1110E · Buổi 12   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
function network(s, cx, cy, R, nodes, o = {}) {
  nodes.forEach(([label, c, ang], i) => {
    const a = (ang * Math.PI) / 180, nx = cx + R * Math.cos(a), ny = cy + R * Math.sin(a);
    line(s, cx, cy, nx, ny, c, o.lw || 3);
    const d = o.nodeD || 0.9;
    s.addShape(pres.shapes.OVAL, { x: nx - d / 2, y: ny - d / 2, w: d, h: d, fill: { color: c }, line: { color: c, width: 0 } });
    if (label) T(s, label, { x: nx - 1.2, y: ang < 0 ? ny - d / 2 - 0.45 : ny + d / 2 + 0.05, w: 2.4, h: 0.4, fontSize: o.size || 12, bold: true, align: "center" });
  });
  const cd = o.centerD || 1.4;
  s.addShape(pres.shapes.OVAL, { x: cx - cd / 2, y: cy - cd / 2, w: cd, h: cd, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  if (o.center) T(s, o.center, { x: cx - cd / 2, y: cy - cd / 2, w: cd, h: cd, fontSize: o.centerSize || 14, bold: true, align: "center", valign: "middle" });
}
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  network(s, 9.95, 3.75, 2.0, [["Nhà tài trợ", C.purple, -90], ["Nhà cung cấp – địa điểm", C.blue, 30], ["Báo chí – KOL", C.pink, 150]], { center: "Key Account", nodeD: 1.0, centerD: 1.6 });
  // a broken link hint
  s.addShape(pres.shapes.OVAL, { x: 12.3, y: 1.0, w: 0.35, h: 0.35, fill: { color: C.green }, line: { color: C.green, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 7.8, y: 6.0, w: 0.35, h: 0.35, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  pill(s, M, 1.0, 3.1, 0.46, C.yellow, "EVM1110E  ·  Buổi 12 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Leverage & Resolving Network Conflicts", { x: M, y: 3.75, w: 6.6, h: 0.9, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Phần 3 · buổi 4/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: [Tên giảng viên]" },
  ], { x: M, y: 5.0, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Buổi này khép Phần 3. Điền tên giảng viên trước khi dạy.\nAlt-text: sơ đồ hình sao — Key Account ở giữa, ba nhánh nối tới nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Một mạng lưới vỡ ở một mối nối là vỡ cả", {
    source: "Y09: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026); Dân trí (31/12/2025). Vụ việc đang được xử lý theo pháp luật.",
    notes: "S1 — Khởi động (5 phút). Đọc: “Tối 28/12/2025, Hà Nội. Khán giả đã vào Cung thi đấu, sân khấu và âm thanh ánh sáng đã dựng xong. Nhưng 40 nghệ sĩ không lên sân khấu. Báo chí đưa tin nguyên nhân là tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất.”\nKhông dùng ảnh chân dung, không nêu tên cá nhân, không quy lỗi cá nhân.\nGiơ tay A/B/C/D. Chốt: “Ta không phán xử ai — vụ việc đang được xử lý theo pháp luật. Nhưng hãy nhìn: địa điểm, âm thanh ánh sáng, khán giả — những bên không tranh chấp — đều chịu thiệt. Một mạng lưới vỡ ở một mối nối là vỡ cả.”",
  });
  card(s, M, 2.05, 5.4, 4.5, C.tPink, C.pink);
  T(s, "“Về đây bốn cánh chim trời” · Hà Nội · 28/12/2025", { x: M + 0.3, y: 2.2, w: 4.8, h: 0.7, fontSize: 14, bold: true, color: C.dPink, valign: "top" });
  T(s, "40", { x: M + 0.3, y: 2.9, w: 4.8, h: 1.1, fontSize: 60, bold: true, color: C.dPink });
  T(s, "nghệ sĩ không lên sân khấu dù khán giả đã vào, sân khấu và âm thanh ánh sáng đã dựng xong.", { x: M + 0.3, y: 4.0, w: 4.8, h: 1.2, fontSize: 15, valign: "top" });
  T(s, "Báo chí đưa tin: tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất.", { x: M + 0.3, y: 5.3, w: 4.8, h: 1.0, fontSize: 13, italic: true, color: C.muted, valign: "top" });
  const opts = [["A", "Nhà tổ chức", C.orange], ["B", "Nghệ sĩ", C.blue], ["C", "Cả hai", C.green], ["D", "Khoảng trống giữa các bên", C.purple]];
  const ox = M + 5.8, ow = CW - 5.8;
  T(s, "Vấn đề nằm ở đâu?", { x: ox, y: 2.05, w: ow, h: 0.5, fontSize: 17, bold: true });
  opts.forEach(([l, t, c], i) => {
    const y = 2.65 + i * 0.98;
    card(s, ox, y, ow, 0.84, C.white, C.line);
    badge(s, ox + 0.2, y + 0.12, 0.6, c, l);
    T(s, t, { x: ox + 1.0, y, w: ow - 1.2, h: 0.84, fontSize: 18, valign: "middle" });
  });
}

// ───────────────────────── 3 — network ─────────────────────────
{
  const s = base("s121", "Sau Buổi 9–11, An Phát đứng giữa một mạng lưới", {
    notes: "Nói: “Buổi 9, 10, 11 ta học từng bên. Hôm nay ta nhìn cả mạng lưới: các bên này cũng quan hệ với nhau, và có lúc lợi ích của họ va nhau.” Nova nằm ở mọi mối nối.\nAlt-text: sơ đồ hình sao ba nhánh — An Phát ở giữa; nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL ở ba đầu; Nova nằm trên từng nhánh nối.",
  });
  const cx = 4.1, cy = 4.4;
  const nodes = [["Nhà tài trợ", "Bình An, GlobalCard · Buổi 9", C.purple, C.tPurple, -90], ["Nhà cung cấp – địa điểm", "khách sạn, AV, nhà in, xe · Buổi 10", C.blue, C.tBlue, 40], ["Báo chí – KOL", "nhà báo, TS. Nam, chị Mai Anh · Buổi 11", C.pink, C.tPink, 140]];
  const Rx = 2.6, Ry = 1.9;
  nodes.forEach(([h, d, c, f, ang]) => {
    const a = (ang * Math.PI) / 180, nx = cx + Rx * Math.cos(a), ny = cy + Ry * Math.sin(a);
    line(s, cx, cy, nx, ny, c, 3);
    const k = ang < 0 ? 0.55 : 0.47, mx = cx + Rx * k * Math.cos(a), my = cy + Ry * k * Math.sin(a);
    pill(s, mx - 0.45, my - 0.18, 0.9, 0.36, C.orange, "Nova", { text: { fontSize: 11 } });
    card(s, nx - 1.35, ny - 0.5, 2.7, 1.0, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 10, color: C.muted } }], { x: nx - 1.25, y: ny - 0.5, w: 2.5, h: 1.0, fontSize: 13, align: "center", valign: "middle" });
  });
  s.addShape(pres.shapes.OVAL, { x: cx - 0.8, y: cy - 0.55, w: 1.6, h: 1.1, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, "An Phát", { x: cx - 0.8, y: cy - 0.55, w: 1.6, h: 1.1, fontSize: 16, bold: true, align: "center", valign: "middle" });
  const rx = M + 7.6, rw = CW - 7.6;
  card(s, rx, 2.2, rw, 1.6, C.white, C.line);
  T(s, [{ text: "Buổi 9–11: ", options: { bold: true } }, { text: "học từng bên một." }], { x: rx + 0.3, y: 2.2, w: rw - 0.6, h: 1.6, fontSize: 17, valign: "middle" });
  card(s, rx, 4.05, rw, 2.2, C.tYellow, C.yellow);
  T(s, [{ text: "Buổi 12: ", options: { bold: true } }, { text: "nhìn cả mạng lưới — các bên cũng quan hệ với nhau, và có lúc lợi ích va nhau. Nova ở mọi mối nối." }], { x: rx + 0.3, y: 4.05, w: rw - 0.6, h: 2.2, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 4 — relational view ─────────────────────────
{
  const s = base("s121", "Giá trị của agency một phần nằm trong quan hệ", {
    source: "Y01: Dyer & Singh (1998), Academy of Management Review · Y02: Morgan & Hunt (1994), Journal of Marketing — mới đọc tóm tắt.",
    notes: "Dyer & Singh (1998): nguồn lực then chốt của doanh nghiệp có thể vượt ra ngoài ranh giới doanh nghiệp, nằm trong quan hệ giữa các doanh nghiệp.\nMorgan & Hunt (1994): quan hệ thành công đòi hỏi cam kết và niềm tin.\n[VERIFY: toàn văn Y01, Y02 chưa đọc — chỉ dùng nội dung tóm tắt]",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.05, cw, 3.3, C.tPurple, C.purple);
  T(s, "Dyer & Singh (1998) · relational view", { x: M + 0.35, y: 2.2, w: cw - 0.7, h: 0.45, fontSize: 14, bold: true, color: C.purple });
  T(s, "Nguồn lực then chốt có thể nằm ngoài ranh giới doanh nghiệp — trong quan hệ giữa các doanh nghiệp.", { x: M + 0.35, y: 2.75, w: cw - 0.7, h: 2.4, fontSize: 21, bold: true, valign: "top" });
  card(s, M + cw + 0.3, 2.05, cw, 3.3, C.tBlue, C.blue);
  T(s, "Morgan & Hunt (1994) · commitment–trust", { x: M + cw + 0.65, y: 2.2, w: cw - 0.7, h: 0.45, fontSize: 14, bold: true, color: C.dBlue });
  pill(s, M + cw + 0.65, 3.05, 2.4, 0.8, C.purple, "Cam kết", { text: { fontSize: 18 } });
  T(s, "+", { x: M + cw + 3.1, y: 3.05, w: 0.6, h: 0.8, fontSize: 28, bold: true, align: "center", valign: "middle" });
  pill(s, M + cw + 3.75, 3.05, 2.4, 0.8, C.blue, "Niềm tin", { text: { fontSize: 18 } });
  T(s, "→ quan hệ thành công", { x: M + cw + 0.65, y: 4.15, w: cw - 0.7, h: 0.6, fontSize: 18, bold: true });
  card(s, M, 5.65, CW, 0.9, C.tYellow, C.yellow);
  T(s, "Leverage không phải “ép” đối tác — là làm được cho An Phát những việc agency khác không làm được, nhờ quan hệ lâu năm.", { x: M + 0.35, y: 5.65, w: CW - 0.7, h: 0.9, fontSize: 15, bold: true, valign: "middle" });
}

// ───────────────────────── 5 — four rents ─────────────────────────
{
  const s = base("s121", "Bốn nguồn relational rents của Nova", {
    source: "Bốn nguồn: Dyer & Singh (1998), Y01 · ví dụ với Nova: nhận định của người soạn.",
    notes: "Relational rents: lợi nhuận/giá trị vượt trội chỉ tạo ra được nhờ quan hệ giữa các bên.\nHiểu lầm: “Quan hệ lâu năm thì không cần hợp đồng chặt” → quản trị hiệu quả là một nguồn giá trị của quan hệ; hợp đồng rõ giúp quan hệ bền hơn.",
  });
  const rows = [["Tài sản đặc thù cho quan hệ", "relation-specific assets", "Nova thuộc sơ đồ, quy trình bếp, giờ dựng của khách sạn quen", C.purple, C.tPurple],
    ["Thói quen chia sẻ tri thức", "knowledge-sharing routines", "Họp rút kinh nghiệm chung với nhà cung cấp sau mỗi sự kiện", C.blue, C.tBlue],
    ["Nguồn lực bổ trợ", "complementary resources", "Đơn vị livestream quen + AV khách sạn làm được việc mà mỗi bên không làm một mình", C.orange, C.tOrange],
    ["Quản trị hiệu quả", "effective governance", "Hợp đồng khung, cam kết dài hạn, cơ chế xử lý tranh chấp đã thống nhất", C.green, C.tGreen]];
  rows.forEach(([h, e, d, c, f], i) => {
    const y = 2.0 + i * 1.15;
    card(s, M, y, CW, 1.0, f, c);
    badge(s, M + 0.2, y + 0.18, 0.64, c, String(i + 1));
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: e, options: { italic: true, fontSize: 11, color: C.muted } }], { x: M + 1.05, y, w: 4.0, h: 1.0, fontSize: 16, valign: "middle" });
    T(s, d, { x: M + 5.2, y, w: CW - 5.4, h: 1.0, fontSize: 14, valign: "middle" });
  });
  T(s, "Ví dụ trong mạng lưới của Nova", { x: M + 5.2, y: 6.6, w: 5, h: 0.3, fontSize: 11, italic: true, color: C.muted });
}

// ───────────────────────── 6 — Techcombank ─────────────────────────
{
  const s = base("s121", "Leverage là giá trị do quan hệ tạo ra, không phải ép đối tác", {
    source: "U08 (Buổi 9): Znews; Tuổi Trẻ (1/2025) · định nghĩa leverage: quyết định GV.",
    notes: "Quyết định GV 3: leverage = giá trị do quan hệ dài hạn trong mạng lưới tạo ra.\nVí dụ thật (U08): Techcombank từ nhà tài trợ concert năm 2024 trở thành “nhà đồng đầu tư” năm 2025 — quan hệ dài hạn mở ra một cấu trúc hợp tác mới.\nHiểu lầm: “Leverage = dùng thế lớn để ép giá” → đó là quyền lực ngắn hạn.",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.05, cw, 2.6, C.white, C.line);
  T(s, [{ text: "Không phải", options: { fontSize: 14, color: C.muted, breakLine: true } }, { text: "Dùng thế lớn để ép giá", options: { fontSize: 24, bold: true, color: C.muted, breakLine: true } }, { text: "quyền lực ngắn hạn", options: { fontSize: 14, italic: true, color: C.muted } }],
    { x: M + 0.35, y: 2.05, w: cw - 0.7, h: 2.6, valign: "middle", paraSpaceAfter: 4 });
  card(s, M + cw + 0.3, 2.05, cw, 2.6, C.tPurple, C.purple);
  T(s, [{ text: "Leverage của môn", options: { fontSize: 14, color: C.purple, breakLine: true } }, { text: "Giá trị do quan hệ dài hạn tạo ra", options: { fontSize: 24, bold: true, breakLine: true } }, { text: "cho cả hai bên và cho Key Account", options: { fontSize: 14, italic: true } }],
    { x: M + cw + 0.65, y: 2.05, w: cw - 0.7, h: 2.6, valign: "middle", paraSpaceAfter: 4 });
  T(s, "Ví dụ thật — Techcombank (Buổi 9)", { x: M, y: 4.9, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
  pill(s, M, 5.45, 3.6, 0.8, C.purple, "2024 · nhà tài trợ kim cương", { text: { fontSize: 14 } });
  arrow(s, M + 3.75, 5.85, M + 4.9, 5.85, C.ink, 3);
  pill(s, M + 5.05, 5.45, 3.6, 0.8, C.blue, "2025 · “nhà đồng đầu tư”", { text: { fontSize: 14 } });
  T(s, "quan hệ dài hạn mở ra một cấu trúc hợp tác mới", { x: M + 8.85, y: 5.45, w: CW - 8.85, h: 0.8, fontSize: 13, italic: true, valign: "middle" });
}

// ───────────────────────── 7 — Mohr & Spekman ─────────────────────────
{
  const s = base("s121", "Đối tác thành công giao tiếp tốt và cùng giải quyết vấn đề", {
    source: "Y03: Mohr & Spekman (1994), Strategic Management Journal.",
    notes: "Mohr & Spekman (1994): đặc điểm của quan hệ đối tác thành công gồm cam kết, phối hợp, niềm tin; chất lượng giao tiếp và sự tham gia; và giải quyết xung đột bằng cùng giải quyết vấn đề (joint problem solving).\n[VERIFY: các kỹ thuật giải quyết xung đột khác trong Mohr & Spekman — mới đọc tóm tắt]",
  });
  const g = [["Thuộc tính quan hệ", ["Cam kết", "Phối hợp", "Niềm tin"], C.purple, C.tPurple], ["Hành vi giao tiếp", ["Chất lượng giao tiếp", "Sự tham gia"], C.blue, C.tBlue], ["Giải quyết xung đột", ["Cùng giải quyết vấn đề (joint problem solving)"], C.green, C.tGreen]];
  const cw = (CW - 0.6) / 3;
  g.forEach(([h, items, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 4.5, f, c);
    T(s, h, { x: x + 0.3, y: 2.2, w: cw - 0.6, h: 0.55, fontSize: 18, bold: true, color: c === C.blue ? C.dBlue : c === C.green ? C.dGreen : c });
    items.forEach((t, j) => {
      const y = 2.95 + j * 1.05;
      card(s, x + 0.3, y, cw - 0.6, 0.85, C.white, c);
      T(s, t, { x: x + 0.45, y, w: cw - 0.9, h: 0.85, fontSize: 15, bold: true, valign: "middle" });
    });
  });
}

// ───────────────────────── 8 — bullwhip ─────────────────────────
{
  const s = base("s121", "Mỗi lần truyền miệng là một lần lệch", {
    source: "Y06: Lee, Padmanabhan & Whang (1997), Management Science — dùng như ẨN DỤ, không phải nghiên cứu về sự kiện.",
    notes: "Ẩn dụ — hiệu ứng roi da (bullwhip, quyết định GV 7): trong chuỗi cung ứng, thông tin truyền qua từng mắt xích bị bóp méo, càng xa càng lệch. Ghi rõ đây là ẩn dụ.\nYêu cầu của anh Minh → Nova → khách sạn → bếp; → đơn vị AV → kỹ thuật viên.\nBỏ slide này nếu trễ giờ.\nAlt-text: chuỗi bốn ô nối mũi tên; đường tín hiệu dưới mỗi ô to dần, cho thấy thông tin lệch dần.",
  });
  pill(s, W - M - 2.0, 1.95, 2.0, 0.45, C.yellow, "ẨN DỤ", { text: { fontSize: 13 } });
  const ch = [["Anh Minh", "yêu cầu gốc", C.purple], ["Nova", "chuyển lời", C.orange], ["Khách sạn", "chuyển lời", C.blue], ["Bếp", "làm theo", C.pink]];
  const cw = 2.55, gap = 0.6;
  ch.forEach(([h, d, c], i) => {
    const x = M + i * (cw + gap);
    card(s, x, 2.6, cw, 1.2, C.white, c, 1.5);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 12, color: C.muted } }], { x: x + 0.15, y: 2.6, w: cw - 0.3, h: 1.2, fontSize: 18, align: "center", valign: "middle" });
    if (i < 3) arrow(s, x + cw + 0.08, 3.2, x + cw + gap - 0.08, 3.2, C.ink, 2.5);
    const amp = 0.12 + i * 0.28;
    // zig-zag signal growing
    const pts = 6, sx = x + 0.15, sw = (cw - 0.3) / pts, sy = 4.7;
    for (let k = 0; k < pts; k++) line(s, sx + k * sw, sy + (k % 2 ? amp : -amp), sx + (k + 1) * sw, sy + (k % 2 ? -amp : amp), c, 2.5);
  });
  T(s, "tín hiệu lệch dần qua từng mắt xích", { x: M, y: 5.65, w: CW, h: 0.4, fontSize: 13, italic: true, color: C.muted, align: "center" });
  card(s, M, 6.05, CW, 0.6, C.tYellow, C.yellow);
  T(s, "→ Cần một tài liệu mà mọi bên cùng đọc (slide sau).", { x: M + 0.3, y: 6.05, w: CW - 0.6, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 9 — lack of transparency ─────────────────────────
{
  const s = base("s121", "Thiếu minh bạch thì những bên không tranh chấp cũng chịu thiệt", {
    source: "Y09: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026) — ý kiến luật sư là một ý kiến chuyên gia, chưa kiểm chứng chéo.",
    notes: "Theo báo chí: một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn nhiều lần; một nhạc sĩ trả lại cát-sê trước 4 ngày khi thấy “dấu hiệu không ổn” (Báo Văn hóa, 3/1/2026). Sau đó, người đại diện đơn vị tổ chức bị khởi tố; một luật sư nhận xét thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện (Nhân Dân, 23/1/2026).\nKhông nêu tên cá nhân, không quy lỗi cá nhân.\nHỏi: “Nếu Nova là agency của một nhà tài trợ show này, tín hiệu cảnh báo nào Nova có thể thấy trước?” — gợi ý: hợp đồng với nghệ sĩ chưa ký sát ngày; lịch thanh toán không rõ; các bên không nói chuyện với nhau.",
  });
  T(s, "Tín hiệu cảnh báo — theo báo chí đưa tin", { x: M, y: 1.95, w: CW, h: 0.45, fontSize: 15, bold: true, color: C.dPink });
  const sig = [["Hợp đồng chưa ký", "sát ngày diễn", C.orange], ["Thanh toán chưa rõ", "chưa nhận, được hẹn nhiều lần", C.pink], ["Có người rút sớm", "một nhạc sĩ trả lại cát-sê trước 4 ngày", C.purple]];
  const cw = (CW - 0.6) / 3;
  sig.forEach(([h, d, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.5, cw, 1.9, C.white, c, 1.5);
    s.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: x + 0.25, y: 2.65, w: 0.55, h: 0.48, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, "!", { x: x + 0.25, y: 2.72, w: 0.55, h: 0.41, fontSize: 15, bold: true, color: dark(c), align: "center", valign: "middle" });
    T(s, h, { x: x + 0.25, y: 3.2, w: cw - 0.5, h: 0.5, fontSize: 18, bold: true });
    T(s, d, { x: x + 0.25, y: 3.7, w: cw - 0.5, h: 0.6, fontSize: 13, color: C.muted, valign: "top" });
  });
  card(s, M, 4.7, 6.6, 1.85, C.tPink, C.pink);
  T(s, [{ text: "Bên không tranh chấp cũng chịu thiệt: ", options: { bold: true } }, { text: "địa điểm, âm thanh ánh sáng, khán giả." }], { x: M + 0.3, y: 4.7, w: 6.0, h: 1.85, fontSize: 17, valign: "middle" });
  card(s, M + 6.9, 4.7, CW - 6.9, 1.85, C.white, C.line);
  T(s, [{ text: "Ý kiến một luật sư: ", options: { bold: true } }, { text: "thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện." }, { text: "  chưa KCC", options: { fontSize: 11, color: C.muted } }],
    { x: M + 7.2, y: 4.7, w: CW - 7.5, h: 1.85, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 10 — ESG ─────────────────────────
{
  const s = base("s121", "Minh bạch là mọi bên đọc cùng một phiên bản đúng", {
    source: "Y07: Convention Industry Council (2005), APEX Event Specifications Guide template.",
    notes: "ESG: “the document used by an event organizer to convey information clearly and accurately to appropriate venue(s) and/or suppliers regarding all requirements for an event”.\nTrường bắt buộc có ngày sửa đổi, đầu mối chính, họp trước sự kiện và họp sau sự kiện.\n[VERIFY: APEX ESG có bản mới hơn bản 2005 không]\nNói: “Minh bạch không phải ‘kể hết cho mọi người’. Minh bạch là mọi bên cùng đọc một phiên bản đúng, biết ai đổi gì, khi nào.”",
  });
  T(s, "APEX Event Specifications Guide (ESG) — ba phần", { x: M, y: 1.95, w: CW, h: 0.45, fontSize: 15, bold: true, color: C.purple });
  const parts = [["Narrative", "tổng quan sự kiện", C.purple, C.tPurple], ["Function Schedule", "lịch từng hoạt động", C.blue, C.tBlue], ["Function Set-up Order", "yêu cầu cho từng hoạt động", C.orange, C.tOrange]];
  const cw = (CW - 0.6) / 3;
  parts.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.5, cw, 1.4, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, fontSize: 19, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: x + 0.3, y: 2.5, w: cw - 0.6, h: 1.4, valign: "middle" });
  });
  T(s, "Trường bắt buộc giữ mọi bên cùng một phiên bản:", { x: M, y: 4.15, w: CW, h: 0.4, fontSize: 14, bold: true });
  ["Ngày sửa đổi", "Đầu mối chính", "Họp trước sự kiện", "Họp sau sự kiện"].forEach((t, i) => {
    const pw = (CW - 3 * 0.2) / 4;
    pill(s, M + i * (pw + 0.2), 4.6, pw, 0.6, C.white, t, { line: C.purple, color: C.ink, text: { fontSize: 14 } });
  });
  T(s, "Bộ APEX xuyên suốt môn:", { x: M, y: 5.5, w: 2.8, h: 0.8, fontSize: 14, bold: true, valign: "middle" });
  [["RFP", "Buổi 10", C.blue], ["ESG", "Buổi 12", C.purple], ["PER", "Buổi 8", C.green]].forEach(([h, b, c], i) => {
    const x = M + 2.9 + i * 3.1;
    pill(s, x, 5.55, 2.5, 0.7, c, h + " · " + b, { text: { fontSize: 14 } });
    if (i < 2) arrow(s, x + 2.55, 5.9, x + 3.05, 5.9, C.ink, 2.5);
  });
}

// ───────────────────────── 11 — transparent vs confidential ─────────────────────────
{
  const s = base("s121", "Minh bạch về yêu cầu, lịch, thanh toán — bảo mật về khách và giá", {
    source: "Nhận định của người soạn.",
    notes: "Hiểu lầm: “Minh bạch là chia sẻ mọi thứ” → minh bạch về yêu cầu, lịch, thay đổi, thanh toán; bảo mật thông tin khách và giá.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const cw = (CW - 0.3) / 2;
  [["Minh bạch với mạng lưới", ["Yêu cầu của sự kiện", "Lịch, giờ dựng – tháo", "Thay đổi: ai đổi gì, khi nào", "Lịch và điều kiện thanh toán"], C.green, C.tGreen, C.dGreen],
   ["Bảo mật", ["Danh sách, thông tin cá nhân khách của An Phát (trừ phần cần thiết, có đồng ý)", "Giá của nhà cung cấp khác", "Thông tin nội bộ của An Phát"], C.pink, C.tPink, C.dPink]].forEach(([h, items, c, f, dc], i) => {
    const x = M + i * (cw + 0.3);
    pill(s, x, 2.0, cw, 0.6, c, h, { text: { fontSize: 17 } });
    card(s, x, 2.75, cw, 3.8, f, f);
    T(s, bullets(items), { x: x + 0.35, y: 2.95, w: cw - 0.7, h: 3.4, fontSize: 17, valign: "top", paraSpaceAfter: 12 });
  });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s121", "Thực hành 1 · Tuần cuối trước gala: bốn xung đột cùng lúc", {
    source: "Phiếu W12_activity_S3_tuan_cuoi_truoc_gala.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Đồng hồ 7 / 8 / 5 phút.\nDeliverables Nova đã cam kết: trải nghiệm khách VIP không bị làm phiền · livestream ổn định · nhận diện thương hiệu đúng · phiên chuyên đề của TS. Nam · đúng giờ, đúng ngân sách.\nKhi chốt: ghi thứ tự ưu tiên của 6 nhóm lên bảng. Thảo luận: các nhóm có xếp giống nhau không? Xung đột nào không cần báo anh Minh?",
  });
  T(s, "T-5 ngày · chị Thảo (KAMer) nhận bốn tin trong một buổi sáng", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const msgs = [["Bình An", "nhà tài trợ", "Muốn bàn tư vấn cạnh khu tiệc, phát tờ rơi — khác thỏa thuận đã ký", C.purple],
    ["Khách sạn B", "địa điểm", "Tiệc cưới 11/12 kéo dài: giờ dựng lùi 8h → 13h; livestream và bếp tranh khu hậu cần", C.blue],
    ["TS. Nam", "diễn giả chính", "Báo nêu tên ông trong HĐQT một công ty đang bị thanh tra (chưa kết luận)", C.pink],
    ["Nhà in", "đối tác 5 năm", "Trễ backdrop 1 ngày vì file duyệt muộn 2 ngày; xin phụ phí in gấp 15 tr", C.orange]];
  msgs.forEach(([who, role, d, c], i) => {
    const y = 2.45 + i * 0.98;
    card(s, M, y, 7.7, 0.86, C.white, c, 1.25);
    badge(s, M + 0.15, y + 0.18, 0.5, c, String(i + 1), null, 14);
    T(s, [{ text: who, options: { bold: true, breakLine: true } }, { text: role, options: { fontSize: 10, color: C.muted } }], { x: M + 0.8, y, w: 1.9, h: 0.86, fontSize: 14, valign: "middle" });
    T(s, d, { x: M + 2.7, y, w: 4.9, h: 0.86, fontSize: 12, valign: "middle" });
  });
  const steps = [["7’", "Mỗi tin: deliverable nào bị đe dọa · bên đó giữ vai nào · lợi ích thật", C.orange], ["8’", "Xếp ưu tiên; 2 xung đột đầu: giải pháp cùng giải quyết + leo thang đến ai", C.purple], ["5’", "Tin nhắn 3–4 câu gửi anh Minh về một xung đột", C.blue]];
  const rx = M + 8.0, rw = CW - 8.0;
  steps.forEach(([t, d, c], i) => {
    const y = 2.45 + i * 1.32;
    badge(s, rx, y + 0.2, 0.72, c, t, null, 16);
    T(s, d, { x: rx + 0.9, y, w: rw - 0.9, h: 1.15, fontSize: 12, valign: "middle" });
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
  T(s, "EVM1110E · Buổi 12   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── 12 — seven roles ─────────────────────────
{
  const s = base("s122", "Bên liên quan chủ chốt thường giữ nhiều vai", {
    source: "Y04: Getz, Andersson & Larson (2006), Event Management — mới đọc tóm tắt.",
    notes: "Getz, Andersson & Larson (2006) phân vai trò bên liên quan của lễ hội thành bảy vai, và thấy bên liên quan chủ chốt giữ nhiều vai cùng lúc.",
  });
  const roles = [["Cơ quan quản lý", C.purple], ["Bên hỗ trợ", C.blue], ["Đồng sản xuất", C.orange], ["Nhà cung cấp", C.green], ["Cộng tác", C.pink], ["Khán giả", C.purple], ["Bên chịu tác động", C.blue]];
  const cx = W / 2, cy = 4.25, R = 2.05;
  roles.forEach(([t, c], i) => {
    const a = (-90 + i * (360 / 7)) * Math.PI / 180, x = cx + R * 1.55 * Math.cos(a), y = cy + R * Math.sin(a);
    line(s, cx, cy, x, y, c, 1.5, { dash: "dash" });
    pill(s, x - 1.25, y - 0.3, 2.5, 0.6, c, t, { text: { fontSize: 13 } });
  });
  s.addShape(pres.shapes.OVAL, { x: cx - 1.1, y: cy - 0.6, w: 2.2, h: 1.2, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, "Một bên liên quan chủ chốt", { x: cx - 1.05, y: cy - 0.6, w: 2.1, h: 1.2, fontSize: 13, bold: true, align: "center", valign: "middle" });
}

// ───────────────────────── 13 — multi-role conflicts ─────────────────────────
{
  const s = base("s122", "Xung đột lợi ích thường sinh ra từ vai chồng chéo", {
    source: "Ví dụ giả định từ Buổi 9–11 · định nghĩa làm việc của môn (quyết định GV 4).",
    notes: "Định nghĩa làm việc: xung đột lợi ích = khi lợi ích của một bên liên quan bên ngoài — hoặc các vai trò khác nhau của cùng một bên — đi ngược những gì Nova đã cam kết với Key Account.",
  });
  const cols = [{ w: 2.4 }, { w: 2.6, head: "Vai 1", fill: C.purple }, { w: 3.2, head: "Vai 2", fill: C.blue }, { w: CW - 8.2 + 0.1, head: "Xung đột có thể", fill: C.pink }];
  table(s, M, 1.95, cols, [
    ["Khách sạn", "Địa điểm", "Nhà cung cấp AV độc quyền", "Ưu tiên doanh thu AV hơn livestream của An Phát"],
    ["Bảo hiểm Bình An", "Nhà tài trợ", "Đối tác kinh doanh của An Phát", "Muốn bán hàng tại gala ↔ trải nghiệm khách VIP"],
    ["Chị Mai Anh", "Diễn giả", "Khách hàng của An Phát", "Muốn quảng bá công ty mình ↔ nội dung trung lập"],
  ], { rowH: 0.95, size: 15 });
  card(s, M, 5.65, CW, 0.95, C.tYellow, C.yellow);
  T(s, [{ text: "Xung đột lợi ích (định nghĩa của môn): ", options: { bold: true } }, { text: "khi lợi ích của một bên — hoặc các vai khác nhau của cùng một bên — đi ngược điều Nova đã cam kết với Key Account." }],
    { x: M + 0.35, y: 5.65, w: CW - 0.7, h: 0.95, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 14 — political market square ─────────────────────────
{
  const s = base("s122", "Mạng lưới sự kiện là một quảng trường chính trị", {
    source: "Y05: Larson (2002), International Journal of Tourism Research — mới đọc tóm tắt.",
    notes: "Larson (2002): mạng lưới làm marketing cho lễ hội là một political market square với lợi ích, xung đột, quyền lực; các quá trình: gác cổng, đàm phán, xây liên minh, xây niềm tin, xây bản sắc. Bản sắc chung giúp giảm xáo trộn.\nNói: “Xung đột là bình thường.”",
  });
  T(s, "Trong quảng trường có:", { x: M, y: 1.95, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
  [["Lợi ích", C.purple], ["Xung đột", C.pink], ["Quyền lực", C.blue]].forEach(([t, c], i) => {
    const cw = (CW - 0.6) / 3;
    card(s, M + i * (cw + 0.3), 2.45, cw, 1.2, c, c);
    T(s, t, { x: M + i * (cw + 0.3), y: 2.45, w: cw, h: 1.2, fontSize: 26, bold: true, color: C.white, align: "center", valign: "middle" });
  });
  T(s, "Các quá trình diễn ra:", { x: M, y: 3.95, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
  const pr = ["Gác cổng", "Đàm phán", "Xây liên minh", "Xây niềm tin", "Xây bản sắc"];
  const pw = (CW - 4 * 0.2) / 5;
  pr.forEach((t, i) => pill(s, M + i * (pw + 0.2), 4.45, pw, 0.7, i === 4 ? C.green : C.white, t, { line: i === 4 ? C.green : C.line, color: i === 4 ? C.white : C.ink, text: { fontSize: 15 } }));
  card(s, M, 5.5, CW, 1.05, C.tGreen, C.green);
  T(s, [{ text: "Bản sắc chung ", options: { bold: true } }, { text: "giúp giảm xáo trộn — xung đột là bình thường, nhiệm vụ không phải xóa nó." }], { x: M + 0.35, y: 5.5, w: CW - 0.7, h: 1.05, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 15 — shared identity ─────────────────────────
{
  const s = base("s122", "Bản sắc chung của mạng lưới: cùng phục vụ khách của Key Account", {
    source: "V10 (Buổi 10): Tuổi Trẻ Online (11/11/2024) và các báo khác.",
    notes: "Nói: “Nhiệm vụ của Nova không phải xóa xung đột, mà giữ cho mọi bên nhớ bản sắc chung: tất cả đang làm cho 600 khách của An Phát.”\nNhắc nhanh Mỹ Đình: concert 7/12/2024 và lịch thi đấu của đội tuyển — chủ địa điểm, nhà tổ chức concert và VFF có lợi ích trái chiều.",
  });
  card(s, M, 2.05, CW, 2.2, C.tPurple, C.purple);
  T(s, [{ text: "Tất cả đang làm cho", options: { fontSize: 18, color: C.muted, breakLine: true } }, { text: "600 khách của An Phát.", options: { fontSize: 36, bold: true } }],
    { x: M + 0.4, y: 2.05, w: CW - 0.8, h: 2.2, align: "center", valign: "middle" });
  card(s, M, 4.55, CW, 2.0, C.white, C.line);
  T(s, "Nhắc lại Mỹ Đình (Buổi 10)", { x: M + 0.35, y: 4.7, w: CW - 0.7, h: 0.45, fontSize: 14, bold: true, color: C.dBlue });
  T(s, "Concert 7/12/2024 và lịch thi đấu của đội tuyển: chủ địa điểm, nhà tổ chức concert và VFF có lợi ích trái chiều — khi thiếu một bản sắc chung, mỗi bên kéo về phía mình.", { x: M + 0.35, y: 5.15, w: CW - 0.7, h: 1.25, fontSize: 16, valign: "top" });
}

// ───────────────────────── 16 — five steps ─────────────────────────
{
  const s = base("s122", "Năm bước bảo vệ deliverables", {
    source: "Nhận định của người soạn, dựng từ Y03, S12 (Buổi 7) và Mitchell et al. (Buổi 1).",
    notes: "Để chiếu suốt S6.\n1 Deliverable nào bị đe dọa? (livestream về 80 chi nhánh, trải nghiệm khách VIP, nhận diện thương hiệu, lịch…) — bắt đầu từ cam kết với Key Account, không từ bên đang to tiếng nhất.\n2 Ai liên quan, giữ vai gì, nổi bật đến đâu? (quyền lực – tính chính đáng – tính cấp bách: Mitchell, Agle & Wood, Buổi 1).\n3 Lợi ích đằng sau lập trường? (đàm phán tích hợp, Buổi 7): Bình An đòi bàn tư vấn cạnh khu tiệc, nhưng thứ họ cần là khách hẹn gặp.\n4 Cùng giải quyết; nếu không được, leo thang theo thứ tự đã thống nhất (người phụ trách → lãnh đạo Nova → Key Account).\n5 Thông báo minh bạch cho Key Account và cập nhật ESG cho mọi bên.\nHiểu lầm: “Giải quyết xung đột = chọn bên đúng” → bảo vệ deliverable của Key Account; thường giải pháp tốt đáp ứng lợi ích của cả hai bên.\nAlt-text: năm bậc thang đi lên.",
  });
  const st = [["Deliverable nào bị đe dọa?", "bắt đầu từ cam kết với Key Account", C.orange, C.tOrange],
    ["Ai liên quan, vai gì, nổi bật đến đâu?", "quyền lực · chính đáng · cấp bách (Buổi 1)", C.purple, C.tPurple],
    ["Lợi ích đằng sau lập trường?", "đàm phán tích hợp (Buổi 7)", C.blue, C.tBlue],
    ["Cùng giải quyết — không được thì leo thang", "người phụ trách → lãnh đạo Nova → Key Account", C.pink, C.tPink],
    ["Báo Key Account + cập nhật ESG", "cho mọi bên cùng một phiên bản", C.green, C.tGreen]];
  st.forEach(([h, d, c, f], i) => {
    const x = M + i * 0.62, y = 5.85 - i * 0.95, w = CW - i * 0.62;
    card(s, x, y, w, 0.82, f, c);
    badge(s, x + 0.12, y + 0.12, 0.58, c, String(i + 1));
    T(s, [{ text: h, options: { bold: true } }, { text: "   " + d, options: { fontSize: 12, color: C.muted } }], { x: x + 0.85, y, w: w - 1.0, h: 0.82, fontSize: 16, valign: "middle" });
  });
}

// ───────────────────────── 17 — tell the key account ─────────────────────────
{
  const s = base("s122", "Giấu khách hàng là cách mất niềm tin nhanh nhất", {
    source: "Y02: Morgan & Hunt (1994) · Y03: Mohr & Spekman (1994) · cấu trúc tin nhắn: phiếu Thực hành 1.",
    notes: "Hiểu lầm: “Không nói với khách hàng để khỏi mất điểm” → Key Account phát hiện muộn còn mất niềm tin hơn.\nCâu hỏi Mỹ Đình: “Ở bước 5, ai phải biết sớm nhất?”",
  });
  T(s, "Tin nhắn gửi Key Account — bốn ý", { x: M, y: 1.95, w: CW, h: 0.45, fontSize: 15, bold: true });
  const parts = [["Chuyện gì xảy ra", C.orange, C.tOrange], ["Ảnh hưởng đến deliverable nào", C.purple, C.tPurple], ["Nova đề xuất gì", C.blue, C.tBlue], ["Cần anh Minh quyết gì", C.green, C.tGreen]];
  const cw = (CW - 3 * 0.45) / 4;
  parts.forEach(([t, c, f], i) => {
    const x = M + i * (cw + 0.45);
    card(s, x, 2.5, cw, 2.1, f, c, 1.5);
    badge(s, x + 0.25, 2.7, 0.65, c, String(i + 1));
    T(s, t, { x: x + 0.25, y: 3.5, w: cw - 0.5, h: 1.0, fontSize: 17, bold: true, valign: "top" });
    if (i < 3) arrow(s, x + cw + 0.05, 3.55, x + cw + 0.4, 3.55, C.ink, 2.5);
  });
  card(s, M, 4.95, CW, 1.6, C.tPink, C.pink);
  T(s, [{ text: "Key Account phát hiện muộn ", options: { bold: true } }, { text: "còn mất niềm tin hơn là nghe tin xấu sớm — cam kết và niềm tin là nền của quan hệ (Morgan & Hunt)." }],
    { x: M + 0.35, y: 4.95, w: CW - 0.7, h: 1.6, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 18 — SCCT ─────────────────────────
{
  const s = base("s123", "Trách nhiệm quy cho ai quyết định cách phản hồi", {
    source: "Y08: Coombs (2007), Corporate Reputation Review — SCCT.",
    notes: "Coombs (2007): mức đe dọa danh tiếng phụ thuộc trách nhiệm ban đầu bên liên quan quy cho tổ chức, lịch sử khủng hoảng, danh tiếng quan hệ trước đó.\nPhạm vi: chỉ ở mức phối hợp bên liên quan; xử lý khủng hoảng chi tiết thuộc môn khác.",
  });
  const cl = [["Nạn nhân", "victim", "Rất thấp", "Tin đồn, thiên tai", C.green, C.tGreen, 1.2], ["Tai nạn", "accidental", "Thấp", "Lỗi kỹ thuật", C.orange, C.tOrange, 2.1], ["Có thể ngăn ngừa", "preventable", "Rất cao", "Lỗi con người, sai phạm", C.pink, C.tPink, 3.0]];
  const cw = (CW - 0.6) / 3;
  cl.forEach(([h, e, r, ex, c, f, bh], i) => {
    const x = M + i * (cw + 0.3);
    s.addShape(pres.shapes.RECTANGLE, { x: x + cw * 0.3, y: 5.2 - bh, w: cw * 0.4, h: bh, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, r, { x, y: 5.2 - bh - 0.45, w: cw, h: 0.4, fontSize: 14, bold: true, align: "center" });
    card(s, x, 5.35, cw, 1.2, f, c);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: e + " · " + ex, options: { fontSize: 12, color: C.muted } }], { x: x + 0.2, y: 5.35, w: cw - 0.4, h: 1.2, fontSize: 17, align: "center", valign: "middle" });
  });
  T(s, "Trách nhiệm khách quy cho tổ chức →", { x: M, y: 1.95, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.muted });
}

// ───────────────────────── 19 — response strategies ─────────────────────────
{
  const s = base("s123", "Phủ nhận, giảm nhẹ hay xây lại", {
    source: "Y08: Coombs (2007).",
    notes: "Chiến lược theo SCCT: Deny (phủ nhận, đổ lỗi) · Diminish (bào chữa, biện minh) · Rebuild (bồi thường, xin lỗi); bổ trợ Bolstering (nhắc việc tốt, tri ân). Bày tỏ quan tâm đến người bị ảnh hưởng giúp giảm cảm xúc tiêu cực.",
  });
  const st = [["Deny", "Phủ nhận, đổ lỗi", C.muted, C.white], ["Diminish", "Bào chữa, biện minh", C.orange, C.tOrange], ["Rebuild", "Bồi thường, xin lỗi", C.purple, C.tPurple]];
  const cw = (CW - 0.6) / 3;
  st.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 2.3, f, c, 1.5);
    T(s, h, { x: x + 0.3, y: 2.25, w: cw - 0.6, h: 0.8, fontSize: 30, bold: true, color: c === C.orange ? C.dOrange : c });
    T(s, d, { x: x + 0.3, y: 3.15, w: cw - 0.6, h: 1.0, fontSize: 18, valign: "top" });
  });
  card(s, M, 4.65, 6.0, 1.9, C.tGreen, C.green);
  T(s, [{ text: "Bổ trợ: Bolstering", options: { bold: true, breakLine: true } }, { text: "nhắc việc tốt đã làm, tri ân các bên", options: { fontSize: 15 } }], { x: M + 0.3, y: 4.65, w: 5.4, h: 1.9, fontSize: 19, valign: "middle" });
  card(s, M + 6.3, 4.65, CW - 6.3, 1.9, C.tYellow, C.yellow);
  T(s, [{ text: "Luôn: ", options: { bold: true } }, { text: "bày tỏ quan tâm đến người bị ảnh hưởng — giúp giảm cảm xúc tiêu cực." }], { x: M + 6.6, y: 4.65, w: CW - 6.9, h: 1.9, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 20 — Nova verifies, KA decides ─────────────────────────
{
  const s = base("s123", "Khi một đối tác gây sự cố, Nova xác minh và khuyến nghị — Key Account quyết", {
    source: "Nhận định của người soạn · X06 (Buổi 11): VnExpress, Thanh Niên, Dân trí, VTC News · due diligence: Buổi 11.",
    notes: "Một KOL/diễn giả vướng vụ việc: với An Phát, ban đầu thường gần nhóm nạn nhân; nhưng nếu thông tin đã có từ trước mà không ai kiểm tra, khách có thể thấy đó là lỗi có thể ngăn ngừa — lý do của due diligence ở Buổi 11.\nPhản hồi của các đối tác trong vụ Kera (X06): thương hiệu hợp tác gỡ ảnh; công ty quản lý chấm dứt hợp đồng.\nNova không nói thay An Phát. Nova giữ deliverables: có diễn giả dự phòng? thay đổi kịch bản? Sau sự cố: ghi vào đánh giá sau sự kiện (Buổi 8).\nChỉ ở mức phối hợp bên liên quan.",
  });
  const flow = [["Xác minh sự việc", "Nova", C.orange, C.tOrange], ["Đưa phương án + khuyến nghị mức phản hồi", "Nova", C.blue, C.tBlue], ["Quyết định và lên tiếng", "An Phát", C.purple, C.tPurple]];
  const fw = 3.55;
  flow.forEach(([h, who, c, f], i) => {
    const x = M + i * (fw + 0.55);
    card(s, x, 2.05, fw, 1.8, f, c, 1.5);
    pill(s, x + 0.25, 2.2, 1.5, 0.42, c, who, { text: { fontSize: 12 } });
    T(s, h, { x: x + 0.25, y: 2.75, w: fw - 0.5, h: 1.0, fontSize: 17, bold: true, valign: "top" });
    if (i < 2) arrow(s, x + fw + 0.08, 2.95, x + fw + 0.47, 2.95, C.ink, 2.5);
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.15, cw, 2.4, C.white, C.line);
  T(s, [{ text: "Ví dụ: diễn giả/KOL vướng vụ việc", options: { bold: true, breakLine: true } }, { text: "Ban đầu An Phát gần nhóm “nạn nhân” — nhưng nếu thông tin có từ trước mà không ai kiểm tra, khách thấy lỗi “có thể ngăn ngừa” → due diligence (Buổi 11).", options: { fontSize: 14 } }],
    { x: M + 0.3, y: 4.15, w: cw - 0.6, h: 2.4, fontSize: 16, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + cw + 0.3, 4.15, cw, 2.4, C.tPink, C.pink);
  T(s, [{ text: "Đối tác trong vụ Kera đã phản hồi", options: { bold: true, breakLine: true } }, { text: "thương hiệu hợp tác gỡ ảnh; công ty quản lý chấm dứt hợp đồng.", options: { fontSize: 14, breakLine: true } }, { text: "Nova còn phải giữ deliverables: diễn giả dự phòng, kịch bản thay thế.", options: { fontSize: 14 } }],
    { x: M + cw + 0.6, y: 4.15, w: cw - 0.6, h: 2.4, fontSize: 16, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── 21 — five incident questions ─────────────────────────
{
  const s = base("s123", "Năm câu hỏi khi một bên gây sự cố", {
    notes: "Checklist dùng cho S6 và cho SMP của nhóm.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const qs = [["Sự việc đã được xác minh chưa?", C.orange], ["Trong mắt khách của An Phát, ai chịu trách nhiệm (SCCT)?", C.purple], ["Deliverable nào bị ảnh hưởng? Phương án dự phòng?", C.pink], ["Nova khuyến nghị An Phát phản hồi ở mức nào?", C.blue], ["Ai thông báo cho ai, khi nào (cập nhật ESG)?", C.green]];
  qs.forEach(([q, c], i) => {
    const y = 2.0 + i * 0.93;
    card(s, M, y, CW, 0.8, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.1, 0.6, c, String(i + 1));
    T(s, q, { x: M + 1.05, y, w: CW - 1.3, h: 0.8, fontSize: 19, bold: true, valign: "middle" });
  });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s123", "Thực hành 2 · Mạng lưới bên liên quan trong SMP của nhóm (chạy thử bảo vệ)", {
    source: "Phiếu W12_activity_S6_mang_luoi_smp.md.",
    notes: "S6 — Thực hành 2 (30 phút): 3 mở đầu · 13 vẽ · 10 xoay trạm (2 vòng × 5 phút) · 4 sửa và chốt.\nLời mở đầu: “Từ Buổi 7 đến giờ, các bạn đã làm từng trang cho khách hàng của nhóm. Hôm nay ráp chúng thành một mạng lưới, và tìm hai chỗ mạng lưới đó có thể vỡ. Sau 13 phút, một người ở lại trình bày, những người khác đi làm hội đồng: mỗi bàn nhận một câu hỏi khó và một điểm yếu. Đây là buổi chạy thử — sai ở đây rẻ hơn sai ở buổi bảo vệ.”\nNếu nhóm chưa có trang SMP: dùng mạng lưới An Phát làm mẫu.\nKhi chốt: ghi các câu hỏi phản biện lặp lại ở nhiều nhóm (danh sách ôn tập bảo vệ SMP).",
  });
  T(s, "Khách hàng của nhóm ở giữa · ≥ 5 bên liên quan bên ngoài · ◆ bên giữ nhiều vai · 2 xung đột (nét đứt) · 1 cơ chế minh bạch", { x: M, y: 1.9, w: CW, h: 0.45, fontSize: 13, color: C.muted });
  const heads = [["Xung đột", C.orange], ["Deliverable bị đe dọa", C.purple], ["Lợi ích thật các bên", C.blue], ["Phòng trước", C.green], ["Xử lý khi xảy ra", C.pink]];
  const hw = (CW - 4 * 0.1) / 5;
  heads.forEach(([h, c], i) => {
    const x = M + i * (hw + 0.1);
    pill(s, x, 2.5, hw, 0.65, c, h, { text: { fontSize: 13 } });
    ["1", "2"].forEach((n, j) => {
      card(s, x, 3.3 + j * 0.52, hw, 0.44, i === 0 ? C.band : C.white, C.line);
      if (i === 0) T(s, n, { x, y: 3.3 + j * 0.52, w: hw, h: 0.44, fontSize: 13, bold: true, align: "center", valign: "middle" });
    });
  });
  const steps = [["13’", "Vẽ mạng lưới và 2 xung đột trên A1", C.orange], ["2×5’", "Một người ở lại trình bày 1’; còn lại làm hội đồng bảo vệ — 🟨 1 câu hỏi, 🟥 1 điểm yếu", C.pink], ["4’", "Về bàn, sửa một điểm; ghi câu hỏi khó nhất", C.green]];
  const sw = (CW - 0.6) / 3;
  steps.forEach(([t, d, c], i) => {
    const x = M + i * (sw + 0.3);
    badge(s, x, 4.75, 0.85, c, t, null, t.length > 3 ? 13 : 17);
    T(s, d, { x: x + 1.0, y: 4.6, w: sw - 1.0, h: 1.15, fontSize: 12, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.65, C.tYellow, C.yellow);
  T(s, "Dùng năm bước bảo vệ deliverables và năm câu hỏi khi có sự cố.", { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.65, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── 22 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 12", {
    notes: "S7 — Tổng hợp (3 phút). Ba câu chốt: 12.1 · 12.2 · sự cố.",
  });
  const pts = [
    ["12.1", "Giá trị của Nova nằm một phần trong quan hệ dài hạn (tài sản đặc thù, chia sẻ tri thức, năng lực bổ trợ, quản trị). Minh bạch = mọi bên đọc một phiên bản đúng (ESG); bảo mật thông tin khách và giá.", C.purple, C.tPurple],
    ["12.2", "Xung đột thường đến từ một bên nhiều vai. Năm bước: deliverable → ai, vai gì → lợi ích đằng sau → cùng giải quyết, leo thang → báo minh bạch cho Key Account.", C.blue, C.tBlue],
    ["Sự cố", "Phân loại theo mức trách nhiệm (SCCT); Nova xác minh, khuyến nghị, để Key Account quyết — và giữ deliverables.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.5;
    card(s, M, y, CW, 1.3, t, c);
    badge(s, M + 0.2, y + 0.2, 0.9, c, k, C.white, k.length > 4 ? 15 : 20);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.3, fontSize: 15, valign: "middle" });
  });
}

// ───────────────────────── 23 — Part 3 wrap ─────────────────────────
{
  const s = base("end", "Phần 3 khép lại: mạng lưới bên ngoài phục vụ hành trình của Key Account", {
    source: "Đề cương 13.2: đưa điều phối bên liên quan bên ngoài vào phần Value Delivery của Key Account Plan.",
    notes: "Khép Phần 3: Buổi 9–12 đã gắn nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL vào hành trình của Key Account.\nCâu nối Buổi 13: “Phần 3 khép lại: các bạn đã có nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL, và cách giữ cả mạng lưới làm việc cho Key Account. Buổi sau ta ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan.”",
  });
  const bs = [["Buổi 9", "Nhà tài trợ – nhà đầu tư", C.purple], ["Buổi 10", "Nhà cung cấp – địa điểm", C.blue], ["Buổi 11", "Báo chí – KOL", C.pink], ["Buổi 12", "Leverage & xung đột mạng lưới", C.orange]];
  const cw = (CW - 3 * 0.25) / 4;
  bs.forEach(([k, t, c], i) => {
    const x = M + i * (cw + 0.25);
    card(s, x, 2.1, cw, 1.6, C.white, c, 2);
    T(s, k, { x: x + 0.25, y: 2.2, w: cw - 0.5, h: 0.45, fontSize: 14, bold: true, color: c === C.blue ? C.dBlue : c === C.pink ? C.dPink : c === C.orange ? C.dOrange : c });
    T(s, t, { x: x + 0.25, y: 2.7, w: cw - 0.5, h: 0.9, fontSize: 16, bold: true, valign: "top" });
    arrow(s, x + cw / 2, 3.8, W / 2 + (x + cw / 2 - W / 2) * 0.35, 4.55, c, 2);
  });
  card(s, M + 2.5, 4.6, CW - 5.0, 1.95, C.green, C.green);
  T(s, [{ text: "Buổi 13", options: { fontSize: 15, breakLine: true } }, { text: "Stakeholder Management Plan", options: { fontSize: 24, bold: true, breakLine: true } }, { text: "xoay quanh Key Account Plan · phần Value Delivery", options: { fontSize: 14 } }],
    { x: M + 2.8, y: 4.6, w: CW - 5.6, h: 1.95, color: C.white, align: "center", valign: "middle" });
}

// ───────────────────────── 24 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) nhận ra xung đột do vai trò chồng chéo, không chỉ “bên kia xấu”; (b) nối được với deliverable của Key Account; (c) câu hỏi phản biện cụ thể và kế hoạch bổ sung khả thi.\nCâu nối Buổi 13: “Buổi sau ta ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan.”",
  });
  const qs = [
    ["1", "Trong SMP của nhóm bạn, bên liên quan bên ngoài nào giữ nhiều vai nhất? Điều đó có thể gây xung đột gì với deliverable cam kết cho khách hàng?", C.purple],
    ["2", "Một câu hỏi phản biện nhóm bạn nhận được hôm nay mà nhóm chưa trả lời được. Nhóm sẽ bổ sung gì trước buổi bảo vệ?", C.blue],
  ];
  qs.forEach(([n, q, c], i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, [{ text: "Buổi 13: ", options: { bold: true } }, { text: "ráp nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL và cách giữ mạng lưới thành Stakeholder Management Plan xoay quanh Key Account Plan." }],
    { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["Y01", "Dyer, J. H., & Singh, H. (1998). The relational view: Cooperative strategy and sources of interorganizational competitive advantage. Academy of Management Review, 23(4), 660–679."],
  ["Y02", "Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. Journal of Marketing, 58(3), 20–38."],
  ["Y03", "Mohr, J., & Spekman, R. (1994). Characteristics of partnership success. Strategic Management Journal, 15(2), 135–152."],
  ["Y04", "Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. Event Management, 10(2), 103–122."],
  ["Y05", "Larson, M. (2002). A political approach to relationship marketing: Case study of the Storsjöyran festival. International Journal of Tourism Research, 4(2), 119–143."],
  ["Y06", "Lee, H. L., Padmanabhan, V., & Whang, S. (1997). Information distortion in a supply chain: The bullwhip effect. Management Science, 43(4), 546–558."],
  ["Y07", "Convention Industry Council. (2005). The APEX event specifications guide template."],
  ["Y08", "Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. Corporate Reputation Review, 10(3), 163–176."],
  ["Y09", "Báo Văn hóa. (2026, January 3). Giữa hợp đồng và trách nhiệm, ranh giới nào cho nghệ sĩ? · Nhân Dân. (2026, January 23). Khoảng trống pháp lý trên thị trường biểu diễn. · Dân trí. (2025, December 31). Vụ “Về đây bốn cánh chim trời”: Việc cấp phép, huỷ show ở Việt Nam thế nào?"],
  ["Y10", "Xem các thẻ U08, U11 (Buổi 9), V10 (Buổi 10), X06 (Buổi 11), S12, S15 (Buổi 7)."],
];
[REFS.slice(0, 5), REFS.slice(5)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-12_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn Y01–Y10 ghi ở chân slide. Tiêu đề báo Y09 giữ dạng chữ theo dàn ý. Toàn văn Y01, Y02, Y04, Y05 chưa đọc.",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.85;
    T(s, k, { x: M, y, w: 0.7, h: 0.75, fontSize: 12, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.75, fontSize: 12, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W12_Network_Conflicts.pptx" }).then((f) => console.log("wrote", f));
