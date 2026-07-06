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
function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
         <Route path = "/" element={<HomePage />} />
         <Route path = "*" element={<NotFound />} />
         <Route path = "/product/:id" element={<ProductPage />} />
         <Route path = "/:category" element={<ShopPage data = {allProducts}/>} />
         <Route path = "/:category/:id" element={<ShopPage data = {allProducts}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
  
}

export default App;
