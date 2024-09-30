'use client';

import React, { useState } from 'react';
import FlatCircle from './flat-circle';
import { Button } from './ui/button';

type Props = {};

const CodeSpace = (props: Props) => {
  const [currentStatus, setCurrentStatus] = useState('2001');
  const [hsmText, setHsmText] = useState('');

  const handleConnect = async () => {
    const res = (await fetch('/api/hsm'))
      .json()
      .then((r) => setHsmText(r.response))
      .catch((e) => e);

    console.log(res);

    setCurrentStatus('200');
  };

  return (
    <div className="absolute top-0 right-0 z-[20] mx-20 my-10 w-1/3">
      <div className="rounded-t-sm bg-slate-600 text-[#b7b8b7] p-2 flex justify-between items-center">
        <div className="flex">
          <FlatCircle color="red" /> Statue : {currentStatus}
        </div>
        <div>
          {currentStatus === '200' ? (
            <div>Connected</div>
          ) : (
            <Button className="" onClick={handleConnect}>
              Retry
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-b-sm bg-[#1d1f21] text-[#b7b8b7] min-h-[200px] p-2">
        {hsmText && <div>{hsmText}</div>}
      </div>
    </div>
  );
};

export default CodeSpace;
