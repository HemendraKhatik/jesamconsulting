import Home from "./Pages";
import Website from "./Pages/website";
import Application from "./Pages/application";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
