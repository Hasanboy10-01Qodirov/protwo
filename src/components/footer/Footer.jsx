import React from "react";
import "./footer.scss";
import logo from "../../assets/img/logo.png";
import discord from "../../assets/img/discord.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import vk from "../../assets/img/vk.png";
import whatsapp from "../../assets/img/whatsapp.png";
import youtube from "../../assets/img/youtube.png";
import telegram from "../../assets/img/telegram.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <img src={logo} alt="" className="footer-logo" />
          <div className="footer-info">
            <div className="footer-box">
              <div className="footer-icon">
                <CalendarMonthOutlinedIcon />
              </div>
              <a className="footer-name" target="_blank" rel="noreferrer">
                {t("workingHours")}
              </a>
            </div>
            <div className="footer-box">
              <div className="footer-icon">
                <LocationOnOutlinedIcon />
              </div>
              <a className="footer-name" target="_blank" rel="noreferrer">
                {t("footer.location")}
              </a>
            </div>
            <div className="footer-box">
              <div className="footer-icon">
                <MailOutlinedIcon />
              </div>
              <div className="footer-gmail">
                <a
                  href="mailto:hasanboikadyrov0828@gmail.com"
                  className="footer-name"
                >
                  info@inoutgroup.uz
                </a>
                <a
                  href="mailto:hkadyrov.3006@gmail.com"
                  className="footer-name"
                >
                  hkadyrov.3006@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <p className="footer-our-smm">{t("footer.socials")}</p>
            <div className="footer-media">
              <a
                href="https://t.me/dark_net_chik001"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="" className="footer-smm" />
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="" className="footer-smm" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090272936864&locale=ru_RU"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" className="footer-smm" />
              </a>
              <a
                href="https://www.instagram.com/_kadyrovv0_6/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="" className="footer-smm" />
              </a>
              <a
                href="https://www.youtube.com/@HasanQodirov-xr6xf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="" className="footer-smm" />
              </a>
              <a
                href="https://discord.com/login"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discord} alt="" className="footer-smm" />
              </a>
              <a href="https://vk.com/" target="_blank" rel="noreferrer">
                <img src={vk} alt="" className="footer-smm" />
              </a>
            </div>
            <div className="footer-tel">
              <a href="tel:+998507189807" className="footer-number">
                +998 (50) 718 98 07
              </a>
              <a href="tel:+998935305612" className="footer-number">
                +998 (93) 530 56 12
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={logo} alt="footer-logo" className="footer-img" />
          <p className="footer-title">{t("footer.team")}</p>
        </div>
        <div className="footer-right">{t("footer.copyright")}</div>
      </div>
    </div>
  );
};

export default Footer;
