
import { Routes , Route } from "react-router-dom";
import Home from "./Home/Home";

function CustomRouter() {
  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      

    </Routes>
  )
}

export default CustomRouter