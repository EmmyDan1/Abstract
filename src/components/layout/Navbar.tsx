import { useState } from "react";
import { HiOutlineSearch, HiMenu, HiX } from "react-icons/hi";
import Searchbar from "../ui/Searchbar";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/Images/icons8-abstract-48.png";

import SignOutButton from "../DashboardLayout/SignOutButton";

const Navbar = () => {
  const { user } = useAuth();
  console.log("Navbar user:", user);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav
      className={`flex px-4 py-6 lg:px-20 shadow items-center justify-between transition-all duration-300 ease-in-out  ${
        isOpen2 ? "bg-white" : "bg-black"
      }`}
    >
      <div className="flex items-center w-full justify-between ">
        <div className="flex items-center ">
          <Link to="/frontpage">
            <button className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Logo"
                className="w-8 h-8 bg-white rounded-full "
              />
              <h2 className=" text-white text-[20px] font-semibold hover:text-gray-300">
                Abstract
              </h2>{" "}
            </button>
          </Link>
          <div className="border-[0.5px] border-white h-8 ml-2 "></div>
          <Link to="/helpcenter">
            <button className="  text-[20px] text-white lg:text-2xl font-medium underline hover:text-gray-300 ml-2">
              Help Center
            </button>
          </Link>
        </div>
        <div className="flex items-center lg:translate-x-44 ">
          <div className="hidden  gap-4 font-inter text-[18px] md:flex items-center ">
            <Searchbar
              className="p-[10px] px-6 rounded-md border-none "
              placeholder="Search"
            />
            <Link
              to="/contactsupport"
              className="p-[10px] px-8 rounded-md text-white shadow-md border border-gray-300 bg-black hover:bg-gray-800"
            >
              Submit a Request
            </Link>
            {user ? (
              <>
                <div className="hidden md:flex items-center gap-4">
                  <img
                    src={user.profilepic || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white">{user.name}</span>
                </div>

                <button
                  onClick={toggleDropdown}
                  className="text-white flex items-center gap-2"
                >
                  <FiChevronDown size={20} className="text-gray-500" />
                </button>

                {dropdownOpen && (
                  <div>
                    <ul className="absolute top-12 right-4 bg-white shadow-md rounded-md p-4 w-48 list-none text-[13px] text-center ">
                      <li className="mb-4 hover:bg-gray-100">My activities</li>
                      <li className="mb-4 hover:bg-gray-100">
                        Edit my profile
                      </li>
                      <li className="mb-4 hover:bg-gray-100">
                        Change password
                      </li>
                      <li className="mb-4 hover:bg-gray-100">
                        <SignOutButton />
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="p-[10px] px-8 rounded-md text-white shadow-md bg-[#4c5fd5] hover:bg-white hover:text-black"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>

        <div className="md:hidden flex  ">
          <HiOutlineSearch
            fontSize={28}
            color="white"
            className="translate-x-4"
            onClick={() => setIsOpen2(!isOpen2)}
          />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? "rotate-45" : "rotate-0 "
            } transiton-transform duration-300 ease-in-out translate-x-6`}
          >
            {isOpen ? (
              <HiX fontSize={28} color="white" />
            ) : (
              <HiMenu fontSize={28} color="white" />
            )}
          </button>
        </div>

        {isOpen2 && (
          <div className="absolute top-[15px] left-0 w-full bg-white px-4 py-2 shadow-md flex items-center">
            <Searchbar
              className="w-[306px] py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              ArrowIcon={false}
            />

            <HiX
              onClick={() => setIsOpen2(false)}
              fontSize={28}
              className="cursor-pointer text-gray-700 ml-4"
            />
          </div>
        )}

        <div>
          {isOpen && (
            <div className="absolute top-[80px] right-0 shadow-md px-4 py-4 border-t border-gray-300/30  w-full h-52 bg-primary flex justify-center items-center z-10">
              <div className="flex flex-col items-center justify-center">
                <button className="text-white mb-4 text-2xl font-sans">
                  Submit a Request
                </button>
                <p className="border-b border-white w-full mb-4 "></p>
                {user ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={user.profilepic || "https://via.placeholder.com/40"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-white">{user.name}</span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-white mb-4 text-2xl font-sans"
                  >
                    <button className="text-white text-2xl font-sans ">
                      Sign in
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
