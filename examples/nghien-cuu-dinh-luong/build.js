// Nghiên cứu định lượng trong Marketing (dựa trên tài liệu "Quantitative Research")
// Build: npm i pptxgenjs && node build.js  → Nghien_cuu_dinh_luong_Marketing.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.title = "Nghiên cứu định lượng trong Marketing";

const C = {
  bg: "FBFAF4",
  green: "49B296",
  yellow: "FFD23B",
  pink: "FF5178",
  plum: "962B7C",
  blue: "09A1E5",
  orange: "FF9259",
  ink: "2B2633",
  body: "3A3542",
  muted: "7A7480",
  line: "E6E2D6",
  soft: "F1EEE3",
  white: "FFFFFF",
};
const PALETTE = [C.green, C.yellow, C.pink, C.plum, C.blue, C.orange];
const F = "Alexandria";
const M = 0.5;

const SEC = {
  intro: { label: "Giới thiệu", color: C.plum },
  s1: { label: "1  Chọn kỹ thuật định lượng", color: C.pink },
  s2: { label: "2  Lập kế hoạch khảo sát", color: C.blue },
  s3: { label: "3  Phân tích dữ liệu", color: C.green },
  s4: { label: "4  Báo cáo & trực quan hóa", color: C.orange },
};

let pageNo = 0;

function paletteStrip(slide, x, y, w, h) {
  const seg = w / PALETTE.length;
  PALETTE.forEach((c, i) =>
    slide.addShape(pres.shapes.RECTANGLE, { x: x + i * seg, y, w: seg, h, fill: { color: c }, line: { color: c, width: 0 } })
  );
}

function contentSlide(sec, title) {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  pageNo += 1;
  const col = SEC[sec].color;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: M, y: 0.22, w: 3.1, h: 0.3, rectRadius: 0.15, fill: { color: col }, line: { color: col, width: 0 },
  });
  s.addText(SEC[sec].label, {
    x: M, y: 0.22, w: 3.1, h: 0.3, margin: 0, fontFace: F, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle",
  });
  s.addText(title, {
    x: M, y: 0.58, w: 9.0, h: 0.85, margin: 0, fontFace: F, fontSize: 21, bold: true, color: C.ink, valign: "top",
  });
  paletteStrip(s, M, 5.33, 1.2, 0.06);
  s.addText("Nghiên cứu định lượng trong Marketing", {
    x: 1.85, y: 5.24, w: 5, h: 0.25, margin: 0, fontFace: F, fontSize: 9, color: C.muted, valign: "middle",
  });
  s.addText(String(pageNo + 1), {
    x: 8.9, y: 5.24, w: 0.6, h: 0.25, margin: 0, fontFace: F, fontSize: 10, bold: true, color: col, align: "right", valign: "middle",
  });
  return s;
}

function box(s, x, y, w, h, fill, line) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: line || fill, width: line ? 1 : 0 },
  });
}

function circleNum(s, x, y, d, color, text, size = 14, txtColor = C.white) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  s.addText(text, { x, y, w: d, h: d, margin: 0, fontFace: F, fontSize: size, bold: true, color: txtColor, align: "center", valign: "middle" });
}

function txt(s, text, x, y, w, h, o = {}) {
  s.addText(text, {
    x, y, w, h, margin: 0, fontFace: F, fontSize: o.size || 12, bold: !!o.bold, italic: !!o.italic,
    color: o.color || C.body, align: o.align || "left", valign: o.valign || "top", paraSpaceAfter: o.para || 0,
  });
}

function bullets(arr) {
  return arr.map((t) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: true } }));
}

// Card with colored header band
function headCard(s, x, y, w, h, col, title, sub, items, size = 11.5) {
  box(s, x, y, w, h, C.white, C.line);
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.75, rectRadius: 0.08, fill: { color: col }, line: { color: col, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.25, fill: { color: col }, line: { color: col, width: 0 } });
  const fc = col === C.yellow ? C.ink : C.white;
  s.addText(
    sub
      ? [{ text: title, options: { bold: true, fontSize: 14, breakLine: true } }, { text: sub, options: { italic: true, fontSize: 10 } }]
      : [{ text: title, options: { bold: true, fontSize: 14 } }],
    { x: x + 0.15, y: y + 0.03, w: w - 0.3, h: 0.7, margin: 0, fontFace: F, color: fc, valign: "middle" }
  );
  if (items)
    s.addText(typeof items[0] === "string" ? bullets(items) : items, {
      x: x + 0.1, y: y + 0.88, w: w - 0.22, h: h - 0.98, margin: 0, fontFace: F, fontSize: size, color: C.body, valign: "top", paraSpaceAfter: 5,
    });
}

// Thin-accent card (accent bar left)
function sideCard(s, x, y, w, h, col, title, body, size = 11.5) {
  box(s, x, y, w, h, C.white, C.line);
  s.addShape(pres.shapes.RECTANGLE, { x, y: y + 0.12, w: 0.07, h: h - 0.24, fill: { color: col }, line: { color: col, width: 0 } });
  txt(s, title, x + 0.22, y + 0.1, w - 0.32, 0.3, { size: 13, bold: true, color: col === C.yellow ? C.ink : col });
  txt(s, body, x + 0.22, y + 0.42, w - 0.32, h - 0.5, { size });
}

function banner(s, y, col, parts, h = 0.45, size = 12) {
  box(s, M, y, 9.0, h, col);
  s.addText(parts, { x: M + 0.2, y, w: 8.6, h, margin: 0, fontFace: F, fontSize: size, color: col === C.yellow ? C.ink : C.white, valign: "middle" });
}

function note(s, text) {
  txt(s, text, M, 4.95, 9.0, 0.25, { size: 9.5, italic: true, color: C.muted, valign: "middle" });
}

// table helpers
const th = (t, col) => ({ text: t, options: { bold: true, color: col === C.yellow ? C.ink : C.white, fill: { color: col }, align: "center" } });
const tc = (t, o = {}) => ({ text: t, options: { color: o.color || C.body, bold: !!o.bold, fill: { color: o.fill || C.white } } });
const tk = (t) => tc(t, { bold: true, color: C.ink, fill: C.soft });


