import Home from "./Pages";
import Website from "./Pages/website";
import Application from "./Pages/application";
import Software from "./Pages/software";
import Contact from "./Pages/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/application" element={<Application />} />
        <Route path="/software" element={<Software />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
