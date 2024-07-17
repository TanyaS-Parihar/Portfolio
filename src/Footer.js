import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div
      id="Contact"
      className=" bg-[#0d4841] lg:pt-[7rem] lg:pb-0 pt-[2rem] pb-[5rem] "
    >
      <h1 className=" text-[#f1faee] mb-[4rem] text-center font-bold text-[2rem]  lg:text-[3rem] ">
        Contact me
      </h1>
      <div className=" mx-[2rem] text-center lg:ml-[5rem] text-black font-normal  lg:flex md:flex gap-[8rem]">
        <div className="mb-[1.5rem]">
          <h3>
            <p className="font-bold text-3xl text-[#f1faee]">
              Reach Out to me!
            </p>
            <p className="font-medium text-2xl text-[#fdf0d5]">
              <em> Need a website or want to discuss a project?</em>
            </p>
            <p className="font-medium text-2xl mb-[2rem] text-[#fdf0d5]">
              <em> I will be happy to connect with you anytime </em>
            </p>
          </h3>
          <h3 className="font-bold text-xl text-zinc-200">Name</h3>
          <img src="" />
          <p className="font-medium text-xl text-white">Tanya Singh Parihar</p>
          <h3 className="font-bold text-xl text-zinc-200"> Address</h3>
          <p className="font-medium text-xl text-white">Bhopal, India</p>
          <h3 className="font-bold text-xl text-zinc-200">Email</h3>
          <p className="font-medium text-xl text-white">tanyasp666@gmail.com</p>
          <div className="relative top-[1.5rem] lg:left-[11rem] left-[7rem] md:left-[5rem] ">
            {" "}
            <SocialMedia />
          </div>
        </div>
        <div>
          <form
            action="https://formsubmit.co/tanyasp666@gmail.com"
            method="POST"
            className="bg-[#b08968] lg:w-[30vw]  lg:mb-[3rem]  lg:px-[2rem] px-[2rem] py-[2rem] lg:py-[2rem] rounded-xl  "
          >
            <h1 className="font-bold mb-[1rem]">Message Me</h1>
            <div className="flex  rounded-lg ">
              <input
                placeholder=" Name"
                className="rounded-md w-[50%] h-[2rem] border-2 border-black pr-[1rem] mr-3 mb-[1rem] text-md"
              />
              <input
                placeholder="Email"
                className="text-md rounded-md w-[50%] h-[2rem] border-2 border-black pr-[3rem]  mb-[1rem]"
              />
            </div>
            <div>
              {" "}
              <input
                placeholder=" Subject"
                className="text-md rounded-md w-full h-[2rem] border-2 pr-[1rem] border-black mb-[1rem]"
              />
            </div>
            <div>
              <textarea
                placeholder=" Write your message"
                className="w-full h-[10vw] text-md
                border-2 border-black rounded-md"
              ></textarea>
            </div>
            <button className=" px-3 bg-black text-white font-bold rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
