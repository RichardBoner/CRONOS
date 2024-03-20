import { useSignIn } from '@clerk/clerk-expo';
import { Link, Redirect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useWarmUpBrowser } from '@/hooks/UseWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen(): React.ReactNode {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  useWarmUpBrowser();

  // const onPressGoogle = React.useCallback(async () => {
  //   try {
  //     const { createdSessionId, setActive } = await startOAuthFlow();

  //     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  //     if (createdSessionId) {
  //       setActive({ session: createdSessionId });
  //     } else {
  //       // Use signIn or signUp for next steps such as MFA
  //     }
  //   } catch (err) {
  //     console.error('OAuth error', err);
  //   }
  // }, []);
  //intigrate google close to release
  const onSignInPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      // setLogin();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignInPress = (): void => {
    onSignInPress();
  };
  if (isLoaded || userId !== null) return <Redirect href="/(tabs)" />;
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
          href="/(Login)/SignUp"
          style={{
            height: 50,
          }}>
          Sign Up?
        </Link>
        <Link
          href="/(tabs)"
          style={{
            height: 50,
          }}>
          Remove in prod
        </Link>
      </View>
    </View>
  );
}
