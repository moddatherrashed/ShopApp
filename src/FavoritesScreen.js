import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Icon } from 'native-base'

class AccountScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='star' style={{ color: '#FFFFFF' }} />
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>here is favorites Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen