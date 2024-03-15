import { useSignUp } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [username, setusername] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  // start the sign up process.
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

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
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

  // This verifies the user using email code that is delivered.
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
          <Link href="/(Login)/Login">Login?</Link>
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
