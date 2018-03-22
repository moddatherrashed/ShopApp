import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Header, Left, Button, Body, Title } from 'native-base'
import { StackNavigator } from 'react-navigation'
import StackNavigation from './HomeScreen';

class ConnectScreen extends Component {

    static navigationOptions = {
        title: `Connect with us`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#363A57',
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('DrawerOpen')
                }}>
                <Icon name='menu' style={{ color: '#FFFFFF' }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: '#FFFFFF' }} />

            </Button>
        ),
        drawerLabel: 'Connect With Us',
        drawerIcon: (
            <Icon name='ios-call' style={{ color: '#FFFFFF' }} />
        )
    }

    render() {
        return (
            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <Text>here is Connect Screen</Text>
                </Content>
            </Container>
        )
    }
}

const ConnectStackNavigator = StackNavigator({
    ConnectScreen: { screen: ConnectScreen }
})

export default ConnectStackNavigator