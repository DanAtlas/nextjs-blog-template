import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Cta from '../cta/Cta';
import Layout from '../layout/Layout';
import Theme from '../theme/Theme';
import { headerContentMock } from './Header.mock';

function Header() {
  const props = headerContentMock;

  return (
    <Layout className={styles['header-wrapper']}>
      <header className={styles['header']}>
        <div className={styles['header-left']}>
          <Link href={'/'}>
            <a className={styles['header-nav__logo']} title={'Opens the Home page'}>
              <Image
                width={178}
                height={40}
                quality={100}
                src={props.logo.src}
                alt={props.logo.alt}
              />
            </a>
          </Link>
          <nav className={styles['header-nav']}>
            <ul className={styles['header-nav__list']}>
              {props.nav.map((navLink, key) => {
                return (
                  <li key={key} className={styles['header-nav__list-item']}>
                    <Cta {...navLink} className={styles['header-nav__list-cta']} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles['header-right']}>
          <Theme />
        </div>
      </header>
    </Layout>
  );
}

export default Header;
