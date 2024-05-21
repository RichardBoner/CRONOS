import { useUser } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';

import HeadGame from '@/components/HeadGame';
import { GetScheduleByIdQuery, useGetScheduleByIdLazyQuery } from '@/graphql/generated';

export default function HomeScreen(): React.ReactNode {
  const [scheduleArray, setScheduleArray] = useState<GetScheduleByIdQuery | undefined>();
  const [LazyScheduleQuery, { data, loading, error }] = useGetScheduleByIdLazyQuery();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const getUserSchedules = async (): Promise<void> => {
      if (isLoaded && user)
        try {
          await LazyScheduleQuery({
            variables: {
              getScheduleByIdId: String(user?.primaryEmailAddress),
            },
          });
          if (error) console.error(error);
        } catch (error) {
          console.error('Error fetching game:', error);
        }
    };
    getUserSchedules();
  }, []);
  useEffect(() => {
    const getUserSchedules = async (): Promise<void> => {
      setScheduleArray(data?.getScheduleById);
    };
    getUserSchedules();
  }, [loading]);

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
        data={scheduleArray}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', width: '100%', borderRadius: 10 }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 2,
                  marginVertical: 2,
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderColor: '#ffa',
                  paddingLeft: 13,
                }}>
                <Text style={{ color: '#a7a6a5' }}>{item.gameId}</Text>
                <Text style={{ color: '#a7a6a5' }}> {item.id}</Text>
                <FlatList
                  style={{ flexDirection: 'row' }}
                  data={item.users}
                  renderItem={({ item }) => (
                    <View>
                      <Text style={{ color: '#fff' }}>{item}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}
