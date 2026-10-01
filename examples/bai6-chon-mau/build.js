// Bài 6 – Chọn mẫu để nghiên cứu
// Build: npm i pptxgenjs && node build.js  → Bai6_Chon_mau_de_nghien_cuu.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.title = "Bài 6 – Chọn mẫu để nghiên cứu";

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
  white: "FFFFFF",
};
const PALETTE = [C.green, C.yellow, C.pink, C.plum, C.blue, C.orange];
const F = "Alexandria";
const M = 0.5;

// Section color coding (used in breadcrumb pill and accents)
const SEC = {
  intro: { label: "Giới thiệu", color: C.plum },
  s1: { label: "6.1  Lý do phải chọn mẫu", color: C.pink },
  s2: { label: "6.2  Khái niệm cơ bản", color: C.blue },
  s3: { label: "6.3  Quy trình chọn mẫu", color: C.green },
  s4: { label: "6.4  Chọn mẫu xác suất", color: C.plum },
  s5: { label: "6.5  Chọn mẫu phi xác suất", color: C.orange },
  end: { label: "Tổng kết & Bài tập", color: C.green },
};

let pageNo = 0;

function paletteStrip(slide, x, y, w, h) {
  const seg = w / PALETTE.length;
  PALETTE.forEach((c, i) =>
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + i * seg, y, w: seg, h, fill: { color: c }, line: { color: c, width: 0 },
    })
  );
}

// Standard content slide: breadcrumb pill, action title, footer
function contentSlide(sec, title) {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  pageNo += 1;
  const col = SEC[sec].color;
  // breadcrumb pill
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: M, y: 0.22, w: 2.9, h: 0.3, rectRadius: 0.15,
    fill: { color: col }, line: { color: col, width: 0 },
  });
  s.addText(SEC[sec].label, {
    x: M, y: 0.22, w: 2.9, h: 0.3, margin: 0,
    fontFace: F, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle",
  });
  // action title
  s.addText(title, {
    x: M, y: 0.58, w: 9.0, h: 0.85, margin: 0,
    fontFace: F, fontSize: 21, bold: true, color: C.ink, valign: "top",
  });
  // footer
  paletteStrip(s, M, 5.33, 1.2, 0.06);
  s.addText("Bài 6 · Chọn mẫu để nghiên cứu", {
    x: 1.85, y: 5.24, w: 5, h: 0.25, margin: 0,
    fontFace: F, fontSize: 9, color: C.muted, valign: "middle",
  });
  s.addText(String(pageNo + 1), {
    x: 8.9, y: 5.24, w: 0.6, h: 0.25, margin: 0,
    fontFace: F, fontSize: 10, bold: true, color: col, align: "right", valign: "middle",
  });
  return s;
}

// Card with colored top band and bullet content
function card(s, { x, y, w, h, color, head, items, size = 13, headSize = 15, headColor }) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: C.white }, line: { color: C.line, width: 1 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.18, y: y + 0.18, w: 0.5, h: 0.07, fill: { color }, line: { color, width: 0 },
  });
  s.addText(head, {
    x: x + 0.18, y: y + 0.3, w: w - 0.36, h: 0.45, margin: 0,
    fontFace: F, fontSize: headSize, bold: true, color: headColor || C.ink, valign: "top",
  });
  if (items) {
    s.addText(
      items.map((t) =>
        typeof t === "string"
          ? { text: t, options: { bullet: { indent: 12 }, breakLine: true } }
          : { text: t.text, options: { bullet: { indent: 12 }, breakLine: true, bold: !!t.bold } }
      ),
      {
        x: x + 0.12, y: y + 0.78, w: w - 0.3, h: h - 0.9, margin: 0,
        fontFace: F, fontSize: size, color: C.body, valign: "top", paraSpaceAfter: 5,
      }
    );
  }
}

function pill(s, x, y, w, h, color, text, opts = {}) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: Math.min(h / 2, 0.2),
    fill: { color }, line: { color, width: 0 },
  });
  s.addText(text, {
    x, y, w, h, margin: 2,
    fontFace: F, fontSize: opts.size || 12, bold: opts.bold !== false,
    color: opts.color || C.white, align: "center", valign: "middle",
  });
}

function note(s, text) {
  s.addText(text, {
    x: M, y: 4.93, w: 9.0, h: 0.26, margin: 0,
    fontFace: F, fontSize: 9.5, italic: true, color: C.muted, valign: "middle",
  });
}

// deterministic pseudo-random
let seed = 7;
function rnd() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

// ───────────────────────── 1. Title ─────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  // decorative circles (top-right)
  s.addShape(pres.shapes.OVAL, { x: 7.1, y: -1.0, w: 3.6, h: 3.6, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.5, y: 2.0, w: 1.9, h: 1.9, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 6.6, y: 2.75, w: 1.2, h: 1.2, fill: { color: C.blue }, line: { color: C.blue, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 7.75, y: 4.05, w: 0.7, h: 0.7, fill: { color: C.green }, line: { color: C.green, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.05, y: 4.35, w: 0.45, h: 0.45, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  // sample dots inside yellow circle: "a sample drawn from a population"
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 5; c++) {
      const hit = (r * 5 + c) % 4 === 1;
      s.addShape(pres.shapes.OVAL, {
        x: 8.05 + c * 0.32, y: 0.15 + r * 0.32, w: 0.18, h: 0.18,
        fill: { color: hit ? C.plum : C.white }, line: { color: hit ? C.plum : C.white, width: 0 },
      });
    }

  pill(s, M, 0.9, 1.5, 0.36, C.plum, "BÀI 6", { size: 13 });
  s.addText("Chọn mẫu\nđể nghiên cứu", {
    x: M, y: 1.4, w: 6.2, h: 1.7, margin: 0,
    fontFace: F, fontSize: 44, bold: true, color: C.ink, valign: "top", lineSpacingMultiple: 0.95,
  });
  s.addText("Chọn đúng mẫu giúp nghiên cứu marketing nhanh hơn, rẻ hơn — và có thể chính xác hơn điều tra toàn bộ", {
    x: M, y: 3.2, w: 5.9, h: 0.8, margin: 0,
    fontFace: F, fontSize: 15, color: C.body, valign: "top",
  });
  paletteStrip(s, M, 4.3, 2.4, 0.08);
  s.addText("Học phần Nghiên cứu Marketing", {
    x: M, y: 4.45, w: 6, h: 0.35, margin: 0, fontFace: F, fontSize: 12, color: C.muted,
  });
}

// ───────────────────────── 2. Objectives ─────────────────────────
{
  const s = contentSlide("intro", "Sau bài học, người học làm chủ được 5 năng lực chọn mẫu");
  const obj = [
    ["Giải thích", "vì sao phải chọn mẫu thay vì khảo sát toàn bộ thị trường"],
    ["Phân biệt", "đám đông, đám đông nghiên cứu, phần tử, đơn vị, khung mẫu, hiệu quả"],
    ["Vận dụng", "quy trình thiết kế mẫu 5 bước trong dự án nghiên cứu"],
    ["So sánh", "nhóm phương pháp chọn mẫu xác suất và phi xác suất"],
    ["Kiểm soát", "sai lệch do chọn mẫu (SE) và không do chọn mẫu (NE)"],
  ];
  const cols = [C.pink, C.blue, C.green, C.plum, C.orange];
  const w = 1.66, gap = 0.175;
  obj.forEach(([verb, txt], i) => {
    const x = M + i * (w + gap), y = 1.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h: 3.1, rectRadius: 0.1, fill: { color: C.white }, line: { color: C.line, width: 1 },
    });
    s.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.22, w: 0.62, h: 0.62, fill: { color: cols[i] }, line: { color: cols[i], width: 0 },
    });
    s.addText(String(i + 1), {
      x: x + 0.2, y: y + 0.22, w: 0.62, h: 0.62, margin: 0,
      fontFace: F, fontSize: 20, bold: true, color: C.white, align: "center", valign: "middle",
    });
    s.addText(verb, {
      x: x + 0.2, y: y + 1.0, w: w - 0.35, h: 0.4, margin: 0,
      fontFace: F, fontSize: 15, bold: true, color: cols[i],
    });
    s.addText(txt, {
      x: x + 0.2, y: y + 1.42, w: w - 0.35, h: 1.55, margin: 0,
      fontFace: F, fontSize: 12, color: C.body, valign: "top",
    });
  });
}

