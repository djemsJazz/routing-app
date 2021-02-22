import React, { useEffect, useCallback } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import FeedTadScreen from '../Screens/FeedTabScreen';
import MessagesTadScreen from '../Screens/MessagesTabScreen';

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
const HomeTabNavigator = () => {

  useFocusEffect(useCallback(() => {
    console.log('useFocusEffect Mounted');
    return () => console.log('useFocusEffect Unmounted');
  }, []));

  return (
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
}

export default HomeTabNavigator;
