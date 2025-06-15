import { useState, useEffect } from "react";
import type { User, UserAuthContextType } from "../data/types";

const mockSignUpAPI = (userData: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const exists = users.some((u: User) => u.email === userData.email);

      if (exists) {
        reject(new Error("Email already in use"));
      } else {
        const newUser = {
          ...userData,
          id: Math.random().toString(36).substring(2, 9),
          profilepic: `https://i.pravatar.cc/150?u=${userData.email}`,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(newUser);
      }
    }, 1000);
  });
};

export const useAuthProvider = (): UserAuthContextType => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "user") {
        const updatedUser = e.newValue ? JSON.parse(e.newValue) : null;
        setUser(updatedUser);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = (userData: User) => {
    setIsLoading(true);
    setError(null);

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find(
        (u: User) =>
          u.email === userData.email && u.password === userData.password
      );

      if (foundUser) {
        const newUser = { ...foundUser };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData: User) => {
    setIsLoading(true);
    setError(null);

    try {
      const newUser = await mockSignUpAPI(userData);
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, signUp, logout, error, isLoading };
};
