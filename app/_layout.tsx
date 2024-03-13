import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(Login)',
};

const RootLayoutNav: React.FC = () => {
  const publishableKey = 'pk_test_d29uZHJvdXMtZ29waGVyLTQyLmNsZXJrLmFjY291bnRzLmRldiQ';
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="GamesCat/[id]" />
          <Stack.Screen name="Game/[id]" />
          <Stack.Screen name="(search)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <Stack>
          <Stack.Screen name="(Login)" />
        </Stack>
      </SignedOut>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
