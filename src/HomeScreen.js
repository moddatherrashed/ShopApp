import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import { Content, Container, Body, Button, Icon, Badge } from 'native-base';
import ScreenSize from './ScreenSize'
import SearchBar from './components/SearchBar'
import SearchHeader from 'react-native-search-header'
import { StackNavigator } from 'react-navigation'
import CatagoryScreen from './CatagoryScreen'
import ItemScreen from './ItemScreen'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Gray Jacket',
                    url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' }
                },
                {
                    name: 'Adidas Jacket',
                    url: { uri: 'http://www.sportzone.sk/img/cache/public/f1-w800-h800-r-b255-255-255-o-f1/photos/57/566/56517.jpg' }
                },
                {
                    name: 'Water Prof Jacket',
                    url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
                },
                {
                    name: 'White T-shirt',
                    url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' }
                }],
            offerFalg: true
        }
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name='home' style={{ color: '#FFFFFF' }} />
        ),
        title: `Catagories`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#363A57',
        },
        headerRight: <Button transparent
            onPress={() => _this.searchHeader.show()}>
            <Icon name='cart' style={{ color: '#FFFFFF' }} />
        </Button>,
        headerLeft: <Button transparent
            onPress={() => {
                _this.props.navigation.navigate('DrawerOpen')
            }}>
            <Icon name='menu' style={{ color: '#FFFFFF' }} />
        </Button>
    }

    componentDidMount() {
        _this = this

    }
    onNavigate(context, params) {
        context.props.navigation.navigate('CatagoryScreen', params)
    }
    renderOffer(offerFalg) {
        if (offerFalg) {
            return (
                <View style={{
                    borderWidth: 1, borderColor: '#FFFFFF', margin: 5, backgroundColor: '#FFFFFF',
                    elevation: 15, borderRadius: 5
                }}>
                    <Image
                        style={{ height: ScreenSize.height * 0.4, borderRadius: 5, width: '100%' }}
                        source={{ uri: 'http://s1.picswalls.com/wallpapers/2014/07/24/sports-desktop-background_113128110_89.jpg' }}
                        resizeMode="cover"
                    />
                </View>
            )
        }
    }
    render() {
        const { navigate } = this.props.navigation
        let width = ScreenSize.width
        let height = ScreenSize.height
        if (width > height) {
            //tablet
            width = height * 0.37
            colNum = 3

        } else {
            //normal phone
            width = width * 0.37
            colNum = 2
        }
        return (

            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <SearchHeader
                        ref={(searchHeader) => {
                            this.searchHeader = searchHeader;
                        }}
                        headerBgColor='#363A57'
                    />
                    {this.renderOffer(this.state.offerFalg)}
                    <FlatList
                        contentContainerStyle={{ margin: 2 }}
                        horizontal={false}
                        numColumns={colNum}
                        keyExtractor={item => item.name}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        data={this.state.data}
                        renderItem={({ item, index }) =>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        margin: 5,
                                        height: width * 2,
                                        width: width * 1.28,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#FFFFFF',
                                        borderWidth: 1,
                                        elevation: 15,
                                        backgroundColor: '#FFFFFF'
                                    }}
                                    onPress={()=> navigate('CatagoryScreen' , {name : item.name})}>
                                    <Image
                                        style={{ height: '80%', width: '100%', margin: 3 }}
                                        source={item.url}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.textStyle}>{item.name}</Text>
                                </TouchableOpacity>

                            </View>
                        }
                    />
                </Content>
            </Container>
        )
    }
}

const StackNavigation = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    CatagoryScreen: { screen: CatagoryScreen },
    ItemScreen: { screen: ItemScreen },
})

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: '#363A57',
        fontWeight: 'bold',
        fontSize: 18
    },
    ButtonStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        backgroundColor: '#FFFFFF'

    }
})

export default StackNavigation