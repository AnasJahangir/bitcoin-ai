import Image from "next/image";
import React from "react";

function HumanoidSec2() {
  return (
    <div className="min-h-[100vh] relative HumanoidSec2 py-36">
      <div className="hero-bg-top top-0 absolute  w-[100%] "></div>
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <p className="w-[70%] text-[36px] font-semibold mt-10">
          Powered by cutting-edge artificial intelligence, the BitcoinAI
          Humanoid Robot possesses the capability to analyze immense volumes of
          data instantaneously
          <br />
          <br />
          This enables it to predict market trends with remarkable accuracy,
          making informed and strategic decisions for its owners. <br /> The{" "}
          <span className="text-[#00F0FF]">BitcoinAI Humanoid</span> Robot
          represents a leap forward in financial empowerment, offering
          individuals unprecedented control over their economic destinies.
        </p>
        <div>
          <div className="flex  justify-center w-[100%] mt-10">
            <Image
              src={"/img/human-men2.png"}
              alt="men"
              width={829}
              height={829}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanoidSec2;
