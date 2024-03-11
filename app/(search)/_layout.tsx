import { Stack } from 'expo-router';

export default function CalendarScreen(): React.ReactNode {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
