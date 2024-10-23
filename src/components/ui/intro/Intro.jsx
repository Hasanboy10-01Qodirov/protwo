import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./intro.scss";
import video from "../../../assets/img/video1.mp4";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PlayIcon = () => (
  <svg
    className="intro__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    className="intro__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M6 19h4V5H6zm8 0h4V5h-4z" />
  </svg>
);

const Intro = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setTimeout(() => setIsHovering(false), 2000);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) {
      setIsHovering(false);
    }
  }, [isPlaying]);

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__content">
          <h1 className="intro__title">{t("video2_title")}</h1>
          <button className="button" onClick={handleClickOpen}>
            {t("consultation_button")}
          </button>
        </div>
        <div
          className="intro__video-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <video className="intro__video" ref={videoRef} loop>
            <source src={video} type="video/mp4" />
          </video>
          {(isHovering || !isPlaying) && (
            <div className="intro__icon-container" onClick={togglePlay}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
          )}
        </div>
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
            <button className="button">{t("send_button")}</button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Intro;
