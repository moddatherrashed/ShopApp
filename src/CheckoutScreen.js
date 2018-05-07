import React, { Component } from 'react';
import { AppRegistry, I18nManager, ScrollView, StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator'
import LoginScreen from '../src/checkoutScreens/LoginScreen'
import InformationScreen from '../src/checkoutScreens/InformationScreen'
import DoneScreen from '../src/checkoutScreens/DoneScreen'
import ScreenSize from './ScreenSize'
import { Button } from 'native-base'
import * as Animatable from 'react-native-animatable'
import styleColors from './components/screenColors'

const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: styleColors.cartScreenColors,
    separatorFinishedColor: styleColors.cartScreenColors,
    separatorUnFinishedColor: '#606270',
    stepIndicatorFinishedColor: styleColors.cartScreenColors,
    stepIndicatorUnFinishedColor: '#606270',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: styleColors.cartScreenColors,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: styleColors.cartScreenColors
}


class CheckoutScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            isLoggedIn: false,
            isLoginFailed: false,
            email: '',
            password: '',
            fullName: '',
            regEmail: '',
            regPassword: '',
            regRePassword: '',
            isRegisterFailed: false
        }
    }
    static navigationOptions = {
        title: `Checkout`,
        headerTintColor: styleColors.toolBarTextColor,
        headerStyle: {
            backgroundColor: styleColors.toolBarColor,
        },
    }
    onNextPagePressed(ref, pageNumber) {
        ref.scrollView.scrollTo({ x: ((pageNumber - 1) * ScreenSize.width), y: 0, animated: true })
    }

    renderAuthFaildFunc() {
        if (this.state.isLoginFailed) {
            return (<Animatable.Text animation="bounce" easing="ease-out" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Authentication Faild</Animatable.Text>
            )
        }
    }
    renderRegisterFaildFunc() {
        if (this.state.isRegisterFailed) {
            return (<Animatable.Text animation="bounce" easing="ease-out" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>All fields are required</Animatable.Text>
            )
        }
    }


    isLoggedInChecker() {
        if (this.state.isLoggedIn === false) {
            return (
                <View style={styles.slide}>
                    <LoginScreen
                        isLoginFailed={this.state.isLoginFailed}
                        emailValue={this.state.email}
                        passwordValue={this.state.password}
                        onEmailChange={(email) => this.setState({ email, isLoginFailed: false })}
                        renderAuthFaild={this.renderAuthFaildFunc()}
                        onPasswordChange={(password) => this.setState({ password, isLoginFailed: false })}
                        onLoginPressed={() => {
                            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            if (reg.test(this.state.email) === false
                                || this.state.email === ''
                                || this.state.password === '') {
                                this.setState({ isLoginFailed: true })
                            }
                            else {
                                this.setState({ isLoginFailed: false })
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: 1 * ScreenSize.width })
                            }
                        }}
                        fullNameValue={this.state.fullName}
                        regEmailValue={this.state.regEmail}
                        regPasswordValue={this.state.regPassword}
                        regRePasswordValue={this.state.regRePassword}
                        onFullNameChanged={(fullName) => this.setState({ fullName, isRegisterFailed: false })}
                        onRegEmailChanged={(regEmail) => this.setState({ regEmail, isRegisterFailed: false })}
                        onRegPasswordChanged={(regPassword) => this.setState({ regPassword, isRegisterFailed: false })}
                        onRegRePasswordChanged={(regRePassword) => this.setState({ regRePassword, isRegisterFailed: false })}
                        renderRegisterFaild={this.renderRegisterFaildFunc()}
                        onRegisterPressed={() => {
                            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            if (reg.test(this.state.regEmail) === false
                                || this.state.fullName === ''
                                || this.state.regPassword === ''
                                || this.state.regRePassword === '') {
                                this.setState({ isRegisterFailed: true })
                            }
                            else {
                                this.setState({ isRegisterFailed: false })
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: 1 * ScreenSize.width })
                            }
                        }}
                    />
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1, width: ScreenSize.width, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        style={{
                            backgroundColor: styleColors.cartScreenColors,
                            padding: 10,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: 300,
                            elevation: 5,
                            borderRadius: 5
                        }}
                        onPress={
                            () => {
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: 1 * ScreenSize.width })
                            }} >
                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Continue as <Text style={{ fontWeight: 'bold' }}>moddather</Text></Text>
                    </Button>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20, textAlign: 'center' }}>Or</Text>
                    <Button
                        style={{
                            backgroundColor: styleColors.cartScreenColors,
                            padding: 10,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: 300,
                            elevation: 5,
                            borderRadius: 5
                        }}
                        onPress={
                            () => {
                                this.setState({
                                    isLoggedIn: false
                                })
                            }} >
                        <Text style={{ color: '#FFFFFF', fontSize: 20 }} >Login with another account</Text>
                    </Button>

                </View>
            )
        }
    }
    render() {
        let context = this
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator stepCount={3} customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={["Account", "Information", "Done"]} />
                </View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}
                    ref='swiper'
                >
                    {this.isLoggedInChecker()}
                    <View style={styles.slide}>
                        <InformationScreen onNextPressed={
                            () => {
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: I18nManager.isRTL ? -2 : 2 * ScreenSize.width })
                            }
                        } />
                    </View>
                    <View style={styles.slide}>
                        <DoneScreen onDonePressed={() => {
                            let counter = this.state.currentPage
                            counter++
                            this.setState({
                                currentPage: counter
                            })
                        }} />
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    stepIndicator: {
        marginVertical: 50,
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        height: 150
    },
    slide: {
        flex: 1,
        width: ScreenSize.width,
        backgroundColor: '#FFFFFF',
    },
    slide2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    slide3: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default CheckoutScreen