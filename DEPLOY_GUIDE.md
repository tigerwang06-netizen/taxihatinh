# HƯỚNG DẪN QUẢN TRỊ & CẬP NHẬT WEBSITE TAXI LỮ KHÁCH HÀ TĨNH

- **Website chính thức:** [https://taxilukhachhatinh.com](https://taxilukhachhatinh.com)
- **GitHub Repository:** `https://github.com/tigerwang06-netizen/taxihatinh.git`
- **VPS Server:** Contabo Ubuntu 22.04 LTS (Nginx + PM2 + Let's Encrypt SSL)
- **Thư mục VPS:** `/var/www/taxihatinh`

---

## 1. QUY TRÌNH CẬP NHẬT WEBSITE (SỬA LOCAL -> DUYỆT LÊN VPS)

### Bước 1: Chỉnh sửa & Test tại máy tính (Localhost)
1. Mở PowerShell tại `E:\taxihatinh\web`, chạy:
   ```powershell
   npm run dev
   ```
2. Mở trình duyệt xem tại: `http://localhost:3000`.
3. Chỉnh sửa nội dung, giao diện theo ý muốn (Website trên mạng không bị ảnh hưởng).

### Bước 2: Đẩy nội dung đã sửa lên GitHub
Sau khi đã test ưng ý trên máy tính, chạy lệnh:
```powershell
git add .
git commit -m "Noi dung cap nhat moi"
git push
```

### Bước 3: Cập nhật Website thật trên VPS (Bitvise Terminal)
Mở Bitvise Terminal và chạy đúng 1 dòng lệnh:
```bash
cd /var/www/taxihatinh && git pull && npm run build && pm2 reload taxihatinh
```
Website thật sẽ cập nhật bản mới nhất trong 20 giây mà không bị gián đoạn kết nối.

---

## 2. CÁC LỆNH HỖ TRỢ TRÊN VPS (BITVISE TERMINAL)

- **Xem trạng thái tiến trình web:** `pm2 status`
- **Xem log hoạt động:** `pm2 logs taxihatinh`
- **Khởi động lại web:** `pm2 restart taxihatinh`
- **Kiểm tra trạng thái Nginx:** `systemctl status nginx`
- **Khởi động lại Nginx:** `systemctl reload nginx`
- **Kiểm tra chứng chỉ SSL:** `certbot certificates`
