import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity, AsyncStorage, FlatList, Image, ScrollView, Animated, TouchableHighlight } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import ScreenSize from './ScreenSize';
import { SafeAreaView } from 'react-navigation'


class CartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [{
                name: 'Grssay Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 50
            },
            {
                name: 'Gray Jassscket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 50
            },
            {
                name: 'Gray Jadddcket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 51
            },
            {
                name: 'Gray Jacffffket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 50
            },
            {
                name: 'Gray Jaccccket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 50
            },
            {
                name: 'Gray Jacrrket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 50
            },
            ],
            subTotal: 0,
            cartItems: ''
        }
    }

    async getCartItems() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('cartItems'))
            if (value !== null) {
                this.setState({ cartItems: value });
            }
        } catch (error) {
            alert("Error retrieving data cart screen" + error);
        }
    }
    componentDidMount() {
        this.getCartItems()
    }

    onIncPressed(i) {
        let CopiedState = [...this.state.cartItems]
        let newQuantity = ++this.state.cartItems[i].quantity
        CopiedState[i].quantity = newQuantity
        this.setState({
            cartItems: CopiedState
        })
    }
    onDecPressed(i) {
        if (this.state.cartItems[i].quantity !== 1) {
            let CopiedState = [...this.state.cartItems]
            let newQuantity = --this.state.cartItems[i].quantity
            CopiedState[i].quantity = newQuantity
            this.setState({
                cartItems: CopiedState
            })
        }
    }

    renderList() {
        if ((this.state.cartItems).length !== 0) {
            return (
                <FlatList
                    keyExtractor={item => item.name}
                    contentContainerStyle={{
                        flex: 1.7
                    }}
                    data={this.state.cartItems}
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
                                        }}
                                        onPress={() => {
                                            //here is not done
                                            let restOfOrders = this.state.cartItems
                                            restOfOrders.splice(index, 1)
                                            this.setState({
                                                cartItems: restOfOrders
                                            })
                                            AsyncStorage.setItem('cartItems', JSON.stringify(this.state.cartItems))

                                        }}>
                                        <Icon name='ios-trash-outline' style={{ color: '#363A57' }} />
                                        <Text style={{ margin: 5 }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: '#363A57' }}>{item.name}</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#363A57' }}>{item.price}</Text>
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
            )
        } else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: '10%', fontSize: 25 }}>you have no items yet</Text>
                </View>
            )
        }
    }
    static navigationOptions = {
        title: `Cart`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
    }
    subTotalCounter() {
        let total = 0
        if (this.state.cartItems !== '') {
            this.state.cartItems.map((obj) => {
                total += (obj.price) * obj.quantity
            })
        }
        return <Text style={{ color: '#000000', fontWeight: 'bold', margin: 5, }}>{total} JD</Text>

    }
    render() {
        const { navigate } = this.props.navigation
        return (

            <View style={{ flex: 2 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4d537c"
                    hidden={false} />
                <ScrollView style={{ flex: 1.8 }}>
                    {this.renderList()}
                </ScrollView>

                <View style={
                    {
                        backgroundColor: '#363A57',
                        borderColor: '#363A57',
                        borderWidth: 1,
                        flex: 0.2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',

                    }
                }>
                    <View style={{
                        backgroundColor: '#dcdde1',
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            width: '50%',

                        }}>
                            <Text style={{ color: '#000000', margin: 5, fontWeight: 'bold' }}>SUBTOTAL</Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            width: '50%',
                        }}>
                            {this.subTotalCounter()}
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }} onPress={() => {
                        navigate('CheckoutScreen')
                    }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

export default CartScreen