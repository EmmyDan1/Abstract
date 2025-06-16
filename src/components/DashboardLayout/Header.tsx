import { useState } from "react";
import Tabs from "../DashboardLayout/Tabs";
import SideBar from "../DashboardLayout/Sidebar";
import { HiMenu, HiX, HiBell } from "react-icons/hi";
import SearchBar from "../ui/Searchbar";
import MainImg from "../../assets/Images/mainImg1.png";
import { useAuth } from "../../context/authContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bellIcon, setBellIcon] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleBellIcon = () => {
    setBellIcon(!bellIcon);
  };

  return (
    <section className="h-screen ">
      <header className="bg-black flex fixed justify-between items-center p-6 z-10 mb-12 lg:hidden">
        <button>
          {isOpen ? (
            <HiX className="text-white" onClick={toggleMenu} fontSize={24} />
          ) : (
            <HiMenu className="text-white" onClick={toggleMenu} fontSize={24} />
          )}
        </button>
        <button onClick={toggleBellIcon}>
          <HiBell className="text-white ml-72" fontSize={24} />
        </button>

        {bellIcon && (
          <div className="absolute right-0 top-12 w-[340px] h-[260px] bg-primary rounded-md shadow-lg z-50">
            <div className="p-4">
              <div className="flex flex-col items-center gap-2 mb-4">
                <p className="text-white font-inter text-xl">
                  All Notifications
                </p>
                <p className="border-b border-white w-full mb-6"></p>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <HiBell fontSize={70} className="text-gray-500 mb-4" />
                <p className="text-white font-inter text-xl">
                  No notifications
                </p>
                <p className="text-gray-400 font-inter text-sm">
                  You will see your notifications here{" "}
                </p>
              </div>
            </div>
          </div>
        )}

        <SideBar
          isOpen={isOpen}
          onToggle={toggleMenu}
          toggleDropdown={toggleDropdown}
          dropdownOpen={dropdownOpen}
          className="z-20"
        />
      </header>

      <div className=" pt-[72px] lg:pt-0 lg:pl-[290px] w-full ">
        <div className="hidden lg:block">
          <SideBar
            isOpen={true}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>
        <div className="flex flex-col   ">
          {" "}
          <div className="bg-[#2e2f30] py-3 px-4 w-full lg:sticky top-0 ">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-inter font-bold text-3xl">
                Projects
              </h2>
              <button className="text-white font-inter bg-blue-800 p-1 text-sm rounded font-semibold">
                New Projects
              </button>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="mb-4">
                <Tabs />
              </div>

              <SearchBar
                className="w-full text-white p-1 border-gray-300 border-[0.5px] rounded-md placeholder:text-sm placeholder:text-gray-400 placeholder:font-inter  bg-[#2e2f30] lg:w-[300px]"
                placeholder="Search by title or description"
              />
            </div>
          </div>
          {/* Main Content */}
          <main className="bg-primary p-6 lg:h-[calc(100vh-100px)]">
            <div className="mb-6 ">
              <img src={MainImg} className="w-full lg:w-[300px] lg:m-auto" />
            </div>
            <div className="text-center font-bold font-inter mb-6">
              <h2 className="text-white text-3xl">
                Welcome {user?.name}
                <p> Abstract’s desktop app is only available for macOS.</p>
              </h2>
              <div className="text-white text-[13px] font-inter ">
                You can still{" "}
                <button className="underline text-blue-500">
                  leave feedback{" "}
                </button>{" "}
                in the Abstract web app.
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Header;
