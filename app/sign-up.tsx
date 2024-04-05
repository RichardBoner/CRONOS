import { useSignUp } from '@clerk/clerk-expo';
import JWT from 'expo-jwt';
import { SupportedAlgorithms } from 'expo-jwt/dist/types/algorithms';
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [username, setusername] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const key = 'AYEqnQcyGSM4';
  interface UserPayload {
    id: string;
    name: string;
    password: string;
    createdAt: string;
  }

  const generateJWT = (userPayload: UserPayload): string => {
    return JWT.encode(userPayload, key, SupportedAlgorithms.HS256);
  };
  const userPayload: UserPayload = {
    id: 'user_2dil6ujpJVWxRzJ9CLxHREKDJgE',
    name: 'richardBonerExample',
    password: 'examplePassword',
    createdAt: '2022-04-05',
  };
  const jwt = generateJWT(userPayload);
  console.log(jwt);
  const onSignUpPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        username,
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setPendingVerification(true);
      router.push('/sign-in');
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  const handleVerify = (): void => {
    onPressVerify();
  };
  const handleSignUp = (): void => {
    onSignUpPress();
  };
  const onPressVerify = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!pendingVerification && (
        <View style={{ width: '80%' }}>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{ borderWidth: 1, padding: 10, borderColor: '#ccc' }}
              autoCapitalize="none"
              value={username}
              placeholder="User Name..."
              onChangeText={(username) => setusername(username)}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{ borderWidth: 1, padding: 10, borderColor: '#ccc' }}
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{ borderWidth: 1, padding: 10, borderColor: '#ccc' }}
              value={password}
              placeholder="Password..."
              placeholderTextColor="#000"
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Link href="/sign-in">Login?</Link>
        </View>
      )}
      {pendingVerification && (
        <View style={{ width: '80%' }}>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{ borderWidth: 1, padding: 10, borderColor: '#ccc' }}
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity
            onPress={handleVerify}
            style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
