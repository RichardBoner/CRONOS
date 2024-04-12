import { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableHighlight, StatusBar } from 'react-native';

import { SimpleUserData, useGetUsersByEmailLazyQuery } from '@/graphql/generated';

export default function UserSearchScreen(): React.ReactNode {
  const [LazyUserQuery, { data, loading, error }] = useGetUsersByEmailLazyQuery();
  const [users, setUsers] = useState<SimpleUserData[]>();
  const [username, setUsername] = useState('');
  const [isSelecting, setIsSelecting] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, [username]);
  const fetchUsers = async (): Promise<void> => {
    try {
      await LazyUserQuery({
        variables: {
          name: username,
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
      setUsers(data?.getUsersByEmail);
    }
  };
  const handleUserScreach = (): void => {
    setIsSelecting(false);
  };
  if (isSelecting === true) {
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
        <TextInput
          onChangeText={setUsername}
          value={username}
          placeholder="Tags..."
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: '#9ff',
            borderRadius: 5,
            padding: 8,
            marginBottom: 10,
            color: '#ffa',
          }}
        />
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={handleUserScreach}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  borderWidth: 3,
                  borderColor: '#9fa',
                  borderRadius: 5,
                  marginBottom: 5,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text style={{ color: '#ffa' }}>{item.name}:</Text>
                <Text style={{ color: '#F8947E' }}>{item.email}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}
