import type { GetStaticPaths } from 'next';
import Link from 'next/link';
import { fetchContent } from 'pages/api/posts';
import type { PostContentProps } from 'pages/types/posts';

export default function postDetail({ post }: PostContentProps) {
  const postItem = post[0];

  return (
    <div className="container">
      <div className="">
        <article>
          <h1>{postItem.title}</h1>
          <small>Published - {postItem.date}</small>
        </article>
        <aside></aside>
      </div>
    </div>
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