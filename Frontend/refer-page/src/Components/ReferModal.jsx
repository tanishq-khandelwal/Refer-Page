import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ReferModal = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const [referralName, setReferralName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [refreeEmail, setRefreeEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/addReferal', {
        user_name: userName,
        refree_name: referralName,
        user_email: userEmail,
        refree_email: refreeEmail,
        phoneno: Number(phone),
      });

      if (response.status !== 200) {
        throw new Error('Failed to submit referral');
      }

      // Show success toast
      toast.success('Referral submitted successfully!');

      // Clear form fields and close modal on successful submission
      setUserName("");
      setReferralName("");
      setUserEmail("");
      setRefreeEmail("");
      setPhone("");
      onClose();
    } catch (error) {
      setError('Failed to submit referral. Please try again later.');
      console.error('Error submitting referral:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <RiCloseLine size={24} />
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">Refer Now</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                User's Name
              </label>
              <input
                type="text"
                id="userName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="referralName" className="block text-sm font-medium text-gray-700">
                Referral's Name
              </label>
              <input
                type="text"
                id="referralName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={referralName}
                onChange={(e) => setReferralName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                User Email Address
              </label>
              <input
                type="email"
                id="userEmail"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="refreeEmail" className="block text-sm font-medium text-gray-700">
                Refree Email Address
              </label>
              <input
                type="email"
                id="refreeEmail"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={refreeEmail}
                onChange={(e) => setRefreeEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReferModal;
