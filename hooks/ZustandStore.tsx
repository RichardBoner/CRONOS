import { create } from 'zustand';

export const useUserNameStore = create((set) => ({
  selectedUsername: '',
  setSelectedUsername: (newUsername: string) => set({ selectedUsername: newUsername }),
}));

export const useGameIdStore = create((set) => ({
  selectedGameId: '',
  setSelectedGameId: (newGameId: string) => set({ selectedGameId: newGameId }),
}));
