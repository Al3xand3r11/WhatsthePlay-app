import React, { useState } from "react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Carousel({ slides }) {

    const [current, setCurrent] = useState();

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(slides.length-1)
        }
        else {
            setCurrent(current-1)
        }
    }

    const nextSlide = () => {
        if (current === slides.length-1) {
            setCurrent(0)
        }
        else {
            setCurrent(current+1)
        }
    }

    return (
        <div className="overflow-hidden relative w-full h-screen ">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => (
            <div className="w-full flex-shrink-0">
               <img  width="100%" src={s.image} className="object-cover w-full h-screen rounded-lg" />;
            </div>
            ))}
          </div>
    
          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={prevSlide}>
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <button onClick={nextSlide}>
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
    
          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      );
} 