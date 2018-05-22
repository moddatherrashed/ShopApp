import React, { Component } from 'react'
import { View, Text, I18nManager, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Button, Item, Input, Icon, Label } from 'native-base'
import styleColors from '../components/screenColors'
import strings from '../components/strings'

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
            <ScrollView keyboardShouldPersistTaps="always" style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                    <Text style={{ backgroundColor: styleColors.cartScreenColors, color: '#FFFFFF', fontSize: 20, padding: 10, borderRadius: 5, fontWeight: 'bold' }}>Please fill in your information</Text>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.city : strings.en.city}</Label>
                        <Input value={this.props.city} onChangeText={this.props.onCityChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.street : strings.en.street}</Label>
                        <Input value={this.props.street} onChangeText={this.props.onStreetChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.buildingNumber : strings.en.buildingNumber}</Label>
                        <Input value={this.props.buildingNumber} onChangeText={this.props.onBuildingNumberChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Item floatingLabel >
                        <Label style={{ color: styleColors.cartScreenColors, paddingLeft: 5 }}>{I18nManager.isRTL ? strings.ar.mobileNumber : strings.en.mobileNumber}</Label>
                        <Input alue={this.props.mobileNumber} onChangeText={this.props.onMobileNumberChanged} style={{ color: styleColors.cartScreenColors }} />
                    </Item>
                    <Button full style={{
                        backgroundColor: styleColors.cartScreenColors,
                        margin: 10,
                        elevation: 5,
                        borderRadius: 5
                    }} onPress={this.props.onNextPressed}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{I18nManager.isRTL ? strings.ar.next : strings.en.next}</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default InformationScreen