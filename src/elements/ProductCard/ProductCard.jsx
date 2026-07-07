import React from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ product, hover }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className={`${styles.star} ${styles.full}`}>
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
          <span key={i} className={`${styles.star} ${styles.half}`}>
            <svg
              width="9"
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
    <Link
      to={`/product/${product.id}`}
      state={{ product }}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.colors[0].image[0]}
          alt={product.name}
          className={`${styles.image} ${hover == "right" ? styles.right : styles.left}`}
        />
      </div>
      <div className={styles.textbox}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.ratingBlock}>
          <div className={styles.starsContainer}>
            {renderStars(product.rating)}
          </div>
          <div className={styles.rating}>
            <p>
              {product.rating.toFixed(1)}/<b>5.0</b>
            </p>
          </div>
        </div>
        <div className={styles.priceBlock}>
          <p className={styles.price}>{`$${product.price}`}</p>
          {product.originalPrice && (
            <p
              className={styles.originalPrice}
            >{`$${product.originalPrice}`}</p>
          )}
          {product.discount && (
            <p className={styles.discount}>{`-${product.discount}%`}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
