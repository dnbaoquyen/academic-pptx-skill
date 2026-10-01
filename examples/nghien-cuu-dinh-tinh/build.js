// Nghiên cứu định tính trong Marketing (dựa trên tài liệu "Qualitative Research")
// Build: npm i pptxgenjs && node build.js  → Nghien_cuu_dinh_tinh_Marketing.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.title = "Nghiên cứu định tính trong Marketing";

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
  s1: { label: "1  Nghiên cứu định tính là gì?", color: C.pink },
  s2: { label: "2  Phương pháp nghiên cứu", color: C.blue },
  s3: { label: "3  Lập kế hoạch & điều phối", color: C.green },
  s4: { label: "4  Tổng hợp & báo cáo", color: C.orange },
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
  s.addText("Nghiên cứu định tính trong Marketing", {
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

// ═════════════════════════ 1. Title ═════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  // speech-bubble motif: qualitative = conversation
  s.addShape(pres.shapes.OVAL, { x: 6.9, y: -1.1, w: 3.8, h: 3.8, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.55, y: 2.15, w: 1.8, h: 1.8, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 6.55, y: 2.85, w: 1.15, h: 1.15, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 7.75, y: 4.1, w: 0.7, h: 0.7, fill: { color: C.green }, line: { color: C.green, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.05, y: 4.4, w: 0.45, h: 0.45, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  // "why?" bubbles inside the yellow circle
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.75, y: 0.35, w: 1.9, h: 0.6, rectRadius: 0.25, fill: { color: C.white }, line: { color: C.white, width: 0 } });
  txt(s, "Vì sao?", 7.75, 0.35, 1.9, 0.6, { size: 18, bold: true, color: C.plum, align: "center", valign: "middle" });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.35, y: 1.15, w: 1.6, h: 0.45, rectRadius: 0.2, fill: { color: C.plum }, line: { color: C.plum, width: 0 } });
  txt(s, "Vì sao?", 7.35, 1.15, 1.6, 0.45, { size: 13, bold: true, color: C.white, align: "center", valign: "middle" });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 0.9, w: 2.4, h: 0.36, rectRadius: 0.18, fill: { color: C.plum }, line: { color: C.plum, width: 0 } });
  txt(s, "NGHIÊN CỨU MARKETING", M, 0.9, 2.4, 0.36, { size: 11, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("Nghiên cứu\nđịnh tính", {
    x: M, y: 1.4, w: 6.2, h: 1.7, margin: 0, fontFace: F, fontSize: 44, bold: true, color: C.ink, valign: "top", lineSpacingMultiple: 0.95,
  });
  txt(s, "Số liệu định lượng cho biết điều gì đang xảy ra — nghiên cứu định tính giải thích vì sao khách hàng hành động như vậy", M, 3.2, 5.9, 0.8, { size: 15 });
  paletteStrip(s, M, 4.3, 2.4, 0.08);
  txt(s, "Biên soạn từ tài liệu “Qualitative Research” (bản ghi khóa học về nghiên cứu định tính cho marketing)", M, 4.45, 6.0, 0.5, { size: 10.5, color: C.muted });
}

// ═════════════════════════ 2. Roadmap ═════════════════════════
{
  const s = contentSlide("intro", "Bài học đi từ “định tính là gì” đến cách biến dữ liệu thành hành động");
  const rows = [
    ["1", "Nghiên cứu định tính là gì?", "Khi nào dùng · cảm xúc · phân khúc · phương pháp sandwich", C.pink],
    ["2", "Phương pháp nghiên cứu", "Phỏng vấn sâu · nhóm tập trung · dân tộc học · nhật ký video · kiểm thử khả dụng", C.blue],
    ["3", "Lập kế hoạch & điều phối", "Người điều phối · viết câu hỏi · câu hỏi về giá · tạo thiện cảm · chạy thử", C.green],
    ["4", "Tổng hợp & báo cáo", "Mã hóa dữ liệu · vai trò của AI · cấu trúc báo cáo · kể chuyện", C.orange],
  ];
  rows.forEach(([n, t, d, col], i) => {
    const y = 1.6 + i * 0.82;
    circleNum(s, M, y, 0.62, col, n, 20);
    txt(s, t, 1.3, y, 3.3, 0.62, { size: 16, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, 4.6, y, 4.9, 0.62, { size: 12, valign: "middle" });
    if (i < rows.length - 1) s.addShape(pres.shapes.LINE, { x: 1.3, y: y + 0.72, w: 8.2, h: 0, line: { color: C.line, width: 1 } });
  });
}

// ═════════════════════════ SECTION 1 ═════════════════════════
// 3. What vs why
{
  const s = contentSlide("s1", "Định lượng cho biết CÁI GÌ đang xảy ra; định tính khám phá TẠI SAO");
  const cols = [
    { x: M, col: C.blue, h: "Định lượng", q: "CÁI GÌ?", items: ["Khảo sát, phân tích từ khóa, analytics, nghiên cứu quy mô lớn", "Doanh số, lưu lượng khách, tốc độ bán hàng", "Gọn trong vài biểu đồ, dễ trình bày"] },
    { x: 5.1, col: C.pink, h: "Định tính", q: "TẠI SAO?", items: ["Trò chuyện thật với khách hàng", "Quan sát khách hàng trong bối cảnh thực", "Đào sâu động cơ và rào cản ra quyết định"] },
  ];
  cols.forEach((c) => {
    box(s, c.x, 1.55, 4.4, 2.5, C.white, C.line);
    circleNum(s, c.x + 0.2, 1.72, 0.9, c.col, c.q, 10.5);
    txt(s, c.h, c.x + 1.25, 1.72, 3.0, 0.9, { size: 18, bold: true, color: c.col, valign: "middle" });
    s.addText(bullets(c.items), { x: c.x + 0.15, y: 2.75, w: 4.1, h: 1.25, margin: 0, fontFace: F, fontSize: 12, color: C.body, valign: "top", paraSpaceAfter: 4 });
  });
  banner(s, 4.2, C.yellow, [
    { text: "Ví dụ: ", options: { bold: true } },
    { text: "Hiệp hội siêu thị có rất nhiều số liệu nhưng vẫn hỏi: vì sao Gen Z là nhóm duy nhất mua ít bánh mì tươi hơn? Muốn biết câu trả lời thì cần định tính." },
  ], 0.65, 11.5);
}

// 4. Five objectives
{
  const s = contentSlide("s1", "Năm mục tiêu nghiên cứu mà phương pháp định tính là lựa chọn tốt nhất");
  const obj = [
    ["Động cơ", "Gen Z ít mua bánh tươi vì thấy bất tiện: mua cho 1–2 người, sợ ăn không hết", C.pink],
    ["Rào cản", "Quầy bánh nằm khuất trong góc nên ít người nhìn thấy", C.orange],
    ["Xu hướng", "Phô mai đặc sản bán chạy vì khách tụ tập ở nhà nhiều hơn khi nhà hàng đắt đỏ", C.yellow],
    ["Cơ hội mới", "Siêu thị gần khu văn phòng thiếu lựa chọn bữa trưa nhanh, lành mạnh", C.green],
    ["Sản phẩm mới", "Thử khái niệm “hộp charcuterie” hoặc app đặt đồ ăn vặt trước khi đầu tư", C.blue],
  ];
  const w = 1.66, gap = 0.175;
  obj.forEach(([h, d, col], i) => {
    const x = M + i * (w + gap), y = 1.55;
    box(s, x, y, w, 3.25, C.white, C.line);
    circleNum(s, x + 0.18, y + 0.2, 0.55, col, String(i + 1), 17, col === C.yellow ? C.ink : C.white);
    txt(s, h, x + 0.18, y + 0.9, w - 0.3, 0.4, { size: 14, bold: true, color: col === C.yellow ? C.ink : col });
    txt(s, d, x + 0.18, y + 1.35, w - 0.3, 1.8, { size: 11 });
  });
  note(s, "Các ví dụ đều lấy từ một chuỗi siêu thị bán lẻ.");
}

// 5. More metrics ≠ more accuracy
{
  const s = contentSlide("s1", "Đo nhiều biến hơn không có nghĩa là chính xác hơn: tương quan giả luôn có thể xuất hiện");
  const nums = [["7", "chỉ số được đo", C.blue], ["21", "cặp tương quan có thể có", C.plum], ["≥ 1", "tương quan giả về mặt thống kê", C.pink]];
  nums.forEach(([n, l, col], i) => {
    const x = M + i * 1.55;
    txt(s, n, x, 1.6, 1.4, 0.8, { size: 36, bold: true, color: col, align: "center", valign: "middle" });
    txt(s, l, x, 2.4, 1.4, 0.6, { size: 11, align: "center" });
    if (i < 2) txt(s, "→", x + 1.35, 1.6, 0.25, 0.8, { size: 22, color: C.muted, align: "center", valign: "middle" });
  });
  box(s, M, 3.2, 4.5, 1.55, C.pink);
  s.addText([
    { text: "Rủi ro", options: { bold: true, breakLine: true, color: C.yellow } },
    { text: "Nếu quyết định kinh doanh lớn tiếp theo lại dựa đúng vào tương quan sai đó thì sao?", options: {} },
  ], { x: M + 0.2, y: 3.25, w: 4.1, h: 1.45, margin: 0, fontFace: F, fontSize: 13, color: C.white, valign: "middle", paraSpaceAfter: 4 });

  sideCard(s, 5.3, 1.55, 4.2, 3.2, C.blue, "Ví dụ: thời gian trên trang cao",
    "Analytics cho thấy khách ở rất lâu trên một trang. Có thể nội dung hay — hoặc họ đang bực bội tìm một thông tin bị thiếu.\n\nSố liệu chỉ cho biết CÁI GÌ. Muốn biết TẠI SAO cần định tính.", 12);
}

// 6. Three insight types
{
  const s = contentSlide("s1", "Ba loại insight định tính tạo ra tác động lớn nhất cho doanh nghiệp");
  const c = [
    [C.pink, "Phân khúc khách hàng", "Hiểu sâu từng nhóm khách và chủ động chọn vài nhóm để nhắm tới", "Nghiên cứu bán lẻ: tìm ra 10 nhóm khách → chọn 3 nhóm cho marketing năm nay"],
    [C.blue, "Nội dung", "Chủ đề, thông điệp, từ ngữ, hình ảnh, sản phẩm mà khách hàng lý tưởng cần", "Nhiều công ty tốn hàng chục nghìn USD thử-sai quảng cáo vì không lắng nghe từ ngữ khách dùng"],
    [C.green, "Hành trình mua", "Cảm xúc, thái độ, hành vi qua trò chuyện và quan sát", "Thấy khoảng cách giữa trải nghiệm dự kiến và thực tế, phát hiện vấn đề cần giải quyết"],
  ];
  c.forEach(([col, h, d, ex], i) => {
    const x = M + i * 3.05;
    headCard(s, x, 1.55, 2.85, 3.25, col, h, null, [
      { text: d, options: { breakLine: true } },
      { text: " ", options: { breakLine: true, fontSize: 6 } },
      { text: ex, options: { italic: true, color: C.muted } },
    ], 11.5);
  });
}

// 7. Emotion
{
  const s = contentSlide("s1", "Ở đâu có cảm xúc mãnh liệt, ở đó có cơ hội lớn cho doanh nghiệp");
  box(s, M, 1.55, 4.4, 1.55, C.plum);
  s.addText([
    { text: "“Nó khiến tôi không muốn làm khoa học nữa.”", options: { bold: true, fontSize: 15, breakLine: true } },
    { text: "Một nhà khoa học nói về biểu mẫu xin gia hạn tài trợ quá rườm rà. Câu nói đó là dấu hiệu của sự bực bội đến mức không còn từ nào để tả.", options: { fontSize: 11 } },
  ], { x: M + 0.2, y: 1.6, w: 4.0, h: 1.45, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 6 });
  const tips = [
    ["Gọi tên cảm xúc", "Phản chiếu điều bạn nghĩ họ đang cảm thấy: “Anh khó chịu vì hệ thống hết phiên mà không báo trước?”", C.pink],
    ["Gọi sai có chủ đích", "Đoán sai một chút để người tham gia tự sửa bằng từ ngữ của chính họ", C.orange],
  ];
  tips.forEach(([h, d, col], i) => sideCard(s, M, 3.25 + i * 0.82, 4.4, 0.75, col, h, d, 10));
  txt(s, "Công cụ thể hiện cảm xúc", 5.2, 1.55, 4.3, 0.35, { size: 14, bold: true, color: C.ink });
  // feelings wheel motif
  const wheel = [C.pink, C.orange, C.yellow, C.green, C.blue, C.plum];
  wheel.forEach((col, i) => {
    s.addShape(pres.shapes.PIE, { x: 5.2, y: 2.0, w: 1.3, h: 1.3, angleRange: [i * 60, (i + 1) * 60], fill: { color: col }, line: { color: C.bg, width: 1.5 } });
  });
  txt(s, "Bánh xe cảm xúc", 6.65, 2.0, 2.85, 0.3, { size: 12.5, bold: true, color: C.plum });
  txt(s, "Diễn tả chính xác điều nhóm khách mục tiêu đang trải qua trong hồ sơ persona", 6.65, 2.3, 2.85, 0.9, { size: 10.5 });
  // journey map motif
  const pts = [[5.25, 4.35], [5.75, 3.85], [6.25, 4.55], [6.75, 3.75]];
  for (let i = 0; i < pts.length - 1; i++)
    s.addShape(pres.shapes.LINE, { x: pts[i][0], y: Math.min(pts[i][1], pts[i + 1][1]), w: pts[i + 1][0] - pts[i][0], h: Math.abs(pts[i + 1][1] - pts[i][1]), flipV: pts[i + 1][1] < pts[i][1], line: { color: C.blue, width: 2 } });
  pts.forEach(([x, y], i) => s.addShape(pres.shapes.OVAL, { x: x - 0.07, y: y - 0.07, w: 0.14, h: 0.14, fill: { color: i === 2 ? C.pink : C.blue }, line: { color: C.white, width: 1 } }));
  txt(s, "Bản đồ hành trình", 6.95, 3.55, 2.55, 0.3, { size: 12.5, bold: true, color: C.blue });
  txt(s, "Vẽ đỉnh và đáy cảm xúc qua từng điểm chạm để tìm thời điểm then chốt", 6.95, 3.85, 2.55, 0.9, { size: 10.5 });
}

// 8. Personas
{
  const s = contentSlide("s1", "Phân khúc theo hành vi và động cơ, không theo nhân khẩu học");
  const p = [
    [C.blue, "Roy", "Người bán lại", ["~30 giờ/tuần ở cửa hàng đồ cũ, sống bằng nghề này", "Đi thẳng tới quầy sách và đồ điện tử"], "Săn hàng giá hời để bán lại online"],
    [C.green, "Carrie", "Người thư giãn", ["Đi chậm qua từng lối, lục từng giá đồ", "Gọi việc đi mua đồ cũ là “liệu pháp”"], "“Món đồ truyền cảm hứng — hàng nghìn sản phẩm mới mỗi ngày”"],
    [C.orange, "Stephanie", "Mẹ bận rộn", ["Vài lần/năm, mua quần áo cho con", "Ít đến nhưng mỗi lần chi nhiều hơn"], "“Đồ trẻ em đa dạng, áo chỉ 1,99 USD”"],
  ];
  p.forEach(([col, name, role, items, msg], i) => {
    const x = M + i * 3.05;
    box(s, x, 1.55, 2.85, 2.7, C.white, C.line);
    circleNum(s, x + 0.18, 1.7, 0.7, col, name[0], 22);
    txt(s, name, x + 1.0, 1.7, 1.8, 0.38, { size: 16, bold: true, color: C.ink });
    txt(s, role, x + 1.0, 2.07, 1.8, 0.3, { size: 11, italic: true, color: col });
    s.addText(bullets(items), { x: x + 0.1, y: 2.55, w: 2.65, h: 1.0, margin: 0, fontFace: F, fontSize: 10.5, color: C.body, valign: "top", paraSpaceAfter: 3 });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.15, y: 3.5, w: 2.55, h: 0.65, fill: { color: C.soft }, line: { color: C.soft, width: 0 } });
    txt(s, msg, x + 0.22, 3.5, 2.45, 0.65, { size: 9.5, italic: true, color: C.ink, valign: "middle" });
  });
  banner(s, 4.35, C.plum, [
    { text: "Carrie và Stephanie ", options: { bold: true, color: C.yellow } },
    { text: "cùng hồ sơ nhân khẩu học nhưng mua vì lý do khác nhau → cần chiến lược khác nhau." },
  ], 0.5, 11);
  note(s, "Dữ liệu từ gần 600 cuộc phỏng vấn tại chuỗi cửa hàng đồ cũ. Ô xám: thông điệp phù hợp với từng persona.");
}

