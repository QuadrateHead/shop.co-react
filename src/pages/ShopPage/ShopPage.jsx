import React from "react";
import PagePath from "../../components/PagePath/PagePath";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShopList from "../../components/ShopList/ShopList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./ShopPage.scss";
import { allProducts, casualData } from "/src/data/productsData";
const ShopPage = () => {

  const { category, id } = useParams();
  const data = (id) =>{
    //{id ? id : category}
    if(!id){
      return allProducts;
    }else{
      switch(id){
        case "casual":
          return casualData;
        default:
          return []
      }
    }
  }

  const [selectedFilters, setSelectedFilters] = useState({
    type: "", // e.g., "t-shirt", "shorts" (Matches your `type` key)
    minPrice: 50,
    maxPrice: 200,
    colors: [], // e.g., ["#4f4631", "#314f4a"] (Array of hex strings)
    sizes: [], // e.g., ["large", "x-large"]
    style: "", // e.g., "casual"
  });
  const filteredProducts = data(id).filter((product) => {
    // 1. Filter by Product Type (Category)
    if (selectedFilters.type && product.type !== selectedFilters.type) {
      return false;
    }
    // 2. Filter by Price Range (Checks against the current active price)
    if (
      product.price < selectedFilters.minPrice ||
      product.price > selectedFilters.maxPrice
    ) {
      return false;
    }
    // 3. Filter by Colors (Deep check inside the colors array)
    if (selectedFilters.colors.length > 0) {
      // Check if AT LEAST ONE of the product's hex colors is inside the selectedFilters.colors array
      const hasMatchingColor = product.colors.some((colorObj) =>
        selectedFilters.colors.includes(colorObj.color),
      );
      if (!hasMatchingColor) return false;
    }
    // 4. Filter by Sizes (Checks if product sizes overlap with selected sizes)
    if (selectedFilters.sizes.length > 0) {
      // Check if AT LEAST ONE of the product's sizes is inside the selectedFilters.sizes array
      const hasMatchingSize = product.sizes.some((size) =>
        selectedFilters.sizes.includes(size),
      );
      if (!hasMatchingSize) return false;
    }
    // 5. Filter by Style (e.g., Casual, Formal - add a 'style' key to your data if needed!)
    if (selectedFilters.style && product.style !== selectedFilters.style) {
      return false;
    }

    return true;
  });

  return (
    <div className="shop">
      <div
        style={{
          width: "100%",
          height: "0px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      ></div>
      <PagePath />
      <div className="shop__container">
        <FilterBlock selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}></FilterBlock>
        <ShopList products={filteredProducts}></ShopList>
      </div>
    </div>
  );
};

export default ShopPage;
