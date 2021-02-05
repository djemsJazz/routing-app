import React from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ data, navigation, route }) => {
  console.log(route.params)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details screen</Text>
      <Text>{data}</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailsScreen;