// ───────────────────────── 3. Roadmap ─────────────────────────
{
  const s = contentSlide("intro", "Bài học đi từ “vì sao phải chọn mẫu” đến “chọn mẫu như thế nào”");
  const rows = [
    ["6.1", "Lý do phải chọn mẫu", "Chi phí · thời gian · nghịch lý sai lệch", C.pink],
    ["6.2", "Các khái niệm cơ bản", "Đám đông · phần tử · đơn vị · khung mẫu · hiệu quả", C.blue],
    ["6.3", "Quy trình chọn mẫu", "5 bước, từ thị trường nghiên cứu đến thực địa", C.green],
    ["6.4", "Chọn mẫu theo xác suất", "Ngẫu nhiên đơn giản · hệ thống · phân tầng · theo nhóm", C.plum],
    ["6.5", "Chọn mẫu phi xác suất", "Thuận tiện · phán đoán · phát triển mầm · định mức", C.orange],
  ];
  rows.forEach(([n, t, d, col], i) => {
    const y = 1.55 + i * 0.68;
    pill(s, M, y, 0.9, 0.5, col, n, { size: 15 });
    s.addText(t, { x: 1.6, y, w: 3.2, h: 0.5, margin: 0, fontFace: F, fontSize: 16, bold: true, color: C.ink, valign: "middle" });
    s.addText(d, { x: 4.8, y, w: 4.7, h: 0.5, margin: 0, fontFace: F, fontSize: 12.5, color: C.body, valign: "middle" });
    if (i < rows.length - 1)
      s.addShape(pres.shapes.LINE, { x: 1.6, y: y + 0.59, w: 7.9, h: 0, line: { color: C.line, width: 1 } });
  });
}

// ───────────────────────── 4. Cost & time ─────────────────────────
{
  const s = contentSlide("s1", "Chọn mẫu giúp tiết kiệm chi phí và thời gian so với điều tra toàn bộ (census)");
  card(s, {
    x: M, y: 1.55, w: 4.4, h: 3.3, color: C.pink, head: "Tiết kiệm chi phí",
    items: [
      "Ngân sách luôn hữu hạn; chi phí thu thập, hiệu chỉnh, phân tích tỷ lệ thuận với kích thước mẫu",
      "Mẫu vừa đủ vẫn đủ tin cậy để suy rộng cho toàn thị trường",
      "Thử nghiệm sản phẩm (pre-/post-test): giảm chi phí hàng mẫu, vận chuyển, quà dùng thử",
    ],
  });
  card(s, {
    x: 5.1, y: 1.55, w: 4.4, h: 3.3, color: C.orange, head: "Tiết kiệm thời gian",
    items: [
      "Quyết định marketing cần tính thời sự và kịp thời",
      "Mẫu nhỏ rút ngắn đáng kể thời gian thu thập và xử lý dữ liệu",
      "Đáp ứng nhu cầu ra quyết định nhanh của nhà quản trị",
    ],
  });
}

// ───────────────────────── 5. Error paradox ─────────────────────────
{
  const s = contentSlide("s1", "Mẫu được kiểm soát tốt có thể chính xác hơn điều tra toàn bộ đám đông");
  const labels = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "N"];
  const se = [10, 7, 5.5, 4.5, 3.7, 3, 2.4, 1.7, 1, 0];
  const ne = [1, 1.5, 2, 2.6, 3.3, 4.1, 5, 6, 7.1, 8.3];
  const tot = se.map((v, i) => +(v + ne[i]).toFixed(1));
  s.addChart(pres.charts.LINE, [
    { name: "SE – do chọn mẫu", labels, values: se },
    { name: "NE – không do chọn mẫu", labels, values: ne },
    { name: "Tổng sai lệch", labels, values: tot },
  ], {
    x: 0.35, y: 1.45, w: 5.4, h: 3.45,
    chartColors: [C.blue, C.pink, C.plum],
    lineSize: 2.5, lineDataSymbol: "none",
    plotArea: { fill: { color: C.bg } },
    catAxisLabelColor: C.muted, valAxisLabelColor: C.muted,
    catAxisLabelFontFace: F, valAxisLabelFontFace: F,
    catAxisLabelFontSize: 10, valAxisLabelFontSize: 10,
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    catAxisTitle: "Kích thước mẫu n (so với quy mô đám đông N)", showCatAxisTitle: true,
    catAxisTitleColor: C.muted, catAxisTitleFontSize: 10, catAxisTitleFontFace: F,
    showLegend: true, legendPos: "t", legendFontFace: F, legendFontSize: 10, legendColor: C.body,
  });
  // annotation of the optimum
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.1, y: 2.22, w: 1.85, h: 0.34, rectRadius: 0.08, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 },
  });
  s.addShape(pres.shapes.LINE, { x: 3.02, y: 2.56, w: 0, h: 0.26, line: { color: C.plum, width: 1.5, endArrowType: "triangle" } });
  s.addText("Tổng sai lệch nhỏ nhất", {
    x: 2.1, y: 2.22, w: 1.85, h: 0.34, margin: 2, fontFace: F, fontSize: 9.5, bold: true, color: C.ink, align: "center", valign: "middle",
  });
  // right column
  s.addText([
    { text: "SE ", options: { bold: true, color: C.blue } },
    { text: "giảm dần về 0 khi n → N", options: { breakLine: true } },
    { text: "NE ", options: { bold: true, color: C.pink } },
    { text: "tăng theo n: thực địa, phỏng vấn, nhập liệu khó quản lý hơn", options: { breakLine: true } },
  ], {
    x: 6.0, y: 1.55, w: 3.5, h: 1.45, margin: 0, fontFace: F, fontSize: 13, color: C.body, valign: "top", paraSpaceAfter: 8,
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.0, y: 3.05, w: 3.5, h: 1.6, rectRadius: 0.08, fill: { color: C.plum }, line: { color: C.plum, width: 0 },
  });
  s.addText([
    { text: "Quy luật cân bằng", options: { bold: true, fontSize: 13, breakLine: true, color: C.yellow } },
    { text: "Nếu ΔNE − ΔSE > 0", options: { bold: true, fontSize: 17, breakLine: true } },
    { text: "tăng thêm n làm kết quả kém chính xác hơn → mẫu tốt thắng census", options: { fontSize: 11.5 } },
  ], {
    x: 6.15, y: 3.1, w: 3.2, h: 1.5, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 4,
  });
  note(s, "Đồ thị minh họa khái niệm, không phải số liệu thực nghiệm.");
}

