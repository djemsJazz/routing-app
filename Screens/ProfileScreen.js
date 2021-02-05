import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('this is the FOCUS event of Profile screen or when we ENTER/COMME BACK to the screen')
    });
    navigation.addListener('blur', () => {
      console.log('this is the BLUR event of Profile screen or when we LEAVE the screen')
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

export default ProfileScreen;
