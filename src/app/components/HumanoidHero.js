import Image from "next/image";
import React from "react";

function HumanoidHero() {
  return (
    <div className="min-h-[100vh] relative HumanoidHerobg  ">
      <div className="hero-bg-top absolute  w-[100%] "></div>
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
      <div className="text-center relative z-10">
        <p className="text-[21.49px] SF text-[#FFFFFF99]">
          Exciting features are being developed to revolutionize your
          cryptocurrency experience – stay tuned! Coming Soon...
        </p>
      </div>

      <div className="flex justify-center w-[100%] mt-10">
        <Image
          src={"/img/human-men.png"}
          alt="men"
          width={1032}
          height={1032}
        />
      </div>
    </div>
  );
}

export default HumanoidHero;
