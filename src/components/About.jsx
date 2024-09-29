// import React from "react";
// import Profile from "./Profile";
// import team from "../data/team.webp";
// import together from "../data/together.gif"

// const About = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="flex flex-col items-center bg-gray-300 py-10">
//         <h1 className="bg-yellow-600 text-[40px] text-white font-extrabold p-6 w-fit text-center rounded-[30px]">
//           About
//         </h1>
//       <div className="flex justify-center items-center px-16 gap-20 ">
//         <p className="text-[28px] font-thin text-justify w-[50%]">
//           We are currently a team of a few individuals ​united by our diversity
//           of knowledge. Our ​journey began in college, where we ​recognized that
//           our middle-class upbringing ​often left us without the proper guidance
//           to ​navigate the challenges in our careers. After ​experiencing
//           various ups and downs in life, ​we decided to share our experiences
//           with ​young minds. As DiscerningHearts, our ​mission is to bridge
//           knowledge gaps, ​enabling young individuals to make ​informed
//           decisions and choose the right ​career path for their future.
//         </p>
//         <img className="h-[30rem]" src={`${team}`} alt="" />
//       </div>
//       </div>
      
//       <div className="profiles">
//         <Profile />
//       </div>
//         <img src={`${together}`} className="w-full px-5 mb-10" alt="" />
//     </div>
//   );
// };

// export default About;


import React from "react";
import Profile from "./Profile";
import team from "../data/team.webp";
import together from "../data/together.gif";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center bg-gray-300 py-6 sm:py-10">
        <h1 className="bg-yellow-600 text-[24px] sm:text-[40px] text-white font-extrabold p-4 sm:p-6 w-fit text-center rounded-[30px]">
          About
        </h1>

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-6 sm:px-16 gap-10 sm:gap-20 mt-6 sm:mt-10">
          {/* Text Section */}
          <p className="text-[18px] sm:text-[24px] md:text-[28px] font-thin text-justify w-full sm:w-[60%] lg:w-[50%]">
            We are currently a team of a few individuals ​united by our diversity of knowledge. Our ​journey began in college, where we ​recognized that our middle-class upbringing ​often left us without the proper guidance to ​navigate the challenges in our careers. After ​experiencing various ups and downs in life, ​we decided to share our experiences with ​young minds. As DiscerningHearts, our ​mission is to bridge knowledge gaps, ​enabling young individuals to make ​informed decisions and choose the right ​career path for their future.
          </p>

          {/* Image Section */}
          <img
            className="h-[16rem] sm:h-[25rem] lg:h-[30rem] object-cover rounded-lg"
            src={team}
            alt="Our Team"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="profiles my-10 sm:my-16">
        <Profile />
      </div>

      {/* Together Image */}
      <img
        src={together}
        className="w-full h-auto px-4 sm:px-10 mb-10"
        alt="Together"
      />
    </div>
  );
};

export default About;
