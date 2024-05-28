import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2023 - 2024
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
            <ResumeCard
              title="Full Stack Web Developer"
              subTitle="Kegeberew Technology Solution - (2024 - current)"
              result="Addis Abeba"
              des="As a Full Stack Developer at KTS, I'm responsible for crafting innovative and user-friendly websites, leveraging my expertise
             in both frontend and backend technologies to deliver high-quality solutions."
            />
            <ResumeCard
              title="It Technician"
              subTitle="China Rail Transit Engineering Consultancy - (2023 - 2024)"
              result="Addis Abeba"
              des="Managing and troubleshooting It infrastructures in the company, Providing technical support for the staff, and executing and managing purchasing
             technological appliances as requested or with my recommendations."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
