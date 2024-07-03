import Image from "next/image";
import React from "react";

function ArtSect4() {
  return (
    <div className="min-h-[100vh] art-sect-4 relative flex items-center">
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
      <div className="hero-bg-top top-0 absolute  w-[100%] "></div>
      <div className="relative z-10 flex h-[100%] w-[100%]  justify-center items-center">
        <div className="w-[80%] h-[100%] flex justify-between items-center">
          <div className="w-[336.85px] bg-[#001929] rounded-3xl p-3">
            <div>
              <Image
                src={"/img/art-card1.png"}
                alt="artHero-men"
                width={5000}
                height={5000}
              />
            </div>
            <h1 className="text-[17.35px] Robot text-center text-[#00F0FF]  mt-5">
              Explore More
            </h1>
            <div className="flex justify-center mt-5">
              <Image
                src={"/img/art-music.png"}
                alt="artHero-men"
                width={204}
                height={204}
              />
            </div>
          </div>
          <div className="w-[336.85px] bg-[#001929] rounded-3xl p-3">
            <div>
              <Image
                src={"/img/art-card2.png"}
                alt="artHero-men"
                width={5000}
                height={5000}
              />
            </div>
            <h1 className="text-[17.35px] Robot text-center text-[#00F0FF]  mt-5">
              Explore More
            </h1>
            <div className="flex justify-center mt-5">
              <Image
                src={"/img/art-music.png"}
                alt="artHero-men"
                width={204}
                height={204}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtSect4;
