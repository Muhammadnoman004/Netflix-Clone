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

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  return (
    <>
      <section className="SwiperSection">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={5.5}
          slidesPerGroup={5}
          speed={1000}
          spaceBetween={40}
          initialSlide={0}
          pagination={{
            type: "fraction",
          }}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="NavigationBtn1 NavigationBtn" onClick={handlePrev}>
            <button aria-label="Previous" class="default-ltr-cache-tyn8ct">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronLeftStandard"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
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

          <div className="NavigationBtn2 NavigationBtn" onClick={handleNext}>
            <button aria-label="Next" class="default-ltr-cache-tyn8ct">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronRightStandard"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
}
