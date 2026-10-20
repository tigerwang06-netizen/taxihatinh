import nodemailer from "nodemailer";

export interface BookingEmailData {
  bookingId: string;
  fullName: string;
  phone: string;
  pickup: string;
  destination: string;
  serviceType: string;
  pickupTime: string;
  note: string;
  sourcePage: string;
  createdAt: string;
}

export const TARGET_BOOKING_EMAIL = process.env.BOOKING_NOTIFICATION_EMAIL || "daiphatcar88@gmail.com";

export async function sendBookingNotificationEmail(
  data: BookingEmailData
): Promise<{ success: boolean; method: string; error?: string }> {
  const subject = `🚕 [ĐƠN ĐẶT XE MỚI #${data.bookingId}] Khách: ${data.fullName} - ${data.phone}`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f6f8;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="background: linear-gradient(135deg, #008744 0%, #00a651 100%); color: #ffffff; padding: 20px 24px; text-align: center;">
      <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">🚕 CÓ ĐƠN ĐẶT XE MỚI</h2>
      <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Mã đơn: <strong>#${data.bookingId}</strong> | ${data.createdAt}</p>
    </div>
    
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 35%;">👤 Khách hàng:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: bold; color: #0f172a;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">📞 Số điện thoại:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 18px; font-weight: bold; color: #008744;">
            <a href="tel:${data.phone}" style="color: #008744; text-decoration: none;">${data.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">📍 Điểm đón:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #0f172a;">${data.pickup}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">🏁 Điểm đến:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #0f172a;">${data.destination}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">🚗 Dòng xe / Dịch vụ:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${data.serviceType}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">⏰ Thời gian đón:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: bold; color: #d97706;">${data.pickupTime}</td>
        </tr>
        ${
          data.note && data.note !== "Không có"
            ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">📝 Ghi chú:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #475569;">${data.note}</td>
        </tr>
        `
            : ""
        }
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 13px;">🌐 Nguồn gửi:</td>
          <td style="padding: 10px 0; font-size: 13px; color: #64748b;">${data.sourcePage}</td>
        </tr>
      </table>

      <div style="margin-top: 24px; text-align: center;">
        <a href="tel:${data.phone}" style="display: block; padding: 12px 16px; background-color: #008744; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; margin-bottom: 8px;">
          📞 BẤM ĐỂ GỌI CHO KHÁCH (${data.phone})
        </a>
        <a href="https://zalo.me/${data.phone}" target="_blank" style="display: block; padding: 12px 16px; background-color: #0068ff; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
          💬 NHẮN ZALO CHO KHÁCH
        </a>
      </div>
    </div>

    <div style="background-color: #f8fafc; padding: 14px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
      Hệ thống thông báo tự động - Taxi Lữ Khách Hà Tĩnh (taxilukhachhatinh.com)
    </div>
  </div>
</body>
</html>
  `.trim();

  // 1. Ưu tiên gửi qua SMTP (Gmail / Custom SMTP) nếu có cấu hình trong biến môi trường
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) === 465 || !process.env.SMTP_PORT,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Taxi Lữ Khách Hà Tĩnh" <${smtpUser}>`,
        to: TARGET_BOOKING_EMAIL,
        subject,
        html: htmlContent,
      });

      console.log(`[EMAIL] Đã gửi thông báo đơn #${data.bookingId} qua SMTP tới ${TARGET_BOOKING_EMAIL}`);
      return { success: true, method: "smtp" };
    } catch (smtpError: any) {
      console.error("[EMAIL] Lỗi gửi qua SMTP, chuyển sang phương thức dự phòng:", smtpError);
    }
  }

  // 2. Phương thức trực tiếp FormSubmit (Không yêu cầu mật khẩu ứng dụng, gửi thẳng tới email)
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_BOOKING_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Referer": "https://taxilukhachhatinh.com",
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        "Mã chuyến": `#${data.bookingId}`,
        "Họ tên khách hàng": data.fullName,
        "Số điện thoại": data.phone,
        "Điểm đón": data.pickup,
        "Điểm đến": data.destination,
        "Loại xe / Dịch vụ": data.serviceType,
        "Thời gian đón": data.pickupTime,
        "Ghi chú": data.note,
        "Trang đặt xe": data.sourcePage,
        "Thời gian tiếp nhận": data.createdAt,
      }),
    });

    const resJson = await response.json();
    console.log(`[EMAIL] Kết quả gửi qua FormSubmit tới ${TARGET_BOOKING_EMAIL}:`, resJson);
    return {
      success: resJson.success === "true" || resJson.success === true,
      method: "formsubmit",
    };
  } catch (err: any) {
    console.error("[EMAIL] Lỗi gửi qua FormSubmit:", err);
    return { success: false, method: "none", error: err?.message };
  }
}
