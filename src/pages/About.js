import React, { useEffect } from "react";
import { BiLogoReact } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const texttoanimate = document.getElementById("about");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold value as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.target.id);
          texttoanimate.classList.add("animate-text-transform");
        } else {
          texttoanimate.classList.remove("animate-text-transform");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the about section
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div id="about">
      <div className="py-32 " id="texttoanimate">
        <div className="px-20 md:px-32 xl:px-[250px] lg:text-xl xl:text-2xl">
          {/* header */}
          <div className="text-4xl xl:text-5xl font-bold py-8 max-lg:text-center">
            <h1>About</h1>
          </div>
          {/* Intro */}
          <div className="py-8 ">
            "In the world of web development, where creativity meets
            functionality, I am the bridge between design and code. As a
            dedicated React developer, I'm on a mission to create web
            applications that not only dazzle visually but also perform
            flawlessly. With a solid background in front-end development, I
            thrive on transforming intricate concepts into elegant,
            user-friendly solutions.{" "}
            <span className="max-md:hidden">
              Explore my portfolio, and you'll witness my passion for crafting
              seamless, responsive experiences that leave a lasting impression.
              I firmly believe that the synergy between development and design
              is where innovation thrives.
            </span>
            <p className="font-semibold pt-4 translate-y-6">
              I am not just a coder, I am an advocate for the intersection of
              these worlds, where ideas flourish and possibilities are
              limitless.
            </p>{" "}
          </div>
          {/* techstack */}
          <div>
            <div className=" font-bold text-2xl py-10">{"<TechStack />"}</div>

            <ul className="flex flex-wrap gap-8 lg:gap-16">
              <li className="group relative">
                <AiOutlineHtml5 className=" shadow-lg inline text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  HTML
                </p>
              </li>
              <li className="group relative">
                <BiLogoCss3 className=" shadow-lg inline  text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  CSS
                </p>
              </li>
              <li className="group relative">
                <DiJavascript className=" shadow-lg inline  text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  JavaScript
                </p>
              </li>
              <li className="group relative">
                <BsBootstrapFill className=" shadow-lg inline  text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  BootStrap
                </p>
              </li>
              <li className="group relative">
                <BiLogoReact className=" shadow-lg inline  text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  React
                </p>
              </li>
              <li className="group relative">
                <BiLogoTailwindCss className=" shadow-lg inline  text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  TailwindCss
                </p>
              </li>
              <li className="group relative">
                <DiNodejs className=" shadow-lg inline text-5xl text-black border-primary border-1 p-1 rounded-full mr-2  hover:bg-secondary" />
                <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md">
                  NodeJS
                </p>
              </li>
            </ul>
          </div>
          {/* resume */}
          <div className=" font-semibold text-2xl pt-16 ">
            <a
              className="underline hover:shadow-xl"
              href="https://1drv.ms/w/c/dee700cf0d4c5d6b/EWTJXfegCRtHoj8xc_dikJEBA4x0TnDS8J6DRmWcTOj-Aw?e=B9KHot"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
