import React from "react";
import wwr from "../data/wwr.png";
const Wwr = () => {
  return (
    <div>
      <div className="h-[80%] bg-yellow-800 flex flex-col">
        <h1 className="text-[75px] relative left-10 text-[#9de3e3] font-semibold">
          Who we are?
        </h1>
        <div className="grid px-11 gap-10 grid-flow-dense grid-cols-[1fr_2fr_0fr]">
          <p className="text-[24px] text-justify text-white">
            We are currently a team of a few individuals united by our diversity
            of knowledge. Our journey began in college, where we recognized that
            our middle- class upbringing often left us without the proper
            guidance to navigate the challenges in our careers. After
            experiencing various ups and downs in life, we decided to share our
            experiences with young minds. As DiscerningHearts, our mission is to
            bridge knowledge gaps, enabling young individuals to make informed
            decisions and choose the right career path for their future.
          </p>
          <img className="rounded-lg" src={`${wwr}`} alt="" />
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeGr8L1qWyqjAcidR59EK_j0zz2f1CzJ4JD495KoWzjVg9bqA/viewform"
          target="_blank"
          className=" bg-yellow-500 text-white inline-flex items-center justify-center p-3 w-36 rounded-md font-bold ml-10 mb-14"
        >
          Join Our Team
        </a>
      </div>
    </div>
  );
};

export default Wwr;
