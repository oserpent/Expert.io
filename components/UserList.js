import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import User from './User';

function UserList({navigation})
{

let userList = [
   {   id: 1,
       name: "Brian Williams, MD",
       desc: "I led the trauma team that treated police officers ambushed by a sniper on July 7, 2016 - the largest loss of life for US law enforcement since 9/11.",
       location: 'Greater Chicago Area',
       img_uri: 'https://www.uchicagomedicine.org/-/media/images/ucmc/physician-photos/v-z/williams-brian-bio-261x347.jpg?h=347&as=1&hash=A2B177BFB277ADAD31A7739DB065D5DF'
   },

 {
     id: 2,
     name: "Angela Duckworth",
     desc: "Angela Duckworth is the founder and CEO of Character Lab, a nonprofit whose mission is to advance scientific insights that help children thrive.",
     location: 'Greater Philadelphia',
     img_uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFq5lyy0Ak8Fw/profile-displayphoto-shrink_200_200/0/1516157346556?e=1618444800&v=beta&t=3UNUzF4rvNiLAuyaa1FFNEMBkk4YyaN2yEj-nAgy3yI'
 },

   {
       id: 3,
       name: "Bill Gates",
       desc: "William Henry Gates III is an American business magnate, software developer, and philanthropist. He is a co-founder of Microsoft Corporation",
       location: 'Redmond WA',
       img_uri: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
   },

  {
       id: 4,
       name: "Barack Obama",
       desc: "Barack Hussein Obama II is an American politician and attorney. He was the 44th president of the United States from 2009 to 2017.",
       location: 'Washington DC',
       img_uri: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'
   },

  {
       id: 5,
       name: "Nelson Mandela",
       desc: "Nelson Mandela was a South African anti-apartheid revolutionary, political leader and philanthropist.",
       location: 'South Africa',
       img_uri: 'https://static.toiimg.com/thumb/msid-59348465,imgsize-106181,width-800,height-600,resizemode-75/59348465.jpg'
  },

  {
       id: 6,
       name: "Jackie Chan",
       desc: "Jackie Chan, is a Hong Kong martial artist, actor, stuntman, filmmaker, action choreographer, and singer.",
       location: 'Hong Kong',
       img_uri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed66ef9d1db3e000665f5da%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080'
 },

 {
       id: 7,
       name: "Albert Einstein",
       desc: "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics",
       location: 'In a Galaxy Far Far Away',
       img_uri: 'https://quotesnsmiles.com/wp-content/uploads/2016/07/Albert-Einsteins-Picture-Quotes.jpg'
 },

 {
       id: 8,
       name: "Gene Block",
       desc: "Gene David Block is an American biologist, academic, inventor, and chancellor of the University of California, Los Angeles.",
       location: 'UCLA',
       img_uri: 'data:image/jpeg;base64,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'
 },
 ]

 const ListHeader = () => {
   return(
     <View style = {styles.headerBar}>
       <View>
         {/* <Text style = {styles.menuHeader}>Messages</Text> */}
       </View>
       <View style = {styles.chatIcon}>
         <TouchableWithoutFeedback>
           {/* <AntDesign name="pluscircle" size={30} color="black" /> */}
         </TouchableWithoutFeedback>
       </View>
     </View>
   )
 }

   return (
   <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
       <FlatList
         data = {userList}
         ListHeaderComponent = {ListHeader}
         renderItem ={(obj) => {
           return (
               <User
                 id = {obj.item.id}
                 name = {obj.item.name}
                 desc = {obj.item.desc}
                 img_uri = {obj.item.img_uri}
                 location = {obj.item.location}
                 navigation = {navigation}
               />
           )
         }}
         keyExtractor = {item => item.id.toString()}
       />
   </SafeAreaView>
   );

}

const styles = StyleSheet.create({
   container: {
     backgroundColor: 'white',
     flex: 1, //grows to fill available space, vertical direction
   },

   headerBar: {
     //borderWidth: 2,
     borderColor: 'red',
     flex: 1,
     flexDirection: 'row',
   },

   chatIcon: {
       alignContent: 'center',
       //borderWidth: 2,
       paddingRight: 10,
       flex: 1,
       borderColor: 'red',
       alignItems: 'flex-end',
       justifyContent: 'center',
   },

   menuHeader: {
       fontSize: 20,
       fontWeight: 'bold',
       //fontFamily: 'Baskerville',
       padding: 10,
       marginLeft: 10,
       //backgroundColor: 'white',
       borderRadius: 5,
       textAlign: 'left'
     },
  });

export default UserList;
