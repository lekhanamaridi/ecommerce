import Nav from "../Nav/Nav"
import HeroSection from "./HeroSection"
import Featuredcategories from "./Featuredcategories"
import Topproducts from "./Topproducts"


function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Featuredcategories />
      <Topproducts/>
    </div>
  )
}

export default Home