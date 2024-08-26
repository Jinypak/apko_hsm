import React from 'react';

const Page = () => {
  return (
    <div>
      <h1 className="title">네트워크 설정</h1>
      <p className="text">
        Luna Network HSM을 사용하기 위한 네트워크 설정입니다.
      </p>
      <div>
        <code>network show</code> <span># 복사하여 사용</span>
      </div>

      <h2 className="subTitle">DHCP 설정</h2>
      <p>
        HSM 네트워크 포트는 DHCP를 지원하므로, 장비 후면 Ethernet 위치에
        네트워크가 연결된 케이블을 삽입하여 사용
      </p>
      <h2 className="subTitle">Static 설정</h2>
      <p>지정된 IP를 Ethernet에 할당하여 사용</p>
      <div>
        <code>
          network interface device -eth0 -ip &lt;IP&gt; -netmask &lt;NETMASK&gt;
          -gateway &lt;GATEWAY&gt;
        </code>{' '}
        <span># 복사 및 값 추가하여 사용</span>
      </div>
      <h2 className="subTitle">Bonding 설정</h2>
      <p>네트워크 Bonding을 설정하여 대역폭을 확장할 수 있습니다.</p>
      <div className="codeSnippet">
        <code>network interface bonding enable</code>
        <span># 복사하여 사용</span>
      </div>
      <div className="codeSnippet">
        <code>
          network interface bonding config -name &lt;NAME&gt; -ip &lt;IP&gt;
          -netmask &lt;NETMASK&gt;
        </code>{' '}
        <span># 복사 및 값 추가하여 사용</span>
      </div>
    </div>
  );
};

export default Page;
