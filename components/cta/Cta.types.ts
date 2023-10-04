export type CtaProps = {
  href: string;
  title: string;
  copy: string;
  className?: string;
  target?: string | undefined;
  ctaTheme?: 'underline';
  ctaSize?: 'size-small' | 'size-medium' | 'size-large';
  paddingSize?: 'padding-small' | 'padding-medium' | 'padding-large';
  icon?: {
    url?: string;
    imgAlt: string;
    width: number;
    height: number;
  };
};
