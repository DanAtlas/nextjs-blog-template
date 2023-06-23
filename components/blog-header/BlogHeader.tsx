import React from 'react';
import Image from 'next/image';
import styles from './BlogHeader.module.scss';
import { formatDate } from '../../utils/formatDate';
import Heading from '../heading/Heading';
import Category from '../category/Category';
import type { PostItemContentProps } from 'types/posts';

function BlogHeader({ postItem }: PostItemContentProps) {
  return (
    <div className={styles['blog-header']}>
      <Heading as="h1" className={''}>
        {postItem.title}
      </Heading>
      <p>
        <small>
          Published - {formatDate(postItem.date)} {postItem.author && `/ by ${postItem.author}`}
        </small>
      </p>
      <Category categories={postItem.tags} />
      {postItem.bannerUrl && (
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
      )}
      {postItem.description && <p>{postItem.description}</p>}
    </div>
  );
}

export default BlogHeader;
