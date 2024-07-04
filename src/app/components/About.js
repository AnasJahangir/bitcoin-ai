import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="min-min-h-[3360px] about relative">
      <div className="text-center mt-28 relative z-10">
        <h1 className="text-[60px] font-extrabold BitcoinAI">$BitcoinAI</h1>
        <h2 className="text-[32px] font-semibold mt-10 text-[#00F0FF]">
          What&apos;s the Deal with $BitcoinAI?
        </h2>
        <p className="text-[32px] font-semibold mt-8 ">
          Well, it&apos;s not just about a cool robot holding a lit torch.
          It&apos;s about
          <br />
          what this symbol represents.
        </p>
        <p className="text-[32px] font-semibold mt-8 ">
          Imagine it standing tall, declaring to the world:
        </p>
        <p className="text-[32px] font-semibold mt-8 text-[#00F0FF]">
          &quot;Give Me Your Tired, Your Poor, Your Huddled Masses Yearning To
          Be
          <br /> Free... to HODL $BitcoinAI.&quot;
        </p>
        <p className="text-[32px] font-semibold mt-8 ">
          This proclamation tells us that by embracing{" "}
          <span className="text-[#00F0FF]">Bitcoin</span> and{" "}
          <span className="text-[#00F0FF]">AI</span> AI, we&apos;re <br />
          setting ourselves up for an empowered future.
        </p>
        <p className="text-[32px] font-semibold mt-8 ">
          It&apos;s a beacon for Financial{" "}
          <span className="text-[#00F0FF]">Freedom and Empowerment</span>,
          showing <br /> everyone that the future of finance is here, and
          it&apos;s for all of us.
        </p>
        <h1 className="text-[100px] leading-[104.7px] text-[#00F0FF] SF mt-36">
          About <br /> & <br /> Mission
        </h1>
        <div className="flex justify-center mt-48">
          <div className="relative">
            <Image
              src={"/img/about-men.png"}
              height={984}
              width={984}
              alt="Hero Image"
            />
            <Image
              src={"/img/T0NA.gif"}
              className="absolute top-[17%] scale-x-[-1] right-[35%]"
              height={130}
              width={130}
              alt="Hero Image"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-5%] left-[20%]"
              height={120}
              width={120}
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <p className="text-[32px] font-semibold mt-8 ">
              BitcoinAI represents a groundbreaking fusion of decentralized
              currency and <br /> advanced artificial intelligence, Symbolizing
              Global{" "}
              <span className="text-[#00F0FF]">Freedom and Empowerment</span>{" "}
              <br /> For All through digital innovation.
            </p>
            <p className="text-[32px] font-semibold mt-20 ">
              It stands at the forefront of a new financial era, where
              individuals can exercise <br /> control over their economic
              futures, unbound by traditional financial <br /> constraints. .
            </p>
            <p className="text-[32px] font-semibold mt-8 ">
              At the core of{" "}
              <span className="text-[#00F0FF]">BitcoinAI&apos;s mission</span>{" "}
              is the integration of real-time data analysis <br /> and market
              predictions, facilitated through the BitcoinAI Chatbot and its{" "}
              <br /> humanoid robot with a glowing Bitcoin logo emblazoned on
              its chest....
            </p>
            <div>
              <button className="text-[#001929] text-[20.1px] bg-[#00F0FF] px-5 py-4 rounded-2xl mt-20 font-semibold">
                See More
              </button>
            </div>
            <p className="text-[32px] font-semibold mt-20 ">
              <span className="text-[#00F0FF] "> The year is 2140</span>,
              humanity stands on the precipice of a new age,
            </p>
            <p className="text-[32px] font-semibold mt-10 ">
              where technology and finance have intertwined in ways once thought{" "}
              <br />
              impossible. The culmination of over a century of innovation, the{" "}
              <br />
              complete mining of Bitcoin has turned the cryptocurrency into an{" "}
              <br />
              incredibly scarce and coveted asset.
            </p>
            <p className="text-[32px] font-semibold mt-10 ">
              <span className="text-[#00F0FF] "> Artificial </span>intelligence,
              having reached unprecedented levels of <br />
              sophistication, now orchestrates nearly every aspect of daily
              life, <br /> shaping the future with precision and insight....
            </p>
          </div>
          <div className="absolute top-[-20%] flex justify-center w-[100%]">
            <Image
              src={"/img/about-men2.png"}
              height={984}
              width={984}
              alt="Hero Image"
            />
          </div>
          <div className="absolute top-[-50%]  w-[100%] flex justify-between">
            <Image
              src={"/img/side-item.png"}
              height={300}
              width={350}
              alt="Hero Image"
            />
            <Image
              src={"/img/side-item2.png"}
              height={400}
              width={350}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="background-overlay absolute bottom-0 w-[100%] h-[90%]">
        <div className="relative">
          <div className="hero-bg-top absolute  w-[100%] "></div>
        </div>
      </div>
      <div className="hero-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default About;
