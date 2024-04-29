import { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableHighlight, StatusBar } from 'react-native';

import { SimpleUserData, useGetUsersByEmailLazyQuery } from '@/graphql/generated';
import { useUserStore } from '@/hooks/ZustandStore';

export default function UserSearchScreen(): React.ReactNode {
  const [LazyUserQuery, { data, loading, error }] = useGetUsersByEmailLazyQuery();
  const [users, setUsers] = useState<SimpleUserData[]>();
  const [username, setUsername] = useState('');
  const [isSelecting, setIsSelecting] = useState(false);
  const updateUseSelectedUsers = useUserStore((state) => state.addSelectedUsername);
  const SelectedUsers = useUserStore((state) => state.selectedUsernames);
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
  const handleUserScreach = (user: string, email: string): void => {
    setIsSelecting(false);
    updateUseSelectedUsers(user);
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
            <TouchableHighlight onPress={() => handleUserScreach(item.email, item.name)}>
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
  } else {
    return (
      <View
        style={{
          width: 380,
          height: 200,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#222',
          borderWidth: 5,
          borderColor: '#ffa',
          marginBottom: 10,
          borderRadius: 10,
        }}>
        <FlatList
          data={SelectedUsers}
          style={{ height: 200 }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                width: 355,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 30,
                borderWidth: 2,
                borderColor: '#9ff',
                margin: 3,
                paddingHorizontal: 5,
              }}>
              <Text style={{ color: '#ffa' }}>{item.name}</Text>
              <Text style={{ color: '#fff' }}>{item.email}</Text>
            </View>
          )}
        />
        <TouchableHighlight onPress={() => setIsSelecting(true)}>
          <Text
            style={{
              color: '#ffa',
              borderWidth: 2,
              borderColor: '#ffa',
              width: 355,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: 3,
              borderRadius: 10,
            }}>
            + add user
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
