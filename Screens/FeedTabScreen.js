import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const FeedTabScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, justifyContent: 'flex-start' }}>Home Screen</Text>
      <Text style={{ fontSize: 20, justifyContent: 'flex-start' }}>FeedTabScreen</Text>
      <View style={{justifyContent: "center", flex: 1}}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <View style={{ marginBottom: 10 }} />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('profile')}
        />
      </View>

    </View>
  )
}

export default FeedTabScreen
