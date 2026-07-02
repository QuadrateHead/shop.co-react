import React from 'react'
import styles from "./Brands.module.scss"
const Brands = () => {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
         <li className={styles.item}>
            <img src="../../../src/assets/brands/Group.png" alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src="../../../src/assets/brands/zara-logo-1 1.png" alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src="../../../src/assets/brands/gucci-logo-1 1.png" alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src="../../../src/assets/brands/prada-logo-1 1.png" alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src="../../../src/assets/brands/Group-1.png" alt="" className={styles.icon} />
         </li>
      </ul>
    </div>
    
  )
}

export default Brands