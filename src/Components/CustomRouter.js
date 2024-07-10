
import { Routes , Route } from "react-router-dom";
import Home from "./Home/Home";
import ViewPage from "./ViewPage";

function CustomRouter() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ViewPage />} />

    </Routes>
  )
}

export default CustomRouter