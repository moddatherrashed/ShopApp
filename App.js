import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import CatagoryScreen from './src/CatagoryScreen';

const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  CatagoryScreen : {screen : CatagoryScreen}
})

export default App