import location from '../../Assets/Footerimages/location.svg'
import contact from '../../Assets/Footerimages/contact.svg'
import email from '../../Assets/Footerimages/email.svg'

function Footer() {
    return(
        <div class="flex flex-wrap items-center justify-around my-4 pt-10">

            <div class="w-[500px] h-[500px] bg-light-blue">
                <h1 class="text-5xl pl-40 pt-20 font-semibold">EZ BUY</h1>
                <div class="flex items-center ml-4 pt-3">
                    <img src={location} class="w-[30px] h-[30px] my-3"></img>
                    <p class="pl-4 italic text-black text-lg">Address: STJIT, Ranebennur</p>
                </div>
                <div class="flex items-center ml-4">
                    <img src={contact} class="w-[30px] h-[30px] my-3"></img>
                    <p class="pl-4 italic text-black text-lg">Call Us: 9672574287</p>
                </div>
                <div class="flex items-center ml-4">
                    <img src={email} class="w-[30px] h-[30px] my-3"></img>
                    <p class="pl-4 italic text-black text-lg">Email: ezbuy@gmail.com</p>
                </div>
            </div>

            <div class="w-[500px] h-[500px] bg-light-blue">
                <h1 class="text-5xl pl-32 pt-20 font-semibold">Quick Links</h1>
            </div>

            <div class="w-[500px] h-[500px] bg-light-blue">
                <h1 class="text-5xl pl-40 pt-20 font-semibold">Popular</h1>
            </div>
        </div>
    )
}
export default Footer