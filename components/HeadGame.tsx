import { AntDesign, MaterialCommunityIcons, Fontisto, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import { Game, filter_game } from '@/types/Rawg-types';
import { getGameWithFilter } from '@/utils/getGame';

export default function HeadGame(): React.ReactNode {
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const fetchGame = async (): Promise<void> => {
      try {
        const gameData: filter_game | undefined = await getGameWithFilter(
          `&ordering=-rating&search_precise=true&dates=2013-09-17,2024-02-23`,
        ); // Fetch game with ID 1
        if (gameData !== undefined) {
          const firtsResult = gameData?.results[0];
          setGame(firtsResult);
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
  }, []);
  return (
    <ImageBackground
      source={{ uri: `${game?.background_image}` }}
      resizeMethod="resize"
      style={{ height: 400, justifyContent: 'flex-end' }}>
      <LinearGradient
        style={{ flex: 1, paddingTop: 68, width: '100%' }}
        colors={['#000000ba', '#0000']}
        start={[0, 0]}
        end={[0, 1]}>
        <View
          style={{
            height: 48,
            paddingHorizontal: 24,
            paddingVertical: 12,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons name="triangle" size={24} color="#8B5CF6" />
          </TouchableWithoutFeedback>
          <View style={{ width: 76, height: 28, flexDirection: 'row', gap: 20 }}>
            <Link href="/Search/GameSearch/">
              <AntDesign name="search1" size={28} color="#fff" />
            </Link>
            <TouchableWithoutFeedback>
              <Fontisto name="bell" size={24} color="#fff" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        style={{
          height: 100,
          flexDirection: 'column',
          gap: 8,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
        colors={['#000000da', '#0000']}
        start={[0, 1]}
        end={[0, 0]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: `rgba(255,255,255,1)`,
            fontWeight: '800',
            fontSize: 24,
            width: '100%',
            height: 29,
          }}>
          {game?.name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: `rgba(255,255,255,1)`,
            fontWeight: 'bold',
            fontSize: 12,
            overflow: 'hidden',
            flex: 1,
            height: 14,
          }}>
          {game?.rating}
        </Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TouchableHighlight
            style={{
              backgroundColor: '#8B5CF6',
              height: 32,
              width: 120,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <AntDesign name="play" size={16} color="white" />
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>Schedules</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              height: 32,
              width: 103,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              borderWidth: 2,
              borderColor: 'white',
            }}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <Entypo name="add-to-list" size={16} color="white" />
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>Details</Text>
            </View>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
