import React, { ReactElement } from 'react';
import LeftSidebar from './_components/left-sidebar';
import RightSidebar from './_components/right-sidebar';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex max-h-screen">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </main>
  );
};

export default DocsLayout;
