import React from 'react'
import ProductCard from '../../elements/ProductCard/ProductCard'
import {Link} from 'react-router-dom'
import styles from "./ProductList.module.scss"
const ProductList = ({head, data}) => {
  return (
    <div className={styles.block}>
      <h1 className={`${styles.heading} head-48`}>{head}</h1>
      <div className={styles.grid}>
        {data.map((item) => (
          item.id % 2 == 0 ? <ProductCard key={item.id} product={item} hover = "right"/> : <ProductCard key={item.id} product={item} hover = "left" />
        ))}
      </div>
      <Link className={styles.btn} to = "/shop">View All</Link>
    </div>
  )
}

export default ProductList