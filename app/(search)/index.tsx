import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableHighlight,
  FlatList,
  StatusBar,
} from 'react-native';

import { Game, filter_game } from '@/types/Rawg-types';
import { getGameWithFilter } from '@/utils/getGame';

export default function SearchScreen(): React.ReactNode {
  const [game, setGame] = useState<Game[] | undefined>(undefined);
  const [inputValue, setInputValue] = useState('');
  const [gameName, setGameName] = useState('');
  const [gameData, setGameData] = useState<filter_game>();
  const [genre, setGenre] = useState<string>('');
  const [searchParam, setSearchParam] = useState<string[]>(['']);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        setGenre(arrayToString(searchParam));
        if (searchParam.length === 0 || (searchParam.length === 1 && searchParam[0] === '')) {
          const tempGameData: filter_game | undefined = await getGameWithFilter(
            `&search_precise=true&ordering=-rating&search={name=${gameName}}`,
          );
          setGameData(tempGameData);
        } else {
          const tempGameData: filter_game | undefined = await getGameWithFilter(
            `&search_precise=true&genres=${genre}&ordering=-rating&search={name=${gameName}}`,
          );
          setGameData(tempGameData);
        }
        if (gameData !== undefined) {
          setGame(gameData.results);
        }
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchGame();
    return () => {
      // Any cleanup code
    };
  }, [searchParam, gameName]);
  const arrayToString = (arr: string[]): string => {
    return arr.join(',');
  };
  const handleAddWord = (): void => {
    setSearchParam((searchParam) => [...searchParam, inputValue]);
    setInputValue('');
  };
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1 }}>
        <Text>fweijgw</Text>
        <TextInput onChangeText={setGameName} value={gameName} placeholder="Search" />
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
          horizontal
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
