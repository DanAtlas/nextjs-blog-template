import React from 'react';
import Link from 'next/link';
import styles from './PostCard.module.scss';
import Heading from '../heading/Heading';
import Category from 'components/category/Category';
import { formatDate } from '../../utils/formatDate';
import type { PostsContentProps } from 'types/posts';

function PostCard({ postItem }: PostsContentProps) {
  return (
    <>
      <li className={styles['post-card']}>
        <Link href={`posts/${postItem.slug}`}>
          <a className={styles['post-card__item']}>
            <Heading as="h5" className={styles['post-card__title']}>
              {postItem.title}
            </Heading>
            <div className={styles['post-card__footer']}>
              <small className={styles['post-card__date']}>{formatDate(postItem.date)}</small>
              <Category categories={postItem.tags} className={styles['post-card__category']} />
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}

export default PostCard;