// 9. Sandwich
{
  const s = contentSlide("s1", "Phương pháp “bánh sandwich”: kẹp định lượng giữa hai vòng định tính");
  const layers = [
    ["ĐỊNH TÍNH 1 · Khám phá", "Tìm hiểu khách hàng, khó khăn, động cơ → hình thành giả thuyết", C.pink],
    ["ĐỊNH LƯỢNG · Khảo sát", "Kiểm tra giả thuyết có đúng trên quy mô lớn không", C.yellow],
    ["ĐỊNH TÍNH 2 · Đào sâu", "Tìm hiểu kỹ những phát hiện mới mà khảo sát mới cho thấy", C.pink],
  ];
  layers.forEach(([h, d, col], i) => {
    const y = 1.6 + i * 1.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 4.6, h: 0.9, rectRadius: i === 1 ? 0.05 : 0.3, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText([
      { text: h, options: { bold: true, fontSize: 13, breakLine: true } },
      { text: d, options: { fontSize: 10.5 } },
    ], { x: M + 0.25, y, w: 4.1, h: 0.9, margin: 0, fontFace: F, color: col === C.yellow ? C.ink : C.white, valign: "middle" });
  });
  sideCard(s, 5.4, 1.6, 4.1, 1.3, C.blue, "Định tính → Định lượng", "Khảo sát lộ ra điều mới nhưng đã phỏng vấn xong, không hỏi thêm được.", 11);
  sideCard(s, 5.4, 3.05, 4.1, 1.3, C.plum, "Định lượng → Định tính", "Chưa biết hỏi gì cho đúng; tốn tiền cho khảo sát lớn mà vẫn sót câu quan trọng.", 11);
  txt(s, "Cùng tổng khối lượng nghiên cứu — chỉ chia phỏng vấn thành 2 đợt.", 5.4, 4.45, 4.1, 0.4, { size: 11, bold: true, color: C.green });
}

