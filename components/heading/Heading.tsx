import React from 'react';
import styles from './Heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({ headingLevel = 'h1', children, className }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);

  return <Heading className={[styles['heading'], className].join(' ')}>{children}</Heading>;
};

export default Heading;
