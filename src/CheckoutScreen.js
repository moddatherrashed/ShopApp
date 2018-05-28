import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, KeyboardAvoidingView, I18nManager, ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import StepIndicator from 'react-native-step-indicator'
import LoginScreen from '../src/checkoutScreens/LoginScreen'
import InformationScreen from '../src/checkoutScreens/InformationScreen'
import DoneScreen from '../src/checkoutScreens/DoneScreen'
import ScreenSize from './ScreenSize'
import { Button } from 'native-base'
import * as Animatable from 'react-native-animatable'
import styleColors from './components/screenColors'
import strings from './components/strings'
import apiPostRequests from './components/apiPostRequests'
import apiGetRequests from './components/apiGetRequests'

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
            isRegisterFailed: false,
            city: '',
            buildingNumber: '',
            mobileNumber: '',
            street: '',
            isLogin: true,
            isFillInfo: false,
            username: '',
            isDone: false,
            userID: null,
            total: this.props.navigation.state.params.total,
            delivery: 0,
        }
    }
    async getUserLoggedIn() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                // We have data!!
                this.setState({
                    isLoggedIn: true
                })
            }
        } catch (error) {
            alert(error)
        }
    }
    async setUserLoggedIn(userID) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', userID);
        } catch (error) {
            alert(error)
        }
    }

    componentDidMount() {
        this.getUserLoggedIn()
        // alert(this.state.userInfos)
        // if (this.state.total)

        apiGetRequests.getRequests('getCost').then((res) => {
            for (let obj of res.deliveryCost) {
                if (parseFloat(obj.max_amount) >= parseFloat(obj.id) === 3) {
                    alert(obj.delivery_cost)
                }
            }
        })
    }
    static navigationOptions = {
        title: I18nManager.isRTL ? strings.ar.checkOut : strings.en.checkOut,
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
            return (<Animatable.Text animation="bounce" easing="ease-out" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{I18nManager.isRTL ? strings.ar.authenticationFailed : strings.en.authenticationFailed}</Animatable.Text>
            )
        }
    }
    renderRegisterFaildFunc() {
        if (this.state.isRegisterFailed) {
            return (<Animatable.Text animation="bounce" easing="ease-out" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{I18nManager.isRTL ? strings.ar.allFieldsAreRequired : strings.en.allFieldsAreRequired}</Animatable.Text>
            )
        }
    }

    scrollListToStart(contentWidth, contentHeight) {
        if (I18nManager.isRTL) {
            this.refs.swiper.scrollTo({ x: contentWidth });
        }
    }


    isLoggedInChecker() {
        if (this.state.isLoggedIn === false && this.state.isLogin === true) {
            return (
                <KeyboardAvoidingView style={styles.slide} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -500} enabled>
                    <LoginScreen
                        isLoginFailed={this.state.isLoginFailed}
                        emailValue={this.state.email}
                        passwordValue={this.state.password}
                        onEmailChange={(email) => this.setState({ email, isLoginFailed: false })}
                        renderAuthFaild={this.renderAuthFaildFunc()}
                        onPasswordChange={(password) => this.setState({ password, isLoginFailed: false })}
                        onPressForget={() =>
                            this.props.navigation.navigate('forgetPassword')
                        }
                        onLoginPressed={() => {
                            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            if (reg.test(this.state.email) === false
                                || this.state.email === ''
                                || this.state.password === '') {
                                this.setState({ isLoginFailed: true })
                            }
                            else {

                                apiPostRequests.postRequests('signIn', { email: this.state.email, password: this.state.password }).then((res) => {
                                    //alert(JSON.stringify(res.userID))
                                    if (res.status === 1) {
                                        let counter = this.state.currentPage
                                        counter++
                                        this.setState({
                                            currentPage: counter,
                                            isLogin: false,
                                            isLoggedIn: false,
                                            isDone: false,
                                            isFillInfo: true,
                                            userID: res.userID,
                                            isLoginFailed: false
                                        })
                                        this.setUserLoggedIn(this.state.userID)
                                    } else {
                                        this.setState({ isLoginFailed: true })
                                    }
                                })
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
                                || this.state.regRePassword === ''
                                || this.state.regPassword !== this.state.regRePassword) {
                                this.setState({ isRegisterFailed: true })
                            }
                            else if (this.state.isLogin) {
                                apiPostRequests.postRequests('signUp', { userEmail: this.state.regEmail, userName: this.state.fullName, pass: this.state.regPassword }).then((res) => {
                                    if (res.status === 1) {
                                        this.setState({ isRegisterFailed: false })
                                        let counter = this.state.currentPage
                                        counter++
                                        this.setState({
                                            currentPage: counter,
                                            isLogin: false,
                                            isFillInfo: true
                                        })
                                    } else {
                                        this.setState({ isRegisterFailed: true })
                                    }
                                })

                            }
                        }}
                    />
                </KeyboardAvoidingView>
            )
        } else if (this.state.isLoggedIn) {
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
                                counter = +2
                                this.setState({
                                    currentPage: counter,
                                    isLogin: false,
                                    isLoggedIn: false,
                                    isDone: true
                                })
                            }} >
                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>{I18nManager.isRTL ? 'الإستمرار كالمستخدم المسجل' : 'Continue as registerd user'} </Text>
                    </Button>
                    <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold', padding: 20, textAlign: 'center' }}>{I18nManager.isRTL ? strings.ar.or : strings.en.or}</Text>
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
                                    isLoggedIn: false,
                                    isLogin: true,
                                    isFillInfo: false
                                })
                            }} >
                        <Text style={{ color: '#FFFFFF', fontSize: 20 }} >{I18nManager.isRTL ? 'التسجيل بحساب اخر' : 'Login with another account'}</Text>
                    </Button>

                </View>
            )
        }
    }
    isFillInfoChecker() {
        if (this.state.isFillInfo) {
            return (
                <KeyboardAvoidingView style={styles.slide} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -500} enabled>
                    <InformationScreen
                        city={this.state.city}
                        onCityChanged={(city) => this.setState({ city })}
                        street={this.state.street}
                        onStreetChanged={(street) => this.setState({ street })}
                        buildingNumber={this.state.buildingNumber}
                        onBuildingNumberChanged={(buildingNumber) => this.setState({ buildingNumber })}
                        mobileNumber={this.state.mobileNumber}
                        onMobileNumberChanged={(mobileNumber) => this.setState({ mobileNumber })}

                        onNextPressed={
                            () => {
                                apiPostRequests.postRequests('fillInfo', { userID: this.state.userID, area: this.state.city, street: this.state.street, bldg_num: this.state.buildingNumber, mobile_number: this.state.mobileNumber }).then((res) => {
                                    alert(this.state.userID)
                                    if (res.status === 1) {
                                        this.setState({ isRegisterFailed: false })
                                        let counter = this.state.currentPage
                                        counter++
                                        this.setState({
                                            currentPage: counter,
                                            isDone: true,
                                            isFillInfo: false
                                        })
                                    } else {
                                        this.setState({ isRegisterFailed: true })
                                    }
                                })
                            }
                        } />
                </KeyboardAvoidingView>)
        }
    }
    isDoneChecker() {
        if (this.state.isDone) {
            return (
                <View style={styles.slide}>
                    <DoneScreen onDonePressed={() => {
                        apiPostRequests.postRequests('addOrder',
                            {
                                C_ID: this.state.userID,
                                delivery_cost: "1",
                                price: "2",
                                total_price: "10101010",
                                products: [
                                    {
                                        quantity: 1,
                                        id: 2
                                    },
                                    {
                                        quantity: 1,
                                        id: 3
                                    }
                                ]
                            }).then((res) => {
                                alert("successssssss")
                                if (res.status === 1) {
                                    let counter = this.state.currentPage
                                    counter++
                                    this.setState({
                                        currentPage: counter
                                    })
                                } else {
                                    this.setState({ isRegisterFailed: true })
                                }
                            })

                    }} />
                </View>
            )
        }
    }
    render() {
        let context = this
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator stepCount={3} customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={[I18nManager.isRTL ? 'الحساب' : 'Account', I18nManager.isRTL ? 'المعلومات' : 'Information', I18nManager.isRTL ? 'المعلومات' : 'Done']} />
                </View>
                {this.isLoggedInChecker()}
                {this.isFillInfoChecker()}
                {this.isDoneChecker()}
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
        width: ScreenSize.width,
        backgroundColor: '#FFFFFF',
    },
    slide3: {
        flex: 1,
        width: ScreenSize.width,
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default CheckoutScreen