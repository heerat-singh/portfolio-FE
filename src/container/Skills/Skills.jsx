import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => { setExperiences(data); });
    client.fetch(skillsQuery).then((data) => { setSkills(data); });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="w-4/5 mt-12 flex flex-row max-md:w-full max-md:flex-col">
        <motion.div className="flex-1 flex flex-wrap justify-start items-start mr-20 max-md:mr-0 max-md:justify-center max-md:items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center m-4 group"
              key={skill.name}
            >
              <div
                className="w-[90px] h-[90px] max-sm:w-[70px] max-sm:h-[70px] rounded-full flex justify-center items-center hover:scale-110 hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
              <p className="p-text font-medium mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex-1 flex flex-col justify-start items-start max-md:mt-8">
          {experiences.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start my-4"
              key={experience.year}
            >
              <div className="mr-12 max-sm:mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-md">
                  <p className="text-white text-xs font-bold">{experience.year}</p>
                </div>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                    data-tooltip-id={`tooltip-${work.name}`}
                    data-tooltip-content={work.desc}
                    key={work.name}
                  >
                    <h4 className="bold-text font-medium">{work.name}</h4>
                    <p className="p-text mt-1">{work.company}</p>
                    <ReactTooltip
                      id={`tooltip-${work.name}`}
                      className="!max-w-[300px] !bg-white dark:!bg-dark-card !shadow-lg !rounded-lg !p-4 !text-gray-base !text-center !leading-relaxed !opacity-100"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'flex-1 w-full flex-col'),
  'skills',
  'app__whitebg',
);
