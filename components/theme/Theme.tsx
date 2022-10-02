import React, { useState, useEffect } from 'react';

function Theme() {
  const [theme, setTheme] = useState('');
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const preferredTheme = darkQuery.matches;
    const localTheme = localStorage.getItem('theme');
    const htmlClassList = document.documentElement.classList;

    if (localTheme) {
      setTheme(localTheme);
      localTheme === 'dark' ? htmlClassList.add(localTheme) : htmlClassList.remove(localTheme)
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
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(event) => {
            const isChecked = event.target.checked ? 'dark' : 'light';
            setTheme(isChecked);
            onChangeTheme(isChecked)
          }}
        />{' '}
        {theme === 'dark' ? 'Dark' : 'Light'} mode
      </label>
    </>
  );
};

export default Theme;