import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoading from "./components/Reusable/PageLoading";
// import Home from "./Pages";

const Home = lazy(() => import("./Pages"));
const About = lazy(() => import("./Pages/about"));
const Website = lazy(() => import("./Pages/website"));
const Application = lazy(() => import("./Pages/application"));
const Software = lazy(() => import("./Pages/software"));
const Contact = lazy(() => import("./Pages/contact"));

// import Website from "./Pages/website";
// import Application from "./Pages/application";
// import Software from "./Pages/software";
// import Contact from "./Pages/contact";
// import About from "./Pages/about";


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website" element={<Website />} />
          <Route path="/application" element={<Application />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
