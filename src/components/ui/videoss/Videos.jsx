import React from "react";
import "./videos.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import videos from "../../../assets/data/videos";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className="videos">
      <div className="clients-top">
        <h2 className="clients-title">{t("Video")}</h2>
        <NavLink to="/allvideo">
          <button className="button">{t("allVideos")}</button>
        </NavLink>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Autoplay]}
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
