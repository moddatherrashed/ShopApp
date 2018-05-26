import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, I18nManager } from 'react-native'
import { Icon } from 'native-base'
import styleColors from './screenColors'
import strings from './strings'
import apiGetRequests from '../components/apiGetRequests'

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
            <View style={{ flex: 2 }}>
                <TouchableOpacity style={{ alignItems : 'flex-end', padding : 20, }}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <Icon name='ios-close' style={{ color: styleColors.barsAndButtonsColor, fontSize: 40 }} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default forgetPassword