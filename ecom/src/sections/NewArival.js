import React from "react";
import ps5 from "../images/ps5.png";
import woman from "../images/woman.jpg";
import speakers from "../images/speaker.png";
import perfume from "../images/perfume.png";

function NewArival() {
  return (
    <div className="Explore-products container">
      <div className="section-title d-flex">
        <div className="rectangle"></div>
        <div className="title">New Arrival</div>
      </div>

      <div className="explore-cards-container d-flex">
        <div className="explore-cards-container-left d-flex">
          <div className="explore-card">
            <div className="explore-card-image-container">
              <img src={ps5} alt="" />
            </div>
            <div className="explore-card-content">
              <div className="explore-card-title">PlayStation 5</div>
              <div className="explore-card-description">
                Black and White version of the PS5 coming out on sale.
              </div>
              <div className="shop-btn">Shop now</div>
            </div>
          </div>
        </div>

        <div className="explore-cards-container-right d-flex">
          <div className="explore-cards-container-right-top d-flex explore-card">
            <div className="explore-card-image-container">
              <img src={woman} alt="" />
            </div>
            <div className="explore-card-content">
              <div className="explore-card-title">Women's Collections</div>
              <div className="explore-card-description">
                Featured woman collections that give you another vibe.
              </div>
              <div className="shop-btn">Shop now</div>
            </div>
          </div>

          <div className="explore-cards-container-right-bottom d-flex ">
            <div className="explore-cards-container-right-bottom-left explore-card">
              <div className="explore-card-image-container">
                <img src={speakers} alt="" />
              </div>
              <div className="explore-card-content">
                <div className="explore-card-title">Speakers</div>
                <div className="explore-card-description">
                  Amazon wireless speakers.
                </div>
                <div className="shop-btn">Shop now</div>
              </div>
            </div>

            <div className="explore-cards-container-right-bottom-right explore-card">
              <div className="explore-card-image-container">
                <img src={perfume} alt="" />
              </div>
              <div className="explore-card-content">
                <div className="explore-card-title">Perfume</div>
                <div className="explore-card-description">
                  GUCCI INTENSE OUD EDP
                </div>
                <div className="shop-btn">Shop now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArival;
