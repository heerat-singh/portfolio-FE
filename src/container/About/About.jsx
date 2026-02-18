import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => { setAbouts(data); });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />means <span>Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-[190px] flex flex-col justify-start items-start m-8 group cursor-pointer"
            key={about.title + index}
          >
            <div className="w-full overflow-hidden rounded-2xl border-b-4 border-transparent hover:border-secondary transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 dark:shadow-black/20">
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                className="w-full h-[170px] rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="bold-text mt-5">{about.title}</h2>
            <p className="p-text mt-2">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'flex-1 w-full flex-col'),
  'about',
  'app__whitebg',
);
