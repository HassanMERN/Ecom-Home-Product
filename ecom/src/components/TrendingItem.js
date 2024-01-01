import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function TrendingItem({ index, item, showDiscountRate, showSlashed }) {
  const navigate = useNavigate();

  return (
    <div
      className="trending-item"
      onClick={() => navigate(`/product/${item.id}`)}
      key={index}
    >
      <div className="trending-image-wrapper">
        {showDiscountRate && (
          <div className="discount-rate">-{item.discountRate}</div>
        )}
        <div className="trending-image-container">
          {item.image}
          <div className="trending-icons-container">
            <GoHeart className="trending-icon" />
            <FiEye className="trending-icon" />
          </div>
        </div>
        <div className="Add-to-cart-btn">Add To Cart</div>
      </div>
      <div className="trending-label">{item.label}</div>
      {item.slashed || showSlashed ? (
        <>
          <div className="prices-container d-flex">
            <div className="trending-price">{item.currentPrice}</div>
            <div className="original-price">{item.originalPrice}</div>
          </div>
          <div className="ratings-container d-flex">
            <div className="ratings ">
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
            </div>
            <div className="ratings-count">({item.ratings})</div>
          </div>
        </>
      ) : (
        <div className="prices-container d-flex">
          <div className="trending-price">{item.currentPrice}</div>
          <div className="ratings-container d-flex">
            <div className="ratings ">
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
            </div>
            <div className="ratings-count">({item.ratings})</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrendingItem;
