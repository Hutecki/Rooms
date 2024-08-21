import React from "react";
import "@/assets/globals.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo_1_png.png";
import PasswordCheck from "@/components/PasswordCheck";

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <PasswordCheck>
          {/* Home Icon Link */}
          <Image
            src={logo}
            alt=""
            className="fixed top-3 left-3 h-30 w-30 z-50"
            width={110}
            height={100}
          />
          <Link className="ui fixed top-7 left-40  z-50" href="/">
            <FaHome size={32} />
          </Link>

          <div>{children}</div>
          <div className="credits font-Roboto fixed right-1 bottom-0 text-sm md:text-base font-extralight italic">
            design: Hubert & Jerzy
          </div>
        </PasswordCheck>
      </body>
    </html>
  );
};

export default MainLayout;
