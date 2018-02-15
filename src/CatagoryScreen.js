import React, { Component } from 'react'
import { View, Text } from 'react-native'


class CatagoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static navigationOptions = ({ navigation }) => ({

        title: `${navigation.state.params.name}`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#363A57',
        },
        
    })

    render() {
        const { params } = this.props.navigation.state
        return (
            <View>
                <Text>here is catagory screen {params.name}</Text>
            </View>
        )
    }
}

export default CatagoryScreen