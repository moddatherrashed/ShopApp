import React, { Component } from 'react'
import { View, Text, I18nManager, TextInput, ScrollView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'
import * as Animatable from 'react-native-animatable'
import styleColors from '../components/screenColors'
import strings from '../components/strings'

class LoginScreen extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = ({ navigation }) => ({
        title: `First Step`,
        headerTintColor: styleColors.cartScreenColors,
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },

    })

    render() {
        return (
            <ScrollView style={{ flex: 2 }}>
                { /*Login from*/}
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', margin: 10, elevation: 15, borderRadius: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 10, margin: 10, flex: 0.15, backgroundColor: styleColors.cartScreenColors, borderRadius: 5 }}>{I18nManager.isRTL ? strings.ar.areYouMember : strings.en.areYouMember}</Text>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.email : strings.en.email}</Label>
                        <Input value={this.props.emailValue} onChangeText={this.props.onEmailChange} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.password : strings.en.password}</Label>
                        <Input secureTextEntry value={this.props.passwordValue} onChangeText={this.props.onPasswordChange} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    {this.props.renderAuthFaild}
                    <Button full
                        onPress={
                            this.props.onLoginPressed
                        }
                        style={{
                            backgroundColor: styleColors.cartScreenColors,
                            margin: 10,
                            elevation: 5,
                            flex: 0.15,
                            borderRadius: 5
                        }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.login : strings.en.login}</Text>
                    </Button>
                </View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{I18nManager.isRTL ? strings.ar.or : strings.en.or}</Text>
                {/*Registration from*/}
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                    <Text style={{ backgroundColor: styleColors.cartScreenColors, color: '#FFFFFF', fontSize: 20, margin: 10, padding: 10, borderRadius: 5, fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.registerNow : strings.en.registerNow}</Text>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.fullName : strings.en.fullName}</Label>
                        <Input value={this.props.fullNameValue} onChangeText={this.props.onFullNameChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.email : strings.en.email}</Label>
                        <Input value={this.props.regEmailValue} onChangeText={this.props.onRegEmailChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.password : strings.en.password}</Label>
                        <Input value={this.props.regPasswordValue} onChangeText={this.props.onRegPasswordChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.repassword : strings.en.repassword}</Label>
                        <Input value={this.props.regRePasswordValue} onChangeText={this.props.onRegRePasswordChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    {this.props.renderRegisterFaild}
                    <Button full
                        style={{ backgroundColor: styleColors.cartScreenColors, margin: 10, elevation: 5, borderRadius: 5 }}
                        onPress={this.props.onRegisterPressed}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.register : strings.en.register}</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default LoginScreen