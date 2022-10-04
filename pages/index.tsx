import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import { fetchContent } from './api/posts';
import type { PostContentProps } from './types/posts';

const Home: NextPage<PostContentProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Next.js boilerplate</title>
        <meta name="description" content="Next.js boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
          <h2>Recently published</h2>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <ul className="posts-list__wrapper">
            {post.map((postItem, key) => {
              return (
                <li key={key} className="posts-list__item">
                  <Link href={`posts/${postItem.slug}`}>
                    <a className="posts-list__link">
                      <h3 className="posts-list__title">{postItem.title}</h3>
                      <small className="posts-list__date">{postItem.date}</small>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async () =>  {
  const post = fetchContent().filter(post => post.slug.toString());

  return {
    props: {
      post
    }
  }
}

export default Home
