import Image from "next/image";
import React from "react";

function ChatbotSec2() {
  return (
    <div className="flex justify-center relative">
      <div className="w-[70%] relative z-10">
        <p className="text-[#ffffffb6] text-[28px] poppins-light">
          BitcoinAI Chatbot uses artificial intelligence technologies, such as
          machine learning and deep learning, to optimize and improve various
          aspects of Bitcoin and cryptocurrency overall ecosystem.
          <br />
          <br />
          It utilizes AI algorithms to make data-driven decisions and to
          automate strategies based on market data and trends. The AI system can
          analyze large amounts of historical price data, market sentiment, news
          articles, social media posts, and other relevant information in
          real-time to make more accurate predictions about the future of
          Bitcoin and cryptocurrencies in general.
          <br />
          <br />
          It offers automated trading, intelligent investment strategies, and
          portfolio optimization tools for Cryptocurrency investors who want to
          leverage the power of AI to enhance efficiency, accuracy, and
          profitability in the cryptocurrency market. This can be especially
          useful to capitalize on the volatile nature of the cryptocurrency
          market.
        </p>
      </div>
      <div className="absolute top-[-50%]  w-[100%] flex justify-between">
        <Image
          src={"/img/side-item.png"}
          height={140}
          width={180}
          alt="Hero Image"
        />
        <Image
          src={"/img/side-item2.png"}
          height={140}
          width={180}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default ChatbotSec2;
