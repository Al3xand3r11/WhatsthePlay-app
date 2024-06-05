import Carousel from "./CarouselItem";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Stats = () => {

    const [articles, setArticles] = useState([])

    console.log(articles);

    {/*const slides = articles.map(test => {
        return test.item.enclosure.url
    })
*/}

    const slides = articles.map(test => {
        return {
        image: test.item.enclosure.url,
        title: test.item.content,
        link: test.item.link
        }
    })



    const getArticles = async () => {
        try {
            const res = await axios.get("http://localhost:8000/");
            setArticles(res.data.slice(0,9));
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])
    

    return (
        <div id="Stats" className='bg-black w-full h-screen bg-cover bg-center flex-row flex'>
            <div className="w-[80%] m-auto pt-11 pb-36">
                <Carousel slides={slides}/>
             </div>
                
        </div>
    );
};

export default Stats;