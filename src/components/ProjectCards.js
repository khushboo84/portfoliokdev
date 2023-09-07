/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import card from "../assests/background.png";
import { AiOutlineGithub } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

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

  return (
    <div className="">
      {/* card - Round DIgital*/}
      <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6 ">
        <div className="basis-1/2 pt-6 ">
          <div
            className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
            style={{ backgroundImage: `url(${card})` }}
          ></div>
        </div>
        {/* text */}
        <div className="basis-1/2 p-4">
          <h1 className="font-semibold max-md:py-4 pb-4 text-center">
            Round Digital: Clone
          </h1>
          <p>
            href attribute is required for an anchor to be keyboard accessible.
            Provide a valid, navigable address as the href value. If you cannot
            provide an href, but still need the element to resemble a link, use
            a button and change it with appropriate styles.
          </p>
          <div className="text-align flex justify-center items-center px-10 py-6">
            <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
            <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
          </div>
          <div className="text-align flex justify-between items-center px-4 py-2">
            <a>
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
              className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
              style={{ backgroundImage: `url(${card})` }}
            ></div>
          </div>
          {/* text */}
          <div className="basis-1/2 p-4">
            <h1 className="font-semibold max-md:py-4 pb-4 text-center">
              Fashion Ecommerce Website
            </h1>
            <p>
              href attribute is required for an anchor to be keyboard
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
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
              href attribute is required for an anchor to be keyboard
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
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
              className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
              style={{ backgroundImage: `url(${card})` }}
            ></div>
          </div>
        </div>
      )}
      {/* card 3 - game genre*/}
      <div className=" shadow-md rounded-lg p-6 flex max-lg:flex-col my-6">
        <div className="basis-1/2 pt-6 ">
          <div
            className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
            style={{ backgroundImage: `url(${card})` }}
          ></div>
        </div>
        {/* text */}
        <div className="basis-1/2 p-4">
          <h1 className="font-semibold max-md:py-4 pb-4 text-center">
            Game Dashboard
          </h1>
          <p>
            href attribute is required for an anchor to be keyboard accessible.
            Provide a valid, navigable address as the href value. If you cannot
            provide an href, but still need the element to resemble a link, use
            a button and change it with appropriate styles.
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
              className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
              style={{ backgroundImage: `url(${card})` }}
            ></div>
          </div>
          {/* text */}
          <div className="basis-1/2 p-4">
            <h1 className="font-semibold max-md:py-4 pb-4 text-center">
              Fashion Ecommerce Website
            </h1>
            <p>
              href attribute is required for an anchor to be keyboard
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
              <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
            </div>
            <div className="text-align flex justify-between items-center px-4 py-2">
              <a>
                <button className="p-4 ">
                  Live Demo{" "}
                  <BsArrowUpRightSquareFill className="inline text-sm" />
                </button>
              </a>
              <button className="p-4">
                <a>
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
              href attribute is required for an anchor to be keyboard
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles.
            </p>
            <div className="text-align flex justify-center items-center px-10 py-6">
              <button className=" p-2 shadow-lg rounded-md mr-6">React</button>
              <button className="p-2 shadow-lg  rounded-md ">Tailwind</button>
            </div>
            <div className="text-align flex justify-between items-center px-4 py-2">
              <a>
                <button className="p-4 ">
                  Live Demo{" "}
                  <BsArrowUpRightSquareFill className="inline text-sm" />
                </button>
              </a>
              <button className="p-4">
                <a>
                  Code <AiOutlineGithub className="inline" />
                </a>
              </button>
            </div>
          </div>
          <div className="basis-1/2 pt-6 ">
            <div
              className=" w-full h-[400px] bg-no-repeat bg-top bg-cover transition-all hover:bg-bottom duration-[15000ms] rounded-lg "
              style={{ backgroundImage: `url(${card})` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
