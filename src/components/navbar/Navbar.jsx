import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next hook

const Navbar = () => {
  const { t } = useTranslation(); // Use the hook
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-wrapper">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link">
              {t("home")} {/* Asosiy */}
            </NavLink>
          </li>
          <li className="navbar-item dropdown">
            <a className="navbar-link">{t("services")}</a> {/* Xizmatlar */}
            <ul className="dropdown-menu">
              <li>
                <a href="#contact">{t("adsOnBuses")}</a>{" "}
                {/* Avtobuslarda reklama */}
              </li>
              <hr />
              <li>
                <a href="#contact">{t("adsOnLedScreens")}</a>{" "}
                {/* Led ekranlarda reklama */}
              </li>
              <hr />
              <li>
                <a href="#reviews">{t("adsOnBillboards")}</a>{" "}
                {/* Bilboardlarda reklama */}
              </li>
              <hr />
              <li>
                <a href="#reviews">{t("roadAds")}</a>{" "}
                {/* Katta yo'lda reklama */}
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link">
              {t("aboutUs")} {/* Biz Haqimizda */}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link">
              {t("contact")} {/* Kontakt */}
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/jobs" className="navbar-link">
              {t("vacancy")} {/* Vakansiya */}
            </NavLink>
          </li>
          <li className="navbar-item">
            <a href="#reviews" className="navbar-link">
              {t("reviews")} {/* Sharhlar */}
            </a>
          </li>
        </ul>
        <div className="navbar-center" style={{ position: "relative" }}>
          <i className="navbar-icon">
            <SearchOutlinedIcon />
          </i>
          <ReactTyped
            strings={[
              t("adsOnBuses"), // "Avtobuslarda reklama"
              t("adsOnLedScreens"), // "Led ekranlarda reklama"
              t("adsOnBillboards"), // "Bilboardlarda reklama"
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input className="navbar-input" />
          </ReactTyped>
        </div>
        <div className="navbar-right">
          <div className="navbar-connection">
            <div className="navbar-time">
              <i className="navbar-watch">
                <WatchLaterOutlinedIcon />
              </i>
              <p className="navbar-text">{t("workingHours")}</p>
            </div>
            <div className="navbar-call">
              <i className="navbar-phone">
                <PhoneOutlinedIcon />
              </i>
              <a href="tel:998507189807" className="navbar-text">
                +998 50 718 98 07
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-mode" onClick={toggleMode}>
              {isDarkMode ? (
                <LightModeIcon className="navbar-light" />
              ) : (
                <NightsStayIcon className="navbar-dark" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
