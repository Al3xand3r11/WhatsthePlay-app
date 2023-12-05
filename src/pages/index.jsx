import { useState } from "react";
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
            <Contact />
        </>
    );
};

export default Home;