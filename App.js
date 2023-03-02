import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { HomeStackNavigator } from './src/navigator/Navigation.js'


export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}
