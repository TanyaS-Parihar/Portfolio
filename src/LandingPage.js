import React from "react";
import Marquee from "./Marquee";
import SocialMedia from "./SocialMedia";

const LandingPage = () => {
  return (
    <div id="LandingPage" className=" w-full  bg-zinc-900 text-white">
      <div>
        <div className="masker ">
          <div className="font-bold lg:text-6xl md:text-4xl text-3xl pt-[12rem] lg:pt-[8rem] sm:pb-[4rem] md:pb-[4rem] lg:pb-0 pb-[2rem]  px-[2.5rem]  ">
            <p className="lg:text-5xl text-3xl ">Hello I'm</p>
            <div className="flex">
              <div className="box h-14 w-[7vw] lg:text-5xl text-3xl mt-2 mr-5 relative bg-red-800"></div>
              <p>TANYA SINGH PARIHAR</p>
            </div>
            <p className="container lg:text-5xl text-3xl">
              and I am a
              <span className="change-text lg:text-5xl text-3xl"></span>!
            </p>
          </div>
          <div className="absolute  lg:top-[20rem] lg:left-[4%] md:top-[25rem] md:left-[4%] top-[28rem] left-[8%]">
            <SocialMedia />
          </div>
          <div className="w-full  lg:mt-[15vw] md:mt-[28vw] mt-[64vw]  ">
            <Marquee />
          </div>
          {/*  .changingcontent::after {
  content: " ";
  display: inline-block;
  font-size: 60px;
  font-weight: 700;
  color: rgb(223, 159, 20);
  background-color: rgba(230, 119, 75, 0.572);
  text-shadow: 0 1px 1px black;
  animation: changetxt 8s infinite linear;
}
@keyframes changetxt {
  
    content: " ";
  }
  50% {
    conte0% {
    content: "Front-end developer";
  }
  10% {
    content: "React JS Developer";
  }
  20% {
    content: "";
  }
  30% {
    content: "China";
  }
  40% {nt: "Pakistan";
  }
  60% {
    content: "Italy";
  }
  70% {
    content: "Turkey";
  }
  80% {
    content: "Mexico";
  }
  90% {
    content: "Germany";
  }
  100% {
    content: "United Kingdom";
  }
} */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
