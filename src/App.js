import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",  
  });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
