// components/PasswordCheck.js
import React from "react";
import connectDB from "@/config/database";
import Password from "@/models/Password";
import PasswordProtected from "./PasswordProtected";

const PasswordCheck = async ({ children }) => {
  await connectDB();

  const passwordData = await Password.findOne().lean();
  const correctPassword = passwordData?.Password;

  return (
    <PasswordProtected correctPassword={correctPassword}>
      {children}
    </PasswordProtected>
  );
};

export default PasswordCheck;
