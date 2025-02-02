import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r text-white pt-32 pb-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 SF text-[#F5841F]">
            Bitcoin<span className="text-[#00F0FF]">AI</span>
          </h1>
          <p className="mb-4 text-[#A1A1AA]">
            Stay updated and join the conversation by following BitcoinAI on our
            social media channels.
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={14} cy={14} r={14} fill="#001929" />
                <path
                  d="M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={14}
                  cy={14}
                  r={14}
                  fill="#00F0FF"
                  fillOpacity="0.5"
                />
                <path
                  d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={14} cy={14} r={14} fill="#001929" />
                <path
                  d="M14.0008 8.44721C15.8095 8.44721 16.0237 8.45398 16.7382 8.48656C17.1678 8.49182 17.5933 8.5707 17.9962 8.71979C18.2884 8.83248 18.5538 9.00511 18.7753 9.22656C18.9967 9.44802 19.1694 9.71339 19.282 10.0056C19.4311 10.4085 19.51 10.8341 19.5153 11.2637C19.5475 11.9782 19.5546 12.1924 19.5546 14.0011C19.5546 15.8098 19.5479 16.024 19.5153 16.7385C19.51 17.1681 19.4311 17.5936 19.282 17.9966C19.1694 18.2888 18.9967 18.5541 18.7753 18.7756C18.5538 18.997 18.2884 19.1697 17.9962 19.2824C17.5933 19.4315 17.1678 19.5103 16.7382 19.5156C16.024 19.5479 15.8098 19.5549 14.0008 19.5549C12.1917 19.5549 11.9775 19.5482 11.2633 19.5156C10.8337 19.5103 10.4082 19.4315 10.0053 19.2824C9.71307 19.1697 9.44769 18.997 9.22624 18.7756C9.00479 18.5541 8.83216 18.2888 8.71947 17.9966C8.57038 17.5936 8.4915 17.1681 8.48624 16.7385C8.45398 16.024 8.44689 15.8098 8.44689 14.0011C8.44689 12.1924 8.45366 11.9782 8.48624 11.2637C8.4915 10.8341 8.57038 10.4085 8.71947 10.0056C8.83216 9.71339 9.00479 9.44802 9.22624 9.22656C9.44769 9.00511 9.71307 8.83248 10.0053 8.71979C10.4082 8.5707 10.8337 8.49182 11.2633 8.48656C11.9779 8.4543 12.192 8.44721 14.0008 8.44721ZM14.0008 7.22656C12.162 7.22656 11.9304 7.2343 11.2079 7.26721C10.6456 7.27839 10.0893 7.38485 9.56269 7.58205C9.11092 7.75226 8.70172 8.019 8.36366 8.36366C8.01869 8.70184 7.75172 9.11127 7.5814 9.56334C7.3842 10.09 7.27775 10.6463 7.26656 11.2085C7.2343 11.9304 7.22656 12.162 7.22656 14.0008C7.22656 15.8395 7.2343 16.0711 7.26721 16.7937C7.27839 17.3559 7.38485 17.9122 7.58205 18.4388C7.75218 18.8908 8.01892 19.3002 8.36366 19.6385C8.70191 19.9832 9.11133 20.25 9.56334 20.4201C10.09 20.6173 10.6463 20.7238 11.2085 20.7349C11.9311 20.7672 12.1617 20.7756 14.0014 20.7756C15.8411 20.7756 16.0717 20.7679 16.7943 20.7349C17.3565 20.7238 17.9128 20.6173 18.4395 20.4201C18.8893 20.2457 19.2978 19.9794 19.6389 19.6381C19.98 19.2968 20.246 18.8882 20.4201 18.4382C20.6173 17.9115 20.7238 17.3553 20.735 16.793C20.7672 16.0711 20.775 15.8395 20.775 14.0008C20.775 12.162 20.7672 11.9304 20.7343 11.2079C20.7231 10.6456 20.6167 10.0893 20.4195 9.56269C20.2493 9.11068 19.9826 8.70126 19.6379 8.36301C19.2996 8.01828 18.8902 7.75153 18.4382 7.5814C17.9115 7.3842 17.3553 7.27775 16.793 7.26656C16.0711 7.2343 15.8395 7.22656 14.0008 7.22656Z"
                  fill="white"
                />
                <path
                  d="M14.0012 10.5234C13.3131 10.5234 12.6406 10.7275 12.0685 11.1097C11.4964 11.492 11.0506 12.0353 10.7873 12.6709C10.524 13.3066 10.4551 14.006 10.5893 14.6808C10.7235 15.3556 11.0548 15.9755 11.5414 16.462C12.0279 16.9485 12.6477 17.2798 13.3225 17.414C13.9973 17.5482 14.6968 17.4794 15.3324 17.2161C15.9681 16.9528 16.5114 16.5069 16.8936 15.9348C17.2759 15.3627 17.4799 14.6902 17.4799 14.0021C17.4799 13.0795 17.1134 12.1947 16.461 11.5423C15.8086 10.8899 14.9238 10.5234 14.0012 10.5234ZM14.0012 16.2602C13.5546 16.2602 13.118 16.1278 12.7467 15.8797C12.3753 15.6315 12.0859 15.2789 11.915 14.8663C11.7441 14.4537 11.6994 13.9996 11.7865 13.5616C11.8736 13.1236 12.0887 12.7213 12.4045 12.4055C12.7203 12.0897 13.1226 11.8746 13.5606 11.7875C13.9987 11.7003 14.4527 11.7451 14.8653 11.916C15.2779 12.0869 15.6306 12.3763 15.8787 12.7476C16.1268 13.119 16.2592 13.5555 16.2592 14.0021C16.2592 14.601 16.0213 15.1754 15.5979 15.5988C15.1744 16.0223 14.6 16.2602 14.0012 16.2602Z"
                  fill="white"
                />
                <path
                  d="M17.6176 11.1981C18.0665 11.1981 18.4305 10.8341 18.4305 10.3852C18.4305 9.93621 18.0665 9.57227 17.6176 9.57227C17.1686 9.57227 16.8047 9.93621 16.8047 10.3852C16.8047 10.8341 17.1686 11.1981 17.6176 11.1981Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={14} cy={14} r={14} fill="#001929" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6078 7.22656C11.0169 7.22656 8.12793 10.1155 8.12793 13.7065C8.12793 16.5684 9.9909 18.9984 12.5559 19.8624C12.8799 19.9164 12.9879 19.7274 12.9879 19.5384C12.9879 19.3764 12.9879 18.9714 12.9879 18.4314C11.1789 18.8364 10.8009 17.5674 10.8009 17.5674C10.5039 16.8114 10.0719 16.6224 10.0719 16.6224C9.47791 16.2174 10.1259 16.2174 10.1259 16.2174C10.7739 16.2714 11.1249 16.8924 11.1249 16.8924C11.6919 17.8914 12.6369 17.5944 13.0149 17.4324C13.0689 17.0004 13.2308 16.7304 13.4198 16.5684C11.9889 16.4064 10.4769 15.8394 10.4769 13.3555C10.4769 12.6535 10.7199 12.0595 11.1519 11.6275C11.0979 11.4655 10.8549 10.8175 11.2059 9.89952C11.2059 9.89952 11.7459 9.73752 12.9879 10.5745C13.5008 10.4395 14.0678 10.3585 14.6078 10.3585C15.1478 10.3585 15.7148 10.4395 16.2278 10.5745C17.4698 9.73752 18.0098 9.89952 18.0098 9.89952C18.3608 10.7905 18.1448 11.4385 18.0638 11.6275C18.4688 12.0865 18.7388 12.6535 18.7388 13.3555C18.7388 15.8394 17.2268 16.3794 15.7688 16.5414C16.0118 16.7304 16.2008 17.1354 16.2008 17.7294C16.2008 18.5934 16.2008 19.2954 16.2008 19.5114C16.2008 19.6734 16.3088 19.8894 16.6598 19.8354C19.2248 18.9984 21.0877 16.5684 21.0877 13.7065C21.0877 10.1155 18.1988 7.22656 14.6078 7.22656Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold mb-2">Home</h2>
            <ul className="space-y-1">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">How to Buy</a>
              </li>
              <li>
                <a href="#">Tokenomics</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">RoadMap</h2>
            <ul className="space-y-1">
              <li>
                <a href="#">BitcoinAI Depictions</a>
              </li>
              <li>
                <a href="#">BitcoinAI Chatbot</a>
              </li>
              <li>
                <a href="#">BitcoinAI Humanoid</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-[#A1A1AA]">
            SUBSCRIBE TO NEWSLETTER
          </h2>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full mb-2 bg-transparent outline-none border-[#00F0FF] border-[1px]  rounded"
            />
            <button className="bg-[#00F0FF] text-black py-3 px-4 font-extrabold rounded ">
              Subscribe
            </button>
          </form>
          <div>
            <Image
              src={"/img/footer-men.png"}
              width={174}
              height={174}
              className="h-[100%] rounded-lg"
              alt="getintouch"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#3E4550] h-[1px] w-[80%] "></div>
      </div>
      <div className="mt-10 text-center ">
        &copy; 2024 by BitcoinAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
