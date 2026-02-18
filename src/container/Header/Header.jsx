import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const circlesSizes = [
  'w-[100px] h-[100px]',
  'w-[150px] h-[150px] m-7',
  'w-[70px] h-[70px]',
];

const Header = () => (
  <div className="flex-1 w-full h-full flex flex-row justify-center items-center pt-24 px-8 pb-0 max-lg:flex-col max-sm:pt-24 max-sm:px-4 max-sm:pb-8 relative overflow-hidden">
    {/* Ambient blur blobs */}
    <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex-[0.65] flex flex-col justify-start items-start h-full mx-8 max-lg:w-full max-lg:mr-0"
    >
      <div className="w-full flex justify-end items-end flex-col max-lg:justify-start max-lg:items-start">
        <div className="py-4 px-8 bg-white/60 dark:bg-dark-card/60 backdrop-blur-md rounded-2xl flex flex-row items-center w-auto shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/50 dark:border-slate-700/50">
          <span className="text-[2.5rem]">👋</span>
          <div className="ml-5">
            <p className="p-text">Hello, I am</p>
            <h1 className="text-[2.75rem] max-sm:text-[2rem] font-extrabold text-left capitalize bg-gradient-to-r from-secondary to-indigo-500 bg-clip-text text-transparent">
              Heerat Singh
            </h1>
          </div>
        </div>

        {['Full Stack Developer', 'Backend Developer', 'Cloud Solution Architect'].map((role, idx) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.15, duration: 0.4 }}
            className="py-3 px-6 bg-white/60 dark:bg-dark-card/60 backdrop-blur-md rounded-2xl flex flex-col w-auto shadow-lg shadow-black/5 dark:shadow-black/20 mt-6 border border-white/50 dark:border-slate-700/50"
          >
            <p className="p-text w-full uppercase text-right">{role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="flex-1 h-full flex justify-end items-end relative max-lg:my-8"
    >
      <motion.img
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        src={images.profile}
        alt="profile_bg"
        className="w-full object-contain z-[1]"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4 max-lg:w-full max-lg:flex-row max-lg:flex-wrap max-lg:ml-0"
    >
      {[images.spring, images.java, images.react].map((circle, index) => (
        <motion.div
          key={`circle-${index}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`${circlesSizes[index]} rounded-full bg-white dark:bg-dark-card shadow-lg shadow-black/10 dark:shadow-secondary/10 flex justify-center items-center ring-2 ring-white/50 dark:ring-slate-600 max-lg:m-4`}
        >
          <img src={circle} alt="tech" className="w-[60%] h-[60%]" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home', 'bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-dark-surface dark:via-slate-900 dark:to-indigo-950');
