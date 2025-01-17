import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer.",
      "System Designer.",
      "Passionate Developer",
      "MERN Stack Developer",
      "Creative Inovator",
      "Tech Enthusiast",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Dawit Assaye</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#38EEFF"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a versatile full stack developer skilled in both front-end and
          back-end technologies. Explore my projects showcasing seamless user
          experiences and robust web applications.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
