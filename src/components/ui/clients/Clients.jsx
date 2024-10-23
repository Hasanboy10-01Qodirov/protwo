import React, { useState } from "react";
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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <h2 className="clients-title">{t("clients.trusted_clients")}</h2>
          <p className="clients-text">{t("clients.continue")}</p>
        </div>
        <button className="button" onClick={handleClickOpen}>
          {t("clients.become_client")}
        </button>
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {client.map((elem) => (
          <SwiperSlide key={elem.id}>
            <a
              href={elem.href}
              target="_blank"
              rel="noopener noreferrer"
              className="clients-client"
            >
              <img src={elem.img} alt={elem.name} className="clients-img" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {t("clients.become_client")}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label={t("clients.name")}
            placeholder={t("clients.name_label")}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="dense"
            label={t("clients.email_or_telegram")}
            placeholder={t("clients.email_or_telegram")}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="dense"
            label={t("clients.phone_number")}
            placeholder={t("clients.phone_label")}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="dense"
            label={t("clients.your_company")}
            placeholder={t("clients.your_company")}
            variant="outlined"
          />
          <button className="button">{t("clients.become_client")}</button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clients;
