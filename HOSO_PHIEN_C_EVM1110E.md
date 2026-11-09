# HỒ SƠ MÔN HỌC — [PHIÊN C – SOẠN SLIDE]

**Môn:** Quản trị các mối quan hệ trong tổ chức sự kiện (mã **EVM1110E**)

| | |
|---|---|
| Ngày soạn | 09/11/2026 |
| Phiên | Claude Code. Repo slide `dnbaoquyen/academic-pptx-skill`, nhánh `claude/nifty-thompson-2d4hk2` |
| Nguồn nội dung | Repo `dnbaoquyen/teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`, thư mục `courses/EVM1110E/lessons/` |
| Mục đích | Gộp với hồ sơ của hai phiên teaching skill trước. Mọi mục trong file này thuộc **[PHIÊN C]** |

## Quy ước

| Ký hiệu | Nghĩa |
|---|---|
| **TN1…TN11** | Tin nhắn của giảng viên trong phiên này. Bảng đầy đủ ở Mục 0. |
| **File nguồn** | File bài giảng giảng viên chỉ định. Agent đã đọc trong phiên để làm slide. |
| **Deck WNN** | Bộ slide đã xuất: `examples/EVM1110E_WNN/` |
| **[CHƯA CÓ THÔNG TIN]** | Phiên này không có thông tin đó. |
| **[CẦN XÁC NHẬN]** | Lấy từ file nguồn hoặc slide, giảng viên chưa nói trực tiếp. |

> ⚠️ **Phần có thể bị thiếu**
>
> 1. Phần đầu phiên (TN1–TN7, soạn Buổi 7–13, khoảng 27–28/09/2026) đã bị **tóm tắt tự động**.
>    - Còn nguyên văn: TN1, TN2, TN8, TN9.
>    - TN3–TN7 chỉ còn bản tóm tắt "Same request for W09…". **Lời gốc đã mất.**
> 2. Bản tóm tắt liệt kê "All user messages" và **không ghi lần góp ý sửa nào**. Agent không kiểm chứng được 100% rằng không có góp ý bị lược.
> 3. Chi tiết quá trình làm Buổi 7–13 (các lần agent tự sửa) chỉ còn ba bài học được ghi lại. Xem Sổ lỗi, mục L-19.
> 4. Không có file nào được *tải lên* trực tiếp trong phiên.
>    - Không có đề cương PDF, không có template, không có slide mẫu.
>    - Toàn bộ nguồn là các file `.md` trong repo `teaching-skills`. Các file này đọc qua bản clone; bản clone **đã bị xóa cùng máy chạy cũ**.
>    - Nội dung file nguồn trong hồ sơ này chỉ gồm phần đã được chép lại trong phiên hoặc thể hiện trên slide.

---

## Mục 0. Danh sách tin nhắn của giảng viên [PHIÊN C]

| TN | Thời điểm | Nội dung |
|---|---|---|
| TN1 | khoảng 27/09/2026 | "Hãy tạo 1 tài liệu trình chiếu (presentation deck) cho nội dung bài giảng có trong đường dẫn /home/user/teaching-skills/courses/EVM1110E/lessons/W07_slides_outline.md áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí, font chữ Alexandria." |
| TN2 | khoảng 27/09/2026 | "Tiếp tục tạo tài liệu trình chiếu cho nội dung bài giảng có trong đường dẫn courses/EVM1110E/lessons/W08_slides_outline.md và vẫn áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu …, font chữ Alexandria." *(dấu "…" có sẵn trong bản tóm tắt)* |
| TN3 | khoảng 27/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, file `W09_lesson_plan.md` |
| TN4 | khoảng 27/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, file `W10_slides_outline.md` |
| TN5 | khoảng 27/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, file `W11_slides_outline.md` |
| TN6 | khoảng 27/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, file `W12_slides_outline.md` |
| TN7 | khoảng 28/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, file `W13_lesson_plan.md` |
| TN8 | 03/10/2026 | "Tạo tài liệu trình chiếu cho buổi học 1 đến buổi học 6 dựa vào nội dung của từng bài có trong đường dẫn https://github.com/dnbaoquyen/teaching-skills/tree/claude/busy-mccarthy-wsbyzs/courses/EVM1110E/lessons và vẫn áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí, font chữ Alexandria." |
| TN9 | 03/10/2026 (gửi khi đang làm) | "Phần giảng viên để tên Đoàn Nguyễn Bảo Quyên" |
| TN10 | 09/11/2026 | Yêu cầu soạn hồ sơ bàn giao lần 1. Kết quả là file `HANDOFF_EVM1110E.md` trong repo. |
| TN11 | 09/11/2026 | Yêu cầu soạn hồ sơ này ([PHIÊN C]). |

---

## Mục 1. Thông tin chung [PHIÊN C]

| Mục | Nội dung | Nguồn |
|---|---|---|
| Tên môn | "Quản trị các mối quan hệ trong tổ chức sự kiện" (cách giảng viên gọi). Trên slide ghi "Quản trị mối quan hệ trong tổ chức sự kiện" | TN10, TN11; slide bìa Deck W01–W13 |
| Tên tiếng Anh | "Stakeholders Management for Events" | Slide bìa Deck W01, W07 (từ file nguồn) [CẦN XÁC NHẬN] |
| Mã môn | EVM1110E | Thư mục `courses/EVM1110E` |
| Số tín chỉ / số tiết | [CHƯA CÓ THÔNG TIN] | — |
| Số buổi | 15 buổi. Slide bìa ghi "Buổi N / 15" | Deck W01–W13 |
| Thời lượng một buổi | [CHƯA CÓ THÔNG TIN] dạng số tiết. Giáo án Buổi 3 có mốc "126–132 S8", tức khoảng 130+ phút | `W03_lesson_plan.md` [CẦN XÁC NHẬN] |
| Bố cục 4 phần | Xem bảng ngay dưới | Deck W01 S5 |
| Phạm vi | Chỉ xét bên liên quan **bên ngoài**. "nhân sự, crew, tình nguyện viên thuộc môn Quản lý đội nhóm trong tổ chức sự kiện; quản lý và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện." | Deck W01 S4 (ghi chú) |
| Người học | Sinh viên, thực hành theo **6 nhóm**. Đã có dự án sự kiện ở các môn trước. Trình độ, ngành, sĩ số: [CHƯA CÓ THÔNG TIN] | Phiếu thực hành; Deck W01 |
| Trường / khoa | Khoa Marketing · UEF | Slide bìa (từ file nguồn) [CẦN XÁC NHẬN] |
| Giảng viên | Đoàn Nguyễn Bảo Quyên | TN9 |
| Ngôn ngữ | Tiếng Việt. Giữ thuật ngữ tiếng Anh, giải thích tiếng Việt lần đầu | Lecture notes W03–W06 |
| Nền tảng | "Mọi bài nộp qua LMS theo thời hạn quy định". Phiếu kiểm tra cuối giờ dùng "Giấy nhỏ hoặc Google Form" | Deck W01 S8 (ghi chú), Deck W02 (ghi chú) |
| Câu hỏi của môn | "làm thế nào để xây dựng, duy trì và phát triển quan hệ với các bên liên quan bên ngoài sao cho sự kiện thành công — và khách hàng quay lại?" | Deck W01 S3 (ghi chú) |
| CLO | Phiếu thực hành có ghi CLO1, CLO2, CLO4, CLO5, CLO6 và mức Bloom (ví dụ "CLO1, CLO4 · Bloom: Phân loại → Phân tích → Suy luận"). **Nội dung CLO:** [CHƯA CÓ THÔNG TIN]. **PLO:** [CHƯA CÓ THÔNG TIN] | `W03`–`W06_activity_*.md` |
| Đánh giá | Chuyên cần 10% · bài tập 20% · giữa kỳ (thuyết trình + làm việc nhóm) 20% · cuối kỳ (Stakeholder Management Plan + phản biện) 50% | Deck W01 S7, nguồn ghi "Đề cương chi tiết học phần EVM1110E (UEF)" |
| Bài cuối kỳ | Stakeholder Management Plan (SMP) cho **1 khách hàng từ dự án sự kiện cũ**, "không làm dự án mới". Mỗi buổi thêm một mảnh. Bảo vệ trước hội đồng. Khung A–E: A. Value Insights · B. Value Opportunities · C. Value Propositions · D. Delivery · E. Executive Summary | Deck W01 S8; Deck W13 |
| Quy định chuyên cần / nộp trễ / AI | [NEEDS PROFESSOR INPUT] (ghi trong Deck W01) | Deck W01 |
| Giáo trình | Đọc thêm: Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). *Implementing key account management*. Kogan Page. Danh sách giáo trình chính thức: [CHƯA CÓ THÔNG TIN] | Lecture notes W03, W05 |
| Tài liệu | Mỗi buổi có `buoi-NN_tu-lieu-tong-hop.md` (mục 6: APA 7). Mã nguồn theo buổi: A (B1) · B (B2) · C (B3) · D (B4) · E (B5) · F (B6) · S (B7) · T (B8) · U (B9) · … · Y (B12) · Z (B13). Danh mục từng buổi nằm ở slide "Tài liệu tham khảo" cuối mỗi deck (xem Mục 2) | File nguồn |

**Bố cục 4 phần của môn**

| Phần | Buổi | Nội dung |
|---|---|---|
| 1 | Buổi 1 | Nền tảng |
| 2 | Buổi 2–8 | KAM |
| 3 | Buổi 9–12 | Điều phối các bên phục vụ hành trình khách hàng |
| 4 | Buổi 13–15 | Đánh giá: hoàn thiện, bảo vệ kế hoạch |

**Tình huống xuyên suốt (giả định, từ file nguồn)**

| Đơn vị | Nhân vật / dữ kiện |
|---|---|
| Nova Events (agency) | Anh Đức (CEO), chị Thảo (KAMer) |
| Ngân hàng An Phát (Key Account) | Chị Hạnh: GĐ Marketing đến Buổi 7. Từ Buổi 8 chị chuyển đi, **anh Minh** thay. Ông Tuấn: Phó TGĐ. Anh Khoa: ngân sách – mua sắm. Chị Lan: truyền thông nội bộ. Chị Vy: thương hiệu |
| Khách hàng khác của Nova | Địa ốc Sông Xanh 3,5 tỷ · MediPharm 1,2 tỷ · Bright Future 0,6 tỷ · Bếp Việt 1,8 tỷ. An Phát 2,3 tỷ |
| Sự kiện trung tâm | Gala 12/12, khoảng 600 lãnh đạo doanh nghiệp VIP |

---

## Mục 2. Cấu trúc nội dung [PHIÊN C]

### Cách đọc mục này

- Mỗi buổi có phần **khung** (tên, mục tiêu, các đoạn, số slide, trạng thái), sau đó là **nội dung từng slide**.
- Nội dung từng slide **trích tự động từ file .pptx đã xuất**, không viết lại. Mỗi slide gồm:
  - tiêu đề hành động (action title);
  - toàn bộ chữ trên slide, các khối cách nhau bằng " · ", các dòng trong một khối cách nhau bằng " / ";
  - chân slide (mã nguồn);
  - speaker notes đầy đủ, xuống dòng ký hiệu ⏎.
- Thanh điều hướng đầu slide và số trang đã được lược.

### Bảng tổng quan

| Buổi | Tên bài | Số slide | Trạng thái | Nguồn chính |
|---|---|---|---|---|
| 1 | Định hình hệ sinh thái các bên liên quan bên ngoài | 29 | HOÀN THÀNH | `W01_slides_outline.md` + lecture notes, activities, tư liệu |
| 2 | KAM Mindset & Key Account Selection | 25 | HOÀN THÀNH | `W02_*` |
| 3 | Understanding the Customer & Customer Journey | 24 | HOÀN THÀNH | `W03_*` |
| 4 | Measuring Relationship Quality | 24 | HOÀN THÀNH | `W04_*` |
| 5 | CVP & Value Co-creation | 25 | HOÀN THÀNH | `W05_*` |
| 6 | Financial Acumen in KAM | 24 | HOÀN THÀNH | `W06_*` |
| 7 | Understanding Procurement & Value-based Negotiation | 31 | HOÀN THÀNH | `W07_slides_outline.md` |
| 8 | Governing the Key Account Relationship & Multi-dimensional Performance Measurement | 30 | HOÀN THÀNH | `W08_slides_outline.md` |
| 9 | Resource Matching: Investors & Sponsors | 29 | HOÀN THÀNH | `W09_lesson_plan.md` |
| 10 | Building Solutions: Supplier & Venue Management | 29 | HOÀN THÀNH | `W10_slides_outline.md` |
| 11 | Spreading Value: Media & Influencers | 29 | HOÀN THÀNH | `W11_slides_outline.md` |
| 12 | Leverage & Resolving Network Conflicts | 29 | HOÀN THÀNH | `W12_slides_outline.md` |
| 13 | Building the Stakeholder Management Plan around the Key Account Plan | 26 | HOÀN THÀNH | `W13_lesson_plan.md` |
| 14 | [CHƯA CÓ THÔNG TIN] | — | CHƯA LÀM | [CHƯA CÓ THÔNG TIN] |
| 15 | [CHƯA CÓ THÔNG TIN] | — | CHƯA LÀM | [CHƯA CÓ THÔNG TIN] |

**Ghi chú về trạng thái**

- "HOÀN THÀNH" nghĩa là đã xuất file, qua validator và qua kiểm tra hình ảnh.
- Giảng viên **chưa duyệt rõ ràng** bộ nào.
- Số slide có tính cả slide bìa, slide giải lao và slide tài liệu tham khảo.
- Chưa đối chiếu số slide với thời lượng thực tế khi dạy (xem Sổ lỗi L-22).

### Cấu trúc chung mọi buổi (từ giáo án nguồn)

| Đoạn | Nội dung |
|---|---|
| S1 | Khởi động (5 phút) |
| S2 | Lý thuyết 1 |
| S3 | Thực hành 1 (khoảng 20 phút) |
| — | **Giải lao 8 phút** |
| S4 | Lý thuyết 2 |
| S5 | Lý thuyết 3 |
| S6 | Thực hành 2 (khoảng 30 phút, thường có xoay vòng các trạm và đóng vai) |
| S7 | Tổng hợp (3 phút), có liên hệ SMP |
| S8 | Phiếu kiểm tra cuối giờ: cá nhân, không chấm điểm, 2 câu, kèm câu nối sang buổi sau |

**Thứ tự slide trong deck tương ứng:**

1. Slide bìa
2. S1
3. Các slide lý thuyết theo dàn ý
4. Slide Thực hành 1
5. Slide giải lao
6. Các slide lý thuyết tiếp theo
7. Slide Thực hành 2
8. "Ba ý của Buổi N"
9. "Phiếu kiểm tra cuối giờ"
10. "Tài liệu tham khảo" (slide phụ lục, không chiếu)

### Mạch liên kết giữa các buổi

**Câu nối từ buổi này sang buổi sau** (trên slide phiếu kiểm tra cuối giờ)

| Từ → sang | Câu nối |
|---|---|
| B1 → B2 | Poster hôm nay là trang 1 của SMP |
| B2 → B3 | "đã chọn Key Account thì phải hiểu họ hơn chính họ" |
| B3 → B4 | "Hiểu khách hàng rồi, làm sao biết quan hệ với họ đang tốt hay xấu?" |
| B4 → B5 | "Quan hệ tốt là nền. Nhưng khách hàng ở lại vì giá trị." |
| B5 → B6 | "Giá trị cho khách hàng phải đi cùng giá trị cho agency." |
| B6 → B7 | "Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được." |

**Nhắc chéo xuyên buổi**

| Nội dung | Nhắc ở buổi |
|---|---|
| Bow-tie → Diamond | B2, B4 → dạy chính ở B8 |
| Techcombank "đồng đầu tư" (U08) | B2, B5, B9 |
| ROI 6 cấp | B5 → B8 |
| "Value appraisal là câu hội đồng sẽ hỏi ở Buổi 14" | B5 |

**Mỗi buổi đóng góp một phần của SMP**

| Buổi | Phần SMP |
|---|---|
| B1 | Bản đồ các bên liên quan |
| B3 | A |
| B4 | Nền cho B |
| B5 | C |
| B6 | B |
| B13 | Ráp A–E |

---

### Buổi 1 — Định hình hệ sinh thái các bên liên quan bên ngoài

| | |
|---|---|
| Mục tiêu | Nhìn thấy toàn bộ hệ sinh thái các bên liên quan bên ngoài; phân loại Primary/Secondary; đo quyền lực bằng Power-Interest Grid và Salience Model. Lấy từ các đoạn 1.1–1.3 trên slide. Câu chữ mục tiêu chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 1.1 Hệ sinh thái · 1.2 Primary · Secondary · 1.3 Đo quyền lực · Tổng kết |
| Hoạt động | 2 thực hành (phân loại bên liên quan; bản đồ quyền lực), slide "sửa poster", lộ trình SMP |
| Số slide · trạng thái | 29 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W01_Stakeholder_Ecosystem.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 1 / 15 · Khách hàng · Quản trị mối quan hệ trong tổ chức sự kiện · Cơ quan quản lý · Nhà tài trợ · Agency · Định hình hệ sinh thái các bên liên quan bên ngoài · Nhà cung cấp · Địa điểm · Stakeholders Management for Events / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Báo chí – KOL
  - Ghi chú GV: Slide 1 (dàn ý #1). ⏎ Alt-text: agency ở giữa, sáu nhóm bên liên quan bên ngoài xếp quanh và nối với nhau bằng nét đứt — một hệ sinh thái, không chỉ một danh sách.
- **S2. Sự kiện hỏng thường vì những người ta không trực tiếp quản lý**
  - Nội dung: Nhớ lại một sự kiện có trục trặc. Trục trặc đến từ ai? · Ghi từ khóa lên bảng · khách sạn? · nhà cung cấp? · khách hàng đổi ý? · giấy phép? · báo chí?
  - Ghi chú GV: S1 — Khởi động. Hỏi to: “Nhớ lại một sự kiện các bạn từng làm hoặc từng dự mà có trục trặc. Trục trặc đến từ ai?” ⏎ Ghi từ khóa SV trả lời lên bảng — thường là khách sạn, nhà cung cấp, khách hàng đổi ý, thời tiết, giấy phép… Gần như không ai trong số đó là nhân viên của agency.
- **S3. Nghề sự kiện là điều phối những người mình không quản lý**
  - Nội dung: 1 · 2 · 3 · 4 · 5 · Địa điểm · Tiền · Sự chú ý · Giấy phép · Thiết bị · đến từ · đến từ · đến từ · đến từ · đến từ · khách sạn, trung tâm hội nghị · khách hàng, nhà tài trợ · báo chí, KOL · cơ quan chức năng · nhà cung cấp AV, sân khấu · Câu hỏi của môn: xây dựng, duy trì và phát triển quan hệ với các bên bên ngoài thế nào để sự kiện thành công — và khách hàng quay lại?
  - Ghi chú GV: Một công ty tổ chức sự kiện không tự làm ra sự kiện. Địa điểm là của khách sạn, âm thanh ánh sáng là của nhà cung cấp, tiền là của khách hàng và nhà tài trợ, sự chú ý là của báo chí và KOL, giấy phép là của cơ quan chức năng. ⏎ Câu hỏi của môn: làm thế nào để xây dựng, duy trì và phát triển quan hệ với các bên liên quan bên ngoài sao cho sự kiện thành công — và khách hàng quay lại? ⏎ Alt-text: năm nguồn lực của sự kiện đến từ năm bên khác nhau.
- **S4. Môn học chỉ xét các bên liên quan bên ngoài**
  - Nội dung: Trong môn này · Không thuộc môn này · Khách hàng (Key Account) / Nhà đầu tư, nhà tài trợ / Nhà cung ứng / Địa điểm & hạ tầng / Truyền thông, báo chí / KOL, influencer / Công chúng mục tiêu / Cơ quan quản lý · Nhân sự, crew, tình nguyện viên / → Quản lý đội nhóm trong tổ chức sự kiện / Quản lý, an toàn đám đông / → Quản trị rủi ro sự kiện
  - Ghi chú GV: Nói rõ: nhân sự, crew, tình nguyện viên thuộc môn Quản lý đội nhóm trong tổ chức sự kiện; quản lý và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện.
- **S5. Khách hàng là trục; mọi bên khác phục vụ hành trình của khách hàng**
  - Nội dung: Phần 1 · Buổi 1 / Nền tảng: hệ sinh thái, đo quyền lực · Phần 2 · Buổi 2–8 / Quản trị khách hàng trọng điểm (KAM) · Khách hàng · Phần 3 · Buổi 9–12 / Điều phối các bên phục vụ hành trình khách hàng · Phần 4 · Buổi 13–15 / Đánh giá: hoàn thiện, bảo vệ kế hoạch
  - Ghi chú GV: Bản đồ 4 phần: (1) Nền tảng — Buổi 1: nhìn thấy toàn bộ hệ sinh thái, đo quyền lực. (2) KAM — Buổi 2–8: trục của môn. (3) Điều phối các bên liên quan phục vụ hành trình khách hàng — Buổi 9–12: mỗi bên được gắn vào một điểm chạm trên hành trình của khách hàng. (4) Đánh giá — Buổi 13–15: hoàn thiện và bảo vệ kế hoạch. ⏎ Nói: “Hãy hình dung khách hàng ở giữa; mọi bên khác là nguồn lực ta huy động để phục vụ hành trình của khách hàng đó.” ⏎ Alt-text: sơ đồ tâm – vòng ngoài: khách hàng ở tâm, bốn phần học phần xếp quanh.
- **S6. Điểm cuối kỳ chiếm 50% và được xây dần từ hôm nay**
  - Nội dung: 10% · 20% · 20% · 50% · Chuyên cần / AM1 · Bài tập / AM2 · Giữa kỳ · thuyết trình + làm việc nhóm / AM3, AM9 · Cuối kỳ · Stakeholder Management Plan + phản biện / AM7, AM9 · Bài cuối kỳ được xây từng mảnh qua mỗi buổi học — hôm nay là mảnh đầu tiên.
  - Chân slide: Đề cương chi tiết học phần EVM1110E (UEF).
  - Ghi chú GV: Bảng đánh giá theo đề cương: chuyên cần 10% · bài tập 20% · giữa kỳ (thuyết trình + làm việc nhóm) 20% · cuối kỳ (Stakeholder Management Plan + phản biện) 50%.
- **S7. Bài cuối kỳ: Stakeholder Management Plan cho khách hàng từ dự án cũ**
  - Nội dung: 1 · 2 · 3 · Chọn 1 khách hàng từ dự án cũ · Mỗi buổi thêm 1 mảnh · Phản biện cuối kỳ · không làm dự án mới · hôm nay: bản đồ các bên liên quan · bảo vệ kế hoạch trước hội đồng · Nộp qua LMS theo thời hạn quy định · quy định chuyên cần, nộp trễ, dùng AI: [giảng viên bổ sung]
  - Ghi chú GV: Mỗi nhóm chọn 1 khách hàng từ dự án sự kiện đã làm ở các môn trước — không làm dự án mới. Mỗi buổi học bổ sung một mảnh; hôm nay là bản đồ các bên liên quan. Mọi bài nộp qua LMS theo thời hạn quy định. ⏎ [NEEDS PROFESSOR INPUT: quy định chuyên cần, nộp trễ, sử dụng AI — nếu có]
- **S8. Bên liên quan là ai có thể ảnh hưởng — hoặc bị ảnh hưởng — bởi sự kiện**
  - Nội dung: Bên liên quan (stakeholder): bất kỳ nhóm hoặc cá nhân nào có thể ảnh hưởng đến, hoặc bị ảnh hưởng bởi, việc đạt được mục tiêu của tổ chức.  — Freeman (1984) · Có thể ảnh hưởng / nhà tài trợ rút tiền · Bị ảnh hưởng / cư dân chịu tiếng ồn · Sự kiện · + ai góp nguồn lực, nhận lợi ích, hoặc có quyền cho phép / ngăn cản sự kiện (Van Niekerk & Getz, 2019)
  - Chân slide: A01: Freeman (1984), Strategic management: A stakeholder approach · A02: Van Niekerk & Getz (2019).
  - Ghi chú GV: Chú ý hai chiều của định nghĩa: có thể ảnh hưởng (nhà tài trợ rút tiền) hoặc bị ảnh hưởng (cư dân quanh địa điểm chịu tiếng ồn). Cả hai đều là bên liên quan. ⏎ Áp dụng vào sự kiện (Van Niekerk & Getz, 2019): bên liên quan của sự kiện là những ai có “phần” (stake) trong sự kiện — góp nguồn lực, nhận lợi ích, chịu tác động, hoặc có quyền cho phép/ngăn cản sự kiện diễn ra. ⏎ Hiểu lầm: “Bên liên quan = người trả tiền cho mình” → định nghĩa gồm cả người bị ảnh hưởng và người có quyền ngăn cản.
- **S9. Một hệ sinh thái nhìn thấy quan hệ giữa các bên, không chỉ danh sách**
  - Nội dung: Danh sách · Hệ sinh thái · Khách hàng · •  Khách hàng · •  Nhà tài trợ · Khách sạn · Nhà tài trợ · •  Báo chí · •  KOL · •  Khách sạn · KOL · Báo chí · Kéo một sợi dây, cả mạng rung.
  - Ghi chú GV: Một danh sách liệt kê từng bên riêng lẻ. Một hệ sinh thái nhìn thêm quan hệ giữa các bên với nhau: nhà tài trợ quan tâm vì báo chí đưa tin; báo chí đến vì có KOL; KOL nhận lời vì thương hiệu của khách hàng. Kéo một sợi dây, cả mạng rung. ⏎ Câu hỏi gợi mở: “Nếu khách sạn đột ngột đổi phòng hội nghị sang phòng nhỏ hơn, những bên nào khác bị ảnh hưởng dây chuyền?” — vẽ nhanh chuỗi lên bảng. ⏎ Alt-text: bên trái danh sách rời rạc; bên phải cùng các bên nối thành mạng lưới.
- **S10. Hệ sinh thái sự kiện có 6 đặc điểm riêng**
  - Nội dung: Tạm thời / tập hợp quanh một sự kiện rồi tan · Phụ thuộc lẫn nhau / một mắt xích hỏng kéo cả chuỗi · Mục tiêu có thể xung đột / tiết kiệm ↔ biên lợi nhuận ↔ hiển thị ↔ yên tĩnh · 1 · 2 · 3 · Trao đổi giá trị / góp nguồn lực để đổi lấy lợi ích · Thay đổi theo giai đoạn / trước – trong – sau, mỗi lúc một bên nổi bật · Lây lan danh tiếng / sự cố của một bên lan sang khách hàng và agency · 4 · 5 · 6 · Một bên, nhiều vai: khách sạn vừa là địa điểm vừa là nhà cung cấp dịch vụ (Getz et al., 2006). Ví dụ thật: DIFF 2026 — chính quyền, đội pháo hoa, du khách, doanh nghiệp lưu trú, nhà tài trợ, báo chí, người dân sông Hàn.
  - Chân slide: Định nghĩa làm việc của môn, dựng từ Freeman (1984), Van Niekerk & Getz (2019), Getz, Andersson & Larson (2006) · A09: Tuổi Trẻ (29/1/2026).
  - Ghi chú GV: [VERIFY: thuật ngữ “pulsating organisation” (Toffler, 1990; Hanlon & Cuskelly, 2002) — kiểm tra trích dẫn trước khi dùng] ⏎ Định nghĩa làm việc: hệ sinh thái bên liên quan bên ngoài của sự kiện là mạng lưới các tổ chức, cá nhân ngoài agency cùng góp nguồn lực, nhận giá trị, chịu tác động hoặc có quyền cho phép sự kiện, và phụ thuộc lẫn nhau. ⏎ Một bên, nhiều vai (Getz, Andersson & Larson, 2006): bên liên quan chủ chốt giữ nhiều vai cùng lúc — ví dụ khách sạn vừa là địa điểm vừa là nhà cung cấp dịch vụ (quay lại ở Buổi 12). ⏎ Ví dụ thật — DIFF 2026 (30/5–11/7/2026): UBND TP Đà Nẵng và các đơn vị tổ chức; 10 đội pháo hoa từ 9 quốc gia, vùng lãnh thổ; khán giả, du khách; doanh nghiệp du lịch – lưu trú; nhà tài trợ; báo chí; người dân quanh sông Hàn. Hỏi: “Nếu Nova là agency làm dịch vụ cho một nhà tài trợ của DIFF, hệ sinh thái của Nova gồm những ai?” Vai trò cụ thể của từng doanh nghiệp trong DIFF chưa kiểm chứng — không khẳng định.
- **S11. Tầm quan trọng của mỗi bên thay đổi theo giai đoạn sự kiện**
  - Nội dung: Trước sự kiện · Trong sự kiện · Sau sự kiện · Nhà tài trợ · Nhà cung cấp kỹ thuật · Báo chí · Địa điểm · Khách tham dự · Khách hàng — đánh giá, tái ký · Cơ quan cấp phép
  - Ghi chú GV: Trước sự kiện: nhà tài trợ, địa điểm, cơ quan cấp phép nổi bật; trong sự kiện: nhà cung cấp kỹ thuật, khách tham dự; sau sự kiện: báo chí, khách hàng (đánh giá, tái ký).
- **S12. Primary: không có họ, sự kiện không diễn ra**
  - Nội dung: Bên liên quan chính (Primary) / nếu không có sự tham gia liên tục của họ, tổ chức — ở đây là sự kiện — không thể tồn tại, diễn ra.  — Clarkson (1995) · Câu kiểm tra nhanh / “Không có họ, sự kiện có diễn ra được không?” / Không → thường là primary · Có → thường là secondary
  - Chân slide: A03: Clarkson (1995), Academy of Management Review.
  - Ghi chú GV: Clarkson xếp cả chính quyền và cộng đồng — những bên cung cấp hạ tầng, thị trường, luật lệ — vào nhóm primary.
- **S13. Secondary: ảnh hưởng hoặc bị ảnh hưởng, nhưng không thiết yếu**
  - Nội dung: Bên liên quan thứ yếu (Secondary) / ảnh hưởng hoặc bị ảnh hưởng bởi tổ chức, nhưng không giao dịch trực tiếp và không thiết yếu cho sự tồn tại của tổ chức. · Ví dụ: báo chí / Sự kiện vẫn diễn ra nếu báo chí không đến — nhưng họ ảnh hưởng hình ảnh sau sự kiện. · Nhắc phạm vi / Nhân viên, tình nguyện viên có thể là primary trong lý thuyết — nhưng môn này không xét bên nội bộ.
  - Chân slide: A03: Clarkson (1995).
  - Ghi chú GV: Nhắc phạm vi: nhiều tài liệu xếp nhân viên, tình nguyện viên vào nhóm primary — đúng về lý thuyết — nhưng môn này không xét họ (bên nội bộ, thuộc môn Quản lý đội nhóm). Chỉ các bên nằm ngoài ranh giới công ty tổ chức sự kiện.
- **S14. Phân loại là quyết định có lập luận, không phải tra bảng**
  - Nội dung: Nova Events tổ chức Hội nghị khách hàng thường niên cho Ngân hàng An Phát · ~600 khách VIP · khách sạn 5 sao, TP.HCM · Phân loại · Lập luận · Ngân hàng An Phát (khách hàng) · Primary · Người đặt hàng và trả tiền; không có họ, không có sự kiện · Khách sạn (địa điểm) · Primary · Không có địa điểm, sự kiện không diễn ra vào ngày đã định · Công ty bảo hiểm (nhà tài trợ) · Tùy bối cảnh · Khoản cộng thêm → secondary; ngân sách phụ thuộc khoản tài trợ → primary · Báo chí tài chính · Secondary · Sự kiện vẫn diễn ra nếu báo không đến; nhưng ảnh hưởng hình ảnh sau sự kiện
  - Chân slide: Tình huống giả định Nova Events – Ngân hàng An Phát; góc nhìn phân tích: Nova Events.
  - Ghi chú GV: GV nói to lập luận từng dòng. ⏎ Điểm nhấn: cùng là báo chí, trong một sự kiện ra mắt sản phẩm mà mục tiêu chính là phủ sóng truyền thông, báo chí có thể là primary. ⏎ [VERIFY: hội nghị khách hàng trong khách sạn có phải thông báo/xin phép cơ quan địa phương hay không, tùy quy mô và nội dung — kiểm tra trước khi dùng cơ quan quản lý làm ví dụ primary] ⏎ → Chuyển sang S4 — Thực hành 1.
- **S15. Thực hành 1 · Ai đứng quanh sự kiện này?**
  - Nội dung: Sơ đồ tư duy: Nova ở giữa, ≥ 10 bên bên ngoài · Tình huống · 1 · Hội nghị khách hàng thường niên của Ngân hàng An Phát: hội thảo, gala, nghệ thuật · ~600 khách VIP / Phòng đại tiệc khách sạn 5 sao, Quận 1 — cạnh khu dân cư; chương trình đến 22h / Công ty bảo hiểm đồng tài trợ: gian trưng bày + 5 phút phát biểu / Nova thuê ngoài AV – LED, in ấn, quà, xe đưa đón / Diễn giả kinh tế nổi tiếng · MC/KOL · bài trên báo tài chính · Đánh dấu P (primary) hoặc S (secondary) · 2 · 3 bên tranh luận nhiều nhất: 1 câu lý do · 3 · ≥ 2 mũi tên giữa các bên với nhau (không qua Nova) · 4 · Không liệt kê nhân sự, crew, tình nguyện viên của Nova.
  - Chân slide: Phiếu W01_activity_S4_phan_loai_ben_lien_quan.md · Tình huống giả định.
  - Ghi chú GV: S4 — Thực hành 1 (15 phút): 1 đọc · 9 làm · 5 chia sẻ. Đồng hồ đếm ngược 10 phút. ⏎ Thảo luận: bên nào các nhóm phân loại khác nhau? Có bên nào không ký hợp đồng với Nova nhưng vẫn có thể làm hỏng sự kiện? ⏎ Giữ lại tờ A0 để đối chiếu ở S6.
- **S16. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S17. Không thể chăm sóc mọi bên như nhau — cần công cụ ưu tiên**
  - Nội dung: Thời gian và ngân sách có hạn. / Ai cần được ưu tiên — và ưu tiên theo cách nào? · 12–15 bên liên quan trên sơ đồ của các bạn · Power-Interest Grid · Stakeholder Salience Model
  - Ghi chú GV: Mở đoạn S5: “Danh sách của các bạn ở S4 có 12–15 bên. Ta không thể chăm sóc tất cả như nhau — thời gian và ngân sách có hạn. Câu hỏi bây giờ: ai cần được ưu tiên, và ưu tiên theo cách nào?”
- **S18. Power-Interest Grid chia các bên thành 4 chiến lược ứng xử**
  - Nội dung: Keep Satisfied · Manage Closely · Giữ hài lòng: đáp ứng yêu cầu, không làm phiền quá mức, theo dõi dấu hiệu họ “thức dậy” · Quản lý chặt: tham vấn thường xuyên, cùng ra quyết định · Quyền lực  →  cao · Monitor · Keep Informed · Theo dõi: nỗ lực tối thiểu · Thông tin đầy đủ: cập nhật định kỳ, lắng nghe — có thể thành đồng minh hoặc nguồn khủng hoảng · Mức độ quan tâm  →  cao
  - Chân slide: A07: phát triển từ Mendelow (1981), ICIS 1981 Proceedings — đã xác minh.
  - Ghi chú GV: Hai trục: quyền lực (khả năng tác động đến sự kiện) và mức độ quan tâm (mức độ họ để ý/bị ảnh hưởng). Dạng lưới 2×2 quen thuộc là phiên bản được các giáo trình chiến lược phổ biến lại; khi trình bày, ghi “phát triển từ Mendelow (1981)”. ⏎ Mỗi ô có tên và mô tả riêng, không phân biệt chỉ bằng màu. ⏎ Alt-text: ma trận 2×2 — trục dọc quyền lực, trục ngang mức độ quan tâm; bốn ô Keep Satisfied, Manage Closely, Monitor, Keep Informed.
- **S19. Ví dụ: ngân hàng cần quản lý chặt, khách sạn cần giữ hài lòng**
  - Nội dung: Ngân hàng / ký hợp đồng, trả tiền; sự kiện mang thương hiệu của họ · Keep Satisfied · Manage Closely · Ban quản lý khách sạn · Ngân hàng An Phát · Khách sạn / kiểm soát không gian, giờ giấc; một hợp đồng trong nhiều hợp đồng · Quyền lực  →  cao · Monitor · Keep Informed · Báo chí / quan tâm nếu có câu chuyện; quyền lực trực tiếp thấp · Báo chí tài chính · Mức độ quan tâm  →  cao
  - Chân slide: Ví dụ mẫu — tình huống giả định Nova Events – An Phát.
  - Ghi chú GV: Ngân hàng An Phát → Manage Closely (quyền lực cao: ký hợp đồng, trả tiền; quan tâm cao: sự kiện mang thương hiệu của họ). ⏎ Ban quản lý khách sạn → Keep Satisfied (quyền lực cao: kiểm soát không gian, giờ giấc, quy định; quan tâm vừa phải: một hợp đồng trong nhiều hợp đồng). ⏎ Báo chí tài chính → Keep Informed (quan tâm nếu có câu chuyện; quyền lực trực tiếp lên việc tổ chức thấp).
- **S20. Grid là ảnh chụp tĩnh và bỏ qua tính chính đáng**
  - Nội dung: Chỉ có 2 chiều / quyền lực và quan tâm · Ảnh chụp tĩnh / vị trí thay đổi theo thời gian · 1 · 2 · Đánh giá chủ quan / cần bằng chứng · Bỏ qua tính chính đáng / yêu cầu của họ có hợp lý không? · 3 · 4 · → cần thêm một công cụ: Salience Model
  - Ghi chú GV: Hỏi lớp trước khi lật: “Grid bỏ sót điều gì?”
- **S21. Salience Model đo 3 thuộc tính: quyền lực, chính đáng, cấp bách**
  - Nội dung: Quyền lực · Tính chính đáng · Tính cấp bách · Power · Legitimacy · Urgency · khả năng buộc bên kia làm điều họ lẽ ra không làm — bằng sức ép, tiền/nguồn lực, hoặc uy tín · yêu cầu được xem là hợp lý, phù hợp chuẩn mực: hợp đồng, luật, đạo đức xã hội · yêu cầu nhạy cảm về thời gian và quan trọng với họ, đòi phản hồi ngay · Độ nổi bật (salience) tăng theo số thuộc tính một bên có.
  - Chân slide: A08: Mitchell, Agle & Wood (1997), Academy of Management Review.
  - Ghi chú GV: Độ nổi bật (salience) = mức độ nhà quản lý ưu tiên yêu cầu của bên đó — tăng theo số thuộc tính họ có.
- **S22. Càng nhiều thuộc tính, bên liên quan càng nổi bật**
  - Nội dung: Power · Legitimacy · 1 thuộc tính · Tiềm ẩn / Dormant · Discretionary · Demanding · Dominant · Dormant · Discretionary · 2 thuộc tính · Kỳ vọng / Dominant · Dangerous · Dependent · Definitive · Dangerous · Dependent · 3 thuộc tính · Quyết định / Definitive — ưu tiên cao nhất · Demanding · Urgency
  - Chân slide: A08: Mitchell, Agle & Wood (1997).
  - Ghi chú GV: Bảy vùng: 1 thuộc tính (tiềm ẩn — latent): Dormant (P), Discretionary (L), Demanding (U). 2 thuộc tính (kỳ vọng — expectant): Dominant (P+L), Dangerous (P+U), Dependent (L+U). 3 thuộc tính: Definitive. ⏎ Alt-text: ba vòng tròn giao nhau Power, Legitimacy, Urgency tạo bảy loại bên liên quan.
- **S23. Mỗi loại salience có một ví dụ trong sự kiện**
  - Nội dung: Thuộc tính · Ví dụ trong sự kiện · Dormant · P · Cơ quan quản lý khi mọi thủ tục đã ổn · Discretionary · L · Hội đoàn từ thiện muốn được mời tham dự · Demanding · U · Cá nhân liên tục phàn nàn trên mạng xã hội nhưng ít ảnh hưởng · Dominant · P + L · Nhà tài trợ chính có hợp đồng · Dangerous · P + U · Nhà cung cấp dọa ngừng thi công ngay trước giờ G để ép giá · Dependent · L + U · Cư dân quanh địa điểm phản ánh tiếng ồn · Definitive · P + L + U · Khách hàng yêu cầu đổi kịch bản 48 giờ trước sự kiện
  - Chân slide: A08: Mitchell, Agle & Wood (1997) · ví dụ trong sự kiện: nhận định của người soạn.
  - Ghi chú GV: Cho lớp giơ tay đoán loại của 1–2 ví dụ trước khi chiếu cột “Loại”. ⏎ Hiểu lầm: “Quyền lực cao = phải chiều theo mọi yêu cầu” → nhóm Dangerous có quyền lực nhưng thiếu chính đáng; chiến lược là bảo vệ bằng hợp đồng/phương án dự phòng, không phải nhượng bộ. ⏎ “Salience và Grid cho cùng một kết quả” → Grid hỏi “họ quan tâm bao nhiêu”; Salience hỏi “yêu cầu của họ có chính đáng và gấp không”. Một bên Keep Informed trên Grid có thể là Dependent trên Salience — tín hiệu cảnh báo sớm.
- **S24. Bên liên quan có thể “leo hạng” — cư dân thành Definitive khi có báo chí và chính quyền vào cuộc**
  - Nội dung: Dependent · + báo chí đưa tin / + phường kiểm tra · Definitive · L + U · mượn quyền lực · P + L + U · Cư dân phản ánh tiếng ồn · Yêu cầu của cư dân phải xử lý ngay · Nova nên làm gì từ khi họ còn là Dependent — để không phải đối mặt khi họ đã là Definitive?
  - Chân slide: A08: Mitchell, Agle & Wood (1997) — mô hình động · ví dụ: nhận định của người soạn.
  - Ghi chú GV: Ví dụ: cư dân quanh địa điểm (Dependent: L + U) → một bài báo đưa tin + phường vào cuộc kiểm tra → họ “mượn” được quyền lực → trở thành Definitive. ⏎ Hỏi lớp: “Nova Events nên làm gì từ khi họ còn là Dependent để không phải đối mặt khi họ đã là Definitive?” ⏎ → Chuyển sang S6 — Thực hành 2.
- **S25. Thực hành 2 · Bản đồ quyền lực quanh khách hàng của nhóm**
  - Nội dung: Khách hàng thật từ dự án cũ của nhóm — đây là phần 1 của Stakeholder Management Plan · A · Danh sách / ≥ 8 bên bên ngoài, đánh dấu P/S · B · Power-Interest Grid / đặt từng bên vào ô; mỗi ô 1 hành động cụ thể · C · Salience Model / 3 vòng tròn; đặt từng bên vào đúng vùng · ⭐ Một bên mà Grid và Salience “không khớp nhau” — viết 1 câu: điều đó cảnh báo gì? · Chọn khách hàng từ dự án cũ · Làm poster 3 khu vực trên A0 · Xoay trạm: 🟨 1 câu hỏi, 🟥 1 phản biện có lý do · 3’ · 18’ · 12’
  - Chân slide: Phiếu W01_activity_S6_ban_do_quyen_luc.md.
  - Ghi chú GV: S6 — Thực hành 2 (33 phút): 3 chọn khách hàng · 18 làm poster · 12 xoay vòng các trạm + chốt. ⏎ Lời mở đầu: “Bây giờ các bạn áp dụng hai công cụ lên khách hàng thật của nhóm — khách hàng từ dự án cũ, cũng chính là khách hàng các bạn sẽ dùng cho bài cuối kỳ…” ⏎ Không chấp nhận phản biện kiểu “đẹp quá”, “tốt lắm”. Chỉ các bên bên ngoài.
- **S26. Sửa poster ngay bây giờ — mỗi phản biện là một cơ hội**
  - Nội dung: Đọc các note vàng và hồng · 1 · 5’ · Sửa ít nhất một vị trí trên Grid hoặc Salience · 2 · Ghi “sửa gì, vì sao” ở góc poster · 3 · Chụp ảnh lưu lại — không nộp · 4
  - Ghi chú GV: S7 — chiếu slide này TRƯỚC (sửa poster), slide lộ trình SAU. ⏎ Đồng hồ 5 phút. Nhắc: ghi “sửa gì, vì sao” ở góc poster; chụp ảnh lưu lại (không nộp).
- **S27. Poster hôm nay là trang 1 của Stakeholder Management Plan**
  - Nội dung: Buổi 1 / Bản đồ các bên liên quan · Buổi 2–8 / Khách hàng trọng điểm · Buổi 9–12 / Các bên khác quanh hành trình khách hàng · Buổi 13–15 / Hoàn thiện và bảo vệ · Hôm nay: danh sách P/S, Power-Interest Grid và Salience Model cho khách hàng từ dự án cũ — trang đầu tiên của kế hoạch cuối kỳ.
  - Ghi chú GV: Lộ trình bài cuối kỳ: Buổi 1 bản đồ → Buổi 2–8 khách hàng → Buổi 9–12 các bên khác → Buổi 13–15 hoàn thiện và bảo vệ.
- **S28. Phiếu kiểm tra cuối giờ**
  - Nội dung: Trong dự án cũ của nhóm, bên liên quan nào bạn đã đánh giá thấp? Theo Salience Model, nó thiếu thuộc tính nào — và điều gì có thể khiến nó có thêm thuộc tính đó? · 1 · Điều bạn còn mơ hồ nhất sau buổi hôm nay là gì? · 2 · Buổi 2: nếu mất khách hàng, agency mất luôn doanh thu năm sau — vì sao không phải khách hàng nào cũng là Key Account.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) SV có dùng đúng 3 thuộc tính power/legitimacy/urgency để lập luận không, hay chỉ ghi cảm tính; (b) SV có còn liệt kê nhân sự nội bộ như một bên liên quan không (dấu hiệu chưa nắm phạm vi). ⏎ Câu nối Buổi 2: “Trong tất cả các bên liên quan, có một bên mà nếu mất, công ty sự kiện mất luôn doanh thu năm sau — khách hàng. Buổi sau: vì sao không phải khách hàng nào cũng là Key Account.”
- **S29. Tài liệu tham khảo**
  - Nội dung: A01 · Freeman, R. E. (1984). Strategic management: A stakeholder approach. Pitman. · A02 · Van Niekerk, M., & Getz, D. (2019). Event stakeholders: Theory and methods for event management and tourism. Goodfellow Publishers. · A03 · Clarkson, M. B. E. (1995). A stakeholder framework for analyzing and evaluating corporate social performance. Academy of Management Review, 20(1), 92–117. · A04 · Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. Event Management, 10(2), 103–122. · A07 · Mendelow, A. L. (1981). Environmental scanning — The impact of the stakeholder concept. ICIS 1981 Proceedings, 20. · A08 · Mitchell, R. K., Agle, B. R., & Wood, D. J. (1997). Toward a theory of stakeholder identification and salience. Academy of Management Review, 22(4), 853–886. · A09 · Tuổi Trẻ Online. (2026, January 29). Công bố lịch thi đấu Lễ hội Pháo hoa quốc tế Đà Nẵng DIFF 2026, sông Hàn lại bùng nổ.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-01_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 2 — KAM Mindset & Key Account Selection

| | |
|---|---|
| Mục tiêu | Phân biệt Sales và KAM; chọn Key Account bằng hai trục chấm có trọng số và cổng đồng đầu tư. Câu chữ mục tiêu chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 2.1 Sales vs KAM · 2.2 Chọn Key Account · Đồng đầu tư · Tổng kết |
| Số slide · trạng thái | 25 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W02_KAM_Mindset_Selection.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 2 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · An Phát · Sức hấp dẫn của khách hàng  → · Bếp Việt · KAM Mindset & Key Account Selection · Sông Xanh · Phần 2 · Quản trị khách hàng trọng điểm — buổi 1/7 / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Vị thế cạnh tranh của agency  →
  - Ghi chú GV: Slide 1 (dàn ý #1). Mở Phần 2 — Quản trị khách hàng trọng điểm (KAM). ⏎ Alt-text: ma trận hai trục sức hấp dẫn × vị thế cạnh tranh với ba khách hàng giả định đặt ở các ô khác nhau.
- **S2. Khách hàng lớn nhất chưa chắc là Key Account**
  - Nội dung: Đó có phải Key Account của Nova? · Địa ốc Sông Xanh · 3,5 tỷ · Có · Không · Chưa biết · doanh thu lớn nhất của Nova năm nay · Key Account không phải khách hàng lớn nhất, mà là khách hàng đáng đầu tư quan hệ nhất — và cũng muốn đầu tư lại vào ta. · Đấu thầu từng sự kiện / Trả tiền sau 90 ngày / Năm nào cũng đổi agency
  - Chân slide: Tình huống giả định — tên và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu và đọc: “Năm nay khách hàng đem doanh thu lớn nhất cho Nova là một công ty địa ốc: 3,5 tỷ đồng. Nhưng họ đấu thầu từng sự kiện, trả tiền sau 90 ngày, và năm nào cũng đổi agency.” ⏎ Giơ tay: “Đó có phải Key Account của Nova?” (Có / Không / Chưa biết) ⏎ Chốt: “Key Account không phải khách hàng lớn nhất, mà là khách hàng đáng đầu tư quan hệ nhất — và cũng muốn đầu tư lại vào ta.”
- **S3. KAM không phải “bán hàng xịn hơn”**
  - Nội dung: “Most companies think that KAM is ‘selling with knobs on’.” / — Malcolm McDonald, Cranfield (B05) · Hiểu sai / KAM = bán hàng phiên bản xịn · Hiểu đúng / KAM = quản trị quan hệ dài hạn, hai chiều
  - Chân slide: B05: McDonald, Why many companies get key account management hopelessly wrong, Cranfield blog.
  - Ghi chú GV: McDonald: nhiều công ty nghĩ KAM là “bán hàng có gắn thêm núm” — tức là bán hàng phiên bản xịn. Đó là hiểu sai.
- **S4. Khách hàng lớn không muốn bị bán hàng**
  - Nội dung: Họ cần người hiểu… · Tài chính · Quy trình · Tổ chức · Văn hóa · …và đưa giải pháp tạo lợi thế cho chính họ.
  - Chân slide: B05: McDonald, Cranfield blog.
  - Ghi chú GV: Theo McDonald, khách hàng lớn không muốn bị bán hàng; họ cần người hiểu tài chính, quy trình, tổ chức, văn hóa của họ và đưa giải pháp tạo lợi thế cho họ.
- **S5. Từ key account selling đến key account management**
  - Nội dung: Millman & Wilson (1995) · Key account SELLING · Key account MANAGEMENT · Người làm KAM cần năng lực rộng hơn / phát triển kinh doanh · phân tích ngành · quản trị quan hệ · Lợi ích cho cả hai phía / quan hệ phát triển qua nhiều giai đoạn — McDonald, Millman & Rogers (1997); học tiếp ở Buổi 4, 8
  - Chân slide: B02: Millman & Wilson (1995) · B03: McDonald, Millman & Rogers (1997).
  - Ghi chú GV: Millman & Wilson (1995) — chính tên bài là thông điệp: từ bán cho khách hàng lớn sang quản trị khách hàng trọng điểm; phần lớn tài liệu KAM nhìn từ phía người bán; người làm KAM cần năng lực rộng hơn: phát triển kinh doanh, phân tích ngành, quản trị quan hệ. ⏎ McDonald, Millman & Rogers (1997): KAM có lợi cho cả hai phía, phát triển qua các giai đoạn quan hệ (Buổi 4, 8).
- **S6. KAM có bốn khía cạnh: hoạt động, người tham gia, nguồn lực, mức chính thức hóa**
  - Nội dung: Hoạt động · Người tham gia · activities · actors · Hiểu sâu khách hàng, lập kế hoạch riêng, đồng kiến tạo · Nhiều người, nhiều cấp ở cả hai bên · Nguồn lực · Mức chính thức hóa · resources · formalization · Dành riêng cho khách hàng này · Có quy trình, kế hoạch, đánh giá định kỳ
  - Chân slide: B04: Homburg, Workman & Jensen (2002), Journal of Marketing.
  - Ghi chú GV: Homburg, Workman & Jensen (2002) khái niệm hóa KAM theo bốn khía cạnh: activities, actors, resources, approach formalization. ⏎ Alt-text: bốn ô, mỗi ô một khía cạnh.
- **S7. Sales và KAM khác nhau ở mục tiêu, thời gian và cách tạo giá trị**
  - Nội dung: Sales · bán cho khách lớn · KAM · Mục tiêu · Chốt hợp đồng, doanh số kỳ này · Giá trị dài hạn cho cả hai bên · Tầm nhìn thời gian · Từng sự kiện, từng quý · Nhiều năm (3–5 năm) · Hoạt động · Chào giá, đấu thầu, chăm sóc · Hiểu sâu, kế hoạch riêng, đồng kiến tạo · Người tham gia · Một người bán ↔ một người mua · Nhiều người, nhiều cấp hai bên · Nguồn lực · Chung cho mọi khách · Dành riêng cho khách hàng này · Mức chính thức hóa · Tùy người · Quy trình, kế hoạch, đánh giá định kỳ · Cách tạo giá trị · Dịch vụ tốt, giá tốt · Lợi thế cho khách hàng (và khách của họ)
  - Chân slide: Bảng tổng hợp của người soạn, dựa trên B02–B05; bốn khía cạnh theo Homburg et al. (2002).
  - Ghi chú GV: Bảng này dùng tiếp ở Thực hành 1 — các nhóm phân loại 8 hành vi theo các dòng của bảng.
- **S8. Với An Phát: chờ brief gala, hay đề xuất chương trình cả năm?**
  - Nội dung: Cách Sales · Cách KAM · Mỗi năm chờ An Phát gửi brief gala / Làm đề xuất, chào giá / Làm xong thì chờ năm sau · Hiểu mục tiêu kinh doanh năm tới của An Phát: giữ khách doanh nghiệp / Đề xuất chương trình khách hàng cả năm / Đầu mối nhiều cấp / Đánh giá chung sau mỗi sự kiện
  - Chân slide: Tình huống giả định Nova Events – Ngân hàng An Phát.
  - Ghi chú GV: Ở Buổi 1–6, GĐ Marketing An Phát là chị Hạnh.
- **S9. KAM không có nghĩa là chiều khách**
  - Nội dung: Hiểu lầm / “KAM = chăm sóc khách VIP chu đáo hơn” · Sửa / KAM là cách vận hành quan hệ — có kế hoạch và nguồn lực riêng · Hiểu lầm / “Làm KAM là phải chiều khách” · Sửa / KAM hướng tới lợi ích hai phía — Buổi 6 sẽ tính chi phí phục vụ
  - Ghi chú GV: Hiểu lầm: “KAM = chăm sóc khách VIP chu đáo hơn” → KAM là cách vận hành quan hệ, có kế hoạch và nguồn lực riêng. ⏎ “Làm KAM là phải chiều khách” → KAM hướng tới lợi ích hai phía; Buổi 6 sẽ tính chi phí phục vụ. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S10. Thực hành 1 · Sales hay KAM?**
  - Nội dung: Nova làm gala cho An Phát đã 4 năm. Tám việc nhân viên Nova đã làm năm qua: · Tháng 10 mới gọi hỏi “năm nay có làm gala không?” · Đọc báo cáo thường niên để biết năm tới ưu tiên nhóm khách nào · Ghi S hay K + một lý do theo bảng so sánh · 8’ · 1 · 2 · Giảm giá 10% khi An Phát nói có agency chào rẻ hơn · Sau gala, mời đội An Phát họp đánh giá chung · 3 · 4 · Viết lại 2 hành vi S thành K: ai làm, làm gì, khi nào · 8’ · Gửi hồ sơ năng lực chung như mọi khách khác · Đề xuất chương trình tri ân khách hàng cả năm · 5 · 6 · “Với An Phát, Nova làm KAM khi …” · 4’ · Chỉ nhân viên kinh doanh làm việc với An Phát · Hỏi: khách VIP của ngân hàng năm nay lo điều gì nhất? · 7 · 8
  - Chân slide: Phiếu W02_activity_S3_sales_hay_kam.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút): 8 · 8 · 4, GV chốt trong đoạn. ⏎ Thảo luận: hành vi nào gây tranh luận nhất? Giảm giá để giữ hợp đồng có bao giờ là KAM không?
- **S11. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S12. Làm hài lòng mọi khách hàng là con đường phá sản**
  - Nội dung: “One of the quickest ways to go bankrupt is to ‘delight’ your customers!” — McDonald (B05) · Phân loại khách hàng lớn theo: · Tiềm năng tăng lợi nhuận / cho agency trong khoảng 3 năm · Thế mạnh cạnh tranh / của agency với từng khách hàng
  - Chân slide: B05: McDonald, Cranfield blog.
  - Ghi chú GV: McDonald: phải phân loại khách hàng lớn theo tiềm năng tăng lợi nhuận cho nhà cung cấp trong khoảng 3 năm và theo thế mạnh cạnh tranh của nhà cung cấp với từng khách hàng — để đặt mục tiêu và phân bổ nguồn lực có hạn.
- **S13. Ba câu hỏi để chọn Key Account**
  - Nội dung: Khách hàng này có hấp dẫn không? / customer attractiveness — chấm có trọng số · 1 · Agency có vị thế cạnh tranh mạnh với khách hàng này không? / “Does our company have a strong competitive position to deal with this customer?” · 2 · Khách hàng có sẵn sàng đồng đầu tư vào quan hệ không? / “Is this customer willing to co-invest in a partnering relationship with us?” · 3
  - Chân slide: B07: Guesalaga, Adopting key account management – Choose me and I will choose you, Cranfield blog.
  - Ghi chú GV: Câu thứ ba (đồng đầu tư) là tiêu chí mới nhất, phát hiện qua phỏng vấn lãnh đạo làm KAM.
- **S14. Hai trục đầu điều chỉnh từ khung GE–McKinsey**
  - Nội dung: Trục 1 + 2 / hấp dẫn × vị thế — điều chỉnh từ ma trận GE–McKinsey, chấm có trọng số · vùng ứng viên Key Account · Sức hấp dẫn của khách hàng  → · Câu 3 là cổng / ứng viên trong vùng vẫn phải qua cổng đồng đầu tư mới thành Key Account · Vị thế cạnh tranh của agency  →
  - Chân slide: B07: Guesalaga, Cranfield blog · cách trình bày “cổng” đồng đầu tư: nhận định của người soạn.
  - Ghi chú GV: Hai câu đầu điều chỉnh từ khung GE–McKinsey (đánh giá danh mục kinh doanh) → đặt ứng viên lên ma trận hai trục. Câu thứ ba là cổng. ⏎ Alt-text: ma trận chín ô, trục dọc sức hấp dẫn của khách hàng, trục ngang vị thế cạnh tranh của agency; góc trên phải tô đậm là vùng ứng viên Key Account.
- **S15. Mỗi trục có tiêu chí con và trọng số**
  - Nội dung: Sức hấp dẫn của khách hàng · Vị thế cạnh tranh của agency · Ngân sách sự kiện/năm / Tiềm năng tăng trong 3 năm / Biên lợi nhuận kỳ vọng / Uy tín để làm hồ sơ năng lực / Thanh toán đúng hạn / Ngành phù hợp năng lực Nova · Quan hệ hiện có: số đầu mối, cấp / Hiểu ngành và khách của khách hàng / Kết quả các sự kiện đã làm / Năng lực đúng loại sự kiện khách cần / Vị trí so với agency khác · Cách chấm: mỗi tiêu chí 1–5 × trọng số (tổng 100) → điểm mỗi trục, thang 100
  - Chân slide: Tiêu chí con gợi ý cho agency sự kiện: nhận định của người soạn — nhóm có thể sửa.
  - Ghi chú GV: Để chiếu suốt S6. ⏎ Cách chấm: mỗi tiêu chí 1–5 × trọng số (tổng 100) → điểm mỗi trục (thang 100).
- **S16. Chấm thử An Phát: hấp dẫn cao, vị thế khá**
  - Nội dung: GIẢ ĐỊNH · ✓  Ngân sách ~2,2–2,4 tỷ/năm · Sức hấp dẫn · CAO · ✓  4 năm hợp tác · ✓  Thanh toán đúng hạn · Vị thế cạnh tranh · KHÁ · ✓  Chị Hạnh tin Nova · ✗  Nova chỉ quen 1–2 người ở An Phát
  - Chân slide: GIẢ ĐỊNH — chấm trên bảng cùng lớp.
  - Ghi chú GV: Chấm trên bảng: ngân sách ~2,2–2,4 tỷ/năm, 4 năm hợp tác, thanh toán đúng hạn, chị Hạnh tin Nova, nhưng Nova mới chỉ quen 1–2 người ở An Phát. → hấp dẫn cao, vị thế khá.
- **S17. Điểm yếu của Nova với An Phát là chỉ quen một hai người**
  - Nội dung: Vị thế “khá” — chưa “cao” — vì quan hệ chỉ đi qua một người · Nova · An Phát · chị Hạnh — một sợi dây · Nếu đầu mối duy nhất rời đi, quan hệ có thể đứt. Buổi 8: từ Bow-tie (một điểm nối) sang Diamond (nhiều cặp đối ứng).
  - Ghi chú GV: Gợi mở Buổi 8: từ Bow-tie (mọi thông tin đi qua một điểm) sang Diamond (các bộ phận hai bên làm việc trực tiếp).
- **S18. Choose me and I will choose you**
  - Nội dung: “Choose me and I will choose you” · Hấp dẫn · + · Vị thế tốt · + · Thiếu cổng thứ ba — khách hàng không muốn đầu tư lại — thì khó thành Key Account.
  - Chân slide: B07: Guesalaga, Cranfield blog.
  - Ghi chú GV: KAM hiệu quả cần đồng phát triển, đồng đầu tư. Một khách hàng hấp dẫn, agency có vị thế tốt, nhưng khách hàng không muốn đầu tư lại vào quan hệ → khó thành Key Account.
- **S19. Đồng đầu tư có bốn biểu hiện**
  - Nội dung: Hợp đồng khung nhiều năm / thay vì đấu thầu từng sự kiện · Chia sẻ thông tin / mục tiêu kinh doanh, dữ liệu khách mời, kết quả sau sự kiện · 1 · 2 · Đầu mối cấp cao / mời agency vào họp kế hoạch năm · Thí điểm cùng làm / chia chi phí, chia rủi ro · 3 · 4
  - Chân slide: Biểu hiện với agency sự kiện: nhận định của người soạn.
  - Ghi chú GV: Bốn biểu hiện giúp SV tìm bằng chứng “đồng đầu tư” cho từng ứng viên ở Thực hành 2.
- **S20. Khi đối tác muốn đầu tư lại, quan hệ đổi chất**
  - Nội dung: VÍ DỤ TƯƠNG TỰ · 2024 · nhà tài trợ concert · 2025 · “nhà đồng đầu tư” · Techcombank và các concert “Anh trai vượt ngàn chông gai” (Yeah1) · Khi một đối tác muốn đầu tư lại vào quan hệ, quan hệ đổi hẳn chất — từ mua bán sang cùng làm.
  - Chân slide: B08 → U08 (Buổi 9): Znews; Tuổi Trẻ (1/2025). Ví dụ TƯƠNG TỰ — quan hệ nhà sản xuất – nhà tài trợ, không phải agency – khách hàng.
  - Ghi chú GV: Nói: “Đây là quan hệ nhà sản xuất – nhà tài trợ, không phải agency – khách hàng. Nhưng nó cho thấy khi một đối tác muốn đầu tư lại, quan hệ đổi hẳn chất.”
- **S21. Không chọn không có nghĩa là bỏ**
  - Nội dung: Key Account / nguồn lực riêng, kế hoạch riêng, đầu mối nhiều cấp · Khách hàng khác / vẫn phục vụ tốt và có lời — theo cách chuẩn hóa, ít nguồn lực riêng · Buổi 6: CLV và chi phí phục vụ (cost-to-serve) giúp quyết định chính xác hơn.
  - Chân slide: Nhận định của người soạn.
  - Ghi chú GV: Khách hàng không phải Key Account vẫn được phục vụ tốt và có lời, nhưng theo cách chuẩn hóa hơn (ít nguồn lực riêng). Buổi 6 sẽ dùng CLV và chi phí phục vụ để quyết định chính xác hơn. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S22. Thực hành 2 · Nova chọn tối đa hai Key Account**
  - Nội dung: Ngân hàng An Phát · ~2,3 tỷ · 4 năm; đúng hạn; chỉ quen 1–2 người; sẵn sàng bàn hợp đồng khung 2 năm · Chấm 2 trục + cổng đồng đầu tư; đặt lên ma trận; chọn ≤ 2 · 1 · 15’ · Địa ốc Sông Xanh · ~3,5 tỷ · đấu thầu theo giá; trả sau ~90 ngày; năm nào cũng đổi agency · 2 · Xoay trạm: vai anh Đức — CEO Nova · 🟨 câu hỏi · 🟥 lo ngại · 2×4’ · Dược phẩm MediPharm · ~1,2 tỷ · biên cao; tuân thủ chặt; Nova ít kinh nghiệm; muốn cùng thiết kế định dạng mới · 3 · Đại học Bright Future · ~0,6 tỷ · ổn định, đơn giản, ít tiềm năng tăng · 4 · Về bàn, sửa một điểm · 4’ · Thực phẩm Bếp Việt · ~1,8 tỷ · tăng nhanh; đề nghị chia chi phí thí điểm; Nova yếu activation ngoài trời · 5 · Nova chỉ đủ người cho tối đa 2 Key Account
  - Chân slide: Phiếu W02_activity_S6_chon_key_account.md · Tình huống giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 · 15 · 8 · 4. ⏎ Lời mở đầu: “Nova chỉ đủ người cho hai Key Account. Chấm năm ứng viên theo hai trục và qua cổng đồng đầu tư. Sau đó anh Đức — CEO — sẽ đi hỏi từng bàn: vì sao?” ⏎ Với 3 khách hàng không chọn, nhóm ghi Nova phục vụ theo cách nào.
- **S23. Ba ý của Buổi 2**
  - Nội dung: KAM không phải “bán hàng xịn hơn” mà là quản trị quan hệ dài hạn, hai chiều — nhiều người, có kế hoạch và nguồn lực riêng. · 2.1 · Chọn Key Account bằng hai trục chấm có trọng số (sức hấp dẫn, vị thế cạnh tranh) và cổng đồng đầu tư. · 2.2 · Key Account không phải khách hàng lớn nhất, mà là khách hàng đáng và muốn cùng đầu tư. · → · Stakeholder Management Plan: một đoạn — khách hàng của nhóm đạt ba tiêu chí đến đâu, vì sao chọn làm Key Account.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ SMP: với khách hàng từ dự án cũ, nhóm ghi một đoạn: khách hàng đạt ba tiêu chí đến đâu, vì sao chọn làm Key Account cho kế hoạch.
- **S24. Phiếu kiểm tra cuối giờ**
  - Nội dung: Một điểm khác biệt giữa Sales và KAM, kèm ví dụ từ dự án sự kiện cũ của nhóm bạn. · 1 · Khách hàng trong dự án cũ của nhóm đạt ba tiêu chí đến đâu? Tiêu chí nào yếu nhất? · 2 · Buổi 3: đã chọn Key Account thì phải hiểu họ hơn chính họ — thế giới của khách hàng, hành trình của khách hàng, và ai thật sự quyết định.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) khác biệt nói về quan hệ, thời gian, giá trị cho khách hàng, không chỉ “chăm sóc kỹ hơn”; (b) SV không mặc định khách hàng cũ là Key Account. ⏎ Câu nối Buổi 3: “Đã chọn Key Account thì phải hiểu họ hơn chính họ. Buổi sau: thế giới của khách hàng, hành trình của khách hàng, và ai thật sự quyết định.”
- **S25. Tài liệu tham khảo**
  - Nội dung: B01 · Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management: Designing customer-centric processes for mutual growth. Kogan Page. · B02 · Millman, T., & Wilson, K. (1995). From key account selling to key account management. Journal of Marketing Practice: Applied Marketing Science, 1(1), 9–21. · B03 · McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757. · B04 · Homburg, C., Workman, J. P., Jr., & Jensen, O. (2002). A configurational perspective on key account management. Journal of Marketing, 66(2), 38–60. · B05 · McDonald, M. (n.d.). Why many companies get key account management hopelessly wrong. Cranfield School of Management Executive Development Blog. · B07 · Guesalaga, R. (n.d.). Adopting key account management – Choose me and I will choose you. Cranfield School of Management Executive Development Blog. · B08 · Xem U08, U11 (Buổi 9): Znews (2025); Tuổi Trẻ Online (2025) — Techcombank và “Anh trai vượt ngàn chông gai”.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-02_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 3 — Understanding the Customer & Customer Journey

| | |
|---|---|
| Mục tiêu (nguyên văn yêu cầu đề cương trích trong phiếu thực hành) | • "Yêu cầu 3.1 của đề cương: **phân tích môi trường vĩ mô và vi mô của khách hàng (PESTEL & đối thủ).**"<br>• "Yêu cầu 3.2 và 3.3 của đề cương: **vẽ hành trình khách hàng, phân tích điểm chạm** và **phân tích DMU bằng GRASP.**" |
| Đoạn | Mở đầu · 3.1 Thế giới khách hàng · 3.2 Hành trình · 3.3 DMU · GRASP · Tổng kết |
| Số slide · trạng thái | 24 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W03_Customer_Understanding_Journey.pptx

- **S1. Slide bìa**
  - Nội dung: PESTEL · EVM1110E  ·  Buổi 3 / 15 · Đối thủ · Quản trị mối quan hệ trong tổ chức sự kiện · An Phát · Understanding the Customer & Customer Journey · Phần 2 · Quản trị khách hàng trọng điểm — buổi 2/7 / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Trước · Trong · Sau
  - Ghi chú GV: Slide 1. Buổi 3 — nhìn thế giới bằng mắt của Key Account. ⏎ Alt-text: ba vòng tròn đồng tâm (PESTEL, đối thủ, nội bộ An Phát) và một dòng thời gian ba giai đoạn trước–trong–sau.
- **S2. Tín dụng ngân hàng năm 2026 là chuyện của Nova**
  - Nội dung: Nova là agency sự kiện. Nova có cần biết điều này không? · DỮ KIỆN THẬT · ~15% · Có · Không · tăng trưởng tín dụng toàn hệ thống định hướng cho năm 2026 · Có — vì An Phát cần biết. Tín dụng bị giới hạn → ngân hàng phải giữ khách doanh nghiệp tốt bằng cách khác → có thể chính là lý do An Phát cần một chương trình khách hàng. · + kiểm soát chặt tín dụng bất động sản · Ngân hàng Nhà nước · VnEconomy, 11/1/2026
  - Chân slide: C05: VnEconomy (11/1/2026); VnExpress (2026) — dữ kiện thật.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu: “Năm 2026, Ngân hàng Nhà nước định hướng tín dụng toàn hệ thống tăng khoảng 15% và kiểm soát chặt tín dụng bất động sản (VnEconomy, 11/1/2026).” ⏎ Giơ tay: “Nova là agency sự kiện. Nova có cần biết điều này không?” ⏎ Chốt: “Có — vì An Phát cần biết. Khi tín dụng bị giới hạn, ngân hàng phải giữ khách doanh nghiệp tốt bằng cách khác. Đó có thể chính là lý do An Phát cần một chương trình khách hàng. Hôm nay: nhìn thế giới bằng mắt của khách hàng.”
- **S3. Hiểu khách hàng hơn chính họ**
  - Nội dung: Stage A / “analysing the customer’s world” · ✗  Thị trường của Nova / agency khác, giá dịch vụ sự kiện · ✓  Thế giới của An Phát / ngành ngân hàng, đối thủ của An Phát, người trong An Phát
  - Chân slide: C01: Davies, The value planning framework for key accounts, KAM Forum (Cranfield).
  - Ghi chú GV: Theo Cranfield KAM Forum, bước đầu của kế hoạch Key Account là Stage A — phân tích thế giới của khách hàng. ⏎ Góc nhìn của buổi: Nova phân tích thế giới của Key Account (An Phát), không phải thị trường của Nova.
- **S4. Ba công cụ: PESTEL, đối thủ, nội bộ khách hàng**
  - Nội dung: 1 · 2 · 3 · PESTEL · Đối thủ · Nội bộ khách hàng · Chính sách, kinh tế, xã hội, công nghệ, môi trường, pháp lý — của ngành khách hàng · Ai đang giành khách hàng của khách hàng ta? · Chiến lược, mục tiêu, cơ cấu, người ra quyết định · Tương xứng / nghiên cứu theo tầm quan trọng của khách hàng · Ghi giả định / thiếu thông tin thì đặt giả định, ghi rõ · Xác nhận lại / kiểm chứng với chính khách hàng
  - Chân slide: C01: Davies, KAM Forum (Cranfield) — “wheel of customer understanding” của Dr Sue Holt.
  - Ghi chú GV: Ba công cụ của Stage A, qua “wheel of customer understanding” (Dr Sue Holt). ⏎ Lời khuyên: nghiên cứu tương xứng với tầm quan trọng của khách hàng; thiếu thông tin thì đặt giả định và ghi rõ; xác nhận lại với khách hàng. ⏎ Alt-text: ba ô — PESTEL, phân tích đối thủ, phân tích nội bộ khách hàng.
- **S5. PESTEL trong KAM là PESTEL của khách hàng**
  - Nội dung: Câu hỏi cho An Phát · Ví dụ · P – Chính trị · Chính sách nào ảnh hưởng ngân hàng? · THẬT: NHNN định hướng tín dụng ~15% năm 2026, siết tín dụng BĐS (C05) · E – Kinh tế · Khách doanh nghiệp của An Phát đang lo gì? · (giả định) chi phí vốn, dòng tiền · S – Xã hội · Thế hệ chủ doanh nghiệp thay đổi thế nào? · (giả định) chủ doanh nghiệp trẻ, ưa trải nghiệm · T – Công nghệ · Ngân hàng số ảnh hưởng quan hệ với khách? · (giả định) khách ít đến chi nhánh · E – Môi trường · Xu hướng xanh? · (giả định) tín dụng xanh · L – Pháp lý · Quy định nào ràng buộc cách An Phát làm sự kiện? · bảo vệ dữ liệu khách hàng [VERIFY]; bán bảo hiểm qua ngân hàng (Buổi 9)
  - Chân slide: Dòng P: C05 (dữ kiện thật). Các dòng khác: GIẢ ĐỊNH để học tập.
  - Ghi chú GV: Ghi rõ dòng nào là giả định. Chỉ dòng P (tín dụng ~15%, siết BĐS) là dữ kiện thật. ⏎ [VERIFY: văn bản hiện hành về bảo vệ dữ liệu khách hàng] — dòng L. Bán bảo hiểm qua ngân hàng nối Buổi 9 (U13).
- **S6. Dữ kiện chỉ có giá trị khi thành nhu cầu**
  - Nội dung: Dữ kiện · Hệ quả cho ngân hàng · Nhu cầu của An Phát · Tín dụng bị giới hạn (~15%, siết BĐS) · Cạnh tranh giữ khách doanh nghiệp tốt bằng dịch vụ và quan hệ · Sự kiện tạo giá trị thật cho khách doanh nghiệp — không chỉ tiệc · Giá trị của phân tích nằm ở nhu cầu rút ra — không ở bảng điền đủ sáu chữ cái.
  - Chân slide: Chuỗi suy luận: nhận định của người soạn, dựa trên C05.
  - Ghi chú GV: Từ dữ kiện đến hàm ý: tín dụng bị giới hạn → cạnh tranh giữ khách doanh nghiệp tốt bằng dịch vụ và quan hệ → An Phát cần sự kiện tạo giá trị thật cho khách doanh nghiệp, không chỉ tiệc.
- **S7. Đối thủ của An Phát là ngân hàng khác, không phải agency khác**
  - Nội dung: Ngân hàng X / hội thảo chuyên đề hàng quý · Ngân hàng Z / (nhóm tự bổ sung) · An Phát · Đối thủ giành khách của An Phát · khách doanh nghiệp VIP · Ngân hàng Y / lãi suất ưu đãi · ✗ Agency khác / là đối thủ của Nova — không phải của An Phát
  - Chân slide: C01; ví dụ ngân hàng đối thủ: nhận định của người soạn.
  - Ghi chú GV: Đối thủ = ngân hàng khác đang giành khách doanh nghiệp VIP của An Phát (không phải agency khác của Nova). ⏎ Nội bộ = chiến lược, mục tiêu, cơ cấu, người ra quyết định của An Phát (→ phần 3.3).
- **S8. Thiếu dữ liệu thì ghi giả định, không bịa**
  - Nội dung: Hiểu lầm / “PESTEL là để phân tích thị trường sự kiện” · Sửa / Trong KAM, phân tích ngành và đối thủ của khách hàng · Hiểu lầm / “Không có số liệu thì bỏ qua” · Sửa / Đặt giả định → ghi rõ → kiểm chứng với khách hàng
  - Chân slide: C01: Davies, KAM Forum (Cranfield).
  - Ghi chú GV: Hiểu lầm: “PESTEL là để phân tích thị trường sự kiện” → trong KAM, phân tích ngành và đối thủ của khách hàng. ⏎ “Không có số liệu thì bỏ qua” → đặt giả định, ghi rõ, kiểm chứng sau (C01). ⏎ → Chuyển sang S3 — Thực hành 1.
- **S9. Thực hành 1 · Thế giới của An Phát**
  - Nội dung: THẬT · NHNN: tín dụng ~15% năm 2026, siết BĐS · Ngân hàng X mở hội thảo chuyên đề hàng quý · Xếp 8 thẻ vào P·E·S·T·E·L hoặc “Đối thủ của An Phát” · 1 · 2 · 7’ · Khách VIP lo nhất: chi phí vốn, dòng tiền · 70% giao dịch qua ngân hàng số · 3 · 4 · 3 nhu cầu, mỗi nhu cầu ≥ 2 thẻ: “Vì [thẻ…] và [thẻ…], An Phát cần …” · 8’ · Nhiều chủ DN là thế hệ thứ hai, dưới 40 · An Phát muốn tăng tín dụng xanh · 5 · 6 · 1 nhu cầu → Nova giúp bằng gì? + 1 giả định cần hỏi chị Hạnh · 5’ · Quy định chặt hơn về bảo vệ dữ liệu cá nhân · Ngân hàng Y chào lãi suất ưu đãi · 7 · 8 · Nhu cầu của An Phát — không phải của Nova
  - Chân slide: Phiếu W03_activity_S3_the_gioi_an_phat.md · Thẻ 1 thật (C05); thẻ 2–8 GIẢ ĐỊNH.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút): 7 · 8 · 5, GV chốt trong đoạn. ⏎ Lời mở đầu: “Tám thẻ về thế giới của An Phát — một thẻ thật, bảy thẻ giả định. Xếp chúng, rồi trả lời: năm tới An Phát cần gì? Nova chỉ có ích khi giúp được điều đó.” ⏎ Nếu nhóm viết “An Phát cần một gala hoành tráng” → hỏi: “Đó là giải pháp của Nova. Nhu cầu kinh doanh của An Phát là gì?” ⏎ [VERIFY: văn bản hiện hành] cho thẻ 7.
- **S10. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S11. Hành trình có ba giai đoạn**
  - Nội dung: Trước / prepurchase · Trong / purchase · Sau / postpurchase · nhận thư mời, nghe kể, quyết định có đến · đón tiếp, chương trình, gặp gỡ · ảnh, thư cảm ơn, tin báo chí, liên lạc tiếp · Hành trình bắt đầu trước ngày sự kiện và kéo dài sau đó.
  - Chân slide: C03: Lemon & Verhoef (2016), Journal of Marketing.
  - Ghi chú GV: Lemon & Verhoef (2016): prepurchase – purchase – postpurchase. Đây là nguồn gốc học thuật trực tiếp của ba giai đoạn trong đề cương. ⏎ Nhấn: hành trình bắt đầu trước ngày sự kiện và kéo dài sau đó.
- **S12. Điểm chạm có bốn loại**
  - Nội dung: B · P · C · S · brand-owned · partner-owned · customer-owned · social / external · do doanh nghiệp sở hữu · do đối tác — Nova ở đây · khách tự làm · người khác, báo chí, mạng xã hội · “Partners can include marketing agencies…” — Lemon & Verhoef (2016)
  - Chân slide: C03: Lemon & Verhoef (2016), Journal of Marketing, 80(6), 69–96.
  - Ghi chú GV: Chiếu suốt S6 (Thực hành 2). Ký hiệu B · P · C · S dùng trên bản đồ hành trình. ⏎ Trích: “Partners can include marketing agencies…” — Nova chính là partner-owned.
- **S13. Môn học có hai lớp hành trình**
  - Nội dung: Lớp 1 · Lớp 2 · Khách của Key Account · Chính Key Account · 600 lãnh đạo doanh nghiệp VIP của An Phát — từ nhận thư mời đến sau gala · An Phát mua dịch vụ của Nova: brief → đề xuất → hợp đồng → sự kiện → nghiệm thu · Dùng ở: Buổi 3 · 5 · 9 · 11 · Dùng ở: Buổi 10
  - Chân slide: Hai lớp hành trình: quyết định của giảng viên; nhận định của người soạn.
  - Ghi chú GV: Lớp 1 dùng ở Buổi 3, 5, 9, 11. Lớp 2 dùng ở Buổi 10.
- **S14. Hành trình của khách VIP bắt đầu từ thư mời**
  - Nội dung: Trước · Trong · Sau · Nhận thư mời từ An Phát · Đón tiếp tại khách sạn · Nhận ảnh, thư cảm ơn (Nova làm hộ) · B · S · P · C · B · S · Đồng nghiệp kể về gala năm ngoái · Tự chụp ảnh, đăng mạng xã hội · Báo chí đưa tin · B brand-owned · P partner-owned · C customer-owned · S social/external · Hỏi lớp: Nova làm nhiều điểm chạm — nhưng khách thấy đó là của ai?
  - Chân slide: Ví dụ GIẢ ĐỊNH — lớp 1 (khách của An Phát).
  - Ghi chú GV: Alt-text: dòng thời gian sáu điểm chạm qua ba giai đoạn, mỗi điểm ghi loại B/P/C/S. ⏎ Hỏi: “Nova làm nhiều điểm chạm nhưng khách thấy đó là của ai?”
- **S15. Nova làm, nhưng khách thấy An Phát**
  - Nội dung: An Phát · Nova · thư mời · Nova · đón tiếp · Nova · thư cảm ơn · Nova · livestream · Nova làm cho thương hiệu An Phát tỏa sáng.
  - Ghi chú GV: Chốt: “Của An Phát. Nova làm cho thương hiệu An Phát tỏa sáng.”
- **S16. Quyết định mua của tổ chức do nhiều người**
  - Nội dung: buying center · DMU · [VERIFY] vai trò · Người dùng · user · Quyết định chọn agency · Người gác cổng · Người ảnh hưởng · gatekeeper · influencer · Người quyết định · Người mua · decider · buyer
  - Chân slide: C04: Webster & Wind (1972), Journal of Marketing, 36(2), 12–19.
  - Ghi chú GV: Webster & Wind (1972): hành vi mua của tổ chức là quá trình ra quyết định của tổ chức. Bài này thường được dẫn cho khái niệm buying center / DMU. ⏎ [VERIFY: danh sách vai trò trong toàn văn — mới đọc tóm tắt]
- **S17. Năm người của An Phát liên quan đến quyết định chọn Nova**
  - Nội dung: H · T · K · L · V · Chị Hạnh · Ông Tuấn · Anh Khoa · Chị Lan · Chị Vy · GĐ Marketing · Phó TGĐ khối Marketing – Truyền thông · Chuyên viên ngân sách – mua sắm · Trưởng ban Truyền thông nội bộ · Trưởng nhóm Thương hiệu · Làm việc với Nova 4 năm; chịu áp lực đổi mới năm nay · Chỉ bắt tay Nova ở gala; quan tâm giữ khách DN lớn · Chỉ gửi hồ sơ thanh toán; khó tính về quy trình · Lo livestream về 80 chi nhánh; năm ngoái bị chậm · Chưa làm việc trực tiếp với Nova
  - Chân slide: Nhân vật GIẢ ĐỊNH.
  - Ghi chú GV: Năm thẻ nhân vật dùng tiếp trong Thực hành 2.
- **S18. GRASP: mục tiêu, vai trò, điều thu hút, thái độ, quyền lực**
  - Nội dung: Goal · Mục tiêu của họ (tổ chức và cá nhân)? KPI của họ? · G · Role · Vai trò: quyết định, phê duyệt, ảnh hưởng, người dùng, gác cổng? · R · Appeal · Điều gì trong đề xuất thu hút họ: giá, ý tưởng, an toàn, kết quả kinh doanh? · A · State · Thái độ hiện tại với Nova: ủng hộ, trung lập, hoài nghi, chưa biết? · S · Power · Mức ảnh hưởng thực tế đến quyết định? · P
  - Chân slide: C06: định nghĩa làm việc của môn — chưa tìm được nguồn công khai của GRASP [NEEDS PROFESSOR INPUT].
  - Ghi chú GV: Nói rõ: đây là định nghĩa làm việc của môn; nguồn gốc GRASP trong đề cương chưa tìm được bản công khai. [NEEDS PROFESSOR INPUT] ⏎ Chiếu suốt S6.
- **S19. GRASP của chị Hạnh**
  - Nội dung: G · R · A · S · P · Goal · Role · Appeal · State · Power · Hình ảnh ngân hàng với khách doanh nghiệp; tỷ lệ tham dự · Đầu mối chính, đề xuất lên lãnh đạo · Ý tưởng mới nhưng an toàn thương hiệu · Tin Nova (4 năm) nhưng áp lực đổi mới · Cao · Chị Hạnh · GĐ Marketing An Phát
  - Chân slide: Ví dụ GIẢ ĐỊNH.
  - Ghi chú GV: Chị Hạnh: đầu mối chính, quyền lực cao — nhưng không phải người phê duyệt cuối (→ slide sau).
- **S20. Người liên hệ nhiều nhất không phải người quyết định**
  - Nội dung: Hiểu lầm / “Người liên hệ nhiều nhất là người quyết định” · Sửa / Chị Hạnh liên hệ nhiều nhất — nhưng ông Tuấn phê duyệt, anh Khoa có thể chặn ở mua sắm · Hiểu lầm / “Chỉ cần làm hài lòng người quyết định” · Sửa / Người dùng (chị Lan — livestream) và người gác cổng cũng ảnh hưởng
  - Ghi chú GV: Hiểu lầm: “Người liên hệ nhiều nhất là người quyết định” → chị Hạnh liên hệ nhiều nhất, nhưng ông Tuấn phê duyệt, anh Khoa có thể chặn ở khâu mua sắm. ⏎ “Chỉ cần làm hài lòng người quyết định” → người dùng (chị Lan — livestream) và người gác cổng cũng ảnh hưởng. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S21. Thực hành 2 · Hành trình của khách VIP và DMU của An Phát**
  - Nội dung: Hội nghị khách hàng + gala cho 600 lãnh đạo doanh nghiệp VIP của An Phát · Nửa trái A1 · Hành trình / Một khách VIP · trước – trong – sau · ≥ 6 điểm chạm ghi B / P / C / S · khoanh ⚠️ 1 điểm dễ hỏng nhất · Nửa phải A1 · GRASP / 5 người · Power 1–5 · mỗi người 1 việc Nova nên làm · nối mỗi người với điểm chạm họ quan tâm nhất · Hành trình · GRASP · Xoay trạm · vai chị Hạnh · 🟨 câu hỏi · 🟥 điều Nova hiểu sai · Về bàn, sửa 1 điểm · 12’ · 7’ · 2×4’ · 3’
  - Chân slide: Phiếu W03_activity_S6_hanh_trinh_va_dmu.md · Tình huống GIẢ ĐỊNH.
  - Ghi chú GV: S6 — Thực hành 2 (33 phút): 3 · 12 · 7 · 8 · 3. Chỉ slide bốn loại điểm chạm và slide GRASP. ⏎ Nếu hành trình chỉ có ngày gala → hỏi: “Khách quyết định có đến từ khi nào? Sau gala khách còn gặp An Phát ở đâu?” ⏎ Nếu Power của chị Hạnh cao nhất → “Ai ký phê duyệt cuối? Ai có thể chặn ở khâu mua sắm?” ⏎ State để trống với chị Vy → “Chưa biết” cũng là một trạng thái — và là rủi ro.
- **S22. Ba ý của Buổi 3**
  - Nội dung: PESTEL và đối thủ của khách hàng → nhu cầu thật của họ; thiếu dữ liệu thì ghi rõ giả định. · 3.1 · Hành trình ba giai đoạn, bốn loại điểm chạm; hai lớp hành trình — khách của khách hàng, và chính khách hàng với agency. · 3.2 · Quyết định do DMU; GRASP giúp hiểu từng người: mục tiêu, vai trò, điều thu hút, thái độ, quyền lực. · 3.3 · Stakeholder Management Plan: đây là phần A. Value Insights cho khách hàng từ dự án cũ của nhóm.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ SMP: đây là phần A. Value Insights (Buổi 13) cho khách hàng từ dự án cũ.
- **S23. Phiếu kiểm tra cuối giờ**
  - Nội dung: Một yếu tố PESTEL của khách hàng trong dự án cũ của nhóm, và nó tạo ra nhu cầu gì cho khách hàng đó? · 1 · Người có quyền lực (Power) cao nhất trong DMU của khách hàng đó là ai? Nhóm đã từng làm việc trực tiếp với người đó chưa? · 2 · Buổi 4: hiểu khách hàng rồi, làm sao biết quan hệ đang tốt hay xấu? Đo chất lượng quan hệ — niềm tin, cam kết, và xung đột chức năng.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. ⏎ Cần xem: (a) PESTEL là của khách hàng, không của agency; (b) phân biệt người liên hệ nhiều nhất với người quyết định. ⏎ Câu nối Buổi 4: “Hiểu khách hàng rồi, làm sao biết quan hệ với họ đang tốt hay xấu? Buổi sau: đo chất lượng quan hệ — niềm tin, cam kết, và xung đột chức năng.”
- **S24. Tài liệu tham khảo**
  - Nội dung: C01 · Davies, M. (n.d.). The value planning framework for key accounts. Key Account Management Forum (Cranfield). · C02 · Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management. Kogan Page. (chương 3) · C03 · Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96. https://doi.org/10.1509/jm.15.0420 · C04 · Webster, F. E., Jr., & Wind, Y. (1972). A general model for understanding organizational buying behavior. Journal of Marketing, 36(2), 12–19. https://doi.org/10.1177/002224297203600204 · C05 · VnEconomy. (2026, January 11). Năm 2026, tín dụng dự kiến tăng thêm 2,79 triệu tỷ đồng, giảm 183.000 tỷ so với 2025. · VnExpress. (2026). Tăng trưởng tín dụng năm 2026 dự kiến 15%. · C06 · GRASP (Goal, Role, Appeal, State, Power) — định nghĩa làm việc của môn; chưa có nguồn công khai [NEEDS PROFESSOR INPUT].
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-03_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 4 — Measuring Relationship Quality

| | |
|---|---|
| Mục tiêu | • "Yêu cầu 4.1: **ba trụ cột của chất lượng quan hệ** — functional conflict, trust, commitment."<br>• "Luyện **biến một bất đồng thành xung đột chức năng** (4.1) và **đề xuất bước chuyển từ giao dịch sang quan hệ đối tác** (4.2)." |
| Đoạn | Mở đầu · 4.1 Ba trụ cột · Đo · xử lý bất đồng · 4.2 Giao dịch → đối tác · Tổng kết |
| Số slide · trạng thái | 24 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W04_Relationship_Quality.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 4 / 15 · Chất lượng quan hệ · Quản trị mối quan hệ trong tổ chức sự kiện · Trust · Commitment · Functional conflict · Measuring Relationship Quality · Phần 2 · Quản trị khách hàng trọng điểm — buổi 3/7 / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên
  - Ghi chú GV: Slide 1. Buổi 4 — đo và phát triển chất lượng quan hệ với Key Account. ⏎ Alt-text: ba cột trụ (Trust, Commitment, Functional conflict) đỡ một thanh ngang “Chất lượng quan hệ”.
- **S2. Khách hàng không bao giờ phàn nàn chưa chắc đã hài lòng**
  - Nội dung: 4 năm làm gala cho An Phát. Chị Hạnh chưa bao giờ phàn nàn với Nova một lần nào. · Quan hệ rất tốt · Đáng lo · A · B · Có thể cả hai — nếu chị Hạnh không nói, Nova không biết để sửa.
  - Chân slide: Tình huống giả định Nova Events – Ngân hàng An Phát.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu: “Nova làm gala cho An Phát 4 năm. Chị Hạnh chưa bao giờ phàn nàn với Nova một lần nào.” ⏎ Giơ tay: “Đó là dấu hiệu (A) quan hệ rất tốt, hay (B) đáng lo?” ⏎ Chốt: “Có thể cả hai. Nếu chị Hạnh không nói điều chưa hài lòng, Nova không biết để sửa — và có thể một ngày Nova mất hợp đồng mà không hiểu vì sao. Hôm nay: đo quan hệ bằng ba trụ cột, trong đó có một trụ cột nghe lạ: xung đột.”
- **S3. Commitment: quan hệ đáng để nỗ lực tối đa giữ gìn**
  - Nội dung: Cam kết · Commitment · “an exchange partner believing that an ongoing relationship with another is so important as to warrant maximum efforts at maintaining it; that is, the committed party believes the relationship is worth working on to ensure that it endures indefinitely.” · Nghĩa là: một bên tin rằng quan hệ quan trọng đến mức đáng nỗ lực tối đa để giữ, muốn quan hệ kéo dài.
  - Chân slide: D01: Morgan & Hunt (1994), Journal of Marketing, 58(3) — nguyên văn, đã đối chiếu toàn văn.
  - Ghi chú GV: Định nghĩa nguyên văn Morgan & Hunt (1994). Nhấn “maximum efforts” — câu C1 của bộ câu hỏi dựng từ cụm này.
- **S4. Trust: tin vào độ tin cậy và sự chính trực của bên kia**
  - Nội dung: Niềm tin · Trust · “We conceptualize trust as existing when one party has confidence in an exchange partner’s reliability and integrity.” · Nghĩa là: tin vào độ tin cậy (làm đúng cam kết) và sự chính trực (trung thực) của bên kia.
  - Chân slide: D01: Morgan & Hunt (1994), Journal of Marketing, 58(3) — nguyên văn.
  - Ghi chú GV: Hai chữ cần nhớ: reliability ↔ câu T1; integrity ↔ câu T2.
- **S5. Functional conflict: bất đồng được giải quyết êm thấm**
  - Nội dung: Xung đột chức năng · Functional conflict · “when disputes are resolved amicably, such disagreements can be referred to as ‘functional conflict,’ because they prevent stagnation, stimulate interest and curiosity, and provide a ‘medium through which problems can be aired and solutions arrived at’” · Nghĩa là: bất đồng được giải quyết êm thấm giúp quan hệ không trì trệ — “just another part of doing business” (Anderson & Narus, 1990).
  - Chân slide: D01: Morgan & Hunt (1994), dẫn Anderson & Narus (1990) — nguyên văn.
  - Ghi chú GV: Xung đột chức năng là kênh để nêu vấn đề và tìm giải pháp. Không phải “ít xung đột”.
- **S6. Xung đột chức năng là kết quả của niềm tin**
  - Nội dung: Trust · Functional conflict · Có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng. · Commitment · Cooperation
  - Chân slide: D01: Morgan & Hunt (1994) — trích một phần mô hình KMV.
  - Ghi chú GV: Trong mô hình Morgan & Hunt, commitment và trust là biến trung gian then chốt; functional conflict là kết quả trực tiếp của trust; cooperation phát sinh từ cả commitment và trust. ⏎ Nói: “Có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng. Không có niềm tin thì bất đồng hoặc bị giấu đi, hoặc nổ ra.” ⏎ Alt-text: sơ đồ mũi tên — Commitment và Trust cùng dẫn đến Cooperation; Trust dẫn đến Functional conflict; Trust dẫn đến Commitment.
- **S7. Với khách hàng mới, hợp tác trước, niềm tin sau**
  - Nội dung: Niềm tin · Hợp tác · Cùng làm tốt vài việc nhỏ · Hợp tác là tiền đề của niềm tin — đừng chờ có niềm tin rồi mới cùng làm.
  - Chân slide: D02: Anderson & Narus (1990), Journal of Marketing, 54(1), 42–58.
  - Ghi chú GV: Anderson & Narus (1990): hợp tác là tiền đề của niềm tin — với khách hàng mới, cùng làm tốt vài việc nhỏ trước.
- **S8. Chất lượng quan hệ ảnh hưởng hiệu quả nhiều nhất**
  - Nội dung: Chất lượng quan hệ / thước đo tổng hợp — ảnh hưởng nhiều nhất đến hiệu quả khách quan · Marketing quan hệ hiệu quả hơn khi… · ✓  dịch vụ · ✓  thị trường doanh nghiệp (B2B) · ⚠  quan hệ xây với một cá nhân · …nhưng rủi ro khi người đó rời đi — Buổi 8.
  - Chân slide: D03: Palmatier, Dant, Grewal & Evans (2006), Journal of Marketing, 70(4) — tổng hợp nhiều nghiên cứu (meta-analysis).
  - Ghi chú GV: Palmatier et al. (2006): hiệu quả khách quan chịu ảnh hưởng nhiều nhất từ chất lượng quan hệ (thước đo tổng hợp). Marketing quan hệ hiệu quả hơn trong dịch vụ và thị trường doanh nghiệp, và khi quan hệ xây với một cá nhân — mạnh nhưng rủi ro khi người đó rời đi (Buổi 8).
- **S9. Ở Việt Nam, thể diện quyết định cách nêu bất đồng**
  - Nội dung: “Quan hệ” trong kinh doanh Việt Nam gồm: · Thể diện · Có qua có lại · Tình cảm · Hàm ý (nhận định): nêu bất đồng riêng, đúng người, đúng lúc — nêu trước đám đông dễ biến thành xung đột không chức năng.
  - Chân slide: D06 → T17: Pham & Pham (2025), BIMTECH Business Perspectives. Hàm ý: nhận định của người soạn.
  - Ghi chú GV: Pham & Pham (2025): “quan hệ” gồm thể diện, có qua có lại, tình cảm. ⏎ Nhận định: vì thể diện, bất đồng nên được nêu riêng, đúng người, đúng lúc — nêu trước đám đông dễ biến thành xung đột không chức năng.
- **S10. Không phàn nàn có thể là thiếu niềm tin**
  - Nội dung: Hiểu lầm / “Xung đột chức năng = ít xung đột” · Sửa / Là bất đồng được giải quyết êm thấm nhờ có niềm tin · Hiểu lầm / “Khách hàng không phàn nàn = hài lòng” · Sửa / Có thể là thiếu niềm tin để nói thẳng
  - Ghi chú GV: Hiểu lầm: “Xung đột chức năng = ít xung đột” → là bất đồng được giải quyết êm thấm nhờ có niềm tin. ⏎ “Khách hàng không phàn nàn = hài lòng” → có thể là thiếu niềm tin để nói thẳng. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S11. Thực hành 1 · Chẩn đoán quan hệ Nova – An Phát**
  - Nội dung: Xếp vào Trust · Commitment · Functional conflict; đánh dấu + / – · 1 · 2 · 3 · 8’ · Thanh toán đúng hạn 4 năm liền · Livestream chậm 15’; chị Lan không nói với Nova, chỉ kể chị Hạnh · Chị Hạnh đề nghị ý tưởng cho chương trình cả năm · Chấm mỗi trụ cột 1–5. Trụ cột nào yếu nhất? Vì sao? · 4 · 5 · 6 · 7’ · Vẫn mời 2 agency khác chào giá “cho đúng quy trình” · Đổi kịch bản sát ngày: họp 30’, thống nhất được · Nova chưa được mời họp kế hoạch năm · Một việc Nova làm trong 1 tháng tới để củng cố trụ cột yếu nhất · 7 · 8 · 9 · 5’ · Chị Hạnh gửi số liệu tỷ lệ tham dự để Nova phân tích · Nova giấu việc nhà cung cấp AV đổi thiết bị · Nova đề nghị hợp đồng khung 2 năm; An Phát: “để xem”
  - Chân slide: Phiếu W04_activity_S3_chan_doan_quan_he.md · Thẻ bằng chứng GIẢ ĐỊNH.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút): 8 · 7 · 5. ⏎ GV hỏi: “Thẻ 8 làm yếu trụ cột nào — theo chữ nào trong định nghĩa?” (integrity). ⏎ Chốt: chẩn đoán bằng bằng chứng; integrity của agency là nền của trust; bất đồng không được nói ra (thẻ 2) là dấu hiệu thiếu xung đột chức năng.
- **S12. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S13. Đo chất lượng quan hệ bằng câu hỏi hai chiều**
  - Nội dung: Cùng 9 câu / thang 1–5 / → xem khoảng cách · Nova tự chấm · An Phát chấm · 1 = hoàn toàn không đồng ý · 5 = hoàn toàn đồng ý
  - Chân slide: Công cụ học tập của môn — không phải thang đo đã kiểm định.
  - Ghi chú GV: Nguyên tắc: hỏi cả hai phía (Nova tự đánh giá và An Phát đánh giá), cùng một bộ câu hỏi, rồi xem khoảng cách.
- **S14. Khoảng cách giữa hai phía quan trọng hơn điểm trung bình**
  - Nội dung: GIẢ ĐỊNH · khoảng cách · Trust · Nova  4,2 · 0,2 · An Phát  4,0 · Commitment · Nova  4,0 · 0,5 · An Phát  3,5 · Functional conflict · Nova  4,3 · 1,6 · An Phát  2,7 · Functional conflict lệch 1,6 điểm → cần nói chuyện, dù trung bình hai phía vẫn 3,5.
  - Chân slide: Số liệu minh họa GIẢ ĐỊNH.
  - Ghi chú GV: Ví dụ minh họa: Nova tự chấm Functional conflict 4,3 nhưng An Phát chấm 2,7 → khoảng cách 1,6 — tín hiệu cần nói chuyện, dù điểm trung bình hai phía vẫn 3,5. ⏎ Alt-text: biểu đồ thanh ngang, mỗi trụ cột có hai thanh (Nova, An Phát).
- **S15. Chín câu hỏi cho ba trụ cột**
  - Nội dung: Trust · Commitment · Functional conflict · T1. Bên kia làm đúng những gì đã cam kết. / T2. Khi có vấn đề, bên kia nói thật. / T3. Tôi có thể dựa vào bên kia mà không cần kiểm tra lại mọi thứ. · C1. Quan hệ này đáng để chúng tôi nỗ lực tối đa giữ gìn. / C2. Chúng tôi muốn tiếp tục làm việc cùng nhau nhiều năm. / C3. Chúng tôi sẵn sàng dành thời gian, nguồn lực riêng cho quan hệ này. · F1. Khi bất đồng, hai bên nói thẳng với nhau. / F2. Bất đồng thường được giải quyết êm thấm. / F3. Sau mỗi lần bất đồng, cách làm việc tốt hơn.
  - Chân slide: Công cụ học tập của môn, dựng từ định nghĩa D01 — không phải thang đo đã kiểm định.
  - Ghi chú GV: Dựng từ định nghĩa D01: T1 ↔ reliability, T2 ↔ integrity; C1 ↔ “maximum efforts”; F2 ↔ “resolved amicably”. ⏎ Chiếu suốt S6.
- **S16. Năm bước biến bất đồng thành xung đột chức năng**
  - Nội dung: 5 · 4 · 3 · Ghi lại, theo dõi / việc đã thống nhất · 2 · Cùng giải quyết / joint problem solving · 1 · Về vấn đề / không về con người · Nêu riêng, đúng người / giữ thể diện · Nêu sớm / trước khi thành bức xúc
  - Chân slide: Nhận định của người soạn, dựng từ D01, Y03 (Mohr & Spekman, 1994), D06.
  - Ghi chú GV: Chiếu suốt S6 — người quan sát ghi lại theo năm bước này. ⏎ Bước 4: joint problem solving — Mohr & Spekman (1994).
- **S17. Khi bất đồng không được giải quyết, cả mạng lưới trả giá**
  - Nội dung: CASE THẬT · 28/12/2025 · “Về đây bốn cánh chim trời” · Bất đồng thanh toán / giữa nghệ sĩ và nhà sản xuất · Không được giải quyết / theo báo chí đưa tin · Show không diễn ra / mọi bên chịu thiệt · Ví dụ ngược của functional conflict: niềm tin mất, quan hệ vỡ công khai.
  - Chân slide: D07 → Y09: Báo Văn hóa (3/1/2026). Chỉ nêu sự kiện đã đưa tin, không quy lỗi cá nhân.
  - Ghi chú GV: “Về đây bốn cánh chim trời” (28/12/2025): theo báo chí đưa tin, tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất không được giải quyết, show không diễn ra, mọi bên chịu thiệt. ⏎ Chỉ nêu sự kiện đã đưa tin. Không quy lỗi cá nhân.
- **S18. Trao đổi rời rạc khác trao đổi quan hệ**
  - Nội dung: Trao đổi rời rạc · Trao đổi quan hệ · mỗi lần mua là một sự kiện riêng · các lần trao đổi nối thành một quan hệ liên tục, phát triển qua giai đoạn · Các giai đoạn phát triển quan hệ key account: McDonald et al. (1997) — học tiếp ở Buổi 8.
  - Chân slide: D04: Dwyer, Schurr & Oh (1987), Journal of Marketing, 51(2) · D05: McDonald, Millman & Rogers (1997).
  - Ghi chú GV: Dwyer, Schurr & Oh (1987): phần lớn nghiên cứu và chiến lược coi trao đổi mua – bán là sự kiện rời rạc, không phải quan hệ liên tục; bài đề xuất khung phát triển quan hệ mua – bán. ⏎ McDonald et al. (1997) mô tả các giai đoạn phát triển quan hệ key account. Không nêu tên các giai đoạn — sẽ bổ sung sau khi kiểm tra toàn văn. [VERIFY]
- **S19. Với agency, đi từ giao dịch sang đối tác thay đổi năm điều**
  - Nội dung: Giao dịch · Quan hệ đối tác · Đấu thầu từng sự kiện · Hợp đồng khung nhiều năm · Brief → đề xuất → làm → xong · Cùng lập kế hoạch năm, đánh giá chung · Một đầu mối · Nhiều đầu mối nhiều cấp (Buổi 8) · Thông tin tối thiểu · Chia sẻ mục tiêu, dữ liệu · Đo bằng “sự kiện suôn sẻ” · Đo bằng chất lượng quan hệ + kết quả kinh doanh
  - Chân slide: Nhận định của người soạn.
  - Ghi chú GV: Dùng bảng này ở Bước 3 của Thực hành 2 (lộ trình).
- **S20. Thời gian quan hệ tự nó tạo giá trị**
  - Nội dung: BẰNG CHỨNG LỊCH SỬ · Việt Nam, thập niên 1990 / quan hệ giao dịch càng lâu → tín dụng thương mại càng lớn · Tín dụng thương mại → · Thời gian quan hệ tự nó tạo niềm tin và giá trị kinh tế. · Thời gian quan hệ →
  - Chân slide: D06 → T18: McMillan & Woodruff (1999), The Quarterly Journal of Economics, 114(4).
  - Ghi chú GV: McMillan & Woodruff (1999): ở Việt Nam thập niên 1990, quan hệ giao dịch càng lâu, tín dụng thương mại càng lớn. ⏎ Bằng chứng lịch sử — dùng để hiểu gốc rễ: thời gian quan hệ tự nó tạo niềm tin và giá trị kinh tế. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S21. Thực hành 2 · Cuộc trò chuyện sau gala**
  - Nội dung: Tuần sau gala, Nova nghe gián tiếp: chị Lan không hài lòng vì livestream chậm 15 phút — lần thứ hai liên tiếp. Chị Hạnh chưa nói gì. Chị Thảo (KAMer Nova) hẹn gặp riêng chị Hạnh 20 phút. · Chị Thảo · KAMer Nova / Nêu vấn đề trước, không đổ lỗi, cùng tìm giải pháp; đề xuất một bước dài hạn · Chị Hạnh · An Phát / Hài lòng chung nhưng ngại nói thẳng… (thẻ úp) · Người quan sát / Ghi theo 5 bước: sớm · riêng · về vấn đề · cùng giải quyết · ghi lại · Chuẩn bị: dự đoán F1–F3 hai phía; câu mở đầu + 2 phương án · Đóng vai bộ ba: diễn 6’, nhận xét 3’ · Lộ trình 3 bước giao dịch → đối tác: làm gì · với ai · dấu hiệu · 10’ · 10’ · 7’
  - Chân slide: Phiếu W04_activity_S6_cuoc_tro_chuyen_sau_gala.md · Tình huống GIẢ ĐỊNH.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 · 10 · 10 · 7. Phát thẻ vai, thẻ chị Hạnh úp (chỉ người đóng vai đọc: đang bị ông Tuấn hỏi “có nên thử agency khác không”). ⏎ Nếu chị Thảo đổ lỗi cho nhà cung cấp AV → hỏi người quan sát: “Trong mắt An Phát, lỗi của ai?” (Buổi 10). ⏎ Nếu chị Thảo xin lỗi rồi dừng → “Giải pháp là gì? Ai làm, khi nào?” ⏎ Lộ trình toàn “chăm sóc khách tốt hơn” → yêu cầu bước cụ thể.
- **S22. Ba ý của Buổi 4**
  - Nội dung: Ba trụ cột: trust (tin cậy + chính trực), commitment (đáng nỗ lực tối đa để giữ), functional conflict (bất đồng giải quyết êm thấm — kết quả của trust). · 1 · Đo: hỏi cả hai phía, xem khoảng cách; bất đồng nêu sớm, riêng, cùng giải quyết. · 2 · Từ giao dịch sang quan hệ: hợp đồng khung, cùng lập kế hoạch, nhiều đầu mối, chia sẻ thông tin. · 3 · Stakeholder Management Plan: đo nhanh ba trụ cột với khách hàng dự án cũ (cảm nhận + bằng chứng) — nền cho phần B. Value Opportunities.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ SMP: đo nhanh ba trụ cột với khách hàng dự án cũ (theo cảm nhận của nhóm + bằng chứng) — nền cho phần B. Value Opportunities.
- **S23. Phiếu kiểm tra cuối giờ**
  - Nội dung: Viết lại bằng lời của bạn: functional conflict là gì, và vì sao nó cần trust? · 1 · Với khách hàng trong dự án cũ, trụ cột nào (trust, commitment, functional conflict) yếu nhất? Bằng chứng? · 2 · Buổi 5: quan hệ tốt là nền, nhưng khách hàng ở lại vì giá trị — xây đề xuất giá trị và cùng khách hàng tạo ra giá trị.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. ⏎ Cần xem: (a) không hiểu nhầm functional conflict là “không có xung đột”; (b) có bằng chứng, không chỉ cảm nhận. ⏎ Câu nối Buổi 5: “Quan hệ tốt là nền. Nhưng khách hàng ở lại vì giá trị. Buổi sau: xây đề xuất giá trị và cùng khách hàng tạo ra giá trị.”
- **S24. Tài liệu tham khảo**
  - Nội dung: D01 · Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. Journal of Marketing, 58(3), 20–38. https://doi.org/10.1177/002224299405800302 · D02 · Anderson, J. C., & Narus, J. A. (1990). A model of distributor firm and manufacturer firm working partnerships. Journal of Marketing, 54(1), 42–58. · D03 · Palmatier, R. W., Dant, R. P., Grewal, D., & Evans, K. R. (2006). Factors influencing the effectiveness of relationship marketing: A meta-analysis. Journal of Marketing, 70(4), 136–153. · D04 · Dwyer, F. R., Schurr, P. H., & Oh, S. (1987). Developing buyer-seller relationships. Journal of Marketing, 51(2), 11–27. · D05 · McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757. · D06 · Pham, H. H., & Pham, N. C. (2025). Marketing insights from Quan He. BIMTECH Business Perspectives · McMillan, J., & Woodruff, C. (1999). Interfirm relationships and informal credit in Vietnam. QJE, 114(4), 1285–1320. · D07 · Báo Văn hóa. (2026, January 3). Giữa hợp đồng và trách nhiệm, ranh giới nào cho nghệ sĩ?
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-04_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 5 — CVP & Value Co-creation

| | |
|---|---|
| Mục tiêu | • "Yêu cầu 5.1: **cấu trúc CVP — Future state, Offering (7Ps), Value appraisal.**"<br>• "Yêu cầu 5.2 và 5.3: **năm nguồn giá trị** và **thực hành đồng kiến tạo** (co-diagnosis, co-ideation, co-design, co-testing)." |
| Đoạn | Mở đầu · 5.1 Cấu trúc CVP · 5.2 Năm nguồn giá trị · 5.3 Đồng kiến tạo · Tổng kết |
| Số slide · trạng thái | 25 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W05_CVP_Value_Cocreation.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 5 / 15 · Value appraisal · Quản trị mối quan hệ trong tổ chức sự kiện · Future state / của khách hàng · Offering · 7Ps / của agency · CVP & Value Co-creation · Phần 2 · Quản trị khách hàng trọng điểm — buổi 4/7 / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · co-diagnosis · ideation · design · testing
  - Ghi chú GV: Slide 1. Buổi 5 — Nova xây đề xuất giá trị cho An Phát và cùng An Phát tạo giá trị. ⏎ Alt-text: sơ đồ cây cầu — bờ trái Future state, bờ phải Offering 7Ps, mặt cầu Value appraisal; bên dưới bốn chấm của bốn thực hành đồng kiến tạo.
- **S2. Hồ sơ năng lực nói về Nova, đề xuất giá trị nói về khách hàng**
  - Nội dung: Đọc xong, chị Hạnh biết An Phát sẽ được gì không? · HỒ SƠ NĂNG LỰC NOVA · Sáng tạo – Chuyên nghiệp – Tận tâm · Đó là nói về Nova. / Đề xuất giá trị phải nói về An Phát — và tốt nhất là nói bằng con số. · Hơn 10 năm kinh nghiệm, 500 sự kiện. · Nova · Nova · Nova
  - Chân slide: Hồ sơ năng lực GIẢ ĐỊNH.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu trang đầu hồ sơ năng lực Nova (giả định). ⏎ Giơ tay: “Đọc xong, chị Hạnh biết An Phát sẽ được gì không?” ⏎ Chốt: “Đó là nói về Nova. Đề xuất giá trị phải nói về An Phát — và tốt nhất là nói bằng con số.”
- **S3. Phần lớn CVP tuyên bố mà không chứng minh**
  - Nội dung: “marketing puffery” / lời quảng cáo phóng đại — khách hàng nghe xong bỏ qua · Tuyên bố / “tiết kiệm”, “hiệu quả”, “chuyên nghiệp” · Chứng minh / bằng số liệu, cách đo, so với chi phí
  - Chân slide: E02: Anderson, Narus & van Rossum (2006), Harvard Business Review, 84(3).
  - Ghi chú GV: Anderson, Narus & van Rossum (2006): không có sự thống nhất CVP là gì; phần lớn CVP tuyên bố tiết kiệm và lợi ích mà không chứng minh, nên khách hàng coi là “marketing puffery”.
- **S4. Có ba kiểu CVP — nên dùng resonating focus**
  - Nội dung: [VERIFY] · ✗ · ~ · ✓ · All benefits · Favorable points of difference · Resonating focus · Liệt kê mọi lợi ích · Điểm khác biệt có lợi so với đối thủ · 1–2 điểm khác biệt tạo giá trị lớn nhất cho khách hàng · Dễ “tuyên bố lợi ích” không có thật với khách hàng · Khác biệt chưa chắc có giá trị với khách hàng này · Cần hiểu sâu khách hàng — nên dùng
  - Chân slide: E02: Anderson, Narus & van Rossum (2006) [VERIFY: ba kiểu CVP mới đọc qua nguồn thứ cấp].
  - Ghi chú GV: [VERIFY: ba kiểu CVP mới đọc qua nguồn thứ cấp] ⏎ Resonating focus: 1–2 điểm khác biệt tạo giá trị lớn nhất cho khách hàng — cần hiểu sâu khách hàng (Buổi 3).
- **S5. CVP là đóng góp vào lợi nhuận của khách hàng, quy ra tiền**
  - Nội dung: “the translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.” / — Malcolm McDonald (E04) · offers · monetary terms · customer’s profitability · những gì agency đưa · quy ra tiền · lợi nhuận của khách hàng
  - Chân slide: E04: McDonald, How to create financially quantified value propositions in six (actionable!) steps, SAMA.
  - Ghi chú GV: Định nghĩa McDonald: CVP là chuyển các đề xuất của nhà cung cấp thành giá trị tiền, chứng minh đóng góp vào lợi nhuận của khách hàng.
- **S6. CVP có ba phần: Future state – Offering – Value appraisal**
  - Nội dung: Định nghĩa làm việc của môn · Value appraisal / được bao nhiêu, đo thế nào, so với chi phí? · Future state / khách hàng muốn ở đâu sau 1–3 năm? · Offering · 7Ps / agency đưa gì? · Value appraisal là cây cầu — và là câu hội đồng sẽ hỏi ở Buổi 14.
  - Chân slide: Định nghĩa làm việc của môn — nguồn gốc cấu trúc trong đề cương chưa tìm được bản công khai.
  - Ghi chú GV: Nói: “Future state là của An Phát. Offering là của Nova. Value appraisal là cây cầu — và là câu hội đồng sẽ hỏi ở Buổi 14.” ⏎ Alt-text: hai bờ nối bằng cầu — bờ trái Future state (của khách hàng), bờ phải Offering 7Ps (của agency), mặt cầu Value appraisal.
- **S7. Offering của dịch vụ có 7Ps**
  - Nội dung: P · P · P · P · P · P · P · People · Process · Physical evidence · Product · Price · Place · Promotion · 4Ps của sản phẩm · + 3Ps của dịch vụ — nhấn với agency sự kiện · Dịch vụ của Nova là con người và quy trình — An Phát thấy gì ở đó?
  - Chân slide: E03: Booms & Bitner (1981), Marketing of services, AMA.
  - Ghi chú GV: 7Ps theo Booms & Bitner (1981) — marketing dịch vụ. Agency sự kiện là dịch vụ nên People, Process, Physical evidence đặc biệt quan trọng.
- **S8. CVP của Nova cho An Phát**
  - Nội dung: GIẢ ĐỊNH · Future state  An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP trong bối cảnh tín dụng bị giới hạn · Product / Chương trình khách hàng cả năm (hội thảo quý + gala) · Price / Gói giá theo năm · Place / Offline + livestream 80 chi nhánh · Promotion / Thư mời, bài chuyên gia · People / Đội Nova cố định · Process / Quy trình duyệt, đánh giá chung · Physical evidence / Không gian, ảnh, báo cáo · Offering · 7Ps · Value appraisal  tỷ lệ CEO đến trực tiếp · số cuộc hẹn kinh doanh sau sự kiện (An Phát báo) · chi phí gộp so với từng sự kiện rời
  - Chân slide: Ví dụ GIẢ ĐỊNH; bối cảnh tín dụng từ Buổi 3 (C05).
  - Ghi chú GV: Future state nối Buổi 3: tín dụng bị giới hạn → An Phát cần giữ khách doanh nghiệp VIP bằng giá trị ngoài lãi suất.
- **S9. Value appraisal là câu hội đồng sẽ hỏi**
  - Nội dung: “An Phát được bao nhiêu — và đo thế nào?” · Chỉ số yếu / “khách hài lòng” — Buổi 8 sẽ học ROI 6 cấp · Chỉ số mạnh / tỷ lệ CEO đến trực tiếp · số cuộc hẹn sau sự kiện · chi phí so sánh
  - Ghi chú GV: Nối Buổi 14 (bảo vệ kế hoạch): hội đồng sẽ hỏi “An Phát được bao nhiêu, đo thế nào?”. Không có value appraisal thì CVP chỉ là lời hứa. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S10. Thực hành 1 · Viết lại CVP của Nova cho An Phát**
  - Nội dung: CVP hiện tại / “Nova Events mang đến cho Ngân hàng An Phát: ý tưởng sáng tạo độc đáo, đội ngũ chuyên nghiệp hơn 10 năm kinh nghiệm, hệ thống âm thanh ánh sáng hiện đại, giá cả cạnh tranh, phục vụ tận tâm 24/7, mạng lưới nhà cung cấp rộng khắp, và kinh nghiệm tổ chức hơn 500 sự kiện.” · Kiểu CVP nào? Gạch chân câu nói về Nova · 4’ · Viết lại: Future state · 7Ps · 2 chỉ số value appraisal; in đậm 1–2 điểm trọng tâm · 12’ · Bối cảnh An Phát (Buổi 3): tín dụng 2026 ~15%; đối thủ mở hội thảo quý; khách DN lo chi phí vốn, dòng tiền; chủ DN trẻ; livestream 80 chi nhánh từng chậm. · Một câu chị Hạnh có thể nói lại với ông Tuấn · 4’
  - Chân slide: Phiếu W05_activity_S3_viet_lai_cvp.md · CVP GIẢ ĐỊNH.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút): 4 · 12 · 4. ⏎ GV hỏi: “Future state này là của An Phát hay của Nova?” ⏎ Nếu Value appraisal = “khách hài lòng” → gợi: tỷ lệ CEO đến trực tiếp, số cuộc hẹn sau sự kiện. ⏎ Nếu 7Ps bỏ trống People/Process → “Dịch vụ của Nova là con người và quy trình — An Phát thấy gì ở đó?”
- **S11. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S12. Giá trị có năm nguồn**
  - Nội dung: Định nghĩa làm việc của môn · ↑ · ↓ · ◆ · ? · ♥ · Top-line · Bottom-line · HSSEQ · Advisory · Customer’s customer · tăng doanh thu · giảm / tránh chi phí · health · safety · security · environment · quality · tư vấn, tri thức · giá trị cho khách của khách hàng
  - Chân slide: Định nghĩa làm việc của môn. Gần nhất: McDonald (E04) — tăng giá trị, giảm chi phí, tránh chi phí, đóng góp cảm xúc.
  - Ghi chú GV: Năm nguồn là định nghĩa làm việc của môn — nói rõ với lớp. Nguồn gần nhất tìm được: McDonald (E04) — tăng giá trị, giảm chi phí, tránh chi phí, đóng góp cảm xúc — tương ứng một phần với top-line và bottom-line (nhận định). ⏎ Alt-text: năm biểu tượng tròn, mỗi biểu tượng một nguồn giá trị.
- **S13. Top-line và bottom-line: tăng doanh thu, giảm chi phí cho khách hàng**
  - Nội dung: Top-line / giúp khách hàng tăng doanh thu · Bottom-line / giúp khách hàng giảm / tránh chi phí · ↑ · ↓ · Với An Phát: Khách doanh nghiệp gắn bó hơn → giao dịch với An Phát tăng · Với An Phát: Gộp sự kiện cả năm, đàm phán nhà cung cấp · Buổi 8 · cấp 4 ROI · Buổi 7 · 10
  - Chân slide: Ví dụ GIẢ ĐỊNH; nối Buổi 7, 8, 10.
  - Ghi chú GV: Top-line: khách DN gắn bó hơn → giao dịch với An Phát tăng (cấp 4 ROI — Buổi 8). ⏎ Bottom-line: gộp sự kiện cả năm, đàm phán nhà cung cấp (Buổi 7, 10).
- **S14. Năm nguồn giá trị với Nova – An Phát**
  - Nội dung: Top-line · Khách DN gắn bó hơn → giao dịch với An Phát tăng (Buổi 8) · Bottom-line · Gộp sự kiện cả năm, đàm phán nhà cung cấp (Buổi 7, 10) · HSSEQ · Bảo vệ dữ liệu khách mời; sự kiện xanh; chất lượng ổn định; giảm rủi ro uy tín · Advisory · Nova chia sẻ insight về khách VIP, xu hướng sự kiện B2B · Customer’s customer · 600 khách VIP được kiến thức, kết nối, trải nghiệm → An Phát được lợi
  - Chân slide: Ví dụ GIẢ ĐỊNH · định nghĩa làm việc của môn.
  - Ghi chú GV: Chiếu suốt S6 — các nhóm gắn nguồn giá trị chính cho từng bước đồng kiến tạo.
- **S15. HSSEQ: an toàn, an ninh, môi trường, chất lượng**
  - Nội dung: H · Health · S · Safety · S · Security · E · Environment · Q · Quality · Bảo vệ dữ liệu khách mời / security — danh sách khách của ngân hàng · Sự kiện xanh / environment — giảm rác, vật liệu tái sử dụng · Chất lượng ổn định / quality — livestream không lỗi, giảm rủi ro uy tín · Buổi 9 (rủi ro uy tín) · Buổi 11 (sự kiện bền vững)
  - Chân slide: Ví dụ: nhận định của người soạn; nối Buổi 9, 11.
  - Ghi chú GV: Không đi sâu an toàn đám đông — ngoài phạm vi buổi này. ⏎ Với ngân hàng, bảo vệ dữ liệu khách mời là giá trị HSSEQ rõ nhất.
- **S16. Advisory là nguồn giá trị agency hay quên**
  - Nội dung: Nova biết điều An Phát chưa biết: · ? · Insight về khách VIP / họ đến vì gì, bỏ về lúc nào, thích gì · Xu hướng sự kiện B2B / định dạng mới, công nghệ, chi phí · Kinh nghiệm từ ngành khác / điều đã thử ở nơi khác · Chia sẻ tri thức là giá trị — không chỉ “làm sự kiện”.
  - Ghi chú GV: Hỏi: “Nguồn nào agency sự kiện hay quên nhất?” — Gợi ý: advisory. ⏎ Nova làm sự kiện cho nhiều ngân hàng, nhiều ngành → có insight về khách VIP mà An Phát không có.
- **S17. Giá trị cho khách của khách hàng**
  - Nội dung: VÍ DỤ TƯƠNG TỰ · Sự kiện / concert G-DRAGON · Ngân hàng / VPBank · Khách của ngân hàng / chủ thẻ — quyền mua vé sớm · Với An Phát: 600 khách VIP được kiến thức, kết nối, trải nghiệm → khách gắn bó hơn → An Phát được lợi.
  - Chân slide: E07 → U10 (Buổi 9): VnExpress (5/10/2025) [nội dung được tài trợ]. Ví dụ TƯƠNG TỰ — không phải quan hệ agency.
  - Ghi chú GV: VPBank dành quyền mua vé sớm concert G-DRAGON cho chủ thẻ — ngân hàng tạo giá trị cho khách của mình qua một sự kiện. Tương tự; không phải quan hệ agency.
- **S18. Đồng kiến tạo là khách hàng cùng làm**
  - Nội dung: Thiết kế CHO khách hàng · Thiết kế CÙNG khách hàng · Nova · An Phát · Nova làm · An Phát duyệt · ✗  khách hàng chỉ duyệt · ✓  khách hàng cùng làm từ đầu
  - Chân slide: E05: Marcos-Cuevas, Nätti, Palo & Baumann (2016), Industrial Marketing Management, 56.
  - Ghi chú GV: Nova không thiết kế cho An Phát mà cùng An Phát. Hiểu lầm hay gặp: mọi bước chỉ Nova làm, An Phát “duyệt”.
- **S19. Bốn thực hành: co-diagnosis, co-ideation, co-design, co-testing**
  - Nội dung: Định nghĩa (nguyên văn) · Với An Phát (ví dụ) · Co-diagnosis · “Collecting and organizing information for collaborative use” · Cùng phân tích khảo sát khách mời các năm · Co-ideation · “Generating and suggesting ideas, communicating and sharing, engaging” · Workshop ý tưởng với chị Hạnh, chị Vy · Co-design · “Developing concepts and knowledge” · Cùng thiết kế hành trình khách VIP · Co-testing · “Prototyping and improving the offering, giving feedback” · Thí điểm một hội thảo quý; chạy thử livestream với chị Lan
  - Chân slide: E05: Marcos-Cuevas et al. (2016) — định nghĩa nguyên văn, đã đọc toàn văn. Ví dụ An Phát: GIẢ ĐỊNH.
  - Ghi chú GV: Chiếu suốt S6. Định nghĩa là nguyên văn Marcos-Cuevas et al. (2016).
- **S20. Ba nhóm: linking – materializing – institutionalizing**
  - Nội dung: Institutionalizing / embedding — quy tắc, chuẩn mực → đồng kiến tạo thành cách làm việc · “sustained purposeful engagement” / gắn kết có mục đích, bền bỉ — cơ chế chung của cả ba nhóm · Materializing / co-design · co-testing · co-launching — tạo ra sản phẩm · Linking / co-diagnosis · co-ideation · co-evaluation — huy động kết nối · Bốn thực hành của đề cương nằm ở hai tầng dưới.
  - Chân slide: E05: Marcos-Cuevas et al. (2016), Industrial Marketing Management, 56, 97–107.
  - Ghi chú GV: Linking (huy động kết nối): co-diagnosis, co-ideation, co-evaluation. Materializing (tạo ra sản phẩm): co-design, co-testing, co-launching. Institutionalizing: embedding — xây quy tắc, chuẩn mực để đồng kiến tạo thành cách làm việc. ⏎ Cơ chế chung: “sustained purposeful engagement”. ⏎ Alt-text: sơ đồ ba tầng chồng lên nhau.
- **S21. Điều kiện đầu tiên là cùng mục đích**
  - Nội dung: alignment of purpose  —  hai bên cùng mục tiêu · Tốn công → dành cho Key Account / nối Buổi 2: chỉ chọn tối đa hai Key Account · Techcombank: nhà tài trợ → đồng đầu tư / đồng kiến tạo ở mức chia sẻ rủi ro – lợi ích (ví dụ tương tự)
  - Chân slide: Blog Cranfield (Marcos) · E07 → U08 (Buổi 9): Znews (20/1/2025). Ví dụ TƯƠNG TỰ.
  - Ghi chú GV: Blog Cranfield (Marcos): điều kiện đầu tiên là alignment of purpose — hai bên cùng mục tiêu. Đồng kiến tạo tốn công, nên dành cho Key Account (nối Buổi 2). ⏎ Ví dụ thật: Techcombank từ nhà tài trợ trở thành đồng đầu tư — đồng kiến tạo ở mức chia sẻ rủi ro – lợi ích. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S22. Thực hành 2 · Kế hoạch đồng kiến tạo với An Phát**
  - Nội dung: Chị Hạnh đồng ý thử chương trình khách hàng cả năm thay cho một gala; muốn An Phát tham gia từ đầu nhưng lo tốn thời gian đội An Phát. Có thể tham gia: chị Hạnh, chị Vy, chị Lan, anh Khoa, một nhóm nhỏ khách VIP. · Bước · Làm gì · Ai · bao lâu · Đầu ra · Nguồn giá trị · Co-diagnosis · Co-ideation · Co-design · Co-testing · Kế hoạch 4 bước + 1 điều kiện thành công · Xoay trạm · vai chị Hạnh · 🟨 câu hỏi · 🟥 lo ngại · Về bàn, sửa một bước · 13’ · 2×4’ · 6’
  - Chân slide: Phiếu W05_activity_S6_dong_kien_tao.md · Tình huống GIẢ ĐỊNH.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 · 13 · 8 · 6. Chỉ slide bốn định nghĩa và slide năm nguồn. ⏎ GV hỏi: “Co-diagnosis dùng thông tin gì của An Phát?” ⏎ Nếu mọi bước chỉ Nova làm → “Ở đâu An Phát cùng làm?” ⏎ Nếu mời khách VIP khảo sát mà không nói đến đồng ý → “Dữ liệu khách của ngân hàng — ai đồng ý, bảo vệ thế nào?” (HSSEQ)
- **S23. Ba ý của Buổi 5**
  - Nội dung: CVP = Future state (của khách hàng) + Offering 7Ps (của agency) + Value appraisal (giá trị có số); dùng resonating focus. · 5.1 · Tìm giá trị ở năm nguồn — đừng quên advisory và khách của khách hàng. · 5.2 · Đồng kiến tạo qua co-diagnosis → co-ideation → co-design → co-testing, với cùng mục đích. · 5.3 · Stakeholder Management Plan: đây là phần C. Value Propositions cho khách hàng từ dự án cũ của nhóm.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ SMP: đây là phần C. Value Propositions (Buổi 13).
- **S24. Phiếu kiểm tra cuối giờ**
  - Nội dung: Viết một câu CVP cho khách hàng dự án cũ của nhóm theo kiểu resonating focus. · 1 · Nguồn giá trị nào (trong năm nguồn) nhóm chưa từng nghĩ tới với khách hàng đó? · 2 · Buổi 6: giá trị cho khách hàng phải đi cùng giá trị cho agency — khách hàng này đáng bao nhiêu với Nova (CLV), và phục vụ họ tốn bao nhiêu (cost-to-serve)?
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. ⏎ Cần xem: (a) CVP nói về giá trị cho khách hàng, có 1–2 điểm trọng tâm; (b) SV nhận ra advisory hoặc customer’s customer. ⏎ Câu nối Buổi 6: “Giá trị cho khách hàng phải đi cùng giá trị cho agency. Buổi sau: khách hàng này đáng bao nhiêu với Nova (CLV), và phục vụ họ tốn bao nhiêu (cost-to-serve)?”
- **S25. Tài liệu tham khảo**
  - Nội dung: E01 · Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). Implementing key account management. Kogan Page. (chương 5, 6) · E02 · Anderson, J. C., Narus, J. A., & van Rossum, W. (2006). Customer value propositions in business markets. Harvard Business Review, 84(3), 90–99. · E03 · Booms, B. H., & Bitner, M. J. (1981). Marketing strategies and organization structures for service firms. In J. H. Donnelly & W. R. George (Eds.), Marketing of services (pp. 47–51). AMA. · E04 · McDonald, M. (n.d.). How to create financially quantified value propositions in six (actionable!) steps. Strategic Account Management Association. · E05 · Marcos-Cuevas, J., Nätti, S., Palo, T., & Baumann, J. (2016). Value co-creation practices and capabilities: Sustained purposeful engagement across B2B systems. Industrial Marketing Management, 56, 97–107. · E06 · Payne, A. F., Storbacka, K., & Frow, P. (2008). Managing the co-creation of value. Journal of the Academy of Marketing Science, 36(1), 83–96. · E07 · Xem U08, U10 (Buổi 9): Znews (2025, January 20) — Techcombank; VnExpress (2025, October 5) — VPBank, G-DRAGON [nội dung được tài trợ].
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-05_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 6 — Financial Acumen in KAM

| | |
|---|---|
| Mục tiêu | • "Yêu cầu 6.1: **tính CLV để định hướng dài hạn.**"<br>• "Yêu cầu 6.2: **phân tích cost-to-serve và ma trận biên lợi nhuận** để bảo đảm **lợi ích hai phía và quan hệ công bằng.**" |
| Đoạn | Mở đầu · 6.1 CLV · 6.2 Cost-to-serve · Ma trận · công bằng · Tổng kết |
| Số slide · trạng thái | 24 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W06_Financial_Acumen_KAM.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 6 / 15 · Passive · Carriage trade · Quản trị mối quan hệ trong tổ chức sự kiện · Biên lợi nhuận gộp → · Bargain basement · Aggressive · Financial Acumen in KAM · Phần 2 · Quản trị khách hàng trọng điểm — buổi 5/7 / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Cost-to-serve →
  - Ghi chú GV: Slide 1. Buổi 6 — Nova tính giá trị của khách hàng với Nova và chi phí phục vụ, để quan hệ công bằng hai chiều. ⏎ Alt-text: ma trận biên lợi nhuận gộp × cost-to-serve với năm chấm tròn — năm khách hàng của Buổi 2, kích thước theo doanh thu.
- **S2. Doanh thu lớn nhất chưa chắc đáng giá nhất**
  - Nội dung: Địa ốc Sông Xanh · Ngân hàng An Phát · 3,5 tỷ · 2,3 tỷ · doanh thu/năm · doanh thu/năm · Khách hàng nào đáng giá hơn với Nova? · lãi bao nhiêu? · tốn bao nhiêu để phục vụ? · ở lại bao lâu?
  - Chân slide: Số liệu GIẢ ĐỊNH — dùng lại năm khách hàng của Buổi 2.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu: “Địa ốc Sông Xanh: doanh thu cho Nova 3,5 tỷ/năm. Ngân hàng An Phát: 2,3 tỷ/năm.” ⏎ Giơ tay: “Khách hàng nào đáng giá hơn với Nova?” ⏎ Chốt: “Doanh thu chỉ là một phần. Cần biết: lãi bao nhiêu, tốn bao nhiêu để phục vụ, và ở lại bao lâu. Hôm nay ta tính.”
- **S3. CLV giúp phân bổ nguồn lực cho quan hệ dài hạn**
  - Nội dung: CLV / customer lifetime value — giá trị trọn đời của một khách hàng · Customer equity / tổng CLV của mọi khách hàng · CLV dùng để phân bổ nguồn lực cho… · Thu hút · Giữ chân · Bán thêm · Nối Buổi 2: chọn Key Account là quyết định phân bổ nguồn lực.
  - Chân slide: F01: Gupta et al. (2006), Journal of Service Research, 9(2), 139–155.
  - Ghi chú GV: Gupta et al. (2006): khi doanh thu đến từ quan hệ dài hạn, marketing nhằm tối đa hóa CLV và customer equity (tổng CLV của mọi khách hàng); CLV dùng để phân bổ nguồn lực cho thu hút, giữ chân, bán thêm. ⏎ Nối Buổi 2: chọn Key Account là quyết định phân bổ nguồn lực.
- **S4. CLV tính trên đóng góp ròng, không trên doanh thu**
  - Nội dung: Doanh thu · × biên gộp 18% · − cost-to-serve · m · đóng góp ròng · 2.300 · = 414 · 80 · = 334 · triệu/năm · triệu/năm · triệu/năm · triệu/năm · m = lợi nhuận gộp − cost-to-serve riêng của khách hàng / Doanh thu không phải tiền Nova giữ lại.
  - Chân slide: Ví dụ An Phát: GIẢ ĐỊNH.
  - Ghi chú GV: m = lợi nhuận gộp − cost-to-serve riêng của khách hàng. Với An Phát: 2.300 × 18% = 414; 414 − 80 = 334 triệu. ⏎ Lỗi hay gặp ở Thực hành 1: dùng doanh thu thay cho m → hỏi “Nova giữ lại bao nhiêu sau khi trả nhà cung cấp và chi phí phục vụ?”
- **S5. Công thức đơn giản: đóng góp × tỷ lệ giữ chân, chiết khấu về hiện tại**
  - Nội dung: [VERIFY] · CLV ≈ Σt = 1…T   m × r(t − 1)  /  (1 + d)t · m · r · d · T · đóng góp ròng mỗi năm · tỷ lệ giữ chân · tỷ lệ chiết khấu · số năm xem xét · lợi nhuận gộp − cost-to-serve · xác suất tái ký mỗi năm; năm 1 coi như chắc chắn · giá trị tiền theo thời gian · ví dụ 5 năm
  - Chân slide: Dạng học tập [VERIFY] · F02: Berger & Nasr (1998) trình bày nhiều mô hình CLV.
  - Ghi chú GV: [VERIFY] Công thức là dạng đơn giản cho học tập. Berger & Nasr (1998) trình bày nhiều mô hình CLV cho các trường hợp khác nhau; ta dùng dạng đơn giản nhất. ⏎ Năm 1 coi như chắc chắn (r^0 = 1).
- **S6. CLV 5 năm của An Phát khoảng 926 triệu**
  - Nội dung: GIẢ ĐỊNH · Năm · Tính · Giá trị hiện tại · 298,2 · 1 · 334 / 1,12 · 298,2 · 226,3 · 2 · 334 × 0,85 / 1,12² · 226,3 · 171,8 · 3 · 334 × 0,85² / 1,12³ · 171,8 · 130,4 · 4 · 334 × 0,85³ / 1,12⁴ · 130,4 · 98,9 · 5 · 334 × 0,85⁴ / 1,12⁵ · 98,9 · CLV 5 năm  ≈ 926 triệu · Năm 1 · Năm 2 · Năm 3 · Năm 4 · Năm 5
  - Chân slide: GIẢ ĐỊNH: m = 334 triệu · r = 85% · d = 12% · T = 5. Tính cùng lớp.
  - Ghi chú GV: Tính cùng lớp từng dòng. ⏎ Hỏi: “Nếu r giảm còn 70%, CLV giảm nhiều hay ít?” — trả lời ở slide sau. ⏎ Alt-text: bảng năm dòng và biểu đồ cột giá trị hiện tại giảm dần qua năm năm.
- **S7. Tỷ lệ giữ chân thay đổi CLV rất mạnh**
  - Nội dung: r = 85% · CLV ≈ 926 triệu · r = 70% · CLV ≈ 719 triệu · 298,2 · 298,2 · 226,3 · 186,4 · 171,8 · 130,4 · 116,5 · 98,9 · 72,8 · 45,5 · Giữ chân giảm 15 điểm → CLV giảm ≈ 207 triệu (≈ 22%).
  - Chân slide: GIẢ ĐỊNH: m = 334 triệu · d = 12% · T = 5. Tính theo công thức slide trước.
  - Ghi chú GV: r = 85% → CLV ≈ 926 triệu; r = 70% → CLV ≈ 719 triệu: giảm khoảng 207 triệu (≈ 22%) chỉ vì tỷ lệ tái ký giảm 15 điểm. ⏎ Chốt: “Rất nhiều. Vì thế giữ chân — chất lượng quan hệ ở Buổi 4 — là tiền thật.”
- **S8. Quan hệ tốt là tiền thật**
  - Nội dung: Chất lượng quan hệ / trust · commitment · functional conflict (Buổi 4) · Tỷ lệ tái ký r / khách hàng ở lại năm sau · CLV / giá trị của khách hàng với Nova · Đầu tư vào quan hệ không phải chi phí “mềm” — nó hiện ra trong CLV.
  - Ghi chú GV: Nối Buổi 4: trust, commitment, functional conflict → tỷ lệ tái ký → CLV.
- **S9. CLV là ước lượng theo giả định**
  - Nội dung: Phụ thuộc giả định · Không đo hết giá trị vô hình · Ghi rõ r, d, m đã dùng / Thử độ nhạy: r thay đổi thì sao? / Nói CLV kèm giả định — không phải con số chính xác · Uy tín, thương hiệu / Hồ sơ năng lực / Học hỏi mảng mới / → ghi bên cạnh, không bỏ
  - Ghi chú GV: Kết quả phụ thuộc giả định (r, d, m) → ghi rõ giả định, thử độ nhạy. ⏎ CLV không đo được hết giá trị vô hình (uy tín, hồ sơ năng lực, học hỏi) — ghi bên cạnh, không bỏ. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S10. Thực hành 1 · Tính CLV của Sông Xanh và Bếp Việt**
  - Nội dung: Sông Xanh · Bếp Việt · Tính m cho hai khách hàng · 3’ · Doanh thu/năm · 3.500 triệu · 1.800 triệu · Biên lợi nhuận gộp · 10% · 16% · Nửa nhóm tính CLV 5 năm Sông Xanh, nửa kia Bếp Việt (bảng 5 dòng) · Cost-to-serve riêng · 250 triệu · 110 triệu · 10’ · Tỷ lệ tái ký r · 40% · 75% · Nếu Bếp Việt r = 85%? + 2 câu so sánh ba khách hàng cho anh Đức · d = 12% · T = 5 năm · Sông Xanh: CTS gồm chi phí vốn trả sau 90 ngày ~104, đấu thầu lại ~60, phát sinh ~86. Bếp Việt: thí điểm, học mảng mới. · 7’ · So với An Phát: CLV ≈ 926 triệu
  - Chân slide: Phiếu W06_activity_S3_tinh_clv.md · Số liệu GIẢ ĐỊNH (khách hàng Buổi 2).
  - Ghi chú GV: S3 — Thực hành 1 (20 phút): 3 · 10 · 7. Chia đôi nhóm: một nửa tính Sông Xanh, một nửa Bếp Việt. ⏎ Đáp án: Sông Xanh m = 100, CLV ≈ 138 triệu; Bếp Việt m = 178, CLV ≈ 416 triệu (r = 75%), ≈ 494 nếu r = 85%. ⏎ Quên chiết khấu → “1 đồng năm thứ 5 có bằng 1 đồng hôm nay?”
- **S11. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S12. Doanh số cao không có nghĩa lợi nhuận cao**
  - Nội dung: “Manage customers for profits (not just sales)” · Lợi nhuận từng khách hàng khác nhau rất lớn — vì hai thứ khác nhau: · Giá thực nhận / sau chiết khấu, đàm phán, phát sinh không tính tiền · Chi phí phục vụ / cost-to-serve — khác nhau theo từng khách hàng
  - Chân slide: F03: Shapiro, Rangan, Moriarty & Ross (1987), Harvard Business Review, 65(5).
  - Ghi chú GV: Shapiro et al. (1987): lợi nhuận trên từng đơn hàng, từng khách hàng khác nhau rất lớn, nhiều khi quản lý không hiểu vì sao — vì giá thực nhận và chi phí phục vụ khác nhau.
- **S13. Chi phí phục vụ phụ thuộc hành vi khách hàng**
  - Nội dung: CHƯA KIỂM CHỨNG CHÉO · 225% · 20% khách hàng / tạo 225% lợi nhuận · 10% khách hàng / gây lỗ bằng 125% lợi nhuận · 100% · “whale curve” — Kaplan (1989), nghiên cứu Kanthal · % khách hàng (xếp theo lợi nhuận) →
  - Chân slide: F05: Guerreiro, Bio & Merschmann (n.d.), dẫn Kaplan & Narayanan (2001); Kaplan (1989) theo dẫn lại — chưa kiểm chứng chéo.
  - Ghi chú GV: Doanh nghiệp thường biết rõ chi phí làm ra sản phẩm nhưng ít biết chi phí phục vụ khách hàng; chi phí phục vụ phụ thuộc hành vi của khách hàng. ⏎ Nghiên cứu Kanthal của Kaplan (1989), theo dẫn lại: 20% khách hàng tạo 225% lợi nhuận, 10% khách hàng gây lỗ bằng 125% lợi nhuận — “whale curve”. Chưa kiểm chứng chéo. ⏎ Alt-text: đường cong cá voi — lợi nhuận tích lũy tăng lên 225% rồi giảm về 100%.
- **S14. Agency có sáu loại chi phí phục vụ ẩn**
  - Nội dung: Giờ đội KAM, họp · Sửa concept nhiều vòng · Scope creep · 1 · 2 · 3 · số buổi họp, số người tham gia · 2 vòng hay 6 vòng · phát sinh ngoài phạm vi không tính tiền — thêm hạng mục sát ngày · Chi phí vốn do trả chậm · Đấu thầu lại mỗi năm · Nhân sự cấp cao phải có mặt · 4 · 5 · 6 · trả sau 90 ngày, Nova phải đặt cọc nhà cung cấp trước (Buổi 7) · làm đề xuất, pitch · CEO, trưởng bộ phận
  - Chân slide: Nhận định của người soạn.
  - Ghi chú GV: Chi phí vốn do trả chậm nối Buổi 7 (Nova phải đặt cọc nhà cung cấp trước).
- **S15. Trả chậm 90 ngày tốn khoảng 104 triệu chi phí vốn**
  - Nội dung: 3.500 · × 12% · × 90/365 · ≈ 104 · triệu doanh thu · chi phí vốn/năm · số ngày chờ tiền · triệu/năm · Chỉ riêng chi phí vốn ≈ 104 triệu — gần 1/3 lợi nhuận gộp 350 triệu của Sông Xanh.
  - Chân slide: Tính nhanh GIẢ ĐỊNH: chi phí vốn 12%/năm.
  - Ghi chú GV: Sông Xanh trả sau 90 ngày trên 3.500 triệu, chi phí vốn 12%/năm → khoảng 3.500 × 12% × 90/365 ≈ 104 triệu/năm — chỉ riêng chi phí vốn. ⏎ So với lợi nhuận gộp của Sông Xanh: 350 triệu.
- **S16. Agency khắp nơi gặp trả chậm và phát sinh ngoài phạm vi**
  - Nội dung: MINH HỌA QUỐC TẾ · CHƯA KIỂM CHỨNG CHÉO · Khảo sát 273 lãnh đạo agency ở Mỹ · 97% · 57% · gặp khách hàng trả chậm · mất 1.000–5.000 USD/tháng do scope creep
  - Chân slide: F07 → S19 (Buổi 7): The Drum (22/5/2025). Chưa kiểm chứng chéo; agency marketing ở Mỹ, không phải event agency.
  - Ghi chú GV: Minh họa quốc tế: khảo sát 273 lãnh đạo agency ở Mỹ: 97% gặp khách trả chậm; 57% mất 1.000–5.000 USD/tháng do scope creep. ⏎ Chưa kiểm chứng chéo; không phải event agency — dùng để minh họa, không suy rộng.
- **S17. Ma trận đặt khách hàng theo biên lợi nhuận và chi phí phục vụ**
  - Nội dung: Shapiro et al. (1987) / trục dọc: giá thực nhận / trục ngang: chi phí phục vụ · Biến thể của môn / trục dọc: biên lợi nhuận gộp / trục ngang: cost-to-serve / doanh thu · Ang & Taylor (2005): mô hình đầu tiên gần với lợi nhuận khách hàng — khách chi phí phục vụ thấp mà trả giá cao là có lợi nhất.
  - Chân slide: F03: Shapiro et al. (1987) · F04: Ang & Taylor (2005). Trục dọc biên lợi nhuận gộp: biến thể của môn.
  - Ghi chú GV: Ma trận của Shapiro et al. (1987) dùng hai trục giá thực nhận và chi phí phục vụ; Ang & Taylor (2005) ghi nhận đây là mô hình đầu tiên gần với lợi nhuận khách hàng: khách chi phí phục vụ thấp mà trả giá cao là có lợi nhất. ⏎ Môn dùng biên lợi nhuận gộp thay cho giá thực nhận (quyết định của giảng viên).
- **S18. Bốn ô, bốn hướng hành động**
  - Nội dung: [VERIFY] tên ô · Ngưỡng ở Thực hành 2 / biên gộp 15% · cost-to-serve / doanh thu 5% · Passive / giữ gìn, đầu tư quan hệ · Carriage trade / kiểm soát chi phí phục vụ · Biên lợi nhuận gộp → · Bargain basement / phục vụ chuẩn hóa, hiệu quả · Aggressive / cùng khách giảm chi phí / điều chỉnh phạm vi, giá · Ma trận cho thấy vì sao một khách hàng lời hay lỗ — không chỉ ai. · Cost-to-serve →
  - Chân slide: Tên ô theo nguồn thứ cấp [VERIFY]; hướng hành động: nhận định của người soạn.
  - Ghi chú GV: Chiếu suốt S6. [VERIFY] tên bốn ô — mới có từ nguồn thứ cấp. ⏎ Alt-text: ma trận 2×2 — dọc biên lợi nhuận gộp, ngang cost-to-serve. Trên trái Passive, trên phải Carriage trade, dưới trái Bargain basement, dưới phải Aggressive.
- **S19. Không bán lỗ cho khách hàng nào**
  - Nội dung: “We do not sell unprofitably to any customer. We analyze our cost-to-serve customer figures to be sure of this.” / — McDonald, bảng tự đánh giá KAM · Value proposition chỉ bền vững khi chính agency cũng có lãi — nối Buổi 13.
  - Chân slide: F06: McDonald — câu trong bảng tự đánh giá (Z05, E04).
  - Ghi chú GV: Câu tự đánh giá trong bài của McDonald. Cost-to-serve là điều kiện để value proposition bền vững; nối Buổi 13.
- **S20. Nhưng giảm chi phí phục vụ cùng khách hàng**
  - Nội dung: Lịch duyệt rõ / ít vòng sửa concept · Gộp sự kiện / một gói năm thay vì từng lần · Thanh toán theo tiến độ / ví dụ cọc 30% – 40% – 30% · Phạm vi viết rõ / giảm scope creep · Công bằng là cả hai cùng thấy quan hệ đáng giữ.
  - Chân slide: Nhận định của người soạn — “bilateral benefits and fair relationships”.
  - Ghi chú GV: Không ép khách: nhiều chi phí phục vụ giảm được khi cùng khách hàng thay đổi cách làm. ⏎ Nói: “Công bằng là cả hai cùng thấy quan hệ đáng giữ.” ⏎ → Chuyển sang S6 — Thực hành 2.
- **S21. Thực hành 2 · Ma trận năm khách hàng của Nova**
  - Nội dung: Khách hàng · Doanh thu · Biên · CTS · CTS/DT · Hành vi · Đặt 5 khách hàng lên ma trận; chấm to theo doanh thu · 5’ · An Phát · 2.300 · 18% · 80 · 3,5% · đúng hạn; 2 vòng · Sông Xanh · 3.500 · 10% · 250 · 7,1% · trả 90 ngày; thầu lại · 2 khách ô bất lợi → 1 hành động bàn cùng khách: Nova được gì · khách được gì · 8’ · MediPharm · 1.200 · 28% · 120 · 10,0% · duyệt pháp chế · Bright Future · 600 · 20% · 20 · 3,3% · đơn giản, lặp lại · Xoay trạm: 🟨 anh Đức (CEO Nova) · 🟥 anh Khoa (An Phát) · 2×4’ · Bếp Việt · 1.800 · 16% · 110 · 6,1% · thí điểm mảng mới · Ngưỡng: biên 15% · CTS/doanh thu 5% · đơn vị triệu/năm · Về bàn, sửa một hành động · 6’
  - Chân slide: Phiếu W06_activity_S6_ma_tran_cost_to_serve.md · Số liệu GIẢ ĐỊNH.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 · 5 · 8 · 8 · 6. ⏎ GV hỏi: “Khách hàng được gì từ đề xuất này?” ⏎ Xoay trạm: vòng 1 vai anh Đức (CEO Nova) — 🟨 câu hỏi về lợi nhuận của Nova; vòng 2 vai anh Khoa (ngân sách – mua sắm An Phát) — 🟥 lo ngại “đề xuất này có công bằng với khách hàng không?”
- **S22. Ba ý của Buổi 6**
  - Nội dung: CLV = giá trị hiện tại của đóng góp ròng trong nhiều năm; rất nhạy với tỷ lệ giữ chân → quan hệ là tiền thật. · 6.1 · Doanh số ≠ lợi nhuận; cost-to-serve phụ thuộc hành vi khách hàng; agency có nhiều chi phí ẩn. · 6.2 · Ma trận biên lợi nhuận gộp × cost-to-serve giúp chọn hành động; mục tiêu là quan hệ có lợi cho cả hai. · → · Stakeholder Management Plan: phần B. Value Opportunities — CLV và vị trí trên ma trận (số giả định ghi rõ); nền cho “logic tài chính” ở Buổi 14–15.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ SMP: phần B. Value Opportunities — CLV và vị trí trên ma trận của khách hàng dự án cũ (số giả định ghi rõ). Đây cũng là nền cho câu hỏi “logic tài chính” ở Buổi 14–15.
- **S23. Phiếu kiểm tra cuối giờ**
  - Nội dung: Nếu tỷ lệ tái ký của An Phát giảm từ 85% xuống 70%, CLV thay đổi thế nào? Vì sao? · 1 · Hai thành phần cost-to-serve lớn nhất với khách hàng trong dự án cũ của nhóm là gì? Có cách nào cùng khách hàng giảm chúng? · 2 · Buổi 7: biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được — phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. ⏎ Cần xem: (a) hiểu CLV nhạy với tỷ lệ giữ chân (định hướng dài hạn); (b) đề xuất giảm chi phí cùng khách hàng, không chỉ tăng giá. ⏎ Câu nối Buổi 7: “Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được. Buổi sau: hiểu phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị.”
- **S24. Tài liệu tham khảo**
  - Nội dung: F01 · Gupta, S., Hanssens, D., Hardie, B., Kahn, W., Kumar, V., Lin, N., Ravishanker, N., & Sriram, S. (2006). Modeling customer lifetime value. Journal of Service Research, 9(2), 139–155. [VERIFY: đủ tác giả] · F02 · Berger, P. D., & Nasr, N. I. (1998). Customer lifetime value: Marketing models and applications. Journal of Interactive Marketing, 12(1), 17–30. · F03 · Shapiro, B. P., Rangan, V. K., Moriarty, R. T., & Ross, E. B. (1987). Manage customers for profits (not just sales). Harvard Business Review, 65(5), 101–108. · F04 · Ang, L., & Taylor, B. (2005). Managing customer profitability using portfolio matrices. Journal of Database Marketing & Customer Strategy Management, 12(4), 298–304. · F05 · Guerreiro, R., Bio, S. R., & Merschmann, E. V. V. (n.d.). Cost-to-serve measurement and customer profitability analysis: A case study at a food industry in Brazil [Bài hội thảo]. Intercostos. · F06 · Xem B01 (Marcos et al., 2018) và McDonald (Z05, E04) — câu “We do not sell unprofitably to any customer.” · F07 · The Drum. (2025, May 22). Cash flow crunch: US agencies struggle to grow as late payments and scope creep bite.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-06_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn ghi ở chân slide.

### Buổi 7 — Understanding Procurement & Value-based Negotiation

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 7.1 Kraljic · 7.2 Procurement · Buying · 7.3 Đàm phán giá trị · Tổng kết |
| Số slide · trạng thái | 31 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W07_Procurement_Negotiation.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 7 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · Leverage · Strategic · Understanding Procurement & Value-based Negotiation · Stakeholders Management for Events / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Non-critical · Bottleneck
  - Ghi chú GV: Slide 1 (dàn ý #1).
- **S2. Ba tuần trước gala, AV khách sạn tăng giá 30% — Nova làm gì?**
  - Nội dung: Chấp nhận giá mới, tự chịu phần chênh · A · +30% · Báo Key Account xin tăng ngân sách · B · Key Account: Ngân hàng An Phát / Hội nghị + gala tối 12/12, khách sạn 5 sao, Quận 1 / Hợp đồng venue cấm mang AV ngoài vào · Đổi khách sạn · C · Đàm phán với khách sạn · D
  - Chân slide: Tình huống giả định (tiếp nối Buổi 1) — mọi tên và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Đọc: “Các bạn là Nova Events. Ngân hàng An Phát — Key Account của các bạn — đã chốt Hội nghị khách hàng và gala tối ngày 12/12 tại một khách sạn 5 sao ở Quận 1. Ba tuần trước sự kiện, khách sạn báo: đơn vị AV nội bộ tăng giá 30%, và hợp đồng không cho mang AV bên ngoài vào. Các bạn làm gì?” ⏎ Cho lớp giơ tay A/B/C/D. Ghi số phiếu lên bảng; CHƯA chữa. ⏎ Chốt: vấn đề đã được quyết định từ lúc chọn và ký với nhà cung cấp. Hôm nay ta học cách nhìn thấy trước nó.
- **S3. Agency vừa là người bán, vừa là người mua**
  - Nội dung: Nhà cung cấp · Agency · Key Account · venue · AV · F&B · nghệ sĩ · in ấn · vận chuyển · Nova Events — các bạn · Ngân hàng An Phát · agency là NGƯỜI MUA · agency là NGƯỜI BÁN · Buổi 7: mua từ nhà cung cấp  ·  Buổi 2–6: bán cho Key Account
  - Ghi chú GV: Nối Buổi 2–6 (agency bán cho Key Account) sang Buổi 7 (agency mua từ nhà cung cấp): để giao được giá trị đã hứa, agency phải mua phần lớn nguồn lực của sự kiện. ⏎ Alt-text: sơ đồ ba khối — nhà cung cấp, agency ở giữa, Key Account; agency là người mua với nhà cung cấp và là người bán với Key Account.
- **S4. Phần lớn giá trị hợp đồng đi qua agency để trả cho nhà cung cấp**
  - Nội dung: 100% giá trị hợp đồng với Key Account · ≈ 90–95%  chi cho nhà cung cấp · 5–10% · phí quản lý của agency ↑ · Chất lượng Key Account nhìn thấy phần lớn do nhà cung cấp làm ra. / → Quản trị nhà cung cấp là một phần của quản trị Key Account.
  - Chân slide: Phí quản lý 5–10%: báo giá công khai của agency VN (S18); markup ≥ 10% tại Mỹ (S25). Dải tham chiếu — chưa kiểm chứng chéo.
  - Ghi chú GV: Hỏi nhanh: “Trong hợp đồng 2,4 tỷ với An Phát, bao nhiêu tiền thực sự ở lại Nova?” ⏎ Ghi rõ: đây là dải tham chiếu, chưa kiểm chứng chéo. ⏎ [NEEDS PROFESSOR INPUT: tỷ lệ thực tế từ một dự toán agency đã ẩn danh] ⏎ Chốt: chất lượng sự kiện Key Account nhìn thấy phần lớn do nhà cung cấp làm ra → quản trị nhà cung cấp là một phần của quản trị Key Account. ⏎ Alt-text: thanh ngang 100% giá trị hợp đồng, 5–10% là phí quản lý của agency, phần còn lại chi cho nhà cung cấp.
- **S5. Chi phí đầu vào tăng đều và địa điểm cao cấp khan hiếm**
  - Nội dung: +4,5% · 138 USD · 28% · chi phí / người / ngày của meetings & events toàn cầu, năm 2024 · chi phí / người / ngày tại khu vực APAC (+4,5%) · chuyên gia coi khả năng có địa điểm là thách thức năm 2026 · S04 · S04 · S05
  - Chân slide: S04: CWT & GBTA, Forecast 2026 (một báo cáo gốc, chưa kiểm chứng chéo) · S05: Amex GBT, 2026 Global Meetings & Events Forecast.
  - Ghi chú GV: Trình bày nhanh, mỗi số một ý, không đọc hết. Dự báo toàn cầu +3,7% (2025) và +2,4% (2026) — S04. Thiếu địa điểm cao cấp là một nguyên nhân tăng chi phí (S04, S05, S08).
- **S6. Nhiều hạng mục bị khóa bởi điều khoản độc quyền**
  - Nội dung: 1 · AV nội bộ bắt buộc · 2 · Bán vé độc quyền · 3 · Việt Nam · Nhiều khách sạn buộc dùng AV nội bộ; khách sạn thường nhận hoa hồng 35–50% hóa đơn AV* · Live Nation–Ticketmaster nắm ~80% bán vé sơ cấp ở địa điểm concert lớn tại Mỹ; bồi thẩm đoàn kết luận độc quyền (4/2026) · Thiếu địa điểm chuyên dụng cho sự kiện lớn; vé máy bay nội địa hè 2025 +10–20%*, đoàn MICE phải đặt trước 1–2 tháng · S08–S10 · S13 · S20, S23 · * chưa kiểm chứng chéo · Hỏi nhanh: trong dự án cũ, có hạng mục nào các bạn không được chọn nhà cung cấp?
  - Chân slide: S08–S10: báo ngành về đàm phán AV/khách sạn · S13: NPR, CNN (4/2026) · S20: Tạp chí VHNT; ELLE VN · S23: VnExpress, VnEconomy.
  - Ghi chú GV: Hỏi nhanh: “Trong dự án cũ, có hạng mục nào các bạn KHÔNG được chọn nhà cung cấp?” ⏎ Hoa hồng AV 35–50% và vé máy bay +10–20% là số liệu chưa kiểm chứng chéo.
- **S7. Kraljic: mua hàng phải trở thành quản trị nguồn cung**
  - Nội dung: CIPS mô tả ma trận Kraljic là · Harvard Business Review · 1983 · công cụ chiến lược để nhận diện và giảm rủi ro nguồn cung. · “Purchasing Must Become Supply Management” · Không chỉ là đặt đơn cho rẻ / Quản trị nguồn cung như một phần của chiến lược · Peter Kraljic (McKinsey)
  - Chân slide: S01: Kraljic, P. (1983). Harvard Business Review; CIPS, Kraljic matrix.
  - Ghi chú GV: Peter Kraljic (McKinsey), HBR 1983. Thông điệp tên bài: mua hàng không chỉ là đặt đơn cho rẻ, mà phải quản trị nguồn cung như một phần của chiến lược. ⏎ Chốt §1 trước đó: agency không chọn được thị trường nhà cung cấp, nhưng chọn được cách nhìn từng hạng mục và cách xây quan hệ tương ứng.
- **S8. Hai trục: hạng mục tác động bao nhiêu và khó mua đến đâu**
  - Nội dung: Định nghĩa gốc (CIPS) · Agency tự hỏi cho từng hạng mục · Mức hạng mục đóng góp vào khả năng sinh lời của tổ chức mua · Chiếm bao nhiêu phần ngân sách? / Khách của Key Account có nhìn thấy, cảm nhận không? / Nếu kém, Key Account có coi cả sự kiện thất bại? · Profit impact · tác động lợi nhuận · Mức khó tìm nguồn và mức tổn thương khi nguồn cung gặp sự cố · Bao nhiêu nhà cung cấp đủ năng lực — ở đây, lúc này? / Bỏ ngang thì thay được trong bao lâu? / Có độc quyền? Có rơi vào mùa cao điểm? · Supply risk · rủi ro nguồn cung
  - Chân slide: Định nghĩa gốc: CIPS (S01). Câu hỏi theo góc agency: nhận định của người soạn.
  - Ghi chú GV: [VERIFY: cách đọc profit impact theo góc agency — giá trị giao cho Key Account + lợi nhuận hợp đồng — là điều chỉnh của người soạn, không phải định nghĩa gốc] ⏎ Supply risk đặc biệt nặng trong ngành sự kiện vì ngày sự kiện không dời được: nhà cung cấp trễ một tuần ở ngành sản xuất là chậm giao hàng, ở ngành sự kiện là mất sự kiện.
- **S9. Mỗi ô có một chiến lược riêng**
  - Nội dung: Leverage · Strategic · Khai thác sức mua: đấu thầu, giá mục tiêu, thay thế sản phẩm · Cân bằng quyền lực bằng quan hệ đối tác dựa trên hiệu quả · Non-critical ≠ không quan trọng · Nghĩa là không khó mua. Thư mời in sai tên khách VIP vẫn là sự cố — chỉ là sửa được. · Profit impact  →  cao · Non-critical · Bottleneck · Xử lý hiệu quả: chuẩn hóa, gom đơn, đơn giản hóa thủ tục · Đảm bảo nguồn cung ngắn và dài hạn; tìm nhà cung cấp thay thế · Supply risk  →  cao
  - Chân slide: Chiến lược gốc theo CIPS (S01).
  - Ghi chú GV: Nhấn mạnh: tên ô Non-critical không có nghĩa là “không quan trọng” — nghĩa là KHÔNG KHÓ MUA. Thư mời in sai tên khách VIP vẫn là sự cố, chỉ là sửa được vì in lại được ngay. ⏎ Alt-text: ma trận hai trục profit impact (dọc) và supply risk (ngang) với bốn ô: Leverage (trái trên), Strategic (phải trên), Non-critical (trái dưới), Bottleneck (phải dưới); mỗi ô có ký hiệu riêng.
- **S10. Xếp hạng mục trước, rồi mới suy ra vị thế nhà cung cấp**
  - Nội dung: Bước 1  Hạng mục → ô · Bước 2  Ô → vị thế nhà cung cấp → chiến lược quan hệ · “Ballroom 600 khách tối 12/12”, không phải “khách sạn” · Nhà cung cấp mạnh hay yếu so với agency? · Vị thế nhà cung cấp · Chiến lược quan hệ của agency · Strategic · Mạnh, nhưng hai bên cần nhau · Đối tác dài hạn: chia sẻ kế hoạch sớm, cam kết khối lượng, cùng xử lý sự cố · Bottleneck · Mạnh hơn agency · Giữ chỗ sớm, có dự phòng, chốt giá–hủy–phí phát sinh trong hợp đồng · Leverage · Yếu hơn agency · So giá trong 2–3 nhà cung cấp ưu tiên, nhưng giữ chuẩn chất lượng · Non-critical · Yếu, nhiều lựa chọn · Chuẩn hóa, đặt hàng gọn, giảm thời gian quản lý
  - Ghi chú GV: Nhấn mạnh: đây là cách dùng THỐNG NHẤT của môn học. Mô hình gốc phân loại hạng mục mua (category); ngoài nghề hay nói “nhà cung cấp chiến lược”. Bước 1 xếp hạng mục cụ thể gắn với sự kiện (“ballroom 800 khách tối 12/12”, không phải “khách sạn”). Bước 2 suy ra quyền mặc cả của nhà cung cấp và chọn chiến lược quan hệ. ⏎ Riêng ô Leverage: hạng mục thường là thứ Key Account nhìn thấy — ép giá đến mức nhà cung cấp cắt chất lượng là tự làm hại mình.
- **S11. Một khách sạn, ba hạng mục, ba ô**
  - Nội dung: Vì sao AV tăng 30% mà Nova bó tay? · Leverage · Strategic · 80 phòng ngủ · Ballroom gala 12/12 · AV đã vào ô Bottleneck ngay lúc ký hợp đồng venue có điều khoản AV nội bộ bắt buộc. · tháng 12 → · Profit impact  →  cao · Non-critical · Bottleneck · Xử lý trước khi ký: / đưa báo giá AV vào đàm phán venue, hoặc giành quyền mang AV ngoài vào. · 80 phòng ngủ · tháng 12 · AV nội bộ (bắt buộc) · Supply risk  →  cao
  - Chân slide: Ví dụ giả định (Nova Events – An Phát). Xử lý AV trước khi ký: S08, S09, S10.
  - Ghi chú GV: Ví dụ mẫu — GV nói to lập luận: ⏎ • Ballroom gala 600 khách 12/12: profit impact cao (sân khấu cả sự kiện), supply risk cao (mùa tiệc cuối năm, không đổi sát ngày) → Strategic. ⏎ • 80 phòng ngủ: Leverage ngoài mùa cao điểm; tháng 12 có thể dịch sang Bottleneck. ⏎ • AV nội bộ: chi phí thấp–trung bình, nhưng hợp đồng không cho mang AV ngoài → chỉ còn một nhà cung cấp → Bottleneck. Rủi ro đến từ điều khoản hợp đồng, không phải từ thị trường. ⏎ Quay lại câu hỏi slide 2: AV đã vào ô Bottleneck ngay lúc ký hợp đồng venue. ⏎ Alt-text: ba hạng mục của cùng một khách sạn nằm ở ba ô khác nhau; mũi tên cho thấy phòng ngủ dịch từ Leverage sang Bottleneck vào tháng 12.
- **S12. Ma trận là ảnh chụp: mùa, quy mô và điều khoản làm hạng mục đổi ô**
  - Nội dung: Mùa cao điểm · Quy mô · Tháng 10–12, lễ tết → supply risk tăng · 200 khách: Leverage · 40.000 khách ở TP.HCM: gần như luôn Strategic/Bottleneck · Điều khoản · Hành động của agency · Độc quyền (AV nội bộ, bán vé) → Bottleneck ngay lập tức · Giữ chỗ sớm, dự phòng, cam kết nhiều năm → kéo hạng mục ra khỏi Bottleneck · Bốn hiểu lầm thường gặp · Xếp hạng mục, không xếp nhà cung cấp · Tốn tiền nhất ≠ Strategic · Non-critical vẫn phải làm đúng · Xếp theo từng sự kiện, rà soát định kỳ
  - Chân slide: S01 (phê bình mô hình) · S08, S13 · S18 (+20–40% mùa cao điểm, chưa KCC) · S20 · S23, S24.
  - Ghi chú GV: Kết quả xếp ô là ảnh chụp tại một thời điểm, cần rà soát định kỳ. ⏎ Hiểu lầm thường gặp (xử lý chủ động): ⏎ 1. “Kraljic xếp nhà cung cấp” → xếp HẠNG MỤC; một nhà cung cấp có thể ở nhiều ô. ⏎ 2. “Hạng mục tốn tiền nhất là Strategic” → chi tiêu lớn ≠ supply risk cao; hạng mục rẻ vẫn có thể là Bottleneck (AV nội bộ, giấy phép). ⏎ 3. “Non-critical là không cần quan tâm” → không khó mua, nhưng vẫn phải làm đúng. ⏎ 4. “Xếp ô một lần là xong” → xếp theo từng sự kiện, từng thời điểm. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S13. Thực hành 1 · Xếp hạng mục cho gala 12/12 của An Phát**
  - Nội dung: Nova · An Phát · ~600 khách · 12/12 · khách sạn 5 sao Q.1 · bắt buộc AV nội bộ và F&B khách sạn · Chấm profit impact & supply risk (1–5), xếp vào ma trận trên giấy A1 · 10’ · 10 hạng mục · Ballroom hội nghị + gala · Ca sĩ headline · 1 · 6 · Chọn 3 hạng mục ở 3 ô: vị thế nhà cung cấp + 1 hành động (Procurement hay Buying?) · 6’ · 80 phòng ngủ (11–12/12) · In ấn · 2 · 7 · AV nội bộ khách sạn · Xe đưa đón sân bay · 3 · 8 · Nếu dời sang 15/4: đánh dấu ➜ hạng mục đổi ô, kèm 1 câu lý do · 4’ · Màn LED + sân khấu gala · Quà VIP 600 phần · 4 · 9 · F&B gala 600 khách · Quay phim + livestream · 5 · 10 · Xếp HẠNG MỤC, không xếp tên công ty — một khách sạn có thể ở nhiều ô.
  - Chân slide: Phiếu W07_activity_S3_kraljic_su_kien_key_account.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Phát phiếu, đọc lời mở đầu, đi vòng. Đồng hồ đếm ngược 10 / 6 / 4 phút. ⏎ 46–50’: chốt với 2 nhóm xếp khác nhau (LED, ca sĩ). Có thể vẽ nhanh ma trận 2×2 trên bảng để đặt các hạng mục gây tranh cãi. ⏎ Giữ lại giấy A1 — là đầu vào cho đóng vai ở S6.
- **S14. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. GV xếp cặp cho S6 (ghép hai nhóm có ma trận khác nhau) trong giờ giải lao. Ghi giờ quay lại lên slide/bảng.
- **S15. Nova làm 40 sự kiện một năm — không thể đi mua từ đầu mỗi lần**
  - Nội dung: Nếu mỗi sự kiện lại tìm nhà cung cấp từ đầu, Nova sẽ luôn ở thế yếu. · → Agency cần hai cấp làm việc với nhà cung cấp. · 40 sự kiện / năm
  - Ghi chú GV: Mở đoạn S4: “Ở S3 các bạn vừa xếp hạng mục cho MỘT sự kiện. Nhưng Nova làm 40 sự kiện một năm. Nếu mỗi sự kiện lại đi tìm nhà cung cấp từ đầu, Nova sẽ luôn ở thế yếu. Vì vậy agency cần hai cấp làm việc với nhà cung cấp.” ⏎ Alt-text: lưới 40 chấm tròn tượng trưng 40 sự kiện mỗi năm.
- **S16. Procurement là dài hạn, Buying là từng giao dịch**
  - Nội dung: “…procurement is a long-term approach to acquiring goods and services, and purchasing is the short-term direct purchasing of products…” · — CIPS (S03) · Procurement · Buying · dài hạn · từng giao dịch · Tìm nguồn · đàm phán · quản lý hợp đồng · phát triển nhà cung cấp · Hoàn tất một lần mua cho một nhu cầu cụ thể
  - Chân slide: S03: CIPS, What is procurement?
  - Ghi chú GV: Theo CIPS: Procurement là cách tiếp cận dài hạn — gồm tìm nguồn (sourcing), đàm phán, quản lý hợp đồng, phát triển nhà cung cấp. Purchasing/Buying là mua trực tiếp ngắn hạn, chỉ hoàn tất giao dịch, mang tính “thụ động, giao dịch”.
- **S17. Agency cần hai cấp làm việc với nhà cung cấp**
  - Nội dung: Procurement — cấp chiến lược · Buying — cấp thực thi · Câu hỏi · Làm việc với ai, theo điều kiện khung nào, cho cả năm? · Sự kiện này: đặt gì, của ai, giá bao nhiêu, khi nào? · Chu kỳ · Năm / quý · Từng sự kiện · Người làm · Ban giám đốc, trưởng sản xuất; vị trí procurement riêng ở agency lớn · Producer, quản lý dự án, kế toán dự án · Công việc · Phân tích Kraljic · danh sách nhà cung cấp ưu tiên · thỏa thuận khung · đánh giá định kỳ · Báo giá, chốt · hợp đồng/đơn hàng · cọc · nghiệm thu · thanh toán · ghi nhận hiệu quả
  - Chân slide: S03 (CIPS); S11 (EGG Events có Global Procurement Director); S25 (preferred supplier program).
  - Ghi chú GV: Nói rõ: cả hai cấp đều ở BÊN TRONG AGENCY — không phải phòng mua hàng của khách hàng. ⏎ Preferred supplier program: danh sách nhà cung cấp chọn trước dựa trên giá ưu đãi, giá trị cộng thêm, năng lực, hiệu quả; không cần duyệt lại từ đầu cho từng giao dịch (S25).
- **S18. Cấp Procurement quyết định chiến lược cho từng ô**
  - Nội dung: Leverage · Strategic · Procurement / đặt luật chơi cho từng ô. / Buying / làm đúng luật đó cho từng sự kiện. · Danh sách 2–3 nhà cung cấp ưu tiên; so giá định kỳ; gom khối lượng cả năm · 1–2 đối tác dài hạn; chia sẻ lịch sự kiện Key Account sớm; cam kết khối lượng nhiều năm · Profit impact  →  cao · Non-critical · Bottleneck · Mẫu đơn hàng chuẩn; cấp Buying tự quyết trong hạn mức · Dự phòng đã thẩm định; điều khoản khung về giá và hủy; theo dõi hợp đồng có độc quyền · Supply risk  →  cao
  - Chân slide: Nhận định của người soạn, dựa trên chiến lược gốc của CIPS (S01).
  - Ghi chú GV: Cấp Buying làm đúng quy trình mà cấp Procurement đã đặt ra cho từng ô. ⏎ Alt-text: ma trận Kraljic, mỗi ô ghi việc của cấp Procurement.
- **S19. Agency chủ động trở thành customer of choice**
  - Nội dung: Gom chi tiêu · Cam kết dài hạn · 1 · 2 · Thu gọn số nhà cung cấp, dồn booking cho nhà cung cấp ưu tiên · Cùng một khách sạn nhiều năm có thể được miễn phụ thu AV · Quy mô + hợp đồng khung · Giữ cam kết thanh toán · 3 · 4 · Marriott giữ mức hoa hồng cũ cho công ty sourcing lớn có hợp đồng · Trả cọc trễ là mất ngay vị thế này · “Being a customer of choice and having less suppliers that you work with will enable preferential rates and prioritisation.” / — CWT (S06)
  - Chân slide: S05 (Grundfos) · S06 (CWT) · S09 (Smart Meetings) · S14 (Smart Meetings, chưa KCC).
  - Ghi chú GV: Trong thị trường nghiêng về người bán, agency cần chủ động trở thành khách hàng được nhà cung cấp ưu tiên. ⏎ Phạm vi: chỉ nói AGENCY LÀM GÌ. Không phân tích cách nhà cung cấp chấm điểm agency (Supplier Preferencing). ⏎ Marriott/Hilton 2018 cắt hoa hồng 10% → 7% (đã KCC); Marriott giữ mức cũ với một số công ty sourcing lớn có hợp đồng (chưa KCC).
- **S20. Khi hai cấp gãy, sự kiện sụp — hoặc agency mất quyền mặc cả**
  - Nội dung: Về đây bốn cánh chim trời · Hà Nội · 12/2025 · K-Pop Festival Open Air #2 · Hà Nội · 12/2023 · Cọc 50% trễ hơn 10 ngày, tác quyền chưa cấp phép → ekip và nghệ sĩ rút; show hủy khi khán giả đã vào · 2 ngày trước show, ca sĩ chưa nhận cọc, hợp đồng chưa ký đủ → show dừng · ? Hạng mục nào là Strategic ở đây? · ? Điều kiện tối thiểu để giữ nhà cung cấp Strategic? · Marriott – Hilton · Mỹ · 2018 · Vietravel – Vietravel Airlines · Việt Nam · 2019–2026 · Hai chuỗi khách sạn cắt hoa hồng cho trung gian từ 10% xuống 7% · Lập hãng bay năm 2020; đến 2025 thoái toàn bộ vốn để tập trung năng lực cốt lõi · ? Agency nào được bảo vệ tốt hơn? · ? Supply risk cao: xây đối tác hay tự sở hữu?
  - Chân slide: S15: VnExpress, VietNamNet (2025) · S16: Dân trí (2023) · S14: Smart Meetings, MPI (2018) · S21: Người Lao Động, VN News (2025).
  - Ghi chú GV: Mỗi case 1–2 phút, 1 câu hỏi/case. ⏎ • Về đây bốn cánh chim trời: nghệ sĩ, ekip, tác quyền là hạng mục Strategic; cấp Buying không giữ cam kết thì quan hệ chiến lược sụp. ⏎ • K-Pop Open Air #2: “hợp đồng ký đủ + cọc đúng hạn” là điều kiện tối thiểu. ⏎ • Marriott–Hilton: nhà cung cấp tập trung có thể đổi luật chơi; agency có quy mô và hợp đồng khung được bảo vệ tốt hơn. ⏎ • Vietravel: CHỈ đặt câu hỏi, không gán động cơ (doanh nghiệp không nói trực tiếp là để chủ động nguồn cung). ⏎ Nếu trễ giờ: chỉ kể case 1 và 3. ⏎ [NEEDS PROFESSOR INPUT: case agency VN thành công; ví dụ cấp Procurement của agency VN]
- **S21. Dữ liệu từ từng sự kiện nuôi quyết định chiến lược**
  - Nội dung: “Supplier feedback, performance insights, and negotiation lessons shouldn't disappear when an event ends.” / — Virginie Raimondi, Global Procurement Director, EGG Events · Buying · từng sự kiện: đúng hẹn? phát sinh? xử lý sự cố? · Procurement · Đánh giá nhà cung cấp · cập nhật danh sách ưu tiên, thỏa thuận khung · ghi nhận hiệu quả sau sự kiện · RFP / RFQ, chọn nhà cung cấp, site check → Buổi 10
  - Chân slide: S11: Scofidio (2026), Skift Meetings.
  - Ghi chú GV: Dữ liệu từng sự kiện (đúng hẹn không, phát sinh bao nhiêu, xử lý sự cố ra sao) là đầu vào để cấp Procurement đánh giá nhà cung cấp và cập nhật danh sách ưu tiên. ⏎ Ranh giới: quy trình thực thi chi tiết (RFP/RFQ, tiêu chí chọn nhà cung cấp, site check) để dành Buổi 10. ⏎ Alt-text: vòng tròn ba bước Buying → đánh giá nhà cung cấp → Procurement → quay lại Buying.
- **S22. Trong 7.3: Key Account là người mua, KAMer là người của agency**
  - Nội dung: “Năm nay bên mình cần giảm 15%.” · Key Account · KAMer · bàn đàm phán · Customer · Buyer · người của agency · Ngân hàng An Phát · Nova Events · phía sau KAMer: nhà cung cấp + ma trận Kraljic
  - Ghi chú GV: Quyết định GV 27/9/2026: Customer (Buyer) = Key Account (Ngân hàng An Phát); KAMer = người của agency (Nova Events). ⏎ Mở đoạn: “Cuộc gọi khó nhất của một KAMer thường bắt đầu bằng câu: ‘Năm nay bên mình cần giảm 15%.’ Hôm nay các bạn sẽ thấy: KAMer trả lời tốt câu đó NHỜ hiểu biết về nhà cung cấp vừa học ở 7.1–7.2.” ⏎ Alt-text: sơ đồ hai bên bàn đàm phán — Key Account (người mua) và KAMer của agency; phía sau KAMer là các nhà cung cấp.
- **S23. Đàm phán giá trị là làm to chiếc bánh trước khi chia**
  - Nội dung: Distributive — phân phối · Integrative — tích hợp · Hình dung · Chia chiếc bánh cố định: bên này được thì bên kia mất · Làm to chiếc bánh trước khi chia · Trên bàn · Thường chỉ một vấn đề: giá · Giá, phạm vi, thời hạn hợp đồng, lịch thanh toán, mức dịch vụ, rủi ro · Kỹ thuật · Giữ thông tin, nhượng từng bước · Tìm lợi ích sau lập trường; đánh đổi qua nhiều vấn đề (logrolling) · Value-based negotiation (cách dùng của môn): mọi nhượng bộ neo vào giá trị Key Account nhận được và rủi ro cho chính sự kiện.
  - Chân slide: S12: PON Staff (2026), Program on Negotiation at Harvard Law School.
  - Ghi chú GV: [VERIFY: định nghĩa value-based negotiation của môn — chưa có nguồn chuẩn cho quan hệ agency–client; môn học định nghĩa dựa trên integrative bargaining (PON)] ⏎ Value-based negotiation trong môn: KAMer đàm phán kiểu tích hợp; mọi nhượng bộ được neo vào giá trị Key Account nhận được và vào rủi ro nhượng bộ đó tạo ra cho chính sự kiện của Key Account. ⏎ Logrolling: nhượng ở vấn đề mình ít coi trọng để được ở vấn đề mình coi trọng.
- **S24. Nhượng ở Leverage/Non-critical, bảo vệ Strategic/Bottleneck bằng dữ kiện**
  - Nội dung: Value: phương án rẻ hơn (gom xe, chuẩn hóa in ấn, đổi quà) — đổi lại thời hạn hợp đồng, lịch thanh toán, chốt sớm · Leverage · Strategic · VALUE · RISK · Risk: không nhượng im lặng; nêu dữ kiện và hệ quả, đề xuất giảm chi phí ở chỗ khác · Profit impact  →  cao · Non-critical · Bottleneck · nhượng có điều kiện · giải thích, đổi chỗ khác · Quản trị nhà cung cấp tốt tạo nên sức mạnh đàm phán của agency. · Supply risk  →  cao
  - Ghi chú GV: Đây là mối nối giữa 7.1 và 7.3. Khi Key Account đưa yêu cầu (giảm giá, đổi nhà cung cấp, cắt hạng mục), KAMer hỏi: yêu cầu này chạm vào hạng mục ở ô nào? ⏎ Câu chốt nói to: “Quản trị nhà cung cấp tốt là năng lực tạo nên sức mạnh đàm phán của agency với Key Account. KAMer nào không biết hạng mục nào là Bottleneck sẽ nhượng nhầm chỗ, và trả giá vào ngày sự kiện.” ⏎ Alt-text: ma trận chia hai vùng — cột trái (Leverage, Non-critical) nhượng được có điều kiện; cột phải (Strategic, Bottleneck) phải bảo vệ.
- **S25. KAMer có bốn công cụ ngoài việc giảm giá**
  - Nội dung: Minh bạch chi phí · Điều khoản, không chỉ giá · 1 · 2 · Benchmark theo thị trường, mùa, định dạng; gợi ý ngày thấp điểm · Cọc, hủy, attrition, bất khả kháng — phản ánh vào hợp đồng với Key Account · ROI / ROE · Dòng tiền · 3 · 4 · Chỉ 24% tổ chức có chỉ số ROI; đo thêm Return on Experience · Nhà cung cấp đòi cọc sớm, khách trả chậm — agency bị kẹp giữa · → Mỗi nhượng bộ giá ăn thẳng vào một biên lợi nhuận rất mỏng, nên phải đổi lấy thứ gì đó.
  - Chân slide: S04, S05 (Amex GBT, chưa KCC) · S10 · S11 (Santor) · S15, S16 · S19 (The Drum; agency marketing, không phải event agency) · S21 · S22.
  - Ghi chú GV: 1. Minh bạch lý do chi phí: benchmark theo thị trường, mùa, định dạng; cân nhắc ngày thấp điểm, điểm đến phụ (S10). Cắt ngân sách là thách thức của 30% chuyên gia năm 2026 (S05). ⏎ 2. Điều khoản: “…some of the biggest financial and legal protections come from negotiating contract terms — attrition, cancellation, force majeure, liability limits, payment schedules, service levels…” (Brian Santor, S11). Điều khoản đã ký với nhà cung cấp phải phản ánh vào hợp đồng với Key Account. ⏎ [VERIFY: chuyển điều khoản NCC sang hợp đồng khách hàng — đối chiếu Bộ luật Dân sự 2015 và Luật Thương mại] ⏎ 3. ROI/ROE: chỉ 24% tổ chức có chỉ số ROI trong chính sách sự kiện; Amex GBT đề xuất Return on Experience. ⏎ 4. Dòng tiền: NCC Strategic đòi cọc sớm (S15, S16); 97% agency marketing Mỹ gặp khách trả chậm (S19); nhiều show VN dùng tiền vé bán sớm để trả cọc (S22); một DN lữ hành–MICE niêm yết: doanh thu 2025 ~7.200 tỷ, LNST < 1 tỷ, biên gộp Q4 ~6% (S21, người soạn tự tính). ⏎ [NEEDS PROFESSOR INPUT: biên lợi nhuận thực tế của một event agency VN]
- **S26. Một câu nói có thể chuyển cuộc đàm phán từ giá sang giá trị**
  - Nội dung: “15% đó là mục tiêu cho cả danh mục hay riêng sự kiện này? Năm nay ưu tiên số một của anh/chị cho hội nghị là gì?” · 1 · “Có ba chỗ bên em giảm được mà khách mời gần như không nhận ra: xe đưa đón, in ấn, quà tặng. Còn ballroom và AV thì em xin giải thích vì sao cắt ở đó là chuyển rủi ro sang chính sự kiện của mình.” · 2 · “Nếu mình chốt hợp đồng hai năm ngay bây giờ, bên em giữ được giá ballroom năm sau với khách sạn. Phần tiết kiệm đó em chuyển vào báo giá.” · 3 · “Bên em đồng ý giãn lịch thanh toán, nhưng khoản cọc cho khách sạn và nghệ sĩ phải được chuyển trước ngày 15/11 — đó là điều kiện để giữ chỗ.” · 4 · Mỗi câu dùng kỹ thuật nào?
  - Ghi chú GV: Cho lớp đoán mỗi câu dùng kỹ thuật nào, rồi mới lật đáp án: ⏎ 1 → tìm lợi ích đằng sau lập trường. ⏎ 2 → tách Risk và Value. ⏎ 3 → đánh đổi qua nhiều vấn đề, dùng vị thế customer of choice. ⏎ 4 → chuyển điều khoản nhà cung cấp sang hợp đồng khách hàng. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S27. Thực hành 2 · Đóng vai: An Phát đòi giảm 15% — đội Nova đáp lại**
  - Nội dung: Chuẩn bị: đọc thẻ vai, mục tiêu, điểm dừng · 6’ · Ngày 20/10 · hợp đồng 2,4 tỷ đồng · gala 12/12 · An Phát muốn: · Đàm phán — kết bằng biên bản 3 dòng · 10’ · Giảm 15% giá trị hợp đồng / Đổi AV sang đơn vị quen của ngân hàng (báo giá rẻ hơn) / Giãn lịch thanh toán / …nhưng giữ nguyên ca sĩ headline và chất lượng gala · Lật thẻ; người quan sát đọc phiếu · 3’ · Tổng kết toàn lớp, từ góc agency · 8’ · 3 cặp: nhóm An Phát (Key Account) ↔ đội KAM Nova · 1 người quan sát/nhóm · Biên bản: đã thống nhất gì · mỗi bên đổi được gì · bước tiếp theo
  - Chân slide: Phiếu W07_activity_S6_dam_phan_gia_tri.md · Tình huống giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút). Đồng hồ 6 / 10 / 3 / 8 phút. 93–96’: phát thẻ vai (cắt riêng; không cho bên kia xem). ⏎ Nếu bế tắc hoặc chốt quá nhanh: dùng “biến cố” trong phần GV của phiếu S6. ⏎ Tổng kết luôn nhìn từ agency: mỗi yêu cầu chạm ô nào? Nova nhượng ở đâu và đổi lại gì? Bảo vệ Strategic/Bottleneck bằng dữ kiện hay chỉ bằng lời hứa? ⏎ Ghi biên bản 3 dòng của từng cặp lên bảng.
- **S28. Ba ý của Buổi 7**
  - Nội dung: Xếp hạng mục theo hai trục, rồi mới suy ra vị thế nhà cung cấp. Ô đổi theo mùa, quy mô và điều khoản. · 7.1 · Procurement chọn ai, khung nào, cho cả năm; Buying làm đúng từng sự kiện và ghi lại. Customer of choice là việc agency chủ động làm. · 7.2 · Nhượng ở Leverage/Non-critical, bảo vệ Strategic/Bottleneck bằng dữ kiện — và luôn đổi nhượng bộ lấy một điều có giá trị. · 7.3 · Stakeholder Management Plan: thêm một trang — hạng mục nhà cung cấp chính nằm ở ô nào, quản trị ra sao.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). Ba câu chốt, mỗi câu gắn một mục đề cương. ⏎ Liên hệ Stakeholder Management Plan cuối kỳ: với khách hàng từ dự án cũ, nhóm bổ sung một trang “Các hạng mục nhà cung cấp chính của sự kiện đó nằm ở ô nào, và nhóm quản trị từng nhà cung cấp ra sao để bảo vệ giá trị giao cho khách hàng?” (làm dần, không giao về nhà).
- **S29. Phiếu kiểm tra cuối giờ**
  - Nội dung: Chọn một hạng mục nhà cung cấp trong dự án cũ của nhóm bạn. Nó nằm ở ô nào của ma trận Kraljic vào thời điểm sự kiện? Nhóm bạn khi đó làm việc với nhà cung cấp theo kiểu Procurement hay chỉ Buying? · 1 · Trong đóng vai, một yêu cầu của Key Account mà đội Nova không nên nhượng là gì? Vì sao (gắn với ô nào)? · 2 · Buổi 8: tổ chức quan hệ với Key Account ở nhiều cấp (Bow-tie → Diamond) và đo hiệu quả quan hệ đó.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm (6 phút). Dùng giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) SV xếp HẠNG MỤC hay vẫn xếp tên công ty; (b) có dùng cả hai trục, không chỉ chi phí; (c) câu 2 có gắn lập luận rủi ro với DỮ KIỆN (điều khoản, khoản cọc, không có phương án thay thế). ⏎ Câu nối Buổi 8: “Hôm nay ta thấy KAMer đàm phán được là nhờ quan hệ tốt với cả Key Account lẫn nhà cung cấp. Buổi sau: làm sao tổ chức quan hệ với Key Account ở nhiều cấp (mô hình Bow-tie → Diamond) và đo hiệu quả quan hệ đó.”
- **S30. Tài liệu tham khảo (1/2)**
  - Nội dung: S01 · Kraljic, P. (1983, September). Purchasing must become supply management. Harvard Business Review. · CIPS. (n.d.). Kraljic matrix – What is the Kraljic matrix? · S03 · Chartered Institute of Procurement & Supply. (n.d.). What is procurement? · S04 · Global Business Travel Association. (2025, July 21). Global business travel and events prices set to stabilize through 2025 and 2026 [Press release]. · S05 · American Express Global Business Travel. (2025). 2026 global meetings & events forecast. · S06 · CWT. (n.d.). How meetings & events programs can navigate a volatile planning environment. · S08 · Keller, M. (2024, May 13). Contract negotiations: 2024 update. Association Conventions & Facilities. · S09 · Johnson, B. (2019, January 4). Win at negotiating AV services with hotels. Smart Meetings. · S10 · Meetings Today. (2026). Expert planner chatter on managing AV costs, budgets, risk and communication. · S11 · Scofidio, B. (2026, August 4). Procurement to planners: We’re not the enemy. Skift Meetings. · S12 · PON Staff. (2026, June 15). Expanding the pie: Integrative versus distributive bargaining. Program on Negotiation at Harvard Law School. · S13 · NPR. (2026, April 15). Jury finds that Live Nation acted as a monopoly and overcharged ticket buyers.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm URL và nguồn phụ): buoi-07_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn S01–S25 ghi ở chân slide.
- **S31. Tài liệu tham khảo (2/2)**
  - Nội dung: S14 · Smart Meetings. (2018, March 23). Hilton joins Marriott in cutting commissions to independent planners. · S15 · VnExpress. (2025). Những tranh chấp khiến concert “Về đây bốn cánh chim trời” hủy phút chót. · S16 · Dân trí. (2023, December 22). Show K-Pop Open Air #2 bị hủy: Có bên than phải “đánh đổi” cả nửa tỷ đồng. · S18 · Nguyễn, H. (2026, April 20). Chi phí tổ chức sự kiện doanh nghiệp [Bảng giá 2026]. A.M Agency. · S19 · The Drum. (2025, May 22). Cash flow crunch: US agencies struggle to grow as late payments and scope creep bite. · S20 · Xuân Hướng, & Tạ Thị Oanh. (2025). Concert và sự phát triển của âm nhạc trong giai đoạn mới. Tạp chí Văn hóa Nghệ thuật, (610). · S21 · Người Lao Động. (2025, November 26). Ông Nguyễn Quốc Kỳ nói về việc bán hết cổ phần Vietravel Airlines và rút khỏi mảng hàng không. · S22 · Nhân Dân. (2026, September 7). Nghệ sĩ Việt chật vật làm liveshow. · S23 · VnExpress. (2024, September 30). Du lịch MICE Việt tiềm năng nhưng vẫn “dưới kỳ vọng”. · VnEconomy. (2025, June 20). Hè 2025 “đón sóng” du lịch MICE nội địa. · S24 · Trung tâm Hội nghị Quốc gia. (n.d.). Tiệc cuối năm – Year End Party. · S25 · Wheeler Menegus, D. (2017, November 7). Events and procurement – Working together for success. BizBash.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm URL và nguồn phụ): buoi-07_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn S01–S25 ghi ở chân slide.

### Buổi 8 — Governing the Key Account Relationship & Multi-dimensional Performance Measurement

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 8.1 Bow-tie → Diamond · 8.2 Đo lường · 8.3 Đánh giá chung · Tổng kết |
| Số slide · trạng thái | 30 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W08_KAM_Governance_Measurement.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 8 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · Governing the Key Account Relationship & Multi-dimensional Performance Measurement · Stakeholders Management for Events / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Agency · Key Account
  - Ghi chú GV: Slide 1 (dàn ý #1). ⏎ Alt-text: hình kim cương, bên trái là nhóm người của agency, bên phải là nhóm người của Key Account, nối với nhau bằng năm đường song song.
- **S2. Đầu mối duy nhất nghỉ việc — Nova còn gọi được cho ai?**
  - Nội dung: Ngoài chị Hạnh, Nova quen bao nhiêu người ở An Phát? · 1 · Chị Hạnh · GĐ Marketing, An Phát · “Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc mới là anh Minh.” · 0 · 1–2 · 3 trở lên · Dự án cũ của nhóm bạn: nếu người liên hệ phía khách hàng nghỉ việc ngày mai, nhóm còn gọi được cho ai? · 2 · 3 năm làm việc — mọi việc đều qua chị Hạnh / Gala 12/12 vừa thành công / Nova chưa từng gặp anh Minh
  - Chân slide: Tình huống giả định (tiếp nối Buổi 1 và Buổi 7) — tên người và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Đọc: “Tháng 1, gala 12/12 của An Phát vừa thành công. Sáng nay, KAMer của Nova nhận tin nhắn từ chị Hạnh, Giám đốc Marketing của An Phát, người làm việc với Nova suốt 3 năm: ‘Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc mới là anh Minh.’ Nova chưa từng gặp anh Minh.” ⏎ Cho lớp giơ tay; ghi số phiếu lên bảng. ⏎ Chốt: “Ba năm làm tốt chưa chắc đã đủ. Nếu toàn bộ quan hệ nằm trong một sợi dây, sợi dây đó đứt là mất khách. Hôm nay ta học cách tổ chức quan hệ với Key Account (8.1), đo nó (8.2) và cùng khách hàng kiểm tra nó định kỳ (8.3).”
- **S3. Buổi 8 trả lời ba câu hỏi: tổ chức, đo lường, cùng kiểm tra**
  - Nội dung: 8.1 · 8.2 · 8.3 · Tổ chức · Đo lường · Cùng kiểm tra · Ai của agency gặp ai của Key Account? Từ Bow-tie đến Diamond · Chỉ số quá trình báo trước, chỉ số kết quả xác nhận; khung ROI cho từng sự kiện · Đánh giá chung hai chiều và dấu hiệu cảnh báo sớm
  - Ghi chú GV: Giới thiệu cấu trúc buổi: 8.1 cấu trúc quan hệ nhiều cấp; 8.2 chỉ số đo hiệu quả quan hệ và từng sự kiện; 8.3 đánh giá chung định kỳ với Key Account.
- **S4. Bow-tie: mọi thông tin đi qua một điểm**
  - Nội dung: Agency · Key Account · CEO · Lãnh đạo · KAMer · Đầu mối · Sản xuất · Truyền thông · Tài chính · Tài chính · một điểm nối duy nhất
  - Chân slide: T01: McDonald, Millman & Rogers (1997) · T03: pharmaphorum · T05: Kim Tasso.
  - Ghi chú GV: Nguồn gốc: nhóm nghiên cứu KAM ở Cranfield (McDonald, Millman & Rogers, 1997, T01) mô tả quan hệ với Key Account phát triển qua nhiều giai đoạn. Trước đó Millman & Wilson (1995, T02): từ “key account selling” sang “key account management”. ⏎ Alt-text: hình nơ bướm — hai tam giác chạm nhau ở một điểm; các bộ phận của agency (trái) và của Key Account (phải) chỉ nối với nhau qua KAMer và đầu mối.
- **S5. Diamond: các bộ phận hai bên làm việc trực tiếp, KAMer điều phối**
  - Nội dung: Nova (agency) · An Phát (Key Account) · CEO · Phó TGĐ Khối Marketing · KAMer · GĐ Marketing · Producer · Truyền thông nội bộ · Creative Lead · Brand team · Kế toán dự án · Tài chính / Mua sắm · KAMer điều phối mọi cặp
  - Chân slide: T03: pharmaphorum · T04: SBI.
  - Ghi chú GV: [VERIFY: tên và số giai đoạn trong mô hình gốc (ví dụ Exploratory, Basic, Cooperative, Interdependent, Integrated) mới đọc qua nguồn thứ cấp T03 — đối chiếu T01 trước khi nói chi tiết] ⏎ Diamond: các bộ phận tương ứng hai bên làm việc trực tiếp; KAMer vẫn điều phối toàn bộ. ⏎ Alt-text: hai nhóm người (agency bên trái, Key Account bên phải) nối với nhau bằng năm đường song song; KAMer ở giữa nhóm agency có vòng điều phối.
- **S6. Bow-tie → Diamond là lộ trình, không phải sai → đúng**
  - Nội dung: Giai đoạn đầu · Gắn kết sâu · thăm dò, cơ bản → Bow-tie · phụ thuộc lẫn nhau, tích hợp → Diamond · Diamond là đích đến khi quan hệ đã đủ sâu và Key Account đủ quan trọng — không phải điểm xuất phát. · Buổi 2: chọn Key Account · Buổi 6: cost-to-serve
  - Chân slide: T03: mô tả của McDonald được dẫn lại (nguồn thứ cấp).
  - Ghi chú GV: Ý cần chốt: “Mới làm sự kiện đầu tiên cho một khách hàng mà đã đòi gặp Ban giám đốc, đòi mọi bộ phận hai bên kết nối, thì vừa tốn nguồn lực, vừa có thể làm khách hàng khó chịu. Diamond là ĐÍCH ĐẾN khi quan hệ đã đủ sâu và Key Account đủ quan trọng.” ⏎ Nối Buổi 2 (chọn Key Account) và Buổi 6 (cost-to-serve). ⏎ [VERIFY: tên các giai đoạn quan hệ — đối chiếu T01]
- **S7. Bow-tie đứt khi người chủ chốt ở bất kỳ bên nào rời đi**
  - Nội dung: Bow-tie · Diamond · Ưu điểm · Đơn giản; KAMer kiểm soát nhiều, ít bất ngờ · Quan hệ sâu, hiểu khách hàng hơn, cơ hội giải pháp lớn, không phụ thuộc một người · Nhược điểm · Người chủ chốt ở phía mình hoặc phía khách hàng rời đi → có thể mất quan hệ · Tốn nguồn lực; nhiều quyết định lớn nằm ngoài tầm kiểm soát của KAMer · “First, if anything happens to the key person in your firm or client-side you are at risk of losing that relationship” / — Kim Tasso (T05)
  - Chân slide: T03, T04, T05.
  - Ghi chú GV: Nhấn mạnh chữ “ở phía mình HOẶC phía khách hàng” — KAMer của agency nghỉ việc cũng làm đứt Bow-tie.
- **S8. Quan hệ kéo dài hơn nhiệm kỳ người ra quyết định**
  - Nội dung: ~10 năm · 4,3 năm · Một quan hệ · → 2–3 người khác nhau ở cùng một ghế · quan hệ khách hàng – agency trải nghiệm (dài nhất trong các loại agency) · nhiệm kỳ trung bình của CMO tại Fortune 500, năm 2024 · Mỗi lần đổi người là một lần quan hệ có thể đứt. · T07 · T08
  - Chân slide: T07: ANA & 4As (2025) · T08: Spencer Stuart (2025). Số liệu Mỹ, doanh nghiệp rất lớn — chưa kiểm chứng chéo.
  - Ghi chú GV: Quan hệ khách hàng – agency trung bình khoảng 7 năm (2016: 3,2 năm); agency trải nghiệm dài nhất, khoảng 10 năm (T07). ⏎ Nói to phép tính: “Nếu quan hệ kéo dài 10 năm mà người ra quyết định phía khách hàng chỉ ngồi ghế khoảng 4 năm, thì trong một quan hệ agency có thể làm việc với 2–3 người khác nhau ở cùng một vị trí. Mỗi lần đổi người là một lần quan hệ có thể đứt.” ⏎ Nói rõ: số liệu Mỹ, không suy rộng nguyên xi cho Việt Nam.
- **S9. Ở Việt Nam, “quan hệ” làm Bow-tie vừa bền vừa mong manh**
  - Nội dung: Bền: quan hệ tình cảm KAMer – đầu mối giữ Bow-tie chạy tốt nhiều năm · Thể diện · Có qua có lại · Tình cảm · Mong manh: tình cảm gắn với người, không gắn với tổ chức · Ba thành tố của “quan hệ” (T17) · → Diamond chuyển một phần quan hệ cá nhân thành quan hệ giữa hai tổ chức.
  - Chân slide: T17: Pham & Pham (2025) · T18: McMillan & Woodruff (1999).
  - Ghi chú GV: Nghiên cứu về “quan hệ” trong kinh doanh Việt Nam nêu ba thành tố: thể diện, có qua có lại, tình cảm (T17). Nghiên cứu thời kỳ đầu đổi mới: quan hệ giao dịch càng lâu thì bên bán càng tin cho khách trả chậm (T18). ⏎ Nhận định của người soạn: tình cảm gắn với con người, không gắn với tổ chức. Khi đầu mối rời đi, người mới có thể coi agency là “người của sếp cũ”.
- **S10. Diamond của event agency: mỗi cặp một mục đích, một nhịp gặp**
  - Nội dung: Nova (agency) · An Phát (Key Account) · Làm việc về · Nhịp gặp · CEO / GĐ điều hành · Phó TGĐ Khối Marketing · Định hướng hợp tác nhiều năm · 1–2 lần/năm + sự kiện lớn · KAMer / Account Director · Giám đốc Marketing · Kế hoạch năm, ngân sách, ưu tiên · Hằng tháng + đánh giá định kỳ · Producer · Trưởng ban Sự kiện / Truyền thông nội bộ · Kịch bản, tiến độ, chất lượng · Theo dự án · Creative Lead · Brand team · Ý tưởng, nhận diện thương hiệu · Theo dự án · Kế toán dự án · Tài chính / Mua sắm · Hợp đồng, thanh toán, chứng từ · Theo dự án + cuối năm
  - Chân slide: Nhận định của người soạn, dựa trên T04 (ghép chuyên môn với chuyên môn) và T06 (lãnh đạo tham gia nhiều cấp).
  - Ghi chú GV: Ranh giới (quyết định GV): chỉ bàn AI của agency gặp AI của Key Account; không đi vào tuyển dụng, đánh giá, đãi ngộ đội KAM. ⏎ [NEEDS PROFESSOR INPUT: ví dụ sơ đồ tiếp xúc thực tế của một event agency Việt Nam] ⏎ Hiểu lầm: “Diamond là cho càng nhiều người gặp khách hàng càng tốt” → mỗi cặp phải có mục đích và nhịp gặp; KAMer vẫn điều phối. Nhiều người nói nhiều thông điệp khác nhau còn nguy hiểm hơn Bow-tie.
- **S11. Lãnh đạo agency là thành viên của đội khách hàng, không chỉ là cái tên**
  - Nội dung: Executive sponsorship · Executive engagement · Lãnh đạo chỉ đứng tên, xuất hiện khi có sự cố · Lãnh đạo là thành viên có trách nhiệm của đội khách hàng · “Strategic account management is a team sport and requires cross-functional, multi-tiered vertical level engagement and strong accountability.” / — SAMA (T06) · Dấu hiệu đã đạt Diamond: agency được mời vào họp nội bộ của khách hàng, như lập kế hoạch năm (T04).
  - Chân slide: T06: Côté (2021), SAMA · T04: SBI.
  - Ghi chú GV: SAMA: nhiều công ty coi executive sponsor chỉ là một cái tên trên slide, hoặc người gọi khi có sự cố. Nên chuyển sang executive engagement — lãnh đạo là thành viên có trách nhiệm của đội khách hàng; ghép đúng lãnh đạo với đúng khách hàng. ⏎ Hiểu lầm: “Có quan hệ tốt với sếp là đủ” → vẫn là Bow-tie, chỉ là nơ bướm ở tầng cao hơn. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S12. Thực hành 1 · Từ nơ bướm sang kim cương: sơ đồ tiếp xúc Nova – An Phát**
  - Nội dung: 5/1: chị Hạnh báo nghỉ từ 1/2 · anh Minh (GĐ Marketing mới) chưa gặp Nova · hợp đồng gala vừa rồi ~2,2 tỷ · Vẽ hiện trạng: đây là Bow-tie hay Diamond? · 5’ · Người ở An Phát — Nova quen đến đâu? · Chị Hạnh · GĐ Marketing (sắp nghỉ) · rất thân · Diamond mục tiêu 6 tháng: ≤ 5 cặp — ai ↔ ai, mục đích, nhịp gặp · Anh Minh · GĐ Marketing mới · 10’ · chưa gặp · Ông Tuấn · Phó TGĐ · chỉ bắt tay · 3 việc trong 30 ngày để anh Minh không coi Nova là “agency của sếp cũ” · 5’ · Chị Lan · Truyền thông nội bộ · qua chị Hạnh · Anh Khoa · Ngân sách – mua sắm · chỉ gửi hồ sơ · Chỉ bàn ai của Nova gặp ai của An Phát — không bàn tổ chức đội ngũ bên trong Nova. · Chị Vy · Thương hiệu · chưa làm việc
  - Chân slide: Phiếu W08_activity_S3_so_do_tiep_xuc.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Đồng hồ 5 / 10 / 5 phút. ⏎ Lời mở đầu: “Bước 1: vẽ đúng những đường quan hệ đang có, đừng vẽ điều mình mong muốn. Bước 2: Diamond mục tiêu 6 tháng, tối đa 5 cặp, mỗi cặp có mục đích và nhịp gặp. Bước 3: 3 việc trong 30 ngày để giữ An Phát. Giữ lại tờ giấy: lát nữa mang vào buổi họp với anh Minh.” ⏎ Khi chốt: vẽ nhanh Bow-tie Nova – An Phát lên bảng. Thảo luận: nên để ai của Nova gặp anh Minh trước — KAMer hay CEO?
- **S13. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng. Xếp cặp cho S6 trong giờ giải lao.
- **S14. Anh Minh hỏi: “Nova đã mang lại gì?” — trả lời bằng số**
  - Nội dung: “Ba năm qua, Nova đã mang lại gì cho ngân hàng?” · Cảm giác · Số liệu · “Khách vui lắm anh ạ.” · Chỉ số quá trình + chỉ số kết quả mà hai bên cùng theo dõi
  - Ghi chú GV: Mở đoạn S4: “Nova giữ An Phát 3 năm. Nhưng nếu anh Minh hỏi: ‘Nova đã mang lại gì cho ngân hàng?’, Nova trả lời bằng gì? Bằng cảm giác ‘khách vui lắm’, hay bằng số?”
- **S15. Chỉ số quá trình báo trước, chỉ số kết quả xác nhận**
  - Nội dung: Process-driven · chỉ số quá trình · Results-driven · chỉ số kết quả · Đo gì · Việc đang làm và sức khỏe quan hệ: tiếp xúc, đánh giá định kỳ, hài lòng · Điều đã xảy ra: doanh thu, lợi nhuận, tái ký · Tính chất · Leading — dẫn dắt, báo trước kết quả · Lagging — chỉ số trễ, biết khi đã muộn · Đèn báo trên taplô / thấy vấn đề trước khi xe hỏng · Đồng hồ cây số / xác nhận quãng đường đã đi · ! · km
  - Chân slide: T09: Tzempelikos & Gounaris (2015) · T10: Fakhreddin, Foroudi & Kooli (2025).
  - Ghi chú GV: Ý cần chốt: “Chỉ số quá trình là đèn báo trên taplô, chỉ số kết quả là đồng hồ cây số. Chỉ nhìn đồng hồ cây số thì khi biết xe hỏng đã quá muộn.” ⏎ [VERIFY: danh sách thực hành KAM ở cấp “control” và các biến đo trong T09 mới đọc qua tóm tắt — đọc toàn văn trước khi trích chi tiết]
- **S16. Nghiên cứu: thực hành KAM tạo kết quả thông qua quan hệ**
  - Nội dung: 1 · 2 · 3 · 4 · Định hướng KAM · Năng lực quan hệ & năng lực KAM · Lợi thế cạnh tranh · Hiệu quả thị trường & tài chính · 568 / doanh nghiệp B2B châu Âu được khảo sát (T10) · Sự hài lòng của Key Account bổ trợ lợi thế khác biệt hóa, làm tăng hiệu quả tài chính.
  - Chân slide: T09: Tzempelikos & Gounaris (2015), Industrial Marketing Management · T10: Fakhreddin et al. (2025), Industrial Marketing Management.
  - Ghi chú GV: T09: thực hành KAM (cấp chiến lược, tổ chức, chiến thuật, kiểm soát) ảnh hưởng đến hiệu quả thông qua năng lực quan hệ và các kết quả quan hệ. ⏎ T10: khảo sát 568 doanh nghiệp B2B châu Âu — định hướng KAM → năng lực quan hệ và năng lực KAM → lợi thế cạnh tranh → hiệu quả thị trường và tài chính. Sự hài lòng của Key Account bổ trợ lợi thế khác biệt hóa, làm tăng hiệu quả tài chính. ⏎ Alt-text: chuỗi mũi tên bốn bước.
- **S17. Bộ chỉ số cho quan hệ Nova – An Phát**
  - Nội dung: Quá trình · leading · Kết quả · lagging · Số đầu mối và số cấp Nova có quan hệ / Nhịp gặp lãnh đạo hai bên / Số buổi đánh giá định kỳ đúng hạn / Thời gian phản hồi / Mức hài lòng sau mỗi sự kiện / Được mời vào họp kế hoạch năm? · Doanh thu từ An Phát / năm / Biên lợi nhuận trên An Phát (cost-to-serve) / Share of wallet: tỷ trọng ngân sách sự kiện Nova nắm / Số năm quan hệ, tái ký
  - Chân slide: Nhận định của người soạn; “được mời họp kế hoạch năm” theo T04; biên lợi nhuận nối cost-to-serve (Buổi 6).
  - Ghi chú GV: Cho lớp đoán nhanh: đọc to từng chỉ số (xáo trộn), lớp nói thuộc cột nào, rồi mới chiếu. ⏎ Hiểu lầm: “Đo càng nhiều chỉ số càng tốt” → chọn vài chỉ số mà hai bên cùng đồng ý và cùng theo dõi.
- **S18. ROI Methodology: đặt mục tiêu từ trên xuống, đo từ dưới lên**
  - Nội dung: 5 cấp — ROI Institute · 6 cấp — Event ROI Institute · đặt mục tiêu từ cấp 5 · 5 · 5 · ROI · ROI · 4 · 4 · Impact · Impact · 3 · 3 · Behaviour · 2 · Application · đo từ cấp 0 / 1 · Learning · 2 · 1 · Learning · Hài lòng · 1 · 0 · Reaction · Đúng người · Thực tế: hầu hết tổ chức chỉ đo cấp 1 — phiếu khảo sát cuối sự kiện (T11).
  - Chân slide: T11: Phillips, Breining & Phillips (2008); Event ROI Institute · T12: Amex GBT (2025), chưa KCC.
  - Ghi chú GV: Phương pháp phát triển từ mô hình đánh giá đào tạo của Kirkpatrick (1959); Jack Phillips và ROI Institute đưa vào vận hành (T11). ⏎ Thực tế: hầu hết tổ chức chỉ đo cấp 1 bằng phiếu khảo sát cuối sự kiện. Theo Amex GBT, chỉ khoảng 1/4 tổ chức có chỉ số ROI trong chính sách sự kiện; báo cáo đề xuất đo Return on Experience (ROE). ⏎ [VERIFY: 24%/26% Amex — đối chiếu biểu đồ gốc để chắc con số nào đi với nhãn “ROI metrics”] ⏎ Alt-text: hai cầu thang đặt cạnh nhau; cầu thang bên phải có thêm bậc 0.
- **S19. Khung 6 cấp thêm “đúng người”, “học về quan hệ” và “sứ mệnh thay ROI”**
  - Nội dung: Cấp · Cấp · Cấp · 0 · 2 · 5 · Đúng người tham dự · Học về quan hệ · Sứ mệnh thay ROI · Mời người có khoảng trống lớn nhất về hiểu biết và hành vi · Learning gồm cả relationship learning · Sự kiện hiệp hội, nhà nước: lợi nhuận không phải mục tiêu · “Meetings and events create value to stakeholders by influencing the behavior of the participants.” — Event ROI Institute
  - Chân slide: T11: Event ROI Institute, Methodology.
  - Ghi chú GV: Cấp 0: mời những người có khoảng trống lớn nhất về hiểu biết và hành vi — “không cần nói với người đã được thuyết phục”. ⏎ Cấp 1 trong khung 6 cấp: hài lòng chỉ là biến đại diện cho chất lượng môi trường học. Cấp 4: luôn phải tách riêng tác động của sự kiện (tốt nhất nhóm đối chứng; thay thế: người tham dự tự ước lượng). ⏎ Trích bổ sung: “For association and government events, profit is usually not an objective… this is the mission that replaces ROI.” ⏎ Hiểu lầm: “Khách hài lòng 4,5/5 là sự kiện thành công” → mới là cấp 1; thành công khi người tham dự làm điều gì đó khác đi.
- **S20. Với agency Việt Nam: khung 6 cấp, bản rút gọn**
  - Nội dung: ■ Việt Nam   ■ Hoa Kỳ · Quyền lực tập trung ở lãnh đạo · → Cấp 0: “mời đúng người” thành chỉ số · PDI · khoảng cách quyền lực · Coi trọng quan hệ, tập thể · → Cấp 2: đo cả “học về quan hệ” · 70 · 40 · Kết quả đến muộn, khó tách riêng · → Chấp nhận người tham dự tự ước lượng · IDV · chủ nghĩa cá nhân · 20 · 91 · Ít chuộng quy trình nặng · → Bản rút gọn: vài KPI then chốt · UAI · né tránh bất định · Nhiều sự kiện nhà nước, hiệp hội · → Sứ mệnh thay cho ROI · 30 · 46 · Thể diện: phiếu hài lòng dễ nghiêng về tích cực → thêm chỉ số hành vi quan sát được. · Điểm quốc gia ≠ từng khách hàng.
  - Chân slide: T16: Hofstede (2015), thang 0–100 · T17, T18 · Nhận định của người soạn (đã được GV duyệt).
  - Ghi chú GV: Chưa có nghiên cứu thực nghiệm so sánh hai phiên bản cho sự kiện tại Việt Nam. ⏎ • Khoảng cách quyền lực cao (PDI 70 vs Mỹ 40): lãnh đạo khách hàng quyết định mục tiêu và danh sách khách mời → cấp 0 biến “mời đúng người” thành chỉ số. ⏎ • Tập thể cao (IDV 20), coi trọng quan hệ: giá trị lớn của sự kiện là quan hệ, khó quy ra tiền → cấp 2 có “học về quan hệ”. ⏎ • Quan hệ dài hạn có giá trị kinh tế (T18): kết quả đến muộn → chấp nhận ước lượng của người tham dự. ⏎ • Né tránh bất định thấp (UAI 30): bộ đo nặng khó duy trì → bản rút gọn vài KPI then chốt. ⏎ • Nhiều sự kiện nhà nước, hiệp hội → sứ mệnh thay ROI. ⏎ Lưu ý thể diện: phiếu hài lòng ngay sau sự kiện dễ nghiêng về tích cực → bổ sung chỉ số hành vi quan sát được. [VERIFY: chưa có nguồn thực nghiệm về độ lệch khảo sát do thể diện tại VN] ⏎ Nhắc lớp: điểm Hofstede là xu hướng quốc gia, không dùng để đóng khung một khách hàng cụ thể (Buổi 3).
- **S21. Agency cam kết cấp 0–3; cấp 4–5 đo cùng Key Account**
  - Nội dung: Cấp 0–3 / Agency chủ động cam kết và báo cáo — kiểm soát được nhiều. · 5 · ROI · 4 · Impact · 3 · Behaviour · 2 · Cấp 4–5 / Chỉ đo khi Key Account đồng ý chia sẻ dữ liệu — thống nhất từ đầu trong buổi đánh giá định kỳ. · Learning · 1 · Hài lòng · 0 · Đúng người · agency cam kết · đo cùng Key Account
  - Chân slide: Nhận định của người soạn, dựa trên T11, T12 (đã được GV duyệt).
  - Ghi chú GV: Cấp 0–3: agency chủ động cam kết và báo cáo vì kiểm soát được nhiều. ⏎ Cấp 4–5: chỉ đo khi Key Account đồng ý chia sẻ dữ liệu, thống nhất từ đầu trong buổi đánh giá định kỳ (8.3). Sự kiện nhà nước, hiệp hội: thay cấp 5 bằng mục tiêu sứ mệnh. ⏎ Hiểu lầm: “Chỉ số là việc của khách hàng” → Key Account thường còn yếu trong đo lường (T12); agency chủ động đề xuất bộ chỉ số là giá trị cộng thêm (nối Buổi 5, CVP). ⏎ Alt-text: bậc thang 6 cấp chia hai vùng — cấp 0–3 agency cam kết, cấp 4–5 đo cùng Key Account.
- **S22. Đánh giá chung là họp hai bên, không phải khách chấm điểm agency**
  - Nội dung: 1 · 2 · 3 · 4 · 5 · Hỏi thăm quan hệ · Đã hứa gì – đã làm gì · Kết quả theo chỉ số đã thống nhất · Đánh giá hai chiều · Đề xuất quý tới + hẹn buổi sau · Ai dự: lãnh đạo hai bên, không chỉ KAMer và đầu mối · 66% agency kỹ thuật số có họp đánh giá theo quý (QBR) chính thức cho tất cả hoặc một phần khách hàng
  - Chân slide: T13: Promethean Research (2026) — khảo sát 165 agency kỹ thuật số, không phải event agency, chưa KCC · T06.
  - Ghi chú GV: Nhiều agency họp đánh giá theo quý (QBR). T13: 66% có QBR chính thức cho tất cả hoặc một phần khách hàng; agency có QBR chính thức báo cáo quan hệ dài hơn. Nói rõ: agency kỹ thuật số. ⏎ Với event agency: nhịp theo quý hoặc theo mùa sự kiện của Key Account (nhận định của người soạn). ⏎ Ai dự: lãnh đạo hai bên, không chỉ KAMer và đầu mối (T06) — đây cũng là lúc vẽ thêm các cạnh của Diamond. ⏎ Hiểu lầm: “Không có vấn đề thì không cần họp” → khoảng lặng giữa các lần gặp là lúc dễ mất khách nhất.
- **S23. Đánh giá hai chiều cho agency cơ hội góp ý mà không mất thể diện**
  - Nội dung: Agency có thể nêu, như một phần quy trình: · 82% · 59% · Duyệt kịch bản chậm / Đổi brief sát ngày / Thay người phụ trách giữa chừng · doanh nghiệp đánh giá agency định kỳ, chính thức · dùng đánh giá hai chiều (360°) — agency cũng đánh giá khách hàng · “Two-way, or 360-degree, evaluations in which the agency also evaluates the client are used by a majority of firms (59 percent).” — ANA (T14)
  - Chân slide: T14: ANA (2009) — khảo sát tại Mỹ, nguồn cũ; bản cập nhật chỉ dành cho thành viên.
  - Ghi chú GV: Thực hành tốt (T14): người điều phối trung lập, mẫu đánh giá thống nhất, kế hoạch hành động sau đánh giá. ⏎ Nhận định của người soạn: đây là dịp chính thức để agency nói những điều khách hàng làm khiến chất lượng giảm (duyệt kịch bản chậm, đổi brief sát ngày) mà không làm mất thể diện của ai — vì đó là phần của quy trình, không phải lời phàn nàn.
- **S24. Mỗi sự kiện một báo cáo; nhiều báo cáo là trí nhớ của quan hệ**
  - Nội dung: Lịch sử quan hệ · Sự kiện · Họp trực tiếp ngay sau sự kiện · Báo cáo xong trong 60 ngày · “A collection of PERs over time will provide the complete history for an event.” / Khi đầu mối phía khách hàng thay người, đây là trí nhớ của quan hệ. · Đầu vào cho đánh giá định kỳ
  - Chân slide: T15: Convention Industry Council (2005), APEX Post-Event Report — mẫu gốc dùng giữa nhà tổ chức và địa điểm.
  - Ghi chú GV: Nói rõ: mẫu APEX PER gốc dùng giữa nhà tổ chức và địa điểm; agency mượn logic này cho quan hệ với Key Account (nhận định của người soạn). ⏎ Báo cáo sau từng sự kiện là dữ liệu đầu vào cho buổi đánh giá định kỳ; khi đầu mối phía khách hàng thay người, đây là “trí nhớ” của quan hệ. ⏎ Alt-text: dòng chảy từ sự kiện → họp ngay sau sự kiện → báo cáo trong 60 ngày → chồng báo cáo thành lịch sử quan hệ → đánh giá định kỳ.
- **S25. Khách hàng hiếm khi báo trước là sẽ rời đi**
  - Nội dung: ! · ! · ! · ! · ! · Trả lời chậm hơn · Bỏ buổi đánh giá · Giao quan hệ cho người cấp thấp hơn · Thanh toán chậm · Đầu mối phía khách hàng thay người · ↑ như tin nhắn của chị Hạnh (slide 2) · 88% agency theo dõi ít nhất một chỉ số sức khỏe khách hàng · “An account that runs through a single client contact ends when that contact changes jobs.” — T13
  - Chân slide: T13: Promethean Research (2026) — khảo sát 165 agency kỹ thuật số, chưa KCC.
  - Ghi chú GV: T13: 88% agency theo dõi ít nhất một chỉ số “sức khỏe” khách hàng (mức tương tác, biến động nhân sự phía khách hàng, khảo sát hài lòng, trả tiền đúng hạn, lợi nhuận). ⏎ Nối lại S1: “Tin nhắn của chị Hạnh là dấu hiệu cảnh báo lớn nhất trong danh sách này. Và Nova chỉ có một sợi dây.” ⏎ Hiểu lầm: “Họp càng hình thức càng chuyên nghiệp” → quy trình quá cứng có thể làm yếu quan hệ (T10); giữ ngắn, có số liệu, có hành động tiếp theo. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S26. Thực hành 2 · Buổi đánh giá chung đầu tiên với anh Minh**
  - Nội dung: 20/2 · anh Minh dành 10 phút · Quý 1 anh rà soát toàn bộ nhà cung cấp marketing · Chuẩn bị: đội Nova soạn chương trình 5 phần · 8’ · Dữ liệu gala 12/12 theo khung 6 cấp · 540/600 khách (90%); 48/50 DN VIP có mặt · 0 · Họp — Nova dẫn; kết bằng biên bản 3 dòng · 10’ · Khảo sát 4,5/5 (210 phiếu) · 1 · Lật thẻ · 3’ · 72% biết thêm về gói tài chính DN mới · 2 · 35 DN đặt lịch gặp chuyên viên trong 2 tuần · 3 · Tổng kết toàn lớp · 6’ · Nova chưa có dữ liệu (của ngân hàng) · 4 · Biên bản: thống nhất gì · chỉ số nào theo dõi chung · buổi sau khi nào, ai dự · Chưa tính được · 5
  - Chân slide: Phiếu W08_activity_S6_danh_gia_chung.md · Tình huống giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút). Đồng hồ 8 / 10 / 3 / 6 phút. Phát thẻ vai cắt riêng; không cho bên kia xem trước bước lật thẻ. ⏎ Vai An Phát: anh Minh (chủ trì), chị Lan, anh Khoa. Vai Nova: anh Đức (CEO), chị Thảo (KAMer, dẫn họp), Producer. 1 người quan sát/nhóm. ⏎ Tổng kết từ góc agency: Nova chứng minh giá trị bằng chỉ số quá trình hay kết quả? Có dùng phần đánh giá hai chiều để nêu điều An Phát cần cải thiện không, có khéo không? Sơ đồ quan hệ có thêm cạnh nào? ⏎ Ghi biên bản 3 dòng của từng cặp lên bảng.
- **S27. Ba ý của Buổi 8**
  - Nội dung: Bow-tie → Diamond là lộ trình theo giai đoạn. Diamond đưa quan hệ từ người với người thành tổ chức với tổ chức. · 8.1 · Đo cả chỉ số quá trình (báo trước) và kết quả (xác nhận). Mỗi sự kiện: khung 6 cấp rút gọn — agency cam kết cấp 0–3, thống nhất cấp 4–5 với khách hàng. · 8.2 · Đánh giá chung định kỳ, hai chiều, có số liệu; theo dõi dấu hiệu cảnh báo sớm. · 8.3 · Stakeholder Management Plan: thêm một trang — sơ đồ tiếp xúc, 3 + 3 chỉ số, nhịp đánh giá chung.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang — sơ đồ tiếp xúc hiện tại và mục tiêu (Bow-tie → Diamond), 3 chỉ số quá trình và 3 chỉ số kết quả, nhịp đánh giá chung. Làm dần trên lớp, không giao về nhà.
- **S28. Phiếu kiểm tra cuối giờ**
  - Nội dung: Với khách hàng trong dự án cũ của nhóm bạn, quan hệ là Bow-tie hay Diamond? Nếu đầu mối phía khách hàng nghỉ việc ngày mai, nhóm gọi cho ai tiếp theo? · 1 · Viết 1 chỉ số quá trình và 1 chỉ số kết quả nhóm bạn sẽ đưa vào Stakeholder Management Plan. Chỉ số nào báo trước chỉ số nào? · 2 · Buổi 9: nhà đầu tư và nhà tài trợ — những bên liên quan giúp agency tạo thêm giá trị cho Key Account.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) SV nhận ra quan hệ của mình phụ thuộc một người không; (b) phân biệt đúng chỉ số dẫn dắt và chỉ số trễ; (c) chỉ số có đo được thật không (không viết “khách hài lòng” chung chung). ⏎ Câu nối Buổi 9: “Trong buổi đánh giá, anh Minh có thể hỏi: ‘Năm sau gala có thể bớt chi phí nhờ nhà tài trợ không?’ Buổi sau: nhà đầu tư và nhà tài trợ, những bên liên quan giúp agency tạo thêm giá trị cho Key Account.”
- **S29. Tài liệu tham khảo (1/2)**
  - Nội dung: T01 · McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. Journal of Marketing Management, 13(8), 737–757. · T02 · Millman, T., & Wilson, K. (1995). From key account selling to key account management. Journal of Marketing Practice: Applied Marketing Science, 1(1), 9–21. · T03 · pharmaphorum. (n.d.). Of bow ties and diamonds. · T04 · SBI. (n.d.). Key account management: Avoiding the “bow-tie” resource approach. · T05 · Tasso, K. (n.d.). KAM basics – Bowties and diamonds [Video]. · T06 · Côté, D. (2021, October 26). From executive sponsorship to executive engagement. Strategic Account Management Association. · T07 · Association of National Advertisers. (2025, April). New ANA and 4As report reveals client-agency relationship tenure has doubled since 2016 [Press release]. · T08 · Spencer Stuart. (2025). CMO tenure study 2025: The evolution of marketing leadership. · T09 · Tzempelikos, N., & Gounaris, S. (2015). Linking key account management practices to performance outcomes. Industrial Marketing Management, 45, 22–34.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-08_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn T01–T18 ghi ở chân slide.
- **S30. Tài liệu tham khảo (2/2)**
  - Nội dung: T10 · Fakhreddin, F., Foroudi, P., & Kooli, K. (2025). The influence of key account management on competitive advantage and firm performance. Industrial Marketing Management, 124, 266–286. · T11 · Phillips, J. J., Breining, M. T., & Phillips, P. P. (2008). Return on investment in meetings and events. Elsevier/Butterworth-Heinemann. · Event ROI Institute. (n.d.). Methodology. · T12 · American Express Global Business Travel. (2025). 2026 global meetings & events forecast. · T13 · Promethean Research. (2026, July 3). Client retention strategies for agencies (2026 guide). · T14 · Association of National Advertisers. (2009). Majority of marketers conduct formal agency performance evaluations according to new ANA survey [Press release]. · T15 · Convention Industry Council. (2005). The APEX post-event report template. · T16 · Hofstede, G. (2015). Dimension data matrix (version 2015-12-08) [Data set]. · T17 · Pham, H. H., & Pham, N. C. (2025). Marketing insights from Quan He: Navigating Vietnamese business practices for foreign investors in an emerging market. BIMTECH Business Perspectives. · T18 · McMillan, J., & Woodruff, C. (1999). Interfirm relationships and informal credit in Vietnam. The Quarterly Journal of Economics, 114(4), 1285–1320.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-08_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn T01–T18 ghi ở chân slide.

### Buổi 9 — Resource Matching: Investors & Sponsors

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 9.1 Tài trợ & đầu tư · 9.2 Đề xuất & ROI · 9.3 Điểm chạm · Tổng kết |
| Số slide · trạng thái | 29 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W09_Investors_Sponsors.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 9 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · Nhà tài trợ · Key Account · Agency · Resource Matching: Investors & Sponsors · Phần 3 · Điều phối các bên liên quan phục vụ hành trình khách hàng / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Khách của Key Account
  - Ghi chú GV: Slide 1 (dàn ý #1). Mở Phần 3 của học phần. ⏎ Alt-text: ba vòng tròn giao nhau — nhà tài trợ, Key Account, khách của Key Account — agency ở vùng giao giữa.
- **S2. Ngân sách giảm 10%, hai đối tác muốn “có mặt” — cứu cánh hay rắc rối?**
  - Nội dung: An Phát báo ngân sách gala cuối năm giảm ~10% · Cứu cánh? / bù ngân sách, thêm nội dung cho khách · Tháng 6 · muốn chất lượng không giảm · Anh Minh · Bảo hiểm Bình An và GlobalCard muốn “có mặt” ở gala · Cùng tuần · Rắc rối? / 600 khách VIP thấy mình bị mời đến để nghe bán hàng · Giơ tay: với Nova, hai đối tác này là gì?
  - Chân slide: Tình huống giả định (tiếp nối Buổi 1, 7, 8) — tên và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Đọc: “Tháng 6. An Phát báo Nova: ngân sách gala cuối năm nay giảm khoảng 10%, nhưng anh Minh muốn chất lượng không giảm. Cùng tuần đó, hai đối tác của ngân hàng là Bảo hiểm Bình An và tổ chức thẻ GlobalCard ngỏ ý muốn ‘có mặt’ ở gala.” ⏎ Giơ tay: cứu cánh hay rắc rối? Ghi số phiếu lên bảng. ⏎ Chốt: “Cả hai. Nhà tài trợ có thể bù phần ngân sách bị cắt, và nếu làm khéo còn làm sự kiện hay hơn. Nhưng nếu làm vụng, 600 khách VIP của An Phát sẽ thấy mình bị mời đến để nghe bán hàng. Hôm nay: làm sao để nhà tài trợ, An Phát và khách của An Phát cùng được lợi.”
- **S3. Phần 3: mỗi bên liên quan được gắn vào hành trình của Key Account**
  - Nội dung: Buổi 9 · Buổi 10 · Nhà tài trợ – nhà đầu tư · Nhà cung cấp – địa điểm · Key Account / và hành trình khách hàng · Buổi 11 · Buổi 12 · Truyền thông – KOL · Xung đột giữa các bên
  - Ghi chú GV: Mở Phần 3 (Buổi 9–12): điều phối các bên liên quan phục vụ hành trình khách hàng. Buổi 9 bắt đầu với nhà tài trợ và nhà đầu tư — đối tác của Key Account. ⏎ Alt-text: Key Account ở giữa, bốn buổi học xếp quanh: 9 nhà tài trợ – nhà đầu tư, 10 nhà cung cấp – địa điểm, 11 truyền thông – KOL, 12 xung đột.
- **S4. Tài trợ bắt đầu từ mục tiêu của nhà tài trợ, không từ chỗ in logo**
  - Nội dung: “Views objective‐setting as the cornerstone of sponsorship management…” / — Meenaghan (1983) · Bắt đầu từ: nhà tài trợ muốn đạt điều gì? · Không phải: sự kiện có chỗ nào để in logo? · Năm dòng nghiên cứu tài trợ (U02) — Buổi 9 đi qua cả năm · Bản chất · Quản trị · Đo lường hiệu quả · Sử dụng chiến lược · Pháp lý – đạo đức
  - Chân slide: U01: Meenaghan (1983), European Journal of Marketing · U02: Cornwell & Maignan (1998), Journal of Advertising.
  - Ghi chú GV: Tài trợ thương mại được nghiên cứu có hệ thống từ Meenaghan (1983). Đặt mục tiêu là nền tảng: bắt đầu từ câu hỏi nhà tài trợ muốn đạt điều gì. ⏎ Nghiên cứu tài trợ đi theo năm dòng (Cornwell & Maignan, 1998): bản chất tài trợ; quản trị tài trợ; đo lường hiệu quả; sử dụng chiến lược; pháp lý – đạo đức. Buổi 9 đi qua cả năm dòng. ⏎ Hiểu lầm: “Nhà tài trợ = người cho tiền để in logo” → nhà tài trợ mua quyền lợi để đạt mục tiêu; logo chỉ là một quyền lợi, thường không phải quan trọng nhất.
- **S5. Nhà tài trợ mua quyền lợi, nhà đầu tư chia sẻ rủi ro – lợi nhuận**
  - Nội dung: Nhà tài trợ · sponsor · Nhà đầu tư · investor · Đưa gì · Tiền, hiện vật, dịch vụ · Vốn cho sự kiện hoặc cho đơn vị sở hữu sự kiện · Nhận gì · Quyền lợi đã thỏa thuận: hiển thị, kích hoạt, tiếp cận khán giả, dữ liệu · Phần lợi nhuận (hoặc lỗ) của sự kiện · Rủi ro · Chủ yếu rủi ro hình ảnh và hiệu quả truyền thông · Thêm rủi ro tài chính: sự kiện lỗ thì mất vốn · Câu hỏi chính · “Quyền lợi này giúp tôi đạt mục tiêu marketing không?” · “Sự kiện này có sinh lời không?”
  - Chân slide: Định nghĩa làm việc của môn học (quyết định GV) — không phải định nghĩa chuẩn từ một nguồn học thuật.
  - Ghi chú GV: Ghi chú: đây là định nghĩa làm việc của môn. ⏎ Hiểu lầm: “Nhà đầu tư và nhà tài trợ như nhau” → khác nhau ở chỗ ai chịu rủi ro tài chính và ai nhận phần lợi nhuận.
- **S6. Techcombank: từ nhà tài trợ kim cương đến “nhà đồng đầu tư”**
  - Nội dung: 2024 · 2025 · Phía được tài trợ: Yeah1, năm 2024 · 845 / 1.000+ tỷ · Nhà tài trợ kim cương · “Nhà đồng đầu tư” · doanh thu từ quảng cáo và tư vấn truyền thông · chương trình và các đêm concert do Yeah1 sản xuất · đầu tư vào Yeah1 theo hình thức mới, không phải cổ phần · 126 tỷ lãi sau thuế (+378%) · Vì sao ngân hàng muốn chuyển vai? · “…Techcombank đều sẽ đồng hành không chỉ với vai trò nhà tài trợ, mà trở thành ‘nhà đồng đầu tư’.” — Znews
  - Chân slide: U08: Znews (20/1/2025); Tuổi Trẻ (3/1/2025) · U11: Tuổi Trẻ (23/1/2025). Đã kiểm chứng chéo.
  - Ghi chú GV: Case tham chiếu: “Anh trai vượt ngàn chông gai” do Yeah1 sản xuất. ⏎ Hỏi lớp: “Vì sao một ngân hàng muốn chuyển từ nhà tài trợ sang nhà đồng đầu tư?” Gợi ý: khi sự kiện thành công vượt kỳ vọng, nhà tài trợ chỉ nhận quyền lợi cố định, còn nhà đầu tư nhận thêm phần lợi nhuận; đổi lại phải chịu rủi ro lỗ. ⏎ Lưu ý: hình thức đầu tư mới, không phải đầu tư cổ phần. Logo thương hiệu thật chỉ dùng khi GV chấp nhận — slide này dùng tên chữ.
- **S7. Một thỏa thuận tốt có lợi cho bốn bên**
  - Nội dung: Hữu hình · Vô hình · Nhà tài trợ · Khách hàng tiềm năng, doanh số, dữ liệu (có đồng ý), mở tài khoản/thẻ · Nhận biết, thái độ tích cực, liên tưởng hình ảnh, quan hệ đối tác · Key Account (An Phát) · Bù ngân sách, thêm nội dung/tiện ích cho khách · Hình ảnh “hệ sinh thái đối tác”, quan hệ đối tác được củng cố · Khách của Key Account · Quà, dịch vụ, tư vấn hữu ích · Trải nghiệm tốt hơn, cảm giác được quan tâm · Agency (Nova) · Đủ ngân sách giữ chất lượng; phí dịch vụ kích hoạt · Vị thế đối tác tạo giá trị với Key Account
  - Ghi chú GV: Từ góc agency, một thỏa thuận tài trợ tốt phải có lợi cho bốn bên. Agency: nối Buổi 5 (CVP). ⏎ Hiểu lầm: “Nhà tài trợ càng lớn càng tốt” → phải phù hợp với Key Account và với khách của Key Account; sai phù hợp thì hại cả ba. ⏎ Alt-text: bảng bốn hàng (nhà tài trợ, Key Account, khách của Key Account, agency) × hai cột (hữu hình, vô hình).
- **S8. Nhà tài trợ đo lợi ích bằng hành vi khách: gửi tiền, mở thẻ**
  - Nội dung: Techcombank · VIB · VPBank · ~40% · +44%/năm · sớm 1 ngày · tỷ lệ CASA giữ ở mức khoảng 40% — vé 0 đồng gắn với tiền gửi, sinh lời tự động · số thẻ tăng kép trong 6 năm (nhà tài trợ kim cương Anh trai Say Hi) · chủ thẻ VPBank Mastercard được mua vé tour G-Dragon trước (title sponsor) · “ở mức”, không phải “tăng” · không quy hết cho tài trợ → tách tác động · quyền lợi gắn với mở thẻ · U08 · U09 · chưa KCC · U10
  - Chân slide: U08: Znews, Báo Đầu tư (đã KCC) · U09: Báo Đầu tư, số liệu VPBankS (chưa KCC) · U10: VnExpress, nội dung được tài trợ.
  - Ghi chú GV: Nhấn: Techcombank CASA “ở mức” khoảng 40%, không phải “tăng” 40%. Khách “săn vé 0 đồng” qua ứng dụng, gắn với tiền gửi và tính năng sinh lời tự động; số dư mảng sinh lời tự động tăng 35% so với quý trước. ⏎ VIB: hỏi “Có thể quy hết mức tăng 6 năm này cho một chương trình tài trợ không?” → không; nối Buổi 8: phải tách tác động. ⏎ VPBank: nhà tài trợ danh vị (title sponsor) tour G-Dragon tại Hà Nội.
- **S9. Ở Việt Nam, nhà tài trợ quyết định sự kiện có khả thi hay không**
  - Nội dung: Nối Buổi 1 · ≥ 50% · 35% · Primary hay secondary tùy bối cảnh · chi phí liveshow, concert tầm trung nên do nhà tài trợ gánh — theo một số bầu show · chuyên gia sự kiện trên thế giới tìm thêm nguồn tài trợ trước áp lực chi phí · Khi ngân sách phụ thuộc vào nhà tài trợ, họ trở thành bên liên quan primary. · U14 · U15
  - Chân slide: U14: Nhân Dân (7/9/2026) · U15: Amex GBT, 2026 Global Meetings & Events Forecast. Cả hai chưa kiểm chứng chéo.
  - Ghi chú GV: Với nhiều liveshow và concert tầm trung tại Việt Nam, theo một số bầu show, chỉ nên làm khi nhà tài trợ gánh ít nhất 50% chi phí (U14). ⏎ Nối Buổi 1: nhà tài trợ là primary hay secondary TÙY BỐI CẢNH. Khi ngân sách phụ thuộc vào nhà tài trợ, họ trở thành primary.
- **S10. Tài trợ là chuyển giao hình ảnh hai chiều**
  - Nội dung: Thương hiệu · Sự kiện · Thương hiệu bị giả mạo liên đới — không phải nhà tài trợ cờ bạc thật. Sự kiện vẫn sụp. / Với agency: thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ. · hình ảnh đi cả hai chiều — tốt lẫn xấu · Happy Day Concert · Đà Lạt · 3/2025 · 1 · 2 · 3 · Thương hiệu bị trang cờ bạc cắt ghép, giả mạo · Nhiều nghệ sĩ rút lui sát giờ · Dừng 2 đêm diễn, dời lịch
  - Chân slide: U12: Tuổi Trẻ; Công an Nhân dân (7/3/2025). Đã kiểm chứng chéo.
  - Ghi chú GV: Case Happy Day Concert, Đà Lạt, 3/2025: thương hiệu của đơn vị tổ chức bị các trang cờ bạc cắt ghép để quảng cáo; nhiều nghệ sĩ rút lui sát giờ; hai đêm diễn bị dừng, sau đó dời lịch với sự chấp thuận của Sở VHTTDL Lâm Đồng. ⏎ Ý cần chốt: “Ở đây thương hiệu bị GIẢ MẠO liên đới, không phải nhà tài trợ cờ bạc thật. Vậy mà sự kiện vẫn sụp. Với agency, thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ.”
- **S11. Agency không xin tài trợ cho mình — agency biến đối tác của Key Account thành giá trị cho khách**
  - Nội dung: Key Account · An Phát · đối tác của · khách hàng của · Nhà tài trợ / Bình An, GlobalCard · Khách của Key Account / 600 lãnh đạo doanh nghiệp VIP · Agency · Nova / thiết kế quyền lợi, kích hoạt, đo lường — thay mặt Key Account · trải nghiệm tại các điểm chạm
  - Ghi chú GV: Góc nhìn của môn: Nova không “xin tài trợ cho mình”. Nova giúp An Phát biến quan hệ đối tác của An Phát thành giá trị cho khách của An Phát. ⏎ → Chuyển sang S3 — Thực hành 1. ⏎ Alt-text: sơ đồ bốn bên — Key Account ở trên; nhà tài trợ bên trái là đối tác của Key Account; khách của Key Account bên phải; agency ở dưới giữa, thiết kế quyền lợi, kích hoạt, đo lường thay mặt Key Account và tạo trải nghiệm tại các điểm chạm cho khách.
- **S12. Thực hành 1 · Chọn nhà tài trợ cho gala của Key Account**
  - Nội dung: Gala An Phát · ~600 lãnh đạo DN VIP · ngân sách giảm ~220 triệu · không bán vé · Bảo hiểm Bình An / đối tác lâu năm · 400 tr · phát biểu 10’; bàn tư vấn cạnh khu tiệc · Chấm 1–5: phù hợp với An Phát · với khách của An Phát · rủi ro · 1 · 8’ · GlobalCard / đối tác thẻ DN · 300 tr · ưu đãi chủ thẻ; nhận diện ở check-in · 2 · Chọn 2 ứng viên: 1 lợi ích hữu hình + 1 vô hình cho bốn bên · 7’ · Xe điện Sao Việt / chưa có quan hệ · 500 tr · trưng bày, lái thử; nhận danh sách khách · 3 · Phần mềm Sổ Xanh / chưa có quan hệ · 80 tr · gian hàng phần mềm cho DN nhỏ · 4 · Nhanh Tiền: tài trợ hay đầu tư? + 1 câu giải thích với anh Minh về ứng viên bị từ chối · 5’ · Nhanh Tiền / chưa có quan hệ · 800 tr · “đồng tổ chức”, góp vốn chia lợi nhuận; từng bị phản ánh về đòi nợ · 5
  - Chân slide: Phiếu W09_activity_S3_chon_nha_tai_tro.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Đồng hồ 8 / 7 / 5 phút. Phát phiếu, đi vòng. 47–50’: chốt 3 ý. ⏎ Thảo luận: ứng viên nào nhóm nào cũng từ chối? Bình An là đối tác lâu năm — nhận Bình An nhưng thay đổi quyền lợi họ xin thì nên đổi thế nào? ⏎ Giữ lại kết quả: 2 nhà tài trợ nhóm chọn sẽ dùng ở S6.
- **S13. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S14. “Gói 400 triệu mang lại gì cho tôi?”**
  - Nội dung: Bảo hiểm Bình An hỏi Nova: / “Gói 400 triệu của các bạn mang lại gì cho tôi?” · Nếu Nova trả lời · Nova cần trả lời bằng · “Logo trên backdrop và 2 phút phát biểu.” · mục tiêu của Bình An → khán giả → quyền lợi → kích hoạt → cách đo · → Bình An trả giá 100 triệu
  - Ghi chú GV: Mở đoạn S4: “Bình An hỏi Nova: ‘Gói 400 triệu của các bạn mang lại gì cho tôi?’ Nếu Nova chỉ trả lời ‘logo trên backdrop và 2 phút phát biểu’, Bình An sẽ trả giá 100 triệu.”
- **S15. Đề xuất win-win có 7 phần**
  - Nội dung: 1 · 2 · 3 · 4 · 5 · 6 · 7 · Mục tiêu · Khán giả · Quyền lợi · Kích hoạt · Đo lường · Điều khoản · Giá · nhà tài trợ muốn gì · khách của Key Account là ai · theo hạng, gắn điểm chạm · làm gì, ngân sách riêng · ROO + ROI, ai cấp dữ liệu · đo lường ghi vào hợp đồng · phí quyền + kích hoạt · Bắt đầu từ mục tiêu của nhà tài trợ, kết thúc bằng cam kết đo lường ghi vào hợp đồng — không phải bảng giá logo.
  - Chân slide: Cấu trúc do người soạn dựng từ U01, U04–U07 — chưa có hướng dẫn chuẩn từ một hiệp hội.
  - Ghi chú GV: 1 Mục tiêu nhà tài trợ: nhận biết, thái độ, khách hàng tiềm năng, doanh số, quan hệ với Key Account (U01). ⏎ 2 Khán giả: ai là khách của Key Account, số lượng, hồ sơ, vì sao có giá trị với nhà tài trợ. ⏎ 3 Gói quyền lợi theo hạng (danh vị, kim cương, vàng) — gắn với điểm chạm (U07, U10). ⏎ 4 Kế hoạch kích hoạt: nhà tài trợ làm gì tại điểm chạm; ngân sách kích hoạt ngoài phí quyền (U04, U05). ⏎ 5 Cam kết đo lường: chỉ số ROO và ROI; ai cung cấp dữ liệu; báo cáo khi nào (U06; Buổi 8). ⏎ 6 Điều khoản: quyền và nghĩa vụ; kỳ vọng đo lường ghi vào hợp đồng; giới hạn pháp lý và trải nghiệm khách (U06, U13). ⏎ 7 Giá: phí quyền; phần kích hoạt nhà tài trợ tự chi. ⏎ Hiểu lầm: “Đề xuất tài trợ là bảng giá logo” → bắt đầu từ mục tiêu nhà tài trợ, kết thúc bằng cam kết đo lường.
- **S16. Win-win nghĩa là cả nhà tài trợ, Key Account và khách đều được lợi**
  - Nội dung: Nhà tài trợ / đạt mục tiêu (ROO/ROI) · Nhà tài trợ · Key Account · Key Account / giữ hình ảnh, bù ngân sách · Agency · Khách của Key Account / thấy có ích, không bị làm phiền · Agency / làm được sự kiện chất lượng · Khách của KA
  - Ghi chú GV: Win-win nghĩa là cả ba (bốn) bên: nhà tài trợ đạt mục tiêu, Key Account giữ được hình ảnh và bù được ngân sách, khách của Key Account thấy có ích, agency làm được sự kiện chất lượng. ⏎ Alt-text: ba vòng tròn giao nhau — nhà tài trợ, Key Account, khách của Key Account — agency ở vùng giao giữa.
- **S17. Quyền lợi không kích hoạt là quyền lợi bỏ phí**
  - Nội dung: Activation ratio = chi phí kích hoạt ÷ phí mua quyền · Khuyến nghị (U04) · 1:1 → 8:1 · Thực tế toàn cầu (U05) · 0,81:1 · 0:1 · 1:1 · 2:1 · 3:1 · 4:1 · 5:1 · 6:1 · 7:1 · 8:1 · 43% nhà tài trợ không biết mình chi bao nhiêu cho kích hoạt · 18% đạt tỷ lệ 1:1 trở lên · Chất lượng chiến lược kích hoạt quan trọng hơn con số tỷ lệ.
  - Chân slide: U04: O’Reilly & Lafrance Horning (2013), Sport Management Review · U05: Lumency / WFA (2024), chưa kiểm chứng chéo.
  - Ghi chú GV: Activation: khoản đầu tư của nhà tài trợ NGOÀI phí mua quyền để khai thác quyền lợi; đo bằng activation ratio = chi phí kích hoạt / phí quyền (U04). ⏎ Nghiên cứu trước khuyến nghị 1:1 đến 8:1; nhưng nghiên cứu tình huống cho thấy chất lượng chiến lược kích hoạt quan trọng hơn con số tỷ lệ. ⏎ Nhận định của người soạn: với agency, đây là cơ hội — đề xuất cả phần thiết kế kích hoạt cho nhà tài trợ, để quyền lợi không bị “mua rồi bỏ đó”. ⏎ Hiểu lầm: “Mua quyền xong là xong” → không có kích hoạt thì quyền lợi gần như vô giá trị.
- **S18. Đo tài trợ bằng cả ROI và ROO**
  - Nội dung: ROI  return on investment · ROO  return on objectives · Kết quả tài chính: lợi tức tài chính của khoản tài trợ, giá trị truyền thông quy đổi, doanh số · Kết quả theo mục tiêu: nhận biết thương hiệu, nhận biết việc tài trợ, thái độ, độ phủ truyền thông và mạng xã hội · “Only 40 percent of respondents write expectations about sponsorship measurement into contracts with properties…” / — ANA (U06) · 37% · 40% · có quy trình chuẩn đo lợi tức tài trợ · ghi kỳ vọng đo lường vào hợp đồng
  - Chân slide: U06: ANA & MASB (2018) — số liệu Bắc Mỹ.
  - Ghi chú GV: MASB khuyến nghị dùng mức độ ưa thích thương hiệu (brand preference) làm chỉ số then chốt. ⏎ Nhắc: số liệu Bắc Mỹ, 2018. ⏎ Hiểu lầm: “ROI tài trợ chỉ tính bằng doanh số” → gồm cả ROO; và phải tách tác động của sự kiện khỏi các yếu tố khác.
- **S19. Khung 6 cấp của Buổi 8 cũng dùng được cho nhà tài trợ**
  - Nội dung: ROI · Lợi ích quy tiền so với tổng chi phí · 5 · Impact · Số hợp đồng mới trong 3 tháng (dữ liệu Bình An) · 4 · Behaviour · Số DN đồng ý hẹn tư vấn sau sự kiện · 3 · Learning · % khách biết thêm về giải pháp quản trị rủi ro DN · 2 · Hài lòng · Điểm đánh giá phiên tư vấn · 1 · Đúng người · Số DN thuộc phân khúc mục tiêu của Bình An có mặt · 0
  - Chân slide: Khung 6 cấp: Event ROI Institute (Buổi 8, T11). Ví dụ chỉ số: nhận định của người soạn, tình huống giả định.
  - Ghi chú GV: Nhìn khung ROI 6 cấp từ phía nhà tài trợ, ví dụ gala An Phát – Bảo hiểm Bình An. ⏎ Cấp 3: chỉ tính doanh nghiệp ĐỒNG Ý hẹn tư vấn. Cấp 4: dữ liệu của Bình An — phải thống nhất chia sẻ từ đầu. ⏎ Alt-text: bậc thang sáu cấp từ 0 đến 5, mỗi bậc có câu hỏi cho nhà tài trợ và ví dụ chỉ số.
- **S20. ROI năm đầu có thể âm — vì vậy phải thống nhất mục tiêu từ đầu**
  - Nội dung: VÍ DỤ GIẢ ĐỊNH · ROI / −25% · Tổng chi phí · Hợp đồng mới · Quy cho sự kiện · 400 tr · 600 tr · 300 tr · 250 phí quyền + 150 kích hoạt · 60 DN hẹn × 20% ký = 12 × 50 tr · chỉ ½ do sự kiện (tách tác động) · ROI = (300 − 400) / 400 = −25% năm đầu. Không có nghĩa là thất bại: mục tiêu chính có thể là ROO — nên phải thống nhất mục tiêu và cách đo ngay trong đề xuất, ghi vào hợp đồng.
  - Chân slide: VÍ DỤ GIẢ ĐỊNH, chỉ minh họa — không phải số liệu thật.
  - Ghi chú GV: Ghi rõ GIẢ ĐỊNH. Nên tính từng bước trên bảng cùng lớp. ⏎ ROI = (Lợi ích quy ra tiền − Tổng chi phí tài trợ) / Tổng chi phí tài trợ; tổng chi phí = phí quyền + chi phí kích hoạt. ⏎ Bình An: phí quyền 250 tr + kích hoạt 150 tr (tỷ lệ 0,6:1) = 400 tr. 60 DN đồng ý hẹn tư vấn (cấp 3); giả sử 20% ký (12 hợp đồng) × lợi nhuận gộp năm đầu 50 tr = 600 tr. Chỉ một nửa quy cho sự kiện (tách tác động, Buổi 8) → 300 tr. ROI = (300 − 400)/400 = −25%. Tính cả tái tục năm 2 thì có thể dương. ⏎ Ý cần chốt: “Con số âm không có nghĩa là tài trợ thất bại: có thể mục tiêu chính là ROO (thái độ, quan hệ với An Phát). Đó là lý do phải thống nhất mục tiêu và cách đo ngay trong đề xuất, và ghi vào hợp đồng.”
- **S21. Tài trợ phải làm giàu hành trình, không làm gián đoạn**
  - Nội dung: “Sponsorships should enhance the attendee journey, not disrupt it.” — Bizzabo (U07) · Cornwell (2019) · 57% · 84% · Bớt “tài trợ như quảng cáo” / → thêm gắn kết thật với người tham dự · nhà tài trợ đánh giá cao trải nghiệm thương hiệu (tiệc chọn lọc, gặp riêng) hơn gian hàng · coi networking của người tham dự là quan trọng
  - Chân slide: U07: Bizzabo (2026), số liệu khảo sát chưa kiểm chứng chéo · U03: Cornwell (2019), Journal of Advertising.
  - Ghi chú GV: Cornwell (2019): tài trợ đã được đo và vận hành như quảng cáo suốt nhiều thập kỷ; tiềm năng tạo gắn kết thật còn bị bỏ ngỏ. ⏎ Bizzabo: 57% nhà tài trợ đánh giá cao trải nghiệm thương hiệu (tiệc chọn lọc, buổi gặp riêng) hơn gian hàng; 84% coi networking của người tham dự là quan trọng.
- **S22. Mỗi giai đoạn trước – trong – sau có điểm chạm cho nhà tài trợ**
  - Nội dung: Trước · Trong · Sau · Điểm chạm · Điểm chạm · Điểm chạm · Thư mời · đăng ký · xác nhận · di chuyển · Check-in · phiên hội nghị · giải lao · networking · gala · quà · Thư cảm ơn · khảo sát · gặp chuyên viên quan hệ khách hàng · Gắn nhà tài trợ · Gắn nhà tài trợ · Gắn nhà tài trợ · GlobalCard: ưu đãi xe đưa đón cho chủ thẻ · Bình An: phiên chuyên đề “quản trị rủi ro cho doanh nghiệp”; góc tư vấn theo lịch hẹn — không chào mời tại bàn tiệc · Gửi tài liệu chuyên đề; chỉ liên hệ khách đã đồng ý
  - Chân slide: Nhận định của người soạn; tham chiếu cách VPBank dùng quyền mua vé sớm cho chủ thẻ (U10). Tình huống giả định.
  - Ghi chú GV: Nối Buổi 3 (hành trình khách hàng). ⏎ Trong: Bình An làm phiên chuyên đề do chuyên gia trình bày; góc tư vấn THEO LỊCH HẸN, không chào mời tại bàn tiệc. ⏎ Sau: chỉ liên hệ khách đã đồng ý.
- **S23. Điểm chạm của nhà tài trợ phải bảo vệ Key Account**
  - Nội dung: Với Bảo hiểm Bình An tại gala · Thông tư 67/2023/TT-BTC · Nên: kiến thức chuyên đề + tư vấn theo lịch hẹn · 60 ngày  trước và sau giải ngân · ngân hàng không được tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư cho khách vay · Tránh: chào bán sản phẩm tại chỗ, bàn tư vấn cạnh khu tiệc · Dữ liệu khách: chia sẻ danh sách khách của An Phát cho nhà tài trợ cần sự đồng ý của khách. · Rủi ro uy tín rơi vào An Phát trước tiên.
  - Chân slide: U13: Tạp chí Tài chính (11/11/2023) — đã kiểm chứng chéo · Tạp chí Ngân hàng (2022).
  - Ghi chú GV: Luật Kinh doanh bảo hiểm sửa đổi (hiệu lực 1/1/2023): tổ chức tín dụng không được ép khách vay mua bảo hiểm. ⏎ Thông tư 67/2023/TT-BTC (hiệu lực 2/11/2023): ngân hàng không được tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư cho khách trong 60 ngày trước và 60 ngày sau ngày giải ngân toàn bộ khoản vay. ⏎ Nhận định của người soạn: quy định nhắm vào hoạt động bán bảo hiểm của ngân hàng, không trực tiếp vào sự kiện; nhưng cho thấy khách hàng và cơ quan quản lý rất nhạy cảm với việc ngân hàng “bán kèm” bảo hiểm. Nếu Bình An chào bán tại gala, rủi ro uy tín rơi vào An Phát trước tiên. ⏎ [VERIFY: quy định hiện hành về hoạt động giới thiệu bảo hiểm tại sự kiện do ngân hàng tổ chức cho khách hàng doanh nghiệp — hỏi pháp chế] ⏎ [VERIFY: văn bản hiện hành về bảo vệ dữ liệu cá nhân áp dụng cho việc chia sẻ danh sách khách mời với nhà tài trợ] ⏎ Phạm vi: dừng ở mức nhận diện rủi ro cho Key Account; không tư vấn pháp lý chi tiết.
- **S24. Checklist 5 câu cho mỗi điểm chạm**
  - Nội dung: Khách được lợi gì? · 1 · Nhà tài trợ đạt mục tiêu nào (ROO/ROI, cấp mấy)? · 2 · Có làm phiền, gián đoạn trải nghiệm không? · 3 · Có rủi ro pháp lý, uy tín cho Key Account không? · 4 · Đo bằng chỉ số gì, ai cung cấp dữ liệu? · 5
  - Ghi chú GV: Để chiếu suốt S6 — các nhóm dùng checklist này khi vẽ bản đồ và khi phản biện chéo. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S25. Thực hành 2 · Bản đồ điểm chạm tài trợ cho khách của An Phát**
  - Nội dung: Nhà tài trợ mặc định: Bảo hiểm Bình An + GlobalCard · ≥ 5 điểm chạm, mỗi nhà tài trợ ≥ 2 · đánh dấu ⭐ điểm chạm tự hào nhất · Giai đoạn · Điểm chạm · Nhà tài trợ làm gì · Khách được gì · Nhà tài trợ đạt gì (cấp mấy) · Rủi ro / cách phòng · Trước · Trong · Sau · Vẽ bản đồ trên A1 · Xoay trạm: vai hội đồng An Phát — 🟨 1 câu hỏi, 🟥 1 lo ngại · Về bàn, sửa một điểm chạm · 15’ · 2×4’ · 4’ · Dùng checklist 5 câu (slide trước) cho mọi điểm chạm.
  - Chân slide: Phiếu W09_activity_S6_ban_do_diem_cham.md · Tình huống giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 vẽ · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt. ⏎ Lời mở đầu: “Hai nhà tài trợ đã vào. Giờ Nova phải cho anh Minh thấy họ xuất hiện ở đâu trên hành trình của 600 khách, và mỗi lần xuất hiện khách được gì. 15 phút vẽ ít nhất 5 điểm chạm, đủ 6 cột. Sau đó các bạn sang bàn bạn và đóng vai hội đồng An Phát: mỗi bản đồ nhận một câu hỏi và một lo ngại thật sự.” ⏎ Mặc định: Bình An và GlobalCard; nếu nhóm chọn khác ở S3, cho dùng lựa chọn của nhóm miễn có ít nhất 1 đối tác của An Phát. ⏎ Khi chốt: ghi các lo ngại lặp lại nhiều nhất lên bảng.
- **S26. Ba ý của Buổi 9**
  - Nội dung: Nhà tài trợ mua quyền lợi, nhà đầu tư chia sẻ rủi ro – lợi nhuận. Lợi ích phải có cho cả bốn bên. Tài trợ là chuyển giao hình ảnh hai chiều. · 9.1 · Đề xuất win-win bắt đầu từ mục tiêu nhà tài trợ, có kế hoạch kích hoạt, kết thúc bằng cam kết đo lường (ROI + ROO) ghi vào hợp đồng. · 9.2 · Gắn nhà tài trợ vào điểm chạm để làm giàu hành trình của khách hàng của Key Account — và bảo vệ Key Account khỏi rủi ro pháp lý, uy tín. · 9.3 · Stakeholder Management Plan: thêm một trang — 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO/ROI.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang — 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO/ROI. Làm dần trên lớp, không giao về nhà.
- **S27. Phiếu kiểm tra cuối giờ**
  - Nội dung: Với khách hàng trong dự án cũ của nhóm bạn, một nhà tài trợ phù hợp nhất là ai (loại doanh nghiệp)? Khách của khách hàng đó được gì từ nhà tài trợ này? · 1 · Viết 1 chỉ số ROO và 1 chỉ số ROI bạn sẽ ghi vào hợp đồng tài trợ đó. · 2 · Buổi 10: quay lại phía mua — quy trình chọn nhà cung cấp và địa điểm (RFP/RFQ, site check), gắn họ vào các giai đoạn trên hành trình của Key Account.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) SV nói được lợi ích cho KHÁCH của Key Account, không chỉ cho nhà tài trợ; (b) phân biệt đúng ROO (mục tiêu) và ROI (tài chính); (c) chỉ số đo được thật. ⏎ Câu nối Buổi 10: “Hôm nay ta đưa đối tác của Key Account vào sự kiện. Buổi sau ta quay lại phía mua: quy trình chọn nhà cung cấp và địa điểm (RFP/RFQ, site check), và gắn họ vào các giai đoạn trên hành trình của Key Account.”
- **S28. Tài liệu tham khảo (1/2)**
  - Nội dung: U01 · Meenaghan, J. A. (1983). Commercial sponsorship. European Journal of Marketing, 17(7), 5–73. · U02 · Cornwell, T. B., & Maignan, I. (1998). An international review of sponsorship research. Journal of Advertising, 27(1), 1–21. · U03 · Cornwell, T. B. (2019). Less “sponsorship as advertising” and more sponsorship-linked marketing as authentic engagement. Journal of Advertising, 48(1), 49–60. · U04 · O’Reilly, N., & Lafrance Horning, D. (2013). Leveraging sponsorship: The activation ratio. Sport Management Review, 16(4), 424–437. · U05 · Lumency. (2024, May 10). Why activation ratios matter. · U06 · Association of National Advertisers. (2018). Sponsorship measurement needs improvement: Study [Press release]. · U07 · Bizzabo. (2026, August 5). Event sponsorship strategies: A guide for enterprise event leaders. · U08 · Znews. (2025, January 20). Techcombank lại rót tiền cho concert mới của các “anh trai”. · Tuổi Trẻ Online. (2025, January 3). Đồng đầu tư cho concert Anh trai vượt ngàn chông gai…
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL và nguồn phụ): buoi-09_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn U01–U15 ghi ở chân slide.
- **S29. Tài liệu tham khảo (2/2)**
  - Nội dung: U09 · Báo Đầu tư. (n.d.). Concert “Anh trai vượt ngàn chông gai” và “Anh trai Say Hi” bùng nổ, nhà sản xuất và nhà tài trợ hưởng lợi thế nào? · U10 · VnExpress. (2025, October 5). Cơ hội mua vé sớm concert G-DRAGON khi mở thẻ VPBank Mastercard [Nội dung được tài trợ]. · U11 · Tuổi Trẻ Online. (2025, January 23). Nhà sản xuất show “Anh trai vượt ngàn chông gai” lãi đậm. · U12 · Tuổi Trẻ Online. (2025, March 7). Happy Day Concert tại Đà Lạt ngừng 2 đêm diễn vì hình ảnh nghệ sĩ bị quảng cáo cờ bạc. · U13 · Tạp chí Tài chính. (2023, November 11). Thông tư số 67/2023/TT-BTC hạn chế tình trạng ép khách mua bảo hiểm kèm khoản vay. · U14 · Nhân Dân. (2026, September 7). Nghệ sĩ Việt chật vật làm liveshow. · U15 · American Express Global Business Travel. (2025). 2026 global meetings & events forecast.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL và nguồn phụ): buoi-09_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn U01–U15 ghi ở chân slide.

### Buổi 10 — Building Solutions: Supplier & Venue Management

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 10.1 Quy trình mua · 10.2 Địa điểm · 10.3 Hành trình Key Account · Tổng kết |
| Số slide · trạng thái | 29 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W10_Supplier_Venue.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 10 / 15 · sân khấu · Quản trị mối quan hệ trong tổ chức sự kiện · Building Solutions: Supplier & Venue Management · Phần 3 · buổi 2/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · sơ đồ mặt bằng · bàn tròn 600 khách
  - Ghi chú GV: Slide 1 (dàn ý #1). Phần 3, buổi 2/4. ⏎ Alt-text: sơ đồ mặt bằng ballroom nhìn từ trên xuống — sân khấu phía trên, các bàn tròn xếp thành hàng.
- **S2. Tình huống AV ở Buổi 7 đã được quyết định từ lúc chọn và ký**
  - Nội dung: Nhắc Buổi 7 · tháng 11 · Hôm nay · quay lại tháng 7 · +30% · Anh Minh vừa duyệt concept gala 600 khách. / Nova có 3 tuần để chọn khách sạn và các nhà cung cấp. · AV độc quyền của khách sạn, ba tuần trước gala · Gọi ba khách sạn quen hỏi giá · Gửi cùng một bộ yêu cầu bằng văn bản cho cả ba · A · B · Giơ tay: bạn chọn A hay B?
  - Chân slide: Tình huống giả định (tiếp nối Buổi 7) — tên và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Nhắc: “Buổi 7, ba tuần trước gala 12/12, khách sạn báo AV nội bộ tăng giá 30% và không cho mang AV ngoài vào. Ta đã kết luận: tình huống đó được quyết định từ lúc chọn và ký với nhà cung cấp.” ⏎ Đọc tiếp: “Hôm nay ta quay lại đúng lúc đó. Tháng 7. Anh Minh vừa duyệt concept gala 600 khách. Nova có ba tuần để chọn khách sạn và các nhà cung cấp.” ⏎ Giơ tay A/B. Chốt: “Gọi điện nhanh hơn. Nhưng khi anh Minh hỏi ‘vì sao chọn khách sạn này’, Nova cần trả lời bằng tiêu chí và hồ sơ, không phải bằng cảm giác.”
- **S3. Buổi 7 là chiến lược, Buổi 10 là tác nghiệp**
  - Nội dung: Buổi 7 — chiến lược · Buổi 10 — tác nghiệp · Câu hỏi · Hạng mục quan trọng và rủi ro đến đâu? Quan hệ với nhà cung cấp nên thế nào? · Mời ai, hỏi gì, chấm thế nào, kiểm tra tại chỗ ra sao? · Công cụ · Kraljic, Procurement vs Buying, customer of choice · RFI – RFP – RFQ, bảng chấm điểm, site check, sơ đồ mặt bằng · Đầu ra · Chiến lược cho từng hạng mục · Nhà cung cấp được chọn + hồ sơ giải thích được · Ô Kraljic quyết định cách mua: Non-critical → hỏi giá nhanh · Strategic (ballroom tháng 12) → RFP, site check, đàm phán quan hệ
  - Ghi chú GV: Nói: “Ô Kraljic quyết định cách mua. Hạng mục Non-critical thì hỏi giá nhanh; hạng mục Strategic như ballroom tháng 12 thì cần RFP, site check và đàm phán quan hệ.” ⏎ Ranh giới: PCCC và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện.
- **S4. RFI hỏi “ai”, RFP hỏi “giải pháp”, RFQ hỏi “giá”**
  - Nội dung: Hỏi gì · Khi nào dùng · Ví dụ gala An Phát · RFI · request for information · Nhà cung cấp là ai, làm được gì · Chưa biết thị trường; lọc danh sách · Tìm đơn vị livestream về 80 chi nhánh · RFP · request for proposal · Giải pháp + giá, chấm nhiều tiêu chí · Hạng mục phức tạp, nhiều cách làm · Ballroom + F&B; AV và livestream · RFQ · request for quotation · Giá cho thông số đã rõ · Hạng mục chuẩn, nhiều nhà cung cấp · In backdrop, thuê xe 45 chỗ, quà theo mẫu
  - Chân slide: Bảng do người soạn tổng hợp theo cách dùng phổ biến trong ngành; RFQ theo V01 (CIPS).
  - Ghi chú GV: Hiểu lầm: “RFP chỉ để lấy giá” → đó là RFQ. RFP để lấy GIẢI PHÁP.
- **S5. Mỗi hạng mục có một phương thức mua phù hợp**
  - Nội dung: 1 · 2 · 3 · 4 · 5 · Đấu thầu rộng rãi · Hai giai đoạn · RFQ · Đấu thầu hạn chế · Một nguồn · Mọi bên quan tâm được dự; công bằng nhưng tốn công đánh giá · Vòng 1 giải pháp không kèm giá; vòng 2 mới nộp giá · Mời ít nhất ba nhà cung cấp báo giá · Chỉ mời bên đã qua sàng lọc hồ sơ năng lực · Chỉ một bên đủ năng lực hoặc khẩn cấp — ví dụ AV độc quyền · “You’ll typically pick at least three suppliers to submit quotes.” — CIPS (V01)
  - Chân slide: V01: CIPS, What is procurement? — tiêu đề các phương thức chưa đối chiếu lại.
  - Ghi chú GV: [VERIFY: tên tiêu đề từng phương thức trên trang CIPS] ⏎ Hai giai đoạn: hữu ích khi sợ “giá rẻ che mắt”, ví dụ chọn ý tưởng sân khấu. ⏎ Một nguồn: AV độc quyền của khách sạn — một khi đã chọn khách sạn, AV thành một nguồn. ⏎ Một câu về Key Account (quyết định GV): quy trình mua của Key Account có thể chịu quy định nội bộ hoặc pháp luật; hỏi phòng mua sắm của khách (anh Khoa) ngay từ đầu.
- **S6. Nova mất quyền chọn AV ngay lúc ký với khách sạn**
  - Nội dung: 1 · 2 · 3 · Chọn và ký khách sạn · Hợp đồng có AV độc quyền · AV thành “một nguồn” · Lúc nào Nova mất quyền chọn AV? / Lúc ký với khách sạn → câu hỏi về AV độc quyền và phụ thu mang AV ngoài vào phải nằm trong RFP gửi khách sạn.
  - Ghi chú GV: Hỏi trước khi lật đáp án: “Vậy lúc nào Nova mất quyền chọn AV?” — Chốt: “Lúc ký với khách sạn. Nên câu hỏi về AV độc quyền phải nằm trong RFP gửi khách sạn.” ⏎ Alt-text: ba ô nối bằng mũi tên — chọn và ký khách sạn → AV độc quyền → AV thành một nguồn.
- **S7. RFP tốt mang Key Account và khách của Key Account vào**
  - Nội dung: 1 · 2 · 3 · 4 · Về An Phát và mục tiêu gala · Hồ sơ khách · Ngày, giờ, giờ dựng – tháo · Bố trí + sơ đồ mặt bằng · tri ân 600 lãnh đạo DN VIP · độ tuổi, kỳ vọng, nhu cầu đặc biệt · load-in / load-out · bàn tròn, sân khấu, LED, khu tài trợ · 5 · 6 · 7 · 8 · F&B, phòng ngủ · Nhà cung cấp độc quyền · Điều khoản · Tiêu chí chấm và hạn trả lời · nếu có · AV, hoa, trang trí; phụ thu mang ngoài · cọc, hủy, thay đổi số khách · công khai như nhau cho mọi bên · ● phần mang Key Account vào   ● phần chặn tình huống AV của Buổi 7
  - Chân slide: Khung rút gọn do người soạn dựng từ mẫu APEX RFP của Events Industry Council (V05).
  - Ghi chú GV: Mẫu APEX có các phần như mục tiêu sự kiện, hồ sơ người tham dự, lịch sử sự kiện, và đề nghị đính kèm báo cáo sau sự kiện (PER) kỳ trước. Nhà cung cấp chỉ đề xuất đúng nếu họ hiểu Key Account và khách của Key Account. ⏎ Nhắc bảo mật (nhận định): thông tin về khách của An Phát chỉ chia sẻ ở mức cần thiết; xin cam kết bảo mật nếu cần.
- **S8. Tốc độ trả lời RFP cho biết cách nhà cung cấp sẽ phục vụ**
  - Nội dung: Ba khách sạn trong Thực hành 1 trả lời sau: · 80% · Khách sạn A · 2 ngày · Khách sạn C · 3 ngày · người tổ chức muốn địa điểm trả lời RFP trong ≤ 4 ngày · Khách sạn B · 5 ngày · Chậm trả lời RFP hôm nay có thể là chậm xử lý sự cố vào ngày 12/12. · V06 · chưa KCC
  - Chân slide: V06: Cvent (2025 Planner Sourcing Report, qua blog Cvent và BizBash) — chưa kiểm chứng chéo.
  - Ghi chú GV: Hỏi: “Tốc độ trả lời RFP nói gì về cách nhà cung cấp sẽ phục vụ ta sau này?” ⏎ Nguồn là Cvent — một nền tảng bán phần mềm tìm địa điểm, có lợi ích liên quan.
- **S9. Chấm điểm có trọng số biến lựa chọn thành lời giải thích**
  - Nội dung: ② Chấm có trọng số (GIẢ ĐỊNH 60/40) · ① Trước khi chấm · Không gian phù hợp khách của An Phát · 20 · Điều kiện bắt buộc — đạt / không đạt · Kỹ thuật – AV – livestream (gồm độc quyền) · 15 · Còn trống ngày 12/12 / Đủ diện tích dùng được cho 600 khách · Điều khoản: hủy, số khách, giờ dựng · 15 · Dịch vụ, F&B · 10 · Tổng chi phí (thuê + AV + phụ thu) · 40 · Trượt điều kiện bắt buộc thì điểm cao cũng không cứu được. · Điểm = Σ (điểm 1–5 × trọng số) ÷ 5  → thang 100
  - Chân slide: Trọng số 60/40: GIẢ ĐỊNH (quyết định GV) · điều kiện bắt buộc: nhận định của người soạn, gần V02.
  - Ghi chú GV: Ghi rõ: trọng số là GIẢ ĐỊNH — chất lượng – năng lực 60 / tổng chi phí 40. ⏎ Một hồ sơ trượt điều kiện bắt buộc thì điểm cao cũng không cứu được. ⏎ Hiểu lầm: “Chọn nhà cung cấp rẻ nhất là tiết kiệm cho khách” → tính tổng chi phí và rủi ro; giá thuê rẻ có thể đi kèm AV độc quyền đắt. “Chấm điểm là thủ tục” → bảng chấm là lời giải thích Nova đưa cho Key Account.
- **S10. Bốn nguyên tắc: value for money, công bằng, dấu vết, phản hồi bên trượt**
  - Nội dung: Value for money · Đối xử công bằng · 1 · 2 · không phải giá thấp nhất · cùng yêu cầu, cùng hạn, cùng tiêu chí cho mọi bên · Audit trail · Phản hồi bên trượt · 3 · 4 · giữ dấu vết: ai chấm, chấm gì, vì sao · bên trượt hôm nay là đối tác ngày mai (Buổi 7) · Chọn nhà cung cấp là bài toán nhiều tiêu chí: Dickson (1966) · Weber và cộng sự (1991) · Ho và cộng sự (2010)
  - Chân slide: V02: CIPS, Tender evaluation · V04: Dickson (1966); Weber et al. (1991); Ho et al. (2010) — chưa đọc toàn văn.
  - Ghi chú GV: Chọn nhà cung cấp là bài toán nhiều tiêu chí — một dòng nghiên cứu lâu đời trong mua hàng (Dickson 1966; Weber và cộng sự 1991; Ho và cộng sự 2010). ⏎ Audit trail: anh Minh và anh Khoa đều có thể hỏi lại. ⏎ Nối Buổi 7: bên trượt hôm nay là đối tác ngày mai (customer of choice). ⏎ → Chuyển sang S3 — Thực hành 1.
- **S11. Thực hành 1 · Chấm hồ sơ ba khách sạn cho gala 12/12**
  - Nội dung: 600 khách VIP · cần ~860–920 m² dùng được · ngân sách địa điểm + F&B + AV ≤ 1,50 tỷ · Khách sạn A · Khách sạn B · Khách sạn C · Chuyển tối đa 10 điểm trọng số, ghi 1 câu lý do · 4’ · Dùng được · ~950 m²; 4 cột, ~8 bàn bị che · 1.000 m², không cột · ~700 m² + phòng phụ 200 m² · Lịch 12/12 · Trống · Khách khác giữ tạm đến 15/8 · Trống; chỉ dựng từ 14h · Kiểm tra điều kiện bắt buộc, rồi chấm 1–5 · 8’ · AV · Độc quyền, 300 tr · Mang ngoài: 200 + 20 tr · Nội bộ 240 tr · Tổng · 1,45 tỷ · 1,52 tỷ · 1,44 tỷ · Chọn (có thể có điều kiện): 1 câu báo anh Minh + 1 câu phản hồi bên trượt · 5’ · Trả lời RFP · 2 ngày · 5 ngày · 3 ngày
  - Chân slide: Phiếu W10_activity_S3_cham_ho_so_khach_san.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Đồng hồ 4 / 8 / 5 phút, GV chốt 3 phút. Ghi lựa chọn khách sạn của 6 nhóm lên bảng. ⏎ Thêm chi tiết trên phiếu: A — hủy trong 60 ngày mất 50% cọc, giảm tối đa 5% số khách; B — giảm tới 10% số khách không phạt, không cột, trần 7 m; C — AV nội bộ có kinh nghiệm livestream (mang ngoài phụ thu 15%), F&B được đánh giá rất tốt, phòng phụ liền kề 200 m². ⏎ Thảo luận: các nhóm có chọn giống nhau không? Khách sạn nào rẻ nhất nhưng không phải lựa chọn tốt nhất? ⏎ Khách sạn nhóm chọn dùng ở S6 (mặc định: khách sạn B).
- **S12. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S13. Một địa điểm phục vụ nhiều bên thuê**
  - Nội dung: 7/12/2024 · 15/12/2024 · Luôn hỏi địa điểm: · Trước và sau ngày của tôi có sự kiện gì? / Giờ dựng – tháo thế nào? / Ai chịu trách nhiệm trả lại mặt bằng? · Concert ca nhạc tại SVĐ Mỹ Đình · ASEAN Cup: Việt Nam – Indonesia · Kết quả: VFF xin đổi sân nhà của đội tuyển về Việt Trì — mặt sân sau concert là mối lo.
  - Chân slide: V10: Tuổi Trẻ Online (11/11/2024) và các báo khác — đã kiểm chứng chéo.
  - Ghi chú GV: Cuối 2024, sân vận động quốc gia Mỹ Đình tổ chức concert tối 7/12, một tuần trước trận ASEAN Cup của đội tuyển Việt Nam gặp Indonesia (15/12). VFF xin đổi sân nhà về Việt Trì. ⏎ [VERIFY: tiêu đề chính xác các bài báo tiếng Việt trước khi đưa lên slide] — slide này chỉ mô tả sự việc, không trích tiêu đề báo. Ảnh sân Mỹ Đình chỉ dùng khi GV chấp nhận. ⏎ Hỏi: “Nếu Nova là agency của concert đó, ta cần hỏi địa điểm điều gì? Nếu Nova làm cho bên thuê sau, ta cần hỏi gì?”
- **S14. Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp**
  - Nội dung: “The venue is often the first step in a search because that influences which vendors are used.” / — Blumin, trong BizBash (V07) · Nguồn ảnh hưởng nhiều nhất đến quyết định gửi RFP (V06) · Thông số phòng · 50% · Hình ảnh · 48% · AV độc quyền → Nova mất quyền chọn AV / Cho mang AV ngoài → Nova tự chọn đơn vị livestream quen · Sơ đồ mặt bằng · 46%
  - Chân slide: V07: Blumin, trong BizBash · V06: Cvent (2025) — chưa kiểm chứng chéo.
  - Ghi chú GV: Khách sạn có AV độc quyền → Nova mất quyền chọn AV. Khách sạn cho mang AV ngoài → Nova tự chọn được đơn vị livestream quen. ⏎ Hiểu lầm: “Chọn địa điểm xong mới chọn nhà cung cấp khác” → đúng một nửa: chọn địa điểm trước, nhưng câu hỏi về nhà cung cấp độc quyền phải có TRƯỚC KHI KÝ.
- **S15. Giá quan trọng, nhưng quan hệ với địa điểm cũng có giá**
  - Nội dung: 97% · 94% · sẵn sàng đổi sang địa điểm thứ hai nếu tiết kiệm ≤ 20% · sẵn sàng trả thêm để giữ địa điểm ưu tiên · → giá quan trọng · → quan hệ cũng có giá · Hai con số này có mâu thuẫn không?
  - Chân slide: V06: Cvent (2025) — chưa kiểm chứng chéo.
  - Ghi chú GV: Hỏi: “Hai con số này mâu thuẫn không?” — Chốt: “Không hẳn. Giá quan trọng, nhưng quan hệ với địa điểm cũng có giá trị.” Nối Buổi 7: customer of choice.
- **S16. Sáu nhóm tiêu chí chọn địa điểm cho sự kiện của Key Account**
  - Nội dung: Hỏi gì · Vì sao quan trọng với An Phát · 1. Phù hợp khách của Key Account · Vị trí, đẳng cấp, cảm giác · 600 lãnh đạo doanh nghiệp VIP · 2. Sức chứa và bố trí · Diện tích dùng được, cột, trần, tầm nhìn · Không khách nào “ngồi sau cột” · 3. Kỹ thuật · Điện, rigging, Wi-Fi, livestream · Chị Lan: livestream về 80 chi nhánh · 4. Dịch vụ và nhà cung cấp độc quyền · AV, hoa, F&B nội bộ; phụ thu · Quyết định chi phí và chất lượng · 5. Lịch và điều khoản · Lịch trước – sau, giờ dựng – tháo, hủy, cọc · Rủi ro bị động sát ngày · 6. Tổng chi phí · Thuê + F&B + AV + phụ thu · Anh Khoa duyệt ngân sách
  - Chân slide: Nhận định của người soạn, tổng hợp từ V06 và V07.
  - Ghi chú GV: Mỗi nhóm tiêu chí gắn với một người cụ thể của An Phát: chị Lan (livestream), anh Khoa (ngân sách), và 600 khách VIP.
- **S17. Site check là đi để hỏi, không phải đi để chụp ảnh**
  - Nội dung: Câu hỏi site check · Ảnh hưởng đến An Phát · Những thành phố mơ màng · Hà Nội · 7/2026 · Sức chứa tối đa và giấy phép? · Không vượt giới hạn chính thức · Mưa lớn, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi. · Nhà cung cấp độc quyền? Phụ thu mang ngoài? · Chi phí, chất lượng AV · AV, rigging, máy phát dự phòng? · Livestream không bị đứt · Back-of-house, khu chuẩn bị F&B? · Phục vụ 600 khách đúng giờ · Site check trước đó thiếu câu hỏi nào? · Giờ load-in, thang hàng? · Sân khấu kịp dựng · Wi-Fi cho khách và kỹ thuật? · Trải nghiệm khách, livestream · Bãi đỗ xe? · Khách VIP đến – về thuận tiện · V11 · một báo, chưa KCC · Quy định gắn thương hiệu? · Nhận diện An Phát và nhà tài trợ
  - Chân slide: V07: BizBash, 11 câu hỏi site inspection (Việt hóa, chọn 8) · V11: Tiền Phong (13/7/2026), một báo — chưa kiểm chứng chéo.
  - Ghi chú GV: [VERIFY: năm đăng bài BizBash về 11 câu hỏi site inspection] ⏎ Case Những thành phố mơ màng Summer 2026 (Hà Nội, 12/7/2026): mưa lớn làm khu vực ngoài trời không đảm bảo vệ sinh, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi và cam kết rà soát “từ việc đánh giá điều kiện mặt bằng, xây dựng các phương án ứng phó với thời tiết đến việc chủ động cân nhắc điều chỉnh phương án tổ chức hoặc địa điểm”. [VERIFY: đối chiếu thêm một báo] ⏎ Hỏi: “Site check trước đó thiếu câu hỏi nào?” — gợi ý: thoát nước khi mưa, phương án B, tầm nhìn sân khấu từ cuối khán đài. (Không dùng ảnh khán giả lội bùn trừ khi có quyền dùng.) ⏎ Đi site check cùng Key Account (anh Minh, chị Lan) là một điểm chạm quan trọng ở giai đoạn trước mua. ⏎ Hiểu lầm: “Site check là đi chụp ảnh” → là đánh giá nhà cung cấp tại chỗ (V03) với danh sách câu hỏi. ⏎ Chi tiết PCCC: môn Quản trị rủi ro sự kiện.
- **S18. Diện tích trên brochure không phải diện tích dùng được**
  - Nội dung: Kiểu bố trí · m²/người · Tính cùng lớp: gala 600 khách, bàn tròn · 600 × 1,0–1,1 m² · 610–670 m² / chỉ cho khu bàn · Đứng (tiệc đứng) · ≈ 0,56 · Hỗn hợp đứng – ngồi · ≈ 0,74 · + sân khấu, LED, lối đi, buffet, khu tài trợ · ~250 m² / giả định · Có sàn nhảy · ≈ 0,84 · Bàn tròn tiệc · ≈ 1,0–1,1* · Cần · ~860–920 m² / diện tích dùng được · Lớp học · ≈ 1,3–1,7 · * chưa kiểm chứng chéo · quy tắc ước lượng, không phải tiêu chuẩn
  - Chân slide: V08: Social Tables (tính theo sq ft: đứng 6, hỗn hợp 8, sàn nhảy 9, lớp học 14–18); bàn tròn 11–12 sq ft từ blog địa điểm, chưa KCC. 1 m² ≈ 10,76 sq ft.
  - Ghi chú GV: Tính trên bảng cùng lớp, từng bước. ⏎ Quy tắc ước lượng: sức chứa ≈ diện tích dùng được ÷ diện tích mỗi người theo kiểu bố trí. Là quy tắc ước lượng, không phải tiêu chuẩn. ⏎ 600 khách × 1,0–1,1 m² ≈ 610–670 m² chỉ cho khu bàn; cộng sân khấu, LED, lối đi, buffet, khu nhà tài trợ (giả định ~250 m²) → ~860–920 m² dùng được. ⏎ Hiểu lầm: “Ballroom 1.200 m² thì chứa thoải mái 600 khách” → trừ cột, sân khấu, lối đi; kiểm tra tầm nhìn.
- **S19. Luôn xin sơ đồ mặt bằng và hỏi “diện tích này là gì?”**
  - Nội dung: Cùng một trung tâm hội nghị lớn ở TP.HCM, các trang ghi: · Xin sơ đồ mặt bằng chính thức · 1 · “hơn 4.000 m²” · ≠ · “khoảng 10.000 m²” · Hỏi “diện tích này là gì?” · 2 · Đo khi site check · 3 · Có thể là tổng sàn, một sảnh, hay diện tích có cột… · Sức chứa chính thức theo giấy phép của địa điểm và quy định PCCC → học ở môn Quản trị rủi ro sự kiện.
  - Ghi chú GV: Thông số một trung tâm hội nghị lớn ở TP.HCM trên các trang khác nhau ghi từ “hơn 4.000 m²” đến khoảng 10.000 m² — có thể đo khác nhau (tổng sàn, một sảnh…). Không nêu tên địa điểm — quyết định GV; nguồn V12 trong tư liệu tổng hợp. ⏎ Sức chứa chính thức theo giấy phép của địa điểm và quy định PCCC → môn Quản trị rủi ro sự kiện.
- **S20. Hành trình có ba giai đoạn và bốn loại điểm chạm**
  - Nội dung: Trước mua / prepurchase · Mua / purchase · Sau mua / postpurchase · Bốn loại điểm chạm · Brand-owned · Partner-owned · Customer-owned · Social / external · do doanh nghiệp sở hữu · do đối tác sở hữu — hôm nay: nhà cung cấp · do khách tự làm · bên ngoài · “Partners can include marketing agencies…” — Lemon & Verhoef (2016)
  - Chân slide: V09: Lemon & Verhoef (2016), Journal of Marketing, 80(6), 69–96.
  - Ghi chú GV: Lemon & Verhoef: hành trình gồm prepurchase – purchase – postpurchase. Tác giả viết: “Partners can include marketing agencies…”.
- **S21. Hôm nay An Phát là khách hàng của Nova**
  - Nội dung: Buổi 3, 9 · 600 lãnh đạo DN VIP là khách hàng · phục vụ · An Phát · Khách của An Phát · Buổi 10 · An Phát là khách hàng của Nova · phục vụ · Nova · An Phát · Khách sạn · AV · nhà in · xe · nhiếp ảnh… = điểm chạm partner-owned trên hành trình của An Phát
  - Ghi chú GV: Nói: “Ở Buổi 3 và Buổi 9 ta vẽ hành trình của khách của An Phát. Hôm nay đổi vai: An Phát là khách hàng của Nova. Và khách sạn, AV, nhà in… là điểm chạm partner-owned trên hành trình của An Phát.” ⏎ Alt-text: hai hành trình lồng nhau — hàng trên: An Phát phục vụ khách của An Phát (Buổi 3, 9); hàng dưới: Nova phục vụ An Phát, với nhà cung cấp là điểm chạm (Buổi 10).
- **S22. Nhà cung cấp chạm An Phát ở cả giai đoạn mua và sau mua**
  - Nội dung: An Phát trải qua gì · Nhà cung cấp chạm An Phát ở đâu · Trước mua (nhắc lại) · Brief, đề xuất, báo giá, site check cùng Nova · Khách sạn đón đoàn site check · Mua · Ký hợp đồng; tổng duyệt; ngày 12/12 · Khách sạn (sảnh, F&B), AV – livestream, in ấn – backdrop, xe đưa đón, nhiếp ảnh, lễ tân thời vụ, quà tặng · Sau mua · Nghiệm thu, báo cáo sau sự kiện (PER), hóa đơn – thanh toán, khiếu nại, đánh giá, đề xuất năm sau · Album ảnh, bản ghi livestream, đối soát số khách thực tế với khách sạn, hồ sơ thanh toán gửi anh Khoa
  - Chân slide: Hành trình do người soạn dựng từ V09 và V05 (PER đã học ở Buổi 8) — quyết định GV, phương án A.
  - Ghi chú GV: Nhấn giai đoạn SAU MUA: “Hồ sơ thanh toán chậm, ảnh gửi muộn cũng là trải nghiệm của An Phát — và là thứ anh Minh nhớ khi quyết định có tái ký năm sau.”
- **S23. Trong mắt Key Account, lỗi của nhà cung cấp là lỗi của agency**
  - Nội dung: Nhà in · Khách sạn · AV – livestream · Backdrop in sai logo · Hóa đơn tính dư 30 khách · Đứt livestream về 80 chi nhánh · Chị Vy (Thương hiệu) / sẽ hỏi Nova · Anh Khoa (ngân sách – mua sắm) / sẽ hỏi Nova · Chị Lan (Truyền thông nội bộ) / sẽ hỏi Nova · An Phát ký với Nova → quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.
  - Chân slide: Nhận định của người soạn · tình huống giả định.
  - Ghi chú GV: An Phát ký với Nova, không ký với nhà in hay khách sạn. Vì vậy quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.
- **S24. Bốn câu hỏi phân bổ nhà cung cấp**
  - Nội dung: Chạm An Phát ở giai đoạn nào? / mua / sau mua · 1 · Ai của An Phát nhìn thấy họ? / anh Minh, ông Tuấn, chị Lan, chị Vy, anh Khoa, hay khách của An Phát · 2 · Nếu họ làm hỏng, quan hệ Nova – An Phát bị ảnh hưởng thế nào? · 3 · Nova quản lý bằng gì? / điều khoản hợp đồng, checklist, người phụ trách, chỉ số, đánh giá sau sự kiện · 4
  - Ghi chú GV: Để chiếu suốt S6 — các nhóm dùng khi lập bảng phân bổ và khi phản biện chéo. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S25. Thực hành 2 · Phân bổ nhà cung cấp vào giai đoạn mua và sau mua**
  - Nội dung: ≥ 5 nhà cung cấp (bắt buộc khách sạn + AV) · ≥ 2 dòng ở giai đoạn sau mua · đánh dấu ⚠️ dòng rủi ro nhất · Nhà cung cấp · Giai đoạn · Điểm chạm với An Phát · Ai của An Phát thấy · Hỏng thì ảnh hưởng gì · Nova quản lý bằng gì · Khách sạn · mua · AV – livestream · mua / sau mua · … · Lập bảng phân bổ trên A1 · Xoay trạm: vai anh Khoa — 🟨 1 câu hỏi, 🟥 1 lo ngại · Về bàn, sửa một dòng · 15’ · 2×4’ · 4’ · Dùng bốn câu hỏi phân bổ (slide trước) cho mọi dòng.
  - Chân slide: Phiếu W10_activity_S6_phan_bo_nha_cung_cap.md · Tình huống giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 lập bảng · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt. ⏎ Mặc định: khách sạn B. Nhà cung cấp: AV – livestream, in ấn – backdrop, xe đưa đón VIP, nhiếp ảnh – quay phim, lễ tân thời vụ, quà tặng. ⏎ Khi xoay trạm, nhóm đóng vai anh Khoa (ngân sách – mua sắm): 🟨 1 câu hỏi, 🟥 1 lo ngại về chi phí, hồ sơ, thanh toán hoặc trách nhiệm khi có sự cố. ⏎ Khi chốt: ghi các câu hỏi “anh Khoa” lặp lại nhiều nhất lên bảng. Có nhóm nào quên giai đoạn sau mua không?
- **S26. Ba ý của Buổi 10**
  - Nội dung: Chọn phương thức mua theo hạng mục (RFQ cho thông số rõ, RFP cho giải pháp). RFP tốt mang Key Account và khách của họ vào. Chấm có trọng số: value for money, công bằng, có dấu vết, phản hồi bên trượt. · 10.1 · Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp. Site check là đi để hỏi: độc quyền, giờ dựng, lịch trước – sau, diện tích dùng được. · 10.2 · Nhà cung cấp là điểm chạm do đối tác sở hữu trên hành trình mua của Key Account — quản lý họ ở cả giai đoạn mua và sau mua. · 10.3 · Stakeholder Management Plan: thêm trang “nhà cung cấp và địa điểm” — hạng mục, phương thức mua, 3 tiêu chí, bảng phân bổ.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang “nhà cung cấp và địa điểm”: hạng mục chính, phương thức mua, 3 tiêu chí chọn, bảng phân bổ theo giai đoạn của Key Account. Làm dần trên lớp, không giao về nhà.
- **S27. Phiếu kiểm tra cuối giờ**
  - Nội dung: Với sự kiện trong dự án cũ của nhóm bạn, nêu 1 hạng mục bạn sẽ mua bằng RFQ và 1 hạng mục bằng RFP. Vì sao khác nhau? · 1 · Một câu hỏi site check bạn sẽ không bao giờ quên hỏi. Câu đó bảo vệ Key Account thế nào? · 2 · Buổi 11: những đối tác kể lại sự kiện — báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) RFQ cho hạng mục thông số rõ, nhiều nhà cung cấp; RFP cho hạng mục cần giải pháp, có tiêu chí ngoài giá; (b) câu hỏi site check cụ thể (độc quyền, giờ dựng, diện tích dùng được, lịch trước – sau), không chung chung; (c) nối được với Key Account, không chỉ với Nova. ⏎ Câu nối Buổi 11: “Hôm nay ta chọn và quản lý những đối tác làm ra sự kiện. Buổi sau là những đối tác kể lại sự kiện: báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account.”
- **S28. Tài liệu tham khảo (1/2)**
  - Nội dung: V01 · Chartered Institute of Procurement & Supply. (n.d.). What is procurement? · V02 · Chartered Institute of Procurement & Supply. (n.d.). Tender evaluation. · V03 · Chartered Institute of Procurement & Supply. (n.d.). Supplier evaluation. · V04 · Dickson, G. W. (1966). An analysis of vendor selection systems and decisions. Journal of Purchasing, 2(1), 5–17. · Weber, C. A., Current, J. R., & Benton, W. C. (1991). Vendor selection criteria and methods. EJOR, 50(1), 2–18. · Ho, W., Xu, X., & Dey, P. K. (2010). EJOR, 202(1), 16–24. · V05 · Events Industry Council. (n.d.). APEX RFP templates; APEX post-event report [Mẫu]. · V06 · Cvent. (n.d.). Event statistics. · BizBash. (n.d.). Cvent’s 2025 planner sourcing report.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-10_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn V01–V11 ghi ở chân slide. V12 (trung tâm hội nghị có thông số vênh nhau) cố ý không liệt kê vì GV quyết định không nêu tên địa điểm. Năm bài BizBash (V07) và tiêu đề báo V10 còn chờ [VERIFY].
- **S29. Tài liệu tham khảo (2/2)**
  - Nội dung: V07 · BizBash. (n.d.). Site inspection checklist: 11 things event planners should never forget to ask. · V08 · Social Tables. (n.d.). Capacity party space calculator. · V09 · Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96. · V10 · Tuổi Trẻ Online. (2024, November 11); Thanh Niên (2025); Thể thao & Văn hóa (2025); Dân trí (2025) — bài về sân Mỹ Đình và concert. · V11 · Tiền Phong. (2026, July 13). Ban tổ chức concert Những thành phố mơ màng xin lỗi.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-10_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn V01–V11 ghi ở chân slide. V12 (trung tâm hội nghị có thông số vênh nhau) cố ý không liệt kê vì GV quyết định không nêu tên địa điểm. Năm bài BizBash (V07) và tiêu đề báo V10 còn chờ [VERIFY].

### Buổi 11 — Spreading Value: Media & Influencers

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 11.1 KOL · 11.2 Báo chí · 11.3 Booking & đo lường · 11.4 Khuếch đại · Tổng kết |
| Số slide · trạng thái | 29 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W11_Media_Influencers.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 11 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · Key Account · Spreading Value: Media & Influencers · Phần 3 · buổi 3/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên
  - Ghi chú GV: Slide 1 (dàn ý #1). Phần 3, buổi 3/4. ⏎ Alt-text: các vòng tròn đồng tâm lan tỏa từ Key Account ở giữa — hình ảnh giá trị được báo chí và KOL khuếch đại.
- **S2. Anh Minh muốn chính các CEO đến gala**
  - Nội dung: Mời ca sĩ 3 triệu follower làm MC · Năm ngoái · 600 khách mời · A · 62% · Mời chuyên gia kinh tế uy tín làm diễn giả chính · B · xác nhận tham dự · ~1/3 · Nhờ nhà báo kinh tế phỏng vấn diễn giả trước sự kiện · C · cử cấp dưới đi thay · Giơ tay: Nova nên chọn A, B hay C?
  - Chân slide: Tình huống giả định (tiếp nối các buổi trước) — tên và con số chỉ dùng cho học tập.
  - Ghi chú GV: S1 — Khởi động (5 phút). Đọc: “Anh Minh nhắn Nova: ‘Năm ngoái mời 600 khách, chỉ 62% xác nhận, và gần một phần ba cử cấp dưới đi thay. Năm nay tôi muốn chính các CEO đến. Nova có ý tưởng gì không?’” (số liệu giả định) ⏎ Giơ tay A/B/C; ghi số phiếu lên bảng. ⏎ Chốt: “Không có đáp án đúng tuyệt đối. Nhưng câu hỏi đúng không phải ‘ai nổi tiếng nhất’, mà là CEO của khách hàng An Phát tin ai, đọc gì. Hôm nay: chọn, ký và đo lường những người kể chuyện cho Key Account.”
- **S3. Influencer marketing là trả công cho người khác nói về mình**
  - Nội dung: “Influencer marketing is the practice of compensating individuals for posting about a product or service on social media.” / — Campbell & Farrell (2020) · Từ / 1/1/2026 · Ở Việt Nam, KOL nhận tiền quảng cáo là “người chuyển tải sản phẩm quảng cáo” — có nghĩa vụ pháp lý riêng (Luật Quảng cáo sửa đổi).
  - Chân slide: X01: Campbell & Farrell (2020), Business Horizons · X05: LuatVietnam; Thanh Niên (12/11/2025) — Luật Quảng cáo sửa đổi, hiệu lực 1/1/2026.
  - Ghi chú GV: Chữ quan trọng: COMPENSATING — có trả công. ⏎ Từ 1/1/2026, ở Việt Nam, người nhận tiền để quảng cáo, khuyến nghị, xác nhận sản phẩm trên mạng là “người chuyển tải sản phẩm quảng cáo” và có nghĩa vụ pháp lý (chi tiết ở phần 11.3).
- **S4. Quy mô chỉ là khoảng tham khảo**
  - Nội dung: Ngưỡng khác nhau giữa các nguồn — chỉ để tham khảo. · > 1 triệu · ~100k–1 triệu · ~10k–100k · ~1k–10k · Cùng một báo cáo, ER của nano TikTok: · 10,3%  và  11,9% · Nano · Micro · Macro · Mega · → luôn hỏi nguồn và cách tính · Gần gũi, tương tác cao · Cộng đồng ngách · Độ phủ lớn · Người nổi tiếng · nhận biết rộng
  - Chân slide: X04: HypeAuditor (2025), The state of influencer marketing — chưa kiểm chứng chéo.
  - Ghi chú GV: Ngưỡng khác nhau giữa các nguồn; bảng chỉ để tham khảo (quyết định GV 7). ⏎ Theo HypeAuditor 2025, hơn 75% influencer Instagram là nano, nhóm có ER cao nhất. ⏎ Lưu ý: cùng báo cáo đó ghi ER của nano TikTok là 10,3% ở một chỗ và 11,9% ở chỗ khác — luôn hỏi nguồn và cách tính. ⏎ Hiểu lầm: “Nhiều follower = ảnh hưởng lớn” → ảnh hưởng đến AI?
- **S5. Câu hỏi đúng: Nova đang mua khán giả, bảo chứng hay nội dung?**
  - Nội dung: Nova mua gì · Ví dụ với gala An Phát · Khán giả · audience · Tiếp cận cộng đồng người theo dõi · Ít giá trị: khách đã được mời đích danh · Người bảo chứng · endorser · Uy tín của họ “đứng sau” sự kiện · Chuyên gia kinh tế làm diễn giả → CEO muốn đến · Người làm nội dung · Khả năng sản xuất nội dung · Video tóm tắt phiên chuyên đề gửi khách sau sự kiện · Bổ sung · KOC: người dùng thật chia sẻ trải nghiệm · Bổ sung · Chuyên gia / diễn giả: KOL trong giới chuyên môn — quan trọng với sự kiện B2B
  - Chân slide: X01: Campbell & Farrell (2020) · KOC và chuyên gia/diễn giả: nhận định của người soạn.
  - Ghi chú GV: Hỏi: “Với 600 CEO, ai là KOL của họ?” ⏎ KOC (key opinion consumer): người dùng thật chia sẻ trải nghiệm. Chuyên gia/diễn giả: KOL trong giới chuyên môn, quan trọng với sự kiện B2B. ⏎ Hiểu lầm: “KOL là chuyện của marketing, không phải của agency sự kiện” → KOL xuất hiện trên sân khấu, trong thư mời, trong video — là điểm chạm của sự kiện.
- **S6. Khách tin người có chuyên môn, đáng tin và giống mình**
  - Nội dung: Ohanian (1990) / Độ tin cậy nguồn phát: chuyên môn · đáng tin · hấp dẫn. Với ngân hàng, hai chiều đầu nặng hơn. · Chuyên môn · Đáng tin · Niềm tin · Lou & Yuan (2019) / Giá trị thông tin + tương đồng với người theo dõi + đáng tin, hấp dẫn → tin nội dung có thương hiệu. · Tương đồng
  - Chân slide: X02: Ohanian (1990), Journal of Advertising · X03: Lou & Yuan (2019), Journal of Interactive Advertising.
  - Ghi chú GV: Ohanian (1990): độ tin cậy nguồn phát gồm chuyên môn · đáng tin · hấp dẫn. Với ngân hàng, hai chiều đầu nặng hơn (nhận định). ⏎ Lou & Yuan (2019): chất lượng nội dung = giá trị thông tin cho người xem; cộng hưởng = sự tương đồng giữa influencer và người theo dõi. Hai yếu tố này, cùng độ đáng tin và hấp dẫn, làm tăng niềm tin vào nội dung có thương hiệu. ⏎ Alt-text: ba vòng tròn giao nhau — chuyên môn, đáng tin, tương đồng — dẫn tới niềm tin của khách.
- **S7. Tương đồng quan trọng hơn quy mô**
  - Nội dung: CEO logistics · Ca sĩ · ~120.000 người theo dõi · ~3,5 triệu người theo dõi · > · Chia sẻ kinh nghiệm vay vốn mở rộng kho · Âm nhạc, đời sống · 600 CEO: “người này nói chuyện với mình” · 600 CEO: nổi tiếng, nhưng khác thế giới của mình · Hỏi: ảnh hưởng đến AI — không phải có bao nhiêu người theo dõi.
  - Chân slide: Ví dụ minh họa · X03: Lou & Yuan (2019).
  - Ghi chú GV: Nói: “Một CEO logistics chia sẻ kinh nghiệm vay vốn mở rộng kho có thể cộng hưởng với 600 CEO hơn một ca sĩ triệu follower.”
- **S8. Khi KOL mất uy tín, người hợp tác mất theo**
  - Nội dung: 6 · 12,4 tỷ · 2 năm tù · buổi livestream quảng cáo kẹo Kera (12/2024 – 1/2025) · thu lợi bất chính · mỗi người trong ba người có ảnh hưởng — tội “lừa dối khách hàng” (11/2025) · Người hợp tác phản ứng / Một thương hiệu thời trang gỡ ảnh; công ty quản lý chấm dứt hợp đồng. · Chuyển giao hình ảnh là hai chiều (Buổi 9) → kiểm tra trước khi ký.
  - Chân slide: X06: VnExpress, Thanh Niên (19/11/2025); Dân trí (20/5/2025); VTC News (2025) — đã kiểm chứng chéo.
  - Ghi chú GV: Sự kiện thật — chỉ nêu sự kiện và phán quyết đã công bố; không dùng ảnh chân dung. ⏎ Từ 12/12/2024 đến 16/1/2025, 6 buổi livestream quảng cáo kẹo Kera với tuyên bố như “một viên kẹo tương đương một đĩa rau luộc”. Giám định cho thấy sản phẩm không có 10 loại bột rau củ như công bố. Tháng 11/2025, TAND TP.HCM tuyên ba người có ảnh hưởng mỗi người 2 năm tù về tội “lừa dối khách hàng”; thu lợi bất chính 12,4 tỷ đồng. Trước đó, một thương hiệu thời trang gỡ ảnh, công ty quản lý chấm dứt hợp đồng. ⏎ Hỏi: “Nếu một trong những người này từng là MC gala của An Phát tháng 12/2024, khách của An Phát nghĩ gì?” — Chốt: “Chuyển giao hình ảnh là hai chiều (Buổi 9). Vì vậy Nova phải kiểm tra trước khi ký (due diligence).”
- **S9. Với ngân hàng, KOL tài chính là rủi ro đặc thù**
  - Nội dung: UBCKNN · 4/2026 · Câu hỏi của Nova: · Cảnh báo khuyến nghị mua, bán, nắm giữ cổ phiếu trên mạng xã hội khi không được cấp phép tư vấn đầu tư; đã xử phạt một doanh nghiệp. · Họ sẽ nói gì trên sân khấu của An Phát? · Kiến thức · Xu hướng: chương trình “Tín nhiệm người có ảnh hưởng” (8/2025) hướng tới chứng nhận uy tín, minh bạch của KOL/KOC.  X08 · chưa KCC · “Nên mua mã này”
  - Chân slide: X07: Nhân Dân; VietnamPlus (17/4/2026) — đã kiểm chứng chéo · X08: Tuổi Trẻ (12/8/2025) — chưa kiểm chứng chéo.
  - Ghi chú GV: Tháng 4/2026, UBCKNN cảnh báo các tổ chức, cá nhân trên mạng xã hội đưa khuyến nghị mua, bán, nắm giữ cổ phiếu dù không được cấp phép tư vấn đầu tư; đã xử phạt một doanh nghiệp. ⏎ Nói: “KOL tài chính nhiều follower chưa chắc là lựa chọn an toàn cho một ngân hàng. Câu hỏi của Nova: họ sẽ nói gì trên sân khấu của An Phát — kiến thức, hay ‘nên mua mã này’?” ⏎ Xu hướng: tháng 8/2025, chương trình “Tín nhiệm người có ảnh hưởng” được khởi động (gần 300 KOL), hướng tới đánh giá, chứng nhận uy tín, minh bạch của KOL/KOC.
- **S10. Hiểu khán giả trước, chọn kênh sau**
  - Nội dung: Barcelona Principles 4.0 — nguyên tắc 2: xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động. · 600 lãnh đạo doanh nghiệp VIP của An Phát: · Đọc báo gì? · Nghe ai, tin ai? · Bận thế nào? · → rồi mới chọn nhà báo, diễn giả, KOL
  - Chân slide: X13: AMEC (2025), Barcelona Principles 4.0 — nguyên tắc 2.
  - Ghi chú GV: Nguyên tắc 2 của Barcelona Principles 4.0: xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động. ⏎ Với An Phát, khán giả trước sự kiện là 600 lãnh đạo doanh nghiệp: họ đọc báo gì, nghe ai, bận thế nào?
- **S11. Bản đồ nhà báo có ba trục: mảng, độc giả, mức quan hệ**
  - Nội dung: Mảng phụ trách · beat · Độc giả · Mức quan hệ · Ngân hàng – tài chính? Doanh nghiệp? Giải trí? · Độc giả của họ có trùng khách của An Phát không? · Chưa biết · đã giới thiệu · đã làm việc · 86% · 72% · 85% · nhà báo từ chối ngay pitch lệch mảng hoặc lệch độc giả · coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp · muốn được tự giới thiệu qua email, kể cả khi chưa có câu chuyện · Họp báo: thông báo bằng văn bản trước 24 giờ cho cơ quan quản lý báo chí (Luật Báo chí 2016); quy định mới từ 7/2026 cần đối chiếu pháp chế.
  - Chân slide: X09: Cision (2025), chưa KCC · X10: Luật Báo chí 2016 (đã KCC); PLO về Luật Báo chí 2025, NĐ 237/2026 (chưa KCC).
  - Ghi chú GV: Ba trục do người soạn đề xuất, dựa trên Cision 2025. ⏎ 72% nhà báo coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp. ⏎ Nối Buổi 8: “Quan hệ với nhà báo cũng như với Key Account: xây trước khi cần.” ⏎ Họp báo (nhận diện): tổ chức, công dân có quyền tổ chức họp báo; phải thông báo bằng văn bản trước 24 giờ cho cơ quan quản lý nhà nước về báo chí (Luật Báo chí 2016). Theo PLO, Luật Báo chí 2025 (hiệu lực 1/7/2026) và NĐ 237/2026 bổ sung yêu cầu chứng minh tính hợp pháp của nội dung và danh sách cơ quan báo chí được mời. [VERIFY: pháp chế — Luật Báo chí 2025, NĐ 237/2026] ⏎ Hiểu lầm: “Gửi thông cáo cho càng nhiều báo càng tốt” → đúng mảng, đúng độc giả.
- **S12. Quan hệ với nhà báo dựa trên thông tin có giá trị, không dựa trên vụ lợi**
  - Nội dung: Một nguyên tắc / Thông tin có giá trị cho độc giả của nhà báo — đúng mảng, đúng lúc. Agency không đặt nhà báo vào thế vụ lợi. · Đạo đức nghề báo (X11) / Hành nghề trung thực, khách quan, không vụ lợi. · Trả tiền để đăng = quảng cáo / và phải được nhận diện là quảng cáo (X05).
  - Chân slide: X11: Hội Nhà báo Việt Nam (2016), 10 điều Quy định đạo đức nghề nghiệp người làm báo · X05: Luật Quảng cáo sửa đổi.
  - Ghi chú GV: Một nguyên tắc (quyết định GV 6): quan hệ với nhà báo dựa trên thông tin có giá trị cho độc giả của họ, đúng mảng, đúng lúc. Agency không đặt nhà báo vào thế vụ lợi. ⏎ Quy định đạo đức nghề nghiệp người làm báo Việt Nam yêu cầu hành nghề trung thực, khách quan, không vụ lợi. [VERIFY: nguyên văn Điều 3] ⏎ → Chuyển sang S3 — Thực hành 1.
- **S13. Thực hành 1 · Chọn diễn giả và KOL để chính các CEO đến gala**
  - Nội dung: Ngân sách ~350 triệu · 600 lãnh đạo DN VIP · năm ngoái 62% xác nhận · TS. Lê Hoàng Nam / chuyên gia kinh tế · ~45k · 80 tr · diễn giả chính 30’; chưa từng quảng cáo · Chấm 1–5: chuyên môn · đáng tin · tương đồng · rủi ro; Nova “mua” gì? · 1 · 8’ · “Hưng Finance” / KOL tài chính · ~1,2 tr · 250 tr · hay nói “nên mua mã…”; muốn livestream · 2 · Chọn ≤ 2 ứng viên trong ngân sách + 1 điều kiện cho mỗi người · 7’ · Chị Trần Mai Anh / CEO logistics, khách của An Phát · ~120k · 0 · muốn 5’ giới thiệu công ty mình · 3 · Ca sĩ Ngọc Diệp / ~3,5 tr · 400 tr · MC + 3 bài; từng bị phạt vì quảng cáo sai công dụng · 4 · 1 câu giải thích với anh Minh về một ứng viên bị loại · 5’ · 20 KOC “doanh nhân trẻ” / 5–10k mỗi người · 60 tr · người theo dõi chủ yếu sinh viên · 5
  - Chân slide: Phiếu W11_activity_S3_chon_dien_gia_kol.md · Tình huống và các ứng viên đều là giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Đồng hồ 8 / 7 / 5 phút. Ghi lựa chọn diễn giả/KOL của 6 nhóm lên bảng. ⏎ Thảo luận: ứng viên nào nhóm nào cũng loại? Chị Mai Anh không nhận phí — vậy chị có phải KOL được trả công không? Nova cần lưu ý gì (5 phút giới thiệu công ty mình)? ⏎ Mặc định cho S6: TS. Lê Hoàng Nam và chị Trần Mai Anh.
- **S14. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S15. Booking là một quy trình 8 bước, không phải một cuộc gọi**
  - Nội dung: 1 · 2 · 3 · 4 · Brief · Due diligence · Báo giá · Hợp đồng · mục tiêu, thông điệp, điều không được nói · kiểm tra trước khi ký · cá nhân hay công ty quản lý? · nghĩa vụ luật định + điều khoản · 8 · 7 · 6 · 5 · Báo cáo · Thanh toán · Thực hiện · Duyệt nội dung · outputs · outcomes · impact · nghiệm thu, chứng từ đúng hình thức · đúng lịch, đúng nhãn · chị Vy (Thương hiệu) duyệt trước
  - Chân slide: Quy trình do người soạn dựng từ X05, X06, X12, X13.
  - Ghi chú GV: 1 Brief: mục tiêu, khán giả, thông điệp, điều KHÔNG được nói (ví dụ khuyến nghị đầu tư — X07). ⏎ 2 Due diligence: lịch sử nội dung, vụ việc pháp lý, xung đột lợi ích, chất lượng người theo dõi (X04 khuyến nghị kiểm tra gian lận). ⏎ 3 Báo giá và đàm phán: qua cá nhân hay công ty quản lý? ⏎ 4 Hợp đồng. 5 Duyệt nội dung: Key Account duyệt trước (chị Vy — Thương hiệu). 6 Thực hiện: đúng lịch, đúng nhãn. 7 Nghiệm thu và thanh toán. 8 Báo cáo. ⏎ Alt-text: tám ô nối bằng mũi tên theo thứ tự.
- **S16. Due diligence bảo vệ Key Account trước khi ký**
  - Nội dung: Lịch sử nội dung · Vụ việc · ✓ · ✓ · Họ từng nói gì, quảng cáo gì? Có khuyến nghị đầu tư? · Bị xử phạt, khởi tố, khủng hoảng truyền thông? · Xung đột lợi ích · Chất lượng người theo dõi · ✓ · ✓ · Đang làm cho ngân hàng hay đối thủ nào? Muốn quảng bá gì cho mình? · Người theo dõi thật? Có trùng khách của An Phát? · Đã trả tiền không có nghĩa KOL chịu hết rủi ro — rủi ro uy tín rơi vào An Phát trước tiên.
  - Chân slide: Nhận định của người soạn · X04 khuyến nghị kiểm tra gian lận người theo dõi · X06, X07.
  - Ghi chú GV: Nối slide 8 (Kera) và slide 9 (KOL tài chính). ⏎ Hiểu lầm: “Đã trả tiền thì KOL chịu trách nhiệm hết” → rủi ro uy tín rơi vào Key Account trước tiên; Nova phòng bằng due diligence và hợp đồng.
- **S17. Từ 2026, nghĩa vụ của KOL phải nằm trong hợp đồng**
  - Nội dung: Nghĩa vụ luật định (X05) · Điều khoản gợi ý cho hợp đồng · Xác minh / người quảng cáo và tài liệu sản phẩm; chưa hiểu rõ thì không giới thiệu · Phạm vi, lịch, định dạng nội dung · Duyệt nội dung trước · Gắn nhãn theo luật · Cam kết đã xác minh thông tin · Gắn nhãn / thông báo ngay trước và trong khi quảng cáo · Không khuyến nghị đầu tư, chào bán SP tài chính · Quyền sử dụng hình ảnh · Bảo mật thông tin khách của An Phát · Đạo đức và chấm dứt khi vi phạm · Cung cấp hợp đồng / khi cơ quan có thẩm quyền yêu cầu · Bàn giao số liệu · Thanh toán và chứng từ
  - Chân slide: X05: Luật Quảng cáo sửa đổi 2025, hiệu lực 1/1/2026 — đã kiểm chứng chéo. Danh sách điều khoản: nhận định của người soạn.
  - Ghi chú GV: Luật Quảng cáo sửa đổi 2025: người có ảnh hưởng phải xác minh độ tin cậy của người quảng cáo, kiểm tra tài liệu về sản phẩm (chưa sử dụng hoặc chưa hiểu rõ thì không được giới thiệu); thông báo về việc quảng cáo ngay trước và trong khi thực hiện, nội dung trên mạng có dấu hiệu nhận diện là quảng cáo/tài trợ; cung cấp hồ sơ, gồm hợp đồng quảng cáo, khi cơ quan có thẩm quyền yêu cầu. ⏎ Điều khoản “không khuyến nghị đầu tư / không chào bán sản phẩm tài chính” nối X07 và U13 (Buổi 9). Điều khoản đạo đức và chấm dứt: bài học X06. ⏎ [VERIFY: pháp chế — nghị định hướng dẫn Luật Quảng cáo 2025; quy định riêng về quảng cáo dịch vụ ngân hàng]
- **S18. Hình thức hợp đồng quyết định chứng từ thanh toán**
  - Nội dung: Khấu trừ 10% chưa chắc là nghĩa vụ thuế cuối cùng — Cục Thuế căn cứ vào hợp đồng để xác định bản chất thu nhập. · Ký với cá nhân / Chứng từ khấu trừ thuế TNCN; bản chất thu nhập theo hợp đồng · hay · Ký với công ty quản lý / Hóa đơn của công ty; công ty chịu trách nhiệm với nghệ sĩ · Anh Khoa (ngân sách – mua sắm An Phát) sẽ hỏi: hóa đơn, chứng từ khấu trừ ở đâu?
  - Chân slide: X12: Dân trí (20/7/2026).
  - Ghi chú GV: Nhiều KOL, KOC được khấu trừ 10% thuế TNCN trước khi nhận tiền; Cục Thuế lưu ý bản chất thu nhập (tiền công hay kinh doanh) căn cứ vào hợp đồng. ⏎ [VERIFY: kế toán — quy định khấu trừ thuế TNCN hiện hành khi trả tiền cho cá nhân/KOL]
- **S19. Đo truyền thông bằng outputs, outcomes, impact — không dùng AVE**
  - Nội dung: Mục tiêu rõ, đo được · AVE / quy bài báo ra “nếu mua quảng cáo diện tích này thì tốn bao nhiêu” — AMEC: đó không phải giá trị của truyền thông. · 1 · Hiểu khán giả – bên liên quan · 2 · Đo mọi kênh liên quan · 3 · Định tính + định lượng · 4 · Không dùng AVE; đo đóng góp qua kết quả và tác động · Outputs · đã làm gì, bao nhiêu · 5 · Báo cáo outputs, outcomes, impact · 6 · Outcomes · khán giả nghĩ, làm gì khác · Đạo đức, minh bạch dữ liệu và phương pháp · 7 · Impact · kết quả cho tổ chức
  - Chân slide: X13: AMEC (2025), Barcelona Principles 4.0 — rút gọn.
  - Ghi chú GV: Giải thích AVE (advertising value equivalent): “Quy bài báo ra ‘nếu mua quảng cáo diện tích này thì tốn bao nhiêu’. AMEC nói rõ: đó KHÔNG phải giá trị của truyền thông.” ⏎ Hiểu lầm: “Báo cáo = số lượt xem” → đó là output. Khách hàng cần outcome.
- **S20. Báo cáo cho anh Minh mở đầu bằng outcome**
  - Nội dung: Ví dụ trước sự kiện của An Phát · Gần với cấp (Buổi 8) · Outputs · Số bài báo đúng mảng; số bài của diễn giả; lượt tiếp cận · trước cấp 0 · Outcomes · Tỷ lệ xác nhận tham dự; tỷ lệ CEO đến trực tiếp; số khách đăng ký phiên chuyên đề; khách biết thêm điều gì · Cấp 0 – 2 · Impact · Cuộc hẹn kinh doanh sau sự kiện; khách mở rộng quan hệ với An Phát · Cấp 3 – 5 (An Phát chia sẻ dữ liệu) · Không mở đầu: “25 bài báo, 2 triệu lượt xem” · Mở đầu: “tỷ lệ CEO đến trực tiếp tăng từ … lên …”
  - Chân slide: Ánh xạ Barcelona Principles ↔ khung ROI 6 cấp (Buổi 8) là gần đúng — nhận định của người soạn.
  - Ghi chú GV: Ghi rõ: ánh xạ gần đúng, nhận định của người soạn. ⏎ Chốt: “Báo cáo cho anh Minh không mở đầu bằng ‘25 bài báo, 2 triệu lượt xem’. Mở đầu bằng: ‘tỷ lệ CEO đến trực tiếp tăng từ … lên …’.” ⏎ Gợi ý: cho lớp phân loại nhanh vài chỉ số output/outcome trên bảng.
- **S21. Với khách của An Phát, “mua” là quyết định dành một buổi tối**
  - Nội dung: Trước mua / prepurchase · Mua / purchase · Sau mua / postpurchase · “Mua” với khách của An Phát = / quyết định dành một buổi tối cho An Phát — và có đến trực tiếp hay cử người thay. · Điểm chạm ảnh hưởng mạnh ở giai đoạn này · Social / external / báo chí, người khác nói về sự kiện · Partner-owned / diễn giả, KOL, nhà tài trợ
  - Chân slide: X14: Lemon & Verhoef (2016), Journal of Marketing — xem V09, Buổi 10.
  - Ghi chú GV: Lemon & Verhoef (2016): giai đoạn prepurchase; điểm chạm social/external (báo chí, người khác) và partner-owned ảnh hưởng mạnh đến quyết định. ⏎ Với khách của An Phát, “mua” là quyết định dành một buổi tối cho An Phát — và có đến trực tiếp hay không.
- **S22. Bốn điểm chạm trước sự kiện có thể khuếch đại**
  - Nội dung: T-6 tuần · T-5 → T-3 tuần · T-3 tuần · T-1 tuần · gala 12/12 · Điểm chạm / Nhận thư mời, “save the date” · Điểm chạm / Tìm hiểu chương trình · Điểm chạm / Xác nhận tham dự, đăng ký phiên · Điểm chạm / Nhắc lịch, thông tin chuẩn bị · Khuếch đại bằng / Tên diễn giả chính trong thư mời (bảo chứng) · Khuếch đại bằng / Bài phỏng vấn diễn giả trên báo kinh tế (earned) · Khuếch đại bằng / Video ngắn của diễn giả gửi riêng khách mời · Khuếch đại bằng / Câu hỏi khảo sát trước của diễn giả
  - Chân slide: Dựng theo Buổi 3 và Buổi 9 · thời điểm là giả định.
  - Ghi chú GV: Dòng thời gian trước gala; mỗi mốc là một điểm chạm của khách An Phát có thể được báo chí hoặc diễn giả khuếch đại. ⏎ Alt-text: trục thời gian bốn mốc T-6 tuần, T-5 đến T-3 tuần, T-3 tuần, T-1 tuần; dưới mỗi mốc là điểm chạm và cách khuếch đại.
- **S23. Earned đáng tin hơn, paid kiểm soát được hơn**
  - Nội dung: Earned — báo chí tự viết · Paid — KOL, bài đăng có phí · Kiểm soát nội dung · Thấp · Cao (duyệt được) · Độ tin cậy với khách · Cao hơn · Phụ thuộc người đăng · Nghĩa vụ · Cung cấp thông tin đúng, đúng mảng · Gắn nhãn quảng cáo/tài trợ (X05) · Không có loại nào luôn tốt hơn — chọn theo điểm chạm và theo điều khách cần tin.
  - Chân slide: Nhận định của người soạn · nghĩa vụ gắn nhãn: X05.
  - Ghi chú GV: Bảng so sánh là nhận định của người soạn. ⏎ Nội dung trả tiền để đăng (paid) phải gắn nhãn quảng cáo/tài trợ theo Luật Quảng cáo sửa đổi.
- **S24. Năm câu hỏi khuếch đại**
  - Nội dung: Điểm chạm nào của khách An Phát? · 1 · Ai khuếch đại — và vì sao khách tin họ? · 2 · Khách được gì (thông tin, lý do để đến)? · 3 · Điều khoản, nguyên tắc nào bảo vệ An Phát? · 4 · Đo bằng output – outcome nào? · 5
  - Ghi chú GV: Để chiếu suốt S6 — các nhóm dùng khi lập kế hoạch và khi phản biện chéo. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S25. Thực hành 2 · Khuếch đại điểm chạm trước sự kiện**
  - Nội dung: Diễn giả: TS. Nam + chị Mai Anh · mục tiêu: tăng tỷ lệ CEO đến trực tiếp · Kênh · Mảng · Quan hệ · 6 cột: điểm chạm · ai khuếch đại, vì sao tin · khách được gì · bảo vệ An Phát · 1 output + 1 outcome · earned hay paid · A · Báo kinh tế lớn · Ngân hàng – tài chính · Đã làm 2 lần · 15’ · Lập kế hoạch ≥ 4 điểm chạm trên A1 · B · Tạp chí doanh nghiệp · Doanh nghiệp – quản trị · Chưa quen · C · Báo điện tử · Giải trí – sao · Đã quen · 2×4’ · Xoay trạm: vai chị Vy (Thương hiệu) — 🟨 1 câu hỏi, 🟥 1 lo ngại · D · Đài truyền hình · Kinh tế, đại chúng · Chưa quen · 4’ · Về bàn, sửa một dòng · E · Trang tin “đăng theo yêu cầu, có báo giá” · Tổng hợp · Tự chào giá · Dùng năm câu hỏi khuếch đại (slide trước) cho mọi dòng.
  - Chân slide: Phiếu W11_activity_S6_khuech_dai_truoc_su_kien.md · Danh sách báo chí là giả định.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 mở đầu · 15 lập kế hoạch · 8 xoay trạm (2 vòng × 4 phút) · 4 sửa và chốt. ⏎ Mặc định diễn giả/KOL: TS. Lê Hoàng Nam và chị Trần Mai Anh. Thư mời T-6 tuần; hạn xác nhận T-3 tuần; mục tiêu: tỷ lệ CEO đến trực tiếp tăng rõ. ⏎ Yêu cầu: ≥ 4 điểm chạm, ≥ 1 nhà báo trong danh sách, ≥ 1 diễn giả/KOL; đánh dấu ⭐ điểm chạm kéo CEO đến nhiều nhất. ⏎ Xoay trạm: vai chị Vy — Trưởng nhóm Thương hiệu An Phát: 🟨 1 câu hỏi, 🟥 1 lo ngại. ⏎ Khi chốt: nhóm nào chọn nhà báo C hoặc kênh E? Vì sao? Ghi các lo ngại “chị Vy” lặp lại nhiều nhất.
- **S26. Ba ý của Buổi 11**
  - Nội dung: Chọn KOL theo vai trò, độ tin cậy, tương đồng với khách của Key Account và rủi ro — không theo số follower. Hiểu khán giả trước, rồi lập bản đồ nhà báo: mảng × độc giả × mức quan hệ. · 11.1–2 · Booking là quy trình: brief → due diligence → hợp đồng (gắn nhãn, duyệt, chấm dứt) → thanh toán có chứng từ → báo cáo outputs – outcomes – impact, không dùng AVE. · 11.3 · Báo chí và KOL khuếch đại điểm chạm trước sự kiện, cho khách một lý do để đến — và luôn bảo vệ Key Account. · 11.4 · Stakeholder Management Plan: thêm trang “báo chí và KOL” — khán giả, 3 nhà báo/KOL, điều khoản bắt buộc, 3 chỉ số outcome.
  - Ghi chú GV: S7 — Tổng hợp (3 phút). ⏎ Liên hệ Stakeholder Management Plan: với khách hàng từ dự án cũ, nhóm bổ sung một trang “báo chí và KOL”: khán giả mục tiêu, 3 nhà báo/KOL phù hợp, điều khoản bắt buộc, 3 chỉ số outcome. Làm dần trên lớp, không giao về nhà.
- **S27. Phiếu kiểm tra cuối giờ**
  - Nội dung: Với khách hàng trong dự án cũ của nhóm bạn, bạn chọn loại KOL/diễn giả nào? Bạn đang “mua” khán giả, sự bảo chứng hay nội dung của họ? · 1 · Viết 1 điều khoản bạn nhất định đưa vào hợp đồng với KOL đó, và 1 chỉ số outcome (không phải output) bạn sẽ báo cáo cho khách hàng. · 2 · Buổi 12: khi nhà tài trợ, nhà cung cấp, báo chí, KOL xung đột hoặc gặp sự cố — agency xử lý và biến xung đột thành cơ hội thế nào.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) chọn theo phù hợp với khách của Key Account, không theo số follower; (b) điều khoản cụ thể (gắn nhãn, duyệt nội dung, chấm dứt khi vi phạm…); (c) phân biệt output (số bài, lượt tiếp cận) và outcome (xác nhận tham dự, đăng ký phiên, thay đổi nhận thức). ⏎ Câu nối Buổi 12: “Hôm nay ta chọn và ký với những người kể chuyện cho Key Account. Buổi sau: khi các bên liên quan — nhà tài trợ, nhà cung cấp, báo chí, KOL — xung đột với nhau hoặc gặp sự cố, agency xử lý và biến xung đột thành cơ hội thế nào.”
- **S28. Tài liệu tham khảo (1/2)**
  - Nội dung: X01 · Campbell, C., & Farrell, J. R. (2020). More than meets the eye: The functional components underlying influencer marketing. Business Horizons, 63(4), 469–479. · X02 · Ohanian, R. (1990). Construction and validation of a scale to measure celebrity endorsers’ perceived expertise, trustworthiness, and attractiveness. Journal of Advertising, 19(3), 39–52. · X03 · Lou, C., & Yuan, S. (2019). Influencer marketing: How message value and credibility affect consumer trust of branded content on social media. Journal of Interactive Advertising, 19(1), 58–73. · X04 · HypeAuditor. (2025). The state of influencer marketing 2025. · X05 · LuatVietnam. (n.d.). KOLs quảng cáo sản phẩm cần lưu ý 4 quy định mới từ 01/01/2026. · Thanh Niên. (2025, November 12). KOL, KOC phải xác minh thông tin, nêu rõ ràng quảng cáo. · X06 · VnExpress. (2025, November 19). Hoa hậu Thùy Tiên, Hằng Du Mục, Quang Linh Vlogs bị phạt 2 năm tù. · Thanh Niên (19/11/2025); Dân trí (20/5/2025); VTC News (2025). · X07 · Nhân Dân. (2026, April 17). Cảnh báo rủi ro từ khuyến nghị chứng khoán trái phép trên mạng xã hội. · VietnamPlus (17/4/2026).
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-11_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn X01–X14 ghi ở chân slide. Tiêu đề báo X06 giữ nguyên dạng chữ theo dàn ý (không dùng ảnh chân dung).
- **S29. Tài liệu tham khảo (2/2)**
  - Nội dung: X08 · Tuổi Trẻ Online. (2025, August 12). Gần 300 KOL cùng khởi động chương trình ‘Tín nhiệm người có ảnh hưởng’. · X09 · Cision. (2025). Cision’s 2025 State of the Media Report… [Thông cáo báo chí]. PR Newswire. · X10 · Báo Pháp Luật TP.HCM. (2026). Những điểm mới đáng chú ý của Nghị định hướng dẫn Luật Báo chí 2025. · LawNet. (n.d.). Quy định về tổ chức họp báo theo Luật Báo chí 2016. · X11 · Hội Nhà báo Việt Nam. (2016). 10 điều Quy định đạo đức nghề nghiệp người làm báo Việt Nam (QĐ 483/QĐ-HNBVN). · X12 · Dân trí. (2026, July 20). Ai làm KOL, KOC cần lưu ý điều này dù đã bị khấu trừ 10% thuế. · X13 · AMEC. (2025). Barcelona Principles V4.0. · X14 · Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-11_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn X01–X14 ghi ở chân slide. Tiêu đề báo X06 giữ nguyên dạng chữ theo dàn ý (không dùng ảnh chân dung).

### Buổi 12 — Leverage & Resolving Network Conflicts

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN] |
| Đoạn | Mở đầu · 12.1 Leverage & minh bạch · 12.2 Xung đột lợi ích · Khi có sự cố · Tổng kết |
| Số slide · trạng thái | 29 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W12_Network_Conflicts.pptx

- **S1. Slide bìa**
  - Nội dung: Nhà tài trợ · EVM1110E  ·  Buổi 12 / 15 · Quản trị mối quan hệ trong tổ chức sự kiện · Key Account · Leverage & Resolving Network Conflicts · Phần 3 · buổi 4/4 — Điều phối các bên liên quan phục vụ hành trình khách hàng / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên · Báo chí – KOL · Nhà cung cấp – địa điểm
  - Ghi chú GV: Slide 1 (dàn ý #1). Buổi này khép Phần 3. ⏎ Alt-text: sơ đồ hình sao — Key Account ở giữa, ba nhánh nối tới nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL.
- **S2. Một mạng lưới vỡ ở một mối nối là vỡ cả**
  - Nội dung: Vấn đề nằm ở đâu? · “Về đây bốn cánh chim trời” · Hà Nội · 28/12/2025 · Nhà tổ chức · A · 40 · Nghệ sĩ · B · nghệ sĩ không lên sân khấu dù khán giả đã vào, sân khấu và âm thanh ánh sáng đã dựng xong. · Cả hai · C · Báo chí đưa tin: tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất. · Khoảng trống giữa các bên · D
  - Chân slide: Y09: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026); Dân trí (31/12/2025). Vụ việc đang được xử lý theo pháp luật.
  - Ghi chú GV: S1 — Khởi động (5 phút). Đọc: “Tối 28/12/2025, Hà Nội. Khán giả đã vào Cung thi đấu, sân khấu và âm thanh ánh sáng đã dựng xong. Nhưng 40 nghệ sĩ không lên sân khấu. Báo chí đưa tin nguyên nhân là tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất.” ⏎ Không dùng ảnh chân dung, không nêu tên cá nhân, không quy lỗi cá nhân. ⏎ Giơ tay A/B/C/D. Chốt: “Ta không phán xử ai — vụ việc đang được xử lý theo pháp luật. Nhưng hãy nhìn: địa điểm, âm thanh ánh sáng, khán giả — những bên không tranh chấp — đều chịu thiệt. Một mạng lưới vỡ ở một mối nối là vỡ cả.”
- **S3. Sau Buổi 9–11, An Phát đứng giữa một mạng lưới**
  - Nội dung: Nhà tài trợ / Bình An, GlobalCard · Buổi 9 · Buổi 9–11: học từng bên một. · Nova · An Phát · Buổi 12: nhìn cả mạng lưới — các bên cũng quan hệ với nhau, và có lúc lợi ích va nhau. Nova ở mọi mối nối. · Nova · Nova · Báo chí – KOL / nhà báo, TS. Nam, chị Mai Anh · Buổi 11 · Nhà cung cấp – địa điểm / khách sạn, AV, nhà in, xe · Buổi 10
  - Ghi chú GV: Nói: “Buổi 9, 10, 11 ta học từng bên. Hôm nay ta nhìn cả mạng lưới: các bên này cũng quan hệ với nhau, và có lúc lợi ích của họ va nhau.” Nova nằm ở mọi mối nối. ⏎ Alt-text: sơ đồ hình sao ba nhánh — An Phát ở giữa; nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL ở ba đầu; Nova nằm trên từng nhánh nối.
- **S4. Giá trị của agency một phần nằm trong quan hệ**
  - Nội dung: Dyer & Singh (1998) · relational view · Morgan & Hunt (1994) · commitment–trust · Nguồn lực then chốt có thể nằm ngoài ranh giới doanh nghiệp — trong quan hệ giữa các doanh nghiệp. · Cam kết · + · Niềm tin · → quan hệ thành công · Leverage không phải “ép” đối tác — là làm được cho An Phát những việc agency khác không làm được, nhờ quan hệ lâu năm.
  - Chân slide: Y01: Dyer & Singh (1998), Academy of Management Review · Y02: Morgan & Hunt (1994), Journal of Marketing — mới đọc tóm tắt.
  - Ghi chú GV: Dyer & Singh (1998): nguồn lực then chốt của doanh nghiệp có thể vượt ra ngoài ranh giới doanh nghiệp, nằm trong quan hệ giữa các doanh nghiệp. ⏎ Morgan & Hunt (1994): quan hệ thành công đòi hỏi cam kết và niềm tin. ⏎ [VERIFY: toàn văn Y01, Y02 chưa đọc — chỉ dùng nội dung tóm tắt]
- **S5. Bốn nguồn relational rents của Nova**
  - Nội dung: Tài sản đặc thù cho quan hệ / relation-specific assets · Nova thuộc sơ đồ, quy trình bếp, giờ dựng của khách sạn quen · 1 · Thói quen chia sẻ tri thức / knowledge-sharing routines · Họp rút kinh nghiệm chung với nhà cung cấp sau mỗi sự kiện · 2 · Nguồn lực bổ trợ / complementary resources · Đơn vị livestream quen + AV khách sạn làm được việc mà mỗi bên không làm một mình · 3 · Quản trị hiệu quả / effective governance · Hợp đồng khung, cam kết dài hạn, cơ chế xử lý tranh chấp đã thống nhất · 4 · Ví dụ trong mạng lưới của Nova
  - Chân slide: Bốn nguồn: Dyer & Singh (1998), Y01 · ví dụ với Nova: nhận định của người soạn.
  - Ghi chú GV: Relational rents: lợi nhuận/giá trị vượt trội chỉ tạo ra được nhờ quan hệ giữa các bên. ⏎ Hiểu lầm: “Quan hệ lâu năm thì không cần hợp đồng chặt” → quản trị hiệu quả là một nguồn giá trị của quan hệ; hợp đồng rõ giúp quan hệ bền hơn.
- **S6. Leverage là giá trị do quan hệ tạo ra, không phải ép đối tác**
  - Nội dung: Không phải / Dùng thế lớn để ép giá / quyền lực ngắn hạn · Leverage của môn / Giá trị do quan hệ dài hạn tạo ra / cho cả hai bên và cho Key Account · Ví dụ thật — Techcombank (Buổi 9) · 2024 · nhà tài trợ kim cương · 2025 · “nhà đồng đầu tư” · quan hệ dài hạn mở ra một cấu trúc hợp tác mới
  - Chân slide: U08 (Buổi 9): Znews; Tuổi Trẻ (1/2025) · định nghĩa leverage: quyết định GV.
  - Ghi chú GV: Quyết định GV 3: leverage = giá trị do quan hệ dài hạn trong mạng lưới tạo ra. ⏎ Ví dụ thật (U08): Techcombank từ nhà tài trợ concert năm 2024 trở thành “nhà đồng đầu tư” năm 2025 — quan hệ dài hạn mở ra một cấu trúc hợp tác mới. ⏎ Hiểu lầm: “Leverage = dùng thế lớn để ép giá” → đó là quyền lực ngắn hạn.
- **S7. Đối tác thành công giao tiếp tốt và cùng giải quyết vấn đề**
  - Nội dung: Thuộc tính quan hệ · Hành vi giao tiếp · Giải quyết xung đột · Cam kết · Chất lượng giao tiếp · Cùng giải quyết vấn đề (joint problem solving) · Phối hợp · Sự tham gia · Niềm tin
  - Chân slide: Y03: Mohr & Spekman (1994), Strategic Management Journal.
  - Ghi chú GV: Mohr & Spekman (1994): đặc điểm của quan hệ đối tác thành công gồm cam kết, phối hợp, niềm tin; chất lượng giao tiếp và sự tham gia; và giải quyết xung đột bằng cùng giải quyết vấn đề (joint problem solving). ⏎ [VERIFY: các kỹ thuật giải quyết xung đột khác trong Mohr & Spekman — mới đọc tóm tắt]
- **S8. Mỗi lần truyền miệng là một lần lệch**
  - Nội dung: ẨN DỤ · Anh Minh / yêu cầu gốc · Nova / chuyển lời · Khách sạn / chuyển lời · Bếp / làm theo · tín hiệu lệch dần qua từng mắt xích · → Cần một tài liệu mà mọi bên cùng đọc (slide sau).
  - Chân slide: Y06: Lee, Padmanabhan & Whang (1997), Management Science — dùng như ẨN DỤ, không phải nghiên cứu về sự kiện.
  - Ghi chú GV: Ẩn dụ — hiệu ứng roi da (bullwhip, quyết định GV 7): trong chuỗi cung ứng, thông tin truyền qua từng mắt xích bị bóp méo, càng xa càng lệch. Ghi rõ đây là ẩn dụ. ⏎ Yêu cầu của anh Minh → Nova → khách sạn → bếp; → đơn vị AV → kỹ thuật viên. ⏎ Bỏ slide này nếu trễ giờ. ⏎ Alt-text: chuỗi bốn ô nối mũi tên; đường tín hiệu dưới mỗi ô to dần, cho thấy thông tin lệch dần.
- **S9. Thiếu minh bạch thì những bên không tranh chấp cũng chịu thiệt**
  - Nội dung: Tín hiệu cảnh báo — theo báo chí đưa tin · ! · ! · ! · Hợp đồng chưa ký · Thanh toán chưa rõ · Có người rút sớm · sát ngày diễn · chưa nhận, được hẹn nhiều lần · một nhạc sĩ trả lại cát-sê trước 4 ngày · Bên không tranh chấp cũng chịu thiệt: địa điểm, âm thanh ánh sáng, khán giả. · Ý kiến một luật sư: thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện.  chưa KCC
  - Chân slide: Y09: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026) — ý kiến luật sư là một ý kiến chuyên gia, chưa kiểm chứng chéo.
  - Ghi chú GV: Theo báo chí: một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn nhiều lần; một nhạc sĩ trả lại cát-sê trước 4 ngày khi thấy “dấu hiệu không ổn” (Báo Văn hóa, 3/1/2026). Sau đó, người đại diện đơn vị tổ chức bị khởi tố; một luật sư nhận xét thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện (Nhân Dân, 23/1/2026). ⏎ Không nêu tên cá nhân, không quy lỗi cá nhân. ⏎ Hỏi: “Nếu Nova là agency của một nhà tài trợ show này, tín hiệu cảnh báo nào Nova có thể thấy trước?” — gợi ý: hợp đồng với nghệ sĩ chưa ký sát ngày; lịch thanh toán không rõ; các bên không nói chuyện với nhau.
- **S10. Minh bạch là mọi bên đọc cùng một phiên bản đúng**
  - Nội dung: APEX Event Specifications Guide (ESG) — ba phần · Narrative / tổng quan sự kiện · Function Schedule / lịch từng hoạt động · Function Set-up Order / yêu cầu cho từng hoạt động · Trường bắt buộc giữ mọi bên cùng một phiên bản: · Ngày sửa đổi · Đầu mối chính · Họp trước sự kiện · Họp sau sự kiện · Bộ APEX xuyên suốt môn: · RFP · Buổi 10 · ESG · Buổi 12 · PER · Buổi 8
  - Chân slide: Y07: Convention Industry Council (2005), APEX Event Specifications Guide template.
  - Ghi chú GV: ESG: “the document used by an event organizer to convey information clearly and accurately to appropriate venue(s) and/or suppliers regarding all requirements for an event”. ⏎ Trường bắt buộc có ngày sửa đổi, đầu mối chính, họp trước sự kiện và họp sau sự kiện. ⏎ [VERIFY: APEX ESG có bản mới hơn bản 2005 không] ⏎ Nói: “Minh bạch không phải ‘kể hết cho mọi người’. Minh bạch là mọi bên cùng đọc một phiên bản đúng, biết ai đổi gì, khi nào.”
- **S11. Minh bạch về yêu cầu, lịch, thanh toán — bảo mật về khách và giá**
  - Nội dung: Minh bạch với mạng lưới · Bảo mật · Yêu cầu của sự kiện / Lịch, giờ dựng – tháo / Thay đổi: ai đổi gì, khi nào / Lịch và điều kiện thanh toán · Danh sách, thông tin cá nhân khách của An Phát (trừ phần cần thiết, có đồng ý) / Giá của nhà cung cấp khác / Thông tin nội bộ của An Phát
  - Chân slide: Nhận định của người soạn.
  - Ghi chú GV: Hiểu lầm: “Minh bạch là chia sẻ mọi thứ” → minh bạch về yêu cầu, lịch, thay đổi, thanh toán; bảo mật thông tin khách và giá. ⏎ → Chuyển sang S3 — Thực hành 1.
- **S12. Thực hành 1 · Tuần cuối trước gala: bốn xung đột cùng lúc**
  - Nội dung: T-5 ngày · chị Thảo (KAMer) nhận bốn tin trong một buổi sáng · Bình An / nhà tài trợ · Muốn bàn tư vấn cạnh khu tiệc, phát tờ rơi — khác thỏa thuận đã ký · Mỗi tin: deliverable nào bị đe dọa · bên đó giữ vai nào · lợi ích thật · 1 · 7’ · Khách sạn B / địa điểm · Tiệc cưới 11/12 kéo dài: giờ dựng lùi 8h → 13h; livestream và bếp tranh khu hậu cần · 2 · Xếp ưu tiên; 2 xung đột đầu: giải pháp cùng giải quyết + leo thang đến ai · 8’ · TS. Nam / diễn giả chính · Báo nêu tên ông trong HĐQT một công ty đang bị thanh tra (chưa kết luận) · 3 · Tin nhắn 3–4 câu gửi anh Minh về một xung đột · 5’ · Nhà in / đối tác 5 năm · Trễ backdrop 1 ngày vì file duyệt muộn 2 ngày; xin phụ phí in gấp 15 tr · 4
  - Chân slide: Phiếu W12_activity_S3_tuan_cuoi_truoc_gala.md · Tình huống giả định.
  - Ghi chú GV: S3 — Thực hành 1 (20 phút). Đồng hồ 7 / 8 / 5 phút. ⏎ Deliverables Nova đã cam kết: trải nghiệm khách VIP không bị làm phiền · livestream ổn định · nhận diện thương hiệu đúng · phiên chuyên đề của TS. Nam · đúng giờ, đúng ngân sách. ⏎ Khi chốt: ghi thứ tự ưu tiên của 6 nhóm lên bảng. Thảo luận: các nhóm có xếp giống nhau không? Xung đột nào không cần báo anh Minh?
- **S13. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S14. Bên liên quan chủ chốt thường giữ nhiều vai**
  - Nội dung: Cơ quan quản lý · Bên chịu tác động · Bên hỗ trợ · Một bên liên quan chủ chốt · Khán giả · Đồng sản xuất · Cộng tác · Nhà cung cấp
  - Chân slide: Y04: Getz, Andersson & Larson (2006), Event Management — mới đọc tóm tắt.
  - Ghi chú GV: Getz, Andersson & Larson (2006) phân vai trò bên liên quan của lễ hội thành bảy vai, và thấy bên liên quan chủ chốt giữ nhiều vai cùng lúc.
- **S15. Xung đột lợi ích thường sinh ra từ vai chồng chéo**
  - Nội dung: Vai 1 · Vai 2 · Xung đột có thể · Khách sạn · Địa điểm · Nhà cung cấp AV độc quyền · Ưu tiên doanh thu AV hơn livestream của An Phát · Bảo hiểm Bình An · Nhà tài trợ · Đối tác kinh doanh của An Phát · Muốn bán hàng tại gala ↔ trải nghiệm khách VIP · Chị Mai Anh · Diễn giả · Khách hàng của An Phát · Muốn quảng bá công ty mình ↔ nội dung trung lập · Xung đột lợi ích (định nghĩa của môn): khi lợi ích của một bên — hoặc các vai khác nhau của cùng một bên — đi ngược điều Nova đã cam kết với Key Account.
  - Chân slide: Ví dụ giả định từ Buổi 9–11 · định nghĩa làm việc của môn (quyết định GV 4).
  - Ghi chú GV: Định nghĩa làm việc: xung đột lợi ích = khi lợi ích của một bên liên quan bên ngoài — hoặc các vai trò khác nhau của cùng một bên — đi ngược những gì Nova đã cam kết với Key Account.
- **S16. Mạng lưới sự kiện là một quảng trường chính trị**
  - Nội dung: Trong quảng trường có: · Lợi ích · Xung đột · Quyền lực · Các quá trình diễn ra: · Gác cổng · Đàm phán · Xây liên minh · Xây niềm tin · Xây bản sắc · Bản sắc chung giúp giảm xáo trộn — xung đột là bình thường, nhiệm vụ không phải xóa nó.
  - Chân slide: Y05: Larson (2002), International Journal of Tourism Research — mới đọc tóm tắt.
  - Ghi chú GV: Larson (2002): mạng lưới làm marketing cho lễ hội là một political market square với lợi ích, xung đột, quyền lực; các quá trình: gác cổng, đàm phán, xây liên minh, xây niềm tin, xây bản sắc. Bản sắc chung giúp giảm xáo trộn. ⏎ Nói: “Xung đột là bình thường.”
- **S17. Bản sắc chung của mạng lưới: cùng phục vụ khách của Key Account**
  - Nội dung: Tất cả đang làm cho / 600 khách của An Phát. · Nhắc lại Mỹ Đình (Buổi 10) · Concert 7/12/2024 và lịch thi đấu của đội tuyển: chủ địa điểm, nhà tổ chức concert và VFF có lợi ích trái chiều — khi thiếu một bản sắc chung, mỗi bên kéo về phía mình.
  - Chân slide: V10 (Buổi 10): Tuổi Trẻ Online (11/11/2024) và các báo khác.
  - Ghi chú GV: Nói: “Nhiệm vụ của Nova không phải xóa xung đột, mà giữ cho mọi bên nhớ bản sắc chung: tất cả đang làm cho 600 khách của An Phát.” ⏎ Nhắc nhanh Mỹ Đình: concert 7/12/2024 và lịch thi đấu của đội tuyển — chủ địa điểm, nhà tổ chức concert và VFF có lợi ích trái chiều.
- **S18. Năm bước bảo vệ deliverables**
  - Nội dung: Báo Key Account + cập nhật ESG   cho mọi bên cùng một phiên bản · 5 · Cùng giải quyết — không được thì leo thang   người phụ trách → lãnh đạo Nova → Key Account · 4 · Lợi ích đằng sau lập trường?   đàm phán tích hợp (Buổi 7) · 3 · Ai liên quan, vai gì, nổi bật đến đâu?   quyền lực · chính đáng · cấp bách (Buổi 1) · 2 · Deliverable nào bị đe dọa?   bắt đầu từ cam kết với Key Account · 1
  - Chân slide: Nhận định của người soạn, dựng từ Y03, S12 (Buổi 7) và Mitchell et al. (Buổi 1).
  - Ghi chú GV: Để chiếu suốt S6. ⏎ 1 Deliverable nào bị đe dọa? (livestream về 80 chi nhánh, trải nghiệm khách VIP, nhận diện thương hiệu, lịch…) — bắt đầu từ cam kết với Key Account, không từ bên đang to tiếng nhất. ⏎ 2 Ai liên quan, giữ vai gì, nổi bật đến đâu? (quyền lực – tính chính đáng – tính cấp bách: Mitchell, Agle & Wood, Buổi 1). ⏎ 3 Lợi ích đằng sau lập trường? (đàm phán tích hợp, Buổi 7): Bình An đòi bàn tư vấn cạnh khu tiệc, nhưng thứ họ cần là khách hẹn gặp. ⏎ 4 Cùng giải quyết; nếu không được, leo thang theo thứ tự đã thống nhất (người phụ trách → lãnh đạo Nova → Key Account). ⏎ 5 Thông báo minh bạch cho Key Account và cập nhật ESG cho mọi bên. ⏎ Hiểu lầm: “Giải quyết xung đột = chọn bên đúng” → bảo vệ deliverable của Key Account; thường giải pháp tốt đáp ứng lợi ích của cả hai bên. ⏎ Alt-text: năm bậc thang đi lên.
- **S19. Giấu khách hàng là cách mất niềm tin nhanh nhất**
  - Nội dung: Tin nhắn gửi Key Account — bốn ý · 1 · 2 · 3 · 4 · Chuyện gì xảy ra · Ảnh hưởng đến deliverable nào · Nova đề xuất gì · Cần anh Minh quyết gì · Key Account phát hiện muộn còn mất niềm tin hơn là nghe tin xấu sớm — cam kết và niềm tin là nền của quan hệ (Morgan & Hunt).
  - Chân slide: Y02: Morgan & Hunt (1994) · Y03: Mohr & Spekman (1994) · cấu trúc tin nhắn: phiếu Thực hành 1.
  - Ghi chú GV: Hiểu lầm: “Không nói với khách hàng để khỏi mất điểm” → Key Account phát hiện muộn còn mất niềm tin hơn. ⏎ Câu hỏi Mỹ Đình: “Ở bước 5, ai phải biết sớm nhất?”
- **S20. Trách nhiệm quy cho ai quyết định cách phản hồi**
  - Nội dung: Rất cao · Trách nhiệm khách quy cho tổ chức → · Thấp · Rất thấp · Nạn nhân / victim · Tin đồn, thiên tai · Tai nạn / accidental · Lỗi kỹ thuật · Có thể ngăn ngừa / preventable · Lỗi con người, sai phạm
  - Chân slide: Y08: Coombs (2007), Corporate Reputation Review — SCCT.
  - Ghi chú GV: Coombs (2007): mức đe dọa danh tiếng phụ thuộc trách nhiệm ban đầu bên liên quan quy cho tổ chức, lịch sử khủng hoảng, danh tiếng quan hệ trước đó. ⏎ Phạm vi: chỉ ở mức phối hợp bên liên quan; xử lý khủng hoảng chi tiết thuộc môn khác.
- **S21. Phủ nhận, giảm nhẹ hay xây lại**
  - Nội dung: Deny · Diminish · Rebuild · Phủ nhận, đổ lỗi · Bào chữa, biện minh · Bồi thường, xin lỗi · Bổ trợ: Bolstering / nhắc việc tốt đã làm, tri ân các bên · Luôn: bày tỏ quan tâm đến người bị ảnh hưởng — giúp giảm cảm xúc tiêu cực.
  - Chân slide: Y08: Coombs (2007).
  - Ghi chú GV: Chiến lược theo SCCT: Deny (phủ nhận, đổ lỗi) · Diminish (bào chữa, biện minh) · Rebuild (bồi thường, xin lỗi); bổ trợ Bolstering (nhắc việc tốt, tri ân). Bày tỏ quan tâm đến người bị ảnh hưởng giúp giảm cảm xúc tiêu cực.
- **S22. Khi một đối tác gây sự cố, Nova xác minh và khuyến nghị — Key Account quyết**
  - Nội dung: Nova · Nova · An Phát · Xác minh sự việc · Đưa phương án + khuyến nghị mức phản hồi · Quyết định và lên tiếng · Ví dụ: diễn giả/KOL vướng vụ việc / Ban đầu An Phát gần nhóm “nạn nhân” — nhưng nếu thông tin có từ trước mà không ai kiểm tra, khách thấy lỗi “có thể ngăn ngừa” → due diligence (Buổi 11). · Đối tác trong vụ Kera đã phản hồi / thương hiệu hợp tác gỡ ảnh; công ty quản lý chấm dứt hợp đồng. / Nova còn phải giữ deliverables: diễn giả dự phòng, kịch bản thay thế.
  - Chân slide: Nhận định của người soạn · X06 (Buổi 11): VnExpress, Thanh Niên, Dân trí, VTC News · due diligence: Buổi 11.
  - Ghi chú GV: Một KOL/diễn giả vướng vụ việc: với An Phát, ban đầu thường gần nhóm nạn nhân; nhưng nếu thông tin đã có từ trước mà không ai kiểm tra, khách có thể thấy đó là lỗi có thể ngăn ngừa — lý do của due diligence ở Buổi 11. ⏎ Phản hồi của các đối tác trong vụ Kera (X06): thương hiệu hợp tác gỡ ảnh; công ty quản lý chấm dứt hợp đồng. ⏎ Nova không nói thay An Phát. Nova giữ deliverables: có diễn giả dự phòng? thay đổi kịch bản? Sau sự cố: ghi vào đánh giá sau sự kiện (Buổi 8). ⏎ Chỉ ở mức phối hợp bên liên quan.
- **S23. Năm câu hỏi khi một bên gây sự cố**
  - Nội dung: Sự việc đã được xác minh chưa? · 1 · Trong mắt khách của An Phát, ai chịu trách nhiệm (SCCT)? · 2 · Deliverable nào bị ảnh hưởng? Phương án dự phòng? · 3 · Nova khuyến nghị An Phát phản hồi ở mức nào? · 4 · Ai thông báo cho ai, khi nào (cập nhật ESG)? · 5
  - Ghi chú GV: Checklist dùng cho S6 và cho SMP của nhóm. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S24. Thực hành 2 · Mạng lưới bên liên quan trong SMP của nhóm (chạy thử bảo vệ)**
  - Nội dung: Khách hàng của nhóm ở giữa · ≥ 5 bên liên quan bên ngoài · ◆ bên giữ nhiều vai · 2 xung đột (nét đứt) · 1 cơ chế minh bạch · Xung đột · Deliverable bị đe dọa · Lợi ích thật các bên · Phòng trước · Xử lý khi xảy ra · 1 · 2 · Vẽ mạng lưới và 2 xung đột trên A1 · Một người ở lại trình bày 1’; còn lại làm hội đồng bảo vệ — 🟨 1 câu hỏi, 🟥 1 điểm yếu · Về bàn, sửa một điểm; ghi câu hỏi khó nhất · 13’ · 2×5’ · 4’ · Dùng năm bước bảo vệ deliverables và năm câu hỏi khi có sự cố.
  - Chân slide: Phiếu W12_activity_S6_mang_luoi_smp.md.
  - Ghi chú GV: S6 — Thực hành 2 (30 phút): 3 mở đầu · 13 vẽ · 10 xoay trạm (2 vòng × 5 phút) · 4 sửa và chốt. ⏎ Lời mở đầu: “Từ Buổi 7 đến giờ, các bạn đã làm từng trang cho khách hàng của nhóm. Hôm nay ráp chúng thành một mạng lưới, và tìm hai chỗ mạng lưới đó có thể vỡ. Sau 13 phút, một người ở lại trình bày, những người khác đi làm hội đồng: mỗi bàn nhận một câu hỏi khó và một điểm yếu. Đây là buổi chạy thử — sai ở đây rẻ hơn sai ở buổi bảo vệ.” ⏎ Nếu nhóm chưa có trang SMP: dùng mạng lưới An Phát làm mẫu. ⏎ Khi chốt: ghi các câu hỏi phản biện lặp lại ở nhiều nhóm (danh sách ôn tập bảo vệ SMP).
- **S25. Ba ý của Buổi 12**
  - Nội dung: Giá trị của Nova nằm một phần trong quan hệ dài hạn (tài sản đặc thù, chia sẻ tri thức, năng lực bổ trợ, quản trị). Minh bạch = mọi bên đọc một phiên bản đúng (ESG); bảo mật thông tin khách và giá. · 12.1 · Xung đột thường đến từ một bên nhiều vai. Năm bước: deliverable → ai, vai gì → lợi ích đằng sau → cùng giải quyết, leo thang → báo minh bạch cho Key Account. · 12.2 · Phân loại theo mức trách nhiệm (SCCT); Nova xác minh, khuyến nghị, để Key Account quyết — và giữ deliverables. · Sự cố
  - Ghi chú GV: S7 — Tổng hợp (3 phút). Ba câu chốt: 12.1 · 12.2 · sự cố.
- **S26. Phần 3 khép lại: mạng lưới bên ngoài phục vụ hành trình của Key Account**
  - Nội dung: Buổi 9 · Buổi 10 · Buổi 11 · Buổi 12 · Nhà tài trợ – nhà đầu tư · Nhà cung cấp – địa điểm · Báo chí – KOL · Leverage & xung đột mạng lưới · Buổi 13 / Stakeholder Management Plan / xoay quanh Key Account Plan · phần Value Delivery
  - Chân slide: Đề cương 13.2: đưa điều phối bên liên quan bên ngoài vào phần Value Delivery của Key Account Plan.
  - Ghi chú GV: Khép Phần 3: Buổi 9–12 đã gắn nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL vào hành trình của Key Account. ⏎ Câu nối Buổi 13: “Phần 3 khép lại: các bạn đã có nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL, và cách giữ cả mạng lưới làm việc cho Key Account. Buổi sau ta ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan.”
- **S27. Phiếu kiểm tra cuối giờ**
  - Nội dung: Trong SMP của nhóm bạn, bên liên quan bên ngoài nào giữ nhiều vai nhất? Điều đó có thể gây xung đột gì với deliverable cam kết cho khách hàng? · 1 · Một câu hỏi phản biện nhóm bạn nhận được hôm nay mà nhóm chưa trả lời được. Nhóm sẽ bổ sung gì trước buổi bảo vệ? · 2 · Buổi 13: ráp nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL và cách giữ mạng lưới thành Stakeholder Management Plan xoay quanh Key Account Plan.
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) nhận ra xung đột do vai trò chồng chéo, không chỉ “bên kia xấu”; (b) nối được với deliverable của Key Account; (c) câu hỏi phản biện cụ thể và kế hoạch bổ sung khả thi. ⏎ Câu nối Buổi 13: “Buổi sau ta ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan.”
- **S28. Tài liệu tham khảo (1/2)**
  - Nội dung: Y01 · Dyer, J. H., & Singh, H. (1998). The relational view: Cooperative strategy and sources of interorganizational competitive advantage. Academy of Management Review, 23(4), 660–679. · Y02 · Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. Journal of Marketing, 58(3), 20–38. · Y03 · Mohr, J., & Spekman, R. (1994). Characteristics of partnership success. Strategic Management Journal, 15(2), 135–152. · Y04 · Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. Event Management, 10(2), 103–122. · Y05 · Larson, M. (2002). A political approach to relationship marketing: Case study of the Storsjöyran festival. International Journal of Tourism Research, 4(2), 119–143.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-12_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn Y01–Y10 ghi ở chân slide. Tiêu đề báo Y09 giữ dạng chữ theo dàn ý. Toàn văn Y01, Y02, Y04, Y05 chưa đọc.
- **S29. Tài liệu tham khảo (2/2)**
  - Nội dung: Y06 · Lee, H. L., Padmanabhan, V., & Whang, S. (1997). Information distortion in a supply chain: The bullwhip effect. Management Science, 43(4), 546–558. · Y07 · Convention Industry Council. (2005). The APEX event specifications guide template. · Y08 · Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. Corporate Reputation Review, 10(3), 163–176. · Y09 · Báo Văn hóa. (2026, January 3). Giữa hợp đồng và trách nhiệm, ranh giới nào cho nghệ sĩ? · Nhân Dân. (2026, January 23). Khoảng trống pháp lý trên thị trường biểu diễn. · Dân trí. (2025, December 31). Vụ “Về đây bốn cánh chim trời”: Việc cấp phép, huỷ show ở Việt Nam thế nào? · Y10 · Xem các thẻ U08, U11 (Buổi 9), V10 (Buổi 10), X06 (Buổi 11), S12, S15 (Buổi 7).
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-12_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy; để tra cứu mã nguồn Y01–Y10 ghi ở chân slide. Tiêu đề báo Y09 giữ dạng chữ theo dàn ý. Toàn văn Y01, Y02, Y04, Y05 chưa đọc.

### Buổi 13 — Building the Stakeholder Management Plan around the Key Account Plan

| | |
|---|---|
| Mục tiêu | Câu chữ chính thức: [CHƯA CÓ THÔNG TIN]. Đây là buổi xưởng ráp SMP |
| Đoạn | Mở đầu · 13.1 Khung A–E · Phần C · D (13.2) · Phần E · bảo vệ · Tổng kết |
| Số slide · trạng thái | 26 · HOÀN THÀNH |

#### Nội dung từng slide — EVM1110E_W13_SMP_KAP.pptx

- **S1. Slide bìa**
  - Nội dung: EVM1110E  ·  Buổi 13 / 15 · Nhà tài trợ · Quản trị mối quan hệ trong tổ chức sự kiện · Key Account Plan · Building the Stakeholder Management Plan around the Key Account Plan · Báo chí – KOL · Nhà cung cấp · Phần 4 · buổi 1/3 — Đánh giá: bảo vệ dự án SMP · buổi xưởng / Khoa Marketing · UEF / Giảng viên: Đoàn Nguyễn Bảo Quyên
  - Ghi chú GV: Slide 1 (dàn ý #1). Mở Phần 4 — buổi xưởng. Nhắc SV đã mang đủ các trang SMP (Buổi 1, 7–12). ⏎ Alt-text: hai vòng tròn đồng tâm — lõi là Key Account Plan, vòng ngoài là nhà tài trợ, nhà cung cấp, báo chí – KOL.
- **S2. Customer Board sẽ hỏi: kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị?**
  - Nội dung: Câu hỏi đầu tiên nhiều khả năng là gì? · Buổi 14 · phòng bảo vệ · “Nhóm đã làm những gì?” · A · Customer Board — ba giảng viên đóng vai khách hàng · “Kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị?” · B · Đề cương: bảo vệ logic tài chính và chiến lược điểm chạm trước câu hỏi trực tiếp. · “Nhóm có bao nhiêu slide?” · C
  - Chân slide: Z07: Đề cương chi tiết học phần EVM1110E (UEF), Buổi 14–15.
  - Ghi chú GV: S1 — Khởi động (5 phút). Chiếu và đọc: “Buổi 14. Nhóm bạn bước vào phòng. Customer Board — ba giảng viên — ngồi đối diện. Câu hỏi đầu tiên của họ nhiều khả năng là gì?” Giơ tay A/B/C. ⏎ Chốt: “Đề cương ghi rõ: các bạn bảo vệ logic tài chính và chiến lược điểm chạm trước câu hỏi trực tiếp. Hội đồng đóng vai khách hàng, và khách hàng quan tâm đến giá trị cho họ. Hôm nay: ráp mọi trang đã làm thành một kế hoạch trả lời được câu (B).”
- **S3. SMP của môn = Key Account Plan + điều phối bên liên quan bên ngoài**
  - Nội dung: Lõi · Key Account Plan (KAP) / kế hoạch cho một khách hàng quan trọng: hiểu họ, tạo giá trị gì, thực hiện ra sao · Nhà tài trợ / đầu tư · KAP · Vòng ngoài · điều phối bên liên quan bên ngoài (13.2) / nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL cùng giao giá trị cho Key Account · Báo chí – KOL · Nhà cung cấp – địa điểm
  - Ghi chú GV: Key Account Plan (KAP) là phần lõi: kế hoạch cho MỘT khách hàng quan trọng — hiểu họ, tạo giá trị gì cho họ, thực hiện ra sao. ⏎ Stakeholder Management Plan (SMP) của môn = KAP cộng với việc điều phối các bên liên quan bên ngoài (nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL) để giao giá trị cho Key Account (13.2). ⏎ Alt-text: hai vòng tròn đồng tâm — vòng trong là KAP, vòng ngoài có nhà tài trợ/nhà đầu tư, nhà cung cấp – địa điểm, báo chí – KOL.
- **S4. Kế hoạch key account là một quy trình, không phải một tài liệu**
  - Nội dung: 78 · 3–5 năm · công ty quốc tế được nghiên cứu về lợi ích, nội dung và khiếm khuyết của key account plan · tầm nhìn khuyến nghị cho kế hoạch chiến lược với một key account · Lập → thực hiện → rà soát → cập nhật — kế hoạch sống cùng quan hệ, không nằm trong ngăn kéo.
  - Chân slide: Z03: Ryals & Rogers (2007), Journal of Strategic Marketing · Z02: Holt, Cranfield School of Management blog.
  - Ghi chú GV: Nghiên cứu 78 công ty quốc tế mô tả lợi ích, nội dung và các khiếm khuyết thường gặp của key account plan (Ryals & Rogers, 2007). Cranfield khuyến nghị kế hoạch chiến lược cho key account có tầm nhìn 3–5 năm.
- **S5. Value Planning đặt khách hàng ở điểm bắt đầu và ở trung tâm**
  - Nội dung: “This puts the customer at the start and heart of the planning process.” — Cranfield (Z02) · Nguồn gốc của khung · Ryals & McDonald (2010) · quy trình lập KAP · Davies & Holt (2013) · Value Planning Framework · “The framework divides the planning process into five key sections: value insights, value opportunities, value proposition, value delivery and executive summary.” — KAM Forum (Z01)
  - Chân slide: Z01: Davies, KAM Forum (Cranfield) · Z02: Holt, Cranfield blog · Z04: Ryals & McDonald (2010), Key account plans, Routledge.
  - Ghi chú GV: Khung do Mark Davies và Dr Sue Holt (Cranfield) trình bày năm 2013, phát triển từ quy trình lập kế hoạch KAM của Ryals & McDonald (sách Key Account Plans, 2010). Cranfield gọi cách làm này là Value Planning.
- **S6. Năm phần: Insights → Opportunities → Propositions → Delivery → Executive Summary**
  - Nội dung: Executive Summary  — viết cuối, nhưng đặt ở đầu kế hoạch: hội đồng đọc trước tiên · E · A · B · C · D · Value Insights · Value Opportunities · Value Propositions · Value Delivery · hiểu thế giới của khách hàng · cơ hội tạo thêm giá trị · agency hứa gì, bao nhiêu · ai làm gì, đo bằng gì
  - Chân slide: Z01: KAM Forum (Cranfield).
  - Ghi chú GV: Nói: “Viết theo thứ tự A → D, rồi mới viết E. Nhưng đọc theo thứ tự E → A: hội đồng đọc E trước.” ⏎ Alt-text: năm ô A, B, C, D nối bằng mũi tên theo thứ tự; ô E tách riêng ở đầu, ghi “đọc đầu”.
- **S7. Mỗi phần trả lời một câu hỏi**
  - Nội dung: Câu hỏi chính · Công cụ đã học · A. Insights · Môi trường, đối thủ, nội bộ khách hàng; ai quyết định; khách của khách hàng đi hành trình nào? · PESTEL, đối thủ, nội bộ; Grid, Salience (B1); hành trình, DMU (B3) · B. Opportunities · Ở đâu tạo thêm giá trị cho khách và agency? Quan hệ đáng đầu tư đến đâu, rủi ro gì? · Chọn Key Account (B2); chất lượng quan hệ (B4); CLV, cost-to-serve (B6); sức khỏe quan hệ (B8) · C. Propositions · Agency hứa gì, bao nhiêu tiền/chỉ số, khác đối thủ ở đâu? · CVP (B5); win-win, ROI + ROO (B9) · D. Delivery · Ai làm gì, khi nào, nguồn lực nào, đo bằng gì; điều phối bên ngoài thế nào? · Kraljic, đàm phán (B7); Diamond, ROI 6 cấp (B8); B9–12 · E. Exec Summary · Một trang: vấn đề – đề xuất – giá trị có số – việc cần quyết · Tổng hợp A–D
  - Chân slide: A theo Z01 · câu hỏi và công cụ của B–E: định nghĩa làm việc của người soạn (Z09) — ưu tiên giáo trình nội bộ UEF nếu có.
  - Ghi chú GV: [VERIFY: định nghĩa phần B–E theo giáo trình nội bộ UEF, nếu có] ⏎ Cột “công cụ đã học” giúp nhóm biết trang nào đã làm ở buổi nào đi vào phần nào.
- **S8. Giả định có lý do là câu trả lời hợp lệ — con số bịa thì không**
  - Nội dung: “But do make sure to make it clear in your plan that these are assumptions!” — KAM Forum (Z01) · Mẫu: “Giả định: … vì …; sẽ kiểm chứng bằng …” · ✓ Giả định có lý do / nói được vì sao chọn con số, sẽ kiểm tra lại với khách · ✗ Con số bịa / không nguồn, không lý do — hội đồng hỏi là lộ
  - Chân slide: Z01: KAM Forum (Cranfield).
  - Ghi chú GV: Khi chưa có đủ thông tin về khách hàng, Cranfield khuyên được đặt giả định và lập kịch bản — và xác nhận lại với khách hàng. ⏎ Nói: “Khách hàng của các bạn là từ dự án cũ. Có nhiều điều các bạn không biết chắc: ngân sách năm sau, doanh thu, số khách. Không sao. Ghi ‘Giả định:’ và nói vì sao chọn con số đó. Hội đồng sẽ hỏi — và giả định có lý do là một câu trả lời tốt; con số bịa thì không.”
- **S9. Bộ khung An Phát cho thấy cách ráp, không phải bài để chép**
  - Nội dung: GIẢ ĐỊNH · khung · Ngân hàng TMCP, mảng khách doanh nghiệp VIP; GĐ Marketing mới (anh Minh); DMU: anh Minh, ông Tuấn, anh Khoa, chị Lan, chị Vy; khách của An Phát: 600 lãnh đạo DN · A · Cơ hội: tăng số CEO đến trực tiếp; từ một gala/năm sang chương trình khách hàng cả năm. Rủi ro: đổi đầu mối, ngân sách giảm ~10% · B · Nova giúp An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP, đo bằng ROI 6 cấp (cấp 0–3 Nova cam kết; cấp 4–5 cùng An Phát) · C · Nhà tài trợ đối tác (Bình An, GlobalCard); khách sạn, AV, nhà in; báo kinh tế, diễn giả; ESG chung; 5 bước xử lý xung đột · D · 5 câu (phần sau) · E
  - Chân slide: Tình huống giả định — mọi tên, con số chỉ dùng cho học tập (quyết định GV 6: không phát bài mẫu hoàn chỉnh).
  - Ghi chú GV: Nhắc: “Đây là khung, không phải bài mẫu. Khách hàng của nhóm bạn khác An Phát — phần A của bạn phải khác hoàn toàn.” ⏎ → Chuyển sang S3 — Thực hành 1.
- **S10. Thực hành 1 · Ráp khung A–E cho SMP của nhóm**
  - Nội dung: Khung một dòng / Kẻ 5 ô A–E trên A1; mỗi ô A–D viết một câu (E để trống) · 10’ · Bảng truy vết / Trang đã làm · vào phần nào · còn thiếu gì · giả định · ai hoàn thiện. Phần không có trang nào → 🔴 · 12’ · Ba giả định quan trọng nhất / “Giả định: … vì …; sẽ kiểm chứng bằng …” · 5’ · Trang đã làm (buổi) · Vào phần nào · Còn thiếu gì · Giả định · Ai hoàn thiện · Mỗi phần A–D phải có ít nhất 1 trang đã làm đưa vào.
  - Chân slide: Phiếu W13_activity_S3_rap_khung_A_E.md.
  - Ghi chú GV: S3 — Thực hành 1 (30 phút): 3 mở đầu · 10 · 12 · 5. GV đi vòng từng nhóm; 3 phút cuối chốt chung. ⏎ Bày tất cả trang SMP đã làm (Buổi 1, 3, 7–12). ⏎ Khi chốt: ghi các phần có 🔴 của 6 nhóm lên bảng — để biết nhóm nào cần hỗ trợ. Phần nào nhiều nhóm 🔴 nhất? Giả định nào khó giải thích nhất? ⏎ Nếu nhóm thiếu nhiều trang cũ: ráp khung với ô trống ghi “cần bổ sung”, ưu tiên phần D.
- **S11. Giải lao 8 phút (slide giải lao)**
  - Nội dung: Giải lao 8 phút · Quay lại lúc  ____ : ____
  - Ghi chú GV: Giải lao 8 phút. Ghi giờ quay lại lên slide/bảng.
- **S12. Value proposition là đóng góp của agency vào lợi nhuận của khách hàng, quy ra tiền**
  - Nội dung: Value proposition là “the translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.” / — McDonald (Z05) · Không phải / “Dịch vụ của chúng tôi gồm…” · Mà là / “Khách hàng được thêm bao nhiêu — quy ra tiền”
  - Chân slide: Z05: McDonald, SAMA — How to create financially quantified value propositions.
  - Ghi chú GV: Quyết định GV 7: không dùng các số liệu 5%/1%/25% thường được trích kèm. ⏎ Nói: phần C không phải “dịch vụ của chúng tôi gồm…”, mà là khách hàng được thêm bao nhiêu.
- **S13. Giá trị đến từ bốn nguồn**
  - Nội dung: Tăng giá trị · Giảm chi phí · Buổi 8 · Buổi 7, 10, 12 · Khách doanh nghiệp giữ quan hệ, tăng giao dịch sau sự kiện (ROI cấp 4–5) · Chọn nhà cung cấp, đàm phán tốt, dùng quan hệ dài hạn · Tránh chi phí · Đóng góp cảm xúc · Buổi 9, 11, 12 · Buổi 3, 9 · Due diligence KOL, hợp đồng chặt, xử lý xung đột sớm → tránh sự cố uy tín · Trải nghiệm khách VIP, hình ảnh thương hiệu — khó định lượng nhưng có thật
  - Chân slide: Z05: McDonald (SAMA) · ví dụ cho agency sự kiện: nhận định của người soạn.
  - Ghi chú GV: Ba cách tạo giá trị tiền tệ cho khách hàng: tăng giá trị (doanh thu, năng suất, tốc độ…), giảm chi phí, tránh chi phí; thêm đóng góp cảm xúc — khó định lượng nhưng có thật.
- **S14. Mỗi con số trong giá trị phải có nguồn hoặc giả định**
  - Nội dung: GIẢ ĐỊNH · Giá trị ước tính = · số khách DN giữ thêm nhờ chương trình · × · lợi nhuận bình quân mỗi khách/năm · + · chi phí tránh được · − · chi phí chương trình · Dưới mỗi ô ghi một trong hai: · Nguồn: dữ liệu khách cung cấp, báo cáo, hợp đồng · Giả định: … vì …; kiểm chứng bằng …
  - Chân slide: Công thức minh họa — GIẢ ĐỊNH, để luyện cách lập luận, không phải số thật.
  - Ghi chú GV: Tính trên bảng nếu có thời gian. Nếu trễ giờ: rút ví dụ tính, giữ công thức trên slide. ⏎ Mỗi con số phải ghi nguồn hoặc ghi “Giả định: … vì …”.
- **S15. Mỗi lời hứa ở phần C cần một dòng đo ở phần D**
  - Nội dung: “It is the supplier’s job to advise how the value that they promise within their value proposition will be captured (in ROI and KPI measures).” — Davies (Z06) · C · Lời hứa · D · Dòng đo · Tăng tỷ lệ CEO đến trực tiếp · Tỷ lệ CEO đến / số được mời (cấp 0) · Khách biết thêm về giải pháp mới · % khách trả lời đúng sau phiên (cấp 2) · Không sự cố uy tín từ đối tác · Due diligence 100% KOL, diễn giả trước khi ký · ví dụ giả định từ khung An Phát
  - Chân slide: Z06: Davies, Creating compelling customer value propositions, Cranfield blog.
  - Ghi chú GV: Nói: “Mỗi lời hứa ở phần C phải có một dòng đo ở phần D.” Ví dụ trên slide là giả định từ khung An Phát.
- **S16. Trong phần D, mỗi bên liên quan bên ngoài trả lời bốn câu**
  - Nội dung: Gắn vào điểm chạm nào trên hành trình? / trước / trong / sau · đối tác sở hữu hay bên ngoài · 1 · Tạo giá trị gì cho khách của Key Account? · 2 · Quản lý bằng gì? / hợp đồng · ESG · KPI · người phụ trách · 3 · Rủi ro, xung đột — bảo vệ deliverables thế nào? · 4
  - Chân slide: Z09: tư liệu Buổi 7–12; Lemon & Verhoef (2016).
  - Ghi chú GV: Để chiếu suốt S6. ⏎ Điểm chạm theo Lemon & Verhoef: trước / trong / sau; đối tác sở hữu (partner-owned) hay bên ngoài (social/external).
- **S17. 13.2 là một bảng, không phải ba chương rời**
  - Nội dung: Đã học · Trang SMP đã có · Nhà đầu tư & nhà tài trợ · Buổi 9 · Bản đồ điểm chạm tài trợ, đề xuất win-win · Nhà cung cấp & địa điểm · Buổi 10 · Chấm hồ sơ, phân bổ theo giai đoạn mua – sau mua · Báo chí & KOL · Buổi 11 · Chọn diễn giả/KOL, khuếch đại điểm chạm trước sự kiện · Cả mạng lưới · Buổi 12 · Mạng lưới, xung đột, cơ chế minh bạch · → Một bảng trong phần D: mọi bên cùng phục vụ một hành trình của khách hàng.
  - Chân slide: Z07: Đề cương 13.2 · Z09: tư liệu Buổi 9–12.
  - Ghi chú GV: Chốt: “13.2 không phải thêm ba chương rời. Đó là một bảng trong phần D, nơi mọi bên đều phục vụ cùng một hành trình của khách hàng.”
- **S18. Executive Summary: năm câu cho người quyết định**
  - Nội dung: Khách hàng là ai, đang cần gì   từ A · 1 · Cơ hội lớn nhất   từ B · 2 · Đề xuất của agency — một câu   từ C · 3 · Giá trị có số và cách đo (ghi giả định)   C + D · 4 · Hội đồng cần quyết gì   ngân sách · cam kết · chia sẻ dữ liệu cấp 4–5 · 5
  - Chân slide: Khung 5 câu: đề xuất của người soạn.
  - Ghi chú GV: Để chiếu suốt S6. ⏎ Câu 5: “Hội đồng cần quyết gì” — ngân sách, cam kết, chia sẻ dữ liệu cấp 4–5…
- **S19. Viết cuối, đọc đầu**
  - Nội dung: A · B · C · D · E · Nhóm VIẾT · E · A · B · C · D · Hội đồng ĐỌC · Phần E là trang hội đồng đọc đầu tiên — và có thể là trang duy nhất họ đọc kỹ.
  - Ghi chú GV: Nhóm viết theo thứ tự A → B → C → D → E. Hội đồng đọc E trước, rồi mới lật A → D để kiểm tra.
- **S20. Mười lỗi khiến key account plan thất bại**
  - Nội dung: Kế hoạch là của riêng người KAM · Không rà soát, cập nhật · 1 · 6 · KAM làm một mình · Toàn nói về nhà cung cấp, ít hiểu khách hàng · 2 · 7 · Lãnh đạo không quan tâm · Giữ kế hoạch cho riêng mình · 3 · 8 · Làm một lần rồi bỏ · Coi là điền ô · 4 · 9 · Quá ngắn hạn, giao dịch · Không ai sở hữu · 5 · 10 · ● lỗi nhóm sinh viên dễ gặp nhất
  - Chân slide: Z02: Holt, Cranfield School of Management blog.
  - Ghi chú GV: Hỏi: “Với nhóm sinh viên, lỗi nào dễ gặp nhất?” — gợi ý: “một người viết” (2), “nói về mình” (7), “điền ô” (9).
- **S21. Được dùng AI — nhưng phải công bố và tự bảo vệ được**
  - Nội dung: Mức D · cho phép kèm công bố · Phụ lục công bố · Bảo vệ trực tiếp · Trang làm trên lớp · công cụ nào · dùng cho việc gì · nhóm đã kiểm tra và sửa gì · nơi hội đồng thấy nhóm hiểu kế hoạch của mình đến đâu · Buổi 1, 7–13 là dấu vết quá trình của nhóm · AI không biết khách hàng của các bạn, không có mặt ở dự án cũ, và không đứng trả lời Customer Board thay các bạn. · Checklist tự rà soát SMP / dùng ở S6 và trước Buổi 14
  - Chân slide: Chính sách AI cho SMP: mức D — cho phép kèm công bố (quyết định GV 5).
  - Ghi chú GV: [NEEDS PROFESSOR INPUT: mẫu phụ lục công bố sử dụng AI — dùng mẫu đề xuất trong checklist hay mẫu của Khoa/Trường] ⏎ Nói: “AI không biết khách hàng của các bạn, không có mặt ở dự án cũ, và không đứng trả lời Customer Board thay các bạn.” ⏎ Giới thiệu checklist tự rà soát (W13_checklist_tu_ra_soat_SMP.md) — dùng ở S6 và trước Buổi 14; checklist chỉ để tự rà soát, không thay rubric chính thức. ⏎ → Chuyển sang S6 — Thực hành 2.
- **S22. Thực hành 2 · Value Delivery + Executive Summary, rồi gặp Customer Board**
  - Nội dung: ≥ 3 bên liên quan bên ngoài: mỗi nhóm (i) tài trợ/đầu tư, (ii) nhà cung cấp/địa điểm, (iii) báo chí/KOL — ít nhất 1 bên · Bên liên quan · Điểm chạm · Giá trị cho khách · Quản lý bằng gì · Rủi ro & bảo vệ · Chỉ số (cấp mấy) · Bảng Value Delivery (A1) · Executive Summary 5 câu (A3) · Customer Board — 🟨 1 câu hỏi tài chính, 🟥 1 câu hỏi điểm chạm · Trả lời thử, sửa một dòng hoặc một câu · 12’ · 5’ · 2×5’ · 5’ · Dùng bốn câu của phần D, khung 5 câu của phần E và checklist tự rà soát khi sửa.
  - Chân slide: Phiếu W13_activity_S6_value_delivery_exec_summary.md.
  - Ghi chú GV: S6 — Thực hành 2 (35 phút): 3 mở đầu · 12 bảng · 5 tóm tắt · 10 xoay trạm (2 vòng × 5 phút) · 5 sửa. ⏎ Lời mở đầu: “Đây là phần mà hội đồng sẽ đọc kỹ nhất: các bạn giao giá trị bằng cách nào, cùng với ai. 12 phút cho bảng — ít nhất một nhà tài trợ hoặc nhà đầu tư, một nhà cung cấp hoặc địa điểm, một báo chí hoặc KOL. 5 phút cho năm câu tóm tắt. Rồi các bạn đi làm Customer Board: mỗi bàn nhận một câu hỏi tiền và một câu hỏi điểm chạm. Hỏi như hội đồng thật.” ⏎ Khi chốt: ghi các câu hỏi tài chính lặp lại ở nhiều bàn.
- **S23. Ba ý của Buổi 13 và việc cần làm trước Buổi 14**
  - Nội dung: SMP = KAP + điều phối bên liên quan bên ngoài, viết theo A–E, khách hàng ở trung tâm; giả định ghi rõ. · 1 · Phần C có số, phần D có cách đo; 13.2 là một bảng gắn mọi bên vào hành trình của khách hàng. · 2 · Phần E viết cuối, đọc đầu; tự rà soát bằng checklist trước Buổi 14. · 3 · Việc cần làm trước Buổi 14 · ☐  Điền ô “cần bổ sung” trong bảng truy vết · ☐  Sửa theo note của Customer Board · ☐  Chạy checklist tự rà soát · ☐  Phụ lục công bố AI (nếu có dùng)
  - Ghi chú GV: S7 — Tổng hợp (3 phút). Ba câu chốt và bốn việc nhóm cần làm trước Buổi 14.
- **S24. Phiếu kiểm tra cuối giờ**
  - Nội dung: Phần nào trong A–E của SMP nhóm bạn đang yếu nhất? Nhóm cần thông tin gì, từ đâu để hoàn thiện? · 1 · Viết 1 câu value proposition cho khách hàng của nhóm, có con số (ghi rõ đâu là giả định). · 2 · Buổi 14: các bạn là KAM Director trước Customer Board — giá trị này bao nhiêu tiền, và các bạn chạm vào khách hàng của họ ở đâu, bằng ai?
  - Ghi chú GV: S8 — cá nhân, không chấm điểm. Giấy nhỏ hoặc Google Form (thêm QR nếu thu online). ⏎ Cần xem: (a) nhận ra phần yếu cụ thể, không trả lời “phần nào cũng ổn”; (b) value proposition nói về giá trị cho khách hàng, không chỉ “dịch vụ của chúng tôi”; (c) có số và phân biệt số thật với giả định. ⏎ Câu nối Buổi 14: “Buổi sau các bạn không còn là sinh viên trình bày bài tập. Các bạn là KAM Director đứng trước Customer Board. Hội đồng sẽ hỏi hai điều: giá trị này bao nhiêu tiền, và các bạn chạm vào khách hàng của họ ở đâu, bằng ai.”
- **S25. Tài liệu tham khảo (1/2)**
  - Nội dung: Z01 · Davies, M. (n.d.). The value planning framework for key accounts. Key Account Management Forum (Cranfield). LinkedIn. · Z02 · Holt, S. (n.d.). World class key account planning; Implementing key account management: To plan or not to plan… Cranfield School of Management Executive Development Blog. · Z03 · Ryals, L. J., & Rogers, B. (2007). Key account planning: Benefits, barriers and best practice. Journal of Strategic Marketing, 15, 209–222. · Z04 · Ryals, L., & McDonald, M. (2010). Key account plans. Routledge.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-13_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy. Z08 (chuẩn nội bộ của bộ kỹ năng về liêm chính học thuật trong thời AI) không đưa lên slide vì là tài liệu nội bộ và buổi này không nhắc đến công cụ phát hiện AI.
- **S26. Tài liệu tham khảo (2/2)**
  - Nội dung: Z05 · McDonald, M. (n.d.). How to create financially quantified value propositions in six (actionable!) steps. Strategic Account Management Association. · Z06 · Davies, M. (n.d.). Creating compelling customer value propositions. Cranfield School of Management Executive Development Blog. · Z07 · Trường Đại học Kinh tế – Tài chính TP.HCM (UEF). (n.d.). Đề cương chi tiết học phần EVM1110E – Quản trị mối quan hệ trong tổ chức sự kiện [Tài liệu nội bộ]. · Z09 · Tư liệu Buổi 7–12 · Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69–96.
  - Chân slide: Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-13_tu-lieu-tong-hop.md, mục 6.
  - Ghi chú GV: Slide phụ lục — không chiếu khi dạy. Z08 (chuẩn nội bộ của bộ kỹ năng về liêm chính học thuật trong thời AI) không đưa lên slide vì là tài liệu nội bộ và buổi này không nhắc đến công cụ phát hiện AI.

### Buổi 14, Buổi 15

CHƯA LÀM. Tên bài, mục tiêu và file nguồn: [CHƯA CÓ THÔNG TIN].

---

## Mục 3. Bộ yêu cầu cốt lõi [PHIÊN C]

Nguồn "TNx" là lời trực tiếp của giảng viên. Nguồn "File nguồn" là quy ước ghi trong file dàn ý hoặc bài giảng do giảng viên cung cấp; slide phải tuân theo.

| Mã | Nhóm | Yêu cầu (nguyên văn) | Diễn giải | Mức độ | Nguồn |
|---|---|---|---|---|---|
| C-YC-01 | Hình thức slide | "áp dụng màu nền là #fbfaf4" | Nền `FBFAF4` cho mọi slide, kể cả bìa và giải lao | BẮT BUỘC | TN1, TN2, TN8 (TN3–TN7 theo tóm tắt) [PHIÊN C] |
| C-YC-02 | Hình thức slide | "sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí" | Sáu màu nhấn dùng linh hoạt. Bảng mã bản nhạt/đậm ở Mục 8 | BẮT BUỘC | TN1, TN2, TN8 [PHIÊN C] |
| C-YC-03 | Hình thức slide | "font chữ Alexandria" | Một font cho toàn bộ slide | BẮT BUỘC | TN1, TN2, TN8 [PHIÊN C] |
| C-YC-04 | Hình thức slide | "Tiếp tục tạo … và vẫn áp dụng màu nền …" | Các buổi sau giữ **cùng ngôn ngữ thiết kế** với các buổi đã làm | BẮT BUỘC | TN2, TN8 [PHIÊN C] |
| C-YC-05 | Nội dung | "Phần giảng viên để tên Đoàn Nguyễn Bảo Quyên" | Slide bìa ghi "Giảng viên: Đoàn Nguyễn Bảo Quyên". Đã áp dụng cả 13 bộ | BẮT BUỘC | TN9 [PHIÊN C] |
| C-YC-05a | Nội dung | [ĐÃ THAY THẾ] Slide bìa W07–W13 bản cũ ghi "Giảng viên: [Tên giảng viên]", ghi chú "Điền tên giảng viên trước khi dạy." | Placeholder do agent đặt. Không dùng lại | — | Bị TN9 thay thế [PHIÊN C] |
| C-YC-06 | Nội dung | "dựa vào nội dung của từng bài có trong đường dẫn https://github.com/dnbaoquyen/teaching-skills/tree/claude/busy-mccarthy-wsbyzs/courses/EVM1110E/lessons" | Chỉ dùng nội dung trong file của chính buổi đó: outline, lecture notes, lesson plan, activity, tư liệu tổng hợp. Không thêm kiến thức ngoài (xem L-14) | BẮT BUỘC | TN8 [PHIÊN C] |
| C-YC-07 | Nội dung | "cho nội dung bài giảng có trong đường dẫn …/W07_slides_outline.md" · "…W09_lesson_plan.md" · "…W13_lesson_plan.md" | File giảng viên chỉ định là nguồn chính của buổi đó | BẮT BUỘC | TN1, TN3, TN7 [PHIÊN C] |
| C-YC-08 | Định dạng đầu ra | "Hãy tạo 1 tài liệu trình chiếu (presentation deck)" · "Tạo tài liệu trình chiếu cho buổi học 1 đến buổi học 6" | Mỗi buổi một bộ trình chiếu. Loại file **không được nêu**; đã làm .pptx | BẮT BUỘC | TN1, TN8 [PHIÊN C] |
| C-YC-10 | Hình thức slide / Sư phạm | "Mỗi slide một ý; tiêu đề là **câu khẳng định**." | Tiêu đề là câu kết luận (action title) | BẮT BUỘC | Header `W03`/`W04_slides_outline.md` [PHIÊN C] |
| C-YC-11 | Hình thức slide | "Hình có alt-text" | Mỗi hình có dòng "Alt-text: …" trong speaker notes | BẮT BUỘC | Header dàn ý W03–W06 [PHIÊN C] |
| C-YC-12 | Hình thức slide | "bảng phân biệt bằng ký hiệu, không chỉ màu" | Dùng ✓ ✗ ⚠, + / –, B/P/C/S, số thứ tự | BẮT BUỘC | Header dàn ý W03, W04 [PHIÊN C] |
| C-YC-13 | Nội dung / trích dẫn | "Nguồn ghi mã nhỏ ở chân slide." | Mã nguồn ở chân slide, khoảng 10pt, **một dòng**. APA 7 đầy đủ ở slide tài liệu tham khảo | BẮT BUỘC | Header dàn ý W03–W05 [PHIÊN C] |
| C-YC-14 | Nội dung | "Mọi con số tình huống ghi **GIẢ ĐỊNH** ở chân slide." | Số liệu tình huống gắn nhãn GIẢ ĐỊNH. Dữ kiện thật gắn "DỮ KIỆN THẬT" hoặc "CASE THẬT" | BẮT BUỘC | Header `W06_slides_outline.md` [PHIÊN C] |
| C-YC-15 | Nội dung | "Ghi rõ trên slide khi nội dung là **định nghĩa làm việc của môn**." | Áp dụng cho GRASP, cấu trúc CVP ba phần, năm nguồn giá trị, ma trận "biến thể của môn", định nghĩa hệ sinh thái (B1) | BẮT BUỘC | Header `W05_slides_outline.md` [PHIÊN C] |
| C-YC-16 | Nội dung / ngôn ngữ | "giữ tiếng Anh (relationship quality, trust, commitment, functional conflict, cooperation, transactional, relational), giải thích tiếng Việt lần đầu" | Song ngữ có kiểm soát: thuật ngữ tiếng Anh, giải nghĩa tiếng Việt ở lần đầu | BẮT BUỘC | `W04_lecture_notes.md` (tương tự W03, W05, W06) [PHIÊN C] |
| C-YC-17 | Điều cấm | "Chỉ nêu sự kiện đã đưa tin" · "Không quy lỗi cá nhân" | Với case thật như "Về đây bốn cánh chim trời" | BẮT BUỘC | `W04_lecture_notes.md` §2.3, `W04_slides_outline.md` dòng 15 [PHIÊN C] |
| C-YC-18 | Điều cấm | "Không nêu tên giai đoạn" | Không nêu tên các giai đoạn quan hệ khi chưa kiểm tra toàn văn | BẮT BUỘC | `W04_slides_outline.md` dòng 16 [PHIÊN C] |
| C-YC-19 | Điều cấm | "Không đi sâu an toàn đám đông" | Thuộc môn Quản trị rủi ro sự kiện | BẮT BUỘC | `W05_slides_outline.md` dòng 13 [PHIÊN C] |
| C-YC-20 | Nội dung | "*(Tương tự; không phải quan hệ agency.)*" · "Chưa KCC; không phải event agency" | Gắn nhãn "VÍ DỤ TƯƠNG TỰ" hoặc "MINH HỌA QUỐC TẾ · CHƯA KIỂM CHỨNG CHÉO" | BẮT BUỘC | `W05_lecture_notes.md`, `W06_slides_outline.md` dòng 14 [PHIÊN C] |
| C-YC-21 | Nội dung / độ chính xác | Các dấu `[VERIFY: …]`, `[NEEDS PROFESSOR INPUT]` trong file nguồn | Giữ nguyên trong speaker notes; hiện trên slide (pill vàng hoặc chân slide) khi nội dung đó được chiếu. Không tự giải quyết | BẮT BUỘC | Lecture notes, tư liệu tổng hợp các buổi [PHIÊN C] |
| C-YC-22 | Nội dung | "Nova – An Phát là **giả định**; GĐ Marketing là **chị Hạnh**." | Giữ đúng tên và vai nhân vật (Mục 1) | BẮT BUỘC | `W03_lecture_notes.md` [PHIÊN C] |
| C-YC-23 | Sư phạm | Cấu trúc S1–S8, "*Giải lao 8 phút*", phiếu kiểm tra cuối giờ "2 câu + câu nối" | Mỗi dòng dàn ý thành một slide, cộng slide thực hành, giải lao, cuối giờ, tài liệu tham khảo | BẮT BUỘC | Bảng dàn ý các buổi [PHIÊN C] |
| C-YC-24 | Sư phạm | "Đồng hồ 7 / 8 / 5" (và các mốc tương tự) | Slide thực hành ghi mốc thời gian từng bước | BẮT BUỘC | Cột "Ghi chú GV" của dàn ý [PHIÊN C] |
| C-YC-25 | Sư phạm | "Phiếu kiểm tra cuối giờ (cá nhân, không chấm điểm)" | Ghi trong speaker notes. 2 câu hỏi nguyên văn lên slide | BẮT BUỘC | `W0N_lesson_plan.md` [PHIÊN C] |
| C-YC-26 | Sư phạm | "**Liên hệ SMP:** …" | Slide "Ba ý của Buổi N" có dòng cuối liên hệ SMP | BẮT BUỘC | Lecture notes, đoạn S7 [PHIÊN C] |
| C-YC-27 | Sư phạm | Mục "Tình huống thất bại", "Đáp án tham khảo", "3 ý GV chốt" trong phiếu thực hành | Đưa vào speaker notes của slide thực hành | ƯU TIÊN | `W0N_activity_*.md` [PHIÊN C] |
| C-YC-28 | Sư phạm | Lời dẫn "*[Nói: …]*", "*[Hỏi: …]*", "*[Chốt: …]*" trong lecture notes | Chép vào speaker notes của slide tương ứng | ƯU TIÊN | Lecture notes [PHIÊN C] |
| C-YC-29 | Hình thức slide | Cột "Nội dung / hình", ví dụ "*Alt: ma trận 2×2*", "*Alt: hai bờ nối bằng cầu*" | Vẽ đúng hình được mô tả bằng shape, không thay bằng gạch đầu dòng | ƯU TIÊN | Bảng dàn ý [PHIÊN C] |
| C-YC-50 | Quy trình | "Đọc toàn bộ hồ sơ trước khi làm bất cứ việc gì" | Dành cho agent mới | BẮT BUỘC | TN10 [PHIÊN C] |
| C-YC-51 | Quy trình | "Coi PHẦN 3 là ràng buộc bắt buộc, đối chiếu từng mã YC với mỗi sản phẩm nó tạo ra" | Mỗi sản phẩm kèm bảng tự kiểm tra theo mã | BẮT BUỘC | TN10 [PHIÊN C] |
| C-YC-52 | Quy trình | "Xác nhận lại với tôi phần hiểu của nó về môn học và các yêu cầu cốt lõi trước khi bắt đầu" | Dừng và chờ xác nhận | BẮT BUỘC | TN10 [PHIÊN C] |
| C-YC-53 | Quy trình | "Hỏi tôi khi gặp `[CHƯA CÓ THÔNG TIN]`, không tự giả định" | — | BẮT BUỘC | TN10 [PHIÊN C] |
| C-YC-54 | Điều cấm | "Không bịa, không suy diễn." | Nêu cho việc soạn hồ sơ. Đề xuất áp dụng cho cả nội dung slide (xem L-14) | ƯU TIÊN | TN10, TN11 [PHIÊN C] |
| C-YC-55 | Quy trình | "học kỳ mới chất lượng hơn và **không lặp lại bất kỳ lỗi nào của học kỳ cũ**" | Mọi sản phẩm mới phải đối chiếu với Sổ lỗi (Mục 4) | BẮT BUỘC | TN11 [PHIÊN C] |

---

## Mục 4. SỔ LỖI [PHIÊN C]

**Ghi chú trung thực**

- Trong phần phiên còn đọc được, **giảng viên chưa lần nào phản hồi chê hay yêu cầu sửa**. Cột "Tôi đã phản hồi" ghi "Không có phản hồi" trừ L-01.
- Các lỗi còn lại do **agent tự phát hiện** khi xem ảnh render từng slide, hoặc do agent nhận ra khi soạn hồ sơ này. Loại L-14 → L-18 là lỗi **chưa từng được sửa**.

| Mã | Loại lỗi | Mô tả | Ví dụ cụ thể | Giảng viên đã phản hồi (nguyên văn) | Đã sửa thế nào | Sửa triệt để chưa | Quy tắc phòng tránh |
|---|---|---|---|---|---|---|---|
| L-01 | Nội dung: thiếu thông tin, để placeholder | Slide bìa W07–W13 để trống tên giảng viên | "Giảng viên: [Tên giảng viên]"; ghi chú "Điền tên giảng viên trước khi dạy." | "Phần giảng viên để tên Đoàn Nguyễn Bảo Quyên" (TN9) | Thay tên ở cả 13 bộ, xóa câu ghi chú, dựng lại, chạy validator, kiểm tra ảnh bìa W07 và W10 | Rồi | Không giao slide có placeholder. Thông tin bắt buộc mà thiếu thì hỏi trước khi xuất |
| L-02 | Bố cục: chồng chữ, sơ đồ | Nhãn sơ đồ Venn đè nhau và đè vòng tròn | Deck W01, slide Salience: nhãn Power / Legitimacy / Urgency nằm trong vùng giao | Không có phản hồi | Đưa nhãn ra ngoài vòng (cy − r×1,72), r = 1,4 | Rồi (kiểm tra ảnh) | Nhãn sơ đồ đặt ngoài hình; luôn kiểm tra ảnh render |
| L-03 | Bố cục: bảng | Tiêu đề cột xuống dòng | W01 cột "Thuộc tính"; W06 Thực hành 2 cột "Doanh thu", "CTS/DT" | Không có phản hồi | W01: nới cột lên 2,1 inch. W06: chia lại độ rộng các cột | **W01 rồi. W06 chưa**: ảnh cuối vẫn thấy "Doanh / thu", "CTS/ / DT" xuống dòng | Tính độ rộng cột theo tiêu đề dài nhất; rút gọn tiêu đề |
| L-04 | Bố cục: chồng chữ | Chữ trong chevron đè khấc | W01 slide lộ trình SMP "Buổi 1 / Buổi 2–8 / …" | Không có phản hồi | Lùi chữ x + 0,85, thu hẹp, cỡ 12 | Rồi | Chữ trong chevron cách khấc ít nhất 0,8 inch |
| L-05 | Bố cục: tràn khung | Bảng chạm chân slide hoặc hộp bên dưới | W03 bảng PESTEL chạm chân slide; W06 Thực hành 1 bảng sát hộp vàng | Không có phản hồi | Giảm chiều cao dòng (0,68 → 0,62); dời hộp xuống 5,15 | Rồi | Tính điểm kết thúc bảng; chừa ít nhất 0,1 inch; không vượt y ≈ 6,9 inch |
| L-06 | Bố cục: tràn lề | Hình vượt lề phải | W03 chevron "Sau"; thẻ "Báo chí đưa tin" của dòng thời gian | Không có phản hồi | Chevron cuối hẹp lại; dòng thời gian thu vào 1,0 inch mỗi bên | Rồi | Mọi phần tử nằm trong lề 0,6 inch |
| L-07 | Bố cục: chồng chữ | Chữ phụ đè sơ đồ | W03 slide DMU: "buying center · DMU (decision-making unit)" đè pill "Người dùng" | Không có phản hồi | Thu hẹp hộp còn 4,5 inch, rút chữ thành "buying center · DMU" | Rồi | Chữ phụ không đi vào vùng trung tâm sơ đồ |
| L-08 | Nội dung: placeholder vô nghĩa | Ô ví dụ chỉ có "…" | W03 slide đối thủ: "Ngân hàng Z — …" | Không có phản hồi | Đổi thành "(nhóm tự bổ sung)" | **Chưa**: "Ngân hàng Z" không có trong file nguồn (nguồn chỉ có ngân hàng X, Y); xem L-14 | Không đặt ô trống hoặc ví dụ tự thêm. Chỉ vẽ đủ phần tử có trong nguồn |
| L-09 | Bố cục: chữ bị cắt | Chữ xoay 270° bị ngắt từ | W04 bìa: "Commit / ment", "Function / al conflict" | Không có phản hồi | Hộp chữ xoay đổi chiều rộng/cao, căn theo tâm cột | Rồi | Với chữ xoay: w = chiều cao cột, h = chiều rộng cột |
| L-10 | Bố cục: chồng chữ | Pill nhãn đè chữ khác | W04 slide khoảng cách: pill "GIẢ ĐỊNH" đè chữ "khoảng cách"; huy hiệu bước 5 sát vùng tiêu đề; pill "Xung đột chức năng · Functional conflict" xuống 2 dòng | Không có phản hồi | Dời pill sang trái; giảm bậc thang 0,55 → 0,4; nới pill lên 5,4 inch | Rồi | Pill không trùng hàng với chữ khác; đủ rộng cho một dòng |
| L-11 | Sơ đồ: tỉ lệ sai | Sơ đồ cây cầu quá hẹp, chữ xuống dòng xấu | W05 bìa và slide 6: "Value appraisal · được bao nhiêu, đo thế nào, so với chi / phí?" | Không có phản hồi | Vẽ lại: mặt cầu toàn bề rộng, hai trụ rộng 36%, nhãn tách 2 dòng | Rồi | Sơ đồ phải đủ chỗ cho chữ; tách nhãn và mô tả |
| L-12 | Bố cục: chồng chữ | Dòng chốt đè thẻ | W05 slide Advisory: "Chia sẻ tri thức là giá trị…" đè thẻ cuối | Không có phản hồi | Giảm khoảng cách thẻ (1,2 → 1,1), dời dòng chốt xuống 6,1 | Rồi | Như L-05 |
| L-13 | Font: ký tự không hỗ trợ | Font Alexandria không có "₫", hiển thị thành "d" | Biểu tượng đồng xu W06 | Không có phản hồi | Bỏ ký tự, vẽ đồng xu bằng vòng tròn | Rồi | Không dùng ký tự đặc biệt chưa kiểm tra với Alexandria; xem ảnh render |
| L-14 | **Nội dung: agent tự thêm chi tiết không có trong file nguồn** | Một số câu, ví dụ, số minh họa trên slide là diễn giải hoặc bổ sung của agent, không có nguyên văn trong file nguồn. Đã gắn nhãn GIẢ ĐỊNH hoặc nhận định ở một số chỗ, nhưng **chưa nhất quán** | (a) W03 "Ngân hàng Z".<br>(b) W04 slide "Khoảng cách…": số 4,2/4,0 · 4,0/3,5 · 4,3/2,7 do agent đặt (nguồn chỉ ghi "Ví dụ minh họa (giả định)").<br>(c) W05 Advisory: "họ đến vì gì, bỏ về lúc nào, thích gì", "Kinh nghiệm từ ngành khác".<br>(d) W05 HSSEQ: "giảm rác, vật liệu tái sử dụng".<br>(e) W06 whale curve: các điểm trung gian của đường cong (chỉ 225% và 100% có nguồn).<br>(f) W06: "Đầu tư vào quan hệ không phải chi phí 'mềm' — nó hiện ra trong CLV".<br>(g) W04: "đừng chờ có niềm tin rồi mới cùng làm" | Không có phản hồi | **Chưa sửa** | **Chưa** | Mọi câu trên slide phải truy được về file nguồn. Diễn giải thêm thì gắn nhãn "Nhận định của người soạn" hoặc chỉ đưa vào speaker notes. Số minh họa tự đặt luôn gắn GIẢ ĐỊNH. Trước khi giao, lập bảng đối chiếu câu ↔ nguồn |
| L-15 | Nội dung: không nhất quán giữa các buổi | Thời gian hợp tác Nova – An Phát mâu thuẫn | B2–B6: "4 năm hợp tác", "Nova làm gala cho An Phát đã 4 năm". W08 S2: chị Hạnh "làm việc với Nova suốt 3 năm" | Không có phản hồi | **Chưa sửa**, phát hiện khi soạn hồ sơ | **Chưa** | Lập "bảng dữ kiện tình huống" dùng chung (tên, năm, số tiền, vai) và đối chiếu mọi deck với bảng này |
| L-16 | Quy trình: lỗi code khi dựng | Thân deck W02 gọi hàm `summary3` khi file khung chưa có hàm này | W02 `w2_body.js` | Không có phản hồi | Bổ sung hàm vào khung trước khi chạy; dựng thành công | Rồi | Kiểm tra hàm dùng chung có trong khung trước khi viết thân deck |
| L-17 | Quy trình: mất công cụ dựng | Script dùng chung (`w0_head.js`, `assemble.py`, `render.sh`) để ở thư mục tạm, đã mất khi máy bị thu hồi | — | Không có phản hồi | Mỗi `build_deck.js` đã tự chứa đủ khung, vẫn dựng lại được | Một phần | Commit cả script dùng chung vào repo |
| L-18 | Thuật ngữ: chưa thống nhất | Dùng xen "cost-to-serve" / "chi phí phục vụ" / "CTS"; "Key Account" / "khách hàng trọng điểm" | W06 nhiều slide | Không có phản hồi | Chưa sửa (C-YC-16 cho phép giữ tiếng Anh, nhưng viết tắt "CTS" chưa được giải nghĩa trên slide) | Chưa | Lập bảng thuật ngữ; viết tắt phải giải nghĩa ở lần đầu trên slide |
| L-19 | Bố cục (giai đoạn W07–W13) | (a) Trùng tên biến `const base` trong code. (b) Bảng đè hộp ghi chú. (c) Chân slide nguồn dài hai dòng | Deck W07–W13 (chi tiết đã mất do tóm tắt) | Không có phản hồi (theo tóm tắt) | Đã sửa trong giai đoạn đó | Rồi (theo tóm tắt) | Đặt tên biến không trùng; chân slide một dòng; xem L-05 |
| L-20 | Bố cục: chấm đè nhãn | Chấm dữ liệu ma trận đè nhãn ô | W06 bìa: chấm MediPharm đè "Carriage trade" | Không có phản hồi | Giới hạn vị trí chấm, dời Bright Future | Một phần: chấm Bếp Việt vẫn nằm trên đường biên giữa hai ô | Chừa vùng nhãn; ghi chú khi điểm nằm sát ngưỡng |
| L-21 | Định dạng: phụ thuộc emoji | Slide thực hành dùng 🟨 🟥 ⚠️ trong chữ | W02, W03, W05, W06 slide xoay trạm | Không có phản hồi | Không sửa. LibreOffice hiển thị được; chưa kiểm tra trên PowerPoint hoặc máy chiếu | Chưa kiểm chứng | Kiểm tra emoji trên máy dạy thật, hoặc thay bằng ô màu vẽ bằng shape |
| L-22 | Sư phạm: số slide và thời lượng | 24–31 slide/buổi, chưa đối chiếu với thời lượng thực tế | Mọi deck | Không có phản hồi | Chưa làm | Chưa kiểm chứng | Sau mỗi buổi dạy thử, ghi thời gian thực tế từng đoạn |
| L-23 | Speaker notes: chưa đồng đều | Một số slide lý thuyết chỉ có ghi chú ngắn, không có lời dẫn | Ví dụ W03 S15 ("Nova làm, nhưng khách thấy An Phát") chỉ có câu chốt; W06 S8 một dòng | Không có phản hồi | Chưa sửa | Chưa | Mỗi slide có ít nhất: mục đích, lời dẫn hoặc câu hỏi, câu chốt |
| L-24 | Hình ảnh / bản quyền | Không dùng ảnh chụp hay ảnh có bản quyền; toàn bộ hình vẽ bằng shape | — | — | — | Không phải lỗi | Giữ nguyên: chỉ dùng shape tự vẽ, hoặc ảnh có nguồn và giấy phép rõ |
| L-25 | Lỗi xuất file | Không có. Cả 13 file qua validator ("All validations PASSED!") | — | — | — | — | Luôn chạy validator và render PDF trước khi giao |

---

## Mục 5. Những gì đã làm tốt [PHIÊN C]

**Ghi chú trung thực:** giảng viên **chưa khen và chưa duyệt rõ ràng** slide nào. Tín hiệu chấp nhận duy nhất là việc giảng viên liên tục yêu cầu làm tiếp **cùng phong cách** ("Tiếp tục tạo…", "vẫn áp dụng…") sau mỗi bộ, và chỉ yêu cầu đổi một điểm (tên giảng viên).

**Cách trình bày đã duy trì ổn định qua 13 bộ** (agent tự đánh giá, chưa được giảng viên xác nhận)

- Tiêu đề hành động.
- Thẻ vàng để chốt ý.
- Cặp "Hiểu lầm" (thẻ hồng) → "Sửa" (thẻ xanh lá).
- Nhãn GIẢ ĐỊNH / VÍ DỤ TƯƠNG TỰ / [VERIFY].
- Mỗi buổi có một sơ đồ chủ đạo tự vẽ: lưới Power-Interest, ma trận GE, ba cột trụ, cây cầu CVP, ma trận cost-to-serve.
- Speaker notes chứa lời dẫn, câu hỏi gợi ý và alt-text.

### Slide mẫu 1 — Deck W02, S2: "Khách hàng lớn nhất chưa chắc là Key Account" (slide khởi động)

**Bố cục**

- **Đầu slide:** thanh điều hướng với pill "Mở đầu" tô cam; biểu tượng ma trận 3×3 ở góc phải.
- **Khối trái** (thẻ cam nhạt, viền cam):
  - "Địa ốc Sông Xanh"
  - số lớn "3,5 tỷ" (54pt, cam đậm)
  - "doanh thu lớn nhất của Nova năm nay"
  - 3 gạch đầu dòng: "Đấu thầu từng sự kiện · Trả tiền sau 90 ngày · Năm nào cũng đổi agency".
- **Khối phải:**
  - câu hỏi "Đó có phải Key Account của Nova?"
  - ba pill bỏ phiếu: Có (xanh lá) / Không (hồng) / Chưa biết (xanh dương)
  - thẻ vàng chốt: "Key Account không phải khách hàng **lớn nhất**, mà là khách hàng **đáng đầu tư quan hệ nhất** — và cũng muốn đầu tư lại vào ta."
- **Chân slide:** "Tình huống giả định — tên và con số chỉ dùng cho học tập."
- **Speaker notes:** "S1 — Khởi động (5 phút). Chiếu và đọc… Giơ tay… Chốt…"

### Slide mẫu 2 — Deck W06, S6: "CLV 5 năm của An Phát khoảng 926 triệu" (slide số liệu)

**Bố cục**

- **Góc phải trên:** pill vàng "GIẢ ĐỊNH".
- **Trái:** bảng "Năm | Tính | Giá trị hiện tại", 5 dòng:
  - 334 / 1,12 → 298,2
  - … → 226,3 · 171,8 · 130,4
  - 334 × 0,85⁴ / 1,12⁵ → 98,9
  - Bên dưới: thẻ tím "CLV 5 năm ≈ **926 triệu**".
- **Phải:** biểu đồ cột tím nhạt dần qua 5 năm, có nhãn giá trị.
- **Chân slide:** "GIẢ ĐỊNH: m = 334 triệu · r = 85% · d = 12% · T = 5. Tính cùng lớp."
- **Kiểm tra số liệu:** đã kiểm bằng script (925,6 và 719,4).

---

## Mục 6. Quyết định đã chốt [PHIÊN C]

| Mã | Quyết định | Ai chốt / lý do | Nguồn |
|---|---|---|---|
| C-QĐ-01 | Dùng bảng màu và nền của giảng viên **thay cho** mặc định của repo `academic-pptx-skill` ("white backgrounds, single sans-serif font, three colours maximum, no decorative icons") | Giảng viên chỉ định màu | TN1, TN8; README repo [PHIÊN C] |
| C-QĐ-02 | Tên giảng viên trên mọi slide bìa | Giảng viên | TN9 [PHIÊN C] |
| C-QĐ-03 | Buổi 9 và 13 dựng từ `lesson_plan.md`, các buổi khác từ `slides_outline.md` cộng file kèm | Theo đường dẫn giảng viên đưa | TN3, TN7, TN8 [PHIÊN C] |
| C-QĐ-04 | .pptx dựng bằng pptxgenjs, khổ 16:9; mỗi buổi một thư mục; một commit mỗi buổi; chưa tạo pull request | Agent chọn, giảng viên không phản đối | Phiên làm việc [PHIÊN C] |
| C-QĐ-05 | Bố cục chung, biểu tượng riêng mỗi buổi, slide bìa, slide tài liệu tham khảo cuối deck (chi tiết ở Mục 8) | Agent chọn, giảng viên không phản đối | [PHIÊN C] |
| C-QĐ-06 | Quy trình kiểm tra trước khi giao: validator → PDF (LibreOffice) → xem ảnh từng slide → sửa → render lại các slide đã sửa | Agent chọn | [PHIÊN C] |

---

## Mục 7. Việc tồn đọng và ý tưởng chưa triển khai [PHIÊN C]

1. **Buổi 14, Buổi 15: chưa làm.** Chưa rõ file nguồn đã có chưa.
2. **Lỗi chưa sửa:** L-03 (W06), L-08, L-14, L-15, L-18, L-20, L-21, L-22, L-23.
3. **Thông tin còn thiếu:** tín chỉ, số tiết, nội dung CLO1–6, PLO, đặc điểm lớp, giáo trình chính thức, tên LMS, quy định chuyên cần / nộp trễ / AI.
4. **Nội dung cần giảng viên xác nhận:** các dấu [VERIFY] và [NEEDS PROFESSOR INPUT] đang có trong slide.

   | Deck | Nội dung cần kiểm tra |
   |---|---|
   | W01 | "pulsating organisation"; xin phép địa phương cho hội nghị khách hàng; quy định lớp học |
   | W03 | Vai trò buying center; văn bản bảo vệ dữ liệu; nguồn GRASP |
   | W04 | Tên giai đoạn quan hệ |
   | W05 | Ba kiểu CVP; nguồn cấu trúc CVP và năm nguồn giá trị |
   | W06 | Công thức CLV; tên bốn ô ma trận; đủ tác giả Gupta et al.; whale curve và The Drum chưa kiểm chứng chéo |
   | W07 | Biên lợi nhuận agency Việt Nam; case agency Việt Nam; tỷ lệ dự toán; điều khoản theo BLDS 2015 / Luật Thương mại; định nghĩa value-based negotiation |
   | W08 | Sơ đồ tiếp xúc thực tế; số 24%/26% Amex; tên giai đoạn (T01, T03); T09 |
   | W09 | Quy định giới thiệu bảo hiểm tại sự kiện; bảo vệ dữ liệu khi chia sẻ danh sách khách |
   | W10 | Năm bài BizBash; tiêu đề bài báo tiếng Việt; trang CIPS |
   | W11 | Thuế TNCN cho KOL; Luật Báo chí 2025, NĐ 237/2026; quảng cáo dịch vụ ngân hàng |
   | W12 | APEX ESG; Mohr & Spekman; toàn văn Y01, Y02 |
   | W13 | Mẫu phụ lục công bố AI; định nghĩa phần B–E theo giáo trình nội bộ UEF |

5. **Ý tưởng agent đề xuất, chưa triển khai** (không phải ý tưởng của giảng viên):
   - bảng dữ kiện tình huống dùng chung;
   - bảng thuật ngữ;
   - commit script dựng chung vào repo;
   - bản PDF hoặc Google Slides nếu giảng viên cần.
6. Chưa có pull request cho nhánh `claude/nifty-thompson-2d4hk2`.

---

## Mục 8. ĐẶC TẢ SLIDE [PHIÊN C]

### 8.1 Công cụ, định dạng, khung hình

| Mục | Giá trị |
|---|---|
| Định dạng | `.pptx` |
| Công cụ dựng | **pptxgenjs** (Node.js); file `build_deck.js`, chạy `node build_deck.js` |
| Template | Không dùng template .potx; mọi phần tử vẽ bằng code. Giảng viên **không cung cấp template hay slide mẫu** |
| Khung hình | 16:9 `LAYOUT_WIDE`, 13,333 × 7,5 inch |
| Lề | 0,6 inch hai bên; vùng nội dung rộng 12,13 inch |
| Kiểm tra | `validate.py` của skill pptx → PDF bằng LibreOffice → xem ảnh từng slide |

### 8.2 Font, cỡ chữ, màu, nhận diện

**Font:** Alexandria cho mọi chữ (C-YC-03).

**Cỡ chữ đang dùng**

| Vị trí | Cỡ |
|---|---|
| Tên môn trên slide bìa | 38pt đậm |
| Phụ đề bìa | 22pt nghiêng, màu tím |
| Tiêu đề hành động | 26pt đậm, tự co nếu dài |
| Nội dung | 13–22pt (thẻ 15–20pt; bảng 12–17pt) |
| Số nhấn | 36–80pt |
| Chân slide, thanh điều hướng | 10pt |
| Không dùng chữ nhỏ hơn | 11pt (trừ trục và chú thích phụ) |

**Bảng màu**

| Vai trò | Mã màu |
|---|---|
| Nền | `FBFAF4` |
| Chữ chính | `2A2238` |
| Chữ phụ | `6E6878` |
| Đường kẻ | `DCD7C8` |
| Dải bảng | `F3F0E6` |
| 6 màu nhấn | green `49B296` · yellow `FFD23B` · pink `FF5178` · purple `962B7C` · blue `09A1E5` · orange `FF9259` |
| Bản nhạt (nền thẻ) | `E1F3EE` · `FFF3C4` · `FFE4EA` · `F1E1EE` · `DDF1FB` · `FFE9DE` |
| Bản đậm (chữ màu trên nền sáng) | `D9622B` · `0A7FB5` · `E03A62` · `2E8A71` |

- Chữ trên nền vàng hoặc cam dùng màu chữ chính (đậm). Trên các màu nhấn khác dùng chữ trắng.

**Logo / nhận diện trường:** không dùng logo. Chỉ ghi chữ "Khoa Marketing · UEF". Nhận diện chính thức của trường: [CHƯA CÓ THÔNG TIN].

### 8.3 Cấu trúc chuẩn một bộ slide

1. **Bìa:**
   - pill vàng "EVM1110E · Buổi N / 15";
   - tên môn; phụ đề tiếng Anh;
   - "Phần X · … — buổi k/n" · "Khoa Marketing · UEF" · "Giảng viên: Đoàn Nguyễn Bảo Quyên";
   - bên phải là hình minh họa khái niệm chính của buổi.
2. **S1 Khởi động:** tình huống, câu hỏi bỏ phiếu, thẻ vàng chốt.
3. **Lý thuyết:** mỗi dòng dàn ý một slide. Hay dùng các kiểu: định nghĩa nguyên văn, sơ đồ hoặc ma trận, bảng so sánh, ví dụ An Phát, case thật, cặp "Hiểu lầm → Sửa" để chuyển sang thực hành.
4. **Thực hành 1:**
   - bối cảnh, thẻ dữ kiện hoặc thẻ ứng viên;
   - các bước kèm huy hiệu thời gian ("8’", "2×4’");
   - lưu ý chốt.
5. **Giải lao 8 phút:** 6 chấm màu, "Quay lại lúc __ : __".
6. **Lý thuyết** (các đoạn tiếp theo).
7. **Thực hành 2.**
8. **"Ba ý của Buổi N":** 3 thẻ đánh số theo mã đoạn, kèm thẻ vàng "Stakeholder Management Plan: …".
9. **"Phiếu kiểm tra cuối giờ":** 2 câu hỏi, thẻ xanh lá câu nối "Buổi N+1: …".
10. **"Tài liệu tham khảo"** (có thể 1/2, 2/2): mã nguồn kèm APA 7; chân slide "Danh mục APA 7 đầy đủ (kèm DOI/URL): buoi-NN_tu-lieu-tong-hop.md, mục 6."; ghi chú "Slide phụ lục — không chiếu khi dạy".

**Thành phần lặp lại trên mọi slide nội dung**

- Thanh điều hướng dạng pill: "Mở đầu" (cam) · 3–4 đoạn của buổi · "Tổng kết" (xanh lá). Đoạn hiện tại được tô màu.
- **Biểu tượng góc phải riêng mỗi buổi:**

  | Buổi | Biểu tượng |
  |---|---|
  | W01 | Lưới 2×2 |
  | W02 | Ma trận 3×3 |
  | W03 | Ba chấm hành trình |
  | W04 | Ba cột trụ |
  | W05 | Cây cầu |
  | W06 | Đồng xu |
  | W07–W13 | Biểu tượng riêng (xem file code từng deck) |

- Chân trái: mã nguồn. Chân phải: "EVM1110E · Buổi N  [số]".

### 8.4 Lượng chữ, hình, sơ đồ, bảng, trích dẫn

| Thành phần | Quy định |
|---|---|
| Lượng chữ | Một ý mỗi slide (C-YC-10). Không có giới hạn số chữ do giảng viên đặt [CHƯA CÓ THÔNG TIN]. Thực tế: tối đa khoảng 4–6 thẻ hoặc dòng mỗi slide. Chi tiết dài chuyển vào speaker notes |
| Hình | Không dùng ảnh chụp. Toàn bộ là shape tự vẽ (thẻ, pill, ma trận, mũi tên, biểu đồ cột vẽ tay). Emoji chỉ dùng 🟨 🟥 ⚠️ ✓ ✗ (xem L-21) |
| Sơ đồ | Vẽ đúng mô tả "Alt:" trong dàn ý (C-YC-29) |
| Bảng | Tiêu đề cột dạng pill màu, dòng xen kẽ nền `F3F0E6`, cột đầu in đậm; phân biệt bằng ký hiệu (C-YC-12) |
| Trích dẫn | Mã nguồn ở chân slide, một dòng (C-YC-13). Trích nguyên văn tiếng Anh in nghiêng trong ngoặc kép, kèm tác giả (năm). Danh mục APA 7 ở cuối deck |
| Nhãn bắt buộc | GIẢ ĐỊNH · DỮ KIỆN THẬT / CASE THẬT · VÍ DỤ TƯƠNG TỰ · MINH HỌA QUỐC TẾ · CHƯA KIỂM CHỨNG CHÉO · Định nghĩa làm việc của môn · [VERIFY] (pill vàng góc phải) |

### 8.5 Speaker notes

Mỗi slide có ghi chú gồm:

- **Đoạn và thời lượng**, ví dụ "S1 — Khởi động (5 phút)".
- **Lời dẫn và câu hỏi:** "Giơ tay: …", "Hỏi: …", "Chốt: …", "Nói: …".
- **Ở slide thực hành:** nhịp thời gian, lời mở đầu, tình huống thất bại kèm câu hỏi gợi ý, đáp án tham khảo.
- **Ở slide bìa và slide có hình:** "Alt-text: …".
- **Nguyên văn** các dấu [VERIFY: …] và [NEEDS PROFESSOR INPUT].
- **Câu chuyển đoạn**, ví dụ "→ Chuyển sang S3 — Thực hành 1."

Xem L-23 về các slide ghi chú còn mỏng.

### 8.6 Đặt tên file, thư mục

| Mục | Quy ước |
|---|---|
| Thư mục | `examples/EVM1110E_WNN/` (NN = 01…15), trong repo `dnbaoquyen/academic-pptx-skill`, nhánh `claude/nifty-thompson-2d4hk2` |
| File | `build_deck.js` (mã nguồn, tự chứa) và `EVM1110E_WNN_<TenNganTiengAnh>.pptx` |
| Thuộc tính file | `pres.title` = "EVM1110E — Buổi N: <tên bài>"; `pres.subject` = "Quản trị mối quan hệ trong tổ chức sự kiện" |

### 8.7 Danh sách file đã xuất (phiên bản cuối)

| Buổi | File | Số slide | Commit cuối có thay đổi file |
|---|---|---|---|
| 1 | `examples/EVM1110E_W01/EVM1110E_W01_Stakeholder_Ecosystem.pptx` | 29 | `fb425cf` (03/10/2026) |
| 2 | `examples/EVM1110E_W02/EVM1110E_W02_KAM_Mindset_Selection.pptx` | 25 | `fb425cf` |
| 3 | `examples/EVM1110E_W03/EVM1110E_W03_Customer_Understanding_Journey.pptx` | 24 | `a417b48` |
| 4 | `examples/EVM1110E_W04/EVM1110E_W04_Relationship_Quality.pptx` | 24 | `4a907b4` |
| 5 | `examples/EVM1110E_W05/EVM1110E_W05_CVP_Value_Cocreation.pptx` | 25 | `16c19ce` |
| 6 | `examples/EVM1110E_W06/EVM1110E_W06_Financial_Acumen_KAM.pptx` | 24 | `6b655da` |
| 7 | `examples/EVM1110E_W07/EVM1110E_W07_Procurement_Negotiation.pptx` | 31 | `3171274` (thêm tên giảng viên) |
| 8 | `examples/EVM1110E_W08/EVM1110E_W08_KAM_Governance_Measurement.pptx` | 30 | `3171274` |
| 9 | `examples/EVM1110E_W09/EVM1110E_W09_Investors_Sponsors.pptx` | 29 | `3171274` |
| 10 | `examples/EVM1110E_W10/EVM1110E_W10_Supplier_Venue.pptx` | 29 | `3171274` |
| 11 | `examples/EVM1110E_W11/EVM1110E_W11_Media_Influencers.pptx` | 29 | `3171274` |
| 12 | `examples/EVM1110E_W12/EVM1110E_W12_Network_Conflicts.pptx` | 29 | `3171274` |
| 13 | `examples/EVM1110E_W13/EVM1110E_W13_SMP_KAP.pptx` | 26 | `3171274` |

Tài liệu khác:

- `HANDOFF_EVM1110E.md`: hồ sơ bàn giao lần 1, commit `738274e`.
- File này.

---

## Biên bản kiểm tra [PHIÊN C]

**1. Câu chỉ đạo hoặc góp ý tìm thấy trong tin nhắn của giảng viên**

| Tin nhắn | Số câu | Nội dung |
|---|---|---|
| TN1 | 4 | Tạo deck; màu nền; 6 màu; font |
| TN2 | 4 | "Tiếp tục"; "vẫn áp dụng" nền, màu, font |
| TN3–TN7 | khoảng 20 | Dựng lại từ tóm tắt; **không chắc chắn về lời gốc** |
| TN8 | 4 | — |
| TN9 | 1 | Tên giảng viên |
| TN10 | 5 dành cho agent mới / nguyên tắc dùng tiếp; khoảng 15 về cách soạn hồ sơ lần 1 | — |
| TN11 | 1 dùng tiếp ("không lặp lại bất kỳ lỗi nào của học kỳ cũ"); khoảng 20 về cách soạn hồ sơ này | — |

**Tổng:** khoảng **74 câu**.

**2. Đã ánh xạ: khoảng 39 câu**

| Câu chỉ đạo | Mã |
|---|---|
| TN1–TN8 | C-YC-01 → C-YC-08 |
| TN9 | C-YC-05, C-YC-05a, L-01 |
| TN10 | C-YC-50 → C-YC-54 |
| TN11 | C-YC-55 |

Các mã C-YC-10 → C-YC-29 lấy từ quy ước trong file nguồn, có ghi rõ file.

**3. Lỗi ghi nhận:** 25 dòng.

| Nhóm | Mã |
|---|---|
| Lỗi đã sửa triệt để | L-01, L-02, L-04 → L-07, L-09 → L-13, L-16, L-19 |
| Lỗi sửa một phần hoặc chưa sửa | L-03, L-08, L-14, L-15, L-17, L-18, L-20, L-21, L-22, L-23 |
| Ghi nhận không phải lỗi | L-24, L-25 |

Chỉ **1 lỗi** có phản hồi trực tiếp của giảng viên (L-01).

**4. Số bài đã trích nội dung:** 13/15 (Buổi 1–13). Có **354 slide** được trích tiêu đề, nội dung, chân slide và ghi chú.

**5. Câu bị loại và lý do**

- Khoảng 15 câu (TN10) và khoảng 20 câu (TN11) chỉ đạo **cách soạn hồ sơ** (cấu trúc mục, ghi nguồn, nhãn, định dạng Markdown, tự kiểm tra). Lý do: chỉ áp dụng một lần; đã thực hiện trong chính hồ sơ.
- Placeholder "[Tên giảng viên]": bị TN9 thay thế (C-YC-05a).

**6. Phần chưa chắc chắn**

- Lời gốc TN3–TN7.
- Có thể có góp ý ở giai đoạn W07–W13 bị lược khi tóm tắt.
- Thông tin môn học ở Mục 1 lấy từ file nguồn hoặc slide, giảng viên chưa xác nhận.
- Mục tiêu chính thức của Buổi 1, 2, 7–13 không còn trong phiên.
- Danh sách lỗi của giai đoạn W07–W13 không đầy đủ (L-19).
- Nội dung Mục 2 trích từ file .pptx: một số khối chữ của sơ đồ (nhãn trục, số thứ tự) bị tách rời nên có thể khó đọc. Thứ tự khối theo vị trí trên slide (trên → dưới, trái → phải).