// ═════════════════════════ SECTION 2 ═════════════════════════
// 10. In-depth interviews
{
  const s = contentSlide("s2", "Phỏng vấn sâu là công cụ định tính quan trọng nhất vì ba lý do");
  const r = [
    [C.blue, "Linh hoạt", "Trang trọng hay thân mật; câu hỏi chi tiết hay chỉ vài chủ đề; có thể đi theo hướng bất ngờ nếu phục vụ mục tiêu"],
    [C.green, "Nói nhiều hơn viết", "Trong 30–60 phút người tham gia kể rất nhiều; từ ngữ khi nói khác khi viết — chất liệu cho thông điệp"],
    [C.orange, "Tín hiệu phi ngôn ngữ", "Một thoáng ngập ngừng, tiếng thở dài, reo vui… giúp người phỏng vấn đào sâu đúng chỗ"],
  ];
  r.forEach(([col, h, d], i) => {
    const x = M + i * 3.05;
    box(s, x, 1.55, 2.85, 2.35, C.white, C.line);
    circleNum(s, x + 0.2, 1.72, 0.55, col, String(i + 1), 16);
    txt(s, h, x + 0.9, 1.72, 1.85, 0.55, { size: 14, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, x + 0.2, 2.42, 2.5, 1.4, { size: 11 });
  });
  box(s, M, 4.05, 9.0, 0.8, C.blue);
  s.addText([
    { text: "10", options: { bold: true, fontSize: 26, color: C.yellow } },
    { text: "  cuộc phỏng vấn có thể cho nhiều insight hơn khảo sát hàng trăm người — và thường rẻ hơn.", options: { fontSize: 13, bold: true } },
  ], { x: M + 0.25, y: 4.05, w: 8.5, h: 0.8, margin: 0, fontFace: F, color: C.white, valign: "middle" });
}

// 11. Types of moderated interviews
{
  const s = contentSlide("s2", "Chọn hình thức nghiên cứu theo đúng mục tiêu cần trả lời");
  const rows = [
    [th("Hình thức", C.ink), th("Dùng khi cần", C.blue), th("Lưu ý", C.blue)],
    [tk("Phỏng vấn sâu (IDI) 1:1"), tc("Insight cá nhân sâu, câu chuyện riêng, chủ đề nhạy cảm"), tc("Kém hiệu quả khi cần quan sát hành vi thật")],
    [tk("Dyad / Triad (2–3 người)"), tc("Quyết định chung: cha mẹ – con, vợ chồng thuê hay mua nhà"), tc("Hợp với người trẻ hay ngại nói một mình")],
    [tk("Nhóm tập trung"), tc("Phản ứng tập thể với sản phẩm, ý tưởng, quảng cáo"), tc("Online tối đa 4–6 người; tránh chủ đề nhạy cảm")],
    [tk("Dân tộc học"), tc("Quan sát hành vi trong môi trường tự nhiên"), tc("Trực tiếp hoặc qua nhật ký video")],
    [tk("Kiểm thử khả dụng"), tc("Xem khách dùng website, app, sản phẩm thế nào"), tc("Tìm điểm đau, đảm bảo trực quan")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [2.4, 3.6, 3.0], rowH: [0.4, 0.55, 0.55, 0.55, 0.5, 0.5],
    fontFace: F, fontSize: 11, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.07,
  });
  note(s, "Insight cá nhân → IDI · Động lực nhóm → dyad/triad, nhóm tập trung · Hành vi thật → dân tộc học · Khả dụng → kiểm thử.");
}

// 12. Image-based interviews
{
  const s = contentSlide("s2", "Phỏng vấn bằng hình ảnh khai thác những cảm xúc khó diễn đạt bằng lời");
  box(s, M, 1.55, 4.3, 3.25, C.white, C.line);
  txt(s, "Tình huống: Downton Abbey", M + 0.2, 1.7, 3.9, 0.35, { size: 14, bold: true, color: C.blue });
  const st = [["120 tr.", "khán giả quốc tế"], ["15", "giải Emmy"], ["10–15", "ảnh / người tham gia"]];
  st.forEach(([n, l], i) => {
    const x = M + 0.2 + i * 1.33;
    txt(s, n, x, 2.15, 1.25, 0.5, { size: 20, bold: true, color: [C.pink, C.plum, C.orange][i] });
    txt(s, l, x, 2.65, 1.25, 0.45, { size: 9.5, color: C.muted });
  });
  txt(s, "Đài PBS biết khán giả mê bộ phim (cái gì) nhưng cần biết vì sao. Người tham gia tìm trước 10–15 ảnh thể hiện cảm xúc bộ phim mang lại, rồi trò chuyện về từng ảnh.", M + 0.2, 3.2, 3.9, 1.0, { size: 11 });
  txt(s, "Não người gắn khoảnh khắc cảm xúc với hình ảnh.", M + 0.2, 4.3, 3.9, 0.4, { size: 11, bold: true, color: C.green });

  txt(s, "Gợi ý câu hỏi cho mỗi hình ảnh", 5.1, 1.55, 4.4, 0.35, { size: 14, bold: true, color: C.ink });
  const qs = [
    "Điều gì khiến bạn chọn hình ảnh này?",
    "Nó khiến bạn cảm thấy thế nào?",
    "Nếu nhân vật có thể nói, họ sẽ nói gì?",
    "Màu sắc trong ảnh gợi cảm giác gì?",
    "Hình dung bạn ở trong ảnh: bạn đang làm, nghĩ, cảm thấy gì?",
    "Âm thanh, mùi hương nào gắn với hình ảnh này?",
  ];
  qs.forEach((q, i) => {
    const y = 2.0 + i * 0.47;
    const col = PALETTE.filter((c) => c !== C.yellow)[i % 5];
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.1, y, w: 4.4, h: 0.4, rectRadius: 0.2, fill: { color: C.white }, line: { color: col, width: 1.25 } });
    txt(s, q, 5.25, y, 4.15, 0.4, { size: 10.5, valign: "middle" });
  });
}

