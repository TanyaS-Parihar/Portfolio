import React from "react";
import Marquee from "./Marquee";

const About = () => {
  return (
    <div
      id="About"
      className="  w-full  md:pb-[10rem]  rounded-r-lg  rounded-t-lg  px-[5vw] py-[5rem]  bg-[#CDEA68] text-black"
    >
      <h1 className="text-center font-bold sm:text-[2rem]  lg:text-[3rem]">
        About me
      </h1>
      <div>
        <p className="mx-[2rem] text-center font-medium text-md lg:text-xl">
          I am a dedicated front-end developer with an eye for detail, taste for
          design, zeal for perfection and an understanding of people and
          businesses who can create robust and scalable websites that cater to
          clients' unique needs.
          <p>
            {" "}
            I have a firm knowledge of React.js, JavaScript, Redux Toolkit,
            React Context, HTML5, CSS3, TailwindCSS, SASS, NPM, Jest, Webpack,
            Parcel, REST API, Git , Figma and Adobe Photoshop. I am super
            passionate about translating visually-appealing design concepts into
            interactive digital experiences and continuously improving my skill
            set to stay updated with the latest industry trends. My portfolio
            showcases a variety of projects that demonstrate my ability to
            deliver responsive and dynamic web applications.
          </p>
        </p>
        <div className=" flex justify-center md:mt-[10rem] items-center mt-[5rem]">
          {" "}
          <img
            src="https://www.bamboohr.com/resources/guides/media_1978fb016f2a3db4c9662f723d63acbcb8bcc1611.png?width=750&format=png&optimize=medium"
            className="absolute lg:h-[20rem] h-[10rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
