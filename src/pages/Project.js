/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import ProjectCards from "../components/ProjectCards";
import "../components/Header.css";

const Project = () => {
  useEffect(() => {
    const projectSection = document.getElementById("project");
    const texttoanimate = document.getElementById("project");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold value as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          texttoanimate.classList.add("animate-text-transform");
        } else {
          texttoanimate.classList.remove("animate-text-transform");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the about section
    if (projectSection) {
      observer.observe(projectSection);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (projectSection) {
        observer.unobserve(projectSection);
      }
    };
  }, []);

  return (
    <div id="project">
      <div
        className="px-20 md:px-32 xl:px-[250px] lg:text-xl xl:text-2xl "
        id="texttoanimate"
      >
        {/* heading */}
        <div className="text-4xl xl:text-5xl font-bold py-8 max-lg:text-center">
          <h1>Projects</h1>
        </div>
        {/* subtext */}
        <div className="py-4 font-semibold max-lg:text-center">
          {" "}
          Exploring my creative endeavors, one project at a time. {"< />"}
        </div>

        {/* card */}
        <div className="">
          <div>
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
