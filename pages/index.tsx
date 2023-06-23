import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import Heading from 'components/heading/Heading';
import { fetchPostHeader } from 'utils/mdxUtils';
import type { PostsContentProps } from '../types/posts';
import BlogList from 'components/blog-list/BlogList';

const Home: NextPage<PostsContentProps> = ({ post, postItem }) => {
  return (
    <>
      <Head>
        <title>Next.js blog template</title>
        <meta name="description" content="Next.js blog template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
          <Heading as="h2" className={''}>
            Recently published
          </Heading>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <BlogList post={post} postItem={postItem} />
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
