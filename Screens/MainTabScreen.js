import React from 'react';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import   Icon   from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import FeedScreen from './FeedScreen';
import { findNodeHandle } from 'react-native';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab=createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFF"
      barStyle={{ }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#3244cd',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarColor: '#d02f70',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-logo-rss" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#7e956a',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen=({navigation}) =>(
    <HomeStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        // function for sliding screen effect animation that comes in IOS
        // ...TransitionPresets.SlideFromRightIOS //Alternate for the below transitionspec and cardStyleInterpolator 
        //  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //  transitionSpec: {
        //    open: config,
        //    close: closeConfig
        //  }
      }}
      // headerMode="float"
      // animation="fade"
    >
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor="#009387" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
        )
      }} 
    />
    </HomeStack.Navigator>
);
  
const DetailsStackScreen=({navigation}) =>(
    <DetailsStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#3244cd'
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        // function for sliding screen effect animation that comes in IOS
        // ...TransitionPresets.SlideFromRightIOS //Alternate for the below transitionspec and cardStyleInterpolator 
        //  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //  transitionSpec: {
        //    open: config,
        //    close: closeConfig
        //  }
      }}
      // headerMode="float"
      // animation="fade"
    >
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor="#3244cd" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
        )
      }} 
    />
    </DetailsStack.Navigator>
);

