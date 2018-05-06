import React, { Component } from 'react'
import { View, Text, I18nManager, StatusBar } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import RNRestart from 'react-native-restart'

class LanguageScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arabicBtnBackground: styleColors.languageScreenNotSelectedTextColor,
            englsihBtnBackground: styleColors.barsAndButtonsColor,
            arabicTextColor: styleColors.barsAndButtonsColor,
            englishTextColor: styleColors.languageScreenSelectedTextColor,
        }
    }
    static navigationOptions = {
        headerTitle: `Language Selector`,
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
        drawerIcon: (
            <Icon name='ios-globe' style={{ color: '#FFFFFF' }} />
        ),
    }

    languageSelector(lang) {
        if (lang == 'ar') {
            I18nManager.forceRTL(true);
            RNRestart.Restart()
            this.setState({
                arabicTextColor: styleColors.languageScreenSelectedTextColor,
                arabicBtnBackground: styleColors.barsAndButtonsColor,
                englsihBtnBackground: styleColors.languageScreenSelectedTextColor,
                englishTextColor: styleColors.barsAndButtonsColor,
            })
        } else {
            I18nManager.forceRTL(false);
            RNRestart.Restart()
            this.setState({
                englsihBtnBackground: styleColors.barsAndButtonsColor,
                englishTextColor: styleColors.languageScreenSelectedTextColor,
                arabicTextColor: styleColors.barsAndButtonsColor,
                arabicBtnBackground: styleColors.languageScreenSelectedTextColor,
            })
        }
    }

    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                <Text style={{ margin: 20, fontSize: 20 }}>Choose your Language</Text>

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