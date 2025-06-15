import type { ReactNode } from "react";
import { useAuthProvider } from "../hooks/useAuthProvider";
import { UserAuthContext } from "../context/UserAuthContext";

export const UserAuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const auth = useAuthProvider();
  console.log("Auth Provider Initialized");

  return (
    <UserAuthContext.Provider value={auth}>{children}</UserAuthContext.Provider>
  );
};
