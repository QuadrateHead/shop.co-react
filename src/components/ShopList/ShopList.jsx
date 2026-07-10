import React from 'react'
import { useState, useMemo } from 'react';
import ProductCard from '../../elements/ProductCard/ProductCard';
import "./ShopList.scss"
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
            {sortedProducts.map((product, index) => (
                index % 2 == 0 ? <ProductCard key={index} product={product} hover = "right"/> : <ProductCard key={index} product={product} hover = "left" />
              ))}
          </div>
        }
      </main>
    </div>
  )
}

export default ShopList