// Manual bar chart (horizontal): rows = [label, value, color, valueLabel?]
function hbars(s, x, y, w, rows, max, o = {}) {
  const lw = o.labelW || 1.6, bh = o.barH || 0.34, gap = o.gap || 0.14;
  const bw = w - lw - 0.7;
  rows.forEach(([label, v, col, vl], i) => {
    const yy = y + i * (bh + gap);
    txt(s, label, x, yy, lw - 0.1, bh, { size: o.size || 10.5, valign: "middle", color: C.ink });
    s.addShape(pres.shapes.RECTANGLE, { x: x + lw, y: yy, w: bw, h: bh, fill: { color: C.soft }, line: { color: C.soft, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: x + lw, y: yy, w: Math.max(0.02, (bw * v) / max), h: bh, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, vl || String(v), x + lw + (bw * v) / max + 0.08, yy, 0.8, bh, { size: o.size || 10.5, bold: true, color: C.ink, valign: "middle" });
  });
}

// ═════════════════════════ 1. Title ═════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.OVAL, { x: 6.9, y: -1.1, w: 3.8, h: 3.8, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.55, y: 2.15, w: 1.8, h: 1.8, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 6.55, y: 2.85, w: 1.15, h: 1.15, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 7.75, y: 4.1, w: 0.7, h: 0.7, fill: { color: C.green }, line: { color: C.green, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.05, y: 4.4, w: 0.45, h: 0.45, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  // mini bar motif inside the yellow circle
  [[0.55, C.plum], [0.95, C.pink], [0.75, C.blue], [1.25, C.green]].forEach(([h, col], i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 7.8 + i * 0.42, y: 1.75 - h, w: 0.3, h, fill: { color: col }, line: { color: col, width: 0 } });
  });
  s.addShape(pres.shapes.LINE, { x: 7.7, y: 1.78, w: 1.85, h: 0, line: { color: C.ink, width: 1.5 } });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 0.9, w: 2.4, h: 0.36, rectRadius: 0.18, fill: { color: C.plum }, line: { color: C.plum, width: 0 } });
  txt(s, "NGHIÊN CỨU MARKETING", M, 0.9, 2.4, 0.36, { size: 11, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("Nghiên cứu\nđịnh lượng", {
    x: M, y: 1.4, w: 6.2, h: 1.7, margin: 0, fontFace: F, fontSize: 44, bold: true, color: C.ink, valign: "top", lineSpacingMultiple: 0.95,
  });
  txt(s, "Đúng con số giúp ra quyết định rõ ràng và tự tin — từ khảo sát truyền thống đến ưu tiên tính năng và mức sẵn lòng chi trả", M, 3.2, 5.9, 0.8, { size: 15 });
  paletteStrip(s, M, 4.3, 2.4, 0.08);
  txt(s, "Biên soạn từ tài liệu “Quantitative Research” (bản ghi khóa học của Sarah Weise, CEO công ty nghiên cứu thị trường BIXA)", M, 4.45, 6.0, 0.5, { size: 10.5, color: C.muted });
}

// ═════════════════════════ 2. Roadmap ═════════════════════════
{
  const s = contentSlide("intro", "Bài học đi từ mục tiêu nghiên cứu đến câu chuyện dữ liệu thúc đẩy hành động");
  const rows = [
    ["0", "Nền tảng", "Định lượng hay định tính · ROI của dữ liệu · đặt mục tiêu", C.plum],
    ["1", "Chọn kỹ thuật định lượng", "Thống kê mô tả & suy luận · cluster · MaxDiff · conjoint · Van Westendorp · Gabor-Granger", C.pink],
    ["2", "Lập kế hoạch khảo sát", "Cỡ mẫu · thiết kế câu hỏi · giảm thiên lệch · câu hỏi nhạy cảm · công cụ", C.blue],
    ["3", "Phân tích dữ liệu", "Làm sạch & gia quyền · kể chuyện bằng số · câu hỏi mở · suy luận", C.green],
    ["4", "Báo cáo & trực quan hóa", "Kể chuyện bằng hình ảnh", C.orange],
  ];
  rows.forEach(([n, t, d, col], i) => {
    const y = 1.55 + i * 0.68;
    circleNum(s, M, y + 0.02, 0.5, col, n, 16);
    txt(s, t, 1.2, y, 3.0, 0.55, { size: 15, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, 4.2, y, 5.3, 0.55, { size: 11, valign: "middle" });
    if (i < rows.length - 1) s.addShape(pres.shapes.LINE, { x: 1.2, y: y + 0.61, w: 8.3, h: 0, line: { color: C.line, width: 1 } });
  });
}

// ═════════════════════════ 3. Quant vs qual ═════════════════════════
{
  const s = contentSlide("intro", "Cần con số và quy mô thì chọn định lượng; cần chiều sâu thì chọn định tính");
  const cols = [
    { x: M, col: C.blue, h: "Định lượng", tag: "QUY MÔ", items: ["Dữ liệu khái quát hóa cho tổng thể lớn", "Đo hài lòng toàn quốc: bao nhiêu % hài lòng, sẵn lòng giới thiệu", "Nhu cầu thị trường: bao nhiêu người sẽ mua, tính năng nào quan trọng"] },
    { x: 5.1, col: C.pink, h: "Định tính", tag: "CHIỀU SÂU", items: ["Hiểu “vì sao” đằng sau hành vi", "Phỏng vấn, nhóm tập trung, nhật ký", "Giai đoạn khám phá: ý tưởng sản phẩm, thử nghiệm sáng tạo"] },
  ];
  cols.forEach((c) => {
    box(s, c.x, 1.55, 4.4, 2.05, C.white, C.line);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: c.x + 0.2, y: 1.7, w: 1.2, h: 0.32, rectRadius: 0.16, fill: { color: c.col }, line: { color: c.col, width: 0 } });
    txt(s, c.tag, c.x + 0.2, 1.7, 1.2, 0.32, { size: 9.5, bold: true, color: C.white, align: "center", valign: "middle" });
    txt(s, c.h, c.x + 1.55, 1.66, 2.7, 0.4, { size: 17, bold: true, color: c.col, valign: "middle" });
    s.addText(bullets(c.items), { x: c.x + 0.15, y: 2.2, w: 4.1, h: 1.35, margin: 0, fontFace: F, fontSize: 11.5, color: C.body, valign: "top", paraSpaceAfter: 4 });
  });
  txt(s, "Kết hợp cả hai: phương pháp “sandwich”", M, 3.75, 9.0, 0.3, { size: 12.5, bold: true, color: C.ink });
  const st = [["Khoảng 10 phỏng vấn", "Hình thành giả thuyết", C.pink], ["Khảo sát khoảng 300 người", "Giả thuyết có đúng trên quy mô lớn?", C.blue], ["Định tính vòng 2", "Đào sâu chi tiết vừa phát hiện", C.pink]];
  st.forEach(([h, d, col], i) => {
    const x = M + i * 3.05;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 4.1, w: 3.1, h: 0.75, fill: { color: col }, line: { color: C.bg, width: 1.5 } });
    s.addText([{ text: h, options: { bold: true, fontSize: 12, breakLine: true } }, { text: d, options: { fontSize: 9.5 } }],
      { x: x + (i === 0 ? 0.15 : 0.4), y: 4.1, w: 2.4, h: 0.75, margin: 0, fontFace: F, color: C.white, valign: "middle" });
  });
}

// ═════════════════════════ 4. ROI ═════════════════════════
{
  const s = contentSlide("intro", "Dữ liệu định lượng mang lại lợi nhuận đo được, không chỉ là con số");
  box(s, M, 1.55, 3.4, 3.3, C.plum);
  txt(s, "Tình huống: Nike, 2020–2021", M + 0.2, 1.68, 3.0, 0.3, { size: 12, bold: true, color: C.yellow });
  txt(s, "Đại dịch làm khách tại cửa hàng biến mất. Khảo sát cho thấy khách muốn trải nghiệm số cá nhân hóa → thử giày ảo, kế hoạch tập luyện riêng, chuyên gia tư vấn trực tuyến.", M + 0.2, 2.0, 3.0, 1.3, { size: 10.5, color: C.white });
  txt(s, "+85%", M + 0.2, 3.35, 1.5, 0.6, { size: 26, bold: true, color: C.white });
  txt(s, "doanh số số", M + 0.2, 3.95, 1.5, 0.3, { size: 9.5, color: "E9D3E3" });
  txt(s, "+19%", M + 1.75, 3.35, 1.5, 0.6, { size: 26, bold: true, color: C.white });
  txt(s, "bán hàng trực tiếp", M + 1.75, 3.95, 1.5, 0.3, { size: 9.5, color: "E9D3E3" });
  txt(s, "Năm 2021 so với trước", M + 0.2, 4.35, 3.0, 0.3, { size: 9, italic: true, color: "E9D3E3" });

  const st = [
    ["23×", "khả năng thu hút khách khi ra quyết định dựa trên dữ liệu", C.pink],
    ["19×", "khả năng có lợi nhuận", C.orange],
    ["85%", "lợi nhuận cao hơn ở doanh nghiệp giỏi về insight khách hàng", C.green],
    ["63%", "khách hàng kỳ vọng doanh nghiệp hiểu nhu cầu của họ", C.blue],
    ["30%", "doanh thu bị mất có thể do sai lầm về định giá", C.plum],
    ["64%", "chuyển đổi tăng khi dời một nút trên trang chủ (Cvent)", C.pink],
  ];
  st.forEach(([n, l, col], i) => {
    const x = 4.1 + (i % 2) * 2.75, y = 1.55 + Math.floor(i / 2) * 1.12;
    box(s, x, y, 2.6, 1.0, C.white, C.line);
    txt(s, n, x + 0.15, y + 0.08, 2.3, 0.45, { size: 20, bold: true, color: col });
    txt(s, l, x + 0.15, y + 0.52, 2.35, 0.45, { size: 9, color: C.body });
  });
  note(s, "Số liệu do người giảng dẫn trong tài liệu gốc; thêm: mỗi 1 USD đầu tư cho UX mang về 100 USD.");
}

