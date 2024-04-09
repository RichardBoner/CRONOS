import { useSignIn } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen(): React.ReactNode {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignInPress = (): void => {
    onSignInPress();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 300, gap: 10 }}>
        <TextInput
          style={{ borderWidth: 1, padding: 10, borderColor: '#ccc', width: 300, height: 50 }}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, borderColor: '#ccc', width: 300, height: 50 }}
          value={password}
          placeholder="Password..."
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity
          onPress={handleSignInPress}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            width: '100%',
            height: 50,
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign in</Text>
        </TouchableOpacity>
        <Link
          href="/sign-up"
          style={{
            height: 50,
          }}>
          Sign Up?
        </Link>
      </View>
    </View>
  );
}
