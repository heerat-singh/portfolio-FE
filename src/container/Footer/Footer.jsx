import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="w-[60%] max-md:w-full flex justify-evenly items-center flex-wrap mt-16 mx-8 mb-8">
        <div className="min-w-[290px] max-sm:w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#fef4f5] dark:bg-rose-950/30 border-l-4 border-transparent hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
          <img src={images.email} alt="email" className="w-10 h-10 mx-3" />
          <a href="mailto:heeratsingh54@gmail.com" className="p-text no-underline font-medium dark:text-slate-300">heeratsingh54@gmail.com</a>
        </div>
        <div className="min-w-[290px] max-sm:w-full flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#f2f7fb] dark:bg-blue-950/30 border-l-4 border-transparent hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
          <img src={images.mobile} alt="phone" className="w-10 h-10 mx-3" />
          <a href="tel:+1 (437) 989-4497" className="p-text no-underline font-medium dark:text-slate-300">+1 (437) 989-4497</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="w-[60%] max-md:w-full max-md:mx-0 flex flex-col justify-center items-center mx-8 my-4">
          <div className="w-full my-3 rounded-xl bg-primary dark:bg-dark-card transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
            <input
              className="w-full p-4 border-none rounded-lg bg-primary dark:bg-dark-card font-base text-secondary dark:text-slate-200 outline-none placeholder:text-gray-base/50"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="w-full my-3 rounded-xl bg-primary dark:bg-dark-card transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
            <input
              className="w-full p-4 border-none rounded-lg bg-primary dark:bg-dark-card font-base text-secondary dark:text-slate-200 outline-none placeholder:text-gray-base/50"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="w-full my-3 rounded-xl bg-primary dark:bg-dark-card transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary">
            <textarea
              className="w-full p-4 border-none rounded-lg bg-primary dark:bg-dark-card font-base text-secondary dark:text-slate-200 outline-none h-[170px] resize-none placeholder:text-gray-base/50"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="py-4 px-8 rounded-xl border-none bg-gradient-to-r from-secondary to-indigo-500 font-medium text-white outline-none mt-8 font-base cursor-pointer hover:shadow-lg hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            onClick={handleSubmit}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full flex-col'),
  'contact',
  'app__whitebg',
);
