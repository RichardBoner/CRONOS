import { useSignIn } from '@clerk/clerk-expo';
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
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  const hadnleSigninPress = (): void => {
    onSignInPress();
  };
  return (
    <View>
      <View>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={hadnleSigninPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
