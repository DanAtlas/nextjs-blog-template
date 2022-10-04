import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import { fetchContent } from 'pages/api/posts';
import type { PostContentProps } from 'pages/types/posts';

function Posts({ post }: PostContentProps) {
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Posts page" />
      </Head>

      <Layout>
        <section>
          <h1>Recently published</h1>
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

export default Posts
