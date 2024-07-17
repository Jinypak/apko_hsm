import Link from 'next/link';
import React from 'react';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between item-center p-5">
      <div className="flex flex-1">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex flex-1">IMAGE</div>
      <div className="flex justify-around items-center gap-4">
        <Link href="/about">ABOUT</Link>
        <Link href="/docs">DOCS</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navigation;
