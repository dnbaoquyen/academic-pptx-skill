# HỒ SƠ BÀN GIAO — Môn "Quản trị mối quan hệ trong tổ chức sự kiện" (EVM1110E)

> Soạn ngày 09/11/2026 từ phiên làm việc làm slide với Claude Code (repo `dnbaoquyen/academic-pptx-skill`, nhánh `claude/nifty-thompson-2d4hk2`).
> Agent nhận hồ sơ sẽ không xem được phiên cũ. Mọi thứ cần biết đều nằm trong file này và trong các file của repo được dẫn ra dưới đây.

## Cách đọc hồ sơ

**Ký hiệu nguồn**

| Ký hiệu | Nghĩa |
|---|---|
| **TN1 … TN10** | Tin nhắn của người dùng (giảng viên), theo thứ tự thời gian. Danh sách đầy đủ ở PHẦN 0. |
| **File nguồn** | File bài giảng trong repo `dnbaoquyen/teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`, thư mục `courses/EVM1110E/lessons/`. Agent đã đọc các file này trong phiên để soạn slide. |
| **Deck WNN** | Slide đã tạo, nằm trong repo `dnbaoquyen/academic-pptx-skill`, file `examples/EVM1110E_WNN/`. |

**Nhãn dùng trong hồ sơ**

- **`[CHƯA CÓ THÔNG TIN]`**: phiên chưa từng nêu thông tin này.
- **`[CẦN BẠN XÁC NHẬN]`**: thông tin lấy từ file nguồn hoặc từ slide, nhưng bạn chưa nói trực tiếp trong tin nhắn.

---

## PHẦN 0. Danh sách tin nhắn chỉ đạo của người dùng (nguồn gốc cho mọi mã YC)

> **Lưu ý về độ đầy đủ**
>
> Phần đầu phiên (TN1–TN7, khi soạn Buổi 7–13) đã bị **tóm tắt tự động**.
> - TN1, TN2 và TN8 còn nguyên văn.
> - TN3–TN7 chỉ còn bản tóm tắt dạng *"Same request for W09 (W09_lesson_plan.md)"*. **Lời gốc của TN3–TN7 đã mất.** Nếu cần nguyên văn, hãy lấy từ lịch sử chat gốc.
>
> Bản tóm tắt ghi đây là "All user messages" và **không có tin nhắn nào chê hay yêu cầu sửa**. Tuy vậy, agent không thể kiểm chứng 100% rằng không có góp ý nào bị lược trong lúc tóm tắt.

| TN | Thời điểm | Nội dung (nguyên văn nếu còn) |
|---|---|---|
| TN1 | Phần đầu phiên (khoảng 27/09/2026) | "Hãy tạo 1 tài liệu trình chiếu (presentation deck) cho nội dung bài giảng có trong đường dẫn /home/user/teaching-skills/courses/EVM1110E/lessons/W07_slides_outline.md áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí, font chữ Alexandria." |
| TN2 | nt | "Tiếp tục tạo tài liệu trình chiếu cho nội dung bài giảng có trong đường dẫn courses/EVM1110E/lessons/W08_slides_outline.md và vẫn áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu …, font chữ Alexandria." *(dấu "…" có sẵn trong bản tóm tắt)* |
| TN3 | nt | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu như TN2, cho `courses/EVM1110E/lessons/W09_lesson_plan.md` |
| TN4 | nt | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, cho `W10_slides_outline.md` |
| TN5 | nt | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, cho `W11_slides_outline.md` |
| TN6 | nt | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, cho `W12_slides_outline.md` |
| TN7 | khoảng 28/09/2026 | [LỜI GỐC ĐÃ MẤT] Cùng yêu cầu, cho `W13_lesson_plan.md` |
| TN8 | 03/10/2026 | "Tạo tài liệu trình chiếu cho buổi học 1 đến buổi học 6 dựa vào nội dung của từng bài có trong đường dẫn https://github.com/dnbaoquyen/teaching-skills/tree/claude/busy-mccarthy-wsbyzs/courses/EVM1110E/lessons và vẫn áp dụng màu nền là #fbfaf4, sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí, font chữ Alexandria." |
| TN9 | 03/10/2026, gửi giữa lúc đang làm | "Phần giảng viên để tên Đoàn Nguyễn Bảo Quyên" |
| TN10 | 09/11/2026 | Yêu cầu đóng gói hồ sơ bàn giao này. Các chỉ đạo dành cho agent mới được đưa vào YC-50 → YC-54. |

---

## PHẦN 1. Thông tin chung về môn học

| Mục | Nội dung | Nguồn |
|---|---|---|
| Tên môn (tiếng Việt) | Bạn gọi trong TN10: "Quản trị các mối quan hệ trong tổ chức sự kiện". Trên slide (lấy từ file nguồn): "Quản trị mối quan hệ trong tổ chức sự kiện". | TN10; Deck W01–W13, slide bìa |
| Tên tiếng Anh | "Stakeholders Management for Events" | Deck W01 và W07, slide bìa (lấy từ file nguồn) `[CẦN BẠN XÁC NHẬN]` |
| Mã môn | EVM1110E | Tên thư mục `courses/EVM1110E`; slide bìa |
| Số tín chỉ | `[CHƯA CÓ THÔNG TIN]` | — |
| Số buổi | 15 buổi. Slide bìa ghi "Buổi N / 15". | Deck W01–W13 |
| Thời lượng mỗi buổi | `[CHƯA CÓ THÔNG TIN]` dạng số tiết. Giáo án Buổi 3 có mốc "126–132 S8" (phiếu kiểm tra cuối giờ), tức một buổi kéo dài khoảng 130+ phút. | `W03_lesson_plan.md` `[CẦN BẠN XÁC NHẬN]` |
| Hình thức | Kết hợp lý thuyết và thực hành ngay trong mỗi buổi. Mỗi buổi chia các đoạn S1–S8 (chi tiết ở PHẦN 2). | Giáo án và dàn ý slide các buổi |
| Cấu trúc 4 phần | (1) Nền tảng — Buổi 1<br>(2) Quản trị khách hàng trọng điểm (KAM) — Buổi 2–8<br>(3) Điều phối các bên liên quan phục vụ hành trình khách hàng — Buổi 9–12<br>(4) Đánh giá: hoàn thiện, bảo vệ kế hoạch — Buổi 13–15 | Deck W01, slide "Khách hàng là trục…" (từ file nguồn W01) |
| Phạm vi | Môn chỉ xét **các bên liên quan bên ngoài**. Ghi chú giảng viên nói rõ: "nhân sự, crew, tình nguyện viên thuộc môn Quản lý đội nhóm trong tổ chức sự kiện; quản lý và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện." | Deck W01, slide "Môn học chỉ xét các bên liên quan bên ngoài" |
| Người học | Sinh viên chia **6 nhóm** khi thực hành. Đã có dự án sự kiện ở các môn trước: bài cuối kỳ dùng "khách hàng từ dự án cũ". Trình độ, ngành, sĩ số, đặc điểm lớp: `[CHƯA CÓ THÔNG TIN]` | Phiếu thực hành các buổi; Deck W01 |
| Trường / khoa | Khoa Marketing · UEF | Slide bìa (từ file nguồn) `[CẦN BẠN XÁC NHẬN]` |
| Giảng viên | **Đoàn Nguyễn Bảo Quyên** | TN9 |
| Ngôn ngữ giảng dạy | Tiếng Việt. Giữ thuật ngữ tiếng Anh và giải thích tiếng Việt ở lần đầu (xem YC-16). | Lecture notes W03–W06 |
| Nền tảng | "Mọi bài nộp qua LMS theo thời hạn quy định". Phiếu kiểm tra cuối giờ có thể dùng "Giấy nhỏ hoặc Google Form". Tên hệ thống LMS cụ thể: `[CHƯA CÓ THÔNG TIN]` | Deck W01 (ghi chú); Deck W02 (ghi chú phiếu cuối giờ) |
| Mục tiêu môn | Câu hỏi của môn: "làm thế nào để xây dựng, duy trì và phát triển quan hệ với các bên liên quan bên ngoài sao cho sự kiện thành công — và khách hàng quay lại?" | Deck W01, ghi chú slide 3 |
| CLO | Phiếu thực hành có nhắc **CLO1, CLO2, CLO4, CLO5, CLO6** (ví dụ "CLO1, CLO4 · Bloom: Phân loại → Phân tích → Suy luận"). **Nội dung từng CLO:** `[CHƯA CÓ THÔNG TIN]` | `W03_activity_*`, `W04_activity_*`, `W05_activity_*`, `W06_activity_*` |
| Ánh xạ PLO | `[CHƯA CÓ THÔNG TIN]` | — |
| Đánh giá | Chuyên cần 10% · bài tập 20% · giữa kỳ (thuyết trình + làm việc nhóm) 20% · cuối kỳ (Stakeholder Management Plan + phản biện) 50%. | Deck W01, slide "Điểm cuối kỳ chiếm 50%…", nguồn ghi "Đề cương chi tiết học phần EVM1110E (UEF)" |
| Bài cuối kỳ | **Stakeholder Management Plan (SMP)** cho **1 khách hàng từ dự án sự kiện cũ** ("không làm dự án mới"). Mỗi buổi bổ sung một mảnh. Bảo vệ trước hội đồng. Khung SMP gồm các phần A. Value Insights · B. Value Opportunities · C. Value Propositions · D (Delivery) · E (Executive Summary) — Buổi 13. | Deck W01, W03–W06 (slide tổng hợp), W13 |
| Quy định chuyên cần, nộp trễ, dùng AI | `[NEEDS PROFESSOR INPUT]` — đã ghi sẵn trong ghi chú Deck W01 | Deck W01 |
| Giáo trình chính | Đọc thêm nhiều buổi: Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). *Implementing key account management*. Kogan Page. Danh sách giáo trình chính thức: `[CHƯA CÓ THÔNG TIN]` | Lecture notes W03, W05 |
| Tài liệu tham khảo | Mỗi buổi có file `buoi-0N_tu-lieu-tong-hop.md` (mục 6: danh mục APA 7). Mã nguồn đặt theo buổi: A (B1), B (B2), C (B3), D (B4), E (B5), F (B6), S (B7), T (B8), U (B9) … Y (B12), Z (B13). | File nguồn |
| Nguồn bắt buộc / cấm dùng | `[CHƯA CÓ THÔNG TIN]` (bạn chưa nêu). File nguồn có quy ước về cách dùng nguồn, xem YC-13, YC-17, YC-20. | — |

