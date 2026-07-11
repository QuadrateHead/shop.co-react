import React from 'react'
import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../../elements/ProductCard/ProductCard';
import "./ShopList.scss"
import Pagination from '../../elements/Paggination/Pagination';
const ITEMS_PER_PAGE = 9;
const ShopList = ({ selectedFilters, products}) => {
  const [sortOrder, setSortOrder] = useState("default");
  const sortedProducts = useMemo(() => {
    if (sortOrder === "high-to-low") {
      return [...products].sort((a, b) => b.rating - a.rating);
    }
    if (sortOrder === "low-to-high") {
      return [...products].sort((a, b) => a.rating - b.rating);
    }
    if (sortOrder === "price-desc"){
      return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortOrder === "price-asc"){
      return [...products].sort((a, b) => a.price - b.price);
    } 
    return products; // no sorting
  }, [products, sortOrder]);

  const [itemsPerPage, setItemsPerPage] = useState(9);
  useEffect(() => {
    const updateItemsPerPage = () => {
      let width = window.innerWidth;
      if (width <= 375) {
        setItemsPerPage(4);
      } else if (width <= 900) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(9);
      }
    };
    updateItemsPerPage(); // run once on mount
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="shoplist">
      <header className="shoplist__header">
        <h1 className="shoplist__heading">{selectedFilters.style ? selectedFilters.style : "All"}</h1>
        <div className="shoplist__sort-block">
          <p className="shoplist__showing p-16">Showing 1-10 of {products.length} Products</p>
          <p className="shoplist__sort p-16">Sort by: 
            <select name='ProductSort' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option className="shoplist__option p-16" value="most-popular">Most Popular</option>
              <option className="shoplist__option p-16" value="high-to-low">Highest Rating</option>
              <option className="shoplist__option p-16" value="low-to-high">Lowest Reting</option>
              <option className="shoplist__option p-16" value="price-desc">Price: High to Low</option>
              <option className="shoplist__option p-16" value="price-asc">Price: Low to High</option>
            </select>
          </p>
        </div>
      </header>
      <main className="shoplist__main">
        {products.length === 0 ?
          <p className="shoplist__no-products">No products found matching those filters.</p> :
          <div className="shoplist__grid">
            {paginatedProducts.map((product, index) => (
                index % 2 == 0 ? <ProductCard key={index} product={product} hover = "right"/> : <ProductCard key={index} product={product} hover = "left" />
              ))}
          </div>
        }
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  )
}

export default ShopList