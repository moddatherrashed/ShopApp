import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'


class LanguageScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arabicBtnBackground: '#FFFFFF',
            englsihBtnBackground: '#363A57',
            arabicTextColor: '#363A57',
            englishTextColor: '#FFFFFF',
        }
    }
    static navigationOptions = {
        headerTitle: `Language Selector`,
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
            <Icon name='ios-globe' style={{ color: '#FFFFFF' }} />
        ),
    }

    languageSelector(lang) {
        if (lang == 'ar') {
            this.setState({
                arabicTextColor: '#FFFFFF',
                arabicBtnBackground: '#363A57',
                englsihBtnBackground: '#FFFFFF',
                englishTextColor: '#363A57',
            })
        } else {
            this.setState({
                englsihBtnBackground: '#363A57',
                englishTextColor: '#FFFFFF',
                arabicTextColor: '#363A57',
                arabicBtnBackground: '#FFFFFF',
            })
        }
    }

    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4d537c"
                    hidden={false} />
                <Text style={{ margin: 20, fontSize: 20 }}>Choose your Language:</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Button bordered style={{
                        backgroundColor: this.state.englsihBtnBackground,
                        borderColor: '#363A57',
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 20,
                        flex: 1
                    }}
                        onPress={() => { this.languageSelector('en') }}>
                        <Text style={{
                            color: this.state.englishTextColor,
                            fontWeight: 'bold',
                            fontSize: 30
                        }} >English</Text>
                    </Button>
                    <Button bordered style={{
                        backgroundColor: this.state.arabicBtnBackground,
                        height: 100,
                        borderColor: '#363A57',
                        margin: 20,
                        justifyContent: 'center',
                        flex: 1
                    }}
                        onPress={() => { this.languageSelector('ar') }}>
                        <Text style={{
                            color: this.state.arabicTextColor,
                            fontWeight: 'bold',
                            fontSize: 30
                        }} >العربية</Text>
                    </Button>
                </View>
            </View>

        )
    }
}

const LanguageStackNavigation = StackNavigator({
    LanguageScreen: { screen: LanguageScreen }
})

export default LanguageStackNavigation