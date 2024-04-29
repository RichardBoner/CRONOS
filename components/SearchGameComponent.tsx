import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableHighlight,
  FlatList,
  StatusBar,
} from 'react-native';

import { useGetGamesLazyQuery, Game } from '@/graphql/generated';
import { useGameIdStore } from '@/hooks/ZustandStore';

export default function SearchScreen(): React.ReactNode {
  // const [game, setGame] = useState<Game[] | undefined>(undefined);
  const [gameName, setGameName] = useState('');
  const [gameData, setGameData] = useState<Game[]>();
  const [selectingGame, setSelectingGame] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game>();
  const updateSelectedGameId = useGameIdStore((state) => state.setSelectedGameId);
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);
  const [LazyGameQuery, { data, loading, error }] = useGetGamesLazyQuery();

  const fetchGame = async (): Promise<void> => {
    try {
      await LazyGameQuery({
        variables: {
          query: `&search_precise=true&ordering=-rating&search={${gameName}}&search_exact=true`,
        },
      });
      if (error) console.error(error);
      waitUntilLoadingIsFalse();
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };
  const waitUntilLoadingIsFalse = async (): Promise<void> => {
    if (loading) {
      setTimeout(waitUntilLoadingIsFalse, 100); // Check again after 100 milliseconds
    } else {
      // Once loading is false, set the game data
      setGameData(data?.getGames);
      setUpdateFlag((prevFlag) => !prevFlag);
    }
  };
  const handleSearch = (): void => {
    fetchGame();
  };
  const handleSelectGame = (game: Game): void => {
    updateSelectedGameId(game);
    setSelectedGame(game);
    setSelectingGame(false);
  };
  if (selectingGame === true) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: '#000',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 2,
        }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              onChangeText={setGameName}
              value={gameName}
              placeholder="Tags..."
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: '#ffa',
                borderRadius: 5,
                flex: 1,
                padding: 8,
                color: '#fff',
              }}
            />
            <TouchableHighlight onPress={handleSearch}>
              <View
                style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="pluscircleo" size={24} color="#ffa" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <FlatList
          style={{ flex: 1, gap: 4 }}
          data={gameData}
          extraData={updateFlag}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => handleSelectGame(item)}
              style={{
                height: 60,
                marginHorizontal: 8,
                marginVertical: 5,
                backgroundColor: '#333333',
                borderWidth: 2,
                borderColor: '#9ff',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <ImageBackground
                  source={{ uri: `${item.background_image}` }}
                  resizeMethod="resize"
                  style={{
                    width: 150,
                    height: 56,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{ height: 24, flexDirection: 'row' }}>
                  <View
                    style={{
                      width: 34,
                      height: 24,
                      backgroundColor: '#C8F87E',
                      alignItems: 'center',
                    }}>
                    <Text>{item.rating}</Text>
                  </View>
                  <Text style={{ color: '#ffa' }}>{item.name}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          width: 380,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#000',
          borderWidth: 3,
          borderColor: '#ffa',
          borderRadius: 5,
        }}>
        <ImageBackground
          source={{ uri: `${selectedGame?.background_image}` }}
          resizeMethod="resize"
          style={{ width: 50, height: 44 }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{ color: '#F8EB7E', width: 200 }} numberOfLines={1} ellipsizeMode="tail">
            {selectedGame?.name}
          </Text>
          <TouchableHighlight onPress={() => setSelectingGame(true)}>
            <Text style={{ color: '#F8EB7E' }}>Change Game?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
