import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
function App() {
  return (
    <BrowserRouter basename="/shop.co-react">
      <TopBar/>
      <NavBar/>
      <Routes>
         <Route path = "/" element={<HomePage />} />
         <Route path = "*" element={<NotFound />} />
         <Route path = "/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
  
}

export default App;
