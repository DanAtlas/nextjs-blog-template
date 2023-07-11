import React from 'react';
import styles from './BlogLayout.module.scss';
import BlogHeader from '../blog-header/BlogHeader';
import BlogContent from '../blog-content/BlogContent';
import TableOfContents from '../table-of-contents/TableOfContents';
import type { PostsContentProps } from '../../types/posts';

function BlogLayout({ post, postItem, postContent, headings }: PostsContentProps) {
  return (
    <section className={[styles['blog-layout'], 'layout-section'].join(' ')}>
      <aside className={styles['aside']}>
        <TableOfContents postItem={postItem} headings={headings} post={post} />
      </aside>
      <article className={styles['article']}>
        <BlogHeader postItem={postItem} />
        <BlogContent postItem={postItem} postContent={postContent} post={post} />
      </article>
    </section>
  );
}

export default BlogLayout;
