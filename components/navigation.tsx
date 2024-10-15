import Link from 'next/link';
import React from 'react';
import { DOCS_ROUTE, COM_ROUTE } from '@/utils/routes';
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
import SignIn from './sign-in';
import { SignOut } from './sign-out';
import { Button } from './ui/button';

type Props = {
  session: any;
};

const Navigation = ({ session }: Props) => {
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
                  <NavigationMenuLink
                    href={route.url}
                    key={route.url}
                    className="p-2 w-[100px] hover:bg-slate-200 transition"
                  >
                    {route.label}
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link href="/contact">CONTACT</Link>
      {session?.user ? (
        <>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>MANAGE</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col">
                  {COM_ROUTE.map((route) => {
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
          <SignOut />
        </>
      ) : (
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      )}
    </>
  );
};

export default Navigation;
