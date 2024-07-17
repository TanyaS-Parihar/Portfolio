import React from "react";

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" bg-zinc-200 md:-pb-[2rem]  p-[2rem] w-full  "
    >
      {/* text-center font-medium sm:text-[1rem] lg:text-[1rem] */}
      <h1 className="text-center font-bold sm:text-[2rem]  lg:text-[3rem] text-black">
        My Projects
      </h1>

      <div className="mt-[2rem] flex flex-col justify-center items-center gap-[2rem] lg:flex lg:flex-row lg:flex-wrap lg:gap-[3rem] lg:justify-center lg:items-center">
        <a href="">
          {" "}
          <div className=" card-container  md:h-[30vw] md:w-[40vw]  lg:h-[25vw] lg:w-[25vw]  h-[40vw] w-[50vw] border-2 bg-zinc-400 rounded-xl ">
            {" "}
          </div>{" "}
          <div className="font-bold text-black text-center">
            {" "}
            WatchflixGPT<div>ReactJS,TailwindCSS,Firebase</div>{" "}
          </div>
        </a>

        <a href="">
          <div className=" card-container  md:h-[30vw] md:w-[40vw]  lg:h-[25vw] lg:w-[25vw]  h-[40vw] w-[50vw] border-2 bg-zinc-400 rounded-xl">
            {" "}
          </div>
          <div className="font-bold text-black text-center">
            {" "}
            Quizzo<div>HTML,CSS,JavaScript</div>{" "}
          </div>
        </a>

        <a href="">
          <div className="card-container  md:h-[30vw] md:w-[40vw]  lg:h-[25vw] lg:w-[25vw]  h-[40vw] w-[50vw] border-2 bg-zinc-400 rounded-xl">
            {" "}
          </div>
          <div className="font-bold text-black text-center">
            Videooz(Ongoing)<div>ReactJS,Redux,TailwindCSS</div>
          </div>
        </a>
        <a href="">
          <div className="card-container  md:h-[30vw] md:w-[40vw]  lg:h-[25vw] lg:w-[25vw]  h-[40vw] w-[50vw] border-2 bg-zinc-400 rounded-xl">
            {" "}
          </div>
          <div className="font-bold text-black text-center">
            Tic-Tac-Toe<div>HTML,CSS,JavaScript</div>
          </div>
        </a>
        <a href="">
          <div className="card-container  md:h-[30vw] md:w-[40vw]  lg:h-[25vw] lg:w-[25vw]  h-[40vw] w-[50vw] border-2 bg-zinc-400 rounded-xl">
            {" "}
          </div>
          <div className="font-bold text-black text-center">
            Rock-Paper-Scissor<div>HTML,CSS,JavaScript</div>
          </div>
        </a>
      </div>
    </div>

    //  absolute  left-[25%] top-[20%] md:left-[5%]
    // absolute   left-[25%] lg:top-[20%]  top-[50%]  md:left-[5%]
    //   ); absolute left-[25%] lg:top-[20%] sm:top-[50%]  top-[80%] md:left-[5%]
  );
};

export default Projects;
