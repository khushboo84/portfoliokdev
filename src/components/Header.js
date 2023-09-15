import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./Header.css"; // Import your custom CSS file

const Header = () => {
  const [active, setActive] = useState("home"); // Track the active section

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold value as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all the section elements
    ["home", "about", "project", "contact"].forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      ["home", "about", "project", "contact"].forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="w-14 h-20 fixed top-[40%] mx-0">
      <div className="bg-primary rounded-full flex justify-center items-center h-48">
        <ul className="relative">
          <li className="w-10 ">
            <a
              href="#home"
              onClick={() => setActive("home")}
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
              href="#about"
              onClick={() => setActive("about")}
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
              href="#project"
              onClick={() => setActive("project")}
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
              href="#contact"
              onClick={() => setActive("contact")}
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
