import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import SaveTheDate from "./components/SaveTheDate";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white font-['Nunito_Sans',sans-serif] text-[#242424] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <SaveTheDate />
      <About />
      <Footer />
    </div>
  );
}
