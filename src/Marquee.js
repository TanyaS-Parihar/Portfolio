import React from "react";

const Marquee = () => {
  return (
    <div className=" w-full py-[1rem] bg-green-950">
      <div></div>
      <div className=" overflow-hidden text font-bold border-t-2 border-b-2 border-zinc-300 flex gap-2 whitespace-nowrap">
        <h1 className="marquee2">
          Responsive &nbsp; Aesthetic &nbsp; Dynamic &nbsp; Optimized &nbsp;
          Webpages &nbsp; User-friendly &nbsp; Interactive &nbsp; Modern &nbsp;
          Robust &nbsp; Websites &nbsp;Responsive &nbsp; Aesthetic &nbsp;
          Dynamic &nbsp; Optimized &nbsp; Webpages &nbsp; User-friendly &nbsp;
          Interactive &nbsp; Modern &nbsp; Robust &nbsp; Websites &nbsp;
        </h1>
        <h1 className="marquee2">
          Responsive &nbsp; Aesthetic &nbsp; Dynamic &nbsp; Optimized &nbsp;
          Webpages &nbsp; User-friendly &nbsp; Interactive &nbsp; Modern &nbsp;
          Robust &nbsp; Websites &nbsp;Responsive &nbsp; Aesthetic &nbsp;
          Dynamic &nbsp; Optimized &nbsp; Webpages &nbsp; User-friendly &nbsp;
          Interactive &nbsp; Modern &nbsp; Robust &nbsp; Websites &nbsp;
        </h1>

        {/* 
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
            delay: 0.2,
          }}
        >
          Responsive &nbsp; Aesthetic &nbsp; Dynamic &nbsp; Optimized &nbsp;
          Webpages &nbsp; User-friendly &nbsp; Interactive &nbsp; Modern &nbsp;
          Robust &nbsp; Websites &nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
            delay: 0.2,
          }}
        >
          Responsive &nbsp; Aesthetic &nbsp; Dynamic &nbsp; Optimized &nbsp;
          Webpages &nbsp; User-friendly &nbsp; Interactive &nbsp; Modern &nbsp;
          Robust &nbsp; Websites &nbsp;
        </motion.h1> */}
        {/*   <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5y}}
        >
          {" "}
          Dynamic{" "}
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Optimized{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Customizable{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          User-friendly{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Interactive{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Modern{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Robust{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
        >
          {" "}
          Websites{" "}
        </motion.h1> */}
      </div>
    </div>
  );
};

export default Marquee;
