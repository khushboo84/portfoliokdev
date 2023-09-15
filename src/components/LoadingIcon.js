import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import ghost from "../assests/ghost.png";
import "../";

const LoadingIcon = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the delay time in milliseconds (e.g., 2000ms or 2 seconds)

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-primary">
          <div className="">
            <img
              src={ghost}
              width={200}
              alt=""
              className="animate-float-ghost"
            />
            <p className="text-center font-semibold pt-10">Loading!!</p>
          </div>
        </div>
      ) : (
        <div className="customlarge:container mx-auto scroll-smooth">
          <Header />
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default LoadingIcon;
