/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import image1 from "../assests/image1.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {
  // funcation for updating screenwidth in real time
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
    <>
      <div id="home" className="">
        <>
          {screenSize < 769 ? (
            <div className=" ">
              <div className="">
                {/* Image */}
                <div className="py-10 flex items-center justify-center px-4 ">
                  <div
                    className=" relative w-[300px] h-[300px] bg-white rounded-full overflow-hidden
          before:absolute before:-inset-x-[-100px] before:-inset-y-[20px] before:bg-secondary before:transition before:animate-spin-slow
          after:absolute after:inset-[6px] after:bg-white after:rounded-full"
                  >
                    <div className="absolute inset-[30px] border-4 border-primary z-[1] rounded-full overflow-hidden shadow-md">
                      <img
                        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover "
                        src={image1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* header */}
                <div className=" text-center pt-4 px-16">
                  <h1 className="  text-4xl font-bold py-8 ">
                    Front-End React Developer
                  </h1>
                  {/* subtext */}
                  <h1 className="font-semibold text-xl flex-[50%]">
                    Hello! <span>👋🏾</span> I am Khushboo, a results-driven React
                    developer dedicated to creating interactive and visually
                    stunning web applications!
                    {/* link */}
                    <div className=" py-4">
                      <a
                        href="https://github.com/khushboo84"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineGithub className="inline bg-secondary text-5xl text-white border-primary border-4 p-1 rounded-full mr-2" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/khushboo-chauhan-3a29b4165/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineLinkedin className="inline bg-secondary text-5xl text-white border-primary border-4 p-1 rounded-full m-2" />
                      </a>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className=" px-32 py-[140px] xl:px-[250px] pt-24 ">
              <div className="md:flex ">
                <div className="max-md:text-left pt-[15%] ">
                  <h1 className="  text-5xl font-bold py-8 ">
                    Front-End React Developer
                  </h1>

                  <h1 className="font-semibold text-2xl flex-[50%] xl:w-[90%]">
                    Hello! <span>👋🏾</span> I am Khushboo, a results-driven React
                    developer dedicated to creating interactive and visually
                    stunning web applications!
                    <div className=" py-4">
                      <a
                        href="https://github.com/khushboo84"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineGithub className="inline bg-secondary text-5xl text-white border-primary border-4 p-1 rounded-full mr-2" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/khushboo-chauhan-3a29b4165/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineLinkedin className="inline bg-secondary text-5xl text-white border-primary border-4 p-1 rounded-full m-2" />
                      </a>
                    </div>
                  </h1>
                </div>
                <div className=" flex items-center justify-center pt-[10%] pl-12">
                  <div
                    className=" relative w-[400px] h-[400px] bg-white rounded-full overflow-hidden
          before:absolute before:-inset-x-[-100px] before:-inset-y-[20px] before:bg-secondary before:transition before:animate-spin-slow
          after:absolute after:inset-[6px] after:bg-white after:rounded-full"
                  >
                    <div className="absolute inset-[30px] border-4 border-primary z-[3] rounded-full overflow-hidden shadow-md">
                      <img
                        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover "
                        src={image1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Home;
