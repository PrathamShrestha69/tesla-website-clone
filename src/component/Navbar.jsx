import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { logo, sogo } from "../assets";
import { RiAccountCircleLine } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import Vehicle from "./Vehicle"; // Import Vehicle component
import "../../src/index.css";
import Energy from "./Energy";
import Charging from "./Charging";
import Discover from "./Discover";
import Shop from "./Shop";
import Language from "./Language";

const Navbars = () => {
  const [isLogo, setIsLogo] = useState(true);
  const [hovered, setHovered] = useState(false); // State to track navbar hover
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  const componentMapping = {
    Vehicle: <Vehicle />,
    Energy: <Energy />,
    Charging: <Charging />,
    Discover: <Discover />,
    Shop: <Shop />,
  };

  const handleMouseEnter = useCallback((item) => {
    setHovered(true);
    setHoveredItem(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Delay hiding the vehicle to avoid flickering
    setTimeout(() => {
      if (!document.querySelector(".nav-item:hover")) {
        setHovered(false);
        setHoveredItem(null);
      }
    }, 100);
  }, []);

  return (
    <div
      className={`w-100 fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: hovered ? "white" : "transparent",
        transition: "background-color 0.3s ease-in-out ", // Smooth transition for background
      }}
    >
      <header
        className="flex justify-between px-12 py-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <img
          src={hoveredItem ? logo : sogo} // Change logo when hovering over any item
          className="w-28 object-contain transition-all duration-300"
          alt="Logo"
        />

        {/* Navigation links */}
        <div className="hidden lg:flex items-center gap-x-6">
          {["Vehicle", "Energy", "Charging", "Discover", "Shop"].map(
            (item, index) => (
              <div
                key={index}
                className="relative nav-item"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`font-bold bg-transparent py-2 px-2 rounded-md w-50 transition-colors duration-150 ease-in-out hover:bg-gray-300`}
                  style={{
                    color: hovered ? "black" : "white", // Change text color on hover
                  }}
                >
                  {item}
                </Link>

                {/* Detail Component */}
                {hoveredItem === item && (
                  <div className="fixed -top-30 left-0 transform translate-x-0 mt-2 w-screen h-[60vh] bg-white shadow-lg z-40 items-center">
                    {componentMapping[item]}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-x-4">
          <p className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-blue-400 transition-colors duration-150">
            <GoQuestion size={30} color={hovered ? "black" : "white"} />
          </p>
          <div
            className="relative cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-blue-400 transition-colors duration-150"
            onMouseEnter={() => handleMouseEnter("Language")}
            onMouseLeave={handleMouseLeave}
          >
            <CiGlobe size={30} color={hovered ? "black" : "white"} />

            {hoveredItem === "Language" && (
              <div className="fixed -top-30 left-0 transform translate-x-0 mt-2 w-screen h-[60vh] bg-white shadow-lg z-40 items-center">
                <Language />
              </div>
            )}
          </div>
          <Link
            to="/signin"
            className="cursor-pointer rounded-md py-[6px] px-2 font-medium hover:bg-blue-400 transition-colors duration-150"
          >
            <RiAccountCircleLine
              size={30}
              color={hovered ? "black" : "white"}
            />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbars;
