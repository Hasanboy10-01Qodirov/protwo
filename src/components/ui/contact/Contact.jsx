import React, { useReducer } from "react";
import "./contact.scss";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import { Button } from "@mui/material";
import contactImage from "../../../assets/img/admin.png";
import { useTranslation } from "react-i18next"; // Importing useTranslation

const initialState = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Contact = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const { t } = useTranslation(); // Using the useTranslation hook

  const handleValue = (e) => {
    dispatch({
      type: "SET_FIELD_VALUE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error(t("clients.warning_message"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error(t("clients.warning_message"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      return;
    }

    if (!formData.number.trim() || isNaN(formData.number)) {
      toast.error(t("clients.warning_message"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      return;
    }

    const token = `6666263993:AAFW7rXsFZgO9XsXCtiCgaQrap6x20thS2M`;
    const chat_id = `6998760310`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: `Name: ${formData.name.trim()}, Email: ${formData.email.trim()}, Phone number: ${formData.number.trim()}, Message: ${formData.message.trim()}`,
      },
    })
      .then((data) => {
        toast.success(t("clients.success_message"), {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      })
      .catch((error) => {
        toast.error(t("clients.error_message"), {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      });

    e.target.reset();
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-parts">
          <div className="contact-left">
            <h1 className="contact-title">{t("contact1.question")}</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-box">
                <label htmlFor="name" className="contact-label">
                  {t("contact1.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact1.name")}
                  className="contact-input"
                  value={formData.name}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="email" className="contact-label">
                  {t("contact1.email_or_telegram")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact1.email_or_telegram")}
                  className="contact-input"
                  value={formData.email}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="number" className="contact-label">
                  {t("contact1.phone_number")}
                </label>
                <input
                  id="number"
                  name="number"
                  type="tel"
                  placeholder={t("contact1.phone_number")}
                  className="contact-input"
                  value={formData.number}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="message" className="contact-label">
                  {t("contact1.your_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder={t("contact1.your_message")}
                  className="contact-message"
                  value={formData.message}
                  onChange={handleValue}
                />
              </div>
              <button className="button" type="submit">
                {t("contact1.submit")}
              </button>
            </form>
          </div>
          <div className="contact-right">
            <img
              src={contactImage}
              alt={t("contact1.alt_text")}
              className="contact-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
