import React from "react";
import "../sass/jobs.scss";
import data from "../assets/data/jobs";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs-wrapper">
        <h2 className="clients-title">Ish joylari</h2>
        <div className="jobs-parts">
          {data.map((elem) => (
            <div className="jobs-item" key={elem.id}>
              <h4 className="jobs-name">{elem.name}</h4>
              <div className="jobs-box">
                <p className="jobs-text">Kerakli ko'nikmalar</p>
                <div className="jobs-qator">
                  <div className="jobs-icon">✔</div>
                  <p className="jobs-text">{elem.konikma}</p>
                </div>
              </div>
              <button className="button">Ko'proq</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