// ═════════════════════════ 5. Objectives ═════════════════════════
{
  const s = contentSlide("intro", "Mục tiêu nghiên cứu càng cụ thể, câu hỏi càng tập trung và dữ liệu càng dùng được");
  box(s, M, 1.55, 9.0, 0.85, C.soft);
  s.addText([
    { text: "Chưa cụ thể: ", options: { bold: true, color: C.pink } },
    { text: "“Khách hàng nghĩ gì về sản phẩm?”", options: { italic: true, breakLine: true } },
    { text: "Cụ thể: ", options: { bold: true, color: C.green } },
    { text: "“Khách đánh giá tính năng nào quan trọng nhất, và lý do là X, Y hay Z?”", options: { italic: true } },
  ], { x: M + 0.2, y: 1.55, w: 8.6, h: 0.85, margin: 0, fontFace: F, fontSize: 12, color: C.ink, valign: "middle", paraSpaceAfter: 3 });
  const o = [
    [C.pink, "Ưu tiên tính năng", "Tính năng nào được coi trọng nhất? Điều gì thúc đẩy sự hài lòng?"],
    [C.blue, "Nhận biết thương hiệu", "Đo nhận biết không gợi ý; so sánh với đối thủ — đối thủ theo ai?"],
    [C.orange, "Giá & sẵn lòng chi trả", "Khoảng giá tối ưu; gói tính năng cho giá cao nhất; tính năng nào đáng giá hơn"],
    [C.green, "Phân khúc & nhu cầu", "Phân khúc theo tâm lý học; nhu cầu khác nhau giữa các nhóm"],
  ];
  o.forEach(([col, h, d], i) => {
    const x = M + i * 2.29;
    box(s, x, 2.6, 2.13, 2.2, C.white, C.line);
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.6, w: 2.13, h: 0.1, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, h, x + 0.15, 2.82, 1.85, 0.55, { size: 13, bold: true, color: col });
    txt(s, d, x + 0.15, 3.4, 1.85, 1.3, { size: 10.5 });
  });
  note(s, "Ví dụ: công ty luật cụ thể hóa “chuyên môn” thành kiến thức ngành, kinh nghiệm pháp lý hay hiểu biết về AI, tiền mã hóa.");
}

// ═════════════════════════ SECTION 1 ═════════════════════════
// 6. Descriptive vs inferential
{
  const s = contentSlide("s1", "Thống kê mô tả tóm tắt bức tranh; thống kê suy luận cho biết khác biệt có thật hay không");
  headCard(s, M, 1.55, 4.4, 1.6, C.pink, "Thống kê mô tả", "Bức tranh tổng thể", ["Trung bình, trung vị, yếu vị", "Trung bình bị lệch bởi giá trị ngoại lai → báo cả trung vị và yếu vị"], 10.5);
  headCard(s, M, 3.25, 4.4, 1.6, C.plum, "Thống kê suy luận", "Dự đoán cho tổng thể lớn hơn", ["Khoảng tin cậy, kiểm định giả thuyết", "Loại trừ khả năng mô hình xuất hiện do ngẫu nhiên"], 10.5);

  txt(s, "Ví dụ: khảo sát y tế 2023 → 2024", 5.2, 1.55, 4.3, 0.3, { size: 12.5, bold: true, color: C.ink });
  txt(s, "Độ tin cậy 95%, sai số ±3% ở mỗi năm", 5.2, 1.85, 4.3, 0.3, { size: 10.5 });
  // number line illustrating ±3% around two values
  const x0 = 5.4, x1 = 9.3, yl = 2.85, scale = (x1 - x0) / 20;
  s.addShape(pres.shapes.LINE, { x: x0, y: yl, w: x1 - x0, h: 0, line: { color: C.muted, width: 1 } });
  [[5, "2023", C.blue], [12, "2024", C.plum]].forEach(([v, lbl, col]) => {
    const cx = x0 + v * scale;
    s.addShape(pres.shapes.RECTANGLE, { x: cx - 3 * scale, y: yl - 0.14, w: 6 * scale, h: 0.28, fill: { color: col, transparency: 70 }, line: { color: col, width: 1 } });
    s.addShape(pres.shapes.OVAL, { x: cx - 0.07, y: yl - 0.07, w: 0.14, h: 0.14, fill: { color: col }, line: { color: C.white, width: 1 } });
    txt(s, lbl + " ±3%", cx - 0.6, yl - 0.48, 1.2, 0.28, { size: 9.5, bold: true, color: C.ink, align: "center" });
  });
  box(s, 5.2, 3.3, 4.3, 1.55, C.yellow);
  s.addText([
    { text: "≥ 6 điểm %", options: { bold: true, fontSize: 20, breakLine: true } },
    { text: "Chênh lệch giữa hai năm phải đủ lớn để không bị chồng khoảng sai số, mới được coi là khác biệt có ý nghĩa (đánh dấu Δ trên biểu đồ).", options: { fontSize: 10.5 } },
  ], { x: 5.4, y: 3.35, w: 3.9, h: 1.45, margin: 0, fontFace: F, color: C.ink, valign: "middle", paraSpaceAfter: 3 });
}

// 7. Crosstabs
{
  const s = contentSlide("s1", "Bảng chéo (crosstab) làm lộ khác biệt giữa các nhóm mà con số tổng che mất");
  txt(s, "“Tôi luôn biết trước chi phí dịch vụ y tế”", M, 1.55, 4.4, 0.3, { size: 12, bold: true, color: C.ink });
  hbars(s, M, 1.95, 4.4, [["Nữ", 26, C.plum, "26%"], ["Nam", 32, C.blue, "32%"]], 40, { labelW: 1.1 });
  txt(s, "“Không bao giờ biết trước chi phí”", M, 3.0, 4.4, 0.3, { size: 12, bold: true, color: C.ink });
  hbars(s, M, 3.4, 4.4, [["Chưa tốt nghiệp THPT", 23, C.plum, "23%"], ["Toàn bộ mẫu", 14, C.muted, "14%"]], 40, { labelW: 1.6, size: 10 });
  note(s, "Dữ liệu: khảo sát cảm nhận về y tế tại Mỹ do nhóm của người giảng thực hiện, được dẫn trong tài liệu gốc.");

  headCard(s, 5.3, 1.55, 4.2, 3.25, C.pink, "Bảng chéo hoạt động thế nào?", null, [
    "Hàng: một biến (vd. thế hệ); cột: một biến khác (vd. có khuyết tật hay không)",
    "Đọc theo hàng: 11,4% Gen Z có khuyết tật",
    "Đọc theo cột: trong nhóm có khuyết tật, 15,5% là Gen Z, 29,2% là Gen X",
    "Áp vào từng câu hỏi để tìm nhóm trả lời khác biệt",
  ], 10.5);
}

