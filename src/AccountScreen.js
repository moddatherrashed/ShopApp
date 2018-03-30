import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize'
import Modal from "react-native-modal"

class AccountScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            name: 'test',
            number: '0778899555',
            email: 'test@test.com'
        }
    }
    static navigationOptions = {
        title: `Account`,
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
                    backgroundColor="#4d537c"
                    hidden={false} />
                <Content>
                    <View style={{ flex: 6 }}>
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 5 }}>
                                <View style={{ flex: 4, padding: 15, justifyContent: 'center' }}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: '#363A57', fontWeight: 'bold' }}>Name</Text>
                                        <Text style={{}}>{this.state.name}</Text>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: '#363A57', fontWeight: 'bold' }}>Number</Text>
                                        <Text style={{}}>{this.state.number}</Text>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: '#363A57', fontWeight: 'bold' }}>Email</Text>
                                        <Text style={{}}>{this.state.email}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', padding: 10 }}>
                                    <TouchableOpacity onPress={() => { this.setState({ isModalVisible: true }) }} >
                                        <Text style={{ color: '#363A57', fontWeight: 'bold' }}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                            <Icon name='ios-home' style={{ color: '#363A57' }} />
                            <Text style={{ marginLeft: 10, color: '#363A57' }}>Addresses</Text>
                        </TouchableOpacity>

                        <View style={{ flex: 4.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 100, borderRadius: 50, height: 100, elevation: 15, backgroundColor: '#FFFFFF', padding: 10, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='power' style={{ color: '#363A57' }} />
                                <Text style={{ color: '#363A57' }} >Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Content>
                <Modal isVisible={this.state.isModalVisible}
                    style={styles.ModalStyle}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ justifyContent: 'center',padding : 5, alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <TextInput
                                placeholder={this.state.name}
                                style={{ width: 200 }}
                                placeholderTextColor='#363A57'
                                underlineColorAndroid="#363A57" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <TextInput
                                placeholder={this.state.number}
                                style={{ width: 200 }}
                                placeholderTextColor='#363A57'
                                underlineColorAndroid="#363A57" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                            <TextInput
                                placeholder={this.state.email}
                                style={{ width: 200 }}
                                placeholderTextColor='#363A57'
                                underlineColorAndroid="#363A57" />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: '#363A57', borderRadius: 5 }}
                                onPress={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.textBtnsStyle} >Done</Text>
                            </Button>
                            <Button full style={{ width: ScreenSize.width * 0.4, margin: 5, backgroundColor: '#363A57', borderRadius: 5 }}
                                onPress={() => this.setState({ isModalVisible: false })}>
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
        backgroundColor: '#363A57',
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
        backgroundColor: '#363A57',
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
        borderColor: '#363A57',
        color: '#363A57'
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
        borderColor: '#363A57',
        justifyContent: 'center',
        width: '100%'
    },
    sizeTextStyle: {
        padding: 5,
        color: '#363A57',
        textAlign: 'center'
    },
    iconFavStyle: {
        color: '#363A57',
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
        color: '#363A57'
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