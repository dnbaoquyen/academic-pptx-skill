// Buổi 7 — EVM1110E · Understanding Procurement & Value-based Negotiation
// Deck generated from courses/EVM1110E/lessons/W07_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W07_Procurement_Negotiation.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 7: Understanding Procurement & Value-based Negotiation";
pres.subject = "Quản trị mối quan hệ trong tổ chức sự kiện";

const W = 13.333, H = 7.5, M = 0.6, CW = W - 2 * M;
const F = "Alexandria";
const C = {
  bg: "FBFAF4", ink: "2A2238", muted: "6E6878", line: "DCD7C8", white: "FFFFFF",
  green: "49B296", yellow: "FFD23B", pink: "FF5178", purple: "962B7C", blue: "09A1E5", orange: "FF9259",
  tGreen: "E1F3EE", tYellow: "FFF3C4", tPink: "FFE4EA", tPurple: "F1E1EE", tBlue: "DDF1FB", tOrange: "FFE9DE",
};
// Kraljic quadrants: colour + shape symbol (not colour-only, for colour-blind readers)
const Q = {
  leverage:    { name: "Leverage",     shape: "diamond",  c: C.blue,   t: C.tBlue },
  strategic:   { name: "Strategic",    shape: "star",     c: C.purple, t: C.tPurple },
  noncritical: { name: "Non-critical", shape: "circle",   c: C.green,  t: C.tGreen },
  bottleneck:  { name: "Bottleneck",   shape: "triangle", c: C.pink,   t: C.tPink },
};
const SECTIONS = [
  { key: "open", label: "Mở đầu", c: C.orange },
  { key: "k71", label: "7.1 Kraljic", c: C.purple },
  { key: "k72", label: "7.2 Procurement · Buying", c: C.blue },
  { key: "k73", label: "7.3 Đàm phán giá trị", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

function symbol(slide, kind, x, y, s, color) {
  const map = { diamond: pres.shapes.DIAMOND, star: pres.shapes.STAR_5_POINT, circle: pres.shapes.OVAL, triangle: pres.shapes.ISOSCELES_TRIANGLE };
  slide.addShape(map[kind], { x, y, w: s, h: s, fill: { color }, line: { color, width: 0.5 } });
}

// Small 2×2 “Kraljic glyph” — the deck's recurring motif
function glyph(slide, x, y, s) {
  const g = s * 0.12, c = (s - g) / 2;
  [[Q.leverage, 0, 0], [Q.strategic, 1, 0], [Q.noncritical, 0, 1], [Q.bottleneck, 1, 1]].forEach(([q, i, j]) =>
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + i * (c + g), y: y + j * (c + g), w: c, h: c, rectRadius: c * 0.28, fill: { color: q.c }, line: { color: q.c, width: 0 } }));
}

