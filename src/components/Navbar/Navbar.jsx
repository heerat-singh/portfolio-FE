import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { HiSun, HiMoon } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../../constants';
import { resume } from '../../constants/resume';

const navItems = ['home', 'about', 'work', 'skills', 'contact'];

const Navbar = ({ isDark, toggleDark }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-4 py-3 md:px-8 md:py-4 bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border-b border-white/18 fixed z-20 transition-colors duration-300">
      <div className="flex items-center">
        <img src={images.logo} alt="logo" className="w-[70px] h-[50px] transition-all duration-300 dark:invert" />
      </div>

      <ul className="hidden md:flex flex-1 justify-center items-center list-none gap-2">
        {navItems.map((item) => (
          <li className="flex flex-col items-center cursor-pointer group mx-3" key={`link-${item}`}>
            <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-1 group-hover:bg-secondary transition-colors duration-300" />
            <a
              href={`#${item}`}
              className="text-gray-base dark:text-slate-300 no-underline uppercase font-sans text-base transition-colors duration-300 hover:text-secondary"
            >
              {item}
            </a>
          </li>
        ))}
        <li className="ml-4">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-secondary to-indigo-500 text-white text-sm font-semibold uppercase tracking-wide no-underline hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleDark}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 dark:bg-slate-700/50 backdrop-blur-sm border border-white/20 dark:border-slate-600 hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <HiSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <HiMoon className="w-5 h-5 text-slate-600" />
          )}
        </button>

        <div className="md:hidden w-9 h-9 rounded-full flex justify-center items-center bg-secondary cursor-pointer">
          <HiMenuAlt4 className="w-[70%] h-[70%] text-white" onClick={() => setToggle(true)} />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex flex-col items-end bg-white dark:bg-dark-card shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"
              >
                <HiX
                  className="w-9 h-9 text-secondary m-2 cursor-pointer"
                  onClick={() => setToggle(false)}
                />
                <ul className="list-none w-full h-full flex flex-col items-start justify-start mt-8">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      className="m-4"
                    >
                      <a
                        href={`#${item}`}
                        onClick={() => setToggle(false)}
                        className="text-gray-base dark:text-slate-300 no-underline text-base uppercase font-medium transition-colors duration-300 hover:text-secondary"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.08, duration: 0.3 }}
                    className="m-4"
                  >
                    <a
                      href={resume}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-secondary to-indigo-500 text-white text-sm font-semibold uppercase tracking-wide no-underline"
                    >
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
