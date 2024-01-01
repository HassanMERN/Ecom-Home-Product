import React from "react";
import jbl from "../images/jbl.png";

function Banner() {
  return (
    <div className="Banner ">
      <div className="Banner-content row">
        <div className="banner-content-left col-lg-6">
          <div className="banner-title">Categories</div>
          <div className="banner-text">Enhance Your Music Experience</div>
          <div className="timer-container col-lg-4 d-flex">
            <div className="stamp-type circle-stamp">
              {" "}
              <span className="stamp-number">23</span>
              <span className="stamp-label">Hours</span>
            </div>{" "}
            <div className="stamp-type circle-stamp">
              <span className="stamp-number">03</span>
              <span className="stamp-label">Days</span>
            </div>
            <div className="stamp-type circle-stamp">
              {" "}
              <span className="stamp-number">19</span>
              <span className="stamp-label">Minutes</span>
            </div>{" "}
            <div className="stamp-type circle-stamp">
              {" "}
              <span className="stamp-number">56</span>
              <span className="stamp-label">Seconds</span>
            </div>
          </div>
          <div className="btn-container d-flex">
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
        <div className="banner-content-right col-lg-6">
          <div className="banner-image-container d-flex">
            <img src={jbl} alt="jbl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
