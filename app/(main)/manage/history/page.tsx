import Image from 'next/image';
import React from 'react';

type Props = {};

const HistoryPage = (props: Props) => {
  return (
    <div>
      HistoryPage
      <p>고객사 히스토리 작성 예정</p>
      <Image
        src="/hsm/history.png"
        alt="Notion SAMPLE"
        width={1280}
        height={1080}
      />
    </div>
  );
};

export default HistoryPage;
