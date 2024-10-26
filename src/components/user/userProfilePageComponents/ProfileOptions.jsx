import React from "react";
import { Link } from "react-router-dom";
import { CiUser, CiCreditCard1 } from "react-icons/ci";
import { PiBellThin } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { IoLanguage, IoInvertModeOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { LuHelpCircle } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";

const ProfileOptions = () => {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <CiUser className="text-xl" />
          <span className="ml-4 text-lg">Edit Profile</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <CiCreditCard1 className="text-xl" />
          <span className="ml-4 text-lg">Payment Option</span>
        </div>
        <FaChevronRight />
      </div>

      <Link to="/notification-settings" className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
      <div className="flex items-center">
        <PiBellThin className="text-xl" />
        <span className="ml-4 text-lg">Notifications</span>
      </div>
      <FaChevronRight />
    </Link>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <HiOutlineShieldCheck className="text-xl" />
          <span className="ml-4 text-lg">Security</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <IoLanguage className="text-xl" />
          <span className="ml-4 text-lg">Language</span>
        </div>
        <span className="text-sm te-dtext-dark-gray">English (US)</span>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <IoInvertModeOutline className="text-xl" />
          <span className="ml-4 text-lg">Dark Mode</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <GoShieldLock className="text-xl" />
          <span className="ml-4 text-lg">Terms & Conditions</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <LuHelpCircle className="text-xl" />
          <span className="ml-4 text-lg">Help Center</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <MdOutlineForwardToInbox className="text-xl" />
          <span className="ml-4 text-lg">Invite Friends</span>
        </div>
        <FaChevronRight />
      </div>

      <div className="flex items-center justify-between text-dark-gray cursor-pointer hover:text-secondary transition duration-300">
        <div className="flex items-center">
          <RiShutDownLine className="text-xl" />
          <span className="ml-4 text-lg">Logout</span>
        </div>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ProfileOptions;
