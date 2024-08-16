import React from "react";
import "@/assets/globals.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa"; // Import the home icon

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        {/* Home Icon Link */}

        <Link
          className="fixed top-4 left-4 text-blue-700 hover:text-blue-900"
          href="/"
        >
          <FaHome size={32} />
        </Link>

        <div>{children}</div>
        <div className="credits font-Roboto absolute right-1 bottom-0 text-xs md:text-sm font-extralight italic">
          Hubert&Jerzy
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
