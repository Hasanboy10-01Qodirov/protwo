import React, { useState } from "react";
import "./stats.scss";
import raketa from "../../../assets/img/raketa.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="stats">
      <div className="container">
        <div className="stats__container">
          <h2 className="stats__title">
            Bizda <span>raqamlar mavjud</span>
          </h2>
          <div className="stats__items">
            <VisibilitySensor
              onChange={(isVisible) => setIsVisible(isVisible)}
              partialVisibility
            >
              {({ isVisible }) => (
                <>
                  <div className="stats__item">
                    <span className="stats__number">
                      <CountUp
                        start={isVisible ? 0 : null}
                        end={20}
                        duration={1}
                      />
                      <p>+</p>
                    </span>
                    <p className="stats__description">Xodimlar soni</p>
                  </div>
                  <div className="stats__item">
                    <span className="stats__number">
                      <CountUp
                        start={isVisible ? 0 : null}
                        end={1672}
                        duration={1}
                      />
                      <p>+</p>
                    </span>
                    <p className="stats__description">
                      reklama kampaniyalarini boshladi
                    </p>
                  </div>
                  <div className="stats__item">
                    <span className="stats__number">
                      <CountUp
                        start={isVisible ? 0 : null}
                        end={1660}
                        duration={1}
                      />
                      <p>+</p>
                    </span>
                    <p className="stats__description">
                      muvaffaqiyatli holatlar
                    </p>
                  </div>
                  <img src={raketa} alt="Rocket" className="stats__rocket" />
                </>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
