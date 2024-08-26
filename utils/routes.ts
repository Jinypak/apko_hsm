export const SERVICE_ROUTE = [
  {
    href: '/about/hsm',
    label: 'HSM',
    image: '',
  },
  {
    href: '/about/ctm',
    label: 'CTM',
    image: '',
  },
  {
    href: '/about/storage',
    label: 'STORAGE',
    image: '',
  },
  {
    href: '/about/cloud',
    label: 'CLOUD',
    image: '',
  },
];

export const DOCS_ROUTE = [
  {
    url: '/docs/hsm/enter-hsm',
    label: 'HSM',
  },
  {
    url: '/docs/pse/enter-pse',
    label: 'PSE',
  },
  {
    url: '/docs/ctm/enter-ctm',
    label: 'CTM',
  },
];

export const HSM_DOCS_ROUTE = [
  {
    url: '/docs/hsm/enter-hsm',
    label: 'HSM',
    subUrl: [
      {
        id: 1,
        url: '/introduce',
        label: 'Thales HSM 소개',
      },
      {
        id: 2,
        url: '/equipment',
        label: '장비 설치',
      },
      {
        id: 3,
        url: '/require-option',
        label: '요구사항',
      },
    ],
  },
  {
    url: '/docs/hsm/settings',
    label: 'Settings',
    subUrl: [
      {
        id: 1,
        url: '/connect-hsm',
        label: '장비 접속',
      },
      {
        id: 2,
        url: '/system-settings',
        label: '시스템 설정',
      },
      {
        id: 3,
        url: '/network-settings',
        label: '네트워크 설정',
      },
    ],
  },
  {
    url: '/docs/hsm/maintenance',
    label: '유지 보수',
    subUrl: [
      {
        id: 1,
        url: '/backup',
        label: 'Backup',
      },
      {
        id: 2,
        url: '/restore',
        label: 'Restore',
      },
      {
        id: 3,
        url: '/restful-api',
        label: 'RESTful-api',
      },
    ],
  },
  {
    url: '/docs/hsm/faq',
    label: 'FAQ - 자주 하는 질문',
    subUrl: [
      {
        id: 1,
        url: '/hsm-systems',
        label: 'HSM Systems',
      },
      {
        id: 2,
        url: '/partitions',
        label: 'Partitions',
      },
      {
        id: 3,
        url: '/logs',
        label: 'Logs',
      },
    ],
  },
];
