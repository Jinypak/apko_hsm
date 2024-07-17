import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SERVICE_ROUTE } from '@/utils/routes';

type Props = {};

const routes = SERVICE_ROUTE;

const ServiceProduct = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="py-10 font-bold text-2xl">Thales</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {routes.map((route) => (
          <div key={route.href}>
            <Link href={route.href}>
              <div className="border w-[300px] h-[200px]">
                <Image src={route.image} alt="Image" />
                <div>{route.label}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProduct;
