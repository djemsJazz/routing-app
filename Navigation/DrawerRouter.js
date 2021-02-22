import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar';
import AppRouter from './AppRouter';

const Drawer = createDrawerNavigator();

const DrawerRouter = () => (
  <NavigationContainer>
    <StatusBar style="light" backgroundColor="#da563d" />
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="home" >
      <Drawer.Screen name="main" component={AppRouter} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default DrawerRouter;

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Details"
        onPress={() => navigation.navigate('details')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate('profile')}
      />
    </DrawerContentScrollView>
  )
}
