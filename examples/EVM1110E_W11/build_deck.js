// Buổi 11 — EVM1110E · Spreading Value: Media & Influencers
// Deck generated from courses/EVM1110E/lessons/W11_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W11_Media_Influencers.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 11: Spreading Value: Media & Influencers";
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
  { key: "s111", label: "11.1 KOL", c: C.purple },
  { key: "s112", label: "11.2 Báo chí", c: C.purple },
  { key: "s113", label: "11.3 Booking & đo lường", c: C.blue },
  { key: "s114", label: "11.4 Khuếch đại", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: a ripple — a dot with two rings spreading outwards
function glyph(slide, x, y, s) {
  [[1, C.blue, 1], [0.66, C.purple, 1.25], [0.32, C.pink, 0]].forEach(([k, c, lw]) => {
    const d = s * k, o = (s - d) / 2;
    slide.addShape(pres.shapes.OVAL, { x: x + o, y: y + o, w: d, h: d, fill: lw ? { type: "none" } : { color: c }, line: { color: c, width: lw || 0 } });
  });
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
  T(s, `EVM1110E · Buổi 11   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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
function ripple(s, cx, cy, r, cols) {
  cols.forEach((c, i) => {
    const rr = r * (1 - i * 0.28);
    s.addShape(pres.shapes.OVAL, { x: cx - rr, y: cy - rr, w: 2 * rr, h: 2 * rr, fill: { color: c, transparency: i === cols.length - 1 ? 0 : 70 }, line: { color: c, width: 2 } });
  });
}
{
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  ripple(s, 10.2, 3.55, 2.5, [C.blue, C.purple, C.pink, C.orange]);
  [[7.85, 1.3, C.green], [12.2, 1.6, C.yellow], [12.4, 5.5, C.green], [7.7, 5.9, C.yellow]].forEach(([x, y, c]) =>
    s.addShape(pres.shapes.OVAL, { x, y, w: 0.4, h: 0.4, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Key Account", { x: 9.2, y: 3.3, w: 2.0, h: 0.5, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
  pill(s, M, 1.0, 3.1, 0.46, C.yellow, "EVM1110E  ·  Buổi 11 / 15", { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, "Spreading Value: Media & Influencers", { x: M, y: 3.75, w: 6.6, h: 0.9, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [
    { text: "Phần 3 · buổi 3/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng", options: { breakLine: true } },
    { text: "Khoa Marketing · UEF", options: { breakLine: true } },
    { text: "Giảng viên: Đoàn Nguyễn Bảo Quyên" },
  ], { x: M, y: 5.0, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes("Slide 1 (dàn ý #1). Phần 3, buổi 3/4.\nAlt-text: các vòng tròn đồng tâm lan tỏa từ Key Account ở giữa — hình ảnh giá trị được báo chí và KOL khuếch đại.");
}

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Anh Minh muốn chính các CEO đến gala", {
    source: "Tình huống giả định (tiếp nối các buổi trước) — tên và con số chỉ dùng cho học tập.",
    notes: "S1 — Khởi động (5 phút). Đọc: “Anh Minh nhắn Nova: ‘Năm ngoái mời 600 khách, chỉ 62% xác nhận, và gần một phần ba cử cấp dưới đi thay. Năm nay tôi muốn chính các CEO đến. Nova có ý tưởng gì không?’” (số liệu giả định)\nGiơ tay A/B/C; ghi số phiếu lên bảng.\nChốt: “Không có đáp án đúng tuyệt đối. Nhưng câu hỏi đúng không phải ‘ai nổi tiếng nhất’, mà là CEO của khách hàng An Phát tin ai, đọc gì. Hôm nay: chọn, ký và đo lường những người kể chuyện cho Key Account.”",
  });
  card(s, M, 2.1, 4.4, 4.45, C.tBlue, C.tBlue);
  T(s, "Năm ngoái · 600 khách mời", { x: M + 0.3, y: 2.25, w: 3.8, h: 0.4, fontSize: 13, bold: true, color: C.muted });
  T(s, "62%", { x: M + 0.3, y: 2.7, w: 3.8, h: 1.0, fontSize: 50, bold: true, color: C.dBlue });
  T(s, "xác nhận tham dự", { x: M + 0.3, y: 3.7, w: 3.8, h: 0.4, fontSize: 15 });
  T(s, "~1/3", { x: M + 0.3, y: 4.3, w: 3.8, h: 1.0, fontSize: 50, bold: true, color: C.dPink });
  T(s, "cử cấp dưới đi thay", { x: M + 0.3, y: 5.3, w: 3.8, h: 0.4, fontSize: 15 });
  const opts = [["A", "Mời ca sĩ 3 triệu follower làm MC", C.orange], ["B", "Mời chuyên gia kinh tế uy tín làm diễn giả chính", C.purple], ["C", "Nhờ nhà báo kinh tế phỏng vấn diễn giả trước sự kiện", C.blue]];
  const ox = M + 4.8, ow = CW - 4.8;
  opts.forEach(([l, t, c], i) => {
    const y = 2.1 + i * 1.15;
    card(s, ox, y, ow, 0.98, C.white, C.line);
    badge(s, ox + 0.22, y + 0.17, 0.64, c, l);
    T(s, t, { x: ox + 1.1, y, w: ow - 1.3, h: 0.98, fontSize: 18, valign: "middle" });
  });
  card(s, ox, 5.6, ow, 0.95, C.tYellow, C.yellow);
  T(s, "Giơ tay: Nova nên chọn A, B hay C?", { x: ox + 0.3, y: 5.6, w: ow - 0.6, h: 0.95, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 3 — definition ─────────────────────────
{
  const s = base("s111", "Influencer marketing là trả công cho người khác nói về mình", {
    source: "X01: Campbell & Farrell (2020), Business Horizons · X05: LuatVietnam; Thanh Niên (12/11/2025) — Luật Quảng cáo sửa đổi, hiệu lực 1/1/2026.",
    notes: "Chữ quan trọng: COMPENSATING — có trả công.\nTừ 1/1/2026, ở Việt Nam, người nhận tiền để quảng cáo, khuyến nghị, xác nhận sản phẩm trên mạng là “người chuyển tải sản phẩm quảng cáo” và có nghĩa vụ pháp lý (chi tiết ở phần 11.3).",
  });
  card(s, M, 2.1, CW, 2.1, C.tPurple, C.purple);
  T(s, [
    { text: "“Influencer marketing is the practice of ", options: { italic: true } },
    { text: "compensating", options: { italic: true, bold: true, color: C.purple } },
    { text: " individuals for posting about a product or service on social media.”", options: { italic: true, breakLine: true } },
    { text: "— Campbell & Farrell (2020)", options: { fontSize: 13, color: C.muted } },
  ], { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.1, fontSize: 22, valign: "middle", paraSpaceAfter: 8 });
  card(s, M, 4.5, 3.4, 2.05, C.yellow, C.yellow);
  T(s, [{ text: "Từ", options: { fontSize: 15, breakLine: true } }, { text: "1/1/2026", options: { fontSize: 34, bold: true } }], { x: M + 0.3, y: 4.5, w: 2.8, h: 2.05, valign: "middle" });
  card(s, M + 3.7, 4.5, CW - 3.7, 2.05, C.white, C.line);
  T(s, [{ text: "Ở Việt Nam, KOL nhận tiền quảng cáo là ", options: {} }, { text: "“người chuyển tải sản phẩm quảng cáo”", options: { bold: true } }, { text: " — có nghĩa vụ pháp lý riêng (Luật Quảng cáo sửa đổi)." }],
    { x: M + 4.0, y: 4.5, w: CW - 4.3, h: 2.05, fontSize: 18, valign: "middle" });
}

// ───────────────────────── 4 — tiers ─────────────────────────
{
  const s = base("s111", "Quy mô chỉ là khoảng tham khảo", {
    source: "X04: HypeAuditor (2025), The state of influencer marketing — chưa kiểm chứng chéo.",
    notes: "Ngưỡng khác nhau giữa các nguồn; bảng chỉ để tham khảo (quyết định GV 7).\nTheo HypeAuditor 2025, hơn 75% influencer Instagram là nano, nhóm có ER cao nhất.\nLưu ý: cùng báo cáo đó ghi ER của nano TikTok là 10,3% ở một chỗ và 11,9% ở chỗ khác — luôn hỏi nguồn và cách tính.\nHiểu lầm: “Nhiều follower = ảnh hưởng lớn” → ảnh hưởng đến AI?",
  });
  const tiers = [["Nano", "~1k–10k", "Gần gũi, tương tác cao", C.green, 1.3], ["Micro", "~10k–100k", "Cộng đồng ngách", C.blue, 1.9], ["Macro", "~100k–1 triệu", "Độ phủ lớn", C.purple, 2.5], ["Mega", "> 1 triệu", "Người nổi tiếng · nhận biết rộng", C.pink, 3.1]];
  const cw = (CW - 5.0 - 0.6) / 4;
  tiers.forEach(([n, f, d, c, h], i) => {
    const x = M + i * (cw + 0.2), by = 5.6 - h;
    s.addShape(pres.shapes.RECTANGLE, { x, y: by, w: cw, h, fill: { color: c }, line: { color: c, width: 0 } });
    T(s, f, { x, y: by + 0.1, w: cw, h: 0.45, fontSize: 13, bold: true, color: C.white, align: "center" });
    T(s, n, { x, y: 5.7, w: cw, h: 0.4, fontSize: 14, bold: true, align: "center" });
    T(s, d, { x, y: 6.1, w: cw, h: 0.5, fontSize: 11, color: C.muted, align: "center", valign: "top" });
  });
  const rx = M + 4 * (cw + 0.2) + 0.4, rw = W - M - rx;
  card(s, rx, 2.05, rw, 2.0, C.tYellow, C.yellow);
  T(s, "Ngưỡng khác nhau giữa các nguồn — chỉ để tham khảo.", { x: rx + 0.3, y: 2.05, w: rw - 0.6, h: 2.0, fontSize: 17, bold: true, valign: "middle" });
  card(s, rx, 4.3, rw, 2.3, C.tPink, C.pink);
  T(s, "Cùng một báo cáo, ER của nano TikTok:", { x: rx + 0.3, y: 4.4, w: rw - 0.6, h: 0.5, fontSize: 14 });
  T(s, [{ text: "10,3%", options: { bold: true, color: C.dPink } }, { text: "  và  ", options: { fontSize: 16 } }, { text: "11,9%", options: { bold: true, color: C.dPink } }], { x: rx + 0.3, y: 4.9, w: rw - 0.6, h: 0.8, fontSize: 32, valign: "middle" });
  T(s, "→ luôn hỏi nguồn và cách tính", { x: rx + 0.3, y: 5.75, w: rw - 0.6, h: 0.5, fontSize: 14, bold: true });
}

// ───────────────────────── 5 — roles ─────────────────────────
{
  const s = base("s111", "Câu hỏi đúng: Nova đang mua khán giả, bảo chứng hay nội dung?", {
    source: "X01: Campbell & Farrell (2020) · KOC và chuyên gia/diễn giả: nhận định của người soạn.",
    notes: "Hỏi: “Với 600 CEO, ai là KOL của họ?”\nKOC (key opinion consumer): người dùng thật chia sẻ trải nghiệm. Chuyên gia/diễn giả: KOL trong giới chuyên môn, quan trọng với sự kiện B2B.\nHiểu lầm: “KOL là chuyện của marketing, không phải của agency sự kiện” → KOL xuất hiện trên sân khấu, trong thư mời, trong video — là điểm chạm của sự kiện.",
  });
  const cols = [{ w: 3.3 }, { w: 3.9, head: "Nova mua gì", fill: C.purple }, { w: CW - 7.2 + 0.1, head: "Ví dụ với gala An Phát", fill: C.blue }];
  table(s, M, 1.95, cols, [
    ["Khán giả · audience", "Tiếp cận cộng đồng người theo dõi", "Ít giá trị: khách đã được mời đích danh"],
    ["Người bảo chứng · endorser", "Uy tín của họ “đứng sau” sự kiện", "Chuyên gia kinh tế làm diễn giả → CEO muốn đến"],
    ["Người làm nội dung", "Khả năng sản xuất nội dung", "Video tóm tắt phiên chuyên đề gửi khách sau sự kiện"],
  ], { rowH: 0.9, size: 15 });
  const cw = (CW - 0.3) / 2;
  [["KOC", "người dùng thật chia sẻ trải nghiệm"], ["Chuyên gia / diễn giả", "KOL trong giới chuyên môn — quan trọng với sự kiện B2B"]].forEach(([h, d], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 5.6, cw, 0.95, C.tYellow, C.yellow);
    T(s, [{ text: "Bổ sung · " + h + ": ", options: { bold: true } }, { text: d }], { x: x + 0.3, y: 5.6, w: cw - 0.6, h: 0.95, fontSize: 15, valign: "middle" });
  });
}

// ───────────────────────── 6 — credibility ─────────────────────────
{
  const s = base("s111", "Khách tin người có chuyên môn, đáng tin và giống mình", {
    source: "X02: Ohanian (1990), Journal of Advertising · X03: Lou & Yuan (2019), Journal of Interactive Advertising.",
    notes: "Ohanian (1990): độ tin cậy nguồn phát gồm chuyên môn · đáng tin · hấp dẫn. Với ngân hàng, hai chiều đầu nặng hơn (nhận định).\nLou & Yuan (2019): chất lượng nội dung = giá trị thông tin cho người xem; cộng hưởng = sự tương đồng giữa influencer và người theo dõi. Hai yếu tố này, cùng độ đáng tin và hấp dẫn, làm tăng niềm tin vào nội dung có thương hiệu.\nAlt-text: ba vòng tròn giao nhau — chuyên môn, đáng tin, tương đồng — dẫn tới niềm tin của khách.",
  });
  const cx = 4.3, cy = 4.25, r = 1.45;
  const pts = [[cx - r * 0.6, cy - r * 0.35, C.purple, "Chuyên môn"], [cx + r * 0.6, cy - r * 0.35, C.blue, "Đáng tin"], [cx, cy + r * 0.62, C.pink, "Tương đồng"]];
  pts.forEach(([x, y, c]) => s.addShape(pres.shapes.OVAL, { x: x - r, y: y - r, w: 2 * r, h: 2 * r, fill: { color: c, transparency: 72 }, line: { color: c, width: 2 } }));
  const lp = [[cx - r * 1.45, cy - r * 0.8], [cx + r * 0.25, cy - r * 0.8], [cx - r * 0.6, cy + r * 1.1]];
  pts.forEach(([, , , t], i) => T(s, t, { x: lp[i][0], y: lp[i][1], w: r * 1.2, h: 0.45, fontSize: 15, bold: true, align: "center" }));
  pill(s, cx - 0.65, cy - 0.05, 1.3, 0.45, C.yellow, "Niềm tin", { text: { fontSize: 13 } });
  const rx = M + 7.4, rw = CW - 7.4;
  card(s, rx, 2.05, rw, 2.1, C.tPurple, C.purple);
  T(s, [{ text: "Ohanian (1990)", options: { bold: true, breakLine: true } }, { text: "Độ tin cậy nguồn phát: chuyên môn · đáng tin · hấp dẫn. Với ngân hàng, hai chiều đầu nặng hơn.", options: { fontSize: 14 } }],
    { x: rx + 0.3, y: 2.05, w: rw - 0.6, h: 2.1, fontSize: 16, valign: "middle" });
  card(s, rx, 4.4, rw, 2.15, C.tPink, C.pink);
  T(s, [{ text: "Lou & Yuan (2019)", options: { bold: true, breakLine: true } }, { text: "Giá trị thông tin + tương đồng với người theo dõi + đáng tin, hấp dẫn → tin nội dung có thương hiệu.", options: { fontSize: 14 } }],
    { x: rx + 0.3, y: 4.4, w: rw - 0.6, h: 2.15, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 7 — similarity > scale ─────────────────────────
{
  const s = base("s111", "Tương đồng quan trọng hơn quy mô", {
    source: "Ví dụ minh họa · X03: Lou & Yuan (2019).",
    notes: "Nói: “Một CEO logistics chia sẻ kinh nghiệm vay vốn mở rộng kho có thể cộng hưởng với 600 CEO hơn một ca sĩ triệu follower.”",
  });
  const cw = (CW - 1.1) / 2;
  [["CEO logistics", "~120.000 người theo dõi", "Chia sẻ kinh nghiệm vay vốn mở rộng kho", "600 CEO: “người này nói chuyện với mình”", C.green, C.tGreen, C.dGreen],
   ["Ca sĩ", "~3,5 triệu người theo dõi", "Âm nhạc, đời sống", "600 CEO: nổi tiếng, nhưng khác thế giới của mình", C.muted, C.white, C.muted]].forEach(([h, f, d, v, c, bg, dc], i) => {
    const x = M + i * (cw + 1.1);
    card(s, x, 2.05, cw, 3.4, bg, c, 1.5);
    T(s, h, { x: x + 0.35, y: 2.25, w: cw - 0.7, h: 0.6, fontSize: 24, bold: true, color: i ? C.muted : C.ink });
    T(s, f, { x: x + 0.35, y: 2.9, w: cw - 0.7, h: 0.45, fontSize: 15, color: C.muted });
    T(s, d, { x: x + 0.35, y: 3.45, w: cw - 0.7, h: 0.8, fontSize: 16, valign: "top" });
    T(s, v, { x: x + 0.35, y: 4.3, w: cw - 0.7, h: 1.0, fontSize: 15, bold: true, italic: true, color: dc, valign: "top" });
  });
  T(s, ">", { x: M + cw, y: 3.2, w: 1.1, h: 1.1, fontSize: 54, bold: true, color: C.dGreen, align: "center", valign: "middle" });
  card(s, M, 5.75, CW, 0.8, C.tYellow, C.yellow);
  T(s, "Hỏi: ảnh hưởng đến AI — không phải có bao nhiêu người theo dõi.", { x: M + 0.35, y: 5.75, w: CW - 0.7, h: 0.8, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 8 — Kera case ─────────────────────────
{
  const s = base("s111", "Khi KOL mất uy tín, người hợp tác mất theo", {
    source: "X06: VnExpress, Thanh Niên (19/11/2025); Dân trí (20/5/2025); VTC News (2025) — đã kiểm chứng chéo.",
    notes: "Sự kiện thật — chỉ nêu sự kiện và phán quyết đã công bố; không dùng ảnh chân dung.\nTừ 12/12/2024 đến 16/1/2025, 6 buổi livestream quảng cáo kẹo Kera với tuyên bố như “một viên kẹo tương đương một đĩa rau luộc”. Giám định cho thấy sản phẩm không có 10 loại bột rau củ như công bố. Tháng 11/2025, TAND TP.HCM tuyên ba người có ảnh hưởng mỗi người 2 năm tù về tội “lừa dối khách hàng”; thu lợi bất chính 12,4 tỷ đồng. Trước đó, một thương hiệu thời trang gỡ ảnh, công ty quản lý chấm dứt hợp đồng.\nHỏi: “Nếu một trong những người này từng là MC gala của An Phát tháng 12/2024, khách của An Phát nghĩ gì?” — Chốt: “Chuyển giao hình ảnh là hai chiều (Buổi 9). Vì vậy Nova phải kiểm tra trước khi ký (due diligence).”",
  });
  const facts = [["6", "buổi livestream quảng cáo kẹo Kera (12/2024 – 1/2025)", C.orange, C.tOrange, C.dOrange], ["12,4 tỷ", "thu lợi bất chính", C.purple, C.tPurple, C.purple], ["2 năm tù", "mỗi người trong ba người có ảnh hưởng — tội “lừa dối khách hàng” (11/2025)", C.pink, C.tPink, C.dPink]];
  const cw = (CW - 0.6) / 3;
  facts.forEach(([n, d, c, f, dc], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.05, cw, 2.35, f, f);
    T(s, n, { x: x + 0.3, y: 2.2, w: cw - 0.6, h: 0.95, fontSize: 38, bold: true, color: dc });
    T(s, d, { x: x + 0.3, y: 3.2, w: cw - 0.6, h: 1.1, fontSize: 14, valign: "top" });
  });
  card(s, M, 4.65, 6.9, 1.9, C.white, C.line);
  T(s, [{ text: "Người hợp tác phản ứng", options: { bold: true, breakLine: true } }, { text: "Một thương hiệu thời trang gỡ ảnh; công ty quản lý chấm dứt hợp đồng.", options: { fontSize: 15 } }],
    { x: M + 0.3, y: 4.65, w: 6.3, h: 1.9, fontSize: 17, valign: "middle", paraSpaceAfter: 6 });
  card(s, M + 7.2, 4.65, CW - 7.2, 1.9, C.tYellow, C.yellow);
  T(s, [{ text: "Chuyển giao hình ảnh là hai chiều (Buổi 9) ", options: {} }, { text: "→ kiểm tra trước khi ký.", options: { bold: true } }],
    { x: M + 7.5, y: 4.65, w: CW - 7.8, h: 1.9, fontSize: 17, valign: "middle" });
}

// ───────────────────────── 9 — finfluencers ─────────────────────────
{
  const s = base("s111", "Với ngân hàng, KOL tài chính là rủi ro đặc thù", {
    source: "X07: Nhân Dân; VietnamPlus (17/4/2026) — đã kiểm chứng chéo · X08: Tuổi Trẻ (12/8/2025) — chưa kiểm chứng chéo.",
    notes: "Tháng 4/2026, UBCKNN cảnh báo các tổ chức, cá nhân trên mạng xã hội đưa khuyến nghị mua, bán, nắm giữ cổ phiếu dù không được cấp phép tư vấn đầu tư; đã xử phạt một doanh nghiệp.\nNói: “KOL tài chính nhiều follower chưa chắc là lựa chọn an toàn cho một ngân hàng. Câu hỏi của Nova: họ sẽ nói gì trên sân khấu của An Phát — kiến thức, hay ‘nên mua mã này’?”\nXu hướng: tháng 8/2025, chương trình “Tín nhiệm người có ảnh hưởng” được khởi động (gần 300 KOL), hướng tới đánh giá, chứng nhận uy tín, minh bạch của KOL/KOC.",
  });
  card(s, M, 2.05, 7.0, 2.6, C.tPink, C.pink);
  T(s, "UBCKNN · 4/2026", { x: M + 0.3, y: 2.2, w: 6.4, h: 0.45, fontSize: 15, bold: true, color: C.dPink });
  T(s, "Cảnh báo khuyến nghị mua, bán, nắm giữ cổ phiếu trên mạng xã hội khi không được cấp phép tư vấn đầu tư; đã xử phạt một doanh nghiệp.", { x: M + 0.3, y: 2.7, w: 6.4, h: 1.8, fontSize: 17, valign: "top" });
  card(s, M, 4.9, 7.0, 1.65, C.white, C.line);
  T(s, [{ text: "Xu hướng: ", options: { bold: true } }, { text: "chương trình “Tín nhiệm người có ảnh hưởng” (8/2025) hướng tới chứng nhận uy tín, minh bạch của KOL/KOC." }, { text: "  X08 · chưa KCC", options: { fontSize: 11, color: C.muted } }],
    { x: M + 0.3, y: 4.9, w: 6.4, h: 1.65, fontSize: 15, valign: "middle" });
  const rx = M + 7.3, rw = CW - 7.3;
  card(s, rx, 2.05, rw, 4.5, C.tYellow, C.yellow);
  T(s, "Câu hỏi của Nova:", { x: rx + 0.3, y: 2.25, w: rw - 0.6, h: 0.5, fontSize: 16, bold: true });
  T(s, "Họ sẽ nói gì trên sân khấu của An Phát?", { x: rx + 0.3, y: 2.8, w: rw - 0.6, h: 1.2, fontSize: 20, bold: true, valign: "top" });
  pill(s, rx + 0.3, 4.2, rw - 0.6, 0.6, C.green, "Kiến thức", { text: { fontSize: 15 } });
  pill(s, rx + 0.3, 5.0, rw - 0.6, 0.6, C.pink, "“Nên mua mã này”", { text: { fontSize: 15 } });
}

// ───────────────────────── 10 — audience first ─────────────────────────
{
  const s = base("s112", "Hiểu khán giả trước, chọn kênh sau", {
    source: "X13: AMEC (2025), Barcelona Principles 4.0 — nguyên tắc 2.",
    notes: "Nguyên tắc 2 của Barcelona Principles 4.0: xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động.\nVới An Phát, khán giả trước sự kiện là 600 lãnh đạo doanh nghiệp: họ đọc báo gì, nghe ai, bận thế nào?",
  });
  card(s, M, 2.05, CW, 1.55, C.tBlue, C.blue);
  T(s, [{ text: "Barcelona Principles 4.0 — nguyên tắc 2: ", options: { bold: true } }, { text: "xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động." }],
    { x: M + 0.35, y: 2.05, w: CW - 0.7, h: 1.55, fontSize: 18, valign: "middle" });
  T(s, "600 lãnh đạo doanh nghiệp VIP của An Phát:", { x: M, y: 3.95, w: CW, h: 0.45, fontSize: 16, bold: true });
  const qs = [["Đọc báo gì?", C.purple], ["Nghe ai, tin ai?", C.pink], ["Bận thế nào?", C.orange]];
  const cw = (CW - 0.6) / 3;
  qs.forEach(([q, c], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 4.55, cw, 1.4, C.white, c, 2);
    T(s, q, { x: x + 0.3, y: 4.55, w: cw - 0.6, h: 1.4, fontSize: 22, bold: true, align: "center", valign: "middle" });
  });
  T(s, "→ rồi mới chọn nhà báo, diễn giả, KOL", { x: M, y: 6.1, w: CW, h: 0.45, fontSize: 15, italic: true, color: C.purple });
}

// ───────────────────────── 11 — journalist map ─────────────────────────
{
  const s = base("s112", "Bản đồ nhà báo có ba trục: mảng, độc giả, mức quan hệ", {
    source: "X09: Cision (2025), chưa KCC · X10: Luật Báo chí 2016 (đã KCC); PLO về Luật Báo chí 2025, NĐ 237/2026 (chưa KCC).",
    notes: "Ba trục do người soạn đề xuất, dựa trên Cision 2025.\n72% nhà báo coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp.\nNối Buổi 8: “Quan hệ với nhà báo cũng như với Key Account: xây trước khi cần.”\nHọp báo (nhận diện): tổ chức, công dân có quyền tổ chức họp báo; phải thông báo bằng văn bản trước 24 giờ cho cơ quan quản lý nhà nước về báo chí (Luật Báo chí 2016). Theo PLO, Luật Báo chí 2025 (hiệu lực 1/7/2026) và NĐ 237/2026 bổ sung yêu cầu chứng minh tính hợp pháp của nội dung và danh sách cơ quan báo chí được mời. [VERIFY: pháp chế — Luật Báo chí 2025, NĐ 237/2026]\nHiểu lầm: “Gửi thông cáo cho càng nhiều báo càng tốt” → đúng mảng, đúng độc giả.",
  });
  const axes = [["Mảng phụ trách · beat", "Ngân hàng – tài chính? Doanh nghiệp? Giải trí?", "86%", "nhà báo từ chối ngay pitch lệch mảng hoặc lệch độc giả", C.purple, C.tPurple],
    ["Độc giả", "Độc giả của họ có trùng khách của An Phát không?", "72%", "coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp", C.blue, C.tBlue],
    ["Mức quan hệ", "Chưa biết · đã giới thiệu · đã làm việc", "85%", "muốn được tự giới thiệu qua email, kể cả khi chưa có câu chuyện", C.pink, C.tPink]];
  const cw = (CW - 0.6) / 3;
  axes.forEach(([h, q, n, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.0, cw, 3.55, f, c);
    T(s, h, { x: x + 0.3, y: 2.15, w: cw - 0.6, h: 0.5, fontSize: 17, bold: true });
    T(s, q, { x: x + 0.3, y: 2.65, w: cw - 0.6, h: 0.9, fontSize: 13, valign: "top" });
    T(s, n, { x: x + 0.3, y: 3.6, w: cw - 0.6, h: 0.8, fontSize: 34, bold: true, color: c === C.blue ? C.dBlue : c === C.pink ? C.dPink : c });
    T(s, d, { x: x + 0.3, y: 4.4, w: cw - 0.6, h: 1.05, fontSize: 12, valign: "top" });
  });
  card(s, M, 5.8, CW, 0.8, C.tYellow, C.yellow);
  T(s, [{ text: "Họp báo: ", options: { bold: true } }, { text: "thông báo bằng văn bản trước 24 giờ cho cơ quan quản lý báo chí (Luật Báo chí 2016); quy định mới từ 7/2026 cần đối chiếu pháp chế." }],
    { x: M + 0.3, y: 5.8, w: CW - 0.6, h: 0.8, fontSize: 13, valign: "middle" });
}

// ───────────────────────── 12 — ethics ─────────────────────────
{
  const s = base("s112", "Quan hệ với nhà báo dựa trên thông tin có giá trị, không dựa trên vụ lợi", {
    source: "X11: Hội Nhà báo Việt Nam (2016), 10 điều Quy định đạo đức nghề nghiệp người làm báo · X05: Luật Quảng cáo sửa đổi.",
    notes: "Một nguyên tắc (quyết định GV 6): quan hệ với nhà báo dựa trên thông tin có giá trị cho độc giả của họ, đúng mảng, đúng lúc. Agency không đặt nhà báo vào thế vụ lợi.\nQuy định đạo đức nghề nghiệp người làm báo Việt Nam yêu cầu hành nghề trung thực, khách quan, không vụ lợi. [VERIFY: nguyên văn Điều 3]\n→ Chuyển sang S3 — Thực hành 1.",
  });
  card(s, M, 2.1, CW, 2.2, C.tPurple, C.purple);
  T(s, [{ text: "Một nguyên tắc", options: { fontSize: 15, color: C.muted, breakLine: true } }, { text: "Thông tin có giá trị cho độc giả của nhà báo — đúng mảng, đúng lúc. Agency không đặt nhà báo vào thế vụ lợi.", options: { fontSize: 24, bold: true } }],
    { x: M + 0.4, y: 2.1, w: CW - 0.8, h: 2.2, valign: "middle", paraSpaceAfter: 6 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 4.6, cw, 1.95, C.white, C.line);
  T(s, [{ text: "Đạo đức nghề báo (X11)", options: { bold: true, breakLine: true } }, { text: "Hành nghề trung thực, khách quan, không vụ lợi.", options: { fontSize: 15 } }], { x: M + 0.3, y: 4.6, w: cw - 0.6, h: 1.95, fontSize: 17, valign: "middle" });
  card(s, M + cw + 0.3, 4.6, cw, 1.95, C.tYellow, C.yellow);
  T(s, [{ text: "Trả tiền để đăng = quảng cáo", options: { bold: true, breakLine: true } }, { text: "và phải được nhận diện là quảng cáo (X05).", options: { fontSize: 15 } }], { x: M + cw + 0.6, y: 4.6, w: cw - 0.6, h: 1.95, fontSize: 17, valign: "middle" });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s112", "Thực hành 1 · Chọn diễn giả và KOL để chính các CEO đến gala", {
    source: "Phiếu W11_activity_S3_chon_dien_gia_kol.md · Tình huống và các ứng viên đều là giả định.",
    notes: "S3 — Thực hành 1 (20 phút). Đồng hồ 8 / 7 / 5 phút. Ghi lựa chọn diễn giả/KOL của 6 nhóm lên bảng.\nThảo luận: ứng viên nào nhóm nào cũng loại? Chị Mai Anh không nhận phí — vậy chị có phải KOL được trả công không? Nova cần lưu ý gì (5 phút giới thiệu công ty mình)?\nMặc định cho S6: TS. Lê Hoàng Nam và chị Trần Mai Anh.",
  });
  T(s, "Ngân sách ~350 triệu · 600 lãnh đạo DN VIP · năm ngoái 62% xác nhận", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const cand = [
    ["TS. Lê Hoàng Nam", "chuyên gia kinh tế · ~45k", "80 tr", "diễn giả chính 30’; chưa từng quảng cáo"],
    ["“Hưng Finance”", "KOL tài chính · ~1,2 tr", "250 tr", "hay nói “nên mua mã…”; muốn livestream"],
    ["Chị Trần Mai Anh", "CEO logistics, khách của An Phát · ~120k", "0", "muốn 5’ giới thiệu công ty mình"],
    ["Ca sĩ Ngọc Diệp", "~3,5 tr", "400 tr", "MC + 3 bài; từng bị phạt vì quảng cáo sai công dụng"],
    ["20 KOC “doanh nhân trẻ”", "5–10k mỗi người", "60 tr", "người theo dõi chủ yếu sinh viên"],
  ];
  const tw = 7.6;
  cand.forEach(([n, who, fee, note], i) => {
    const y = 2.45 + i * 0.85;
    card(s, M, y, tw, 0.75, i % 2 ? C.white : C.band, i % 2 ? C.line : C.band);
    badge(s, M + 0.15, y + 0.15, 0.45, [C.purple, C.pink, C.green, C.orange, C.blue][i], String(i + 1), null, 14);
    T(s, [{ text: n, options: { bold: true, breakLine: true } }, { text: who, options: { fontSize: 10, color: C.muted } }], { x: M + 0.75, y, w: 2.8, h: 0.75, fontSize: 13, valign: "middle" });
    T(s, fee, { x: M + 3.6, y, w: 0.8, h: 0.75, fontSize: 13, bold: true, valign: "middle" });
    T(s, note, { x: M + 4.4, y, w: tw - 4.55, h: 0.75, fontSize: 11, valign: "middle" });
  });
  const steps = [["8’", "Chấm 1–5: chuyên môn · đáng tin · tương đồng · rủi ro; Nova “mua” gì?", C.orange], ["7’", "Chọn ≤ 2 ứng viên trong ngân sách + 1 điều kiện cho mỗi người", C.purple], ["5’", "1 câu giải thích với anh Minh về một ứng viên bị loại", C.blue]];
  const rx = M + 7.9, rw = CW - 7.9;
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
  T(s, "EVM1110E · Buổi 11   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}

// ───────────────────────── 13 — booking 8 steps ─────────────────────────
{
  const s = base("s113", "Booking là một quy trình 8 bước, không phải một cuộc gọi", {
    source: "Quy trình do người soạn dựng từ X05, X06, X12, X13.",
    notes: "1 Brief: mục tiêu, khán giả, thông điệp, điều KHÔNG được nói (ví dụ khuyến nghị đầu tư — X07).\n2 Due diligence: lịch sử nội dung, vụ việc pháp lý, xung đột lợi ích, chất lượng người theo dõi (X04 khuyến nghị kiểm tra gian lận).\n3 Báo giá và đàm phán: qua cá nhân hay công ty quản lý?\n4 Hợp đồng. 5 Duyệt nội dung: Key Account duyệt trước (chị Vy — Thương hiệu). 6 Thực hiện: đúng lịch, đúng nhãn. 7 Nghiệm thu và thanh toán. 8 Báo cáo.\nAlt-text: tám ô nối bằng mũi tên theo thứ tự.",
  });
  const steps = [["Brief", "mục tiêu, thông điệp, điều không được nói"], ["Due diligence", "kiểm tra trước khi ký"], ["Báo giá", "cá nhân hay công ty quản lý?"], ["Hợp đồng", "nghĩa vụ luật định + điều khoản"], ["Duyệt nội dung", "chị Vy (Thương hiệu) duyệt trước"], ["Thực hiện", "đúng lịch, đúng nhãn"], ["Thanh toán", "nghiệm thu, chứng từ đúng hình thức"], ["Báo cáo", "outputs · outcomes · impact"]];
  const cols = [C.orange, C.pink, C.purple, C.blue, C.green, C.orange, C.purple, C.blue];
  const cw = (CW - 3 * 0.45) / 4;
  steps.forEach(([h, d], i) => {
    const row = Math.floor(i / 4), col = row ? 3 - (i % 4) : i % 4;
    const x = M + col * (cw + 0.45), y = 2.1 + row * 2.3;
    const hl = i === 1;
    card(s, x, y, cw, 1.8, hl ? C.tPink : C.white, cols[i], hl ? 2.5 : 1.25);
    badge(s, x + 0.2, y + 0.18, 0.55, cols[i], String(i + 1), null, 16);
    T(s, h, { x: x + 0.2, y: y + 0.8, w: cw - 0.4, h: 0.45, fontSize: 16, bold: true });
    T(s, d, { x: x + 0.2, y: y + 1.25, w: cw - 0.4, h: 0.5, fontSize: 12, color: C.muted, valign: "top" });
    if (i === 3) arrow(s, x + cw / 2, y + 1.85, x + cw / 2, y + 2.25, C.ink, 2.5);
    else if (i < 7) {
      if (row === 0) arrow(s, x + cw + 0.05, y + 0.9, x + cw + 0.4, y + 0.9, C.ink, 2.5);
      else arrow(s, x - 0.05, y + 0.9, x - 0.4, y + 0.9, C.ink, 2.5);
    }
  });
}

// ───────────────────────── 14 — due diligence ─────────────────────────
{
  const s = base("s113", "Due diligence bảo vệ Key Account trước khi ký", {
    source: "Nhận định của người soạn · X04 khuyến nghị kiểm tra gian lận người theo dõi · X06, X07.",
    notes: "Nối slide 8 (Kera) và slide 9 (KOL tài chính).\nHiểu lầm: “Đã trả tiền thì KOL chịu trách nhiệm hết” → rủi ro uy tín rơi vào Key Account trước tiên; Nova phòng bằng due diligence và hợp đồng.",
  });
  const checks = [["Lịch sử nội dung", "Họ từng nói gì, quảng cáo gì? Có khuyến nghị đầu tư?", C.purple, C.tPurple], ["Vụ việc", "Bị xử phạt, khởi tố, khủng hoảng truyền thông?", C.pink, C.tPink], ["Xung đột lợi ích", "Đang làm cho ngân hàng hay đối thủ nào? Muốn quảng bá gì cho mình?", C.orange, C.tOrange], ["Chất lượng người theo dõi", "Người theo dõi thật? Có trùng khách của An Phát?", C.blue, C.tBlue]];
  const cw = (CW - 0.3) / 2;
  checks.forEach(([h, d, c, f], i) => {
    const x = M + (i % 2) * (cw + 0.3), y = 2.05 + Math.floor(i / 2) * 1.75;
    card(s, x, y, cw, 1.55, f, c);
    badge(s, x + 0.3, y + 0.38, 0.8, c, "✓", null, 22);
    T(s, h, { x: x + 1.35, y: y + 0.15, w: cw - 1.6, h: 0.55, fontSize: 19, bold: true, valign: "middle" });
    T(s, d, { x: x + 1.35, y: y + 0.7, w: cw - 1.6, h: 0.75, fontSize: 14, valign: "top" });
  });
  card(s, M, 5.7, CW, 0.85, C.tYellow, C.yellow);
  T(s, "Đã trả tiền không có nghĩa KOL chịu hết rủi ro — rủi ro uy tín rơi vào An Phát trước tiên.", { x: M + 0.35, y: 5.7, w: CW - 0.7, h: 0.85, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 15 — legal duties into contract ─────────────────────────
{
  const s = base("s113", "Từ 2026, nghĩa vụ của KOL phải nằm trong hợp đồng", {
    source: "X05: Luật Quảng cáo sửa đổi 2025, hiệu lực 1/1/2026 — đã kiểm chứng chéo. Danh sách điều khoản: nhận định của người soạn.",
    notes: "Luật Quảng cáo sửa đổi 2025: người có ảnh hưởng phải xác minh độ tin cậy của người quảng cáo, kiểm tra tài liệu về sản phẩm (chưa sử dụng hoặc chưa hiểu rõ thì không được giới thiệu); thông báo về việc quảng cáo ngay trước và trong khi thực hiện, nội dung trên mạng có dấu hiệu nhận diện là quảng cáo/tài trợ; cung cấp hồ sơ, gồm hợp đồng quảng cáo, khi cơ quan có thẩm quyền yêu cầu.\nĐiều khoản “không khuyến nghị đầu tư / không chào bán sản phẩm tài chính” nối X07 và U13 (Buổi 9). Điều khoản đạo đức và chấm dứt: bài học X06.\n[VERIFY: pháp chế — nghị định hướng dẫn Luật Quảng cáo 2025; quy định riêng về quảng cáo dịch vụ ngân hàng]",
  });
  T(s, "Nghĩa vụ luật định (X05)", { x: M, y: 1.95, w: 5.4, h: 0.45, fontSize: 15, bold: true, color: C.purple });
  const duties = [["Xác minh", "người quảng cáo và tài liệu sản phẩm; chưa hiểu rõ thì không giới thiệu"], ["Gắn nhãn", "thông báo ngay trước và trong khi quảng cáo"], ["Cung cấp hợp đồng", "khi cơ quan có thẩm quyền yêu cầu"]];
  duties.forEach(([h, d], i) => {
    const y = 2.5 + i * 1.35;
    card(s, M, y, 5.4, 1.2, C.tPurple, C.purple);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: M + 0.3, y, w: 4.8, h: 1.2, fontSize: 17, valign: "middle" });
  });
  const rx = M + 5.8, rw = CW - 5.8;
  T(s, "Điều khoản gợi ý cho hợp đồng", { x: rx, y: 1.95, w: rw, h: 0.45, fontSize: 15, bold: true, color: C.dBlue });
  const terms = ["Phạm vi, lịch, định dạng nội dung", "Duyệt nội dung trước", "Gắn nhãn theo luật", "Cam kết đã xác minh thông tin", "Không khuyến nghị đầu tư, chào bán SP tài chính", "Quyền sử dụng hình ảnh", "Bảo mật thông tin khách của An Phát", "Đạo đức và chấm dứt khi vi phạm", "Bàn giao số liệu", "Thanh toán và chứng từ"];
  terms.forEach((t, i) => {
    const col = i % 2, row = Math.floor(i / 2), tw = (rw - 0.2) / 2;
    const x = rx + col * (tw + 0.2), y = 2.5 + row * 0.8;
    const hl = i === 4 || i === 7;
    card(s, x, y, tw, 0.68, hl ? C.tPink : C.white, hl ? C.pink : C.line);
    T(s, t, { x: x + 0.15, y, w: tw - 0.3, h: 0.68, fontSize: 12, bold: hl, valign: "middle" });
  });
}

// ───────────────────────── 16 — payment docs ─────────────────────────
{
  const s = base("s113", "Hình thức hợp đồng quyết định chứng từ thanh toán", {
    source: "X12: Dân trí (20/7/2026).",
    notes: "Nhiều KOL, KOC được khấu trừ 10% thuế TNCN trước khi nhận tiền; Cục Thuế lưu ý bản chất thu nhập (tiền công hay kinh doanh) căn cứ vào hợp đồng.\n[VERIFY: kế toán — quy định khấu trừ thuế TNCN hiện hành khi trả tiền cho cá nhân/KOL]",
  });
  card(s, M, 2.05, CW, 1.4, C.tYellow, C.yellow);
  T(s, [{ text: "Khấu trừ 10% ", options: { bold: true, fontSize: 22 } }, { text: "chưa chắc là nghĩa vụ thuế cuối cùng — Cục Thuế căn cứ vào hợp đồng để xác định bản chất thu nhập.", options: { fontSize: 17 } }],
    { x: M + 0.35, y: 2.05, w: CW - 0.7, h: 1.4, valign: "middle" });
  const cw = (CW - 1.1) / 2;
  [["Ký với cá nhân", "Chứng từ khấu trừ thuế TNCN; bản chất thu nhập theo hợp đồng", C.purple, C.tPurple], ["Ký với công ty quản lý", "Hóa đơn của công ty; công ty chịu trách nhiệm với nghệ sĩ", C.blue, C.tBlue]].forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 1.1);
    card(s, x, 3.8, cw, 1.7, f, c);
    T(s, [{ text: h, options: { bold: true, fontSize: 19, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: x + 0.3, y: 3.8, w: cw - 0.6, h: 1.7, valign: "middle" });
  });
  T(s, "hay", { x: M + cw, y: 3.8, w: 1.1, h: 1.7, fontSize: 18, italic: true, color: C.muted, align: "center", valign: "middle" });
  card(s, M, 5.8, CW, 0.8, C.white, C.pink, 1.5);
  T(s, [{ text: "Anh Khoa (ngân sách – mua sắm An Phát) sẽ hỏi: ", options: { bold: true } }, { text: "hóa đơn, chứng từ khấu trừ ở đâu?" }], { x: M + 0.35, y: 5.8, w: CW - 0.7, h: 0.8, fontSize: 16, valign: "middle" });
}

// ───────────────────────── 17 — Barcelona ─────────────────────────
{
  const s = base("s113", "Đo truyền thông bằng outputs, outcomes, impact — không dùng AVE", {
    source: "X13: AMEC (2025), Barcelona Principles 4.0 — rút gọn.",
    notes: "Giải thích AVE (advertising value equivalent): “Quy bài báo ra ‘nếu mua quảng cáo diện tích này thì tốn bao nhiêu’. AMEC nói rõ: đó KHÔNG phải giá trị của truyền thông.”\nHiểu lầm: “Báo cáo = số lượt xem” → đó là output. Khách hàng cần outcome.",
  });
  const pr = ["Mục tiêu rõ, đo được", "Hiểu khán giả – bên liên quan", "Đo mọi kênh liên quan", "Định tính + định lượng", "Không dùng AVE; đo đóng góp qua kết quả và tác động", "Báo cáo outputs, outcomes, impact", "Đạo đức, minh bạch dữ liệu và phương pháp"];
  pr.forEach((t, i) => {
    const y = 2.0 + i * 0.64, hl = i === 4 || i === 5;
    card(s, M, y, 7.4, 0.54, hl ? C.tBlue : C.white, hl ? C.blue : C.line);
    badge(s, M + 0.1, y + 0.06, 0.42, hl ? C.blue : C.muted, String(i + 1), C.white, 13);
    T(s, t, { x: M + 0.7, y, w: 6.5, h: 0.54, fontSize: 14, bold: hl, valign: "middle" });
  });
  const rx = M + 7.8, rw = CW - 7.8;
  card(s, rx, 2.0, rw, 2.35, C.tPink, C.pink);
  T(s, [{ text: "AVE", options: { bold: true, fontSize: 26, color: C.dPink, breakLine: true } }, { text: "quy bài báo ra “nếu mua quảng cáo diện tích này thì tốn bao nhiêu” — AMEC: đó không phải giá trị của truyền thông.", options: { fontSize: 14 } }],
    { x: rx + 0.3, y: 2.0, w: rw - 0.6, h: 2.35, valign: "middle" });
  const lv = [["Outputs", "đã làm gì, bao nhiêu", C.orange], ["Outcomes", "khán giả nghĩ, làm gì khác", C.purple], ["Impact", "kết quả cho tổ chức", C.green]];
  lv.forEach(([h, d, c], i) => {
    const y = 4.6 + i * 0.68;
    pill(s, rx, y, 1.7, 0.56, c, h, { text: { fontSize: 13 } });
    T(s, d, { x: rx + 1.85, y, w: rw - 1.85, h: 0.56, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── 18 — report mapping ─────────────────────────
{
  const s = base("s113", "Báo cáo cho anh Minh mở đầu bằng outcome", {
    source: "Ánh xạ Barcelona Principles ↔ khung ROI 6 cấp (Buổi 8) là gần đúng — nhận định của người soạn.",
    notes: "Ghi rõ: ánh xạ gần đúng, nhận định của người soạn.\nChốt: “Báo cáo cho anh Minh không mở đầu bằng ‘25 bài báo, 2 triệu lượt xem’. Mở đầu bằng: ‘tỷ lệ CEO đến trực tiếp tăng từ … lên …’.”\nGợi ý: cho lớp phân loại nhanh vài chỉ số output/outcome trên bảng.",
  });
  const cols = [{ w: 2.2 }, { w: 6.6, head: "Ví dụ trước sự kiện của An Phát", fill: C.blue }, { w: CW - 8.8 + 0.1, head: "Gần với cấp (Buổi 8)", fill: C.purple }];
  table(s, M, 1.95, cols, [
    ["Outputs", "Số bài báo đúng mảng; số bài của diễn giả; lượt tiếp cận", "trước cấp 0"],
    ["Outcomes", "Tỷ lệ xác nhận tham dự; tỷ lệ CEO đến trực tiếp; số khách đăng ký phiên chuyên đề; khách biết thêm điều gì", "Cấp 0 – 2"],
    ["Impact", "Cuộc hẹn kinh doanh sau sự kiện; khách mở rộng quan hệ với An Phát", "Cấp 3 – 5 (An Phát chia sẻ dữ liệu)"],
  ], { rowH: [0.8, 1.1, 0.95], size: 14 });
  const cw = (CW - 0.3) / 2;
  card(s, M, 5.55, cw, 1.0, C.white, C.line);
  T(s, [{ text: "Không mở đầu: ", options: { bold: true, color: C.muted } }, { text: "“25 bài báo, 2 triệu lượt xem”", options: { italic: true, color: C.muted } }], { x: M + 0.3, y: 5.55, w: cw - 0.6, h: 1.0, fontSize: 15, valign: "middle" });
  card(s, M + cw + 0.3, 5.55, cw, 1.0, C.tYellow, C.yellow);
  T(s, [{ text: "Mở đầu: ", options: { bold: true } }, { text: "“tỷ lệ CEO đến trực tiếp tăng từ … lên …”", options: { italic: true } }], { x: M + cw + 0.6, y: 5.55, w: cw - 0.6, h: 1.0, fontSize: 15, valign: "middle" });
}

// ───────────────────────── 19 — prepurchase ─────────────────────────
{
  const s = base("s114", "Với khách của An Phát, “mua” là quyết định dành một buổi tối", {
    source: "X14: Lemon & Verhoef (2016), Journal of Marketing — xem V09, Buổi 10.",
    notes: "Lemon & Verhoef (2016): giai đoạn prepurchase; điểm chạm social/external (báo chí, người khác) và partner-owned ảnh hưởng mạnh đến quyết định.\nVới khách của An Phát, “mua” là quyết định dành một buổi tối cho An Phát — và có đến trực tiếp hay không.",
  });
  const stages = [["Trước mua", "prepurchase", C.pink, true], ["Mua", "purchase", C.muted], ["Sau mua", "postpurchase", C.muted]];
  const cw = (CW - 0.4) / 3;
  stages.forEach(([h, e, c, hl], i) => {
    const x = M + i * (cw + 0.2);
    s.addShape(pres.shapes.CHEVRON, { x, y: 2.05, w: cw, h: 1.0, fill: { color: hl ? c : C.band }, line: { color: hl ? c : C.line, width: 1 } });
    T(s, [{ text: h, options: { bold: true, fontSize: 20, breakLine: true } }, { text: e, options: { italic: true, fontSize: 12 } }], { x: x + 0.5, y: 2.05, w: cw - 1.0, h: 1.0, color: hl ? C.white : C.muted, valign: "middle" });
  });
  card(s, M, 3.4, 6.6, 3.15, C.tPink, C.pink);
  T(s, [{ text: "“Mua” với khách của An Phát =", options: { fontSize: 15, color: C.muted, breakLine: true } }, { text: "quyết định dành một buổi tối cho An Phát — và có đến trực tiếp hay cử người thay.", options: { fontSize: 21, bold: true } }],
    { x: M + 0.35, y: 3.4, w: 5.9, h: 3.15, valign: "middle", paraSpaceAfter: 8 });
  const rx = M + 6.9, rw = CW - 6.9;
  T(s, "Điểm chạm ảnh hưởng mạnh ở giai đoạn này", { x: rx, y: 3.4, w: rw, h: 0.45, fontSize: 15, bold: true });
  [["Social / external", "báo chí, người khác nói về sự kiện", C.blue, C.tBlue], ["Partner-owned", "diễn giả, KOL, nhà tài trợ", C.purple, C.tPurple]].forEach(([h, d, c, f], i) => {
    const y = 3.95 + i * 1.3;
    card(s, rx, y, rw, 1.15, f, c);
    T(s, [{ text: h, options: { bold: true, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: rx + 0.3, y, w: rw - 0.6, h: 1.15, fontSize: 17, valign: "middle" });
  });
}

// ───────────────────────── 20 — four touchpoints timeline ─────────────────────────
{
  const s = base("s114", "Bốn điểm chạm trước sự kiện có thể khuếch đại", {
    source: "Dựng theo Buổi 3 và Buổi 9 · thời điểm là giả định.",
    notes: "Dòng thời gian trước gala; mỗi mốc là một điểm chạm của khách An Phát có thể được báo chí hoặc diễn giả khuếch đại.\nAlt-text: trục thời gian bốn mốc T-6 tuần, T-5 đến T-3 tuần, T-3 tuần, T-1 tuần; dưới mỗi mốc là điểm chạm và cách khuếch đại.",
  });
  const pts = [["T-6 tuần", "Nhận thư mời, “save the date”", "Tên diễn giả chính trong thư mời (bảo chứng)", C.orange, C.tOrange],
    ["T-5 → T-3 tuần", "Tìm hiểu chương trình", "Bài phỏng vấn diễn giả trên báo kinh tế (earned)", C.purple, C.tPurple],
    ["T-3 tuần", "Xác nhận tham dự, đăng ký phiên", "Video ngắn của diễn giả gửi riêng khách mời", C.blue, C.tBlue],
    ["T-1 tuần", "Nhắc lịch, thông tin chuẩn bị", "Câu hỏi khảo sát trước của diễn giả", C.green, C.tGreen]];
  const cw = (CW - 3 * 0.25) / 4;
  line(s, M, 2.6, W - M, 2.6, C.ink, 3, { end: "triangle" });
  T(s, "gala 12/12", { x: W - M - 1.6, y: 2.05, w: 1.6, h: 0.4, fontSize: 12, bold: true, color: C.muted, align: "right" });
  pts.forEach(([t, tp, amp, c, f], i) => {
    const x = M + i * (cw + 0.25);
    badge(s, x + cw / 2 - 0.25, 2.35, 0.5, c, "");
    T(s, t, { x, y: 1.95, w: cw, h: 0.4, fontSize: 14, bold: true, align: "center", color: c === C.blue ? C.dBlue : c === C.orange ? C.dOrange : c === C.green ? C.dGreen : c });
    card(s, x, 3.1, cw, 1.3, C.white, c, 1.25);
    T(s, [{ text: "Điểm chạm", options: { fontSize: 11, color: C.muted, breakLine: true } }, { text: tp, options: { bold: true } }], { x: x + 0.2, y: 3.1, w: cw - 0.4, h: 1.3, fontSize: 14, valign: "middle" });
    arrow(s, x + cw / 2, 4.45, x + cw / 2, 4.75, C.ink, 2);
    card(s, x, 4.8, cw, 1.75, f, c);
    T(s, [{ text: "Khuếch đại bằng", options: { fontSize: 11, color: C.muted, breakLine: true } }, { text: amp }], { x: x + 0.2, y: 4.8, w: cw - 0.4, h: 1.75, fontSize: 14, valign: "middle" });
  });
}

// ───────────────────────── 21 — earned vs paid ─────────────────────────
{
  const s = base("s114", "Earned đáng tin hơn, paid kiểm soát được hơn", {
    source: "Nhận định của người soạn · nghĩa vụ gắn nhãn: X05.",
    notes: "Bảng so sánh là nhận định của người soạn.\nNội dung trả tiền để đăng (paid) phải gắn nhãn quảng cáo/tài trợ theo Luật Quảng cáo sửa đổi.",
  });
  const cols = [{ w: 3.0 }, { w: (CW - 3.0) / 2, head: "Earned — báo chí tự viết", fill: C.green, color: C.ink }, { w: (CW - 3.0) / 2, head: "Paid — KOL, bài đăng có phí", fill: C.orange }];
  table(s, M, 2.0, cols, [
    ["Kiểm soát nội dung", "Thấp", "Cao (duyệt được)"],
    ["Độ tin cậy với khách", "Cao hơn", "Phụ thuộc người đăng"],
    ["Nghĩa vụ", "Cung cấp thông tin đúng, đúng mảng", "Gắn nhãn quảng cáo/tài trợ (X05)"],
  ], { rowH: 1.0, size: 17 });
  card(s, M, 5.95, CW, 0.7, C.tYellow, C.yellow);
  T(s, "Không có loại nào luôn tốt hơn — chọn theo điểm chạm và theo điều khách cần tin.", { x: M + 0.35, y: 5.95, w: CW - 0.7, h: 0.7, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 22 — five questions ─────────────────────────
{
  const s = base("s114", "Năm câu hỏi khuếch đại", {
    notes: "Để chiếu suốt S6 — các nhóm dùng khi lập kế hoạch và khi phản biện chéo.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  const qs = [["Điểm chạm nào của khách An Phát?", C.orange], ["Ai khuếch đại — và vì sao khách tin họ?", C.purple], ["Khách được gì (thông tin, lý do để đến)?", C.pink], ["Điều khoản, nguyên tắc nào bảo vệ An Phát?", C.blue], ["Đo bằng output – outcome nào?", C.green]];
  qs.forEach(([q, c], i) => {
    const y = 2.0 + i * 0.93;
    card(s, M, y, CW, 0.8, C.white, c, 1.5);
    badge(s, M + 0.2, y + 0.1, 0.6, c, String(i + 1));
    T(s, q, { x: M + 1.05, y, w: CW - 1.3, h: 0.8, fontSize: 20, bold: true, valign: "middle" });
  });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s114", "Thực hành 2 · Khuếch đại điểm chạm trước sự kiện", {
    source: "Phiếu W11_activity_S6_khuech_dai_truoc_su_kien.md · Danh sách báo chí là giả định.",
    notes: "S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 lập kế hoạch · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt.\nMặc định diễn giả/KOL: TS. Lê Hoàng Nam và chị Trần Mai Anh. Thư mời T-6 tuần; hạn xác nhận T-3 tuần; mục tiêu: tỷ lệ CEO đến trực tiếp tăng rõ.\nYêu cầu: ≥ 4 điểm chạm, ≥ 1 nhà báo trong danh sách, ≥ 1 diễn giả/KOL; đánh dấu ⭐ điểm chạm kéo CEO đến nhiều nhất.\nXoay trạm: vai chị Vy — Trưởng nhóm Thương hiệu An Phát: 🟨 1 câu hỏi, 🟥 1 lo ngại.\nKhi chốt: nhóm nào chọn nhà báo C hoặc kênh E? Vì sao? Ghi các lo ngại “chị Vy” lặp lại nhiều nhất.",
  });
  T(s, "Diễn giả: TS. Nam + chị Mai Anh · mục tiêu: tăng tỷ lệ CEO đến trực tiếp", { x: M, y: 1.9, w: CW, h: 0.4, fontSize: 13, color: C.muted });
  const press = [["A", "Báo kinh tế lớn", "Ngân hàng – tài chính", "Đã làm 2 lần"], ["B", "Tạp chí doanh nghiệp", "Doanh nghiệp – quản trị", "Chưa quen"], ["C", "Báo điện tử", "Giải trí – sao", "Đã quen"], ["D", "Đài truyền hình", "Kinh tế, đại chúng", "Chưa quen"], ["E", "Trang tin “đăng theo yêu cầu, có báo giá”", "Tổng hợp", "Tự chào giá"]];
  const cols = [{ w: 0.6 }, { w: 2.6, head: "Kênh", fill: C.purple }, { w: 2.2, head: "Mảng", fill: C.blue }, { w: 1.5, head: "Quan hệ", fill: C.pink }];
  table(s, M, 2.4, cols, press, { rowH: 0.5, size: 11, headH: 0.42 });
  const rx = M + 7.2, rw = CW - 7.2;
  T(s, "6 cột: điểm chạm · ai khuếch đại, vì sao tin · khách được gì · bảo vệ An Phát · 1 output + 1 outcome · earned hay paid", { x: rx, y: 2.4, w: rw, h: 1.0, fontSize: 12, valign: "top" });
  const steps = [["15’", "Lập kế hoạch ≥ 4 điểm chạm trên A1", C.orange], ["2×4’", "Xoay trạm: vai chị Vy (Thương hiệu) — 🟨 1 câu hỏi, 🟥 1 lo ngại", C.pink], ["4’", "Về bàn, sửa một dòng", C.green]];
  steps.forEach(([t, d, c], i) => {
    const y = 3.35 + i * 0.85;
    badge(s, rx, y, 0.72, c, t, null, t.length > 3 ? 12 : 16);
    T(s, d, { x: rx + 0.9, y, w: rw - 0.9, h: 0.72, fontSize: 12, valign: "middle" });
  });
  card(s, M, 6.05, CW, 0.6, C.tYellow, C.yellow);
  T(s, "Dùng năm câu hỏi khuếch đại (slide trước) cho mọi dòng.", { x: M + 0.3, y: 6.05, w: CW - 0.6, h: 0.6, fontSize: 13, bold: true, valign: "middle" });
}

// ───────────────────────── 23 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 11", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang “báo chí và KOL”: khán giả mục tiêu, 3 nhà báo/KOL phù hợp, điều khoản bắt buộc, 3 chỉ số outcome. Làm dần trên lớp, không giao về nhà.",
  });
  const pts = [
    ["11.1–2", "Chọn KOL theo vai trò, độ tin cậy, tương đồng với khách của Key Account và rủi ro — không theo số follower. Hiểu khán giả trước, rồi lập bản đồ nhà báo: mảng × độc giả × mức quan hệ.", C.purple, C.tPurple],
    ["11.3", "Booking là quy trình: brief → due diligence → hợp đồng (gắn nhãn, duyệt, chấm dứt) → thanh toán có chứng từ → báo cáo outputs – outcomes – impact, không dùng AVE.", C.blue, C.tBlue],
    ["11.4", "Báo chí và KOL khuếch đại điểm chạm trước sự kiện, cho khách một lý do để đến — và luôn bảo vệ Key Account.", C.pink, C.tPink],
  ];
  pts.forEach(([k, d, c, t], i) => {
    const y = 2.0 + i * 1.3;
    card(s, M, y, CW, 1.15, t, c);
    badge(s, M + 0.2, y + 0.12, 0.9, c, k, C.white, k.length > 4 ? 15 : 20);
    T(s, d, { x: M + 1.35, y, w: CW - 1.6, h: 1.15, fontSize: 15, valign: "middle" });
  });
  card(s, M, 6.0, CW, 0.75, C.tYellow, C.yellow);
  T(s, [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "thêm trang “báo chí và KOL” — khán giả, 3 nhà báo/KOL, điều khoản bắt buộc, 3 chỉ số outcome." }],
    { x: M + 0.3, y: 6.0, w: CW - 0.6, h: 0.75, fontSize: 14, valign: "middle" });
}

// ───────────────────────── 24 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online).\nCần xem: (a) chọn theo phù hợp với khách của Key Account, không theo số follower; (b) điều khoản cụ thể (gắn nhãn, duyệt nội dung, chấm dứt khi vi phạm…); (c) phân biệt output (số bài, lượt tiếp cận) và outcome (xác nhận tham dự, đăng ký phiên, thay đổi nhận thức).\nCâu nối Buổi 12: “Hôm nay ta chọn và ký với những người kể chuyện cho Key Account. Buổi sau: khi các bên liên quan — nhà tài trợ, nhà cung cấp, báo chí, KOL — xung đột với nhau hoặc gặp sự cố, agency xử lý và biến xung đột thành cơ hội thế nào.”",
  });
  const qs = [
    ["1", "Với khách hàng trong dự án cũ của nhóm bạn, bạn chọn loại KOL/diễn giả nào? Bạn đang “mua” khán giả, sự bảo chứng hay nội dung của họ?", C.purple],
    ["2", "Viết 1 điều khoản bạn nhất định đưa vào hợp đồng với KOL đó, và 1 chỉ số outcome (không phải output) bạn sẽ báo cáo cho khách hàng.", C.blue],
  ];
  qs.forEach(([n, q, c], i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, c, n);
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, [{ text: "Buổi 12: ", options: { bold: true } }, { text: "khi nhà tài trợ, nhà cung cấp, báo chí, KOL xung đột hoặc gặp sự cố — agency xử lý và biến xung đột thành cơ hội thế nào." }],
    { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}

// ───────────────────────── References ─────────────────────────
const REFS = [
  ["X01", "Campbell, C., & Farrell, J. R. (2020). More than meets the eye: The functional components underlying influencer marketing. Business Horizons, 63(4), 469–479."],
  ["X02", "Ohanian, R. (1990). Construction and validation of a scale to measure celebrity endorsers’ perceived expertise, trustworthiness, and attractiveness. Journal of Advertising, 19(3), 39–52."],
  ["X03", "Lou, C., & Yuan, S. (2019). Influencer marketing: How message value and credibility affect consumer trust of branded content on social media. Journal of Interactive Advertising, 19(1), 58–73."],
  ["X04", "HypeAuditor. (2025). The state of influencer marketing 2025."],
  ["X05", "LuatVietnam. (n.d.). KOLs quảng cáo sản phẩm cần lưu ý 4 quy định mới từ 01/01/2026. · Thanh Niên. (2025, November 12). KOL, KOC phải xác minh thông tin, nêu rõ ràng quảng cáo."],
  ["X06", "VnExpress. (2025, November 19). Hoa hậu Thùy Tiên, Hằng Du Mục, Quang Linh Vlogs bị phạt 2 năm tù. · Thanh Niên (19/11/2025); Dân trí (20/5/2025); VTC News (2025)."],
  ["X07", "Nhân Dân. (2026, April 17). Cảnh báo rủi ro từ khuyến nghị chứng khoán trái phép trên mạng xã hội. · VietnamPlus (17/4/2026)."],
  ["X08", "Tuổi Trẻ Online. (2025, August 12). Gần 300 KOL cùng khởi động chương trình ‘Tín nhiệm người có ảnh hưởng’."],
  ["X09", "Cision. (2025). Cision’s 2025 State of the Media Report… [Thông cáo báo chí]. PR Newswire."],
  ["X10", "Báo Pháp Luật TP.HCM. (2026). Những điểm mới đáng chú ý của Nghị định hướng dẫn Luật Báo chí 2025. · LawNet. (n.d.). Quy định về tổ chức họp báo theo Luật Báo chí 2016."],
  ["X11", "Hội Nhà báo Việt Nam. (2016). 10 điều Quy định đạo đức nghề nghiệp người làm báo Việt Nam (QĐ 483/QĐ-HNBVN)."],
  ["X12", "Dân trí. (2026, July 20). Ai làm KOL, KOC cần lưu ý điều này dù đã bị khấu trừ 10% thuế."],
  ["X13", "AMEC. (2025). Barcelona Principles V4.0."],
  ["X14", "Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96."],
];
[REFS.slice(0, 7), REFS.slice(7)].forEach((part, pi) => {
  const s = base("end", `Tài liệu tham khảo (${pi + 1}/2)`, {
    source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-11_tu-lieu-tong-hop.md, mục 6.",
    notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn X01–X14 ghi ở chân slide. Tiêu đề báo X06 giữ nguyên dạng chữ theo dàn ý (không dùng ảnh chân dung).",
  });
  part.forEach(([k, r], i) => {
    const y = 1.95 + i * 0.66;
    T(s, k, { x: M, y, w: 0.7, h: 0.58, fontSize: 11, bold: true, color: C.purple, valign: "middle" });
    T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: 0.58, fontSize: 11, valign: "middle" });
  });
});

pres.writeFile({ fileName: "EVM1110E_W11_Media_Influencers.pptx" }).then((f) => console.log("wrote", f));
