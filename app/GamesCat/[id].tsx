import { useEffect, useState } from 'react';
import { View , Text, FlatList } from 'react-native';

import { Game } from '@/types/Rawg-types';
import { getGames } from '@/utils/getGame';

const RPGGameList: React.FC = () => {
  const [game, setGame] = useState<Game[] | null>(null);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData = await getGames(`&genres=3`);
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
  if (!game) return <Text>Loading</Text>;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ height: 200 }}
        data={game}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RPGGameList;
