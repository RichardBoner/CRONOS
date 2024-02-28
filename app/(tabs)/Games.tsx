import { Link } from 'expo-router';
import { View } from 'react-native';

export default function GamesScreen(): React.ReactNode {
  return (
    <View>
      <Link href="/Game/1">game with id</Link>
      <Link href="/GamesCat/1">games with id</Link>
    </View>
  );
}