// 8. Cluster analysis
{
  const s = contentSlide("s1", "Phân tích cụm nhóm khách hàng theo đặc điểm chung để nhắm mục tiêu chính xác");
  // dendrogram motif
  box(s, M, 1.55, 4.3, 3.25, C.white, C.line);
  txt(s, "Biểu đồ cây (dendrogram)", M + 0.2, 1.65, 3.9, 0.3, { size: 12, bold: true, color: C.pink });
  const leaves = [0, 1, 2, 3, 4, 5, 6, 7];
  const lx = (i) => M + 0.45 + i * 0.47;
  const base = 4.3;
  const cols = [C.pink, C.pink, C.blue, C.blue, C.blue, C.green, C.green, C.green];
  leaves.forEach((i) => s.addShape(pres.shapes.OVAL, { x: lx(i) - 0.08, y: base, w: 0.16, h: 0.16, fill: { color: cols[i] }, line: { color: cols[i], width: 0 } }));
  const L = (x, y, w, h) => s.addShape(pres.shapes.LINE, { x, y, w, h, line: { color: C.ink, width: 1.25 } });
  const join = (a, b, ya, yb, top) => { L(a, top, 0, ya - top); L(b, top, 0, yb - top); L(a, top, b - a, 0); return (a + b) / 2; };
  const p1 = join(lx(0), lx(1), base, base, 3.8);
  const q1 = join(lx(2), lx(3), base, base, 3.9);
  const p2 = join(q1, lx(4), 3.9, base, 3.55);
  const r1 = join(lx(5), lx(6), base, base, 3.95);
  const r2 = join(r1, lx(7), 3.95, base, 3.65);
  const t1 = join(p2, r2, 3.55, 3.65, 2.85);
  join(p1, t1, 3.8, 2.85, 2.35);
  s.addShape(pres.shapes.LINE, { x: M + 0.25, y: 3.25, w: 3.9, h: 0, line: { color: C.orange, width: 1.5, dashType: "dash" } });
  txt(s, "Cắt ở đây → 3 cụm", M + 2.6, 3.0, 1.6, 0.25, { size: 9, bold: true, color: C.orange, align: "right" });

  const r = [
    [C.pink, "Cách làm", "Thu thập dữ liệu → đưa vào thuật toán → nhóm người giống nhau trên các biến"],
    [C.blue, "Công cụ", "SPSS (không cần code), R/Python (linh hoạt), SAS (dữ liệu lớn), Tableau (trực quan)"],
    [C.orange, "Bao nhiêu cụm?", "Thường 3–5 cụm: ít quá bỏ lỡ khác biệt, nhiều quá thì rối"],
    [C.green, "Ứng dụng", "Thông điệp, phát triển sản phẩm; kết hợp dữ liệu giá → gói ưu đãi riêng cho từng nhóm"],
  ];
  r.forEach(([col, h, d], i) => sideCard(s, 5.1, 1.55 + i * 0.83, 4.4, 0.76, col, h, d, 9.5));
}

// 9. MaxDiff
{
  const s = contentSlide("s1", "MaxDiff xếp hạng tin cậy danh sách dài bằng nhiều lựa chọn “quan trọng nhất / kém nhất”");
  box(s, M, 1.55, 2.9, 1.55, C.pink);
  s.addText([
    { text: "7 ± 2", options: { bold: true, fontSize: 30, breakLine: true } },
    { text: "Định luật Miller: trí nhớ làm việc chỉ giữ được 5–7 mục → câu hỏi xếp hạng không quá 7 lựa chọn", options: { fontSize: 10 } },
  ], { x: M + 0.2, y: 1.6, w: 2.5, h: 1.45, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 3 });
  // mock maxdiff question
  box(s, M, 3.25, 2.9, 1.6, C.white, C.line);
  txt(s, "Mỗi câu chọn 1 nhất / 1 kém nhất", M + 0.15, 3.32, 2.6, 0.25, { size: 9, bold: true, color: C.muted });
  ["Nghe rõ khi khám", "Phân loại âm thanh", "Đăng nhập một lần", "Livestream"].forEach((t, i) => {
    const y = 3.62 + i * 0.29;
    const best = i === 0, worst = i === 2;
    s.addShape(pres.shapes.OVAL, { x: M + 0.18, y: y + 0.06, w: 0.14, h: 0.14, fill: { color: best ? C.green : C.white }, line: { color: C.green, width: 1 } });
    s.addShape(pres.shapes.OVAL, { x: M + 2.55, y: y + 0.06, w: 0.14, h: 0.14, fill: { color: worst ? C.pink : C.white }, line: { color: C.pink, width: 1 } });
    txt(s, t, M + 0.45, y, 2.0, 0.26, { size: 9.5, valign: "middle" });
  });

  headCard(s, 3.6, 1.55, 2.85, 3.3, C.plum, "Cách hoạt động", null, [
    "Phần mềm lấy ngẫu nhiên vài mục từ danh sách dài",
    "Người trả lời chọn quan trọng nhất & kém nhất",
    "Lặp lại 10–15 lần",
    "Cộng lựa chọn tích cực/tiêu cực → bảng xếp hạng; chia theo phân khúc nếu đủ mẫu",
  ], 10);
  headCard(s, 6.65, 1.55, 2.85, 3.3, C.blue, "Ví dụ: ống nghe kỹ thuật số", "Hơn 20 tính năng", [
    { text: "Hữu ích nhất: ", options: { bold: true, color: C.green } },
    { text: "nhận diện, phân loại, nghe rõ để chẩn đoán", options: { breakLine: true } },
    { text: " ", options: { breakLine: true, fontSize: 5 } },
    { text: "Kém nhất: ", options: { bold: true, color: C.pink } },
    { text: "đăng nhập một lần, xuất dữ liệu thô, hỗ trợ giấy tờ, livestream — gây bất ngờ cho đội sản phẩm", options: { breakLine: true } },
    { text: " ", options: { breakLine: true, fontSize: 5 } },
    { text: "MaxDiff cũng kiểm tra được thông điệp, vd. khác biệt giữa vùng DACH và Mỹ/Anh.", options: { italic: true, color: C.muted } },
  ], 10);
}

// 10. Conjoint mechanics
{
  const s = contentSlide("s1", "Conjoint cho khách chọn giữa các gói sản phẩm để đo họ sẵn sàng đánh đổi điều gì");
  // mock choice card
  const packs = [["A", "$220", "Điều khiển trên dây"], ["B", "$180", "Điều khiển ở mặt nghe"], ["A", "$300", "Điều khiển trên dây"]];
  txt(s, "Bạn sẽ mua gói nào?", M, 1.5, 4.4, 0.3, { size: 12, bold: true, color: C.ink });
  packs.forEach(([b, p, d], i) => {
    const x = M + i * 1.5, sel = i === 2;
    box(s, x, 1.85, 1.38, 1.55, C.white, sel ? C.pink : C.line);
    if (sel) s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.85, w: 1.38, h: 1.55, rectRadius: 0.08, fill: { color: C.pink, transparency: 92 }, line: { color: C.pink, width: 2 } });
    txt(s, "Thương hiệu " + b, x + 0.1, 1.95, 1.2, 0.25, { size: 9, color: C.muted });
    txt(s, p, x + 0.1, 2.2, 1.2, 0.4, { size: 17, bold: true, color: C.ink });
    txt(s, d, x + 0.1, 2.65, 1.2, 0.65, { size: 9 });
  });
  txt(s, "Minh họa; phần mềm chọn ngẫu nhiên một mức cho mỗi thuộc tính", M, 3.45, 4.4, 0.25, { size: 9, italic: true, color: C.muted });
  const steps = [
    ["Thuộc tính & mức", "Vd. thương hiệu, giá ($180–$300, 4 mức), thiết kế, AI, pin"],
    ["Số tổ hợp", "Nhân số mức của các thuộc tính"],
    ["Số gói mỗi câu", "Thường 3 gói"],
    ["Số câu hỏi", "10–15 câu; dùng conjoint calculator"],
  ];
  steps.forEach(([h, d], i) => {
    const y = 3.8 + Math.floor(i / 2) * 0.55, x = M + (i % 2) * 2.25;
    txt(s, (i + 1) + ". " + h, x, y, 2.15, 0.25, { size: 10, bold: true, color: C.pink });
    txt(s, d, x, y + 0.25, 2.15, 0.3, { size: 8.5 });
  });

  txt(s, "Hai thước đo cần đọc", 5.2, 1.5, 4.3, 0.3, { size: 12.5, bold: true, color: C.ink });
  sideCard(s, 5.2, 1.9, 4.3, 1.25, C.plum, "Tầm quan trọng tương đối", "Thuộc tính nào ảnh hưởng quyết định mua nhiều nhất. Ví dụ: thiết kế còn quan trọng hơn cả giá.", 10.5);
  sideCard(s, 5.2, 3.3, 4.3, 1.55, C.blue, "Part-worth utility", "Mức độ thích từng mức trong thuộc tính: cao = thúc đẩy mua; 0 = không ảnh hưởng; âm = làm giảm ý định mua. Ví dụ: “điều khiển trên dây” = 3,9.", 10.5);
  note(s, "Phần mềm hỗ trợ: Alchemer, Qualtrics, Conjointly (SurveyMonkey không có conjoint).");
}

