import Head from 'next/head';
import Layout from 'components/layout/Layout';
import Heading from 'components/heading/Heading';
import { fetchPostHeader } from 'utils/mdxUtils';
import type { PostsContentProps } from 'types/posts';
import BlogList from 'components/blog-list/BlogList';

function Posts({ post, postItem }: PostsContentProps) {
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="A collection of my posts" />
      </Head>

      <Layout>
        <section className="layout-section">
          <Heading as="h1" className={'h2'}>
            A collection of my posts
          </Heading>
          <BlogList post={post} postItem={postItem} />
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const post = fetchPostHeader().filter((post) => post.slug);

  return {
    props: {
      post,
    },
  };
};

export default Posts;
