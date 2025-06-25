import { HiFolder } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const SidebarConts = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Jump to project..."
        className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none mb-2"
      />

      <div>
        <div className="flex items-center gap-2 mt-4 bg-blue-950 p-2 rounded-md cursor-pointer ">
          <HiFolder className="text-white" fontSize={24} />
          <p className="text-white font-inter text-[14px] ">Projects</p>
        </div>

        <div className="flex items-center gap-2 mt-4  p-2 rounded-md cursor-pointer">
          <FiActivity className="text-white" fontSize={24} />
          <p className="text-white font-inter text-[14px]">Activity</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-inter text-white text-sm">Favorite Project</p>

        <div className="flex flex-col items-center justify-center w-66 h-36 bg-gray-700 rounded-md p-2 mt-2">
          <div className="flex items-center mb-2 leading-10">
            <FaStar className="text-orange-400 " fontSize={24} />
            <FaStar className="text-yellow-400 -translate-y-3" fontSize={40} />
            <FaStar className="text-blue-500 " fontSize={24} />
          </div>
          <p className="text-center text-gray-300 font-inter ">
            Favorite Project to add them to your navigation
          </p>
          <button className=" text-blue-700 font-inter text-sm rounded-md mt-2">
            View Projects
          </button>
        </div>
      </div>
      <div className="relative inline-block text-left bg-gradient-to-r from-orange-900 via-yellow-200 to-yellow-600 w-12 h-12 rounded-full mt-24">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium mx-auto  "
        >
          {user?.name}
          <div className="mt-2">
            {open ? <HelpCircle size={25} /> : <HelpCircle size={25} />}
          </div>
        </button>

        {open && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-400 text-white ring-1 ring-black ring-opacity-5 z-50 hover:text-black">
            <div className="py-1 text-sm">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 "
              >
                Sign Out
              </button>
              <Link
                to="/helpcenter"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Help Center
              </Link>
              <Link
                to="/contactsupport"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SidebarConts;
