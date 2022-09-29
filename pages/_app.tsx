import type { AppProps } from 'next/app'
import Link from 'next/link'
import Header from '../components/header/Header'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  )
}

export default MyApp
