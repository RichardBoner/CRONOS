import { Link } from 'expo-router';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';

import HeadGame from '@/components/HeadGame';

export default function HomeScreen(): React.ReactNode {
  const dummyData = [
    {
      creatorUserId: 'user1',
      date: '2024-04-09',
      duration: '1 hour',
      gameId: 'game1',
      id: '1',
      users: ['user1', 'user2'],
    },
    {
      creatorUserId: 'user2',
      date: '2024-04-10',
      duration: '45 minutes',
      gameId: 'game2',
      id: '2',
      users: ['user1', 'user2'],
    },
    // Add more dummy data objects as needed
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <View
        style={{
          height: 400,
          width: '100%',
          justifyContent: 'flex-end',
          borderColor: 'black',
          borderWidth: 2,
          marginBottom: 1,
        }}>
        <HeadGame />
      </View>
      <FlatList
        style={{ height: 100, width: '100%' }}
        data={dummyData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', width: '100%', borderCurve: 10 }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 2,
                  marginVertical: 2,
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderColor: '#585553',
                  backgroundColor: '#34302e',
                  paddingLeft: 13,
                }}>
                <Text style={{ color: '#a7a6a5' }}>{item.gameId}</Text>
                <Text>{item.date}</Text>
                <FlatList
                  style={{ flexDirection: 'row' }}
                  data={item.users}
                  renderItem={({ item }) => (
                    <View>
                      <Text>{item}</Text>
                    </View>
                  )}
                />
                <Link
                  style={{ flex: 1, borderStartColor: '#fff', height: 10 }}
                  href="/(app)/(stacks)/CreateSchedule/1">
                  CreateScheduleTest
                </Link>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}
