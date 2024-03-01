import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TextInput, View, ImageBackground, TouchableHighlight, FlatList } from 'react-native';

import { Game, filter_game } from '@/types/Rawg-types';
import { getGameWithFilter } from '@/utils/getGame';

export default function SearchScreen(): React.ReactNode {
  const [game, setGame] = useState<Game[] | undefined>(undefined);
  const [inputValue, setInputValue] = useState('');
  const [searchParam, setSearchParam] = useState<string[]>(['']);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData: filter_game | undefined = await getGameWithFilter(
          `&search_precise=true&tags=${searchParam}&genres=${searchParam}&ordering=-rating`,
        ); // Fetch game with ID 1
        if (gameData !== undefined) {
          setGame(gameData.results);
        } else {
          console.error('fetch failed');
        }
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchGame();
    return () => {
      // Any cleanup code
    };
  }, [searchParam]);
  const handleAddWord = (): void => {
    if (inputValue.trim() !== '') {
      const lowercaseWord = inputValue.toLowerCase();
      setSearchParam([...searchParam, lowercaseWord.trim()]);
      console.log(searchParam);
      setInputValue('');
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>fweijgw</Text>
        <TextInput onChangeText={setInputValue} value={inputValue} placeholder="Search" />
        <TouchableHighlight onPress={handleAddWord}>
          <Text>Add Tag</Text>
        </TouchableHighlight>
        <View>
          {searchParam.map((word, index) => (
            <Text key={index}>{word}</Text>
          ))}
        </View>
        <FlatList
          horizontal={false}
          style={{ flex: 1 }}
          data={game}
          renderItem={({ item }) => (
            <Link href={`/Game/${item.id}`} style={{ height: '100%', marginHorizontal: 4 }}>
              <ImageBackground
                source={{ uri: `${item.background_image}` }}
                imageStyle={{ borderRadius: 12 }}
                resizeMethod="resize"
                style={{ width: 150, height: 70, padding: 5, borderRadius: 12 }}>
                <View
                  style={{
                    width: 34,
                    height: 24,
                    backgroundColor: '#06C149',
                    borderRadius: 6,
                    alignItems: 'center',
                  }}>
                  <Text>{item.rating}</Text>
                </View>
              </ImageBackground>
            </Link>
          )}
        />
      </View>
    </View>
  );
}
