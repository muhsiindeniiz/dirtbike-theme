import React from "react";
import { FaEarthAmericas, FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 md:py-0 px-6 md:px-8 flex flex-col gap-6 mx-auto max-w-7xl">
      <div className="w-full justify-between items-center py-3 border-b-[1px] border-white border-opacity-10 hidden md:flex">
        <div className="w-4/5 flex gap-5 items-center">
          <div className="flex text-[#bbbbbb] items-center gap-2 text-xs">
            <FaPhoneFlip />
            <span>+1 800 123 4567</span>
          </div>
          <Link
            to="/"
            className="flex text-[#bbbbbb] items-center gap-2 text-xs hover:text-white cursor-pointer transition-all"
          >
            <MdEmail />
            <span>contact@motocross.com</span>
          </Link>
          <Link
            to="/"
            className="flex text-[#bbbbbb] items-center gap-2 text-xs hover:text-white cursor-pointer transition-all"
          >
            <FaLocationDot />
            <span>1600 Apple Street Santa Rosa, CA</span>
          </Link>
        </div>
        <div className="w-1/5 flex justify-end gap-5 items-end">
          <label
            htmlFor="countries"
            className="flex text-[#bbbbbb] items-center gap-2 text-xs"
          >
            <FaEarthAmericas />
            <select
              id="countries"
              className="text-[#bbbbbb] outline-none bg-transparent text-xs"
            >
              <option selected>Language</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </label>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <Link to="/" title="Motocross" rel="home">
          <img
            src="https://motocross.progressionstudios.com/wp-content/themes/motocross-progression/images/logo.png"
            alt="Motocross"
            width={160}
          />
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/calendar"
                className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                to="/races"
                className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Races
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
