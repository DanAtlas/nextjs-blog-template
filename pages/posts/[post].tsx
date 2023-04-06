import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import path from 'path';
import fs from 'fs';
import Layout from 'components/layout/Layout';
import BlogLayout from 'components/blog-layout/BlogLayout';
import ThemeStyles from 'components/theme/ThemeStyles';
import { fetchPostHeader, getHeadings, postsPath } from 'utils/mdxUtils';
import { useAppContext } from 'utils/contextHelper';
import type { PostsContentProps } from 'types/posts';

interface Params extends ParsedUrlQuery {
  post: string;
}

export default function postDetail({ post, postContent, headings }: PostsContentProps) {
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
        <BlogLayout 
          post={post} 
          postItem={postItem} 
          postContent={postContent} 
          headings={headings}
        />
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
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });
  const headings = await getHeadings(content);

  return {
    props: {
      post,
      postContent,
      headings
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
