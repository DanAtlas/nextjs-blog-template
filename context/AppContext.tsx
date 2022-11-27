import React, { useState, createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface ContextState {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as ContextState);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('');

  const state = {
    theme,
    setTheme,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
