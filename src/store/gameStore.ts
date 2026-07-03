import { create } from 'zustand';

interface GameState {
  gameData: any | null;
  activeMode: 'upload' | 'boss-raid' | 'concept-matching' | 'tower-climb' | 'millionaire' | 'safe-box' | 'pixel-reveal' | 'zen-sort' | 'detective' | 'menu';
  setGameData: (data: any | null) => void;
  setActiveMode: (mode: GameState['activeMode']) => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameData: null,
  activeMode: 'upload',
  setGameData: (data) => set({ gameData: data }),
  setActiveMode: (mode) => set({ activeMode: mode }),
}));
