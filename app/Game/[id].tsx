import { useEffect, useState } from 'react';
import { View , Text } from 'react-native';

import { getGameById } from '@/utils/getGame';

interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
}

const RPGGameList: React.FC = () => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData = await getGameById(1); // Fetch game with ID 1
        setGame(gameData);
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchGame();

    return () => {
      // Any cleanup code
    };
  }, []);
  console.log(game);
  return (
    <View>
      <Text>RPG Games</Text>
    </View>
  );
};

export default RPGGameList;
