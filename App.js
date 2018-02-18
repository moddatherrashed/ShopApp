import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import AccountScreen from './src/AccountScreen'

const App = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  AccountScreen : {screen : AccountScreen}
})
/*CatagoryScreen: { screen: CatagoryScreen },
  ItemScreen : {screen : ItemScreen}, */
export default App