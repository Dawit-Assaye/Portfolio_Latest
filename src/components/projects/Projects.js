import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Kegeberew Collective Housing Development Service"
          des="This project is to register and group home demanders these who are willing to build their homes together, I engaged as a front end developer"
          src={projectOne}
          gitUrl="#"
          webUrl="https://tibibirbet.purposeblacketh.com/"
        />
        <ProjectsCard
          title="Kegeberew Agriculture Process Tracking"
          des="A pioneering online platform transforming farm management for individuals and companies. I led backend development, system design, and team leadership, ensuring intuitive interfaces for remote farm management and efficient crop lifecycle tracking."
          src={projectTwo}
          gitUrl="#"
          webUrl="https://kapt.purposeblacketh.com/"
        />
        <ProjectsCard
          title="Equb Web App"
          des="As a full stack developer, I spearheaded the development of a web application automating Ethiopia's traditional Equb saving and lottery system for my final year project. The goal was to create a transparent and accessible platform, revolutionizing community members' access to financial resources. This project holds the potential to make a significant impact on Ethiopia's economy and serves as a testament to my problem-solving skills and innovation."
          src={projectThree}
          gitUrl="https://github.com/Dawit-Assaye/EQUB.git"
          webUrl="#"
        />
      </div>
    </section>
  );
};

export default Projects;
