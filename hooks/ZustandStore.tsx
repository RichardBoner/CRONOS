import { create } from 'zustand';

export const useLoginContext = create((set) => ({
  LoggedIn: true,
  setLogged: () => set((state: { LoggedIn: boolean }) => ({ LoggedIn: state.LoggedIn === true })),
  setUnLogged: () =>
    set((state: { LoggedIn: boolean }) => ({ LoggedIn: state.LoggedIn === false })),
}));