**Nhân vật trong tình huống xuyên suốt (giả định, lấy từ file nguồn)**

Tất cả đều là nhân vật giả định:

- **Nova Events:** agency.
  - Anh Đức: CEO.
  - Chị Thảo: KAMer.
- **Ngân hàng An Phát:** Key Account.
  - Chị Hạnh: GĐ Marketing ở Buổi 1–7. Theo Deck W08, chị chuyển sang ngân hàng khác và được thay bằng **anh Minh**.
  - Ông Tuấn: Phó TGĐ.
  - Anh Khoa: ngân sách – mua sắm.
  - Chị Lan: truyền thông nội bộ.
  - Chị Vy: thương hiệu.
- **Bốn khách hàng khác của Nova:** Địa ốc Sông Xanh, Dược phẩm MediPharm, Đại học Bright Future, Thực phẩm Bếp Việt.
- **Sự kiện chính:** gala 12/12, khoảng 600 lãnh đạo doanh nghiệp VIP.

---

## PHẦN 2. Cấu trúc nội dung

### 2.1 Đề cương theo buổi

Tên bài lấy theo tiêu đề tiếng Anh trong file nguồn. "Mục tiêu bài" lấy từ các ý chính và yêu cầu đề cương được trích trong phiếu thực hành.

| Buổi | Tên bài | Ý chính (các đoạn trên slide) | Trạng thái |
|---|---|---|---|
| 1 | Định hình hệ sinh thái các bên liên quan bên ngoài | 1.1 Hệ sinh thái (Freeman; 6 đặc điểm; giai đoạn) · 1.2 Primary/Secondary (Clarkson) · 1.3 Đo quyền lực (Power-Interest Grid; Salience Model, 7 loại) | ĐÃ SOẠN SLIDE (29 slide) |
| 2 | KAM Mindset & Key Account Selection | 2.1 Sales vs KAM · 2.2 Chọn Key Account (3 câu hỏi; GE–McKinsey) · Đồng đầu tư ("Choose me and I will choose you") | ĐÃ SOẠN SLIDE (25) |
| 3 | Understanding the Customer & Customer Journey | 3.1 PESTEL và đối thủ **của khách hàng** · 3.2 Hành trình 3 giai đoạn, 4 loại điểm chạm, 2 lớp hành trình · 3.3 DMU + GRASP | ĐÃ SOẠN SLIDE (24) |
| 4 | Measuring Relationship Quality | 4.1 Trust, Commitment, Functional conflict (Morgan & Hunt, nguyên văn) · Đo hai chiều (9 câu hỏi), 5 bước xử lý bất đồng · 4.2 Từ giao dịch sang đối tác | ĐÃ SOẠN SLIDE (24) |
| 5 | CVP & Value Co-creation | 5.1 Cấu trúc CVP (Future state – 7Ps – Value appraisal) · 5.2 Năm nguồn giá trị · 5.3 Đồng kiến tạo (co-diagnosis/ideation/design/testing) | ĐÃ SOẠN SLIDE (25) |
| 6 | Financial Acumen in KAM | 6.1 CLV (An Phát ≈ 926 triệu, r=70% → ≈ 719 triệu) · 6.2 Cost-to-serve · Ma trận biên lợi nhuận gộp × cost-to-serve | ĐÃ SOẠN SLIDE (24) |
| 7 | Understanding Procurement & Value-based Negotiation | 7.1 Kraljic · 7.2 Procurement · Buying · 7.3 Đàm phán giá trị | ĐÃ SOẠN SLIDE (31) |
| 8 | Governing the Key Account Relationship & Multi-dimensional Performance Measurement | 8.1 Bow-tie → Diamond · 8.2 Đo lường · 8.3 Đánh giá chung | ĐÃ SOẠN SLIDE (30) |
| 9 | Resource Matching: Investors & Sponsors | 9.1 Tài trợ & đầu tư · 9.2 Đề xuất & ROI · 9.3 Điểm chạm | ĐÃ SOẠN SLIDE (29) — nguồn: `W09_lesson_plan.md` |
| 10 | Building Solutions: Supplier & Venue Management | 10.1 Quy trình mua (RFI/RFP/RFQ) · 10.2 Địa điểm · 10.3 Hành trình Key Account | ĐÃ SOẠN SLIDE (29) |
| 11 | Spreading Value: Media & Influencers | 11.1 KOL · 11.2 Báo chí · 11.3 Booking & đo lường · 11.4 Khuếch đại | ĐÃ SOẠN SLIDE (29) |
| 12 | Leverage & Resolving Network Conflicts | 12.1 Leverage & minh bạch · 12.2 Xung đột lợi ích · Khi có sự cố | ĐÃ SOẠN SLIDE (29) |
| 13 | Building the Stakeholder Management Plan around the Key Account Plan | 13.1 Khung A–E · Phần C, D (13.2) · Phần E, bảo vệ (buổi xưởng) | ĐÃ SOẠN SLIDE (26) — nguồn: `W13_lesson_plan.md` |
| 14 | `[CHƯA CÓ THÔNG TIN]` (thuộc Phần 4 "Đánh giá") | `[CHƯA CÓ THÔNG TIN]` | CHƯA LÀM |
| 15 | `[CHƯA CÓ THÔNG TIN]` (thuộc Phần 4 "Đánh giá") | `[CHƯA CÓ THÔNG TIN]` | CHƯA LÀM |

