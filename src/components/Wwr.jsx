// import React from "react";
// import wwr from "../data/wwr.png";
// const Wwr = () => {
//   return (
//     <div>
//       <div className="h-[80%] bg-yellow-800 flex flex-col">
//         <h1 className="text-[75px] relative left-10 text-[#9de3e3] font-semibold">
//           Who we are?
//         </h1>
//         <div className="grid px-11 gap-10 grid-flow-dense grid-cols-[1fr_2fr_0fr]">
//           <p className="text-[24px] text-justify text-white">
//             We are currently a team of a few individuals united by our diversity
//             of knowledge. Our journey began in college, where we recognized that
//             our middle- class upbringing often left us without the proper
//             guidance to navigate the challenges in our careers. After
//             experiencing various ups and downs in life, we decided to share our
//             experiences with young minds. As DiscerningHearts, our mission is to
//             bridge knowledge gaps, enabling young individuals to make informed
//             decisions and choose the right career path for their future.
//           </p>
//           <img className="rounded-lg" src={`${wwr}`} alt="" />
//         </div>
//         <a
//           href="https://docs.google.com/forms/d/e/1FAIpQLSeGr8L1qWyqjAcidR59EK_j0zz2f1CzJ4JD495KoWzjVg9bqA/viewform"
//           target="_blank"
//           className=" bg-yellow-500 text-white inline-flex items-center justify-center p-3 w-36 rounded-md font-bold ml-10 mb-14"
//         >
//           Join Our Team
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Wwr;

import React from "react";
import wwr from "../data/wwr.png";

const Wwr = () => {
  return (
    <div>
      <div className="h-auto sm:h-[80%] bg-yellow-800 flex flex-col p-6 sm:p-10 lg:p-16">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[75px] relative left-0 sm:left-10 text-[#9de3e3] font-semibold mb-6 sm:mb-10">
          Who we are?
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr_0fr] gap-6 sm:gap-10 px-0 sm:px-6 lg:px-11">
          <p className="text-base sm:text-lg lg:text-[24px] text-justify text-white">
            We are currently a team of a few individuals united by our diversity
            of knowledge. Our journey began in college, where we recognized that
            our middle-class upbringing often left us without the proper
            guidance to navigate the challenges in our careers. After
            experiencing various ups and downs in life, we decided to share our
            experiences with young minds. As DiscerningHearts, our mission is to
            bridge knowledge gaps, enabling young individuals to make informed
            decisions and choose the right career path for their future.
          </p>
          {/* Image */}
          <img
            className="rounded-lg w-full sm:w-auto"
            src={`${wwr}`}
            alt="Who we are"
          />
        </div>

        {/* Join Our Team Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeGr8L1qWyqjAcidR59EK_j0zz2f1CzJ4JD495KoWzjVg9bqA/viewform"
          target="_blank"
          className="bg-yellow-500 text-white inline-flex items-center justify-center p-2 sm:p-3 w-32 sm:w-36 rounded-md font-bold mt-8 ml-0 sm:ml-10 mb-14"
          rel="noopener noreferrer"
        >
          Join Our Team
        </a>
      </div>
    </div>
  );
};

export default Wwr;
