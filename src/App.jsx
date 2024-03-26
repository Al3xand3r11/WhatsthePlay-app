import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Info"

function App() {

  return (
    <div>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}

export default App;
