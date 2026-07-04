import React, { useState } from 'react'

const ProductReviews = () => {

  return (
    <div className='prdctreviews'>
      <div className="prdctreviews__header">
        <div className="prdctreviews__allreviews">
          <h2 className="prdctreviews__allreviews-heading"></h2>
          <p className="prdctreviews__allreviews-count"></p>
        </div>
        <div className="prdctreviews__conf">
          <div className="prdctreviews__filter"></div>
          <select className="prdctreviews__sort">
            <option value="latest">Latest</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>
          <button className="prdctreviews__write-btn"></button>
        </div>
      </div>
    </div>
  )
}

export default ProductReviews