import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import ScreenSize from './ScreenSize'
class AccountScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='person' style={{ color: '#FFFFFF' }} />
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
                        <Title>Account</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ height: ScreenSize.height, flex: 6 }}>
                        <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                            <View style={{ flexDirection: 'row', flex: 5 }}>
                                <View style={{ flex: 4, padding: 10, justifyContent: 'center' }}>
                                    <Text>ayman</Text>
                                    <Text>0041774044019</Text>
                                    <Text>moddather.developer@gmail.com</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end', padding: 10 }}>
                                    <TouchableOpacity>
                                        <Text>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF', elevation: 15, margin: 10 }}>
                            <Icon name='ios-home' />
                            <Text style={{ marginLeft: 10 }}>Addresses</Text>
                        </View>

                        <View style={{ flex: 4.5, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{width : '90%',elevation : 15, backgroundColor : '#FFFFFF',padding : 10,margin : 10,justifyContent : 'center', alignItems : 'center'}}>
                                <Text>Sign Out</Text>
                            </View>
                        </View>
                    </View>

                </Content>
            </Container>
        )
    }
}

export default AccountScreen