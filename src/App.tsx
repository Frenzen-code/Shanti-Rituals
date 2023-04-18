import { useState } from "react";
import Header from "../src/components/Header";
import MainSection from "./components/MainSection";
import MultiCarousel from "./components/MultiCarousel";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
