import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1b22] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Taxi L? Khách Hà Tinh" className="h-12 w-auto brightness-0 invert" />
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            H? th?ng xe d?ch v? hi?n d?i, an toàn và chuyên nghi?p hàng d?u t?i Hà Tinh. Cam k?t dón dúng gi?, giá niêm y?t minh b?ch.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {/* Social Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00a651] transition-colors">
              FB
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00a651] transition-colors">
              ZL
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Danh M?c D?ch V?</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Taxi n?i t?nh & liên t?nh</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Thuê xe t? lái 4 - 7 ch?</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Xe h?p d?ng du l?ch</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Ðua dón sân bay Vinh tr?n gói</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">H? Tr? Khách Hàng</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Hu?ng d?n d?t xe online</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Câu h?i thu?ng g?p (FAQ)</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Chính sách b?o m?t</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Quy d?nh v?n chuy?n hành lý</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Thông Tin Liên H?</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex gap-2"><span className="text-[#00a651]">??</span> TP. Hà Tinh, T?nh Hà Tinh</li>
            <li className="flex gap-2"><span className="text-[#00a651]">??</span> 0812 444 555</li>
            <li className="flex gap-2"><span className="text-[#00a651]">??</span> hotro@taxilukhachhatinh.vn</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 Taxi L? Khách Hà Tinh. Ðã dang ký b?n quy?n.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Ði?u kho?n s? d?ng</Link>
          <Link href="#" className="hover:text-white">Chính sách b?o m?t</Link>
        </div>
      </div>
    </footer>
  );
}
