/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import cardTodo from "../assests/cardtodo.jpg";
import ecomm from "../assests/ecomm.png";
import gamegenre from "../assests/gamegenre.png";
import rounddigi from "../assests/rounddigi.png";

const ProjectCards = () => {
  const [screenSize, setScreenSize] = useState(screen.width);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(screen.width);
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  //for animation
  useEffect(() => {
    const cardSection = document.getElementById("card");
    const texttoanimate = document.getElementById("card");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold value as needed
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
    if (cardSection) {
      observer.observe(cardSection);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (cardSection) {
        observer.unobserve(cardSection);
      }
    };
  }, []);

  return (
    <div className="" id="card">
      <div>
        {/* card - Round DIgital*/}
        <div
          id="texttoanimate"
          className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6 "
        >
          <div className="basis-1/2 pt-6 ">
            <div
              className=" shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg "
              style={{ backgroundImage: `url(${rounddigi})` }}
            ></div>
          </div>
          {/* text */}
          <div className="basis-1/2 p-4">
            <h1 className="font-semibold max-md:py-4 pb-4 text-center">
              Round Digital: Clone
            </h1>
            <p>
              Round Digital offers services in website development and
              marketing, serving as a company dedicated to these areas.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
              <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
            </div>
            <div className="text-align flex justify-between items-center px-4 py-2">
              <a
                href="https://rounddigitalclone-c3mpgnju2-khushboo84.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-4 ">
                  Live Demo{" "}
                  <BsArrowUpRightSquareFill className="inline text-sm" />
                </button>
              </a>
              <button className="p-4">
                <a
                  href="https://github.com/khushboo84/round-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <AiOutlineGithub className="inline" />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* card 2 - fashion ecomm */}
        {screenSize < 1025 ? (
          <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
            <div className="basis-1/2 pt-6 ">
              <div
                className="shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg"
                style={{ backgroundImage: `url(${ecomm})` }}
              ></div>
            </div>
            {/* text */}
            <div className="basis-1/2 p-4">
              <h1 className="font-semibold max-md:py-4 pb-4 text-center">
                Fashion Ecommerce Website
              </h1>
              <p>
                An e-commerce website showcasing both men's and women's
                clothing, featuring essential functionalities such as adding
                items to the shopping cart, updating the cart contents,
                modifying item quantities, and removing items from the cart.
              </p>
              <div className="text-align flex justify-center items-center px-10 py-6">
                <button className=" p-2 shadow-lg rounded-md mr-6">
                  React
                </button>
                <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
              </div>
              <div className="text-align flex justify-between items-center px-4 py-2">
                <a
                  href="https://fashion-ecomm.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 ">
                    Live Demo{" "}
                    <BsArrowUpRightSquareFill className="inline text-sm" />
                  </button>
                </a>
                <button className="p-4">
                  <a
                    href="https://github.com/khushboo84/fashion-ecomm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <AiOutlineGithub className="inline" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
            {/* text */}
            <div className="basis-1/2 p-4">
              <h1 className="font-semibold max-md:py-4 pb-4 text-center">
                Fashion Ecommerce Website
              </h1>
              <p>
                An e-commerce website showcasing both men's and women's
                clothing, featuring essential functionalities such as adding
                items to the shopping cart, updating the cart contents,
                modifying item quantities, and removing items from the cart.
              </p>
              <div className="text-align flex justify-center items-center px-10 py-6">
                <button className=" p-2 shadow-lg rounded-md mr-6">
                  React
                </button>
                <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
              </div>
              <div className="text-align flex justify-between items-center px-4 py-2">
                <a
                  href="https://fashion-ecomm.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 ">
                    Live Demo{" "}
                    <BsArrowUpRightSquareFill className="inline text-sm" />
                  </button>
                </a>
                <button className="p-4">
                  <a
                    href="https://github.com/khushboo84/fashion-ecomm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <AiOutlineGithub className="inline" />
                  </a>
                </button>
              </div>
            </div>
            <div className="basis-1/2 pt-6 ">
              <div
                className="shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg "
                style={{ backgroundImage: `url(${ecomm})` }}
              ></div>
            </div>
          </div>
        )}
        {/* card 3 - game genre*/}
        <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
          <div className="basis-1/2 pt-6 ">
            <div
              className="shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg "
              style={{ backgroundImage: `url(${gamegenre})` }}
            ></div>
          </div>
          {/* text */}
          <div className="basis-1/2 p-4">
            <h1 className="font-semibold max-md:py-4 pb-4 text-center">
              Game Dashboard
            </h1>
            <p>
              A game dashboard in the style of Rawio, featuring Chakra UI for
              design. The dashboard includes filtering options for sorting games
              by name, genre, and platform, and also offers a dark mode theme
              for user customization.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
              <button className="p-2 shadow-lg  rounded-md ">ChakraUI</button>
            </div>
            <div className="text-align flex justify-between items-center px-4 py-2">
              <a
                href="https://game-genre.vercel.app/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-4 ">
                  Live Demo{" "}
                  <BsArrowUpRightSquareFill className="inline text-sm" />
                </button>
              </a>
              <button className="p-4">
                <a
                  href="https://github.com/khushboo84/GameGenre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <AiOutlineGithub className="inline" />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* card 4 - CRUD- app*/}
        {screenSize < 1025 ? (
          <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
            <div className="basis-1/2 pt-6 ">
              <div
                className="shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg "
                style={{ backgroundImage: `url(${cardTodo})` }}
              ></div>
            </div>
            {/* text */}
            <div className="basis-1/2 p-4">
              <h1 className="font-semibold max-md:py-4 pb-4 text-center">
                Task Management Application
              </h1>
              <p>
                A task management application, utilizing hooks and local
                storage, serves as a valuable tool for users to efficiently
                manage their tasks by enabling the creation, modification, and
                deletion of tasks, ultimately aiding in organization and
                productivity.
              </p>
              <div className="text-align flex justify-center items-center px-10 py-6">
                <button className=" p-2 shadow-lg rounded-md mr-6">
                  React
                </button>
                <button className="p-2 shadow-lg  rounded-md ">CRUD</button>
              </div>
              <div className="text-align flex justify-between items-center px-4 py-2">
                <a
                  href="https://worklist-gnfi7meze-khushboo84.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 ">
                    Live Demo{" "}
                    <BsArrowUpRightSquareFill className="inline text-sm" />
                  </button>
                </a>
                <button className="p-4">
                  <a
                    href="https://github.com/khushboo84/todo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <AiOutlineGithub className="inline" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
            {/* text */}
            <div className="basis-1/2 p-4">
              <h1 className="font-semibold max-md:py-4 pb-4 text-center">
                Task Management Application
              </h1>
              <p>
                A task management application, utilizing hooks and local
                storage, serves as a valuable tool for users to efficiently
                manage their tasks by enabling the creation, modification, and
                deletion of tasks, ultimately aiding in organization and
                productivity.
              </p>
              <div className="text-align flex justify-center items-center px-10 py-6">
                <button className=" p-2 shadow-lg rounded-md mr-6">
                  React
                </button>
                <button className="p-2 shadow-lg  rounded-md ">CRUD</button>
              </div>
              <div className="text-align flex justify-between items-center px-4 py-2">
                <a
                  href="https://worklist-gnfi7meze-khushboo84.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 ">
                    Live Demo{" "}
                    <BsArrowUpRightSquareFill className="inline text-sm" />
                  </button>
                </a>
                <button className="p-4">
                  <a
                    href="https://github.com/khushboo84/todo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <AiOutlineGithub className="inline" />
                  </a>
                </button>
              </div>
            </div>
            <div className="basis-1/2 pt-6 ">
              <div
                className="shadow-lg w-full max-lg:h-[200px] h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[5000ms] rounded-lg "
                style={{ backgroundImage: `url(${cardTodo})` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