// ───────────────────────── 6. Population vs study population ─────────────────────────
{
  const s = contentSlide("s2", "Đám đông nghiên cứu là phần đám đông mà nhà nghiên cứu thực sự tiếp cận được");
  // nested circles
  s.addShape(pres.shapes.OVAL, { x: 0.6, y: 1.5, w: 3.5, h: 3.35, fill: { color: C.blue, transparency: 80 }, line: { color: C.blue, width: 2 } });
  s.addShape(pres.shapes.OVAL, { x: 1.2, y: 2.25, w: 2.5, h: 2.4, fill: { color: C.blue, transparency: 55 }, line: { color: C.blue, width: 2 } });
  s.addShape(pres.shapes.OVAL, { x: 1.85, y: 3.25, w: 1.2, h: 1.15, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addText("Đám đông (N)", { x: 0.6, y: 1.68, w: 3.5, h: 0.35, margin: 0, fontFace: F, fontSize: 12, bold: true, color: C.ink, align: "center" });
  s.addText("Đám đông nghiên cứu", { x: 1.2, y: 2.5, w: 2.5, h: 0.35, margin: 0, fontFace: F, fontSize: 11.5, bold: true, color: C.ink, align: "center" });
  s.addText("Mẫu (n)", { x: 1.85, y: 3.25, w: 1.2, h: 1.15, margin: 0, fontFace: F, fontSize: 12, bold: true, color: C.ink, align: "center", valign: "middle" });

  const defs = [
    ["Đám đông (Population)", "Toàn bộ tập hợp đối tượng cần tìm hiểu theo mục tiêu và phạm vi nghiên cứu.", C.blue],
    ["Đám đông nghiên cứu (Study Population)", "Quy mô tiếp cận được qua dữ liệu thứ cấp — thường lệch so với lý thuyết do sai sót hoặc độ trễ dữ liệu.", C.plum],
    ["Phần tử (Element)", "Đối tượng trực tiếp cung cấp dữ liệu; đơn vị nhỏ nhất của đám đông.", C.orange],
  ];
  defs.forEach(([h, d, col], i) => {
    const y = 1.5 + i * 1.12;
    s.addShape(pres.shapes.RECTANGLE, { x: 4.6, y: y + 0.05, w: 0.07, h: 0.9, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(h, { x: 4.8, y, w: 4.7, h: 0.35, margin: 0, fontFace: F, fontSize: 13.5, bold: true, color: col });
    s.addText(d, { x: 4.8, y: y + 0.36, w: 4.7, h: 0.65, margin: 0, fontFace: F, fontSize: 11.5, color: C.body, valign: "top" });
  });
  note(s, "Ví dụ: người tiêu dùng sinh sống tại TP. Hồ Chí Minh, 18–45 tuổi. Ký hiệu: N = quy mô đám đông, n = kích thước mẫu.");
}

// ───────────────────────── 7. Sampling units ─────────────────────────
{
  const s = contentSlide("s2", "Đám đông được chia thành các đơn vị mẫu nhiều cấp, đến tận phần tử");
  const steps = [
    ["Đám đông", "TP. Hồ Chí Minh", C.plum],
    ["Đơn vị cấp 1", "Quận / Huyện", C.blue],
    ["Đơn vị cấp 2", "Phường / Xã", C.green],
    ["Đơn vị cấp 3", "Hộ gia đình", C.orange],
    ["Phần tử", "Cá nhân người tiêu dùng", C.pink],
  ];
  // funnel-like decreasing bars
  steps.forEach(([lvl, ex, col], i) => {
    const w = 5.6 - i * 0.85, x = M + (5.6 - w) / 2, y = 1.55 + i * 0.66;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.55, rectRadius: 0.1, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(lvl, { x, y, w, h: 0.55, margin: 0, fontFace: F, fontSize: 13, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(ex, { x: 6.35, y, w: 3.15, h: 0.55, margin: 0, fontFace: F, fontSize: 13, color: C.body, valign: "middle" });
    s.addShape(pres.shapes.LINE, { x: x + w + 0.08, y: y + 0.275, w: 6.25 - (x + w + 0.08), h: 0, line: { color: col, width: 1, dashType: "dash" } });
  });
  s.addText("Đơn vị chọn mẫu = nhóm thu được sau mỗi lần chia nhỏ đám đông; phần tử là đơn vị cuối cùng của quy trình.", {
    x: M, y: 4.85, w: 9.0, h: 0.35, margin: 0, fontFace: F, fontSize: 11, italic: true, color: C.muted, valign: "middle",
  });
}

// ───────────────────────── 8. Sampling frame ─────────────────────────
{
  const s = contentSlide("s2", "Khung mẫu là danh sách để rút mẫu — thiếu khung mẫu chuẩn là rào cản lớn nhất");
  // mock list
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.55, w: 4.5, h: 3.2, rectRadius: 0.08, fill: { color: C.white }, line: { color: C.line, width: 1 } });
  const hdr = ["STT", "Họ tên", "Địa chỉ", "Điện thoại"];
  const cw = [0.55, 1.35, 1.35, 0.95];
  const rows = [
    ["1", "Nguyễn Văn A", "Q.1", "09xx…"],
    ["2", "Trần Thị B", "Q.3", "09xx…"],
    ["3", "Lê Văn C", "Q.7", "09xx…"],
    ["4", "Phạm Thị D", "Thủ Đức", "09xx…"],
    ["…", "…", "…", "…"],
    ["N", "…", "…", "…"],
  ];
  const tbl = [hdr.map((h) => ({ text: h, options: { bold: true, color: C.white, fill: { color: C.blue } } }))].concat(
    rows.map((r) => r.map((t) => ({ text: t, options: { color: C.body } })))
  );
  s.addTable(tbl, {
    x: M + 0.15, y: 1.72, w: 4.2, colW: cw, rowH: 0.38,
    fontFace: F, fontSize: 11, border: { type: "solid", pt: 0.5, color: C.line }, valign: "middle",
  });
  s.addText("Ví dụ khung mẫu (dữ liệu giả định)", { x: M, y: 4.8, w: 4.5, h: 0.25, margin: 0, fontFace: F, fontSize: 9.5, italic: true, color: C.muted, align: "center" });

  card(s, {
    x: 5.3, y: 1.55, w: 4.2, h: 1.8, color: C.blue, head: "Khung mẫu chứa gì?", size: 12,
    items: ["Toàn bộ đơn vị/phần tử của đám đông nghiên cứu", "Thông tin nhận diện: họ tên, địa chỉ, số điện thoại"],
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 3.5, w: 4.2, h: 1.25, rectRadius: 0.08, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addText([
    { text: "Khi thiếu khung mẫu", options: { bold: true, fontSize: 14, breakLine: true } },
    { text: "Phải phỏng vấn sàng lọc hoặc lập bản đồ địa bàn — tốn kém thời gian và chi phí.", options: { fontSize: 12 } },
  ], { x: 5.5, y: 3.52, w: 3.85, h: 1.2, margin: 0, fontFace: F, color: C.white, valign: "middle", paraSpaceAfter: 4 });
}

// ───────────────────────── 9. Sampling efficiency ─────────────────────────
{
  const s = contentSlide("s2", "Hiệu quả chọn mẫu được đánh giá bằng hai thước đo: thống kê và kinh tế");
  const boxes = [
    {
      x: M, col: C.green, title: "Hiệu quả thống kê", sub: "Statistical efficiency",
      metric: "Sai lệch chuẩn của ước lượng",
      txt: "Cùng kích thước n, thiết kế nào cho sai lệch chuẩn nhỏ hơn thì hiệu quả thống kê cao hơn.",
    },
    {
      x: 5.1, col: C.orange, title: "Hiệu quả kinh tế", sub: "Economic efficiency",
      metric: "Chi phí / một đơn vị độ chính xác",
      txt: "Ví dụ: chọn theo nhóm tiết kiệm chi phí di chuyển của điều tra viên hơn chọn phân tầng.",
    },
  ];
  boxes.forEach((b) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: b.x, y: 1.55, w: 4.4, h: 3.25, rectRadius: 0.1, fill: { color: C.white }, line: { color: b.col, width: 2 } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: b.x, y: 1.55, w: 4.4, h: 0.95, rectRadius: 0.1, fill: { color: b.col }, line: { color: b.col, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: b.x, y: 2.2, w: 4.4, h: 0.3, fill: { color: b.col }, line: { color: b.col, width: 0 } });
    s.addText([
      { text: b.title, options: { bold: true, fontSize: 17, breakLine: true } },
      { text: b.sub, options: { fontSize: 11, italic: true } },
    ], { x: b.x + 0.25, y: 1.6, w: 3.9, h: 0.85, margin: 0, fontFace: F, color: C.white, valign: "middle" });
    s.addText("Đo bằng", { x: b.x + 0.25, y: 2.7, w: 3.9, h: 0.3, margin: 0, fontFace: F, fontSize: 11, color: C.muted });
    s.addText(b.metric, { x: b.x + 0.25, y: 3.0, w: 3.9, h: 0.45, margin: 0, fontFace: F, fontSize: 15, bold: true, color: b.col });
    s.addText(b.txt, { x: b.x + 0.25, y: 3.55, w: 3.9, h: 1.1, margin: 0, fontFace: F, fontSize: 12.5, color: C.body, valign: "top" });
  });
}

// ───────────────────────── 10. Five-step process ─────────────────────────
{
  const s = contentSlide("s3", "Thiết kế mẫu đi qua 5 bước tuần tự, từ thị trường nghiên cứu đến thực địa");
  const steps = [
    ["Xác định thị trường nghiên cứu", "Phần tử, đơn vị, phạm vi địa lý, thời gian", C.pink],
    ["Xác định khung chọn mẫu", "Danh sách để giám sát viên, PVV tiếp cận", C.orange],
    ["Xác định kích thước mẫu", "Cân bằng độ tin cậy và ngân sách", C.yellow],
    ["Chọn phương pháp chọn mẫu", "Xác suất hay phi xác suất", C.green],
    ["Tiến hành chọn mẫu", "Rút phần tử, đánh dấu (mapping) địa bàn", C.blue],
  ];
  const w = 1.86, gap = 0.425 / 4 * 0 + 0.0;
  steps.forEach(([t, d, col], i) => {
    const x = M + i * 1.8;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, {
      x, y: 1.65, w: w, h: 0.85, fill: { color: col }, line: { color: C.bg, width: 1.5 },
    });
    s.addText("Bước " + (i + 1), {
      x: x + (i === 0 ? 0.1 : 0.3), y: 1.65, w: 1.3, h: 0.85, margin: 0,
      fontFace: F, fontSize: 14, bold: true, color: col === C.yellow ? C.ink : C.white, align: "center", valign: "middle",
    });
    s.addText(t, { x: x + 0.05, y: 2.7, w: 1.7, h: 0.8, margin: 0, fontFace: F, fontSize: 13, bold: true, color: C.ink, valign: "top" });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.05, y: 3.55, w: 0.4, h: 0.05, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(d, { x: x + 0.05, y: 3.7, w: 1.65, h: 1.0, margin: 0, fontFace: F, fontSize: 11, color: C.body, valign: "top" });
  });
  note(s, "Ví dụ bước 1: người tiêu dùng dầu gội đầu tại TP.HCM, 18–35 tuổi.");
}

// ───────────────────────── 11. Sample size ─────────────────────────
{
  const s = contentSlide("s3", "Kích thước mẫu tăng theo độ tin cậy và độ biến thiên, giảm khi chấp nhận sai số lớn hơn");
  // formula box
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.55, w: 4.3, h: 1.6, rectRadius: 0.1, fill: { color: C.green }, line: { color: C.green, width: 0 } });
  s.addText("n  =", { x: M + 0.3, y: 1.55, w: 1.3, h: 1.6, margin: 0, fontFace: F, fontSize: 34, bold: true, color: C.white, valign: "middle" });
  s.addText("Z² · σ²", { x: M + 1.6, y: 1.72, w: 2.4, h: 0.6, margin: 0, fontFace: F, fontSize: 30, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addShape(pres.shapes.LINE, { x: M + 1.7, y: 2.36, w: 2.2, h: 0, line: { color: C.white, width: 2.5 } });
  s.addText("e²", { x: M + 1.6, y: 2.4, w: 2.4, h: 0.6, margin: 0, fontFace: F, fontSize: 30, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("Ước lượng trung bình, đám đông phân phối chuẩn", { x: M, y: 3.2, w: 4.3, h: 0.3, margin: 0, fontFace: F, fontSize: 10, italic: true, color: C.muted, align: "center" });

  // worked example
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 3.6, w: 4.3, h: 1.2, rectRadius: 0.08, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addText([
    { text: "Ví dụ minh họa: ", options: { bold: true } },
    { text: "Z = 1,96 (95%), σ = 15, e = 3", options: { breakLine: true } },
    { text: "n = 1,96² × 15² / 3² ≈ 96,04 → chọn ", options: {} },
    { text: "n = 97", options: { bold: true } },
  ], { x: M + 0.2, y: 3.65, w: 3.95, h: 1.1, margin: 0, fontFace: F, fontSize: 12, color: C.ink, valign: "middle", paraSpaceAfter: 4 });

  const vars = [
    ["n", "Kích thước mẫu cần tính", C.green],
    ["Z", "Giá trị phân phối chuẩn theo mức tin cậy (95% → Z = 1,96)", C.blue],
    ["σ", "Độ lệch chuẩn – mức biến thiên dự kiến của thị trường", C.plum],
    ["e", "Biên độ sai số chấp nhận được", C.pink],
  ];
  vars.forEach(([k, d, col], i) => {
    const y = 1.6 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 5.2, y, w: 0.6, h: 0.6, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(k, { x: 5.2, y, w: 0.6, h: 0.6, margin: 0, fontFace: F, fontSize: 18, bold: true, italic: true, color: C.white, align: "center", valign: "middle" });
    s.addText(d, { x: 6.0, y, w: 3.5, h: 0.6, margin: 0, fontFace: F, fontSize: 12.5, color: C.body, valign: "middle" });
  });
}

// ───────────────────────── 12. Probability vs non-probability table ─────────────────────────
{
  const s = contentSlide("s4", "Chọn mẫu xác suất đổi chi phí lấy tính đại diện; phi xác suất làm điều ngược lại");
  const head = (t, col) => ({ text: t, options: { bold: true, color: C.white, fill: { color: col }, align: "center" } });
  const crit = (t) => ({ text: t, options: { bold: true, color: C.ink, fill: { color: "F1EEE3" } } });
  const cell = (t) => ({ text: t, options: { color: C.body, fill: { color: C.white } } });
  const rows = [
    [head("Tiêu chí", C.ink), head("Chọn mẫu xác suất", C.plum), head("Chọn mẫu phi xác suất", C.orange)],
    [crit("Cơ chế chọn"), cell("Rút ngẫu nhiên, tuân thủ quy tắc xác suất"), cell("Dựa trên thuận tiện hoặc phán đoán chủ quan")],
    [crit("Ưu điểm"), cell("Tính đại diện cao, tổng quát hóa cho đám đông"), cell("Tiết kiệm thời gian, chi phí, nhân lực")],
    [crit("Nhược điểm"), cell("Cần khung mẫu hoàn chỉnh; tốn thời gian và chi phí"), cell("Tính đại diện thấp; không tổng quát hóa thống kê")],
    [crit("Ứng dụng"), cell("Nghiên cứu mô tả, nghiên cứu nhân quả"), cell("Nghiên cứu khám phá")],
  ];
  s.addTable(rows, {
    x: M, y: 1.55, w: 9.0, colW: [1.8, 3.6, 3.6], rowH: [0.45, 0.68, 0.68, 0.68, 0.6],
    fontFace: F, fontSize: 12.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.08,
  });
  note(s, "Xác suất: mọi phần tử có xác suất được chọn biết trước và khác 0 → kết quả được phép suy rộng cho toàn thị trường.");
}

// ───────────────────────── 13. Taxonomy tree ─────────────────────────
{
  const s = contentSlide("s4", "Tám kỹ thuật chọn mẫu được chia đều vào hai nhóm xác suất và phi xác suất");
  pill(s, 3.5, 1.5, 3.0, 0.5, C.ink, "KỸ THUẬT CHỌN MẪU", { size: 13 });
  // connectors
  s.addShape(pres.shapes.LINE, { x: 5.0, y: 2.0, w: 0, h: 0.3, line: { color: C.muted, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 2.5, y: 2.3, w: 5.0, h: 0, line: { color: C.muted, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 2.5, y: 2.3, w: 0, h: 0.2, line: { color: C.muted, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 7.5, y: 2.3, w: 0, h: 0.2, line: { color: C.muted, width: 1.5 } });
  pill(s, 1.0, 2.5, 3.0, 0.5, C.plum, "Theo xác suất", { size: 14 });
  pill(s, 6.0, 2.5, 3.0, 0.5, C.orange, "Phi xác suất", { size: 14 });
  const left = [["Ngẫu nhiên đơn giản", C.blue], ["Hệ thống", C.green], ["Phân tầng", C.pink], ["Theo nhóm (cụm)", C.yellow]];
  const right = [["Thuận tiện", C.blue], ["Phán đoán", C.green], ["Phát triển mầm", C.pink], ["Định mức", C.yellow]];
  [[left, 1.0], [right, 6.0]].forEach(([arr, x0]) => {
    s.addShape(pres.shapes.LINE, { x: x0 + 0.25, y: 3.0, w: 0, h: 0.42 * 3 + 0.4, line: { color: C.line, width: 1.5 } });
    arr.forEach(([t, col], i) => {
      const y = 3.12 + i * 0.42;
      s.addShape(pres.shapes.LINE, { x: x0 + 0.25, y: y + 0.16, w: 0.3, h: 0, line: { color: C.line, width: 1.5 } });
      s.addShape(pres.shapes.OVAL, { x: x0 + 0.58, y: y + 0.08, w: 0.17, h: 0.17, fill: { color: col }, line: { color: col, width: 0 } });
      s.addText(t, { x: x0 + 0.85, y, w: 2.3, h: 0.33, margin: 0, fontFace: F, fontSize: 13, color: C.ink, valign: "middle" });
    });
  });
}

// helper: dot grid for method slides
function dot(s, x, y, d, color, ring) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color: ring || color, width: ring ? 2.25 : 0 } });
}

function methodText(s, rows, x = 5.2, w = 4.3, size = 12) {
  let y = 1.55;
  rows.forEach(([h, d, col]) => {
    s.addText(h, { x, y, w, h: 0.3, margin: 0, fontFace: F, fontSize: 13, bold: true, color: col });
    const lines = Math.ceil(d.length / 48);
    const hh = 0.24 * lines + 0.08;
    s.addText(d, { x, y: y + 0.3, w, h: hh, margin: 0, fontFace: F, fontSize: size, color: C.body, valign: "top" });
    y += 0.3 + hh + 0.12;
  });
}

// ───────────────────────── 14. Simple random ─────────────────────────
{
  const s = contentSlide("s4", "Ngẫu nhiên đơn giản cho mọi phần tử cơ hội như nhau, nhưng cần khung mẫu hoàn chỉnh");
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.55, w: 4.3, h: 3.2, rectRadius: 0.1, fill: { color: C.white }, line: { color: C.line, width: 1 } });
  seed = 11;
  const picks = new Set();
  while (picks.size < 12) picks.add(Math.floor(rnd() * 80));
  for (let r = 0; r < 8; r++)
    for (let c = 0; c < 10; c++) {
      const i = r * 10 + c, hit = picks.has(i);
      dot(s, M + 0.35 + c * 0.37, 1.75 + r * 0.33, 0.22, hit ? C.blue : "DDD8CB");
    }
  s.addText([
    { text: "●", options: { color: C.blue } }, { text: " phần tử được rút vào mẫu (n = 12 / N = 80)", options: { color: C.muted } },
  ], { x: M, y: 4.8, w: 4.3, h: 0.25, margin: 0, fontFace: F, fontSize: 9.5, align: "center" });
  methodText(s, [
    ["Nguyên tắc", "Mọi phần tử có xác suất được chọn biết trước và bằng nhau", C.blue],
    ["Công cụ", "Rút thăm, bảng số ngẫu nhiên, hàm =RAND() trong Excel", C.green],
    ["Hạn chế", "Bắt buộc có khung mẫu; mẫu nhỏ trên địa bàn rộng dễ phân bố lệch", C.pink],
    ["Ứng dụng", "Đám đông nhỏ, đồng nhất; bước đệm cho kỹ thuật phức tạp hơn", C.plum],
  ]);
}

// ───────────────────────── 15. Systematic ─────────────────────────
{
  const s = contentSlide("s4", "Chọn mẫu hệ thống rút phần tử theo một bước nhảy cố định: k = N/n");
  // strip of 30
  const bx = M, by = 1.75, cw = 0.3;
  for (let i = 1; i <= 30; i++) {
    const hit = i % 10 === 6;
    s.addShape(pres.shapes.RECTANGLE, {
      x: bx + (i - 1) * cw, y: by, w: cw, h: 0.42,
      fill: { color: hit ? C.green : C.white }, line: { color: C.line, width: 0.75 },
    });
    s.addText(String(i), {
      x: bx + (i - 1) * cw, y: by, w: cw, h: 0.42, margin: 0,
      fontFace: F, fontSize: 9, bold: hit, color: hit ? C.white : C.muted, align: "center", valign: "middle",
    });
  }
  s.addText("…  996", { x: bx + 30 * cw - 0.6, y: by + 0.45, w: 0.6, h: 0.25, margin: 0, fontFace: F, fontSize: 9, color: C.muted, align: "right" });
  // +k arcs as labels
  [6, 16].forEach((st) => {
    const x1 = bx + (st - 0.5) * cw, x2 = x1 + 10 * cw;
    s.addShape(pres.shapes.LINE, { x: x1, y: by - 0.15, w: x2 - x1, h: 0, line: { color: C.green, width: 1.5, endArrowType: "triangle" } });
    s.addText("+k = 10", { x: (x1 + x2) / 2 - 0.5, y: by - 0.42, w: 1.0, h: 0.25, margin: 0, fontFace: F, fontSize: 10, bold: true, color: C.green, align: "center" });
  });

  const steps = [
    ["1", "Tính bước nhảy", "k = N / n = 1000 / 100 = 10", C.green],
    ["2", "Chọn điểm xuất phát", "đ ngẫu nhiên trong [1; k] → đ = 6", C.blue],
    ["3", "Rút phần tử tiếp theo", "đ, đ+k, đ+2k… → 6, 16, 26, …, 996", C.plum],
  ];
  steps.forEach(([n, h, d, col], i) => {
    const x = M + i * 3.05, y = 2.7;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.85, h: 1.35, rectRadius: 0.08, fill: { color: C.white }, line: { color: C.line, width: 1 } });
    s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(n, { x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45, margin: 0, fontFace: F, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(h, { x: x + 0.7, y: y + 0.15, w: 2.05, h: 0.45, margin: 0, fontFace: F, fontSize: 13, bold: true, color: C.ink, valign: "middle" });
    s.addText(d, { x: x + 0.15, y: y + 0.7, w: 2.6, h: 0.55, margin: 0, fontFace: F, fontSize: 11.5, color: C.body, valign: "middle" });
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 4.2, w: 9.0, h: 0.55, rectRadius: 0.08, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addText([
    { text: "Hạn chế: ", options: { bold: true } },
    { text: "nếu khung mẫu ẩn chứa tính chu kỳ trùng với k, mẫu sẽ bị sai lệch nghiêm trọng." },
  ], { x: M + 0.2, y: 4.2, w: 8.6, h: 0.55, margin: 0, fontFace: F, fontSize: 12.5, color: C.white, valign: "middle" });
}

// ───────────────────────── 16. Stratified ─────────────────────────
{
  const s = contentSlide("s4", "Phân tầng: đồng nhất trong tầng, dị biệt giữa các tầng — rút mẫu từ TẤT CẢ các tầng");
  const strata = [["Tầng 1 · Thu nhập thấp", C.blue], ["Tầng 2 · Thu nhập trung bình", C.green], ["Tầng 3 · Thu nhập cao", C.orange]];
  strata.forEach(([lbl, col], i) => {
    const y = 1.55 + i * 1.07;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 4.3, h: 0.95, rectRadius: 0.08, fill: { color: col, transparency: 85 }, line: { color: col, width: 1.25 } });
    s.addText(lbl, { x: M + 0.15, y: y + 0.05, w: 4.0, h: 0.28, margin: 0, fontFace: F, fontSize: 10.5, bold: true, color: C.ink });
    for (let c = 0; c < 11; c++) {
      const hit = c % 4 === 1;
      dot(s, M + 0.2 + c * 0.37, y + 0.45, 0.24, col, hit ? C.ink : null);
    }
  });
  s.addText("Viền đậm = phần tử được chọn vào mẫu", { x: M, y: 4.8, w: 4.3, h: 0.25, margin: 0, fontFace: F, fontSize: 9.5, color: C.muted, align: "center" });
  methodText(s, [
    ["Nguyên tắc", "Chia đám đông thành các tầng theo tiêu chí kiểm soát (thu nhập, tuổi, khu vực); rút ngẫu nhiên hoặc hệ thống trong từng tầng", C.pink],
    ["Theo tỷ lệ", "Số phần tử mỗi tầng tỷ lệ thuận với quy mô tầng trong đám đông", C.blue],
    ["Không theo tỷ lệ", "Số phần tử mỗi tầng không phụ thuộc quy mô tầng", C.plum],
    ["Ưu điểm", "Hiệu quả thống kê cao nhất trong nhóm xác suất: mọi phân khúc đều có đại diện", C.green],
  ], 5.2, 4.3, 11.5);
}

// ───────────────────────── 17. Cluster ─────────────────────────
{
  const s = contentSlide("s4", "Theo nhóm: dị biệt trong nhóm, đồng nhất giữa các nhóm — chỉ rút MỘT VÀI nhóm");
  const centers = [[1.55, 2.35], [3.75, 2.35], [1.55, 3.95], [3.75, 3.95]];
  const chosen = [0, 3];
  seed = 3;
  centers.forEach(([cx, cy], k) => {
    const sel = chosen.includes(k);
    s.addShape(pres.shapes.OVAL, {
      x: cx - 0.95, y: cy - 0.72, w: 1.9, h: 1.44,
      fill: { color: sel ? C.yellow : C.white, transparency: sel ? 55 : 0 },
      line: { color: sel ? C.plum : C.line, width: sel ? 2.5 : 1.25, dashType: sel ? "solid" : "dash" },
    });
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++) {
        const col = PALETTE.filter((p) => p !== C.yellow)[(r * 4 + c + k) % 5];
        dot(s, cx - 0.7 + c * 0.36, cy - 0.45 + r * 0.32, 0.2, col);
      }
    s.addText("Nhóm " + (k + 1) + (sel ? " ✓" : ""), {
      x: cx - 0.6, y: cy + 0.48, w: 1.2, h: 0.22, margin: 0, fontFace: F, fontSize: 9.5, bold: sel, color: sel ? C.plum : C.muted, align: "center",
    });
  });
  s.addText("Mỗi nhóm là một “thị trường thu nhỏ”; nhóm 1 và 4 được chọn", { x: M, y: 4.8, w: 4.3, h: 0.25, margin: 0, fontFace: F, fontSize: 9.5, color: C.muted, align: "center" });
  methodText(s, [
    ["Nguyên tắc", "Chia đám đông thành các nhóm/cụm đa dạng; chọn ngẫu nhiên một số nhóm rồi khảo sát phần tử bên trong", C.plum],
    ["Một bước (one-stage)", "Khảo sát tất cả phần tử trong các nhóm được chọn", C.blue],
    ["Hai bước (two-stage)", "Tiếp tục rút ngẫu nhiên hoặc hệ thống một số phần tử trong nhóm đã chọn", C.green],
    ["Ưu điểm", "Tối ưu chi phí di chuyển và phỏng vấn của điều tra viên", C.orange],
  ], 5.2, 4.3, 11.5);
}

// ───────────────────────── 18. Stratified vs cluster ─────────────────────────
{
  const s = contentSlide("s4", "Phân tầng tối đa hóa độ chính xác; theo nhóm tối ưu hóa chi phí");
  const head = (t, col, fc) => ({ text: t, options: { bold: true, color: fc || C.white, fill: { color: col }, align: "center" } });
  const crit = (t) => ({ text: t, options: { bold: true, color: C.ink, fill: { color: "F1EEE3" } } });
  const cell = (t, b) => ({ text: t, options: { color: C.body, fill: { color: C.white }, bold: !!b } });
  const rows = [
    [head("Tiêu chí", C.ink), head("Chọn mẫu phân tầng", C.pink), head("Chọn mẫu theo nhóm (cụm)", C.blue)],
    [crit("Bên trong nhóm"), cell("Đồng nhất (homogeneous)"), cell("Dị biệt (heterogeneous)")],
    [crit("Giữa các nhóm"), cell("Dị biệt (heterogeneous)"), cell("Đồng nhất (homogeneous)")],
    [crit("Hành động chọn"), cell("Rút một số phần tử từ TẤT CẢ các nhóm"), cell("Rút toàn bộ phần tử từ MỘT VÀI nhóm")],
    [crit("Mục tiêu cốt lõi"), cell("Tối đa hóa độ chính xác, hiệu quả thống kê", true), cell("Tối ưu hóa chi phí di chuyển, phỏng vấn", true)],
  ];
  s.addTable(rows, {
    x: M, y: 1.55, w: 9.0, colW: [2.0, 3.5, 3.5], rowH: [0.48, 0.58, 0.58, 0.68, 0.68],
    fontFace: F, fontSize: 12.5, valign: "middle", border: { type: "solid", pt: 1, color: C.line }, margin: 0.08,
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 4.62, w: 9.0, h: 0.38, rectRadius: 0.08, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addText("Mẹo nhớ: hai phương pháp có quy luật đồng nhất / dị biệt đảo ngược nhau.", {
    x: M + 0.2, y: 4.62, w: 8.6, h: 0.38, margin: 0, fontFace: F, fontSize: 11.5, bold: true, color: C.ink, valign: "middle",
  });
}

// ───────────────────────── 19. Non-probability: 3 methods ─────────────────────────
{
  const s = contentSlide("s5", "Phi xác suất hy sinh tính đại diện để đổi lấy tốc độ và chi phí thấp");
  const cards = [
    { col: C.blue, head: "Thuận tiện", en: "Convenience", items: ["Chọn người dễ tiếp cận, sẵn có, đồng ý tham gia", "Tối đa tốc độ, chi phí thấp; tính đại diện thấp nhất"] },
    { col: C.green, head: "Phán đoán", en: "Judgment", items: ["Chọn theo kiến thức, chuyên môn của nhà nghiên cứu", "Hay dùng khi phỏng vấn chuyên gia, nghiên cứu định tính"] },
    { col: C.pink, head: "Phát triển mầm", en: "Snowball", items: ["Phỏng vấn vài “mầm”, nhờ họ giới thiệu người cùng đặc điểm", "Hợp thị trường ngách: golf chuyên nghiệp, hàng hiệu cao cấp"] },
  ];
  cards.forEach((c, i) => {
    const x = M + i * 3.05;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.55, w: 2.85, h: 3.25, rectRadius: 0.1, fill: { color: C.white }, line: { color: C.line, width: 1 } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.55, w: 2.85, h: 0.85, rectRadius: 0.1, fill: { color: c.col }, line: { color: c.col, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.15, w: 2.85, h: 0.25, fill: { color: c.col }, line: { color: c.col, width: 0 } });
    s.addText([
      { text: c.head, options: { bold: true, fontSize: 16, breakLine: true } },
      { text: c.en, options: { italic: true, fontSize: 10.5 } },
    ], { x: x + 0.2, y: 1.58, w: 2.5, h: 0.8, margin: 0, fontFace: F, color: C.white, valign: "middle" });
    s.addText(c.items.map((t) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: true } })), {
      x: x + 0.12, y: 2.55, w: 2.6, h: 2.15, margin: 0, fontFace: F, fontSize: 12, color: C.body, valign: "top", paraSpaceAfter: 8,
    });
  });
  note(s, "Chung cho nhóm phi xác suất: không dựa trên cơ chế ngẫu nhiên, không tính được SE, không tổng quát hóa cho đám đông.");
}

