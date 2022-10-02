import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   let subscribed = false;
  //   if(!subscribed) {
  //     setColorByTheme()
  //   }

  //   return () => {
  //     subscribed = true
  //   }
  // }, []);
  
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

// function setPreBodyScript() {
//   const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
//   const preferredTheme = darkQuery.matches;
//   const persistedPreference = localStorage.getItem('theme');
//   const htmlClassList = document.documentElement.classList;

//   let theme = 'light';

//   const hasUsedToggle = typeof persistedPreference === 'string';

//   if (hasUsedToggle) {
//     theme = persistedPreference;
//     persistedPreference === 'dark' ? htmlClassList.add(persistedPreference) : htmlClassList.remove(persistedPreference)
//   } else {
//     theme = preferredTheme ? 'dark' : 'light';
//     preferredTheme ? htmlClassList.add('dark') : htmlClassList.remove('dark');
//   }
// }

// function setColorByTheme() {
//   const script = document.createElement("script");
//   const boundFn = String(setPreBodyScript);
//   let calledFunction = `(${boundFn})()`;
//   script.innerHTML = calledFunction;

//   document.body.insertAdjacentElement('afterbegin', script)
// }

export default MyApp;