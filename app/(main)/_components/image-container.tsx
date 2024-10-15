import React from 'react';
import Image from 'next/image';
import CodeSpace from '@/components/code-space';

type Props = {};

const ImageContainer = (props: Props) => {
  return (
    <div className="relative">
      <Image
        src="/main1.png"
        width={1280}
        height={400}
        className="w-full"
        alt="main image"
      />
      {/* <CodeSpace /> */}
    </div>
  );
};

export default ImageContainer;