// 11. Conjoint insight
{
  const s = contentSlide("s1", "Ít người thích hơn nhưng thích mãnh liệt hơn: conjoint đo được sức nặng của sở thích");
  sideCard(s, M, 1.55, 4.3, 1.5, C.muted, "Câu hỏi khảo sát đơn giản", "Đa số không có ưu tiên; giữa hai thiết kế, điều khiển ở mặt nghe thắng.\n→ Kết luận dễ sai: chọn thiết kế mặt nghe.", 11);
  sideCard(s, M, 3.2, 4.3, 1.6, C.plum, "Conjoint + mô phỏng thị trường", "Người thích điều khiển trên dây thích mạnh đến mức sẵn sàng trả thêm. Người thích mặt nghe thì không trả thêm.", 11);
  box(s, 5.1, 1.55, 4.4, 3.25, C.pink);
  txt(s, "94%", 5.3, 1.75, 4.0, 1.0, { size: 54, bold: true, color: C.white });
  txt(s, "người vẫn chọn ống nghe có điều khiển trên dây", 5.3, 2.8, 4.0, 0.6, { size: 14, bold: true, color: C.white });
  box(s, 5.3, 3.55, 4.0, 0.95, C.white);
  s.addText([{ text: "ngay cả khi đắt hơn ", options: {} }, { text: "120 USD", options: { bold: true, fontSize: 20, color: C.pink } }],
    { x: 5.45, y: 3.55, w: 3.7, h: 0.95, margin: 0, fontFace: F, fontSize: 13, color: C.ink, valign: "middle" });
}

