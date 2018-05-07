import React, { Component } from 'react'
import { View, Text, StatusBar, I18nManager, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize'
import Modal from "react-native-modal"
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'
class AccountScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EditModal: false,
            name: 'test',
            number: '0778899555',
            email: 'test@test.com',
            addressModal: false,
            address: 'Epingerstrasse 28, Basel Switzerland'
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
        drawerLabel: I18nManager.isRTL ? strings.ar.account : strings.en.account,
        drawerIcon: (
            <Icon name='person' style={{ color: '#FFFFFF' }} />
        )
    }
    componentDidMount() {
        _this = this
    }
    render() {
        return (
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
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
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', padding: 10 }}>
                                    <TouchableOpacity onPress={() => { this.setState({ EditModal: true }) }} >
                                        <Text style={{ color: styleColors.barsAndButtonsColor, fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.edit : strings.en.edit}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{ flex: 0.5, flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}
                            onPress={() => { this.setState({ addressModal: true }) }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                                <Icon name='ios-home' style={{ color: styleColors.barsAndButtonsColor }} />
                                <Text style={{ marginLeft: 10, color: styleColors.barsAndButtonsColor, fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.address : strings.en.address}</Text>
                            </View>
                            <Text style={{width: '100%' }}>{this.state.address}</Text>
                        </TouchableOpacity>

                        <View style={{ flex: 4.5, justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                            <TouchableOpacity style={{ width: 100, borderRadius: 50, height: 100, elevation: 15, backgroundColor: '#FFFFFF', padding: 10, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='power' style={{ color: styleColors.barsAndButtonsColor }} />
                                <Text style={{ color: styleColors.barsAndButtonsColor }} >{I18nManager.isRTL ? strings.ar.signOut : strings.en.signOut}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                <Modal isVisible={this.state.EditModal}
                    style={styles.ModalStyle}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ justifyContent: 'center', padding: 5, alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='person' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.name}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid="#363A57" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-call' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.number}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-mail' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.email}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ EditModal: false })}>
                                <Text style={styles.textBtnsStyle} >Done</Text>
                            </Button>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ EditModal: false })}>
                                <Text style={styles.textBtnsStyle} >Cancel</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Modal isVisible={this.state.addressModal}
                    style={styles.ModalStyle}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <Icon name='ios-home' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                            <TextInput
                                placeholder={this.state.address}
                                style={{ width: ScreenSize.width * 0.8 }}
                                placeholderTextColor={styleColors.barsAndButtonsColor}
                                underlineColorAndroid={styleColors.barsAndButtonsColor} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ addressModal: false })}>
                                <Text style={styles.textBtnsStyle} >Edit</Text>
                            </Button>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: styleColors.barsAndButtonsColor, borderRadius: 5 }}
                                onPress={() => this.setState({ addressModal: false })}>
                                <Text style={styles.textBtnsStyle} >Cancel</Text>
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
        justifyContent: "flex-end",
        margin: 0
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
const AccountStackNavigator = StackNavigator({
    AccountScreen: { screen: AccountScreen }
})

export default AccountStackNavigator