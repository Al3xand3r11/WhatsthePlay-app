import React from "react";

function MemberItem({name, imgUrl,description, stack, link}){
    return(
        <div className="pr-48 pl-4">
        <a 
            href={link}
            target="_blank"
            rel="noopenner noreferrer"
            className="
            rounded-md overflow-hidden w-28 md:w-full ">
        <img
            src={imgUrl}
            alt="portfolio"
            className=" obect-cover cursor-pointer rounded-full w-16 h-16"
        />
        <div className="w-full p-4">
            <h3 className="text-lg md:text-x1 mb-2
            md:mb-3 font-semibold text-white">{name}</h3>
            <h5 className="text-lg md:text-x1 mb-2
            md:mb-3 text-white">{description}</h5>
            <p className="flex flex-wrap gap-2 flex-rowitems-center justify-start
            text-xs md:text-sm text-white">
                {stack.map(item => (
                    <span className="inline-block px-2
                    py-1 font-semibold border-2 border-white rounded-md">
                        {item}
                    </span>
                ))}
            </p>
        </div>
        <div className="pl-4 pb-4">
        <a target="_blank" href="https://www.youtube.com/@whatstheplayproductions" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-xl
        text-base px-5 py-2.5 text-center me-2 mb-2 pt-2">
            Instagram
        </a>
        </div>
        </a>
        </div>
    )
}

export default MemberItem;