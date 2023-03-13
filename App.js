import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { DrawerNavigation } from './src/navigation/DrawerNavigation'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App