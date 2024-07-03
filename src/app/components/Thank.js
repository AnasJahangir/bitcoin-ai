import Image from "next/image";
import React from "react";

function Thank() {
  return (
    <div className="min-h-[120vh] thank relative ">
      <div className="thank-bg-top absolute  w-[100%] "></div>
      <div className="absolute top-[-30%] flex justify-center w-[100%] ">
        <Image
          src="/img/flowrs.gif"
          className="rotate-[33deg]"
          width="680"
          height="680"
          alt="thanks"
        />
      </div>
      <div className="w-[100%] flex justify-center bottom-0 absolute z-10 ">
        <div className="text-center w-[70%]">
          <h1 className="text-[46px] font-bold text-[#00F0FF]">
            Thank you for visiting BitcoinAI.{" "}
          </h1>
          <p className="mt-10 text-[36px]">
            We’re excited to have you on this journey towards financial
            empowerment and innovation. If you have any questions or need
            support, feel free to reach out. Don’t forget to follow us on our
            social media channels to stay in the loop with the latest updates
            and developments.
          </p>
        </div>
      </div>
      <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default Thank;
