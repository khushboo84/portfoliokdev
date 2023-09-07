/* eslint-disable no-restricted-globals */
import React from "react";
import ProjectCards from "../components/ProjectCards";

const Project = () => {
  return (
    <div id="project" className="">
      <div className="px-20 md:px-32 xl:px-[250px] lg:text-xl xl:text-2xl">
        {/* heading */}
        <div className="text-4xl xl:text-5xl font-bold py-8 max-lg:text-center">
          <h1>Project</h1>
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
