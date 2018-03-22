import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'


class LanguageScreen extends Component {
    static navigationOptions = {
        headerTitle: `Language Selector`,
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
        drawerIcon: (
            <Icon name='ios-globe' style={{ color: '#FFFFFF' }} />
        ),
    }

    render() {
        return (
            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <Text>here is language Screen</Text>
                </Content>
            </Container>
        )
    }
}

const LanguageStackNavigation = StackNavigator({
    LanguageScreen: { screen: LanguageScreen }
})

export default LanguageStackNavigation