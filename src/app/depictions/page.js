import React from "react";
import Navbar from "../components/Navbar";
import ArtHero from "../components/ArtHero";
import ImagesSec from "../components/ImagesSec";
import ShareYourVision from "../components/ShareYourVision";
import ArtSect4 from "../components/ArtSect4";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <ArtHero />
      <ImagesSec />
      <ShareYourVision />
      <ArtSect4 />
      <Footer />
    </div>
  );
}

export default page;
