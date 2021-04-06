import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const HomeScreen=({navigation})=>{
    // navigation.setOptions({
    //   headerRight:()=>(
    //     <Button title="Save" onPress={()=>{
    //       navigation.replace('Home');
    //     }}/>
    //   )
    // })
      return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='Go to Details Screen' onPress={()=>navigation.navigate('Details')} />
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});
