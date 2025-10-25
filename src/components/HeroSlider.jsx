import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/OIP_1.webp",
      title: "Keep Your Pets Warm This Winter",
      description:
        "Expert care services for your furry friends during cold season",
    },
    {
      id: 2,
      image: "/assets/OIP_2.webp",
      title: "Professional Winter Grooming",
      description: "Special treatments to protect your pet from harsh weather",
    },
    {
      id: 3,
      image: "/assets/OIP.webp",
      title: "Cozy Winter Clothing Collection",
      description: "Stylish and comfortable outfits for all pet sizes",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="h-[400px] md:h-[500px] lg:h-[600px] rounded-xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl animate__animated animate__fadeInUp">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;