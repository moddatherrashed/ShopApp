import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize';


class FavoritesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [{
                name: '11111',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' }
            },
            {
                name: '22222',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
            },
            {
                name: '33333',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
            },
            {
                name: '444444',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' }
            },
            {
                name: '5555555',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' }
            },
            {
                name: 'Adidas Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
            },
            {
                name: 'Water Prof Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
            },
            {
                name: 'White T-shirt',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' }
            }]
        }
    }

    static navigationOptions = {
        title: `Favorites Items`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#363A57',
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('DrawerOpen')
                }}>
                <Icon name='menu' style={{ color: '#FFFFFF' }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: '#FFFFFF' }} />

            </Button>
        ),
        drawerIcon: (
            <Icon name='star' style={{ color: '#FFFFFF' }} />
        )
    }

    renderList() {
        if (this.state.orders.length !== 0) {
            return (
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
                                    <Text style={{ fontWeight: 'bold', color: '#363A57' }}>50 JD</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            let restOfOrders = this.state.orders
                                            restOfOrders.splice(index, 1)
                                            this.setState({
                                                orders: restOfOrders
                                            })
                                        }}>
                                        <Icon name='ios-close' style={{ color: '#363A57', padding: 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                />
            )
        } else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: '10%', fontSize: 25 }}>you have no favorites yet</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <View>
                        {this.renderList()}
                    </View>
                </Content>
            </Container>
        )
    }
}

const FavoritesStackNavigator = StackNavigator({
    FavoritesScreen: { screen: FavoritesScreen }
})

export default FavoritesStackNavigator