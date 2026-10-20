// Dựng deck tóm tắt Bài 10 "Báo cáo kết quả nghiên cứu" (MKT1107, Buổi 13) — 18 slide, cùng thiết kế deck Buổi 1.
// Nguồn nội dung duy nhất: tai_lieu_hoc_tap/Bai10.md (repo teaching-skills). Speaker note: Nói / Hỏi lớp / Chuyển ý.
// Chạy: NODE_PATH=<node_modules> APPLY_THEME=<pptx skill>/scripts/apply_theme.js node build_B10_slides.js out.pptx
const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const OUT = process.argv[2] || path.join(__dirname, "B10_slides.pptx");

const HEX = {
  bg: "172849", text: "FBFAF4", card: "22395F", muted: "A9B6D3",
  green: "49B296", yellow: "FFD23B", pink: "FF5178", purple: "962B7C", blue: "09A1E5", orange: "FF9259",
};
const THEME = {
  name: "MKT1107 Dark",
  headFontFace: "Alexandria",
  bodyFontFace: "Alexandria",
  colors: {
    dk1: HEX.text, lt1: HEX.bg, dk2: HEX.muted, lt2: HEX.card,
    accent1: HEX.green, accent2: HEX.yellow, accent3: HEX.pink,
    accent4: HEX.purple, accent5: HEX.blue, accent6: HEX.orange,
    hlink: HEX.blue, folHlink: HEX.purple,
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "MKT1107 Nghiên cứu Marketing · Bài 10";
pres.author = "Đoàn Nguyễn Bảo Quyên";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
const C = pres.SchemeColor;
const COL = {
  text: C.text1, bg: C.background1, card: C.background2, muted: C.text2,
  green: C.accent1, yellow: C.accent2, pink: C.accent3, purple: C.accent4, blue: C.accent5, orange: C.accent6,
};
const ON = (k) => (k === "purple" ? COL.text : COL.bg);
const W = 13.333, MX = 0.6, CW = W - 2 * MX;

pres.defineSlideMaster({
  title: "TITLE",
  background: { color: COL.bg },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.0, w: 8.6, h: 2.3, fontSize: 48, bold: true, color: COL.text, valign: "bottom", align: "left", margin: 0 }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: MX, y: 4.55, w: 8.6, h: 1.6, fontSize: 28, color: COL.muted, valign: "top", align: "left", margin: 0 }, text: "" } },
  ],
});
pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: COL.bg },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 0.35, w: CW, h: 1.3, fontSize: 30, bold: true, color: COL.text, valign: "top", align: "left", margin: 0 }, text: "" } },
  ],
  slideNumber: { x: 12.15, y: 6.95, w: 0.8, h: 0.45, fontSize: 24, color: HEX.muted, align: "right" },
});

// ---------- helpers ----------
const iconCache = {};
async function icon(name, hex, px = 256) {
  const key = name + hex;
  if (iconCache[key]) return iconCache[key];
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(fa[name], { color: "#" + hex, size: px }));
  const buf = await sharp(Buffer.from(svg)).resize(px, px).png().toBuffer();
  return (iconCache[key] = "image/png;base64," + buf.toString("base64"));
}
let objN = 0;
const oname = (p) => `${p}-${++objN}`;
function T(slide, text, o) {
  slide.addText(text, { isTextBox: true, fontSize: 24, color: COL.text, margin: 0, valign: "top", objectName: oname("text"), ...o });
}
function card(slide, x, y, w, h, fill = COL.card, extra = {}) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { type: "none" }, rectRadius: 0.15, objectName: oname("card"), ...extra });
}
function dot(slide, x, y, d, k, label, size = 24) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: COL[k] }, line: { type: "none" }, objectName: oname("dot") });
  if (label !== undefined) T(slide, String(label), { x, y, w: d, h: d, align: "center", valign: "middle", bold: true, fontSize: size, color: ON(k) });
}
async function iconDot(slide, name, x, y, d, k) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: COL[k] }, line: { type: "none" }, objectName: oname("icon-bg") });
  const p = d * 0.25;
  slide.addImage({ data: await icon(name, k === "purple" ? HEX.text : HEX.bg), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, objectName: oname("icon"), altText: "" });
}
function arrow(slide, x, y, w, h, k = "muted", dir = "right") {
  slide.addShape(dir === "down" ? pres.shapes.DOWN_ARROW : pres.shapes.RIGHT_ARROW, { x, y, w, h, fill: { color: COL[k] }, line: { type: "none" }, objectName: oname("arrow") });
}
function line(slide, x, y, w, h, k = "muted", extra = {}) {
  slide.addShape(pres.shapes.LINE, { x, y, w, h, line: { color: COL[k], width: 3, ...extra }, objectName: oname("line") });
}
// Khung hình (đặt dưới cùng): postprocess gắn alt text "Chú thích thay thế" vào shape tên FIG
function fig(slide, x, y, w, h) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: COL.bg, transparency: 100 }, line: { type: "none" }, objectName: "FIG" });
}
function yellowBox(slide, x, y, w, h, text = "[cần giảng viên xác nhận]") {
  card(slide, x, y, w, h, COL.yellow);
  T(slide, text, { x: x + 0.2, y, w: w - 0.4, h, valign: "middle", bold: true, color: COL.bg });
}

// ---------- notes ----------
const NOTES = [];
function mkNotes({ say, gv, ask, next }) {
  return `Nói: ${say.trim()}${gv ? `\n(GV: ${gv.trim()})` : ""}\n\nHỏi lớp: ${ask ? ask.trim() : "—"}\n\nChuyển ý: ${next.trim()}`;
}
let curSection = null;
function newSlide(n, title, section, note, master = "CONTENT") {
  if (section !== curSection) { pres.addSection({ title: section }); curSection = section; }
  const s = pres.addSlide({ masterName: master, sectionTitle: section });
  s.addText(title, { placeholder: "title" });
  s.addNotes(mkNotes(note));
  NOTES.push({ n, title, section, note });
  return s;
}

