// HeroSlide.js

import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesData } from "../jsonData/heroSlideCards";
import iphone from "../images/iphone14.jpg";

function HeroSlide() {
  const renderSlides = () =>
    slidesData.map((slide, index) => (
      <div key={index} className="Hero-Slide-content d-flex">
        <div className="Hero-Slide-left">
          <div className="Hero-Slide-left-header d-flex">
            <FaApple className="Apple-Icon" />
            <div className="Hero-Slide-left-header-title">{slide.title}</div>
          </div>
          <div className="Hero-Slide-left-content">{slide.content}</div>
          <a className="Hero-Slide-left-anchor d-flex" href="/">
            <div className="Hero-Slide-left-anchor-text">
              {slide.buttonText}
            </div>
            <GoArrowRight className="Hero-Slide-left-icon" />
          </a>
        </div>
        <div className="Hero-Slide-right">
          <img
            className="Hero-Slide-right-image"
            src={iphone}
            alt={`Slide ${index}`}
          />
        </div>
      </div>
    ));

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <Slider {...settings} className="Hero-Slide col-lg-9 col-md-12">
      {renderSlides()}
    </Slider>
  );
}

export default HeroSlide;
