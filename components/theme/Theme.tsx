import React, { useState, useEffect } from 'react';
import styles from './Theme.module.scss';
import { useAppContext } from '../../utils/contextHelper';

function Theme() {
  const { theme, setTheme } = useAppContext(); // eslint-disable-line react-hooks/rules-of-hooks
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const preferredTheme = darkQuery.matches;
    const localTheme = localStorage.getItem('theme');
    const htmlClassList = document.documentElement.classList;

    if (localTheme) {
      setTheme(localTheme);
      localTheme === 'dark' ? htmlClassList.add(localTheme) : htmlClassList.remove(localTheme);
    } else {
      setTheme(preferredTheme ? 'dark' : 'light');
      preferredTheme ? htmlClassList.add('dark') : htmlClassList.remove('dark');
    }
    setComponentMounted(true);
  }, [theme]);

  function onChangeTheme(theme: string) {
    const htmlClassList = document.documentElement.classList;
    theme === 'dark' ? htmlClassList.add('dark') : htmlClassList.remove('dark');
    localStorage.setItem('theme', theme);
  }

  return (
    <>
      <label
        className={styles['theme-label']}
        title={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
      >
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(event) => {
            const isChecked = event.target.checked ? 'dark' : 'light';
            setTheme(isChecked);
            onChangeTheme(isChecked);
          }}
          className={styles['theme-checkbox']}
        />{' '}
        <span className={styles['theme-icon']}></span>
      </label>
    </>
  );
}

export default Theme;
