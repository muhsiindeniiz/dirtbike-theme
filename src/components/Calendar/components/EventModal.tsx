import React from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventTime: string;
  capacity: number;
  spotsTaken: number;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  eventTitle,
  eventTime,
  capacity,
  spotsTaken,
}) => {
  if (!isOpen) return null;

  const availableSpots = capacity - spotsTaken;

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
    >
      <div className="relative w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Event Details
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Title: {eventTitle}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Time: {eventTime}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Capacity: {capacity}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Available Spots: {availableSpots}
          </p>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Link to="https://www.paypal.com/" className="w-full">
            <button
              type="button"
              className="text-white w-full bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Book Your Spot
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
