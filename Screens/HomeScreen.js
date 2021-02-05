import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedTadScreen from './FeedTadScreen';
import MessagesTadScreen from './MessagesTadScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const getTabIconName = (routeName, focused) => {
  let iconName = '';
  if (routeName === 'feeds') {
    iconName = focused ? 'mail-open' : 'mail-open-outline';
  } else if (routeName === 'messages') {
    iconName = focused ? 'ios-list-circle' : 'ios-list';
  }
  return iconName
}

const HomeScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = getTabIconName(route.name, focused);
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
        marginTop: -5
      },
      style: {
        paddingBottom: 2,
      }
    }}
  >
    <Tab.Screen name="feeds" component={FeedTadScreen} options={{ title: 'Feeds', }} />
    <Tab.Screen name="messages" component={MessagesTadScreen} options={{ title: 'Messages', tabBarBadge: 5 }} />
  </Tab.Navigator>
);

export default HomeScreen;


{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('details', {
        itemId: 86,
        otherParam: 'anything you want here',
      })}
    />
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('profile')}
    />
  </View> */}