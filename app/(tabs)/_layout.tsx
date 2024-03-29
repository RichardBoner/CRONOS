import { useAuth } from '@clerk/clerk-expo';
import { Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

// import { useLoginContext } from '@/hooks/ZustandStore';

const TabLayout: React.FC = () => {
  const { isLoaded, userId } = useAuth();
  if (!isLoaded || userId == null) {
    // return <Redirect href="/(Login)/Login" />;
    console.log('not Logged in change in prod');
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Games"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="game-controller" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="calendar" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Friends"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="users" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Incoming"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="notification" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
