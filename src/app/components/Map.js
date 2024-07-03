import Image from "next/image";
import React from "react";

function Map() {
  return (
    <div className="swap relative">
      <div className="px-2 pt-5  ">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Image
              src={"/img/dog.png"}
              width={10000}
              height={10000}
              className="w-[316px] h-[368px]"
              alt="roadmap"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-27%] left-[47%] rotate-[-13deg]"
              height={130}
              width={130}
              alt="roadmap"
            />
          </div>
          <div className="relative">
            <Image
              src={"/img/fram.png"}
              className="w-[1000px]"
              height={100000000}
              width={100000000}
              alt="roadmap"
            />
            <div className="p-9 text-center w-[400px] border-[#00F0FF] border-[1px] rounded-[53.2px] absolute top-[27%] left-[30%]">
              <h1 className="text-[32px] text-[#00F0FF] font-bold">
                Meme & Vision
              </h1>
              <p className="cooper text-[32px] ">
                Building a strong community and making a splash in the crypto
                world.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/img/star.png"}
              className=""
              height={130}
              width={130}
              alt="roadmap"
            />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="relative">
            <Image
              src={"/img/star.png"}
              className=""
              height={130}
              width={130}
              alt="roadmap"
            />
          </div>
          <div className="relative">
            <Image
              src={"/img/fram.png"}
              className="w-[1000px]"
              height={100000000}
              width={100000000}
              alt="roadmap"
            />
            <div className="p-9 text-center w-[400px] border-[#00F0FF] border-[1px] rounded-[53.2px] absolute top-[27%] left-[30%]">
              <h1 className="text-[32px] text-[#00F0FF] font-bold">
                Meme & Vision
              </h1>
              <p className="cooper text-[32px] ">
                Building a strong community and making a splash in the crypto
                world.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src={"/img/map-men.png"}
              width={10000}
              height={10000}
              className="w-[316px] h-[368px]"
              alt="roadmap"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-17%] left-[-8%] rotate-[5deg]"
              height={130}
              width={130}
              alt="roadmap"
            />
          </div>
        </div>
        <div className="flex  mt-20 relative ">
          <div className="relative">
            <Image
              src={"/img/fog.png"}
              className=""
              height={450}
              width={450}
              alt="roadmap"
            />
          </div>
          <div className="w-[500px]">
            <p className="text-[30px] text-center">
              Until <span className="text-[#00F0FF]">$BitcoinAI</span> Chatbot
              and Humanoids are fully built, deployed, and in use by the public,
              it remains primarily a cultural Symbol of{" "}
              <span className="text-[#00F0FF]">Freedom and Empowerment</span>{" "}
              For All; essentially, a meme with no intrinsic value or
              expectation of financial return.
            </p>
          </div>

          <div className="absolute bottom-[-20px] right-0">
            <Image
              src={"/img/group-map.png"}
              width={10000}
              height={10000}
              className="w-[600px]"
              alt="roadmap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
