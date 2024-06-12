import Carousel from "./CarouselItem";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../Title";

const Stats = () => {
    const [articles, setArticles] = useState([]);

    const slides = articles.map(test => ({
        image: test.item?.enclosure?.url || '',
        title: test.item?.content || 'No title available',
        link: test.item?.link || '#'
    }));

    const getArticles = async () => {
        try {
            const res = await axios.get("http://localhost:8000/");
            setArticles(res.data.slice(0, 9));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div id="Stats" className="bg-black w-full h-screen bg-cover bg-center flex flex-row">
            <div className="flex flex-col items-center">
            <Title>Daily News</Title>
            <div className="w-[80%] m-auto pt-11 pb-36">
                <Carousel slides={slides} />
            </div>
            </div>
        </div>
    );
};

export default Stats;