import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import type { PostContentProps } from 'pages/types/posts';
import { fetchPostContent } from 'utils/fetchPostContent';
import { formatDate } from 'utils/formatDate';
import Heading from 'components/heading/Heading';

function Posts({ post }: PostContentProps) {
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Posts list page" />
      </Head>

      <Layout>
        <section>
          <Heading headingLevel="h1" className={''}>Recently published</Heading>
          <ul className="posts-list__wrapper">
            {post.map((postItem, key) => {
              return (
                <li key={key} className="posts-list__item">
                  <Link href={`posts/${postItem.slug}`}>
                    <a className="posts-list__link">
                      <Heading headingLevel="h3" className={'posts-list__title'}>{postItem.title}</Heading>
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
  const post = fetchPostContent().filter(post => post.slug.toString());

  return {
    props: {
      post
    }
  }
}

export default Posts
