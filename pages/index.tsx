import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import { fetchPostHeader } from 'utils/mdxUtils';
import { formatDate } from 'utils/formatDate';
import type { PostContentProps } from './types/posts';
import Heading from 'components/heading/Heading';

const Home: NextPage<PostContentProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Next.js blog template</title>
        <meta name="description" content="Next.js blog template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
          <Heading headingLevel="h2" className={''}>Recently published</Heading>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <ul className="posts-list__wrapper">
            {post.map((postItem, key) => {
              return (
                <li key={key} className="posts-list__item">
                  <Link href={`posts/${postItem.slug}`}>
                    <a className="posts-list__link">
                      <Heading headingLevel="h4" className={'posts-list__title'}>{postItem.title}</Heading>
                      <small className="posts-list__date">{formatDate(postItem.date)}</small>
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
  const post = fetchPostHeader().filter(post => post.slug.toString());

  return {
    props: {
      post
    }
  }
}

export default Home
