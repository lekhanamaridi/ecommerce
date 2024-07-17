import pricetag from '../../Assets/Featuresimages/pricetag.svg'
import freedelivery from '../../Assets/Featuresimages/freedelivery.svg'
import deals from '../../Assets/Featuresimages/deals.svg'
import returns from '../../Assets/Featuresimages/returns.svg'

function Features() {
    return(
        <div class="flex flex-wrap items-center justify-around my-4 mt-12">

            <div class="w-[320px] h-[100px] bg-green-100 rounded-lg border-2 border-green-500"  data-aos="fade-up">
                <img src={pricetag} alt='icon' class="float-left scale-100 pl-5 pt-3"></img>
                <div class="pt-2 pl-32">
                    <p class="text-xl text-black"><b><i>Best prices & offers</i></b></p> 
                    <p class="text-base  text-gray-500">Orders &#8377;100 or more</p>
                </div>
            </div>

            <div class="w-[320px] h-[100px] bg-green-100 rounded-lg border-2 border-green-500" data-aos="fade-up">
                <img src={freedelivery} alt='icon' class="float-left scale-100 pl-5 pt-3"></img>
                <div class="pt-5 pl-32">
                    <p class="text-xl text-black"><b><i>Free delivery</i></b></p> 
                    <p class="text-base  text-gray-500">24/7 amazing services</p>
                </div>
            </div>
            
            <div class="w-[320px] h-[100px] bg-green-100 rounded-lg border-2 border-green-500" data-aos="fade-up">
                <img src={deals} alt='icon' class="float-left scale-100 pl-5 pt-3"></img>
                <div class="pt-5 pl-32">
                    <p class="text-xl text-black"><b><i>Great daily deal</i></b></p>
                    <p class="text-base text-gray-500">When you sign up</p>
                </div>
            </div>
            
            <div class="w-[320px] h-[100px] bg-green-100 rounded-lg border-2 border-green-500 " data-aos="fade-up">
                <img src={returns} alt='icon' class="float-left scale-100 pl-5 pt-3"></img>
                <div class="pt-5 pl-32">
                    <p class="text-xl text-black"><b><i>Easy returns</i></b></p> 
                    <p class="text-base  text-gray-500">Within 30 days</p>
                </div>
            </div>
        </div>
    )
}
export default Features