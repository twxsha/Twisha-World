import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Credit, Landing } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} /> 
        <Route path="/credit" element={<Credit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


