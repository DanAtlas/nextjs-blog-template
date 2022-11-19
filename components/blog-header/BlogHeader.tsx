import React from 'react';
import styles from './BlogHeader.module.scss';
import Image from 'next/image';
import { formatDate } from '../../utils/formatDate';
import Heading from '../heading/Heading';
import type { PostItemContentProps } from 'types/posts';

function BlogHeader({postItem}: PostItemContentProps) {
  // console.log('postItem', postItem)

  return (
    <div className={styles['blog-header']}>
      <Heading headingLevel="h1" className={''}>
        {postItem.title}
      </Heading>
      <p>
        <small>Published - {formatDate(postItem.date)} / by {postItem.author}</small>
      </p>
      <p>
        {postItem.tags.map((tag: string, index: number) => <span key={index} className="tag">{tag}</span>)}
      </p>
      {postItem.bannerUrl && 
        <div>
          <Image 
            src={postItem.bannerUrl}
            alt={postItem.title}
            width={700}
            height={468}
            objectFit="contain"
            loading="lazy"
          />
        </div>
      }
      {postItem.description && 
        <p>{postItem.description}</p>
      }
    </div>
  );
};

export default BlogHeader;