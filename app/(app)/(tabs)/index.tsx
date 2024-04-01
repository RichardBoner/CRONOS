import { useUser } from '@clerk/clerk-expo';
import { View, Text } from 'react-native';

// import HeadGame from '@/components/HeadGame';

export default function HomeScreen(): React.ReactNode {
  const user = useUser();
  console.log(user);
  return (
    <View style={{ flex: 1 }}>
      {/* <HeadGame /> */}
      <Text>Recent Schedules</Text>
    </View>
  );
}
