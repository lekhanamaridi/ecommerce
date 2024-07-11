import Nav from "../Nav/Nav"
import HeroSection from "./HeroSection"
import Featuredcategories from "./Featuredcategories"
import Topproducts from "./Topproducts"
import Features from "./Features"
import Footer from "./Footer"
import Login from "../Login/Login"

function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Featuredcategories />
      <Topproducts/>
      <Features />
      <Footer />
      <Login />
    </div>
  )
}

export default Home