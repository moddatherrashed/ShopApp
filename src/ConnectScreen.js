import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Header, Left, Button, Body, Title } from 'native-base'

class AccountScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Connect With Us',
        drawerIcon: (
            <Icon name='ios-call' style={{ color: '#FFFFFF' }} />
        )
    }
    render() {
        return (
            <Container>
                <StatusBar
                    hidden
                />
                <Header style={{ backgroundColor: '#363A57' }}>
                    <Left>
                        <Button transparent>
                            <Button transparent
                                onPress={() => {
                                    this.props.navigation.navigate('DrawerOpen')
                                }}>
                                <Icon name='menu' style={{ color: '#FFFFFF' }} />

                            </Button>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Connect with us</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>here is Connect Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen