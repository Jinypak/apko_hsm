import Link from 'next/link';
import React, { useState } from 'react';
import Navigation from './navigation';
import UserAvatar from './avatar';
import { auth } from '@/auth';

const Header = async () => {
  const session: any = await auth();

  return (
    <div
      className={
        'sticky top-0 z-40 bg-white mx-auto flex justify-between items-center px-4 h-[80px]'
      }
    >
      <div className="flex flex-1">
        <Link href="/">LOGOS</Link>
      </div>
      <div className="flex flex-1">IMAGE</div>
      <div className="flex justify-around items-center gap-4">
        <Navigation session={session} />
        {session?.user ? <UserAvatar /> : null}
      </div>
    </div>
  );
};

export default Header;
