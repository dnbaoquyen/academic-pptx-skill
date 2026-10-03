// Dựng deck Buổi 1 MKT1107 (UEF) — 39 slide theo W1_slides_outline.md + 1 slide Tài liệu tham khảo.
// Speaker note: "Nói / Hỏi lớp / Chuyển ý", viết từ W1_lecture_notes.md và các phiếu hoạt động.
// Chạy: NODE_PATH=<node_modules> node build_W1_slides.js out.pptx
// Sau đó: python3 postprocess_W1.py out.pptx  (alt text cho hình + hiệu ứng hiện từng dòng)

const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const OUT = process.argv[2] || path.join(__dirname, "W1_slides.pptx");

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
pres.title = "MKT1107 Nghiên cứu Marketing · Buổi 1";
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

const S1 = "S1 · Khởi động", S2 = "S2 · Giới thiệu học phần", S3 = "S3 · Nghiên cứu marketing là gì, để làm gì, có những loại nào",
  S4 = "S4 · Phân loại nhanh", SB = "Giải lao", S5 = "S5 · Tiến trình, đạo đức, hệ thống thông tin, người làm và người dùng",
  S6 = "S6 · Kiểm tra nhanh", S7 = "S7 · Thực hành nhóm", S8 = "S8 · Kết buổi", SR = "Tài liệu tham khảo";

const FIG_ALT = {};

