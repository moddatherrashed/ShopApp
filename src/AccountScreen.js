import React, { Component } from 'react'
import { View, Text, StatusBar, AsyncStorage, KeyboardAvoidingView, Platform, I18nManager, ActivityIndicator, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { createStackNavigator } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import ScreenSize from './ScreenSize'
import Modal from "react-native-modal"
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'
import apiGetRequests from './components/apiGetRequests'
import apiPostRequests from './components/apiPostRequests'
import LoginScreen from './checkoutScreens/LoginScreen'
import forgetPassword from './components/forgetPassword'

class AccountScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EditModal: false,
            name: '',
            number: '',
            email: '',
            password: '',
            addressModal: false,
            address: '',
            loading: true,
            isLoggedIn: false,
            email: '',
            password: '',
            fullName: '',
            regEmail: '',
            regPassword: '',
            regRePassword: '',
            isRegisterFailed: false,
            isLoginFailed: false,
            userID: null,
            LoggedInPassword: '',
            buildingNumber: '',
            city: '',
            street: ''
        }
    }
    async signOut() {
        try {
            await AsyncStorage.removeItem('@MySuperStore:key');
            this.setState({
                isLoggedIn: false,
                name: '',
                email: '',
                number: '',
                address: '',
                password: '',
                LoggedInPassword: ''

            })
        } catch (error) {
            alert(error)
        }
    }
    async setUserLoggedIn(userID) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', userID);
        } catch (error) {
            alert("set  " + error)
        }
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

    async getUserLoggedIn() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                apiGetRequests.getRequests('getUserInfo', value).then((res) => {
                    this.setState({
                        userID: value,
                        name: res.userInforamtion[0].firstName,
                        email: res.userInforamtion[0].email,
                        number: res.userInforamtion[0].mobileNumber,
                        address: (res.userInforamtion[0].area === null ? '-' : res.userInforamtion[0].area) + " " + (res.userInforamtion[0].street === null ? '-' : res.userInforamtion[0].street) + " " + (res.userInforamtion[0].buldingNumber === null ? '-' : res.userInforamtion[0].buldingNumber),
                        LoggedInPassword: res.userInforamtion[0].password,
                        loading: false,
                        isLoggedIn: true,
                    })
                })
            } else {
                this.setState({
                    loading: false,
                    isLoggedIn: false,
                })
            }
        } catch (error) {
            alert("get  " + error)
        }
    }
    static navigationOptions = {
        title: I18nManager.isRTL ? strings.ar.account : strings.en.account,
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
        ),
        drawerLabel: I18nManager.isRTL ? strings.ar.account : strings.en.account,
        drawerIcon: (
            <Icon name='person' style={{ color: '#FFFFFF' }} />
        )
    }
    componentDidMount() {
        this.getUserLoggedIn()
        _this = this

    }
    render() {
        return (
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                {
                    this.state.loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={screenColors.mainToolBarColor} />
                        </View>
                        :
                        this.state.isLoggedIn ?
                            <Content>
                                <View style={{ flex: 6 }}>
                                    <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                                        <Text style={{ color: styleColors.accountScreenBarTextColor, fontWeight: 'bold', margin: 10, padding: 10, borderRadius: 5, backgroundColor: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.personalInformation : strings.en.personalInformation}</Text>
                                        <View style={{ flexDirection: 'row', flex: 5 }}>
                                            <View style={{ flex: 4, padding: 15, justifyContent: 'center' }}>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Icon name='person' style={{ color: styleColors.barsAndButtonsColor }} />
                                                        <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold', marginLeft: 10 }}>{I18nManager.isRTL ? strings.ar.name : strings.en.name}</Text>
                                                    </View>
                                                    <Text style={{ marginLeft: 30 }}>{this.state.name}</Text>
                                                </View>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Icon name='ios-call' style={{ color: styleColors.barsAndButtonsColor }} />
                                                        <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold', marginLeft: 10 }}>{I18nManager.isRTL ? strings.ar.phoneNumber : strings.en.phoneNumber}</Text>
                                                    </View>
                                                    <Text style={{ marginLeft: 30 }}>{this.state.number}</Text>
                                                </View>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <Icon name='ios-mail' style={{ color: styleColors.barsAndButtonsColor }} />
                                                        <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold', marginLeft: 10 }}>{I18nManager.isRTL ? strings.ar.email : strings.en.email}</Text>
                                                    </View>
                                                    <Text style={{ marginLeft: 30 }}>{this.state.email}</Text>
                                                </View>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <Icon name='ios-lock' style={{ color: styleColors.barsAndButtonsColor }} />
                                                        <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold', marginLeft: 10 }}>{I18nManager.isRTL ? 'كلمة السر' : 'password'}</Text>
                                                    </View>
                                                    <Text style={{ marginLeft: 30 }}>{this.state.LoggedInPassword}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'flex-end', padding: 10 }}>
                                                <TouchableOpacity onPress={() => { this.setState({ EditModal: true }) }} >
                                                    <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.edit : strings.en.edit}</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={{ flex: 0.5, flexDirection: 'column', padding: 10, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}
                                        onPress={() => { this.setState({ addressModal: true }) }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                                            <Icon name='ios-home' style={{ color: styleColors.barsAndButtonsColor }} />
                                            <Text style={{ marginLeft: 10, color: styleColors.barsAndButtonsColor, fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.address : strings.en.address}</Text>
                                        </View>
                                        <Text style={{ textAlign: 'left' }}>{this.state.address === 'null null null' ? I18nManager.isRTL ? 'لا يوجد عنوان' : 'No address' : this.state.address}</Text>
                                    </TouchableOpacity>

                                    <View style={{ flex: 4.5, justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.signOut()
                                            }}
                                            style={{ width: 100, borderRadius: 50, height: 100, elevation: 15, backgroundColor: '#FFFFFF', padding: 10, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon name='power' style={{ color: styleColors.barsAndButtonsColor }} />
                                            <Text style={{ color: styleColors.barsAndButtonsColor }} >{I18nManager.isRTL ? strings.ar.signOut : strings.en.signOut}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Content>
                            :
                            <KeyboardAvoidingView style={{
                                flex: 1,
                                width: ScreenSize.width,
                                backgroundColor: '#FFFFFF'
                            }} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -500} enabled>
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
                                        this.setState({
                                            loading: true
                                        })
                                        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                        if (reg.test(this.state.email) === false
                                            || this.state.email === ''
                                            || this.state.password === '') {
                                            this.setState({ isLoginFailed: true, loading: false })
                                        }
                                        else {

                                            apiPostRequests.postRequests('signIn', { email: this.state.email, password: this.state.password }).then((res) => {
                                                //alert(JSON.stringify(res.userID))
                                                if (res.status === 1) {
                                                    this.setState({
                                                        isLoggedIn: true,
                                                        userID: res.userID,
                                                        isLoginFailed: false,
                                                        loading: false

                                                    })
                                                    this.setUserLoggedIn(this.state.userID)
                                                    this.getUserLoggedIn()
                                                } else {
                                                    this.setState({
                                                        isLoginFailed: true,
                                                        loading: false
                                                    })
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
                                        this.setState({
                                            loading: true
                                        })
                                        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                        if (reg.test(this.state.regEmail) === false
                                            || this.state.fullName === ''
                                            || this.state.regPassword === ''
                                            || this.state.regRePassword === ''
                                            || this.state.regPassword !== this.state.regRePassword) {
                                            this.setState({ isRegisterFailed: true, loading: false })
                                        }
                                        else {
                                            apiPostRequests.postRequests('signUp', { userEmail: this.state.regEmail, userName: this.state.fullName, pass: this.state.regPassword }).then((res) => {
                                                if (res.status === 1) {
                                                    this.setState({
                                                        isLoggedIn: true,
                                                        loading: false,
                                                        isRegisterFailed: false,
                                                        userID: res.userID
                                                    })
                                                    this.setUserLoggedIn(JSON.stringify(this.state.userID))
                                                    this.getUserLoggedIn()
                                                } else {
                                                    this.setState({
                                                        isRegisterFailed: true,
                                                        loading: false
                                                    })
                                                }
                                            })

                                        }
                                    }}
                                />
                            </KeyboardAvoidingView>
                }
                <Modal isVisible={this.state.EditModal}
                    style={styles.ModalStyle}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ justifyContent: 'center', padding: 5, alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='person' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-call' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.number}
                                onChangeText={(number) => this.setState({ number })}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-mail' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-lock' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.LoggedInPassword}
                                onChangeText={(LoggedInPassword) => this.setState({ LoggedInPassword })}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => {
                                    apiPostRequests.postRequests('updateUserInfo', { F_name: this.state.name, email: this.state.email, userID: this.state.userID, password: this.state.LoggedInPassword, mobileNumber: this.state.number }).then((res) => {
                                        if (res.status === 1) {
                                            alert(I18nManager.isRTL ? 'تم بنجاح' : 'Done successfully')
                                        }
                                    })
                                    this.setState({ EditModal: false })
                                }}>
                                <Text style={styles.textBtnsStyle} >{I18nManager.isRTL ? 'تم' : 'Done'}</Text>
                            </Button>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ EditModal: false })}>
                                <Text style={styles.textBtnsStyle} >{I18nManager.isRTL ? 'إغلاق' : 'Cancel'}</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Modal isVisible={this.state.addressModal}
                    style={styles.ModalStyle}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-home' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <Text style={{ color: styleColors.barsAndButtonsColor }}>{this.state.address}</Text>

                        </View>
                        <View style={{ alignItems: 'center' }} >
                            <Text style={{ color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? 'المدينة' : 'City'}</Text>
                            <TextInput
                                placeholder={this.state.city}
                                onChangeText={(city) => this.setState({ city })}
                                style={{ width: ScreenSize.width * 0.4 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ alignItems: 'center' }} >
                            <Text style={{ color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? 'الشارع' : 'ٍStreet'}</Text>
                            <TextInput
                                placeholder={this.state.street}
                                onChangeText={(street) => this.setState({ street })}
                                style={{ width: ScreenSize.width * 0.4 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ alignItems: 'center' }} >
                            <Text style={{ color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? 'رقم البناية' : 'Building Number'}</Text>
                            <TextInput
                                placeholder={this.state.buildingNumber}
                                onChangeText={(buildingNumber) => this.setState({ buildingNumber })}
                                style={{ width: ScreenSize.width * 0.4 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => {
                                    apiPostRequests.postRequests('updateUserAddress', { userID: this.state.userID, area: this.state.city, street: this.state.street, buildingNumber: this.state.buildingNumber }).then((res) => {
                                        if (res.status === 1) {
                                            alert(I18nManager.isRTL ? 'تم بنجاح' : 'Done successfully')
                                        }
                                    })
                                    this.setState({
                                        EditModal: false,
                                        addressModal: false,
                                        address: this.state.city + " " + this.state.street + " " + this.state.buildingNumber
                                    })
                                }}>
                                <Text style={styles.textBtnsStyle} >{I18nManager.isRTL ? 'تم' : 'Done'}</Text>
                            </Button>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ addressModal: false })}>
                                <Text style={styles.textBtnsStyle} >{I18nManager.isRTL ? 'إغلاق' : 'Cancel'}</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    addToCartBtnStyle: {
        backgroundColor: styleColors.barsAndButtonsColor,
        height: '100%'
    },
    addToCartContainerStyle: {
        flex: 0.1,
        backgroundColor: '#323232',
        elevation: 15
    },
    textBtnsStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    cancelBtnStyle: {
        backgroundColor: styleColors.barsAndButtonsColor,
        borderWidth: 0.5,
        borderColor: '#FFFFFF',
    },

    cancelBtnConatinaerStyle: {
        flexDirection: 'row',
        flex: 2
    },
    ModalStyle: {

        flex: 1,
        //justifyContent: "flex-end",
        margin: 1
    },
    sizeTouchTextStyle: {
        borderWidth: 0.5,
        padding: 2,
        textAlign: 'center',
        borderColor: styleColors.barsAndButtonsColor,
        color: styleColors.barsAndButtonsColor
    },
    containerSizeStyle: {
        flexDirection: 'row',
        marginTop: ScreenSize.width * 0.1,
        flex: 5
    },
    sizeTouchStyle: {
        padding: 5,
        flex: 1
    },
    conatainerModalStyle: {
        backgroundColor: '#FFFFFF',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    conatinerStyle: {
        flex: 2,
        backgroundColor: '#FFFFFF'
    },
    imageContainer: {
        margin: 5,
        backgroundColor: '#FFFFFF',
        elevation: 15,
        marginBottom: 10,
        borderRadius: 5
    },
    priceNameFavContainer: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameTextStyle: {
        padding: 5,
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    priceTextStyle: {
        padding: 10,
        textAlign: 'left',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20
    },
    namePriceConatiner: {
        flexDirection: 'column',
        flex: 1.5
    },
    sizeSelectorStyle: {
        flexDirection: 'row',
        flex: 1.5
    },
    scrollViewStyle: {
        flex: 1.9
    },
    sizeBtnStyle: {
        borderColor: styleColors.barsAndButtonsColor,
        justifyContent: 'center',
        width: '100%'
    },
    sizeTextStyle: {
        padding: 5,
        color: styleColors.barsAndButtonsColor,
        textAlign: 'center'
    },
    iconFavStyle: {
        color: styleColors.barsAndButtonsColor,
        padding: 10,
        flex: 1,
        textAlign: 'right'
    },
    iconTouchStyle: {
        padding: 10,
        flex: 1
    },
    imageStyle: {
        height: ScreenSize.height * 0.6,
        width: '100%',
        flex: 0.9,
    },
    descriptionTextStyle: {
        padding: 5,
        fontWeight: 'bold',
        color: styleColors.barsAndButtonsColor
    },
    descriptionContainerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 25,
        margin: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    descriptionTextStyle: {
        padding: 20,
        fontSize: 15
    }
})
const AccountStackNavigator = createStackNavigator({
    AccountScreen: { screen: AccountScreen },
    forgetPassword: { screen: forgetPassword }
})

export default AccountStackNavigator