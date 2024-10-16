import React, { useReducer } from "react";
import "./contact.scss";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import { Button } from "@mui/material";
import contactImage from "../../../assets/img/admin.png";

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
      toast.error("Please enter your name", {
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
      toast.error("Please enter a valid email", {
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
      toast.error("Please enter a valid phone number", {
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
        toast.success("We will contact you soon", {
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
        toast.error("An error occurred, please try again", {
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
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-parts">
          <div className="contact-left">
            <h1 className="contact-title">Bizga qanday savolingiz bor?</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* <div className="contact-inputs"> */}
              <div className="contact-box">
                <label htmlFor="name" className="contact-label">
                  Ism
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="email" className="contact-label">
                  Elektron pochta yoki Telegram
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Elektron pochtangizni yoki Telegramni kiriting"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="number" className="contact-label">
                  Telefon raqami
                </label>
                <input
                  id="number"
                  name="number"
                  type="tel"
                  placeholder="+998"
                  className="contact-input"
                  value={formData.number}
                  onChange={handleValue}
                  required
                />
              </div>
              {/* </div> */}
              <div className="contact-box">
                <label htmlFor="message" className="contact-label">
                  Sizning xabaringiz
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Sizning xabaringiz"
                  className="contact-message"
                  value={formData.message}
                  onChange={handleValue}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                className="contact-btn"
                type="submit"
              >
                Yuborish
              </Button>
            </form>
          </div>
          <div className="contact-right">
            <img src={contactImage} alt="Contact" className="contact-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
