// Buổi 4 — EVM1110E · Measuring Relationship Quality
// Deck generated from courses/EVM1110E/lessons/W04_slides_outline.md (teaching-skills)
// Run: node build_deck.js  →  EVM1110E_W04_Relationship_Quality.pptx
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" × 7.5"
pres.title = "EVM1110E — Buổi 4: Measuring Relationship Quality";
const OUT = "EVM1110E_W04_Relationship_Quality.pptx";
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
  { key: "s41", label: "4.1 Ba trụ cột", c: C.purple },
  { key: "s42", label: "Đo · xử lý bất đồng", c: C.blue },
  { key: "s43", label: "4.2 Giao dịch → đối tác", c: C.pink },
  { key: "end", label: "Tổng kết", c: C.green },
];
const dark = (c) => (c === C.orange || c === C.yellow ? C.ink : C.white); // readable text on a solid fill

let slideNo = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: F, color: C.ink, isTextBox: true, margin: 0 }, o));

// Recurring motif: three pillars (trust · commitment · functional conflict) under a beam
function glyph(slide, x, y, s) {
  const bw = s * 0.22, g = (s - 3 * bw) / 2;
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w: s, h: s * 0.16, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  [C.purple, C.blue, C.pink].forEach((c, i) =>
    slide.addShape(pres.shapes.RECTANGLE, { x: x + i * (bw + g), y: y + s * 0.24, w: bw, h: s * 0.76, fill: { color: c }, line: { color: c, width: 0 } }));
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
  T(s, `EVM1110E · Buổi 4   ${slideNo}`, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right", valign: "middle" });
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


function breakSlide() {
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  [C.orange, C.yellow, C.green, C.blue, C.purple, C.pink].forEach((c, i) =>
    s.addShape(pres.shapes.OVAL, { x: 4.2 + i * 0.85, y: 1.7, w: 0.6, h: 0.6, fill: { color: c }, line: { color: c, width: 0 } }));
  T(s, "Giải lao 8 phút", { x: M, y: 2.7, w: CW, h: 1.2, fontSize: 54, bold: true, align: "center" });
  T(s, "Quay lại lúc  ____ : ____", { x: M, y: 4.1, w: CW, h: 0.7, fontSize: 26, color: C.purple, align: "center" });
  T(s, "EVM1110E · Buổi 4   " + slideNo, { x: W - M - 2.5, y: 6.95, w: 2.5, h: 0.3, fontSize: 10, color: C.muted, align: "right" });
  s.addNotes("Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.");
}
function exitTicket(s, qs, bridge) {
  const cols = [C.purple, C.blue];
  qs.forEach((q, i) => {
    const y = 2.0 + i * 1.6;
    card(s, M, y, CW, 1.4, C.white, C.line);
    badge(s, M + 0.25, y + 0.35, 0.7, cols[i], String(i + 1));
    T(s, q, { x: M + 1.2, y, w: CW - 1.45, h: 1.4, fontSize: 17, valign: "middle" });
  });
  card(s, M, 5.3, CW, 1.3, C.tGreen, C.green);
  T(s, bridge, { x: M + 0.3, y: 5.3, w: CW - 0.6, h: 1.3, fontSize: 16, valign: "middle" });
}
function refSlides(refs, file, per) {
  const parts = [];
  for (let i = 0; i < refs.length; i += per) parts.push(refs.slice(i, i + per));
  parts.forEach((part, pi) => {
    const s = base("end", parts.length > 1 ? `Tài liệu tham khảo (${pi + 1}/${parts.length})` : "Tài liệu tham khảo", {
      source: "Danh mục APA 7 đầy đủ (kèm DOI/URL): " + file + ", mục 6.",
      notes: "Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.",
    });
    const rh = Math.min(0.95, 4.7 / part.length);
    part.forEach(([k, r], i) => {
      const y = 1.95 + i * rh;
      T(s, k, { x: M, y, w: 0.7, h: rh - 0.08, fontSize: 12, bold: true, color: C.purple, valign: "middle" });
      T(s, r, { x: M + 0.75, y, w: CW - 0.75, h: rh - 0.08, fontSize: 12, valign: "middle" });
    });
  });
}
const LECTURER = "Giảng viên: Đoàn Nguyễn Bảo Quyên";
function summary3(items, s, smp) {
  const cols = [[C.purple, C.tPurple], [C.blue, C.tBlue], [C.pink, C.tPink]];
  const n = items.length, gap = 0.2, rh = (smp ? 3.3 : 4.4) / n;
  items.forEach(([k, t], i) => {
    const y = 2.0 + i * rh, [c, f] = cols[i % 3];
    card(s, M, y, CW, rh - gap, f, c, 1.5);
    badge(s, M + 0.25, y + (rh - gap - 0.75) / 2, 0.75, c, k, null, k.length > 2 ? 13 : 18);
    T(s, t, { x: M + 1.25, y, w: CW - 1.5, h: rh - gap, fontSize: 17, valign: "middle" });
  });
  if (smp) {
    card(s, M, 5.45, CW, 1.1, C.tYellow, C.yellow);
    T(s, smp, { x: M + 0.35, y: 5.45, w: CW - 0.7, h: 1.1, fontSize: 15, valign: "middle" });
  }
}
function titleSlide(n, sub, extra, art, notes) {
  const s = pres.addSlide(); slideNo++;
  s.background = { color: C.bg };
  art(s);
  pill(s, M, 1.0, 2.9, 0.46, C.yellow, `EVM1110E  ·  Buổi ${n} / 15`, { text: { fontSize: 14 } });
  T(s, "Quản trị mối quan hệ trong tổ chức sự kiện", { x: M, y: 1.75, w: 6.6, h: 1.9, fontSize: 38, bold: true, valign: "top" });
  T(s, sub, { x: M, y: 3.75, w: 6.6, h: 1.0, fontSize: 22, italic: true, color: C.purple, valign: "top" });
  T(s, [{ text: extra, options: { breakLine: true } }, { text: "Khoa Marketing · UEF", options: { breakLine: true } }, { text: LECTURER }],
    { x: M, y: 5.0, w: 6.6, h: 1.4, fontSize: 15, color: C.muted, valign: "top", paraSpaceAfter: 4 });
  s.addNotes(notes);
}
// ───────────────────────── 1 — Title ─────────────────────────
function pillars(s, x, y, w, h, o = {}) {
  const pw = w * 0.22, g = (w - 3 * pw) / 2, bh = 0.7;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: bh, rectRadius: 0.1, fill: { color: C.orange }, line: { color: C.orange, width: 0 } });
  T(s, o.beam || "Chất lượng quan hệ", { x, y, w, h: bh, fontSize: o.beamSize || 16, bold: true, align: "center", valign: "middle" });
  [["Trust", C.purple], ["Commitment", C.blue], ["Functional conflict", C.pink]].forEach(([t, c], i) => {
    const px = x + i * (pw + g);
    s.addShape(pres.shapes.RECTANGLE, { x: px, y: y + bh + 0.12, w: pw, h: h - bh - 0.12, fill: { color: c }, line: { color: c, width: 0 } });
    const ph = h - bh - 0.12, cy = y + bh + 0.12 + ph / 2;
    if (o.rotate) T(s, t, { x: px + pw / 2 - ph / 2, y: cy - pw / 2, w: ph, h: pw, fontSize: o.size || 13, bold: true, color: C.white, align: "center", valign: "middle", rotate: 270 });
    else T(s, t, { x: px - 0.05, y: y + bh + 0.12, w: pw + 0.1, h: ph, fontSize: o.size || 13, bold: true, color: C.white, align: "center", valign: "middle" });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: x - 0.15, y: y + h + 0.05, w: w + 0.3, h: 0.14, fill: { color: C.ink }, line: { color: C.ink, width: 0 } });
}
titleSlide(4, "Measuring Relationship Quality", "Phần 2 · Quản trị khách hàng trọng điểm — buổi 3/7", (s) => {
  pillars(s, 8.3, 1.3, 4.3, 4.4, { rotate: true, size: 16, beamSize: 18 });
}, "Slide 1. Buổi 4 — đo và phát triển chất lượng quan hệ với Key Account.\nAlt-text: ba cột trụ (Trust, Commitment, Functional conflict) đỡ một thanh ngang “Chất lượng quan hệ”.");

