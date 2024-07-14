import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'

function Checkout() {
  let {category ,id}=useParams()

    let [products,setproducts] = useState([])
    

    useEffect(()=>{
        let bodyData = {
          "id" : id,
          "category" : category,
        }

        fetch( `${process.env.REACT_APP_SERVER}/products`,
          {
            method:"POST",
            body:JSON.stringify(bodyData),
            headers: { 'Content-Type': 'application/json'},
          },
        )
        .then((res)=>res.json())
        .then((val)=>{
          console.log(val)
          setproducts(val)
        })
        .catch((error) => console.error(error))
    },[id])

    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [country, setcountry] = useState("");
    let [city, setcity] = useState("");
    let [pincode, setpincode] = useState("");
    let [mobile, setmobile] = useState("");
    let [address, setaddress] = useState("");
    let [voucher, setvoucher] = useState("");

    function send() {
      let data = {
        name: name,
        email: email,
        country: country,
        city: city,
        pincode: pincode,
        mobile: mobile,
        address: address,
        voucher: voucher
      };
  
      try {
        fetch(`${process.env.REACT_APP_SERVER}/checkout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              //   console.log(data.message);
              alert(data.message);
              if (data.message === "Data entered") {
                window.location.href = "/";
              }
            } else if (data.sqlMessage) {
              //   console.log(data.sqlMessage);
              alert(data.sqlMessage);
            }
            // console.log(data.results);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log("error :", error);
      }
    }
  

  return (
    <div className="overflow-hidden">
      <Nav/>
      <h1 class="text-5xl font-bold mt-10 text-green-600 text-center">CheckOut</h1>
      <section class="bg-white mt-[-40px] py-8 antialiased w-full md:py-16 pl-32">
        <form action="#" class="mx-auto max-w-screen-2xl px-4 2xl:px-0 ">
          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-[50%] flex-auto space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="your_name"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter Your Name"
                      required
                      onChange={(val) => setname(val.target.value)}

                    />
                  </div>

                  <div>
                    <label
                      for="your_email"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email*{" "}
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@gamil.com"required
                      onChange={(val) => setemail(val.target.value)}
                    />
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-country-input-3"
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Country
                      </label>
                    </div>
                    <input
                      type="text"
                      id="your_name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter Contry"
                      required
                      onChange={(val) => setcountry(val.target.value)}
                    />
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-city-input-3"
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                    </div>
                    <input
                      type="text"
                      id="your_name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter City"
                      required
                      onChange={(val) => setcity(val.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      for="pincode"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Pincode
                    </label>

                    <input
                      type="text"
                      id="pincode"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter Pincode"
                      required
                      onChange={(val) => setpincode(val.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      for="phone-input-3"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile Number*
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter Mobile number"
                      required
                      onChange={(val) => setmobile(val.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      for="vat_number"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      class="block w-[770px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter Street address"
                      required
                      onChange={(val) => setaddress(val.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-16">
                  Payment
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          Credit Card
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Payment on delivery{" "}
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          +&#8377;40 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="paypal-2"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Paypal account{" "}
                        </label>
                        <p
                          id="paypal-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Methods
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="dhl"
                          aria-describedby="dhl-text"
                          type="radio"
                          name="delivery-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="dhl"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          &#8377;15 - DHL Fast Delivery
                        </label>
                        <p
                          id="dhl-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it by Tommorow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="fedex"
                          aria-describedby="fedex-text"
                          type="radio"
                          name="delivery-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="fedex"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Free Delivery - FedEx{" "}
                        </label>
                        <p
                          id="fedex-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it by 4 working days
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="express"
                          aria-describedby="express-text"
                          type="radio"
                          name="delivery-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="express"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          &#8377;49 - Express Delivery{" "}
                        </label>
                        <p
                          id="express-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="voucher"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Enter a gift card, voucher or promotional code{" "}
                </label>
                <div class="flex max-w-md items-center gap-4">
                  <input
                    type="text"
                    id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    onChange={(val) => setvoucher(val.target.value)}                    
                  />
                  <button
                    type="button"
                    class="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Summery */}
            <div class="flex flex-wrap">
              <div class="container mx-auto px-4 pl-10">
                <h1 class="text-xl font-semibold mb-4">Shopping Cart</h1>
                <div class="flex flex-wrap md:flex-row gap-4">
                  <div>
                    <div class="bg-white rounded-lg shadow-md p-10 mb-4 ">
                      <table class="w-[500px]">
                        <thead>
                          <tr>
                            <th class="text-left font-semibold ">Product</th>
                            <th class="text-left font-semibold pl-10">Price</th>
                            <th class="text-left font-semibold pl-10">
                              Quantity
                            </th>
                            <th class="text-left font-semibold ">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            products.map((product)=>(
                              <tr class="w-[500px]">
                            <td class="py-4">
                              <div class="flex items-center">
                                <img class="h-16 w-16 mr-4" src={product.images}
                                alt="Product "></img>
                                <span class="font-semibold">{product.name}</span>
                              </div>
                            </td>
                            <td class="py-4 pl-10">&#8377;19.99</td>
                              <td class="py-4">
                                <div class="flex items-center pl-4">
                                  <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                  <span class="text-center w-8">1</span>
                                  <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                </div>
                              </td>
                              <td class="py-4 mx-4">&#8377;19.99</td>
                            </tr>
                            ))
                          }
                          
                            {/* <!-- More product rows --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class=" md:w-3/4 ">
                    <div class="bg-white rounded-lg shadow-md p-6 w-[580px]">
                      <h2 class="text-lg font-semibold mb-4">Summary</h2>
                      <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>&#8377;19.99</span>
                      </div>
                      <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>&#8377;1.99</span>
                      </div>
                      <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>&#8377;0.00</span>
                      </div>
                      <hr class="my-2"></hr>
                      <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">&#8377;21.98</span>
                      </div>
                      <button class="bg-green text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={send}>
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div class="space-y-3">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Proceed to Payment
                </button>

                
              </div>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Checkout;
