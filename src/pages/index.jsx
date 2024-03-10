import { useState } from "react";
import HeroSection from "../components/Info";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Members from "../components/Members";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <NavBar toggle={toggle} />
            <HeroSection />
            <Members />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;