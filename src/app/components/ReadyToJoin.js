import Image from "next/image";
import React from "react";

function ReadyToJoin() {
  return (
    <div>
      <div className="text-center">
        <p className="text-[36px] font-medium">
          Ready to join the BitcoinAI revolution? It’s simpler than you <br />{" "}
          might think. Here’s your quick guide to getting started:
        </p>
      </div>
      <div className="px-10 mt-20 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-5 ready-box mt-10 p-8">
            <div className="w-[100px] h-[100px] flex items-center">
              <Image
                src={"/img/metamask-icon.png"}
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <div>
              <h1 className="text-[35px] Robot capitalize">Create a wallet</h1>
              <p className="text-[23px] mt-3 leading-[42px] poppins-light font-light">
                Download Metamask or your wallet of choice from the app store or
                google play store for free. Desktop users, download the google
                chrome extension by going to metamask.io.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 ready-box mt-10 p-8">
            <div className="w-[100px] h-[100px] flex items-center">
              <Image
                src={"/img/cryptocurrency.png"}
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <div>
              <h1 className="text-[35px] Robot capitalize">Get Some ETH</h1>
              <p className="text-[23px] mt-3 leading-[42px] poppins-light font-light">
                Have ETH in your wallet to switch to BitcoinAI. If you don’t
                have any ETH, you can buy directly on metamask, transfer from
                another wallet, or buy on another exchange and send it to your
                wallet.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 ready-box mt-10 p-8">
            <div className="w-[110] h-[110] flex items-center">
              <Image
                src={"/img/uniswap-uni-2.png"}
                width={110}
                height={110}
                alt="image"
              />
            </div>
            <div>
              <h1 className="text-[35px] Robot capitalize">go to uniswap</h1>
              <p className="text-[23px] mt-3 leading-[42px] poppins-light font-light">
                connect to Uniswap. Go to app.uniswap.org in google chrome or on
                the browser inside your Metamask app. Connect your wallet. Paste
                the BitcoinAI token address into Uniswap, select Pepe, and
                confirm. When Metamask prompts you for a wallet signature, sign.
              </p>
            </div>
          </div>
        
        </div>
        <div className="absolute top-[-10%] left-[-15%]">
          <Image
            src={"/img/flowrs.gif"}
            width={600}
            height={600}
            alt="flowrs"
          />
        </div>
        <div className="absolute bottom-[-20%] right-[1%]">
          <Image
            src={"/img/flowrs.gif"}
            width={600}
            height={600}
            alt="flowrs"
          />
        </div>
      </div>
    </div>
  );
}

export default ReadyToJoin;
