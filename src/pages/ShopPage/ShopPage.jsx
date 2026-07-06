import React from 'react'
import PagePath from '../../components/PagePath/PagePath'
import { useParams } from 'react-router-dom'
import "./ShopPage.scss"
const ShopPage = ({data}) => {
  return (
   <div className='shop'>
      <div style={{width: "100%", height: "0px", border: "1px solid rgba(0, 0, 0, 0.1)", marginBottom: "2rem"} }></div>
      <PagePath/>
   
   </div>
  )
}

export default ShopPage