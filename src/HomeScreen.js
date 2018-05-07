import React, { Component } from 'react'
import { View, Text, I18nManager, FlatList, Animated, YellowBox, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import { Content, Container, Body, Button, Icon, Header, Left, Right, Title } from 'native-base';
import ScreenSize from './ScreenSize'
import SearchBar from './components/SearchBar'
import SearchHeader from 'react-native-search-header'
import { createStackNavigator } from 'react-navigation'
import CatagoryScreen from './CatagoryScreen'
import ItemScreen from './ItemScreen'
import Badge from './components/Badge'
import Modal from 'react-native-modal'
import CartScreen from './CartScreen'
import CheckoutScreen from './CheckoutScreen'
import OrdersScreen from './OrdersScreen'
import screenColors from './components/screenColors'
import styleColors from './components/screenColors';
import strings from './components/strings'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Vegetables',
                    url: { uri: 'https://www.mynutritionclinic.com.au/wp-content/uploads/2018/01/fruits-vegetables-rainbow-hero-getty.jpg' }
                },
                {
                    name: 'Meat',
                    url: { uri: 'https://www.argiro.gr/wp-content/uploads/2017/05/fresh-meat.jpg' }
                },
                {
                    name: 'Cleaning products',
                    url: { uri: 'https://cdn.shopify.com/s/files/1/2102/8057/collections/cleaning-products-stock-today-160307-tease_4097ed238bc46047a15831a86dd47267.jpg?v=1501687198' }
                },
                {
                    name: 'Spices',
                    url: { uri: 'http://www.readersdigest.ca/wp-content/uploads/2011/11/use-spices-to-scent-home.jpg' }
                }],
            offerFalg: true,
            wasOfferFlagTrue: false,
            badgeScale: new Animated.Value(0),
            textValue: 0,
            searchText: ''
        }
        //YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

    }
    animateBadge() {
        const textCounter = ++this.state.textValue
        this.state.badgeScale.setValue(0)
        this.setState({ textValue: textCounter })
        Animated.timing(this.state.badgeScale, {
            toValue: 1,
            duration: 500
        }).start()
    }
    static navigationOptions = {
        title: I18nManager.isRTL ? strings.ar.categories : strings.en.categories,
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
                    <ImageBackground
                        style={{
                            height: ScreenSize.height * 0.3,
                            borderRadius: 5,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        source={{ uri: 'http://www.readersdigest.ca/wp-content/uploads/2011/11/use-spices-to-scent-home.jpg' }}
                        resizeMode="cover"
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFFFFF', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 7, margin: 15, borderRadius: 3 }}>Offer Title</Text>
                    </ImageBackground>
                </View>
            )
        }
    }
    search(searchText) {
        this.setState({ searchText: searchText })
        if (this.state.offerFalg) {
            this.setState({
                offerFalg: false,
                wasOfferFlagTrue: true
            })

        }
        if (searchText === '' && this.state.wasOfferFlagTrue === true) {
            this.setState({
                offerFalg: true
            })
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
        let filterSearch = this.state.data.filter(
            (data) => {
                return data.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1

            }
        )
        return (

            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                <SearchBar
                    onChangeText={(searchText) => this.search(searchText)}
                />
                <Content>
                    {this.renderOffer(this.state.offerFalg)}
                    <FlatList
                        contentContainerStyle={{ margin: 2 }}
                        horizontal={false}
                        numColumns={colNum}
                        keyExtractor={item => item.name}
                        contentContainerStyle={styles.contentContainerStyle}
                        data={filterSearch}
                        renderItem={({ item, index }) =>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        margin: 0.5,
                                        height: width * 1.4,
                                        width: width * 1.28,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#FFFFFF',
                                        borderWidth: 1,
                                        elevation: 15,
                                        backgroundColor: '#FFFFFF'
                                    }}
                                    onPress={() => navigate('CatagoryScreen', { name: item.name })}>
                                    <Image
                                        style={{ height: '80%', width: '100%', margin: 3 }}
                                        source={item.url}

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

const StackNavigation = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    CatagoryScreen: { screen: CatagoryScreen },
    ItemScreen: { screen: ItemScreen },
    CartScreen: { screen: CartScreen },
    CheckoutScreen: { screen: CheckoutScreen }
})

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: styleColors.homePageTextColors,
        fontWeight: 'bold',
        fontSize: 18
    },
    ButtonStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        backgroundColor: '#FFFFFF'
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default StackNavigation