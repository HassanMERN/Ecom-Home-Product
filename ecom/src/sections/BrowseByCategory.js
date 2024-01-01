import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import { BrowseableCategories } from "../jsonData/BrowseableCategories";

function BrowseByCategory() {
  function scrollLeft() {
    var container = document.getElementsByClassName("categories-slider")[0];
    container.scrollLeft -= 100;
  }
  function scrollRight() {
    var container = document.getElementsByClassName("categories-slider")[0];
    container.scrollLeft += 100;
  }
  return (
    <div className="Browse-by-category container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">Categories</div>
      </div>

      <div className="section-header row">
        <div className="title col-lg-10">Browse by Category</div>
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

      <div className="categories-slider d-flex">
        {BrowseableCategories.map((category, index) => {
          return (
            <div className="category-item" key={index}>
              <div className="category-icon">{category.icon}</div>
              <div className="category-label">{category.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrowseByCategory;
