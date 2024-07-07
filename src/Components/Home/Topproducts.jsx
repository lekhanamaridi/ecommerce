import { useState,useEffect } from "react";

function Topproducts() {
   

    let [products,setproducts] = useState([])

    useEffect(()=>{

        
        fetch( 'http://localhost:3000/topproducts',
            {
                method:"POST",
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>res.json())
        .then((val)=>{
            console.log(val)
            setproducts(val)
        })
        .catch((error) => console.error(error))

    },[])


    
    
    return(
        <div class="container mx-auto flex  min-w-full max-h-70 ">
            {
                products.map((top)=>(
                    <div class="flex-col p-1 m-1.5 bg-light-blue">
                        <img class="min-w-full max-h-32"src={top.product_image} alt="products"></img>
                        <h1 class="text-base font-semibold ">{top.product_type}</h1>
                        <h1 class="text-sm font-medium ">{top.product_name}</h1>
                        <h1 class="text-sm font-medium ">{top.product_rating}</h1>
                        <h1 class="text-sm font-medium ">{top.product_price}</h1>
                    </div>
                ))
            }
            
        </div>

    );
}
export default Topproducts;