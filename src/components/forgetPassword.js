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
            searchText: ''
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        apiGetRequests.getRequests('getProducts', 0).then((res) => {
            //alert(JSON.stringify(res))
            this.setState({
                searchedProducts: res.products
            })
        })
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
                    onPress={
                        () => {
                        }} >
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>{I18nManager.isRTL ? 'طلب كلمة سر جديدة' : 'Request a new password'}</Text>
                </Button>
            </View>
        )
    }
}

export default forgetPassword