// 13. Ethnography
{
  const s = contentSlide("s2", "Dân tộc học cho thấy điều khách hàng làm nhưng không bao giờ nói ra");
  box(s, M, 1.55, 4.3, 3.25, C.yellow);
  txt(s, "Tình huống: muỗng xúc kem", M + 0.2, 1.7, 3.9, 0.35, { size: 14, bold: true, color: C.ink });
  txt(s, "Khảo sát và nhóm tập trung đều nói: hãy làm lưỡi muỗng sắc hơn. Quan sát trong bếp nhà khách hàng cho thấy:", M + 0.2, 2.1, 3.9, 0.9, { size: 11, color: C.ink });
  txt(s, "> 90%", M + 0.2, 2.95, 3.9, 0.75, { size: 40, bold: true, color: C.plum });
  txt(s, "người liếm muỗng trước khi bỏ vào bồn rửa — nhưng khi được hỏi đều phủ nhận. Muỗng sắc hơn có thể đã là thảm họa.", M + 0.2, 3.7, 3.9, 1.0, { size: 11, color: C.ink });

  sideCard(s, 5.1, 1.55, 4.4, 0.95, C.blue, "Quan sát tự nhiên", "Không tương tác, ví dụ: ngồi ở quán cà phê xem khách pha cà phê", 10.5);
  sideCard(s, 5.1, 2.6, 4.4, 0.95, C.green, "Quan sát + phỏng vấn", "Hỏi trong lúc quan sát để hiểu suy nghĩ, cảm xúc, động lực", 10.5);
  sideCard(s, 5.1, 3.65, 4.4, 1.15, C.pink, "Lưu ý khi diễn giải", "Đặt hành vi trong bối cảnh gia đình, xã hội, kinh tế; nên dùng bên thứ ba độc lập để tránh thiên kiến tổ chức", 10.5);
}

