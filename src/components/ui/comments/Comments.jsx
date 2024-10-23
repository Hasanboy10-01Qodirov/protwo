import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./comments.scss";
import { Autoplay } from "swiper/modules";
import EditNoteIcon from "@mui/icons-material/EditNote";
import qiz1 from "../../../assets/img/qiz1.png";
import qiz2 from "../../../assets/img/qiz2.png";
import qiz3 from "../../../assets/img/qiz3.png";
import qiz4 from "../../../assets/img/qiz4.png";
import qiz5 from "../../../assets/img/qiz5.png";
import qiz6 from "../../../assets/img/qiz6.png";
import { useTranslation } from "react-i18next";

const initialCommentsData = [
  {
    id: 1,
    name: "Alisa",
    position: "Dizayner",
    image: qiz1,
    date: "12.08.2023 13:11",
    text: "Good.",
    rate: 4,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
  {
    id: 2,
    name: "Mira",
    position: "Android Dasturchi",
    image: qiz2,
    date: "14.08.2023 16:45",
    text: "Alo darajadagi xizmat uchun rahmat.",
    rate: 4,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
  {
    id: 3,
    name: "Lisa",
    position: "Secretar",
    image: qiz3,
    date: "14.08.2023 16:52",
    text: "Foydali xizmatlaringiz uchun rahmat.",
    rate: 4,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
  {
    id: 4,
    name: "Pem",
    position: "Maxsulot Manageri",
    image: qiz4,
    date: "12.09.2023 05:14",
    text: "nhnh.",
    rate: 3,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
  {
    id: 5,
    name: "Nasha",
    position: "Bloger",
    image: qiz5,
    date: "17.02.2008 20:20",
    text: "Siz aynan biz hohlagandek xizmat qildingiz.",
    rate: 5,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
  {
    id: 6,
    name: "Feruza",
    position: "Savdo bo'limi boshlig'i",
    image: qiz6,
    date: "17.02.2008 20:20",
    text: "Chidasa boladi, shunisiga ham rahmat.",
    rate: 3,
    instagram: "https://www.instagram.com/_kadyrovv0_6/",
    telegram: "https://t.me/dark_net_chik001",
    phone: "tel:+998507189807",
  },
];

const Comments = () => {
  const { t } = useTranslation(); // useTranslation hookini chaqiramiz
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    text: "",
    rate: 0,
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleRatingChange = (rate) => {
    setNewComment({ ...newComment, rate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentData = {
      ...newComment,
      id: commentsData.length + 1,
      date: new Date().toLocaleString(),
      image: qiz1,
    };
    setCommentsData([...commentsData, newCommentData]);
    setNewComment({ name: "", text: "", rate: 0 });
    closeModal();
  };

  return (
    <div className="comments" id="reviews">
      <div className="comments__wrapper">
        <div className="comments__flex">
          <h2 className="comments__title">
            <span className="comments__title--highlight">
              {t("comments.title")}
            </span>
            {t("comments.subtitle")}
          </h2>
          <button className="button comments__btn" onClick={openModal}>
            <EditNoteIcon />
            {t("comments.writeReview")}
          </button>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
        >
          {commentsData.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="comments__item">
                <div className="comments__header">
                  <div className="comments__box">
                    <img
                      src={comment.image}
                      alt={comment.name}
                      className="comments__avatar"
                    />
                    <div className="comments__info">
                      <h3 className="comments__name">{comment.name}</h3>
                      <p className="comments__date">{comment.date}</p>
                    </div>
                  </div>
                  <div className="comments__rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        style={{
                          color: index < comment.rate ? "#09a" : "#ddd",
                        }}
                        className="comments__star"
                      />
                    ))}
                  </div>
                </div>
                <p className="comments__text">{comment.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isModalOpen && (
          <div className="comments__modal">
            <div className="comments__modal-content">
              <button className="comments__modal-close" onClick={closeModal}>
                &times;
              </button>
              <h2>{t("comments.writeReview")}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  {t("comments.name")}
                  <input
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  {t("comments.rating")}
                  <div className="comments__rating-input">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        style={{
                          color: index < newComment.rate ? "#00c3ff" : "#ccc",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRatingChange(index + 1)}
                      />
                    ))}
                  </div>
                </label>
                <label>
                  {t("comments.feedback")}
                  <textarea
                    name="text"
                    value={newComment.text}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </label>
                <button type="submit" className="button">
                  {t("comments.submit")}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
