import React from 'react';

const HSMLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overscroll-contain  max-h-screen">{children}</div>
  );
};

export default HSMLayout;
