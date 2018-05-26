import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, I18nManager } from 'react-native'
import { Icon, Button } from 'native-base'
import styleColors from './screenColors'
import strings from './strings'
import apiGetRequests from '../components/apiGetRequests'
import ScreenSize from '../ScreenSize'

class forgetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChanged: false,
            searchedProducts: [],
            searchText: '',
            email: '',
            message: '',
            isSuccess: null,
            showMessage: ''
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ alignItems: 'flex-end', padding: 20, }}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <Icon name='ios-close' style={{ color: styleColors.barsAndButtonsColor, fontSize: 40 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: ScreenSize.width }}>
                    <Icon name='ios-mail' style={{ color: styleColors.barsAndButtonsColor, paddingRight: 10 }} />
                    <TextInput
                        placeholder={I18nManager.isRTL ? 'ايميلك' : 'your email'}
                        style={{ width: ScreenSize.width * 0.8 }}
                        onChangeText={(email) => { this.setState({ email }) }}
                        placeholderTextColor={styleColors.barsAndButtonsColor}
                        underlineColorAndroid={styleColors.barsAndButtonsColor} />
                </View>
                <Button
                    style={{
                        backgroundColor: styleColors.cartScreenColors,
                        padding: 10,
                        marginTop: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: 300,
                        elevation: 5,
                        borderRadius: 5
                    }}
                    onPress={() => {
                        if (this.state.email === '') {

                        } else {
                            apiGetRequests.getRequests('forgetPassword', this.state.email).then((res) => {
                                if (res.status === 0) {
                                    this.setState({
                                        isSuccess: false,
                                        message: I18nManager.isRTL ? res.message_ar : res.message_en
                                    })
                                } else {
                                    this.setState({
                                        isSuccess: true,
                                        message: I18nManager.isRTL ? res.message_ar : res.message_en
                                    })
                                }
                            })
                        }
                    }} >
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>{I18nManager.isRTL ? 'طلب كلمة سر جديدة' : 'Request a new password'}</Text>

                </Button>

                {
                    this.state.isSuccess ?
                        <Text style={{ color: 'green', fontSize: 30, textAlign: 'center', margin : 10 }}>{this.state.message}</Text>
                        :
                        <Text style={{ color: 'red', fontSize: 30, textAlign: 'center' }}>{this.state.message}</Text>
                }
            </View>
        )
    }
}

export default forgetPassword