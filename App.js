import React from 'react'
import { DrawerItems, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import AccountScreen from './src/AccountScreen'
import { Image, Text, View, I18nManager } from 'react-native'
import { Container, Header, Body, Content, Icon } from 'native-base'
import OrdersScreen from './src/OrdersScreen'
import FavoritesScreen from './src/FavoritesScreen'
import ConnectScreen from './src/ConnectScreen'
import LanguageScreen from './src/LanguageScreen'
import styleColors from './src/components/screenColors'
import strings from './src/components/strings'
const CustomDrawerComponent = (props) => (
  <Container>
    <Content style={{ backgroundColor: styleColors.navigationDrawerItemsBackgroundColor, paddingTop: 50 }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require('./src/icons/akyass_logo_white.png')}
          resizeMode='contain'
        />
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>akyass</Text>
      </Body>

      <DrawerItems {...props} />
    </Content>
  </Container>
)
const App = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.categories : strings.en.categories,
      drawerIcon: (
        <Icon name='home' style={{ color: '#FFFFFF' }} />
      )
    })
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.account : strings.en.account,
      drawerIcon: (
        <Icon name='person' style={{ color: '#FFFFFF' }} />
      )
    })
  },
  Orders: {
    screen: OrdersScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.orders : strings.en.orders,
      drawerIcon: (
        <Icon name='list' style={{ color: '#FFFFFF' }} />
      )
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.favorites : strings.en.favorites,
      drawerIcon: (
        <Icon name='star' style={{ color: '#FFFFFF' }} />
      )
    })
  },
  Language: {
    screen: LanguageScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.language : strings.en.language,
      drawerIcon: (
        <Icon name='ios-globe' style={{ color: '#FFFFFF' }} />
      )
    })
  },
  ConnectScreen: {
    screen: ConnectScreen,
    navigationOptions: () => ({
      drawerLabel: I18nManager.isRTL ? strings.ar.contactUS : strings.en.contactUS,
      drawerIcon: (
        <Icon name='ios-call' style={{ color: '#FFFFFF' }} />
      )
    })
  }

},
  {
    initialRouteName: 'HomeScreen',
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerRoggleRoute: 'DrawerToggle',
    drawerPosition: I18nManager.isRTL ? 'right' : 'left',
    contentOptions: {
      activeTintColor: '#FFFFFF',
      labelStyle: {
        color: styleColors.navigationDrawerLabelColor
      }
    }
  })


export default App