### 2.2 Cấu trúc chuẩn của một buổi

Lấy từ giáo án và dàn ý slide trong file nguồn.

| Đoạn | Nội dung |
|---|---|
| S1 | Khởi động (5 phút): một tình huống hoặc câu hỏi, lớp giơ tay |
| S2 | Lý thuyết 1 |
| S3 | **Thực hành 1** (khoảng 20 phút, chia nhịp, ví dụ "Đồng hồ 7 / 8 / 5") |
| — | **Giải lao 8 phút** |
| S4 | Lý thuyết 2 |
| S5 | Lý thuyết 3 |
| S6 | **Thực hành 2** (khoảng 30 phút). Thường có **xoay vòng các trạm**: sinh viên đóng vai một nhân vật, để lại 🟨 câu hỏi và 🟥 lo ngại |
| S7 | Tổng hợp (3 phút): ba ý chính + **liên hệ SMP** |
| S8 | **Phiếu kiểm tra cuối giờ**: cá nhân, không chấm điểm, 2 câu, kèm câu nối sang buổi sau |

### 2.3 Liên kết giữa các bài

Lấy từ câu nối và các nhắc chéo trên slide.

**Chuỗi câu nối từ buổi này sang buổi sau**

| Từ → sang | Câu nối |
|---|---|
| B1 → B2 | Bản đồ các bên liên quan là trang 1 của SMP |
| B2 → B3 | "đã chọn Key Account thì phải hiểu họ hơn chính họ" |
| B3 → B4 | Hiểu khách rồi thì phải đo chất lượng quan hệ |
| B4 → B5 | "quan hệ tốt là nền, nhưng khách hàng ở lại vì giá trị" |
| B5 → B6 | Giá trị cho khách phải đi cùng giá trị cho agency (CLV, cost-to-serve) |
| B6 → B7 | "Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được" |

**Nhắc chéo xuyên buổi**

- **Bow-tie → Diamond:** B2 và B4 nhắc trước, B8 dạy chính.
- **Ví dụ Techcombank "đồng đầu tư" (U08):** dùng ở B2, B5 và B9.
- **Bảo vệ kế hoạch:** B5 nhắc "Value appraisal là câu hội đồng sẽ hỏi ở Buổi 14".
- **Mỗi buổi đóng góp một phần của SMP:**

  | Buổi | Phần SMP |
  |---|---|
  | B3 | A. Value Insights |
  | B4 | Nền cho phần B |
  | B5 | C. Value Propositions |
  | B6 | B. Value Opportunities |
  | B13 | Ráp khung A–E |

**Kiến thức tiên quyết:** sinh viên đã có dự án sự kiện ở các môn trước. Tên môn tiên quyết: `[CHƯA CÓ THÔNG TIN]`.

---

## PHẦN 3. Bộ yêu cầu cốt lõi

Có hai loại nguồn:

- **"TNx"**: lời trực tiếp của bạn.
- **"File nguồn"**: quy ước trong file dàn ý hoặc bài giảng của bạn, mà slide phải tuân theo.

Mã **QL-xx** ở cuối bảng **không phải yêu cầu của bạn**. Đó là quy tắc rút ra từ các lỗi agent tự phát hiện khi kiểm tra slide (giải thích ở phần 3B).

### 3A. Yêu cầu từ người dùng và từ file nguồn

