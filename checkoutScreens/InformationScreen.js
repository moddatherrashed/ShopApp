import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'

class InformationScreen extends Component {
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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                    <Text style={{ backgroundColor: '#363A57', color: '#FFFFFF', fontSize: 20, padding: 10 }}>Please fill in your information</Text>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>City</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Street</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Description for the address</Label>
                        <Input multiline style={{ color: '#363A57', height: 150 }} />
                    </Item>
                    <Item floatingLabel style={{}} >
                        <Label style={{ color: '#363A57', paddingLeft: 5 }}>Mobile Number</Label>
                        <Input style={{ color: '#363A57' }} />
                    </Item>
                    <Button full style={{
                        backgroundColor: '#363A57',
                        margin: 10,
                        elevation: 5
                    }} onPress={this.props.onNextPressed}>
                        <Text style={{ color: '#FFFFFF' }}>Next</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default InformationScreen