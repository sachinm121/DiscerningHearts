// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-black text-white text-center text-xl p-2">
//       <pre>
//         Made By Sachin Mahor and Sheetal Jain. www.Discerning_Hearts.com Copyright 2024 © all
//         rights reserved.
//       </pre>
//     </div>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center text-sm sm:text-lg md:text-xl p-4 sm:p-6">
      <p className="leading-relaxed">
        Made By Sachin Mahor and Sheetal Jain.<br />
        <a href="https://www.Discerning_Hearts.com" className="text-blue-400 hover:underline">
          www.Discerning_Hearts.com
        </a><br />
        Copyright 2024 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
