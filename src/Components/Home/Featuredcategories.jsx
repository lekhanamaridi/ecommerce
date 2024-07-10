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
    <div>
      <h1 class="text-3xl font-bold text-gray-900 m-4">Featured Categories</h1>
        <div class="container mx-auto flex  min-w-full">
          {categories.map((cat) => (
            <Link to={`/products/${cat.name}`}>
            <div class="flex-col p-2 m-3.5  object-cover bg-light-blue rounded-lg " key={cat.id}>
              <img class="max-w-32 max-h-32 " src={cat.images} alt="Products"></img>
              <h1 class="text-base font-semibold ">{cat.name}</h1>
              <h1 class="text-sm font-medium ">{cat.quantity}</h1>
            </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
export default Featuredcategories;
