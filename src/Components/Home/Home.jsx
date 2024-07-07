import Nav from "../Nav/Nav"
import HeroSection from "./HeroSection"
import Featuredcategories from "./Featuredcategories"
import Topproducts from "./Topproducts"
import Features from "./Features"

function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Featuredcategories />
      <Topproducts/>
      <Features />
    </div>
  )
}

export default Home