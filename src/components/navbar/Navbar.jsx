import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-wrapper">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link">
              Asosiy
            </NavLink>
          </li>
          <li
            className={`navbar-item dropdown ${
              isDropdownActive ? "active" : ""
            }`}
            onClick={toggleDropdown}
          >
            <a className="navbar-link">Xizmatlar</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Xizmat 1</a>
              </li>
              <hr />
              <li>
                <a href="#">Xizmat 2</a>
              </li>
              <hr />
              <li>
                <a href="#">Xizmat 3</a>
              </li>
              <hr />
              <li>
                <a href="#">Xizmat 4</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link">
              Biz Haqimizda
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link">
              Kontakt
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/jobs" className="navbar-link">
              Vakansiya
            </NavLink>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Sharhlar
            </a>
          </li>
        </ul>
        <div className="navbar-center" style={{ position: "relative" }}>
          <i className="navbar-icon">
            <SearchOutlinedIcon />
          </i>
          <ReactTyped
            strings={[
              "Avtobuslarda reklama",
              "Led ekranlarda reklama",
              "Bilboardlarda reklama",
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
              <p className="navbar-text">9:00-17:00 du-ju</p>
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
