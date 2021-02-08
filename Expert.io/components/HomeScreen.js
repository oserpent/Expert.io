import React from 'react';
import {StyleSheet, Animated, Button, View, Text, Image, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo, Ionicons } from '@expo/vector-icons';
import MessageStack from './MessageStack'

function SettingsScreen() {
   return(
       <View style = {
           [styles.container,
           {justifyContent: 'center',
           alignItems: 'center'}]}>
               <Text>My Settings Screen</Text>
       </View>
   );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
   return(
       <Tab.Navigator
           screenOptions = {{
               tabBarOptions: {
                   style: {
                       backgroundColor: "#AAC5E2"
                   },
               },
           }}
           style = {styles.container}
           tabBarOptions = {{showLabel: false}}>
           <Tab.Screen
               name = 'Home Screen'
               component = {MessageStack}
               options = {{
                   tabBarIcon: () => (
                       <Entypo name="home" size={24} color="#AAC5E2" />
                   ),
               }}
                   />
           <Tab.Screen
               name = 'Settings Screen'
               component = {SettingsScreen}
               options = {{
                   tabBarIcon: () => (
                       <Ionicons name="settings-sharp" size={24} color="#AAC5E2" />
                   ),
               }}/>
       </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: "#AAC5E2",
     flex: 1, //grows to fill available space, vertical direction
   },
  });
  export default HomeScreen;
