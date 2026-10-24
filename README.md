# Bookstore Management System

## 1. Giới thiệu

Hệ thống quản lý nhà sách (Bookstore Management System) là dự án hỗ trợ quản lý sách, khách hàng, bán hàng và hóa đơn tại nhà sách.

Các chức năng dự kiến:
- Quản lý thông tin sách.
- Quản lý thông tin khách hàng.
- Quản lý bán hàng và hóa đơn.
- Theo dõi thông tin giao dịch.


## 2. Thành viên nhóm

Nhóm gồm 4 thành viên:

- **Thành viên 1 (Phommasone) – Frontend:** Phụ trách thiết kế giao diện người dùng.
- **Thành viên 2 (SU) – Backend:** Phụ trách phần xử lý nghiệp vụ và cấu trúc Backend.
- **Thành viên 3 (Tu) – Nhóm trưởng:** Phụ trách quản lý repository, tổ chức nhánh, kiểm tra và gộp Pull Request.
- **Thành viên 4 (Shinn Thant) – Testing:** Phụ trách kế hoạch kiểm thử và kiểm tra quy trình tích hợp.

## 3. Công nghệ sử dụng

- **Frontend:** Công nghệ giao diện web (dự kiến).
- **Backend:** Java, Spring Boot (dự kiến).
- **Database:** Hệ quản trị cơ sở dữ liệu SQL (dự kiến).
- **Testing:** JUnit (dự kiến).
- **Quản lý phiên bản:** Git và GitHub.

## 4. Cấu trúc dự án

```text
bookstore-management/
├── README.md
├── .gitignore
├── docs/
│   ├── architecture.md
│   ├── database-design.md
│   └── ui-design.md
├── backend/
└── frontend/
```

- `README.md`: Giới thiệu và hướng dẫn làm việc với dự án.
- `.gitignore`: Loại trừ những file không cần theo dõi.
- `docs/`: Tài liệu thiết kế kiến trúc, cơ sở dữ liệu và giao diện.
- `backend/`: Cấu trúc dành cho phần Backend.
- `frontend/`: Cấu trúc dành cho phần Frontend.


## 5. Hướng dẫn cài đặt

**Yêu cầu:**
- Git.
- Tài khoản GitHub.
- Visual Studio Code hoặc trình soạn thảo văn bản.

Clone repository:

```bash
git clone https://github.com/dothanhtu2003/bookstore-management.git
```

Di chuyển vào thư mục dự án:

```bash
cd bookstore-management
```

## 6. Hướng dẫn chạy

Trong Lab 07, nhóm chưa chạy ứng dụng mà thực hành các thao tác Git/GitHub.

Kiểm tra trạng thái và nhánh hiện tại:

```bash
git status
git branch
```

Cập nhật phiên bản mới nhất:

```bash
git pull origin main
```

Ví dụ tạo nhánh Frontend:

```bash
git switch -c feature/frontend-setup
```

Lưu thay đổi vào Git:

```bash
git add .
git commit -m "Setup frontend structure"
```

Đẩy nhánh lên GitHub:

```bash
git push -u origin feature/frontend-setup
```

Sau đó tạo Pull Request để kiểm tra và gộp các thay đổi vào nhánh chính theo quy trình nhóm thống nhất.

## 7. Kiểm thử

Các nội dung kiểm tra:
- Tạo nhánh riêng cho từng thành viên.
- Tạo file và cấu trúc thư mục theo phân công.
- Commit và push lên GitHub.
- Tạo, kiểm tra và gộp Pull Request.
- Xử lý xung đột khi gộp nhánh.
- Cập nhật thay đổi bằng `git pull`.

---

**Repository:** https://github.com/dothanhtu2003/bookstore-management

