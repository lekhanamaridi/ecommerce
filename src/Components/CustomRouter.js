
import { Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import ViewPage from "./ViewPage";
import ProductCard from "./ProductCard";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Contactus from "./Contactus/Contactus";
import Categories from "./Category/Categories";
import Checkout from "./Checkout/Checkout";

function CustomRouter() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ViewPage />} />
      <Route path="/details/:category/:id" element={<ProductCard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/checkout/:category/:id/:quantity" element={<Checkout />} />

    </Routes>
  )
}

export default CustomRouter;