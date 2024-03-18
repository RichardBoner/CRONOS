import { create } from 'zustand';

export const useLoginContext = create((set) => ({
  LoggedIn: false,
  setUnLogged: () =>
    set((state: { LoggedIn: boolean }) => ({ LoggedIn: state.LoggedIn === false })),
}));
