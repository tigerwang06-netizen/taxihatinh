import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/data/articles";
import ArticleQuickBooking from "@/components/ArticleQuickBooking";
import ArticleShare from "@/components/ArticleShare";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Bài viết không tìm thấy | Taxi Lữ Khách Hà Tĩnh",
    };
  }

  return {
    title: `${article.title} | Taxi Lữ Khách Hà Tĩnh`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug, 3);

  return (
    <main className="min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        {/* Breadcrumb Navigation */}
        <section className="w-full bg-surface-container-low border-b border-surface-container py-2.5 sm:py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-secondary overflow-x-auto whitespace-nowrap no-scrollbar py-0.5">
            <Link className="hover:text-[#008744] transition-colors flex items-center gap-1 shrink-0" href="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Trang chủ</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline-variant shrink-0">chevron_right</span>
            <Link className="hover:text-[#008744] transition-colors shrink-0" href="/tin-tuc">
              <span>Tin tức &amp; Cẩm nang</span>
            </Link>
            <span className="material-symbols-outlined text-[14px] text-outline-variant shrink-0">chevron_right</span>
            <span className="text-[#008744] font-semibold truncate max-w-[200px] sm:max-w-md md:max-w-lg">
              {article.title}
            </span>
          </div>
        </section>

        {/* Article Header & Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Article Main Body (8 Cols) */}
            <article className="lg:col-span-8 space-y-6 sm:space-y-8 min-w-0">
              {/* Category & Meta */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#00a651] text-white font-label-sm text-label-sm font-bold shadow-sm">
                    {article.category}
                  </span>
                  <span className="text-secondary text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {article.date}
                  </span>
                  <span className="text-outline text-sm">•</span>
                  <span className="text-secondary text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#008744] leading-tight tracking-tight">
                  {article.title}
                </h1>

                {/* Excerpt Lead */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#e8f8f0] border-l-4 border-[#00a651] text-on-surface-variant text-base sm:text-lg leading-relaxed font-medium">
                  {article.excerpt}
                </div>

                {/* Author & Social Share */}
                <div className="pt-2 pb-4 border-b border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#00a651]/15 text-[#008744] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[24px]">manage_accounts</span>
                    </div>
                    <div>
                      <div className="font-title text-title text-on-surface font-bold">{article.author}</div>
                      <div className="font-body-sm text-body-sm text-secondary">{article.authorRole}</div>
                    </div>
                  </div>
                  <ArticleShare title={article.title} />
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full max-h-[440px] object-cover"
                />
                <div className="p-3 bg-surface-container-low text-xs text-secondary text-center italic border-t border-surface-container">
                  Ảnh: {article.imageAlt} - Taxi Lữ Khách Hà Tĩnh phục vụ 24/7
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border border-surface-container space-y-3">
                <div className="font-title text-title text-[#008744] font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                  Mục lục bài viết
                </div>
                <ul className="space-y-2 text-sm text-on-surface">
                  {article.content.sections.map((sec, idx) => (
                    <li key={idx} className="flex items-start gap-2 hover:text-[#008744] transition-colors">
                      <span className="text-[#00a651] font-bold">•</span>
                      <a href={`#section-${idx}`} className="hover:underline font-medium">
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Introduction */}
              <div className="prose max-w-none text-base text-on-surface leading-relaxed space-y-4">
                <p className="font-medium text-lg text-on-surface-variant leading-relaxed">
                  {article.content.intro}
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                {article.content.sections.map((section, idx) => (
                  <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-20">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#008744] border-b border-surface-container pb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#00a651] rounded-full inline-block"></span>
                      {section.heading}
                    </h2>

                    <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
                      {section.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.highlight && (
                      <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-amber-950 font-medium text-sm sm:text-base flex items-start gap-3">
                        <span className="material-symbols-outlined text-amber-600 shrink-0 mt-0.5">tips_and_updates</span>
                        <span>{section.highlight}</span>
                      </div>
                    )}

                    {section.table && (
                      <div className="overflow-x-auto rounded-xl border border-surface-container my-4 shadow-sm">
                        <table className="w-full text-left border-collapse text-sm">
                          <thead>
                            <tr className="bg-[#008744] text-white">
                              {section.table.headers.map((th, hIdx) => (
                                <th key={hIdx} className="py-3 px-4 font-semibold whitespace-nowrap">
                                  {th}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-surface-container">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#e8f8f0]/30 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className={`py-3 px-4 ${cIdx === 2 ? 'font-bold text-[#008744]' : ''}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Inline Call to Action Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#008744] to-[#00a651] text-white shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl text-amber-300">support_agent</span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold">Cần xe di chuyển ngay hoặc muốn tư vấn lộ trình?</h3>
                    <p className="text-sm text-white/90">Tổng đài viên trực 24/7 cam kết phản hồi báo giá trong 30 giây.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="tel:0812444555"
                    className="px-5 py-2.5 rounded-full bg-white text-[#008744] hover:bg-emerald-50 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                    <span>GỌI HOTLINE: 0812 444 555</span>
                  </a>
                  <a
                    href="https://zalo.me/0812444555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#e8f8f0] text-[#008744] hover:bg-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Nhắn Zalo Nhận Báo Giá</span>
                  </a>
                </div>
              </div>

              {/* Conclusion */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container space-y-2">
                <h4 className="font-title text-title text-[#008744] font-bold">Lời kết</h4>
                <p className="text-body-md text-body-md text-secondary leading-relaxed">
                  {article.content.conclusion}
                </p>
              </div>

              {/* Tags & Footer Share */}
              <div className="pt-6 border-t border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-secondary">Từ khóa:</span>
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-surface-container text-xs font-medium text-on-surface hover:bg-[#e8f8f0] hover:text-[#008744] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <ArticleShare title={article.title} />
              </div>
            </article>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Quick Booking Form Component */}
              <ArticleQuickBooking articleTitle={article.title} />

              {/* 24/7 Hotline Support Card */}
              <div className="bg-gradient-to-br from-[#008744] to-[#006d36] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">HỖ TRỢ TRỰC TUYẾN 24/7</span>
                  <span className="material-symbols-outlined text-white text-3xl animate-bounce">phone_in_talk</span>
                </div>
                <div>
                  <div className="text-xs text-white/80">Hotline Điều Phối Toàn Tỉnh:</div>
                  <a className="text-3xl font-extrabold tracking-wide text-white block hover:underline" href="tel:0812444555">
                    0812 444 555
                  </a>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Nhận đón khách tận nơi tại 13 huyện, thị xã, thành phố của Hà Tĩnh. Có hóa đơn đỏ VAT cho công ty.
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <a className="flex-1 py-2.5 rounded-xl bg-[#00a651] hover:bg-[#008744] text-white text-center text-xs font-bold transition-colors shadow-sm" href="tel:0812444555">
                    Gọi Tổng Đài
                  </a>
                  <a className="px-5 py-2.5 rounded-xl bg-white text-[#008744] text-center text-xs font-bold hover:bg-[#e8f8f0] transition-colors shadow-sm" href="https://zalo.me/0812444555" target="_blank" rel="noopener noreferrer">
                    Zalo
                  </a>
                </div>
              </div>

              {/* Cam kết phục vụ */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container space-y-4">
                <div className="font-title text-title text-[#008744] font-bold flex items-center gap-2 pb-2 border-b border-surface-container">
                  <span className="material-symbols-outlined text-[#00a651]">verified</span>
                  Cam kết chất lượng
                </div>
                <ul className="space-y-3 text-body-sm text-body-sm text-on-surface">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#00a651] text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>100% xe đời mới 2022 - 2025 thơm mát, sạch sẽ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#00a651] text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Đón đúng giờ 99.8%, không phụ thu giờ cao điểm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#00a651] text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Giảm ngay 40% - 50% cho chiều về khi đi khứ hồi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#00a651] text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Hóa đơn điện tử VAT đầy đủ trong ngày</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles Section */}
        {related.length > 0 && (
          <section className="bg-surface-container-low py-12 border-t border-surface-container w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#00a651] font-label-sm text-label-sm uppercase font-bold tracking-wider">Cùng chuyên mục</span>
                  <h3 className="font-headline-md text-headline-md text-[#008744] font-bold mt-1">Bài viết liên quan</h3>
                </div>
                <Link
                  href="/tin-tuc"
                  className="text-xs sm:text-sm font-bold text-[#00a651] hover:text-[#008744] flex items-center gap-1"
                >
                  <span>Xem tất cả bài viết</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((relItem) => (
                  <article
                    key={relItem.slug}
                    className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group border border-outline-variant/30"
                  >
                    <div>
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={relItem.image}
                          alt={relItem.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#00a651] text-white font-label-sm text-label-sm font-semibold">
                          {relItem.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="text-outline text-xs flex items-center gap-2">
                          <span>{relItem.date}</span>
                          <span>•</span>
                          <span>{relItem.readTime}</span>
                        </div>
                        <h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug line-clamp-2">
                          {relItem.title}
                        </h4>
                        <p className="text-secondary text-body-sm line-clamp-2 leading-relaxed">
                          {relItem.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-2 border-t border-surface-container">
                      <Link
                        href={`/tin-tuc/${relItem.slug}`}
                        className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold"
                      >
                        <span>Đọc tiếp</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
