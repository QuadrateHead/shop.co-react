import React from 'react'
import { Link } from "react-router-dom";
import "./BrowserDressStyles.scss"
const BrowserDressStyles = () => {
  return (
    <div className="bds">
      <h1 className="head-48 bds__heading">BROWSE BY dress STYLE</h1>
      <div className="bds__grid">
         <Link to = {`/shop/?style=casual`} reloadDocument className="bds__card" style={{gridArea: "casual", backgroundImage: `url("/src/assets/browserStyles/image 11.png")`}}>
            <p className="bds__type">Casual</p>
         </Link>
         <Link to = {`/shop/?style=formal`} reloadDocument className="bds__card" style={{gridArea: "formal", backgroundImage: `url("/src/assets/browserStyles/image 13.png")`}}>
            <p className="bds__type">Formal</p>
         </Link>
         <Link to = {`/shop?style=party`} reloadDocument className="bds__card" style={{gridArea: "party", backgroundImage: `url("/src/assets/browserStyles/image 12.png")`}}>
            <p className="bds__type">Party</p>
         </Link>
         <Link to = {`/shop?style=gym`} reloadDocument className="bds__card" style={{gridArea: "gym", backgroundImage: `url("/src/assets/browserStyles/image 14.png")`}}>
            <p className="bds__type">Gym</p>
         </Link>
      </div>
    </div>
  )
}

export default BrowserDressStyles