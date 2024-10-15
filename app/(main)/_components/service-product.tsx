'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SERVICE_ROUTE } from '@/utils/routes';
import * as motion from 'framer-motion/client';
import { useMotionValueEvent, useScroll } from 'framer-motion';

type Props = {};

const routes = SERVICE_ROUTE;

const ServiceProduct = (props: Props) => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="py-10 font-bold text-2xl">Thales</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-around items-center min-h-[500px]">
          {routes.map((route) => (
            <div key={route.href}>
              <Link href={route.href}>
                <div className="border w-[300px] h-[200px]">
                  <Image src={route.image} alt="Image" />
                  <div>
                    <h2>{route.label}</h2>
                    <p className="text-slate-500">{route.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceProduct;
