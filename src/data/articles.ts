export interface Article {
  slug: string;
  title: string;
  category: string;
  categoryId: "promo" | "guide" | "airport" | "travel" | "ev";
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlight?: string;
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
    conclusion: string;
  };
}

export const ARTICLES: Article[] = [
  {
    slug: "kinh-nghiem-dat-taxi-san-bay-vinh",
    title: "Kinh nghiệm đặt taxi trọn gói Hà Tĩnh đi Sân Bay Vinh: Giá rẻ, đúng giờ và không lo trễ chuyến",
    category: "Tuyến Sân Bay Vinh",
    categoryId: "airport",
    date: "24/10/2025",
    readTime: "6 phút đọc",
    excerpt: "Khoảng cách từ TP Hà Tĩnh đến Sân bay Quốc tế Vinh dao động 55km - 65km. Đặt taxi trọn gói giúp tiết kiệm 40% cước so với taxi bấm mét, an tâm không lo delay hay phụ phí.",
    image: "/images/21.jpg",
    imageAlt: "Đưa đón sân bay Vinh đi Hà Tĩnh trọn gói",
    author: "Ban Điều Hành",
    authorRole: "Taxi Lữ Khách Hà Tĩnh",
    tags: ["Sân bay Vinh", "Taxi Hà Tĩnh", "Đưa đón sân bay", "Kinh nghiệm"],
    content: {
      intro: "Cảng hàng không Quốc tế Vinh (VII) là cửa ngõ hàng không trọng yếu phục vụ hàng triệu lượt hành khách Nghệ An - Hà Tĩnh mỗi năm. Tuy nhiên, khoảng cách từ trung tâm TP. Hà Tĩnh hay các huyện Cẩm Xuyên, Thạch Hà, Can Lộc, Kỳ Anh đến sân bay khá xa (50km - 100km). Nhiều hành khách băn khoăn về chi phí di chuyển cũng như nguy cơ trễ chuyến nếu không chọn đúng phương tiện.",
      sections: [
        {
          heading: "1. So sánh taxi trọn gói và taxi tính mét thông thường",
          body: [
            "Taxi truyền thống bấm đồng hồ tính tiền theo từng mét di chuyển, thường có đơn giá từ 13.000đ - 15.000đ/km. Với quãng đường 55km - 60km, tổng chi phí một lượt có thể lên đến 750.000đ - 900.000đ, chưa tính các khoản phụ phí cầu đường Bến Thủy hoặc tiền chờ khi chuyến bay bị delay.",
            "Ngược lại, khi đặt gói taxi sân bay trọn gói tại Taxi Lữ Khách Hà Tĩnh, mức giá được cố định từ 450.000đ - 550.000đ cho xe 4 chỗ và từ 600.000đ cho xe 7 chỗ. Khách hàng đã bao gồm toàn bộ phí BOT cầu đường và nước uống khăn lạnh miễn phí."
          ],
          highlight: "Lưu ý vàng: Đặt trước chuyến bay từ 3 đến 6 tiếng giúp tổng đài sắp xếp tài xế ở khu vực gần bạn nhất và theo dõi radar lịch bay để đón chuẩn từng phút.",
          table: {
            headers: ["Lộ trình di chuyển", "Dòng xe", "Giá trọn gói", "Thời gian đi"],
            rows: [
              ["TP. Hà Tĩnh ⇄ Sân bay Vinh", "4 chỗ Sedan đời mới", "450.000đ - 500.000đ", "50 - 60 phút"],
              ["TP. Hà Tĩnh ⇄ Sân bay Vinh", "7 chỗ MPV/SUV rộng", "550.000đ - 650.000đ", "50 - 60 phút"],
              ["TX. Hồng Lĩnh ⇄ Sân bay Vinh", "4 - 7 chỗ", "300.000đ - 400.000đ", "30 - 35 phút"],
              ["TX. Kỳ Anh ⇄ Sân bay Vinh", "4 - 7 chỗ", "950.000đ - 1.200.000đ", "100 - 120 phút"],
            ]
          }
        },
        {
          heading: "2. Thời gian vàng xuất phát để không trễ chuyến bay",
          body: [
            "Theo quy định hàng không nội địa Việt Nam (Vietnam Airlines, Vietjet Air, Bamboo Airways), quầy thủ tục check-in sẽ đóng cửa chính xác 40 phút trước giờ khởi hành.",
            "Đối với khách có hành lý ký gửi: Nên có mặt tại sảnh ga đi Sân bay Vinh trước giờ cất cánh ít nhất 90 - 120 phút.",
            "Đối với khách đã check-in online không có hành lý ký gửi: Nên có mặt trước 60 phút.",
            "Thời gian di chuyển từ TP. Hà Tĩnh qua cầu Bến Thủy đến sân bay trung bình mất 50 - 60 phút trong điều kiện giao thông bình thường. Do đó, bạn nên đặt xe xuất phát trước giờ bay ít nhất 2h30 - 3h."
          ]
        },
        {
          heading: "3. Chính sách hỗ trợ khi máy bay bị delay hoặc thay đổi giờ",
          body: [
            "Một nỗi lo lớn nhất của hành khách từ các sân bay Nội Bài, Tân Sơn Nhất, Đà Nẵng đáp xuống sân bay Vinh là tình trạng trễ chuyến (delay). Khi đặt xe tại Taxi Lữ Khách Hà Tĩnh, bạn chỉ cần cung cấp mã hiệu chuyến bay (ví dụ: VN1714, VJ218).",
            "Đội ngũ trực ban điều phối sẽ tự động theo dõi radar chuyến bay. Dù máy bay hạ cánh sớm 20 phút hay delay 2 tiếng, tài xế luôn có mặt sẵn sàng tại sảnh đến cầm biển đón mà không phụ thu bất kỳ khoản phí chờ nào."
          ],
          highlight: "Miễn phí 100% thời gian chờ đón tại sảnh ga đến Sân bay Vinh khi chuyến bay bị delay."
        },
        {
          heading: "4. Lời khuyên khi đi theo nhóm hoặc gia đình nhiều hành lý",
          body: [
            "Nếu đi từ 3 người lớn trở lên và mang theo 2 - 3 vali cỡ lớn (size 24 - 28 inch), xe 7 chỗ MPV như Mitsubishi Xpander hoặc Toyota Veloz là lựa chọn tối ưu. Không gian khoang hành lý rộng rãi, hàng ghế sau có thể gập linh hoạt giúp hành khách ngồi thoải mái sau chuyến bay dài.",
            "Đội ngũ tài xế bản địa Hà Tĩnh luôn sẵn lòng hỗ trợ bốc xếp hành lý lên xuống xe cẩn thận, đặc biệt chu đáo với gia đình có người cao tuổi hoặc trẻ nhỏ."
          ]
        }
      ],
      conclusion: "Đặt trước dịch vụ taxi sân bay Vinh - Hà Tĩnh trọn gói mang lại sự an tâm tuyệt đối về thời gian và chi phí. Hãy gọi ngay Hotline 0963 726 995 để nhận mã giảm giá và giữ lịch xe đời mới ngay hôm nay!"
    }
  },
  {
    slug: "top-7-dia-diem-du-lich-ha-tinh",
    title: "Top 7 địa điểm du lịch tâm linh & thắng cảnh nổi tiếng Hà Tĩnh nhất định phải đến",
    category: "Điểm Đến Hà Tĩnh",
    categoryId: "travel",
    date: "22/10/2025",
    readTime: "5 phút đọc",
    excerpt: "Hành trình khám phá Ngã Ba Đồng Lộc linh thiêng, viếng Chùa Hương Tích trên đỉnh Hồng Lĩnh ngút ngàn mây và tận hưởng làn nước trong xanh tại bãi biển Thiên Cầm.",
    image: "/images/22.jpg",
    imageAlt: "Chùa Hương Tích và danh thắng du lịch Hà Tĩnh",
    author: "Nguyễn Văn Hùng",
    authorRole: "Điều phối viên tour du lịch",
    tags: ["Du lịch Hà Tĩnh", "Chùa Hương Tích", "Ngã ba Đồng Lộc", "Biển Thiên Cầm"],
    content: {
      intro: "Hà Tĩnh - mảnh đất địa linh nhân kiệt với dãy núi Hồng Lĩnh 99 ngọn hùng vĩ và bờ biển dài thơ mộng. Nếu bạn đang lên kế hoạch du lịch hoặc công tác tại Hà Tĩnh, dưới đây là danh sách 7 điểm đến hấp dẫn bậc nhất cùng hướng dẫn di chuyển thuận tiện nhất.",
      sections: [
        {
          heading: "1. Khu di tích lịch sử Quốc gia đặc biệt Ngã Ba Đồng Lộc",
          body: [
            "Tọa lạc tại thị trấn Đồng Lộc, huyện Can Lộc, cách TP. Hà Tĩnh khoảng 30km. Đây là địa danh lịch sử thiêng liêng ghi dấu sự hy sinh anh dũng của 10 nữ liệt sĩ thanh niên xung phong trong kháng chiến chống Mỹ.",
            "Khuôn viên di tích bao gồm Đài tưởng niệm, Nhà bia tưởng niệm, Khu mộ 10 cô gái, Tháp chuông Đồng Lộc và Bảo tàng lịch sử. Mỗi năm nơi đây đón hàng triệu lượt du khách trong và ngoài nước về dâng hương tri ân."
          ],
          highlight: "Cung đường di chuyển: Đi theo Quốc lộ 1A đến Ngã ba Nghèn (Can Lộc), rẽ vào Tỉnh lộ 2 khoảng 9km. Xe taxi 4-7 chỗ đưa đón tận nơi chỉ khoảng 35 - 40 phút."
        },
        {
          heading: "2. Chùa Hương Tích - Hoan Châu Đệ Nhất Danh Lam",
          body: [
            "Nằm ẩn mình trên đỉnh núi Hồng Lĩnh ở độ cao 650m thuộc xã Thiên Lộc, Can Lộc. Ngôi chùa cổ kính được xây dựng từ thời nhà Trần, gắn liền với huyền tích công chúa Diệu Thiện tu hành đắc đạo.",
            "Du khách có thể trải nghiệm đi thuyền trên lòng hồ Nhà Đường tĩnh lặng, sau đó đi cáp treo ngắm nhìn toàn cảnh núi rừng Hồng Lĩnh mây mờ bao phủ. Không khí nơi đây thanh tịnh, thoát tục."
          ]
        },
        {
          heading: "3. Biển Thiên Cầm - Cung đàn trời ngân vang",
          body: [
            "Nằm tại huyện Cẩm Xuyên, cách TP. Hà Tĩnh 20km về phía Đông Nam. Biển Thiên Cầm nổi tiếng với bờ cát trắng mịn thoai thoải, làn nước trong xanh màu ngọc bích và không gian hoang sơ yên bình.",
            "Đến đây, bạn không thể bỏ qua trải nghiệm thưởng thức hải sản tươi sống đánh bắt trong ngày như mực nhảy, ghẹ hấp, cua đá và cá mú nướng mọi với mức giá rất bình dân."
          ]
        },
        {
          heading: "4. Khu lưu niệm Đại thi hào Nguyễn Du",
          body: [
            "Nằm tại làng Tiên Điền, huyện Nghi Xuân, cách TP. Vinh chỉ 8km và cách TP. Hà Tĩnh 45km. Quần thể di tích lưu giữ không gian sống, nhà thờ, lăng mộ và bảo tàng trưng bày hàng trăm hiện vật quý giá về cuộc đời tác giả Truyện Kiều bất hủ."
          ]
        },
        {
          heading: "5. Hồ Kẻ Gỗ - Bản tình ca giữa đại ngàn",
          body: [
            "Hồ thủy lợi Kẻ Gỗ thuộc huyện Cẩm Xuyên mang vẻ đẹp non nước hữu tình, là nguồn cảm hứng cho ca khúc nổi tiếng 'Người đi xây hồ Kẻ Gỗ'. Nơi đây rất thích hợp cho các buổi dã ngoại, cắm trại cuối tuần."
          ]
        }
      ],
      conclusion: "Để hành trình tham quan các điểm đến được trọn vẹn và an toàn, quý khách có thể đặt xe hợp đồng du lịch theo tour trọn gói trong ngày tại Taxi Lữ Khách Hà Tĩnh với tài xế bản địa kiêm hướng dẫn viên nhiệt tình."
    }
  },
  {
    slug: "taxi-dien-vinfast-ha-tinh",
    title: "Tại sao nên chọn dịch vụ taxi điện thông minh VinFast khi di chuyển tại TP Hà Tĩnh & Kỳ Anh?",
    category: "Dịch Vụ Xe Điện",
    categoryId: "ev",
    date: "20/10/2025",
    readTime: "4 phút đọc",
    excerpt: "Không mùi xăng xe, vận hành êm ái, hệ thống điều hòa kháng khuẩn và cước phí tiết kiệm minh bạch. Taxi điện xanh mang lại trải nghiệm du lịch văn minh, bảo vệ môi trường biển miền Trung.",
    image: "/images/23.jpg",
    imageAlt: "Đội xe điện taxi VinFast tại Hà Tĩnh",
    author: "Trần Minh Đức",
    authorRole: "Kỹ thuật vận hành",
    tags: ["Xe điện", "VinFast", "Taxi Xanh", "Hà Tĩnh"],
    content: {
      intro: "Xu hướng chuyển đổi xanh trong giao thông đô thị đang lan tỏa mạnh mẽ khắp cả nước. Tại Hà Tĩnh, dịch vụ taxi điện VinFast thông minh nhanh chóng chiếm trọn cảm tình của người dân và du khách nhờ những ưu thế vượt trội về chất lượng dịch vụ và bảo vệ môi trường.",
      sections: [
        {
          heading: "1. Tuyệt đối không mùi xăng khói - Chống say xe hàng đầu",
          body: [
            "Say xe là nỗi ám ảnh lớn nhất của nhiều người già và trẻ nhỏ khi ngồi ô tô. Nguyên nhân chủ yếu đến từ mùi xăng dầu, khí thải động cơ đốt trong và độ ồn rung lắc.",
            "Xe điện VinFast (VF 5 Plus, VF e34, VF 8) sử dụng 100% động cơ điện, không ống xả, không mùi xăng. Hệ thống điều hòa lọc bụi mịn đa lớp mang lại không gian khoang lái trong lành, giúp hành khách luôn tỉnh táo và dễ chịu trong suốt hành trình."
          ],
          highlight: "Hơn 95% khách hàng trải nghiệm xe điện phản hồi không còn cảm giác buồn nôn, mệt mỏi hay say xe."
        },
        {
          heading: "2. Không gian tĩnh lặng, vận hành êm ru",
          body: [
            "Động cơ điện loại bỏ hoàn toàn tiếng gầm rú cơ khí của máy xăng. Khi xe lăn bánh, hành khách có thể thoải mái nghỉ ngơi, chợp mắt hoặc nghe những bản nhạc nhẹ thư giãn sau ngày làm việc căng thẳng."
          ]
        },
        {
          heading: "3. Cước phí đồng giá minh bạch, tiết kiệm tối đa",
          body: [
            "Nhờ tối ưu hóa chi phí năng lượng sạc điện, cước phí taxi điện luôn ở mức cạnh tranh tương đương hoặc rẻ hơn taxi xăng truyền thống, đồng thời không tăng giá vào các khung giờ cao điểm hay ngày mưa gió."
          ]
        }
      ],
      conclusion: "Hãy trải nghiệm ngay dịch vụ xe điện xanh VinFast tại Hà Tĩnh bằng cách liên hệ tổng đài 0963 726 995 để cảm nhận sự khác biệt của phương tiện tương lai!"
    }
  },
  {
    slug: "tiet-kiem-chi-phi-taxi-kham-benh-vinh",
    title: "Bí quyết tiết kiệm đến 50% chi phí taxi đường dài đi khám bệnh tại Vinh & Hà Nội",
    category: "Kinh Nghiệm Đi Lại",
    categoryId: "guide",
    date: "18/10/2025",
    readTime: "6 phút đọc",
    excerpt: "Kinh nghiệm sử dụng gói xe tiện chuyến kết hợp khứ hồi trong ngày. Hướng dẫn đặt xe có hỗ trợ người cao tuổi, chờ khám miễn phí giờ đầu và xe đón tận cổng bệnh viện trung ương.",
    image: "/images/24.jpg",
    imageAlt: "Đưa đón bệnh nhân đi khám bệnh tại Vinh và Hà Nội",
    author: "Lê Thị Mai",
    authorRole: "Tư vấn chăm sóc khách hàng",
    tags: ["Khám bệnh", "Taxi bệnh viện", "Tiết kiệm", "Hà Tĩnh Vinh"],
    content: {
      intro: "Nhu cầu đưa đón người thân, bệnh nhân từ Hà Tĩnh ra Bệnh viện Hữu nghị Đa khoa Nghệ An (TP. Vinh) hoặc các bệnh viện tuyến trung ương tại Hà Nội (Bạch Mai, Việt Đức, K Tân Triều) là rất lớn. Bài viết dưới đây chia sẻ những bí quyết thực tế giúp bạn giảm thiểu chi phí và có chuyến đi thoải mái nhất.",
      sections: [
        {
          heading: "1. Chọn gói cước khứ hồi trong ngày (Giảm 40% - 50% chiều về)",
          body: [
            "Hầu hết các chuyến đi khám bệnh chỉ diễn ra trong vòng nửa ngày đến một ngày. Thay vì bắt 2 chuyến xe riêng lẻ tốn kém, bạn hãy đặt gói hợp đồng khứ hồi.",
            "Tại Taxi Lữ Khách Hà Tĩnh, chuyến về được giảm ngay 40% đến 50% cước, đồng thời miễn phí 2 - 3 giờ chờ đợi đầu tiên tại bệnh viện trong lúc làm xét nghiệm."
          ]
        },
        {
          heading: "2. Tài xế hỗ trợ tận tình người cao tuổi và hành lý",
          body: [
            "Người đi khám thường mệt mỏi, đau nhức. Lái xe được hướng dẫn chạy tốc độ đều, hạn chế phanh gấp, sẵn sàng dìu người bệnh và xách đồ đạc đến tận sảnh khoa khám."
          ],
          highlight: "Luôn dặn trước tổng đài viên nếu trên xe có bệnh nhân cần xe gầm thấp dễ lên xuống hoặc cần khoang chứa xe lăn gấp gọn."
        }
      ],
      conclusion: "Chăm sóc sức khỏe gia đình không thể chậm trễ. Đặt xe trước qua số 0963 726 995 để tài xế phục vụ chu đáo nhất."
    }
  },
  {
    slug: "thue-xe-hop-dong-kkt-vung-ang",
    title: "Dịch vụ thuê xe hợp đồng đón rước chuyên gia KKT Vũng Áng: Chuẩn mực & Hóa đơn VAT",
    category: "Doanh Nghiệp & Hợp Đồng",
    categoryId: "guide",
    date: "15/10/2025",
    readTime: "5 phút đọc",
    excerpt: "Giải pháp chuyên nghiệp dành cho các nhà máy, tập đoàn FDI tại Thị xã Kỳ Anh: Đội xe 7 chỗ và 16 chỗ đời mới, lái xe giao tiếp lịch sự, cam kết đúng lịch trình ca trực và thanh toán linh hoạt.",
    image: "/images/25.jpg",
    imageAlt: "Đưa đón chuyên gia KKT Vũng Áng Kỳ Anh",
    author: "Ban Điều Hành",
    authorRole: "Taxi Lữ Khách Hà Tĩnh",
    tags: ["KKT Vũng Áng", "Kỳ Anh", "Xe hợp đồng", "Hóa đơn VAT"],
    content: {
      intro: "Khu kinh tế Vũng Áng (Thị xã Kỳ Anh) là trung tâm công nghiệp trọng điểm miền Trung với hàng loạt dự án FDI quy mô lớn như Formosa Hà Tĩnh, cụm nhà máy nhiệt điện, cảng nước sâu Vũng Áng - Sơn Dương. Nhu cầu đưa đón chuyên gia, kỹ sư và cán bộ quản lý đòi hỏi tiêu chuẩn xe vận tải cao cấp và hợp đồng bài bản.",
      sections: [
        {
          heading: "1. Tiêu chuẩn đội xe phục vụ dự án",
          body: [
            "100% dòng xe 4 - 7 - 16 chỗ sản xuất từ 2022 trở lại đây, nội thất da cao cấp, trang bị camera hành trình, bảo hiểm hành khách mức cao nhất.",
            "Xe được rửa sạch và kiểm tra kỹ thuật an toàn trước mỗi ca vận chuyển đón rước chuyên gia từ sân bay Đồng Hới hoặc sân bay Vinh về khu nhà ở dự án."
          ]
        },
        {
          heading: "2. Hợp đồng pháp lý minh bạch & Hóa đơn điện tử VAT",
          body: [
            "Chúng tôi cung cấp hợp đồng vận tải đầy đủ điều khoản bảo mật, cam kết xuất hóa đơn GTGT điện tử chuẩn quy định thuế trong vòng 24 giờ, hỗ trợ công nợ thanh toán theo tháng cho các doanh nghiệp uy tín."
          ],
          highlight: "Ưu đãi chiết khấu 10% - 15% cho các hợp đồng đưa đón dài hạn trên 6 tháng."
        }
      ],
      conclusion: "Liên hệ Hotline điều hành 0963 726 995 để nhận báo giá chi tiết và hồ sơ năng lực doanh nghiệp."
    }
  },
  {
    slug: "quy-chuan-an-toan-tai-xe",
    title: "Quy chuẩn an toàn và văn hóa phục vụ của đội ngũ tài xế bản địa Lữ Khách Hà Tĩnh",
    category: "Văn Hóa Phục Vụ",
    categoryId: "guide",
    date: "12/10/2025",
    readTime: "4 phút đọc",
    excerpt: "Chúng tôi đào tạo tài xế không chỉ về kỹ năng lái xe đường đèo dốc ven biển an toàn mà còn là sự ân cần, trung thực, luôn trả lại đồ đạc bỏ quên cho hành khách trong vòng 30 phút.",
    image: "/images/26.jpg",
    imageAlt: "Tài xế bản địa Taxi Lữ Khách Hà Tĩnh",
    author: "Ban Điều Hành",
    authorRole: "Taxi Lữ Khách Hà Tĩnh",
    tags: ["Tài xế", "Văn hóa phục vụ", "An toàn", "Hà Tĩnh"],
    content: {
      intro: "Người Hà Tĩnh vốn mộc mạc, hiếu khách và chân thành. Kế thừa nét đẹp đó, Taxi Lữ Khách Hà Tĩnh xây dựng bộ quy tắc ứng xử chuẩn mực dành riêng cho toàn bộ đội ngũ tài xế nhằm mang lại sự hài lòng cao nhất cho hành khách.",
      sections: [
        {
          heading: "1. Ba không trong suốt hành trình",
          body: [
            "Không hút thuốc lá hoặc sử dụng chất kích thích trong xe.",
            "Không phóng nhanh vượt ẩu, không sử dụng điện thoại khi đang cầm lái.",
            "Không chèo kéo hay vòi vĩnh tiền tip của khách hàng."
          ]
        },
        {
          heading: "2. Cam kết hoàn trả tài sản thất lạc 100%",
          body: [
            "Mỗi khi khách xuống xe, tài xế luôn nhắc nhở kiểm tra lại ví tiền, điện thoại, hành lý. Trường hợp khách để quên đồ, tài xế có trách nhiệm bàn giao lại cho tổng đài hoặc liên hệ trao trả tận tay khách hàng trong vòng 30 phút."
          ],
          highlight: "Hotline hỗ trợ tìm đồ thất lạc hoạt động 24/7: 0963 726 995."
        }
      ],
      conclusion: "Chọn Taxi Lữ Khách Hà Tĩnh là chọn sự an tâm và tôn trọng trong từng khoảnh khắc di chuyển."
    }
  },
  {
    slug: "uu-dai-mua-le-hoi-giam-10-phan-tram",
    title: "Ưu đãi mùa lễ hội: Giảm ngay 10% cước taxi đi chùa và về quê sum họp gia đình",
    category: "Khuyến Mãi Đặc Biệt",
    categoryId: "promo",
    date: "10/10/2025",
    readTime: "3 phút đọc",
    excerpt: "Nhân dịp cao điểm lễ hội và du lịch tâm linh cuối năm, Lữ Khách Hà Tĩnh triển khai chương trình tri ân bà con quê hương: Tặng mã giảm giá 10% cho các cuốc xe khứ hồi đặt trước 12 tiếng.",
    image: "/images/27.jpg",
    imageAlt: "Khuyến mãi đặt xe mùa lễ hội Hà Tĩnh",
    author: "Phòng Truyền Thông",
    authorRole: "Taxi Lữ Khách Hà Tĩnh",
    tags: ["Khuyến mãi", "Lễ hội", "Giảm giá", "Đặt xe"],
    content: {
      intro: "Mùa lễ hội cuối năm và đầu xuân là thời điểm sum vầy ấm áp nhất của mỗi gia đình. Để hỗ trợ bà con đi lại an toàn, tiết kiệm, Taxi Lữ Khách Hà Tĩnh tưng bừng gửi tặng chương trình ưu đãi đặc biệt.",
      sections: [
        {
          heading: "1. Nội dung chương trình tri ân",
          body: [
            "Giảm ngay 10% tổng hóa đơn cước cho tất cả các chuyến đi viếng chùa (Chùa Hương Tích, Đền Chợ Củi, Đền Cả...) hoặc thăm viếng danh thắng.",
            "Tặng thêm 50.000đ khi đặt trước chuyến xe đón sân bay hoặc ga tàu khứ hồi.",
            "Áp dụng cho mọi dòng xe từ 4 chỗ đến 16 chỗ khi đặt lịch trước ít nhất 12 tiếng qua website hoặc hotline."
          ]
        }
      ],
      conclusion: "Số lượng mã ưu đãi có hạn mỗi ngày. Quý khách vui lòng đặt sớm để được giữ xe tốt nhất!"
    }
  }
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((item) => item.slug === slug);
}

export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return ARTICLES.slice(0, limit);
  return ARTICLES.filter((item) => item.slug !== slug).slice(0, limit);
}
