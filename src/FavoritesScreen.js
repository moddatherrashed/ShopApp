import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'

class AccountScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='star' style={{ color: '#FFFFFF' }} />
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
                        <Title>Favorites</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>here is favorites Screen</Text>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen