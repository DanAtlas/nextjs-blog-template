import Head from 'next/head';
import type { GetStaticPaths } from 'next';
import Layout from 'components/layout/Layout';
import { fetchContent } from 'pages/api/posts';
import type { PostContentProps } from 'pages/types/posts';

export default function postDetail({ post }: PostContentProps) {
  const postItem = post[0];

  return (
    <>
      <Head>
        <title>Post page</title>
        <meta name="description" content="Post page" />
      </Head>

      <Layout>
        <div className="post">
          <article>
            <h1>{postItem.title}</h1>
            <small>Published - {postItem.date}</small>
          </article>
          <aside></aside>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }: any) =>  {
  const post = fetchContent().filter(post => {
    if(post.slug.toString() === params.post) {
      return post
    }
  });

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchContent().map(post => `/posts/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
};