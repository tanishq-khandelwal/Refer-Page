// import React, { useState } from "react";

// const FaqComponent = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="p-8">
//       <div className="items-center text-center">
//         <h1 className="text-2xl font-semibold mb-4 font-inter mt-10">
//           Frequently Asked <span className="text-[#1A73E8]">Questions</span>
//         </h1>
//       </div>

//       <div className="flex flex-col md:flex-row mt-10 justify-around">
//         <div className="flex flex-col space-y-4 md:mr-8 ml-10">
//           <button className="bg-white drop-shadow-xl w-full md:w-[14rem] py-4 font-inter text-[#1A73E8] font-medium border-[2px] border-[#6666661a] rounded-lg">
//             Eligibility
//           </button>
//           <button className="bg-white drop-shadow-xl w-full md:w-[14rem] py-4 font-inter text-[#1A73E8] font-medium border-[2px] border-[#6666] rounded-lg">
//             How to use ?
//           </button>
//           <button className="bg-white drop-shadow-xl w-full md:w-[14rem] py-4 font-inter text-[#1A73E8] font-medium border-[2px] border-[#6666] rounded-lg">
//             Terms & Conditions
//           </button>
//         </div>
//         <div className="flex flex-col space-y-4 md:ml-8">
//           <div className="mb-4">
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="flex items-center text-blue-500 font-semibold mb-2"
//             >
//               Do I need to have prior Product Management and Project Management
//               experience to enroll in the program?
//               <svg
//                 className={`w-4 h-4 ml-2 transform transition-transform ${
//                   isExpanded ? "rotate-180" : "rotate-0"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//             {isExpanded && (
//               <p className="text-gray-700">
//                 No, the program is designed to be inclusive of all levels of
//                 experience. <br/>All topics will be covered from the basics, making
//                 it suitable for individuals from any field of work.
//               </p>
//             )}
//           </div>
//           <div>
//             <button className="text-blue-500 font-semibold mb-2 flex items-center">
//               What is the minimum system configuration required?
//               <svg
//                 className="w-4 h-4 ml-2 transform transition-transform rotate-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-500 text-white p-6 mt-8 rounded-lg">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="bg-white text-blue-500 rounded-full p-2 mr-4 mb-4 md:mb-0">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 12v.01M8 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <p className="flex-1 font-inter text-lg md:text-3xl text-center md:text-left">
//             Want to delve deeper into the program?
//           </p>
//           <div className="mt-4 md:mt-0">
//             <button className="bg-white text-blue-500 rounded-lg px-4 py-2 font-semibold">
//               Get in touch
//             </button>
//           </div>
//         </div>
//         <p className="mt-2 text-sm text-center md:text-left">
//           Share your details to receive expert insights from our program team!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FaqComponent;


import React, { useState } from "react";
import { motion } from "framer-motion"; // Assuming you've installed framer-motion

const FaqComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-gray-700">
            Here are some common queries about our program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={toggleExpansion}
              className="flex items-center justify-between w-full px-6 py-4 focus:outline-none"
            >
              <span className="text-lg font-medium text-blue-900">
                Do I need prior experience to enroll?
              </span>
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5 text-blue-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-6 py-4 text-gray-700"
              >
                <p>
                  No, the program is designed for all levels. We cover
                  everything from basics to advanced topics.
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button className="flex items-center justify-between w-full px-6 py-4 focus:outline-none">
              <span className="text-lg font-medium text-blue-900">
                What are the system requirements?
              </span>
              <motion.svg
                className="w-5 h-5 text-blue-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </motion.div>

          {/* Additional FAQ items can be added similarly */}
        </div>

        <div className="bg-blue-900 text-white p-6 mt-8 rounded-lg">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-lg md:text-xl font-medium text-center md:text-left">
                Ready to explore further?
              </p>
            </div>
            <div className="md:ml-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-900 rounded-lg px-6 py-3 font-semibold shadow-md focus:outline-none"
              >
                Get in touch
              </motion.button>
            </div>
          </div>
          <p className="mt-2 text-sm text-center md:text-left">
            Contact us to get expert insights from our program team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