| Mã | Nhóm | Yêu cầu (nguyên văn) | Diễn giải / cách áp dụng | Mức độ | Nguồn |
|---|---|---|---|---|---|
| YC-01 | Hình thức | "áp dụng màu nền là #fbfaf4" | Mọi slide, kể cả slide bìa và giải lao, có nền `FBFAF4`. | BẮT BUỘC | TN1, TN2, TN8 (và TN3–TN7 theo tóm tắt) |
| YC-02 | Hình thức | "sử dụng linh hoạt các màu 49b296, ffd23b, ff5178, 962b7c, 09a1e5, ff9259 để trang trí" | Sáu màu nhấn dùng linh hoạt, không cố định theo thứ tự.<br>Đang dùng: green `49B296`, yellow `FFD23B`, pink `FF5178`, purple `962B7C`, blue `09A1E5`, orange `FF9259`.<br>Có thêm bản nhạt để tô nền thẻ (`E1F3EE`, `FFF3C4`, `FFE4EA`, `F1E1EE`, `DDF1FB`, `FFE9DE`) và bản đậm cho chữ màu trên nền sáng (`D9622B`, `0A7FB5`, `E03A62`, `2E8A71`). Chữ chính `2A2238`, chữ phụ `6E6878`. | BẮT BUỘC | TN1, TN2, TN8 |
| YC-03 | Hình thức | "font chữ Alexandria" | Một font cho toàn bộ slide, kể cả bảng và chú thích. Máy dựng slide phải cài Alexandria, nếu không bản xem trước sẽ sai. | BẮT BUỘC | TN1, TN2, TN8 |
| YC-04 | Hình thức / Nhất quán | "Tiếp tục tạo … và vẫn áp dụng màu nền …" · "và vẫn áp dụng màu nền là #fbfaf4…" | Chữ "vẫn" nghĩa là các buổi sau giữ **cùng một ngôn ngữ thiết kế** với các buổi đã làm. Buổi 14–15 phải đồng bộ với Deck W01–W13. | BẮT BUỘC | TN2, TN8 |
| YC-05 | Nội dung | "Phần giảng viên để tên Đoàn Nguyễn Bảo Quyên" | Slide bìa ghi dòng "Giảng viên: Đoàn Nguyễn Bảo Quyên". Không để placeholder. Đã áp dụng cho cả 13 buổi. | BẮT BUỘC | TN9 |
| YC-05a | Nội dung | [ĐÃ THAY THẾ] Bản cũ của Deck W07–W13 để "Giảng viên: [Tên giảng viên]", ghi chú "Điền tên giảng viên trước khi dạy." | Không quay lại dùng placeholder. | — | Bị TN9 thay thế |
| YC-06 | Nội dung | "dựa vào nội dung của từng bài có trong đường dẫn https://github.com/dnbaoquyen/teaching-skills/tree/claude/busy-mccarthy-wsbyzs/courses/EVM1110E/lessons" | Nội dung slide lấy **từ file của chính buổi đó**: `WNN_slides_outline.md`, `WNN_lecture_notes.md`, `WNN_lesson_plan.md`, `WNN_activity_*.md`, `buoi-NN_tu-lieu-tong-hop.md`. Không thêm kiến thức ngoài các file này. | BẮT BUỘC | TN8 |
| YC-07 | Nội dung | "cho nội dung bài giảng có trong đường dẫn …/W07_slides_outline.md" · "…/W09_lesson_plan.md" · "…/W13_lesson_plan.md" | Khi bạn chỉ định một file cụ thể, file đó là nguồn chính. Buổi 9 và 13 được dựng từ lesson plan theo đúng chỉ định. | BẮT BUỘC | TN1, TN3, TN7 |
| YC-08 | Định dạng | "Hãy tạo 1 tài liệu trình chiếu (presentation deck)" · "Tạo tài liệu trình chiếu cho buổi học 1 đến buổi học 6" | Mỗi buổi một bộ trình chiếu riêng. Loại file bạn **chưa nêu** (đã làm .pptx, xem QĐ-03). | BẮT BUỘC (một deck mỗi buổi) | TN1, TN8 |
| YC-10 | Nội dung / Hình thức | "Mỗi slide một ý; tiêu đề là **câu khẳng định**." | Tiêu đề là một câu nêu kết luận (action title), không phải nhãn chủ đề. Ví dụ: "Khách hàng lớn nhất chưa chắc là Key Account". | BẮT BUỘC | Header các file `W0N_slides_outline.md` (ví dụ W03, W04) |
| YC-11 | Hình thức / Tiếp cận | "Hình có alt-text" | Mỗi hình hoặc sơ đồ có câu "Alt-text: …" trong speaker notes. | BẮT BUỘC | Header dàn ý W03, W04, W05, W06 |
| YC-12 | Hình thức / Tiếp cận | "bảng phân biệt bằng ký hiệu, không chỉ màu" | Phân biệt bằng ký hiệu ✓ ✗ ⚠, + / –, B/P/C/S, số thứ tự…, không chỉ bằng màu. | BẮT BUỘC | Header dàn ý W03, W04 |
| YC-13 | Nội dung / Trích dẫn | "Nguồn ghi mã nhỏ ở chân slide." | Chân slide ghi mã nguồn (ví dụ "B05: McDonald, Cranfield blog."), cỡ khoảng 10pt, **một dòng**. Danh mục APA 7 đặt ở slide "Tài liệu tham khảo" cuối deck. | BẮT BUỘC | Header dàn ý W03–W05 |
| YC-14 | Nội dung | "Mọi con số tình huống ghi **GIẢ ĐỊNH** ở chân slide." | Mọi con số của tình huống Nova – An Phát đều gắn nhãn GIẢ ĐỊNH, ở chân slide hoặc trên một pill vàng. Dữ kiện thật gắn nhãn "DỮ KIỆN THẬT" hoặc "CASE THẬT". | BẮT BUỘC | Header `W06_slides_outline.md`; lecture notes W02–W06 |
| YC-15 | Nội dung | "Ghi rõ trên slide khi nội dung là **định nghĩa làm việc của môn**." | Áp dụng cho GRASP, cấu trúc CVP ba phần, năm nguồn giá trị, các ma trận "biến thể của môn". Ghi trên slide **và** trong ghi chú. | BẮT BUỘC | Header `W05_slides_outline.md`; lecture notes W03, W05, W06 |
| YC-16 | Nội dung / Ngôn ngữ | "giữ tiếng Anh (relationship quality, trust, commitment, …), giải thích tiếng Việt lần đầu" | Slide viết tiếng Việt. Thuật ngữ chuyên ngành giữ tiếng Anh, giải nghĩa tiếng Việt ở lần xuất hiện đầu. | BẮT BUỘC | `W04_lecture_notes.md` (và ghi chú tương tự ở W03, W05, W06) |
| YC-17 | Nội dung / Cấm | "Chỉ nêu sự kiện đã đưa tin" · "Không quy lỗi cá nhân" | Với case thật (ví dụ "Về đây bốn cánh chim trời"), chỉ nêu điều báo chí đã đưa tin. Không quy lỗi cho cá nhân. | BẮT BUỘC | `W04_lecture_notes.md` §2.3; `W04_slides_outline.md` dòng 15 |
| YC-18 | Nội dung / Cấm | "Không nêu tên giai đoạn" | Chưa nêu tên các giai đoạn phát triển quan hệ (Dwyer et al.; McDonald et al.) cho đến khi kiểm tra toàn văn. | BẮT BUỘC | `W04_slides_outline.md` dòng 16 |
| YC-19 | Nội dung / Cấm | "Không đi sâu an toàn đám đông" | An toàn đám đông thuộc môn Quản trị rủi ro sự kiện. | BẮT BUỘC | `W05_slides_outline.md` dòng 13; Deck W01 (phạm vi môn) |
| YC-20 | Nội dung | "*(Tương tự; không phải quan hệ agency.)*" · "Chưa KCC; không phải event agency" | Ví dụ không phải quan hệ agency – khách hàng (Techcombank, VPBank, The Drum…) phải gắn nhãn "VÍ DỤ TƯƠNG TỰ" hoặc "MINH HỌA QUỐC TẾ · CHƯA KIỂM CHỨNG CHÉO". | BẮT BUỘC | `W05_lecture_notes.md`; `W06_slides_outline.md` dòng 14 |
| YC-21 | Nội dung / Độ chính xác | Các dấu `[VERIFY: …]` và `[NEEDS PROFESSOR INPUT]` trong file nguồn | Giữ nguyên các dấu này: trên slide (pill vàng hoặc chân slide) khi nội dung đó được chiếu, và luôn trong speaker notes. Không tự "giải quyết" bằng suy đoán. | BẮT BUỘC | Lecture notes và tư liệu tổng hợp các buổi |
| YC-22 | Nội dung | "Nova – An Phát là **giả định**; GĐ Marketing là **chị Hạnh**." | Giữ đúng tên và vai các nhân vật xuyên suốt (PHẦN 1). Từ Buổi 8, GĐ Marketing mới là anh Minh. | BẮT BUỘC | `W03_lecture_notes.md`; Deck W08 |
| YC-23 | Sư phạm | Cấu trúc S1–S8, 2 thực hành, "*Giải lao 8 phút*", phiếu kiểm tra cuối giờ "2 câu + câu nối" | Mỗi dòng của dàn ý thành một slide. Thêm slide cho hai phiếu thực hành, slide giải lao, phiếu kiểm tra cuối giờ và slide tài liệu tham khảo. | BẮT BUỘC | Bảng dàn ý các buổi |
| YC-24 | Sư phạm | "Đồng hồ 7 / 8 / 5" (và các mốc tương tự) | Slide thực hành ghi rõ mốc thời gian từng bước (huy hiệu tròn "8’", "2×4’"…) và nhiệm vụ từng bước. | BẮT BUỘC | Cột "Ghi chú GV" trong dàn ý |
| YC-25 | Sư phạm | "Phiếu kiểm tra cuối giờ (cá nhân, không chấm điểm)" | Ghi đúng tính chất này trong ghi chú. Đưa nguyên văn 2 câu hỏi và câu nối sang buổi sau lên slide. | BẮT BUỘC | `W0N_lesson_plan.md` |
| YC-26 | Sư phạm | "**Liên hệ SMP:** …" | Slide "Ba ý của Buổi N" có dòng cuối liên hệ phần tương ứng của Stakeholder Management Plan. | BẮT BUỘC | Lecture notes, đoạn S7 |
| YC-27 | Sư phạm | Các mục "Tình huống thất bại" và "3 ý GV chốt" trong phiếu thực hành | Đưa vào speaker notes của slide thực hành: câu hỏi gợi ý khi nhóm làm sai, đáp án tham khảo. | ƯU TIÊN | Phần dành cho giảng viên trong `W0N_activity_*.md` |
| YC-28 | Sư phạm | Lời dẫn GV trong lecture notes ("*[Nói: …]*", "*[Hỏi: …]*", "*[Chốt: …]*") | Chép lời dẫn, câu hỏi và câu chốt vào speaker notes của slide tương ứng. | ƯU TIÊN | Lecture notes các buổi |
| YC-29 | Hình thức | "*Alt: ma trận 2×2*", "*Alt: hai bờ nối bằng cầu*"… (cột "Nội dung / hình" của dàn ý) | Khi dàn ý mô tả hình, slide phải **vẽ đúng hình đó** bằng shape (ma trận, cây cầu, dòng thời gian…), không thay bằng gạch đầu dòng. | ƯU TIÊN | Bảng dàn ý các buổi |
| YC-50 | Quy trình | "Đọc toàn bộ hồ sơ trước khi làm bất cứ việc gì" | Áp dụng cho agent mới. | BẮT BUỘC | TN10 |
| YC-51 | Quy trình | "Coi PHẦN 3 là ràng buộc bắt buộc, đối chiếu từng mã YC với mỗi sản phẩm nó tạo ra" | Mỗi sản phẩm mới kèm bảng tự kiểm tra theo mã YC. | BẮT BUỘC | TN10 |
| YC-52 | Quy trình | "Xác nhận lại với tôi phần hiểu của nó về môn học và các yêu cầu cốt lõi trước khi bắt đầu" | Chờ giảng viên xác nhận rồi mới làm. | BẮT BUỘC | TN10 |
| YC-53 | Quy trình | "Hỏi tôi khi gặp `[CHƯA CÓ THÔNG TIN]`, không tự giả định" | Áp dụng cho tín chỉ, CLO, nội dung Buổi 14–15… | BẮT BUỘC | TN10 |
| YC-54 | Quy trình / Cấm | "Không bịa, không suy diễn." · "Không tự điền theo 'thông lệ'." | Nêu cho việc soạn hồ sơ. Đề xuất áp dụng tiếp cho nội dung slide; khớp với YC-06 và YC-21. | ƯU TIÊN | TN10 (nguyên tắc 1) |