// 12. Van Westendorp
{
  const s = contentSlide("s1", "Van Westendorp tìm khoảng giá chấp nhận được cho sản phẩm mới bằng bốn câu hỏi");
  const q = [[C.blue, "Quá rẻ", "đến mức nghi ngờ chất lượng?"], [C.green, "Hời", "là một món hời đáng mua?"], [C.orange, "Bắt đầu đắt", "nhưng vẫn cân nhắc?"], [C.pink, "Quá đắt", "không thể cân nhắc?"]];
  txt(s, "Ở mức giá nào sản phẩm…", M, 1.5, 4.3, 0.3, { size: 12, bold: true, color: C.ink });
  q.forEach(([col, h, d], i) => {
    const y = 1.85 + i * 0.5;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 1.4, h: 0.4, rectRadius: 0.2, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, h, M, y, 1.4, 0.4, { size: 11, bold: true, color: C.white, align: "center", valign: "middle" });
    txt(s, d, M + 1.5, y, 2.8, 0.4, { size: 10.5, valign: "middle" });
  });
  sideCard(s, M, 3.9, 4.3, 0.95, C.plum, "Ô nhập số tự do", "Không dùng thanh trượt hay khoảng giá: con số hiển thị sẽ làm lệch câu trả lời", 10);

  // price scale diagram
  box(s, 5.1, 1.55, 4.4, 3.3, C.white, C.line);
  txt(s, "Kết quả ví dụ", 5.3, 1.65, 4.0, 0.3, { size: 12, bold: true, color: C.ink });
  const a = 5.4, b = 9.2, lo = 8, hi = 26, X = (v) => a + ((v - lo) / (hi - lo)) * (b - a);
  s.addShape(pres.shapes.LINE, { x: a, y: 3.6, w: b - a, h: 0, line: { color: C.muted, width: 1 } });
  [8, 12, 16, 22, 26].forEach((v) => {
    s.addShape(pres.shapes.LINE, { x: X(v), y: 3.55, w: 0, h: 0.1, line: { color: C.muted, width: 1 } });
    txt(s, "$" + v, X(v) - 0.3, 3.68, 0.6, 0.25, { size: 9.5, color: C.muted, align: "center" });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: X(12), y: 3.0, w: X(22) - X(12), h: 0.45, fill: { color: C.green, transparency: 30 }, line: { color: C.green, width: 0 } });
  txt(s, "Khoảng giá tối ưu $12 – $22", X(12), 3.0, X(22) - X(12), 0.45, { size: 10.5, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addShape(pres.shapes.LINE, { x: X(16), y: 2.35, w: 0, h: 0.65, line: { color: C.pink, width: 2, endArrowType: "triangle" } });
  txt(s, "Điểm giá tối ưu $16", X(16) - 1.0, 2.05, 2.0, 0.3, { size: 11, bold: true, color: C.pink, align: "center" });
  txt(s, "Dùng khi ra mắt sản phẩm mới hoặc vào thị trường mới, cần tìm khoảng giá chấp nhận được.", 5.3, 4.05, 4.0, 0.7, { size: 10 });
}

// 13. Gabor-Granger
{
  const s = contentSlide("s1", "Gabor-Granger tinh chỉnh giá: giá thấp hơn có thể mang lại doanh thu cao hơn");
  txt(s, "Ứng dụng sức khỏe: % người sẵn lòng đăng ký theo giá tháng", M, 1.5, 4.6, 0.3, { size: 12, bold: true, color: C.ink });
  hbars(s, M, 1.95, 4.6, [["$5,99 / tháng", 38, C.green, "38%"], ["$9,99 / tháng", 21, C.muted, "21%"]], 45, { labelW: 1.35, barH: 0.5, gap: 0.2, size: 11.5 });
  box(s, M, 3.3, 4.6, 1.5, C.green);
  s.addText([
    { text: "$27.312", options: { bold: true, fontSize: 26, breakLine: true } },
    { text: "doanh thu tiềm năng cao nhất trên mỗi 1.000 khách đạt ở mức $5,99. Lên $9,99 ít người mua hơn và tổng doanh thu thấp hơn.", options: { fontSize: 10.5 } },
  ], { x: M + 0.2, y: 3.35, w: 4.2, h: 1.4, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 3 });

  txt(s, "Cách hỏi", 5.4, 1.5, 4.1, 0.3, { size: 12.5, bold: true, color: C.ink });
  const st = [["Bắt đầu ở giá giữa", "Vd. $14,99 (dải $3,99–$25,99, bước $2)"], ["Có → giá cao hơn", "Vd. $22,99"], ["Không → giá thấp hơn", "Bước nhảy lớn trước, nhỏ dần sau"], ["Tìm giá cao nhất", "Mỗi người một mức → vẽ đường cầu"]];
  st.forEach(([h, d], i) => {
    const y = 1.9 + i * 0.6;
    circleNum(s, 5.4, y + 0.04, 0.42, [C.pink, C.green, C.orange, C.plum][i], String(i + 1), 12);
    txt(s, h, 5.95, y, 3.55, 0.28, { size: 11.5, bold: true, color: C.ink });
    txt(s, d, 5.95, y + 0.27, 3.55, 0.28, { size: 9.5 });
  });
  txt(s, "Dùng cho sản phẩm đã có trên thị trường, khi đã biết khoảng giá.", 5.4, 4.4, 4.1, 0.4, { size: 10.5, bold: true, color: C.plum });
}

// 14. Choosing method
{
  const s = contentSlide("s1", "Mục tiêu nghiên cứu quyết định kỹ thuật — và có thể kết hợp nhiều kỹ thuật");
  const rows = [
    [th("Nếu mục tiêu là…", C.ink), th("Dùng", C.pink)],
    [tc("Xếp hạng tính năng hoặc thông điệp theo mức khách coi trọng"), tk("MaxDiff")],
    [tc("Định giá sản phẩm mới, chưa chắc khoảng giá"), tk("Van Westendorp")],
    [tc("Tinh chỉnh giá sản phẩm đã có"), tk("Gabor-Granger")],
    [tc("Tìm gói tính năng lý tưởng, đánh đổi tính năng – giá"), tk("Conjoint")],
    [tc("Phân khúc theo hành vi, sở thích"), tk("Phân tích cụm")],
    [tc("Đo hài lòng, phản hồi sản phẩm, xu hướng, nhận biết thương hiệu, nhân khẩu học"), tk("Khảo sát truyền thống")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [6.4, 2.6], rowH: [0.38, 0.45, 0.45, 0.45, 0.45, 0.45, 0.5],
    fontFace: F, fontSize: 11.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.08,
  });
}

// ═════════════════════════ SECTION 2 ═════════════════════════
// 15. Sample size
{
  const s = contentSlide("s2", "Cỡ mẫu phụ thuộc quy mô tổng thể, độ tin cậy và sai số chấp nhận được");
  const f = [
    [C.blue, "Quy mô tổng thể", "Không rõ thì chọn ≥ 20.000 — trên mức này cỡ mẫu gần như không đổi"],
    [C.plum, "Độ tin cậy", "Phổ biến 95%: chạy 100 lần, 95 lần cho cùng kết quả"],
    [C.pink, "Sai số", "Phổ biến ±5 điểm phần trăm"],
  ];
  f.forEach(([col, h, d], i) => sideCard(s, M, 1.55 + i * 0.85, 4.3, 0.78, col, h, d, 9.5));
  txt(s, "Càng đông chưa chắc càng tốt: quá nhiều tốn thời gian, quá ít thì nhóm con không đủ tin cậy (vd. phụ huynh ở Florida trong mẫu 150 người).", M, 4.15, 4.3, 0.7, { size: 10, italic: true, color: C.muted });

  txt(s, "Tổng thể 10.000 người, độ tin cậy 95% (Raosoft)", 5.1, 1.55, 4.4, 0.3, { size: 12, bold: true, color: C.ink });
  hbars(s, 5.1, 2.0, 4.4, [["Sai số ±5%", 370, C.blue, "370"], ["Sai số ±8%", 148, C.muted, "148"]], 480, { labelW: 1.2, barH: 0.55, gap: 0.25, size: 11.5 });
  box(s, 5.1, 3.6, 4.4, 1.2, C.yellow);
  txt(s, "Chấp nhận sai số lớn hơn → cần ít người hơn (khoảng 60% ít hơn), nhưng độ chính xác giảm. Cân nhắc thêm hạn ngạch (quota) cho các nhóm con cần phân tích.", 5.3, 3.65, 4.0, 1.1, { size: 10.5, color: C.ink, valign: "middle" });
}

// 16. Question wording
{
  const s = contentSlide("s2", "Câu hỏi khảo sát tốt thì ngắn, trung lập, một ý và dùng thang đo cân bằng");
  const rows = [
    [th("Nguyên tắc", C.ink), th("Tránh", C.pink), th("Nên", C.green)],
    [tk("Trung lập"), tc("“Bạn yêu sản phẩm này đến mức nào?”"), tc("“Bạn đánh giá mức hài lòng thế nào?”")],
    [tk("Không dùng phủ định"), tc("“Bạn có không đồng ý rằng sản phẩm không hiệu quả?”"), tc("Hỏi trực tiếp, một chiều")],
    [tk("Một ý mỗi câu"), tc("“Đánh giá dịch vụ khách hàng và trải nghiệm thanh toán”"), tc("Tách thành hai câu")],
    [tk("Thang đo cân bằng"), tc("Nhiều lựa chọn tích cực hơn tiêu cực"), tc("Đủ tích cực, trung lập, tiêu cực")],
    [tk("Nhãn bằng chữ"), tc("“Trên thang 1–5…”"), tc("“Rất quan trọng … Không quan trọng”")],
    [tk("Giải thích thuật ngữ"), tc("Viết tắt, biệt ngữ ngành"), tc("Giải thích, ví dụ, hình ảnh")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [2.2, 3.5, 3.3], rowH: [0.36, 0.45, 0.5, 0.5, 0.45, 0.45, 0.45],
    fontFace: F, fontSize: 10.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.07,
  });
  note(s, "Luôn chạy thử (pretest) khảo sát để bắt câu hỏi gây khó hiểu trước khi phát hành.");
}

// 17. Layout & flow
{
  const s = contentSlide("s2", "Thiết kế khảo sát như một cuộc trò chuyện: dễ trước, nhân khẩu học sau cùng");
  const st = [["Sàng lọc", "Câu loại người không phù hợp ngay từ đầu", C.pink], ["Khởi động", "Câu dễ, không gây áp lực", C.orange], ["Nội dung chính", "Nhóm câu cùng chủ đề; skip logic", C.green], ["Nhân khẩu học", "Luôn đặt ở cuối", C.blue]];
  st.forEach(([h, d, col], i) => {
    const x = M + i * 2.29;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 1.6, w: 2.33, h: 0.65, fill: { color: col }, line: { color: C.bg, width: 1.5 } });
    txt(s, h, x + (i === 0 ? 0.1 : 0.35), 1.6, 1.7, 0.65, { size: 12.5, bold: true, color: C.white, align: "center", valign: "middle" });
    txt(s, d, x + 0.1, 2.35, 2.0, 0.6, { size: 10 });
  });
  const t = [
    [C.plum, "Hướng dẫn rõ", "Trước dạng câu hỏi lạ như Van Westendorp hay conjoint"],
    [C.blue, "Câu hỏi ma trận", "Gom các câu dùng chung thang đo để tiết kiệm thời gian"],
    [C.green, "Đa dạng dạng câu", "Lựa chọn, Likert, ma trận — giữ người trả lời tập trung"],
  ];
  t.forEach(([col, h, d], i) => sideCard(s, M + i * 3.05, 3.1, 2.85, 1.0, col, h, d, 10));
  banner(s, 4.3, C.pink, [
    { text: "Tối đa 2 câu hỏi mở mỗi khảo sát. ", options: { bold: true, color: C.yellow } },
    { text: "Cần nhiều hơn? Hãy làm một vòng định tính trước." },
  ], 0.5, 12);
}

// 18. Bias
{
  const s = contentSlide("s2", "Năm loại thiên lệch phổ biến và cách giảm ngay từ khâu thiết kế");
  const rows = [
    [th("Thiên lệch", C.ink), th("Biểu hiện", C.blue), th("Cách giảm", C.green)],
    [tk("Câu hỏi dẫn dắt"), tc("“Bạn thích điều gì ở sản phẩm mới?” — mặc định là có thích"), tc("“Trải nghiệm của bạn với sản phẩm mới thế nào?”")],
    [tk("Phản hồi (response)"), tc("Thang đo nhiều lựa chọn tích cực hơn tiêu cực"), tc("Cân bằng số lựa chọn tích cực và tiêu cực")],
    [tk("Chọn mẫu (sampling)"), tc("Khảo sát người dùng công nghệ nhưng chỉ hỏi người dùng iPhone"), tc("Mẫu đa dạng, đại diện; dùng hạn ngạch")],
    [tk("Mong muốn xã hội"), tc("Trả lời theo cách “được chấp nhận”, nhất là chủ đề nhạy cảm"), tc("Nhấn mạnh ẩn danh; hỏi gián tiếp")],
    [tk("Thứ tự câu hỏi"), tc("Hỏi hài lòng chung trước làm lệch đánh giá từng tính năng"), tc("Đi từ rộng, không dẫn dắt → cụ thể")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [2.0, 3.6, 3.4], rowH: [0.36, 0.55, 0.5, 0.55, 0.55, 0.55],
    fontFace: F, fontSize: 10.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.07,
  });
  note(s, "Hỏi gián tiếp: thay vì “Bạn từng trễ hạn thanh toán chưa?” → “Theo bạn, các bà mẹ có con nhỏ trễ hạn thanh toán có phổ biến không?”");
}