// 14. Mobile ethnography
{
  const s = contentSlide("s2", "Nhật ký video trên điện thoại ghi lại cả hành trình mua theo thời gian thực");
  txt(s, "Tình huống: mua loa thông minh (Google Home / Amazon Echo) làm quà mùa lễ", M, 1.5, 9.0, 0.3, { size: 12, bold: true, color: C.ink });
  const steps = [["Nhận biết", C.pink], ["Tìm hiểu", C.orange], ["Mua hàng", C.yellow], ["Mở hộp", C.green], ["Sử dụng", C.blue]];
  steps.forEach(([t, col], i) => {
    const x = M + i * 1.8;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 1.9, w: 1.86, h: 0.6, fill: { color: col }, line: { color: C.bg, width: 1.5 } });
    txt(s, t, x + (i === 0 ? 0.05 : 0.3), 1.9, 1.3, 0.6, { size: 12, bold: true, color: col === C.yellow ? C.ink : C.white, align: "center", valign: "middle" });
  });
  txt(s, "Hàng trăm video mở quà sáng Giáng sinh: phản ứng thật, tại nhà thật", M, 2.55, 9.0, 0.3, { size: 10, italic: true, color: C.muted, align: "center" });
  const b = [
    [C.pink, "Ngôn ngữ thật", "Nghe đúng từ ngữ mỗi nhóm khách dùng → thông điệp trúng đích"],
    [C.green, "Dễ tham gia", "Nhanh, vui, làm lúc nào cũng được; nói nhanh hơn viết nên trả lời chi tiết hơn"],
    [C.blue, "Thể hiện cảm xúc", "Thấy cảm xúc thật — “vàng” với người tìm động lực cảm xúc"],
    [C.plum, "Dễ chia sẻ", "Câu chuyện khách hàng thật cho lãnh đạo và các bên liên quan"],
  ];
  b.forEach(([col, h, d], i) => {
    const x = M + i * 2.29;
    sideCard(s, x, 3.0, 2.13, 1.8, col, h, d, 10.5);
  });
}

