import { create } from 'zustand';

import { Game } from '@/graphql/generated';

interface UserState {
  selectedUsernames: { email: string; name: string }[];
  addSelectedUsername: (email: string, name: string) => void;
  removeSelectedUsername: (name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  selectedUsernames: [],
  addSelectedUsername: (email, name) =>
    set((state) => ({
      selectedUsernames: [...state.selectedUsernames, { email, name }],
    })),
  removeSelectedUsername: (name) =>
    set((state) => ({
      selectedUsernames: state.selectedUsernames.filter((user) => user.name !== name),
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
