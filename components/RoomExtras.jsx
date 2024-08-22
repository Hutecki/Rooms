"use client";

import React from "react";
import Legend from "@/components/Legend";
import PrintButton from "@/components/PrintButton";
import { usePathname } from "next/navigation";

const RoomExtras = () => {
  const pathname = usePathname();
  const isRoomPage = pathname.startsWith("/room/");

  if (!isRoomPage) {
    return null; // Do not render anything if not on a room page
  }

  return (
    <div className="absolute left-[13rem]">
      {/* Legend and PrintButton will only render on room pages */}
      <PrintButton />
      <Legend />
    </div>
  );
};

export default RoomExtras;
