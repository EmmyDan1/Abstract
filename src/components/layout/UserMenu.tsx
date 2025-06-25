import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative inline-block text-left bg-purple-700 w-48 h-48 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium "
      >
        {user.name}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-400 text-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 text-sm">
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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
  );
};

export default UserMenu;
