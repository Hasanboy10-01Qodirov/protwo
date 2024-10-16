import React from "react";
import "./services.scss";
import data from "../../../assets/data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ServicesSlider = () => {
  return (
    <div className="services">
      <div className="services-slider">
        <h2 className="clients-title" style={{ marginBottom: "30px" }}>
          Biz nima qilamiz
        </h2>
        <Swiper
          spaceBetween={35}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {data?.map((elem) => (
            <SwiperSlide key={elem.id}>
              <div className="services-item">
                <img src={elem.img} alt="" className="services-img" />
                <div className="services-box">
                  <h4 className="services-name">{elem.name}</h4>
                  <p className="services-text">{elem.text}</p>
                  <button className="button">Ko'proq</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSlider;
