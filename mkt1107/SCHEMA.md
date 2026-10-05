# Định dạng nội dung slide (`content/W<n>.json`)

Mỗi buổi học là một file JSON. `build.js` đọc file và dựng `output/<fileName>`.
Mọi chữ trên slide đều ≥ 24 pt (font Alexandria). Builder đo chữ bằng độ rộng glyph thật
của Alexandria; nếu một ô không vừa ở 24 pt, nó in `WARN ... overflows` → **rút gọn chữ hoặc
tách slide**, không bao giờ để cảnh báo tồn tại.

```json
{
  "deckTitle": "MKT1107 · Buổi 1 · Tổng quan về nghiên cứu Marketing",
  "fileName": "MKT1107_Buoi01_Tong_quan_NCMKT.pptx",
  "slides": [ { "type": "...", "notes": "...", ... } ]
}
```

Trường chung cho mọi slide:
- `type` — một trong các loại bên dưới.
- `title` — tiêu đề dạng **nhận định** (câu hoàn chỉnh, không chấm cuối), tối đa ~100 ký tự
  (2 dòng ở 28–36 pt).
- `notes` — **bắt buộc**, lời giảng (speaker notes) tiếng Việt, văn xuôi, đủ để giảng viên khác
  cầm lên giảng được: nói gì, hỏi lớp câu gì, chờ bao lâu, chuyển ý thế nào, lưu ý thời gian.
  Thường 80–250 từ. Dùng `\n` để xuống dòng giữa các ý.
- Trong mọi chuỗi hiển thị có thể dùng `**đậm**` và `*nghiêng*`.

## Các loại slide

| type | Trường | Giới hạn gợi ý (ở 24 pt) |
|---|---|---|
| `cover` | `lessonTag` ("Buổi"), `number` (1), `title`, `subtitle`, `presenter`, `kicker` (tùy chọn) | title ≤ 70 ký tự |
| `section` | `tag` (≤ 3 ký tự, vd "S3"), `kicker` (vd "15–40 phút"), `title` | title ≤ 70 |
| `bullets` | `title`, `bullets`: chuỗi hoặc `{head, text}`, `numbered` (bool), `callout` | ≤ 5 ý, mỗi ý ≤ 90 ký tự |
| `cards` | `title`, `cards`: `[{head, text, tag?}]`, `callout` | 2–3 thẻ: text ≤ 110; 4 thẻ (2×2): ≤ 70; 5–6 thẻ (3×2): head ≤ 22, text ≤ 45 |
| `compare` | `title`, `left`/`right`: `{head, items[]}`, `vs` (bool), `callout` | ≤ 4 ý/cột, mỗi ý ≤ 50 |
| `steps` | `title`, `steps`: `[{head, text?, tag?}]`, `direction` ("h"/"v", tùy chọn), `callout` | ngang (≤ 4 bước có text): head ≤ 20, text ≤ 60; dọc (5–7 bước): head + text ≤ 85 |
| `table` | `title`, `header[]`, `rows[][]`, `boldFirstCol`, `callout` | ≤ 4 cột, ≤ 5 dòng, ô ≤ 35 ký tự |
| `statement` | `title` (tùy chọn), `big`, `sub`, `mark` ("?", "!", "“") | big ≤ 130, sub ≤ 120 |
| `case` | `title`, `label` (mặc định "Tình huống"), `scenario` (chuỗi hoặc mảng câu), `question` | scenario ≤ 260, question ≤ 90 |
| `model` | `title`, `inputsLabel`, `inputs[]`, `mediator?`, `outputLabel`, `output`, `callout` | ≤ 5 biến, mỗi biến ≤ 28 |
| `stat` | `title`, `stats`: `[{value, label}]`, `callout` | 2–4 số; value ≤ 5 ký tự; label ≤ 45 |
| `timeline` | `title`, `items`: `[{tag, text, highlight?}]`, `callout` | ≤ 8 mốc; tag ≤ 3 ký tự; text ≤ 30 |
| `activity` | `title`, `stages`: `[{time, text}]`, `product` | ≤ 5 chặng, text ≤ 80 |
| `break` | `title`, `big` (mặc định "15'"), `sub` | |
| `references` | `title` (mặc định "Tài liệu tham khảo"), `refs[]` (APA 7, tên sách/tạp chí trong `*...*`) | builder tự tách sang slide "(tiếp)" |

`callout` là một câu chốt (≤ 110 ký tự) hiển thị trong hộp nổi bật bên dưới nội dung.

## Quy tắc nội dung
- Một thông điệp mỗi slide; chữ trên slide chỉ là điểm tựa, phần giải thích nằm trong `notes`.
- Không để thẻ biên tập như `[UEF #3]`, `[VERIFY: …]`, `[BOARD: …]`, tên file `.md` trên slide —
  chuyển các lưu ý này vào `notes` (vd: "Lưu ý cho giảng viên: cần xác nhận …").
- Chỗ giảng viên cần điền (giờ, hạn nộp) viết là "…".
- Không dùng ký tự ✓ ✗ ① (Alexandria không có glyph).
- Ghi nguồn (APA 7) ngay trên slide khi dùng định nghĩa/số liệu của người khác, ví dụ trong
  `callout` hoặc cuối ý: "(Malhotra, 2019)"; danh mục đầy đủ ở slide `references` cuối deck.

## Dựng và kiểm tra
```bash
npm install            # lần đầu
node build.js W1 W2    # hoặc để trống để dựng tất cả
```
