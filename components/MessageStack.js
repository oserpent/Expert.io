import React from 'react';
import { Image, Text } from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Message from './Message';
import UserList from './UserList';
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MessageStack() {

   return (
       <Stack.Navigator
           screenOptions = {{
               headerStyle: {
                   backgroundColor: "#AAC5E2"
               },
               headerTitleStyle: {
                   fontWeight: "bold",
                   color: 'black'
               }

           }}>
           <Stack.Screen
           name = "Messages"
           component = {UserList}
           />
           <Stack.Screen
           name = "Message"
           component = {Message}
           options={({route}) => ({
               headerTitle: () => (
                   <Text style= {{
                   }}>
                       {route.params.name}</Text>
               ),
               headerTitleAlign: 'center',
               headerBackTitle: "Back",
               headerLeftContainerStyle: {padding: 0},
               headerBackTitleVisible: true,
               }
           )}
               // ({route}) => ({title: route.params.name})
           />
       </Stack.Navigator>
   )
}

 export default MessageStack
