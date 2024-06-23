import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
// import MessageList from "./components/MessageList";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
      {/* <MessageList /> */}
    </Router>
  );
};

export default App;