// ───────────────────────── 2 — S1 ─────────────────────────
{
  const s = base("open", "Khách hàng không bao giờ phàn nàn chưa chắc đã hài lòng", {
    source: "Tình huống giả định Nova Events – Ngân hàng An Phát.",
    notes: "S1 — Khởi động (5 phút). Chiếu: “Nova làm gala cho An Phát 4 năm. Chị Hạnh chưa bao giờ phàn nàn với Nova một lần nào.”\nGiơ tay: “Đó là dấu hiệu (A) quan hệ rất tốt, hay (B) đáng lo?”\nChốt: “Có thể cả hai. Nếu chị Hạnh không nói điều chưa hài lòng, Nova không biết để sửa — và có thể một ngày Nova mất hợp đồng mà không hiểu vì sao. Hôm nay: đo quan hệ bằng ba trụ cột, trong đó có một trụ cột nghe lạ: xung đột.”",
  });
  card(s, M, 2.1, CW, 1.9, C.tPurple, C.purple);
  T(s, [{ text: "4 năm ", options: { bold: true, color: C.purple, fontSize: 40 } }, { text: "làm gala cho An Phát. Chị Hạnh ", options: {} }, { text: "chưa bao giờ phàn nàn", options: { bold: true } }, { text: " với Nova một lần nào." }],
    { x: M + 0.5, y: 2.1, w: CW - 1.0, h: 1.9, fontSize: 24, align: "center", valign: "middle" });
  const cw = (CW - 0.3) / 2;
  [["A", "Quan hệ rất tốt", C.green, C.tGreen], ["B", "Đáng lo", C.pink, C.tPink]].forEach(([k, t, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 4.3, cw, 1.15, f, c, 1.5);
    badge(s, x + 0.3, 4.5, 0.75, c, k, null, 22);
    T(s, t, { x: x + 1.3, y: 4.3, w: cw - 1.5, h: 1.15, fontSize: 22, bold: true, valign: "middle" });
  });
  card(s, M, 5.7, CW, 0.9, C.tYellow, C.yellow);
  T(s, "Có thể cả hai — nếu chị Hạnh không nói, Nova không biết để sửa.", { x: M + 0.35, y: 5.7, w: CW - 0.7, h: 0.9, fontSize: 18, bold: true, valign: "middle" });
}

// ───────────────────────── 3–5 — definitions ─────────────────────────
function defSlide(title, key, en, quote, vi, c, f, src, notes) {
  const s = base("s41", title, { source: src, notes });
  pill(s, M, 2.0, 5.4, 0.6, c, `${key} · ${en}`, { text: { fontSize: 16 } });
  card(s, M, 2.8, CW, 2.25, f, c, 1.5);
  T(s, quote, { x: M + 0.45, y: 2.8, w: CW - 0.9, h: 2.25, fontSize: 18, italic: true, valign: "middle" });
  card(s, M, 5.3, CW, 1.25, C.white, C.line);
  T(s, [{ text: "Nghĩa là: ", options: { bold: true, color: c } }, ...vi], { x: M + 0.4, y: 5.3, w: CW - 0.8, h: 1.25, fontSize: 18, valign: "middle" });
  return s;
}
defSlide("Commitment: quan hệ đáng để nỗ lực tối đa giữ gìn", "Cam kết", "Commitment",
  "“an exchange partner believing that an ongoing relationship with another is so important as to warrant maximum efforts at maintaining it; that is, the committed party believes the relationship is worth working on to ensure that it endures indefinitely.”",
  [{ text: "một bên tin rằng quan hệ " }, { text: "quan trọng đến mức đáng nỗ lực tối đa để giữ", options: { bold: true } }, { text: ", muốn quan hệ kéo dài." }],
  C.blue, C.tBlue, "D01: Morgan & Hunt (1994), Journal of Marketing, 58(3) — nguyên văn, đã đối chiếu toàn văn.",
  "Định nghĩa nguyên văn Morgan & Hunt (1994). Nhấn “maximum efforts” — câu C1 của bộ câu hỏi dựng từ cụm này.");
