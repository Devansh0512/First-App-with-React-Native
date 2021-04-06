import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>View your profile below.</Text>
        <Button
            title="Click Here"
            onPress={() => alert("This is the profile")}
        />
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});