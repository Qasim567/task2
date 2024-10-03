import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Trending Products"
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: "Products Details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
