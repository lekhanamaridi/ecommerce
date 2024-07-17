import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Featuredcategories() {
  let [categories, setcategories] = useState([]);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_SERVER}/featuredcategories`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setcategories(data);
    })
    .catch((error) => console.error(error))

  }, []);

  return (
    <div className="mt-8">
      <h1 class="text-3xl font-bold text-gray-900 m-4 ml-5"  data-aos="fade-up">Featured Categories</h1>
        <div class="container mx-auto flex  min-w-full justify-center" >
          {categories.map((cat , index) => (
            <Link to={`/products/${cat.name}`}>
              <div class="max-w-md mx-2 rounded-md overflow-hidden shadow-md hover:shadow-lg w-[150px] h-[180px]text-wrap" data-aos="fade-up"  data-aos-delay={(index + 1) * 100} key={index} >
                <div class="flex justify-center">
                  <img class="w-[100px] h-[100px] aspect-w-4 aspect-h-5 object-contain hover:scale-110" src={cat.images} alt="Products"></img>
                </div>
                <div class="text-center ">
                  <div class="p-4 m-0">
                    <h4 class="text-xl font-bold mb-1">{cat.name}</h4>
                    <h4 class="text-sm font-medium">{cat.quantity}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
export default Featuredcategories;
