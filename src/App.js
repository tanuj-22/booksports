import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
