/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="hidden sm:flex justify-center items-center flex-col p-4">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className={`w-[10px] h-[10px] rounded-full m-2 transition-all duration-200 ${
          active === item
            ? 'bg-secondary scale-125 shadow-lg shadow-secondary/50'
            : 'bg-[#cbcbcb] dark:bg-slate-600 hover:bg-secondary'
        }`}
      />
    ))}
  </div>
);

export default NavigationDots;
