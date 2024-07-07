import mobile from '../../Assets/Images/mobile.png'

function HeroSection() {
  return (
    <div class="flex my-4">

        <div className="bg-stone-100 mx-4 h-[680px] w-[1600px] rounded-lg p-8">
            <h2 className='font-bold text-5xl w-[500px] top-[50px] relative leading-[55px]' >Elevate Your Mobile Experience with Samsung S24 Ultra</h2>

            <img src={mobile} alt="mobile" className='relative bg-clip-content left-[500px] top-[-50px]' />

            <button class="relative top-[-100px] w-[150px] font-medium bg-white h-[50px] flex items-center justify-center rounded-md cursor-pointer overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                Shop Now
            </button>
            
        </div>

        <div className="mx-2 my-[-12px]">

            <div className=" bg-lime-100 my-4 h-[330px] rounded-lg p-8">2 Lorem ipsum dolor sit amet          consectetur adipisicing elit. Quasi quidem et dolore modi excepturi officiis nobis. 

                <button class="my-10 w-[150px] font-medium bg-white h-[50px] my-3 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                    Shop Now
                </button>
            </div>

            <div className=" bg-orange-100 h-40 h-[330px] rounded-lg p-8">
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo cumque dolore, ipsa quibusdam magnam !

                <button class="my-10 w-[150px] font-medium bg-white h-[50px] my-3 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-sm  hover:before:left-0 hover:text-white">
                Shop Now
                </button>

            </div>
        </div>
        
    </div>
  )
}

export default HeroSection