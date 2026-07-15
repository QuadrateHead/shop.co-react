import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { allProducts, casualData } from "/src/data/productsData";
import CartPage from "./pages/CartPage/CartPage";
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <TopBar/>
      <NavBar/>
      <Routes>
         <Route path = "/" element={<HomePage />} />
         <Route path = "*" element={<NotFound />} />
         <Route path = "/product/:id" element={<ProductPage key={location.pathname}/>} />
         <Route path = "/:category" element={<ShopPage/>} />
         <Route path = "/cart" element={<CartPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
  
}

export default App;
