import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ourTeam.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Navigation, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import qiz1 from "../../../assets/img/qiz1.png";
import qiz2 from "../../../assets/img/qiz2.png";
import qiz3 from "../../../assets/img/qiz3.png";
import qiz4 from "../../../assets/img/qiz4.png";
import qiz5 from "../../../assets/img/qiz5.png";
import qiz6 from "../../../assets/img/qiz6.png";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      name: t("team.members.0.name"),
      position: t("team.members.0.position"),
      image: qiz1,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
    {
      id: 2,
      name: t("team.members.1.name"),
      position: t("team.members.1.position"),
      image: qiz2,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
    {
      id: 3,
      name: t("team.members.2.name"),
      position: t("team.members.2.position"),
      image: qiz3,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
    {
      id: 4,
      name: t("team.members.3.name"),
      position: t("team.members.3.position"),
      image: qiz4,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
    {
      id: 5,
      name: t("team.members.4.name"),
      position: t("team.members.4.position"),
      image: qiz5,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
    {
      id: 6,
      name: t("team.members.5.name"),
      position: t("team.members.5.position"),
      image: qiz6,
      instagram: "https://www.instagram.com/_kadyrovv0_6/",
      telegram: "https://t.me/dark_net_chik001",
      phone: "tel:+998507189807",
    },
  ];

  return (
    <div className="ourteam">
      <div className="ourteam-wrapper">
        <div className="clients-top ourteam-top">
          <div>
            <h2 className="clients-title ourteam-title">{t("team.title")}</h2>
            <h2 className="clients-text text">{t("team.description")}</h2>
          </div>
          <NavLink to="/allmembers">
            <button className="button">{t("team.full_list_button")}</button>
          </NavLink>
        </div>

        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".ourteam-next",
              prevEl: ".ourteam-prev",
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
          >
            {data?.map((elem) => (
              <SwiperSlide key={elem.id}>
                <div>
                  <div className="ourteam-picture">
                    <img src={elem.image} alt="team" className="ourteam-img" />
                  </div>
                  <div className="ourteam-member">
                    <div className="ourteam-box">
                      <h4 className="ourteam-name">{elem.name}</h4>
                      <p className="ourteam-text">{elem.position}</p>
                    </div>
                    <div className="ourteam-icons">
                      <a href={elem.instagram} className="ourteam-link">
                        <InstagramIcon style={{ fontSize: 24 }} />
                      </a>
                      <a href={elem.telegram} className="ourteam-link">
                        <TelegramIcon style={{ fontSize: 24 }} />
                      </a>
                      <a href={elem.phone} className="ourteam-link">
                        <PhoneIcon style={{ fontSize: 24 }} />
                      </a>
                    </div>
                    <button className="button">{t("team.Baholash")}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="ourteam-prev">
            <button>‹</button>
          </div>
          <div className="ourteam-next">
            <button>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
