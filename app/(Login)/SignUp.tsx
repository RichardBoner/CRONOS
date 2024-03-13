import { useSignUp } from '@clerk/clerk-expo';
import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  // start the sign up process.
  const onSignUpPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }
    if (repeatPassword !== password) {
      console.error('password does not match');
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
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
        <View>
          <TextInput
            style={{
              width: 300,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            autoCapitalize="none"
            value={firstName}
            placeholder="First Name..."
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <TextInput
            style={{
              width: 300,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            autoCapitalize="none"
            value={lastName}
            placeholder="Last Name..."
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <TextInput
            style={{
              width: 300,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={(email) => setEmailAddress(email)}
          />
          <TextInput
            style={{
              width: 300,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            value={password}
            placeholder="Password..."
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            style={{
              width: 300,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            value={repeatPassword}
            placeholder="Repeat Password..."
            secureTextEntry
            onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
          />
          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
              width: 300,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View>
          <TextInput
            style={{
              width: '80%',
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              borderRadius: 5,
            }}
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
          />
          <TouchableOpacity
            onPress={handleVerify}
            style={{
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
              width: '80%',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ fontWeight: 'bold' }}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
