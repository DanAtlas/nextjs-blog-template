import type { AppProps } from 'next/app';
import React from 'react';
import Script from 'next/script';
import Header from '../components/header/Header';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <div>
      <Script
        strategy={'beforeInteractive'}
        dangerouslySetInnerHTML={{
          __html: setColorByTheme(),
        }}
      />
      
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  )
}

function setPreBodyScript() {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const preferredTheme = darkQuery.matches;
  const persistedPreference = localStorage.getItem('theme');
  const htmlClassList = document.documentElement.classList;

  let theme = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    theme = persistedPreference;
    persistedPreference === 'dark' ? htmlClassList.add(persistedPreference) : htmlClassList.remove(persistedPreference)
  } else {
    theme = preferredTheme ? 'dark' : 'light';
    preferredTheme ? htmlClassList.add('dark') : htmlClassList.remove('dark');
  }
}

function setColorByTheme() {
  const boundFn = String(setPreBodyScript);
  
  return `(${boundFn})()`;
}

export default MyApp;