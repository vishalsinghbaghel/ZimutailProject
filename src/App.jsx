// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import {Footer} from "./components/footer.jsx";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Seller from "./pages/Seller.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Footer/>
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seller" element={<Seller />} />
        </Routes> */}
      </main>
    </div>
  );
}
