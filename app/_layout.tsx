import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { dark } from '@clerk/themes';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/(Login)',
};

const RootLayoutNav: React.FC = () => {
  const publishableKey = 'pk_test_d29uZHJvdXMtZ29waGVyLTQyLmNsZXJrLmFjY291bnRzLmRldiQ';
  return (
    <ClerkProvider publishableKey={publishableKey} appearance={{ baseTheme: dark }}>
      <SignedOut>
        <Stack>
          <Stack.Screen name="(Login)" />
        </Stack>
      </SignedOut>
      <SignedIn>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(stacks)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
