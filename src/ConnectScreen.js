import React, { Component } from 'react'
import { TouchableOpacity, SafeAreaView, ActivityIndicator, View, Text, I18nManager, StatusBar, StyleSheet, Animated, PanResponder, Linking, ScrollView, Image, Slider } from 'react-native'
import { Container, Content, Icon, Header, Left, Button, Body, Title } from 'native-base'
import { createStackNavigator } from 'react-navigation'
import StackNavigation from './HomeScreen';
import ScreenSize from './ScreenSize';
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'
import apiGetRequests from './components/apiGetRequests'
import webView from './components/webView'
import Communications from 'react-native-communications';

const SCREEN_HEIGHT = ScreenSize.height
const SCREEN_WIDTH = ScreenSize.width

class ConnectScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone_number: '',
            website: '',
            instagram_link: '',
            facebook_link: '',
            loading: true
        }
    }
    static navigationOptions = {
        title: I18nManager.isRTL ? strings.ar.contactUS : strings.en.contactUS,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    _this.props.navigation.openDrawer()
                }}>
                <Icon name='menu' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
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
    componentDidMount() {
        apiGetRequests.getRequests('getContactUs').then((res) => {
            this.setState({
                phone_number: res.contactUS[0].phone_number,
                website: res.contactUS[0].website_link,
                facebook_link: res.contactUS[0].facebook_link,
                instagram_link: res.contactUS[0].facebook_link,
                loading: false
            })
        })
    }
    render() {
        const { navigate } = this.props.navigation

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

            <SafeAreaView style={{ flex: 1, justifyContent: 'center', }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                {
                    this.state.loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={styleColors.mainToolBarColor} />
                        </View>
                        :
                        <View style={{ backgroundColor: styleColors.connectWithUsBakgroundColors, margin: 15, padding: 20, borderRadius: 5, borderColor: '#363A57', elevation: 15 }}>
                            <View style={{ flexDirection: 'row', borderColor: styleColors.connectWithUsITemsAndTextColor, justifyContent: 'space-around', margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', color: styleColors.connectWithUsITemsAndTextColor }}>{I18nManager.isRTL ? strings.ar.phoneNumber : strings.en.phoneNumber}</Text>
                                <Text onPress={() => Communications.phonecall(this.state.phone_number, true)} style={{ color: styleColors.connectWithUsITemsAndTextColor }}>{this.state.phone_number}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderColor: styleColors.connectWithUsITemsAndTextColor, margin: 20, padding: 10, borderBottomWidth: 1.5 }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', color: styleColors.connectWithUsITemsAndTextColor }}>{I18nManager.isRTL ? strings.ar.website : strings.en.website}</Text>
                                <Text onPress={() => { navigate('webView', { url: this.state.website }) }} style={{ color: styleColors.connectWithUsITemsAndTextColor }}>{this.state.website}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                                <TouchableOpacity
                                    onPress={() => { navigate('webView', { url: this.state.facebook_link }) }}
                                >
                                    <Icon name='logo-facebook' style={{ color: styleColors.connectWithUsITemsAndTextColor, fontSize: 60 }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigate('webView', { url: this.state.instagram_link }) }}
                                >
                                    <Icon name='logo-instagram' style={{ color: styleColors.connectWithUsITemsAndTextColor, fontSize: 60 }} />
                                </TouchableOpacity>
                            </View>
                        </View>}
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[animatedHeight, {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        elevation: 20,
                        backgroundColor: '#000000',
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

            </SafeAreaView >
        )
    }
}

const ConnectStackNavigator = createStackNavigator({
    ConnectScreen: { screen: ConnectScreen },
    webView: { screen: webView }
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

