import React from "react";
import "./clients.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import click from "../../../assets/img/click.png";
import payme from "../../../assets/img/payme.png";
import uzum from "../../../assets/img/uzum.png";
import fanta from "../../../assets/img/fanta.png";
import pepsi from "../../../assets/img/pepsi.png";
import joyda from "../../../assets/img/joyda.png";
import cola from "../../../assets/img/cola.png";
import turan from "../../../assets/img/turan.png";
import tturan from "../../../assets/img/teamturan.png";
import turanu from "../../../assets/img/turanu.png";
import dpt from "../../../assets/img/dpt.png";

const Clients = () => {
  const client = [
    { id: 1, img: click, href: "https://click.uz/ru", name: "Click Up" },
    { id: 2, img: payme, href: "https://payme.uz/", name: "PayMe" },
    { id: 3, img: uzum, href: "https://uzum.uz/", name: "Uzum" },
    { id: 4, img: fanta, href: "https://fanta.uz/", name: "Fanta" },
    { id: 5, img: pepsi, href: "https://pepsi.uz/", name: "Pepsi" },
    { id: 6, img: joyda, href: "https://joyda.uz/", name: "Joyda" },
    {
      id: 7,
      img: cola,
      href: "https://www.cocacolanederland.nl/",
      name: "Coca Cola",
    },
    { id: 8, img: turan, href: "https://turan.uz/", name: "Turan" },
    { id: 9, img: tturan, href: "https://turanteam.uz/", name: "Turan Team" },
    {
      id: 10,
      img: turanu,
      href: "https://turanteam.uz/",
      name: "Turan University",
    },
    { id: 11, img: dpt, href: "https://turanteam.uz/", name: "Turan D.P.T" },
  ];

  return (
    <div className="clients">
      <div className="clients-top">
        <div className="clients-box">
          <h2 className="clients-title">Ishonchli mijozlar</h2>
          <p className="clients-text">
            Davom etilmoqda... Sizning logoingiz uchun ham joy mavjud
          </p>
        </div>
        <button className="button">Mijoz bo'lish</button>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {client.map((elem) => (
          <SwiperSlide key={elem.id}>
            <a href={elem.href} className="clients-client">
              <img src={elem.img} alt={elem.name} className="clients-img" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
