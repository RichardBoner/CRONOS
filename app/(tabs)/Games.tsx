import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function GamesScreen(): React.ReactNode {
  return (
    <View>
      <Stack>
        <Stack.Screen name="Game/GamesCat/[id]" />
        <Stack.Screen name="Game/[id]" />
      </Stack>
      <Link href="/Game/1">game with id</Link>
      <Link href="/GamesCat/1">games with id</Link>
    </View>
  );
}
