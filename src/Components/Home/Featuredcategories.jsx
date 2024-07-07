import { useState, useEffect } from "react";

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
    .then((val) => {
      console.log(val);
      setcategories(val);
    })

  }, []);

  return (
    <div>
      <h1 class="font-bold">Featured Categories</h1>
    <div class="container mx-auto flex  min-w-full max-h-70 ">
      {categories.map((cat) => (
        <div class="flex-col p-1 m-1.5 bg-light-blue" key={cat.id}>
          <img class="min-w-full max-h-32" src={cat.images} alt="Products"></img>
          <h1 class="text-base font-semibold ">{cat.name}</h1>
          <h1 class="text-sm font-medium ">{cat.quantity}</h1>
        </div>
      ))}
    </div>
    </div>
  );
}
export default Featuredcategories;
