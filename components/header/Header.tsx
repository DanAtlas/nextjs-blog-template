import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Cta from 'components/cta';
import { headerContentMock } from './Header.mock';

function Header() {
  const props = headerContentMock;

  return (
    <header className={styles.header}>
      <nav className={styles['header-nav']}>
        <Link href={'/'}>
          <a className={styles['header-nav__logo']} title={'Opens the Home page'}>
            <Image
              width={283}
              height={64}
              quality={100}
              src={props.logo.src}
              alt={props.logo.alt}
            />
          </a>
        </Link>
        <ul className={styles['header-nav__list']}>
          {props.nav.map((navLink, key) => {
            return (
              <li key={key} className={styles['header-nav__list-item']}>
                <Cta
                  {...navLink}
                  className={styles['header-nav__list-cta']}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;