// 19. Sensitive questions
{
  const s = contentSlide("s2", "Đừng né chủ đề nhạy cảm — hãy hỏi một cách thấu cảm");
  txt(s, "Chính trị, tài chính, sức khỏe, tôn giáo, chủng tộc, bản dạng giới, cách nuôi dạy con…", M, 1.5, 9.0, 0.3, { size: 11, italic: true, color: C.muted });
  headCard(s, M, 1.9, 4.4, 2.95, C.pink, "Rủi ro với dữ liệu", null, [
    "Khai quá (tập thể dục, từ thiện) hoặc khai thiếu (hành vi gây xấu hổ)",
    "Bỏ câu, trả lời sai, “satisficing”: chọn đáp án đầu tiên hay trung lập hết",
    "Bỏ khảo sát giữa chừng → tăng chi phí tuyển mẫu",
    "Hiệu ứng mồi: câu chính trị ở đầu làm lệch câu về sản phẩm ở sau",
  ], 10.5);
  headCard(s, 5.1, 1.9, 4.4, 2.95, C.green, "Cách làm", null, [
    "Báo trước sẽ có câu hỏi nhạy cảm; nhắc khảo sát ẩn danh, khuyến khích trả lời thật",
    "Làm định tính trước để phát hiện điều nhạy cảm và dùng từ ngữ của chính người trả lời",
    "Chạy thử để chỉnh từ ngữ và hướng dẫn",
  ], 10.5);
}

// 20. Tools
{
  const s = contentSlide("s2", "Chọn công cụ theo độ phức tạp của khảo sát, nguồn mẫu và ngân sách");
  const rows = [
    [th("Công cụ", C.ink), th("Phù hợp cho", C.blue), th("Chi phí", C.blue)],
    [tk("Google Forms, SurveyMonkey"), tc("Khảo sát đơn giản: trắc nghiệm, vài câu mở"), tc("Rẻ, dễ dùng")],
    [tk("Alchemer"), tc("Kỹ thuật nâng cao; chuyển khảo sát sang đơn vị cung cấp mẫu khá suôn sẻ"), tc("Trung bình, không hợp đồng dài hạn")],
    [tk("Qualtrics, Conjoint.ly"), tc("MaxDiff, conjoint, Van Westendorp, Gabor-Granger; kết hợp nhiều kỹ thuật"), tc("Cao")],
  ];
  s.addTable(rows, {
    x: M, y: 1.55, w: 9.0, colW: [2.6, 4.4, 2.0], rowH: [0.4, 0.6, 0.65, 0.65],
    fontFace: F, fontSize: 11, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.08,
  });
  banner(s, 4.15, C.blue, [
    { text: "Không tự tìm được người phù hợp? ", options: { bold: true, color: C.yellow } },
    { text: "Hợp tác với đơn vị cung cấp panel và hỏi trước công cụ nào tích hợp tốt với hệ thống của họ." },
  ], 0.65, 11);
}

// ═════════════════════════ SECTION 3 ═════════════════════════
// 21. Cleaning & weighting
{
  const s = contentSlide("s3", "Làm sạch và gia quyền dữ liệu trước khi phân tích, nếu không con số sẽ đánh lừa bạn");
  const p = [
    [C.pink, "Mâu thuẫn", "25 tuổi nhưng 30 năm kinh nghiệm"],
    [C.orange, "Giá trị ngoại lai", "Đa số trả $20–50, một người trả $1.000"],
    [C.plum, "Trả lời một hàng", "Chọn cùng đáp án suốt; làm quá nhanh"],
    [C.blue, "Thiếu dữ liệu", "Ít thì bỏ thủ công; nhiều thì dùng phương pháp điền (imputation)"],
    [C.green, "Định dạng", "Đồng nhất khi gộp nhiều nguồn, nhiều panel"],
  ];
  p.forEach(([col, h, d], i) => {
    const x = M + (i % 3) * 3.05, y = 1.55 + Math.floor(i / 3) * 1.05;
    sideCard(s, x, y, 2.85, 0.95, col, h, d, 10);
  });
  box(s, M + 6.1, 2.6, 2.9, 0.95, C.soft);
  txt(s, "Phần lớn công cụ, kể cả SurveyMonkey, tự gắn cờ hoặc loại các lỗi này.", M + 6.25, 2.6, 2.6, 0.95, { size: 10, italic: true, color: C.ink, valign: "middle" });
  box(s, M, 3.75, 9.0, 1.1, C.green);
  s.addText([
    { text: "Gia quyền (weighting): ", options: { bold: true, color: C.yellow } },
    { text: "Khảo sát y tế tại Mỹ chủ động lấy mẫu dư hai nhóm thiểu số để đủ ý nghĩa thống kê, rồi gia quyền theo dữ liệu điều tra dân số và Gallup để suy rộng cho toàn nước Mỹ." },
  ], { x: M + 0.2, y: 3.75, w: 8.6, h: 1.1, margin: 0, fontFace: F, fontSize: 11.5, color: C.white, valign: "middle" });
}

// 22. Storyboard
{
  const s = contentSlide("s3", "Biến thống kê mô tả thành câu chuyện bằng kịch bản năm bước");
  const st = [
    ["Tiêu đề", "Hài lòng giảm 15% do giao hàng chậm", C.pink],
    ["Bối cảnh", "70% hài lòng; phần lớn 30% còn lại phàn nàn về giao hàng", C.orange],
    ["Cụ thể", "Khách dưới 35 tuổi không hài lòng gấp đôi nhóm lớn tuổi", C.yellow],
    ["Tác động", "Sửa giao hàng có thể giảm 10% khách rời bỏ", C.green],
    ["Hành động", "Thêm kho vùng ở thị trường chính; báo giao hàng qua SMS", C.blue],
  ];
  const w = 1.66, gap = 0.175;
  st.forEach(([h, d, col], i) => {
    const x = M + i * (w + gap);
    box(s, x, 1.55, w, 2.55, C.white, C.line);
    circleNum(s, x + 0.15, 1.7, 0.5, col, String(i + 1), 15, col === C.yellow ? C.ink : C.white);
    txt(s, h, x + 0.15, 2.3, w - 0.3, 0.35, { size: 13, bold: true, color: col === C.yellow ? C.ink : col });
    txt(s, "“" + d + "”", x + 0.15, 2.7, w - 0.3, 1.3, { size: 10, italic: true, color: C.ink });
  });
  const t = [
    [C.plum, "Ít mà chất", "Chỉ giữ biểu đồ phục vụ insight chính"],
    [C.green, "Ngôn ngữ đời thường", "Nói “1 trên 3” thay vì “33%”"],
    [C.blue, "Tìm tương phản", "Nhóm này thích, nhóm kia thờ ơ — insight nằm ở đó"],
  ];
  t.forEach(([col, h, d], i) => sideCard(s, M + i * 3.05, 4.2, 2.85, 0.68, col, h, "", 1));
  t.forEach(([col, h, d], i) => txt(s, d, M + i * 3.05 + 0.22, 4.52, 2.55, 0.3, { size: 9.5 }));
}