### 3B. Bài học từ các lần sửa

**Lời ghi thật:** trong phần phiên còn đọc được, **bạn chưa lần nào chê hay yêu cầu sửa slide**. Thay đổi duy nhất do bạn yêu cầu là tên giảng viên (YC-05).

Các quy tắc dưới đây rút ra từ lỗi **agent tự phát hiện** khi xem ảnh chụp từng slide trước khi bàn giao. Chúng không phải lời bạn, nhưng nên giữ để không lặp lỗi.

| Mã | Lỗi đã gặp | Quy tắc phòng tránh | Mức độ | Nguồn |
|---|---|---|---|---|
| QL-01 | Nhãn trong sơ đồ Venn (Deck W01) đè lên nhau và lên vòng tròn | Đặt nhãn thuộc tính ra ngoài vòng tròn. Kiểm tra ảnh render trước khi giao. | ƯU TIÊN | QA Deck W01 |
| QL-02 | Tiêu đề cột bảng bị xuống dòng (W01 cột "Thuộc tính"; W06 cột "Doanh thu", "CTS/DT") | Đo chiều rộng cột theo chữ dài nhất của tiêu đề. Rút gọn hoặc nới cột. | ƯU TIÊN | QA Deck W01, W06 |
| QL-03 | Chữ trong hình chevron đè vào khấc của chevron (W01, slide lộ trình) | Lùi lề chữ khoảng 0,85 inch, thu hẹp hộp chữ. | ƯU TIÊN | QA Deck W01 |
| QL-04 | Bảng sát hoặc đè lên hộp ghi chú bên dưới (W03 bảng PESTEL; W06 Thực hành 1) | Tính điểm kết thúc của bảng, để hộp tiếp theo cách ít nhất 0,1 inch. Không để bảng chạm chân slide (y khoảng 6,9 inch). | ƯU TIÊN | QA Deck W03, W06 (và bài học từ W07–W13) |
| QL-05 | Hình vượt lề phải (W03: chevron thứ ba, thẻ cuối của dòng thời gian) | Mọi phần tử nằm trong lề 0,6 inch hai bên. | ƯU TIÊN | QA Deck W03 |
| QL-06 | Chữ phụ đè lên phần tử chính (W03: dòng "buying center…" đè pill "Người dùng") | Giới hạn chiều rộng hộp chữ phụ, tránh vùng trung tâm của sơ đồ. | ƯU TIÊN | QA Deck W03 |
| QL-07 | Chữ xoay 270° bị cắt ("Commit/ment", "Function/al conflict", Deck W04 bìa) | Hộp chữ xoay phải có kích thước đổi chỗ (w = chiều cao cột, h = chiều rộng cột) và căn theo tâm. | ƯU TIÊN | QA Deck W04 |
| QL-08 | Pill nhãn (GIẢ ĐỊNH, [VERIFY]) đè lên tiêu đề hoặc nhãn trục (W04) | Đặt pill ở vùng trống, không trùng hàng với tiêu đề hai dòng. | ƯU TIÊN | QA Deck W04 |
| QL-09 | Mặt cầu Value appraisal (W05) hẹp, chữ bị xuống dòng xấu | Sơ đồ phải đủ rộng cho chữ. Tách nhãn chính và mô tả thành hai dòng. | ƯU TIÊN | QA Deck W05 |
| QL-10 | Ký tự "₫" hiển thị thành "d" vì font Alexandria không có glyph này (W06) | Không dùng ký tự đặc biệt mà Alexandria không hỗ trợ. Kiểm tra trên ảnh render. | ƯU TIÊN | QA Deck W06 |
| QL-11 | Chấm dữ liệu đè lên nhãn ô ma trận (W06 bìa) | Giới hạn vị trí chấm, chừa vùng nhãn. | ƯU TIÊN | QA Deck W06 |
| QL-12 | (Giai đoạn W07–W13) trùng tên biến `const base`; chân slide nguồn dài hai dòng | Đặt tên biến không trùng hàm. Chân slide nguồn chỉ một dòng (khớp YC-13). | ƯU TIÊN | Tóm tắt phiên, giai đoạn W07–W13 |
| QL-13 | (Phòng ngừa) Con số tính toán sai | Tính lại mọi con số bằng script trước khi đưa lên slide. CLV đã kiểm tra: 925,6 ≈ 926 và 719,4 ≈ 719. | ƯU TIÊN | QA Deck W06 |

---

## PHẦN 4. Các quyết định đã chốt

Các mục **QĐ-01, QĐ-02** chốt theo lời bạn. Các mục còn lại là **quyết định kỹ thuật do agent đưa ra**. Bạn đã nhận sản phẩm và yêu cầu làm tiếp mà chưa phản đối. Nếu muốn đổi mục nào, hãy nói rõ.

