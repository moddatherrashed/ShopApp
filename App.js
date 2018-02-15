import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import CatagoryScreen from './src/CatagoryScreen';
import ItemScreen from './src/ItemScreen';

const App = StackNavigator({
  ItemScreen : {screen : ItemScreen},
  HomeScreen: { screen: HomeScreen },
  CatagoryScreen: { screen: CatagoryScreen }
})

export default App