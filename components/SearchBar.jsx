"use client";

import React, { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <input
        type="text"
        placeholder="Podaj pokój..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 mb-4 border border-gray-300 rounded w-full max-w-xs"
      />
      <Link href={`/room/${searchTerm}`}>
        <button className="p-2 bg-blue-500 text-white rounded w-full max-w-xs">
          Przejdź do pokoju
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