defSlide("Trust: tin vào độ tin cậy và sự chính trực của bên kia", "Niềm tin", "Trust",
  "“We conceptualize trust as existing when one party has confidence in an exchange partner’s reliability and integrity.”",
  [{ text: "tin vào " }, { text: "độ tin cậy", options: { bold: true } }, { text: " (làm đúng cam kết) và " }, { text: "sự chính trực", options: { bold: true } }, { text: " (trung thực) của bên kia." }],
  C.purple, C.tPurple, "D01: Morgan & Hunt (1994), Journal of Marketing, 58(3) — nguyên văn.",
  "Hai chữ cần nhớ: reliability ↔ câu T1; integrity ↔ câu T2.");
defSlide("Functional conflict: bất đồng được giải quyết êm thấm", "Xung đột chức năng", "Functional conflict",
  "“when disputes are resolved amicably, such disagreements can be referred to as ‘functional conflict,’ because they prevent stagnation, stimulate interest and curiosity, and provide a ‘medium through which problems can be aired and solutions arrived at’”",
  [{ text: "bất đồng " }, { text: "được giải quyết êm thấm", options: { bold: true } }, { text: " giúp quan hệ không trì trệ — “just another part of doing business” (Anderson & Narus, 1990)." }],
  C.pink, C.tPink, "D01: Morgan & Hunt (1994), dẫn Anderson & Narus (1990) — nguyên văn.",
  "Xung đột chức năng là kênh để nêu vấn đề và tìm giải pháp. Không phải “ít xung đột”.");

