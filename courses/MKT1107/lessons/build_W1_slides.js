// Dựng deck Buổi 1 MKT1107 từ W1_slides_outline.md + W1_lecture_notes.md
// Chạy: node build_W1_slides.js [đường-dẫn-output.pptx]
// Cần: pptxgenjs, react, react-dom, react-icons, sharp; apply_theme.js của skill pptx (tùy chọn).

const path = require("path");
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const OUT = process.argv[2] || path.join(__dirname, "W1_slides.pptx");

// ---------- Bảng màu ----------
const HEX = {
  bg: "172849", text: "FBFAF4", card: "22395F", muted: "A9B6D3",
  green: "49B296", yellow: "FFD23B", pink: "FF5178", purple: "962B7C", blue: "09A1E5", orange: "FF9259",
};

// Theme: dk1 = màu chữ sáng, lt1 = nền tối → slide/textbox mới trong PowerPoint tự đúng màu.
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
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
pres.title = "MKT1107 Nghiên cứu Marketing · Buổi 1";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
const C = pres.SchemeColor;

const COL = {
  text: C.text1, bg: C.background1, card: C.background2, muted: C.text2,
  green: C.accent1, yellow: C.accent2, pink: C.accent3, purple: C.accent4, blue: C.accent5, orange: C.accent6,
};
// Chữ đặt trên nền màu nhấn: navy cho màu sáng, chữ sáng cho tím
const ON = (k) => (k === "purple" ? COL.text : COL.bg);
const W = 13.333, MX = 0.6, CW = W - 2 * MX;

// ---------- Layouts ----------
pres.defineSlideMaster({
  title: "TITLE",
  background: { color: COL.bg },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.1, w: 8.6, h: 2.2, fontSize: 48, bold: true, color: COL.text, valign: "bottom", align: "left", margin: 0 }, text: "" } },
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

// ---------- Helpers ----------
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
  slide.addText(text, {
    isTextBox: true, fontSize: 24, color: COL.text, margin: 0, valign: "top",
    objectName: oname("text"), ...o,
  });
}
function card(slide, x, y, w, h, fill = COL.card, extra = {}) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { type: "none" }, rectRadius: 0.15, objectName: oname("card"), ...extra });
}
function dot(slide, x, y, d, fillKey, label, size = 24) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: COL[fillKey] }, line: { type: "none" }, objectName: oname("dot") });
  if (label !== undefined) T(slide, String(label), { x, y, w: d, h: d, align: "center", valign: "middle", bold: true, fontSize: size, color: ON(fillKey) });
}
async function iconDot(slide, name, x, y, d, fillKey) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: COL[fillKey] }, line: { type: "none" }, objectName: oname("icon-bg") });
  const ic = await icon(name, fillKey === "purple" ? HEX.text : HEX.bg);
  const p = d * 0.25;
  slide.addImage({ data: ic, x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, objectName: oname("icon"), altText: name });
}
function arrow(slide, x, y, w, h, colorKey = "muted", dir = "right") {
  const shape = dir === "down" ? pres.shapes.DOWN_ARROW : pres.shapes.RIGHT_ARROW;
  slide.addShape(shape, { x, y, w, h, fill: { color: COL[colorKey] }, line: { type: "none" }, objectName: oname("arrow") });
}
function line(slide, x, y, w, h, colorKey = "muted", extra = {}) {
  slide.addShape(pres.shapes.LINE, { x, y, w, h, line: { color: COL[colorKey], width: 3, ...extra }, objectName: oname("line") });
}

let curSection = null;
function newSlide(title, notes, section, master = "CONTENT") {
  if (section && section !== curSection) { pres.addSection({ title: section }); curSection = section; }
  const s = pres.addSlide({ masterName: master, sectionTitle: curSection });
  s.addText(title, { placeholder: "title" });
  s.addNotes(notes);
  return s;
}
const notes = (lec, tip) => `LỜI GIẢNG\n${lec.trim()}${tip ? `\n\nGHI CHÚ CHO GIẢNG VIÊN\n${tip.trim()}` : ""}`;

