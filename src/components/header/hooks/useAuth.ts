import { useState, useEffect } from "react";

interface User {
  email: string;
  password: string;
  name: string;
}

interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

// ✅ Global singleton auth state
let globalAuthState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
};

let listeners: React.Dispatch<React.SetStateAction<AuthState>>[] = [];

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(globalAuthState);

  // Register listener so all components sync
  useEffect(() => {
    listeners.push(setAuthState);
    return () => {
      listeners = listeners.filter((fn) => fn !== setAuthState);
    };
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      globalAuthState = { isAuthenticated: true, currentUser: user };
      listeners.forEach((fn) => fn(globalAuthState));
    }
  }, []);

  const getUsers = (): User[] => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const signup = (
    email: string,
    password: string,
    name: string
  ): { success: boolean; message: string } => {
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }

    const newUser: User = { email, password, name };
    users.push(newUser);
    saveUsers(users);

    return { success: true, message: "Account created successfully" };
  };

  const login = (
    email: string,
    password: string
  ): { success: boolean; message: string } => {
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      globalAuthState = { isAuthenticated: true, currentUser: user };
      listeners.forEach((fn) => fn(globalAuthState));
      return { success: true, message: "Login successful" };
    }

    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    globalAuthState = { isAuthenticated: false, currentUser: null };
    listeners.forEach((fn) => fn(globalAuthState));
  };

  return {
    ...authState,
    signup,
    login,
    logout,
  };
};
