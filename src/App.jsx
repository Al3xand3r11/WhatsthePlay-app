import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Info"
import Stats from "./components/Stats";
import Members from "./components/Members";
import Contact from "./components/Contact";
import ContentBreak from "./components/ContentBreak";

function App() {

  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Stats/>
      <ContentBreak/>
      <Members/>
      <ContentBreak/>
      <Contact/>
    </div>
  )
}

export default App;
