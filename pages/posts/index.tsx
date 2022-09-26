import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Posts.module.scss'

function Posts() {
  return (
    <div>
      <Head>
        <title>Next.js boilerplate</title>
        <meta name="description" content="Next.js boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <div className="container">
          <h1>Posts page</h1>
          <Link href="/">
            <a>&#8592; Back to Home page</a>
          </Link>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Posts
