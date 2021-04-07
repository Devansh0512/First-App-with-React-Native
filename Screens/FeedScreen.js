import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FeedScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Feed.</Text>
      </View>
    );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});