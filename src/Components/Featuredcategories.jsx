
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Featuredcategories() {
   

    let [categories,setcategories] = useState([])

    useEffect(()=>{

        
        fetch( 'http://localhost:3000/featuredcategories',
            {
                method:"POST",
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setcategories(val)
            }
        )})

    },[])


    
    
    return(
        <div class="container mx-auto flex  min-w-full max-h-70 ">
            {
                categories.map((cat)=>(
                    <div class="flex-col p-1 m-1.5 bg-light-blue">
                        <img class="min-w-full max-h-32"src={cat.images}></img>
                        <h1 class="text-base font-semibold ">{cat.name}</h1>
                        <h1 class="text-sm font-medium ">{cat.quantity}</h1>
                    </div>
                ))
            }
            
        </div>

    );
}
export default Featuredcategories;