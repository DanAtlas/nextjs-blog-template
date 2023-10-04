import React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import styles from './BlogContent.module.scss';
import Heading from '../heading/Heading';
import Quote from '../quote/Quote';
import type { PostsContentProps } from 'types/posts';

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h4" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h5" {...props} />,
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h6" {...props} />,
  img: (props: object) => (
    <Image src={''} width={700} height={468} objectFit="contain" loading="lazy" {...props} />
  ),
  blockquote: (props: object) => <Quote {...props} />,
};

function BlogContent({ postContent }: PostsContentProps) {
  return (
    <div className={styles['blog-content']}>
      <MDXRemote compiledSource={''} {...postContent} components={components}></MDXRemote>
    </div>
  );
}

export default BlogContent;
