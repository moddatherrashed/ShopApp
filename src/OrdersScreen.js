import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Icon } from 'native-base'

class AccountScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='list' style={{ color: '#363A57' }} />
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>here is orders Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen