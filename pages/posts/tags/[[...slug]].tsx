import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import Layout from 'components/layout/Layout';
import BlogList from 'components/blog-list/BlogList';
import Heading from 'components/heading/Heading';
import { countPosts, fetchPostHeader } from 'utils/mdxUtils';
import type { PostsContentProps } from 'types/posts';

interface Params extends ParsedUrlQuery {
  post: string;
}

interface TagProps extends PostsContentProps {
  tag: string;
}

export default function tag({ post, postItem, tag }: TagProps) {
  return (
    <>
      <Head>
        <title>Tagged: #{tag} page</title>
        <meta name="description" content={`Tagged: #${tag} page`} />
      </Head>

      <Layout>
        <section className="layout-section">
          <Heading as="h1" className={'h1'}>#{tag}</Heading>
          <BlogList post={post} postItem={postItem} />
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const tag = params.slug![0];
  const post = fetchPostHeader().filter((post) => post.tags.includes(tag));

  return {
    props: {
      post,
      tag
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const post = fetchPostHeader().filter((post) => post.slug);
  const mergeArrays = (arr: Array<Array<string>>) => {
    return [...new Set([].concat(...arr))];
  }
  const tagList = post.map(item => item.tags);
  const tags = mergeArrays(tagList);

  const paths = tags.flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag));
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag] },
          }
        : {
            params: { slug: [tag, (page + 1).toString()] },
          }
    );
  });

  return {
    paths,
    fallback: false,
  };
};
