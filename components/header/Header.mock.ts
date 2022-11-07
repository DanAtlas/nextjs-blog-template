import type { HeaderContentProps } from './Header.types';

export const headerContentMock: HeaderContentProps = {
  logo: {
    src: '/vercel.svg',
    alt: 'Vercel logo',
  },
  nav: [
    {
      href: '/latest',
      copy: 'Latest',
      title: 'Opens the Latest page',
    },
    {
      href: '/posts',
      copy: 'Posts',
      title: 'Opens the Posts page',
    },
  ],
};
