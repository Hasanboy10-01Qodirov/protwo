import React, { useEffect, useState } from "react";
import "./stats.scss";
import raketa from "../../../assets/img/raketa.png";
const Stats = () => {
  const statsData = [
    { id: 1, label: "Xodimlar soni", target: 20 },
    { id: 2, label: "Reklama kampaniyalari", target: 1672 },
    { id: 3, label: "Muvaffaqiyatli holatlar", target: 1660 },
  ];

  return (
    <div className="stats">
      {statsData.map((stat) => (
        <StatItem key={stat.id} label={stat.label} target={stat.target} />
      ))}
    </div>
  );
};

const StatItem = ({ label, target }) => {
  const [count, setCount] = useState(0);
  const speed = 130;

  useEffect(() => {
    const updateCount = () => {
      let start = 0;
      const increment = target / speed;
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, 2);
    };

    updateCount();
  }, [target]);

  return (
    <div className="stats">
      <div className="stat-wrapper">
        <h2 className="stats-title">
          Bizda <p className="stats-tpart">raqamlar mavjud</p>
        </h2>
        <div className="stats-box">
          <div className="stats-item">
            <span className="number">{count}</span>+
            <p className="stats-text">{label}</p>
          </div>
        </div>
        <img src={raketa} alt="Raketa" className="stats-img" />
      </div>
    </div>
  );
};

export default Stats;
