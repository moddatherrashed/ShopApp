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
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.animation.extractOffset()
            },
            onPanResponderMove: (evt, gestureState) => {
                this.animation.setValue({ x: 0, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

            }

        })
    }
    render() {
        const animatedHeight = {
            transform: this.animation.getTranslateTransform()
        }
        animatedImageHeight = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 80],
            outputRange: [200, 32],
            extrapolate: "clamp"
        })
        return (

            <View style={{ flex: 1, justifyContent: 'center', }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4d537c"
                    hidden={false} />
                <View style={{ backgroundColor: '#363A57', margin: 15, padding: 20, borderRadius: 5, borderColor: '#363A57', elevation: 15 }}>
                    <View style={{ flexDirection: 'row', borderColor: '#FFFFFF', justifyContent: 'space-around', margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}>Phone Number</Text>
                        <Text style={{ color: '#FFFFFF' }}>077777777</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderColor: '#FFFFFF', margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}>Website</Text>
                        <Text style={{ color: '#FFFFFF' }}>www.test.net</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Icon name='logo-facebook' style={{ color: '#FFFFFF', fontSize: 60 }} />
                        <Icon name='logo-instagram' style={{ color: '#FFFFFF', fontSize: 60 }} />
                    </View>
                </View>
                { /*<Animated.View style={[animatedHeight, {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    zIndex: 200,
                    backgroundColor: '#363A57',
                    height: ScreenSize.height
                }]}>
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        style={{ height: 80, borderTopWidth: 1, borderTopColor: '#ebe5e5', flexDirection: 'row' }}>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <Animated.View style={{ height: animatedImageHeight, width: animatedImageHeight, width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ marginLeft: 15, height: 40, width: 30 }}
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
            </Animated.View>*/}
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

