# Kế Hoạch Kiểm Thử & Xác Minh Phần Mềm (Testing Plan)

## 1. Tổng Quan (Overview)
Tài liệu này trình bày chiến lược kiểm thử và các quy trình xác minh cho Hệ Thống Quản Lý Cửa Hàng Sách (**Bookstore Management System**).

## 2. Mục Tiêu Kiểm Thử (Testing Objectives)
- Đảm bảo các thành phần hệ thống (Backend API, Cơ sở dữ liệu, Frontend UI) khởi tạo không phát sinh lỗi.
- Xác minh các chức năng nghiệp vụ cốt lõi: Quản lý kho sách, Giao dịch bán hàng và Xác thực người dùng.
- Duy trì chất lượng tích hợp liên tục (CI) trên tất cả các nhánh feature của Git.

## 3. Phạm Vi Kiểm Thử (Scope of Testing)
- **Kiểm Thử Đơn Vị (Unit Testing):** Kiểm tra các dịch vụ backend riêng lẻ, logic model và các interface repository.
- **Kiểm Thử Tích Hợp (Integration Testing):** Kiểm tra giao tiếp API giữa giao diện React frontend và Spring Boot backend.
- **Kiểm Thử Giao Diện & Chức Năng (UI & Functional Testing):** Kiểm tra điều hướng màn hình và các form nhập liệu người dùng (Đăng nhập, Bán hàng, Quản lý kho).

## 4. Môi Trường Kiểm Thử (Test Environment)
- **Backend Framework:** Spring Boot / JUnit 5
- **Frontend Framework:** React / Axios
- **Database:** MySQL / H2 In-Memory (Môi trường phát triển)

## 5. Chiến Lược Thực Thi (Execution Strategy)
1. **Xác Minh Tự Động:** Chạy `ApplicationTests.java` cho mỗi Pull Request gửi vào nhánh `develop`.
2. **Kiểm Soát Nhánh Feature:** Tất cả thay đổi mã nguồn phải vượt qua quá trình biên dịch unit test trước khi phê duyệt Pull Request.
