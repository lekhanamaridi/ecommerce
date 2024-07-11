import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div class="max-w-full m-28 relative flex justify-center items-center flex-col p-4 rounded-md text-green-600 bg-white">
            <div class="text-5xl font-bold mb-2 text-green-600 text-center">Create new <span class="text-green-900">Account</span></div>
                <div class="text-2xl font-normal mb-4 text-center text-green-600">Signup to your account</div>
                    <form class="flex flex-col gap-3">
                        <div class="block relative"> 
                            <label for="email" class="block text-green-800 cursor-text text-xl font-bold leading-[140%] mb-2">Full Name</label>
                            <input type="text" id="email" class="rounded border border-green-300 text-sm  font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[500px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0"></input>
                        </div>
                        <div class="block relative"> 
                            <label for="password" class="block text-green-800 cursor-text text-xl font-bold leading-[140%] mb-2">Email</label>
                            <input type="text" id="password" class="rounded border border-green-300 text-sm font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[500px] m-0 p-[11px] focus:ring-2 ring-offset-2 ring-green-300 outline-0"></input>
                        </div>
                        <div class="block relative"> 
                            <label for="password" class="block text-green-800 cursor-text text-xl font-bold leading-[140%] mb-2">Password</label>
                            <input type="text" id="password" class="rounded border border-green-300 text-sm font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[500px] m-0 p-[11px] focus:ring-2 ring-offset-2 ring-green-300 outline-0"></input>
                        </div>
                        
                        
                        <button type="submit" class="bg-green mt-5 w-max m-auto px-10 py-4 rounded text-white text-xl font-bold">Signup</button>
                    
                    </form>

        
                    <Link to='/login'><div class="text-xl font-semibold text-center mt-[1.6rem]">Have an account..!Login</div></Link>
        </div>
  )
}

export default Signup