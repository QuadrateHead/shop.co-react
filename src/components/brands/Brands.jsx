import React from 'react'
import { getImageUrl } from "../../utils/getImageUrl";
import styles from "./Brands.module.scss"
const Brands = () => {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
         <li className={styles.item}>
            <img src={getImageUrl("/assets/brands/Group.png")} alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src={getImageUrl("/assets/brands/zara-logo-1 1.png")} alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src={getImageUrl("/assets/brands/gucci-logo-1 1.png")} alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src={getImageUrl("/assets/brands/prada-logo-1 1.png")} alt="" className={styles.icon} />
         </li>
         <li className={styles.item}>
            <img src={getImageUrl("/assets/brands/Group-1.png")} alt="" className={styles.icon} />
         </li>
      </ul>
    </div>
    
  )
}

export default Brands