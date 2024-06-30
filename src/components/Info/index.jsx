import react, { useState } from "react"; 
import instagram from '../../images/icons/instagram.png';
import tiktok from '../../images/icons/tiktok.png';
import twitter from '../../images/icons/twitter.png';
import youtube from '../../images/icons/youtube.png';

const HeroSection = () => {

    return (
        <div className='bg-hero-image w-full h-screen bg-cover bg-center '>
            <div className="flex flex-row pt-60 ">
            <div className="invisible md:visible">
                <a href="https://www.instagram.com/whatstheplayproductions/" target="_blank">
                <img src={instagram} className="justify-right items-end w-20 h-20 transfrom transition duration-300 hover:scale-125" />
                </a>
                <a href="https://www.tiktok.com/@whatstheplayproductions" target="_blank">
                <img src={tiktok} className="justify-right items-end w-20 h-20 transfrom transition duration-300 hover:scale-125" />
                </a>
                <a href="https://twitter.com/WTPlayPodcast" target="_blank">
                <img src={twitter} className="justify-right items-end w-20 h-20 transfrom transition duration-300 hover:scale-125" />
                </a>
                <a href="https://www.youtube.com/@whatstheplayproductions" target="_blank">
                <img src={youtube} className="justify-right items-end w-20 h-20 transfrom transition duration-300 hover:scale-125" />
                </a>
            </div>
            <div className=" flex flex-col pl-8 md:pl-80 font-extrabold text-8xl">
                <h1 className="text-white pb-8" >What's The <br/> {" "}<span className="text-blue-500">Play</span> {" "} Podcast</h1>
                <a target="_blank" href="https://www.youtube.com/@whatstheplayproductions" className="text-white w-40 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
                    focus:ring-4 focus:outline-none focus:ring-cyan-300  font-lg rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">
                    Episodes
                </a>
            </div>
            </div>


        </div>
    );
  };

export default HeroSection;