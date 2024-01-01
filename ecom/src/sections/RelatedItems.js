import React from "react";
import { Trending } from "../jsonData/Trending";
import TrendingItem from "../components/TrendingItem";

function Related() {
  return (
    <div className="Explore-products container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">Related Item</div>
      </div>
      <div className="Trending-Slides-Wrapper d-flex">
        <div className="trending-slider d-flex">
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
    </div>
  );
}

export default Related;
