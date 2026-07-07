import React from 'react'
import { useParams } from "react-router-dom";
import ProductCard from '../../elements/ProductCard/ProductCard';

const ShopList = ({products}) => {
  const { category, id } = useParams();
  return (
    <div className="shoplist">
      <header className="shoplist__header">
        <h1 className="shoplist__heading">{id ? id : category}</h1>
        <div className="shoplist__sort-block">
          <p className="shoplist__showing">Showing 1-10 of {products.length} Products</p>
          <p className="shoplist__sort">Sort by: Most Popular</p>
        </div>
      </header>
      <main className="shoplist__main">
        {products.length === 0 ?
          <p className="shoplist__no-products">No products found matching those filters.</p> :
          <div className="shoplist__grid">
            {products.map((product, index) => (
                index % 2 == 0 ? <ProductCard key={index} product={product} hover = "right"/> : <ProductCard key={index} product={product} hover = "left" />
              ))}
          </div>
        }
      </main>
    </div>
  )
}

export default ShopList