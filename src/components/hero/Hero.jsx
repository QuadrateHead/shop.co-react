import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'
import "./Hero.scss"
const Hero = () => {
  return (
    <div className = "hero">
      <div className="hero__content">
         <div className="hero__textblock">
            <h1 className="hero__heading">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="hero__caption p-16">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <a href='/shop' className="hero__shopnow blackBtn">Shop Now</a>
         </div>
         <div className="hero__states">
            <div className="hero__state">
               <div>
                  <h2 className="hero__title">200+</h2>
                  <p className="hero__subtitle p-16">International Brands</p>
               </div>
            </div>
            <div className="hero__state">
               <div>
                  <h2 className="hero__title">2,000+</h2>
                  <p className="hero__subtitle p-16">High-Quality Products</p>
               </div>
               
            </div>
            <div className="hero__state">
               <div>
                  <h2 className="hero__title">30,000+</h2>
                  <p className="hero__subtitle p-16">Happy Customers</p>
               </div>
               
            </div>
         </div>
      </div>
      <div className="hero__bg">
         <img src = {getImageUrl("/assets/hero/heroImg.jpg")} alt='Photo' className="hero__sideimg" />
         <img src = {getImageUrl("/assets/hero/Vector.svg")} alt="" className="hero__icon" />
         <img src = {getImageUrl("/assets/hero/Vector-1.svg")} alt="" className="hero__icon1" />
      </div>
    </div>
  )
}

export default Hero