import React from "react";
import Title from "../Title";

const Contact = () => {
    return (
      <div id="Contact" className='bg-contact-image w-full h-auto bg-cover bg-center '>
      <div className="px-4 mx-auto max-w-screen-md  rounded-lg">
            <div className="p-4">
                <div>
                    <Title>Contact Us</Title>
                </div>
                <form
                    action="https://getform.io/f/warklrob"
                    method="POST"
                    className="space-y-8"
                >
                    <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    />
                    </div>
                    <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    />
                    </div>
                    <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    >
                    </textarea>
                    </div>
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