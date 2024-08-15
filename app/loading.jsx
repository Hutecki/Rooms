"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const LoadingPage = () => {
  return (
    <div style={override}>
      <ClipLoader color="#3b82f6" size={150} aria-label="Loading Spinner" />
    </div>
  );
};

export default LoadingPage;
