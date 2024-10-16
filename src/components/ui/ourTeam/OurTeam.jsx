import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ourTeam.scss";
import data from "../../../assets/data/teamMembers";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Navigation, Autoplay } from "swiper/modules";

const OurTeam = () => {
  return (
    <div className="ourteam">
      <div className="ourteam-wrapper">
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
                  <button className="button">Baholash</button>
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
