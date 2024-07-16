import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
import Relatedproducts from "./Relatedproducts";

function ProductCard() {
  let { category, id } = useParams();

  let [products, setproducts] = useState([]);

  let [quantity , setquantity] = useState(1)

  useEffect(() => {
    let bodyData = {
      id: id,
      category: category,
    };

    fetch(`${process.env.REACT_APP_SERVER}/products`, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setproducts(val);
      })
      .catch((error) => console.error(error));
  }, [id , category]);

  return (
    <div>
      <Nav></Nav>
      {products.map((product) => (
        <div className="flex bg-white rounded-lg shadow-md p-6  mx-auto h-[86vh] mt-8">
          <div className="w-[700px]">
            <img
              className="w-[100%] object-cover"
              src={product.images}
              alt="Product"
            />
          </div>
          <div className="w-full pl-11 my-5">
            <h1 className="text-xl">{category}</h1>
            <h1 className="text-5xl font-bold my-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="text-gray-500 ml-2">{product.ratings}</span>
              </div>
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-bold text-green-600 mr-2">
                &#8377; {product.price}
              </span>
              {/* <span className="text-gray-500 line-through">&#8377; 52</span> */}
              <span className="text-green-600 ml-2">24% Off</span>
            </div>
            <p className="text-gray-700 my-5 ">{product.description}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-16 px-2 py-1 border rounded"
                onChange={(val) => setquantity(val.target.value)}
              />
            </div>
            <div>
              Remaining : {product.quantity}
            </div>

            {
              product.quantity > 0 ? 
              <div className="flex space-x-2 mt-8">
              <Link to={`/checkout/${category}/${id}/${quantity}`}>
                <button className="flex items-center px-6 py-3 bg-green  text-white font-semibold rounded hover:bg-teal transition-all">
                  Buy Now
                </button>
              </Link>
              {/* <button className="flex items-center px-4 py-2 border rounded">
                Add to cart
              </button> */}
            </div>  : <div className="text-red-500 text-4xl font-bold mt-4">Out of Stock</div>
            }
            
          </div>
        </div>
      ))}
      <Relatedproducts></Relatedproducts>
    </div>
  );
}

export default ProductCard;
