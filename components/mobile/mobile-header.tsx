'use client';

import React, { useState } from 'react';
import MobileMenu from './mobile-menu';
import { CiMenuBurger } from 'react-icons/ci';

type Props = {};

const MobileHeader = (props: Props) => {
  const [menuState, setMenuState] = useState(true);

  const handleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <div className="flex p-4 justify-between items-center">
      <div>LOGO</div>
      <div>
        {menuState ? (
          <MobileMenu menuState={menuState} setMenuState={setMenuState} />
        ) : (
          <CiMenuBurger onClick={handleMenu} />
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
