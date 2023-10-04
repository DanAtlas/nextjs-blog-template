import type { HeaderContentProps } from './Header.types';

export const headerContentMock: HeaderContentProps = {
  logo: {
    src: '/vercel.svg',
    alt: 'Vercel logo',
  },
  nav: [
    {
      href: '/posts',
      copy: 'Posts',
      title: 'Opens the Posts page',
    },
  ],
};
