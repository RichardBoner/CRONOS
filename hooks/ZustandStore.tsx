import { create } from 'zustand';

export const useUserNameStore = create((set) => ({
  selectedUsername: '',
  setSelectedUsername: (newUsername: string) => set({ selectedUsername: newUsername }),
}));

interface GameState {
  selectedGameId: string;
  setSelectedGameId: (by: string) => void;
}

export const useGameIdStore = create<GameState>((set) => ({
  selectedGameId: '',
  setSelectedGameId: (newGameId: string) => set({ selectedGameId: newGameId }),
}));
