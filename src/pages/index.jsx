import { useState } from "react";
import HeroSection from "../components/Info";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <NavBar toggle={toggle} />
            <HeroSection />
            <Contact />
        </>
    );
};

export default Home;