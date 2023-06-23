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
        <meta name="description" content="Posts list page" />
      </Head>

      <Layout>
        <section>
          <Heading as="h1" className={''}>
            Recently published
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
