import Image from "next/image";
import React from "react";

function Token() {
  return (
    <div className="token min-h-[100vh] relative">
      <div className="how-bg-top absolute  w-[100%] "></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <div className="flex items-center">
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
          <h1 className="text-[120px] font-bold SF text-[#00F0FF]">
            TOKENOMICS
          </h1>
          <Image
            src={"/img/HOWTOBUY.gif"}
            width={141}
            height={141}
            alt="coin"
          />
        </div>
        <h1 className="text-[60px] Cyborg mt-10">
          Token Supply: <br />{" "}
          <span className="text-[#00F0FF]">21,000,000,000</span>
        </h1>
        <div className="w-[80%] token-child-bg h-[662px] mt-20 flex flex-col justify-center items-center">
          <h1 className="text-[46px] font-bold Robot text-[#00F0FF] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
            No Taxes,
          </h1>
          <h1 className="text-[46px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mt-5">
            Yes, you heard that right. No hidden fees
          </h1>
          <h1 className="text-[46px] mt-5 font-bold Robot text-[#00F0FF] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
            LP Tokens Burned
          </h1>
          <h1 className="text-[46px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mt-5">
            Ensuring stability and trust in the system
          </h1>
          <h1 className="text-[46px] mt-5 font-bold Robot text-[#00F0FF] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
            Contract Ownership Renounced
          </h1>
          <h1 className="text-[46px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mt-5">
            It’s all about empowering the community
          </h1>
        </div>
      </div>

      <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default Token;
