import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'
import * as Animatable from 'react-native-animatable'
import styleColors from '../components/screenColors'

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
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, padding: 10, margin: 10, flex: 0.15, backgroundColor: styleColors.cartScreenColors, borderRadius: 5 }}>Are you member ?</Text>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Email</Label>
                        <Input value={this.props.emailValue} onChangeText={this.props.onEmailChange} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Password</Label>
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
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Login</Text>
                    </Button>
                </View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Or</Text>
                {/*Registration from*/}
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                    <Text style={{ backgroundColor: styleColors.cartScreenColors, color: '#FFFFFF', fontSize: 20, margin: 10, padding: 10, borderRadius: 5, fontWeight: 'bold' }}>Register Now !</Text>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Full Name</Label>
                        <Input value={this.props.fullNameValue} onChangeText={this.props.onFullNameChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Email</Label>
                        <Input value={this.props.regEmailValue} onChangeText={this.props.onRegEmailChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Password</Label>
                        <Input value={this.props.regPasswordValue} onChangeText={this.props.onRegPasswordChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Re-Password</Label>
                        <Input value={this.props.regRePasswordValue} onChangeText={this.props.onRegRePasswordChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    {this.props.renderRegisterFaild}
                    <Button full
                        style={{ backgroundColor: styleColors.cartScreenColors, margin: 10, elevation: 5, borderRadius: 5 }}
                        onPress={this.props.onRegisterPressed}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Register</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default LoginScreen