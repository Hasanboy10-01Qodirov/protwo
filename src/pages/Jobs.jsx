import React from "react";
import "../sass/jobs.scss";
import { useTranslation } from "react-i18next";
const Jobs = () => {
  const { t } = useTranslation();
  const jobs = [
    {
      id: 1,
      name: t("vacancy1.call_center_operator"),
      konikma: " Ma'lumoti o'rta maxsus;",
      masuliyati:
        "Odamlar bilan yaxshi chiqisha olish va mijozlarni jalb qilish;",
      taklif: "Abetda issiq ovqat va yaxshi jamoa;",
    },
    {
      id: 2,
      name: t("vacancy1.web_designer"),
      konikma: " 3 yillik tajriba;",
      masuliyati: "",
      taklif: "",
    },
    {
      id: 3,
      name: t("vacancy1.logistician"),
      konikma: " dddddd;",
      masuliyati:
        "ending electronic messages, typically colaptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.",
      taklif: "",
    },
  ];
  return (
    <div className="jobs">
      <div className="jobs-wrapper">
        <h2 className="clients-title">{t("vacancy1.title")}</h2>
        <div className="jobs-parts">
          {jobs.map((elem) => (
            <div className="jobs-item" key={elem.id}>
              <h4 className="jobs-name">{elem.name}</h4>
              <div className="jobs-box">
                <p className="jobs-text">{t("vacancy1.required_skills")}</p>
                <div className="jobs-qator">
                  <div className="jobs-icon">✔</div>
                  <p className="jobs-text">
                    {t("vacancy1.experience")}: {elem.konikma}
                  </p>
                </div>
              </div>
              <button className="button">{t("vacancy1.more")}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
