import React from 'react';
import styles from './Category.module.scss';
import type { CategoryProps } from './Category.types';
import Cta from 'components/cta/Cta';

function Category({ categories, className, theme }: CategoryProps) {
  return (
    <div className={[
      styles['category'],
      styles[`category--${!theme ? 'default' : theme}`],
    ].join(' ')}>
      {categories.map((category: string, index: number) => (
        <Cta 
          key={index}  
          href={`/posts/tags/${category.toLowerCase().replaceAll(' ', '-')}`}
          className={[styles['category__item'], className].join(' ')}
          ctaSize={'size-small'}
          ctaTheme={theme === 'sharp' ? 'underline' : undefined}
          copy={theme === 'sharp' ? `#${category}` : category}
          title={`Opens tag #${category} page`}
        />
      ))}
    </div>
  );
}

export default Category;
