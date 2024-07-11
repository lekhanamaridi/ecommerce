import { Link } from "react-router-dom";

import location from '../../Assets/Footerimages/location.svg'
import contact from '../../Assets/Footerimages/contact.svg'
import email from '../../Assets/Footerimages/email.svg'

import cloth from'../../Assets/Footerimages/cloth.png'
import electronic from'../../Assets/Footerimages/electronic.png'
import shoe from'../../Assets/Footerimages/shoe.png'
import watch from'../../Assets/Footerimages/watch.png'
import mobile from'../../Assets/Footerimages/mobile.png'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    return(
        <div class="flex flex-wrap items-center justify-around my-4 pt-10">

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl pl-40 pt-20 font-semibold">EZ BUY</h1>
                <div class="flex items-center ml-4 pt-4">
                    <img src={location} class="w-[30px] h-[30px] my-3" alt='location'></img>
                    <p class="pl-4 italic text-black text-lg">Address: STJIT, Ranebennur</p>
                </div>
                <div class="flex items-center ml-4">
                    <img src={contact} class="w-[30px] h-[30px] my-3" alt='Contact'></img>
                    <p class="pl-4 italic text-black text-lg">Call Us: 9672574287</p>
                </div>
                <div class="flex items-center ml-4">
                    <img src={email} class="w-[30px] h-[30px] my-3" alt='email'></img>
                    <p class="pl-4 italic text-black text-lg">Email: ezbuy@gmail.com</p>
                </div>
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl pl-32 pt-20 font-semibold">Quick Links</h1>

                <button onClick={scrollToTop} class="pl-6 italic text-black my-5 pt-3 text-2xl">Home</button>

                <Link to='/categories'><p class="pl-6 italic text-black text-2xl">Categories</p></Link>

                <Link to='/about'><p class="pl-6 italic text-black my-4 text-2xl">About</p></Link>

                <Link to='/contactus'><p class="pl-6 italic text-black my-4 text-2xl">Contact Us</p></Link>

                <Link to='/login'><p class="pl-6 italic text-black my-4 text-2xl">Login</p></Link>
            
            </div>

            <div class="w-[500px] h-[500px]">
                <h1 class="text-5xl pl-40 pt-20 font-semibold">Popular</h1>
                <div class="flex items-center ml-4">
                    <img src={cloth} class="w-[40px] h-[40px] my-2" alt='cloth'></img>
                    <Link to='/products/clothes'><p class="pl-2 italic text-black my-4 text-2xl">Clothes</p></Link>
                </div>
                <div class="flex items-center ml-4">
                    <img src={electronic} class="w-[40px] h-[40px] my-3" alt='electronic'></img>
                    <Link to='/products/electronics'><p class="pl-3 italic text-black my-4 text-2xl">Electronics</p></Link>
                </div>
                <div class="flex items-center ml-4">
                    <img src={shoe} class="w-[40px] h-[40px] my-3" alt='shoe'></img>
                    <Link to='/products/footwears'><p class="pl-2 italic text-black my-4 text-2xl">Footwear</p></Link>
                </div>
                <div class="flex items-center ml-4">
                    <img src={watch} class="w-[40px] h-[40px] my-3" alt='watch'></img>
                    <Link to='/products/watches'><p class="pl-2 italic text-black my-4 text-2xl">Watches</p></Link>
                </div>
                <div class="flex items-center ml-4">
                    <img src={mobile} class="w-[40px] h-[40px] my-3" alt='mobile'></img>
                    <Link to='/products/mobiles'><p class="pl-2 italic text-black my-4 text-2xl">Mobiles</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;