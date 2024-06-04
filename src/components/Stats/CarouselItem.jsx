import React from "react"

export default function Carousel({ imgUrl, desc }) {
    return(
        <div>
            <img
                src={imgUrl}
                alt="image"
            />
            <p2>
                {desc}
            </p2>
        </div>
    )
} 