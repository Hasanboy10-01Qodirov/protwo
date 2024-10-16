import React, { useState } from "react";
import "../sass/about.scss";
import img from "../assets/img/about-img.png";
import telegram from "../assets/img/telegram.png";
import whatsapp from "../assets/img/whatsapp.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import youtube from "../assets/img/youtube.png";
import discord from "../assets/img/discord.png";
import vk from "../assets/img/vk.png";
import about from "../assets/data/about";
import WestIcon from "@mui/icons-material/West";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="about">
      <div className="about-wrapper">
        <NavLink to="/" className="navlink">
          <button className="about-back">
            <WestIcon fontSize="small" className="icon" />
            Orqaga
          </button>
        </NavLink>
        <div className="about-parts">
          <div className="about-top">
            <img src={img} alt="" className="about-img" />
          </div>
          <div className="about-center">
            <h3 className="clients-title">
              Biz <p>haqimizda</p>
            </h3>
            <p className="about-description">
              InOut reklama joylashtirish xizmatlarining keng assortimentini
              taklif etadi, eng ko'p talab qilinadigani Toshkentdagi tashqi
              reklamadir. Siz buyurtma berishingiz va reklamalarni LED
              ekranlarga, shuningdek, laytboks va bannerlarga joylashtirishingiz
              mumkin. Reklama imkon qadar tezroq, kafolatli va hamyonbop narxda
              amalga oshiriladi. ANIQ FOYDA.
            </p>
            <p className="about-description">
              Tashqi reklama maqsadli auditoriyani kerakli ma'lumotlar bilan
              ta'minlashning arzon va juda samarali usulidir. Dastlabki
              ma'lumotlarni taqdim etish uchun tashrif qog'ozidan foydalanish
              maqsadli auditoriyangizning e'tiborini jalb qilish imkonini
              beradi. LED ekranlardan tashqi reklama sifatida foydalanish eng
              istiqbolli formatlardan biri bo'lib, ayni paytda o'z tovarlarini
              (xizmatlarini) reklama qiluvchi kompaniya yoki tashkilotning
              yuqori maqomini ko'rsatadi.
            </p>
          </div>
          <div className="about-bottom">
            <h3 className="clients-title">
              Bizning <p>qisqa statistika</p>
            </h3>
            <div className="about-counter">
              <VisibilitySensor
                onChange={(isVisible) => setIsVisible(isVisible)}
                partialVisibility
              >
                {({ isVisible }) =>
                  about?.map((elem) => (
                    <div className="about-count" key={elem.id}>
                      <h2 className="about-number">
                        <CountUp
                          start={isVisible ? 0 : null}
                          end={elem.number}
                          duration={1}
                          suffix={elem.char}
                        />
                      </h2>
                      <p className="about-text">{elem.text}</p>
                    </div>
                  ))
                }
              </VisibilitySensor>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <p className="footer-our-smm about-smm">
            Bizni ijtimoiy tarmoqlardan toping
          </p>
          <div className="footer-media">
            <a href="https://t.me/dark_net_chik001" target="_blank">
              <img src={telegram} alt="" className="footer-smm" />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <img src={whatsapp} alt="" className="footer-smm" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090272936864&locale=ru_RU"
              target="_blank"
            >
              <img src={facebook} alt="" className="footer-smm" />
            </a>
            <a href="https://www.instagram.com/_kadyrovv0_6/" target="_blank">
              <img src={instagram} alt="" className="footer-smm" />
            </a>
            <a
              href="https://www.youtube.com/@HasanQodirov-xr6xf"
              target="_blank"
            >
              <img src={youtube} alt="" className="footer-smm" />
            </a>
            <a href="https://discord.com/login" target="_blank">
              <img src={discord} alt="" className="footer-smm" />
            </a>
            <a href="https://vk.com/" target="_blank">
              <img src={vk} alt="" className="footer-smm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
