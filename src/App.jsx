import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  )
}

export default App;
