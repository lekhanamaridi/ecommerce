import React, { useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
    let [query ,setquery] = useState()

  return (

    <form className="my-4" action="#">
        <div class="flex items-center max-w-[30rem] mx-auto">
            <div class="relative w-full">
                <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5"
                    placeholder= "Search..."
                    required
                    onChange={(val) => setquery(val.target.value)}
                />
            </div>

            <Link to={ query ? `/search/${query}` : '#'}>
            <button
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-green rounded-lg border border-blue-700 hover:bg-teal focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
            <svg class="w-4 h-4" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            </button>
        </Link>

        </div>
    </form>
        
  );
}

export default Searchbar;
