"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Legend = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed top-0 right-0 md:top-5 md:right-5 flex flex-col items-end">
      <div
        className={`legend-container fixed top-0 right-0 md:top-5 text-neutral-500 thin-italic transition-transform transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center relative">
          <button
            onClick={toggleVisibility}
            className={`legend-toggle-button rounded-full bg-blue-500 text-white p-2 focus:outline-none transition-transform transform ${
              isVisible ? "rotate-180" : "rotate-0"
            }`}
            aria-label="Toggle Legend"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={32}
              className="chevron-icon transition-transform duration-300"
            />
          </button>
          <div className="legend-content p-4">
            <h1 className="text-center">Legenda:</h1>
            <p>WB-Winda Biblioteczna</p>
            <p>WG-Winda Główna</p>
            <p>WS-Winda Szklana</p>
            <p>SCH-Schody</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
