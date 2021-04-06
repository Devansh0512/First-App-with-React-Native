import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SavedScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Here is your saved Data.</Text>
      </View>
    );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});