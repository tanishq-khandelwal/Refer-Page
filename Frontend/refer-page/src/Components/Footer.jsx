// import React from "react";
// import logo from "../assets/black-logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#282828] text-white py-8">
//       <div className="w-[80rem] ml-auto mr-auto">
//         <div className="flex justify-between">
//           <div>
//             <img src={logo} className="h-[2rem] w-[8rem]"></img>
//           </div>

//           <div>
//             <button className="btn btn-outline bg-[#007BFF] text-white hover:bg-[#007BFF]">
//               Schedule 1-on-1 Call Now
//             </button>
//             <p>Speak with our learning advisor</p>
//           </div>
//         </div>

//         <div className="container mx-auto px-4 mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h2 className=" text-lg">Programs</h2>
//               <ul className="mt-4">
//                 {[
//                   "Data Science & AI",
//                   "Product Management",
//                   "Business Analytics",
//                   "Digital Transformation",
//                   "Business Management",
//                   "Project Management",
//                   "Strategy & Leadership",
//                   "Senior Management",
//                   "Fintech",
//                 ].map((program, index) => (
//                   <li key={index} className="mt-2">
//                     <button className="hover:underline my-2">
//                       {program} +
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="w-[25rem]">
//               <h2 className=" text-lg">Contact Us</h2>
//               <ul className="mt-4 text-sm font-normal">
//                 <li>
//                   Email us (For Data Science Queries): admissions@accredian.com
//                 </li>
//                 <li>
//                   Email us (For Product Management Queries): pm@accredian.com
//                 </li>
//                 <li>
//                   Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
//                 </li>
//                 <li>Product Management Admission Helpline: +91 9625811095</li>
//                 <li>Enrolled Student Helpline: +91 7969322507</li>
//                 <li>
//                   Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
//                   18, Gurugram, Haryana 122015
//                 </li>
//               </ul>
//             </div>
//             <div className="ml-8">
//               <ul className="mt-4">
//                 {[
//                   "About",
//                   "Career",
//                   "Blog",
//                   "Admission Policy",
//                   "Referral Policy",
//                   "Privacy Policy",
//                   "Terms Of Service",
//                   "Master FAQs",
//                 ].map((item, index) => (
//                   <li key={index} className="mt-2">
//                     <button className="hover:underline">{item}</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
//             <p className="text-sm">
//               &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
//               Rights Reserved
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:underline">
//                 Facebook
//               </a>
//               <a href="#" className="hover:underline">
//                 LinkedIn
//               </a>
//               <a href="#" className="hover:underline">
//                 Twitter
//               </a>
//               <a href="#" className="hover:underline">
//                 Instagram
//               </a>
//               <a href="#" className="hover:underline">
//                 YouTube
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import logo from '../assets/black-logo.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src={logo} alt="Logo" className="h-10 w-40" />
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 14h.01M16 18h.01M12 10v10M12 6h.01M12 6a4 4 0 00-8 0M8 6a4 4 0 100 8h8a4 4 0 100-8"
                  />
                </svg>
                Schedule 1-on-1 Call Now
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Speak with our learning advisor
              </span>
              <span className="relative invisible">Schedule 1-on-1 Call Now</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h2 className="text-lg font-semibold">Programs</h2>
            <ul className="mt-4 space-y-2">
              {[
                'Data Science & AI',
                'Product Management',
                'Business Analytics',
                'Digital Transformation',
                'Business Management',
                'Project Management',
                'Strategy & Leadership',
                'Senior Management',
                'Fintech',
              ].map((program, index) => (
                <li key={index}>
                  <button className="hover:underline">{program}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {[
                'About',
                'Career',
                'Blog',
                'Admission Policy',
                'Referral Policy',
                'Privacy Policy',
                'Terms Of Service',
                'Master FAQs',
              ].map((item, index) => (
                <li key={index}>
                  <button className="hover:underline">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#007BFF] transition duration-300"><FaFacebook /></a>
            <a href="#" className="hover:text-[#007BFF] transition duration-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#007BFF] transition duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-[#007BFF] transition duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-[#007BFF] transition duration-300"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
