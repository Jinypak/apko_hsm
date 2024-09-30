import React from 'react';
import { IoMdClose } from 'react-icons/io';
type Props = {
  menuState: boolean;
  setMenuState: any;
};

const MobileMenu = ({ menuState, setMenuState }: Props) => {
  return (
    <div className="absolute top-0 w-[200px] right-0 bg-white h-screen transition translate-x-[200px]">
      MobileMenu
      <IoMdClose onClick={() => setMenuState(!menuState)} />
    </div>
  );
};

export default MobileMenu;
