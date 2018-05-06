import React from 'react'
import { DrawerItems, DrawerNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import AccountScreen from './src/AccountScreen'
import { Image, Text, View } from 'react-native'
import { Container, Header, Body, Content } from 'native-base'
import OrdersScreen from './src/OrdersScreen'
import FavoritesScreen from './src/FavoritesScreen'
import ConnectScreen from './src/ConnectScreen'
import LanguageScreen from './src/LanguageScreen'
import styleColors from './src/components/screenColors'

const CustomDrawerComponent = (props) => (
  <Container>
    <Content style={{ backgroundColor: styleColors.navigationDrawerItemsBackgroundColor, paddingTop: 50 }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require('./src/icons/akyass_logo_white.png')}
          resizeMode='contain'
        />
        <Text style={{color : 'white', fontSize : 30, fontWeight : 'bold'}}>akyass</Text>
      </Body>

      <DrawerItems {...props} />
    </Content>
  </Container>
)
const App = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  Account: { screen: AccountScreen },
  Orders: { screen: OrdersScreen },
  Favorites: { screen: FavoritesScreen },
  Language: { screen: LanguageScreen },
  ConnectScreen: { screen: ConnectScreen }

},
  {
    initialRouteName: 'HomeScreen',
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerRoggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#FFFFFF',
      labelStyle: {
        color: styleColors.navigationDrawerLabelColor
      }
    }
  })


export default App