import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ButtonComponent from './ButtonComponent';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center p-3" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" aria-hidden="true"></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-3xl shadow-xl sm:w-[350px] md:w-[400px] lg:w-[550px] px-5 py-5 sm:ml-60">
        <div className="relative flex items-start">
          {/* Close Button */}
          <button
            className="absolute right-1 p-0 bg-transparent text-gray-400 focus:outline-none"
            onClick={onClose}
          >
            <AiOutlineClose className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>

          <div className="ml-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
              Confirm Deletion
            </h3>
            <div className="mt-2 leading-none">
              <p className="text-sm text-gray-500 leading-none">
                Are you sure you want to delete <strong>{itemName}</strong>? This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 leading-none">
          <ButtonComponent
            label="Cancel"
            type="button"
            btnWidth="100px"
            showImage={false}
            onClick={onClose}
          />
          <ButtonComponent
            label="Delete"
            type="button"
            btnWidth="100px"
            bgColor="bg-red-500"
            textColor="text-white"
            hoverColor="hover:bg-red-600"
            showImage={false}
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
