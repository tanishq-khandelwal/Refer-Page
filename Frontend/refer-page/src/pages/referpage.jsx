import React, { useState } from "react";
import Layout from "../Layout/layout";
import backgroundimg from "../assets/image.png";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/Maincomponent";
import Footer from "../Components/Footer";
import FaqComponent from "../Components/Frequently";
import money from "../assets/money.png";
import { FiGift, FiDollarSign } from "react-icons/fi";
import HeroSection from "../Components/HeroSection";
import ReferModal from "../Components/ReferModal";

const Referpage = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="bg-[#1A73E8] bg-opacity-[11%] h-[50px] rounded-full w-full max-w-lg md:max-w-xl lg:max-w-2xl pt-3 mt-10">
          <ul className="flex justify-around items-center text-[#4B4B4B] font-sans text-base sm:text-lg md:text-xl font-normal hover:cursor-pointer">
            <li className="hover:text-[#1A73E8]">Refer</li>
            <li className="hover:text-[#1A73E8]">Benefits</li>
            <li className="hover:text-[#1A73E8]">FAQs</li>
            <li className="hover:text-[#1A73E8]">Support</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#EEF5FF] md:h-[35rem] md:max-h-[30rem] md:w-[90rem] md:max-w-[100rem] lg:max-w-4xl rounded-md shadow-custom mx-auto mt-5 p-4 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:mt-12">
          <p className="text-6xl font-bold font-sans">Let's Learn</p>
          <p className="text-6xl font-bold font-sans">& Earn</p>

          <div className="mt-8">
            <p className="font-semibold text-4xl">Get a chance to win</p>
            <p className="font-semibold text-5xl text-[#1A73E8]">up-to Rs.15,000</p>
          </div>

          <button onClick={toggleModal} className="mt-8 md:mt-12 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Refer Now
          </button>
        </div>
        <ReferModal isOpen={isModalOpen} onClose={toggleModal} />
        <div className="h-[25rem] md:w-[30rem] md:mr-[-2rem] flex justify-center">
          <img
            src={money}
            alt="Money"
            className="w-[20rem] md:w-[30rem] h-[auto] md:h-[25rem] mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
      <div className="bg-gray-100 h-auto py-16 mt-12">
        <div className="text-center font-semibold text-2xl text-blue-900">
          <p>How Do I <span className="text-blue-500">Refer?</span></p>
        </div>
        {/* <div className="max-w-4xl mx-auto mt-8">
          <img src={backgroundimg} alt="Background" className="w-full rounded-lg shadow-lg" />
        </div> */}
        <HeroSection/>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleModal}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Refer Now
          </button>
        </div>
      </div>

      <div className="mt-40 text-center">
        <p className="font-inter font-semibold text-xl sm:text-2xl">
          What Are The{" "}
          <span className="text-[#1A73E8]">Referral Benefits?</span>
        </p>

        <div className="container mx-auto px-4 mt-8">
      <div className="md:flex md:space-x-8">
        <Sidebar />
        <MainContent />
      </div>
    </div>
      </div>


      <div className="bg-white py-16 mt-20">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
           <div className="mr-8">
           <FiGift className="text-4xl text-blue-500" />
         </div>
           <div>
          <p className="text-2xl font-semibold text-blue-900">
              Refer more, Earn more rewards!
            </p>
             <p className="mt-4 text-lg text-gray-700">
               Earn additional rewards for every successful referral.  
             </p>
           </div>
         </div>
       </div>

      <div>
        <FaqComponent></FaqComponent>
      </div>

      

      <Footer></Footer>
    </Layout>
  );
};

export default Referpage;
