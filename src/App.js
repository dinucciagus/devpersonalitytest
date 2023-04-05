import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Test from "./components/test";
import Result from "./components/result";
import How from "./components/how";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/process" element={<How />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
