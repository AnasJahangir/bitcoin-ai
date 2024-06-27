import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="hero min-h-[100vh] mt-10 relative flex justify-center">
      <div className="hero-bg-top absolute  w-[100%] "></div>
      <div className="container flex  py-5 px-5">
        <div className="relative z-10 w-[50%]">
          <h1 className="text-[120px] text-[#00F0FF] SF tracking-widest">
            <span className="text-[#F5841F]">Bitcoin</span>AI
          </h1>
          <p className="text-[70px] leading-[73.29px] SF text-[#EEEEEE] ">
            A New Symbol of <br />
            <span className="text-[#00F0FF]">Freedom and Empowerment</span>{" "}
            <br /> for All
          </p>
          <p className="text-[32px] font-semibold flex items-center gap-3 mt-5">
            Echoing
            <Image src={"/img/hero-speak.png"} height={72} width={72} />
          </p>
          <p className="text-[32px] font-bold leading-[43px] mt-5">
            “GIVE ME YOUR TIRED, YOUR POOR, YOUR HUDDLED MASSES YEARNING TO BE
            FREE... TO HODL $BitcoinAI."
          </p>
          <div className="flex gap-14 items-center mt-10">
            <Image src={"/img/twitter.png"} height={68} width={68} alt="logo" />
            <Image
              src={"/img/telegram.png"}
              height={68}
              width={68}
              alt="logo"
            />
            <Image
              src={"/img/coinmarketcap.png"}
              height={68}
              width={68}
              alt="logo"
            />
            <Image
              src={"/img/etherscan.png"}
              height={68}
              width={68}
              alt="logo"
            />
            <Image
              src={"/img/uniswap-uni.png"}
              height={68}
              width={68}
              alt="logo"
            />
            <Image
              src={"/img/dextools.png"}
              height={68}
              width={68}
              alt="logo"
            />
          </div>
        </div>
        <div className="w-[50%] absolute bottom-[0] right-[1%] ">
          <div className="relative">
            <Image
              src={"/img/hero-men.png"}
              height={984}
              width={984}
              alt="Hero Image"
            />
            <Image
              src={"/img/T0NA.gif"}
              className="absolute top-[20%] scale-x-[-1] right-[10px]"
              height={275}
              width={292}
              alt="Hero Image"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-19%] left-[30px]"
              height={200}
              width={200}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default Hero;
