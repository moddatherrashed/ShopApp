import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, Animated, PanResponder, ScrollView, Image, Slider } from 'react-native'
import { Container, Content, Icon, Header, Left, Button, Body, Title } from 'native-base'
import { StackNavigator } from 'react-navigation'
import StackNavigation from './HomeScreen';
import ScreenSize from './ScreenSize';
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';

const SCREEN_HEIGHT = ScreenSize.height
const SCREEN_WIDTH = ScreenSize.width
class ConnectScreen extends Component {

    static navigationOptions = {
        title: `Connect with us`,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('DrawerOpen')
                }}>
                <Icon name='menu' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        drawerLabel: 'Connect With Us',
        drawerIcon: (
            <Icon name='ios-call' style={{ color: '#FFFFFF' }} />
        )
    }
    componentWillMount() {
        this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 })

        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.animation.extractOffset()
            },
            onPanResponderMove: (evt, gestureState) => {
                this.animation.setValue({ x: 0, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                alert(gestureState.dy)
                if (gestureState.dy < 10) {
                    Animated.spring(this.animation.y, {
                        toValue: -SCREEN_HEIGHT + 120,
                    }).start()
                }
                if (gestureState.dy > 10) {
                    Animated.spring(this.animation.y, {
                        toValue: SCREEN_HEIGHT - 120,
                    }).start()
                }
            }

        })
    }
    render() {
        const animatedHeight = {
            transform: this.animation.getTranslateTransform()
        }
        animatedImageHeight = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 90],
            outputRange: [260, 42],
            extrapolate: "clamp"
        })
        animatedTitleOpacity = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 150],
            outputRange: [0, 0, 1],
            extrapolate: "clamp"
        })
        animatedImageMarginLeft = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 90],
            outputRange: [SCREEN_WIDTH / 2 - 100, 10],
            extrapolate: "clamp"
        })
        animatedImageWidth = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 90],
            outputRange: [200, 32],
            extrapolate: "clamp"
        })
        animatedHeaderHeight = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 90],
            outputRange: [SCREEN_HEIGHT / 2, 45],
            extrapolate: "clamp"
        })
        animatedDetailsOpacity = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 200],
            outputRange: [1, 0, 0],
            extrapolate: "clamp"
        })
        return (

            <View style={{ flex: 1, justifyContent: 'center', }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4d537c"
                    hidden={false} />
                <View style={{ backgroundColor: '#363A57', margin: 15, padding: 20, borderRadius: 5, borderColor: '#363A57', elevation: 15 }}>
                    <View style={{ flexDirection: 'row', borderColor: styleColors.connectWithUsITemsAndTextColor, justifyContent: 'space-around', margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: styleColors.connectWithUsITemsAndTextColor }}>Phone Number</Text>
                        <Text style={{ color: styleColors.connectWithUsITemsAndTextColor }}>077777777</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderColor: styleColors.connectWithUsITemsAndTextColor, margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: styleColors.connectWithUsITemsAndTextColor }}>Website</Text>
                        <Text style={{ color: styleColors.connectWithUsITemsAndTextColor }}>www.test.net</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Icon name='logo-facebook' style={{ color: styleColors.connectWithUsITemsAndTextColor, fontSize: 60 }} />
                        <Icon name='logo-instagram' style={{ color: styleColors.connectWithUsITemsAndTextColor, fontSize: 60 }} />
                    </View>
                </View>

                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[animatedHeight, {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        elevation: 20,
                        backgroundColor:
                            'red',
                        height: SCREEN_HEIGHT
                    }]}>
                    <Animated.View

                        style={{
                            height: animatedHeaderHeight,
                            borderTopWidth: 1,
                            borderTopColor: '#ebe5e5',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                            <Animated.View style={{ height: animatedImageHeight, width: animatedImageWidth, marginLeft: animatedImageMarginLeft }}>
                                <Image style={{ flex: 1, width: null, height: null }}
                                    source={require('./icons/handlogo.png')}
                                />
                            </Animated.View>
                            <Animated.Text style={{ opacity: animatedTitleOpacity, color: 'white', fontWeight: 'bold', fontSize: 18, paddingLeft: 40 }}>
                                Swiss Touch Tech Solutions
                            </Animated.Text>
                        </View>
                        <Animated.View style={{ opacity: animatedTitleOpacity, flex: 1, justifyContent: 'space-around', paddingLeft: 50 }}>
                            <Icon name='arrow-up' style={{ color: '#FFFFFF' }} />
                        </Animated.View>
                    </Animated.View>
                    <Animated.Text style={{ opacity: animatedDetailsOpacity, color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 25 }}>
                        SWISS TOUCH TECH SOLUTIONS
                    </Animated.Text>
                    <Animated.Text style={{ opacity: animatedDetailsOpacity, color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18, padding: 15 }}>
                        Eptingerstrasse 28, 4052 Basel
                    </Animated.Text>
                    <Animated.Text style={{ opacity: animatedDetailsOpacity, color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                        Switzerland
                    </Animated.Text>
                    <Animated.Text style={{ opacity: animatedDetailsOpacity, color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18, padding: 25 }}>
                        0041774044019
                    </Animated.Text>
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