// 15. Virtual focus groups
{
  const s = contentSlide("s2", "Nhóm tập trung trực tuyến thành công nhờ bốn nguyên tắc điều phối");
  const t = [
    [C.blue, "Tận dụng khung chat", "Mọi người cùng gõ câu trả lời một lúc; người điều phối tóm tắt và chọn hướng đào sâu"],
    [C.green, "Ai cũng được nói", "Gọi tên từng người, ghi nhận và tóm tắt ý họ để họ thấy được lắng nghe"],
    [C.orange, "Người nói đầu tiên định hình buổi", "Muốn chi tiết hơn thì nói với người đầu; lan man thì cắt ngay — cả nhóm sẽ làm theo"],
    [C.pink, "Năng lượng của bạn", "Cười, giữ nhịp, không để khoảng lặng — online, im lặng rất ngượng"],
  ];
  t.forEach(([col, h, d], i) => {
    const x = M + (i % 2) * 4.6, y = 1.55 + Math.floor(i / 2) * 1.6;
    box(s, x, y, 4.4, 1.45, C.white, C.line);
    circleNum(s, x + 0.2, y + 0.2, 0.5, col, String(i + 1), 15);
    txt(s, h, x + 0.85, y + 0.2, 3.4, 0.5, { size: 13, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, x + 0.85, y + 0.72, 3.4, 0.7, { size: 10.5 });
  });
  note(s, "Thiếu điều phối tốt, nhóm tập trung dễ thành một người nói mãi hoặc cả nhóm than phiền về trải nghiệm cũ.");
}

// 16. Usability testing
{
  const s = contentSlide("s2", "Kiểm thử khả dụng yêu cầu người dùng làm nhiệm vụ, không chỉ trả lời câu hỏi");
  box(s, M, 1.55, 4.3, 1.2, C.soft);
  txt(s, "Kịch bản ví dụ (website Quân đội Mỹ)", M + 0.2, 1.62, 3.9, 0.3, { size: 11.5, bold: true, color: C.blue });
  txt(s, "“Gia đình bạn gặp khó khăn tài chính do khuyết tật của bạn. Hãy tìm nguồn hỗ trợ.” — người dùng vừa làm vừa nói to suy nghĩ.", M + 0.2, 1.92, 3.9, 0.8, { size: 10.5, italic: true, color: C.ink });
  const m = [
    [C.green, "Thời gian", "Quá lâu → ngoài đời họ sẽ rời đi"],
    [C.orange, "Hoàn thành", "0 không thấy · 1 thấy nhưng khó · 2 dễ, tự tin"],
    [C.pink, "Dễ dùng 1–10", "Hoàn thành ~100% mà chỉ chấm 1–2 điểm → thiết kế có vấn đề"],
  ];
  m.forEach(([col, h, d], i) => sideCard(s, M, 2.9 + i * 0.66, 4.3, 0.6, col, h, "", 1));
  m.forEach(([col, h, d], i) => txt(s, d, M + 1.75, 2.9 + i * 0.66, 2.45, 0.6, { size: 9.5, valign: "middle" }));

  txt(s, "Bốn khía cạnh trải nghiệm cần đánh giá", 5.1, 1.55, 4.4, 0.35, { size: 13.5, bold: true, color: C.ink });
  const cat = [[C.blue, "Điều hướng", "Cấu trúc thông tin, cách đi lại"], [C.plum, "Trình bày", "Hình ảnh, bố cục"], [C.green, "Nội dung", "Có giá trị, dễ hiểu với persona"], [C.orange, "Tương tác", "Chạm, kéo, nhấp…"]];
  cat.forEach(([col, h, d], i) => {
    const x = 5.1 + (i % 2) * 2.25, y = 2.0 + Math.floor(i / 2) * 1.4;
    box(s, x, y, 2.1, 1.25, col);
    txt(s, h, x + 0.15, y + 0.15, 1.8, 0.4, { size: 14, bold: true, color: C.white });
    txt(s, d, x + 0.15, y + 0.58, 1.8, 0.6, { size: 10.5, color: C.white });
  });
}

// 17. Choosing a method
{
  const s = contentSlide("s2", "Năm câu hỏi giúp chọn đúng phương pháp (hoặc tổ hợp phương pháp)");
  const q = [
    [C.pink, "Tôi muốn cải thiện điều gì?", "Sản phẩm → kiểm thử khả dụng · Trải nghiệm → dân tộc học, nhật ký video · Chiến lược marketing → phỏng vấn sâu"],
    [C.orange, "Tìm nhận thức hay hành vi?", "Ý kiến, mức hài lòng hay cách khách dùng sản phẩm?"],
    [C.yellow, "Cần CÁI GÌ hay TẠI SAO?", "Hành vi → dân tộc học, nhật ký video · Lý do → phỏng vấn sâu"],
    [C.green, "Có cần từ ngữ của khách?", "Nếu thông điệp là ưu tiên → nghiên cứu không điều phối (video, kiểm thử không điều phối)"],
    [C.blue, "Ngân sách bao nhiêu?", "Có điều phối đắt hơn; nhóm ngách (vd: CFO phòng khám lớn) rất tốn công tuyển"],
  ];
  q.forEach(([col, h, d], i) => {
    const y = 1.5 + i * 0.68;
    circleNum(s, M, y + 0.04, 0.5, col, String(i + 1), 15, col === C.yellow ? C.ink : C.white);
    txt(s, h, 1.15, y, 3.0, 0.58, { size: 13, bold: true, color: C.ink, valign: "middle" });
    txt(s, d, 4.2, y, 5.3, 0.58, { size: 10.5, valign: "middle" });
    if (i < 4) s.addShape(pres.shapes.LINE, { x: 1.15, y: y + 0.63, w: 8.35, h: 0, line: { color: C.line, width: 1 } });
  });
}

// ═════════════════════════ SECTION 3 ═════════════════════════
// 18. Moderator
{
  const s = contentSlide("s3", "Người điều phối giỏi giữ đúng mục tiêu, trung lập và trò chuyện tự nhiên");
  headCard(s, M, 1.55, 4.3, 3.25, C.green, "Vai trò", null, [
    "Giữ thảo luận bám mục tiêu nghiên cứu",
    "Lắng nghe chủ động, hỏi tiếp — không đọc nguyên văn kịch bản",
    "Trong nhóm: gọi tên, tóm tắt để ai cũng được lắng nghe",
    "Trung lập: không giải thích hay bảo vệ thương hiệu — đây là lúc lắng nghe",
  ], 11.5);
  const k = [
    [C.blue, "Lập kế hoạch & quản lý thời gian", "Chạy thử trước; biết cắt phần nào nếu đi lạc hướng; kết thúc đúng giờ"],
    [C.orange, "Phong cách trò chuyện", "Bộ câu hỏi chỉ là hướng dẫn; chào hỏi, hỏi thăm thời tiết trước"],
    [C.pink, "Thực hành", "Kỹ năng lắng nghe không đến sau một đêm; xin góp ý từ người dự thính"],
  ];
  txt(s, "Ba kỹ năng của người giỏi nhất", 5.1, 1.55, 4.4, 0.35, { size: 13.5, bold: true, color: C.ink });
  k.forEach(([col, h, d], i) => sideCard(s, 5.1, 1.95 + i * 0.97, 4.4, 0.88, col, h, d, 10.5));
}

// 19. Interview question mistakes
{
  const s = contentSlide("s3", "Năm lỗi phổ biến khi viết câu hỏi phỏng vấn — và cách sửa");
  const rows = [
    [th("Lỗi", C.ink), th("Câu hỏi chưa tốt", C.pink), th("Cách sửa", C.green)],
    [tk("1. Câu hỏi dẫn dắt"), tc("Bền vững môi trường quan trọng thế nào khi bạn chọn nơi mua quần áo?"), tc("Yếu tố nào giúp bạn chọn nơi mua quần áo?")],
    [tk("2. Hai ý trong một câu"), tc("Ai dọn dẹp và bảo trì nhà bạn?"), tc("Tách thành: Ai dọn dẹp? Ai bảo trì?")],
    [tk("3. Từ ngữ quá rộng, mơ hồ"), tc("“Bảo trì” — thay bóng đèn hay sửa mái nhà?"), tc("Hỏi cụ thể từng hạng mục")],
    [tk("4. Hỏi về tương lai"), tc("Bạn có đăng ký dịch vụ trông trẻ không?"), tc("Hỏi về hành vi và khó khăn trong quá khứ")],
    [tk("5. Bắt khách nghĩ giải pháp"), tc("Bạn muốn chúng tôi làm gì? (→ “ngựa nhanh hơn”)"), tc("Liệt kê điểm đau để hiểu gốc vấn đề")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [2.4, 3.6, 3.0], rowH: [0.38, 0.62, 0.48, 0.5, 0.5, 0.55],
    fontFace: F, fontSize: 10.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.07,
  });
  note(s, "Hành vi trong quá khứ dự đoán hành vi tương lai tốt hơn lời hứa của chính khách hàng.");
}

// 20. Pricing
{
  const s = contentSlide("s3", "Khách hàng phản ứng với cảm nhận về giá nhiều hơn với con số trên nhãn");
  const f = [
    [C.pink, "So sánh", "Khi nhìn sản phẩm, bạn liên tưởng tới gì? Lựa chọn thay thế là gì?"],
    [C.orange, "Gắn kết cảm xúc", "Thương hiệu hợp với giá trị cá nhân của bạn ra sao?"],
    [C.yellow, "Giá trị cảm nhận", "Điều gì khiến sản phẩm này đáng giá tiền?"],
    [C.green, "Giải quyết nỗi đau", "Bạn gặp khó khăn gì với giải pháp hiện tại?"],
    [C.blue, "Bằng chứng xã hội", "Bạn thấy ai dùng sản phẩm này? Đánh giá quan trọng thế nào?"],
  ];
  const w = 1.66, gap = 0.175;
  f.forEach(([col, h, q], i) => {
    const x = M + i * (w + gap);
    box(s, x, 1.55, w, 2.6, C.white, C.line);
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.55, w, h: 0.1, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, h, x + 0.15, 1.8, w - 0.3, 0.6, { size: 13, bold: true, color: col === C.yellow ? C.ink : col });
    txt(s, "Câu hỏi gợi ý", x + 0.15, 2.45, w - 0.3, 0.25, { size: 9, color: C.muted });
    txt(s, "“" + q + "”", x + 0.15, 2.7, w - 0.3, 1.35, { size: 10.5, italic: true, color: C.ink });
  });
  banner(s, 4.3, C.green, [
    { text: "Sau đó: ", options: { bold: true, color: C.yellow } },
    { text: "dùng khảo sát định lượng (conjoint, Van Westendorp, Gabor-Granger) để kiểm tra giả thuyết về giá trên quy mô lớn." },
  ], 0.55, 11);
}

