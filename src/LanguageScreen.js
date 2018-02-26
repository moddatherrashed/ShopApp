import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'


class AccountScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='ios-globe' style={{ color: '#FFFFFF' }} />
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
                        <Title>Connect With Us</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>here is language Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen