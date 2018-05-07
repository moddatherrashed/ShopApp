import React, { Component } from 'react'
import { View, Text, StatusBar, I18nManager, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'
class OrdersScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [{
                name: '11111',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                date: '02-06-2018'
            },
            {
                name: '22222',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: '33333',
                url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
                date: '02-06-2018'
            },
            {
                name: '444444',
                url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
                date: '02-06-2018'
            },
            {
                name: '5555555',
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
        headerTitle: I18nManager.isRTL ? strings.ar.orders : strings.en.orders,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('DrawerOpen')
                }}>
                <Icon name='menu' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        headerRight: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.navigate('CartScreen')
                }}>
                <Icon name='cart' style={{ color: screenColors.mainToolBarTextColor }} />

            </Button>
        ),
        
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
const OrdersStackNavigator = StackNavigator({
    OrdersScreen: { screen: OrdersScreen },
})
export default OrdersStackNavigator