// ───────────────────────── 6 — model ─────────────────────────
{
  const s = base("s41", "Xung đột chức năng là kết quả của niềm tin", {
    source: "D01: Morgan & Hunt (1994) — trích một phần mô hình KMV.",
    notes: "Trong mô hình Morgan & Hunt, commitment và trust là biến trung gian then chốt; functional conflict là kết quả trực tiếp của trust; cooperation phát sinh từ cả commitment và trust.\nNói: “Có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng. Không có niềm tin thì bất đồng hoặc bị giấu đi, hoặc nổ ra.”\nAlt-text: sơ đồ mũi tên — Commitment và Trust cùng dẫn đến Cooperation; Trust dẫn đến Functional conflict; Trust dẫn đến Commitment.",
  });
  const bx = (x, y, t, c) => pill(s, x, y, 3.2, 0.9, c, t, { text: { fontSize: 18 } });
  bx(M + 0.3, 2.3, "Trust", C.purple);
  bx(M + 0.3, 4.6, "Commitment", C.blue);
  bx(M + 5.5, 2.3, "Functional conflict", C.pink);
  bx(M + 5.5, 4.6, "Cooperation", C.green);
  arrow(s, M + 3.55, 2.75, M + 5.4, 2.75, C.ink, 3);
  arrow(s, M + 3.55, 5.05, M + 5.4, 5.05, C.ink, 3);
  arrow(s, M + 3.4, 3.2, M + 5.5, 4.6, C.ink, 3);
  arrow(s, M + 1.9, 3.25, M + 1.9, 4.55, C.ink, 3);
  card(s, M + 9.1, 2.3, CW - 9.1, 3.2, C.tYellow, C.yellow);
  T(s, "Có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng.", { x: M + 9.35, y: 2.3, w: CW - 9.6, h: 3.2, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── 7 — cooperation first ─────────────────────────
{
  const s = base("s41", "Với khách hàng mới, hợp tác trước, niềm tin sau", {
    source: "D02: Anderson & Narus (1990), Journal of Marketing, 54(1), 42–58.",
    notes: "Anderson & Narus (1990): hợp tác là tiền đề của niềm tin — với khách hàng mới, cùng làm tốt vài việc nhỏ trước.",
  });
  const st = [["Cùng làm tốt vài việc nhỏ", C.green, C.tGreen], ["Hợp tác", C.blue, C.tBlue], ["Niềm tin", C.purple, C.tPurple]];
  const cw = (CW - 1.2) / 3;
  st.forEach(([t, c, f], i) => {
    const x = M + i * (cw + 0.6), h = 1.6 + i * 0.6, y = 5.0 - h;
    card(s, x, y, cw, h, f, c, 2);
    T(s, t, { x: x + 0.2, y, w: cw - 0.4, h, fontSize: 22, bold: true, align: "center", valign: "middle" });
    if (i < 2) arrow(s, x + cw + 0.08, 4.2, x + cw + 0.52, 4.2, C.ink, 3);
  });
  card(s, M, 5.35, CW, 1.2, C.tYellow, C.yellow);
  T(s, "Hợp tác là tiền đề của niềm tin — đừng chờ có niềm tin rồi mới cùng làm.", { x: M + 0.4, y: 5.35, w: CW - 0.8, h: 1.2, fontSize: 19, bold: true, valign: "middle" });
}

// ───────────────────────── 8 — Palmatier ─────────────────────────
{
  const s = base("s41", "Chất lượng quan hệ ảnh hưởng hiệu quả nhiều nhất", {
    source: "D03: Palmatier, Dant, Grewal & Evans (2006), Journal of Marketing, 70(4) — tổng hợp nhiều nghiên cứu (meta-analysis).",
    notes: "Palmatier et al. (2006): hiệu quả khách quan chịu ảnh hưởng nhiều nhất từ chất lượng quan hệ (thước đo tổng hợp). Marketing quan hệ hiệu quả hơn trong dịch vụ và thị trường doanh nghiệp, và khi quan hệ xây với một cá nhân — mạnh nhưng rủi ro khi người đó rời đi (Buổi 8).",
  });
  card(s, M, 2.1, 5.6, 4.45, C.tPurple, C.purple);
  T(s, [{ text: "Chất lượng quan hệ", options: { bold: true, fontSize: 30, color: C.purple, breakLine: true } }, { text: "thước đo tổng hợp — ảnh hưởng nhiều nhất đến hiệu quả khách quan", options: { fontSize: 17 } }], { x: M + 0.4, y: 2.1, w: 4.8, h: 4.45, valign: "middle", paraSpaceAfter: 10 });
  const rx = M + 5.9, rw = CW - 5.9;
  T(s, "Marketing quan hệ hiệu quả hơn khi…", { x: rx, y: 2.1, w: rw, h: 0.5, fontSize: 17, bold: true, color: C.muted });
  [["dịch vụ", C.blue, C.tBlue], ["thị trường doanh nghiệp (B2B)", C.green, C.tGreen], ["quan hệ xây với một cá nhân", C.pink, C.tPink]].forEach(([t, c, f], i) => {
    const y = 2.75 + i * 0.95;
    card(s, rx, y, rw, 0.8, f, c);
    T(s, (i === 2 ? "⚠  " : "✓  ") + t, { x: rx + 0.3, y, w: rw - 0.6, h: 0.8, fontSize: 18, bold: true, valign: "middle" });
  });
  card(s, rx, 5.65, rw, 0.9, C.tYellow, C.yellow);
  T(s, "…nhưng rủi ro khi người đó rời đi — Buổi 8.", { x: rx + 0.3, y: 5.65, w: rw - 0.6, h: 0.9, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 9 — Quan hệ VN ─────────────────────────
{
  const s = base("s41", "Ở Việt Nam, thể diện quyết định cách nêu bất đồng", {
    source: "D06 → T17: Pham & Pham (2025), BIMTECH Business Perspectives. Hàm ý: nhận định của người soạn.",
    notes: "Pham & Pham (2025): “quan hệ” gồm thể diện, có qua có lại, tình cảm.\nNhận định: vì thể diện, bất đồng nên được nêu riêng, đúng người, đúng lúc — nêu trước đám đông dễ biến thành xung đột không chức năng.",
  });
  const q = [["Thể diện", C.purple, C.tPurple], ["Có qua có lại", C.blue, C.tBlue], ["Tình cảm", C.pink, C.tPink]];
  const cw = (CW - 0.6) / 3;
  T(s, "“Quan hệ” trong kinh doanh Việt Nam gồm:", { x: M, y: 2.0, w: CW, h: 0.45, fontSize: 16, color: C.muted });
  q.forEach(([t, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 2.6, cw, 1.4, f, c, i === 0 ? 3 : 1.5);
    T(s, t, { x, y: 2.6, w: cw, h: 1.4, fontSize: 26, bold: true, align: "center", valign: "middle" });
  });
  card(s, M, 4.35, CW, 2.2, C.tYellow, C.yellow);
  T(s, [{ text: "Hàm ý (nhận định): ", options: { bold: true } }, { text: "nêu bất đồng ", options: {} }, { text: "riêng, đúng người, đúng lúc", options: { bold: true } }, { text: " — nêu trước đám đông dễ biến thành xung đột không chức năng." }],
    { x: M + 0.4, y: 4.35, w: CW - 0.8, h: 2.2, fontSize: 21, valign: "middle" });
}

// ───────────────────────── 10 — misconceptions ─────────────────────────
{
  const s = base("s41", "Không phàn nàn có thể là thiếu niềm tin", {
    notes: "Hiểu lầm: “Xung đột chức năng = ít xung đột” → là bất đồng được giải quyết êm thấm nhờ có niềm tin.\n“Khách hàng không phàn nàn = hài lòng” → có thể là thiếu niềm tin để nói thẳng.\n→ Chuyển sang S3 — Thực hành 1.",
  });
  const m = [["“Xung đột chức năng = ít xung đột”", "Là bất đồng được giải quyết êm thấm nhờ có niềm tin"], ["“Khách hàng không phàn nàn = hài lòng”", "Có thể là thiếu niềm tin để nói thẳng"]];
  m.forEach(([a, b], i) => {
    const y = 2.1 + i * 2.25;
    card(s, M, y, 5.4, 1.9, C.tPink, C.pink);
    T(s, [{ text: "Hiểu lầm", options: { fontSize: 13, color: C.dPink, bold: true, breakLine: true } }, { text: a, options: { fontSize: 18, italic: true } }], { x: M + 0.3, y, w: 4.8, h: 1.9, valign: "middle" });
    arrow(s, M + 5.55, y + 0.95, M + 6.4, y + 0.95, C.ink, 3);
    card(s, M + 6.55, y, CW - 6.55, 1.9, C.tGreen, C.green);
    T(s, [{ text: "Sửa", options: { fontSize: 13, color: C.dGreen, bold: true, breakLine: true } }, { text: b, options: { fontSize: 19, bold: true } }], { x: M + 6.85, y, w: CW - 7.15, h: 1.9, valign: "middle" });
  });
}

// ───────────────────────── Activity 1 ─────────────────────────
{
  const s = base("s41", "Thực hành 1 · Chẩn đoán quan hệ Nova – An Phát", {
    source: "Phiếu W04_activity_S3_chan_doan_quan_he.md · Thẻ bằng chứng GIẢ ĐỊNH.",
    notes: "S3 — Thực hành 1 (20 phút): 8 · 7 · 5.\nGV hỏi: “Thẻ 8 làm yếu trụ cột nào — theo chữ nào trong định nghĩa?” (integrity).\nChốt: chẩn đoán bằng bằng chứng; integrity của agency là nền của trust; bất đồng không được nói ra (thẻ 2) là dấu hiệu thiếu xung đột chức năng.",
  });
  const ev = ["Thanh toán đúng hạn 4 năm liền", "Livestream chậm 15’; chị Lan không nói với Nova, chỉ kể chị Hạnh", "Chị Hạnh đề nghị ý tưởng cho chương trình cả năm", "Vẫn mời 2 agency khác chào giá “cho đúng quy trình”", "Đổi kịch bản sát ngày: họp 30’, thống nhất được", "Nova chưa được mời họp kế hoạch năm", "Chị Hạnh gửi số liệu tỷ lệ tham dự để Nova phân tích", "Nova giấu việc nhà cung cấp AV đổi thiết bị", "Nova đề nghị hợp đồng khung 2 năm; An Phát: “để xem”"];
  const cw = (8.2 - 0.3) / 3;
  ev.forEach((t, i) => {
    const x = M + (i % 3) * (cw + 0.15), y = 1.95 + Math.floor(i / 3) * 1.45;
    card(s, x, y, cw, 1.3, C.white, C.line);
    badge(s, x + 0.1, y + 0.1, 0.42, [C.purple, C.blue, C.pink][i % 3], String(i + 1), null, 13);
    T(s, t, { x: x + 0.15, y: y + 0.52, w: cw - 0.3, h: 0.75, fontSize: 12, valign: "top" });
  });
  const steps = [["8’", "Xếp vào Trust · Commitment · Functional conflict; đánh dấu + / –", C.purple], ["7’", "Chấm mỗi trụ cột 1–5. Trụ cột nào yếu nhất? Vì sao?", C.blue], ["5’", "Một việc Nova làm trong 1 tháng tới để củng cố trụ cột yếu nhất", C.pink]];
  const rx = M + 8.5, rw = CW - 8.5;
  steps.forEach(([t, d, c], i) => {
    const y = 1.95 + i * 1.45;
    badge(s, rx, y + 0.25, 0.75, c, t, null, 16);
    T(s, d, { x: rx + 0.95, y, w: rw - 0.95, h: 1.3, fontSize: 13, valign: "middle" });
  });
}

breakSlide();

// ───────────────────────── 11 — two-way ─────────────────────────
{
  const s = base("s42", "Đo chất lượng quan hệ bằng câu hỏi hai chiều", {
    source: "Công cụ học tập của môn — không phải thang đo đã kiểm định.",
    notes: "Nguyên tắc: hỏi cả hai phía (Nova tự đánh giá và An Phát đánh giá), cùng một bộ câu hỏi, rồi xem khoảng cách.",
  });
  pill(s, M + 0.3, 3.4, 3.2, 1.0, C.purple, "Nova tự chấm", { text: { fontSize: 18 } });
  pill(s, W - M - 3.5, 3.4, 3.2, 1.0, C.blue, "An Phát chấm", { text: { fontSize: 18 } });
  card(s, W / 2 - 2.0, 2.6, 4.0, 2.6, C.tYellow, C.yellow);
  T(s, [{ text: "Cùng 9 câu", options: { bold: true, fontSize: 22, breakLine: true } }, { text: "thang 1–5", options: { fontSize: 15, breakLine: true } }, { text: "→ xem khoảng cách", options: { fontSize: 17, bold: true, color: C.dPink } }], { x: W / 2 - 2.0, y: 2.6, w: 4.0, h: 2.6, align: "center", valign: "middle", paraSpaceAfter: 6 });
  arrow(s, M + 3.6, 3.9, W / 2 - 2.1, 3.9, C.ink, 3);
  arrow(s, W - M - 3.6, 3.9, W / 2 + 2.1, 3.9, C.ink, 3);
  T(s, "1 = hoàn toàn không đồng ý · 5 = hoàn toàn đồng ý", { x: M, y: 5.6, w: CW, h: 0.5, fontSize: 15, color: C.muted, align: "center" });
}

// ───────────────────────── 12 — gap ─────────────────────────
{
  const s = base("s42", "Khoảng cách giữa hai phía quan trọng hơn điểm trung bình", {
    source: "Số liệu minh họa GIẢ ĐỊNH.",
    notes: "Ví dụ minh họa: Nova tự chấm Functional conflict 4,3 nhưng An Phát chấm 2,7 → khoảng cách 1,6 — tín hiệu cần nói chuyện, dù điểm trung bình hai phía vẫn 3,5.\nAlt-text: biểu đồ thanh ngang, mỗi trụ cột có hai thanh (Nova, An Phát).",
  });
  pill(s, M, 1.95, 2.0, 0.42, C.yellow, "GIẢ ĐỊNH", { text: { fontSize: 11 } });
  const d = [["Trust", 4.2, 4.0], ["Commitment", 4.0, 3.5], ["Functional conflict", 4.3, 2.7]];
  const lx = M + 2.9, sw = 6.0 / 5;
  d.forEach(([t, a, b], i) => {
    const y = 2.6 + i * 1.2;
    T(s, t, { x: M, y, w: 2.8, h: 0.95, fontSize: 16, bold: true, valign: "middle" });
    [[a, C.purple, "Nova"], [b, C.blue, "An Phát"]].forEach(([v, c, n], j) => {
      const yy = y + j * 0.5;
      s.addShape(pres.shapes.RECTANGLE, { x: lx, y: yy, w: v * sw, h: 0.42, fill: { color: c }, line: { color: c, width: 0 } });
      T(s, `${n}  ${v.toFixed(1).replace(".", ",")}`, { x: lx + v * sw + 0.1, y: yy, w: 1.8, h: 0.42, fontSize: 12, bold: true, valign: "middle" });
    });
    const gap = (a - b).toFixed(1).replace(".", ",");
    badge(s, M + 11.0, y + 0.08, 0.8, a - b > 1 ? C.pink : C.band, gap, a - b > 1 ? C.white : C.ink, 15);
  });
  T(s, "khoảng cách", { x: M + 10.6, y: 2.15, w: 1.6, h: 0.4, fontSize: 12, color: C.muted, align: "center" });
  card(s, M, 6.15, CW, 0.5, C.tPink, C.pink);
  T(s, "Functional conflict lệch 1,6 điểm → cần nói chuyện, dù trung bình hai phía vẫn 3,5.", { x: M + 0.25, y: 6.15, w: CW - 0.5, h: 0.5, fontSize: 14, bold: true, valign: "middle" });
}

// ───────────────────────── 13 — nine questions ─────────────────────────
{
  const s = base("s42", "Chín câu hỏi cho ba trụ cột", {
    source: "Công cụ học tập của môn, dựng từ định nghĩa D01 — không phải thang đo đã kiểm định.",
    notes: "Dựng từ định nghĩa D01: T1 ↔ reliability, T2 ↔ integrity; C1 ↔ “maximum efforts”; F2 ↔ “resolved amicably”.\nChiếu suốt S6.",
  });
  const g = [["Trust", C.purple, C.tPurple, ["T1. Bên kia làm đúng những gì đã cam kết.", "T2. Khi có vấn đề, bên kia nói thật.", "T3. Tôi có thể dựa vào bên kia mà không cần kiểm tra lại mọi thứ."]],
    ["Commitment", C.blue, C.tBlue, ["C1. Quan hệ này đáng để chúng tôi nỗ lực tối đa giữ gìn.", "C2. Chúng tôi muốn tiếp tục làm việc cùng nhau nhiều năm.", "C3. Chúng tôi sẵn sàng dành thời gian, nguồn lực riêng cho quan hệ này."]],
    ["Functional conflict", C.pink, C.tPink, ["F1. Khi bất đồng, hai bên nói thẳng với nhau.", "F2. Bất đồng thường được giải quyết êm thấm.", "F3. Sau mỗi lần bất đồng, cách làm việc tốt hơn."]]];
  const cw = (CW - 0.6) / 3;
  g.forEach(([h, c, f, qs], i) => {
    const x = M + i * (cw + 0.3);
    pill(s, x, 1.95, cw, 0.6, c, h, { text: { fontSize: 17 } });
    card(s, x, 2.7, cw, 3.85, f, f);
    T(s, qs.map((q, k) => ({ text: q, options: { breakLine: k < 2 } })), { x: x + 0.3, y: 2.85, w: cw - 0.6, h: 3.55, fontSize: 15, valign: "top", paraSpaceAfter: 16 });
  });
}

// ───────────────────────── 14 — five steps ─────────────────────────
{
  const s = base("s42", "Năm bước biến bất đồng thành xung đột chức năng", {
    source: "Nhận định của người soạn, dựng từ D01, Y03 (Mohr & Spekman, 1994), D06.",
    notes: "Chiếu suốt S6 — người quan sát ghi lại theo năm bước này.\nBước 4: joint problem solving — Mohr & Spekman (1994).",
  });
  const st = [["Nêu sớm", "trước khi thành bức xúc", C.orange], ["Nêu riêng, đúng người", "giữ thể diện", C.purple], ["Về vấn đề", "không về con người", C.blue], ["Cùng giải quyết", "joint problem solving", C.pink], ["Ghi lại, theo dõi", "việc đã thống nhất", C.green]];
  const cw = (CW - 0.8) / 5;
  st.forEach(([h, d, c], i) => {
    const x = M + i * (cw + 0.2), y = 4.6 - i * 0.4;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: cw, h: 6.55 - y, fill: { color: c }, line: { color: c, width: 0 } });
    badge(s, x + cw / 2 - 0.4, y - 0.95, 0.8, c, String(i + 1), null, 22);
    T(s, [{ text: h, options: { bold: true, fontSize: 17, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.12, y: y + 0.1, w: cw - 0.24, h: 1.7, color: dark(c), valign: "top", align: "center", paraSpaceAfter: 4 });
  });
}

// ───────────────────────── 15 — case ─────────────────────────
{
  const s = base("s42", "Khi bất đồng không được giải quyết, cả mạng lưới trả giá", {
    source: "D07 → Y09: Báo Văn hóa (3/1/2026). Chỉ nêu sự kiện đã đưa tin, không quy lỗi cá nhân.",
    notes: "“Về đây bốn cánh chim trời” (28/12/2025): theo báo chí đưa tin, tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất không được giải quyết, show không diễn ra, mọi bên chịu thiệt.\nChỉ nêu sự kiện đã đưa tin. Không quy lỗi cá nhân.",
  });
  pill(s, M, 2.0, 2.6, 0.45, C.green, "CASE THẬT · 28/12/2025", { text: { fontSize: 11 } });
  T(s, "“Về đây bốn cánh chim trời”", { x: M, y: 2.6, w: CW, h: 0.8, fontSize: 30, bold: true, color: C.purple });
  const st = [["Bất đồng thanh toán", "giữa nghệ sĩ và nhà sản xuất", C.orange, C.tOrange], ["Không được giải quyết", "theo báo chí đưa tin", C.pink, C.tPink], ["Show không diễn ra", "mọi bên chịu thiệt", C.purple, C.tPurple]];
  const cw = (CW - 1.2) / 3;
  st.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.6);
    card(s, x, 3.65, cw, 2.0, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, fontSize: 20, breakLine: true } }, { text: d, options: { fontSize: 14 } }], { x: x + 0.3, y: 3.65, w: cw - 0.6, h: 2.0, valign: "middle", align: "center", paraSpaceAfter: 4 });
    if (i < 2) arrow(s, x + cw + 0.08, 4.65, x + cw + 0.52, 4.65, C.ink, 3);
  });
  T(s, "Ví dụ ngược của functional conflict: niềm tin mất, quan hệ vỡ công khai.", { x: M, y: 5.95, w: CW, h: 0.55, fontSize: 17, italic: true, color: C.muted, align: "center" });
}

