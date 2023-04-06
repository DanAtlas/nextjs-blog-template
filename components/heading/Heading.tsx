import React from 'react';
import styles from './Heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({ as = 'h1', id, children, className }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);

  return <Heading id={id} className={[styles['heading'], className].join(' ')}>{children}</Heading>;
};

export default Heading;
