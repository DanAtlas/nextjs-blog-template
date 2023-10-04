import React, { useEffect } from 'react';
import styles from './TableOfContents.module.scss';
import type { PostsContentProps, BlogContentHeadingProps } from 'types/posts';
import Heading from '../heading/Heading';

function smoothScroll(heading: string) {
  const yOffset = -92; 
  const headingElement = document.getElementById(heading)!;
  const headingAnchor = (headingElement.querySelector('.anchor') as HTMLAnchorElement);
  const y = headingElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
  setTimeout(() => {
    headingAnchor.focus();
  }, 700);
};

function onNavigationAnchorClick(heading: string) {
  smoothScroll(heading);
};

function TableOfContents({ headings }: PostsContentProps) {
  useEffect(()=> {
    const headingAchorElements = document.querySelectorAll('.anchor');
    
    headingAchorElements.forEach(function(anchorEl) {
      anchorEl.addEventListener('click', function(event: Event) {
        event.preventDefault();

        const anchorElHref = anchorEl.getAttribute('href')!; 
        const anchorElValue = anchorElHref.substring(anchorElHref.indexOf('#') + 1);

        smoothScroll(anchorElValue);
      });
    });
  });

  return (
    <div className={styles['table-of-contents']}>
      <Heading as="h2" className={styles['table-of-contents__title']}>Table of Contents:</Heading>
      <ul className={styles['table-of-contents__list']}>
        {headings && headings.map((heading: BlogContentHeadingProps) => {
          const headingId = heading.text.toLowerCase().replaceAll(' ', '-');

          return (
            <li 
              key={heading.text} 
              className={[
                styles['table-of-contents__item'],
                styles[heading.level === 3 ? 'table-of-contents__item--sub' : '']
              ].join(' ')}
            >
              <a 
                href={`#${headingId}`}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigationAnchorClick(headingId)
                }}
              >
                {heading.text}
              </a>
            </li>
          )}
        )}
      </ul>
    </div>
  );
}

export default TableOfContents;
