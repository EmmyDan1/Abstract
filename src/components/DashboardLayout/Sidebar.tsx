import { HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import Dropdown from "./Dropdown";

import SideBarConts from "./SideBarConts";

type SidebarProps = {
  isOpen?: boolean;
  onToggle?: () => void;
  toggleDropdown?: () => void;
  dropdownOpen?: boolean;
  className?: string;
};

const Sidebar = ({
  isOpen,
  onToggle,
  toggleDropdown,
  dropdownOpen,
  className = "",
}: SidebarProps) => {
  const { user } = useAuth();
  return (
    <div>
      {isOpen && (
        <div
          className={`w-[290px] h-screen bg-gray-800 fixed top-0 left-0 z-50 p-4 
      ${isOpen ? "block" : "hidden"} lg:block lg:bg-primary ${className}` }
        >
          <div className="flex items-center mb-6 mt-2 w-56 bg-black p-1">
            <div className="flex items-center gap-2">
              <p className="bg-gray-300 text-white font-inter  px-2 rounded">
                d
              </p>
              <p className="text-white font-inter">@{user?.name || 'User Demo'}</p>
              <button onClick={toggleDropdown}>
                <FiChevronDown size={20} className="text-gray-500" />
              </button>
            </div>
            <HiX
              className="text-white absolute top-6 right-4 p-2 bg-blue-950 rounded cursor-pointer lg:hidden"
              onClick={onToggle}
              fontSize={30}
            />
          </div>
          <Dropdown dropdownOpen={dropdownOpen} user={user} />

          <SideBarConts />
        </div>
      )}
    </div>
  );
};
export default Sidebar;
