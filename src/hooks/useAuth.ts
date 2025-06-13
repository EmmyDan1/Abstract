import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

export const useAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserAuthContextProvider");
  }
  return context;
};