'use client';
import { FC, useEffect, useState } from 'react';
import { useScrollStore } from '@/store/scroll-store';

export const Indicator = () => {
  const scrollX = useScrollStore((state) => state.scrollX);
  const scrollY = useScrollStore((state) => state.scrollY);
  const updateScrollY: any = useScrollStore((state) => state.updateScrollY);
  useEffect(() => {
    window.addEventListener('scroll', () => updateScrollY(window.scrollY));
  }, []);

  return <div className="hidden">{scrollY}</div>;
};
