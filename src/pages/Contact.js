import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";
import contactimg from "../assests/contactPage.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w927441",
        "template_gzetv6m",
        form.current,
        "Km238IYCy1Jq33yt1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" py-32  " id="contact">
      <div className="px-20 lg:px-32 xl:px-[250px] lg:text-xl xl:text-2xl">
        {/* header */}
        <div className="text-4xl xl:text-5xl font-bold py-8 max-lg:text-center">
          <h1>Contact</h1>
        </div>

        {/*  */}
        <div className="flex lg:flex-row max-lg:flex-col lg:gap-4 max-lg:justify-center max-lg:items-center">
          <div className=" max-lg:w-[500px] lg:w-[950px] p-8">
            <img src={contactimg} alt="pic by jcomp on Freepik" />{" "}
          </div>

          {/* message */}
          <div className="lg:py-10">
            <div className="max-lg:text-center font-semibold pt-10 pb-4">
              Feel free to reach out — I'm just a message away!
              <span className="px-6">
                <FaHandPeace className="fill-primary inline " />
              </span>
            </div>
            {/* icons for contact */}
            <ul className="flex flex-col-2 gap-8 pt-6 max-lg:justify-center max-lg:items-center">
              <li>
                <div className="flex justify-center items-center max-lg:text-center ">
                  <a
                    href="https://instagram.com/prettty_weird?igshid=NzZlODBkYWE4Ng=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineInstagram className="bg-primary text-4xl p-1 rounded-full shadow-xl " />
                  </a>
                  {/* <p className="absolute hidden text-sm text-black group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-primary p-2 rounded-md shadow-md ">
                Waterloo, Ontario
              </p> */}
                </div>
              </li>
              <li>
                <div>
                  <a href="mailto:khushboochauhan840@gmail.com">
                    <AiFillMail className=" bg-primary text-4xl p-2 rounded-full shadow-xl" />
                  </a>
                </div>
              </li>
            </ul>
            {/* like section */}
            <div className="max-lg:text-center pb-10 pt-4 max-lg:px-10">
              If you enjoy my website or my work, please show your appreciation
              anonymously by clicking the heart icon.
              <AiFillSmile className="fill-primary inline" />
            </div>
            <form
              ref={form}
              onClick={sendEmail}
              className="flex max-lg:justify-center max-lg:items-center"
            >
              <AiOutlineHeart className="bg-primary fill-secondary text-4xl p-1 rounded-full shadow-xl " />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
