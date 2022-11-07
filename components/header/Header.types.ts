import type { CtaProps } from 'components/cta/Cta.types';

export type HeaderContentProps = {
  logo: {
    src: string;
    alt: string;
  };
  nav: Array<CtaProps>;
};
