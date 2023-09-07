import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./Header.css"; // Import your custom CSS file

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [active, setActive] = useState("home"); // Track the active section

  return (
    <div className="w-14 h-20 fixed top-[40%] mx-0">
      <div className="bg-primary rounded-full flex justify-center items-center h-48">
        <ul className="relative">
          <li className="w-10 ">
            <a
              onClick={() => {
                scrollToSection("home");
                setActive("home");
              }}
              className={`flex flex-col text-center items-center p-2 ${
                active === "home" && "active"
              }`}
            >
              <span className="text-xl cursor-pointer duration-700">
                <AiOutlineHome />
              </span>
            </a>
          </li>
          <li className="w-10 pt-2">
            <a
              onClick={() => {
                scrollToSection("about");
                setActive("about");
              }}
              className={`flex flex-col text-center items-center p-2 ${
                active === "about" && "active"
              }`}
            >
              <span className="text-xl cursor-pointer duration-700">
                <BsPerson />
              </span>
            </a>
          </li>
          <li className="w-10 pt-2">
            <a
              onClick={() => {
                scrollToSection("project");
                setActive("project");
              }}
              className={`flex flex-col text-center items-center p-2 ${
                active === "project" && "active"
              }`}
            >
              <span className="text-xl cursor-pointer duration-700">
                <AiOutlineAppstore />
              </span>
            </a>
          </li>
          <li className="w-10 pt-2">
            <a
              onClick={() => {
                scrollToSection("contact");
                setActive("contact");
              }}
              className={`flex flex-col text-center items-center p-2 ${
                active === "contact" && "active"
              }`}
            >
              <span className="text-xl cursor-pointer duration-700">
                <AiOutlineMail />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
