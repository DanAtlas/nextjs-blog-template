export type CtaProps = {
  href: string;
  title: string;
  copy: string;
  className?: string;
  target?: string | undefined;
  ctaTheme?: 'red' | 'yellow' | 'white';
  ctaSize?: 'size-small' | 'size-medium' | 'size-large';
  icon?: {
    url?: string;
    imgAlt: string;
    width: number;
    height: number;
  };
};
