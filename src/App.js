import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Terms from "./Pages/Terms";
import AOS from "aos";
import { Suspense, lazy } from "react";
import LoaderPage from "./Components/LoaderPage";
// const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Terms = lazy(() => import("./Pages/Terms"));
const Privacy = lazy(() => import("./Pages/Privacy"));

// import "aos/dist/aos.css";
function App() {
  AOS.init({
    duration: 400,
    easing: "ease-in-out",
    once: true,
  });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="/terms"
            element={
              <Suspense fallback={<LoaderPage/>}>
                <Terms />
              </Suspense>
            }
          /> */}
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<LoaderPage />}>
                <Privacy />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
