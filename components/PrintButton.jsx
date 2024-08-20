"use client";

import React from "react";
import { FaPrint } from "react-icons/fa";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <FaPrint
      size={43}
      onClick={handlePrint}
      className="print-btn print:hidden text-blue-700 cursor-pointer hover:text-blue-900 p-2 rounded mb-4"
    />
  );
};

export default PrintButton;
