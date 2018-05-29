import React, { Component } from 'react'
import { View, Text, ScrollView, I18nManager } from 'react-native'
import { Icon, Button } from 'native-base'
import styleColors from '../components/screenColors'
import apiGetRequests from '../components/apiGetRequests'

class DoneScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

            name: '',
            address: '',
            number: ''
        }
    }


    componentDidMount() {
        apiGetRequests.getRequests('getUserInfo', this.props.userID).then((res) => {
            this.setState({
                name: res.userInforamtion[0].firstName,
                email: res.userInforamtion[0].email,
                number: res.userInforamtion[0].mobileNumber,
                address: (res.userInforamtion[0].area === null ? '-' : res.userInforamtion[0].area) + " " + (res.userInforamtion[0].street === null ? '-' : res.userInforamtion[0].street) + " " + (res.userInforamtion[0].buldingNumber === null ? '-' : res.userInforamtion[0].buldingNumber),
            })
        })
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Icon name='ios-checkmark-circle' style={{ color: '#009432' }} />
                    <Text style={{ fontWeight: 'bold', margin: 5, color: styleColors.cartScreenColors }}>Done</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', color: styleColors.cartScreenColors, padding: 15, textAlign: 'center', fontSize: 25 }}>Shipping Information</Text>
                    <Text style={{ fontWeight: 'bold', color: styleColors.cartScreenColors, padding: 15, textAlign: 'center' }}>{I18nManager.isRTL ? 'الاسم الكامل' : 'Full Name'}:{this.state.name}</Text>
                    <Text style={{ fontWeight: 'bold', color: styleColors.cartScreenColors, padding: 15, textAlign: 'center' }}>{I18nManager.isRTL ? 'العنوان' : 'Address'}: {this.state.address}</Text>
                    <Text style={{ fontWeight: 'bold', color: styleColors.cartScreenColors, padding: 15, textAlign: 'center' }}>{I18nManager.isRTL ? 'رقم الهاتف' : 'Mobile Number'}: {this.state.number}</Text>
                    <Text style={{ fontWeight: 'bold', color: styleColors.cartScreenColors, padding: 15, textAlign: 'center' }}>{I18nManager.isRTL ? 'المجموع الكلي' : 'Total Amount'}: {this.props.total} JOD</Text>
                </View>
                <Button full style={{
                    backgroundColor: styleColors.cartScreenColors,
                    margin: 10,
                    elevation: 5,
                    borderRadius: 5
                }} onPress={this.props.onDonePressed}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Done</Text>
                </Button>
            </ScrollView>
        )
    }
}

export default DoneScreen