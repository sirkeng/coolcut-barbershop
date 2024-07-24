"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Great service and friendly staff! Highly recommend this barbershop.",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVFZdxsPUec2a87SoF5BxrrDIiE7KQE2gsFZuMVSiH9iRwgc57=s72-c-rp-mo-br100",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Nice atmosphere and professional barbers.",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVFZdxsPUec2a87SoF5BxrrDIiE7KQE2gsFZuMVSiH9iRwgc57=s72-c-rp-mo-br100",
  },
  {
    id: 3,
    name: "Alex Johnson",
    rating: 5,
    comment: "Best haircut I've ever had!",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVFZdxsPUec2a87SoF5BxrrDIiE7KQE2gsFZuMVSiH9iRwgc57=s72-c-rp-mo-br100",
  },
  {
    id: 4,
    name: "Chris Lee",
    rating: 4,
    comment: "Good experience, will come again.",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVFZdxsPUec2a87SoF5BxrrDIiE7KQE2gsFZuMVSiH9iRwgc57=s72-c-rp-mo-br100",
  },
  {
    id: 5,
    name: "Pat Kim",
    rating: 5,
    comment: "Highly recommend this barbershop!",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUVFZdxsPUec2a87SoF5BxrrDIiE7KQE2gsFZuMVSiH9iRwgc57=s72-c-rp-mo-br100",
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
        modules={[Pagination, Navigation, Thumbs]}
        // className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-4 bg-white rounded-lg shadow-lg text-left">
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
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`} />
        <div className={`swiper-button-next ${styles.swiperButtonNext}`} />
      </Swiper>
    </div>
  );
}
