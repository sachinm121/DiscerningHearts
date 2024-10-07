// import React from 'react'
// import MailIcon from '@mui/icons-material/Mail';
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import logo from "../data/logo.png"

// const ContactUs = () => {
//   return (
//     <div className='grid grid-cols-2 px-16 my-16 gap-96'>
//         <div className='flex flex-col gap-10'>

//             <h1 className='text-[48px] font-bold font-serif'>Contact Us</h1>
//             <div>
//                 <div className='flex gap-4 text-[30px] items-center'>
//                     <MailIcon fontSize='large' style={{color: 'gold'}}/>
//                     <a href="mailto:sim​mijain1101@gmail.com">sim​mijain1101@gmail.com</a>
//                 </div>
//                 <div className='flex gap-4 text-[30px] items-center'>
//                     <MailIcon fontSize='large' style={{color: 'gold'}}/>
//                     <a href="mailto:sachinmahor685@gmail.com">sachinmahor685@gmail.com</a>
//                 </div>
//             </div>
//             <div>
//                 <h2 className='text-[36px] font-mono font-semibold'>Follow us online</h2>
//                 <div className='flex gap-3 text-[56px] text-yellow-400'>
//                     <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target='_blank'><FaLinkedin /></a>
//                     <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target='_blank'><FaSquareXTwitter /></a>
//                     <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target='_blank'><FaInstagramSquare /></a>
//                     <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target='_blank'><FaFacebookSquare /></a>
//                 </div>
//             </div>
//         </div>
//         <div className='flex items-end gap-8'>
//             <div className='flex items-center gap-8'>
//             <img className='h-20' src={`${logo}`} alt="" />
//             <p className='text-[48px] w-14 leading-none font-bold font-serif'>Discerning <br /> Hearts</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ContactUs


import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../data/logo.png"

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-36 px-6 sm:px-16 my-10 sm:my-16">
      {/* Contact Information */}
      <div className="flex flex-col gap-8 sm:gap-10">
        <h1 className="text-3xl sm:text-[48px] font-bold font-serif">Contact Us</h1>

        {/* Email Section */}
        <div>
          <div className="flex gap-3 sm:gap-4 text-lg sm:text-[30px] items-center">
            <MailIcon fontSize="large" style={{ color: 'gold' }} />
            <a href="mailto:sim​mijain1101@gmail.com">sim​mijain1101@gmail.com</a>
          </div>
          <div className="flex gap-3 sm:gap-4 text-lg sm:text-[30px] items-center">
            <MailIcon fontSize="large" style={{ color: 'gold' }} />
            <a href="mailto:sachinmahor685@gmail.com">sachinmahor685@gmail.com</a>
          </div>
          <div className="flex gap-3 sm:gap-4 text-lg sm:text-[30px] items-center">
            <MailIcon fontSize="large" style={{ color: 'gold' }} />
            <a href="heartsdiscerning@gmail.com">heartsdiscerning@gmail.com</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl sm:text-[36px] font-mono font-semibold">Follow us online</h2>
          <div className="flex gap-3 text-4xl sm:text-[56px] text-yellow-400">
            <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
            <a href="https://discerninghearts.my.canva.site/yet-to-be-added" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          </div>
        </div>
      </div>

      {/* Logo and Name */}
      <div className="flex justify-center sm:justify-end items-end gap-4 sm:gap-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <img className="h-14 sm:h-20" src={`${logo}`} alt="Discerning Hearts Logo" />
          <p className="text-xl sm:text-[48px] font-bold font-serif">Discerning <br /> Hearts</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
