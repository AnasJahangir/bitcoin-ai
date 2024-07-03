import Image from "next/image";
import React from "react";

function ImagesSec() {
  return (
    <div className="relative">
      <div className="min-h-[200vh] IMageCollection relative">
        <div className="how-bg-top absolute w-[100%]"></div>

        <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
      </div>
      <div className="min-h-[170vh] stars-art">
        <div className="how-bg-top absolute w-[100%]"></div>

        <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
      </div>
      <div className="w-[100%] absolute top-0 flex justify-center">
        <div className="w-[93%] flex justify-between">
          <div className="w-[48%]">
            <h1 className="text-[40px] uppercase text-[#00F0FF] Robot">
              Gallery Highlights
            </h1>
            <p className="text-[18px] cooper text-[#ffffffbb] mt-10">
              Discover the diverse and captivating depictions of BitcoinAI
              created by our talented community.
            </p>
            <div className="flex justify-between mt-10 h-[560px]">
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art1.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Futuristic Visions{" "}
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  Explore images that imagine a world transformed by BitcoinAI,
                  where technology and humanity coexist harmoniously.
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art2.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Artistic Interpretations
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  See how artists from around the globe interpret the BitcoinAI,
                  each bringing their unique style and perspective
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-10 h-[560px]">
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art3.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Futuristic Visions
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  Explore images that imagine a world transformed by BitcoinAI,
                  where technology and humanity coexist harmoniously.
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art4.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Futuristic Visions
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  Explore images that imagine a world transformed by BitcoinAI,
                  where technology and humanity coexist harmoniously.
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
            </div>
            <h1 className="text-[40px] uppercase text-[#00F0FF] Robot mt-10">
              Trending
            </h1>
            <p className="text-[18px] cooper text-[#ffffffbb] mt-10">
              Discover the diverse and captivating depictions of BitcoinAI
              created by our talented community.
            </p>
            <div className="flex justify-between mt-10 h-[560px]">
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art5.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Futuristic Visions
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  Explore images that imagine a world transformed by BitcoinAI,
                  where technology and humanity coexist harmoniously.
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
              <div className="w-[47%] text-center flex flex-col justify-between">
                <div>
                  <Image
                    src={"/img/art6.png"}
                    alt="art"
                    width={5000}
                    height={5000}
                  />
                </div>
                <h1 className="text-[30px] font-medium text-center mt-4">
                  Artistic Interpretations
                </h1>
                <p className="text-[16px] text-[#ffffffb6] font-extralight cooper text-center mt-3">
                  See how artists from around the globe interpret the BitcoinAI,
                  each bringing their unique style and perspective
                </p>
                <button className="w-[100%] bg-[#00F0FF] p-2 text-[30px] text-black rounded-xl font-semibold mt-5">
                  Browse
                </button>
              </div>
            </div>
          </div>
          <div className="w-[48%]">
            <div className="flex justify-end">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Be Inspired <br />{" "}
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">01</h1>
                </div>
                <Image
                  src={"/img/artsec1.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-start mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Celebrate Innovation <br />{" "}
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">02</h1>
                </div>
                <Image
                  src={"/img/artsec2.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-end mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Join the Movement <br />
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">03</h1>
                </div>
                <Image
                  src={"/img/artsec3.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-start mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Visualize Progress <br />
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">04</h1>
                </div>
                <Image
                  src={"/img/artsec4.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-end mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Empower Through Art <br />
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">05</h1>
                </div>
                <Image
                  src={"/img/artsec5.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-start mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Community Creations <br />
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">06</h1>
                </div>
                <Image
                  src={"/img/artsec6.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-end mt-[-26%]">
              <div className="w-[50%]">
                <div className="flex justify-between items-end px-2">
                  <p className="text-[16px] font-semibold">
                    Iconic Symbolism <br />
                    <span className="text-[12px] font-normal">
                      BitcoinAI Visual Collection
                    </span>
                  </p>
                  <h1 className="text-[96px] samsungsharpsans">07</h1>
                </div>
                <Image
                  src={"/img/artsec7.png"}
                  alt="art"
                  className="mt-3"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            <div className="flex justify-start mt-[-16%]">
              <div className="w-[80%]">
                <Image
                  src="/img/flowrs.gif"
                  className="rotate-[33deg]"
                  width="680"
                  height="680"
                  alt="thanks"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesSec;
