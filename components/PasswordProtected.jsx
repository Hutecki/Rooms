"use client";

import React, { useState, useEffect } from "react";

const PasswordProtected = ({ correctPassword, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  // Check localStorage for the password when the component mounts
  useEffect(() => {
    const storedPassword = localStorage.getItem("room_password");
    if (storedPassword === correctPassword) {
      setIsAuthenticated(true);
    }
  }, [correctPassword]);

  // Handle password input change
  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      localStorage.setItem("room_password", inputPassword);
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
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
