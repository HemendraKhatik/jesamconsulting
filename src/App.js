import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoading from "./components/Reusable/PageLoading";

// for carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Home = lazy(() => import("./Pages"));
const About = lazy(() => import("./Pages/about"));
const Website = lazy(() => import("./Pages/website"));
const Application = lazy(() => import("./Pages/application"));
const Software = lazy(() => import("./Pages/software"));
const Contact = lazy(() => import("./Pages/contact"));

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
