import { Link } from "react-router-dom";

function Login(){
    return(
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-green-600 bg-white">
            <div class="text-2xl font-bold mb-2 text-green-600 text-center">Welcome back to <span class="text-green-900">App</span></div>
                <div class="text-sm font-normal mb-4 text-center text-green-600">Log in to your account</div>
                    <form class="flex flex-col gap-3">
                        <div class="block relative"> 
                            <label for="email" class="block text-green-950 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                            <input type="text" id="email" class="rounded border border-green-300 text-sm w-full font-normal leading-[18px] text-green-600 appearance-none block h-15 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0"></input>
                        </div>
                        <div class="block relative"> 
                            <label for="password" class="block text-green-950 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                            <input type="text" id="password" class="rounded border border-green-300 text-sm w-full font-normal leading-[18px] text-green-600 appearance-none block h-15 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-green-300 outline-0"></input>
                        </div>
                        
                        <button type="submit" class="bg-green w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
                        

                    </form>

        
                    <div class="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a class="text-sm text-green-800" href="#">Sign up for free!</a></div>
        </div>
    )
}
export default Login
