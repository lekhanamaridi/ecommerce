import { useState,useEffect } from "react";

function Topproducts() {
   

    let [products,setproducts] = useState([])

    useEffect(()=>{

        
        fetch( `${process.env.REACT_APP_SERVER}/topproducts`,
            {
                method:"POST",
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setproducts(val)
            }
        )})

    },[])


    
    
    return(
        <div class="container mx-auto flex  min-w-full max-h-70 ">
            top producrs
            {
                products.map((top)=>(
                    <div class="flex-col p-1 m-1.5 bg-light-blue">
                        <img class="min-w-full max-h-32"src={top.product_image}></img>
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