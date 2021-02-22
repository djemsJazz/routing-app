import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();


const AppRouter = () => {
  const navigation = useNavigation();
  const screensOptions = {
    headerStyle: { backgroundColor: 'tomato' },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
    },
    headerRight: () => (
      <Ionicons
        onPress={() => navigation.toggleDrawer()}
        name="menu"
        color="#fff"
        size={45}
      />
    ),
  };
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={screensOptions}>
      <Stack.Screen name="home" component={HomeScreen} options={{ title: null }} />
      <Stack.Screen name="details" options={{ title: "Details screen" }}>
        {props => <DetailsScreen {...props} data="Somme data from router" />}
      </Stack.Screen>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: (route.params && route.params.name) ? route.params.name : "Profile Screen" })}
      />
    </Stack.Navigator>
  );
}

export default AppRouter
