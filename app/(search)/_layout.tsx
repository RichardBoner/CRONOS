import { Stack, Redirect } from 'expo-router';

import { useLoginContext } from '@/hooks/ZustandStore';

export default function CalendarScreen(): React.ReactNode {
  const LogContext: boolean = useLoginContext((state) => state.LoggedIn);
  if (LogContext === false) {
    return <Redirect href="/(Login)/Login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
