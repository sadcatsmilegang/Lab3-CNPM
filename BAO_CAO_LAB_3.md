# BÁO CÁO THỰC HÀNH SỐ 3: TRIỂN KHAI DỰ ÁN TRÊN GITHUB
**Môn học:** Công nghệ Phần mềm Nâng cao & Thực hành (CNPM-NC-TH)  
**Thời gian thực hiện Sprint 1:** 05/10/2026 – 18/10/2026  
**Repository GitHub:** [https://github.com/sadcatsmilegang/Lab3-CNPM](https://github.com/sadcatsmilegang/Lab3-CNPM)

---

## I. THÔNG TIN DỰ ÁN & NHÓM THỰC HIỆN

### 1. Thông tin đồ án
- **Tên dự án:** HỆ THỐNG QUẢN LÝ RESORT & KHÁCH SẠN
- **Mục tiêu:** Xây dựng hệ thống tin học hóa quản lý toàn diện dành cho resort/khách sạn đẳng cấp 5 sao: hỗ trợ khách hàng tìm kiếm, đặt phòng, đặt dịch vụ tiện ích, thanh toán trực tuyến, quản lý lịch sử lưu trú và quy trình check-in/check-out của lễ tân.

### 2. Danh sách thành viên nhóm

| STT | Họ và Tên | MSSV | Username / Label | Vai trò phân công |
|:---:|:---|:---:|:---:|:---|
| 1 | **Nguyễn Hoài Phong** | 24DH113145 | `phongnh` | Product Owner / Backend Developer / Team Lead |
| 2 | **Nguyễn Lê Thành Trung** | 24DH113495 | `trungnlt` | Scrum Master / Frontend Developer / Tester |
| 3 | **Nguyễn Lê Duy Khang** | — | `khangnlt` | Backend Developer / API & Integration Engineer |
| 4 | **Cao Nguyên Anh** | — | `anhcn` | Frontend Developer / UI-UX Designer / QA |

---

## II. KẾT QUẢ TRIỂN KHAI TRÊN GITHUB

### 1. Tạo Sprint bằng Milestone
Theo mô hình Agile/Scrum, nhóm đã thiết lập **Milestone** để đại diện cho **Sprint 1**:
- **Milestone Name:** `Sprint 1`
- **Due Date:** 18/10/2026
- **Mô tả (Description):** Triển khai các tính năng cơ bản của Hệ thống Quản lý Resort & Khách sạn (Story ID 1 đến 13) cho khách vãng lai và khách hàng đăng ký.
- **Link kiểm tra Milestone:** [https://github.com/sadcatsmilegang/Lab3-CNPM/milestones](https://github.com/sadcatsmilegang/Lab3-CNPM/milestones)

---

### 2. Hệ thống Nhãn (Labels)
Hệ thống nhãn được chuẩn hóa thành 4 nhóm để quản lý tiến độ:

1. **Nhóm Story Points (Đánh giá độ phức tạp task):**
   - `0 point`, `1 point`, `2 point`, `3 point`, `5 point`, `7 point`, `8 point` (Màu vàng nhạt `#fef2c0`).
2. **Nhóm Thành viên phụ trách (Assignee):**
   - `Nguyễn Hoài Phong` (`#d93f0b` - Cam đậm)
   - `Nguyễn Lê Thành Trung` (`#0e8a16` - Xanh lá đậm)
   - `Nguyễn Lê Duy Khang` (`#1d76db` - Xanh dương)
   - `Cao Nguyên Anh` (`#a333c8` - Tím nổi bật)
3. **Nhóm Trạng thái (Task Status):**
   - `New` (`#f7c6c7` - Hồng phấn): Task mới khởi tạo.
   - `In progress` (`#1d76db` - Xanh dương): Task đang được thực hiện.
   - `Done` (`#2ecc71` - Xanh lá): Task đã hoàn thành nghiệm thu.
4. **Nhóm phân loại sự cố:**
   - `bug` (`#d73a4a`), `wontfix` (`#ffffff`).

- **Link kiểm tra Labels:** [https://github.com/sadcatsmilegang/Lab3-CNPM/labels](https://github.com/sadcatsmilegang/Lab3-CNPM/labels)

---

### 3. Danh sách Task (Issues) trong Sprint 1
Nhóm đã tạo đầy đủ **13 Issues** tương ứng với 13 User Stories từ Product Backlog (Tổng 54 Story Points):

| Issue # | Tên Task (User Story) | Story Points | Thành viên phụ trách | Trạng thái cuối Sprint | Link Issue |
|:---:|:---|:---:|:---|:---:|:---|
| **#1** | [Story 1] Xem Trang Chủ | 2 point | Cao Nguyên Anh | **Done** (Closed) | [#1](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/1) |
| **#2** | [Story 2] Xem Danh sách phòng | 3 point | Cao Nguyên Anh | **Done** (Closed) | [#2](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/2) |
| **#3** | [Story 3] Xem Chi tiết Phòng | 3 point | Cao Nguyên Anh | **Done** (Closed) | [#3](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/3) |
| **#4** | [Story 4] Xem các dịch vụ của resort | 3 point | Cao Nguyên Anh | **Done** (Closed) | [#4](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/4) |
| **#5** | [Story 5] Tìm kiếm và lọc phòng | 5 point | Cao Nguyên Anh | **Done** (Closed) | [#5](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/5) |
| **#6** | [Story 6] Xem các mã giảm giá | 3 point | Cao Nguyên Anh | **Done** (Closed) | [#6](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/6) |
| **#7** | [Story 7] Đăng ký | 5 point | Nguyễn Hoài Phong | **Done** (Closed qua PR #14) | [#7](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/7) |
| **#8** | [Story 8] Đăng nhập | 3 point | Nguyễn Hoài Phong | **Done** (Closed qua PR #15) | [#8](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/8) |
| **#9** | [Story 9] Quản lý thông tin cá nhân | 3 point | Cao Nguyên Anh | **In progress** (Open) | [#9](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/9) |
| **#10** | [Story 10] Đặt phòng | 8 point | Nguyễn Lê Duy Khang | **Done** (Closed) | [#10](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/10) |
| **#11** | [Story 11] Quản lý đặt phòng (xem, hủy) | 5 point | Nguyễn Lê Thành Trung | **Done** (Closed) | [#11](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/11) |
| **#12** | [Story 12] Đặt các dịch vụ của resort | 8 point | Nguyễn Lê Duy Khang | **In progress** (Open) | [#12](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/12) |
| **#13** | [Story 13] Xem lịch sử đặt phòng và dịch vụ | 3 point | Nguyễn Lê Thành Trung | **In progress** (Open) | [#13](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/13) |

---

### 4. Quy trình Liên kết Task với Pull Request (Solve / Closes Keyword)

Đúng theo yêu cầu thực hành, nhóm thực hiện phát triển tính năng trên branch riêng và liên kết Pull Request với Task qua từ khóa:

1. **Pull Request #14 - Triển khai chức năng Đăng ký:**
   - **Branch:** `feature/implement_register_func` $\rightarrow$ `main`
   - **Cú pháp liên kết trong Description:** `Solve #7`
   - **Kết quả:** Pull Request được tự động ghi nhận tại [Issue #7](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/7), khi PR được merge thì issue được đóng và chuyển sang nhãn `Done`.
   - **Link PR:** [https://github.com/sadcatsmilegang/Lab3-CNPM/pull/14](https://github.com/sadcatsmilegang/Lab3-CNPM/pull/14)

2. **Pull Request #15 - Triển khai chức năng Đăng nhập:**
   - **Branch:** `feature/implement_login_func` $\rightarrow$ `main`
   - **Cú pháp liên kết trong Description:** `Solve #8`
   - **Kết quả:** Pull Request được tự động reference tại [Issue #8](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/8) và hoàn tất đóng task.
   - **Link PR:** [https://github.com/sadcatsmilegang/Lab3-CNPM/pull/15](https://github.com/sadcatsmilegang/Lab3-CNPM/pull/15)

---

### 5. Quản lý Tiến độ Dự án & Bộ lọc (Filters)
- **Tiến độ Sprint 1:** Đã hoàn thành 10/13 tasks (~77%), tương ứng với 40/54 Story Points.
- **Khả năng theo dõi & Filter trên GitHub:**
  - Lọc task của **Nguyễn Lê Thành Trung**: `is:issue label:"Nguyễn Lê Thành Trung"`
  - Lọc task của **Nguyễn Hoài Phong**: `is:issue label:"Nguyễn Hoài Phong"`
  - Lọc task đã hoàn thành trong Sprint 1: `is:issue milestone:"Sprint 1" label:Done`
  - Lọc task đang thực hiện: `is:issue milestone:"Sprint 1" label:"In progress"`

---

## III. HƯỚNG DẪN CHỤP ẢNH MINH CHỨNG (NẾU CẦN NỘP BÁO CÁO FILE WORD)

Để có báo cáo bản in hoặc file PDF nộp thầy cô hoàn chỉnh 100%, bạn chỉ cần truy cập các đường dẫn sau trên GitHub và chụp lại màn hình:

1. **Ảnh 1 - Danh sách Milestone:** Truy cập tab [Milestones](https://github.com/sadcatsmilegang/Lab3-CNPM/milestones) chụp thanh tiến độ Sprint 1 (đang đạt 77% complete, 10 closed, 3 open).
2. **Ảnh 2 - Danh sách Labels:** Truy cập tab [Labels](https://github.com/sadcatsmilegang/Lab3-CNPM/labels) chụp bảng đầy đủ các nhãn màu: Story point, Tên 4 thành viên, Status (New, In progress, Done).
3. **Ảnh 3 - Danh sách Issues:** Truy cập tab [Issues](https://github.com/sadcatsmilegang/Lab3-CNPM/issues) chụp danh sách 13 issues phân bố theo các label và milestone.
4. **Ảnh 4 - Chi tiết Pull Request liên kết Issue:** Mở [PR #14](https://github.com/sadcatsmilegang/Lab3-CNPM/pull/14) hoặc [PR #15](https://github.com/sadcatsmilegang/Lab3-CNPM/pull/15) chụp phần mô tả có chữ `Solve #7` / `Solve #8` và nhánh merge vào `main`.
5. **Ảnh 5 - Chi tiết Issue có liên kết PR:** Mở [Issue #7](https://github.com/sadcatsmilegang/Lab3-CNPM/issues/7) chụp phần timeline hiển thị biểu tượng PR đã reference và merge.
6. **Ảnh 6 - Lọc theo tiến độ thành viên:** Gõ trên thanh search `is:issue milestone:"Sprint 1" label:"Nguyễn Lê Thành Trung"` để chụp kết quả filter.
