import React, { Component } from 'react'
import { View, Text, I18nManager, StatusBar, Alert } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { createStackNavigator } from 'react-navigation'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import RNRestart from 'react-native-restart'
import strings from './components/strings';

class LanguageScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arabicBtnBackground: I18nManager.isRTL ? styleColors.barsAndButtonsColor : styleColors.languageScreenSelectedTextColor,
            englsihBtnBackground: I18nManager.isRTL ? styleColors.languageScreenSelectedTextColor : styleColors.barsAndButtonsColor,
            arabicTextColor: I18nManager.isRTL ? styleColors.languageScreenSelectedTextColor : styleColors.barsAndButtonsColor,
            englishTextColor: I18nManager.isRTL ? styleColors.barsAndButtonsColor : styleColors.languageScreenSelectedTextColor,
        }
    }
    static navigationOptions = {
        headerTitle: I18nManager.isRTL ? strings.ar.language : strings.en.language,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.openDrawer()
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
        )
    }

    languageSelector(lang) {
        Alert.alert(
            I18nManager.isRTL ? strings.ar.changeTheLanguage : strings.en.changeTheLanguage,
            I18nManager.isRTL ? strings.ar.areYouSureYouWantToChangeTheLanguage : strings.en.areYouSureYouWantToChangeTheLanguage,
            [
                { text: I18nManager.isRTL ? strings.ar.cancel : strings.en.cancel, onPress: () => { }, style: 'cancel' },
                {
                    text: I18nManager.isRTL ? strings.ar.yes : strings.en.yes, onPress: () => {
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
                },
            ],
            { cancelable: false }
        )

    }

    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                <Text style={{ margin: 20, fontSize: 20, fontWeight: 'bold', color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.chooseYourLanguage : strings.en.chooseYourLanguage}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Button bordered style={{
                        backgroundColor: this.state.englsihBtnBackground,
                        borderColor: styleColors.barsAndButtonsColor,
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
                        borderColor: styleColors.barsAndButtonsColor,
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

const LanguageStackNavigation = createStackNavigator({
    LanguageScreen: { screen: LanguageScreen }
})

export default LanguageStackNavigation