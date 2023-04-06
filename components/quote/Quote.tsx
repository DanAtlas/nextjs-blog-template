import React from 'react';
import styles from './Quote.module.scss';
import type { QuoteProps } from './Quote.types';

function Quote({ children, cite, className }: QuoteProps) {
  return (
    <blockquote className={[styles['quote'], className].join(' ')} cite={cite}>
      {children}
    </blockquote>
  );
}

export default Quote;
