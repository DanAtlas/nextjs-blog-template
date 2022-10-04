import React from "react";
import type { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';

function Layout({ children, layoutSize, className }: LayoutProps) {
  return (
    <div className={[
      styles['layout'],
      className
    ].join(' ')}>
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