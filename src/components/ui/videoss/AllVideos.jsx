import React from "react";
import "./videos.scss";
import data from "../../../assets/data/videos";
import { useTranslation } from "react-i18next";
const PlayIcon = () => (
  <svg
    className="videos-play-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);
const AllVideos = () => {
  const { t } = useTranslation();
  return (
    <div className="videos">
      <h2 className="clients-title">{t("Video")}</h2>
      <div className="videos-wrapper">
        {data?.map((elem) => (
          <div key={elem.id} className="videos-box">
            <div className="videos-video">
              <img src={elem.img} alt="" className="videos-img" />
              <div className="videos-overlay">
                <PlayIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
