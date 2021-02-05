import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  </View>
);

export default HomeScreen;
