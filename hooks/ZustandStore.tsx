import { create } from 'zustand';

export const useLoginContext = create((set) => ({
  //false in production
  LoggedIn: false,
  setUnLogged: () => set((state: { LoggedIn: boolean }) => ({ LoggedIn: true })),
}));
