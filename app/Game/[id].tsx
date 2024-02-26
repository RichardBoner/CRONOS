import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Game } from '@/types/Rawg-types';
import { getGameById } from '@/utils/getGame';

const RPGGameList: React.FC = () => {
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData = await getGameById(2); // Fetch game with ID 1
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
      <Text>{game?.name}</Text>
    </View>
  );
};

export default RPGGameList;
