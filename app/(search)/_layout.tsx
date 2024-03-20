import { useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';

export default function CalendarScreen(): React.ReactNode {
  const { isLoaded, userId } = useAuth();
  if (!isLoaded || userId == null) {
    // return <Redirect href="/(Login)/Login" />;
    console.log('not Logged in change in prod');
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
