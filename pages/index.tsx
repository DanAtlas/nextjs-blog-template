import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './homepage.module.scss';
import Layout from 'components/layout/Layout';
import Heading from 'components/heading/Heading';
import BlogList from 'components/blog-list/BlogList';
import Cta from 'components/cta/Cta';
import { fetchPostHeader } from 'utils/mdxUtils';
import type { PostsContentProps } from '../types/posts';

const Home: NextPage<PostsContentProps> = ({ post, postItem }) => {
  return (
    <>
      <Head>
        <title>Next.js blog template</title>
        <meta name="description" content="Next.js blog template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={[styles['homepage'], "layout-section"].join(' ')}>
          <Heading as="h1" className={'h2'}>
            Recently published
          </Heading>
          <div className={styles['recent-posts__wrapper']}>
            <Cta 
              href="/posts" 
              copy="View all posts" 
              title="Opens the All Posts page"
              className={styles['recent-posts__cta']}
              ctaTheme="underline"
            />
            <BlogList post={post} postItem={postItem}  limit={3} />
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const post = fetchPostHeader().filter((post) => post.slug);

  return {
    props: {
      post,
    },
  };
};

export default Home;
