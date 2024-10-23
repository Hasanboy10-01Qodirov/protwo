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
import WestIcon from "@mui/icons-material/West";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const about = [
    {
      id: 1,
      number: "3",
      char: "+",
      name: "Yil",
      text: t("about.statistics.successful_teams"),
    },
    {
      id: 2,
      number: "24",
      char: "",
      name: "Xodimlar",
      text: t("about.statistics.working_in_company"),
    },
    {
      id: 3,
      number: "138",
      char: "",
      name: "Jamiyatlar",
      text: t("about.statistics.promoted_in_social_media"),
    },
    {
      id: 4,
      number: "336",
      char: "",
      name: "Sayt",
      text: t("about.statistics.developed_and_launched"),
    },
    {
      id: 5,
      number: "53",
      char: "",
      name: "Jamiyatlar",
      text: t("about.statistics.promoted_in_social_media"),
    },
    {
      id: 6,
      number: "218",
      char: "",
      name: "grafana",
      text: t("about.statistics.products_in_graph"),
    },
  ];
  return (
    <div className="about">
      <div className="about-wrapper">
        <NavLink to="/" className="navlink">
          <button className="about-back">
            <WestIcon fontSize="small" className="icon" />
            {t("back")}
          </button>
        </NavLink>
        <div className="about-parts">
          <div className="about-top">
            <img src={img} alt="" className="about-img" />
          </div>
          <div className="about-center">
            <h3 className="clients-title">{t("about.title")}</h3>
            <p className="about-description">
              {t("about.description.part1")} {t("about.description.part2")}.
            </p>
            <p className="about-description">
              {t("about.description.part3")} {t("about.description.part4")}
            </p>
          </div>
          <div className="about-bottom">
            <h3 className="clients-title">{t("about.statistics.title")}</h3>
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
          <p className="footer-our-smm about-smm">{t("about.find_us")}</p>
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
