import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import HomeTabNavigator from '../Navigation/HomeTabNavigator';

const HomeScreen = () => (
  // <View style={styles.container}>
  //   <Text style={styles.title}>HomeScreen</Text>
  //   <Text>Welcome to Home screen</Text>
  // </View>
  // Switch commented sections to see bottom tab navigation
  <HomeTabNavigator />
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
