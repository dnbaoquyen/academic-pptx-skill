# MKT1107 Nghiên cứu Marketing — slide trình chiếu Buổi 1–10

Bộ slide được dựng từ dàn ý và bài giảng trong
[`dnbaoquyen/teaching-skills` › `courses/MKT1107/lessons`](https://github.com/dnbaoquyen/teaching-skills/tree/claude/vigilant-heisenberg-qe5n8t/courses/MKT1107/lessons)
(`W*_slides_outline.md`, `W*_lecture_notes.md`, `W*_activity_*.md`).

| Thư mục | Nội dung |
|---|---|
| `output/` | 10 file `.pptx` (`MKT1107_W01_slides.pptx` … `MKT1107_W10_slides.pptx`), có speaker notes ở từng slide |
| `content/` | Nội dung từng buổi dạng JSON (chữ trên slide + lời giảng) — sửa ở đây rồi dựng lại |
| `build.js`, `lib/` | Bộ dựng (pptxgenjs) |
| `SCHEMA.md` | Mô tả các loại slide và giới hạn chữ |

## Quy chuẩn thiết kế
- Nền `#FBFAF4`; màu trang trí luân phiên `#49B296`, `#FFD23B`, `#FF5178`, `#962B7C`, `#09A1E5`, `#FF9259`
  (chữ trên nền tím dùng màu trắng; trên các màu còn lại dùng màu chữ tối để đủ tương phản).
- Font **Alexandria** cho toàn bộ chữ (tiêu đề đậm, nội dung thường).
- **Mọi chữ trên slide ≥ 24 pt** (tiêu đề 28–36 pt, nội dung 24–30 pt, số trang 24 pt) để sinh viên
  ngồi cách màn chiếu 5 m vẫn đọc rõ. Bộ dựng đo chữ theo độ rộng glyph thật của Alexandria và báo
  lỗi nếu ô nào phải xuống dưới 24 pt mới vừa.
- Speaker notes (lời giảng) cho từng slide: xem trong PowerPoint ở *View › Notes* hoặc chế độ
  Presenter View.

## Cài font trước khi trình chiếu
Alexandria là font Google Fonts (miễn phí, hỗ trợ đầy đủ tiếng Việt), không có sẵn trong Windows/macOS.
Tải tại <https://fonts.google.com/specimen/Alexandria> và cài vào máy chiếu trước khi mở file —
nếu không, PowerPoint sẽ thay bằng font khác và bố cục có thể lệch.

## Dựng lại sau khi sửa nội dung
```bash
cd mkt1107
npm install
node build.js          # tất cả các buổi
node build.js W3       # chỉ Buổi 3
```
