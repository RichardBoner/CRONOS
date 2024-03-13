import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(tabs)',
};

const RootLayoutNav: React.FC = () => {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="GamesCat/[id]" />
      <Stack.Screen name="Game/[id]" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(search)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayoutNav;
