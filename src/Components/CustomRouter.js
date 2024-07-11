
import { Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import ViewPage from "./ViewPage";
import ProductCard from "./ProductCard";
import Login from "./Login/Login";
import Signup from "./Login/Signup";

function CustomRouter() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ViewPage />} />
      <Route path="/details/:category/:id" element={<ProductCard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  )
}

export default CustomRouter