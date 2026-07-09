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
    minPrice: 0,
    maxPrice: 500,
    colors: [], // e.g., ["#4f4631", "#314f4a"] (Array of hex strings)
    sizes: [], // e.g., ["large", "x-large"]
    style: "", // e.g., "casual"
  });
  const filteredProducts = data(id).filter((product) => {
    // 1. Filter by Product Type (Matches simple string e.g., "t-shirt")
    if (selectedFilters.type && product.type !== selectedFilters.type) {
      return false;
    }

    // 2. Filter by Price Range (Checks current active price bounds)
    if (
      product.price < selectedFilters.minPrice ||
      product.price > selectedFilters.maxPrice
    ) {
      return false;
    }

    // 3. Filter by Colors (Deep check inside the array of objects)
    if (selectedFilters.colors.length > 0) {
      // Looks inside product.colors to see if at least ONE of its hex values
      // is included in the user's selected filters array
      const hasMatchingColor = product.colors.some((colorObj) =>
        selectedFilters.colors.includes(colorObj.color)
      );
      if (!hasMatchingColor) return false;
    }

    // 4. Filter by Sizes (Checks for any overlapping elements)
    if (selectedFilters.sizes.length > 0) {
      // Looks inside product.sizes array of strings to see if at least ONE
      // of its size values is included in the user's selected filters array
      const hasMatchingSize = product.sizes.some((sizeString) =>
        selectedFilters.sizes.includes(sizeString.toLowerCase())
      );
      if (!hasMatchingSize) return false;
    }

    // 5. Filter by Dress Style (e.g., Casual, Formal, Party)
    // Note: Make sure to add a 'style' property to your product objects if using this!
    if (selectedFilters.style && product.style !== selectedFilters.style) {
      return false;
    }

    // If the product passes every active validation check above, display it!
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
        <FilterBlock className = "shop__filter" selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}></FilterBlock>
        <ShopList className = "shop__shop-list" products={filteredProducts}></ShopList>
      </div>
    </div>
  );
};

export default ShopPage;
