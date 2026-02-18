import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  const isHome = idName === 'home';

  return (
    <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
      <SocialMedia />
      <div className={`flex-1 w-full flex flex-col justify-center items-center ${isHome ? 'p-0' : 'px-8 py-16 max-sm:px-4 max-sm:pt-16 max-sm:pb-8'}`}>
        <Component />

        {!isHome && (
          <div className="w-full mt-12 pt-6 border-t border-light-gray/30 dark:border-slate-700/30 flex justify-between items-center max-sm:flex-col max-sm:gap-2">
            <p className="text-xs tracking-widest uppercase text-gray-base/60 dark:text-slate-500/60">&copy; 2026 HS &middot; All rights reserved</p>
            <p className="text-xs tracking-widest uppercase bg-gradient-to-r from-secondary to-indigo-500 bg-clip-text text-transparent font-semibold">Built with passion</p>
          </div>
        )}
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
