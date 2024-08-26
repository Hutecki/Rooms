"use client";

import React, { useState, useEffect } from "react";
import { authenticate, checkAuthentication } from "@/services/authenticate";

const PasswordProtected = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await checkAuthentication();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await authenticate(inputPassword);
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      alert(result.message);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
        <label htmlFor="password" className="text-lg font-semibold mb-2 block">
          Enter Password
        </label>
        <input
          type="password"
          id="password"
          value={inputPassword}
          onChange={handlePasswordChange}
          className="p-2 border rounded mb-4 w-full"
          placeholder="Enter password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordProtected;
