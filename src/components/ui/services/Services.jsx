import React from "react";
import "./services.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import bus from "../../../assets/img/bus.png";
import catOnLed from "../../../assets/img/kat.png";
import ЗD from "../../../assets/img/3d.png";
import HD from "../../../assets/img/snakers.png";
import fourK from "../../../assets/img/5d.png";
import islamic from "../../../assets/img/assalam.png";
import byd from "../../../assets/img/bydsong.png";
import { useTranslation } from "react-i18next";

const ServicesSlider = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: bus,
      name: t("business.title1"),
      description: t("business.description1"),
      text: "Shaxar Avtobuslarining tashqi tomoniga raklaangizni joylashtirib beraiz Toshkent shahridagi “MAN” va...",
    },
    {
      id: 2,
      img: catOnLed,
      name: t("business.title2"),
      description: t("business.description2"),
      text: "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum sanoat bo'lgan ...",
    },
    {
      id: 3,
      img: ЗD,
      name: t("business.title3"),
      description: t("business.description3"),
      text: "Kompaniya tashqi reklama sohasida eng keng ko'lamli xizmatlarni taqdim etishga, poligrafiya, poligrafiya va...",
    },
    {
      id: 4,
      img: HD,
      name: t("business.title4"),
      description: t("business.description4"),
      text: "Z-Edge 4K monitor, U28I4K 28 dyuymli IPS monitor Ultra HD 3840x2160 IPS oʻyin monitori, 300 cd/m², 60Hz yangilanish...",
    },
    {
      id: 5,
      img: fourK,
      name: t("business.title5"),
      description: t("business.description5"),
      text: `Z-Edge U27P4K 27-дюймовый игровой монитор Ultra HD 4K, частота ...`,
    },
    {
      id: 6,
      img: islamic,
      name: t("business.title6"),
      description: t("business.description6"),
      text: "In fiction, the planet Mars, fourth from the Sun, has appeared as a setting in at least 5,000 works, portrayed differently as planetary...",
    },
    {
      id: 7,
      img: byd,
      name: t("business.title7"),
      description: t("business.description7"),
      text: "In Gabon, President Ali Bongo Ondimba (pictured) is deposed by a military coup shortly after his re-election. A business jet...",
    },
  ];
  return (
    <div className="services">
      <div className="services-slider">
        <h2 className="clients-title" style={{ marginBottom: "30px" }}>
          {t("business.title")}
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
                  <p className="services-text">{elem.description}</p>
                  <button className="button">{t("business.more")}</button>
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
