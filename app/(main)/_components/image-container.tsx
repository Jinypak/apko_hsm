import React from 'react';
import Image from 'next/image';

type Props = {};

const ImageContainer = (props: Props) => {
  return (
    <div className="">
      <Image
        src="/main1.png"
        width={1280}
        height={400}
        className="w-full"
        alt="main image"
      />
    </div>
  );
};

export default ImageContainer;
