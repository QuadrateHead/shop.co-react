import React from 'react'
import styles from "./NotFound.module.scss"
import {Link} from 'react-router-dom';
const NotFound = () => {
  return (
    <div className = {styles.block}>
      <p className = {styles.text}>NotFound</p>
      <Link to = "/" className={`blackBtn ${styles.btn} `}>Back Home</Link>
   </div>
  )
}

export default NotFound