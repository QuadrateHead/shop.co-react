import React from "react";
import PagePath from "../../components/PagePath/PagePath";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ShopList from "../../components/ShopList/ShopList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./ShopPage.scss";
import { allProducts, casualData } from "/src/data/productsData";
const ShopPage = () => {

  const { category, id } = useParams();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilters = useMemo(() => {
    return { type: searchParams.get('type') || '',
        minPrice: searchParams.has('minPrice') ? Number(searchParams.get('minPrice')) : 0,
        maxPrice: searchParams.has('maxPrice') ? Number(searchParams.get('maxPrice')) : 500,
        colors: searchParams.getAll('colors'), // e.g., ["#4f4631", "#314f4a"] (Array of hex strings)
        sizes: searchParams.getAll('sizes'),
        style: searchParams.get('style') || "",
      };
  }, [ searchParams ]);
  const data = allProducts;
  
  const updateFilters = useCallback(
    (partialFilters) => {
      setSearchParams((prevParams) => {
        const next = new URLSearchParams(prevParams);
        const merged = { ...selectedFilters, ...partialFilters };

        // Single-value filters
        if (merged.type) next.set("type", merged.type);
        else next.delete("type");

        if (merged.style) next.set("style", merged.style);
        else next.delete("style");

        if (merged.minPrice !== 0) next.set("minPrice", String(merged.minPrice));
        else next.delete("minPrice");

        if (merged.maxPrice !== 500) next.set("maxPrice", String(merged.maxPrice));
        else next.delete("maxPrice");

        // Multi-value filters (colors, sizes) — clear then re-add each value
        next.delete("colors");
        merged.colors.forEach((c) => next.append("colors", c));

        next.delete("sizes");
        merged.sizes.forEach((s) => next.append("sizes", s));

        return next;
      });
    },
    [selectedFilters, setSearchParams]
  );

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
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
        const hasMatchingColor = product.colors.some((colorObj) =>
          selectedFilters.colors.includes(colorObj.color)
        );
        if (!hasMatchingColor) return false;
      }
      // 4. Filter by Sizes (Checks for any overlapping elements)
      if (selectedFilters.sizes.length > 0) {
        const hasMatchingSize = product.sizes.some((sizeString) =>
          selectedFilters.sizes.includes(sizeString.toLowerCase())
        );
        if (!hasMatchingSize) return false;
      }
      // 5. Filter by Dress Style (e.g., Casual, Formal, Party)
      if (selectedFilters.style && product.style !== selectedFilters.style) {
        return false;
      }
      return true;
      });
  }, [ id, data, selectedFilters]);

  const [openFilter, setOpenFilter] = useState(false)
  const openFilterBlock = () =>{
    openFilter ? setOpenFilter(false) : setOpenFilter(true)
  }
  /*const [selectedFilters, setSelectedFilters] = useState({
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
  });*/

  useEffect(() => {
    const updateOpen = () => {
      if (openFilter && window.innerWidth <= 1070) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    
    // cleanup: always restore scroll if component unmounts while open
    window.addEventListener("resize", updateOpen);
    return () => {
      window.removeEventListener("resize", updateOpen);
      document.body.style.overflow = "";
    };
  }, [openFilter]);
  return (
    <div className="shop">
      <PagePath stylePath = { selectedFilters } />
      <div className="shop__container">
        <FilterBlock className = "shop__filter" openFilter={openFilter} setOpenFilter={setOpenFilter} onChangeFilters={updateFilters} selectedFilters={selectedFilters}></FilterBlock>
        <ShopList className = "shop__shop-list" openFilterBlock={openFilterBlock} selectedFilters = { selectedFilters } products={filteredProducts}></ShopList>
      </div>
    </div>
  );
};

export default ShopPage;