const S0 = "Mở đầu", SA = "10.1 · Báo cáo nghiên cứu", SB = "10.2 · Nội dung báo cáo", SC = "10.3 · Nguyên tắc trình bày",
  SD = "Tự kiểm tra và ôn tập", SR = "Tài liệu tham khảo";

async function build() {
  // ===== 1 =====
  {
    const s = newSlide(1, "Bài 10: Báo cáo kết quả nghiên cứu", S0, {
      say: "Bài 10 các bạn đã tự học trực tuyến — 9 giờ tự học. Hôm nay, Buổi 13, mình tóm tắt lại những điểm chính của Bài 10: Báo cáo kết quả nghiên cứu, để các nhóm áp dụng ngay vào báo cáo cuối kỳ. Học phần MKT1107 Nghiên cứu Marketing, tóm tắt trên lớp, Buổi 13; giảng viên: Đoàn Nguyễn Bảo Quyên.",
      gv: "Deck tóm tắt cho Buổi 13; nội dung đầy đủ nằm trong tài liệu học tập Bài 10 trên LMS.",
      next: "Trước hết, sau bài này các bạn cần làm được gì.",
    }, "TITLE");
    s.addText("MKT1107 Nghiên cứu Marketing · Tóm tắt trên lớp, Buổi 13\nGiảng viên: Đoàn Nguyễn Bảo Quyên", { placeholder: "body" });
    const keys = ["green", "yellow", "pink", "purple", "blue", "orange"];
    [[9.9, 1.3, 1.5], [11.3, 2.2, 1.0], [10.2, 3.1, 2.0], [12.0, 3.6, 0.7], [9.8, 5.3, 0.9], [11.1, 5.0, 1.3]]
      .forEach(([x, y, d], i) => dot(s, x, y, d, keys[i]));
  }

  // ===== 2 =====
  {
    const s = newSlide(2, "Sau bài này, nhóm tự viết và tự rà soát được báo cáo cuối kỳ", S0, {
      say: "Học xong bài này, các bạn có thể: một, giải thích vai trò, phân biệt các loại báo cáo nghiên cứu; hai, trình bày đủ thành phần theo 5 chương / 3 chương của dự án; ba, trình bày bảng, biểu đồ rõ ràng, trung thực, đúng quy cách; bốn, tự rà soát báo cáo trước khi nộp. Mục tiêu cuối cùng là báo cáo cuối kỳ của chính nhóm các bạn.",
      next: "Bắt đầu từ câu hỏi: báo cáo nghiên cứu là gì, và vì sao nó quan trọng đến vậy?",
    });
    const items = [["FaBalanceScale", "Giải thích vai trò, phân biệt các loại báo cáo", "green"], ["FaFileAlt", "Trình bày đủ thành phần theo 5 chương / 3 chương", "yellow"], ["FaChartBar", "Trình bày bảng, biểu đồ rõ ràng, trung thực", "blue"], ["FaCheckSquare", "Tự rà soát báo cáo trước khi nộp", "orange"]];
    for (let i = 0; i < 4; i++) {
      const y = 2.0 + i * 1.18;
      await iconDot(s, items[i][0], MX, y, 0.95, items[i][2]);
      T(s, items[i][1], { x: MX + 1.3, y, w: 10.8, h: 0.95, valign: "middle", fontSize: 28 });
    }
  }

  // ===== 3 =====
  {
    const s = newSlide(3, "Với nhiều nhà quản trị, bản báo cáo là thứ duy nhất họ đọc", SA, {
      say: "Báo cáo nghiên cứu là văn bản trình bày mục tiêu, phương pháp, kết quả, kết luận, đề xuất cho người sử dụng thông tin — kèm thuyết trình nếu có. Đây là sản phẩm duy nhất mà nhiều nhà quản trị thực sự đọc: một nghiên cứu tốt nhưng báo cáo kém thì giá trị bị giảm đi rất nhiều. Báo cáo có ba vai trò. Hệ thống hóa: gom toàn bộ quá trình và kết quả thành tài liệu lưu trữ được. Cơ sở ra quyết định — cho nhà quản trị marketing. Đánh giá chất lượng: người đọc kiểm tra phương pháp, bằng chứng của nghiên cứu.",
      next: "Nhưng không phải báo cáo nào cũng viết giống nhau — tùy người đọc mà có bốn loại.",
    });
    card(s, MX, 1.85, CW, 1.45);
    T(s, "Văn bản trình bày mục tiêu, phương pháp, kết quả, kết luận, đề xuất cho người sử dụng thông tin", { x: MX + 0.35, y: 1.85, w: CW - 0.7, h: 1.45, valign: "middle", italic: true, fontSize: 26 });
    const roles = [["FaArchive", "Hệ thống hóa", "Tài liệu lưu trữ được", "green"], ["FaUserTie", "Cơ sở ra quyết định", "Cho nhà quản trị marketing", "yellow"], ["FaSearch", "Đánh giá chất lượng", "Kiểm tra phương pháp, bằng chứng", "blue"]];
    for (let i = 0; i < 3; i++) {
      const x = MX + i * 4.15, [ic, h, sub, k] = roles[i];
      card(s, x, 3.6, 3.83, 3.1);
      await iconDot(s, ic, x + 0.3, 3.85, 0.95, k);
      T(s, h, { x: x + 0.18, y: 4.95, w: 3.6, h: 0.55, bold: true, color: COL[k] });
      T(s, sub, { x: x + 0.3, y: 5.6, w: 3.3, h: 0.95 });
    }
  }

  // ===== 4 =====
  {
    const s = newSlide(4, "Bốn loại báo cáo cho bốn kiểu người đọc", SA, {
      say: "Bốn loại báo cáo, phân biệt theo người đọc và đặc điểm. Báo cáo gốc: cho lưu trữ, nhóm nghiên cứu — đầy đủ nhất, mọi chi tiết phương pháp, dữ liệu, kết quả xử lý. Báo cáo chuyên môn kỹ thuật: cho chuyên gia, nhà nghiên cứu — nhấn mạnh phương pháp, kỹ thuật thống kê, độ tin cậy. Báo cáo cho người sử dụng: cho nhà quản trị — ngắn gọn, tập trung đề xuất — kết quả, kết luận và đề xuất, ít thuật ngữ. Báo cáo phổ biến: cho công chúng, báo chí — đơn giản, nhiều hình ảnh, hấp dẫn.",
      ask: "“Báo cáo cuối kỳ của nhóm mình gần với loại nào?”",
      next: "Câu trả lời cho nhóm các bạn là: hai loại cùng lúc.",
    });
    const rows = [["Gốc", "Lưu trữ, nhóm nghiên cứu", "Đầy đủ nhất", "muted"], ["Chuyên môn kỹ thuật", "Chuyên gia, nhà nghiên cứu", "Nhấn mạnh phương pháp", "blue"], ["Cho người sử dụng", "Nhà quản trị", "Ngắn gọn, tập trung đề xuất", "green"], ["Phổ biến", "Công chúng, báo chí", "Đơn giản, nhiều hình ảnh", "orange"]];
    const xs = [MX, 4.3, 8.4], ws = [3.5, 3.9, 4.3];
    ["Loại báo cáo", "Người đọc", "Đặc điểm"].forEach((h, j) => T(s, h, { x: xs[j] + 0.2, y: 1.85, w: ws[j], h: 0.55, valign: "middle", bold: true, color: COL.muted }));
    rows.forEach(([a, b, c, k], i) => {
      const y = 2.55 + i * 1.05;
      card(s, MX, y, CW, 0.92);
      T(s, a, { x: xs[0] + 0.2, y, w: ws[0] - 0.2, h: 0.92, valign: "middle", bold: true, color: COL[k] });
      T(s, b, { x: xs[1] + 0.2, y, w: ws[1] - 0.2, h: 0.92, valign: "middle" });
      T(s, c, { x: xs[2] + 0.2, y, w: ws[2] - 0.2, h: 0.92, valign: "middle" });
    });
  }

  // ===== 5 =====
  {
    const s = newSlide(5, "Báo cáo của nhóm viết cho giảng viên, nhưng kết luận phải viết cho nhà quản trị", SA, {
      say: "Báo cáo cuối kỳ của nhóm gần với báo cáo chuyên môn, vì người đọc là giảng viên. Nhưng phần kết luận và hàm ý phải viết được cho người sử dụng — nhà quản trị của thương hiệu nhóm đã chọn. Tức là: toàn báo cáo ≈ báo cáo chuyên môn — người đọc: giảng viên. Kết luận & hàm ý ≈ báo cáo cho người sử dụng — người đọc: nhà quản trị thương hiệu nhóm chọn; viết ngắn gọn, ít thuật ngữ, có đề xuất.",
      next: "Vậy một báo cáo đầy đủ gồm những phần nào?",
    });
    const cols = [["FaChalkboardTeacher", "Toàn báo cáo", "≈ Báo cáo chuyên môn", "Người đọc: giảng viên", "blue"], ["FaUserTie", "Kết luận & hàm ý", "≈ Báo cáo cho người sử dụng", "Người đọc: nhà quản trị thương hiệu nhóm chọn", "green"]];
    for (let i = 0; i < 2; i++) {
      const x = MX + i * 6.25, [ic, h, t, r, k] = cols[i];
      card(s, x, 1.95, 5.88, 4.6);
      await iconDot(s, ic, x + 0.35, 2.25, 1.1, k);
      T(s, h, { x: x + 1.7, y: 2.25, w: 4.0, h: 1.1, valign: "middle", bold: true, fontSize: 28, color: COL[k] });
      T(s, t, { x: x + 0.35, y: 3.7, w: 5.2, h: 1.1, bold: true, fontSize: 28 });
      T(s, r, { x: x + 0.35, y: 4.9, w: 5.2, h: 1.4, color: COL.muted });
    }
  }

  // ===== 6 =====
  {
    const s = newSlide(6, "Một báo cáo đầy đủ có 10 thành phần", SB, {
      say: "Một báo cáo nghiên cứu marketing thường gồm 10 thành phần: 1 trang tựa — tên đề tài, người thực hiện, người nhận, thời gian; 2 mục lục — cả danh mục bảng, danh mục hình; 3 tóm lược cho lãnh đạo; 4 giới thiệu — bối cảnh, vấn đề, mục tiêu, câu hỏi nghiên cứu; 5 phương pháp luận — đủ để người khác lặp lại được; 6 kết quả — theo thứ tự mục tiêu, bằng bảng, biểu đồ và lời diễn giải; 7 hạn chế; 8 kết luận và đề nghị; 9 phụ lục — bảng hỏi, codebook, kết quả gốc, biên bản phỏng vấn đã ẩn danh; 10 tài liệu tham khảo (APA 7), như Bài 2.",
      next: "Trong mười phần đó, phần tóm lược có một nghịch lý đáng nhớ.",
    });
    const parts = ["Trang tựa", "Mục lục", "Tóm lược", "Giới thiệu", "Phương pháp luận", "Kết quả", "Hạn chế", "Kết luận và đề nghị", "Phụ lục", "Tài liệu tham khảo (APA 7)"];
    const ks = ["green", "yellow", "pink", "blue", "orange", "green", "yellow", "pink", "blue", "orange"];
    parts.forEach((p, i) => {
      const x = MX + Math.floor(i / 5) * 6.25, y = 1.9 + (i % 5) * 0.98;
      card(s, x, y, 5.88, 0.82);
      dot(s, x + 0.15, y + 0.11, 0.6, ks[i], i + 1);
      T(s, p, { x: x + 0.95, y, w: 4.8, h: 0.82, valign: "middle" });
    });
  }

  // ===== 7 =====
  {
    const s = newSlide(7, "Tóm lược viết sau cùng nhưng đặt đầu tiên", SB, {
      say: "Tóm lược cho lãnh đạo — executive summary — dài 1 trang, gồm vấn đề, phương pháp, kết quả chính, đề xuất. Nó viết sau cùng, đặt đầu tiên. Viết sau cùng vì nó tóm tắt cả báo cáo — chỉ viết được khi mọi chương đã xong. Đặt đầu tiên vì báo cáo là sản phẩm mà nhiều nhà quản trị thực sự đọc, và họ đọc trang này trước.",
      ask: "Câu ôn tập 1: “Vì sao phần tóm lược viết sau cùng nhưng đặt đầu tiên?” — gọi 1–2 nhóm trả lời trước khi giải thích.",
      next: "Trong tóm lược và kết luận, nhiều nhóm hay trộn ba thứ: kết quả, kết luận và đề nghị.",
    });
    card(s, MX, 1.95, 4.4, 4.6, COL.yellow);
    T(s, "1 trang", { x: MX, y: 2.4, w: 4.4, h: 1.5, align: "center", valign: "middle", fontSize: 60, bold: true, color: COL.bg });
    T(s, "Executive summary", { x: MX + 0.2, y: 4.1, w: 4.0, h: 0.6, align: "center", italic: true, color: COL.bg });
    T(s, "Viết sau cùng, đặt đầu tiên", { x: MX + 0.2, y: 4.9, w: 4.0, h: 1.3, align: "center", bold: true, color: COL.bg });
    ["Vấn đề", "Phương pháp", "Kết quả chính", "Đề xuất"].forEach((t, i) => {
      const y = 1.95 + i * 1.18;
      dot(s, 5.45, y + 0.12, 0.75, ["green", "blue", "orange", "pink"][i], i + 1, 26);
      card(s, 6.45, y, 6.28, 1.0);
      T(s, t, { x: 6.75, y, w: 5.8, h: 1.0, valign: "middle", fontSize: 28 });
    });
  }

  // ===== 8 =====
  {
    const s = newSlide(8, "Kết quả, kết luận, đề nghị trả lời ba câu hỏi khác nhau", SB, {
      say: "Kết quả là dữ liệu cho thấy gì — ví dụ: “60% người trả lời mua qua sàn TMĐT”, tức sàn thương mại điện tử. Kết luận là điều đó có nghĩa gì với câu hỏi nghiên cứu — nó trả lời câu hỏi nghiên cứu. Đề nghị là nên làm gì — ví dụ: “ưu tiên ngân sách cho kênh sàn TMĐT”. Quy tắc: đề nghị phải bám vào kết quả, không đưa ra ý kiến không có dữ liệu chứng minh.",
      ask: "Câu ôn tập 2: “Phân biệt kết quả, kết luận và đề nghị bằng một ví dụ từ dự án của nhóm bạn.” — mỗi nhóm viết 3 câu, 2 phút.",
      next: "Mười thành phần này khớp thế nào với cấu trúc báo cáo dự án của học phần?",
    });
    const cols = [["Kết quả", "Dữ liệu cho thấy gì?", "“60% người trả lời mua qua sàn TMĐT”", "blue"], ["Kết luận", "Điều đó có nghĩa gì?", "Trả lời câu hỏi nghiên cứu", "yellow"], ["Đề nghị", "Nên làm gì?", "“Ưu tiên ngân sách cho kênh sàn TMĐT”", "green"]];
    const cw = 3.6, gap = 0.665;
    cols.forEach(([h, q, ex, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 0.85, COL[k]);
      T(s, h, { x: x + 0.25, y: 1.95, w: cw - 0.5, h: 0.85, valign: "middle", bold: true, fontSize: 28, color: COL.bg });
      card(s, x, 2.95, cw, 2.75);
      T(s, q, { x: x + 0.25, y: 3.1, w: cw - 0.5, h: 0.95, bold: true, color: COL[k] });
      T(s, ex, { x: x + 0.25, y: 4.1, w: cw - 0.5, h: 1.5, italic: true });
      if (i < 2) arrow(s, x + cw + 0.1, 4.05, 0.45, 0.5, "muted");
    });
    T(s, "Đề nghị phải bám vào kết quả", { x: MX, y: 6.0, w: 9, h: 0.6, bold: true, color: COL.pink });
    T(s, "(ví dụ)", { x: 10.9, y: 6.0, w: 1.83, h: 0.6, align: "right", italic: true, color: COL.muted });
  }

  // ===== 9 =====
  {
    const s = newSlide(9, "Mười thành phần khớp với 5 chương (định lượng) hoặc 3 chương (định tính)", SB, {
      say: "Đối chiếu từng thành phần với định lượng · 5 chương và định tính · 3 chương. Giới thiệu là Ch.1 Giới thiệu ở định lượng; ở định tính là Ch.1 Giới thiệu & cơ sở lý thuyết. Cơ sở lý thuyết là Ch.2 Cơ sở lý thuyết & mô hình ở định lượng; ở định tính được gộp trong Ch.1. Phương pháp luận là Ch.3 Phương pháp, hoặc Ch.2 Phương pháp. Kết quả là Ch.4 Kết quả, hoặc Ch.3 Kết quả, kết luận & hàm ý. Hạn chế, kết luận & đề nghị là Ch.5 Kết luận, hàm ý, hạn chế; ở định tính gộp trong Ch.3. Cả hai dạng: trang tựa, mục lục, tóm lược ở đầu; phụ lục, tài liệu tham khảo, nhật ký AI ở cuối.",
      gv: "Yêu cầu chi tiết về hình thức (số trang, cỡ chữ, cách nộp) theo hướng dẫn bài cuối kỳ giảng viên công bố trên LMS.",
      next: "Biết mình viết phần nào rồi, giờ đến cách viết: năm nguyên tắc chung.",
    });
    const xs = [MX, 4.25, 8.55], ws = [3.5, 4.15, 4.18];
    T(s, "Thành phần", { x: xs[0] + 0.2, y: 1.85, w: ws[0], h: 0.55, valign: "middle", bold: true, color: COL.muted });
    card(s, xs[1], 1.85, ws[1] - 0.1, 0.55, COL.blue);
    T(s, "Định lượng · 5 chương", { x: xs[1] + 0.2, y: 1.85, w: ws[1] - 0.3, h: 0.55, valign: "middle", bold: true, color: COL.bg });
    card(s, xs[2], 1.85, ws[2], 0.55, COL.purple);
    T(s, "Định tính · 3 chương", { x: xs[2] + 0.2, y: 1.85, w: ws[2] - 0.3, h: 0.55, valign: "middle", bold: true });
    const rows = [["Giới thiệu", "Ch.1 Giới thiệu", "Ch.1 Giới thiệu & cơ sở lý thuyết"], ["Cơ sở lý thuyết", "Ch.2 Cơ sở lý thuyết & mô hình", "gộp trong Ch.1"], ["Phương pháp luận", "Ch.3 Phương pháp", "Ch.2 Phương pháp"], ["Kết quả", "Ch.4 Kết quả", "Ch.3 Kết quả, kết luận & hàm ý"], ["Hạn chế, kết luận & đề nghị", "Ch.5 Kết luận, hàm ý, hạn chế", "gộp trong Ch.3"]];
    rows.forEach((r, i) => {
      const y = 2.5 + i * 0.76;
      if (i % 2 === 0) card(s, MX - 0.05, y, CW + 0.1, 0.76);
      r.forEach((c, j) => T(s, c, { x: xs[j] + 0.2, y, w: ws[j] - 0.3, h: 0.76, valign: "middle", bold: j === 0, color: j === 0 ? COL.yellow : (c.startsWith("gộp") ? COL.muted : COL.text), italic: c.startsWith("gộp") }));
    });
    T(s, "Cả hai dạng: trang tựa, mục lục, tóm lược ở đầu; phụ lục, tài liệu tham khảo, nhật ký AI ở cuối", { x: MX, y: 6.38, w: 11.4, h: 0.85, fontSize: 24, color: COL.green });
  }

  // ===== 10 =====
  {
    const s = newSlide(10, "Năm nguyên tắc chung: viết cho người đọc, rõ, gọn, trung thực, nhất quán", SC, {
      say: "Năm nguyên tắc chung về cấu trúc và văn phong. Viết cho người đọc: ai đọc, cần gì để ra quyết định. Rõ ràng, mạch lạc: mỗi chương có mở đầu và tóm tắt; mỗi đoạn một ý chính; tiêu đề đánh số thống nhất. Ngắn gọn, khách quan: văn phong học thuật, không cảm tính; mọi nhận định có dữ liệu hoặc trích dẫn. Trung thực: báo cáo cả kết quả không như mong đợi — giả thuyết không được ủng hộ cũng là kết quả có giá trị. Nhất quán: thuật ngữ, ký hiệu, số thập phân, trích dẫn — tức ký hiệu biến, định dạng trích dẫn — giống nhau trong toàn báo cáo.",
      next: "Hai thứ chiếm nhiều điểm nhất trong chương kết quả là bảng và biểu đồ — bắt đầu với bảng.",
    });
    const items = [["Viết cho người đọc", "Ai đọc, cần gì để ra quyết định", "green"], ["Rõ ràng, mạch lạc", "Mỗi đoạn một ý chính", "yellow"], ["Ngắn gọn, khách quan", "Mọi nhận định có dữ liệu", "blue"], ["Trung thực", "Báo cáo cả kết quả không như mong đợi", "pink"], ["Nhất quán", "Thuật ngữ, ký hiệu, số thập phân, trích dẫn", "orange"]];
    items.forEach(([h, sub, k], i) => {
      const y = 1.9 + i * 0.98;
      dot(s, MX, y + 0.08, 0.7, k, i + 1, 26);
      card(s, MX + 0.95, y, 11.18, 0.85);
      T(s, h, { x: MX + 1.25, y, w: 3.9, h: 0.85, valign: "middle", bold: true, color: COL[k] });
      T(s, sub, { x: MX + 5.2, y, w: 6.8, h: 0.85, valign: "middle" });
    });
  }

  // ===== 11 =====
  {
    const s = newSlide(11, "Bảng: tên ở trên, nguồn ở dưới, kèm 2–3 câu diễn giải", SC, {
      say: "Ví dụ (giả định): Bảng 4.3. Điểm trung bình các khái niệm nghiên cứu (thang 1–5) — chất lượng cảm nhận 3,95; nhận thức về giá 3,82; ý định mua 3,71. Nguồn: kết quả khảo sát của nhóm (giả định), n = 180. Bảy nguyên tắc: số + tên ở trên — “Bảng 4.1” và tên nói rõ nội dung; nguồn ở dưới; đơn vị rõ ở tiêu đề cột — %, nghìn đồng, điểm; sắp xếp có ý nghĩa — thứ tự tự nhiên hoặc từ cao xuống thấp; thập phân thống nhất — ví dụ tỷ lệ 1 chữ số, trung bình 2 chữ số; gọn — bảng gốc vào phụ lục; có 2–3 câu diễn giải nêu điểm nổi bật, không đọc lại từng con số.",
      gv: "Ghi các tên cột viết tắt trên slide: “Số biến” = số biến quan sát; “TB” = trung bình; “ĐLC” = độ lệch chuẩn.",
      ask: "Câu ôn tập 5: “Nêu 3 lỗi thường gặp khi trình bày bảng trong tiểu luận sinh viên và cách sửa.” — gợi ý từ bảy nguyên tắc: thiếu tên hoặc nguồn; số thập phân không thống nhất; dán nguyên bảng từ phần mềm; không có lời diễn giải.",
      next: "Với biểu đồ, việc đầu tiên là chọn đúng loại theo điều mình muốn cho thấy.",
    });
    T(s, "Bảng 4.3. Điểm trung bình các khái niệm nghiên cứu (thang 1–5)", { x: MX, y: 1.85, w: 6.9, h: 0.95, bold: true, color: COL.yellow });
    const head = ["Khái niệm", "Số biến", "TB", "ĐLC"], xs = [MX, 4.4, 5.85, 6.75], ws = [3.8, 1.35, 0.85, 0.95];
    card(s, MX - 0.1, 2.9, 7.25, 0.6, COL.card);
    head.forEach((h, j) => T(s, h, { x: xs[j], y: 2.9, w: ws[j], h: 0.6, valign: "middle", bold: true, color: COL.muted, align: j ? "right" : "left" }));
    [["Chất lượng cảm nhận", "4", "3,95", "0,71"], ["Nhận thức về giá", "3", "3,82", "0,80"], ["Ý định mua", "3", "3,71", "0,88"]].forEach((r, i) => {
      const y = 3.6 + i * 0.62;
      r.forEach((c, j) => T(s, c, { x: xs[j], y, w: ws[j], h: 0.58, valign: "middle", align: j ? "right" : "left" }));
    });
    line(s, MX - 0.1, 5.5, 7.25, 0, "muted", { width: 1.5 });
    T(s, "Nguồn: Kết quả khảo sát của nhóm (giả định), n = 180.", { x: MX, y: 5.6, w: 6.9, h: 0.9, italic: true, color: COL.muted });
    card(s, 7.95, 1.85, 4.78, 4.9);
    ["Số + tên ở trên", "Nguồn ở dưới", "Đơn vị rõ", "Sắp xếp có ý nghĩa", "Thập phân thống nhất", "Bảng gốc vào phụ lục", "Có 2–3 câu diễn giải"].forEach((t, i) => {
      T(s, [{ text: "✓ ", options: { color: COL.green, bold: true } }, { text: t }], { x: 8.2, y: 2.0 + i * 0.66, w: 4.4, h: 0.62, valign: "middle" });
    });
  }

  // ===== 12 =====
  {
    const s = newSlide(12, "Chọn loại biểu đồ theo điều muốn cho thấy", SC, {
      say: "Chọn loại biểu đồ theo điều muốn cho thấy. Cơ cấu — các phần của một tổng: tròn / cột chồng 100%; biểu đồ tròn chỉ nên dùng khi có khoảng 5 phần trở xuống, tổng bằng 100%. So sánh giữa các nhóm: cột đứng hoặc ngang — cột ngang khi tên mục dài, sắp xếp theo giá trị. Xu hướng theo thời gian: đường, trục hoành là thời gian, khoảng cách đều. Phân phối một biến định lượng: histogram — biểu đồ tần số, các cột liền nhau. Liên hệ hai biến định lượng: phân tán — scatter, kèm hệ số tương quan.",
      ask: "Câu ôn tập 3: chọn loại biểu đồ cho (a) cơ cấu giới tính của mẫu → tròn hoặc cột chồng 100%; (b) điểm trung bình 6 yếu tố → cột, ngang nếu tên dài, sắp xếp theo giá trị; (c) doanh số 12 tháng → đường; (d) liên hệ giữa số giờ dùng mạng xã hội và chi tiêu mua sắm trực tuyến → phân tán. Hỏi lớp trước, rồi mới chiếu đáp án.",
      next: "Chọn đúng loại rồi vẫn có thể làm người đọc hiểu sai — ví dụ phổ biến nhất là trục tung.",
    });
    const rows = [["FaChartPie", "Cơ cấu", "Tròn / cột chồng 100%", "green"], ["FaChartBar", "So sánh giữa các nhóm", "Cột đứng hoặc ngang", "yellow"], ["FaChartLine", "Xu hướng theo thời gian", "Đường", "blue"], ["FaSignal", "Phân phối một biến", "Histogram", "orange"], ["FaBraille", "Liên hệ hai biến", "Phân tán (scatter)", "pink"]];
    T(s, "Muốn cho thấy", { x: MX + 1.15, y: 1.8, w: 5, h: 0.5, bold: true, color: COL.muted });
    T(s, "Loại biểu đồ", { x: 7.6, y: 1.8, w: 5, h: 0.5, bold: true, color: COL.muted });
    for (let i = 0; i < 5; i++) {
      const y = 2.4 + i * 0.88, [ic, a, b, k] = rows[i];
      await iconDot(s, ic, MX, y, 0.78, k);
      card(s, MX + 1.0, y, 11.13, 0.78);
      T(s, a, { x: MX + 1.3, y, w: 5.5, h: 0.78, valign: "middle" });
      T(s, b, { x: 7.6, y, w: 5.0, h: 0.78, valign: "middle", bold: true, color: COL[k] });
    }
  }

  // ===== 13 =====
  {
    const s = newSlide(13, "Trục tung không bắt đầu từ 0 làm khác biệt nhỏ trông rất lớn", SC, {
      say: "Hai biểu đồ cột dùng cùng số liệu Bảng 4.3 (giả định), thang 1–5: chất lượng 3,95; giá 3,82; ý định mua 3,71. Bên trái, trục từ 3,5 → chênh lệch bị phóng to: cột “Ý định mua” trông chỉ bằng khoảng một nửa cột “Chất lượng”, dù hai điểm chỉ cách nhau 0,24. Bên phải, trục từ 0 → đúng tỷ lệ: ba cột gần bằng nhau. Nguyên tắc: không làm sai lệch cảm nhận — trục tung của biểu đồ cột bắt đầu từ 0, không dùng hiệu ứng 3D làm méo tỷ lệ.",
      ask: "Câu ôn tập 4: “Một biểu đồ cột có trục tung bắt đầu từ 3,5 thay vì 0. Điều này gây hiểu lầm thế nào?” — hỏi trước khi giải thích hai biểu đồ.",
      next: "Trục từ 0 là một trong sáu nguyên tắc trình bày biểu đồ.",
    });
    const cats = ["Chất lượng", "Giá", "Ý định mua"], vals = [3.95, 3.82, 3.71];
    const base = (minV, maxV, step, k) => ({
      barDir: "col", chartColors: [HEX[k]], barGapWidthPct: 60,
      catAxisLabelColor: HEX.text, valAxisLabelColor: HEX.muted, catAxisLabelFontSize: 24, valAxisLabelFontSize: 24,
      catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt", dataLabelFontFace: "+mn-lt",
      showValue: true, dataLabelPosition: "outEnd", dataLabelColor: HEX.text, dataLabelFontSize: 24, dataLabelFormatCode: "0.00",
      valAxisMinVal: minV, valAxisMaxVal: maxV, valAxisMajorUnit: step, valAxisLabelFormatCode: minV ? "0.0" : "0",
      valGridLine: { color: HEX.card, size: 1 }, catGridLine: { style: "none" },
      catAxisLineShow: true, catAxisLineColor: HEX.muted, valAxisLineShow: false, showLegend: false, showTitle: false,
    });
    card(s, MX, 1.85, 5.95, 0.95, COL.pink);
    T(s, "Trục từ 3,5 → chênh lệch bị phóng to", { x: MX + 0.2, y: 1.85, w: 5.6, h: 0.95, valign: "middle", bold: true, color: COL.bg });
    s.addChart(pres.charts.BAR, [{ name: "Điểm trung bình", labels: cats, values: vals }], { x: MX, y: 2.9, w: 5.95, h: 3.5, ...base(3.5, 4.0, 0.1, "pink"), altText: "Biểu đồ cột, trục tung từ 3,5 đến 4,0: Chất lượng 3,95; Giá 3,82; Ý định mua 3,71 — chênh lệch trông rất lớn.", objectName: "chart-trunc" });
    card(s, 6.78, 1.85, 5.95, 0.95, COL.green);
    T(s, "Trục từ 0 → đúng tỷ lệ", { x: 6.98, y: 1.85, w: 5.6, h: 0.95, valign: "middle", bold: true, color: COL.bg });
    s.addChart(pres.charts.BAR, [{ name: "Điểm trung bình", labels: cats, values: vals }], { x: 6.78, y: 2.9, w: 5.95, h: 3.5, ...base(0, 5, 1, "green"), altText: "Biểu đồ cột, trục tung từ 0 đến 5: Chất lượng 3,95; Giá 3,82; Ý định mua 3,71 — ba cột gần bằng nhau.", objectName: "chart-zero" });
    T(s, "Số liệu Bảng 4.3 (giả định), thang 1–5", { x: MX, y: 6.45, w: 9, h: 0.5, italic: true, color: COL.muted });
  }

  // ===== 14 =====
  {
    const s = newSlide(14, "Sáu nguyên tắc trình bày biểu đồ", SC, {
      say: "Sáu nguyên tắc. Một: “Hình 4.1” + tên; nguồn dưới hình — tên rõ nội dung. Hai: tên trục, đơn vị, nhãn số liệu khi cần; chú thích màu rõ ràng. Ba: trục cột từ 0, không 3D — không làm sai lệch cảm nhận. Bốn: đơn giản: mỗi biểu đồ một thông điệp — bỏ lưới, bóng, màu không cần thiết. Năm: không lặp số liệu ở cả bảng và biểu đồ — chọn một. Sáu: có lời diễn giải ngắn bên dưới biểu đồ.",
      next: "Giờ ghép tất cả lại thành danh sách tự kiểm tra trước khi nộp báo cáo cuối kỳ.",
    });
    const items = [["“Hình 4.1” + tên; nguồn dưới hình", "green"], ["Tên trục, đơn vị, nhãn số liệu", "yellow"], ["Trục cột từ 0, không 3D", "pink"], ["Đơn giản: mỗi biểu đồ một thông điệp", "blue"], ["Không lặp số liệu ở cả bảng và biểu đồ", "orange"], ["Có lời diễn giải ngắn", "purple"]];
    items.forEach(([t, k], i) => {
      const x = MX + Math.floor(i / 3) * 6.25, y = 1.95 + (i % 3) * 1.55;
      card(s, x, y, 5.88, 1.35);
      dot(s, x + 0.25, y + 0.3, 0.75, k, i + 1, 26);
      T(s, t, { x: x + 1.25, y, w: 4.45, h: 1.35, valign: "middle" });
    });
  }

  // ===== 15–16: checklist =====
  const checklist = async (n, title, intro, items, next) => {
    const s = newSlide(n, title, SD, {
      say: intro + " " + items.map((t, i) => `${i + 1}. ${t}`).join("; ") + ".",
      gv: "Danh sách đầy đủ nằm cuối tài liệu học tập Bài 10 — nhắc nhóm in ra và đánh dấu trước khi nộp.",
      ask: "Cho mỗi nhóm 3 phút tự đánh dấu trên bản nháp hiện tại: mục nào chưa đạt?",
      next,
    });
    items.forEach((t, i) => {
      const y = (items.length > 6 ? 1.9 : 1.8) + i * (items.length > 6 ? 0.69 : 0.86);
      const h = items.length > 6 ? 0.6 : 0.8;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX, y: y + (h - 0.45) / 2, w: 0.45, h: 0.45, fill: { color: COL.bg }, line: { color: COL.green, width: 2.5 }, rectRadius: 0.06, objectName: oname("box") });
      T(s, t, { x: MX + 0.75, y, w: 11.4, h, valign: "middle" });
    });
  };
  await checklist(15, "Tự kiểm tra trước khi nộp (1): nội dung", "Danh sách tự kiểm tra báo cáo cuối kỳ — phần nội dung.",
    ["Câu hỏi ở Chương 1 được trả lời ở kết luận", "Phương pháp: chọn mẫu, cỡ mẫu, thang đo có nguồn, cách phân tích", "Kết quả: phiếu hợp lệ, đặc điểm mẫu, thống kê mô tả, nhị biến / chủ đề", "Không kết luận nhân quả từ tương quan", "Hàm ý quản trị bám kết quả, cụ thể, khả thi", "Có hạn chế và hướng nghiên cứu tiếp theo"],
    "Phần thứ hai của danh sách: hình thức và liêm chính.");
  await checklist(16, "Tự kiểm tra trước khi nộp (2): hình thức và liêm chính", "Danh sách tự kiểm tra — phần hình thức và liêm chính.",
    ["Bảng, hình đánh số theo chương, có tên và nguồn", "Trích dẫn APA 7 khớp hai chiều với danh mục", "Mọi tài liệu trích dẫn có thật và nhóm đã đọc", "Mọi con số lấy từ kết quả phần mềm của nhóm", "Phụ lục: bảng hỏi / dàn bài, codebook, kết quả gốc", "Khai báo AI và nhật ký AI đầy đủ", "Dữ liệu người tham gia đã ẩn danh"],
    "Trước khi kết thúc, năm câu ôn tập để tự kiểm tra lại cả bài.");

  // ===== 17 =====
  {
    const s = newSlide(17, "Năm câu ôn tập", SD, {
      say: "Năm câu ôn tập của Bài 10. 1. Vì sao tóm lược viết sau cùng, đặt đầu tiên? 2. Kết quả, kết luận, đề nghị: ví dụ từ dự án nhóm. 3. Chọn biểu đồ: giới tính · 6 yếu tố · 12 tháng · giờ MXH và chi tiêu — tức cơ cấu giới tính của mẫu; điểm trung bình 6 yếu tố; doanh số 12 tháng; liên hệ giữa số giờ dùng mạng xã hội và chi tiêu mua sắm trực tuyến. 4. Trục tung bắt đầu từ 3,5 gây hiểu lầm gì? 5. Ba lỗi khi trình bày bảng và cách sửa.",
      gv: "Gợi ý đáp án đã có trong note các slide 7 (câu 1), 8 (câu 2), 12 (câu 3), 13 (câu 4), 11 (câu 5).",
      ask: "Chỉ định mỗi câu 1 nhóm trả lời, các nhóm khác bổ sung.",
      next: "Tài liệu tham khảo của bài ở slide cuối.",
    });
    const qs = ["Vì sao tóm lược viết sau cùng, đặt đầu tiên?", "Kết quả, kết luận, đề nghị: ví dụ từ dự án nhóm", "Chọn biểu đồ: giới tính · 6 yếu tố · 12 tháng · giờ MXH và chi tiêu", "Trục tung bắt đầu từ 3,5 gây hiểu lầm gì?", "Ba lỗi khi trình bày bảng và cách sửa"];
    const ks = ["green", "yellow", "blue", "pink", "orange"];
    qs.forEach((q, i) => {
      const y = 1.9 + i * 0.97;
      dot(s, MX, y + 0.05, 0.75, ks[i], i + 1, 26);
      card(s, MX + 1.0, y, 11.13, 0.85);
      T(s, q, { x: MX + 1.3, y, w: 10.7, h: 0.85, valign: "middle" });
    });
  }

  // ===== 18 =====
  {
    const REFS = [
      [{ text: "American Psychological Association. (2020). " }, { text: "Publication manual of the American Psychological Association", options: { italic: true } }, { text: " (7th ed.). https://doi.org/10.1037/0000165-000" }],
      [{ text: "Brown, T. J., Suter, T. A., & Churchill, G. A. (2014). " }, { text: "Basic marketing research: Customer insights and managerial action", options: { italic: true } }, { text: " (8th ed.). Cengage Learning." }],
      [{ text: "Malhotra, N. K. (2019). " }, { text: "Marketing research: An applied orientation", options: { italic: true } }, { text: " (7th ed.). Pearson." }],
    ];
    const plain = REFS.map((r) => r.map((x) => x.text).join(""));
    const s = newSlide(18, "Tài liệu tham khảo", SR, {
      say: "Ba tài liệu tham khảo của Bài 10, theo APA 7: " + plain.join(" — "),
      next: "— (slide cuối).",
    });
    let y = 1.85;
    REFS.forEach((r) => { T(s, r, { x: MX, y, w: CW, h: 1.25 }); y += 1.5; });
  }

  await pres.writeFile({ fileName: OUT });
  try {
    const { applyTheme } = require(process.env.APPLY_THEME || "./apply_theme.js");
    await applyTheme(OUT, THEME);
  } catch (e) { console.warn("applyTheme không chạy được:", e.message); }
  console.log("Wrote", OUT);
}
build().catch((e) => { console.error(e); process.exit(1); });
