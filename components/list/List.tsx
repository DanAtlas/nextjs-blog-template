import React from 'react';
import styles from './List.module.scss';
import type { ListProps } from './List.types';

function List({ listType, className, children }: ListProps) {
  return (
    <div className={styles['list-wrapper']}>
      {listType === 'unordered' 
        ? (
            <ul className={[styles['list'], styles['unordered'], className].join(' ')}>
              {children}
            </ul>
          )
        : (
            <ol className={[styles['list'], styles['ordered'], className].join(' ')}>
              {children}
            </ol>
          )}
    </div>
  )
}

export default List;
