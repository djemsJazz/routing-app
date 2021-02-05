import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ data, navigation }) => {

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('this is the FOCUS event of Details screen or when we ENTER/COMME BACK to the screen')
    });
    navigation.addListener('blur', () => {
      console.log('this is the BLUR event of Details screen or when we LEAVE the screen')
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details screen</Text>
      <Text>{data}</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('home')} />
      <View style={{ marginBottom: 10 }} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={{ marginBottom: 10 }} />
      <Button title="Go to Profile" onPress={() => navigation.navigate('profile')} />
    </View>
  );
}

export default DetailsScreen;
