import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
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
    <div>
      <h1 class="text-5xl font-bold text-green-600 m-6 text-center">Categories</h1>
        <div class="container mx-auto flex  min-w-full flex flex-wrap  justify-around gap-10 ">
          {categories.map((cat) => (
            <Link to={`/products/${cat.name}`}>
            <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg w-[280px] h-[280px]">
              <div class="relative pl-14">
                <img class="w-[180px] h-[180px] " src={cat.images} alt="Products"></img>
              </div>
              <div class="text-center">
                <div class="p-4 m-5">
                  <h3 class="text-xl font-bold mb-5">{cat.name}</h3>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
export default Categories;
