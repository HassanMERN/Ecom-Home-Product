import React from "react";
import { Trending } from "../jsonData/Trending";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import TrendingItem from "../components/TrendingItem";

function FlashSales() {
  function scrollLeft() {
    var container = document.getElementsByClassName("flash-slider")[0];
    container.scrollLeft -= 250;
  }
  function scrollRight() {
    var container = document.getElementsByClassName("flash-slider")[0];
    container.scrollLeft += 250;
  }
  return (
    <div className="Explore-products container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">Today's</div>
      </div>

      <div className="section-header row">
        <div className="title col-lg-3">Flash Sales</div>
        <div className="timer-container col-lg-4 d-flex">
          <div className="stamp-type">
            <span className="stamp-label">Days</span>
            <span className="stamp-number">03</span>
          </div>
          <div className="elipse-container">
            <div className="elipse"></div>
            <div className="elipse"></div>
          </div>
          <div className="stamp-type">
            {" "}
            <span className="stamp-label">Hours</span>
            <span className="stamp-number">23</span>
          </div>
          <div className="elipse-container">
            <div className="elipse"></div>
            <div className="elipse"></div>
          </div>{" "}
          <div className="stamp-type">
            {" "}
            <span className="stamp-label">Minutes</span>
            <span className="stamp-number">19</span>
          </div>
          <div className="elipse-container">
            <div className="elipse"></div>
            <div className="elipse"></div>
          </div>{" "}
          <div className="stamp-type">
            {" "}
            <span className="stamp-label">Seconds</span>
            <span className="stamp-number">56</span>
          </div>
        </div>
        <div className="arrow-container col-lg-3 d-flex"></div>
        <div className="arrow-container col-lg-2 d-flex">
          <div className="navigation-arrow-container">
            <RiArrowLeftLine
              onClick={() => scrollLeft()}
              className="navigation-arrow arrow-left"
            />
          </div>
          <div className="navigation-arrow-container">
            <RiArrowRightLine
              onClick={() => scrollRight()}
              className="navigation-arrow arrow-right"
            />
          </div>
        </div>
      </div>

      <div className="Trending-Slides-Wrapper d-flex">
        <div className="trending-slider flash-slider d-flex">
          {Trending.map((item, index) => {
            return (
              <TrendingItem
                showSlashed={true}
                showDiscountRate={false}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>

      <div className="view-all-btn-wrapper d-flex">
        <div className="btn-container col-lg-3 d-flex">
          <button className="view-btn">View All Products</button>
        </div>
      </div>
    </div>
  );
}

export default FlashSales;
