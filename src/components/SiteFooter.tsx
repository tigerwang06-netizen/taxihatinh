import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      <footer className="bg-[#082a17] text-gray-300 text-xs pt-14 pb-8 border-t border-emerald-950" id="lien-he">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <i className="fa-solid fa-taxi"></i>
                </div>
                <span className="font-black text-sm tracking-wide">TAXI LỮ KHÁCH HÀ TĨNH</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                Cung cấp dịch vụ Taxi, Thuê xe tự lái và Xe hợp đồng uy tín, chuyên nghiệp. Phục vụ 24/7 tại toàn tỉnh Hà Tĩnh và các tỉnh lân cận.
              </p>
              <div className="flex items-center gap-2 pt-1 text-white">
                <a className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00a859] transition flex items-center justify-center" href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f text-xs"></i>
                </a>
                <a className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00a859] transition flex items-center justify-center text-[10px] font-bold" href="https://zalo.me/0812444555" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                  Zalo
                </a>
                <a className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00a859] transition flex items-center justify-center" href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube text-xs"></i>
                </a>
                <a className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00a859] transition flex items-center justify-center" href="#" aria-label="TikTok">
                  <i className="fa-brands fa-tiktok text-xs"></i>
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h5 className="text-white font-bold text-xs uppercase mb-3 tracking-wider">DỊCH VỤ</h5>
              <ul className="space-y-2 text-gray-400 text-[11px]">
                <li><Link className="hover:text-emerald-400 transition" href="/dich-vu">Taxi nội tỉnh &amp; liên tỉnh</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/dich-vu">Thuê xe tự lái Hà Tĩnh</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/dich-vu">Xe hợp đồng tham quan du lịch</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/bang-gia">Xe đón tiễn Sân bay Vinh</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/bang-gia">Dịch vụ xe hoa, cưới hỏi</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h5 className="text-white font-bold text-xs uppercase mb-3 tracking-wider">HỖ TRỢ</h5>
              <ul className="space-y-2 text-gray-400 text-[11px]">
                <li><Link className="hover:text-emerald-400 transition" href="/bang-gia">Dự toán cước xe trực tuyến</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/bang-gia">Câu hỏi thường gặp về giá</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/tin-tuc">Kinh nghiệm &amp; Cẩm nang đi lại</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/gioi-thieu">Cam kết chất lượng 5 sao</Link></li>
                <li><Link className="hover:text-emerald-400 transition" href="/lien-he">Hóa đơn VAT &amp; Điều hành xe</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h5 className="text-white font-bold text-xs uppercase mb-3 tracking-wider">LIÊN HỆ</h5>
              <ul className="space-y-2.5 text-gray-400 text-[11px]">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-emerald-400 mt-0.5"></i>
                  <span>45 Trần Phú, TP. Hà Tĩnh, Tỉnh Hà Tĩnh</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-emerald-400"></i>
                  <a href="tel:0812444555" className="text-white font-bold hover:text-emerald-400 transition">0812 444 555</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-emerald-400"></i>
                  <a href="mailto:hotro@taxilukhachhatinh.vn" className="hover:text-emerald-400 transition">hotro@taxilukhachhatinh.vn</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-globe text-emerald-400"></i>
                  <span>www.taxilukhachhatinh.vn</span>
                </li>
              </ul>
            </div>

            {/* Col 5 */}
            <div>
              <h5 className="text-white font-bold text-xs uppercase mb-3 tracking-wider">KẾT NỐI VỚI CHÚNG TÔI</h5>
              <div className="bg-white p-2 rounded-lg inline-block shadow">
                <img alt="QR Code Zalo Taxi" className="w-20 h-20 object-contain" src="/images/19.jpg" />
              </div>
              <span className="block text-[10px] text-gray-400 mt-2">Quét mã Zalo đặt xe nhanh 24/7</span>
            </div>
          </div>

          <div className="pt-6 text-center text-gray-400 text-[11px]">
            © 2026 Taxi Lữ Khách Hà Tĩnh – Đẳng cấp phục vụ – Uy tín hàng đầu. Hotline:{" "}
            <a href="tel:0812444555" className="text-white font-bold hover:underline">0812 444 555</a>. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Call Hotline Button on Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          className="relative group flex items-center justify-center w-14 h-14 bg-[#00a859] hover:bg-[#008f4c] text-white rounded-full shadow-2xl transition duration-300"
          href="tel:0812444555"
          aria-label="Gọi ngay tổng đài"
        >
          <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-75 pointer-events-none"></span>
          <i className="fa-solid fa-phone-volume text-xl animate-pulse"></i>

          <span className="absolute right-16 bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow pointer-events-none">
            Gọi ngay: 0812 444 555
          </span>
        </a>
      </div>
    </>
  );
}
