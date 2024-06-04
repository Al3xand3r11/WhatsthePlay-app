import Carousel from "./CarouselItem";
import slides from "./slides";
import React from "react";
const Stats = () => {
    return (
        <div id="Stats" className='bg-black w-full h-screen bg-cover bg-center flex-row flex'>
        <div className="flex pl-20 text-white font-extrabold text-8xl">
                {slides.map(item => (
                    <Carousel
                        imgUrl={item.imgUrl}
                        desc={item.desc}
                    />
                ))}
        </div>
    </div>
    );
};

export default Stats;