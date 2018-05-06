import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'
import styleColors from '../components/screenColors'

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
        headerTintColor: styleColors.cartScreenColors,
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },

    })
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                    <Text style={{ backgroundColor: styleColors.cartScreenColors, color: '#FFFFFF', fontSize: 20, padding: 10, borderRadius: 5, fontWeight: 'bold' }}>Please fill in your information</Text>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>City</Label>
                        <Input style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Street</Label>
                        <Input style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Description for the address</Label>
                        <Input multiline style={{ color: styleColors.cartScreenColors, height: 150 }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>Mobile Number</Label>
                        <Input style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Button full style={{
                        backgroundColor: styleColors.cartScreenColors,
                        margin: 10,
                        elevation: 5,
                        borderRadius: 5
                    }} onPress={this.props.onNextPressed}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Next</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default InformationScreen