import React from "react";

const Navbar = () => {
  return (
    <div className="z-[99] bg-black bg-opacity-40 fixed lg:left-[35%] md:left-[35%] sm:left-[30%] mt-2 px-[1rem] flex flex-col left-0 ">
      <div className="links flex gap-20 ml-[3vw] ">
        {["About", "Projects", "Contact"].map((item, index) => (
          <a
            href={`#${item}`}
            key={index}
            className="text-lg font-semibold captilazie font bold"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
