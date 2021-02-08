import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/HomeScreen'


export default function App() {
   return (
     <NavigationContainer>
         <HomeScreen />
     </NavigationContainer>
   );
}
