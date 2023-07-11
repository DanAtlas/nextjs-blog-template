import React from 'react';
import Link from 'next/link';
import styles from './PostCard.module.scss';
import Heading from '../heading/Heading';
import Category from '../category/Category';
import { formatDate } from '../../utils/formatDate';
import type { PostsContentProps } from 'types/posts';

function PostCard({ postItem }: PostsContentProps) {
  return (
    <>
      <li className={styles['post-card']}>
        <div className={styles['post-card__item']}>
          <Heading as="h2" className={[styles['post-card__title'], 'h5'].join(' ')}>
            {postItem.title}
          </Heading>
          <Link href={`/posts/${postItem.slug}`}>
            <a className={styles['post-card__link']} title={postItem.title}></a>
          </Link>
          <div className={styles['post-card__footer']}>
            <small className={styles['post-card__date']}>{formatDate(postItem.date)}</small>
            <Category categories={postItem.tags} theme={'sharp'} className={styles['post-card__category']} />
          </div>
        </div>
      </li>
    </>
  );
}

export default PostCard;
