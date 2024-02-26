import { fetcher } from './fetcher';

import { Game } from '@/types/Rawg-types';

export async function getGameById(id: number, slug?: string): Promise<Game | undefined> {
  const apiKey = `cfa3a0eb339e4ec2a4f3b3c5e92289b7`;
  if (!apiKey) {
    throw new Error('RAWG API key is missing.');
  }

  const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  const fullUrl = slug !== undefined && slug !== '' ? `${url}${slug}` : url;

  try {
    const game = await fetcher<Game>(fullUrl);
    return game;
  } catch (error) {
    console.error(`Error fetching game with ID ${id}:`, error);
    throw error;
  }
}

export async function getGames(filters?: string): Promise<Game[] | undefined> {
  const apiKey = `cfa3a0eb339e4ec2a4f3b3c5e92289b7`;
  if (!apiKey) {
    throw new Error('RAWG API key is missing.');
  }

  const url = `https://api.rawg.io/api/games?key=${apiKey}${filters}`;

  try {
    const game = await fetcher<Game[]>(url);
    return game;
  } catch (error) {
    console.error(`Error fetching game with filter ${filters}:`, error);
    throw error;
  }
}
export async function getGameWithFilter(filters?: string): Promise<Game | undefined> {
  const apiKey = `cfa3a0eb339e4ec2a4f3b3c5e92289b7`;
  if (!apiKey) {
    throw new Error('RAWG API key is missing.');
  }

  const url = `https://api.rawg.io/api/games?key=${apiKey}${filters}`;

  try {
    const game = await fetcher<Game>(url);
    return game;
  } catch (error) {
    console.error(`Error fetching game with filter ${filters}:`, error);
    throw error;
  }
}
