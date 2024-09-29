// import React from "react";
// import event from "../data/Event.jpg";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

// const UpComing = () => {
//   return (
//     <div className="grid grid-cols-2 px-16 my-16 gap-7">
//       <img src={`${event}`} alt="Up Coming Event" />
//       <div>
//         <h1 className="text-[48px] font-bold text-black">Upcoming Event</h1>
//         <p className="mt-4 text-4xl font-semibold">Computer Fundamental Workshop</p>

//         <div className="mt-10">
//           <div className="flex items-center gap-5 text-[36px]">
//             <CalendarMonthOutlinedIcon fontSize="large" />
//             <p>Yet to be announced</p>
//           </div>
//           <div className="flex items-baseline gap-5 text-[36px]">
//             <LocationOnTwoToneIcon fontSize="large"/>
//             <p>Ram Swaroop Singhal Girls Inter ​College, Daresi, Agra</p>
//           </div>
//           <div className="flex items-center gap-5 text-[36px]">
//             <GroupsOutlinedIcon fontSize="large"/>
//             <p>For 11th and 12th Grade Young Minds</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpComing;


import React from "react";
import event from "../data/Event.jpg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const UpComing = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-10 lg:px-16 my-10 sm:my-16 gap-6 sm:gap-7">
      {/* Event Image */}
      <img
        className="w-full sm:w-auto h-auto rounded-lg"
        src={`${event}`}
        alt="Upcoming Event"
      />
      
      {/* Event Details */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-black">
          Upcoming Event
        </h1>
        <p className="mt-4 text-xl sm:text-3xl lg:text-4xl font-semibold">
          Computer Fundamental Workshop
        </p>

        {/* Event Information */}
        <div className="mt-10 space-y-6 sm:space-y-8">
          <div className="flex items-center gap-3 sm:gap-5 text-lg sm:text-2xl lg:text-[36px]">
            <CalendarMonthOutlinedIcon fontSize="large" />
            <p>Yet to be announced</p>
          </div>
          <div className="flex items-baseline gap-3 sm:gap-5 text-lg sm:text-2xl lg:text-[36px]">
            <LocationOnTwoToneIcon fontSize="large" />
            <p>Ram Swaroop Singhal Girls Inter College, Daresi, Agra</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 text-lg sm:text-2xl lg:text-[36px]">
            <GroupsOutlinedIcon fontSize="large" />
            <p>For 11th and 12th Grade Young Minds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
