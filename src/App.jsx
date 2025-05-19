import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Credit, Home, About, Work, Navbar } from "./components";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/learn" element={<Credit />} />
          <Route path="/credit" element={<Credit />} />
        </Routes>
    </BrowserRouter>
     <Analytics/>
    </>
  );
};

export default App;
