import Image from "next/image";
import React from "react";

function RoadMap() {
  return (
    <div className="Road-Map min-h-[100vh] relative">
      <div className="how-bg-top absolute  w-[100%] "></div>
      <div className="flex flex-col justify-center items-center relative z-10 mt-20">
        <div className="flex items-center">
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
          <h1 className="text-[120px] font-bold SF text-[#00F0FF]">ROADMAP</h1>
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
        </div>
        <p className="text-[36px] poppins-light mt-5">
          The path to a new financial future is laid out before us. Our <br />{" "}
          roadmap is a testament to our vision and ambition:
        </p>
      </div>

      <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default RoadMap;
