import React from "react";
import "./header.scss";
import logo from "../../assets/img/logo.png";
import uz from "../../assets/img/uz.png";
import en from "../../assets/img/en.png";
import ru from "../../assets/img/ru.png";
import { Button } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <img src={logo} alt="" className="header-logo" />
        <div className="header-connection">
          <Button color="inherit" className="header-contact">
            <SendOutlinedIcon />
            <p className="header-text">Telegram</p>
          </Button>
          <Button color="inherit" className="header-contact">
            <DownloadOutlinedIcon />
            <p className="header-text">Taqdimot (35 mb)</p>
          </Button>
          <Button color="inherit" className="header-contact">
            <SmsOutlinedIcon />
            <p className="header-text">Arizangizni yuboring</p>
          </Button>
        </div>
        <div className="header-languages">
          <Button className="header-language" variant="text">
            <img src={uz} alt="" className="header-flag" />
            <option value="uz">Uz</option>
          </Button>
          <Button className="header-language" variant="text">
            <img src={ru} alt="" className="header-flag" />
            <option value="ru">Ru</option>
          </Button>
          <Button className="header-language" variant="text">
            <img src={en} alt="" className="header-flag" variant="text" />
            <option value="en">En</option>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
