// import React from "react";
// import image from "../data/welcome.jpg";
// import { Link } from "react-router-dom";
// import logo from "../data/logo.png";
// const Welcome = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover", // Add this for proper scaling
//         backgroundPosition: "center", // Add this for better alignment
//         height: "80vh", // Adjust height as needed
//       }}
//     >
//       <div className="flex gap-5 absolute top-32 left-36 text-white font-extrabold">
//         <img className="h-12" src={`${logo}`} alt="" />
//         <h4 className="inline text-[#91d9c4]">
//           {" "}
//           <strong>
//             Discerning <br /> Hearts
//           </strong>
//         </h4>
//       </div>

//       <div className="absolute top-60 left-36 flex flex-col gap-10">
//         <div className="text-5xl w-[52%] text-[#000] font-bold">
//           Let’s Enlighten Young Minds about the Opportunities in IT
//         </div>
//         <p className="w-[48%] text-[20px] text-justify font-semibold text-white">
//           Welcome to DiscerningHearts, where we are dedicated to empowering
//           young minds with the knowledge and insights needed to make informed
//           decisions in the field of computer science, guiding them with wisdom
//           and compassion toward a bright future in the IT industry.
//         </p>
//         <Link className="border border-white border-3 bg-black text-white inline-flex items-center justify-center p-3 w-36 rounded-md font-bold">
//           Attend Event
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

import React from "react";
import image from "../data/welcome.jpg";
import { Link } from "react-router-dom";
import logo from "../data/logo.png";
import { HashLink } from 'react-router-hash-link';
import { Button } from "@mui/material";

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Ensures the image scales properly
        backgroundPosition: "center", // Keeps the image centered
        height: "80vh", // Adjusts height
      }}
      className="relative"
    >
      {/* Logo and title section */}
      <div className="flex gap-3 sm:gap-5 absolute top-10 sm:top-32 left-5 sm:left-36 text-white font-extrabold">
        <img className="h-8 sm:h-12" src={`${logo}`} alt="logo" />
        <h4 className="text-sm sm:text-2xl text-[#91d9c4]">
          <strong>
            Discerning <br /> Hearts
          </strong>
        </h4>
      </div>

      {/* Main content section */}
      <div className="absolute top-28 sm:top-60 left-5 sm:left-36 flex flex-col gap-6 sm:gap-10">
        {/* Main Heading */}
        <div className="text-xl sm:text-5xl md:text-4xl lg:text-5xl w-[90%] sm:w-[60%] text-[#000] font-bold">
          Let’s Enlighten Young Minds about the Opportunities in IT
        </div>

        {/* Description */}
        <p className="w-[95%] sm:w-[70%] text-[14px] sm:text-[18px] lg:text-[20px] text-justify font-semibold text-white">
          Welcome to DiscerningHearts, where we are dedicated to empowering
          young minds with the knowledge and insights needed to make informed
          decisions in the field of computer science, guiding them with wisdom
          and compassion toward a bright future in the IT industry.
        </p>

        {/* Button */}
        <HashLink smooth to={"/#upcoming"} >
          <Button>
            <p className="border border-white border-3 bg-black text-white inline-flex items-center justify-center p-2 sm:p-3 w-28 sm:w-36 rounded-md font-bold">
            Attend Event
            </p>
          </Button>
        </HashLink>
      </div>
    </div>
  );
};

export default Welcome;
