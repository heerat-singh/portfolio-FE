import React, { useState, useEffect } from 'react';

import { About, Header, Footer, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <div className="bg-primary dark:bg-dark-surface font-base min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
