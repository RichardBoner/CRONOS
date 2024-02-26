import { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { Game } from '@/types/Rawg-types';
import { getGameWithFilter } from '@/utils/getGame';

export default function HomeScreen(): React.ReactNode {
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData = await getGameWithFilter(
          `&search=query&ordering=rating&dates=2022-01-01,2024-02-23`,
        ); // Fetch game with ID 1
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
  if (game) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: `${game?.background_image}` }}
          style={{ height: 428, width: '100%' }}>
          <Text>{game?.name}</Text>
        </ImageBackground>
        <Text>Tab One!</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading.</Text>
      </View>
    );
  }
}
