import Nav from "../Nav/Nav"
import HeroSection from "./HeroSection"
import Featuredcategories from "./Featuredcategories"
import Topproducts from "./Topproducts"
import Features from "./Features"
import Footer from "./Footer"
import Searchbar from "../Search/Searchbar"

function Home() {
  return (
    <div>
      <Nav />
      <Searchbar/>
      <HeroSection />
      <Featuredcategories />
      <Topproducts/>
      <Features />
      <Footer />
    </div>
  )
}

export default Home