function base(section, title, { notes, source } = {}) {
  const s = pres.addSlide();
  slideNo++;
  s.background = { color: C.bg };
  // breadcrumb pills
  let x = M;
  SECTIONS.forEach((sec) => {
    const active = sec.key === section;
    const w = 0.28 + sec.label.length * 0.085;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 0.3, w, h: 0.32, rectRadius: 0.16,
      fill: { color: active ? sec.c : C.bg }, line: { color: active ? sec.c : C.line, width: 0.75 } });
    T(s, sec.label, { x, y: 0.3, w, h: 0.32, fontSize: 10, bold: active, color: active ? (sec.key === "open" ? C.ink : C.white) : C.muted, align: "center", valign: "middle" });
    x += w + 0.12;
  });
  glyph(s, W - M - 0.4, 0.26, 0.4);
  if (title) T(s, title, { x: M, y: 0.85, w: CW, h: 1.05, fontSize: 26, bold: true, valign: "middle", fit: "shrink" });
  // footer
  if (source) T(s, source, { x: M, y: 6.95, w: CW - 2.2, h: 0.3, fontSize: 10, color: C.muted, valign: "middle" });
  T(s, `EVM1110E · Buổi 7   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
  if (notes) s.addNotes(notes);
  return s;
}

function card(slide, x, y, w, h, fill, line) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: line || fill, width: 1 } });
}
function badge(slide, x, y, d, color, text, textColor) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  T(slide, text, { x, y, w: d, h: d, fontSize: d * 34, bold: true, color: textColor || C.white, align: "center", valign: "middle" });
}
function arrow(slide, x1, y1, x2, y2, color, both, width) {
  const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1) || 0.001, h: Math.abs(y2 - y1) || 0.001,
    line: { color, width: width || 2.5, endArrowType: "triangle", beginArrowType: both ? "triangle" : undefined } };
  if (x2 < x1) o.flipH = true;
  if (y2 < y1) o.flipV = true;
  slide.addShape(pres.shapes.LINE, o);
}

// 2×2 Kraljic matrix. cells: {leverage:{body}, ...}; returns cell geometry
function matrix(slide, x, y, w, h, cells = {}, opt = {}) {
  const ax = 0.45; // axis label gutter
  const gx = x + ax, gy = y, gw = w - ax, gh = h - ax, gap = 0.1;
  const cw = (gw - gap) / 2, ch = (gh - gap) / 2;
  const pos = { leverage: [0, 0], strategic: [1, 0], noncritical: [0, 1], bottleneck: [1, 1] };
  const geo = {};
  Object.entries(pos).forEach(([k, [i, j]]) => {
    const q = Q[k], cx = gx + i * (cw + gap), cy = gy + j * (ch + gap);
    geo[k] = { x: cx, y: cy, w: cw, h: ch };
    const dim = opt.dim && opt.dim.includes(k);
    card(slide, cx, cy, cw, ch, dim ? C.bg : q.t, q.c);
    const ss = opt.symbol || 0.26;
    symbol(slide, q.shape, cx + 0.15, cy + 0.15, ss, q.c);
    T(slide, q.name, { x: cx + 0.22 + ss, y: cy + 0.12, w: cw - 0.4 - ss, h: ss + 0.06, fontSize: opt.nameSize || 16, bold: true, valign: "middle" });
    const c = cells[k];
    if (c && c.body) T(slide, c.body, { x: cx + 0.18, y: cy + 0.22 + ss, w: cw - 0.36, h: ch - 0.34 - ss, fontSize: opt.bodySize || 13, valign: "top", color: C.ink, paraSpaceAfter: 3 });
  });
  // axes
  arrow(slide, x + 0.36, gy + gh, x + 0.36, gy, C.muted, false, 1.5);
  T(slide, "Profit impact  →  cao", { x: x - (gh / 2) + 0.1, y: gy + gh / 2 - 0.15, w: gh, h: 0.3, fontSize: 11, color: C.muted, align: "center", rotate: 270 });
  arrow(slide, gx, gy + gh + 0.2, gx + gw, gy + gh + 0.2, C.muted, false, 1.5);
  T(slide, "Supply risk  →  cao", { x: gx, y: gy + gh + 0.24, w: gw, h: 0.22, fontSize: 11, color: C.muted, align: "center" });
  return geo;
}

// ───────────────────────── Slide 1 — Title ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  // Composition: large Kraljic tiles on the right
  const gx = 8.35, gy = 1.25, sz = 2.3, g = 0.22;
  [[Q.leverage, 0, 0], [Q.strategic, 1, 0], [Q.noncritical, 0, 1], [Q.bottleneck, 1, 1]].forEach(([q, i, j]) => {
    const x = gx + i * (sz + g), y = gy + j * (sz + g);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: sz, h: sz, rectRadius: 0.35, fill: { color: q.c }, line: { color: q.c, width: 0 } });
    symbol(s, q.shape, x + 0.3, y + 0.3, 0.42, C.bg);
    T(s, q.name, { x: x + 0.3, y: y + sz - 0.75, w: sz - 0.5, h: 0.45, fontSize: 16, bold: true, color: C.white });
  });
  s.addShape(pres.shapes.OVAL, { x: 7.75, y: 5.95, w: 0.55, h: 0.55, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 12.35, y: 0.55, w: 0.4, h: 0.4, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.0, w: 2.9, h: 0.46, rectRadius: 0.23, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  T(s, "EVM1110E  ·  Buổi 7 / 15", { x: M, y: 1.0, w: 2.9, h: 0.46, fontSize: 14, bold: true, align: "center", valign: "middle" });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 7.0, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Understanding Procurement & Value-based Negotiation", { x: M, y: 3.75, w: 7.0, h: 1.0, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Stakeholders Management for Events", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: [Tên giảng viên]" },
  ], { x: M, y: 5.05, w: 7.0, h: 1.3, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Điền tên giảng viên trước khi dạy.");
}

// ───────────────────────── Slide 2 — S1 opener ─────────────────────────
{
  const s = base("open", "Ba tuần trước gala, AV khách sạn tăng giá 30% — Nova làm gì?", {
    source: "Tình huống giả định (tiếp nối Buổi 1) — mọi tên và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Đọc: “Các bạn là Nova Events. Ngân hàng An Phát — Key Account của các bạn — đã chốt Hội nghị khách hàng và gala tối ngày 12/12 tại một khách sạn 5 sao ở Quận 1. Ba tuần trước sự kiện, khách sạn báo: đơn vị AV nội bộ tăng giá 30%, và hợp đồng không cho mang AV bên ngoài vào. Các bạn làm gì?”\nCho lớp giơ tay A/B/C/D. Ghi số phiếu lên bảng; CHƯA chữa.\nChốt: vấn đề đã được quyết định từ lúc chọn và ký với nhà cung cấp. Hôm nay ta học cách nhìn thấy trước nó.",
  });
  card(s, M, 2.1, 4.3, 4.55, C.tPink, C.pink);
  T(s, "+30%", { x: M + 0.35, y: 2.3, w: 3.6, h: 1.1, fontSize: 60, bold: true, color: C.pink });
  T(s, [
    { text: "Key Account: Ngân hàng An Phát", options: { bullet: true, breakLine: true } },
    { text: "Hội nghị + gala tối 12/12, khách sạn 5 sao, Quận 1", options: { bullet: true, breakLine: true } },
    { text: "Hợp đồng venue cấm mang AV ngoài vào", options: { bullet: true } },
  ], { x: M + 0.35, y: 3.55, w: 3.65, h: 2.9, fontSize: 16, valign: "top", paraSpaceAfter: 10 });
  const opts = [
    ["A", "Chấp nhận giá mới, tự chịu phần chênh", C.orange],
    ["B", "Báo Key Account xin tăng ngân sách", C.blue],
    ["C", "Đổi khách sạn", C.green],
    ["D", "Đàm phán với khách sạn", C.purple],
  ];
  const ox = M + 4.7, ow = CW - 4.7;
  opts.forEach(([l, t, c], i) => {
    const y = 2.1 + i * 1.17;
    card(s, ox, y, ow, 1.0, C.white, C.line);
    badge(s, ox + 0.22, y + 0.18, 0.64, c, l, l === "A" ? C.ink : C.white);
    T(s, t, { x: ox + 1.1, y, w: ow - 1.3, h: 1.0, fontSize: 20, valign: "middle" });
  });
}

// ───────────────────────── Slide 3 — agency in the middle ─────────────────────────
{
  const s = base("open", "Agency vừa là người bán, vừa là người mua", {
    notes: "Nối Buổi 2–6 (agency bán cho Key Account) sang Buổi 7 (agency mua từ nhà cung cấp): để giao được giá trị đã hứa, agency phải mua phần lớn nguồn lực của sự kiện.\nAlt-text: sơ đồ ba khối — nhà cung cấp, agency ở giữa, Key Account; agency là người mua với nhà cung cấp và là người bán với Key Account.",
  });
  const y = 2.6, h = 2.3, bw = 3.35;
  const xs = [M, (W - bw) / 2, W - M - bw];
  const blocks = [
    ["Nhà cung cấp", "venue · AV · F&B · nghệ sĩ · in ấn · vận chuyển", C.tBlue, C.blue],
    ["Agency", "Nova Events — các bạn", C.yellow, C.yellow],
    ["Key Account", "Ngân hàng An Phát", C.tPurple, C.purple],
  ];
  blocks.forEach(([t, d, f, l], i) => {
    card(s, xs[i], y, bw, h, f, l);
    T(s, t, { x: xs[i] + 0.25, y: y + 0.35, w: bw - 0.5, h: 0.6, fontSize: 24, bold: true, align: "center" });
    T(s, d, { x: xs[i] + 0.25, y: y + 1.05, w: bw - 0.5, h: 0.9, fontSize: 15, align: "center", valign: "top", color: C.ink });
  });
  arrow(s, xs[0] + bw + 0.15, y + h / 2, xs[1] - 0.15, y + h / 2, C.ink, true, 3);
  arrow(s, xs[1] + bw + 0.15, y + h / 2, xs[2] - 0.15, y + h / 2, C.ink, true, 3);
  const lab = (x, t, c) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: y + h + 0.35, w: 3.0, h: 0.5, rectRadius: 0.25, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, t, { x, y: y + h + 0.35, w: 3.0, h: 0.5, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
  };
  lab(xs[0] + bw - 1.2, "agency là NGƯỜI MUA", C.blue);
  lab(xs[2] - 1.8, "agency là NGƯỜI BÁN", C.purple);
  T(s, [
    { text: "Buổi 7: ", options: { bold: true } },
    { text: "mua từ nhà cung cấp  ·  " },
    { text: "Buổi 2–6: ", options: { bold: true } },
    { text: "bán cho Key Account" },
  ], { x: M, y: 6.3, w: CW, h: 0.4, fontSize: 14, color: C.muted, align: "center" });
}

// ───────────────────────── Slide 4 — money flow ─────────────────────────
{
  const s = base("open", "Phần lớn giá trị hợp đồng đi qua agency để trả cho nhà cung cấp", {
    source: "Phí quản lý 5–10%: báo giá công khai của agency VN (S18); markup ≥ 10% tại Mỹ (S25). Dải tham chiếu — chưa kiểm chứng chéo.",
    notes: "Hỏi nhanh: “Trong hợp đồng 2,4 tỷ với An Phát, bao nhiêu tiền thực sự ở lại Nova?”\nGhi rõ: đây là dải tham chiếu, chưa kiểm chứng chéo.\n[NEEDS PROFESSOR INPUT: tỷ lệ thực tế từ một dự toán agency đã ẩn danh]\nChốt: chất lượng sự kiện Key Account nhìn thấy phần lớn do nhà cung cấp làm ra → quản trị nhà cung cấp là một phần của quản trị Key Account.\nAlt-text: thanh ngang 100% giá trị hợp đồng, 5–10% là phí quản lý của agency, phần còn lại chi cho nhà cung cấp.",
  });
  T(s, "100% giá trị hợp đồng với Key Account", { x: M, y: 2.2, w: CW, h: 0.4, fontSize: 15, color: C.muted });
  const bx = M, by = 2.7, bw = CW, bh = 1.3, fee = bw * 0.1;
  s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by, w: bw - fee, h: bh, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: bx + bw - fee, y: by, w: fee, h: bh, fill: { color: C.orange }, line: { color: C.bg, width: 2 } });
  T(s, "≈ 90–95%  chi cho nhà cung cấp", { x: bx + 0.35, y: by, w: bw - fee - 0.6, h: bh, fontSize: 26, bold: true, color: C.white, valign: "middle" });
  T(s, "5–10%", { x: bx + bw - fee, y: by, w: fee, h: bh, fontSize: 18, bold: true, align: "center", valign: "middle" });
  T(s, "phí quản lý của agency ↑", { x: bx + bw - 3.3, y: by + bh + 0.1, w: 3.3, h: 0.35, fontSize: 13, color: C.muted, align: "right" });
  card(s, M, 4.75, CW, 1.65, C.tYellow, C.yellow);
  T(s, [
    { text: "Chất lượng Key Account nhìn thấy phần lớn do nhà cung cấp làm ra.", options: { breakLine: true } },
    { text: "→ Quản trị nhà cung cấp là một phần của quản trị Key Account.", options: { bold: true } },
  ], { x: M + 0.35, y: 4.75, w: CW - 0.7, h: 1.65, fontSize: 19, valign: "middle", paraSpaceAfter: 6 });
}

// ───────────────────────── Slide 5 — cost pressure ─────────────────────────
{
  const s = base("open", "Chi phí đầu vào tăng đều và địa điểm cao cấp khan hiếm", {
    source: "S04: CWT & GBTA, Forecast 2026 (một báo cáo gốc, chưa kiểm chứng chéo) · S05: Amex GBT, 2026 Global Meetings & Events Forecast.",
    notes: "Trình bày nhanh, mỗi số một ý, không đọc hết. Dự báo toàn cầu +3,7% (2025) và +2,4% (2026) — S04. Thiếu địa điểm cao cấp là một nguyên nhân tăng chi phí (S04, S05, S08).",
  });
  const stats = [
    ["+4,5%", "chi phí / người / ngày của meetings & events toàn cầu, năm 2024", "S04", C.orange, C.tOrange],
    ["138 USD", "chi phí / người / ngày tại khu vực APAC (+4,5%)", "S04", C.blue, C.tBlue],
    ["28%", "chuyên gia coi khả năng có địa điểm là thách thức năm 2026", "S05", C.pink, C.tPink],
  ];
  const cw = (CW - 0.6) / 3;
  stats.forEach(([n, d, src, c, t], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.25, cw, 4.1, t, c);
    T(s, n, { x: x + 0.3, y: 2.6, w: cw - 0.6, h: 1.3, fontSize: 52, bold: true, color: c === C.blue ? "0A7FB5" : (c === C.orange ? "D9622B" : "E03A62") });
    T(s, d, { x: x + 0.3, y: 4.05, w: cw - 0.6, h: 1.6, fontSize: 17, valign: "top" });
    T(s, src, { x: x + 0.3, y: 5.75, w: cw - 0.6, h: 0.35, fontSize: 12, color: C.muted });
  });
}

// ───────────────────────── Slide 6 — exclusivity ─────────────────────────
{
  const s = base("open", "Nhiều hạng mục bị khóa bởi điều khoản độc quyền", {
    source: "S08–S10: báo ngành về đàm phán AV/khách sạn · S13: NPR, CNN (4/2026) · S20: Tạp chí VHNT; ELLE VN · S23: VnExpress, VnEconomy.",
    notes: "Hỏi nhanh: “Trong dự án cũ, có hạng mục nào các bạn KHÔNG được chọn nhà cung cấp?”\nHoa hồng AV 35–50% và vé máy bay +10–20% là số liệu chưa kiểm chứng chéo.",
  });
  const items = [
    ["AV nội bộ bắt buộc", "Nhiều khách sạn buộc dùng AV nội bộ; khách sạn thường nhận hoa hồng 35–50% hóa đơn AV*", "S08–S10", C.pink],
    ["Bán vé độc quyền", "Live Nation–Ticketmaster nắm ~80% bán vé sơ cấp ở địa điểm concert lớn tại Mỹ; bồi thẩm đoàn kết luận độc quyền (4/2026)", "S13", C.purple],
    ["Việt Nam", "Thiếu địa điểm chuyên dụng cho sự kiện lớn; vé máy bay nội địa hè 2025 +10–20%*, đoàn MICE phải đặt trước 1–2 tháng", "S20, S23", C.blue],
  ];
  const cw = (CW - 0.6) / 3;
  items.forEach(([h, d, src, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.15, cw, 3.3, C.white, C.line);
    badge(s, x + 0.3, 2.4, 0.6, c, String(i + 1));
    T(s, h, { x: x + 1.05, y: 2.4, w: cw - 1.25, h: 0.6, fontSize: 18, bold: true, valign: "middle" });
    T(s, d, { x: x + 0.3, y: 3.2, w: cw - 0.6, h: 1.8, fontSize: 14, valign: "top" });
    T(s, src, { x: x + 0.3, y: 5.0, w: cw - 0.6, h: 0.3, fontSize: 11, color: C.muted });
  });
  card(s, M, 5.7, CW, 0.95, C.tYellow, C.yellow);
  T(s, [
    { text: "Hỏi nhanh: ", options: { bold: true } },
    { text: "trong dự án cũ, có hạng mục nào các bạn không được chọn nhà cung cấp?" },
  ], { x: M + 0.35, y: 5.7, w: CW - 0.7, h: 0.95, fontSize: 17, valign: "middle" });
  T(s, "* chưa kiểm chứng chéo", { x: W - M - 3.0, y: 5.47, w: 3.0, h: 0.2, fontSize: 10, color: C.muted, align: "right" });
}

// ───────────────────────── Slide 7 — Kraljic origin ─────────────────────────
{
  const s = base("k71", "Kraljic: mua hàng phải trở thành quản trị nguồn cung", {
    source: "S01: Kraljic, P. (1983). Harvard Business Review; CIPS, Kraljic matrix.",
    notes: "Peter Kraljic (McKinsey), HBR 1983. Thông điệp tên bài: mua hàng không chỉ là đặt đơn cho rẻ, mà phải quản trị nguồn cung như một phần của chiến lược.\nChốt §1 trước đó: agency không chọn được thị trường nhà cung cấp, nhưng chọn được cách nhìn từng hạng mục và cách xây quan hệ tương ứng.",
  });
  card(s, M, 2.2, 6.4, 4.2, C.tPurple, C.purple);
  T(s, "Harvard Business Review · 1983", { x: M + 0.4, y: 2.5, w: 5.6, h: 0.4, fontSize: 14, color: C.purple, bold: true });
  T(s, "“Purchasing Must Become Supply Management”", { x: M + 0.4, y: 3.0, w: 5.6, h: 1.9, fontSize: 28, bold: true, italic: true, valign: "top" });
  T(s, "Peter Kraljic (McKinsey)", { x: M + 0.4, y: 5.4, w: 5.6, h: 0.5, fontSize: 16, color: C.muted });
  const rx = M + 6.9, rw = CW - 6.9;
  T(s, "CIPS mô tả ma trận Kraljic là", { x: rx, y: 2.3, w: rw, h: 0.4, fontSize: 16, color: C.muted });
  T(s, "công cụ chiến lược để nhận diện và giảm rủi ro nguồn cung.", { x: rx, y: 2.8, w: rw, h: 1.4, fontSize: 24, bold: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Không chỉ là đặt đơn cho rẻ", options: { bullet: true, breakLine: true } },
    { text: "Quản trị nguồn cung như một phần của chiến lược", options: { bullet: true } },
  ], { x: rx, y: 4.5, w: rw, h: 1.5, fontSize: 18, valign: "top", paraSpaceAfter: 10 });
}

// ───────────────────────── Slide 8 — two axes ─────────────────────────
{
  const s = base("k71", "Hai trục: hạng mục tác động bao nhiêu và khó mua đến đâu", {
    source: "Định nghĩa gốc: CIPS (S01). Câu hỏi theo góc agency: nhận định của người soạn.",
    notes: "[VERIFY: cách đọc profit impact theo góc agency — giá trị giao cho Key Account + lợi nhuận hợp đồng — là điều chỉnh của người soạn, không phải định nghĩa gốc]\nSupply risk đặc biệt nặng trong ngành sự kiện vì ngày sự kiện không dời được: nhà cung cấp trễ một tuần ở ngành sản xuất là chậm giao hàng, ở ngành sự kiện là mất sự kiện.",
  });
  const rows = [
    ["Profit impact", "tác động lợi nhuận", "Mức hạng mục đóng góp vào khả năng sinh lời của tổ chức mua",
      ["Chiếm bao nhiêu phần ngân sách?", "Khách của Key Account có nhìn thấy, cảm nhận không?", "Nếu kém, Key Account có coi cả sự kiện thất bại?"], C.orange, C.tOrange],
    ["Supply risk", "rủi ro nguồn cung", "Mức khó tìm nguồn và mức tổn thương khi nguồn cung gặp sự cố",
      ["Bao nhiêu nhà cung cấp đủ năng lực — ở đây, lúc này?", "Bỏ ngang thì thay được trong bao lâu?", "Có độc quyền? Có rơi vào mùa cao điểm?"], C.blue, C.tBlue],
  ];
  T(s, "Định nghĩa gốc (CIPS)", { x: M + 2.9, y: 2.0, w: 3.6, h: 0.35, fontSize: 13, bold: true, color: C.muted });
  T(s, "Agency tự hỏi cho từng hạng mục", { x: M + 6.8, y: 2.0, w: 5.3, h: 0.35, fontSize: 13, bold: true, color: C.muted });
  rows.forEach(([n, vi, def, qs, c, t], i) => {
    const y = 2.45 + i * 2.1;
    card(s, M, y, CW, 1.9, t, c);
    T(s, n, { x: M + 0.3, y: y + 0.45, w: 2.5, h: 0.5, fontSize: 20, bold: true });
    T(s, vi, { x: M + 0.3, y: y + 0.95, w: 2.5, h: 0.4, fontSize: 13, italic: true, color: C.muted });
    T(s, def, { x: M + 2.9, y, w: 3.6, h: 1.9, fontSize: 14, valign: "middle" });
    T(s, qs.map((q, k) => ({ text: q, options: { bullet: true, breakLine: k < qs.length - 1 } })), { x: M + 6.8, y, w: CW - 7.0, h: 1.9, fontSize: 14, valign: "middle", paraSpaceAfter: 4 });
  });
}

// ───────────────────────── Slide 9 — four quadrants ─────────────────────────
{
  const s = base("k71", "Mỗi ô có một chiến lược riêng", {
    source: "Chiến lược gốc theo CIPS (S01).",
    notes: "Nhấn mạnh: tên ô Non-critical không có nghĩa là “không quan trọng” — nghĩa là KHÔNG KHÓ MUA. Thư mời in sai tên khách VIP vẫn là sự cố, chỉ là sửa được vì in lại được ngay.\nAlt-text: ma trận hai trục profit impact (dọc) và supply risk (ngang) với bốn ô: Leverage (trái trên), Strategic (phải trên), Non-critical (trái dưới), Bottleneck (phải dưới); mỗi ô có ký hiệu riêng.",
  });
  matrix(s, M, 2.0, 8.2, 4.8, {
    leverage: { body: "Khai thác sức mua: đấu thầu, giá mục tiêu, thay thế sản phẩm" },
    strategic: { body: "Cân bằng quyền lực bằng quan hệ đối tác dựa trên hiệu quả" },
    noncritical: { body: "Xử lý hiệu quả: chuẩn hóa, gom đơn, đơn giản hóa thủ tục" },
    bottleneck: { body: "Đảm bảo nguồn cung ngắn và dài hạn; tìm nhà cung cấp thay thế" },
  }, { bodySize: 14 });
  const rx = M + 8.6, rw = CW - 8.6;
  card(s, rx, 2.0, rw, 4.25, C.tYellow, C.yellow);
  symbol(s, "circle", rx + 0.3, 2.3, 0.32, C.green);
  T(s, "Non-critical ≠ không quan trọng", { x: rx + 0.3, y: 2.8, w: rw - 0.6, h: 1.1, fontSize: 20, bold: true, valign: "top" });
  T(s, "Nghĩa là không khó mua. Thư mời in sai tên khách VIP vẫn là sự cố — chỉ là sửa được.", { x: rx + 0.3, y: 3.95, w: rw - 0.6, h: 2.1, fontSize: 15, valign: "top" });
}

// ───────────────────────── Slide 10 — two steps ─────────────────────────
{
  const s = base("k71", "Xếp hạng mục trước, rồi mới suy ra vị thế nhà cung cấp", {
    notes: "Nhấn mạnh: đây là cách dùng THỐNG NHẤT của môn học. Mô hình gốc phân loại hạng mục mua (category); ngoài nghề hay nói “nhà cung cấp chiến lược”. Bước 1 xếp hạng mục cụ thể gắn với sự kiện (“ballroom 800 khách tối 12/12”, không phải “khách sạn”). Bước 2 suy ra quyền mặc cả của nhà cung cấp và chọn chiến lược quan hệ.\nRiêng ô Leverage: hạng mục thường là thứ Key Account nhìn thấy — ép giá đến mức nhà cung cấp cắt chất lượng là tự làm hại mình.",
  });
  const steps = [
    ["Bước 1", "Hạng mục → ô", "“Ballroom 600 khách tối 12/12”, không phải “khách sạn”", C.orange],
    ["Bước 2", "Ô → vị thế nhà cung cấp → chiến lược quan hệ", "Nhà cung cấp mạnh hay yếu so với agency?", C.purple],
  ];
  steps.forEach(([k, h, d, c], i) => {
    const x = M + i * 6.15, w = 5.9;
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.05, w, h: 1.35, fill: { color: i ? C.tPurple : C.tOrange }, line: { color: c, width: 1.5 } });
    T(s, [{ text: k + "  ", options: { bold: true, color: c === C.orange ? "D9622B" : C.purple } }, { text: h, options: { bold: true } }],
      { x: x + 0.7, y: 2.1, w: w - 1.6, h: 0.7, fontSize: 17, valign: "bottom" });
    T(s, d, { x: x + 0.7, y: 2.8, w: w - 1.6, h: 0.5, fontSize: 13, color: C.muted, valign: "top" });
  });
  const rows = [
    [Q.strategic, "Mạnh, nhưng hai bên cần nhau", "Đối tác dài hạn: chia sẻ kế hoạch sớm, cam kết khối lượng, cùng xử lý sự cố"],
    [Q.bottleneck, "Mạnh hơn agency", "Giữ chỗ sớm, có dự phòng, chốt giá–hủy–phí phát sinh trong hợp đồng"],
    [Q.leverage, "Yếu hơn agency", "So giá trong 2–3 nhà cung cấp ưu tiên, nhưng giữ chuẩn chất lượng"],
    [Q.noncritical, "Yếu, nhiều lựa chọn", "Chuẩn hóa, đặt hàng gọn, giảm thời gian quản lý"],
  ];
  T(s, "Vị thế nhà cung cấp", { x: M + 2.6, y: 3.65, w: 3.5, h: 0.3, fontSize: 12, bold: true, color: C.muted });
  T(s, "Chiến lược quan hệ của agency", { x: M + 6.3, y: 3.65, w: 5.8, h: 0.3, fontSize: 12, bold: true, color: C.muted });
  rows.forEach(([q, pos, st], i) => {
    const y = 4.0 + i * 0.72;
    card(s, M, y, CW, 0.62, q.t, q.t);
    symbol(s, q.shape, M + 0.2, y + 0.17, 0.28, q.c);
    T(s, q.name, { x: M + 0.65, y, w: 1.9, h: 0.62, fontSize: 15, bold: true, valign: "middle" });
    T(s, pos, { x: M + 2.6, y, w: 3.5, h: 0.62, fontSize: 14, valign: "middle" });
    T(s, st, { x: M + 6.3, y, w: CW - 6.5, h: 0.62, fontSize: 14, valign: "middle" });
  });
}

// ───────────────────────── Slide 11 — worked example ─────────────────────────
{
  const s = base("k71", "Một khách sạn, ba hạng mục, ba ô", {
    source: "Ví dụ giả định (Nova Events – An Phát). Xử lý AV trước khi ký: S08, S09, S10.",
    notes: "Ví dụ mẫu — GV nói to lập luận:\n• Ballroom gala 600 khách 12/12: profit impact cao (sân khấu cả sự kiện), supply risk cao (mùa tiệc cuối năm, không đổi sát ngày) → Strategic.\n• 80 phòng ngủ: Leverage ngoài mùa cao điểm; tháng 12 có thể dịch sang Bottleneck.\n• AV nội bộ: chi phí thấp–trung bình, nhưng hợp đồng không cho mang AV ngoài → chỉ còn một nhà cung cấp → Bottleneck. Rủi ro đến từ điều khoản hợp đồng, không phải từ thị trường.\nQuay lại câu hỏi slide 2: AV đã vào ô Bottleneck ngay lúc ký hợp đồng venue.\nAlt-text: ba hạng mục của cùng một khách sạn nằm ở ba ô khác nhau; mũi tên cho thấy phòng ngủ dịch từ Leverage sang Bottleneck vào tháng 12.",
  });
  const geo = matrix(s, M, 2.0, 7.4, 4.8, {}, { nameSize: 14, symbol: 0.22 });
  const pin = (g, dx, dy, label, color) => {
    const x = g.x + dx, y = g.y + dy;
    card(s, x, y, 2.9, 0.62, C.white, color);
    T(s, label, { x: x + 0.12, y, w: 2.7, h: 0.62, fontSize: 13, bold: true, valign: "middle" });
    return { x, y };
  };
  pin(geo.strategic, 0.2, 0.75, "Ballroom gala 12/12", C.purple);
  const r = pin(geo.leverage, 0.2, 0.75, "80 phòng ngủ", C.blue);
  pin(geo.bottleneck, 0.2, 1.4, "AV nội bộ (bắt buộc)", C.pink);
  const gx = geo.bottleneck.x + 0.2, gy = geo.bottleneck.y + 0.6;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: gx, y: gy, w: 2.9, h: 0.55, rectRadius: 0.12, fill: { color: C.tPink }, line: { color: C.blue, width: 1.25, dashType: "dash" } });
  T(s, "80 phòng ngủ · tháng 12", { x: gx + 0.12, y: gy, w: 2.7, h: 0.55, fontSize: 12, italic: true, valign: "middle" });
  arrow(s, r.x + 1.4, r.y + 0.62, gx, gy + 0.27, C.ink, false, 2);
  T(s, "tháng 12 →", { x: r.x + 0.3, y: r.y + 0.75, w: 1.5, h: 0.3, fontSize: 12, italic: true, color: C.ink });
  const rx = M + 7.8, rw = CW - 7.8;
  T(s, "Vì sao AV tăng 30% mà Nova bó tay?", { x: rx, y: 2.05, w: rw, h: 0.9, fontSize: 19, bold: true, color: C.pink === C.pink ? "E03A62" : C.ink, valign: "top" });
  T(s, "AV đã vào ô Bottleneck ngay lúc ký hợp đồng venue có điều khoản AV nội bộ bắt buộc.", { x: rx, y: 3.0, w: rw, h: 1.3, fontSize: 16, valign: "top" });
  card(s, rx, 4.45, rw, 2.0, C.tYellow, C.yellow);
  T(s, [
    { text: "Xử lý trước khi ký:", options: { bold: true, breakLine: true } },
    { text: "đưa báo giá AV vào đàm phán venue, hoặc giành quyền mang AV ngoài vào." },
  ], { x: rx + 0.25, y: 4.45, w: rw - 0.5, h: 2.0, fontSize: 16, valign: "middle", paraSpaceAfter: 4 });
}

// ───────────────────────── Slide 12 — matrix moves ─────────────────────────
{
  const s = base("k71", "Ma trận là ảnh chụp: mùa, quy mô và điều khoản làm hạng mục đổi ô", {
    source: "S01 (phê bình mô hình) · S08, S13 · S18 (+20–40% mùa cao điểm, chưa KCC) · S20 · S23, S24.",
    notes: "Kết quả xếp ô là ảnh chụp tại một thời điểm, cần rà soát định kỳ.\nHiểu lầm thường gặp (xử lý chủ động):\n1. “Kraljic xếp nhà cung cấp” → xếp HẠNG MỤC; một nhà cung cấp có thể ở nhiều ô.\n2. “Hạng mục tốn tiền nhất là Strategic” → chi tiêu lớn ≠ supply risk cao; hạng mục rẻ vẫn có thể là Bottleneck (AV nội bộ, giấy phép).\n3. “Non-critical là không cần quan tâm” → không khó mua, nhưng vẫn phải làm đúng.\n4. “Xếp ô một lần là xong” → xếp theo từng sự kiện, từng thời điểm.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const drivers = [
    ["Mùa cao điểm", "Tháng 10–12, lễ tết → supply risk tăng", C.orange],
    ["Quy mô", "200 khách: Leverage · 40.000 khách ở TP.HCM: gần như luôn Strategic/Bottleneck", C.blue],
    ["Điều khoản", "Độc quyền (AV nội bộ, bán vé) → Bottleneck ngay lập tức", C.pink],
    ["Hành động của agency", "Giữ chỗ sớm, dự phòng, cam kết nhiều năm → kéo hạng mục ra khỏi Bottleneck", C.green],
  ];
  const cw = (CW - 0.3) / 2;
  drivers.forEach(([h, d, c], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 1.5;
    card(s, x, y, cw, 1.3, C.white, C.line);
    s.addShape(pres.shapes.RIGHT_ARROW, { x: x + 0.25, y: y + 0.4, w: 0.65, h: 0.5, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, h, { x: x + 1.1, y: y + 0.12, w: cw - 1.3, h: 0.45, fontSize: 17, bold: true, valign: "middle" });
    T(s, d, { x: x + 1.1, y: y + 0.55, w: cw - 1.3, h: 0.7, fontSize: 13, valign: "top" });
  });
  T(s, "Bốn hiểu lầm thường gặp", { x: M, y: 5.1, w: CW, h: 0.35, fontSize: 13, bold: true, color: C.muted });
  const myths = ["Xếp hạng mục, không xếp nhà cung cấp", "Tốn tiền nhất ≠ Strategic", "Non-critical vẫn phải làm đúng", "Xếp theo từng sự kiện, rà soát định kỳ"];
  const mw = (CW - 0.45) / 4;
  myths.forEach((m, i) => {
    const x = M + i * (mw + 0.15);
    card(s, x, 5.5, mw, 1.0, C.tYellow, C.tYellow);
    T(s, m, { x: x + 0.15, y: 5.5, w: mw - 0.3, h: 1.0, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("k71", "Thực hành 1 · Xếp hạng mục cho gala 12/12 của An Phát", {
    source: "Phiếu W07_activity_S3_kraljic_su_kien_key_account.md · Tình huống giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Phát phiếu, đọc lời mở đầu, đi vòng. Đồng hồ đếm ngược 10 / 6 / 4 phút.\n46–50’: chốt với 2 nhóm xếp khác nhau (LED, ca sĩ). Có thể vẽ nhanh ma trận 2×2 trên bảng để đặt các hạng mục gây tranh cãi.\nGiữ lại giấy A1 — là đầu vào cho đóng vai ở S6.",
  });
  T(s, "Nova · An Phát · ~600 khách · 12/12 · khách sạn 5 sao Q.1 · bắt buộc AV nội bộ và F&B khách sạn", { x: M, y: 1.95, w: CW, h: 0.4, fontSize: 14, color: C.muted });
  const items = ["Ballroom hội nghị + gala", "80 phòng ngủ (11–12/12)", "AV nội bộ khách sạn", "Màn LED + sân khấu gala", "F&B gala 600 khách",
    "Ca sĩ headline", "In ấn", "Xe đưa đón sân bay", "Quà VIP 600 phần", "Quay phim + livestream"];
  card(s, M, 2.5, 5.9, 4.2, C.white, C.line);
  T(s, "10 hạng mục", { x: M + 0.3, y: 2.62, w: 5.3, h: 0.4, fontSize: 15, bold: true });
  items.forEach((it, i) => {
    const col = Math.floor(i / 5), row = i % 5;
    const x = M + 0.3 + col * 2.8, y = 3.12 + row * 0.66;
    badge(s, x, y + 0.05, 0.38, [C.orange, C.blue, C.pink, C.purple, C.green][row], String(i + 1), row === 0 ? C.ink : C.white);
    T(s, it, { x: x + 0.48, y, w: 2.25, h: 0.5, fontSize: 12, valign: "middle" });
  });
  const steps = [
    ["10’", "Chấm profit impact & supply risk (1–5), xếp vào ma trận trên giấy A1", C.orange],
    ["6’", "Chọn 3 hạng mục ở 3 ô: vị thế nhà cung cấp + 1 hành động (Procurement hay Buying?)", C.purple],
    ["4’", "Nếu dời sang 15/4: đánh dấu ➜ hạng mục đổi ô, kèm 1 câu lý do", C.blue],
  ];
  const rx = M + 6.2, rw = CW - 6.2;
  steps.forEach(([t, d, c], i) => {
    const y = 2.5 + i * 1.1;
    badge(s, rx, y + 0.08, 0.8, c, t, c === C.orange ? C.ink : C.white);
    T(s, d, { x: rx + 1.0, y, w: rw - 1.0, h: 0.95, fontSize: 14, valign: "middle" });
  });
  card(s, rx, 5.9, rw, 0.8, C.tPink, C.pink);
  T(s, "Xếp HẠNG MỤC, không xếp tên công ty — một khách sạn có thể ở nhiều ô.", { x: rx + 0.25, y: 5.9, w: rw - 0.5, h: 0.8, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── Break ─────────────────────────
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  const cols = [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink];
  cols.forEach((c, i) => s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 7   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. GV xếp cặp cho S6 (ghép hai nhóm có ma trận khác nhau) trong giờ giải lao. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── Slide 13 — 40 events ─────────────────────────
{
  const s = base("k72", "Nova làm 40 sự kiện một năm — không thể đi mua từ đầu mỗi lần", {
    notes: "Mở đoạn S4: “Ở S3 các bạn vừa xếp hạng mục cho MỘT sự kiện. Nhưng Nova làm 40 sự kiện một năm. Nếu mỗi sự kiện lại đi tìm nhà cung cấp từ đầu, Nova sẽ luôn ở thế yếu. Vì vậy agency cần hai cấp làm việc với nhà cung cấp.”\nAlt-text: lưới 40 chấm tròn tượng trưng 40 sự kiện mỗi năm.",
  });
  const cols = [C.orange, C.blue, C.green, C.purple, C.pink, C.yellow];
  for (let i = 0; i < 40; i++) {
    const c = i % 10, r = Math.floor(i / 10);
    const col = cols[(c + r * 3) % cols.length];
    s.addShape(pres.shapes.OVAL, { x: M + 0.1 + c * 0.6, y: 2.5 + r * 0.72, w: 0.46, h: 0.46, fill: { color: col }, line: { color: col, width: 0 } });
  }
  T(s, "40 sự kiện / năm", { x: M + 0.1, y: 5.45, w: 5.8, h: 0.5, fontSize: 16, color: C.muted });
  const rx = M + 6.6, rw = CW - 6.6;
  T(s, "Nếu mỗi sự kiện lại tìm nhà cung cấp từ đầu, Nova sẽ luôn ở thế yếu.", { x: rx, y: 2.4, w: rw, h: 1.8, fontSize: 24, bold: true, valign: "top" });
  card(s, rx, 4.45, rw, 1.35, C.tBlue, C.blue);
  T(s, "→ Agency cần hai cấp làm việc với nhà cung cấp.", { x: rx + 0.3, y: 4.45, w: rw - 0.6, h: 1.35, fontSize: 19, bold: true, valign: "middle" });
}

// ───────────────────────── Slide 14 — definitions ─────────────────────────
{
  const s = base("k72", "Procurement là dài hạn, Buying là từng giao dịch", {
    source: "S03: CIPS, What is procurement?",
    notes: "Theo CIPS: Procurement là cách tiếp cận dài hạn — gồm tìm nguồn (sourcing), đàm phán, quản lý hợp đồng, phát triển nhà cung cấp. Purchasing/Buying là mua trực tiếp ngắn hạn, chỉ hoàn tất giao dịch, mang tính “thụ động, giao dịch”.",
  });
  T(s, "“…procurement is a long-term approach to acquiring goods and services, and purchasing is the short-term direct purchasing of products…”",
    { x: M, y: 2.05, w: CW, h: 1.25, fontSize: 20, italic: true, color: C.purple, valign: "middle" });
  T(s, "— CIPS (S03)", { x: M, y: 3.3, w: CW, h: 0.35, fontSize: 13, color: C.muted });
  const cw = (CW - 0.3) / 2;
  [["Procurement", "dài hạn", "Tìm nguồn · đàm phán · quản lý hợp đồng · phát triển nhà cung cấp", C.blue, C.tBlue],
   ["Buying", "từng giao dịch", "Hoàn tất một lần mua cho một nhu cầu cụ thể", C.orange, C.tOrange]].forEach(([h, k, d, c, t], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 3.9, cw, 2.6, t, c);
    T(s, h, { x: x + 0.35, y: 4.1, w: cw - 0.7, h: 0.6, fontSize: 26, bold: true });
    T(s, k, { x: x + 0.35, y: 4.7, w: cw - 0.7, h: 0.4, fontSize: 16, italic: true, color: C.muted });
    T(s, d, { x: x + 0.35, y: 5.2, w: cw - 0.7, h: 1.1, fontSize: 16, valign: "top" });
  });
}

// ───────────────────────── Slide 15 — two levels ─────────────────────────
{
  const s = base("k72", "Agency cần hai cấp làm việc với nhà cung cấp", {
    source: "S03 (CIPS); S11 (EGG Events có Global Procurement Director); S25 (preferred supplier program).",
    notes: "Nói rõ: cả hai cấp đều ở BÊN TRONG AGENCY — không phải phòng mua hàng của khách hàng.\nPreferred supplier program: danh sách nhà cung cấp chọn trước dựa trên giá ưu đãi, giá trị cộng thêm, năng lực, hiệu quả; không cần duyệt lại từ đầu cho từng giao dịch (S25).",
  });
  const hdrY = 2.0, c0 = 2.3, cw = (CW - c0 - 0.2) / 2;
  const x1 = M + c0, x2 = x1 + cw + 0.2;
  [["Procurement — cấp chiến lược", C.blue, x1], ["Buying — cấp thực thi", C.orange, x2]].forEach(([t, c, x]) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: hdrY, w: cw, h: 0.55, rectRadius: 0.12, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, t, { x: x + 0.2, y: hdrY, w: cw - 0.4, h: 0.55, fontSize: 16, bold: true, color: c === C.orange ? C.ink : C.white, valign: "middle" });
  });
  const rows = [
    ["Câu hỏi", "Làm việc với ai, theo điều kiện khung nào, cho cả năm?", "Sự kiện này: đặt gì, của ai, giá bao nhiêu, khi nào?"],
    ["Chu kỳ", "Năm / quý", "Từng sự kiện"],
    ["Người làm", "Ban giám đốc, trưởng sản xuất; vị trí procurement riêng ở agency lớn", "Producer, quản lý dự án, kế toán dự án"],
    ["Công việc", "Phân tích Kraljic · danh sách nhà cung cấp ưu tiên · thỏa thuận khung · đánh giá định kỳ", "Báo giá, chốt · hợp đồng/đơn hàng · cọc · nghiệm thu · thanh toán · ghi nhận hiệu quả"],
  ];
  const hs = [0.7, 0.55, 0.95, 1.2];
  let y = hdrY + 0.7;
  rows.forEach(([k, a, b], i) => {
    const h = hs[i];
    if (i % 2 === 0) s.addShape(pres.shapes.RECTANGLE, { x: M, y, w: CW, h, fill: { color: "F3F0E6" }, line: { color: "F3F0E6", width: 0 } });
    T(s, k, { x: M + 0.2, y, w: c0 - 0.3, h, fontSize: 15, bold: true, valign: "middle" });
    T(s, a, { x: x1 + 0.2, y, w: cw - 0.4, h, fontSize: 14, valign: "middle" });
    T(s, b, { x: x2 + 0.2, y, w: cw - 0.4, h, fontSize: 14, valign: "middle" });
    y += h + 0.08;
  });
}

// ───────────────────────── Slide 16 — procurement per quadrant ─────────────────────────
{
  const s = base("k72", "Cấp Procurement quyết định chiến lược cho từng ô", {
    source: "Nhận định của người soạn, dựa trên chiến lược gốc của CIPS (S01).",
    notes: "Cấp Buying làm đúng quy trình mà cấp Procurement đã đặt ra cho từng ô.\nAlt-text: ma trận Kraljic, mỗi ô ghi việc của cấp Procurement.",
  });
  matrix(s, M, 2.0, 8.6, 4.8, {
    leverage: { body: "Danh sách 2–3 nhà cung cấp ưu tiên; so giá định kỳ; gom khối lượng cả năm" },
    strategic: { body: "1–2 đối tác dài hạn; chia sẻ lịch sự kiện Key Account sớm; cam kết khối lượng nhiều năm" },
    noncritical: { body: "Mẫu đơn hàng chuẩn; cấp Buying tự quyết trong hạn mức" },
    bottleneck: { body: "Dự phòng đã thẩm định; điều khoản khung về giá và hủy; theo dõi hợp đồng có độc quyền" },
  }, { bodySize: 14 });
  const rx = M + 9.0, rw = CW - 9.0;
  card(s, rx, 2.0, rw, 4.25, C.tBlue, C.blue);
  T(s, [
    { text: "Procurement", options: { bold: true, breakLine: true } },
    { text: "đặt luật chơi cho từng ô.", options: { breakLine: true } },
    { text: " ", options: { breakLine: true } },
    { text: "Buying", options: { bold: true, breakLine: true } },
    { text: "làm đúng luật đó cho từng sự kiện." },
  ], { x: rx + 0.3, y: 2.2, w: rw - 0.6, h: 3.85, fontSize: 18, valign: "middle" });
}

// ───────────────────────── Slide 17 — customer of choice ─────────────────────────
{
  const s = base("k72", "Agency chủ động trở thành customer of choice", {
    source: "S05 (Grundfos) · S06 (CWT) · S09 (Smart Meetings) · S14 (Smart Meetings, chưa KCC).",
    notes: "Trong thị trường nghiêng về người bán, agency cần chủ động trở thành khách hàng được nhà cung cấp ưu tiên.\nPhạm vi: chỉ nói AGENCY LÀM GÌ. Không phân tích cách nhà cung cấp chấm điểm agency (Supplier Preferencing).\nMarriott/Hilton 2018 cắt hoa hồng 10% → 7% (đã KCC); Marriott giữ mức cũ với một số công ty sourcing lớn có hợp đồng (chưa KCC).",
  });
  const acts = [
    ["Gom chi tiêu", "Thu gọn số nhà cung cấp, dồn booking cho nhà cung cấp ưu tiên", C.orange],
    ["Cam kết dài hạn", "Cùng một khách sạn nhiều năm có thể được miễn phụ thu AV", C.purple],
    ["Quy mô + hợp đồng khung", "Marriott giữ mức hoa hồng cũ cho công ty sourcing lớn có hợp đồng", C.blue],
    ["Giữ cam kết thanh toán", "Trả cọc trễ là mất ngay vị thế này", C.pink],
  ];
  const cw = (CW - 0.3) / 2;
  acts.forEach(([h, d, c], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 1.45;
    card(s, x, y, cw, 1.25, C.white, C.line);
    badge(s, x + 0.25, y + 0.3, 0.65, c, String(i + 1), c === C.orange ? C.ink : C.white);
    T(s, h, { x: x + 1.1, y: y + 0.12, w: cw - 1.3, h: 0.45, fontSize: 17, bold: true, valign: "middle" });
    T(s, d, { x: x + 1.1, y: y + 0.55, w: cw - 1.3, h: 0.6, fontSize: 13, valign: "top" });
  });
  card(s, M, 5.1, CW, 1.45, C.tYellow, C.yellow);
  T(s, [
    { text: "“Being a customer of choice and having less suppliers that you work with will enable preferential rates and prioritisation.”", options: { italic: true, breakLine: true } },
    { text: "— CWT (S06)", options: { color: C.muted } },
  ], { x: M + 0.35, y: 5.1, w: CW - 0.7, h: 1.45, fontSize: 16, valign: "middle", paraSpaceAfter: 4 });
}

// ───────────────────────── Slide 18 — four cases ─────────────────────────
{
  const s = base("k72", "Khi hai cấp gãy, sự kiện sụp — hoặc agency mất quyền mặc cả", {
    source: "S15: VnExpress, VietNamNet (2025) · S16: Dân trí (2023) · S14: Smart Meetings, MPI (2018) · S21: Người Lao Động, VN News (2025).",
    notes: "Mỗi case 1–2 phút, 1 câu hỏi/case.\n• Về đây bốn cánh chim trời: nghệ sĩ, ekip, tác quyền là hạng mục Strategic; cấp Buying không giữ cam kết thì quan hệ chiến lược sụp.\n• K-Pop Open Air #2: “hợp đồng ký đủ + cọc đúng hạn” là điều kiện tối thiểu.\n• Marriott–Hilton: nhà cung cấp tập trung có thể đổi luật chơi; agency có quy mô và hợp đồng khung được bảo vệ tốt hơn.\n• Vietravel: CHỈ đặt câu hỏi, không gán động cơ (doanh nghiệp không nói trực tiếp là để chủ động nguồn cung).\nNếu trễ giờ: chỉ kể case 1 và 3.\n[NEEDS PROFESSOR INPUT: case agency VN thành công; ví dụ cấp Procurement của agency VN]",
  });
  const cases = [
    ["Về đây bốn cánh chim trời", "Hà Nội · 12/2025", "Cọc 50% trễ hơn 10 ngày, tác quyền chưa cấp phép → ekip và nghệ sĩ rút; show hủy khi khán giả đã vào", "Hạng mục nào là Strategic ở đây?", C.pink, C.tPink],
    ["K-Pop Festival Open Air #2", "Hà Nội · 12/2023", "2 ngày trước show, ca sĩ chưa nhận cọc, hợp đồng chưa ký đủ → show dừng", "Điều kiện tối thiểu để giữ nhà cung cấp Strategic?", C.pink, C.tPink],
    ["Marriott – Hilton", "Mỹ · 2018", "Hai chuỗi khách sạn cắt hoa hồng cho trung gian từ 10% xuống 7%", "Agency nào được bảo vệ tốt hơn?", C.blue, C.tBlue],
    ["Vietravel – Vietravel Airlines", "Việt Nam · 2019–2026", "Lập hãng bay năm 2020; đến 2025 thoái toàn bộ vốn để tập trung năng lực cốt lõi", "Supply risk cao: xây đối tác hay tự sở hữu?", C.orange, C.tOrange],
  ];
  const cw = (CW - 0.3) / 2;
  cases.forEach(([h, when, d, q, c, t], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 1.98 + Math.floor(i / 2) * 2.45;
    card(s, x, y, cw, 2.3, t, c);
    T(s, h, { x: x + 0.3, y: y + 0.15, w: cw - 2.6, h: 0.45, fontSize: 16, bold: true, valign: "middle" });
    T(s, when, { x: x + cw - 2.4, y: y + 0.15, w: 2.1, h: 0.45, fontSize: 12, color: C.muted, align: "right", valign: "middle" });
    T(s, d, { x: x + 0.3, y: y + 0.65, w: cw - 0.6, h: 0.9, fontSize: 13, valign: "top" });
    T(s, [{ text: "? ", options: { bold: true, color: c === C.orange ? "D9622B" : (c === C.blue ? "0A7FB5" : "E03A62") } }, { text: q, options: { bold: true } }],
      { x: x + 0.3, y: y + 1.6, w: cw - 0.6, h: 0.55, fontSize: 14, valign: "middle" });
  });
}

// ───────────────────────── Slide 19 — feedback loop ─────────────────────────
{
  const s = base("k72", "Dữ liệu từ từng sự kiện nuôi quyết định chiến lược", {
    source: "S11: Scofidio (2026), Skift Meetings.",
    notes: "Dữ liệu từng sự kiện (đúng hẹn không, phát sinh bao nhiêu, xử lý sự cố ra sao) là đầu vào để cấp Procurement đánh giá nhà cung cấp và cập nhật danh sách ưu tiên.\nRanh giới: quy trình thực thi chi tiết (RFP/RFQ, tiêu chí chọn nhà cung cấp, site check) để dành Buổi 10.\nAlt-text: vòng tròn ba bước Buying → đánh giá nhà cung cấp → Procurement → quay lại Buying.",
  });
  const nodes = [
    ["Buying", "từng sự kiện: đúng hẹn? phát sinh? xử lý sự cố?", 0.6 + 2.1, 2.05, C.orange, C.tOrange],
    ["Đánh giá nhà cung cấp", "ghi nhận hiệu quả sau sự kiện", 0.6 + 4.2, 4.55, C.green, C.tGreen],
    ["Procurement", "cập nhật danh sách ưu tiên, thỏa thuận khung", 0.6, 4.55, C.blue, C.tBlue],
  ];
  const nw = 3.3, nh = 1.75;
  nodes.forEach(([h, d, x, y, c, t]) => {
    card(s, x, y, nw, nh, t, c);
    T(s, h, { x: x + 0.2, y: y + 0.15, w: nw - 0.4, h: 0.5, fontSize: 17, bold: true, align: "center" });
    T(s, d, { x: x + 0.2, y: y + 0.7, w: nw - 0.4, h: 0.9, fontSize: 13, align: "center", valign: "top" });
  });
  arrow(s, 2.7 + nw - 0.4, 2.05 + nh + 0.05, 4.8 + nw / 2, 4.5, C.ink, false, 2.5);
  arrow(s, 4.8 - 0.1, 4.55 + nh / 2, 0.6 + nw + 0.1, 4.55 + nh / 2, C.ink, false, 2.5);
  arrow(s, 0.6 + nw / 2, 4.5, 2.7 + 0.4, 2.05 + nh + 0.05, C.ink, false, 2.5);
  const rx = 8.75, rw = W - M - rx;
  card(s, rx, 2.05, rw, 3.2, C.tYellow, C.yellow);
  T(s, [
    { text: "“Supplier feedback, performance insights, and negotiation lessons shouldn't disappear when an event ends.”", options: { italic: true, breakLine: true } },
    { text: " ", options: { breakLine: true } },
    { text: "— Virginie Raimondi, Global Procurement Director, EGG Events", options: { fontSize: 12, color: C.muted } },
  ], { x: rx + 0.3, y: 2.05, w: rw - 0.6, h: 3.2, fontSize: 17, valign: "middle" });
  T(s, "RFP / RFQ, chọn nhà cung cấp, site check → Buổi 10", { x: rx, y: 5.55, w: rw, h: 0.7, fontSize: 13, color: C.muted, valign: "top" });
}

// ───────────────────────── Slide 20 — who is who ─────────────────────────
{
  const s = base("k73", "Trong 7.3: Key Account là người mua, KAMer là người của agency", {
    notes: "Quyết định GV 27/9/2026: Customer (Buyer) = Key Account (Ngân hàng An Phát); KAMer = người của agency (Nova Events).\nMở đoạn: “Cuộc gọi khó nhất của một KAMer thường bắt đầu bằng câu: ‘Năm nay bên mình cần giảm 15%.’ Hôm nay các bạn sẽ thấy: KAMer trả lời tốt câu đó NHỜ hiểu biết về nhà cung cấp vừa học ở 7.1–7.2.”\nAlt-text: sơ đồ hai bên bàn đàm phán — Key Account (người mua) và KAMer của agency; phía sau KAMer là các nhà cung cấp.",
  });
  // table
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.9, y: 3.55, w: 3.5, h: 2.0, rectRadius: 0.3, fill: { color: "EDE8DA" }, line: { color: C.line, width: 1 } });
  T(s, "bàn đàm phán", { x: 4.9, y: 3.55, w: 3.5, h: 2.0, fontSize: 14, color: C.muted, align: "center", valign: "middle", italic: true });
  const side = (x, h, sub, d, c, t) => {
    card(s, x, 3.25, 3.6, 2.6, t, c);
    T(s, h, { x: x + 0.25, y: 3.40, w: 3.1, h: 0.55, fontSize: 22, bold: true, align: "center" });
    T(s, sub, { x: x + 0.25, y: 3.95, w: 3.1, h: 0.4, fontSize: 14, align: "center", color: C.muted });
    T(s, d, { x: x + 0.25, y: 4.45, w: 3.1, h: 1.2, fontSize: 16, align: "center", valign: "top" });
  };
  side(M + 0.3, "Key Account", "Customer · Buyer", "Ngân hàng An Phát", C.purple, C.tPurple);
  side(W - M - 3.9, "KAMer", "người của agency", "Nova Events", C.pink, C.tPink);
  T(s, "phía sau KAMer: nhà cung cấp + ma trận Kraljic", { x: W - M - 3.9, y: 6.00, w: 3.6, h: 0.6, fontSize: 12, color: C.muted, align: "center" });
  card(s, M + 2.6, 2.35, 8.0, 0.7, C.tYellow, C.yellow);
  T(s, "“Năm nay bên mình cần giảm 15%.”", { x: M + 2.6, y: 2.35, w: 8.0, h: 0.7, fontSize: 20, bold: true, italic: true, align: "center", valign: "middle" });
}

// ───────────────────────── Slide 21 — distributive vs integrative ─────────────────────────
{
  const s = base("k73", "Đàm phán giá trị là làm to chiếc bánh trước khi chia", {
    source: "S12: PON Staff (2026), Program on Negotiation at Harvard Law School.",
    notes: "[VERIFY: định nghĩa value-based negotiation của môn — chưa có nguồn chuẩn cho quan hệ agency–client; môn học định nghĩa dựa trên integrative bargaining (PON)]\nValue-based negotiation trong môn: KAMer đàm phán kiểu tích hợp; mọi nhượng bộ được neo vào giá trị Key Account nhận được và vào rủi ro nhượng bộ đó tạo ra cho chính sự kiện của Key Account.\nLogrolling: nhượng ở vấn đề mình ít coi trọng để được ở vấn đề mình coi trọng.",
  });
  const c0 = 2.4, cw = (CW - c0 - 0.2) / 2, x1 = M + c0, x2 = x1 + cw + 0.2;
  [["Distributive — phân phối", C.muted, "EFECE2", x1, C.ink], ["Integrative — tích hợp", C.green, C.green, x2, C.white]].forEach(([t, lc, f, x, tc]) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.0, w: cw, h: 0.55, rectRadius: 0.12, fill: { color: f }, line: { color: lc, width: 0.75 } });
    T(s, t, { x: x + 0.2, y: 2.0, w: cw - 0.4, h: 0.55, fontSize: 16, bold: true, color: tc, valign: "middle" });
  });
  const rows = [
    ["Hình dung", "Chia chiếc bánh cố định: bên này được thì bên kia mất", "Làm to chiếc bánh trước khi chia"],
    ["Trên bàn", "Thường chỉ một vấn đề: giá", "Giá, phạm vi, thời hạn hợp đồng, lịch thanh toán, mức dịch vụ, rủi ro"],
    ["Kỹ thuật", "Giữ thông tin, nhượng từng bước", "Tìm lợi ích sau lập trường; đánh đổi qua nhiều vấn đề (logrolling)"],
  ];
  let y = 2.7;
  rows.forEach(([k, a, b], i) => {
    const h = 0.85;
    if (i % 2 === 0) s.addShape(pres.shapes.RECTANGLE, { x: M, y, w: CW, h, fill: { color: "F3F0E6" }, line: { color: "F3F0E6", width: 0 } });
    T(s, k, { x: M + 0.2, y, w: c0 - 0.3, h, fontSize: 15, bold: true, valign: "middle" });
    T(s, a, { x: x1 + 0.2, y, w: cw - 0.4, h, fontSize: 14, valign: "middle", color: C.muted });
    T(s, b, { x: x2 + 0.2, y, w: cw - 0.4, h, fontSize: 14, valign: "middle" });
    y += h + 0.08;
  });
  card(s, M, 5.6, CW, 1.05, C.tGreen, C.green);
  T(s, [
    { text: "Value-based negotiation (cách dùng của môn): ", options: { bold: true } },
    { text: "mọi nhượng bộ neo vào giá trị Key Account nhận được và rủi ro cho chính sự kiện." },
  ], { x: M + 0.3, y: 5.6, w: CW - 0.6, h: 1.05, fontSize: 15, valign: "middle" });
}

// ───────────────────────── Slide 22 — risk vs value ─────────────────────────
{
  const s = base("k73", "Nhượng ở Leverage/Non-critical, bảo vệ Strategic/Bottleneck bằng dữ kiện", {
    notes: "Đây là mối nối giữa 7.1 và 7.3. Khi Key Account đưa yêu cầu (giảm giá, đổi nhà cung cấp, cắt hạng mục), KAMer hỏi: yêu cầu này chạm vào hạng mục ở ô nào?\nCâu chốt nói to: “Quản trị nhà cung cấp tốt là năng lực tạo nên sức mạnh đàm phán của agency với Key Account. KAMer nào không biết hạng mục nào là Bottleneck sẽ nhượng nhầm chỗ, và trả giá vào ngày sự kiện.”\nAlt-text: ma trận chia hai vùng — cột trái (Leverage, Non-critical) nhượng được có điều kiện; cột phải (Strategic, Bottleneck) phải bảo vệ.",
  });
  const geo = matrix(s, M, 2.0, 7.4, 4.8, {}, { nameSize: 14, symbol: 0.22 });
  const band = (g1, g2, label, c) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: g1.x - 0.04, y: g1.y - 0.04, w: g1.w + 0.08, h: g2.y + g2.h - g1.y + 0.08, rectRadius: 0.14, fill: { type: "none" }, line: { color: c, width: 3.5 } });
    [g1, g2].forEach((g, i) => {
      const y = g.y + 0.75;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: g.x + 0.25, y, w: g.w - 0.5, h: 0.95, rectRadius: 0.15, fill: { color: i ? c : C.white }, line: { color: c, width: 1.5 } });
      T(s, i ? label[1] : label[0], { x: g.x + 0.35, y, w: g.w - 0.7, h: 0.95, fontSize: 14, bold: true, color: i ? (c === C.green ? C.ink : C.white) : C.ink, align: "center", valign: "middle" });
    });
  };
  band(geo.leverage, geo.noncritical, ["VALUE", "nhượng có điều kiện"], C.green);
  band(geo.strategic, geo.bottleneck, ["RISK", "giải thích, đổi chỗ khác"], C.pink);
  const rx = M + 7.8, rw = CW - 7.8;
  T(s, [
    { text: "Value: ", options: { bold: true } },
    { text: "phương án rẻ hơn (gom xe, chuẩn hóa in ấn, đổi quà) — đổi lại thời hạn hợp đồng, lịch thanh toán, chốt sớm", options: { breakLine: true } },
  ], { x: rx, y: 2.0, w: rw, h: 1.55, fontSize: 15, valign: "top" });
  T(s, [
    { text: "Risk: ", options: { bold: true } },
    { text: "không nhượng im lặng; nêu dữ kiện và hệ quả, đề xuất giảm chi phí ở chỗ khác" },
  ], { x: rx, y: 3.6, w: rw, h: 1.3, fontSize: 15, valign: "top" });
  card(s, rx, 5.0, rw, 1.55, C.tYellow, C.yellow);
  T(s, "Quản trị nhà cung cấp tốt tạo nên sức mạnh đàm phán của agency.", { x: rx + 0.25, y: 5.0, w: rw - 0.5, h: 1.55, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── Slide 23 — four tools ─────────────────────────
{
  const s = base("k73", "KAMer có bốn công cụ ngoài việc giảm giá", {
    source: "S04, S05 (Amex GBT, chưa KCC) · S10 · S11 (Santor) · S15, S16 · S19 (The Drum; agency marketing, không phải event agency) · S21 · S22.",
    notes: "1. Minh bạch lý do chi phí: benchmark theo thị trường, mùa, định dạng; cân nhắc ngày thấp điểm, điểm đến phụ (S10). Cắt ngân sách là thách thức của 30% chuyên gia năm 2026 (S05).\n2. Điều khoản: “…some of the biggest financial and legal protections come from negotiating contract terms — attrition, cancellation, force majeure, liability limits, payment schedules, service levels…” (Brian Santor, S11). Điều khoản đã ký với nhà cung cấp phải phản ánh vào hợp đồng với Key Account.\n[VERIFY: chuyển điều khoản NCC sang hợp đồng khách hàng — đối chiếu Bộ luật Dân sự 2015 và Luật Thương mại]\n3. ROI/ROE: chỉ 24% tổ chức có chỉ số ROI trong chính sách sự kiện; Amex GBT đề xuất Return on Experience.\n4. Dòng tiền: NCC Strategic đòi cọc sớm (S15, S16); 97% agency marketing Mỹ gặp khách trả chậm (S19); nhiều show VN dùng tiền vé bán sớm để trả cọc (S22); một DN lữ hành–MICE niêm yết: doanh thu 2025 ~7.200 tỷ, LNST < 1 tỷ, biên gộp Q4 ~6% (S21, người soạn tự tính).\n[NEEDS PROFESSOR INPUT: biên lợi nhuận thực tế của một event agency VN]",
  });
  const tools = [
    ["Minh bạch chi phí", "Benchmark theo thị trường, mùa, định dạng; gợi ý ngày thấp điểm", C.orange, C.tOrange],
    ["Điều khoản, không chỉ giá", "Cọc, hủy, attrition, bất khả kháng — phản ánh vào hợp đồng với Key Account", C.purple, C.tPurple],
    ["ROI / ROE", "Chỉ 24% tổ chức có chỉ số ROI; đo thêm Return on Experience", C.blue, C.tBlue],
    ["Dòng tiền", "Nhà cung cấp đòi cọc sớm, khách trả chậm — agency bị kẹp giữa", C.green, C.tGreen],
  ];
  const cw = (CW - 0.3) / 2;
  tools.forEach(([h, d, c, t], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.0 + Math.floor(i / 2) * 1.75;
    card(s, x, y, cw, 1.55, t, c);
    badge(s, x + 0.25, y + 0.42, 0.7, c, String(i + 1), c === C.orange ? C.ink : C.white);
    T(s, h, { x: x + 1.2, y: y + 0.15, w: cw - 1.4, h: 0.5, fontSize: 18, bold: true, valign: "middle" });
    T(s, d, { x: x + 1.2, y: y + 0.65, w: cw - 1.4, h: 0.8, fontSize: 14, valign: "top" });
  });
  T(s, "→ Mỗi nhượng bộ giá ăn thẳng vào một biên lợi nhuận rất mỏng, nên phải đổi lấy thứ gì đó.", { x: M, y: 5.65, w: CW, h: 0.8, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── Slide 24 — phrases ─────────────────────────
{
  const s = base("k73", "Một câu nói có thể chuyển cuộc đàm phán từ giá sang giá trị", {
    notes: "Cho lớp đoán mỗi câu dùng kỹ thuật nào, rồi mới lật đáp án:\n1 → tìm lợi ích đằng sau lập trường.\n2 → tách Risk và Value.\n3 → đánh đổi qua nhiều vấn đề, dùng vị thế customer of choice.\n4 → chuyển điều khoản nhà cung cấp sang hợp đồng khách hàng.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const qs = [
    "“15% đó là mục tiêu cho cả danh mục hay riêng sự kiện này? Năm nay ưu tiên số một của anh/chị cho hội nghị là gì?”",
    "“Có ba chỗ bên em giảm được mà khách mời gần như không nhận ra: xe đưa đón, in ấn, quà tặng. Còn ballroom và AV thì em xin giải thích vì sao cắt ở đó là chuyển rủi ro sang chính sự kiện của mình.”",
    "“Nếu mình chốt hợp đồng hai năm ngay bây giờ, bên em giữ được giá ballroom năm sau với khách sạn. Phần tiết kiệm đó em chuyển vào báo giá.”",
    "“Bên em đồng ý giãn lịch thanh toán, nhưng khoản cọc cho khách sạn và nghệ sĩ phải được chuyển trước ngày 15/11 — đó là điều kiện để giữ chỗ.”",
  ];
  const cols = [C.orange, C.pink, C.blue, C.purple];
  const hs = [0.85, 1.1, 0.95, 0.95];
  let y = 1.98;
  qs.forEach((q, i) => {
    card(s, M, y, CW, hs[i], C.white, C.line);
    badge(s, M + 0.22, y + hs[i] / 2 - 0.3, 0.6, cols[i], String(i + 1), i === 0 ? C.ink : C.white);
    T(s, q, { x: M + 1.05, y, w: CW - 1.3, h: hs[i], fontSize: 14, italic: true, valign: "middle" });
    y += hs[i] + 0.12;
  });
  T(s, "Mỗi câu dùng kỹ thuật nào?", { x: M, y: 6.35, w: CW, h: 0.4, fontSize: 14, bold: true, color: C.purple });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("k73", "Thực hành 2 · Đóng vai: An Phát đòi giảm 15% — đội Nova đáp lại", {
    source: "Phiếu W07_activity_S6_dam_phan_gia_tri.md · Tình huống giả định.",
    notes: "S6 — Thực hành 2 (30 phút). Đồng hồ 6 / 10 / 3 / 8 phút. 93–96’: phát thẻ vai (cắt riêng; không cho bên kia xem).\nNếu bế tắc hoặc chốt quá nhanh: dùng “biến cố” trong phần GV của phiếu S6.\nTổng kết luôn nhìn từ agency: mỗi yêu cầu chạm ô nào? Nova nhượng ở đâu và đổi lại gì? Bảo vệ Strategic/Bottleneck bằng dữ kiện hay chỉ bằng lời hứa?\nGhi biên bản 3 dòng của từng cặp lên bảng.",
  });
  card(s, M, 2.0, 6.1, 4.65, C.tPink, C.pink);
  T(s, "Ngày 20/10 · hợp đồng 2,4 tỷ đồng · gala 12/12", { x: M + 0.3, y: 2.15, w: 5.5, h: 0.45, fontSize: 14, bold: true, color: "C0294F" });
  T(s, "An Phát muốn:", { x: M + 0.3, y: 2.7, w: 5.5, h: 0.4, fontSize: 16, bold: true });
  T(s, [
    { text: "Giảm 15% giá trị hợp đồng", options: { bullet: true, breakLine: true } },
    { text: "Đổi AV sang đơn vị quen của ngân hàng (báo giá rẻ hơn)", options: { bullet: true, breakLine: true } },
    { text: "Giãn lịch thanh toán", options: { bullet: true, breakLine: true } },
    { text: "…nhưng giữ nguyên ca sĩ headline và chất lượng gala", options: { italic: true } },
  ], { x: M + 0.3, y: 3.15, w: 5.5, h: 2.4, fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  T(s, "3 cặp: nhóm An Phát (Key Account) ↔ đội KAM Nova · 1 người quan sát/nhóm", { x: M + 0.3, y: 5.65, w: 5.5, h: 0.85, fontSize: 13, color: C.ink, valign: "middle" });
  const steps = [["6’", "Chuẩn bị: đọc thẻ vai, mục tiêu, điểm dừng", C.orange], ["10’", "Đàm phán — kết bằng biên bản 3 dòng", C.pink],
    ["3’", "Lật thẻ; người quan sát đọc phiếu", C.purple], ["8’", "Tổng kết toàn lớp, từ góc agency", C.green]];
  const rx = M + 6.5, rw = CW - 6.5;
  steps.forEach(([t, d, c], i) => {
    const y = 2.0 + i * 0.95;
    badge(s, rx, y + 0.05, 0.75, c, t, c === C.orange ? C.ink : C.white);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 0.85, fontSize: 15, valign: "middle" });
  });
  card(s, rx, 5.9, rw, 0.75, C.tYellow, C.yellow);
  T(s, "Biên bản: đã thống nhất gì · mỗi bên đổi được gì · bước tiếp theo", { x: rx + 0.2, y: 5.9, w: rw - 0.4, h: 0.75, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── Slide 25 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 7", {
    notes: "S7 — Tổng hợp (3 phút). Ba câu chốt, mỗi câu gắn một mục đề cương.\nLiên hệ Stakeholder Management Plan cuối kỳ: với khách hàng từ dự án cũ, nhóm bổ sung một trang “Các hạng mục nhà cung cấp chính của sự kiện đó nằm ở ô nào, và nhóm quản trị từng nhà cung cấp ra sao để bảo vệ giá trị giao cho khách hàng?” (làm dần, không giao về nhà).",
  });
  const pts = [
    ["7.1", "Xếp hạng mục theo hai trục, rồi mới suy ra vị thế nhà cung cấp. Ô đổi theo mùa, quy mô và điều khoản.", C.purple, C.tPurple],
    ["7.2", "Procurement chọn ai, khung nào, cho cả năm; Buying làm đúng từng sự kiện và ghi lại. Customer of choice là việc agency chủ động làm.", C.blue, C.tBlue],
    ["7.3", "Nhượng ở Leverage/Non-critical, bảo vệ Strategic/Bottleneck bằng dữ kiện — và luôn đổi nhượng bộ lấy một điều có giá trị.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.3;
    card(s, M, y, CW, 1.15, t, c);
    badge(s, M + 0.25, y + 0.15, 0.85, c, k);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.15, fontSize: 17, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.75, C.tYellow, C.yellow);
  T(s, [
    { text: "Stakeholder Management Plan: ", options: { bold: true } },
    { text: "thêm một trang — hạng mục nhà cung cấp chính nằm ở ô nào, quản trị ra sao." },
  ], { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.75, fontSize: 14, valign: "middle" });
}

// ───────────────────────── Slide 26 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm (6 phút). Dùng giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) SV xếp HẠNG MỤC hay vẫn xếp tên công ty; (b) có dùng cả hai trục, không chỉ chi phí; (c) câu 2 có gắn lập luận rủi ro với DỮ KIỆN (điều khoản, khoản cọc, không có phương án thay thế).\nCâu nối Buổi 8: “Hôm nay ta thấy KAMer đàm phán được là nhờ quan hệ tốt với cả Key Account lẫn nhà cung cấp. Buổi sau: làm sao tổ chức quan hệ với Key Account ở nhiều cấp (mô hình Bow-tie → Diamond) và đo hiệu quả quan hệ đó.”",
  });
  const qs = [
    ["1", "Chọn một hạng mục nhà cung cấp trong dự án cũ của nhóm bạn. Nó nằm ở ô nào của ma trận Kraljic vào thời điểm sự kiện? Nhóm bạn khi đó làm việc với nhà cung cấp theo kiểu Procurement hay chỉ Buying?", C.purple],
    ["2", "Trong đóng vai, một yêu cầu của Key Account mà đội Nova không nên nhượng là gì? Vì sao (gắn với ô nào)?", C.pink],
  ];
  const hs = [1.75, 1.2];
  let y = 2.0;
  qs.forEach(([n, q, c], i) => {
    card(s, M, y, CW, hs[i], C.white, C.line);
    badge(s, M + 0.25, y + hs[i] / 2 - 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: hs[i], fontSize: 17, valign: "middle" });
    y += hs[i] + 0.2;
  });
  card(s, M, 5.4, CW, 1.25, C.tGreen, C.green);
  T(s, [
    { text: "Buổi 8: ", options: { bold: true } },
    { text: "tổ chức quan hệ với Key Account ở nhiều cấp (Bow-tie → Diamond) và đo hiệu quả quan hệ đó." },
  ], { x: M + 0.3, y: 5.4, w: CW - 0.6, h: 1.25, fontSize: 17, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["S01", "Kraljic, P. (1983, September). Purchasing must become supply management. Harvard Business Review. · CIPS. (n.d.). Kraljic matrix – What is the Kraljic matrix?"],
  ["S03", "Chartered Institute of Procurement & Supply. (n.d.). What is procurement?"],
  ["S04", "Global Business Travel Association. (2025, July 21). Global business travel and events prices set to stabilize through 2025 and 2026 [Press release]."],
  ["S05", "American Express Global Business Travel. (2025). 2026 global meetings & events forecast."],
  ["S06", "CWT. (n.d.). How meetings & events programs can navigate a volatile planning environment."],
  ["S08", "Keller, M. (2024, May 13). Contract negotiations: 2024 update. Association Conventions & Facilities."],
  ["S09", "Johnson, B. (2019, January 4). Win at negotiating AV services with hotels. Smart Meetings."],
  ["S10", "Meetings Today. (2026). Expert planner chatter on managing AV costs, budgets, risk and communication."],
  ["S11", "Scofidio, B. (2026, August 4). Procurement to planners: We’re not the enemy. Skift Meetings."],
  ["S12", "PON Staff. (2026, June 15). Expanding the pie: Integrative versus distributive bargaining. Program on Negotiation at Harvard Law School."],
  ["S13", "NPR. (2026, April 15). Jury finds that Live Nation acted as a monopoly and overcharged ticket buyers."],
  ["S14", "Smart Meetings. (2018, March 23). Hilton joins Marriott in cutting commissions to independent planners."],
  ["S15", "VnExpress. (2025). Những tranh chấp khiến concert “Về đây bốn cánh chim trời” hủy phút chót."],
  ["S16", "Dân trí. (2023, December 22). Show K-Pop Open Air #2 bị hủy: Có bên than phải “đánh đổi” cả nửa tỷ đồng."],
  ["S18", "Nguyễn, H. (2026, April 20). Chi phí tổ chức sự kiện doanh nghiệp [Bảng giá 2026]. A.M Agency."],
  ["S19", "The Drum. (2025, May 22). Cash flow crunch: US agencies struggle to grow as late payments and scope creep bite."],
  ["S20", "Xuân Hướng, & Tạ Thị Oanh. (2025). Concert và sự phát triển của âm nhạc trong giai đoạn mới. Tạp chí Văn hóa Nghệ thuật, (610)."],
  ["S21", "Người Lao Động. (2025, November 26). Ông Nguyễn Quốc Kỳ nói về việc bán hết cổ phần Vietravel Airlines và rút khỏi mảng hàng không."],
  ["S22", "Nhân Dân. (2026, September 7). Nghệ sĩ Việt chật vật làm liveshow."],
  ["S23", "VnExpress. (2024, September 30). Du lịch MICE Việt tiềm năng nhưng vẫn “dưới kỳ vọng”. · VnEconomy. (2025, June 20). Hè 2025 “đón sóng” du lịch MICE nội địa."],
  ["S24", "Trung tâm Hội nghị Quốc gia. (n.d.). Tiệc cuối năm – Year End Party."],
  ["S25", "Wheeler Menegus, D. (2017, November 7). Events and procurement – Working together for success. BizBash."],
];
[REFS.slice(0, 11), REFS.slice(11)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm URL và nguồn phụ): buoi-07_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn S01–S25 ghi ở chân slide.",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.44;
    T(s, k, { x: M, y, w: 0.7, h: 0.4, fontSize: 11, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.4, fontSize: 11, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W07_Procurement_Negotiation.pptx" }).then((f) => console.log("wrote", f));
