import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const SignOutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/helpcenter"); 
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default SignOutButton;
