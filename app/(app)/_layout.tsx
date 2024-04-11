import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const AppLayout = (): React.ReactNode => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  if (!isSignedIn) return <Redirect href="/sign-in" />;
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#282b30' } }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};
export default AppLayout;
