import { AntDesign } from '@expo/vector-icons';
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
  TouchableWithoutFeedback,
} from 'react-native';

import { Game, filter_game } from '@/types/Rawg-types';
import { getGameWithFilter } from '@/utils/getGame';

export default function SearchScreen(): React.ReactNode {
  const [game, setGame] = useState<Game[] | undefined>(undefined);
  const [inputValue, setInputValue] = useState('');
  const [gameName, setGameName] = useState('');
  const [gameData, setGameData] = useState<filter_game>();
  const [genre, setGenre] = useState<string>('');
  const [searchParam, setSearchParam] = useState<string[]>([]);

  useEffect(() => {
    fetchGame();
    return () => {
      // Any cleanup code
    };
  }, []);
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
          `&genres=${genre}&tags=${genre}&ordering=-rating&search={name=${gameName}}`,
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
  const arrayToString = (arr: string[]): string => {
    return arr.join(',');
  };
  const handleAddWord = (): void => {
    if (inputValue !== '') {
      setSearchParam((searchParam) => [...searchParam, inputValue]);
      setInputValue('');
    }
    fetchGame();
  };
  const handleItemRemoval = (value: string): void => {
    setSearchParam(searchParam.filter((item) => item !== value));
  };
  const handleSearch = (): void => {
    fetchGame();
  };
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#3A3C42' }}>
      <View style={{ flex: 1 }}>
        <Link href="/(tabs)">Home remove in prod</Link>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={setGameName}
            value={gameName}
            placeholder="Tags..."
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: '#9BA8A8',
              borderRadius: 5,
              flex: 1,
              padding: 8,
            }}
          />
          <TouchableHighlight onPress={handleSearch}>
            <View style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="Tags..."
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: '#9BA8A8',
              borderRadius: 5,
              flex: 1,
              padding: 8,
            }}
          />
          <TouchableHighlight onPress={handleAddWord}>
            <View style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <FlatList
            horizontal
            style={{ height: 100, width: '100%' }}
            data={searchParam}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => handleItemRemoval(item)}>
                <View
                  style={{
                    width: 80,
                    height: 30,
                    borderWidth: 2,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
        <FlatList
          style={{ flex: 1, gap: 4 }}
          data={game}
          renderItem={({ item }) => (
            <Link
              href={`/(stacks)/CreateSchedule/${item.id}`}
              style={{ height: 60, marginHorizontal: 4, backgroundColor: '#333333' }}>
              <ImageBackground
                source={{ uri: `${item.background_image}` }}
                resizeMethod="resize"
                style={{ width: 150, height: 60 }}
              />
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
            </Link>
          )}
        />
      </View>
    </View>
  );
}
