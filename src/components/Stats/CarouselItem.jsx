import React, { useState } from "react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  console.log(slides)

  const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative w-full h-screen">
        <div
            className="flex transition ease-out duration-400"
            style={{
                transform: `translateX(-${current * 100}%)`,
            }}
        >
            {slides.map((s, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                        width="100%"
                        src={s.image}
                        alt={s.title}
                        className="object-cover w-full h-screen rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                        <a to={s.link} target="_blank" rel="noopener noreferrer">
                            <p className="text-white text-xl">{s.title}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
            <button onClick={prevSlide}>
                <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <button onClick={nextSlide}>
                <MdOutlineKeyboardDoubleArrowRight />
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((_, i) => (
                <div
                    onClick={() => setCurrent(i)}
                    key={`circle${i}`}
                    className={`rounded-full w-5 h-5 cursor-pointer ${i === current ? 'bg-white' : 'bg-gray-500'}`}
                ></div>
            ))}
        </div>
    </div>
);
};

export default Carousel;