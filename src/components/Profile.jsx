// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import ProfileData from "./ProfileData";

// const Profile = () => {
//   return (
//     <div >
//       {ProfileData.map((profile) => {
//         return (
//           <div className="grid grid-cols-2 justify-center items-center my-20 px-20" key={profile.name}>
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 className="border-2 border-black border-solid rounded-3xl h-96"
//                 src={`${profile.image}`}
//                 alt=""
//               />
//               <div className="flex items-center mt-4">
//                 <h2 className="text-5xl font-bold">{profile.name}</h2>
//                 <a
//                   className="text-5xl text-blue-600"
//                   href={`${profile.linked}`}
//                 >
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-col gap-7">
//               <h2 className="text-5xl">Hello Dear!!</h2>
//               <p className="text-justify text-lg">
//                 {profile.introduction}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Profile;


import React from "react";
import { FaLinkedin } from "react-icons/fa";
import ProfileData from "./ProfileData";

const Profile = () => {
  return (
    <div>
      {ProfileData.map((profile) => {
        return (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center my-20 px-6 sm:px-20"
            key={profile.name}
          >
            {/* Profile Image Section */}
            <div className="flex flex-col justify-center items-center">
              <img
                className="border-2 border-black border-solid rounded-3xl h-72 sm:h-96 object-cover"
                src={`${profile.image}`}
                alt={profile.name}
              />
              <div className="flex items-center mt-4">
                <h2 className="text-3xl sm:text-5xl font-bold">{profile.name}</h2>
                <a
                  className="text-3xl sm:text-5xl text-blue-600 ml-2"
                  href={`${profile.linked}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Profile Introduction Section */}
            <div className="flex flex-col gap-4 sm:gap-7 mt-4 sm:mt-0">
              <h2 className="text-3xl sm:text-5xl">Hello Dear!!</h2>
              <p className="text-justify text-lg sm:text-xl">
                {profile.introduction}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
