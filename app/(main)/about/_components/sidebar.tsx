import React from 'react';
import { SERVICE_ROUTE } from '@/utils/routes';
import Link from 'next/link';

type Props = {};

const routes = SERVICE_ROUTE;

const Sidebar = (props: Props) => {
  return (
    <div className="max-h-screen w-[300px]">
      <div className="flex flex-col justify-center items-start p-5 gap-5">
        {routes.map((route) => (
          <div key={route.href}>
            <Link href={route.href}>
              <p className="w-full hover:underline transition">{route.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