// ───────────────────────── 16 — discrete vs relational ─────────────────────────
{
  const s = base("s43", "Trao đổi rời rạc khác trao đổi quan hệ", {
    source: "D04: Dwyer, Schurr & Oh (1987), Journal of Marketing, 51(2) · D05: McDonald, Millman & Rogers (1997).",
    notes: "Dwyer, Schurr & Oh (1987): phần lớn nghiên cứu và chiến lược coi trao đổi mua – bán là sự kiện rời rạc, không phải quan hệ liên tục; bài đề xuất khung phát triển quan hệ mua – bán.\nMcDonald et al. (1997) mô tả các giai đoạn phát triển quan hệ key account. Không nêu tên các giai đoạn — sẽ bổ sung sau khi kiểm tra toàn văn. [VERIFY]",
  });
  const cw = (CW - 0.3) / 2;
  card(s, M, 2.1, cw, 3.3, C.white, C.line);
  T(s, "Trao đổi rời rạc", { x: M + 0.35, y: 2.25, w: cw - 0.7, h: 0.6, fontSize: 22, bold: true, color: C.muted });
  for (let i = 0; i < 4; i++) s.addShape(pres.shapes.OVAL, { x: M + 0.6 + i * 1.3, y: 3.4, w: 0.6, h: 0.6, fill: { color: C.band }, line: { color: C.muted, width: 1.5 } });
  T(s, "mỗi lần mua là một sự kiện riêng", { x: M + 0.35, y: 4.4, w: cw - 0.7, h: 0.6, fontSize: 15, color: C.muted });
  card(s, M + cw + 0.3, 2.1, cw, 3.3, C.tPink, C.pink, 1.5);
  T(s, "Trao đổi quan hệ", { x: M + cw + 0.65, y: 2.25, w: cw - 0.7, h: 0.6, fontSize: 22, bold: true, color: C.dPink });
  const x0 = M + cw + 0.9;
  line(s, x0 + 0.3, 3.7, x0 + 0.3 + 3 * 1.3, 3.7, C.pink, 4);
  for (let i = 0; i < 4; i++) s.addShape(pres.shapes.OVAL, { x: x0 + i * 1.3, y: 3.4, w: 0.6, h: 0.6, fill: { color: C.pink }, line: { color: C.white, width: 1.5 } });
  T(s, "các lần trao đổi nối thành một quan hệ liên tục, phát triển qua giai đoạn", { x: M + cw + 0.65, y: 4.4, w: cw - 0.7, h: 0.8, fontSize: 15 });
  card(s, M, 5.7, CW, 0.85, C.tYellow, C.yellow);
  T(s, "Các giai đoạn phát triển quan hệ key account: McDonald et al. (1997) — học tiếp ở Buổi 8.", { x: M + 0.35, y: 5.7, w: CW - 0.7, h: 0.85, fontSize: 16, bold: true, valign: "middle" });
}

