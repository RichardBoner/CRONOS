import { Stack } from 'expo-router';

export default function CalendarScreen(): React.ReactNode {
  return (
    <Stack>
      <Stack.Screen name="CreateSchedule/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="Game/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
