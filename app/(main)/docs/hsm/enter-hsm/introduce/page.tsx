import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div>
      <h2>Luna HSM은 어떤 역할을 하나요?</h2>
      <p>
        Luna Hardware Security Module(이하 HSM)은 암호화 키 수명 주기를 보호하기
        위해 설계된 전용 암호화 프로세서입니다.{' '}
      </p>
      이 모듈은 전 세계적으로 가장 보안에 민감한 조직의 암호화 인프라를 보호하는
      신뢰 앵커 역할을 하며, 강화된 변조 방지 장치 내에서 암호화 키를 안전하게
      관리, 처리 및 저장합니다.
      <h2>하드웨어 보안 모듈의 목적은 무엇인가요?</h2>
      <p>
        기업은 거래, 신원, 그리고 다양한 애플리케이션을 보호하기 위해 **하드웨어
        보안 모듈(HSM)**을 구매합니다. Luna HSM은 암호화 키 보안뿐만 아니라
        암호화, 복호화, 인증, 디지털 서명 등 광범위한 애플리케이션을 위한 서비스
        제공에 탁월한 성능을 발휘합니다.
      </p>
      <div className="max-w-7xl mx-auto">
        <Image
          src="/hsm/product/thales_luna_hsm.jpg"
          className="mx-auto"
          width={2000}
          height={2000}
          alt="luna_image"
        />
      </div>
      <h2>Thales가 최고의 HSM 공급업체인 이유는 무엇일까요? </h2>
      <p>
        Thales Luna HSM은 암호화 키를 항상 하드웨어 내에 안전하게 저장하여
        최상의 보안을 제공합니다. 키는 침입 방지 및 변조 방지 기능이 포함된 FIPS
        인증 어플라이언스를 벗어나지 않으므로, 완벽한 암호화 기반을 제공합니다.
        모든 암호화 작업은 HSM 내부에서 수행되며, 강력한 액세스 제어를 통해
        권한이 없는 사용자가 민감한 암호화 자료에 접근하는 것을 방지합니다.
        또한, Thales는 Luna Crypto Command Center와의 통합을 통해 HSM 배포를
        보다 간편하게 만듭니다. 이를 통해 빠르고 손쉬운 암호화 리소스 분할,
        보고, 모니터링이 가능합니다. Luna HSM의 강점 Thales Luna HSM은 엄격한
        설계 요구 사항을 충족하고 철저한 제품 검증 테스트를 통과해야 하며, 실제
        애플리케이션 테스트를 통해 모든 장치의 보안과 무결성을 검증받습니다.
        Luna HSM을 사용하면 보안, 성능, 확장성에서 타협할 필요가 없습니다. 이
        제품은 기존 기술과 새로운 기술 모두에서 탁월한 보안과 성능을 균형 있게
        제공하도록 설계되었습니다.
      </p>
    </div>
  );
};

export default page;
