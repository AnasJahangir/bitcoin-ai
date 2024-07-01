import Image from "next/image";
import React from "react";

function Swap() {
  return (
    <div className="swap min-h-[100vh] relative">
      <div className="px-10 pt-5  ">
        <div className="flex items-center gap-5 ready-box mt-10 p-8">
          <div className="w-[110] h-[110] flex items-center">
            <Image src={"/img/logo.png"} width={110} height={110} alt="image" />
          </div>
          <div>
            <h1 className="text-[35px] Robot capitalize">
              switch eth for bitcoinai
            </h1>
            <p className="text-[23px] mt-3 leading-[42px] poppins-light font-light">
              switch ETH for BitcoinAI. We have ZERO taxes so you don’t need to
              worry about buying with a specific slippage, although you may need
              to use slippage during times of market volatility.
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-between ">
          <div className="w-[50%] h-[750px] relative z-10 p-4 border-[#00F0FF] border-[1px] bg-[#001929] rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <p className="text-[24px] text-[#DDDFE3] font-semibold">Swap</p>
                <p className="text-[24px] text-[#5D6785] font-semibold">Buy</p>
              </div>
              <div className="flex items-center text-[#5D6785] text-[18px] p-3 rounded-[30px] bg-[#F5F6FC]">
                0.30% slippage
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4945 3.29761C13.1399 0.637123 16.9246 0.637123 17.57 3.29761C17.6669 3.69729 17.8567 4.06846 18.1241 4.3809C18.3915 4.69334 18.7289 4.93823 19.1088 5.09564C19.4888 5.25304 19.9005 5.31851 20.3105 5.28672C20.7205 5.25493 21.1172 5.12678 21.4683 4.9127C23.8061 3.48852 26.4833 6.16416 25.0591 8.50345C24.8453 8.85443 24.7174 9.2509 24.6857 9.66063C24.6539 10.0704 24.7194 10.4818 24.8766 10.8615C25.0338 11.2412 25.2784 11.5784 25.5905 11.8458C25.9026 12.1132 26.2733 12.3031 26.6727 12.4003C29.3332 13.0457 29.3332 16.8304 26.6727 17.4758C26.273 17.5726 25.9018 17.7625 25.5894 18.0299C25.2769 18.2973 25.032 18.6347 24.8746 19.0146C24.7172 19.3945 24.6518 19.8062 24.6836 20.2163C24.7153 20.6263 24.8435 21.023 25.0576 21.3741C26.4818 23.7119 23.8061 26.389 21.4668 24.9649C21.1159 24.7511 20.7194 24.6231 20.3096 24.5914C19.8999 24.5597 19.4885 24.6251 19.1088 24.7823C18.7291 24.9396 18.3918 25.1842 18.1245 25.4962C17.8571 25.8083 17.6671 26.1791 17.57 26.5784C16.9246 29.2389 13.1399 29.2389 12.4945 26.5784C12.3976 26.1788 12.2078 25.8076 11.9404 25.4951C11.673 25.1827 11.3356 24.9378 10.9557 24.7804C10.5758 24.623 10.164 24.5575 9.75402 24.5893C9.34401 24.6211 8.9473 24.7493 8.59617 24.9633C6.2584 26.3875 3.58124 23.7119 5.00542 21.3726C5.2192 21.0216 5.34715 20.6251 5.37886 20.2154C5.41058 19.8057 5.34517 19.3942 5.18794 19.0145C5.03072 18.6348 4.78613 18.2976 4.47404 18.0302C4.16195 17.7629 3.79117 17.5729 3.39185 17.4758C0.731362 16.8304 0.731362 13.0457 3.39185 12.4003C3.79153 12.3034 4.1627 12.1136 4.47514 11.8462C4.78758 11.5788 5.03247 11.2414 5.18988 10.8615C5.34728 10.4815 5.41275 10.0698 5.38096 9.65979C5.34917 9.24977 5.22102 8.85306 5.00693 8.50194C3.58275 6.16416 6.2584 3.487 8.59769 4.91118C10.1128 5.83235 12.0763 5.01724 12.4945 3.29761Z"
                    stroke="#5D6785"
                    strokeWidth="2.27263"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.4863 14.9373C10.4863 16.1428 10.9652 17.2989 11.8176 18.1513C12.67 19.0037 13.8261 19.4826 15.0316 19.4826C16.2371 19.4826 17.3932 19.0037 18.2456 18.1513C19.098 17.2989 19.5768 16.1428 19.5768 14.9373C19.5768 13.7319 19.098 12.5758 18.2456 11.7234C17.3932 10.871 16.2371 10.3921 15.0316 10.3921C13.8261 10.3921 12.67 10.871 11.8176 11.7234C10.9652 12.5758 10.4863 13.7319 10.4863 14.9373Z"
                    stroke="#5D6785"
                    strokeWidth="2.27263"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[#F5F6FC] mt-4 p-4 rounded-3xl text-[#001929] flex justify-between">
              <h1 className="text-[53px]">1</h1>
              <div>
                <div>
                  <div className="flex justify-between text-[30px] items-center bg-[#E8ECFB] p-3 rounded-full">
                    <Image
                      src={"/img/cryptocurrency.png"}
                      width={36}
                      height={36}
                      alt="image"
                    />
                    <span>ETH</span>
                    <svg
                      width={19}
                      height={11}
                      viewBox="0 0 19 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.67285 1.91895L9.24828 9.49438L16.8237 1.91895"
                        stroke="url(#paint0_linear_246_743)"
                        strokeWidth="3.03017"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_246_743"
                          x1="16.8237"
                          y1="5.70666"
                          x2="1.67285"
                          y2="5.70666"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#001929" />
                          <stop offset={1} stopColor="#001929" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[21px] text-[#5D6785] font-medium mt-4">
                    Balance: 15.1021{" "}
                    <span className="ms-3 text-[#FB118E]">Max</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F6FC] mt-3 p-4 rounded-3xl text-[#001929] flex justify-between">
              <h1 className="text-[53px]">9999</h1>
              <div>
                <div>
                  <div className="flex gap-5 justify-between text-[30px] items-center bg-[#E8ECFB] p-3 rounded-full">
                    <Image
                      src={"/img/logo.png"}
                      width={36}
                      height={36}
                      alt="image"
                    />
                    <span>BTCAI</span>
                    <svg
                      width={19}
                      height={11}
                      viewBox="0 0 19 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.67285 1.91895L9.24828 9.49438L16.8237 1.91895"
                        stroke="url(#paint0_linear_246_743)"
                        strokeWidth="3.03017"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_246_743"
                          x1="16.8237"
                          y1="5.70666"
                          x2="1.67285"
                          y2="5.70666"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#001929" />
                          <stop offset={1} stopColor="#001929" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[21px] text-[#5D6785] font-medium mt-4">
                    Balance: 21.02
                  </p>
                </div>
              </div>
            </div>
            <div className="border-[#D2D9EE] mt-5 border-[1px] rounded-3xl p-4 text-[#5D6785] ">
              <div className="flex justify-between items-center">
                <p>1 GTC = 0.00051 ETH</p>
                <svg
                  width={19}
                  height={11}
                  viewBox="0 0 19 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7598 9.19238L9.18434 1.61695L1.6089 9.19238"
                    stroke="#5D6785"
                    strokeWidth="3.03017"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="my-4 border-t-[#D2D9EE] border-b-[#D2D9EE] border-t-[1px] border-b-[1px] py-4">
                <div className="flex justify-between items-center">
                  <p>Network fees</p>
                  <p className="text-[#95969B]">~$6.42</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Price Impact</p>
                  <p className="text-[#95969B]">-1.025%</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Minimum output</p>
                  <p className="text-[#95969B]">1953.54</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Expected output</p>
                  <p className="text-[#95969B]">1954.81</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Order routing</p>
                <p className="text-[#95969B]">Uniswap API</p>
              </div>
            </div>
            <button className="text-[#001929] text-[20.1px] bg-[#00F0FF] px-5 py-4 rounded-2xl mt-3 font-semibold w-[100%]">
              Swap
            </button>
          </div>
          <div className="relative">
            <Image
              src={"/img/swap-men.png"}
              alt="hero"
              width={10000}
              height={10000}
              className="w-[100%] h-[100%]"
            />
            <Image
              src={"/img/GlIU.gif"}
              className="absolute top-[-2%] left-[-5%] rotate-[-6deg]"
              height={300}
              width={300}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="how-bg-buttom absolute bottom-0 w-[100%]"></div>
    </div>
  );
}

export default Swap;
