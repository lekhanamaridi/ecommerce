import mobile from '../../Assets/Images/mobile.png'
import watch from '../../Assets/Images/smartwatches.png'
import sofa from '../../Assets/Images/sofa.png'
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div class="flex my-4">

        <div className="bg-stone-100 mx-4 h-[680px] w-[1600px] rounded-lg p-8">
            <h2 className='font-bold text-5xl w-[500px] top-[100px] relative leading-[55px]' >Elevate Your Mobile Experience with Samsung S24 Ultra</h2>

            <img src={mobile} alt="mobile" className='relative bg-clip-content left-[500px] top-[-50px]' />

            <button class="relative top-[-300px] w-[150px] font-medium bg-white h-[50px] flex items-center justify-center rounded-md cursor-pointer overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                <Link to={'/products/mobiles'}> Shop Now </Link>
            </button>
            
        </div>

        <div className="mx-2 my-[-12px]">

            <div className=" bg-lime-100 my-4 h-[330px] w-[580px] rounded-lg p-8">
                <h2 className='font-semibold text-2xl mt-4'>Discover Our Exquisite <br /> Watch Collection</h2> 

                <img src={watch} alt="mobile" className='relative bg-clip-content w-72 float-right top-[-80px] right-[-24px]'/>

                <button class=" my-10 w-[150px] font-medium bg-white h-[50px] flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                    <Link to={'/products/watches'}> Shop Now </Link>
                </button>
            </div>

            <div className=" bg-orange-100 my-4 h-[330px] w-[580px] rounded-lg p-8">
                
                <h2 className='font-semibold text-2xl mt-2'> Premium Sofa Collection for Ultimate Comfort</h2>

                <img src={sofa} alt="mobile" className='relative bg-clip-content w-[365px] float-right top-8 right-[-30px]' />

                <button class=" relative my-8 w-[150px] font-medium bg-white h-[50px]  flex items-center justify-center rounded-md cursor-pointer  overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                    <Link to={'/products/furnitures'}> Shop Now </Link>
                </button>

            </div>
        </div>
        
    </div>
  )
}

export default HeroSection