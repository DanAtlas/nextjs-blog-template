import React from "react";
import type { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';

function Layout({ children, layoutSize }: LayoutProps) {
  return (
    <div className={styles['layout']}>
      <div className={[
        styles['container'],
        styles[!layoutSize ? 'container--large' : `container--${layoutSize}`]
      ].join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Layout;