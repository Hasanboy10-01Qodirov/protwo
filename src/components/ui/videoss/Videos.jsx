import React from "react";
import "./videos.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import videos from "../../../assets/data/videos";

const PlayIcon = () => (
  <svg
    className="videos-play-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Videos = () => {
  return (
    <div className="videos">
      <div className="clients-top">
        <h2 className="clients-title">Video</h2>
        <button className="button">Barchasini ko'rish</button>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[ Navigation, Autoplay]}
      >
        {videos?.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="videos-video">
              <img src={elem.img} alt="" className="videos-img" />
              <div className="videos-overlay">
                <PlayIcon />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videos;
