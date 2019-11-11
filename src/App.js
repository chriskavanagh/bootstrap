import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactPage from "./components/Contact";
import CarouselPage from "./components/CarouselPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselPage />
      <ContactPage />
    </div>
  );
}

export default App;