// 21. Rapport
{
  const s = contentSlide("s3", "Hai, ba phút đầu tiên quyết định người tham gia có mở lòng hay không");
  const p = [
    [C.pink, "Cười và chào hỏi", "Đừng lao ngay vào kịch bản hay giới thiệu công ty. Khoảnh khắc này là của người tham gia."],
    [C.orange, "Để họ nói về bản thân", "Chưa nhắc tới nghiên cứu. Tò mò thật sự, kể cả chuyện thời tiết; dùng cử chỉ thể hiện quan tâm."],
    [C.plum, "Tò mò thay vì chia sẻ", "Đừng đáp “Tôi cũng vậy!”. Kết nối bằng câu hỏi, giữ tâm điểm ở người kia."],
  ];
  p.forEach(([col, h, d], i) => {
    const x = M + i * 3.05;
    box(s, x, 1.55, 2.85, 2.6, col);
    txt(s, String(i + 1), x + 0.2, 1.65, 0.8, 0.7, { size: 32, bold: true, color: C.white });
    txt(s, h, x + 0.2, 2.35, 2.45, 0.6, { size: 14, bold: true, color: C.white });
    txt(s, d, x + 0.2, 2.95, 2.45, 1.15, { size: 10.5, color: C.white });
  });
  banner(s, 4.3, C.yellow, [
    { text: "Mục tiêu: ", options: { bold: true } },
    { text: "một buổi phỏng vấn không có cảm giác là phỏng vấn, mà là một cuộc trò chuyện." },
  ], 0.5, 12);
}

// 22. Focus group kickoff
{
  const s = contentSlide("s3", "Mở đầu nhóm tập trung theo bốn bước để tạo nhịp cho cả buổi");
  const st = [
    [C.pink, "Năng lượng thật cao", "Người tham gia phản chiếu điều họ thấy"],
    [C.orange, "Điểm chung của nhóm", "“Hôm nay chúng ta ở đây vì đều đang chọn thức ăn cho con” — áp dụng cả với B2B"],
    [C.green, "Kỳ vọng & quy tắc", "Chương trình, bật camera, tắt thông báo, giữ bảo mật, tâm thế cởi mở"],
    [C.blue, "Dẫn dắt người nói đầu", "Hỏi thêm nếu thiếu chi tiết, cắt nếu lan man"],
  ];
  st.forEach(([col, h, d], i) => {
    const x = M + i * 2.29;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 1.6, w: 2.33, h: 0.7, fill: { color: col }, line: { color: C.bg, width: 1.5 } });
    txt(s, "Bước " + (i + 1), x + (i === 0 ? 0.1 : 0.35), 1.6, 1.6, 0.7, { size: 13, bold: true, color: C.white, align: "center", valign: "middle" });
    txt(s, h, x + 0.05, 2.5, 2.1, 0.55, { size: 13, bold: true, color: C.ink });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.05, y: 3.1, w: 0.4, h: 0.05, fill: { color: col }, line: { color: col, width: 0 } });
    txt(s, d, x + 0.05, 3.25, 2.05, 1.4, { size: 10.5 });
  });
  note(s, "Bước 2 còn gọi là “Background of Relatedness”: nêu mục tiêu chung để người lạ dễ cộng tác.");
}

// 23. Pilot testing & practice
{
  const s = contentSlide("s3", "Chạy thử bộ câu hỏi và luyện lắng nghe trước khi phỏng vấn thật");
  headCard(s, M, 1.55, 4.4, 3.25, C.green, "Chạy thử (pilot test)", "1 đến 4–5 lần", [
    "Thuộc bộ câu hỏi để linh hoạt nhảy phần, quay lại",
    "Sửa thứ tự câu hỏi, căn thời gian, biết phần nào cắt được",
    "Kiểm tra câu hỏi đã phủ đủ mục tiêu",
    "Phát hiện thuật ngữ nội bộ người ngoài không hiểu",
  ], 11.5);
  headCard(s, 5.1, 1.55, 4.4, 3.25, C.plum, "Luyện tập mỗi ngày", "Không cần chờ buổi phỏng vấn chính thức", [
    "Nghe để hiểu, không phải để đáp lời",
    "Gật đầu, “Anh nói tiếp đi…”",
    "Không chen ý kiến, lời khuyên của mình",
    "Hỏi tiếp — làm mọi thứ xoay quanh người kia",
  ], 11.5);
}

// ═════════════════════════ SECTION 4 ═════════════════════════
// 24. Analysis
{
  const s = contentSlide("s4", "Phân tích dữ liệu định tính qua ba bước: tập hợp, mã hóa, tổng hợp");
  const st = [
    [C.orange, "Tập hợp", ["Giấy note, Miro, Trello", "Google Sheets, Airtable, Excel", "Dedoose, NVivo, dScout; Otter.ai để chép lời"]],
    [C.plum, "Mã hóa", ["Gắn nhãn cho từng đoạn dữ liệu theo khung mã", "Nhiều vòng: nhãn rộng → nhóm con chi tiết", "Nhiều người cùng mã hóa; dùng sổ mã (code book)"]],
    [C.green, "Tổng hợp", ["Nhóm các mã, tìm kết nối và tần suất", "Liên tục đối chiếu câu hỏi nghiên cứu", "Đừng bỏ qua insight bất ngờ"]],
  ];
  st.forEach(([col, h, items], i) => {
    const x = M + i * 3.05;
    headCard(s, x, 1.55, 2.85, 2.5, col, "Bước " + (i + 1) + " · " + h, null, items, 10.5);
    if (i < 2) txt(s, "›", x + 2.85, 2.3, 0.2, 0.6, { size: 26, bold: true, color: C.muted, align: "center", valign: "middle" });
  });
  sideCard(s, M, 4.2, 4.4, 0.65, C.blue, "Mã hóa diễn dịch", "", 1);
  txt(s, "Mã định sẵn theo câu hỏi nghiên cứu", M + 2.0, 4.2, 2.3, 0.65, { size: 10, valign: "middle" });
  sideCard(s, 5.1, 4.2, 4.4, 0.65, C.pink, "Mã hóa quy nạp", "", 1);
  txt(s, "Chủ đề tự nổi lên từ dữ liệu", 5.1 + 1.9, 4.2, 2.4, 0.65, { size: 10, valign: "middle" });
}

// 25. AI
{
  const s = contentSlide("s4", "AI tăng tốc khâu xử lý, nhưng con người vẫn dẫn dắt khâu diễn giải");
  const ok = (t) => tc(t, { bold: true, color: C.green });
  const mid = (t) => tc(t, { bold: true, color: C.orange });
  const no = (t) => tc(t, { bold: true, color: C.pink });
  const rows = [
    [th("Tác vụ", C.ink), th("Đánh giá", C.orange), th("Vì sao", C.orange)],
    [tk("Chép lời ghi âm"), ok("✓ Rất tốt"), tc("Otter.ai, Rev: nhanh và khá chính xác")],
    [tk("Nhận diện mẫu lặp lại"), mid("~ Hữu ích với dữ liệu lớn"), tc("Dựa trên từ khóa, tần suất; thừa với dữ liệu nhỏ")],
    [tk("Phân tích cảm xúc (sentiment)"), no("✗ Nên bỏ qua"), tc("Đơn giản hóa cảm xúc lẫn lộn; hiểu sai mỉa mai")],
    [tk("Tự động mã hóa"), no("✗ Chưa đạt"), tc("Bắt được điều hiển nhiên, bỏ lỡ sắc thái, thay đổi cảm xúc")],
    [tk("Khuyến nghị chiến lược"), no("✗ Hạn chế nhất"), tc("Không hiểu persona, động lực cảm xúc, mục tiêu kinh doanh")],
  ];
  s.addTable(rows, {
    x: M, y: 1.5, w: 9.0, colW: [2.6, 2.4, 4.0], rowH: [0.36, 0.44, 0.44, 0.44, 0.48, 0.48],
    fontFace: F, fontSize: 11, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.07,
  });
  banner(s, 4.5, C.plum, [
    { text: "Lưu ý thêm: ", options: { bold: true, color: C.yellow } },
    { text: "AI có thể mang thiên kiến từ dữ liệu huấn luyện; dữ liệu nhạy cảm cần tuân thủ quy định riêng tư như GDPR." },
  ], 0.42, 10.5);
}

