import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      pickup,
      destination,
      serviceType,
      carType,
      pickupTime,
      note,
      sourcePage,
    } = body;

    // Validate phone number
    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: "Vui lòng cung cấp số điện thoại hợp lệ (tối thiểu 8-10 số)." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.trim();
    const cleanName = (fullName || "Khách liên hệ nhanh").trim();
    const bookingId = "TX-" + Date.now().toString().slice(-6);
    const now = new Date();
    const createdAt = now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    const bookingData = {
      bookingId,
      fullName: cleanName,
      phone: cleanPhone,
      pickup: pickup ? pickup.trim() : "Chưa chỉ định",
      destination: destination ? destination.trim() : "Chưa chỉ định",
      serviceType: serviceType || carType || "Taxi di chuyển thông thường",
      pickupTime: pickupTime || "Đón ngay càng sớm càng tốt",
      note: note ? note.trim() : "Không có",
      sourcePage: sourcePage || "Trang chủ",
      createdAt,
      status: "pending",
    };

    // 1. Lưu bản ghi vào data/bookings.json nội bộ để không bao giờ mất thông tin
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "bookings.json");
      let bookings: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        try {
          bookings = JSON.parse(fileContent);
        } catch {
          bookings = [];
        }
      }
      bookings.unshift(bookingData);
      fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2), "utf8");
    } catch (saveError) {
      console.error("Lỗi lưu file bookings.json:", saveError);
    }

    // 2. Gửi thông báo tức thì qua Telegram Bot (nếu có cấu hình)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramMessage = `
🚕 <b>CÓ ĐƠN ĐẶT XE MỚI: #${bookingId}</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${cleanName}
📞 <b>Số điện thoại:</b> <a href="tel:${cleanPhone}">${cleanPhone}</a> <i>(Bấm để gọi)</i>
📍 <b>Điểm đón:</b> ${bookingData.pickup}
🏁 <b>Điểm đến:</b> ${bookingData.destination}
🚗 <b>Dòng xe / Dịch vụ:</b> ${bookingData.serviceType}
⏰ <b>Thời gian:</b> ${bookingData.pickupTime}
📝 <b>Ghi chú:</b> ${bookingData.note}
🌐 <b>Từ trang:</b> ${bookingData.sourcePage}
⏱ <b>Tiếp nhận lúc:</b> ${createdAt}
━━━━━━━━━━━━━━━━━━
<i>Hệ thống điều hành Taxi Lữ Khách Hà Tĩnh</i>
      `.trim();

      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: "HTML",
          }),
        });
      } catch (teleError) {
        console.error("Lỗi gửi thông báo Telegram:", teleError);
      }
    } else {
      console.log(`[BOOKING #${bookingId}] Khách: ${cleanName} | SĐT: ${cleanPhone} | Đón: ${bookingData.pickup} -> Đến: ${bookingData.destination}`);
    }

    return NextResponse.json({
      success: true,
      bookingId,
      zaloUrl: "https://zalo.me/0963726995",
      message: "Yêu cầu đặt xe đã được tiếp nhận thành công! Điều hành viên sẽ liên hệ lại với quý khách trong 30 giây - 3 phút.",
    });
  } catch (error) {
    console.error("API Booking Error:", error);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra sự cố trong quá trình tiếp nhận. Quý khách vui lòng gọi trực tiếp hotline 0963 726 995." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "bookings.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: true, count: 0, bookings: [] });
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    const bookings = JSON.parse(fileContent);
    return NextResponse.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách đơn" }, { status: 500 });
  }
}
