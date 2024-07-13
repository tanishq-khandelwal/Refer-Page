import React, { useState } from "react";
import { RiArrowDropDownLine, RiGiftFill } from "react-icons/ri";
import ReferModal from "./ReferModal";
function MainContent() {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];

  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 pb-4 md:pb-2">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A73E8] text-white">
                  <th className="p-4">Programs</th>
                  <th className="p-4">Referrer Bonus</th>
                  <th className="p-4">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition duration-300">
                    <td className="border-t p-4 flex items-center">
                      <RiGiftFill className="text-blue-500 mr-2" />
                      {program.name}
                    </td>
                    <td className="border-t p-4">{program.referrerBonus}</td>
                    <td className="border-t p-4">{program.refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center justify-center px-4 py-2 border border-[#B6B6B6] text-[#B6B6B6] rounded-lg hover:text-blue-500 hover:border-blue-500 transition duration-300"
            >
              {showMore ? "Show Less" : "Show More"} <RiArrowDropDownLine className={`ml-2 text-2xl transform transition-transform ${showMore ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={toggleModal}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Refer Now
          </button>
        </div>
      </div>

      <ReferModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
     
  );
}

export default MainContent;
