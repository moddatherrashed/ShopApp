import React from 'react'
import { DrawerItems, DrawerNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import AccountScreen from './src/AccountScreen'
import { Image, Text, View } from 'react-native'
import { Container, Header, Body, Content } from 'native-base'
import OrdersScreen from './src/OrdersScreen'
import FavoritesScreen from './src/FavoritesScreen'
import LanguageScreen from './src/LanguageScreen'
import ConnectScreen from './src/ConnectScreen'

const CustomDrawerComponent = (props) => (
  <Container>
    <Content style={{backgroundColor : '#363a57'}}>
      <DrawerItems {...props} />
    </Content>
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#363a57' }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 150, width: 150 }}
          source={require('./src/icons/handlogo.png')}
          resizeMode='contain'
        />
      </Body>
    </View>
  </Container>
)
const App = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  Account: { screen: AccountScreen },
  Orders: { screen: OrdersScreen },
  Favorites: { screen: FavoritesScreen },
  Language: { screen: LanguageScreen }

}, {
    initialRouteName: 'HomeScreen',
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerRoggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#FFFFFF',
      labelStyle : {
        color :'#FFFFFF'
      }
    }
  })


export default App