// ======================================================================
async function build() {
  // ---------------- S1 · Khởi động ----------------
  const S1 = "S1 · Khởi động";
  {
    pres.addSection({ title: S1 }); curSection = S1;
    const s = pres.addSlide({ masterName: "TITLE", sectionTitle: S1 });
    s.addText("Bài 1: Tổng quan về nghiên cứu Marketing", { placeholder: "title" });
    s.addText("MKT1107 Nghiên cứu Marketing · Buổi 1\nGiảng viên: [điền tên giảng viên]", { placeholder: "body" });
    // Motif: sáu chấm màu
    const keys = ["green", "yellow", "pink", "purple", "blue", "orange"];
    const pos = [[9.9, 1.3, 1.5], [11.3, 2.2, 1.0], [10.2, 3.1, 2.0], [12.0, 3.6, 0.7], [9.8, 5.3, 0.9], [11.1, 5.0, 1.3]];
    pos.forEach(([x, y, d], i) => dot(s, x, y, d, keys[i]));
    s.addNotes(notes(
      "(Chưa giới thiệu môn. Chuyển ngay sang slide 2.)",
      "Bài giảng Buổi 1 dài 150 phút, chia S1–S8. Chữ nghiêng trong ngoặc là ghi chú cho giảng viên, không đọc to."));
  }

  {
    const s = newSlide("Hỏi 1.000 khách hàng giàu về điện thoại giá rẻ: kết quả sai ở đâu?", notes(`
Tôi bắt đầu bằng một câu chuyện. Một hãng điện thoại chuẩn bị tung ra dòng điện thoại giá rẻ. Trước khi quyết định giá bán, họ làm khảo sát. Nhưng họ đi hỏi ở đâu? Ở các showroom cao cấp, với những khách hàng có thu nhập cao. Kết quả khảo sát: phần lớn người được hỏi nói rằng giá không quan trọng, họ sẵn sàng trả nhiều hơn để có tính năng tốt.

Câu hỏi cho các bạn: Kết luận này sai ở đâu? Và nếu công ty tin vào nó thì chuyện gì xảy ra?

(Cho 1 phút suy nghĩ một mình, rồi 1 phút trao đổi với bạn bên cạnh. Chỉ định 2–3 bạn trả lời.)

(Câu trả lời mong đợi: hỏi sai đối tượng — người mua điện thoại giá rẻ không phải khách hàng giàu; kết quả bị chệch; công ty có thể định giá quá cao, sản phẩm thất bại. Ghi lên bảng hai chữ: "hỏi ai".)`,
      "Đọc chậm tình huống. 1 phút nghĩ một mình, 1 phút trao đổi với bạn bên cạnh, chỉ định 2–3 bạn trả lời. Ghi lên bảng: \"hỏi ai\"."), S1);
    // Minh họa: điện thoại giá rẻ đối diện nhóm khách giàu
    await iconDot(s, "FaMobileAlt", 0.9, 2.3, 1.9, "yellow");
    T(s, "Giá rẻ", { x: 0.6, y: 4.3, w: 2.5, h: 0.5, align: "center", bold: true, color: COL.yellow });
    T(s, "vs", { x: 2.9, y: 2.85, w: 0.9, h: 0.8, align: "center", valign: "middle", fontSize: 32, bold: true, color: COL.muted });
    await iconDot(s, "FaUserTie", 3.8, 2.3, 1.9, "pink");
    T(s, "Khách giàu", { x: 3.5, y: 4.3, w: 2.5, h: 0.5, align: "center", bold: true, color: COL.pink });
    const rows = ["Hãng điện thoại sắp bán dòng giá rẻ", "Khảo sát khách ở showroom cao cấp", "Kết quả: “giá không quan trọng”"];
    rows.forEach((r, i) => {
      dot(s, 6.5, 1.95 + i * 1.05, 0.7, ["blue", "purple", "orange"][i], i + 1);
      T(s, r, { x: 7.4, y: 1.95 + i * 1.05, w: 5.3, h: 0.7, valign: "middle", fontSize: 26 });
    });
    card(s, 6.5, 5.25, 6.2, 1.25, COL.yellow);
    T(s, "Sai ở đâu? Hậu quả là gì?", { x: 6.8, y: 5.25, w: 5.7, h: 1.25, valign: "middle", fontSize: 30, bold: true, color: COL.bg });
  }

  {
    const s = newSlide("Mọi nghiên cứu bắt đầu bằng ba câu hỏi: vì sao hỏi, hỏi thế nào, hỏi ai", notes(`
Các bạn vừa chỉ ra đúng lỗi mà rất nhiều doanh nghiệp mắc phải: dữ liệu thì có, con số thì đẹp, nhưng câu trả lời vô giá trị vì hỏi sai người. Có một câu mà các giảng viên nghiên cứu marketing hay nhắc: trước khi thu thập bất kỳ dữ liệu nào, phải trả lời được ba câu hỏi — vì sao mình hỏi, hỏi như thế nào, và hỏi ai. Cả học phần này, thật ra, là học cách trả lời ba câu hỏi đó cho đúng.`,
      "Nối từ câu trả lời của lớp: tình huống vừa rồi sai ở câu thứ ba. Chuyển sang giới thiệu môn."), S1);
    const items = [["FaBullseye", "Vì sao hỏi?", "green"], ["FaRoute", "Hỏi thế nào?", "blue"], ["FaUsers", "Hỏi ai?", "pink"]];
    for (let i = 0; i < 3; i++) {
      const x = MX + i * 4.15, [ic, label, k] = items[i];
      card(s, x, 2.0, 3.8, 3.1, i === 2 ? COL[k] : COL.card);
      await iconDot(s, ic, x + 1.3, 2.3, 1.2, i === 2 ? "purple" : k);
      T(s, label, { x, y: 3.75, w: 3.8, h: 0.9, align: "center", valign: "middle", fontSize: 32, bold: true, color: i === 2 ? COL.bg : COL.text });
    }
    T(s, "↑ sai ở đây", { x: 7.9, y: 5.25, w: 4.83, h: 0.5, align: "center", color: COL.pink, italic: true });
    T(s, "Cả học phần là học trả lời ba câu này cho đúng.", { x: MX, y: 6.1, w: CW, h: 0.6, fontSize: 28, bold: true, color: COL.yellow });
  }

  // ---------------- S2 · Giới thiệu học phần ----------------
  const S2 = "S2 · Giới thiệu học phần";
  {
    const s = newSlide("Marketing căn bản dạy cách ra quyết định; môn này dạy cách có thông tin để quyết định", notes(`
(Phần này nói nhanh, gọn. Chi tiết có trong đề cương trên LMS — nhắc sinh viên đọc lại.)

Ở môn Marketing căn bản, các bạn đã học cách doanh nghiệp ra quyết định về sản phẩm, giá, phân phối, truyền thông. Môn này trả lời câu hỏi tiếp theo: những quyết định đó dựa vào thông tin nào, và làm sao có được thông tin đáng tin cậy?`,
      "Liên hệ môn tiên quyết. Một câu: \"Không có thông tin đúng, 4P chỉ là đoán.\""), S2);
    card(s, MX, 2.0, 5.3, 4.2);
    T(s, "Đã học: Marketing căn bản", { x: MX + 0.35, y: 2.25, w: 4.6, h: 0.6, bold: true, color: COL.muted });
    const ps = [["Sản phẩm", "green"], ["Giá", "yellow"], ["Phân phối", "blue"], ["Xúc tiến", "orange"]];
    ps.forEach(([p, k], i) => {
      const x = MX + 0.35 + (i % 2) * 2.35, y = 3.1 + Math.floor(i / 2) * 1.35;
      card(s, x, y, 2.15, 1.1, COL[k]);
      T(s, p, { x, y, w: 2.15, h: 1.1, align: "center", valign: "middle", bold: true, color: COL.bg });
    });
    arrow(s, 6.15, 3.65, 1.0, 0.9, "yellow");
    card(s, 7.4, 2.0, 5.33, 4.2, COL.yellow);
    T(s, "Môn này", { x: 7.75, y: 2.25, w: 4.7, h: 0.6, bold: true, color: COL.bg });
    T(s, "Quyết định 4P dựa vào thông tin nào — và làm sao để thông tin đáng tin?", { x: 7.75, y: 3.1, w: 4.7, h: 2.8, fontSize: 30, bold: true, color: COL.bg });
  }

  {
    const s = newSlide("Hết học phần, bạn tự làm được một nghiên cứu marketing từ đầu đến cuối", notes(`
Kết thúc học phần, các bạn có thể:
1. Giải thích các khái niệm và phương pháp nghiên cứu marketing.
2. Xây dựng một kế hoạch nghiên cứu phục vụ một quyết định marketing cụ thể.
3. Tự thực hiện các bước của một nghiên cứu: xác định vấn đề, thiết kế, chọn mẫu, thiết kế bảng hỏi, phân tích dữ liệu, trình bày kết quả.
4. Làm việc nhóm, phản biện, và có ý thức đạo đức khi nghiên cứu.`,
      "Đây là CLO1–8 viết lại bằng lời của sinh viên. Không đọc CLO nguyên văn — nhắc \"chi tiết trong đề cương trên LMS\"."), S2);
    const items = [["FaLightbulb", "Giải thích khái niệm và phương pháp", "green"], ["FaClipboardList", "Lập kế hoạch nghiên cứu", "yellow"], ["FaRoute", "Thực hiện từng bước của nghiên cứu", "blue"], ["FaUserFriends", "Làm việc nhóm, có đạo đức nghiên cứu", "orange"]];
    for (let i = 0; i < 4; i++) {
      const y = 1.95 + i * 1.18;
      await iconDot(s, items[i][0], MX, y, 0.95, items[i][2]);
      T(s, items[i][1], { x: MX + 1.3, y, w: 10.5, h: 0.95, valign: "middle", fontSize: 28 });
    }
    T(s, "Chi tiết: đề cương trên LMS", { x: MX, y: 6.7, w: 8, h: 0.5, color: COL.muted, italic: true });
  }

  {
    const s = newSlide("Mỗi nhóm 2–3 bạn làm một nghiên cứu thật: 5 chương (định lượng) hoặc 3 chương (định tính)", notes(`
Điểm khác của môn này: mỗi nhóm 2–3 bạn sẽ tự làm một nghiên cứu nhỏ từ đầu đến cuối, theo một trong hai hướng:
- Định lượng — 5 chương: Giới thiệu nghiên cứu · Cơ sở lý thuyết và mô hình · Phương pháp nghiên cứu · Kết quả nghiên cứu · Kết luận và hàm ý quản trị.
- Định tính — 3 chương: Giới thiệu và cơ sở lý thuyết · Phương pháp nghiên cứu · Kết quả, thảo luận và kết luận.

Mỗi buổi học, phần thực hành 45 phút cuối buổi là lúc nhóm làm một phần của nghiên cứu đó, có giảng viên đi kèm. Bài tập về nhà là hoàn thiện phần đó.`,
      "Chọn hướng ở Buổi 5. 45 phút thực hành cuối mỗi buổi = làm một phần dự án, có giảng viên đi kèm."), S2);
    const cols = [
      ["Định lượng · 5 chương", "blue", ["Giới thiệu", "Cơ sở lý thuyết & mô hình", "Phương pháp", "Kết quả", "Kết luận & hàm ý"]],
      ["Định tính · 3 chương", "purple", ["Giới thiệu & cơ sở lý thuyết", "Phương pháp", "Kết quả, thảo luận & kết luận"]],
    ];
    cols.forEach(([head, k, chs], c) => {
      const x = MX + c * 6.25;
      card(s, x, 1.95, 5.85, 0.85, COL[k]);
      T(s, head, { x: x + 0.3, y: 1.95, w: 5.3, h: 0.85, valign: "middle", bold: true, fontSize: 28, color: ON(k) });
      chs.forEach((ch, i) => {
        const y = 3.0 + i * 0.75;
        dot(s, x + 0.15, y + 0.05, 0.55, k, i + 1);
        T(s, ch, { x: x + 0.95, y, w: 4.9, h: 0.65, valign: "middle" });
      });
    });
    T(s, "Chọn hướng ở Buổi 5", { x: 6.85, y: 5.6, w: 5.85, h: 0.6, color: COL.yellow, bold: true });
  }

  {
    const s = newSlide("Theo kịp từng buổi thì đến Buổi 13 bạn đã có gần đủ tiểu luận", notes(`
Nếu các bạn theo kịp từng buổi, đến Buổi 13 các bạn đã có gần đủ bài tiểu luận cuối kỳ.

(Chiếu sơ đồ lộ trình: B1 đề tài → B2–3 tài liệu → B4–5 AI hỗ trợ, chọn hướng → B6 đề cương nghiên cứu → B7–9 phương pháp, mẫu, thang đo → B10–12 bảng hỏi, thu dữ liệu → B13 phân tích → tiểu luận.)

Lịch thu dữ liệu: nhóm phát hành bảng hỏi sau Buổi 11 và phải thu xong trước Buổi 13.`,
      "Nhấn hai mốc dễ trễ: nộp giữa kỳ trước Buổi 11; thu dữ liệu xong trước Buổi 13.\nMốc bài tập nhóm: M1 sau B1 · M2 sau B3 · M3 sau B5 · M4 sau B6."), S2);
    const steps = [
      ["B1", "Đề tài", "green", "M1"], ["B2–3", "Tài liệu", "yellow", "M2"], ["B4–5", "AI, chọn hướng", "blue", "M3"], ["B6", "Đề cương", "orange", "M4"],
      ["B7–9", "Phương pháp, mẫu, thang đo", "green", ""], ["B10–12", "Bảng hỏi, phát hành sau B11", "yellow", ""], ["B13", "Phân tích", "blue", ""], ["B14–15", "Thi", "pink", ""],
    ];
    const cw = 2.85, gap = 0.233;
    steps.forEach(([b, label, k, m], i) => {
      const x = MX + (i % 4) * (cw + gap), y = 1.85 + Math.floor(i / 4) * 2.0;
      card(s, x, y, cw, 1.75);
      T(s, b, { x: x + 0.25, y: y + 0.15, w: 1.8, h: 0.55, bold: true, fontSize: 28, color: COL[k] });
      if (m) { card(s, x + cw - 0.95, y + 0.17, 0.75, 0.5, COL.purple); T(s, m, { x: x + cw - 0.95, y: y + 0.17, w: 0.75, h: 0.5, align: "center", valign: "middle", bold: true }); }
      T(s, label, { x: x + 0.25, y: y + 0.75, w: cw - 0.4, h: 0.95 });
    });
    card(s, MX, 5.95, 5.9, 0.75, COL.orange);
    T(s, "Nộp giữa kỳ: trước Buổi 11", { x: MX + 0.3, y: 5.95, w: 5.4, h: 0.75, valign: "middle", bold: true, color: COL.bg });
    card(s, 6.83, 5.95, 5.9, 0.75, COL.pink);
    T(s, "Thu xong dữ liệu: trước Buổi 13", { x: 7.13, y: 5.95, w: 5.4, h: 0.75, valign: "middle", bold: true, color: COL.bg });
  }

  {
    const s = newSlide("70% điểm đến từ sản phẩm nghiên cứu của nhóm", notes(`
Đánh giá:
- Chuyên cần 10%: tham dự và tham gia trên lớp.
- Bài tập nhóm (4 mốc) 20%: M1 sau Buổi 1 (2,5%) · M2 sau Buổi 3 (5%) · M3 sau Buổi 5 (5%) · M4 sau Buổi 6 (7,5%).
- Giữa kỳ 20%: nộp trên LMS trước Buổi 11 — Chương 1–3 (định lượng) hoặc 1–2 (định tính) + bản nháp bảng hỏi.
- Cuối kỳ 50%: tiểu luận nhóm hoàn chỉnh (Buổi 14–15 là buổi thi).

Nhóm định lượng nào phân tích sâu hơn yêu cầu — ví dụ kiểm định độ tin cậy thang đo, phân tích nhân tố, hồi quy — sẽ được điểm cộng.

(Hỏi: "Có câu hỏi nào về cách đánh giá không?" — chờ 10 giây. Câu hỏi về hạn nộp cụ thể: trả lời theo lịch trên LMS [NEEDS PROFESSOR INPUT: ngày cụ thể và quy định nộp trễ].)`,
      "Nêu trọng số từng mốc M1–M4 (2,5 / 5 / 5 / 7,5%). Hỏi \"có câu hỏi về đánh giá không?\", chờ 10 giây."), S2);
    const items = [["10%", "Chuyên cần", "muted"], ["20%", "Bài tập nhóm M1–M4", "green"], ["20%", "Giữa kỳ (nộp LMS)", "blue"], ["50%", "Tiểu luận nhóm", "yellow"]];
    const cw = 2.85, gap = 0.233;
    items.forEach(([n, label, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 2.75);
      T(s, n, { x, y: 2.1, w: cw, h: 1.2, align: "center", valign: "middle", fontSize: 60, bold: true, color: COL[k] });
      T(s, label, { x: x + 0.2, y: 3.4, w: cw - 0.4, h: 1.15, align: "center" });
    });
    // Ngoặc gom 3 thành phần của nhóm
    const bx = MX + cw + gap, bw = 3 * cw + 2 * gap;
    line(s, bx, 4.95, bw, 0, "yellow");
    line(s, bx, 4.8, 0, 0.15, "yellow");
    line(s, bx + bw, 4.8, 0, 0.15, "yellow");
    T(s, "70% · sản phẩm nhóm", { x: bx, y: 5.1, w: bw, h: 0.6, align: "center", bold: true, fontSize: 28, color: COL.yellow });
    T(s, "+ Phân tích nâng cao → điểm cộng", { x: MX, y: 6.05, w: 9, h: 0.6, color: COL.green, bold: true });
  }

  {
    const s = newSlide("Được dùng AI, nhưng phải khai báo và tự kiểm chứng; trích dẫn theo APA 7", notes(`
Hai quy ước dùng suốt học phần:
- Dùng AI: được phép, với hai điều kiện — khai báo đã dùng công cụ nào, để làm gì (nộp kèm nhật ký sử dụng AI), và tự kiểm chứng mọi thông tin, mọi trích dẫn AI đưa ra. AI bịa tài liệu tham khảo là chuyện xảy ra thường xuyên; trích một tài liệu không tồn tại là lỗi của người nộp bài, không phải lỗi của AI. Buổi 4–5 chúng ta sẽ học cách dùng AI cho nghiên cứu một cách bài bản.
- Trích dẫn: theo APA 7. Tên tác giả Việt ghi họ trước, viết tắt tên đệm và tên: Lê, Q. H. (2017) trong danh mục, (Lê, 2017) trong bài. Buổi 2–3 sẽ học kỹ.

(Hỏi: "Có câu hỏi nào về cách đánh giá không?" — chờ 10 giây.)

Chuyển ý: Bây giờ vào nội dung. Câu hỏi đầu tiên tưởng đơn giản: nghiên cứu marketing thực ra là gì?`,
      "\"AI bịa tài liệu tham khảo — trích tài liệu không tồn tại là lỗi của người nộp.\" Buổi 2–3 học APA, Buổi 4–5 học dùng AI cho nghiên cứu."), S2);
    card(s, MX, 1.95, 6.6, 4.75);
    await iconDot(s, "FaRobot", MX + 0.35, 2.2, 0.95, "blue");
    T(s, "Dùng AI", { x: MX + 1.5, y: 2.2, w: 4.5, h: 0.95, valign: "middle", bold: true, fontSize: 30, color: COL.blue });
    T(s, [
      { text: "Khai báo công cụ + mục đích", options: { bullet: true, breakLine: true } },
      { text: "Nộp nhật ký sử dụng AI", options: { bullet: true, breakLine: true } },
      { text: "Tự kiểm chứng mọi trích dẫn", options: { bullet: true } },
    ], { x: MX + 0.4, y: 3.45, w: 5.9, h: 2.9, paraSpaceAfter: 14, fontSize: 26 });
    card(s, 7.45, 1.95, 5.28, 4.75);
    await iconDot(s, "FaBookOpen", 7.8, 2.2, 0.95, "green");
    T(s, "APA 7", { x: 8.95, y: 2.2, w: 3.5, h: 0.95, valign: "middle", bold: true, fontSize: 30, color: COL.green });
    T(s, "Danh mục tài liệu", { x: 7.85, y: 3.45, w: 4.6, h: 0.5, color: COL.muted });
    T(s, "Lê, Q. H. (2017)", { x: 7.85, y: 3.95, w: 4.6, h: 0.65, fontSize: 28, bold: true, color: COL.yellow });
    T(s, "Trong bài", { x: 7.85, y: 4.85, w: 4.6, h: 0.5, color: COL.muted });
    T(s, "(Lê, 2017)", { x: 7.85, y: 5.35, w: 4.6, h: 0.65, fontSize: 28, bold: true, color: COL.yellow });
  }

  // ---------------- S3 · Nghiên cứu marketing là gì ----------------
  const S3 = "S3 · Nghiên cứu marketing là gì";
  {
    const s = newSlide("Nghiên cứu marketing không chỉ là gửi một bảng hỏi Google Forms", notes(`
Nhiều bạn nghe "nghiên cứu marketing" sẽ nghĩ ngay đến... một cái bảng hỏi trên Google Forms gửi vào group Facebook. Khảo sát chỉ là một công cụ. Hiểu đúng định nghĩa giúp các bạn thấy nghiên cứu marketing rộng hơn nhiều, và giúp các bạn biết khi nào một "cuộc khảo sát" không phải là nghiên cứu.`,
      "Hỏi 2 bạn trả lời nhanh. Thường sẽ nghe \"khảo sát\". Dùng câu đó để mở định nghĩa."), S3);
    await iconDot(s, "FaQuestion", 5.67, 2.0, 2.0, "yellow");
    T(s, "Theo bạn, nghiên cứu marketing là gì?", { x: MX, y: 4.35, w: CW, h: 1.3, align: "center", valign: "middle", fontSize: 44, bold: true, color: COL.yellow });
  }

  {
    const s = newSlide("AMA: nghiên cứu marketing kết nối khách hàng với nhà marketing qua thông tin", notes(`
Hiệp hội Marketing Hoa Kỳ (American Marketing Association – AMA) định nghĩa nghiên cứu marketing là chức năng kết nối người tiêu dùng, khách hàng và công chúng với nhà marketing thông qua thông tin — thông tin được dùng để nhận diện và xác định cơ hội và vấn đề marketing; tạo ra, hoàn thiện và đánh giá các hoạt động marketing; theo dõi kết quả marketing; và hiểu rõ hơn marketing như một quá trình.

[VERIFY: câu chữ định nghĩa AMA và năm phê duyệt (thường được dẫn là 2004, tái xác nhận 2017) — đối chiếu trên ama.org trước khi dùng slide này]`,
      "Không cần nhớ nguyên văn. Ý chính: thông tin để nhận diện vấn đề/cơ hội, đánh giá hoạt động, theo dõi kết quả."), S3);
    card(s, MX, 1.95, CW, 2.4);
    const q = await icon("FaQuoteLeft", HEX.purple);
    s.addImage({ data: q, x: MX + 0.35, y: 2.2, w: 0.7, h: 0.7, altText: "Dấu ngoặc kép" });
    T(s, "“…chức năng kết nối người tiêu dùng, khách hàng và công chúng với nhà marketing thông qua thông tin…”", { x: MX + 1.35, y: 2.2, w: 10.4, h: 1.4, fontSize: 28, italic: true });
    T(s, "— American Marketing Association (AMA)", { x: MX + 1.35, y: 3.65, w: 10.4, h: 0.5, color: COL.muted });
    T(s, "Thông tin để:", { x: MX, y: 4.7, w: 6, h: 0.5, bold: true, color: COL.muted });
    const chips = [["Nhận diện vấn đề", "green"], ["Đánh giá hoạt động", "blue"], ["Theo dõi kết quả", "orange"]];
    chips.forEach(([c, k], i) => {
      const x = MX + i * 4.15;
      card(s, x, 5.35, 3.8, 1.0, COL[k]);
      T(s, c, { x, y: 5.35, w: 3.8, h: 1.0, align: "center", valign: "middle", bold: true, color: COL.bg });
    });
  }

  {
    const s = newSlide("Bốn thành tố phân biệt nghiên cứu thật với “khảo sát cho có”", notes(`
Định nghĩa của AMA khá dài. Để dễ nhớ, chúng ta dùng một cách diễn đạt ngắn gọn hơn:

Nghiên cứu marketing là việc thu thập và phân tích thông tin một cách có hệ thống và có mục tiêu để xác định và cung cấp giải pháp cho các vấn đề liên quan đến marketing.

(Lưu ý: slide gốc UEF ghi câu này là của AMA — không đúng; đây là cách diễn giải, không gán tác giả.)

Tách câu này ra thành bốn thành tố, mỗi thành tố loại bỏ một kiểu "nghiên cứu giả":
1. Có hệ thống — làm theo một quy trình chuẩn, không ngẫu hứng. Hỏi vài người bạn rồi kết luận không phải nghiên cứu.
2. Có mục tiêu — khách quan, biết rõ mình cần trả lời câu hỏi gì. Làm khảo sát để chứng minh ý tưởng của sếp là đúng không phải nghiên cứu.
3. Thu thập và phân tích — biến dữ liệu thô thành thông tin dùng được. Có một file Excel 500 dòng mà không ai đọc chưa phải nghiên cứu.
4. Giải quyết vấn đề — mục đích cuối cùng là hỗ trợ ra quyết định quản trị.

Các video bài giảng nước ngoài nhấn mạnh thêm một ý: nghiên cứu marketing giúp nhà quản trị giảm sự không chắc chắn — ra quyết định dựa trên bằng chứng chứ không dựa trên giả định hay ý kiến cá nhân.`,
      "Mỗi thành tố, nêu một ví dụ \"nghiên cứu giả\" (hỏi vài người bạn · khảo sát để chứng minh ý sếp · file Excel không ai đọc)."), S3);
    T(s, "Thu thập và phân tích thông tin có hệ thống, có mục tiêu, để giải quyết vấn đề marketing", { x: MX, y: 1.85, w: CW, h: 1.0, italic: true, color: COL.muted });
    const items = [["Có hệ thống", "green"], ["Có mục tiêu", "yellow"], ["Thu thập & phân tích", "blue"], ["Giải quyết vấn đề", "orange"]];
    const cw = 2.55, gap = 0.62;
    items.forEach(([t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.2, cw, 2.2, COL[k]);
      T(s, String(i + 1), { x, y: 3.35, w: cw, h: 0.7, align: "center", fontSize: 36, bold: true, color: COL.bg });
      T(s, t, { x: x + 0.15, y: 4.1, w: cw - 0.3, h: 1.1, align: "center", valign: "middle", bold: true, color: COL.bg });
      if (i < 3) arrow(s, x + cw + 0.1, 4.05, 0.42, 0.5, "muted");
    });
    T(s, "Thiếu một thành tố → “nghiên cứu giả”", { x: MX, y: 5.9, w: CW, h: 0.6, bold: true, color: COL.pink });
  }

  {
    const s = newSlide("Nghiên cứu để giải quyết vấn đề hoặc để khai thác cơ hội", notes(`
Nghiên cứu marketing phục vụ một trong hai mục đích, và hai mục đích này có thể chuyển hóa cho nhau:
- Giải quyết vấn đề — ví dụ doanh số sụt giảm, cần biết vì sao.
- Khai thác cơ hội — ví dụ nhu cầu sản phẩm tiện lợi tăng theo một xu hướng xã hội, có nên tham gia không.

Phạm vi thường gặp — các bạn sẽ thấy nó trùng gần như khớp với 4P đã học: nghiên cứu thị trường (quy mô, cơ cấu, thị phần), hành vi người tiêu dùng (thái độ, thói quen, nhân khẩu học), sản phẩm (ý tưởng mới, bao bì, định vị), giá (chi phí, độ nhạy cảm về giá, giá đối thủ), phân phối (kênh, điểm bán), xúc tiến (thông điệp, kênh truyền thông, hiệu quả quảng cáo).

(Hỏi nhanh: "Một nghiên cứu xem khách hàng chấp nhận trả tối đa bao nhiêu cho một ly trà sữa thuộc phạm vi nào?" → giá.)`,
      "Hỏi nhanh: \"Khách chịu trả tối đa bao nhiêu cho một ly trà sữa — thuộc phạm vi nào?\" → giá."), S3);
    T(s, "Hai mục đích", { x: MX, y: 1.85, w: 5, h: 0.5, bold: true, color: COL.muted });
    card(s, MX, 2.45, 5.2, 1.25, COL.pink);
    T(s, "Giải quyết vấn đề", { x: MX, y: 2.45, w: 5.2, h: 1.25, align: "center", valign: "middle", bold: true, fontSize: 28, color: COL.bg });
    T(s, "⇅", { x: MX, y: 3.75, w: 5.2, h: 0.75, align: "center", valign: "middle", fontSize: 36, bold: true, color: COL.muted });
    card(s, MX, 4.55, 5.2, 1.25, COL.green);
    T(s, "Khai thác cơ hội", { x: MX, y: 4.55, w: 5.2, h: 1.25, align: "center", valign: "middle", bold: true, fontSize: 28, color: COL.bg });
    T(s, "Sáu phạm vi", { x: 6.4, y: 1.85, w: 5, h: 0.5, bold: true, color: COL.muted });
    const sc = ["Thị trường", "Hành vi NTD", "Sản phẩm", "Giá", "Phân phối", "Xúc tiến"];
    sc.forEach((t, i) => {
      const x = 6.4 + (i % 2) * 3.2, y = 2.45 + Math.floor(i / 2) * 1.2;
      card(s, x, y, 2.95, 0.95, i === 3 ? COL.yellow : COL.card);
      T(s, t, { x, y, w: 2.95, h: 0.95, align: "center", valign: "middle", bold: i === 3, color: i === 3 ? COL.bg : COL.text });
    });
    T(s, "Trả tối đa bao nhiêu? → Giá", { x: 6.4, y: 6.15, w: 6.33, h: 0.55, color: COL.yellow, italic: true });
  }

  {
    const s = newSlide("Mỗi nghiên cứu có một vị trí trên ba tiêu chí phân loại", notes(`
Nghiên cứu marketing không phải một phương pháp duy nhất. Chúng ta phân loại theo ba tiêu chí, mỗi tiêu chí trả lời một câu hỏi khác nhau. Một nghiên cứu cụ thể luôn có một "vị trí" trên cả ba tiêu chí.

(Ghi chú cho giảng viên: đề cương ghi 1.2.1 và 1.2.2 cùng tên "Phân loại theo mục tiêu nghiên cứu"; bài giảng dùng ba tiêu chí theo slide UEF.)`,
      "\"Ba câu hỏi khác nhau, một nghiên cứu trả lời cả ba.\""), S3);
    card(s, MX, 3.25, 2.6, 1.6, COL.yellow);
    T(s, "Một nghiên cứu", { x: MX, y: 3.25, w: 2.6, h: 1.6, align: "center", valign: "middle", bold: true, fontSize: 28, color: COL.bg });
    const br = [["Mục tiêu cốt lõi", "Hàn lâm · Ứng dụng", "green"], ["Mục tiêu thiết kế", "Khám phá · Mô tả · Tương quan · Nhân quả", "blue"], ["Tính chất dữ liệu", "Định tính · Định lượng", "pink"]];
    br.forEach(([h, sub, k], i) => {
      const y = 1.9 + i * 1.65;
      line(s, MX + 2.6, 4.05, 0.8, (y + 0.7) - 4.05, k);
      card(s, 4.0, y, 8.73, 1.4);
      dot(s, 4.25, y + 0.32, 0.75, k, i + 1, 28);
      T(s, h, { x: 5.25, y: y + 0.12, w: 7.3, h: 0.55, bold: true, fontSize: 26, color: COL[k] });
      T(s, sub, { x: 5.25, y: y + 0.7, w: 7.4, h: 0.55 });
    });
  }

  {
    const s = newSlide("Dự án của các bạn là nghiên cứu ứng dụng, phục vụ một quyết định cụ thể", notes(`
Tiêu chí 1 — Theo mục tiêu cốt lõi: hàn lâm hay ứng dụng?
- Nghiên cứu hàn lâm (cơ bản): mở rộng hiểu biết lý thuyết, kiểm định mô hình, đóng góp cho khoa học marketing nói chung. Ví dụ: "Mô hình tác động của quảng cáo truyền hình đến lòng tin thương hiệu."
- Nghiên cứu ứng dụng: giải quyết một vấn đề kinh doanh cụ thể của một doanh nghiệp cụ thể. Ví dụ: "Tối ưu ngân sách quảng cáo mạng xã hội cho công ty mỹ phẩm X."

Dự án của các bạn trong môn này sẽ là nghiên cứu ứng dụng — gắn với một quyết định marketing thật.`,
      "Nhấn câu cuối: dự án môn này = ứng dụng."), S3);
    const rowsL = ["Mục tiêu", "Đóng góp", "Ví dụ"];
    const ac = ["Mở rộng hiểu biết lý thuyết", "Cho khoa học marketing", "Tác động của quảng cáo TV đến lòng tin thương hiệu"];
    const ap = ["Giải quyết vấn đề của một doanh nghiệp", "Cho một quyết định cụ thể", "Tối ưu ngân sách quảng cáo MXH cho công ty mỹ phẩm X"];
    const lx = MX, cx1 = 3.0, cx2 = 7.95, cwid = 4.78;
    T(s, "Hàn lâm", { x: cx1, y: 1.85, w: cwid, h: 0.7, valign: "middle", bold: true, fontSize: 28, color: COL.muted });
    card(s, cx2 - 0.15, 1.75, cwid + 0.3, 5.0, COL.card);
    T(s, "Ứng dụng", { x: cx2, y: 1.85, w: 2.2, h: 0.7, valign: "middle", bold: true, fontSize: 28, color: COL.green });
    card(s, cx2 + 2.1, 1.92, 2.65, 0.6, COL.yellow);
    T(s, "Dự án của bạn", { x: cx2 + 2.1, y: 1.92, w: 2.65, h: 0.6, align: "center", valign: "middle", bold: true, color: COL.bg });
    const hs = [0.95, 0.95, 1.8];
    let y = 2.75;
    rowsL.forEach((r, i) => {
      T(s, r, { x: lx, y, w: 2.2, h: hs[i], bold: true, color: COL.muted });
      T(s, ac[i], { x: cx1, y, w: cwid - 0.2, h: hs[i] });
      T(s, ap[i], { x: cx2, y, w: cwid, h: hs[i] });
      y += hs[i] + 0.2;
    });
  }

  {
    const s = newSlide("Bốn thiết kế nghiên cứu trả lời bốn kiểu câu hỏi khác nhau", notes(`
Tiêu chí 2 — Theo mục tiêu thiết kế: khám phá, mô tả, tương quan hay nhân quả?

Đây là tiêu chí quan trọng nhất của buổi hôm nay. Bốn loại trả lời bốn kiểu câu hỏi khác nhau:
- Khám phá (exploratory): "Chuyện gì đang xảy ra?" — dùng khi vấn đề còn mơ hồ, chưa biết mình chưa biết gì.
- Mô tả (descriptive): Ai, cái gì, ở đâu, khi nào, bao nhiêu? — dùng khi đã biết cần đo cái gì, cần con số mô tả thị trường.
- Tương quan (correlational): Hai yếu tố có đi cùng nhau không, mạnh đến đâu? — dùng khi muốn biết mức độ liên hệ giữa các biến.
- Nhân quả (causal): A có gây ra B không? — dùng khi cần chứng minh quan hệ nguyên nhân – kết quả trước khi đầu tư lớn.

Lỗi hiểu thường gặp — "Nghiên cứu khám phá là kém khoa học." Không phải. Nó là bước đi đúng khi vấn đề còn mơ hồ. Lỗi là dùng khám phá (vài cuộc phỏng vấn) rồi kết luận cho cả thị trường.`,
      "Đây là phần quan trọng nhất của S3 — đi chậm."), S3);
    const ds = [["Khám phá", "Chuyện gì đang xảy ra?", "green"], ["Mô tả", "Ai, cái gì, bao nhiêu?", "yellow"], ["Tương quan", "Có đi cùng nhau không?", "blue"], ["Nhân quả", "A có gây ra B không?", "pink"]];
    const cw = 2.95, gap = 0.1;
    ds.forEach(([n, q, k], i) => {
      const x = MX + i * (cw + gap);
      s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 2.1, w: cw + 0.25, h: 1.3, fill: { color: COL[k] }, line: { type: "none" }, objectName: oname("chev") });
      T(s, n, { x: x + (i === 0 ? 0.1 : 0.55), y: 2.1, w: cw - 0.5, align: "center", h: 1.3, valign: "middle", bold: true, fontSize: 24, color: COL.bg });
      card(s, x + 0.05, 3.75, cw - 0.15, 2.0);
      T(s, `“${q}”`, { x: x + 0.3, y: 3.95, w: cw - 0.6, h: 1.6, fontSize: 26, color: COL[k], bold: true });
    });
    T(s, "Từ “mơ hồ” đến “chứng minh được”", { x: MX, y: 6.1, w: CW, h: 0.55, color: COL.muted, italic: true });
  }

  {
    const s = newSlide("Doanh số kem giảm mà không rõ lý do: bắt đầu bằng khám phá", notes(`
Khám phá: một thương hiệu kem thấy doanh số mùa hè giảm đột ngột mà không rõ vì sao. Họ đi trò chuyện với khách hàng và chủ cửa hàng, và phát hiện một đối thủ mới vừa tung ra dòng kem ít đường. Nghiên cứu khám phá không cho câu trả lời cuối cùng — nó giúp hình thành giả thuyết để kiểm tra tiếp.

(Ví dụ minh họa từ video bài giảng; không phải số liệu thực tế đã kiểm chứng.)`,
      "Ví dụ minh họa từ video bài giảng. Nhấn: khám phá tạo giả thuyết."), S3);
    await iconDot(s, "FaIceCream", MX, 2.0, 1.3, "green");
    T(s, "Doanh số kem mùa hè giảm đột ngột, không rõ lý do", { x: 2.25, y: 2.0, w: 10.48, h: 1.3, valign: "middle", fontSize: 26 });
    const st = [["Trò chuyện với khách và chủ cửa hàng", "card"], ["Phát hiện: đối thủ tung kem ít đường", "card"], ["= Giả thuyết, chưa phải kết luận", "yellow"]];
    const cw = 3.6, gap = 0.665;
    st.forEach(([t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.9, cw, 2.1, k === "card" ? COL.card : COL[k]);
      T(s, t, { x: x + 0.25, y: 3.9, w: cw - 0.5, h: 2.1, valign: "middle", bold: k !== "card", fontSize: 26, color: k === "card" ? COL.text : COL.bg });
      if (i < 2) arrow(s, x + cw + 0.1, 4.7, 0.45, 0.5, "muted");
    });
    T(s, "Ví dụ minh họa", { x: MX, y: 6.3, w: 6, h: 0.5, color: COL.muted, italic: true });
  }

  {
    const s = newSlide("Ai đặt đồ ăn cuối tuần, lúc nào, bao nhiêu: đó là mô tả", notes(`
Mô tả: một ứng dụng giao đồ ăn muốn tăng đơn cuối tuần. Khảo sát cho thấy phần lớn người đặt cuối tuần ở độ tuổi 18–30 và sinh viên ở thành phố lớn hay đặt muộn. Họ tung chương trình ưu đãi đêm khuya cho sinh viên. Nghiên cứu mô tả trả lời "cái gì" — không giải thích được "vì sao".

(Ví dụ minh họa từ video bài giảng; các con số chỉ là ví dụ của người giảng, không phải số liệu đã kiểm chứng.)`,
      "Ví dụ minh họa từ video; không đưa con số cụ thể vì không có nguồn."), S3);
    await iconDot(s, "FaMotorcycle", MX, 2.0, 1.3, "yellow");
    T(s, "Ứng dụng giao đồ ăn muốn tăng đơn cuối tuần", { x: 2.25, y: 2.0, w: 10.4, h: 1.3, valign: "middle", fontSize: 28 });
    const st = ["Khảo sát người đặt", "Nhóm 18–30; sinh viên hay đặt muộn", "Ưu đãi đêm khuya cho sinh viên"];
    const cw = 3.6, gap = 0.665;
    st.forEach((t, i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.7, cw, 1.7);
      T(s, t, { x: x + 0.25, y: 3.7, w: cw - 0.5, h: 1.7, valign: "middle", fontSize: 26 });
      if (i < 2) arrow(s, x + cw + 0.1, 4.3, 0.45, 0.5, "muted");
    });
    card(s, MX, 5.75, CW, 0.95, COL.yellow);
    T(s, [{ text: "Trả lời ", options: {} }, { text: "cái gì", options: { bold: true, italic: true } }, { text: ", không trả lời ", options: {} }, { text: "vì sao", options: { bold: true, italic: true } }],
      { x: MX + 0.3, y: 5.75, w: CW - 0.6, h: 0.95, valign: "middle", fontSize: 28, color: COL.bg });
  }

  {
    const s = newSlide("Chỉ thử nghiệm có kiểm soát mới cho phép nói “A gây ra B”", notes(`
Nhân quả: một shop thời trang trực tuyến cho hai nhóm khách ngẫu nhiên xem hai kiểu ảnh sản phẩm — áo treo trên móc và người mẫu mặc — rồi so tỷ lệ mua. Vì hai nhóm được chia ngẫu nhiên và chỉ khác nhau ở ảnh, khác biệt về tỷ lệ mua có thể quy cho ảnh. Đó là thử nghiệm (thường gọi là A/B testing) — cách chuẩn để kết luận nhân quả.`,
      "Hai điều kiện: chia ngẫu nhiên + chỉ đổi một yếu tố."), S3);
    const fr = [["Nhóm A (ngẫu nhiên)", "Áo treo trên móc", "FaTshirt", "blue"], ["Nhóm B (ngẫu nhiên)", "Người mẫu mặc", "FaUser", "orange"]];
    for (let i = 0; i < 2; i++) {
      const y = 1.9 + i * 2.1, [h, sub, ic, k] = fr[i];
      card(s, MX, y, 5.6, 1.85);
      await iconDot(s, ic, MX + 0.3, y + 0.35, 1.15, k);
      T(s, h, { x: MX + 1.7, y: y + 0.3, w: 3.8, h: 0.6, bold: true, color: COL[k] });
      T(s, sub, { x: MX + 1.7, y: y + 0.95, w: 3.8, h: 0.6 });
      arrow(s, 6.45, y + 0.65, 0.9, 0.55, "muted");
    }
    card(s, 7.6, 2.6, 5.13, 2.0, COL.yellow);
    T(s, "Tỷ lệ mua", { x: 7.6, y: 2.6, w: 5.13, h: 2.0, align: "center", valign: "middle", bold: true, fontSize: 34, color: COL.bg });
    const cond = ["Chia ngẫu nhiên", "Chỉ đổi một yếu tố"];
    for (let i = 0; i < 2; i++) {
      const x = MX + i * 6.25;
      await iconDot(s, "FaCheck", x, 6.05, 0.65, "green");
      T(s, cond[i], { x: x + 0.85, y: 6.05, w: 5.2, h: 0.65, valign: "middle", bold: true, fontSize: 26 });
    }
  }

  {
    const s = newSlide("Cùng tăng chưa chắc là nguyên nhân", notes(`
Lỗi hiểu thường gặp — "Thấy hai thứ cùng tăng là kết luận được cái này gây ra cái kia."
Tháng nào chi nhiều cho quảng cáo thì doanh thu cũng cao — chưa chắc quảng cáo gây ra doanh thu: có thể cả hai cùng tăng vì mùa lễ Tết. Nghiên cứu tương quan chỉ cho biết hai yếu tố đi cùng nhau; muốn nói nhân quả phải có thử nghiệm kiểm soát được các yếu tố khác.`,
      "Lỗi hiểu thường gặp. Hỏi lớp: \"Còn yếu tố nào khác có thể làm cả hai cùng tăng?\""), S3);
    card(s, 4.9, 1.85, 3.5, 1.2, COL.yellow);
    T(s, "Mùa Tết", { x: 4.9, y: 1.85, w: 3.5, h: 1.2, align: "center", valign: "middle", bold: true, fontSize: 30, color: COL.bg });
    line(s, 5.4, 3.05, -2.2, 1.65, "yellow", { endArrowType: "triangle" });
    line(s, 7.9, 3.05, 2.2, 1.65, "yellow", { endArrowType: "triangle" });
    card(s, MX, 4.75, 4.6, 1.3);
    T(s, "Chi quảng cáo ↑", { x: MX, y: 4.75, w: 4.6, h: 1.3, align: "center", valign: "middle", bold: true, fontSize: 28 });
    card(s, 8.13, 4.75, 4.6, 1.3);
    T(s, "Doanh thu ↑", { x: 8.13, y: 4.75, w: 4.6, h: 1.3, align: "center", valign: "middle", bold: true, fontSize: 28 });
    line(s, 5.35, 5.4, 2.65, 0, "pink", { dashType: "dash", endArrowType: "triangle" });
    T(s, "gây ra?", { x: 5.3, y: 5.55, w: 2.75, h: 0.55, align: "center", bold: true, color: COL.pink });
    T(s, "Tương quan ≠ nhân quả", { x: MX, y: 6.3, w: 7, h: 0.55, bold: true, color: COL.pink });
  }

  {
    const s = newSlide("Định tính để hiểu sâu, định lượng để đo trên diện rộng", notes(`
Tiêu chí 3 — Theo tính chất dữ liệu: định tính hay định lượng?
- Mục đích: định tính = khám phá sâu, hiểu động cơ, xây dựng lý thuyết (quy nạp); định lượng = đo lường, kiểm định giả thuyết (suy diễn).
- Dữ liệu: định tính = lời nói, văn bản, hình ảnh, âm thanh; định lượng = con số, tỷ lệ, thống kê.
- Cỡ mẫu: định tính = nhỏ, không đại diện; định lượng = lớn, hướng tới đại diện.
- Phương pháp: định tính = phỏng vấn sâu, thảo luận nhóm, netnography; định lượng = khảo sát, thử nghiệm.

Xu hướng hiện nay là kết hợp cả hai (mixed methods): định tính trước để hiểu vấn đề và xây dựng câu hỏi, định lượng sau để đo lường trên mẫu lớn.

Đến Buổi 5, mỗi nhóm sẽ chọn đi theo hướng định tính (3 chương) hay định lượng (5 chương). Hôm nay chỉ cần hiểu sự khác nhau.

Chuyển ý: Lý thuyết đủ rồi — thử dùng ngay.`,
      "\"Buổi 5 nhóm chọn hướng. Hôm nay chỉ cần thấy khác nhau ở đâu.\""), S3);
    const rows = [["Mục đích", "Hiểu sâu, xây dựng lý thuyết", "Đo lường, kiểm định giả thuyết"], ["Dữ liệu", "Lời nói, văn bản, hình ảnh", "Con số, tỷ lệ"], ["Cỡ mẫu", "Nhỏ", "Lớn, hướng tới đại diện"], ["Phương pháp", "Phỏng vấn sâu, thảo luận nhóm", "Khảo sát, thử nghiệm"]];
    const x0 = MX, x1 = 3.3, x2 = 8.1, w1 = 4.6;
    card(s, x1 - 0.15, 1.85, w1 + 0.1, 0.75, COL.purple);
    T(s, "Định tính", { x: x1, y: 1.85, w: w1, h: 0.75, valign: "middle", bold: true, fontSize: 28 });
    card(s, x2 - 0.15, 1.85, w1 + 0.15, 0.75, COL.blue);
    T(s, "Định lượng", { x: x2, y: 1.85, w: w1, h: 0.75, valign: "middle", bold: true, fontSize: 28, color: COL.bg });
    rows.forEach(([l, a, b], i) => {
      const y = 2.75 + i * 0.92;
      if (i % 2 === 0) card(s, x0 - 0.1, y - 0.04, CW + 0.2, 0.9, COL.card);
      T(s, l, { x: x0, y, w: 2.5, h: 0.82, valign: "middle", bold: true, color: COL.muted });
      T(s, a, { x: x1, y, w: w1, h: 0.82, valign: "middle" });
      T(s, b, { x: x2, y, w: w1, h: 0.82, valign: "middle" });
    });
    T(s, [{ text: "Kết hợp cả hai = ", options: {} }, { text: "mixed methods", options: { bold: true, italic: true } }], { x: MX, y: 6.45, w: 9, h: 0.55, color: COL.green });
  }

  // ---------------- S4 · Phân loại nhanh ----------------
  const S4 = "S4 · Phân loại nhanh";
  const FINGERS = [["1", "Khám phá", "green"], ["2", "Mô tả", "yellow"], ["3", "Tương quan", "blue"], ["4", "Nhân quả", "pink"]];
  {
    const s = newSlide("Phân loại nhanh: 30 giây bàn với bạn, rồi giơ tay", notes(`
(Xem phiếu W1_activity_phan_loai_nhanh.md — kịch bản, 6 tình huống và đáp án.)

Kịch bản mở đầu: "Bây giờ mình thử dùng ngay ba tiêu chí vừa học. Tôi sẽ đọc 6 tình huống. Mỗi tình huống, các bạn có 30 giây bàn với bạn bên cạnh, rồi khi tôi đếm 3–2–1 thì giơ tay: 1 ngón là khám phá, 2 ngón là mô tả, 3 ngón là tương quan, 4 ngón là nhân quả. Cả lớp giơ cùng lúc, không nhìn bạn khác. Bắt đầu nhé."

Mốc thời gian: phút 40 đọc kịch bản, chiếu tình huống 1 · phút 41–46: 6 tình huống, mỗi tình huống đọc → 30" thảo luận → 3–2–1 giơ tay → nói đáp án trong 1 câu · phút 46–48: chữa kỹ 2 tình huống lớp chia rẽ nhiều nhất.`,
      "Theo kịch bản trong W1_activity_phan_loai_nhanh.md. Đếm 3–2–1, cả lớp giơ cùng lúc.\nNếu ít bạn giơ tay: nhắc \"sai cũng không sao — đây là luyện tập\", giảng viên giơ tay làm mẫu."), S4);
    const cw = 2.85, gap = 0.233;
    for (let i = 0; i < 4; i++) {
      const [n, t, k] = FINGERS[i], x = MX + i * (cw + gap);
      card(s, x, 2.0, cw, 3.3);
      await iconDot(s, "FaHandPaper", x + 0.8, 2.25, 1.25, k);
      T(s, `${n} ngón`, { x, y: 3.65, w: cw, h: 0.65, align: "center", bold: true, fontSize: 30, color: COL[k] });
      T(s, t, { x, y: 4.35, w: cw, h: 0.65, align: "center", fontSize: 26 });
    }
    T(s, "30 giây bàn với bạn bên cạnh → đếm 3–2–1 → cả lớp giơ cùng lúc", { x: MX, y: 5.75, w: CW, h: 0.9, color: COL.yellow, bold: true });
  }

  const CASES = [
    ["Một thương hiệu kem thấy doanh số mùa hè giảm đột ngột mà không rõ lý do. Họ đi trò chuyện với khách hàng và chủ các cửa hàng bán lẻ để tìm hiểu chuyện gì đang xảy ra.",
      "Khám phá · Định tính · Ứng dụng. Dấu hiệu: \"không rõ lý do\", đi trò chuyện để tìm hiểu."],
    ["Một ứng dụng giao đồ ăn muốn biết ai là người đặt hàng vào cuối tuần: độ tuổi, giờ đặt, số tiền mỗi đơn.",
      "Mô tả · Định lượng · Ứng dụng. Dấu hiệu: ai, khi nào, bao nhiêu — mô tả đặc điểm."],
    ["Một shop thời trang trực tuyến chia ngẫu nhiên khách truy cập thành hai nhóm: nhóm A xem ảnh áo treo trên móc, nhóm B xem ảnh người mẫu mặc. Sau hai tuần, so sánh tỷ lệ mua của hai nhóm.",
      "Nhân quả · Định lượng · Ứng dụng. Dấu hiệu: chia ngẫu nhiên, chỉ thay đổi một yếu tố, so sánh kết quả."],
    ["Một chuỗi cà phê muốn biết chi phí quảng cáo Facebook hằng tháng và doanh thu hằng tháng có biến động cùng chiều với nhau không, và mức độ ra sao.",
      "Tương quan · Định lượng · Ứng dụng. Dấu hiệu: \"biến động cùng chiều\", \"mức độ\" — không có thử nghiệm.\nTình huống 3 và 4 hay bị nhầm. Nhiều bạn chọn 4 = nhân quả vì nghĩ \"quảng cáo thì phải làm tăng doanh thu\". Câu chốt: có thể cả hai cùng tăng vì mùa Tết; chỉ khi chia ngẫu nhiên và chỉ đổi một yếu tố như tình huống 3 thì mới nói được nhân quả."],
    ["Một nhóm giảng viên đại học kiểm định mô hình về ảnh hưởng của niềm tin đến ý định mua hàng trực tuyến của người tiêu dùng trẻ, để đóng góp cho lý thuyết hành vi người tiêu dùng.",
      "Tương quan (kiểm định mô hình) · Định lượng · Hàn lâm. Dấu hiệu: đóng góp cho lý thuyết, không gắn với một doanh nghiệp.\nCó thể gây tranh luận (tương quan hay nhân quả). Chấp nhận \"tương quan\" và nói: điểm chính của tình huống này là hàn lâm — hỏi lớp để nhấn tiêu chí 1."],
    ["Một thương hiệu mỹ phẩm nội địa phỏng vấn sâu 12 khách hàng trung thành để hiểu vì sao họ chọn mỹ phẩm Việt thay vì hàng ngoại.",
      "Khám phá · Định tính · Ứng dụng. Dấu hiệu: phỏng vấn sâu, cỡ mẫu nhỏ, \"hiểu vì sao\".\nMột số bạn chọn \"mô tả\" vì \"mô tả lý do\". Câu chốt: 12 người, hỏi sâu \"vì sao\" → khám phá, định tính; không dùng để nói \"bao nhiêu phần trăm khách hàng\"."],
  ];
  CASES.forEach(([txt, ans], i) => {
    const s = newSlide(`Tình huống ${i + 1}/6: đây là loại nghiên cứu nào?`, notes(
      `Đọc tình huống → 30" thảo luận theo cặp → đếm 3–2–1 giơ tay → nhìn lớp, nói đáp án trong 1 câu.\n\nĐÁP ÁN: ${ans}`,
      "Sau đó có thể hỏi thêm: định tính hay định lượng? hàn lâm hay ứng dụng?\nNếu chạy quá giờ: bỏ tình huống 5; giữ 3 và 4 vì là cặp quan trọng nhất."), S4);
    card(s, MX, 1.85, CW, 3.6);
    T(s, txt, { x: MX + 0.4, y: 2.05, w: CW - 0.8, h: 3.2, valign: "middle", fontSize: 30 });
    const lw = [3.0, 2.4, 3.5, 3.0];
    let lx = MX;
    FINGERS.forEach(([n, t, k], j) => {
      const x = lx; lx += lw[j] + 0.07;
      dot(s, x, 5.8, 0.8, k, n, 28);
      T(s, t, { x: x + 0.95, y: 5.8, w: lw[j] - 0.95, h: 0.8, valign: "middle", bold: true, color: COL[k] });
    });
  });

  {
    const s = newSlide("Đáp án: dấu hiệu nhận biết từng loại", notes(`
Đáp án và dấu hiệu nhận biết:
1. Khám phá · Định tính · Ứng dụng — "không rõ lý do", đi trò chuyện để tìm hiểu.
2. Mô tả · Định lượng · Ứng dụng — ai, khi nào, bao nhiêu: mô tả đặc điểm.
3. Nhân quả · Định lượng · Ứng dụng — chia ngẫu nhiên, chỉ thay đổi một yếu tố, so sánh kết quả.
4. Tương quan · Định lượng · Ứng dụng — "biến động cùng chiều", "mức độ": không có thử nghiệm.
5. Tương quan (kiểm định mô hình) · Định lượng · Hàn lâm — đóng góp cho lý thuyết, không gắn với một doanh nghiệp.
6. Khám phá · Định tính · Ứng dụng — phỏng vấn sâu, cỡ mẫu nhỏ, "hiểu vì sao".

Thảo luận chung: Vì sao tình huống 3 cho phép nói "ảnh người mẫu làm tăng tỷ lệ mua", còn tình huống 4 thì không?`,
      "Hiện sau khi lớp đã trả lời. Chữa kỹ 2 tình huống lớp chia rẽ nhiều nhất, chắc chắn có tình huống 3 và 4."), S4);
    const head = ["#", "Thiết kế", "Dữ liệu", "Mục tiêu"];
    const data = [["1", "Khám phá", "Định tính", "Ứng dụng"], ["2", "Mô tả", "Định lượng", "Ứng dụng"], ["3", "Nhân quả", "Định lượng", "Ứng dụng"], ["4", "Tương quan", "Định lượng", "Ứng dụng"], ["5", "Tương quan", "Định lượng", "Hàn lâm"], ["6", "Khám phá", "Định tính", "Ứng dụng"]];
    const kOf = { "Khám phá": "green", "Mô tả": "yellow", "Tương quan": "blue", "Nhân quả": "pink" };
    const xs = [MX, 1.7, 5.6, 9.2], ws = [0.9, 3.7, 3.4, 3.53];
    head.forEach((h, j) => T(s, h, { x: xs[j], y: 1.8, w: ws[j], h: 0.6, valign: "middle", bold: true, color: COL.muted }));
    data.forEach((r, i) => {
      const y = 2.4 + i * 0.66;
      if (i === 2 || i === 3) card(s, MX - 0.15, y - 0.04, CW + 0.3, 0.64, COL.card);
      r.forEach((c, j) => {
        const opt = { x: xs[j], y, w: ws[j], h: 0.56, valign: "middle" };
        if (j === 1) Object.assign(opt, { bold: true, color: COL[kOf[c]] });
        if (j === 3 && c === "Hàn lâm") Object.assign(opt, { bold: true, color: COL.orange });
        T(s, c, opt);
      });
    });
    T(s, "3 và 4 hay bị nhầm: chỉ 3 có chia ngẫu nhiên", { x: MX, y: 6.5, w: 10.5, h: 0.5, color: COL.yellow, italic: true });
  }

  // ---------------- Giải lao ----------------
  const SB = "Giải lao";
  {
    const s = newSlide("Giải lao 15 phút", notes("(Giải lao 48–63'.)", "Điền giờ quay lại trên slide trước buổi học."), SB);
    await iconDot(s, "FaClock", 5.42, 1.9, 2.5, "orange");
    T(s, "15 phút", { x: MX, y: 4.55, w: CW, h: 1.0, align: "center", valign: "middle", fontSize: 54, bold: true, color: COL.orange });
    T(s, "Quay lại lúc  ___ : ___", { x: MX, y: 5.65, w: CW, h: 0.8, align: "center", valign: "middle", fontSize: 32 });
  }

  // ---------------- S5 · Tiến trình & hệ thống ----------------
  const S5 = "S5 · Tiến trình, hệ thống thông tin, người làm và người dùng";
  {
    const s = newSlide("Mọi nghiên cứu đi qua sáu bước, theo đúng thứ tự", notes(`
Mọi nghiên cứu marketing tiêu chuẩn đều đi qua một tiến trình tuần tự. Slide bài giảng và các video đều dùng 6 bước, dù tên gọi hơi khác nhau:
1. Xác định vấn đề nghiên cứu
2. Xác định mục tiêu nghiên cứu
3. Xây dựng mô hình nghiên cứu
4. Thu thập dữ liệu
5. Chuẩn bị và phân tích dữ liệu
6. Trình bày kết quả

(Ghi chú: một số video gộp bước 2–3 thành "lập kế hoạch nghiên cứu" và thêm bước cuối "ra quyết định / hành động". Có thể nói thêm: sau bước 6 là quyết định của nhà quản trị — nằm ngoài nghiên cứu nhưng là lý do nghiên cứu tồn tại.)

Thay vì đọc định nghĩa từng bước, chúng ta đi qua một ví dụ từ đầu đến cuối: chuỗi trà sữa gần trường đại học (giả định).`,
      "\"Thay vì định nghĩa từng bước, mình đi qua một ví dụ.\" [BOARD: vẽ 6 ô trống lên bảng, điền dần theo ví dụ trà sữa]"), S5);
    const st = ["Vấn đề", "Mục tiêu", "Mô hình", "Thu thập", "Chuẩn bị & phân tích", "Trình bày"];
    const ks = ["pink", "orange", "yellow", "green", "blue", "purple"];
    st.forEach((t, i) => {
      const y = 1.8 + i * 0.83;
      dot(s, MX, y, 0.7, ks[i], i + 1, 26);
      card(s, MX + 0.95, y, 6.3, 0.7, i === 0 ? COL[ks[0]] : COL.card);
      T(s, t, { x: MX + 1.25, y, w: 5.9, h: 0.7, valign: "middle", bold: i === 0, color: i === 0 ? COL.bg : COL.text });
    });
    card(s, 8.6, 1.8, 4.13, 4.85);
    await iconDot(s, "FaMugHot", 9.9, 2.15, 1.5, "yellow");
    T(s, "Ví dụ xuyên suốt: chuỗi trà sữa gần trường", { x: 8.85, y: 3.9, w: 3.63, h: 1.6, align: "center", bold: true, fontSize: 26 });
    T(s, "(giả định)", { x: 8.85, y: 5.6, w: 3.63, h: 0.5, align: "center", color: COL.muted, italic: true });
  }

  {
    const s = newSlide("“Có nên giảm giá?” là câu hỏi quản trị; “Vì sao sinh viên mua ít đi?” mới là vấn đề nghiên cứu", notes(`
Ví dụ xuyên suốt (giả định): chuỗi trà sữa gần trường đại học.

Bước 1 — Xác định vấn đề. Giám đốc một chuỗi trà sữa thấy doanh số ở các cửa hàng gần trường đại học giảm rõ rệt so với cùng kỳ năm trước. Câu hỏi của giám đốc là: "Có nên giảm giá không?" — đó là vấn đề quản trị (cần làm gì). Nhà nghiên cứu phải chuyển nó thành vấn đề nghiên cứu (cần biết gì): "Những yếu tố nào khiến sinh viên mua ít hơn?"

(Hỏi: "Còn những nguyên nhân nào có thể khiến doanh số giảm?" — để lớp đưa ra 4–5 khả năng: giá, chất lượng, đối thủ, kỳ nghỉ, dịch vụ giao hàng… Nhấn mạnh: chưa nghiên cứu thì chưa biết cái nào đúng.)`,
      "Hỏi lớp đưa ra 4–5 nguyên nhân có thể. Nhấn: chưa nghiên cứu thì chưa biết cái nào đúng. Ghi rõ đây là tình huống giả định."), S5);
    T(s, "Tình huống (giả định): doanh số trà sữa gần trường giảm", { x: MX, y: 1.85, w: CW, h: 0.6, color: COL.muted, italic: true });
    const cols = [["Vấn đề quản trị", "Cần LÀM gì?", "“Có nên giảm giá không?”", "orange"], ["Vấn đề nghiên cứu", "Cần BIẾT gì?", "“Những yếu tố nào khiến sinh viên mua ít hơn?”", "green"]];
    cols.forEach(([h, q, ex, k], i) => {
      const x = i === 0 ? MX : 7.33;
      card(s, x, 2.7, 5.4, 3.9);
      T(s, h, { x: x + 0.35, y: 2.95, w: 4.7, h: 0.6, bold: true, fontSize: 28, color: COL[k] });
      card(s, x + 0.35, 3.7, 3.0, 0.65, COL[k]);
      T(s, q, { x: x + 0.35, y: 3.7, w: 3.0, h: 0.65, align: "center", valign: "middle", bold: true, color: COL.bg });
      T(s, ex, { x: x + 0.35, y: 4.6, w: 4.7, h: 1.8, fontSize: 28, italic: true });
    });
    arrow(s, 6.15, 4.25, 1.0, 0.8, "yellow");
  }

  {
    const s = newSlide("Xác định sai vấn đề thì cả nghiên cứu đi sai hướng", notes(`
Để chuyển vấn đề quản trị thành vấn đề nghiên cứu, nhà nghiên cứu thảo luận với người ra quyết định, hỏi ý kiến người trong ngành, xem dữ liệu bán hàng có sẵn, và có thể phỏng vấn thử vài khách hàng.

Đây là bước quan trọng nhất: xác định sai vấn đề thì mọi bước sau đều đi sai hướng. Nếu giám đốc cứ thế giảm giá mà lý do thật là một đối thủ mới mở ngay cổng trường với không gian ngồi học miễn phí — giảm giá chỉ làm mất lợi nhuận.`,
      "Nếu lý do thật là đối thủ mới mở cạnh cổng trường, giảm giá chỉ mất lợi nhuận."), S5);
    const its = [["FaComments", "Thảo luận với người ra quyết định", "green"], ["FaUserGraduate", "Hỏi chuyên gia trong ngành", "blue"], ["FaChartBar", "Phân tích dữ liệu thứ cấp", "yellow"], ["FaSearch", "Nghiên cứu định tính thăm dò", "orange"]];
    for (let i = 0; i < 4; i++) {
      const x = MX + (i % 2) * 6.25, y = 1.95 + Math.floor(i / 2) * 1.9;
      card(s, x, y, 5.85, 1.6);
      await iconDot(s, its[i][0], x + 0.3, y + 0.3, 1.0, its[i][2]);
      T(s, its[i][1], { x: x + 1.6, y, w: 4.05, h: 1.6, valign: "middle", fontSize: 26 });
    }
    T(s, "Đối thủ mới cạnh cổng trường? → Giảm giá chỉ mất lợi nhuận", { x: MX, y: 5.9, w: CW, h: 0.9, color: COL.pink, bold: true });
  }

  {
    const s = newSlide("Từ mục tiêu đến mô hình: quyết định mình sẽ đo cái gì", notes(`
Bước 2 — Mục tiêu nghiên cứu. Trả lời câu hỏi "nghiên cứu này cần biết những gì?" Ví dụ: (1) xác định các lý do sinh viên giảm mua; (2) so sánh đánh giá của sinh viên về chuỗi với đối thủ chính; (3) đề xuất giải pháp.

Bước 3 — Mô hình nghiên cứu. Phác thảo các yếu tố có thể ảnh hưởng: biến phụ thuộc là tần suất mua của sinh viên; biến độc lập có thể là giá, chất lượng đồ uống, khuyến mãi, không gian, sự tiện lợi khi đặt hàng. Mô hình cho biết mình sẽ đo cái gì.`,
      "\"Biến độc lập / phụ thuộc sẽ học kỹ ở Buổi 6 và 9 — hôm nay chỉ cần thấy hình dạng.\""), S5);
    card(s, MX, 1.85, 4.3, 4.85);
    T(s, "Mục tiêu", { x: MX + 0.3, y: 2.05, w: 3.7, h: 0.6, bold: true, fontSize: 28, color: COL.yellow });
    ["Lý do sinh viên giảm mua", "So sánh với đối thủ chính", "Đề xuất giải pháp"].forEach((t, i) => {
      const y = 2.85 + i * 1.2;
      dot(s, MX + 0.3, y + 0.1, 0.6, "yellow", i + 1);
      T(s, t, { x: MX + 1.1, y, w: 3.0, h: 0.95, valign: "middle" });
    });
    const iv = ["Giá", "Chất lượng", "Khuyến mãi", "Không gian", "Tiện lợi"];
    T(s, "Biến độc lập", { x: 5.3, y: 1.85, w: 3.0, h: 0.5, color: COL.muted, bold: true });
    iv.forEach((t, i) => {
      const y = 2.4 + i * 0.86;
      card(s, 5.3, y, 2.8, 0.7, COL.card);
      T(s, t, { x: 5.3, y, w: 2.8, h: 0.7, align: "center", valign: "middle" });
      line(s, 8.1, y + 0.35, 1.25, 4.5 - (y + 0.35), "blue", { endArrowType: "triangle" });
    });
    T(s, "Biến phụ thuộc", { x: 9.45, y: 3.25, w: 3.28, h: 0.5, color: COL.muted, bold: true });
    card(s, 9.45, 3.8, 3.28, 1.4, COL.blue);
    T(s, "Tần suất mua", { x: 9.45, y: 3.8, w: 3.28, h: 1.4, align: "center", valign: "middle", bold: true, fontSize: 28, color: COL.bg });
  }

  {
    const s = newSlide("Thu thập, phân tích, trình bày: dữ liệu thô phải thành câu trả lời cho nhà quản trị", notes(`
Bước 4 — Thu thập dữ liệu. Có thể kết hợp: dữ liệu bán hàng nội bộ (thứ cấp), phỏng vấn sâu khoảng 10 sinh viên (định tính), rồi khảo sát khoảng 200 sinh viên (định lượng). Yêu cầu: công cụ thiết kế cẩn thận, người đi thu thập được hướng dẫn kỹ để tránh sai lệch.

Bước 5 — Chuẩn bị và phân tích. Kiểm tra và hiệu chỉnh phiếu (loại phiếu thiếu, mâu thuẫn), mã hóa câu trả lời thành số, nhập và làm sạch, rồi phân tích — ví dụ so sánh mức độ hài lòng của sinh viên giữa chuỗi và đối thủ.

Bước 6 — Trình bày kết quả. Một báo cáo khách quan, dễ hiểu cho nhà quản trị, có bảng biểu và đề xuất hành động. Giám đốc không đọc dữ liệu thô — họ cần câu trả lời cho câu hỏi ban đầu.`,
      "\"Giám đốc không đọc dữ liệu thô.\" Bỏ chữ \"hồi quy\" trên slide UEF #12 — vượt phạm vi học phần (chỉ là điểm cộng)."), S5);
    const cols = [
      ["4", "Thu thập", "green", ["Dữ liệu thứ cấp", "Phỏng vấn ~10 SV", "Khảo sát ~200 SV"]],
      ["5", "Chuẩn bị & phân tích", "blue", ["Hiệu chỉnh", "Mã hóa", "Nhập & làm sạch", "Phân tích"]],
      ["6", "Trình bày", "purple", ["Báo cáo khách quan", "Có đề xuất hành động"]],
    ];
    const cw = 3.85, gap = 0.29;
    cols.forEach(([n, h, k, its], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 4.75);
      dot(s, x + 0.3, 2.2, 0.75, k, n, 28);
      T(s, h, { x: x + 1.2, y: 2.2, w: cw - 1.35, h: 0.75, valign: "middle", bold: true, fontSize: 24, color: k === "purple" ? COL.orange : COL[k] });
      its.forEach((t, j) => {
        T(s, (i === 1 && j > 0 ? "→ " : "• ") + t, { x: x + 0.35, y: 3.25 + j * (i === 2 ? 1.1 : 0.78), w: cw - 0.6, h: i === 2 ? 1.0 : 0.7, valign: "middle" });
      });
    });
  }

  {
    const s = newSlide("Ba lỗi khiến nghiên cứu vô giá trị", notes(`
Ba lỗi kinh điển (từ các video bài giảng):
1. Hỏi sai đối tượng — muốn biết sở thích thời trang của giới trẻ mà đi hỏi người trên 40 tuổi; bán điện thoại giá rẻ mà hỏi người giàu (tình huống mở đầu buổi học).
2. Không thiết kế trước — in 1.000 phiếu khảo sát rồi mới phát hiện câu hỏi sai: mất tiền, mất thời gian, phải làm lại.
3. Quyết định theo cảm tính — dùng giả định hoặc ý kiến cá nhân thay cho dữ liệu.

Lỗi hiểu thường gặp — "Mẫu càng lớn thì kết quả càng đúng." Hỏi 5.000 người giàu về điện thoại giá rẻ vẫn sai. Đúng đối tượng quan trọng hơn đông đối tượng. Buổi 8 sẽ học kỹ về chọn mẫu.

Chuyển ý: Một nghiên cứu như ví dụ trà sữa là một dự án — có bắt đầu, có kết thúc. Nhưng doanh nghiệp cần thông tin mỗi ngày. Vậy nghiên cứu marketing nằm ở đâu trong dòng thông tin đó?`,
      "Nối lại tình huống mở đầu. Ví dụ từ video: hỏi người trên 40 tuổi về thời trang giới trẻ."), S5);
    const er = ["Hỏi sai đối tượng", "In 1.000 phiếu rồi mới thấy câu hỏi sai", "Quyết định theo cảm tính"];
    for (let i = 0; i < 3; i++) {
      const y = 1.95 + i * 1.5;
      card(s, MX, y, 7.6, 1.25);
      await iconDot(s, "FaTimes", MX + 0.25, y + 0.2, 0.85, "pink");
      T(s, er[i], { x: MX + 1.35, y, w: 6.05, h: 1.25, valign: "middle", fontSize: 26 });
    }
    card(s, 8.65, 1.95, 4.08, 4.25, COL.yellow);
    T(s, "Mẫu lớn ≠ mẫu đúng", { x: 8.95, y: 2.2, w: 3.5, h: 1.6, bold: true, fontSize: 34, color: COL.bg });
    T(s, "Hỏi 5.000 người giàu về điện thoại giá rẻ vẫn sai", { x: 8.95, y: 3.9, w: 3.5, h: 2.1, color: COL.bg });
  }

  {
    const s = newSlide("Tình báo marketing theo dõi liên tục; nghiên cứu marketing trả lời một câu hỏi cụ thể", notes(`
Hệ thống thông tin marketing (MIS) là hệ thống tích hợp con người, thiết bị và quy trình để thu thập, phân tích và phân phối thông tin chính xác, kịp thời, hỗ trợ nhà quản lý ra quyết định. Gồm bốn bộ phận:
1. Hệ thống báo cáo nội bộ — nhìn vào trong: đơn hàng, doanh số, tồn kho, kế toán. Sẵn có, chi phí thấp; dùng để đánh giá kết quả đã qua.
2. Hệ thống tình báo marketing — nhìn ra ngoài: theo dõi liên tục đối thủ, xu hướng, môi trường, qua báo chí, nhân viên bán hàng, nhà phân phối, người mua bí mật (mystery shopper), dữ liệu mua ngoài. Ví dụ từ video: các ứng dụng giao đồ ăn theo dõi chương trình khuyến mãi của nhau trước khi tung ưu đãi của mình.
3. Hệ thống hỗ trợ ra quyết định (MDSS) — cơ sở dữ liệu, mô hình phân tích, giao diện và kho tri thức giúp nhà quản lý ra quyết định nhanh dựa trên bằng chứng — ví dụ mô hình dự báo doanh số.
4. Hệ thống nghiên cứu marketing — giải quyết các bài toán cụ thể, tại một thời điểm, mà ba bộ phận kia không trả lời được.

Cách phân biệt dễ nhớ nhất: tình báo marketing là một dòng chảy thông tin liên tục; nghiên cứu marketing là trả lời một câu hỏi cụ thể. Báo cáo nội bộ cho giám đốc trà sữa biết doanh số giảm; chỉ nghiên cứu marketing mới trả lời được vì sao.`,
      "\"Báo cáo nội bộ cho biết doanh số giảm; chỉ nghiên cứu cho biết vì sao.\" MDSS chỉ nêu 1 câu."), S5);
    const parts = [["Báo cáo nội bộ", "nhìn vào trong", "green"], ["Tình báo marketing", "nhìn ra ngoài", "blue"], ["MDSS", "công cụ ra quyết định", "orange"], ["Nghiên cứu marketing", "dự án", "pink"]];
    const cw = 2.85, gap = 0.233;
    parts.forEach(([h, sub, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 2.2, i === 3 ? COL[k] : COL.card);
      T(s, h, { x: x + 0.2, y: 2.1, w: cw - 0.4, h: 1.15, valign: "middle", bold: true, fontSize: 26, color: i === 3 ? COL.bg : COL[k] });
      T(s, sub, { x: x + 0.2, y: 3.3, w: cw - 0.4, h: 0.7, color: i === 3 ? COL.bg : COL.text });
    });
    // Dòng thông tin liên tục + các dự án nghiên cứu rời rạc
    T(s, "Dòng thông tin liên tục: báo cáo nội bộ & tình báo", { x: MX, y: 4.5, w: CW, h: 0.5, color: COL.blue });
    arrow(s, MX, 5.35, CW, 0.5, "blue");
    [1.6, 5.4, 9.2].forEach((x) => {
      card(s, x, 5.05, 2.4, 1.1, COL.pink);
      T(s, "Dự án NC", { x, y: 5.05, w: 2.4, h: 1.1, align: "center", valign: "middle", bold: true, color: COL.bg });
    });
    T(s, "Nghiên cứu: từng dự án rời rạc", { x: MX, y: 6.3, w: 8, h: 0.5, color: COL.pink });
  }

  {
    const s = newSlide("Bạn sẽ hoặc làm, hoặc dùng nghiên cứu — người dùng giỏi biết nghiên cứu nào đáng tin", notes(`
Người thực hiện (the doers):
- Nhân sự nội bộ (phòng marketing, bán hàng): hiểu doanh nghiệp, chi phí thấp, bảo mật — nhưng thiếu chuyên môn sâu, dễ chủ quan.
- Công ty nghiên cứu chuyên nghiệp (ví dụ Nielsen, Kantar, Ipsos, GfK): chuyên môn cao, công nghệ, dữ liệu quy mô lớn, khách quan — nhưng chi phí cao.
- Cơ quan nhà nước, tổ chức phi chính phủ (ví dụ cơ quan thống kê quốc gia): dữ liệu vĩ mô (dân số, lao động), tin cậy, thường miễn phí — nhưng không theo nhu cầu riêng của doanh nghiệp.

[VERIFY: slide UEF ghi "Tổng cục Thống kê" — từ 2025 đã tổ chức lại thành Cục Thống kê thuộc Bộ Tài chính; GfK nay thuộc NielsenIQ — kiểm tra tên gọi hiện hành trước khi nhắc tên]

Người sử dụng (the users):
- Nhà quản lý nội bộ — dùng nghiên cứu để định hướng chiến lược và ra quyết định. Họ cần hiểu nghiên cứu ở mức cơ bản để đặt đúng câu hỏi và phối hợp với người thực hiện.
- Bên mua thông tin — doanh nghiệp, cá nhân bên ngoài mua báo cáo có sẵn hoặc đặt hàng riêng. Họ đánh giá báo cáo theo: uy tín, phù hợp mục tiêu, cập nhật, độ tin cậy về phương pháp, tốc độ, chi phí hợp lý.

Một câu để kết phần lý thuyết hôm nay: các bạn — sau này dù làm ở công ty nghiên cứu hay ở phòng marketing — đều sẽ hoặc làm, hoặc dùng nghiên cứu. Người dùng giỏi là người biết nghiên cứu nào đáng tin.`,
      "Nếu trễ giờ, chỉ dùng slide này 2 phút (theo phương án dự phòng)."), S5);
    T(s, "Người thực hiện", { x: MX, y: 1.85, w: 7.3, h: 0.55, bold: true, fontSize: 28, color: COL.yellow });
    const doers = [["Nội bộ", "hiểu DN, rẻ", "dễ chủ quan", "green"], ["Công ty chuyên nghiệp", "chuyên sâu, khách quan", "chi phí cao", "blue"], ["Cơ quan nhà nước", "vĩ mô, miễn phí", "không theo yêu cầu", "orange"]];
    doers.forEach(([h, p, m, k], i) => {
      const y = 2.5 + i * 1.42;
      card(s, MX, y, 7.5, 1.3);
      T(s, h, { x: MX + 0.25, y: y + 0.1, w: 6.8, h: 0.5, bold: true, color: COL[k] });
      T(s, [{ text: "+ " + p, options: { color: COL.green } }, { text: "   − " + m, options: { color: COL.pink } }], { x: MX + 0.25, y: y + 0.65, w: 7.15, h: 0.5 });
    });
    T(s, "Người sử dụng", { x: 8.45, y: 1.85, w: 4.28, h: 0.55, bold: true, fontSize: 28, color: COL.yellow });
    card(s, 8.45, 2.5, 4.28, 4.14);
    T(s, "Nhà quản lý nội bộ", { x: 8.7, y: 2.65, w: 4.0, h: 0.5, bold: true });
    T(s, "Bên mua thông tin xét:", { x: 8.7, y: 3.25, w: 4.0, h: 0.5, bold: true });
    T(s, "uy tín · phù hợp · cập nhật · phương pháp · tốc độ · chi phí", { x: 8.7, y: 3.8, w: 3.95, h: 2.6, color: COL.muted });
  }

  // ---------------- S6 · Kiểm tra nhanh ----------------
  const S6 = "S6 · Kiểm tra nhanh";
  {
    const s = newSlide("Ba câu hỏi kiểm tra nhanh", notes(`
(Chiếu 3 câu, chỉ định phát biểu — mỗi câu 1 bạn, gọi ngẫu nhiên theo danh sách.)

1. Trong 6 bước, bước nào quan trọng nhất? Vì sao?
   Mong đợi: bước 1 — xác định sai vấn đề thì cả nghiên cứu đi sai hướng.
2. Nghiên cứu marketing khác tình báo marketing ở điểm nào?
   Mong đợi: nghiên cứu = trả lời câu hỏi cụ thể, tại một thời điểm, dạng dự án; tình báo = theo dõi liên tục môi trường bên ngoài.
3. Một doanh nghiệp nhỏ có nên tự làm nghiên cứu hay thuê công ty chuyên nghiệp?
   Mong đợi: tùy — tự làm thì rẻ, hiểu doanh nghiệp nhưng dễ chủ quan; thuê thì chuyên nghiệp, khách quan nhưng tốn kém. Câu trả lời tốt nêu được cả hai mặt.

(Nếu câu 1 hoặc 2 nhiều bạn trả lời sai: dành 1 phút nhắc lại, ghi vào ghi chú sau buổi để ôn ở đầu Buổi 2.)`,
      "Chỉ định phát biểu, mỗi câu 1 bạn."), S6);
    const qs = ["Bước nào quan trọng nhất? Vì sao?", "Nghiên cứu marketing khác tình báo marketing ở đâu?", "Doanh nghiệp nhỏ nên tự làm hay thuê công ty nghiên cứu?"];
    const ks = ["green", "blue", "orange"];
    qs.forEach((q, i) => {
      const y = 2.0 + i * 1.55;
      dot(s, MX, y + 0.1, 1.05, ks[i], i + 1, 36);
      card(s, MX + 1.35, y, 10.78, 1.25);
      T(s, q, { x: MX + 1.7, y, w: 10.2, h: 1.25, valign: "middle", fontSize: 28 });
    });
  }

  // ---------------- S7 · Thực hành nhóm ----------------
  const S7 = "S7 · Thực hành nhóm";
  {
    const s = newSlide("Xưởng đề tài (45'): từ quyết định kinh doanh đến vấn đề nghiên cứu", notes(`
(Xem phiếu W1_activity_xuong_de_tai.md — kịch bản, bốn chặng, phiếu nhóm, cách phản hồi.)

Kịch bản mở đầu: "45 phút tới là thời gian của nhóm. Ai chưa có nhóm thì có 3 phút để tìm nhóm 2–3 người — ai còn lẻ thì giơ tay, tôi ghép. Mỗi nhóm làm 4 chặng trên phiếu: chọn lĩnh vực, viết 3 câu hỏi quyết định, chọn 1 câu để biến thành vấn đề nghiên cứu, rồi một số nhóm trình bày 1 phút. Lưu ý quan trọng nhất: chọn lĩnh vực mà các bạn hỏi được người thật, vì cuối kỳ các bạn phải thu dữ liệu. Tôi sẽ đi từng nhóm. Bắt đầu."

Ví dụ tốt: "Có nên mở thêm cửa hàng gần ký túc xá?" → "Xác định tần suất mua, mức chi và yếu tố lựa chọn cửa hàng trà sữa của sinh viên ở ký túc xá X" → ứng dụng · mô tả · định lượng · sinh viên ký túc xá, tiếp cận được.

Lỗi điển hình cần nêu khi chia sẻ: (1) viết chủ đề thay vì quyết định; (2) vấn đề nghiên cứu là một giải pháp ("Đề xuất chiến lược TikTok…"); (3) chọn nhân quả nhưng không thể làm thử nghiệm.

Câu chốt: "Một vấn đề nghiên cứu tốt trả lời được câu hỏi: giám đốc sẽ dùng kết quả này để quyết định điều gì?"`,
      "Kịch bản trong W1_activity_xuong_de_tai.md. Để slide này trên màn hình suốt 45 phút."), S7);
    const st = [["10'", "Lập nhóm & chọn lĩnh vực", "green"], ["10'", "3 câu hỏi quyết định", "yellow"], ["15'", "Vấn đề nghiên cứu, phân loại, phác 6 bước", "blue"], ["10'", "4–5 nhóm chia sẻ 1 phút", "orange"]];
    const cw = 2.85, gap = 0.233;
    st.forEach(([m, t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 3.55);
      T(s, m, { x: x + 0.25, y: 2.1, w: cw - 0.5, h: 1.0, fontSize: 48, bold: true, color: COL[k] });
      T(s, `Chặng ${i + 1}`, { x: x + 0.25, y: 3.1, w: cw - 0.5, h: 0.5, color: COL.muted });
      T(s, t, { x: x + 0.25, y: 3.6, w: cw - 0.45, h: 1.8, bold: true });
    });
    card(s, MX, 5.85, CW, 0.85, COL.yellow);
    T(s, "Sản phẩm: phiếu nhóm → hoàn thiện thành M1", { x: MX + 0.3, y: 5.85, w: CW - 0.6, h: 0.85, valign: "middle", bold: true, fontSize: 26, color: COL.bg });
  }

  // ---------------- S8 · Kết buổi ----------------
  const S8 = "S8 · Kết buổi";
  {
    const s = newSlide("Trước khi về: một điều đã rõ, một điều còn mơ hồ", notes(`
(Phát phiếu ra về — giấy nhỏ hoặc trang cuối phiếu hoạt động.)

Trước khi về, mỗi bạn viết ra hai dòng:
1. Một điều hôm nay mình đã hiểu rõ.
2. Một điều mình vẫn còn mơ hồ.

Không ghi tên cũng được. (Thu lại; đọc trước Buổi 2 và mở đầu Buổi 2 bằng 2–3 "điều còn mơ hồ" nhiều nhất.)`,
      "Thu phiếu; đọc trước Buổi 2."), S8);
    const its = [["FaCheck", "Một điều hôm nay mình đã hiểu rõ", "green"], ["FaQuestion", "Một điều mình vẫn còn mơ hồ", "yellow"]];
    for (let i = 0; i < 2; i++) {
      const x = MX + i * 6.25;
      card(s, x, 2.0, 5.85, 4.2);
      await iconDot(s, its[i][0], x + 2.975 - 0.75, 2.4, 1.5, its[i][2]);
      T(s, its[i][1], { x: x + 0.4, y: 4.2, w: 5.05, h: 1.6, align: "center", valign: "middle", bold: true, fontSize: 30 });
    }
    T(s, "Không cần ghi tên", { x: MX, y: 6.45, w: 8, h: 0.5, color: COL.muted, italic: true });
  }

  {
    const s = newSlide("Bài tập M1 và buổi sau", notes(`
Bài tập về nhà — M1: Phiếu đăng ký đề tài sơ bộ (nhóm, 2,5%). Hoàn thiện phiếu nhóm đã làm trên lớp, nộp trên LMS trước Buổi 2. Đề bài và tiêu chí chấm: W1_M1_phieu_dang_ky_de_tai.md.

Nối sang buổi sau: "Tuần sau, mỗi nhóm sẽ đi tìm tài liệu học thuật cho chính đề tài vừa đăng ký — và học cách phân biệt một nguồn đáng tin với một bài viết trên mạng. Mang theo máy tính."

[NEEDS PROFESSOR INPUT: ngày hạn nộp M1 và quy định nộp trễ — điền lên slide.]`,
      "Câu nối: \"Tuần sau mỗi nhóm đi tìm tài liệu cho chính đề tài vừa đăng ký.\""), S8);
    card(s, MX, 1.95, 6.6, 4.75);
    await iconDot(s, "FaClipboardList", MX + 0.35, 2.2, 1.0, "yellow");
    T(s, "M1 · Phiếu đăng ký đề tài sơ bộ", { x: MX + 1.6, y: 2.2, w: 4.8, h: 1.0, valign: "middle", bold: true, fontSize: 26, color: COL.yellow });
    T(s, [
      { text: "Nhóm · 2,5%", options: { bullet: true, breakLine: true } },
      { text: "Nộp trên LMS trước Buổi 2", options: { bullet: true, breakLine: true } },
      { text: "Hạn: ___ / ___", options: { bullet: true } },
    ], { x: MX + 0.4, y: 3.55, w: 5.9, h: 2.8, paraSpaceAfter: 14, fontSize: 26 });
    card(s, 7.45, 1.95, 5.28, 4.75, COL.blue);
    await iconDot(s, "FaLaptop", 7.8, 2.2, 1.0, "purple");
    T(s, "Buổi 2", { x: 9.05, y: 2.2, w: 3.4, h: 1.0, valign: "middle", bold: true, fontSize: 30, color: COL.bg });
    T(s, "Tìm tài liệu học thuật cho đề tài của nhóm", { x: 7.8, y: 3.55, w: 4.6, h: 1.6, fontSize: 26, color: COL.bg });
    T(s, "Mang theo máy tính", { x: 7.8, y: 5.4, w: 4.6, h: 0.6, bold: true, fontSize: 26, color: COL.bg });
  }

  await pres.writeFile({ fileName: OUT });
  try {
    const { applyTheme } = require(process.env.APPLY_THEME || "./apply_theme.js");
    await applyTheme(OUT, THEME);
  } catch (e) {
    console.warn("applyTheme không chạy được:", e.message);
  }
  console.log("Wrote", OUT);
}

build().catch((e) => { console.error(e); process.exit(1); });
