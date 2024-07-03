import Image from "next/image";
import React from "react";

function ShareYourVision() {
  return (
    <div className="min-h-[150vh] ShareYourVisionBg relative">
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
      <div className="hero-bg-top absolute  w-[100%] "></div>
      <div className="relative z-10 py-10 flex justify-between items-center mt-24">
        <div className="w-[40%] flex flex-col items-end">
          <h1 className="text-[40px] text-[#00F0FF] Robot">
            Share Your Vision
          </h1>
          <p className="text-[#ffffffa9] text-[18px] ps-20 mt-5">
            Join our growing community of artists and innovators. Share your own
            BitcoinAI-inspired creations and become part of this exciting visual
            journey.
          </p>
        </div>
        <div className="w-[50%]">
          <Image
            src={"/img/art-images1.png"}
            alt="artHero-men"
            width={5000}
            height={5000}
          />
        </div>
      </div>
      <div className="relative z-10 py-10 flex justify-between items-center mt-20">
        <div className="w-[50%]">
          <Image
            src={"/img/art-images2.png"}
            alt="artHero-men"
            width={5000}
            height={5000}
          />
        </div>
        <div className="w-[40%] flex flex-col items-start">
          <h1 className="text-[40px] text-[#00F0FF] Robot">
            Share Your Vision
          </h1>
          <p className="text-[#ffffffa9] text-[18px] pe-20 mt-5">
            Join our growing community of artists and innovators. Share your own
            BitcoinAI-inspired creations and become part of this exciting visual
            journey.
          </p>
        </div>
      </div>
      <div className="relative z-10 py-10 flex justify-between items-center mt-20">
        <div className="w-[40%] flex flex-col items-end">
          <h1 className="text-[40px] text-[#00F0FF] Robot">
            Share Your Vision
          </h1>
          <p className="text-[#ffffffa9] text-[18px] ps-20 mt-5">
            Join our growing community of artists and innovators. Share your own
            BitcoinAI-inspired creations and become part of this exciting visual
            journey.
          </p>
        </div>
        <div className="w-[50%]">
          <Image
            src={"/img/art-images3.png"} 
            alt="artHero-men"
            width={5000}
            height={5000}
          />
        </div>
      </div>
    </div>
  );
}

export default ShareYourVision;
