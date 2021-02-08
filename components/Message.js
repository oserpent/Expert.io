import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextBubble from './TextBubble'


function Message({route, navigation}) {

   const {itemId, name, uri} = route.params;

   return (
       <View style = {styles.container}>
           <TextBubble
               name = {name}
               uri = {route.params.uri}/>

           {/* <Text> Hello this is a message </Text>
           <Text>itemId: {itemId} </Text>
           <Button
           title = "Go back"
           onPress = {() => navigation.goBack()}/> */}
       </View>
   );
}

const styles = StyleSheet.create({
   container: {
   flex: 1, //grows to fill available space, vertical direction
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
     //borderWidth: 3,
     //borderColor: 'red',
   },
  });


export default Message;