// ───────────────────────── 17 — five changes ─────────────────────────
{
  const s = base("s43", "Với agency, đi từ giao dịch sang đối tác thay đổi năm điều", {
    source: "Nhận định của người soạn.",
    notes: "Dùng bảng này ở Bước 3 của Thực hành 2 (lộ trình).",
  });
  const cols = [{ w: CW / 2, head: "Giao dịch", fill: C.muted, color: C.white, textColor: C.muted }, { w: CW / 2, head: "Quan hệ đối tác", fill: C.pink }];
  table(s, M, 1.95, cols, [
    ["Đấu thầu từng sự kiện", "Hợp đồng khung nhiều năm"],
    ["Brief → đề xuất → làm → xong", "Cùng lập kế hoạch năm, đánh giá chung"],
    ["Một đầu mối", "Nhiều đầu mối nhiều cấp (Buổi 8)"],
    ["Thông tin tối thiểu", "Chia sẻ mục tiêu, dữ liệu"],
    ["Đo bằng “sự kiện suôn sẻ”", "Đo bằng chất lượng quan hệ + kết quả kinh doanh"],
  ], { rowH: 0.72, size: 17, headH: 0.55, firstBold: false });
}

// ───────────────────────── 18 — McMillan ─────────────────────────
{
  const s = base("s43", "Thời gian quan hệ tự nó tạo giá trị", {
    source: "D06 → T18: McMillan & Woodruff (1999), The Quarterly Journal of Economics, 114(4).",
    notes: "McMillan & Woodruff (1999): ở Việt Nam thập niên 1990, quan hệ giao dịch càng lâu, tín dụng thương mại càng lớn.\nBằng chứng lịch sử — dùng để hiểu gốc rễ: thời gian quan hệ tự nó tạo niềm tin và giá trị kinh tế.\n→ Chuyển sang S6 — Thực hành 2.",
  });
  pill(s, M, 2.0, 3.2, 0.45, C.yellow, "BẰNG CHỨNG LỊCH SỬ", { text: { fontSize: 11 } });
  const bx = M + 0.8, by = 6.1, bw = 6.0, bh = 3.3;
  line(s, bx, by, bx + bw, by, C.muted, 1.5, { end: "triangle" });
  line(s, bx, by, bx, by - bh, C.muted, 1.5, { end: "triangle" });
  T(s, "Thời gian quan hệ →", { x: bx, y: by + 0.05, w: bw, h: 0.35, fontSize: 12, color: C.muted, align: "center" });
  T(s, "Tín dụng thương mại →", { x: bx - 2.0, y: by - bh / 2 - 0.2, w: 3.3, h: 0.35, fontSize: 12, color: C.muted, align: "center", rotate: 270 });
  [0.6, 1.1, 1.5, 2.1, 2.5].forEach((h, i) => s.addShape(pres.shapes.RECTANGLE, { x: bx + 0.4 + i * 1.1, y: by - h - 0.3, w: 0.75, h: h + 0.3, fill: { color: [C.tPink, C.tPink, C.pink, C.pink, C.purple][i] }, line: { color: C.white, width: 0 } }));
  const rx = M + 7.5, rw = CW - 7.5;
  card(s, rx, 2.6, rw, 2.2, C.tPurple, C.purple);
  T(s, [{ text: "Việt Nam, thập niên 1990", options: { bold: true, breakLine: true } }, { text: "quan hệ giao dịch càng lâu → tín dụng thương mại càng lớn", options: { fontSize: 16 } }], { x: rx + 0.3, y: 2.6, w: rw - 0.6, h: 2.2, fontSize: 19, valign: "middle", paraSpaceAfter: 6 });
  card(s, rx, 5.05, rw, 1.5, C.tYellow, C.yellow);
  T(s, "Thời gian quan hệ tự nó tạo niềm tin và giá trị kinh tế.", { x: rx + 0.3, y: 5.05, w: rw - 0.6, h: 1.5, fontSize: 17, bold: true, valign: "middle" });
}

