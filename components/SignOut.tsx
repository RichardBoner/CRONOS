import { useAuth } from '@clerk/clerk-expo';
import React from 'react';
import { View, Button } from 'react-native';

export const SignOut = (): React.ReactNode => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};
