// import React from 'react';
// import { FaAngleRight } from "react-icons/fa";
// function Sidebar() {
//   const menuItems = [
//     'Product Management',
//     'Strategy & Leadership',
//     'Business Management',
//     'Fintech',
//     'Senior Management',
//     'Data Science',
//     'Digital Transformation',
  
//   ];

//   return (
//     <div className="w-64 bg-white shadow-2xl border-black border mt-6 rounded-lg  h-[33rem] text-lg">
//       <ul className="">
//         <li className='bg-[#1A73E8] text-white py-4   cursor-pointer rounded-t-lg text-left px-4'>All Programs</li>
//         {menuItems.map((item, index) => (
//           <li key={index} className="font-sans font-semibold py-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-[#000000] border-opacity-40 text-left text-lg flex items-center ">
//             {item}<FaAngleRight className='ml-2'/>
//           </li>
//         ))}
//         <li className="font-sans font-semibold py-4 px-4 hover:bg-gray-200 cursor-pointer  text-left text-lg flex items-center">  Business Analytics <FaAngleRight className='ml-2'/></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react';
import { FaAngleRight, FaClipboardList } from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    'Product Management',
    'Strategy & Leadership',
    'Business Management',
    'Fintech',
    'Senior Management',
    'Data Science',
    'Digital Transformation',
    'Business Analytics',
  ];

  return (
    <div className="w-64 bg-white shadow-xl border border-gray-200 mt-6 rounded-lg text-lg">
      <ul className="divide-y divide-gray-200">
        <li className='bg-[#1A73E8] text-white py-4 cursor-pointer rounded-t-lg text-left px-4 flex items-center'>
          <FaClipboardList className="mr-2" />
          All Programs
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="font-sans font-semibold py-3 px-4 hover:bg-gray-100 cursor-pointer flex items-center transition duration-300"
          >
            {item}
            <FaAngleRight className='ml-auto text-gray-500' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

