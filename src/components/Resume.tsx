import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-800"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-20">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
      </FadeIn>
    </section>
  );
};

export default Resume;
