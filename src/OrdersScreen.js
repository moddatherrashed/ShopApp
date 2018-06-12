import React, { Component } from 'react'
import { View, Text, StatusBar, I18nManager, AsyncStorage, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { createStackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'
import apiGetRequests from './components/apiGetRequests'

class OrdersScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }

    static navigationOptions = {
        headerTitle: I18nManager.isRTL ? strings.ar.orders : strings.en.orders,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    _this.props.navigation.openDrawer()
                }}>
                <Icon name='menu' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),

    }
    async getUserLoggedIn() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                return value
            } else {
                return null
            }
        } catch (error) {
            alert("get  " + error)
        }
    }
    componentDidMount() {
        let id = this.getUserLoggedIn();
        if (id !== null) {
            apiGetRequests.getRequests('getProducts', id).then((res) => {
                this.setState({
                    orders: res.ordersHistory
                })
            })
        }
    }

    renderList() {
        if (JSON.stringify(this.state.orders) === JSON.stringify([])) {
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
                        <TouchableOpacity style={{
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
                                    <Text style={{ color: styleColors.ordersScreenTextColor }}>{I18nManager.isRTL ? strings.ar.name : strings.en.name}: {item.name}</Text>
                                    <Text style={{ color: styleColors.ordersScreenTextColor }}>{I18nManager.isRTL ? strings.ar.orderderIn : strings.en.orderderIn}: {item.date}</Text>
                                    <Text style={{ fontWeight: 'bold', color: styleColors.ordersScreenTextColor }}> 50 JD</Text>
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
                                        <Icon name='ios-close' style={{ color: styleColors.barsAndButtonsColor, padding: 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            )
        } else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: '10%', fontSize: 25, color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.youHaveNoOrdersYet : strings.en.youHaveNoOrdersYet}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                <Content>
                    <View>
                        {this.renderList()}
                    </View>
                </Content>
            </Container>
        )
    }
}
const OrdersStackNavigator = createStackNavigator({
    OrdersScreen: { screen: OrdersScreen },
})
export default OrdersStackNavigator