import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



function User(props) {

 const onClick = () => {
   //console.warn("TopRightButtonPressed")
   props.navigation.navigate('Message', {
     itemId: props.id, name: props.name, uri: props.img_uri});
 }

   return (
       <View style={styles.menuBlock}>
           <Image
             style={styles.imgStyle}
             source={{uri: props.img_uri }}
           />
           <View style={styles.menuBody}>
           <Text style={styles.headerText}>{props.name} </Text>
           <Text style={styles.descText}>{props.desc}</Text>
           <Text style={styles.locText}>Location: {props.location}</Text>
           </View>

           <View style={styles.menuRight}>
             <Text style={styles.descText}></Text>
             <TouchableWithoutFeedback onPress = {onClick}>
             <AntDesign name="rightcircle" size={25} color="black" />
             </TouchableWithoutFeedback>
           </View>
       </View>
     )
}

const styles = StyleSheet.create({
    headerText: {
     fontSize: 15,
     fontWeight: 'bold',
     //fontFamily: 'Baskerville'
   },
    descText: {
     fontSize: 10,
     //fontFamily: 'Baskerville'
   },

   locText:
   {
     fontSize: 10,
     fontWeight: 'bold',
   },
    imgStyle: {
     width: 60,
     height: 60,
     //borderColor: 'blue',
     //borderWidth: 2,
     borderRadius: 60,
     alignSelf: 'center'
   },
    menuBlock: {
     backgroundColor: 'white',
     //borderWidth: 3,
     borderRadius: 30,
     //borderColor: 'blue',
     paddingLeft: 10,
     paddingTop: 10,
     paddingBottom: 10,
     marginVertical: 5,
     marginHorizontal: 10,
     flexDirection: 'row',
      //taken from demo example
     shadowColor: 'black',
     shadowRadius: 5,
     shadowOpacity: 0.8,
     shadowOffset: {width: 5, height: 5},
   },
    menuBody: {
       //borderColor: 'blue',
       //borderWidth: 2,
       paddingLeft: 10,
       marginRight: 5,
       color: 'blue',
       flex: 1,
       flexDirection: 'column',
   },
    menuRight: {
     // borderColor: 'blue',
     // borderWidth: 2,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     width: 40,
     marginRight: 10,
   },
 });
 export default User
