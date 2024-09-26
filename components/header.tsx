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
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex flex-1">IMAGE</div>
      <div className="flex justify-around items-center gap-4">
        <Navigation session={session} />
        {session?.user ? <UserAvatar /> : null}
      </div>
      {/* 스크롤 감지 기능 마이그레이션 필요 */}
      {/* <Indicator /> */}
    </div>
  );
};

export default Header;