// ───────────────────────── 20. Quota ─────────────────────────
{
  const s = contentSlide("s5", "Định mức áp cấu trúc đám đông lên mẫu, rồi để phỏng vấn viên lấp đầy hạn mức");
  s.addText("Ví dụ: N = 10.000, n = 100, thuộc tính kiểm soát = độ tuổi", {
    x: M, y: 1.5, w: 9.0, h: 0.3, margin: 0, fontFace: F, fontSize: 12, bold: true, color: C.ink,
  });
  const seg = [["20 – 30 tuổi", 30, C.blue], ["31 – 40 tuổi", 40, C.plum], ["41 – 50 tuổi", 30, C.orange]];
  let x = M;
  const total = 9.0;
  seg.forEach(([lbl, v, col]) => {
    const w = total * v / 100;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w, h: 0.85, fill: { color: col }, line: { color: C.bg, width: 2 } });
    s.addText([
      { text: v + " người", options: { bold: true, fontSize: 18, breakLine: true } },
      { text: lbl + " · " + v + "%", options: { fontSize: 11 } },
    ], { x, y: 1.9, w, h: 0.85, margin: 0, fontFace: F, color: C.white, align: "center", valign: "middle" });
    x += w;
  });
  s.addText("Tổng n = 100", { x: M, y: 2.78, w: 9.0, h: 0.25, margin: 0, fontFace: F, fontSize: 10, color: C.muted, align: "right" });

  const steps = [
    ["1", "Chọn thuộc tính kiểm soát", "giới tính, độ tuổi, thu nhập…", C.green],
    ["2", "Áp tỷ lệ của đám đông", "cơ cấu mẫu phản ánh đúng tỷ lệ đám đông", C.blue],
    ["3", "Lấp đầy hạn mức (quota)", "phỏng vấn viên tìm đối tượng theo cách thuận tiện", C.pink],
  ];
  steps.forEach(([n, h, d, col], i) => {
    const xx = M + i * 3.05, y = 3.15;
    s.addShape(pres.shapes.OVAL, { x: xx, y, w: 0.5, h: 0.5, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(n, { x: xx, y, w: 0.5, h: 0.5, margin: 0, fontFace: F, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(h, { x: xx + 0.6, y: y - 0.02, w: 2.4, h: 0.55, margin: 0, fontFace: F, fontSize: 12, bold: true, color: C.ink, valign: "middle" });
    s.addText(d, { x: xx + 0.6, y: y + 0.55, w: 2.3, h: 0.6, margin: 0, fontFace: F, fontSize: 11, color: C.body, valign: "top" });
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 4.4, w: 9.0, h: 0.45, rectRadius: 0.08, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addText("Phổ biến nhất trong thực tế — đặc biệt ở thị trường thiếu khung mẫu chuẩn.", {
    x: M + 0.2, y: 4.4, w: 8.6, h: 0.45, margin: 0, fontFace: F, fontSize: 12, bold: true, color: C.ink, valign: "middle",
  });
}

// ───────────────────────── 21. Review questions ─────────────────────────
{
  const s = contentSlide("end", "Câu hỏi ôn tập: hai cặp khái niệm cần phân biệt chắc chắn");
  const qs = [
    ["Câu 1", "SE và NE khác nhau thế nào? Vì sao tăng kích thước mẫu sát quy mô đám đông đôi khi lại làm giảm độ chính xác chung của nghiên cứu?", C.pink],
    ["Câu 2", "Khác biệt cốt lõi giữa chọn mẫu phân tầng (stratified) và chọn mẫu theo nhóm (cluster) dựa trên quy luật đồng nhất – dị biệt là gì?", C.blue],
  ];
  qs.forEach(([h, q, col], i) => {
    const y = 1.6 + i * 1.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 9.0, h: 1.4, rectRadius: 0.1, fill: { color: C.white }, line: { color: col, width: 1.5 } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M + 0.2, y: y + 0.42, w: 1.1, h: 0.55, rectRadius: 0.2, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(h, { x: M + 0.2, y: y + 0.42, w: 1.1, h: 0.55, margin: 0, fontFace: F, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(q, { x: M + 1.55, y: y + 0.1, w: 7.25, h: 1.2, margin: 0, fontFace: F, fontSize: 14, color: C.ink, valign: "middle" });
  });
}

// ───────────────────────── 22. Group exercise ─────────────────────────
{
  const s = contentSlide("end", "Bài tập nhóm: thiết kế phương pháp chọn mẫu cho một đề tài thực tế");
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.5, w: 9.0, h: 0.75, rectRadius: 0.08, fill: { color: C.plum }, line: { color: C.plum, width: 0 } });
  s.addText([
    { text: "Đề tài: ", options: { bold: true, color: C.yellow } },
    { text: "Đánh giá các yếu tố ảnh hưởng đến quyết định lựa chọn dịch vụ giao đồ ăn trực tuyến của sinh viên tại TP. Hồ Chí Minh", options: { color: C.white } },
  ], { x: M + 0.2, y: 1.5, w: 8.6, h: 0.75, margin: 0, fontFace: F, fontSize: 12.5, valign: "middle" });
  const tasks = [
    ["Thị trường & khung mẫu", "Định nghĩa đám đông và khung chọn mẫu khả thi", C.pink],
    ["Kích thước mẫu", "Dự kiến n và lập luận căn cứ cho con số đó", C.orange],
    ["Phương pháp", "Chọn một phương pháp (xác suất / định mức / thuận tiện) và giải thích lý do", C.green],
    ["Triển khai thực địa", "Mô tả quy trình rút mẫu để tránh sai lệch chọn mẫu", C.blue],
  ];
  tasks.forEach(([h, d, col], i) => {
    const x = M + i * 2.29;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.45, w: 2.13, h: 2.35, rectRadius: 0.08, fill: { color: C.white }, line: { color: C.line, width: 1 } });
    s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: 2.6, w: 0.5, h: 0.5, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(String(i + 1), { x: x + 0.15, y: 2.6, w: 0.5, h: 0.5, margin: 0, fontFace: F, fontSize: 15, bold: true, color: C.white, align: "center", valign: "middle" });
    s.addText(h, { x: x + 0.15, y: 3.2, w: 1.85, h: 0.55, margin: 0, fontFace: F, fontSize: 12.5, bold: true, color: C.ink, valign: "top" });
    s.addText(d, { x: x + 0.15, y: 3.78, w: 1.85, h: 0.95, margin: 0, fontFace: F, fontSize: 10.5, color: C.body, valign: "top" });
  });
}

// ───────────────────────── 23. Conclusions (stays on during Q&A) ─────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.plum };
  pageNo += 1;
  s.addShape(pres.shapes.OVAL, { x: 8.3, y: -0.9, w: 2.4, h: 2.4, fill: { color: C.yellow }, line: { color: C.yellow, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 9.1, y: 1.3, w: 0.8, h: 0.8, fill: { color: C.pink }, line: { color: C.pink, width: 0 } });
  s.addText("Tổng kết", { x: M, y: 0.4, w: 6, h: 0.4, margin: 0, fontFace: F, fontSize: 14, bold: true, color: C.yellow });
  s.addText("Thiết kế mẫu là bài toán cân bằng giữa độ chính xác, thời gian và ngân sách", {
    x: M, y: 0.8, w: 7.6, h: 0.9, margin: 0, fontFace: F, fontSize: 21, bold: true, color: C.white, valign: "top",
  });
  const pts = [
    ["Chọn mẫu", "tiết kiệm chi phí, thời gian và có thể chính xác hơn census khi ΔNE − ΔSE > 0", C.yellow],
    ["Đúng đối tượng, đúng khung", "xác định thị trường nghiên cứu và khung mẫu phù hợp trước khi rút mẫu", C.green],
    ["Kích thước n", "tính từ độ tin cậy Z, độ biến thiên σ và biên độ sai số e", C.blue],
    ["Đúng kỹ thuật", "xác suất để suy rộng; phi xác suất khi cần nhanh, rẻ, khám phá", C.orange],
  ];
  pts.forEach(([h, d, col], i) => {
    const y = 1.9 + i * 0.72;
    s.addShape(pres.shapes.OVAL, { x: M, y: y + 0.05, w: 0.45, h: 0.45, fill: { color: col }, line: { color: col, width: 0 } });
    s.addText(String(i + 1), { x: M, y: y + 0.05, w: 0.45, h: 0.45, margin: 0, fontFace: F, fontSize: 14, bold: true, color: C.plum, align: "center", valign: "middle" });
    s.addText([
      { text: h + ": ", options: { bold: true, color: C.yellow } },
      { text: d, options: { color: C.white } },
    ], { x: M + 0.65, y, w: 8.3, h: 0.6, margin: 0, fontFace: F, fontSize: 13.5, valign: "middle" });
  });
  s.addText("Câu hỏi và thảo luận?", { x: 5.5, y: 5.0, w: 4.0, h: 0.35, margin: 0, fontFace: F, fontSize: 12, color: "E9D3E3", align: "right", valign: "middle" });
}

pres.writeFile({ fileName: __dirname + "/Bai6_Chon_mau_de_nghien_cuu.pptx" }).then((f) => console.log("Wrote", f));
