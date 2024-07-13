// import React from "react";
// import logo from "../assets/blue-logo.png"
// import { RiArrowDropDownLine } from "react-icons/ri";

// const Layout = ({children}) => {
//   return (
//     <nav className="w-full">
//       <div className="text-center items-center">
//         <div className="bg-[#1A73E8] bg-opacity-15 h-[4rem] flex items-center justify-center">
//           <p className="text-[#262626] font-inter text-base md:text-lg p-5">
//             Navigate your ideal career path with tailored expert advice <span className="text-[#1A73E8] ml-4">Contact Expert</span>
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto p-2">
//         <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 items-center">
//       <div className="flex items-center">
//           <div>
//             <img src={logo} className='h-[2rem] w-[8rem]'></img>
//           </div>
//           <details className="dropdown relative mb-2 md:mb-0 ml-10">
//             <summary className="btn bg-[#1A73E8] text-white rounded-[6px] cursor-pointer hover:bg-[#1A73E8] h-[40px] w-[116px]">
//               Courses <RiArrowDropDownLine className="text-2xl"/>
//             </summary>
//             <ul className="menu dropdown-content bg-white text-black rounded-md absolute left-0 mt-2 p-2 shadow-lg">
//               <li className="p-2 text-black rounded-md">
//                 <a href="#">Item 1</a>
//               </li>
//               <li className="p-2 text-black rounded-md">
//                 <a href="#">Item 2</a>
//               </li>
//             </ul>
//           </details>
//           </div>
//           <div className="flex space-x-4 text-center items-center font-inter text-base font-normal">
//             <a href="#" className="text-[#1A202C]">
//               Refer & Earn
//             </a>
//             <a href="#" className="text-[#1A202C]">
//               Resources
//             </a>
//             <a href="#" className="text-[#1A202C]">
//               About Us
//             </a>
//             <button className="btn text-black bg-[#94A3B8] bg-opacity-20 w-20 hover:bg-[#94A3B8]">
//               Login
//             </button>
//             <button className="btn text-white btn-neutral">
//               Try for free
//             </button>
//           </div>
//         </div>
//       </div>

//       {children}
//     </nav>
//   );
// };

// export default Layout;



import React, { useState } from "react";
import logo from "../assets/blue-logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full">
      <div className="text-center items-center">
        <div className="bg-[#1A73E8] bg-opacity-15 h-[4rem] flex items-center justify-center">
          <p className="text-[#262626] font-inter text-base md:text-lg p-5">
            Navigate your ideal career path with tailored expert advice{" "}
            <span className="text-[#1A73E8] ml-4 cursor-pointer hover:underline">
              Contact Expert
            </span>
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <img src={logo} className="h-[2rem] w-[8rem]" alt="Logo" />
            </div>
            <button
              className="md:hidden text-[#1A73E8] text-2xl"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-center items-center font-inter text-base font-normal mt-4 md:mt-0 w-full md:w-auto`}
          >
            <details className="dropdown relative mb-2 md:mb-0 md:ml-10">
              <summary className="btn bg-[#1A73E8] text-white rounded-md cursor-pointer hover:bg-[#0F59A4] h-[40px] w-[130px] flex items-center justify-between">
                Courses <RiArrowDropDownLine className="text-2xl" />
              </summary>
              <ul className="menu dropdown-content bg-white text-black rounded-md absolute left-0 mt-2 p-2 shadow-lg">
                <li className="p-2 text-black rounded-md hover:bg-gray-100 transition duration-300">
                  <a href="#">Item 1</a>
                </li>
                <li className="p-2 text-black rounded-md hover:bg-gray-100 transition duration-300">
                  <a href="#">Item 2</a>
                </li>
              </ul>
            </details>
            <a
              href="#"
              className="text-[#1A202C] hover:text-[#1A73E8] transition duration-300 order-2 md:order-none"
            >
              Refer & Earn
            </a>
            <a href="#" className="text-[#1A202C] hover:text-[#1A73E8] transition duration-300">
              Resources
            </a>
            <a href="#" className="text-[#1A202C] hover:text-[#1A73E8] transition duration-300">
              About Us
            </a>
            <button className="btn text-black bg-[#94A3B8] bg-opacity-20 w-full md:w-20 hover:bg-opacity-30 transition duration-300">
              Login
            </button>
            <button className="btn text-white bg-[#1A73E8] w-full md:w-auto hover:bg-[#0F59A4] transition duration-300">
              Try for free
            </button>
          </div>
        </div>
      </div>

      {children}
    </nav>
  );
};

export default Layout;
