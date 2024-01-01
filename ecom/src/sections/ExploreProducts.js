import React from "react";
import { Trending } from "../jsonData/Trending";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import TrendingItem from "../components/TrendingItem";

function ExploreProducts() {
  function scrollLeft() {
    var containers = document.getElementsByClassName("explore-slider");
    Array.from(containers).forEach((element) => {
      element.scrollLeft -= 100;
    });
  }

  function scrollRight() {
    var containers = document.getElementsByClassName("explore-slider");
    Array.from(containers).forEach((element) => {
      element.scrollLeft += 100;
    });
  }
  return (
    <div className="Explore-products container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">Our Products</div>
      </div>

      <div className="section-header row">
        <div className="title col-lg-10">Explore Our Products</div>
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
        <div className="trending-slider explore-slider d-flex">
          {Trending.map((item, index) => {
            return (
              <TrendingItem
                showDiscountRate={false}
                item={item}
                index={index}
                showSlashed={true}
              />
            );
          })}
        </div>
        <div className="trending-slider explore-slider d-flex">
          {Trending.map((item, index) => {
            return (
              <TrendingItem
                showDiscountRate={false}
                item={item}
                index={index}
                showSlashed={true}
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

export default ExploreProducts;
