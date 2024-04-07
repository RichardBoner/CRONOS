import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

const RootLayoutNav: React.FC = () => {
  const clerkKey = String(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const client = new ApolloClient({
    uri: 'http://localhost:192.168.56.1:3000/api/graphql',
    cache: new InMemoryCache(),
  });
  if (!clerkKey) {
    console.error('clerk Key Missing');
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={clerkKey}>
        <ApolloProvider client={client}>
          <Slot />
        </ApolloProvider>
      </ClerkProvider>
    </KeyboardAvoidingView>
  );
};

export default RootLayoutNav;
