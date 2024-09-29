// import React from "react";

// const OurGoal = () => {
//   return (
//     <div className="h-[80%] bg-[#e3e5d6] flex flex-col">
//       <h1 className="text-[75px] relative left-10 text-[#000] font-bold">
//         Our Goals
//       </h1>
//       <div className="grid px-16 grid-flow-dense grid-cols-[1fr_1fr_1fr] mb-10">
//         <div className="p-8">
//           <h1 className="text-black text-5xl font-bold">
//             Skill-Building ​for the Future
//           </h1>
//           <p className="text-[24px] text-justify text-black">
//             We aim to provide young ​students with a foundational ​overview of
//             essential tech ​skills through short-duration ​workshops and
//             bootcamps, all ​offered at no cost. Our ​mission is to make
//             technical ​education accessible, ensuring ​that students can explore
//             their ​potential in the IT sector ​without financial barriers.
//           </p>
//         </div>
//         <div className="bg-yellow-600 p-7">
//           <h1 className="text-black text-5xl font-bold">
//             Share Learning ​Resources
//           </h1>
//           <p className="text-[24px] text-justify text-black">
//             There is an overwhelming ​abundance of resources available ​online,
//             often leading to confusion ​for students seeking the right ​learning
//             path. Our goal is to ​simplify this process by providing ​carefully
//             curated, reliable ​resources that guide students ​toward the most
//             effective and ​relevant knowledge for their ​development.
//           </p>
//         </div>
//         <div className="bg-yellow-700 p-7">
//           <h1 className="text-black text-5xl font-bold">
//             Guiding the Right ​Learning Track
//           </h1>
//           <p className="text-[24px] text-justify text-black">
//             The journey doesn’t end with ​skill-building or access to the ​right
//             learning resources. There is ​a crucial need for a well-defined
//             ​learning track, which many ​amateur learners lack. We are
//             ​committed to providing students ​with a structured learning path
//             ​that will empower them to ​realize their aspirations and ​achieve
//             their full potential.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurGoal;

import React from "react";

const OurGoal = () => {
  return (
    <div className="h-auto sm:h-[80%] bg-[#e3e5d6] flex flex-col p-6 sm:p-10 lg:p-16">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-[75px] relative left-0 sm:left-10 text-[#000] font-bold mb-8">
        Our Goals
      </h1>

      {/* Goals Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-0 sm:px-6 lg:px-16 mb-10">
        {/* Goal 1 */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skill-Building for the Future
          </h1>
          <p className="text-base sm:text-lg lg:text-[24px] text-justify text-black">
            We aim to provide young students with a foundational overview of
            essential tech skills through short-duration workshops and
            bootcamps, all offered at no cost. Our mission is to make technical
            education accessible, ensuring that students can explore their
            potential in the IT sector without financial barriers.
          </p>
        </div>

        {/* Goal 2 */}
        <div className="bg-yellow-600 p-4 sm:p-6 lg:p-8">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Share Learning Resources
          </h1>
          <p className="text-base sm:text-lg lg:text-[24px] text-justify text-black">
            There is an overwhelming abundance of resources available online,
            often leading to confusion for students seeking the right learning
            path. Our goal is to simplify this process by providing carefully
            curated, reliable resources that guide students toward the most
            effective and relevant knowledge for their development.
          </p>
        </div>

        {/* Goal 3 */}
        <div className="bg-yellow-700 p-4 sm:p-6 lg:p-8">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Guiding the Right Learning Track
          </h1>
          <p className="text-base sm:text-lg lg:text-[24px] text-justify text-black">
            The journey doesn’t end with skill-building or access to the right
            learning resources. There is a crucial need for a well-defined
            learning track, which many amateur learners lack. We are committed
            to providing students with a structured learning path that will
            empower them to realize their aspirations and achieve their full
            potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
