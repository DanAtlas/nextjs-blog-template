import Head from 'next/head'
import Link from 'next/link'
import { fetchContent } from 'pages/api/posts';
import type { PostContentProps } from 'pages/types/posts';
// import styles from '../styles/Posts.module.scss'

function Posts({ post }: PostContentProps) {
  return (
    <div>
      <Head>
        <title>Next.js boilerplate</title>
        <meta name="description" content="Next.js boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
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
    </div>
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
