import React, { Component } from 'react'
import { View, Text, I18nManager, FlatList, ActivityIndicator, Animated, YellowBox, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar, Dimensions } from 'react-native'
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
import apiGetRequests from './components/apiGetRequests'
import SearchModal from './components/SearchModal'
import forgetPassword from './components/forgetPassword'
import AccountScreen from './AccountScreen'
import { Pagination } from 'react-native-snap-carousel'
import ViewPagerComponent from './components/ViewPagerComponent'

const sliderWidth = Dimensions.get('window').width
const itemWidth = (Dimensions.get('window').height) * 0.49

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            offerFalg: true,
            wasOfferFlagTrue: false,
            badgeScale: new Animated.Value(0),
            textValue: 0,
            searchText: '',
            loading: true,
            offers: [],
            slider1ActiveSlide: 1
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
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
                style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    _this.props.navigation.openDrawer()
                }}>
                <Icon name='menu' style={{ color: screenColors.mainToolBarTextColor }} />
            </Button>
        ),
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <Button transparent

                    style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        _this.props.navigation.navigate('SearchModal')
                    }}>
                    <Icon name='search' style={{ color: screenColors.mainToolBarTextColor }} />

                </Button>
                <Button transparent

                    style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        _this.props.navigation.navigate('CartScreen')
                    }}>
                    <Icon name='cart' style={{ color: screenColors.mainToolBarTextColor }} />

                </Button>
            </View>
        )
    }

    componentDidMount() {

        _this = this
        apiGetRequests.getRequests('getCatagories').then((res) => {
            this.setState({
                data: res.cats,
                loading: false
            })

        })
        apiGetRequests.getRequests('getOffers').then((res) => {
            this.setState({
                offers: res.OfferProducts,
                offerFalg: res.status === 1 ? true : false
            })

        })

    }

    onNavigate(context, params) {
        context.props.navigation.navigate('CatagoryScreen', params)
    }

    renderOffer(offerFalg) {
        if (offerFalg) {
            return (
                <View style={{ marginTop: 10 }}>
                    <ViewPagerComponent
                        renderItem={this._renderItem}
                        offers={this.state.offers}
                        slider1ActiveSlide={(index) => this.setState({ slider1ActiveSlide: index })}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                    <Pagination
                        dotsLength={this.state.offers.length}
                        activeDotIndex={this.state.slider1ActiveSlide}
                        dotColor={'orange'}
                        dotStyle={styles.dotStyle}
                        containerStyle={styles.paginationContainerStyle}
                        inactiveDotColor={'white'}
                        inactiveDotOpacity={1}
                        inactiveDotStyle={styles.inactiveDotStyle}
                        inactiveDotScale={1}
                        carouselRef={this._carousel}
                        tappableDots={!!this._carousel} />
                </View>
            )
        }
    }
    _renderItem({ item }) {
        return (
            <ImageBackground style={styles.offerItemStyle}
                source={{ uri: item.image }}            >
            </ImageBackground>
        );
    }
    search(searchText) {
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
                return (I18nManager.isRTL ? data.name_ar : data.name_en).toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
            }
        )
        return (

            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#EF9267"
                    hidden={false} />
                <TouchableOpacity
                    onPress={() => {
                        navigate('SearchModal')
                    }}>
                </TouchableOpacity>
                {this.state.loading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={screenColors.mainToolBarColor} />
                    </View>
                    :
                    <Content>
                        {this.renderOffer(this.state.offerFalg)}
                        <FlatList
                            horizontal={false}
                            numColumns={colNum}
                            keyExtractor={item => item.id}
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
                                        onPress={() => {
                                            navigate('CatagoryScreen', { id: item.id, name: I18nManager.isRTL ? item.name_ar : item.name_en })
                                        }}>
                                        <Image
                                            style={{ height: '80%', width: '100%', margin: 3 }}
                                            source={{ uri: item.Image_en }}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.textStyle}>{I18nManager.isRTL ? item.name_ar : item.name_en}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </Content>}
            </Container>
        )
    }
}

const StackNavigation = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    CatagoryScreen: { screen: CatagoryScreen },
    ItemScreen: { screen: ItemScreen },
    CartScreen: { screen: CartScreen },
    CheckoutScreen: { screen: CheckoutScreen },
    SearchModal: { screen: SearchModal },
    forgetPassword: { screen: forgetPassword },
    AccountScreen: { screen: AccountScreen }
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
        marginBottom: 10,
        marginTop: 10
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 30,
        borderColor: 'orange',
    },
    inactiveDotStyle: {
        borderColor: 'orange',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 30,
    },
    paginationContainerStyle: {
        marginTop: 0
    },
    offerItemStyle: {
        height: ScreenSize.width * 0.5,
        elevation: 25,
        borderColor: 'orange',
        borderWidth: 0.5,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.4
    }
})

export default StackNavigation