import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="hidden sm:flex justify-end items-center flex-col p-4">
    {[
      { icon: <BsGithub />, href: 'https://github.com/heerat-singh' },
      { icon: <FaFacebookF />, href: 'https://www.facebook.com/heerat.singh.94' },
      { icon: <BsInstagram />, href: 'https://www.instagram.com/heerat_singh' },
    ].map((social, idx) => (
      <a
        key={idx}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-light-gray dark:border-slate-600 m-1 flex justify-center items-center transition-all duration-300 hover:bg-secondary hover:border-secondary hover:text-white hover:scale-110 group"
      >
        <span className="text-gray-base group-hover:text-white transition-colors duration-300 text-[15px]">
          {social.icon}
        </span>
      </a>
    ))}
  </div>
);

export default SocialMedia;
