import React from "react";
import ProductCard from "../../elements/ProductCard/ProductCard";
import styles from "../../elements/ProductCard/ProductCard.module.scss";
import "./Product.scss";
import { useState } from "react";
const Product = ({ product }) => {
  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState("medium");
  const [currentImage, setCurrentImage] = useState(
    product.colors[currentColor].image[0],
  );
  const [currentAmount, setCurrentAmount] = useState(1);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="product__star">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.79245 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79245 13.701L3.35842 16.7243L4.55449 10.6219L-4.76837e-06 6.38809L6.17325 5.63991L8.79245 0Z"
                fill="#FFC633"
              />
            </svg>
          </span>,
        );
      } else if (rating > i - 1 && rating < i) {
        stars.push(
          <span key={i} className="product__star half">
            <svg
              width="25"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.35842 16.7243L8.79246 13.701V0L6.17325 5.63991L0 6.38809L4.55449 10.6219L3.35842 16.7243Z"
                fill="#FFC633"
              />
            </svg>
          </span>,
        );
      }
    }
    return stars;
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__img-list">
          <div
            className="product__img-list-item"
            onClick={() =>
              setCurrentImage(product.colors[currentColor].image[0])
            }
          >
            <img src={product.colors[currentColor].image[0]} alt="" />
          </div>
          <div
            className="product__img-list-item"
            onClick={() =>
              setCurrentImage(product.colors[currentColor].image[1])
            }
          >
            <img src={product.colors[currentColor].image[1]} alt="" />
          </div>
          <div
            className="product__img-list-item"
            onClick={() =>
              setCurrentImage(product.colors[currentColor].image[2])
            }
          >
            <img src={product.colors[currentColor].image[2]} alt="" />
          </div>
        </div>
        <div className="product__current-image">
          <img src={currentImage} alt="Photo" />
        </div>
      </div>
      <div className="product__text-block">
        <div className="product__card">
          <h1 className="product__card-name">{product.name}</h1>
          <div className="product__card-rating-block">
            <div className="product__card-rating-stars">
              {renderStars(product.rating)}
            </div>
            <div className="product__card-rating-text">
              <p>
                {product.rating.toFixed(1)}/<b>5.0</b>
              </p>
            </div>
          </div>
          <div className="product__card-price">
            <p className="product__card-price-price">{`$${product.price}`}</p>
            {product.originalPrice && (
              <p className="product__card-price-original">{`$${product.originalPrice}`}</p>
            )}
            {product.discount && (
              <p className="product__card-price-discount">{`-${product.discount}%`}</p>
            )}
          </div>
        </div>
        <p className="product__desc p-16">{product.describtion}</p>
        <div className="product__slash"></div>
        <div className="product__colors">
          <h3 className="product__block-heading p-16">Select Colors</h3>
          <div className="product__colors-list">
            {product.colors?.map((clr, index) => (
              <button
                key={`color_${clr.color}`}
                style={{ backgroundColor: `${clr.color}` }}
                className="product__colors-item"
                onClick={() => {
                  setCurrentColor(index);
                  setCurrentImage(clr.image[0]);
                }}
              >
                <svg
                  className={
                    currentColor === index
                      ? "product__choice active"
                      : "product__choice"
                  }
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
                    fill="white"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="product__slash"></div>
        <div className="product__colors">
          <h3 className="product__block-heading p-16">Choose Size</h3>
          <div className="product__sizes-list">
            {product.sizes?.map((size, index) => (
              <button
                key={`size_${size}`}
                className={
                  currentSize === size
                    ? "product__sizes-item active"
                    : "product__sizes-item"
                }
                onClick={() => setCurrentSize(size)}
              >
                <p className="product__sizes-name p-16">{size}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="product__slash"></div>
        <div className="product__add-to-cart">
          <div className="product__amount">
            <button className="product__amount-change" onClick={currentAmount >= 1 ? () => setCurrentAmount(currentAmount - 1) : setCurrentAmount(1)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                  fill="black"
                />
              </svg>
            </button>
            <p className="product__amount-value p-16">{currentAmount}</p>
            <button className="product__amount-change" onClick={() => setCurrentAmount(currentAmount + 1)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <button type="submit" className="product__cart-submit blackBtn"><p className="p-16">Add to Cart</p></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
