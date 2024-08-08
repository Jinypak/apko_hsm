import Link from 'next/link';
import React from 'react';
import { DOCS_ROUTE } from '@/utils/routes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <Link href="/about">ABOUT</Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>DOCS</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
              {DOCS_ROUTE.map((route) => {
                return (
                  <Link
                    href={route.url}
                    key={route.url}
                    className="p-2 w-[100px] hover:bg-slate-200 transition"
                  >
                    <NavigationMenuLink>{route.label}</NavigationMenuLink>
                  </Link>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navigation;
