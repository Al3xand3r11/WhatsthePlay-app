import React from "react";
import Title from "../Title";

const Contact = () => {
    return (
      <div className='bg-contact-image w-full h-screen bg-cover bg-center '>
      <div className="flex flex-col mb-10 mx-auto pt-52">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/warklrob"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact Us</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent
                        border-2 rounded-md
                        focus:outline-none text-white"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent
                        border-2 rounded-md
                        focus:outline-none text-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent
                        border-2 rounded-md
                        focus:outline-none text-white"
                    >
                    </textarea>
                    <button 
                        type="button"
                        className="text-center inline-block 
                        px-8 py-3 w-max text-base
                        font-medium rounded-md text-slate-900
                        bg-gradient-to-r from-blue-500
                        to-white drop-shadow-md 
                        hover:stroke-white">
                            Stay in the Loop!
                    </button>
                </form>
            </div>
        </div>
  </div>
    )
}

export default Contact;