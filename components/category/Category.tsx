import React from 'react';
import styles from './Category.module.scss';
import type { CategoryProps } from './Category.types'

function Category({ categories, className }: CategoryProps) {
  return (
    <div className={[
      styles['category']
    ].join(' ')}>
      {categories.map((category: string, index: number) => (
        <span key={index} className={[styles['category__item'], className].join(' ')}>{category}</span>
      ))}
    </div>
  );
}

export default Category;
