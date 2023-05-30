import styles from './Cta.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import type { CtaProps } from './Cta.types';

function Cta({ href, title, copy, className, ctaTheme, ctaSize, paddingSize, target, icon }: CtaProps) {
  return (
    <Link href={href}>
      <a
        className={[
          styles.cta,
          className,
          styles[ctaTheme ?? ''],
          styles[!ctaSize ? 'size-medium' : ctaSize],
          styles[paddingSize ? paddingSize : ''],
        ].join(' ')}
        title={title}
        target={href && target ? target : ''}
        rel={href && target ? 'noopener' : ''}
      >
        {icon && icon.url && (
          <span className={styles['cta-icon']}>
            <Image
              className="object-contain"
              width={icon.width}
              height={icon.height}
              quality={100}
              src={icon.url}
              alt={title}
            />
          </span>
        )}
        {copy}
      </a>
    </Link>
  );
}

export default Cta;
