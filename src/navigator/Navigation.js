import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/Home.js'
import {Detail} from '../screens/Detail.js'

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
}


export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