async function build() {
  // ===== Slide 1 =====
  {
    const s = newSlide(1, "Bài 1: Tổng quan về nghiên cứu Marketing", S1, {
      say: "Chào các bạn. Đây là học phần MKT1107 Nghiên cứu Marketing, Buổi 1 — Bài 1: Tổng quan về nghiên cứu Marketing. Giảng viên: Đoàn Nguyễn Bảo Quyên.",
      gv: "Chưa giới thiệu môn. Chuyển ngay sang slide 2.",
      next: "Tôi bắt đầu bằng một câu chuyện.",
    }, "TITLE");
    s.addText("MKT1107 Nghiên cứu Marketing · Buổi 1\nGiảng viên: Đoàn Nguyễn Bảo Quyên", { placeholder: "body" });
    const keys = ["green", "yellow", "pink", "purple", "blue", "orange"];
    [[9.9, 1.3, 1.5], [11.3, 2.2, 1.0], [10.2, 3.1, 2.0], [12.0, 3.6, 0.7], [9.8, 5.3, 0.9], [11.1, 5.0, 1.3]]
      .forEach(([x, y, d], i) => dot(s, x, y, d, keys[i]));
  }

  // ===== Slide 2 =====
  {
    const s = newSlide(2, "Hỏi 1.000 khách hàng giàu về điện thoại giá rẻ: kết quả sai ở đâu?", S1, {
      say: "Tôi bắt đầu bằng một câu chuyện. Một hãng điện thoại sắp bán dòng giá rẻ — điện thoại giá rẻ. Trước khi quyết định giá bán, họ làm khảo sát. Nhưng họ đi hỏi ở đâu? Họ khảo sát khách ở showroom cao cấp, với những khách hàng có thu nhập cao — khách giàu. Kết quả: “giá không quan trọng” — phần lớn người được hỏi nói họ sẵn sàng trả nhiều hơn để có tính năng tốt. Vậy: sai ở đâu? Hậu quả?",
      gv: "Đọc chậm tình huống, chưa nói gì về môn học. Câu trả lời mong đợi: hỏi sai đối tượng — người mua điện thoại giá rẻ không phải khách hàng giàu; kết quả bị chệch; công ty có thể định giá quá cao, sản phẩm thất bại. Ghi lên bảng hai chữ: “hỏi ai”.",
      ask: "“Kết luận này sai ở đâu? Và nếu công ty tin vào nó thì chuyện gì xảy ra?” — 1 phút nghĩ một mình, 1 phút trao đổi với bạn bên cạnh, chỉ định 2–3 bạn trả lời.",
      next: "Các bạn vừa chỉ ra đúng lỗi mà nhiều doanh nghiệp mắc phải — lỗi đó nằm ở một trong ba câu hỏi mọi nghiên cứu phải trả lời.",
    });
    FIG_ALT[2] = "Minh họa một cuộc khảo sát hỏi khách hàng giàu về điện thoại giá rẻ.";
    fig(s, 0.6, 2.0, 5.3, 3.0);
    await iconDot(s, "FaMobileAlt", 0.9, 2.3, 1.9, "yellow");
    T(s, "Giá rẻ", { x: 0.6, y: 4.3, w: 2.5, h: 0.5, align: "center", bold: true, color: COL.yellow });
    T(s, "vs", { x: 2.9, y: 2.85, w: 0.9, h: 0.8, align: "center", valign: "middle", fontSize: 32, bold: true, color: COL.muted });
    await iconDot(s, "FaUserTie", 3.8, 2.3, 1.9, "pink");
    T(s, "Khách giàu", { x: 3.5, y: 4.3, w: 2.5, h: 0.5, align: "center", bold: true, color: COL.pink });
    ["Hãng điện thoại sắp bán dòng giá rẻ", "Khảo sát khách ở showroom cao cấp", "Kết quả: “giá không quan trọng”"].forEach((r, i) => {
      dot(s, 6.5, 1.95 + i * 1.05, 0.7, ["blue", "purple", "orange"][i], i + 1);
      T(s, r, { x: 7.4, y: 1.95 + i * 1.05, w: 5.33, h: 0.7, valign: "middle", fontSize: 26 });
    });
    card(s, 6.5, 5.25, 6.23, 1.25, COL.yellow);
    T(s, "Sai ở đâu? Hậu quả?", { x: 6.8, y: 5.25, w: 5.7, h: 1.25, valign: "middle", fontSize: 30, bold: true, color: COL.bg });
  }

  // ===== Slide 3 =====
  {
    const s = newSlide(3, "Mọi nghiên cứu bắt đầu bằng ba câu hỏi: vì sao hỏi, hỏi thế nào, hỏi ai", S1, {
      say: "Các bạn vừa chỉ ra đúng lỗi mà rất nhiều doanh nghiệp mắc phải: dữ liệu thì có, con số thì đẹp, nhưng câu trả lời vô giá trị vì hỏi sai người. Trước khi thu thập bất kỳ dữ liệu nào, phải trả lời được ba câu hỏi: Vì sao hỏi? Hỏi thế nào? Hỏi ai? Tình huống vừa rồi sai ở câu thứ ba — hỏi ai. Cả học phần là học trả lời ba câu này cho đúng.",
      next: "Để trả lời ba câu này, trước hết hãy xem môn học này nối tiếp môn Marketing căn bản ra sao.",
    });
    const items = [["FaBullseye", "Vì sao hỏi?", "green"], ["FaRoute", "Hỏi thế nào?", "blue"], ["FaUsers", "Hỏi ai?", "pink"]];
    for (let i = 0; i < 3; i++) {
      const x = MX + i * 4.15, [ic, label, k] = items[i];
      card(s, x, 2.0, 3.8, 3.1, i === 2 ? COL[k] : COL.card);
      await iconDot(s, ic, x + 1.3, 2.3, 1.2, i === 2 ? "purple" : k);
      T(s, label, { x, y: 3.75, w: 3.8, h: 0.9, align: "center", valign: "middle", fontSize: 32, bold: true, color: i === 2 ? COL.bg : COL.text });
    }
    T(s, "Cả học phần là học trả lời ba câu này cho đúng.", { x: MX, y: 5.75, w: CW, h: 0.6, fontSize: 28, bold: true, color: COL.yellow });
  }

  // ===== Slide 4 =====
  {
    const s = newSlide(4, "Marketing căn bản dạy cách ra quyết định; môn này dạy cách có thông tin để quyết định", S2, {
      say: "Ở môn Marketing căn bản — môn tiên quyết — các bạn đã học cách doanh nghiệp ra quyết định về sản phẩm, giá, phân phối, xúc tiến (truyền thông). Đó là phần đã học: 4P. Môn này trả lời câu hỏi tiếp theo: những quyết định đó dựa vào thông tin nào, và làm sao có được thông tin đáng tin cậy? Một câu để nhớ: “Không có thông tin đúng, 4P chỉ là đoán.”",
      gv: "Phần S2 nói nhanh, gọn. Chi tiết có trong đề cương trên LMS — nhắc sinh viên đọc lại.",
      next: "Vậy hết học phần này, các bạn sẽ làm được gì?",
    });
    card(s, MX, 2.0, 5.3, 4.2);
    T(s, "Đã học: 4P", { x: MX + 0.35, y: 2.25, w: 4.6, h: 0.6, bold: true, color: COL.muted });
    [["Sản phẩm", "green"], ["Giá", "yellow"], ["Phân phối", "blue"], ["Xúc tiến", "orange"]].forEach(([p, k], i) => {
      const x = MX + 0.35 + (i % 2) * 2.35, y = 3.1 + Math.floor(i / 2) * 1.35;
      card(s, x, y, 2.15, 1.1, COL[k]);
      T(s, p, { x, y, w: 2.15, h: 1.1, align: "center", valign: "middle", bold: true, color: COL.bg });
    });
    arrow(s, 6.15, 3.65, 1.0, 0.9, "yellow");
    card(s, 7.4, 2.0, 5.33, 4.2, COL.yellow);
    T(s, "Môn này", { x: 7.75, y: 2.25, w: 4.7, h: 0.6, bold: true, color: COL.bg });
    T(s, "Dựa vào thông tin nào?", { x: 7.75, y: 3.1, w: 4.7, h: 2.6, fontSize: 40, bold: true, color: COL.bg, valign: "middle" });
  }

  // ===== Slide 5 =====
  {
    const s = newSlide(5, "Hết học phần, bạn tự làm được một nghiên cứu marketing từ đầu đến cuối", S2, {
      say: "Kết thúc học phần, các bạn có thể: một, giải thích khái niệm và phương pháp nghiên cứu marketing; hai, lập kế hoạch nghiên cứu — xây dựng một kế hoạch phục vụ một quyết định marketing cụ thể; ba, thực hiện các bước của một nghiên cứu: xác định vấn đề, thiết kế, chọn mẫu, thiết kế bảng hỏi, phân tích dữ liệu, trình bày kết quả; bốn, làm việc nhóm, có đạo đức nghiên cứu — biết phản biện và có ý thức đạo đức khi nghiên cứu. Chi tiết trong đề cương trên LMS.",
      gv: "Đây là CLO1–8 viết lại bằng lời của sinh viên. Không đọc CLO nguyên văn.",
      next: "Cách để đạt được những điều đó là tự làm một nghiên cứu thật, theo nhóm.",
    });
    const items = [["FaLightbulb", "Giải thích khái niệm & phương pháp", "green"], ["FaClipboardList", "Lập kế hoạch nghiên cứu", "yellow"], ["FaRoute", "Thực hiện các bước", "blue"], ["FaUserFriends", "Làm việc nhóm, có đạo đức nghiên cứu", "orange"]];
    for (let i = 0; i < 4; i++) {
      const y = 2.0 + i * 1.18;
      await iconDot(s, items[i][0], MX, y, 0.95, items[i][2]);
      T(s, items[i][1], { x: MX + 1.3, y, w: 10.5, h: 0.95, valign: "middle", fontSize: 28 });
    }
  }

  // ===== Slide 6 =====
  {
    const s = newSlide(6, "Mỗi nhóm 2–3 bạn làm một nghiên cứu thật: 3 chương (định tính) hoặc 5 chương (định lượng)", S2, {
      say: "Điểm khác của môn này: mỗi nhóm 2–3 bạn sẽ tự làm một nghiên cứu nhỏ từ đầu đến cuối, theo một trong hai hướng. Định lượng — 5 chương: giới thiệu nghiên cứu; cơ sở lý thuyết và mô hình; phương pháp nghiên cứu; kết quả nghiên cứu; kết luận và hàm ý quản trị. Định tính — 3 chương: giới thiệu và cơ sở lý thuyết; phương pháp nghiên cứu; kết quả, thảo luận và kết luận. Nhóm chọn hướng ở Buổi 5. Mỗi buổi, 45 phút thực hành cuối buổi là lúc nhóm làm một phần dự án, có giảng viên đi kèm; bài tập về nhà là hoàn thiện phần đó.",
      next: "Nếu theo kịp từng buổi, dự án sẽ thành hình dần theo lộ trình sau.",
    });
    [["Định lượng · 5 chương", "blue", ["Giới thiệu", "Cơ sở lý thuyết & mô hình", "Phương pháp", "Kết quả", "Kết luận & hàm ý"]],
     ["Định tính · 3 chương", "purple", ["Giới thiệu & cơ sở lý thuyết", "Phương pháp", "Kết quả, thảo luận & kết luận"]]].forEach(([head, k, chs], c) => {
      const x = MX + c * 6.25;
      card(s, x, 1.95, 5.88, 0.85, COL[k]);
      T(s, head, { x: x + 0.3, y: 1.95, w: 5.3, h: 0.85, valign: "middle", bold: true, fontSize: 28, color: ON(k) });
      chs.forEach((ch, i) => {
        const y = 3.0 + i * 0.75;
        dot(s, x + 0.15, y + 0.05, 0.55, k, i + 1);
        T(s, ch, { x: x + 0.95, y, w: 4.93, h: 0.65, valign: "middle" });
      });
    });
  }

  // ===== Slide 7 =====
  {
    const s = newSlide(7, "Theo kịp từng buổi thì đến Buổi 13 bạn đã có gần đủ tiểu luận", S2, {
      say: "Nếu các bạn theo kịp từng buổi, đến Buổi 13 các bạn đã có gần đủ bài tiểu luận cuối kỳ. Lộ trình: B1 đề tài; B2–3 tài liệu; B4–5 AI, chọn hướng; B6 đề cương; B7–9 phương pháp, mẫu, thang đo; B10–12 bảng hỏi, phát hành sau B11; B13 phân tích; B14–15 thi. Bốn mốc bài tập nhóm: M1 sau B1, M2 sau B3, M3 sau B5, M4 sau B6. Nhấn hai mốc dễ trễ. Giữa kỳ: trước B11 — nộp giữa kỳ trước Buổi 11. Hạn thu dữ liệu: trước B13 — thu dữ liệu xong trước Buổi 13.",
      next: "Các sản phẩm của lộ trình này cũng chính là phần lớn điểm số của các bạn.",
    });
    FIG_ALT[7] = "Lộ trình 15 buổi, mỗi buổi gắn với một phần của dự án nghiên cứu nhóm.";
    fig(s, MX, 1.85, CW, 4.85);
    const steps = [["B1", "Đề tài", "green", "M1"], ["B2–3", "Tài liệu", "yellow", "M2"], ["B4–5", "AI, chọn hướng", "blue", "M3"], ["B6", "Đề cương", "orange", "M4"],
      ["B7–9", "Phương pháp, mẫu, thang đo", "green", ""], ["B10–12", "Bảng hỏi, phát hành sau B11", "yellow", ""], ["B13", "Phân tích", "blue", ""], ["B14–15", "Thi", "pink", ""]];
    const cw = 2.85, gap = 0.233;
    steps.forEach(([b, label, k, m], i) => {
      const x = MX + (i % 4) * (cw + gap), y = 1.85 + Math.floor(i / 4) * 2.0;
      card(s, x, y, cw, 1.75);
      T(s, b, { x: x + 0.25, y: y + 0.15, w: 1.8, h: 0.55, bold: true, fontSize: 28, color: COL[k] });
      if (m) { card(s, x + cw - 0.95, y + 0.17, 0.75, 0.5, COL.purple); T(s, m, { x: x + cw - 0.95, y: y + 0.17, w: 0.75, h: 0.5, align: "center", valign: "middle", bold: true }); }
      T(s, label, { x: x + 0.25, y: y + 0.75, w: cw - 0.4, h: 0.95 });
    });
    card(s, MX, 5.95, 5.9, 0.75, COL.orange);
    T(s, "Giữa kỳ: trước B11", { x: MX + 0.3, y: 5.95, w: 5.4, h: 0.75, valign: "middle", bold: true, color: COL.bg });
    card(s, 6.83, 5.95, 5.9, 0.75, COL.pink);
    T(s, "Hạn thu dữ liệu: trước B13", { x: 7.13, y: 5.95, w: 5.4, h: 0.75, valign: "middle", bold: true, color: COL.bg });
  }

  // ===== Slide 8 =====
  {
    const s = newSlide(8, "70% điểm đến từ sản phẩm nghiên cứu của nhóm", S2, {
      say: "70% điểm đến từ sản phẩm của nhóm. Chuyên cần 10%: tham dự và tham gia trên lớp. Bài tập nhóm M1–M4 20%: M1 sau Buổi 1 (2,5%), M2 sau Buổi 3 (5%), M3 sau Buổi 5 (5%), M4 sau Buổi 6 (7,5%). Giữa kỳ (nộp LMS) 20%: nộp trên LMS trước Buổi 11 — Chương 1–3 (định lượng) hoặc 1–2 (định tính), kèm bản nháp bảng hỏi. Tiểu luận nhóm 50%: tiểu luận hoàn chỉnh; Buổi 14–15 là buổi thi. Phân tích nâng cao → điểm cộng: nhóm định lượng nào phân tích sâu hơn yêu cầu — ví dụ kiểm định độ tin cậy thang đo, phân tích nhân tố, hồi quy — sẽ được điểm cộng.",
      gv: "Câu hỏi về hạn nộp cụ thể: trả lời theo lịch trên LMS [NEEDS PROFESSOR INPUT: ngày cụ thể và quy định nộp trễ].",
      ask: "“Có câu hỏi nào về cách đánh giá không?” — chờ 10 giây.",
      next: "Trong khi làm dự án, có hai quy ước dùng suốt học phần.",
    });
    const rows = [["Chuyên cần", "10%", "muted"], ["Bài tập nhóm M1–M4", "20%", "green"], ["Giữa kỳ (nộp LMS)", "20%", "blue"], ["Tiểu luận nhóm", "50%", "yellow"]];
    rows.forEach(([l, p, k], i) => {
      const y = 1.9 + i * 1.0;
      card(s, MX, y, 8.4, 0.85);
      T(s, l, { x: MX + 0.35, y, w: 5.6, h: 0.85, valign: "middle", fontSize: 26 });
      T(s, p, { x: MX + 6.0, y, w: 2.1, h: 0.85, valign: "middle", align: "right", fontSize: 36, bold: true, color: COL[k] });
    });
    line(s, 9.3, 2.95, 0.25, 0, "yellow"); line(s, 9.55, 2.95, 0, 2.8, "yellow"); line(s, 9.3, 5.75, 0.25, 0, "yellow");
    T(s, "70%", { x: 9.8, y: 3.75, w: 2.9, h: 1.2, valign: "middle", fontSize: 60, bold: true, color: COL.yellow });
    T(s, "Phân tích nâng cao → điểm cộng.", { x: MX, y: 6.15, w: 9, h: 0.6, color: COL.green, bold: true });
  }

  // ===== Slide 9 =====
  {
    const s = newSlide(9, "Được dùng AI, nhưng phải khai báo và tự kiểm chứng; trích dẫn theo APA 7", S2, {
      say: "Hai quy ước dùng suốt học phần. Thứ nhất, dùng AI: được phép, với hai điều kiện — khai báo công cụ + mục đích, nghĩa là đã dùng công cụ nào, để làm gì, và nộp nhật ký sử dụng AI; đồng thời tự kiểm chứng mọi trích dẫn, mọi thông tin AI đưa ra. AI bịa tài liệu tham khảo — trích tài liệu không tồn tại là lỗi của người nộp, không phải lỗi của AI. Thứ hai, trích dẫn theo APA 7: tên tác giả Việt ghi họ trước, viết tắt tên đệm và tên — Lê, Q. H. (2017) trong danh mục tài liệu, (Lê, 2017) trong bài. Buổi 2–3 học APA, Buổi 4–5 học dùng AI cho nghiên cứu.",
      next: "Bây giờ vào nội dung. Câu hỏi đầu tiên tưởng đơn giản: nghiên cứu marketing thực ra là gì?",
    });
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

  // ===== Slide 10 =====
  {
    const s = newSlide(10, "Nghiên cứu marketing không chỉ là gửi một bảng hỏi Google Forms", S3, {
      say: "Nhiều bạn nghe “nghiên cứu marketing” sẽ nghĩ ngay đến một cái bảng hỏi trên Google Forms gửi vào group Facebook. Nhưng khảo sát chỉ là một công cụ: nghiên cứu marketing không chỉ là gửi một bảng hỏi Google Forms. Hiểu đúng định nghĩa giúp các bạn thấy nghiên cứu marketing rộng hơn nhiều, và giúp các bạn biết khi nào một “cuộc khảo sát” không phải là nghiên cứu.",
      gv: "Hỏi 2 bạn trả lời nhanh. Thường sẽ nghe “khảo sát”. Dùng câu đó để mở định nghĩa. S3 dày nhất buổi (25 phút) — nếu chậm: phạm vi chỉ nêu tên; phần so sánh với nghiên cứu thị trường chuyển sang tài liệu đọc thêm.",
      ask: "“Theo bạn, nghiên cứu marketing là gì?”",
      next: "Hãy xem ba tác giả định nghĩa nghiên cứu marketing như thế nào.",
    });
    await iconDot(s, "FaQuestion", 5.67, 2.0, 2.0, "yellow");
    T(s, "Theo bạn, nghiên cứu marketing là gì?", { x: MX, y: 4.35, w: CW, h: 1.3, align: "center", valign: "middle", fontSize: 44, bold: true, color: COL.yellow });
  }

  // ===== Slide 11 =====
  {
    const s = newSlide(11, "Ba tác giả, ba câu chữ — cùng một ý: có hệ thống, để ra quyết định", S3, {
      say: "Ba tác giả, ba câu chữ. Các bạn không cần đọc hết — hãy tìm điểm chung. Kotler & Keller (2012): thiết kế, thu thập, phân tích, báo cáo cho một tình huống marketing cụ thể — làm một cách có hệ thống với dữ liệu và phát hiện liên quan đến tình huống doanh nghiệp đang đối mặt. AMA — American Marketing Association (2017): chức năng kết nối khách hàng với nhà marketing qua thông tin — thông tin để nhận diện cơ hội, vấn đề, đánh giá hành động, theo dõi kết quả. Nguyễn & Nguyễn (2015): chức năng gắn với mọi hoạt động marketing, từ hoạch định đến thực hiện và kiểm soát. Điểm chung: có hệ thống, để ra quyết định.",
      gv: "Nguyên văn AMA (phê duyệt 2017): “Marketing research is the function that links the consumer, customer, and public to the marketer through information—information used to identify and define opportunities and problems; generate, refine, and evaluate actions; monitor performance; and improve understanding of it as a process.” Bài giảng Văn Lang dùng định nghĩa AMA phiên bản cũ; đã thay bằng định nghĩa 2017. Câu chữ Nguyễn Đình Thọ lấy từ slide Văn Lang; đã xác định giáo trình gốc nhưng chưa đối chiếu số trang. Danh mục đầy đủ ở slide cuối.",
      ask: "“Câu chữ khác nhau — nhưng cả ba cùng nhấn mạnh điều gì?” — chờ 2–3 câu trả lời.",
      next: "Gom ba định nghĩa lại, ta có định nghĩa dùng trong học phần — và bốn thành tố của nó.",
    });
    const cols = [
      ["Kotler & Keller", "blue", [{ text: "Thiết kế, thu thập, phân tích, báo cáo", options: { bold: true, color: COL.blue } }, { text: " cho một tình huống marketing cụ thể" }], "(Kotler & Keller, 2012)"],
      ["AMA", "green", [{ text: "Chức năng " }, { text: "kết nối", options: { bold: true, color: COL.green } }, { text: " khách hàng với nhà marketing qua thông tin" }], "(American Marketing Association, 2017)"],
      ["Nguyễn & Nguyễn", "orange", [{ text: "Chức năng " }, { text: "gắn với", options: { bold: true, color: COL.orange } }, { text: " mọi hoạt động marketing" }], "(Nguyễn & Nguyễn, 2015)"],
    ];
    cols.forEach(([h, k, def, src], i) => {
      const x = MX + i * 4.12;
      card(s, x, 1.85, 3.89, 0.8, COL[k]);
      T(s, h, { x: x + 0.2, y: 1.85, w: 3.5, h: 0.8, valign: "middle", bold: true, fontSize: 26, color: COL.bg });
      card(s, x, 2.8, 3.89, 2.75);
      T(s, def, { x: x + 0.25, y: 2.95, w: 3.4, h: 2.5 });
      T(s, src, { x, y: 5.7, w: 3.89, h: 1.0, color: COL.muted });
    });
  }

  // ===== Slide 12 =====
  {
    const s = newSlide(12, "Bốn thành tố phân biệt nghiên cứu thật với \"khảo sát cho có\"", S3, {
      say: "Định nghĩa dùng trong học phần: nghiên cứu marketing là một hoạt động có hệ thống và khách quan nhằm thu thập, phân tích và diễn giải dữ liệu, từ đó cung cấp thông tin có ý nghĩa làm cơ sở cho nhà quản trị ra quyết định về các vấn đề marketing. Bốn thành tố, mỗi thành tố loại một kiểu “nghiên cứu giả”. Có hệ thống — hỏi vài người bạn rồi kết luận không phải nghiên cứu. Khách quan — khảo sát để chứng minh ý sếp là đúng không phải nghiên cứu. Thu thập, phân tích, diễn giải — một file Excel 500 dòng không ai đọc chưa phải nghiên cứu. Làm cơ sở ra quyết định — mục đích cuối cùng là hỗ trợ nhà quản trị. Tư tưởng chủ đạo: mọi quyết định kinh doanh đều phải xuất phát từ thị trường.",
      gv: "Câu định nghĩa tổng hợp không gán tác giả. Slide UEF #3 gán một câu tương tự cho AMA — không đúng nguyên văn; đã bỏ phần gán tác giả.",
      next: "Nếu nghiên cứu là cơ sở ra quyết định, nó mang lại gì cho doanh nghiệp — và không làm được gì?",
    });
    T(s, "Nghiên cứu marketing là một hoạt động có hệ thống và khách quan nhằm thu thập, phân tích và diễn giải dữ liệu, từ đó cung cấp thông tin có ý nghĩa làm cơ sở cho nhà quản trị ra quyết định về các vấn đề marketing.",
      { x: MX, y: 1.8, w: CW, h: 1.75, italic: true, color: COL.muted });
    FIG_ALT[12] = "Bốn thành tố của nghiên cứu marketing nối tiếp nhau.";
    fig(s, MX, 3.75, CW, 2.4);
    const items = [["Có hệ thống", "green"], ["Khách quan", "yellow"], ["Thu thập, phân tích, diễn giải", "blue"], ["Làm cơ sở ra quyết định", "orange"]];
    const cw = 2.55, gap = 0.62;
    items.forEach(([t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.75, cw, 2.4, COL[k]);
      T(s, String(i + 1), { x, y: 3.85, w: cw, h: 0.65, align: "center", fontSize: 32, bold: true, color: COL.bg });
      T(s, t, { x: x + 0.15, y: 4.5, w: cw - 0.3, h: 1.5, align: "center", valign: "middle", bold: true, color: COL.bg });
      if (i < 3) arrow(s, x + cw + 0.1, 4.7, 0.42, 0.5, "muted");
    });
  }

  // ===== Slide 13 =====
  {
    const s = newSlide(13, "Nghiên cứu giảm rủi ro, nhưng không ra quyết định thay nhà quản trị", S3, {
      say: "Vai trò: nghiên cứu marketing giúp doanh nghiệp làm rõ vấn đề — loại bỏ những điều còn mơ hồ; giảm rủi ro — ví dụ biết trước khu vực nhu cầu thấp để không đổ tiền vào đó; cung cấp thông tin cho quyết định marketing; hoạt động hiệu quả hơn; và hỗ trợ các bộ phận khác như sản xuất, kỹ thuật, tài chính cùng hướng tới thỏa mãn khách hàng. Giới hạn: nghiên cứu không ra quyết định — nhà quản trị ra quyết định. Và không bảo đảm thành công, vì Y = f(x₁, x₂, …, xₙ): kết quả kinh doanh Y là hàm của nhiều yếu tố — sản phẩm, giá, đối thủ, kinh tế, cách triển khai. Nghiên cứu làm rõ một số yếu tố x, không kiểm soát được tất cả.",
      gv: "Cột “Giới hạn” hiện sau một cú bấm — hỏi lớp trước khi bấm. Slide gốc Văn Lang ghi “Y = f (x1) + (fx2) +... f (xn)”; đã viết lại thành Y = f(x₁, x₂, …, xₙ) cho đúng ký hiệu hàm.",
      ask: "“Vậy nghiên cứu thị trường có phải là chìa khóa của thành công?” — hỏi trước khi hiện cột phải.",
      next: "Nghiên cứu phục vụ hai mục đích, trên sáu phạm vi quen thuộc.",
    });
    card(s, MX, 1.85, 6.6, 4.85);
    T(s, "Vai trò", { x: MX + 0.35, y: 2.0, w: 5.9, h: 0.6, bold: true, fontSize: 28, color: COL.green });
    ["Làm rõ vấn đề", "Giảm rủi ro", "Thông tin cho quyết định", "Hoạt động hiệu quả hơn", "Hỗ trợ các bộ phận khác"].forEach((t, i) => {
      const y = 2.75 + i * 0.75;
      dot(s, MX + 0.35, y + 0.08, 0.5, "green", i + 1);
      T(s, t, { x: MX + 1.1, y, w: 5.3, h: 0.66, valign: "middle" });
    });
    card(s, 7.45, 1.85, 5.28, 4.85, COL.card, { objectName: "ANIM-13-a" });
    T(s, "Giới hạn", { x: 7.8, y: 2.0, w: 4.6, h: 0.6, bold: true, fontSize: 28, color: COL.pink, objectName: "ANIM-13-b" });
    T(s, "Không ra quyết định", { x: 7.8, y: 2.8, w: 4.6, h: 0.65, valign: "middle", objectName: "ANIM-13-c" });
    T(s, "Không bảo đảm thành công", { x: 7.8, y: 3.55, w: 4.6, h: 0.65, valign: "middle", objectName: "ANIM-13-d" });
    T(s, "Y = f(x₁, x₂, …, xₙ)", { x: 7.8, y: 4.6, w: 4.6, h: 1.2, valign: "middle", fontSize: 34, bold: true, color: COL.yellow, objectName: "ANIM-13-e" });
  }

  // ===== Slide 14 =====
  {
    const s = newSlide(14, "Nghiên cứu để giải quyết vấn đề hoặc để khai thác cơ hội", S3, {
      say: "Nghiên cứu marketing phục vụ một trong hai mục đích, như hai đĩa cân: giải quyết vấn đề — ví dụ doanh số sụt giảm, cần biết vì sao; hoặc khai thác cơ hội — ví dụ nhu cầu sản phẩm tiện lợi tăng theo một xu hướng xã hội. Hai mục đích có thể chuyển hóa cho nhau. Phạm vi thường gặp gần như khớp 4P đã học: thị trường (quy mô, cơ cấu, thị phần); hành vi NTD — người tiêu dùng (thái độ, thói quen, nhân khẩu học); sản phẩm; giá; phân phối; xúc tiến. Lưu ý: nghiên cứu thị trường là một phần của nghiên cứu marketing — nghiên cứu marketing rộng hơn, bao trùm cả 4P; bảng so sánh có trong tài liệu đọc thêm.",
      ask: "“Một nghiên cứu xem khách hàng chấp nhận trả tối đa bao nhiêu cho một ly trà sữa thuộc phạm vi nào?” → giá.",
      next: "Ngoài mục đích và phạm vi, mỗi nghiên cứu còn được xếp loại theo ba tiêu chí.",
    });
    T(s, "Mục đích", { x: MX, y: 1.85, w: 5, h: 0.5, bold: true, color: COL.muted });
    s.addShape(pres.shapes.ISOSCELES_TRIANGLE, { x: 3.15, y: 4.45, w: 1.0, h: 0.9, fill: { color: COL.muted }, line: { type: "none" }, objectName: oname("scale") });
    line(s, 0.85, 4.45, 5.6, 0, "muted", { width: 5 });
    line(s, 2.1, 3.75, 0, 0.7, "muted"); line(s, 5.2, 3.75, 0, 0.7, "muted");
    card(s, MX, 2.45, 3.0, 1.3, COL.pink);
    T(s, "Giải quyết vấn đề", { x: MX + 0.05, y: 2.45, w: 2.9, h: 1.3, align: "center", valign: "middle", bold: true, color: COL.bg });
    card(s, 3.7, 2.45, 3.0, 1.3, COL.green);
    T(s, "Khai thác cơ hội", { x: 3.75, y: 2.45, w: 2.9, h: 1.3, align: "center", valign: "middle", bold: true, color: COL.bg });
    T(s, "Phạm vi", { x: 6.95, y: 1.85, w: 5, h: 0.5, bold: true, color: COL.muted });
    ["Thị trường", "Hành vi NTD", "Sản phẩm", "Giá", "Phân phối", "Xúc tiến"].forEach((t, i) => {
      const x = 6.95 + (i % 2) * 2.93, y = 2.45 + Math.floor(i / 2) * 1.2;
      card(s, x, y, 2.85, 0.95);
      T(s, t, { x, y, w: 2.85, h: 0.95, align: "center", valign: "middle" });
    });
  }

  // ===== Slide 15 =====
  {
    const s = newSlide(15, "Mỗi nghiên cứu có một vị trí trên ba tiêu chí phân loại", S3, {
      say: "Nghiên cứu marketing không phải một phương pháp duy nhất. Chúng ta phân loại theo ba tiêu chí: theo mục tiêu nghiên cứu, theo mức độ chuyên sâu, và theo tính chất nghiên cứu. Ba câu hỏi khác nhau, một nghiên cứu trả lời cả ba — một nghiên cứu cụ thể luôn có một “vị trí” trên cả ba tiêu chí. Cách phân loại khác (địa điểm, tính liên tục) → tài liệu đọc thêm: theo địa điểm thực hiện và theo tính liên tục.",
      gv: "Đề cương ghi 1.2.1 và 1.2.2 cùng tên “Phân loại theo mục tiêu nghiên cứu”. Đề xuất đặt lại: 1.2.1 Theo mục tiêu nghiên cứu · 1.2.2 Theo mức độ chuyên sâu · 1.2.3 Theo tính chất nghiên cứu. Slide UEF #5 dùng tên cũ (mục tiêu cốt lõi / mục tiêu thiết kế / tính chất dữ liệu); đã đổi theo outline.",
      next: "Bắt đầu với tiêu chí thứ nhất — theo mục tiêu nghiên cứu.",
    });
    card(s, MX, 3.2, 3.0, 1.5, COL.yellow);
    T(s, "Nghiên cứu marketing", { x: MX + 0.15, y: 3.2, w: 2.7, h: 1.5, align: "center", valign: "middle", bold: true, fontSize: 26, color: COL.bg });
    [["Theo mục tiêu nghiên cứu", "green"], ["Theo mức độ chuyên sâu", "blue"], ["Theo tính chất nghiên cứu", "pink"]].forEach(([h, k], i) => {
      const y = 1.85 + i * 1.45;
      line(s, MX + 3.0, 3.95, 0.9, (y + 0.6) - 3.95, k);
      card(s, 4.5, y, 8.23, 1.2);
      dot(s, 4.75, y + 0.25, 0.7, k, i + 1, 28);
      T(s, h, { x: 5.7, y, w: 6.8, h: 1.2, valign: "middle", bold: true, fontSize: 28, color: COL[k] });
    });
    T(s, "Cách phân loại khác (địa điểm, tính liên tục) → tài liệu đọc thêm", { x: MX, y: 6.25, w: 11.3, h: 0.5, color: COL.muted, italic: true });
  }

  // ===== Slide 16 =====
  {
    const s = newSlide(16, "Trước hết phải biết vấn đề là gì, rồi mới tìm cách giải quyết", S3, {
      say: "Theo mục tiêu nghiên cứu, cách chia thứ nhất là xác định vấn đề hay giải quyết vấn đề. Nghiên cứu xác định vấn đề phát hiện những vấn đề chưa hiển hiện nhưng đang tồn tại hoặc sắp xảy ra: tiềm năng thị trường, thị phần, hình ảnh thị trường, đặc điểm thị trường, phân tích bán hàng, dự báo, xu hướng kinh doanh. Nghiên cứu giải quyết vấn đề dùng khi vấn đề đã rõ: phân khúc thị trường, sản phẩm, giá, chiêu thị, phân phối. Nguồn: Malhotra (2019). Ví dụ (giả định): nghiên cứu cho thấy thị phần của một chuỗi trà sữa đang giảm — xác định vấn đề; nghiên cứu mức giá sinh viên chấp nhận để kéo khách trở lại — giải quyết vấn đề.",
      next: "Cũng theo mục tiêu nghiên cứu, còn cách chia thứ hai: hàn lâm hay ứng dụng.",
    });
    card(s, MX, 1.85, 8.05, 4.45);
    T(s, "Nghiên cứu xác định vấn đề", { x: MX + 0.3, y: 2.0, w: 7.5, h: 0.6, bold: true, fontSize: 26, color: COL.blue });
    ["Tiềm năng thị trường", "Thị phần", "Hình ảnh", "Đặc điểm thị trường", "Phân tích bán hàng", "Dự báo", "Xu hướng"].forEach((t, i) => {
      const x = MX + 0.3 + Math.floor(i / 4) * 3.9, y = 2.8 + (i % 4) * 0.82;
      T(s, "• " + t, { x, y, w: 3.8, h: 0.72, valign: "middle" });
    });
    card(s, 8.85, 1.85, 3.88, 4.45);
    T(s, "Nghiên cứu giải quyết vấn đề", { x: 9.15, y: 2.0, w: 3.4, h: 0.95, bold: true, fontSize: 26, color: COL.orange });
    ["Phân khúc", "Sản phẩm", "Giá", "Chiêu thị", "Phân phối"].forEach((t, i) => {
      T(s, "• " + t, { x: 9.15, y: 3.05 + i * 0.62, w: 3.4, h: 0.58, valign: "middle" });
    });
    T(s, "Nguồn: Malhotra (2019)", { x: MX, y: 6.45, w: 8, h: 0.5, color: COL.muted, italic: true });
  }

  // ===== Slide 17 =====
  {
    const s = newSlide(17, "Dự án của các bạn là nghiên cứu ứng dụng, phục vụ một quyết định cụ thể", S3, {
      say: "Nghiên cứu hàn lâm, còn gọi là cơ bản: mục tiêu là mở rộng lý thuyết, kiểm định mô hình; ứng dụng là đóng góp cho khoa học marketing nói chung; ví dụ “Mô hình tác động của quảng cáo truyền hình đến lòng tin thương hiệu” — quảng cáo truyền hình → lòng tin thương hiệu. Nghiên cứu ứng dụng: mục tiêu là giải quyết vấn đề kinh doanh cụ thể của một doanh nghiệp cụ thể; ứng dụng là hỗ trợ quyết định của nhà quản trị; ví dụ tối ưu ngân sách quảng cáo MXH cho công ty mỹ phẩm X (MXH: mạng xã hội). Nhấn câu cuối: dự án của các bạn trong môn này là nghiên cứu ứng dụng — gắn với một quyết định marketing thật.",
      next: "Tiêu chí thứ hai — theo mức độ chuyên sâu — là tiêu chí quan trọng nhất hôm nay.",
    });
    const lab = ["Mục tiêu", "Ứng dụng", "Ví dụ"];
    const ac = ["Mở rộng lý thuyết, kiểm định mô hình", "Đóng góp cho khoa học marketing", "Quảng cáo truyền hình → lòng tin thương hiệu"];
    const ap = ["Giải quyết vấn đề kinh doanh cụ thể", "Hỗ trợ quyết định của nhà quản trị", "Tối ưu ngân sách quảng cáo MXH cho công ty mỹ phẩm X"];
    const x1 = 3.0, x2 = 7.95, cw = 4.78;
    T(s, "Hàn lâm", { x: x1, y: 1.85, w: cw, h: 0.7, valign: "middle", bold: true, fontSize: 28, color: COL.muted });
    card(s, x2 - 0.2, 1.75, cw + 0.4, 5.05, COL.card);
    T(s, "Ứng dụng", { x: x2, y: 1.85, w: cw, h: 0.7, valign: "middle", bold: true, fontSize: 28, color: COL.green });
    const hs = [1.05, 1.05, 1.75];
    let y = 2.75;
    lab.forEach((r, i) => {
      T(s, r, { x: MX, y, w: 2.2, h: hs[i], bold: true, color: COL.muted });
      T(s, ac[i], { x: x1, y, w: cw - 0.2, h: hs[i] });
      T(s, ap[i], { x: x2, y, w: cw, h: hs[i] });
      y += hs[i] + 0.15;
    });
  }

  // ===== Slide 18 =====
  {
    const s = newSlide(18, "Theo mức độ chuyên sâu: bốn thiết kế trả lời bốn kiểu câu hỏi", S3, {
      say: "Theo mức độ chuyên sâu có bốn thiết kế, trả lời bốn kiểu câu hỏi. Khám phá — còn gọi là thăm dò — hỏi “Chuyện gì đang xảy ra?”, dùng khi vấn đề còn mơ hồ. Mô tả hỏi “Ai, cái gì, bao nhiêu?” — cả ở đâu, khi nào — dùng khi đã biết cần đo cái gì. Tương quan hỏi hai yếu tố “Có đi cùng nhau không?”, mạnh đến đâu. Nhân quả hỏi “A có gây ra B không?” — thường làm bằng thử nghiệm, khi cần chứng minh quan hệ nguyên nhân – kết quả trước khi đầu tư lớn. Lưu ý: khám phá không kém khoa học; lỗi là dùng vài cuộc phỏng vấn rồi kết luận cho cả thị trường.",
      gv: "Đây là phần quan trọng nhất của S3 — đi chậm.",
      next: "Ba ví dụ minh họa, bắt đầu với khám phá.",
    });
    const ds = [["Khám phá", "Chuyện gì đang xảy ra?", "green"], ["Mô tả", "Ai, cái gì, bao nhiêu?", "yellow"], ["Tương quan", "Có đi cùng nhau không?", "blue"], ["Nhân quả", "A có gây ra B không?", "pink"]];
    const cw = 2.95, gap = 0.1;
    ds.forEach(([n, q, k], i) => {
      const x = MX + i * (cw + gap);
      s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y: 2.0, w: cw + 0.25, h: 1.3, fill: { color: COL[k] }, line: { type: "none" }, objectName: oname("chev") });
      T(s, n, { x: x + (i === 0 ? 0.1 : 0.55), y: 2.0, w: cw - 0.5, h: 1.3, align: "center", valign: "middle", bold: true, color: COL.bg });
      card(s, x + 0.05, 3.65, cw - 0.15, 2.2);
      T(s, `“${q}”`, { x: x + 0.3, y: 3.85, w: cw - 0.6, h: 1.8, fontSize: 26, color: COL[k], bold: true });
    });
  }

  // ===== Slide 19 =====
  {
    const s = newSlide(19, "Doanh số kem giảm mà không rõ lý do: bắt đầu bằng khám phá", S3, {
      say: "Ví dụ minh họa — từ video bài giảng — cho nghiên cứu khám phá. Một thương hiệu kem thấy doanh số kem mùa hè giảm, không rõ lý do — giảm đột ngột mà không rõ vì sao. Họ đi trò chuyện với khách và chủ cửa hàng, và phát hiện đối thủ kem ít đường: một đối thủ mới vừa tung ra dòng kem ít đường. Nghiên cứu khám phá không cho câu trả lời cuối cùng; điều họ có được là giả thuyết, chưa phải kết luận — để kiểm tra tiếp. Khám phá tạo giả thuyết.",
      next: "Khi đã biết cần đo cái gì, ta chuyển sang nghiên cứu mô tả.",
    });
    await iconDot(s, "FaIceCream", MX, 1.95, 1.3, "green");
    T(s, "Doanh số kem mùa hè giảm, không rõ lý do", { x: 2.25, y: 1.95, w: 8.6, h: 1.3, valign: "middle", fontSize: 28 });
    T(s, "(minh họa)", { x: 10.9, y: 1.95, w: 1.83, h: 1.3, valign: "middle", align: "right", italic: true, color: COL.muted });
    const st = [["Trò chuyện với khách và chủ cửa hàng", null], ["Phát hiện đối thủ kem ít đường", null], ["Giả thuyết, chưa phải kết luận", "yellow"]];
    const cw = 3.6, gap = 0.665;
    st.forEach(([t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.8, cw, 2.2, k ? COL[k] : COL.card);
      T(s, t, { x: x + 0.25, y: 3.8, w: cw - 0.5, h: 2.2, valign: "middle", bold: !!k, fontSize: 26, color: k ? COL.bg : COL.text });
      if (i < 2) arrow(s, x + cw + 0.1, 4.65, 0.45, 0.5, "muted");
    });
  }

  // ===== Slide 20 =====
  {
    const s = newSlide(20, "Ai đặt đồ ăn cuối tuần, lúc nào, bao nhiêu: đó là mô tả", S3, {
      say: "Ví dụ minh họa từ video cho nghiên cứu mô tả: một ứng dụng giao đồ ăn muốn tăng đơn cuối tuần. Họ khảo sát, và thấy phần lớn người đặt cuối tuần thuộc nhóm 18–30, sinh viên đặt muộn — sinh viên ở thành phố lớn hay đặt muộn. Họ tung chương trình ưu đãi đêm khuya cho sinh viên. Nghiên cứu mô tả: trả lời cái gì, không trả lời vì sao.",
      gv: "Không đưa con số cụ thể vì không có nguồn.",
      next: "Muốn nói “A gây ra B” thì phải có thử nghiệm có kiểm soát.",
    });
    await iconDot(s, "FaMotorcycle", MX, 1.95, 1.3, "yellow");
    T(s, "Ứng dụng giao đồ ăn muốn tăng đơn cuối tuần", { x: 2.25, y: 1.95, w: 8.6, h: 1.3, valign: "middle", fontSize: 28 });
    T(s, "(minh họa)", { x: 10.9, y: 1.95, w: 1.83, h: 1.3, valign: "middle", align: "right", italic: true, color: COL.muted });
    const cw = 3.6, gap = 0.665;
    ["Khảo sát", "Nhóm 18–30, sinh viên đặt muộn", "Ưu đãi đêm khuya"].forEach((t, i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 3.65, cw, 1.7);
      T(s, t, { x: x + 0.25, y: 3.65, w: cw - 0.5, h: 1.7, valign: "middle", fontSize: 26 });
      if (i < 2) arrow(s, x + cw + 0.1, 4.25, 0.45, 0.5, "muted");
    });
    card(s, MX, 5.75, CW, 0.95, COL.yellow);
    T(s, [{ text: "Trả lời " }, { text: "cái gì", options: { bold: true, italic: true } }, { text: ", không trả lời " }, { text: "vì sao", options: { bold: true, italic: true } }, { text: "." }],
      { x: MX + 0.3, y: 5.75, w: CW - 0.6, h: 0.95, valign: "middle", fontSize: 28, color: COL.bg });
  }

  // ===== Slide 21 =====
  {
    const s = newSlide(21, "Chỉ thử nghiệm có kiểm soát mới cho phép nói \"A gây ra B\"", S3, {
      say: "Ví dụ minh họa cho nghiên cứu nhân quả: một shop thời trang trực tuyến cho hai nhóm khách ngẫu nhiên xem hai kiểu ảnh sản phẩm. Nhóm A (ngẫu nhiên) xem áo treo trên móc; nhóm B (ngẫu nhiên) xem người mẫu mặc; rồi so tỷ lệ mua. Hai điều kiện: chia ngẫu nhiên, và chỉ đổi một yếu tố — ở đây là ảnh. Vì vậy khác biệt về tỷ lệ mua có thể quy cho ảnh. Đó là thử nghiệm, thường gọi là A/B testing — cách chuẩn để kết luận nhân quả.",
      next: "Còn nếu chỉ thấy hai thứ cùng tăng thì sao?",
    });
    FIG_ALT[21] = "Thử nghiệm A/B: hai nhóm khách ngẫu nhiên xem hai kiểu ảnh sản phẩm khác nhau.";
    fig(s, MX, 1.9, CW, 4.0);
    T(s, "(minh họa)", { x: 10.9, y: 6.2, w: 1.83, h: 0.5, align: "right", italic: true, color: COL.muted });
    const fr = [["Nhóm A (ngẫu nhiên)", "Áo treo trên móc", "FaTshirt", "blue"], ["Nhóm B (ngẫu nhiên)", "Người mẫu mặc", "FaUser", "orange"]];
    for (let i = 0; i < 2; i++) {
      const y = 1.9 + i * 2.15, [h, sub, ic, k] = fr[i];
      card(s, MX, y, 5.7, 1.85);
      await iconDot(s, ic, MX + 0.3, y + 0.35, 1.15, k);
      T(s, h, { x: MX + 1.7, y: y + 0.3, w: 3.9, h: 0.6, bold: true, color: COL[k] });
      T(s, sub, { x: MX + 1.7, y: y + 0.95, w: 3.9, h: 0.6 });
      line(s, 6.4, y + 0.92, 1.25, 3.9 - (y + 0.92), "muted", { endArrowType: "triangle" });
    }
    card(s, 7.7, 2.9, 5.03, 2.0, COL.yellow);
    T(s, "Tỷ lệ mua", { x: 7.7, y: 2.9, w: 5.03, h: 2.0, align: "center", valign: "middle", bold: true, fontSize: 34, color: COL.bg });
  }

  // ===== Slide 22 =====
  {
    const s = newSlide(22, "Cùng tăng chưa chắc là nguyên nhân", S3, {
      say: "Lỗi hiểu thường gặp: thấy hai thứ cùng tăng là kết luận được cái này gây ra cái kia. Tháng chi nhiều cho quảng cáo, doanh thu cũng cao — vậy quảng cáo gây ra doanh thu? Chưa chắc: có thể cả hai cùng tăng vì mùa Tết — mùa lễ Tết. Nghiên cứu tương quan chỉ cho biết hai yếu tố đi cùng nhau; muốn nói nhân quả phải có thử nghiệm kiểm soát được các yếu tố khác. Cùng tăng chưa chắc là nguyên nhân.",
      ask: "“Còn yếu tố nào khác có thể làm cả hai cùng tăng?”",
      next: "Tiêu chí thứ ba — theo tính chất nghiên cứu — chia thành định tính và định lượng.",
    });
    T(s, "Tháng chi nhiều cho quảng cáo, doanh thu cũng cao", { x: MX, y: 1.8, w: CW, h: 0.6, color: COL.muted });
    card(s, 4.9, 2.6, 3.5, 1.0, COL.yellow);
    T(s, "Mùa Tết", { x: 4.9, y: 2.6, w: 3.5, h: 1.0, align: "center", valign: "middle", bold: true, fontSize: 30, color: COL.bg });
    line(s, 5.4, 3.6, -2.2, 1.3, "yellow", { endArrowType: "triangle" });
    line(s, 7.9, 3.6, 2.2, 1.3, "yellow", { endArrowType: "triangle" });
    card(s, MX, 4.9, 4.6, 1.1);
    T(s, "Quảng cáo", { x: MX, y: 4.9, w: 4.6, h: 1.1, align: "center", valign: "middle", bold: true, fontSize: 28 });
    card(s, 8.13, 4.9, 4.6, 1.1);
    T(s, "Doanh thu", { x: 8.13, y: 4.9, w: 4.6, h: 1.1, align: "center", valign: "middle", bold: true, fontSize: 28 });
    line(s, 5.35, 5.45, 2.65, 0, "pink", { dashType: "dash", endArrowType: "triangle" });
    T(s, "gây ra?", { x: 5.3, y: 5.6, w: 2.75, h: 0.55, align: "center", bold: true, color: COL.pink });
    T(s, "Có thể cả hai cùng tăng vì mùa Tết", { x: MX, y: 6.3, w: 10, h: 0.55, bold: true, color: COL.yellow });
  }

  // ===== Slide 23 =====
  {
    const s = newSlide(23, "Định tính để hiểu sâu, định lượng để đo trên diện rộng", S3, {
      say: "Theo tính chất nghiên cứu: định tính hay định lượng. Mục đích: định tính để hiểu sâu, xây dựng lý thuyết — quy nạp; định lượng để đo lường, kiểm định giả thuyết — suy diễn. Dữ liệu: lời nói, văn bản, hình ảnh, âm thanh, so với con số, tỷ lệ, thống kê. Cỡ mẫu: định tính nhỏ, không đại diện; định lượng lớn, hướng tới đại diện. Phương pháp: phỏng vấn sâu, focus group — phỏng vấn nhóm điển hình — và netnography; định lượng là khảo sát, thử nghiệm, panel — nhóm cố định. Kết hợp cả hai = mixed methods: định tính trước, định lượng sau. Buổi 5 nhóm chọn hướng; hôm nay chỉ cần thấy khác nhau ở đâu.",
      next: "Lý thuyết đủ rồi — thử dùng ngay.",
    });
    const rows = [["Mục đích", "Hiểu sâu, xây dựng lý thuyết", "Đo lường, kiểm định giả thuyết"], ["Dữ liệu", "Lời nói, văn bản, hình ảnh", "Con số, tỷ lệ"], ["Cỡ mẫu", "Nhỏ", "Lớn, hướng tới đại diện"], ["Phương pháp", "Phỏng vấn sâu, focus group", "Khảo sát, thử nghiệm, panel"]];
    const x1 = 3.3, x2 = 8.1, w1 = 4.6;
    card(s, x1 - 0.15, 1.85, w1 + 0.1, 0.75, COL.purple);
    T(s, "Định tính", { x: x1, y: 1.85, w: w1, h: 0.75, valign: "middle", bold: true, fontSize: 28 });
    card(s, x2 - 0.15, 1.85, w1 + 0.15, 0.75, COL.blue);
    T(s, "Định lượng", { x: x2, y: 1.85, w: w1, h: 0.75, valign: "middle", bold: true, fontSize: 28, color: COL.bg });
    rows.forEach(([l, a, b], i) => {
      const y = 2.75 + i * 0.92;
      if (i % 2 === 0) card(s, MX - 0.1, y - 0.04, CW + 0.2, 0.9, COL.card);
      T(s, l, { x: MX, y, w: 2.5, h: 0.82, valign: "middle", bold: true, color: COL.muted });
      T(s, a, { x: x1, y, w: w1, h: 0.82, valign: "middle" });
      T(s, b, { x: x2, y, w: w1, h: 0.82, valign: "middle" });
    });
    T(s, [{ text: "Kết hợp cả hai = " }, { text: "mixed methods", options: { bold: true, italic: true } }], { x: MX, y: 6.45, w: 9, h: 0.55, color: COL.green });
  }

  // ===== Slide 24 =====
  const SIT = ["Doanh số kem giảm không rõ lý do: đi trò chuyện", "Giao đồ ăn: ai đặt cuối tuần, giờ đặt, số tiền", "Chia ngẫu nhiên: ảnh áo treo móc vs người mẫu", "Quảng cáo Facebook và doanh thu biến động cùng chiều?", "Giảng viên kiểm định mô hình niềm tin → ý định mua", "Phỏng vấn sâu 12 khách trung thành mỹ phẩm Việt"];
  {
    const s = newSlide(24, "Phân loại nhanh: 30 giây bàn với bạn, rồi giơ tay", S4, {
      say: "Bây giờ mình thử dùng ngay ba tiêu chí vừa học. Tôi đọc 6 tình huống; mỗi tình huống, các bạn có 30 giây bàn với bạn bên cạnh, rồi khi tôi đếm 3–2–1 thì giơ tay: 1 ngón là khám phá, 2 ngón là mô tả, 3 ngón là tương quan, 4 ngón là nhân quả. Cả lớp giơ cùng lúc, không nhìn bạn khác. Mỗi lần bấm hiện một dòng: " + SIT.map((t, i) => `(${i + 1}) ${t}`).join("; ") + ".",
      gv: "Kịch bản trong W1_activity_phan_loai_nhanh.md. Mỗi tình huống: đọc → 30 giây thảo luận → 3–2–1 giơ tay → nói đáp án trong 1 câu. Ít bạn giơ tay: nhắc “sai cũng không sao — đây là luyện tập”, giảng viên giơ tay làm mẫu. Lớp gần như đúng hết 3 tình huống đầu: đọc nhanh 4–6. Lớp chia rẽ ở hầu hết tình huống: dừng sau tình huống 3, nhắc lại bảng 4 loại thiết kế. Chạy quá giờ: bỏ tình huống 5, giữ 3 và 4.",
      ask: "Đọc to từng tình huống (nguyên văn phiếu hoạt động): (1) Một thương hiệu kem thấy doanh số mùa hè giảm đột ngột mà không rõ lý do. Họ đi trò chuyện với khách hàng và chủ các cửa hàng bán lẻ để tìm hiểu chuyện gì đang xảy ra. (2) Một ứng dụng giao đồ ăn muốn biết ai là người đặt hàng vào cuối tuần: độ tuổi, giờ đặt, số tiền mỗi đơn. (3) Một shop thời trang trực tuyến chia ngẫu nhiên khách truy cập thành hai nhóm: nhóm A xem ảnh áo treo trên móc, nhóm B xem ảnh người mẫu mặc. Sau hai tuần, so sánh tỷ lệ mua của hai nhóm. (4) Một chuỗi cà phê muốn biết chi phí quảng cáo Facebook hằng tháng và doanh thu hằng tháng có biến động cùng chiều với nhau không, và mức độ ra sao. (5) Một nhóm giảng viên đại học kiểm định mô hình về ảnh hưởng của niềm tin đến ý định mua hàng trực tuyến của người tiêu dùng trẻ, để đóng góp cho lý thuyết hành vi người tiêu dùng. (6) Một thương hiệu mỹ phẩm nội địa phỏng vấn sâu 12 khách hàng trung thành để hiểu vì sao họ chọn mỹ phẩm Việt thay vì hàng ngoại. Sau đó hỏi thêm: định tính hay định lượng? hàn lâm hay ứng dụng?",
      next: "Giờ xem đáp án và dấu hiệu nhận biết từng loại.",
    });
    const FINGERS = [["1 ngón", "Khám phá", "green"], ["2 ngón", "Mô tả", "yellow"], ["3 ngón", "Tương quan", "blue"], ["4 ngón", "Nhân quả", "pink"]];
    const cw = 2.85, gap = 0.233;
    FINGERS.forEach(([n, t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.8, cw, 1.1, COL[k]);
      T(s, n, { x: x + 0.2, y: 1.8, w: cw - 0.4, h: 0.55, align: "center", valign: "bottom", bold: true, color: COL.bg });
      T(s, t, { x: x + 0.2, y: 2.35, w: cw - 0.4, h: 0.5, align: "center", color: COL.bg });
    });
    SIT.forEach((t, i) => {
      const x = MX + Math.floor(i / 3) * 6.15, y = 3.2 + (i % 3) * 1.15;
      T(s, [{ text: `${i + 1}  `, options: { bold: true, color: COL.yellow } }, { text: t }], { x, y, w: 5.95, h: 1.05, valign: "middle", objectName: `ANIM-24-${i}` });
    });
  }

  // ===== Slide 25 =====
  {
    const s = newSlide(25, "Đáp án: dấu hiệu nhận biết từng loại", S4, {
      say: "Đáp án. (1) Khám phá, định tính, ứng dụng — “không rõ lý do”, đi trò chuyện để tìm hiểu. (2) Mô tả, định lượng, ứng dụng — ai, khi nào, bao nhiêu. (3) Nhân quả, định lượng, ứng dụng — chia ngẫu nhiên, chỉ thay đổi một yếu tố, so sánh kết quả. (4) Tương quan, định lượng, ứng dụng — “biến động cùng chiều”, “mức độ”, không có thử nghiệm. (5) Tương quan (kiểm định mô hình), định lượng, hàn lâm — đóng góp cho lý thuyết, không gắn với một doanh nghiệp. (6) Khám phá, định tính, ứng dụng — phỏng vấn sâu, cỡ mẫu nhỏ, “hiểu vì sao”. Thiết kế, dữ liệu, mục tiêu — ba cột ứng với ba tiêu chí.",
      gv: "Hiện slide sau khi lớp đã trả lời. Chữa kỹ 2 tình huống lớp chia rẽ nhiều nhất, chắc chắn có tình huống 3 và 4. 3 và 4 hay bị nhầm — câu chốt: có thể cả hai cùng tăng vì mùa Tết; chỉ khi chia ngẫu nhiên và chỉ đổi một yếu tố như tình huống 3 mới nói được nhân quả. Tình huống 5: chấp nhận “tương quan”, nhấn điểm chính là hàn lâm. Tình huống 6: 12 người, hỏi sâu “vì sao” → khám phá, định tính; không dùng để nói “bao nhiêu phần trăm khách hàng”.",
      ask: "“Vì sao tình huống 3 cho phép nói ‘ảnh người mẫu làm tăng tỷ lệ mua’, còn tình huống 4 thì không?” · “Tình huống nào dễ nhầm nhất? Dấu hiệu nào giúp phân biệt?”",
      next: "Nghỉ giải lao 15 phút trước khi đi vào tiến trình nghiên cứu.",
    });
    const head = ["#", "Thiết kế", "Dữ liệu", "Mục tiêu"];
    const data = [["1", "Khám phá", "Định tính", "Ứng dụng"], ["2", "Mô tả", "Định lượng", "Ứng dụng"], ["3", "Nhân quả", "Định lượng", "Ứng dụng"], ["4", "Tương quan", "Định lượng", "Ứng dụng"], ["5", "Tương quan", "Định lượng", "Hàn lâm"], ["6", "Khám phá", "Định tính", "Ứng dụng"]];
    const kOf = { "Khám phá": "green", "Mô tả": "yellow", "Tương quan": "blue", "Nhân quả": "pink" };
    const xs = [MX, 1.7, 5.6, 9.2], ws = [0.9, 3.7, 3.4, 3.53];
    head.forEach((h, j) => T(s, h, { x: xs[j], y: 1.8, w: ws[j], h: 0.6, valign: "middle", bold: true, color: COL.muted }));
    data.forEach((r, i) => {
      const y = 2.5 + i * 0.7;
      if (i === 2 || i === 3) card(s, MX - 0.15, y - 0.04, CW + 0.3, 0.64, COL.card);
      r.forEach((c, j) => {
        const opt = { x: xs[j], y, w: ws[j], h: 0.56, valign: "middle" };
        if (j === 1) Object.assign(opt, { bold: true, color: COL[kOf[c]] });
        if (j === 3 && c === "Hàn lâm") Object.assign(opt, { bold: true, color: COL.orange });
        T(s, c, opt);
      });
    });
  }

  // ===== Slide 26 =====
  {
    const s = newSlide(26, "Giải lao 15 phút", SB, {
      say: "Giải lao 15 phút — phút 48 đến 63 của buổi học. Quay lại lúc: [cần giảng viên xác nhận] — giờ cụ thể giảng viên điền. Sau giải lao, chúng ta đi qua tiến trình sáu bước của một nghiên cứu, đạo đức nghiên cứu, hệ thống thông tin marketing, và ai làm, ai dùng nghiên cứu.",
      gv: "Outline ghi “Quay lại lúc …” [giảng viên điền giờ].",
      next: "Sau giải lao: một nghiên cứu diễn ra như thế nào, từ đầu đến cuối.",
    });
    await iconDot(s, "FaClock", 5.42, 1.9, 2.5, "orange");
    T(s, "15 phút", { x: MX, y: 4.55, w: CW, h: 1.0, align: "center", valign: "middle", fontSize: 54, bold: true, color: COL.orange });
    yellowBox(s, 2.17, 5.75, 9.0, 0.8, "Quay lại lúc: [cần giảng viên xác nhận]");
  }

  // ===== Slide 27 =====
  {
    const s = newSlide(27, "Mọi nghiên cứu đi qua sáu bước, theo đúng thứ tự", S5, {
      say: "Mọi nghiên cứu marketing tiêu chuẩn đều đi qua một tiến trình tuần tự gồm 6 bước: xác định vấn đề nghiên cứu; xác định mục tiêu nghiên cứu; xây dựng mô hình nghiên cứu; thu thập dữ liệu; chuẩn bị và phân tích dữ liệu; trình bày kết quả. Tóm gọn: vấn đề, mục tiêu, mô hình, thu thập, chuẩn bị & phân tích, trình bày. Thay vì định nghĩa từng bước, mình đi qua một ví dụ (giả định): chuỗi trà sữa gần trường đại học.",
      gv: "[BOARD: vẽ 6 ô trống lên bảng, điền dần theo ví dụ trà sữa; mỗi bước hỏi lớp trước khi đưa đáp án.] Một số video gộp bước 2–3 thành “lập kế hoạch nghiên cứu” và thêm bước “ra quyết định / hành động”; có thể nói thêm: sau bước 6 là quyết định của nhà quản trị. Bài giảng Văn Lang chia 4 giai đoạn với 10 bước con — nếu sinh viên hỏi: bảng đối chiếu trong tài liệu đọc thêm; trên lớp chỉ dùng 6 bước.",
      next: "Bước 1 bắt đầu từ câu hỏi của giám đốc chuỗi trà sữa.",
    });
    const st = ["Vấn đề", "Mục tiêu", "Mô hình", "Thu thập", "Chuẩn bị & phân tích", "Trình bày"];
    const ks = ["pink", "orange", "yellow", "green", "blue", "purple"];
    st.forEach((t, i) => {
      const y = 1.8 + i * 0.83;
      dot(s, 3.4, y, 0.7, ks[i], i + 1, 26);
      card(s, 4.35, y, 5.6, 0.7);
      T(s, t, { x: 4.65, y, w: 5.2, h: 0.7, valign: "middle" });
    });
  }

  // ===== Slide 28 =====
  {
    const s = newSlide(28, "\"Có nên giảm giá?\" là câu hỏi quản trị; \"Vì sao sinh viên mua ít đi?\" mới là vấn đề nghiên cứu", S5, {
      say: "Bước 1 — xác định vấn đề. Tình huống (giả định): doanh số cửa hàng gần trường giảm — giám đốc một chuỗi trà sữa thấy doanh số ở các cửa hàng gần trường đại học giảm rõ rệt so với cùng kỳ năm trước. Câu hỏi của giám đốc: “Có nên giảm giá?” Đó là vấn đề quản trị — cần làm gì? Nhà nghiên cứu phải chuyển nó thành vấn đề nghiên cứu — cần biết gì? — “Vì sao sinh viên mua ít đi?”, hay theo bài giảng: “Những yếu tố nào khiến sinh viên mua ít hơn?”. Chưa nghiên cứu thì chưa biết nguyên nhân nào đúng.",
      gv: "Ghi rõ đây là tình huống giả định.",
      ask: "“Còn những nguyên nhân nào có thể khiến doanh số giảm?” — để lớp đưa ra 4–5 khả năng: giá, chất lượng, đối thủ, kỳ nghỉ, dịch vụ giao hàng…",
      next: "Làm sao xác định đúng vấn đề — và vì sao bước này quan trọng nhất?",
    });
    T(s, "Tình huống (giả định): doanh số cửa hàng gần trường giảm", { x: MX, y: 1.85, w: CW, h: 0.6, color: COL.muted, italic: true });
    [["Vấn đề quản trị", "Cần làm gì?", "“Có nên giảm giá?”", "orange"], ["Vấn đề nghiên cứu", "Cần biết gì?", "“Vì sao sinh viên mua ít đi?”", "green"]].forEach(([h, q, ex, k], i) => {
      const x = i === 0 ? MX : 7.33;
      card(s, x, 2.7, 5.4, 3.9);
      T(s, h, { x: x + 0.35, y: 2.95, w: 4.7, h: 0.6, bold: true, fontSize: 28, color: COL[k] });
      card(s, x + 0.35, 3.7, 3.0, 0.65, COL[k]);
      T(s, q, { x: x + 0.35, y: 3.7, w: 3.0, h: 0.65, align: "center", valign: "middle", bold: true, color: COL.bg });
      T(s, ex, { x: x + 0.35, y: 4.6, w: 4.7, h: 1.8, fontSize: 28, italic: true });
    });
    arrow(s, 6.15, 4.25, 1.0, 0.8, "yellow");
  }

  // ===== Slide 29 =====
  {
    const s = newSlide(29, "Xác định sai vấn đề thì cả nghiên cứu đi sai hướng", S5, {
      say: "Để chuyển vấn đề quản trị thành vấn đề nghiên cứu, có bốn cách: thảo luận với người ra quyết định; hỏi chuyên gia — hỏi ý kiến người trong ngành; phân tích dữ liệu thứ cấp — xem dữ liệu bán hàng có sẵn; và nghiên cứu định tính thăm dò — có thể phỏng vấn thử vài khách hàng. Đây là bước quan trọng nhất: xác định sai vấn đề thì mọi bước sau đều đi sai hướng. Nếu giám đốc cứ thế giảm giá mà lý do thật là một đối thủ mới mở ngay cổng trường với không gian ngồi học miễn phí, giảm giá chỉ làm mất lợi nhuận.",
      gv: "Slide UEF #10 có ô “Tiếp cận khách hàng” lặp 2 lần — đã bỏ; giữ đúng 4 cách theo outline.",
      next: "Khi vấn đề đã rõ, bước 2 và 3 quyết định mình sẽ đo cái gì.",
    });
    s.addShape(pres.shapes.OVAL, { x: 5.17, y: 3.0, w: 3.0, h: 2.6, fill: { color: COL.yellow }, line: { type: "none" }, objectName: oname("hub") });
    T(s, "Vấn đề nghiên cứu", { x: 5.37, y: 3.0, w: 2.6, h: 2.6, align: "center", valign: "middle", bold: true, fontSize: 26, color: COL.bg });
    const its = [["FaComments", "Thảo luận với người ra quyết định", "green"], ["FaUserGraduate", "Hỏi chuyên gia", "blue"], ["FaChartBar", "Phân tích dữ liệu thứ cấp", "orange"], ["FaSearch", "Nghiên cứu định tính thăm dò", "pink"]];
    const ends = [[4.7, 2.75, 0.75, 0.75], [8.63, 2.75, -0.73, 0.75], [4.7, 5.65, 0.75, -0.55], [8.63, 5.65, -0.73, -0.55]];
    for (let i = 0; i < 4; i++) {
      const left = i % 2 === 0, x = left ? MX : 8.63, y = i < 2 ? 1.95 : 4.85;
      line(s, ...ends[i], its[i][2]);
      card(s, x, y, 4.1, 1.6);
      await iconDot(s, its[i][0], x + 0.25, y + 0.35, 0.9, its[i][2]);
      T(s, its[i][1], { x: x + 1.35, y, w: 2.6, h: 1.6, valign: "middle" });
    }
  }

  // ===== Slide 30 =====
  {
    const s = newSlide(30, "Từ mục tiêu đến mô hình: quyết định mình sẽ đo cái gì", S5, {
      say: "Bước 2 — mục tiêu nghiên cứu: nghiên cứu này cần biết những gì? Với ví dụ trà sữa (giả định): một, lý do sinh viên giảm mua; hai, so sánh với đối thủ chính — sinh viên đánh giá chuỗi so với đối thủ thế nào; ba, đề xuất giải pháp. Bước 3 — mô hình nghiên cứu: biến phụ thuộc là tần suất mua của sinh viên; biến độc lập có thể là giá, chất lượng đồ uống, khuyến mãi, không gian, tiện lợi khi đặt hàng. Mô hình cho biết mình sẽ đo cái gì. Biến độc lập, biến phụ thuộc sẽ học kỹ ở Buổi 6 và 9 — hôm nay chỉ cần thấy hình dạng.",
      next: "Có mô hình rồi, ba bước còn lại biến dữ liệu thành câu trả lời.",
    });
    card(s, MX, 1.85, 4.3, 4.85);
    T(s, "Mục tiêu", { x: MX + 0.3, y: 2.05, w: 2.0, h: 0.6, bold: true, fontSize: 28, color: COL.yellow });
    T(s, "(giả định)", { x: MX + 2.2, y: 2.05, w: 1.9, h: 0.6, italic: true, color: COL.muted, align: "right" });
    ["Lý do sinh viên giảm mua", "So sánh với đối thủ chính", "Đề xuất giải pháp"].forEach((t, i) => {
      const y = 2.85 + i * 1.2;
      dot(s, MX + 0.3, y + 0.15, 0.6, "yellow", i + 1);
      T(s, t, { x: MX + 1.1, y, w: 3.0, h: 0.95, valign: "middle" });
    });
    FIG_ALT[30] = "Năm yếu tố có thể ảnh hưởng đến tần suất mua trà sữa của sinh viên.";
    fig(s, 5.3, 1.85, 7.43, 4.85);
    T(s, "Biến độc lập", { x: 5.3, y: 1.85, w: 3.0, h: 0.5, color: COL.muted, bold: true });
    ["Giá", "Chất lượng", "Khuyến mãi", "Không gian", "Tiện lợi"].forEach((t, i) => {
      const y = 2.4 + i * 0.86;
      card(s, 5.3, y, 2.8, 0.7);
      T(s, t, { x: 5.3, y, w: 2.8, h: 0.7, align: "center", valign: "middle" });
      line(s, 8.1, y + 0.35, 1.25, 4.5 - (y + 0.35), "blue", { endArrowType: "triangle" });
    });
    T(s, "Biến phụ thuộc", { x: 9.45, y: 3.25, w: 3.28, h: 0.5, color: COL.muted, bold: true });
    card(s, 9.45, 3.8, 3.28, 1.4, COL.blue);
    T(s, "Tần suất mua", { x: 9.45, y: 3.8, w: 3.28, h: 1.4, align: "center", valign: "middle", bold: true, fontSize: 28, color: COL.bg });
  }

  // ===== Slide 31 =====
  {
    const s = newSlide(31, "Thu thập, phân tích, trình bày: dữ liệu thô phải thành câu trả lời cho nhà quản trị", S5, {
      say: "Bước 4 — thu thập: có thể kết hợp dữ liệu thứ cấp (dữ liệu bán hàng nội bộ), phỏng vấn ~10 SV — phỏng vấn sâu khoảng 10 sinh viên — rồi khảo sát ~200 SV, khoảng 200 sinh viên. Công cụ phải thiết kế cẩn thận, người thu thập được hướng dẫn kỹ để tránh sai lệch. Bước 5 — chuẩn bị & phân tích: hiệu chỉnh phiếu, mã hóa câu trả lời thành số, nhập & làm sạch, rồi phân tích. Bước 6 — trình bày: báo cáo khách quan, dễ hiểu, có đề xuất hành động. Giám đốc không đọc dữ liệu thô — họ cần câu trả lời cho câu hỏi ban đầu. Ví dụ trà sữa vẫn là giả định.",
      gv: "Slide UEF #12 + #13: đã sửa tiêu đề lặp chữ “Phân Tích Tích”; bỏ chữ “hồi quy” trên slide UEF #12 — vượt phạm vi học phần (chỉ là điểm cộng).",
      next: "Làm sai ở các bước này dẫn đến ba lỗi kinh điển.",
    });
    T(s, "(giả định)", { x: 10.9, y: 6.4, w: 1.83, h: 0.5, align: "right", italic: true, color: COL.muted });
    const cols = [["4", "Thu thập", "green", ["Dữ liệu thứ cấp", "Phỏng vấn ~10 SV", "Khảo sát ~200 SV"]], ["5", "Chuẩn bị & phân tích", "blue", ["Hiệu chỉnh", "Mã hóa", "Nhập & làm sạch", "Phân tích"]], ["6", "Trình bày", "purple", ["Báo cáo khách quan", "Có đề xuất"]]];
    const cw = 3.85, gap = 0.29;
    cols.forEach(([n, h, k, its], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 4.35);
      dot(s, x + 0.3, 2.2, 0.75, k, n, 28);
      T(s, h, { x: x + 1.2, y: 2.2, w: cw - 1.35, h: 0.75, valign: "middle", bold: true, color: k === "purple" ? COL.orange : COL[k] });
      its.forEach((t, j) => {
        T(s, (i === 1 && j > 0 ? "→ " : "• ") + t, { x: x + 0.35, y: 3.25 + j * (i === 2 ? 1.1 : 0.72), w: cw - 0.6, h: i === 2 ? 1.0 : 0.66, valign: "middle" });
      });
    });
  }

  // ===== Slide 32 =====
  {
    const s = newSlide(32, "Ba lỗi khiến nghiên cứu vô giá trị", S5, {
      say: "Ba lỗi kinh điển, từ các video bài giảng. Một, hỏi sai đối tượng — muốn biết sở thích thời trang của giới trẻ mà đi hỏi người trên 40 tuổi; bán điện thoại giá rẻ mà hỏi người giàu, như tình huống mở đầu buổi học. Hai, không thiết kế trước — in 1.000 phiếu rồi mới thấy câu hỏi sai: mất tiền, mất thời gian, phải làm lại. Ba, quyết định theo cảm tính — dùng giả định hoặc ý kiến cá nhân thay cho dữ liệu. Và một hiểu lầm: mẫu càng lớn thì kết quả càng đúng. Không — mẫu lớn ≠ mẫu đúng. Hỏi 5.000 người giàu về điện thoại giá rẻ vẫn sai. Buổi 8 sẽ học kỹ về chọn mẫu.",
      next: "Tránh được những lỗi này đòi hỏi một cách làm việc riêng — khoa học, hoài nghi và có đạo đức.",
    });
    const er = ["Hỏi sai đối tượng", "In 1.000 phiếu rồi mới thấy câu hỏi sai", "Quyết định theo cảm tính"];
    for (let i = 0; i < 3; i++) {
      const y = 1.95 + i * 1.5;
      card(s, MX, y, 7.6, 1.25);
      await iconDot(s, "FaTimes", MX + 0.25, y + 0.2, 0.85, "pink");
      T(s, er[i], { x: MX + 1.35, y, w: 6.05, h: 1.25, valign: "middle", fontSize: 26 });
    }
    card(s, 8.65, 1.95, 4.08, 4.25, COL.yellow);
    T(s, "Mẫu lớn ≠ mẫu đúng.", { x: 8.95, y: 1.95, w: 3.5, h: 4.25, valign: "middle", bold: true, fontSize: 40, color: COL.bg });
  }

  // ===== Slide 33 =====
  {
    const s = newSlide(33, "Nghiên cứu tốt cần khoa học, hoài nghi — và đạo đức", S5, {
      say: "Sáu đặc điểm của hoạt động nghiên cứu marketing: khoa học — dùng phương pháp khoa học; sáng tạo — mỗi vấn đề cần một thiết kế phù hợp; nhiều phương pháp; logic — từ vấn đề đến kết luận phải nối liền; hoài nghi — luôn hỏi dữ liệu có thật sự nói điều đó không; và đạo đức. Các bạn sắp đi hỏi người thật — bốn nguyên tắc đạo đức khi khảo sát này áp dụng cho dự án của các bạn: tự nguyện & được thông tin — biết nghiên cứu để làm gì, được quyền từ chối; ẩn danh & bảo mật; không đội lốt nghiên cứu — không dùng “khảo sát” để bán hàng; trung thực khi báo cáo — không bịa, không sửa, không chọn lọc dữ liệu cho đẹp.",
      gv: "[VERIFY: chuẩn ICC/ESOMAR; quy định của trường] — trên slide: [cần giảng viên xác nhận]. Bài giảng ghi chú: nếu muốn dẫn chuẩn quốc tế, đối chiếu Bộ quy tắc ICC/ESOMAR; trường không có quy định riêng về phiếu đồng ý khảo sát (giảng viên xác nhận).",
      next: "Một nghiên cứu như ví dụ trà sữa là một dự án — có bắt đầu, có kết thúc; nhưng doanh nghiệp cần thông tin mỗi ngày, vậy nghiên cứu marketing nằm ở đâu trong dòng thông tin đó?",
    });
    T(s, "Đặc điểm", { x: MX, y: 1.8, w: 5.6, h: 0.55, bold: true, fontSize: 28, color: COL.green });
    ["Khoa học", "Sáng tạo", "Nhiều phương pháp", "Logic", "Hoài nghi", "Đạo đức"].forEach((t, i) => {
      const x = MX + (i % 2) * 2.85, y = 2.5 + Math.floor(i / 2) * 1.05;
      card(s, x, y, 2.7, 0.85, i === 5 ? COL.green : COL.card);
      T(s, t, { x: x + 0.1, y, w: 2.5, h: 0.85, align: "center", valign: "middle", bold: i === 5, color: i === 5 ? COL.bg : COL.text });
    });
    T(s, "Đạo đức khi khảo sát", { x: 6.6, y: 1.8, w: 6.1, h: 0.55, bold: true, fontSize: 28, color: COL.pink });
    ["Tự nguyện & được thông tin", "Ẩn danh & bảo mật", "Không đội lốt nghiên cứu", "Trung thực khi báo cáo"].forEach((t, i) => {
      const y = 2.5 + i * 0.85;
      dot(s, 6.6, y + 0.1, 0.55, "pink", i + 1);
      T(s, t, { x: 7.35, y, w: 5.38, h: 0.75, valign: "middle" });
    });
    yellowBox(s, 6.6, 6.05, 6.13, 0.7);
  }

  // ===== Slide 34 =====
  {
    const s = newSlide(34, "Tình báo marketing theo dõi liên tục; nghiên cứu marketing trả lời một câu hỏi cụ thể", S5, {
      say: "Hệ thống thông tin marketing (MIS) tích hợp con người, thiết bị và quy trình để thu thập, phân tích và phân phối thông tin chính xác, kịp thời, hỗ trợ nhà quản lý ra quyết định. Bốn bộ phận. Báo cáo nội bộ — nhìn vào trong: đơn hàng, doanh số, tồn kho, kế toán. Tình báo marketing — nhìn ra ngoài: theo dõi liên tục đối thủ, xu hướng, môi trường. MDSS — hệ thống hỗ trợ ra quyết định — là công cụ ra quyết định, ví dụ mô hình dự báo doanh số. Nghiên cứu — dự án: bài toán cụ thể, tại một thời điểm. Báo cáo nội bộ & tình báo: liên tục; mỗi dự án nghiên cứu nằm rải trên dòng đó. Báo cáo nội bộ cho biết doanh số giảm; chỉ nghiên cứu cho biết vì sao.",
      gv: "MDSS chỉ nêu 1 câu (slide UEF #16 — MDSS chi tiết — có thể bỏ nếu thiếu giờ). Ví dụ tình báo từ video: các ứng dụng giao đồ ăn theo dõi khuyến mãi của nhau trước khi tung ưu đãi.",
      next: "Cuối cùng: ai làm nghiên cứu, và ai dùng nghiên cứu?",
    });
    FIG_ALT[34] = "Hệ thống thông tin marketing gồm 4 bộ phận; nghiên cứu marketing là các dự án riêng lẻ trên dòng thông tin liên tục.";
    fig(s, MX, 1.8, CW, 4.6);
    T(s, "Hệ thống thông tin marketing (MIS)", { x: MX, y: 1.8, w: CW, h: 0.5, bold: true, color: COL.muted });
    const parts = [["Báo cáo nội bộ", "nhìn vào trong", "green"], ["Tình báo", "nhìn ra ngoài", "blue"], ["MDSS", "công cụ ra quyết định", "orange"], ["Nghiên cứu", "dự án", "pink"]];
    const cw = 2.85, gap = 0.233;
    parts.forEach(([h, sub, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 2.4, cw, 1.75, i === 3 ? COL[k] : COL.card);
      T(s, h, { x: x + 0.2, y: 2.5, w: cw - 0.3, h: 0.5, bold: true, color: i === 3 ? COL.bg : COL[k] });
      T(s, sub, { x: x + 0.2, y: 3.15, w: cw - 0.4, h: 0.9, color: i === 3 ? COL.bg : COL.text });
    });
    T(s, "Báo cáo nội bộ & tình báo: liên tục", { x: MX, y: 4.45, w: CW, h: 0.5, color: COL.blue });
    arrow(s, MX, 5.35, CW, 0.5, "blue");
    [1.0, 4.95, 8.9].forEach((x) => {
      card(s, x, 5.05, 3.3, 1.1, COL.pink);
      T(s, "Dự án nghiên cứu", { x, y: 5.05, w: 3.3, h: 1.1, align: "center", valign: "middle", bold: true, color: COL.bg });
    });
  }

  // ===== Slide 35 =====
  {
    const s = newSlide(35, "Bạn sẽ hoặc làm, hoặc dùng nghiên cứu — người dùng giỏi biết nghiên cứu nào đáng tin", S5, {
      say: "Nguồn cung cấp: bên trong, bên ngoài. Người thực hiện, mỗi loại có ưu và nhược. Nội bộ — ưu: hiểu doanh nghiệp, chi phí thấp, bảo mật; nhược: dễ chủ quan, thiếu chuyên môn sâu. Công ty chuyên nghiệp — ưu: chuyên môn cao, khách quan, có công nghệ và dữ liệu quy mô lớn; nhược: chi phí cao. Cơ quan nhà nước, tổ chức phi chính phủ — ưu: vĩ mô, thường miễn phí — dữ liệu vĩ mô, tin cậy; nhược: không theo nhu cầu riêng của doanh nghiệp. Người sử dụng: nhà quản lý nội bộ — cần hiểu nghiên cứu để đặt đúng câu hỏi; bên mua thông tin: 6 tiêu chí — uy tín, phù hợp, cập nhật, phương pháp, tốc độ, chi phí. Người dùng giỏi biết nghiên cứu nào đáng tin.",
      gv: "[VERIFY: tên cơ quan thống kê hiện hành; GfK thuộc NielsenIQ] — trên slide: [cần giảng viên xác nhận]. Bài giảng: “Tổng cục Thống kê” từ 2025 đã tổ chức lại thành Cục Thống kê thuộc Bộ Tài chính; ví dụ công ty chuyên nghiệp: Nielsen, Kantar, Ipsos, GfK. Slide UEF #18: đã bỏ “Tổng cục Thống kê”. Nếu trễ giờ, chỉ dùng slide này 2 phút.",
      next: "Kiểm tra nhanh xem cả lớp đã nắm phần lý thuyết hôm nay chưa.",
    });
    card(s, MX, 1.8, 8.85, 0.55, COL.purple);
    T(s, "Nguồn cung cấp: bên trong · bên ngoài", { x: MX + 0.25, y: 1.8, w: 7.7, h: 0.55, valign: "middle", bold: true });
    T(s, "Người thực hiện", { x: MX + 0.2, y: 2.5, w: 2.85, h: 0.5, bold: true, color: COL.yellow });
    T(s, "Ưu", { x: MX + 3.1, y: 2.5, w: 2.6, h: 0.5, bold: true, color: COL.green });
    T(s, "Nhược", { x: MX + 6.45, y: 2.5, w: 2.4, h: 0.5, bold: true, color: COL.pink });
    [["Nội bộ", "Hiểu doanh nghiệp, chi phí thấp", "Dễ chủ quan", "green"], ["Công ty chuyên nghiệp", "Chuyên môn cao, khách quan", "Chi phí cao", "blue"], ["Cơ quan nhà nước", "Vĩ mô, thường miễn phí", "Không theo nhu cầu riêng", "orange"]].forEach(([h, p, m, k], i) => {
      const y = 3.05 + i * 1.05;
      card(s, MX, y, 8.85, 0.95);
      T(s, h, { x: MX + 0.2, y, w: 2.6, h: 0.95, valign: "middle", bold: true, color: COL[k] });
      T(s, p, { x: MX + 3.1, y, w: 3.3, h: 0.95, valign: "middle" });
      T(s, m, { x: MX + 6.45, y, w: 2.3, h: 0.95, valign: "middle" });
    });
    yellowBox(s, MX, 6.3, 5.6, 0.6);
    T(s, "Người sử dụng", { x: 9.65, y: 1.8, w: 3.08, h: 0.6, valign: "middle", bold: true, fontSize: 26, color: COL.yellow });
    card(s, 9.65, 2.45, 3.08, 4.3);
    T(s, "Nhà quản lý nội bộ", { x: 9.85, y: 2.6, w: 2.75, h: 0.85, bold: true });
    T(s, "Bên mua thông tin: 6 tiêu chí", { x: 9.85, y: 3.55, w: 2.75, h: 1.25, bold: true });
    T(s, "Uy tín · phù hợp · cập nhật · phương pháp · tốc độ · chi phí", { x: 9.85, y: 4.85, w: 2.75, h: 1.8, color: COL.muted });
  }

  // ===== Slide 36 =====
  {
    const s = newSlide(36, "Ba câu hỏi kiểm tra nhanh", S6, {
      say: "Ba câu hỏi kiểm tra nhanh. Một: bước nào quan trọng nhất? Vì sao? Mong đợi: bước 1 — xác định sai vấn đề thì cả nghiên cứu đi sai hướng. Hai: nghiên cứu marketing khác tình báo marketing ở đâu? Mong đợi: nghiên cứu trả lời câu hỏi cụ thể, tại một thời điểm, dạng dự án; tình báo theo dõi liên tục môi trường bên ngoài. Ba: doanh nghiệp nhỏ nên tự làm hay thuê công ty nghiên cứu? Mong đợi: tùy — tự làm thì rẻ, hiểu doanh nghiệp nhưng dễ chủ quan; thuê thì chuyên nghiệp, khách quan nhưng tốn kém. Câu trả lời tốt nêu được cả hai mặt.",
      gv: "Nếu câu 1 hoặc 2 nhiều bạn trả lời sai: dành 1 phút nhắc lại, ghi vào ghi chú sau buổi để ôn ở đầu Buổi 2.",
      ask: "Chỉ định phát biểu — mỗi câu 1 bạn, gọi ngẫu nhiên theo danh sách.",
      next: "Giờ đến lượt các nhóm áp dụng vào đề tài của chính mình.",
    });
    ["Bước nào quan trọng nhất? Vì sao?", "Nghiên cứu marketing khác tình báo marketing ở đâu?", "Doanh nghiệp nhỏ nên tự làm hay thuê công ty nghiên cứu?"].forEach((q, i) => {
      const y = 2.0 + i * 1.55;
      dot(s, MX, y + 0.1, 1.05, ["green", "blue", "orange"][i], i + 1, 36);
      card(s, MX + 1.35, y, 10.78, 1.25);
      T(s, q, { x: MX + 1.7, y, w: 10.2, h: 1.25, valign: "middle", fontSize: 28 });
    });
  }

  // ===== Slide 37 =====
  {
    const s = newSlide(37, "Xưởng đề tài (45'): từ quyết định kinh doanh đến vấn đề nghiên cứu", S7, {
      say: "45 phút tới là thời gian của nhóm; mỗi nhóm làm 4 chặng trên phiếu. Chặng 1, 10 phút: lập nhóm & chọn lĩnh vực — nhóm 2–3 bạn, chọn lĩnh vực mà các bạn hỏi được người thật, vì cuối kỳ phải thu dữ liệu; ghi một hiện tượng tích cực hoặc tiêu cực. Chặng 2, 10 phút: 3 câu hỏi quyết định — dạng “Có nên…?” hoặc “Nên chọn… hay…?”. Chặng 3, 15 phút: chuyển thành vấn đề nghiên cứu, phân loại, phác 6 bước. Chặng 4, 10 phút: 4–5 nhóm chia sẻ 1 phút. Sản phẩm: phiếu nhóm → hoàn thiện thành M1. Tôi sẽ đi từng nhóm.",
      gv: "Kịch bản trong W1_activity_xuong_de_tai.md. Để slide này trên màn hình suốt 45 phút. Ai chưa có nhóm có 3 phút; ai còn lẻ giơ tay để ghép. Câu chốt: “Một vấn đề nghiên cứu tốt trả lời được câu hỏi: giám đốc sẽ dùng kết quả này để quyết định điều gì?”",
      ask: "Thảo luận chung: “Vì sao ‘Có nên giảm giá không?’ chưa phải là một vấn đề nghiên cứu?” · “Đề tài nào trong lớp khó tiếp cận người trả lời nhất — và nhóm đó nên điều chỉnh thế nào?”",
      next: "Trước khi về, mỗi bạn tự kiểm tra mình đã hiểu gì.",
    });
    const st = [["10'", "Lập nhóm & chọn lĩnh vực", "green"], ["10'", "3 câu hỏi quyết định", "yellow"], ["15'", "Chuyển thành vấn đề nghiên cứu, phân loại, phác 6 bước", "blue"], ["10'", "4–5 nhóm chia sẻ 1 phút", "orange"]];
    const cw = 2.85, gap = 0.233;
    st.forEach(([m, t, k], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, 1.95, cw, 3.65);
      T(s, m, { x: x + 0.25, y: 2.05, w: cw - 0.5, h: 0.95, fontSize: 48, bold: true, color: COL[k] });
      T(s, `Chặng ${i + 1}`, { x: x + 0.25, y: 3.0, w: cw - 0.5, h: 0.5, color: COL.muted });
      T(s, t, { x: x + 0.25, y: 3.5, w: cw - 0.4, h: 2.0, bold: true });
    });
    card(s, MX, 5.9, CW, 0.85, COL.yellow);
    T(s, "Sản phẩm: phiếu nhóm → hoàn thiện thành M1", { x: MX + 0.3, y: 5.9, w: CW - 0.6, h: 0.85, valign: "middle", bold: true, fontSize: 26, color: COL.bg });
  }

  // ===== Slide 38 =====
  {
    const s = newSlide(38, "Trước khi về: một điều đã rõ, một điều còn mơ hồ", S8, {
      say: "Trước khi về, mỗi bạn viết ra hai dòng trên phiếu ra về: một điều hôm nay mình đã hiểu rõ, và một điều mình vẫn còn mơ hồ. Không ghi tên cũng được. Phiếu là một tờ giấy nhỏ hoặc trang cuối phiếu hoạt động. Tôi sẽ thu lại, đọc trước Buổi 2, và mở đầu Buổi 2 bằng 2–3 “điều còn mơ hồ” nhiều nhất.",
      gv: "Phát phiếu ra về trước khi nói. Thu phiếu cuối giờ.",
      next: "Và đây là bài tập cho tuần này.",
    });
    const its = [["FaCheck", "Một điều hôm nay mình đã hiểu rõ", "green"], ["FaQuestion", "Một điều mình vẫn còn mơ hồ", "yellow"]];
    for (let i = 0; i < 2; i++) {
      const x = MX + i * 6.25;
      card(s, x, 2.0, 5.88, 4.4);
      await iconDot(s, its[i][0], x + 2.94 - 0.75, 2.4, 1.5, its[i][2]);
      T(s, its[i][1], { x: x + 0.4, y: 4.2, w: 5.08, h: 1.8, align: "center", valign: "middle", bold: true, fontSize: 30 });
    }
  }

  // ===== Slide 39 =====
  {
    const s = newSlide(39, "Bài tập M1 và buổi sau", S8, {
      say: "Bài tập về nhà — M1 · Phiếu đăng ký đề tài sơ bộ. Nhóm · 2,5% điểm học phần. Hoàn thiện phiếu nhóm đã làm trên lớp, nộp LMS trước Buổi 2. Hạn nộp: [cần giảng viên xác nhận] — ngày giờ cụ thể sẽ thông báo. Đề bài và tiêu chí chấm có trong phiếu M1. Tự học: tài liệu đọc thêm Bài 1. Buổi 2: mỗi nhóm sẽ đi tìm tài liệu học thuật cho đề tài vừa đăng ký — và học cách phân biệt một nguồn đáng tin với một bài viết trên mạng. Mang máy tính.",
      gv: "[NEEDS PROFESSOR INPUT: ngày cụ thể và quy định nộp trễ] (outline: [giảng viên điền hạn]). Phiếu M1 còn mở: tên mục nộp bài trên LMS; quy định nộp trễ; mốc cho phép đổi đề tài.",
      next: "Câu nối: “Tuần sau mỗi nhóm đi tìm tài liệu cho chính đề tài vừa đăng ký.” — slide cuối là danh mục tài liệu tham khảo của bài, dùng làm mẫu APA 7.",
    });
    card(s, MX, 1.85, 6.6, 4.25);
    await iconDot(s, "FaClipboardList", MX + 0.35, 2.1, 1.0, "yellow");
    T(s, "M1 · Phiếu đăng ký đề tài sơ bộ", { x: MX + 1.6, y: 2.1, w: 4.8, h: 1.0, valign: "middle", bold: true, fontSize: 26, color: COL.yellow });
    T(s, "Nhóm · 2,5%", { x: MX + 0.4, y: 3.35, w: 5.9, h: 0.6, fontSize: 26 });
    T(s, "Nộp LMS trước Buổi 2", { x: MX + 0.4, y: 4.0, w: 5.9, h: 0.6, fontSize: 26 });
    yellowBox(s, MX + 0.35, 4.85, 5.9, 0.95, "Hạn nộp: [cần giảng viên xác nhận]");
    card(s, 7.45, 1.85, 5.28, 4.25, COL.blue);
    await iconDot(s, "FaLaptop", 7.8, 2.1, 1.0, "purple");
    T(s, "Buổi 2", { x: 9.05, y: 2.1, w: 3.4, h: 1.0, valign: "middle", bold: true, fontSize: 30, color: COL.bg });
    T(s, "Tìm tài liệu học thuật cho đề tài", { x: 7.8, y: 3.35, w: 4.6, h: 1.4, fontSize: 26, color: COL.bg });
    T(s, "Mang máy tính", { x: 7.8, y: 5.0, w: 4.6, h: 0.6, bold: true, fontSize: 26, color: COL.bg });
    T(s, "Tự học: tài liệu đọc thêm Bài 1", { x: MX, y: 6.35, w: 9, h: 0.55, color: COL.green, bold: true });
  }

  // ===== Slide 40 · Tài liệu tham khảo =====
  {
    const REFS = [
      [{ text: "American Marketing Association. (2017). " }, { text: "Definitions of marketing", options: { italic: true } }, { text: ". https://www.ama.org/the-definition-of-marketing-what-is-marketing/" }],
      [{ text: "Kotler, P., & Keller, K. L. (2012). " }, { text: "Marketing management", options: { italic: true } }, { text: " (14th ed.). Pearson Education." }],
      [{ text: "Malhotra, N. K. (2019). " }, { text: "Marketing research: An applied orientation", options: { italic: true } }, { text: " (7th ed.). Pearson." }],
      [{ text: "Nguyễn, Đ. T., & Nguyễn, T. M. T. (2015). " }, { text: "Giáo trình nghiên cứu thị trường", options: { italic: true } }, { text: ". Nhà xuất bản Kinh tế TP. Hồ Chí Minh." }],
    ];
    const plain = REFS.map((r) => r.map((x) => x.text).join(""));
    const s = newSlide(40, "Tài liệu tham khảo", SR, {
      say: "Không giảng. Slide liệt kê 4 tài liệu tham khảo theo APA 7, dùng làm ví dụ mẫu APA 7 khi nhắc sinh viên về Buổi 2–3: " + plain.join(" — "),
      next: "— (slide cuối).",
    });
    const hs = [1.25, 0.85, 0.85, 0.85];
    let y = 1.75;
    REFS.forEach((r, i) => {
      T(s, r, { x: MX, y, w: CW, h: hs[i] });
      y += hs[i] + 0.3;
    });
  }

  await pres.writeFile({ fileName: OUT });
  try {
    const { applyTheme } = require(process.env.APPLY_THEME || "./apply_theme.js");
    await applyTheme(OUT, THEME);
  } catch (e) { console.warn("applyTheme không chạy được:", e.message); }
  fs.writeFileSync(OUT.replace(/\.pptx$/, ".meta.json"), JSON.stringify({ figAlt: FIG_ALT, notes: NOTES }, null, 1));
  console.log("Wrote", OUT);
}
build().catch((e) => { console.error(e); process.exit(1); });
