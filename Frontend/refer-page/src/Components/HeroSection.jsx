import React from "react";
import { FaUserPlus, FaGift, FaCheck } from "react-icons/fa";
import "./HeroSection.css"; // Import custom CSS for additional styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {/* First Icon Block */}
        <div className="icon-block bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
          <FaUserPlus className="icon text-4xl mb-4" />
          <p className="text-center">
            Submit referrals easily via our website's referral section.
          </p>
        </div>

      
        {/* Second Icon Block */}
        <div className="icon-block bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
          <FaGift className="icon text-4xl mb-4" />
          <p className="text-center">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>

      

        {/* Third Icon Block */}
        <div className="icon-block bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
          <FaCheck className="icon text-4xl mb-4" />
          <p className="text-center">
            Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
