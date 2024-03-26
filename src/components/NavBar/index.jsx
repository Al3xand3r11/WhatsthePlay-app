import React, { useState } from 'react';
import {
  FaBars,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed bg-gray-400 z-50 backdrop-filter backdrop-blur-md bg-opacity-10 w-full">
        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex items-center justify-between h-16 hidden md:flex">
            <span className="text-2xl text-white font-semibold">What's The Play Productions</span>
                <div className="flex space-x-4 text-white">
                    <a href="#">Home</a>
                    <a href="#">Info</a>
                    <a href="#">Members</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
        <div onClick={handleNav} className="md:hidden z-10">
            <FaBars size={30} className="mr-4 cursor-ponter pl-2" />
        </div>
        {/* Mobile Menu */}
        <div 
            className={
                nav 
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" 
                : "absolute top-0 h-screen left-[-100%] ease-in"
            }
        >
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <IoIosClose className="text-4xl md:hidden" />
            </div>
            <ul className="h-full w-full text-center pt-12">
                <li className='text-2xl py-8'>
                    <a href='/'>Home</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/'>Stats</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/'>Members</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/'>Contact</a>
                </li>
            </ul>
                
        </div>
    </nav>
  );
};

export default Navbar;