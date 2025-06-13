import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SignOutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); // clears user
    navigate("/helpcenter"); 
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default SignOutButton;
