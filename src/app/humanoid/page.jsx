import React from "react";
import Navbar from "../components/Navbar";
import HumanoidHero from "../components/HumanoidHero";
import HumanoidSec2 from "../components/HumanoidSec2";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <HumanoidHero />
      <HumanoidSec2 />
      <Footer />
    </div>
  );
}

export default page;
