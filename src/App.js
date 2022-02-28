import Home from "./Pages";
import Website from "./Pages/website";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="website" element={<Website />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
