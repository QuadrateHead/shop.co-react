import React from "react";
import Brands from "../../components/brands/Brands";
import Hero from "../../components/hero/Hero";
import ProductList from "../../components/ProductList/ProductList";
import { newArrivalsData, topSellingData } from "../../data/productsData";
import "./HomePage.scss";
import BrowserDressStyles from "../../components/BrowserDressStyles/BrowserDressStyles";
import UserReviews from "../../components/UsersReviews/UserReviews"
const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <div className="homepage__container">
        <div className="homepage__shop-block">
          <ProductList head="NEW ARRIVALS" data={newArrivalsData}></ProductList>
          <div className="homepage__slash"></div>
          <ProductList head="TOP SELLING" data={topSellingData}></ProductList>
        </div>
        <BrowserDressStyles></BrowserDressStyles>
        <UserReviews></UserReviews>
      </div>
    </>
  );
};

export default HomePage;
