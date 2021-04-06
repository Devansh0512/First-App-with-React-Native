/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Settings,
  Button,
  Easing
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import   IonIcon   from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HomeDrawer =createDrawerNavigator();

const HomeScreen=({navigation})=>{
  navigation.setOptions({
    headerRight:()=>(
      <Button title="Save" onPress={()=>{
        navigation.replace('Home');
      }}/>
    )
  })
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go to Details Screen' onPress={()=>navigation.navigate('Details')} />
    </View>
);
}
function SettingsScreen() {
  const isFocused=useIsFocused()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: isFocused ? 'green' : 'black'}}>Settings Screen</Text>
    </View>
  );
}

function ContactScreen() {
  const isFocused=useIsFocused()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: isFocused ? 'green' : 'black'}}>Contact Us Screen</Text>
    </View>
  );
}

const HomeDrawerNavigator =({navigation,route})=>{ 
  if(route.state){
    navigation.setOptions({
      tabBarVisible: route.state.index > 0?false : true
    });
  }
  return (
    <HomeDrawer.Navigator>
    <HomeDrawer.Screen name="Home" component={HomeStackNavigator} />
    <HomeDrawer.Screen name="Contact Us" component={ContactScreen} />
 </HomeDrawer.Navigator>
  );
}

const FeedScreen = props =>(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
);

const DetailsScreen = props =>(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
);

const HomeStackNavigator =({navigation,route})=>{
  if(route.state){
    navigation.setOptions({
      tabBarVisible: route.state.index > 0?false : true
    });
  }
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  );
}

const HomeTabNavigator = () => (
  <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon:({color,size})=>{
      let iconName
      if(route.name=="Home")
      {
        iconName='home'
      }
      else if(route.name== "Feed")
      {
        iconName='logo-rss'
      }
      else if(route.name=="Settings")
      {
        iconName='settings'
      }
      return <IonIcon name={iconName} size={size} color={color}/>
    }
  })}>
    <Tab.Screen name="Home" component={HomeDrawerNavigator} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig={
  animation: 'timing',
  config:{
    duration: 500,
    easing: Easing.linear
  }
}

function getHeaderTitle(route){
  const routeName= route.state? route.state.routes[route.state.index].name : 'Home';
  switch(routeName){
    case 'Home': return "Home";
    case 'Feed': return "Feed";
    case 'Settings': return "Settings";
  }
}

function shouldHeaderBeShown(route){
  const routeName= route.state? route.state.routes[route.state.index].name : 'Home';
  switch(routeName){
    case 'Home': return false;
  }
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          //function for sliding screen effect animation that comes in IOS
          ...TransitionPresets.SlideFromRightIOS //Alternate for the below transitionspec and cardStyleInterpolator 
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //   transitionSpec: {
        //     open: config,
        //     close: closeConfig
        //   }
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen options={({route})=>({
          title:getHeaderTitle(route),
          headerShown: shouldHeaderBeShown(route)
        })} name="Home" component={HomeTabNavigator} />
        {/* <Stack.Screen name="Home1" component={Home1}/> */}
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
