import React from 'react';
import styles from './BlogContent.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../heading/Heading';
import type { PostContentProps } from 'pages/types/posts';
import { MDXRemote } from 'next-mdx-remote';

function BlogContent({postContent}: PostContentProps) {
  // console.log('postContent', postContent)
  return (
    <div className={styles['blog-content']}>
      <MDXRemote compiledSource={''} {...postContent}></MDXRemote>
    </div>
  );
};

export default BlogContent;