| Mã | Quyết định | Lý do | Nguồn |
|---|---|---|---|
| QĐ-01 | Bảng màu của bạn (nền #FBFAF4 + 6 màu) **thay cho** hướng dẫn mặc định của repo `academic-pptx-skill` ("white backgrounds, single sans-serif font, three colours maximum, no decorative icons") | Bạn chỉ định rõ màu nền và 6 màu trang trí | TN1, TN8; README của repo |
| QĐ-02 | Mọi slide bìa ghi "Giảng viên: Đoàn Nguyễn Bảo Quyên" | Theo lời bạn | TN9 |
| QĐ-03 | Định dạng `.pptx`, dựng bằng **pptxgenjs**, khổ 16:9 `LAYOUT_WIDE` (13,333 × 7,5 inch) | Bạn nói "presentation deck" nhưng không nêu loại file | Agent chọn |
| QĐ-04 | Cấu trúc thư mục `examples/EVM1110E_WNN/`. Mỗi buổi có `build_deck.js` (tự chứa, chạy `node build_deck.js`) và `EVM1110E_WNN_<TenNgan>.pptx`, ví dụ `EVM1110E_W06_Financial_Acumen_KAM.pptx` | Dễ dựng lại và sửa | Agent chọn |
| QĐ-05 | Lưu trong repo `dnbaoquyen/academic-pptx-skill`, nhánh `claude/nifty-thompson-2d4hk2`. Mỗi buổi một commit. Chưa tạo pull request. | Theo cấu hình phiên | Phiên làm việc |
| QĐ-06 | **Bố cục chung**:<br>• Trên cùng là thanh "breadcrumb" dạng pill: Mở đầu (cam) · 3–4 mục của buổi · Tổng kết (xanh lá). Mục đang học được tô màu.<br>• Góc phải trên có một **biểu tượng nhỏ lặp lại riêng cho từng buổi**: W01 lưới 2×2; W02 ma trận 3×3; W03 ba chấm hành trình; W04 ba cột trụ; W05 cây cầu; W06 đồng xu.<br>• Chân trái là mã nguồn; chân phải là "EVM1110E · Buổi N  [số slide]".<br>• Tiêu đề 26pt đậm. Nội dung trong các thẻ bo góc màu nhạt. | Đồng bộ (YC-04), dễ định vị | Agent chọn; áp dụng đồng nhất W01–W13 |
| QĐ-07 | Slide bìa:<br>• Pill vàng "EVM1110E · Buổi N / 15".<br>• Tên môn 38pt.<br>• Phụ đề tiếng Anh in nghiêng màu tím.<br>• Dòng "Phần X · … — buổi k/n", "Khoa Marketing · UEF", "Giảng viên: …".<br>• Bên phải là hình minh họa khái niệm chính của buổi. | Đồng bộ | Agent chọn |
| QĐ-08 | **Speaker notes** chứa: đoạn và thời lượng (S1…), lời dẫn, câu hỏi, câu chốt, tình huống thất bại, đáp án tham khảo, Alt-text, dấu [VERIFY] và [NEEDS PROFESSOR INPUT] | YC-11, YC-21, YC-27, YC-28 | Agent chọn |
| QĐ-09 | Slide "Tài liệu tham khảo" ở cuối, ghi chú "Slide phụ lục — không chiếu khi dạy". Chân slide trỏ về `buoi-0N_tu-lieu-tong-hop.md, mục 6`. | YC-13 | Agent chọn |
| QĐ-10 | Số slide mỗi buổi **không cố định**: bằng số dòng dàn ý cộng slide thực hành, giải lao, tài liệu tham khảo. Thực tế 24–31 slide. | YC-23 | Kết quả |
| QĐ-11 | Quy trình kiểm tra trước khi giao:<br>(1) Chạy validator của skill pptx.<br>(2) Chuyển sang PDF bằng LibreOffice.<br>(3) Xem ảnh từng slide.<br>(4) Sửa lỗi chồng chữ, tràn khung.<br>(5) Render lại các slide đã sửa. | Tránh lỗi hiển thị | Agent chọn |

---

## PHẦN 5. Sản phẩm đã tạo

### 5.1 Danh sách

Tất cả nằm trong repo `dnbaoquyen/academic-pptx-skill`, nhánh `claude/nifty-thompson-2d4hk2`, thư mục `examples/`.

| Deck | File | Tóm tắt |
|---|---|---|
| W01 (29 slide) | `EVM1110E_W01_Stakeholder_Ecosystem.pptx` | • Giới thiệu môn: phạm vi, 4 phần, đánh giá 10/20/20/50, bài cuối kỳ SMP.<br>• Định nghĩa bên liên quan (Freeman); danh sách và hệ sinh thái; 6 đặc điểm (ví dụ DIFF 2026).<br>• Primary/Secondary (Clarkson), bảng phân loại An Phát.<br>• Power-Interest Grid; Salience Model (Venn, 7 loại).<br>• 2 thực hành: phân loại; bản đồ quyền lực. Slide "sửa poster", lộ trình SMP. |
| W02 (25) | `EVM1110E_W02_KAM_Mindset_Selection.pptx` | • Mở bài: Sông Xanh 3,5 tỷ có phải Key Account?<br>• KAM không phải "selling with knobs on"; bốn khía cạnh Homburg; bảng Sales vs KAM.<br>• Ba câu hỏi chọn Key Account; ma trận GE–McKinsey; chấm thử An Phát.<br>• Đồng đầu tư (Techcombank — ví dụ tương tự).<br>• 2 thực hành: Sales hay KAM; chọn ≤ 2 Key Account trong 5 ứng viên. |
| W03 (24) | `EVM1110E_W03_Customer_Understanding_Journey.pptx` | • Tín dụng 2026 ~15% (dữ kiện thật); Stage A; PESTEL của An Phát; đối thủ của An Phát là ngân hàng khác.<br>• Hành trình 3 giai đoạn, 4 loại điểm chạm, 2 lớp hành trình, dòng thời gian khách VIP.<br>• DMU (Webster & Wind); 5 nhân vật; GRASP (định nghĩa làm việc). |
| W04 (24) | `EVM1110E_W04_Relationship_Quality.pptx` | • Ba định nghĩa nguyên văn Morgan & Hunt; sơ đồ trust → functional conflict/cooperation; Palmatier; "quan hệ" và thể diện.<br>• Đo hai chiều, 9 câu hỏi, khoảng cách giữa hai phía; 5 bước xử lý bất đồng; case "Về đây bốn cánh chim trời".<br>• Giao dịch → đối tác; McMillan & Woodruff. Thực hành đóng vai bộ ba. |
| W05 (25) | `EVM1110E_W05_CVP_Value_Cocreation.pptx` | • Hồ sơ năng lực vs CVP; "marketing puffery"; 3 kiểu CVP; định nghĩa McDonald.<br>• Sơ đồ cây cầu Future state – 7Ps – Value appraisal; CVP cho An Phát.<br>• Năm nguồn giá trị (top-line, bottom-line, HSSEQ, advisory, customer's customer — VPBank).<br>• Đồng kiến tạo: 4 thực hành nguyên văn, 3 nhóm, cùng mục đích. |
| W06 (24) | `EVM1110E_W06_Financial_Acumen_KAM.pptx` | • Sông Xanh vs An Phát; CLV và customer equity; công thức đơn giản [VERIFY].<br>• Bảng tính CLV An Phát ≈ 926 triệu; độ nhạy r=70% → ≈ 719 triệu.<br>• Cost-to-serve, whale curve (chưa kiểm chứng chéo), 6 chi phí ẩn, chi phí vốn ≈ 104 triệu, The Drum.<br>• Ma trận 4 ô; "không bán lỗ" nhưng giảm chi phí cùng khách. |
| W07 (31) | `EVM1110E_W07_Procurement_Negotiation.pptx` | • Mở bài: AV khách sạn tăng giá 30%; agency vừa bán vừa mua.<br>• Ma trận Kraljic và chiến lược từng ô.<br>• Procurement và Buying; đàm phán dựa trên giá trị. |
| W08 (30) | `EVM1110E_W08_KAM_Governance_Measurement.pptx` | • Mở bài: chị Hạnh nghỉ, anh Minh thay.<br>• Bow-tie → Diamond; đo lường đa chiều (ROI nhiều cấp).<br>• Đánh giá chung với khách hàng. |
| W09 (29) | `EVM1110E_W09_Investors_Sponsors.pptx` | • Nhà tài trợ và nhà đầu tư; Techcombank "nhà đồng đầu tư".<br>• Thỏa thuận có lợi cho bốn bên; đề xuất và ROI tài trợ.<br>• Gắn nhà tài trợ vào điểm chạm của hành trình. |
| W10 (29) | `EVM1110E_W10_Supplier_Venue.pptx` | • RFI/RFP/RFQ; phương thức mua; chấm điểm có trọng số; 4 nguyên tắc.<br>• Chọn địa điểm trước; hành trình mua của chính Key Account. |
| W11 (29) | `EVM1110E_W11_Media_Influencers.pptx` | • KOL: mua khán giả, bảo chứng hay nội dung; độ tin cậy, sự tương đồng.<br>• Bản đồ nhà báo; booking 8 bước, due diligence.<br>• Đo lường và khuếch đại. |
| W12 (29) | `EVM1110E_W12_Network_Conflicts.pptx` | • Relational rents, leverage; minh bạch và bảo mật.<br>• Bên giữ nhiều vai, xung đột lợi ích; xử lý khi có sự cố. |
| W13 (26) | `EVM1110E_W13_SMP_KAP.pptx` | • Buổi xưởng: SMP = Key Account Plan + điều phối bên ngoài.<br>• Khung A–E (Value Planning); value proposition quy ra tiền.<br>• Chuẩn bị bảo vệ trước "Customer Board". |

Ngoài slide, phiên còn tạo **hồ sơ bàn giao này**.

### 5.2 Mẫu tiêu biểu

**Lưu ý:** bạn **chưa duyệt rõ ràng** slide cụ thể nào. Hai mẫu dưới đây lấy từ bộ slide bạn đã nhận và yêu cầu "tiếp tục" theo cùng phong cách.

**Mẫu 1 — Deck W02, slide 2 (slide mở bài)**

- **Tiêu đề (câu khẳng định):** "Khách hàng lớn nhất chưa chắc là Key Account"
- **Breadcrumb:** pill "Mở đầu" tô cam; biểu tượng ma trận 3×3 ở góc phải.
- **Trái:** thẻ cam nhạt viền cam.
  - "Địa ốc Sông Xanh"
  - số lớn **"3,5 tỷ"** (54pt, cam đậm) — "doanh thu lớn nhất của Nova năm nay"
  - 3 gạch đầu dòng: "Đấu thầu từng sự kiện · Trả tiền sau 90 ngày · Năm nào cũng đổi agency".
- **Phải:**
  - câu hỏi đậm "Đó có phải Key Account của Nova?"
  - ba pill bỏ phiếu: Có (xanh lá) / Không (hồng) / Chưa biết (xanh dương)
  - thẻ vàng chốt ý: "Key Account không phải khách hàng **lớn nhất**, mà là khách hàng **đáng đầu tư quan hệ nhất** — và cũng muốn đầu tư lại vào ta."
- **Chân slide:** "Tình huống giả định — tên và con số chỉ dùng cho học tập."
- **Speaker notes:** "S1 — Khởi động (5 phút). Chiếu và đọc: … Giơ tay: … Chốt: …"

**Mẫu 2 — Deck W06, slide 6 (slide số liệu)**

- **Tiêu đề:** "CLV 5 năm của An Phát khoảng 926 triệu"
- **Pill vàng:** "GIẢ ĐỊNH".
- **Trái:** bảng tiêu đề tím "Năm | Tính | Giá trị hiện tại", 5 dòng:
  - 334 / 1,12 → 298,2
  - … → 226,3 · 171,8 · 130,4
  - 334 × 0,85⁴ / 1,12⁵ → 98,9
  - Bên dưới là thẻ tím: "CLV 5 năm ≈ **926 triệu**".
- **Phải:** biểu đồ cột tím nhạt dần qua 5 năm, có nhãn giá trị.
- **Chân slide:** "GIẢ ĐỊNH: m = 334 triệu · r = 85% · d = 12% · T = 5. Tính cùng lớp."
- **Speaker notes:** hướng dẫn tính cùng lớp, câu hỏi chuyển sang slide độ nhạy, alt-text.

**Văn phong chung**

- Câu ngắn.
- Tiêu đề là kết luận.
- Thẻ vàng dùng để "chốt ý".
- Đặt hiểu lầm ↔ sửa (thẻ hồng → thẻ xanh lá) cạnh nhau.
- Số liệu luôn kèm nhãn GIẢ ĐỊNH hoặc nguồn.

---

## PHẦN 6. Việc còn tồn đọng

### 6.1 Chưa làm

- **Buổi 14 và Buổi 15:** chưa có slide. Chưa rõ file bài giảng của hai buổi này đã có trong repo `teaching-skills` hay chưa `[CHƯA CÓ THÔNG TIN]`.

### 6.2 Câu hỏi còn bỏ ngỏ (cần giảng viên)

**Thông tin môn học**

- Số tín chỉ, số tiết, nội dung CLO1–CLO6, ánh xạ PLO, đặc điểm lớp.
- Quy định chuyên cần, nộp trễ, sử dụng AI (Deck W01).
- Mẫu phụ lục công bố sử dụng AI (Deck W13).

**Loại file và khả năng đọc file**

- Bạn có cần định dạng nào khác ngoài .pptx không (Google Slides, PDF)? `[CHƯA CÓ THÔNG TIN]`
- **Mâu thuẫn trong tình huống:** Buổi 2–6 ghi Nova làm với An Phát **4 năm**, nhưng Deck W08 ghi chị Hạnh làm việc với Nova "**suốt 3 năm**". Cần chọn một con số.
- Agent không đọc được file `.pptx` trong phiên mới nếu không có công cụ phù hợp. Muốn sửa slide cũ thì nên sửa `build_deck.js` rồi dựng lại.

**Các dấu `[VERIFY]` và `[NEEDS PROFESSOR INPUT]` đang nằm trong slide**

| Deck | Nội dung cần kiểm tra |
|---|---|
| W01 | Thuật ngữ "pulsating organisation" (Toffler; Hanlon & Cuskelly); hội nghị khách hàng trong khách sạn có phải xin phép địa phương không; quy định lớp học |
| W03 | Danh sách vai trò buying center (Webster & Wind); văn bản hiện hành về bảo vệ dữ liệu; nguồn GRASP [NEEDS PROFESSOR INPUT] |
| W04 | Tên các giai đoạn quan hệ |
| W05 | Ba kiểu CVP (mới đọc nguồn thứ cấp); nguồn cấu trúc CVP và năm nguồn giá trị |
| W06 | Công thức CLV dạng học tập; tên bốn ô ma trận; đủ tác giả Gupta et al. (2006); whale curve và The Drum chưa kiểm chứng chéo |
| W07 | Biên lợi nhuận thực tế của agency Việt Nam; case agency Việt Nam; tỷ lệ dự toán; điều khoản nhà cung cấp theo BLDS 2015 / Luật Thương mại; định nghĩa value-based negotiation |
| W08 | Ví dụ sơ đồ tiếp xúc thật; số 24%/26% Amex; tên giai đoạn quan hệ (T01, T03); T09 |
| W09 | Quy định giới thiệu bảo hiểm tại sự kiện; bảo vệ dữ liệu khi chia sẻ danh sách khách |
| W10 | Năm đăng bài BizBash; tiêu đề bài báo tiếng Việt; tiêu đề phương thức trên trang CIPS |
| W11 | Thuế TNCN khi trả tiền cho KOL; Luật Báo chí 2025, NĐ 237/2026; quy định quảng cáo dịch vụ ngân hàng |
| W12 | APEX ESG bản mới; kỹ thuật Mohr & Spekman; toàn văn Y01, Y02 |
| W13 | Định nghĩa phần B–E theo giáo trình nội bộ UEF |

### 6.3 Ghi chú kỹ thuật cho agent mới

- **Thư viện và font cần cài:** pptxgenjs (npm) và font **Alexandria** (Google Fonts, để render đúng khi kiểm tra).
- **Script dựng:** các script dùng chung (header `w0_head.js`, `assemble.py`, `render.sh`) nằm ở thư mục tạm của phiên cũ và **đã mất**. Mỗi `build_deck.js` trong `examples/` vẫn **tự chứa đủ** header, bảng màu, các hàm `base`, `card`, `pill`, `badge`, `table`, `exitTicket`, `refSlides`, `summary3`, `titleSlide`. Muốn làm Buổi 14–15, nên sao một `build_deck.js` của W01–W06 làm khung.
- **Repo nguồn:** `dnbaoquyen/teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`. Phiên mới cần được cấp quyền đọc repo này.

---

## PHẦN 7. Prompt khởi động cho phiên mới

Dán đoạn sau vào phiên mới, kèm file hồ sơ này:

```
Bạn sẽ làm trợ lý soạn bài giảng (teaching skill) cho môn "Quản trị các mối quan hệ trong tổ chức sự kiện" (EVM1110E), giảng viên Đoàn Nguyễn Bảo Quyên. File đính kèm HANDOFF_EVM1110E.md là hồ sơ bàn giao từ phiên trước. Bạn không có quyền truy cập phiên đó, nên hồ sơ là nguồn duy nhất về bối cảnh.

Trước khi làm bất cứ việc gì:
1. Đọc TOÀN BỘ hồ sơ, từ PHẦN 0 đến Biên bản kiểm tra. Không bắt đầu tạo nội dung trước khi đọc xong.
2. Coi PHẦN 3 (các mã YC-xx và QL-xx) là ràng buộc bắt buộc. Với mỗi sản phẩm bạn tạo ra (slide, giáo án, tài liệu), kèm một bảng tự kiểm tra: liệt kê từng mã YC liên quan, ghi Đạt / Chưa đạt / Không áp dụng và lý do.
3. Viết lại cho tôi, ngắn gọn, phần hiểu của bạn về: (a) môn học (mã, cấu trúc 15 buổi / 4 phần, đánh giá, bài cuối kỳ SMP, tình huống Nova – An Phát); (b) các yêu cầu cốt lõi bắt buộc (màu nền, 6 màu, font, tên giảng viên, nguồn nội dung, quy ước GIẢ ĐỊNH / VERIFY / định nghĩa làm việc của môn, cấu trúc S1–S8); (c) việc tồn đọng ở PHẦN 6. Sau đó DỪNG và chờ tôi xác nhận.
4. Khi gặp mục ghi [CHƯA CÓ THÔNG TIN], [CẦN BẠN XÁC NHẬN] hoặc [LỜI GỐC ĐÃ MẤT], hãy hỏi tôi. Không tự giả định, không tự điền theo "thông lệ".
5. Không bịa nội dung học thuật hay số liệu. Chỉ dùng nội dung từ file bài giảng tôi chỉ định. Giữ nguyên các dấu [VERIFY] và [NEEDS PROFESSOR INPUT].
6. Nếu tôi đưa ra chỉ đạo mới trái với hồ sơ, làm theo chỉ đạo mới và nhắc tôi rằng nó thay thế mã YC nào.
```

---

## Biên bản kiểm tra

**1. Các câu chỉ đạo tìm thấy trong tin nhắn của bạn**

- **TN1:** 4 câu. (a) tạo deck từ file W07; (b) "áp dụng màu nền là #fbfaf4"; (c) "sử dụng linh hoạt các màu … để trang trí"; (d) "font chữ Alexandria".
- **TN2:** 4 câu. (a) "Tiếp tục tạo …" từ file W08; (b–d) "vẫn áp dụng" nền, màu, font.
- **TN3–TN7:** khoảng 4 câu mỗi tin, tổng khoảng 20. Chỉ còn dạng tóm tắt "Same request", nên đếm theo cấu trúc của TN2. **Không chắc chắn về lời gốc.**
- **TN8:** 4 câu. (a) tạo Buổi 1–6 "dựa vào nội dung của từng bài" theo link GitHub; (b–d) nền, màu, font.
- **TN9:** 1 câu. Tên giảng viên.
- **TN10:**
  - 4 câu dành cho agent mới (PHẦN 7).
  - 1 nguyên tắc "Không bịa, không suy diễn" có thể dùng tiếp.
  - Khoảng 15 câu chỉ đạo về cách soạn hồ sơ này (cấu trúc, ghi nguồn, định dạng Markdown, tự kiểm tra…).

**Tổng:** khoảng **53 câu chỉ đạo** (trong đó khoảng 20 câu thuộc TN3–TN7 được dựng lại từ tóm tắt).

**2. Số câu đã ánh xạ vào mã YC: khoảng 38**

| Câu chỉ đạo | Mã YC |
|---|---|
| Màu nền (TN1–TN8) | YC-01 |
| 6 màu | YC-02 |
| Font | YC-03 |
| "Tiếp tục", "vẫn áp dụng" | YC-04 |
| Tên giảng viên (TN9) | YC-05, kèm YC-05a [ĐÃ THAY THẾ] |
| "dựa vào nội dung của từng bài" | YC-06 |
| File nguồn chỉ định cho từng buổi (TN1–TN7) | YC-07 |
| "tài liệu trình chiếu" mỗi buổi | YC-08 |
| 4 câu cho agent mới (TN10) | YC-50 → YC-53 |
| Nguyên tắc không bịa (TN10) | YC-54 |

Các mã **YC-10 → YC-29** không lấy từ tin nhắn mà từ **quy ước trong file bài giảng của bạn**, có ghi nguồn từng file.

**3. Các câu bị loại và lý do**

- **Khoảng 15 câu chỉ đạo về cách soạn hồ sơ trong TN10** (định dạng Markdown, cấu trúc 7 phần, ghi nguồn, tự kiểm tra…). Lý do: chỉ áp dụng một lần, cho việc soạn hồ sơ này. Đã được thực hiện trong chính file này.
- **"Giảng viên: [Tên giảng viên]"** (trạng thái cũ do agent đặt, không phải lời bạn). Lý do: đã bị TN9 thay thế, ghi là YC-05a.

**4. Phần không chắc chắn**

- **Lời gốc của TN3–TN7** đã mất do tóm tắt tự động. Nếu các tin này có thêm chỉ đạo khác ngoài "cùng yêu cầu", hồ sơ đang thiếu. Hãy đối chiếu với lịch sử chat gốc.
- **Các góp ý sửa lỗi** trong giai đoạn W07–W13 (nếu có) có thể đã bị lược khi tóm tắt. Bản tóm tắt không ghi lần nào.
- **Thông tin môn học ở PHẦN 1** (tên tiếng Anh, khoa, đánh giá, phạm vi) lấy từ file nguồn và slide, không phải từ lời bạn. Đã đánh dấu `[CẦN BẠN XÁC NHẬN]` ở các mục chính.
- **Các quyết định QĐ-03 → QĐ-11** là lựa chọn của agent, bạn chưa xác nhận rõ ràng.
- Bạn **chưa duyệt rõ ràng** slide nào. "Mẫu tiêu biểu" ở PHẦN 5.2 chỉ dựa trên việc bạn tiếp tục yêu cầu theo cùng phong cách.
