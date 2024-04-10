import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

const RootLayoutNav: React.FC = () => {
  const clerkKey = String(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://192.168.11.54:3000/api/graphql',
    }),
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
