
import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import {Footer} from "./components/Footer.jsx";


export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Footer/>
      
    </div>
  );
}