// 26. Report formats
{
  const s = contentSlide("s4", "Chọn cấu trúc báo cáo theo mục tiêu dự án và nhu cầu người nghe");
  const f = [
    [C.pink, "Theo chủ đề", "Nhóm insight theo chủ đề, ví dụ điểm đau, tính năng mong muốn; thêm case study", "Cần linh hoạt, mỗi bên xem phần của mình"],
    [C.orange, "Theo mục tiêu NC", "Mỗi phần trả lời một câu hỏi nghiên cứu kèm khuyến nghị", "Mục tiêu rõ ràng ngay từ đầu"],
    [C.yellow, "Theo persona", "Hành vi, điểm đau, nhu cầu của từng nhóm khách", "Dự án phân khúc khách hàng"],
    [C.green, "Tường thuật", "Đi theo hành trình một người, với các đỉnh và đáy cảm xúc", "Cần tạo sự đồng cảm"],
    [C.blue, "Khuyến nghị ưu tiên", "Nêu khuyến nghị quan trọng nhất trước, sau đó là dữ liệu chứng minh", "Bên liên quan cần ra quyết định ngay"],
  ];
  const w = 1.66, gap = 0.175;
  f.forEach(([col, h, d, when], i) => {
    const x = M + i * (w + gap);
    box(s, x, 1.55, w, 3.3, C.white, C.line);
    box(s, x, 1.55, w, 0.65, col);
    txt(s, h, x + 0.1, 1.55, w - 0.2, 0.65, { size: 12, bold: true, color: col === C.yellow ? C.ink : C.white, valign: "middle", align: "center" });
    txt(s, d, x + 0.12, 2.32, w - 0.24, 1.35, { size: 10 });
    s.addShape(pres.shapes.LINE, { x: x + 0.12, y: 3.72, w: w - 0.24, h: 0, line: { color: C.line, width: 1 } });
    txt(s, "Dùng khi", x + 0.12, 3.8, w - 0.24, 0.22, { size: 8.5, bold: true, color: C.muted });
    txt(s, when, x + 0.12, 4.02, w - 0.24, 0.78, { size: 9.5, color: C.ink });
  });
  note(s, "Tránh định dạng “hỏi gì – đáp nấy”: nó làm phẳng insight và bỏ mất các kết nối.");
}

// 27. Actionable, memorable reporting
{
  const s = contentSlide("s4", "Báo cáo được ghi nhớ khi kể chuyện thật và đưa ra khuyến nghị cụ thể");
  box(s, M, 1.55, 4.3, 3.3, C.orange);
  txt(s, "Câu chuyện đặc trưng", M + 0.2, 1.68, 3.9, 0.3, { size: 11, bold: true, color: C.white });
  txt(s, "9", M + 0.2, 1.95, 1.0, 0.9, { size: 54, bold: true, color: C.yellow });
  txt(s, "sản phẩm dưỡng da mỗi tối trên bồn rửa của Marta", M + 1.2, 2.1, 2.9, 0.7, { size: 12.5, bold: true, color: C.white, valign: "middle" });
  txt(s, "Khuyến nghị “sản phẩm tất cả trong một” chỉ thuyết phục được khách hàng khi họ nghe câu chuyện và xem ảnh 9 lọ sản phẩm ấy.", M + 0.2, 2.95, 3.9, 0.95, { size: 11, color: C.white });
  txt(s, "Chi tiết lạ, dễ kể lại → dễ lan truyền.", M + 0.2, 4.05, 3.9, 0.6, { size: 11, bold: true, color: C.ink });

  const t = [
    [C.pink, "Kể chuyện", "Đặt trích dẫn vào hành trình: thách thức → thiếu gì → giải pháp"],
    [C.blue, "Gương mặt & giọng nói thật", "Video ghép nhiều khách cùng gặp một khó khăn"],
    [C.green, "Khuyến nghị cụ thể", "Không nói “cải thiện UX” mà nói “giảm form đăng ký từ 5 xuống 2 trường”"],
    [C.plum, "Gắn với mục tiêu ban đầu", "Thêm phần brainstorm để các bên tham gia và ủng hộ"],
  ];
  t.forEach(([col, h, d], i) => sideCard(s, 5.1, 1.55 + i * 0.84, 4.4, 0.76, col, h, d, 10));
}

// ═════════════════════════ 28. Conclusions ═════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.plum };
  pageNo += 1;
  s.addShape(pres.shapes.OVAL, { x: 8.3, y: -0.9, w: 2.4, h: 2.4, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.1, y: 1.3, w: 0.8, h: 0.8, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  txt(s, "Tổng kết", M, 0.4, 6, 0.4, { size: 14, bold: true, color: C.yellow });
  txt(s, "Đằng sau mỗi con số là một câu chuyện “vì sao” đang chờ được lắng nghe", M, 0.8, 7.6, 0.9, { size: 21, bold: true, color: C.white });
  const pts = [
    [C.yellow, "Hiểu vì sao", "định tính giải thích động cơ, rào cản, cảm xúc mà số liệu không thấy; kết hợp theo kiểu “sandwich”"],
    [C.green, "Chọn đúng phương pháp", "theo mục tiêu: insight cá nhân, động lực nhóm, hành vi thật hay khả dụng"],
    [C.blue, "Hỏi đúng & lắng nghe", "tránh 5 lỗi đặt câu hỏi; tạo thiện cảm trong 2–3 phút đầu; chạy thử trước"],
    [C.orange, "Kể chuyện để hành động", "mã hóa và tổng hợp kỹ; AI hỗ trợ, con người diễn giải; khuyến nghị cụ thể"],
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

pres.writeFile({ fileName: __dirname + "/Nghien_cuu_dinh_tinh_Marketing.pptx" }).then((f) => console.log("Wrote", f));
