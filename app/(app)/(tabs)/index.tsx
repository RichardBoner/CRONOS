import { View, Text } from 'react-native';

import HeadGame from '@/components/HeadGame';

export default function HomeScreen(): React.ReactNode {
  return (
    <View style={{ flex: 1 }}>
      <HeadGame />
      <Text>Recent Schedules</Text>
    </View>
  );
}
