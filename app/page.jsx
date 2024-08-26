import React from "react";
import SearchBar from "@/components/SearchBar";
import PasswordCheck from "@/components/PasswordCheck";
import { redirect } from "next/navigation";
import { checkAuthentication } from "@/services/authenticate";
const HomePage = async () => {
  const isAuthenticated = await checkAuthentication();

  if (!isAuthenticated) {
    redirect("/login"); // Redirect to login page if not authenticated
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SearchBar />
    </div>
  );
};

export default HomePage;
