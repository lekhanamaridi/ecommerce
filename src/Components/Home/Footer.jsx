import { Link } from "react-router-dom";

import location from '../../Assets/Footerimages/location.png'
import contact from '../../Assets/Footerimages/contact.png'
import email from '../../Assets/Footerimages/email.png'

import cloth from'../../Assets/Footerimages/cloth.png'
import electronic from'../../Assets/Footerimages/electronic.png'
import shoe from'../../Assets/Footerimages/shoe.png'
import watch from'../../Assets/Footerimages/watch.png'
import mobile from'../../Assets/Footerimages/mobile.png'

import logo from '../../Assets/Logo/ez white.png'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    return(
        <div class="flex flex-wrap items-center justify-evenly bg-green text-white mt-10">

            <div class="w-[500px] h-[500px]">
                
                <img src={logo} alt="Ez buy" className="w-64 ml-12 mt-10" />
                <div className="mt-2">
                    <div class="flex items-center ml-4 mt-2">
                        <img src={location} class="w-[25px] h-[25px] mt-3" alt='location'></img>
                        <p class="ml-4 text-xl">Address: STJIT, Ranebennur</p>
                    </div>
                    <div class="flex items-center ml-4 m-2">
                        <img src={contact} class="w-[25px] h-[25px] my-1" alt='Contact'></img>
                        <p class="ml-4 text-xl">Call Us: 9672574287</p>
                    </div>
                    <div class="flex items-center ml-4 m-2">
                        <img src={email} class="w-[25px] h-[25px] my-1" alt='email'></img>
                        <p class="ml-4 text-xl">Email: ezbuy@gmail.com</p>
                    </div>
                </div>
                
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl  mt-14 ml-20 font-semibold">Quick Links</h1>

                <button onClick={scrollToTop} class=" ml-28 pl-6 my-5 pt-3 text-2xl">Home</button>

                <Link to='/categories'><p class="ml-28 pl-6 text-2xl ">Categories</p></Link>

                <Link to='/contactus'><p class="ml-28 pl-6 my-4 text-2xl">Contact Us</p></Link>

                <Link to='/login'><p class="ml-28 pl-6 my-4 text-2xl">Login</p></Link>
            
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl pl-20 mt-14 font-semibold">Popular</h1>
                <div className="ml-20 mt-4">
                    <div class="flex items-center ml-4">
                        <img src={cloth} class="w-[30px] h-[30px] my-2" alt='cloth'></img>
                        <Link to='/products/clothes'><p class="pl-2 my-4 text-2xl">Clothes</p></Link>
                    </div>
                    <div class="flex items-center ml-4">
                        <img src={electronic} class="w-[30px] h-[30px] my-3" alt='electronic'></img>
                        <Link to='/products/electronics'><p class="pl-3 my-4 text-2xl">Electronics</p></Link>
                    </div>
                    <div class="flex items-center ml-4">
                        <img src={shoe} class="w-[30px] h-[30px] my-3" alt='shoe'></img>
                        <Link to='/products/footwears'><p class="pl-2 my-4 text-2xl">Footwear</p></Link>
                    </div>
                    <div class="flex items-center ml-4">
                        <img src={watch} class="w-[30px] h-[30px] my-3" alt='watch'></img>
                        <Link to='/products/watches'><p class="pl-2 my-4 text-2xl">Watches</p></Link>
                    </div>
                    <div class="flex items-center ml-4">
                        <img src={mobile} class="w-[30px] h-[30px] my-3" alt='mobile'></img>
                        <Link to='/products/mobiles'><p class="pl-2 my-4 text-2xl">Mobiles</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;