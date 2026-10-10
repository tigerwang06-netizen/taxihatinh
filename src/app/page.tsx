import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Tag, Clock, Car, PhoneCall, CheckCircle2, ChevronRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-[#e8f8f0]/70 via-white to-gray-50 pt-12 pb-32 border-b overflow-hidden">
        {/* Background Texture (Optional) */}
        <div className="absolute inset-0 opacity-10 bg-bottom bg-no-repeat bg-cover pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-[#00a651]/10 text-[#008744] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                Hãng Vận Tải Du Lịch Uy Tín Hà Tĩnh
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tight leading-[1.1]">
                DI CHUYỂN AN TOÀN <br />
                <span className="text-primary">MỌI LÚC – MỌI NƠI</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                Dịch vụ Taxi – Thuê xe tự lái – Xe hợp đồng chuyên nghiệp Hà Tĩnh.<br />
                <span className="font-semibold text-secondary">Uy tín – An toàn – Tiện lợi – Phục vụ tận tâm</span> trên từng cây số.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary">An toàn</div>
                    <div className="text-[11px] text-muted-foreground">Đội xe chất lượng</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center shrink-0">
                    <Tag size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary">Giá hợp lý</div>
                    <div className="text-[11px] text-muted-foreground">Báo giá minh bạch</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary">Phục vụ 24/7</div>
                    <div className="text-[11px] text-muted-foreground">Gọi là có mặt</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center shrink-0">
                    <Car size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary">Đa dạng</div>
                    <div className="text-[11px] text-muted-foreground">Từ 4 - 45 chỗ</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  alt="Taxi Lữ Khách Hà Tĩnh Xe Đời Mới" 
                  className="w-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                  src="/logo.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form (Floating) */}
      <section className="container mx-auto px-4 lg:px-8 -mt-16 relative z-20 mb-20">
        <Card className="rounded-2xl shadow-xl border-border/80 overflow-hidden bg-white">
          <Tabs defaultValue="taxi" className="w-full">
            <TabsList className="w-full justify-start rounded-none h-14 bg-gray-50/70 border-b border-border p-0 flex">
              <TabsTrigger value="taxi" className="flex-1 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#00a651] data-[state=active]:text-[#00a651] font-bold text-sm">
                <Car className="mr-2" size={18} /> TAXI
              </TabsTrigger>
              <TabsTrigger value="thue-xe" className="flex-1 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#00a651] data-[state=active]:text-[#00a651] font-bold text-sm">
                <ShieldCheck className="mr-2" size={18} /> THUÊ XE TỰ LÁI
              </TabsTrigger>
              <TabsTrigger value="hop-dong" className="flex-1 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#00a651] data-[state=active]:text-[#00a651] font-bold text-sm">
                <Tag className="mr-2" size={18} /> XE HỢP ĐỒNG
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="taxi" className="p-6 m-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-secondary uppercase">Điểm đón</label>
                  <Input placeholder="Nhập điểm đón..." className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-secondary uppercase">Điểm đến</label>
                  <Input placeholder="Nhập điểm đến..." className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-secondary uppercase">Số điện thoại</label>
                  <Input placeholder="09xx xxx xxx" className="h-12 bg-gray-50" />
                </div>
                <Button className="h-12 w-full bg-[#00a651] hover:bg-[#008744] text-white font-bold text-base shadow-md">
                  ĐẶT XE NGAY
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="thue-xe" className="p-6 m-0">
              <div className="text-center py-4 text-muted-foreground">Tính năng Thuê xe đang được cập nhật...</div>
            </TabsContent>
            <TabsContent value="hop-dong" className="p-6 m-0">
              <div className="text-center py-4 text-muted-foreground">Tính năng Xe hợp đồng đang được cập nhật...</div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-secondary">
              DỊCH VỤ <span className="text-[#00a651]">CỦA CHÚNG TÔI</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Đa dạng lựa chọn phục vụ nhu cầu đi lại, công tác, du lịch tại Hà Tĩnh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="overflow-hidden border-border/60 hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f8f0] flex items-center justify-center text-[#00a651]">
                    <Car size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">TAXI ĐƯỜNG DÀI & ĐÔ THỊ</h3>
                  <p className="text-sm text-muted-foreground">Di chuyển nhanh chóng • An toàn • Tiện lợi • Giá hợp lý</p>
                  <ul className="space-y-2 mt-4 text-sm text-secondary">
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Đón trả tận nơi tại nhà hoặc khách sạn</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Xe đời mới 2022-2025 thơm mát, sạch sẽ</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Bác tài văn minh, không vòi vĩnh chi phí</li>
                  </ul>
                </div>
                <div className="p-6">
                  <Button className="w-full bg-[#00a651] hover:bg-[#008744] text-white">ĐẶT XE NGAY</Button>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="overflow-hidden border-border/60 hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f8f0] flex items-center justify-center text-[#00a651]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">THUÊ XE TỰ LÁI</h3>
                  <p className="text-sm text-muted-foreground">Tự do hành trình • Chủ động quỹ thời gian công tác</p>
                  <ul className="space-y-2 mt-4 text-sm text-secondary">
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Đa dạng dòng xe từ sedan đến SUV 7 chỗ gầm cao</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Thủ tục nhận xe nhanh gọn, giao nhận tận nơi</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Giá cả cạnh tranh hàng đầu thị trường Hà Tĩnh</li>
                  </ul>
                </div>
                <div className="p-6">
                  <Button className="w-full bg-[#00a651] hover:bg-[#008744] text-white">THUÊ NGAY</Button>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="overflow-hidden border-border/60 hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f8f0] flex items-center justify-center text-[#00a651]">
                    <Tag size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">XE HỢP ĐỒNG DU LỊCH</h3>
                  <p className="text-sm text-muted-foreground">Phục vụ tham quan du lịch • Xe 4 - 7 - 16 - 29 - 45 chỗ</p>
                  <ul className="space-y-2 mt-4 text-sm text-secondary">
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Hợp đồng đầy đủ hoá đơn đỏ VAT cho doanh nghiệp</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Tài xế đường dài dày dặn kinh nghiệm, lịch thiệp</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="text-[#00a651] shrink-0" size={16} /> Chuyên tuyến Cửa Lò, Thiên Cầm, Ngã Ba Đồng Lộc</li>
                  </ul>
                </div>
                <div className="p-6">
                  <Button className="w-full bg-[#00a651] hover:bg-[#008744] text-white">XEM CHI TIẾT</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="bg-[#006e39] rounded-2xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-black mb-4 uppercase">Ưu Đãi Hấp Dẫn</h2>
            <p className="text-lg text-emerald-100 mb-6">
              Giảm ngay <span className="font-bold text-white text-xl">10%</span> cước chuyến đi cho khách hàng đặt xe lần đầu qua Hotline!
            </p>
            <Button variant="outline" className="bg-white text-[#006e39] hover:bg-emerald-50 border-white rounded-full font-bold px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
              ĐẶT XE NGAY <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
