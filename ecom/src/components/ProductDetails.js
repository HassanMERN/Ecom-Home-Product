import React, { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { GoHeart } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCycle } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function ProductDetails({ product }) {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState(product.images);
  useEffect(() => {
    if (count < 1) {
      setCount(1);
    }
  }, [count]);

  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images]);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  console.log({ product });
  return (
    <div className="Product-details row">
      <div className="col-lg-7 product-images-container d-flex">
        <div className="thumbnail-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${
                index === mainImageIndex ? "selected" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image.url} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="main-image">
          <img
            src={images[mainImageIndex].url}
            alt={`Main ${mainImageIndex + 1}`}
          />
        </div>
      </div>
      <div className="col-lg-5 product-details-container">
        <div className="product-details-header">
          <h1>{product.label}</h1>
        </div>
        <div className="product-status d-flex">
          <div className="ratings-container d-flex">
            <div className="star-ratings">
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
              <TiStarFullOutline className="rating-star" />
            </div>
            <div className="reviews-count">{`(${product.ratings} reviews)`}</div>
          </div>
          <div className="divider">|</div>
          <div className="stock-status">
            {product.stock > 0 ? "in stock" : "out of stock"}
          </div>
        </div>
        <div className="product-price">
          <h1>{product.currentPrice}</h1>
        </div>
        <div className="product-description">{product.description}</div>

        <div className="product-specification d-flex mt-4">
          <h1>Color:</h1>
          <div className="colors-container"></div>
        </div>

        <div className="product-specification d-flex mt-4">
          <h1>Size: </h1>
          <div className="sizes-container d-flex">
            {sizes.map((size, index) => {
              return (
                <div className="size-item d-flex" key={index}>
                  {size}
                </div>
              );
            })}
          </div>
        </div>

        <div className="product-details-footer d-flex">
          <div className="product-quantity d-flex">
            <div
              className="decrease-btn quantity-btn"
              onClick={() => setCount(count - 1)}
            >
              <FaMinus />
            </div>
            <div className="quantity">{count !== 0 && count}</div>
            <div
              className="increase-btn quantity-btn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <FaPlus />
            </div>
          </div>
          <div className="buy-now-btn view-btn">Buy Now</div>
          <div className="add-to-wishlish">
            <GoHeart className="heart-icon" />
          </div>
        </div>

        <div className="product-terms">
          <div className="deliver-terms d-flex term-box">
            <div className="term-icon-wrapper">
              <TbTruckDelivery />
            </div>
            <div className="term-description">
              <div className="delivery-text box-heading">
                {product.freeDelivery ? "Free Delivery" : product.deliveryFee}
              </div>
              <div className="delivery-guideline box-guideline">
                Enter your postal code for Delivery Availability
              </div>
            </div>
          </div>
          <div className="return-policy d-flex term-box">
            <div className="term-icon-wrapper">
              <GrCycle />
            </div>
            <div
              className="term-description>
              "
            >
              <div className="delivery-text box-heading">Return Delivery</div>
              <div className="delivery-guideline box-guideline">
                Free 30 Days Delivery Returns.{" "}
                <span className="shop-btn details-btn">Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
