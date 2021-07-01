import React from 'react';
import { View,Button, StyleSheet } from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {
    Avatar,Title,Caption,
    Paragraph,Drawer,Text,
    TouchableRipple,Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){

    const[isDarkTheme,setIsDarkTheme]=React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex : 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                   <View style={styles.userInfoSection}>
                       <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/s320x320/26157992_159656174668114_8152239671775068160_n.jpg?tp=1&_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_ohc=1KAGp3UwD3cAX9uJD0F&edm=ABfd0MgBAAAA&ccb=7-4&oh=eda17444efe24f54fbf7671fae63258c&oe=60E58CF5&_nc_sid=7bff83'
                                }}
                                size={50}
                           />
                           <View style={{marginLeft:15,flexDirection:'column'}}>
                               <Title style={styles.title}>Devansh Mehra</Title>
                               <Caption style={styles.caption}>devansh0512</Caption>
                           </View>
                       </View>
                       <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>50</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>70</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                       </View>
                   </View>
                   <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="account-outline" color={color} size={size} />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="bookmark-outline" color={color} size={size} />
                            )}
                            label="Saved Data"
                            onPress={() => {props.navigation.navigate('Saved')}}
                            
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="account-check-outline" color={color} size={size} />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                   </Drawer.Section>
                   <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });