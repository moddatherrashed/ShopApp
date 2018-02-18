import React from 'react'
import { DrawerItems, DrawerNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import AccountScreen from './src/AccountScreen'
import { Image,Text } from 'react-native'
import { Container, Header, Body, Content } from 'native-base'


const CustomDrawerComponent = (props) => (
  <Container>
    <Header style={{ height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#363a57' }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 150, width: 150 }}
          source={require('./src/icons/handlogo.png')}
          resizeMode='contain'
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
      <Text>Powered by STTS</Text>
    </Content>
  </Container>
)
const App = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  AccountScreen: { screen: AccountScreen }
}, {
    initialRouteName: 'HomeScreen',
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerRoggleRoute: 'DrawerToggle'
  })


export default App