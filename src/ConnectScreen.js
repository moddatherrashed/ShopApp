import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, Animated, PanResponder, ScrollView, Image, Slider } from 'react-native'
import { Container, Content, Icon, Header, Left, Button, Body, Title } from 'native-base'
import { StackNavigator } from 'react-navigation'
import StackNavigation from './HomeScreen';
import ScreenSize from './ScreenSize';

const SCREEN_HEIGHT = ScreenSize.height
const SCREEN_WIDTH = ScreenSize.width
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
    componentWillMount() {
        this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 80 })
    }
    render() {
        const animatedHeight = {
            transform: this.animation.getTranslateTransform()
        }
        return (

            <View style={{ flex: 1, justifyContent: 'center', }}>
                <StatusBar
                    hidden
                />
                <View style={{ backgroundColor: '#FFFFFF', margin: 15, padding: 20, borderWidth: 2, borderColor: '#363A57', elevation: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Phone Number</Text>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>0041774044019</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Website</Text>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>www.moddather.net</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Icon name='logo-facebook' style={{ color: '#3B5998', fontSize: 80 }} />
                        <Icon name='logo-instagram' style={{ color: '#e95950', fontSize: 80 }} />
                    </View>
                </View>
                <Animated.View style={[animatedHeight, {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    backgroundColor: '#363A57',
                    height: ScreenSize.height
                }]}>
                    <Animated.View style={{ height: 80, borderTopWidth: 1, borderTopColor: '#ebe5e5', flexDirection: 'row' }}>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <Animated.View style={{ height: 55, width: 40, flexDirection: 'row', width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ marginLeft: 15, height: 38, width: 28 }}
                                    source={require('./icons/handlogo.png')} />
                                <Animated.Text style={{ opacity: 1, textAlign: 'center', fontSize: 18, color: 'white', paddingLeft: 45 }}>
                                    All Rights Reserved for STTS ®
                                </Animated.Text>
                                <Animated.View style={{ opacity: 1, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Icon name='ios-arrow-up' style={{ color: 'white' }} />
                                </Animated.View>
                            </Animated.View>
                        </View>
                    </Animated.View>
                </Animated.View>
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
        margin: 20,
        borderWidth: 1,
        borderColor: '#363A57'
    },
    elementStyle: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})


export default ConnectStackNavigator

