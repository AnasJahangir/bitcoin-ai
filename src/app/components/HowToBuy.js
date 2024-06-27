import Image from "next/image";
import React from "react";

function HowToBuy() {
  return (
    <div className="min-h-[100vh] how-to-buy relative  ">
      <div className="how-bg-top absolute  w-[100%] "></div>
      <div className="flex flex-col justify-center items-center min-h-[100vh] relative z-10">
        <Image
          src={"/img/how-to-buy-coin.png"}
          width={525}
          height={363}
          alt="coin"
        />
        <div className="flex items-center">
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
          <h1 className="text-[120px] font-bold SF">HOW TO BUY</h1>
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
        </div>
      </div>
      <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default HowToBuy;
