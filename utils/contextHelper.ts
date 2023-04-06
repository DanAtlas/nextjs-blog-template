import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function useAppContext() {
  const state = useContext(AppContext);
  if (!state) {
    throw new Error(`Can't access "AppContext" as it is 'null'.`);
  }
  return state;
}
