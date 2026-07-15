import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2 className="head-48">Product Details page isn't done yet</h2>
      <p className="p-16">{product?.describtion}</p>
      {/* add more detailed spec content here later */}
    </div>
  );
};

export default ProductDetails;