import React from "react";
import { useState } from 'react'
import { useLocation, useParams, Link } from "react-router-dom";
import { allProducts, alsoLikeData } from "../../data/productsData";
import ProductList from "../../components/ProductList/ProductList";
import Product from "../../components/Product/Product";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import "./ProductPage.scss";
const ProductPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
   
  const product =
    state?.product ?? allProducts.find((prod) => prod.id === Number(id));

  {
    !product && <p>Product not found</p>;
  }
  

  const [activeTab, setActiveTab] = useState("reviews");

  const tabs = [
    { id: "product-details", label: "Product Details" },
    { id: "reviews", label: "Rating & Reviews" },
    { id: "faqs", label: "FAQs" },
  ];
  return (
    <div className="productpage">
      <div className="productpage__slash"></div>
      <div className="productpage__path">
        <span className="productpage__category">
          <Link className="p-16" to="/">
            Home
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </span>
        <span className="productpage__category p-16">
          <Link className="p-16" to="/">
            Shop
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </span>
        {product.gender && (
          <span className="productpage__category p-16">
            {product.gender}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
          </span>
        )}
        {product.type && (
          <span className="productpage__category p-16">{product.type}</span>
        )}
      </div>
      <Product product = {product}></Product>
      <div className="productpage__info">
        <div className="productpage__tab-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "productpage__section active" : "productpage__section"}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === "product-details" && <ProductDetails />}
          {activeTab === "reviews" && <ProductReviews />}
          {activeTab === "faqs" && <FAQsSection />}
        </div>
      </div>
      <ProductList data = {alsoLikeData} head = "You might also like"></ProductList>      
    </div>
  );
};

export default ProductPage;
