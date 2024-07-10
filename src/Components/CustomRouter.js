
import { Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import ViewPage from "./ViewPage";
import ProductCard from "./ProductCard";

function CustomRouter() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ViewPage />} />
      <Route path="/details" element={<ProductCard />} />


    </Routes>
  )
}

export default CustomRouter