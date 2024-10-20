import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
