import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import path from 'path';
import fs from 'fs';
import Layout from 'components/layout/Layout';
import BlogHeader from 'components/blog-header/BlogHeader';
import BlogContent from 'components/blog-content/BlogContent';
import ThemeStyles from 'components/theme/ThemeStyles';
import { fetchPostHeader, postsPath } from 'utils/mdxUtils';
import { useAppContext } from 'utils/contextHelper';
import type { PostContentProps } from 'types/posts';

interface Params extends ParsedUrlQuery {
  post: string;
}

export default function postDetail({ post, postContent }: PostContentProps) {
  const postItem = post[0];
  const { theme } = useAppContext();

  return (
    <>
      <Head>
        <title>{postItem.title}</title>
        <meta name="description" content={postItem.description} />
      </Head>

      <Layout>
        <ThemeStyles theme={theme} />
        <div className="post">
          <article>
            <BlogHeader postItem={postItem}></BlogHeader>
            <BlogContent postContent={postContent} post={post}></BlogContent>
          </article>
          <aside></aside>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const post = fetchPostHeader().filter((post) => post.slug === params.post);

  const filePath = path.join(postsPath, `${params.post}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);
  const postContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      post,
      postContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostHeader().map((post) => `/posts/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
};
