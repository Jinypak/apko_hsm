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
      <h1 className="title">LunaSH 접속</h1>
      <p className="text">
        HSM에 접속에는 직렬 접속<span>Serial</span>과 SSH를 이용하여 LunaSH에
        접속할 수 있습니다.
      </p>
      <div>
        <h2 className="subTitle">Serial 접속</h2>
        <p className="text">
          동봉된 Luna K7용 Cable을 이용하여 후방 Port 연결 후 Putty로
          접속합니다. 설정값은 다음과 같습니다.
        </p>
        <div className="textTemplate">
          <p>계정 : admin</p>
          <p>
            패스워드 : password <span># 초기 비밀번호</span>
          </p>
          <p>BPS ( Putty의 경우 Speed ) : 115200</p>
          <p>접속 후 초기 비밀번호를 세팅합니다.</p>
        </div>
        <p className="text">
          이후, 다음의 CLI 명령어를 이용하여 변경할 수 있습니다.
        </p>
        <div className="codeSnippet">
          <div className="flex ">
            <code
              ref={(el) => {
                codeRefs.current[0] = el;
              }}
            >
              my password set
            </code>{' '}
            <span className="clipComment">
              # 코드를 복사하고 라벨을 추가하세요
            </span>
          </div>
          <Button
            type="button"
            className="clipboardButton"
            onClick={() => handleCopy(0)}
          >
            <Clipboard />
          </Button>
        </div>
        <div>
          <code
            ref={(el) => {
              codeRefs.current[1] = el;
            }}
          >
            npm install 222
          </code>{' '}
          <span># 코드를 복사하고 라벨을 추가하세요</span>
          <Button onClick={() => handleCopy(1)}>
            <Clipboard />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