// 23. Open-ended coding
{
  const s = contentSlide("s3", "Mã hóa câu trả lời mở theo năm bước — đừng tin vào word cloud");
  const st = [
    ["Đọc mẫu ngẫu nhiên", "20–30 câu trả lời, ghi lại chủ đề lặp lại"],
    ["Tinh chỉnh khung mã", "Đọc thêm khoảng 20 câu; mã rõ ràng, đầy đủ, không gộp hai ý"],
    ["Gắn mã", "Bảng tính: câu trả lời theo hàng, mã theo cột, đánh 0/1"],
    ["Tổng hợp", "Đếm tần suất từng chủ đề; vẽ biểu đồ nếu cần"],
    ["Chọn trích dẫn", "Lời người trả lời giúp con số có hồn"],
  ];
  st.forEach(([h, d], i) => {
    const y = 1.5 + i * 0.66;
    circleNum(s, M, y + 0.04, 0.48, [C.pink, C.orange, C.green, C.blue, C.plum][i], String(i + 1), 14);
    txt(s, h, 1.15, y, 1.95, 0.56, { size: 12, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, 3.1, y, 2.6, 0.56, { size: 10, valign: "middle" });
  });
  box(s, 5.95, 1.55, 3.55, 1.6, C.green);
  s.addText([
    { text: "26%", options: { bold: true, fontSize: 30, breakLine: true } },
    { text: "người mong muốn kết quả xét nghiệm tại nhà “chính xác, đáng tin cậy” — ví dụ chủ đề nổi bật từ câu hỏi mở", options: { fontSize: 10 } },
  ], { x: 6.15, y: 1.6, w: 3.2, h: 1.5, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 3 });
  sideCard(s, 5.95, 3.3, 3.55, 1.5, C.pink, "Vì sao không dùng word cloud?", "Người ta hiếm khi nói đúng từ “dịch vụ khách hàng” khi kể về trải nghiệm tệ ở cửa hàng. AI cũng chưa hiểu được ngữ cảnh này.", 10);
}

// 24. Inferences
{
  const s = contentSlide("s3", "Suy luận biến câu chuyện dữ liệu thành khuyến nghị kinh doanh cụ thể");
  box(s, M, 1.55, 9.0, 0.8, C.soft);
  s.addText([
    { text: "Ví dụ: ", options: { bold: true, color: C.green } },
    { text: "Phụ huynh có con dưới 18 tuổi rất thích tính năng lên lịch, người không có con thì thờ ơ → tập trung marketing cho phụ huynh, thêm tùy biến cho nhóm còn lại, hay chuyển sang nhóm sinh lời hơn?" },
  ], { x: M + 0.2, y: 1.55, w: 8.6, h: 0.8, margin: 0, fontFace: F, fontSize: 11, color: C.ink, valign: "middle" });
  const t = [
    [C.pink, "Bám mục tiêu", "Rời bỏ tăng 20% vì tính năng không có giá trị → định vị lại hoặc bỏ"],
    [C.orange, "Hàm ý kinh doanh", "35% than chờ tổng đài lâu → thêm nhân viên hoặc chatbot"],
    [C.green, "Mỗi nhóm một giải pháp", "Mô phỏng tác động bằng giá trị vòng đời khách hàng (CLV)"],
    [C.blue, "Học từ ngành khác", "Email cá nhân hóa của bán lẻ gợi ý cho chăm sóc bệnh nhân"],
    [C.plum, "Ưu tiên", "10 điểm cần cải thiện nhưng chỉ 2–3 điểm tạo đột phá"],
  ];
  const w = 1.66, gap = 0.175;
  t.forEach(([col, h, d], i) => {
    const x = M + i * (w + gap);
    box(s, x, 2.55, w, 2.3, col);
    txt(s, h, x + 0.12, 2.67, w - 0.24, 0.6, { size: 12.5, bold: true, color: C.white });
    txt(s, d, x + 0.12, 3.3, w - 0.24, 1.45, { size: 10, color: C.white });
  });
}

// ═════════════════════════ SECTION 4 ═════════════════════════
// 25. Visual storytelling
{
  const s = contentSlide("s4", "Hình ảnh rõ ràng, ít mà đúng trọng tâm giúp insight dẫn tới hành động");
  // call-out example
  box(s, M, 1.55, 4.3, 3.25, C.white, C.line);
  txt(s, "Ví dụ chú thích (call-out)", M + 0.2, 1.65, 3.9, 0.3, { size: 12, bold: true, color: C.orange });
  hbars(s, M + 0.2, 2.1, 3.9, [["Ít nhất 1 cách", 83, C.orange, "83%"], ["Không cách nào", 17, C.muted, "17%"]], 100, { labelW: 1.25, barH: 0.42, gap: 0.18, size: 10 });
  box(s, M + 0.2, 3.3, 3.9, 1.35, C.yellow);
  txt(s, "17% chọn “không điều nào kể trên” nghĩa là 83% người trưởng thành ở Mỹ thấy e ngại hệ thống y tế theo ít nhất một cách.", M + 0.35, 3.35, 3.6, 1.25, { size: 10.5, bold: true, color: C.ink, valign: "middle" });

  const t = [
    [C.pink, "Ít là nhiều", "Chỉ giữ hình ảnh phục vụ thông điệp chính"],
    [C.blue, "Rõ ràng là trên hết", "Nhãn gọn, trục đúng tỷ lệ, không quá nhiều màu"],
    [C.green, "Làm nổi vùng trọng tâm", "Làm mờ phần không bàn tới; mũi tên, chú thích"],
    [C.plum, "Màu có chủ đích", "Một bộ màu thống nhất, tránh cầu vồng mỗi slide"],
    [C.orange, "Tiêu đề → hình → hành động", "Mỗi hình nằm trong mạch câu chuyện lớn"],
  ];
  t.forEach(([col, h, d], i) => {
    const y = 1.55 + i * 0.66;
    box(s, 5.1, y, 4.4, 0.6, C.white, C.line);
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: y + 0.1, w: 0.07, h: 0.4, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, h, 5.32, y + 0.05, 4.1, 0.27, { size: 12, bold: true, color: col });
    txt(s, d, 5.32, y + 0.32, 4.1, 0.24, { size: 9.5 });
  });
}

// ═════════════════════════ 26. Conclusions ═════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.plum };
  pageNo += 1;
  s.addShape(pres.shapes.OVAL, { x: 8.3, y: -0.9, w: 2.4, h: 2.4, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.1, y: 1.3, w: 0.8, h: 0.8, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  txt(s, "Tổng kết", M, 0.4, 6, 0.4, { size: 14, bold: true, color: C.yellow });
  txt(s, "Không phải con số tạo ra thay đổi, mà là điều bạn làm với chúng", M, 0.8, 7.6, 0.9, { size: 21, bold: true, color: C.white });
  const pts = [
    [C.yellow, "Bắt đầu từ mục tiêu cụ thể", "nó quyết định câu hỏi, kỹ thuật và cách đọc dữ liệu"],
    [C.pink, "Chọn đúng kỹ thuật", "MaxDiff ưu tiên, conjoint đánh đổi, Van Westendorp/Gabor-Granger định giá, cụm phân khúc"],
    [C.blue, "Thiết kế chặt chẽ", "cỡ mẫu phù hợp, câu hỏi trung lập, giảm thiên lệch, thấu cảm với chủ đề nhạy cảm"],
    [C.green, "Kể chuyện để hành động", "làm sạch dữ liệu, dựng kịch bản, mã hóa câu mở, khuyến nghị ưu tiên, hình ảnh rõ ràng"],
  ];
  pts.forEach(([col, h, d], i) => {
    const y = 1.9 + i * 0.72;
    circleNum(s, M, y + 0.05, 0.45, col, String(i + 1), 14, C.plum);
    s.addText([
      { text: h + ": ", options: { bold: true, color: C.yellow } },
      { text: d, options: { color: C.white } },
    ], { x: M + 0.65, y, w: 8.3, h: 0.6, margin: 0, fontFace: F, fontSize: 13, valign: "middle" });
  });
  txt(s, "Câu hỏi và thảo luận?", 5.5, 5.0, 4.0, 0.35, { size: 12, color: "E9D3E3", align: "right", valign: "middle" });
}

pres.writeFile({ fileName: __dirname + "/Nghien_cuu_dinh_luong_Marketing.pptx" }).then((f) => console.log("Wrote", f));
