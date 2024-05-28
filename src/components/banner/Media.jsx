import React from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNestjs, SiAngular, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://telegram.me/yourusername" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skills in
        </h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNestjs />
          </span>
          <span className="bannerIcon">
            <SiAngular />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <FaDocker />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
