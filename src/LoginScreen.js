import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `First Step`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },

    })
    render() {
        return (
            <ScrollView style={{ flex: 2 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', margin: 10, elevation: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, padding: 10, flex: 0.15, backgroundColor: '#363A57' }}>Are you member ?</Text>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Email</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{ flex: 0.3 }} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Password</Label>
                        <Input secureTextEntry style={{ color: '#363A57' }} />
                    </Item>
                    <Button full style={{ backgroundColor: '#363A57', margin: 10, elevation: 5, flex: 0.15 }}>
                        <Text style={{ color: '#FFFFFF' }}>Login</Text>
                    </Button>
                </View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Or</Text>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                    <Text style={{ backgroundColor: '#363A57', color: '#FFFFFF', fontSize: 20, padding: 10 }}>Register Now !</Text>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Full Name</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Email</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Password</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Re-Password</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Button full style={{ backgroundColor: '#363A57', margin: 10, elevation: 5 }}>
                        <Text style={{ color: '#FFFFFF' }}>Register</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default LoginScreen