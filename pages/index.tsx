import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
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
          <h1>Home page</h1>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
