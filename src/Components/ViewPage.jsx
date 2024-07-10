import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './Nav/Nav'

function ViewPage() {

    let {category} = useParams()

    let [products,setproducts] = useState([])

    useEffect(()=>{
        let bodyData = {
            'category' : category,
        }

        fetch( `${process.env.REACT_APP_SERVER}/categoryproducts`,
            {
                method:"POST",
                body: JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )
        .then((res)=>res.json())
        .then((val)=>{
            console.log(val)
            setproducts(val)
        })
        .catch((error) => console.error(error))
    },[category])

  return (
    <div>

        <Nav/>

        <h1 class="text-3xl font-bold text-gray-900 m-4 ml-24">{category}</h1>
        <div class="container mx-auto flex flex-wrap min-w-full justify-center ">
            {
                products.map((top)=>(
                    
                    <div class="flex flex-wrap p-1 m-1.5 ">

                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       
                            <img class="p-8 rounded-[40px] w-72 h-72 hover:scale-110 transition-all" src={top.images} alt={top.name} />
                        
                            <div class="px-5 pb-5">

                                <div class="flex items-center justify-between mx-0 mb-5">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{top.name}</h5>
                                
                                    <div class="flex items-center justify-center space-x-1 bg-blue-100 rounded-md p-[6px]">
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <span class=" text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"> {top.ratings}</span>
                                    </div>
                                
                                </div>

                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 flex"> &#8377; {top.price}</span>
                                    <button href="#" class="text-white bg-green hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            </div>
        </div>
  )
}

export default ViewPage