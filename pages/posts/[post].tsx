import Head from 'next/head';
import Image from 'next/image';
import type { GetStaticPaths } from 'next';
import Layout from 'components/layout/Layout';
import { fetchPostContent } from 'utils/fetchPostContent';
import { formatDate } from 'utils/formatDate';
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
            <p>
              <small>Published - {formatDate(postItem.date)} / by {postItem.author}</small>
            </p>
            <p>
              {postItem.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </p>
            <div>
              <Image 
                src={postItem.bannerUrl}
                alt={postItem.title}
                width={700}
                height={468}
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <p>{postItem.description}</p>
          </article>
          <aside></aside>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }: any) =>  {
  const post = fetchPostContent().filter(post => {
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
  const paths = fetchPostContent().map(post => `/posts/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
};