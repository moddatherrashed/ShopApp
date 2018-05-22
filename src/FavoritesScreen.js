import React, { Component } from 'react'
import { View, Text, I18nManager, StatusBar, TouchableOpacity, AsyncStorage, FlatList, Image } from 'react-native'
import { Container, Content, Icon, Title, Header, Left, Body, Button } from 'native-base'
import { createStackNavigator } from 'react-navigation'
import ScreenSize from './ScreenSize';
import ItemScreen from './ItemScreen'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'

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
            }],
            fav: ''
        }
    }
    async getKey() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('fav'))
            if (value !== null)
                this.setState({ fav: value });
        } catch (error) {
            alert("Error retrieving data" + error);
        }
    }
    componentDidMount() {
        this.getKey()
    }
    static navigationOptions = {
        title: I18nManager.isRTL ? strings.ar.favorites : strings.en.favorites,
        headerTintColor: screenColors.mainToolBarTextColor,
        headerStyle: {
            backgroundColor: screenColors.mainToolBarColor,
        },
        headerLeft: (
            <Button transparent
                onPress={() => {
                    _this.props.navigation.openDrawer()
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
        )
    }

    renderList() {
        if ((this.state.fav).length > 0) {
            return (
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    data={this.state.fav}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#FFFFFF',
                            elevation: 15,
                            width: '100%',
                            borderBottomWidth: 0.5,
                            borderBottomColor: 'gray'
                        }}
                            onPress={() => {
                                this.props.navigation.navigate('ItemScreen', item)
                            }}>
                            <View style={{ flexDirection: 'row', flex: 6 }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        style={{ height: 100, width: 100, margin: 5 }}
                                        source={{ uri: item.url }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: styleColors.favoriteScreenItemsTextColor }}>{I18nManager.isRTL ? strings.ar.name : strings.en.name}: {item.name}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            let restOfOrders = this.state.fav
                                            restOfOrders.splice(index, 1)
                                            this.setState({
                                                fav: restOfOrders
                                            })
                                            AsyncStorage.setItem('fav', JSON.stringify(this.state.fav))

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
                    <Text style={{ fontWeight: 'bold', marginTop: '10%', fontSize: 25, color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.youHaveNoFavoriteItems : strings.en.youHaveNoFavoriteItems}</Text>
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

const FavoritesStackNavigator = createStackNavigator({
    FavoritesScreen: { screen: FavoritesScreen },
    ItemScreen: { screen: ItemScreen }
})

export default FavoritesStackNavigator