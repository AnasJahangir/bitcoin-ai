import Image from "next/image";
import React from "react";

function GetInTouch() {
  return (
    <div className="min-h-[100vh] mt-20">
      <div className="flex justify-center">
        <div className="w-[95%] flex justify-center ">
          <div className="w-[65%] flex ps-[70px] items-center get-in-touch-form rounded-lg">
            <div className="w-[70%] py-10">
              <h1 className="text-[60px] SF text-[#00F0FF]">GET IN TOUCH</h1>
              <p className="text-[18px] font-semibold">
                Contact us if you need support.
              </p>
              <div className="flex gap-5 mt-10">
                <div>
                  <label htmlFor="First name">First name </label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-[1px] p-1 rounded-xl w-[100%] mb-3"
                  />
                </div>
                <div>
                  <label htmlFor="First name">Last name </label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-[1px] p-1 rounded-xl w-[100%] mb-3"
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-10">
                <div>
                  <label htmlFor="First name">Email address </label>
                  <input
                    type="email"
                    className="bg-transparent outline-none border-[1px] p-1 rounded-xl w-[100%] mb-3"
                  />
                </div>
                <div>
                  <label htmlFor="First name">Phone number </label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-[1px] p-1 rounded-xl w-[100%] mb-3"
                  />
                </div>
              </div>
              <div className="mt-10">
                <label htmlFor="Message">Message</label>
                <textarea className="bg-transparent outline-none border-[1px] p-1 rounded-xl w-[100%] mb-3 "></textarea>
              </div>
              <button className="text-[#001929]  bg-[#00F0FF] px-4 py-3 rounded-2xl mt-10 font-semibold">
                SEND MESSAGE
              </button>
            </div>
          </div>
          <div className="w-[35%] ml-[-10%] ">
            <Image
              src={"/img/getintouch.png"}
              width={774}
              height={859}
              className="h-[100%] rounded-lg"
              alt="getintouch"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="w-[80%] flex justify-between items-center mt-10">
          <div className="w-[50%] relative">
            <Image
              src={"/img/getintouch-men.png"}
              width={774}
              height={859}
              className="h-[100%]"
              alt="getintouch"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-7%] right-0 rotate-[-5deg]"
              height={130}
              width={130}
              alt="roadmap"
            />
          </div>
          <div className="text-center w-[50%]">
            <h1 className="SF text-[60px] text-[#00F0FF] ">
              And there you have it{" "}
            </h1>
            <p className="text-[36px]">
              The story of <span className="text-[#00F0FF]">BitcoinAI,</span>{" "}
              where the future of finance begins today. Let’s step into this new
              world together!
            </p>
          </div>
        </div>
        <div className="absolute top-[0%]  w-[100%] flex justify-between">
          <Image
            src={"/img/side-item.png"}
            height={100}
            width={150}
            alt="Hero Image"
          />
          <Image
            src={"/img/side-item2.png"}
            height={100}
            width={150}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="footer-top-bg relative min-h-[100vh] flex justify-center align-bottom">
        <div className="hero-bg-top absolute  w-[100%]  "></div>
        {/* <div className="relative w-[100%] flex justify-center h-[500px]  z-10">
          <Image
            src={"/img/7ZN3.gif"}
            width={200}
            height={200}
            className="w-[500px]"
            alt="getintouch"
          />
        </div> */}
        <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
      </div>
    </div>
  );
}

export default GetInTouch;
