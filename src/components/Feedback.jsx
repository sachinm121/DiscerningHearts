// import React from 'react'
// import feedback from '../data/feedback.webp'
// const Feedback = () => {
//   return (
//     <div className='h-[80%] bg-blue-950 bg-opacity-70 flex flex-col mt-20'>
//         <h1 className='text-center text-[48px] text-yellow-400 font-bold mt-10'>Feedback</h1>
//         <div className='grid grid-cols-2 px-36 gap-36 mb-14'>
//             <img src={ `${feedback}`} alt="" />
//             <p className='flex justify-center items-center border-2 border-solid border-yellow-600 text-[36px] font-semibold text-yellow-400'>To be uploaded</p>
//         </div>
//     </div>
//   )
// }

// export default Feedback

import React from 'react';
import feedback from '../data/feedback.webp';

const Feedback = () => {
  return (
    <div className="h-auto sm:h-[80%] bg-blue-950 bg-opacity-70 flex flex-col mt-10 sm:mt-20">
      {/* Feedback Heading */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-[48px] text-yellow-400 font-bold mt-8 sm:mt-10">
        Feedback
      </h1>

      {/* Feedback Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-36 px-6 sm:px-20 lg:px-36 mb-10 sm:mb-14">
        {/* Feedback Image */}
        <img className="w-full sm:w-auto h-auto rounded-lg" src={`${feedback}`} alt="Feedback" />

        {/* Feedback Text */}
        <p className="flex justify-center items-center border-2 border-solid border-yellow-600 text-xl sm:text-2xl lg:text-[36px] font-semibold text-yellow-400">
          To be uploaded
        </p>
      </div>
    </div>
  );
};

export default Feedback;
