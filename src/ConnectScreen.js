import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
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

            <View stye={{justifyContent: 'center'}}>
                <StatusBar
                    hidden
                />
                <View style={styles.viewContainerStyle}>
                    <View style={styles.elementStyle}>
                    <Text>phone number</Text>
                    <Text>004177404019</Text>
                    </View>
                    <View style={styles.elementStyle}>
                    <Text>website</Text>
                    <Text>www.moddather.net</Text>
                    </View>
                    <View style={styles.elementStyle}>
                    </View>
                </View>
            </View>
        )
    }
}

const ConnectStackNavigator = StackNavigator({
    ConnectScreen: { screen: ConnectScreen }
})



const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 3,
        flexDirection: 'column',
        margin :20,
        borderWidth : 1,
        borderColor:'#363A57'
    },
    elementStyle: {
        height: 20,
        flexDirection : 'row',
        justifyContent : 'space-around'
    }
})


export default ConnectStackNavigator

