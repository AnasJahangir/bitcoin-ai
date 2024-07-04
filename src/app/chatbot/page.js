import React from "react";
import Navbar from "../components/Navbar";
import ChatbotHero from "../components/ChatbotHero";
import ChatbotSec2 from "../components/ChatbotSec2";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <ChatbotHero />
      <ChatbotSec2 />
      <Footer/>
    </div>
  );
}

export default page;
