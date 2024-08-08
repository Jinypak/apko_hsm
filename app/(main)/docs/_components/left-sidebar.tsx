import Link from 'next/link';
import React from 'react';
import { HSM_DOCS_ROUTE } from '@/utils/routes';

const LeftSidebar = () => {
  return (
    <section className="sticky max-w-[200px] w-full p-4">
      {HSM_DOCS_ROUTE.map((route) => {
        return (
          <div key={route.url}>
            <Link href={route.url} className="font-semibold">
              {route.label}
            </Link>
            <div className="mt-1">
              {route.subUrl.map((subRoute) => {
                return (
                  <div className="ml-3 py-1" key={subRoute.url}>
                    <Link href={route.url + subRoute.url}>
                      - {subRoute.label}
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
