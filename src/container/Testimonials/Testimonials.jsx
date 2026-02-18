import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => { setTestimonials(data); });
    client.fetch(brandsQuery).then((data) => { setBrands(data); });
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="relative w-[60%] max-lg:w-full min-h-[320px] bg-white dark:bg-dark-card flex flex-row max-sm:flex-col p-8 rounded-2xl shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300">
            <span className="absolute -top-6 -left-2 text-8xl text-secondary/10 font-serif leading-none select-none">&ldquo;</span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="flex flex-row max-sm:flex-col w-full"
              >
                <img
                  src={urlFor(testimonials[currentIndex].imageurl)}
                  alt={testimonials[currentIndex].name}
                  className="w-[100px] h-[100px] rounded-full object-cover ring-4 ring-secondary/20 flex-shrink-0"
                />
                <div className="flex-1 h-full px-8 max-sm:px-0 max-sm:mt-8 text-left flex flex-col justify-around items-start">
                  <p className="text-lg leading-8 text-black-base dark:text-slate-200 font-base">{testimonials[currentIndex].feedback}</p>
                  <div>
                    <h4 className="font-semibold text-secondary mt-8">{testimonials[currentIndex].name}</h4>
                    <h5 className="p-text mt-1">{testimonials[currentIndex].company}</h5>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-row justify-center items-center mt-4">
            <div
              className="w-[50px] h-[50px] rounded-full bg-white dark:bg-dark-card flex justify-center items-center m-4 cursor-pointer transition-all duration-300 hover:bg-secondary group shadow-md"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft className="w-5 h-5 text-secondary group-hover:text-white" />
            </div>

            <div
              className="w-[50px] h-[50px] rounded-full bg-white dark:bg-dark-card flex justify-center items-center m-4 cursor-pointer transition-all duration-300 hover:bg-secondary group shadow-md"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight className="w-5 h-5 text-secondary group-hover:text-white" />
            </div>
          </div>
        </>
      )}

      <div className="w-4/5 max-lg:w-full flex flex-wrap justify-center items-center mt-8">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
            className="w-[150px] max-sm:w-[120px] m-6 max-sm:m-4"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'flex-1 w-full flex-col'),
  'testimonial',
  'app__primarybg',
);
