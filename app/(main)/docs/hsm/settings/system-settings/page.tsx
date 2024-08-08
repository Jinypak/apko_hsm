'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Clipboard } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

const page = () => {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);
  const { toast } = useToast();

  const handleCopy = (index: number) => {
    const textToCopy = codeRefs.current[index]?.innerText;
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast({
            title: 'Copy to Command',
            description: `Command: ${textToCopy}`,
          });
        })
        .catch((err) => {
          console.error('텍스트 복사 실패:', err);
        });
    }
  };
  return (
    <div className="max-h-screen">
      <h1 className="title">시스템 설정</h1>
      <p>접속 후 HSM 정보를 확인하려면 LunaSH에 다음의 명령어를 입력합니다.</p>
      <div className="codeSnippet">
        <div className="flex ">
          <code ref={(el) => (codeRefs.current[0] = el)}>hsm show</code>{' '}
          <span className="clipComment">
            # 코드를 복사하고 라벨을 추가하세요
          </span>
        </div>
        <Button type="button" variant="outline" onClick={() => handleCopy(0)}>
          <Clipboard />
        </Button>
      </div>
      <div>
        <Image
          width={500}
          height={1000}
          src="/hsm/cli/hsm_show.png"
          alt="HSM SHOW"
        />
      </div>
      <div>
        <p>HSM 정보는 다음과 같습니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM Serial : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
        <p>HSM LABEL : HSM을 식별하는 라벨입니다.</p>
      </div>
    </div>
  );
};

export default page;