// ───────────────────────── Activity 2 ─────────────────────────
{
  const s = base("s43", "Thực hành 2 · Cuộc trò chuyện sau gala", {
    source: "Phiếu W04_activity_S6_cuoc_tro_chuyen_sau_gala.md · Tình huống GIẢ ĐỊNH.",
    notes: "S6 — Thực hành 2 (30 phút): 3 · 10 · 10 · 7. Phát thẻ vai, thẻ chị Hạnh úp (chỉ người đóng vai đọc: đang bị ông Tuấn hỏi “có nên thử agency khác không”).\nNếu chị Thảo đổ lỗi cho nhà cung cấp AV → hỏi người quan sát: “Trong mắt An Phát, lỗi của ai?” (Buổi 10).\nNếu chị Thảo xin lỗi rồi dừng → “Giải pháp là gì? Ai làm, khi nào?”\nLộ trình toàn “chăm sóc khách tốt hơn” → yêu cầu bước cụ thể.",
  });
  card(s, M, 1.95, CW, 1.1, C.tBlue, C.blue);
  T(s, "Tuần sau gala, Nova nghe gián tiếp: chị Lan không hài lòng vì livestream chậm 15 phút — lần thứ hai liên tiếp. Chị Hạnh chưa nói gì. Chị Thảo (KAMer Nova) hẹn gặp riêng chị Hạnh 20 phút.", { x: M + 0.3, y: 1.95, w: CW - 0.6, h: 1.1, fontSize: 14, valign: "middle" });
  const roles = [["Chị Thảo · KAMer Nova", "Nêu vấn đề trước, không đổ lỗi, cùng tìm giải pháp; đề xuất một bước dài hạn", C.purple, C.tPurple], ["Chị Hạnh · An Phát", "Hài lòng chung nhưng ngại nói thẳng… (thẻ úp)", C.pink, C.tPink], ["Người quan sát", "Ghi theo 5 bước: sớm · riêng · về vấn đề · cùng giải quyết · ghi lại", C.green, C.tGreen]];
  const cw = (CW - 0.6) / 3;
  roles.forEach(([h, d, c, f], i) => {
    const x = M + i * (cw + 0.3);
    card(s, x, 3.25, cw, 1.6, f, c, 1.5);
    T(s, [{ text: h, options: { bold: true, fontSize: 16, breakLine: true } }, { text: d, options: { fontSize: 13 } }], { x: x + 0.25, y: 3.25, w: cw - 0.5, h: 1.6, valign: "middle", paraSpaceAfter: 4 });
  });
  const st = [["10’", "Chuẩn bị: dự đoán F1–F3 hai phía; câu mở đầu + 2 phương án", C.blue], ["10’", "Đóng vai bộ ba: diễn 6’, nhận xét 3’", C.pink], ["7’", "Lộ trình 3 bước giao dịch → đối tác: làm gì · với ai · dấu hiệu", C.purple]];
  st.forEach(([t, d, c], i) => {
    const x = M + i * (cw + 0.3);
    badge(s, x, 5.2, 0.8, c, t, null, 16);
    T(s, d, { x: x + 0.95, y: 5.05, w: cw - 0.95, h: 1.1, fontSize: 13, valign: "middle" });
  });
}

