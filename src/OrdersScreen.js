import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import ScreenSize from './ScreenSize';


class AccountScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [{
                name: 'Gray Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'Adidas Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'Water Prof Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'White T-shirt',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'Gray Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'Adidas Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'Water Prof Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: 'White T-shirt',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
                date: '02-06-2018'
            }]
        }
    }

    static navigationOptions = {
        drawerIcon: (
            <Icon name='list' style={{ color: '#FFFFFF' }} />
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
                        <Title>All orders</Title>
                    </Body>
                </Header>
                <Content>
                    <View>
                        <FlatList
                            contentContainerStyle={{ margin: 2 }}
                            keyExtractor={item => item.name}
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            data={this.state.orders}
                            renderItem={({ item, index }) =>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#FFFFFF',
                                    elevation: 15,
                                    width: '100%',
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: 'gray'
                                }}>
                                    <View style={{ flexDirection: 'row', flex: 6 }}>
                                        <View style={{ flex: 2 }}>
                                            <Image
                                                style={{ height: 100, width: 100, margin: 5 }}
                                                source={item.url}
                                                resizeMode='contain'
                                            />
                                        </View>
                                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#363A57' }}>name: {item.name}</Text>
                                            <Text style={{ color: '#363A57' }}>ordered in: {item.date}</Text>
                                            <Text style={{ fontWeight: 'bold', color: '#363A57' }}>50 JD</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <Icon name='ios-close' style={{ color: '#363A57', padding: 10 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}

export default AccountScreen