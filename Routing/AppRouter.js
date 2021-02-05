import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
// Configuring screens header like backgroud, title color and position
const screensOptions = {
  headerStyle: { backgroundColor: 'tomato' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerRight: () => (
    <Ionicons
      onPress={() => alert('This is a button!')}
      name="menu"
      color="#fff"
      size={45}
    />
  ),
};

const AppRouter = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home" screenOptions={screensOptions}>
      <Stack.Screen name="home" component={HomeScreen} options={{ title: null }} />
      {/* Another way to define route if we wan't to pass prop to component bu it' not recommended */}
      <Stack.Screen name="details" options={{ title: "Details screen" }}>
        {props => <DetailsScreen {...props} data="Somme data from router" />}
      </Stack.Screen>
      {/* Screen title based on navigation param */}
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: (route.params && route.params.name) ? route.params.name : "Profile Screen" })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRouter
