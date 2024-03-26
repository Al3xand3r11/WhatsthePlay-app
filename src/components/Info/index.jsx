import react, { useState } from "react"; 
import { Button } from "../ButtonElements";
import backgroundImg from '../../images/InfoSection.png';
import instagram from '../../images/icons/instagram.png';
import tiktok from '../../images/icons/tiktok.png';
import twitter from '../../images/icons/twitter.png';
import youtube from '../../images/icons/youtube.png';

const HeroSection = () => {

    return (
        <div className='bg-hero-image w-full h-screen bg-cover bg-center '>
            <div className="flex pl-20 items-center justify-center font-extrabold text-8xl pt-60">
                <h1 className="text-white" >What's The <br/> {" "}<span className="text-blue-400">Play</span> {" "} Podcast</h1>
            </div>
        </div>
    );
  };

export default HeroSection;