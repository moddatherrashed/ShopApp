import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'

const App = StackNavigator({
  HomeScreen: { screen: HomeScreen }
})

export default App