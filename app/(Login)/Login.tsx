import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useLoginContext } from '@/hooks/ZustandStore';

// import { useLoginContext } from '@/hooks/ZustandStore';

export default function SignInScreen(): React.ReactNode {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const UnLog = useLoginContext((state) => state.setUnLogged);
  // function setLogin(): void {
  //   const unLog = useLoginContext((state) => state.setLogged);
  // }
  const ToggleUnlog = (): void => {
    UnLog();
  };
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
      ToggleUnlog();
      await setActive({ session: completeSignIn.createdSessionId });
      // setLogin();
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
          href="/(Login)/SignUp"
          style={{
            height: 50,
          }}>
          Sign Up?
        </Link>
      </View>
    </View>
  );
}
