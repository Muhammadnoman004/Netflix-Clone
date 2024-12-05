import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingImg_1 from "../assets/trendingImg1.webp";
import TrendingImg_2 from "../assets/trendingImg2.webp";
import TrendingImg_3 from "../assets/trendingImg3.webp";
import TrendingImg_4 from "../assets/trendingImg4.webp";
import TrendingImg_5 from "../assets/trendingImg5.webp";
import TrendingImg_6 from "../assets/trendingImg6.webp";
import TrendingImg_7 from "../assets/trendingImg7.webp";
import TrendingImg_8 from "../assets/trendingImg8.webp";
import TrendingImg_9 from "../assets/trendingImg9.webp";
import TrendingImg_10 from "../assets/trendingImg10.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <section className="SwiperSection">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={5.5}
          slidesPerGroup={5}
          speed={1000}
          spaceBetween={40}
          initialSlide={0}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_1} alt="" />
            <span className="imagesNo">1</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_2} alt="" />
            <span className="imagesNo">2</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_3} alt="" />
            <span className="imagesNo">3</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_4} alt="" />
            <span className="imagesNo">4</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_5} alt="" />
            <span className="imagesNo">5</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_6} alt="" />
            <span className="imagesNo">6</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_7} alt="" />
            <span className="imagesNo">7</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_8} alt="" />
            <span className="imagesNo">8</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_9} alt="" />
            <span className="imagesNo">9</span>
          </SwiperSlide>
          <SwiperSlide className="Swiper">
            <img className="Swiper" src={TrendingImg_10} alt="" />
            <span className="imagesNo">10</span>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