// ───────────────────────── 19 — summary ─────────────────────────
{
  const s = base("end", "Ba ý của Buổi 4", {
    notes: "S7 — Tổng hợp (3 phút).\nLiên hệ SMP: đo nhanh ba trụ cột với khách hàng dự án cũ (theo cảm nhận của nhóm + bằng chứng) — nền cho phần B. Value Opportunities.",
  });
  summary3([["1", "Ba trụ cột: trust (tin cậy + chính trực), commitment (đáng nỗ lực tối đa để giữ), functional conflict (bất đồng giải quyết êm thấm — kết quả của trust)."],
    ["2", "Đo: hỏi cả hai phía, xem khoảng cách; bất đồng nêu sớm, riêng, cùng giải quyết."],
    ["3", "Từ giao dịch sang quan hệ: hợp đồng khung, cùng lập kế hoạch, nhiều đầu mối, chia sẻ thông tin."]], s,
    [{ text: "Stakeholder Management Plan: ", options: { bold: true } }, { text: "đo nhanh ba trụ cột với khách hàng dự án cũ (cảm nhận + bằng chứng) — nền cho phần B. Value Opportunities." }]);
}

// ───────────────────────── 20 — exit ticket ─────────────────────────
{
  const s = base("end", "Phiếu kiểm tra cuối giờ", {
    notes: "S8 — cá nhân, không chấm điểm.\nCần xem: (a) không hiểu nhầm functional conflict là “không có xung đột”; (b) có bằng chứng, không chỉ cảm nhận.\nCâu nối Buổi 5: “Quan hệ tốt là nền. Nhưng khách hàng ở lại vì giá trị. Buổi sau: xây đề xuất giá trị và cùng khách hàng tạo ra giá trị.”",
  });
  exitTicket(s, ["Viết lại bằng lời của bạn: functional conflict là gì, và vì sao nó cần trust?", "Với khách hàng trong dự án cũ, trụ cột nào (trust, commitment, functional conflict) yếu nhất? Bằng chứng?"],
    [{ text: "Buổi 5: ", options: { bold: true } }, { text: "quan hệ tốt là nền, nhưng khách hàng ở lại vì giá trị — xây đề xuất giá trị và cùng khách hàng tạo ra giá trị." }]);
}

refSlides([
  ["D01", "Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. Journal of Marketing, 58(3), 20–38. https://doi.org/10.1177/002224299405800302"],
  ["D02", "Anderson, J. C., & Narus, J. A. (1990). A model of distributor firm and manufacturer firm working partnerships. Journal of Marketing, 54(1), 42–58."],
  ["D03", "Palmatier, R. W., Dant, R. P., Grewal, D., & Evans, K. R. (2006). Factors influencing the effectiveness of relationship marketing: A meta-analysis. Journal of Marketing, 70(4), 136–153."],
  ["D04", "Dwyer, F. R., Schurr, P. H., & Oh, S. (1987). Developing buyer-seller relationships. Journal of Marketing, 51(2), 11–27."],
  ["D05", "McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757."],
  ["D06", "Pham, H. H., & Pham, N. C. (2025). Marketing insights from Quan He. BIMTECH Business Perspectives · McMillan, J., & Woodruff, C. (1999). Interfirm relationships and informal credit in Vietnam. QJE, 114(4), 1285–1320."],
  ["D07", "Báo Văn hóa. (2026, January 3). Giữa hợp đồng và trách nhiệm, ranh giới nào cho nghệ sĩ?"],
], "buoi-04_tu-lieu-tong-hop.md", 7);

pres.writeFile({ fileName: OUT }).then((f) => console.log("wrote", f));
