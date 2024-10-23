import React, { useEffect, useState } from "react";
import "./header.scss";
import logo from "../../assets/img/logo.png";
import uz from "../../assets/img/uz.png";
import en from "../../assets/img/en.png";
import ru from "../../assets/img/ru.png";
import { Button } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("uz");

  const handleLanguages = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "uz";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div className="header">
      <div className="header-wrapper">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-connection">
          <Button color="inherit" className="header-contact">
            <SendOutlinedIcon />
            <p className="header-text">{t("telegram")}</p>
          </Button>
          <Button color="inherit" className="header-contact">
            <DownloadOutlinedIcon />
            <p className="header-text">{t("presentation")}</p>
          </Button>
          <Button color="inherit" className="header-contact">
            <SmsOutlinedIcon />
            <p className="header-text">{t("applyNow")}</p>
          </Button>
        </div>

        <div className="header-languages">
          <Button
            className={`header-language ${language === "uz" ? "active" : ""}`}
            variant="text"
            onClick={() => handleLanguages("uz")}
          >
            <img src={uz} alt="Uzbek" className="header-flag" />
            <span>Uz</span>
          </Button>
          <Button
            className={`header-language ${language === "ru" ? "active" : ""}`}
            variant="text"
            onClick={() => handleLanguages("ru")}
          >
            <img src={ru} alt="Russian" className="header-flag" />
            <span>Ru</span>
          </Button>
          <Button
            className={`header-language ${language === "en" ? "active" : ""}`}
            variant="text"
            onClick={() => handleLanguages("en")}
          >
            <img src={en} alt="English" className="header-flag" />
            <span>En</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
