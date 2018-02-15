import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import CatagoryScreen from './src/CatagoryScreen';
import ItemScreen from './src/ItemScreen';

const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  CatagoryScreen: { screen: CatagoryScreen },
  ItemScreen : {screen : ItemScreen},
})

export default App