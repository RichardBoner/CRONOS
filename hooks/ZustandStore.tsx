import { create } from 'zustand';

import { Game } from '@/graphql/generated';

interface UserState {
  selectedUsernames: string[];
  addSelectedUsername: (email: string) => void;
  removeSelectedUsername: (email: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  selectedUsernames: [''],
  addSelectedUsername: (email) =>
    set((state) => ({
      selectedUsernames: [...state.selectedUsernames, email],
    })),
  removeSelectedUsername: (email) =>
    set((state) => ({
      selectedUsernames: state.selectedUsernames.filter((user) => user !== email),
    })),
}));
interface GameState {
  selectedGameId: Game;
  setSelectedGameId: (by: Game) => void;
}

export const useGameIdStore = create<GameState>((set) => ({
  selectedGameId: {},
  setSelectedGameId: (newGameId: Game) => set({ selectedGameId: newGameId }),
}));
