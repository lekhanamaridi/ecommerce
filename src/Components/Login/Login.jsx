import { Link } from "react-router-dom";
import { useState } from "react";


function Login(){
    
        let [email, setemail] = useState("");
        let [password, setpassword] = useState("");
      
        function send() {
          let data = {
            "email": email,
            "password": password,
          };
      
          try {
            fetch(`${process.env.REACT_APP_SERVER}/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.message) {
                    console.log(data.message);
                  if (data.message === "acess granted") {
                    window.location.href = "/";
                    // alert('Login successfull')
                  }
                } else if (data.sqlMessage) {
                  //   console.log(data.sqlMessage);
                  alert(data.sqlMessage);
                }
                else{
                    
                    window.location.href = "/login";
                }
                // console.log(data.results);
              })
              .catch((error) => console.log(error));
          } catch (error) {
            console.log("error :", error);
          }
        }
      

    return(
        <div class="max-w-full m-36 relative flex justify-center items-center flex-col p-4 rounded-md text-green-600 bg-white">
            <div class="text-5xl font-bold mb-2 text-green-600 text-center">Welcome back to <span class="text-green-900">EZBuy</span></div>
                <div class="text-2xl font-normal mb-4 text-center text-green-600">Log in to your account</div>
                    <form class="flex flex-col gap-3">
                        <div class="block relative"> 
                            <label for="email" class="block text-green-800 cursor-text text-xl font-bold leading-[140%] mb-2">Email</label>
                            <input type="text" id="email" class="rounded border border-green-300 text-sm  font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[400px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0"
                            onChange={(val) => setemail(val.target.value)}></input>
                        </div>
                        <div class="block relative"> 
                            <label for="password" class="block text-green-800 cursor-text text-xl font-bold leading-[140%] mb-2">Password</label>
                            <input type="text" id="password" class="rounded border border-green-300 text-sm w-full font-normal leading-[18px] text-green-600 appearance-none block h-15 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-green-300 outline-0"
                            onChange={(val) => setpassword(val.target.value)}></input>
                        </div>
                        
                        <button type="submit" class="bg-green mt-5 w-max m-auto px-10 py-4 rounded text-white text-xl font-bold"
                        onClick={send}>Submit</button>
                    </form>

                    <div class="text-xl font-semibold text-center mt-[1.6rem]">Don’t have an account yet?<Link to='/signup'> <a class="text-sm text-green-800">Sign up for free!</a></Link></div>
        </div>
    )
}
export default Login
