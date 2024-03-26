import React from "react";

function MemberItem({name, imgUrl, stack, link}){
    return(
        <a 
            href={link}
            target="_blank"
            rel="noopenner noreferrer"
            className="border-2 border-stone-900 dark:border-white
            rounded-md overflow-hidden">
        <img
            src={imgUrl}
            alt="portfolio"
            className="w-full h-60 md:h-72 obect-cover cursor-pointer rounded-full "
        />
        <div className="w-full p-4">
            <h3 className="text-lg md:text-x1 mb-2
            md:mb-3 font-semibold dark:text-white">{name}</h3>
            <p className="flex flex-wrap gap-2 flex-rowitems-center justify-start
            text-xs md:text-sm dark:text-white">
                {stack.map(item => (
                    <span className="inline-block px-2
                    py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                    </span>
                ))}
            </p>
        </div>
        </a>
    )
}

export default MemberItem;