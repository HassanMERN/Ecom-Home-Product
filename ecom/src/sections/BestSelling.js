import React from "react";
import { Trending } from "../jsonData/Trending";
import TrendingItem from "../components/TrendingItem";
import Banner from "../components/Banner";

function BestSelling() {
  return (
    <div className="Best-selling container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">This Month</div>
      </div>

      <div className="section-header row">
        <div className="title col-lg-10">Best Selling Products</div>
        <div className="btn-container col-lg-2 d-flex">
          <button className="view-btn">View All</button>
        </div>
      </div>

      <div className="trending-slider d-flex">
        {Trending.map((item, index) => {
          return (
            <TrendingItem showSlashed={true} showDiscountRate={false} item={item} index={index} />
          );
        })}
      </div>

      <Banner />
    </div>
  );
}

export default BestSelling;
