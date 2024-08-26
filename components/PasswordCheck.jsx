import React from "react";
import PasswordProtected from "./PasswordProtected";

const PasswordCheck = ({ children }) => {
  return <PasswordProtected>{children}</PasswordProtected>;
};

export default PasswordCheck;
