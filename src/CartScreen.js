import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import ScreenSize from './ScreenSize';


class CartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [{
                name: 'Gray Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1
            },
            {
                name: 'Adidas Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                quantity: 1
            },
            {
                name: 'Water Prof Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                quantity: 1
            },
            {
                name: 'White T-shirt',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
                quantity: 1
            },
            {
                name: 'Gray Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1
            },
            {
                name: 'Adidas Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                quantity: 1
            },
            {
                name: 'Water Prof Jacket',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                quantity: 1
            },
            {
                name: 'White T-shirt',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
                quantity: 1
            }],
            numberOfItems: 1
        }
    }

    onIncPressed(i) {
        let CopiedState = [...this.state.orders]
        let newQuantity = ++this.state.orders[i].quantity
        CopiedState[i].quantity = newQuantity
        this.setState({
            orders: CopiedState
        })
    }
    onDecPressed(i) {
        if (this.state.orders[i].quantity !== 1) {
            let CopiedState = [...this.state.orders]
            let newQuantity = --this.state.orders[i].quantity
            CopiedState[i].quantity = newQuantity
            this.setState({
                orders: CopiedState
            })
        }
    }
    static navigationOptions = {
        title: `Cart`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
    }
    render() {
        return (
            <View>
                <StatusBar
                    hidden
                />
                <View>
                    <View style={{ marginBottom: 100 }}>
                        <FlatList
                            keyExtractor={item => item.name}
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',

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
                                        <View style={{ flex: 2, alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 100, width: 100, margin: 5 }}
                                                source={item.url}
                                                resizeMode='contain'
                                            />
                                            <TouchableOpacity style={
                                                {
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderWidth: 0.5,
                                                    borderColor: 'gray',
                                                    margin: 5,
                                                    padding: 3
                                                }}>
                                                <Icon name='ios-trash-outline' style={{ color: '#363A57' }} />
                                                <Text style={{ margin: 5 }}>Remove</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#363A57' }}>{item.name}</Text>
                                            <Text style={{ fontWeight: 'bold', color: '#363A57' }}>50 JD</Text>
                                            <Text>Size : M</Text>
                                        </View>
                                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>Number of Items</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this.onDecPressed(index)
                                                    }}>
                                                    <Icon name='ios-arrow-dropleft-circle-outline' style={{ color: '#363A57' }} />
                                                </TouchableOpacity>
                                                <Text style={{ padding: 10 }}>{item.quantity}</Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this.onIncPressed(index)
                                                    }}>
                                                    <Icon name='ios-arrow-dropright-circle-outline' style={{ color: '#363A57' }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View>
                        <View style={
                            {
                                backgroundColor: '#363A57',
                                borderColor: '#363A57',
                                borderWidth: 1,
                                height: 100,
                                flex: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                left: 0,
                                shadowColor: "#000000",
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                shadowOffset: {
                                    height: 1,
                                    width: 0
                                }
                            }
                        }>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#dcdde1',
                                width: '100%',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 0.5,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    margin: 10
                                }}>
                                    <Text style={{ color: '#000000', fontWeight: 'bold' }}>SUBTOTAL</Text>
                                </View>
                                <View style={{
                                    flex: 0.5,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    margin: 10
                                }}>
                                    <Text style={{ color: '#000000', fontWeight: 'bold' }}>0 JD</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1
                            }}>
                                <Text style={{ fontSize: 15, color: 'white' }}>CHECKOUT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default CartScreen