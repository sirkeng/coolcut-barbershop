"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    name: "Mook Ttcy",
    rating: 5,
    comment:
      "ทางร้านตัดดีมากๆค่ะ แนะนำเลยได้ทั้งทรงเฟดเท่ๆและเกาหลีเลย เราตัดทรงคอมม่าได้ตลอดเลย ดรอปคัท ก็ดี ช่างสุภาพมาก เจ้าของร้านก็น่ารัก",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjXGi_at7DW-ysDiVnMhHv11v8vN-FiSig6HWJSGowFcvO1f8Oda=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/B49mQVR3MHjWUNwf6",
  },

  {
    id: 2,
    name: "J To The Jin",
    rating: 5,
    comment:
      "ตัดผมกับร้านนี้มาปีนึงแล้ว รีเควสทรงไหนไปช่างตัดตามได้เสมอ เฟรนด์ลี่ ใส่ใจลูกค้า ตัดนานหน่อยแต่ได้งานละเอียดเนี๊ยบแน่นอน",
    profileImg:
      "https://lh3.googleusercontent.com/a/ACg8ocK4jUrvfxtptLxTe7WGEv_7VL3AcZHOf4YJBLgw83GcfwspCw=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/eBm9RHXg4HL5Wjbu9",
  },
  {
    id: 3,
    name: "Siripatsorn K",
    rating: 5,
    comment:
      "ตัดดีมากค่ะ ทรงผมออกมาเนี้ยบทุกทรง ให้คำแนะนำทรงผมที่เหมาะกับโครงหน้า เป็นร้านประจำแฟนเลยค่ะ",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjWCoPv9cxDKm7mrq8vzo1jFXkPwznELWodA4AQ2vxQNmVxk4Oqr=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/XuHdsoY7EZHDpiAq9",
  },
  {
    id: 4,
    name: "netitorn ice",
    rating: 5,
    comment: "ตัดดีครับมีการแนะนำให้เราได้เข้าใจทรงผมมากขึ้น เพลินดีครับแนะนำ",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUKC3kmZTD94JW9uj_PLN4VIQ840dYz5LBniWi4V9hAeeAsVtGb=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/XQpBjWig7wSoZfCSA",
  },

  {
    id: 5,
    name: "Suwit Noummasing",
    rating: 5,
    comment: "ช่างตัดผมดีมาก บริการดีเยี่ยม มาใช้บริการตลอดครับ",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjXjAFNvsZdsbxihaCMiOpyH7pTx_P11DBWdLLDbgPH9WjJaOkz_=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/1eUFsUnNyqPDzzgF6",
  },

  {
    id: 6,
    name: "Threeranat Pimpa",
    rating: 5,
    comment: "Perfect place, Friendly barbers and reasonable price",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjXE2acGwLdGOSnFaXfPkuPQI8Z2f91ayaIoNtyjz8mPGOeH8Q=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/fCSnFcPoqw6MhjxQA",
  },
  {
    id: 7,
    name: "วิสุทธิ์ พันธุ์พณาสกุล",
    rating: 5,
    comment: "ร้านบรรยากาศดี ช่างอัธยาศัยดี ตัดออกมาชอบ",
    profileImg:
      "https://lh3.googleusercontent.com/a/ACg8ocKnzZnX9YZXb1Q5_6y-gfleknDk4WYucsK43C7ubSTiF4jemA=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/DpKjui2hRp6LLaaB6",
  },
  {
    id: 8,
    name: "Dat Tran",
    rating: 5,
    comment: "Good price and nice staff. Solid value with great cut.",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjXhY0t4y9xwxRllDIiKQEph_eOufN8bOXV1Zu5Geuk9Mmmv70pe=w72-h72-p-rp-mo-ba3-br100",
    reviewLink: "https://maps.app.goo.gl/wdU7c2Z1NYGuVmfs6",
  },
  {
    id: 9,
    name: "ธีระวิช สุดทาง",
    rating: 5,
    comment:
      "ตัดโอเครมากครับชอบมาก ตามมาจากเพท อินสตาเเกรม ร้านสวยน่านั่ง เพลงเพราะ เจ้าของร้านบริการดี ขอบคุณตลอดเลย ช่างตัดดีเกินกว่าที่คิดไว้ โดยรวม ชอบมากครับ จะเเนะนำเพื่อนมาตัดอีก แนะนำเลย",
    profileImg:
      "https://lh3.googleusercontent.com/a/ACg8ocJ-C92IV5-DsvbmuRtngqTUCKJUkvcg3RDnTU9pNMQS0vzk8w=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/NXYRvReCBWBz7NpN8",
  },
  {
    id: 10,
    name: "Looktarn.",
    rating: 5,
    comment:
      "แนะนำร้านนี้เลยค่ะทุกคน ตัดอย่างสวย เหมือนได้สาใหม่ พนักงานพูดจาดีทุกคนนะคะ  แล้วแนะนำทรงผมให้เข้ากับสไตล์แต่ละคน 🥹🥰",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjXzTeaLVSzS10rVzsDeLeozV34w9hBaX1mV8cuLKjNmPV4QpaN1=w72-h72-p-rp-mo-br100",
    reviewLink: "https://maps.app.goo.gl/aH2tRoUF7Q1xTBCR7",
  },
];

export default function Reviews() {
  return (
    <div className="relative mx-auto mb-6 text-center mt-6">
      <h2 className="text-2xl font-bold mb-4">รีวิวจากลูกค้า</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="relative p-4 bg-white rounded-lg shadow-lg text-left h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src={review.profileImg}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-yellow-500">
                      {"⭐".repeat(review.rating)}
                    </p>
                  </div>
                </div>
                <p
                  className="mt-2 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: review.comment }}
                />
              </div>
              <div className="mt-4 text-right">
                <a
                  href={review.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  ดูรีวิวต้นฉบับ
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`} />
        <div className={`swiper-button-next ${styles.swiperButtonNext}`} />
      </Swiper>
    </div>
  );
}
