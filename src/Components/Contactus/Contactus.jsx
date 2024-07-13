import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from '../Nav/Nav'


function Contactus(){
    let [email, setemail] = useState("");
    let [subject, setsubject] = useState("");
    let [message, setmessage] = useState("");
    
    function send(event) {

        event.preventDefault();

        let data = {
        "email": email,
        "subject": subject,
        "message": message,
        };
    
        try {
        fetch(`${process.env.REACT_APP_SERVER}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .catch((error) => console.log(error));
            alert("Message Submitted")
        } catch (error) {
        console.log("error :", error);
        }
    }
    return(
        <div>
            <Nav/>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="text-5xl font-bold mb-2 text-green-600 text-center">Contact Us</h2>
                    <p class="text-xl font-medium mb-4 text-center text-green-700"> We are here to help </p>
                    <form action="#" class="space-y-8 pl-16">
                    <div>
                        <label for="email" class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="rounded border border-green-300 text-sm  font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[650px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@google.com" onChange={(val=>setemail(val.target.value))} required></input>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="rounded border border-green-300 text-sm  font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[650px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" onChange={(val=>setsubject(val.target.value))} required></input>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-2xl font-bold text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="rounded border border-green-300 text-sm  font-normal leading-[18px] text-green-600 appearance-none block h-15 w-[650px] m-0 p-[11px] focus:ring-2 ring-offset-2  ring-green-300 outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" onChange={(val=>setmessage(val.target.value))} placeholder="Leave your message..."></textarea>
                    </div>
                    <button type="submit" class="py-3 ml-56 px-5 text-2xl font-bold text-center text-green-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"onClick={send}>Send message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contactus