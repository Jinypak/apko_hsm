'use client';

import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';
import React, { useRef, MutableRefObject } from 'react';

const Page: React.FC = () => {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);

  const handleCopy = (index: number) => {
    const textToCopy = codeRefs.current[index]?.innerText;
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert(`텍스트가 복사되었습니다: ${textToCopy}`);
        })
        .catch((err) => {
          console.error('텍스트 복사 실패:', err);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="title">HSM</h1>
      <div>
        <h2 className="subTitle">HSM에 대하여 </h2>
        <p className="text">
          HSM은 Hardware Security Module라 하여 암호 키를 저장하고 사용할 수
          있는 장치입니다.
        </p>
        <div>
          <code ref={(el) => (codeRefs.current[0] = el)}>npm install</code>{' '}
          <span># 코드를 복사하고 라벨을 추가하세요</span>
          <button onClick={() => handleCopy(0)}>
            <Clipboard />
          </button>
        </div>
        <div>
          <code ref={(el) => (codeRefs.current[1] = el)}>npm install 222</code>{' '}
          <span># 코드를 복사하고 라벨을 추가하세요</span>
          <button onClick={() => handleCopy(1)}>
            <Clipboard />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
