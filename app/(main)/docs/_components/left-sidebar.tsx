import Link from 'next/link';
import React from 'react';
import { HSM_DOCS_ROUTE } from '@/utils/routes';

const LeftSidebar = () => {
  return (
    <section className="max-w-[250px] w-full px-6 py-4 hidden sm:block">
      {HSM_DOCS_ROUTE.map((route) => {
        return (
          <div key={route.url} className="">
            <Link href={route.url} className="font-semibold">
              {route.label}
            </Link>
            <div className="py-2">
              {route.subUrl.map((subRoute) => {
                return (
                  <div
                    className="ml-3 py-1 hover:bg-slate-200 rounded-sm transition"
                    key={subRoute.url}
                  >
                    <Link href={route.url + subRoute.url}>
                      {subRoute.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LeftSidebar;
