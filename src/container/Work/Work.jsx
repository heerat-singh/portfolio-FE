import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="flex flex-row justify-start items-center flex-wrap my-8">
        {['Spring', 'Web App', 'Mobile App', 'React/Angular', 'AI', 'All'].map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleWorkFilter(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative py-2 px-5 rounded-full font-extrabold cursor-pointer transition-all duration-300 m-2 text-sm ${
              activeFilter === item
                ? 'bg-gradient-to-r from-secondary to-indigo-500 text-white shadow-lg shadow-secondary/30'
                : 'bg-white dark:bg-dark-card text-black-base dark:text-slate-200 hover:bg-secondary hover:text-white shadow-sm'
            }`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="w-[270px] flex flex-col justify-center items-center m-8 p-4 rounded-xl bg-white dark:bg-dark-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-secondary/30 dark:shadow-black/20 group"
            key={index}
          >
            <div className="w-full h-[230px] relative flex justify-center items-center overflow-hidden rounded-lg">
              <img src={urlFor(work.imgUrl)} alt={work.name} className="w-full h-full rounded-lg object-cover" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute inset-0 w-full h-full backdrop-blur-sm bg-secondary/80 rounded-lg opacity-0 flex justify-center items-center transition-all duration-300"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="w-[50px] h-[50px] rounded-full bg-black/50 flex justify-center items-center m-4 cursor-pointer hover:bg-black/70 transition-colors"
                  >
                    <AiFillEye className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="w-[50px] h-[50px] rounded-full bg-black/50 flex justify-center items-center m-4 cursor-pointer hover:bg-black/70 transition-colors"
                  >
                    <AiFillGithub className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="p-2 w-full relative flex flex-col justify-center items-center">
              <h4 className="bold-text mt-4 leading-relaxed">{work.title}</h4>
              <p className="p-text mt-2">{work.description}</p>

              <div className="absolute -top-6 py-2 px-4 rounded-xl bg-gradient-to-r from-secondary to-indigo-500 flex justify-center items-center">
                <p className="text-[0.8rem] text-white">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'flex-1 w-full flex-col'),
  'work',
  'app__primarybg',
);
