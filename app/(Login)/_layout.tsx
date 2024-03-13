import { Stack } from 'expo-router';

export default function Login(): React.ReactNode {
  return (
    <Stack>
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
    </Stack>
  );
}
