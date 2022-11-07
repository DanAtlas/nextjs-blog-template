import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Cta from 'components/cta/Cta';
import Layout from 'components/layout/Layout';
import { headerContentMock } from './Header.mock';
import Theme from 'components/theme/Theme';

function Header() {
  const props = headerContentMock;

  return (
    <Layout>
      <header className={styles.header}>
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
                    <Cta
                      {...navLink}
                      className={styles['header-nav__list-cta']}
                    />
                  </li>
                )
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
};

export default Header;