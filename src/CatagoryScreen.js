import React, { Component } from 'react'
import { View, Text, AsyncStorage, FlatList, ActivityIndicator, ImageBackground, I18nManager, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Icon, Button } from 'native-base'
import ScreenSize from './ScreenSize'
import ItemScreen from './ItemScreen';
import SearchBar from './components/SearchBar'
import styleColors from './components/screenColors'
import apiGetRequests from './components/apiGetRequests'
import strings from './components/strings'
import Modal from "react-native-modal"

class CatagoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            searchText: '',
            loading: true,
            dialgoBox: false
        }
    }
    async setCartItems(value) {
        try {
            const retrievedItem = await AsyncStorage.getItem('cartItems');
            if (retrievedItem === null) {
                await AsyncStorage.setItem('cartItems', JSON.stringify([value]))
            } else {
                const item = JSON.parse(retrievedItem)
                item.push(value)
                await AsyncStorage.setItem('cartItems', JSON.stringify(item))
            }

        } catch (error) {
            alert("Error saving data ===" + error)
        }
    }
    componentDidMount() {
        apiGetRequests.getRequests('getProducts', this.props.navigation.state.params.id).then((res) => {
            this.setState({
                data: res.products,
                loading: false
            })
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
        headerTintColor: styleColors.toolBarTextColor,
        headerStyle: {
            backgroundColor: styleColors.toolBarColor,
        },

    })
    search(searchText) {
        this.setState({ searchText: searchText })
    }

    renderProductsList(filterSearch, width, navigate) {
        if (JSON.stringify(this.state.data) === JSON.stringify([])) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: '10%', fontSize: 25, color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.ThereIsNoProductsAvailable : strings.en.ThereIsNoProductsAvailable}</Text>
                </View>
            )
        } else {
            return (
                <FlatList
                    horizontal={false}
                    numColumns={colNum}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.contentStyle}
                    data={filterSearch}
                    renderItem={({ item, index }) =>
                        <View>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    height: width * 1.4,
                                    width: width * 1.28,
                                    margin: 0.2,
                                    padding: 8,
                                    elevation: 15,
                                    backgroundColor: '#FFFFFF'
                                }}
                                onPress={() => navigate("ItemScreen", { id: item.id, name: I18nManager.isRTL ? item.full_name_ar : item.full_name_en, url: item.image, quantity: "1", price: item.price, description: I18nManager.isRTL ? item.description_ar : item.description_en })}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: item.image }}
                                    resizeMode="contain"
                                />
                                <Text style={styles.textStyle}>{I18nManager.isRTL ? item.name_ar : item.name_en}</Text>
                                <Text style={styles.priceTextStyle}>{item.price} {I18nManager.isRTL ? "دينار" : "JD"}</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setCartItems({ name: I18nManager.isRTL ? item.name_ar : item.name_en, url: item.image, quantity: "1", price: item.price, description: I18nManager.isRTL ? item.description_ar : item.description_en })
                                            this.setState({ dialgoBox: true })
                                        }}>
                                        <Icon name='ios-add' style={{ fontWeight: 'bold', color: styleColors.barsAndButtonsColor }} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <Modal
                                isVisible={this.state.dialgoBox}>
                                <View style={{ height: ScreenSize.height * 0.4, backgroundColor: '#FFFFFF', borderRadius: 10, justifyContent: 'space-around' }}>
                                    <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#363A57', padding: ScreenSize.height * 0.03, color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.awesomeChoise : strings.en.awesomeChoise}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#363A57', padding: ScreenSize.height * 0.03, color: styleColors.barsAndButtonsColor }}>{I18nManager.isRTL ? strings.ar.WhatDoYouWantToDoNow : strings.en.WhatDoYouWantToDoNow}</Text>
                                    </View>
                                    <View style={{ paddingTop: ScreenSize.height * 0.1, height: ScreenSize.height * 0.2, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                        <Button style={{
                                            width: '40%',
                                            backgroundColor: styleColors.barsAndButtonsColor,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginLeft: '5%',
                                            borderColor: '#FFFFFF',
                                            borderRadius: 10,

                                        }}
                                            onPress={() => {
                                                this.setState({ dialgoBox: false })
                                            }}>
                                            <Text style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'bold'
                                            }} >{I18nManager.isRTL ? strings.ar.continueShopping : strings.en.continueShopping}</Text>
                                        </Button>
                                        <Button style={{
                                            backgroundColor: styleColors.barsAndButtonsColor,
                                            width: '40%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: '5%',
                                            borderColor: '#FFFFFF',
                                            borderRadius: 10
                                        }}
                                            onPress={() => {
                                                this.setState({ dialgoBox: false })
                                                navigate('CartScreen')
                                            }}>
                                            <Text style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'bold'
                                            }} >{I18nManager.isRTL ? strings.ar.viewCart : strings.en.viewCart}</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    }
                />
            )
        }
    }

    render() {
        const { params } = this.props.navigation.state
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
                if (data.name_ar !== null || data.name_en !== null)
                    return (I18nManager.isRTL ? data.name_ar : data.name_en).toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
            }
        )
        return (
            <ScrollView>
                <SearchBar
                    onChangeText={(searchText) => this.search(searchText)}
                />
                {
                    this.state.loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={styleColors.mainToolBarColor} />
                        </View>
                        :

                        this.renderProductsList(filterSearch, width, navigate)
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: styleColors.catagoryScreenItemsNameColor
    },
    priceTextStyle: {
        fontWeight: "bold",
        color: styleColors.catagoryScreenPriceTextColor,
        textAlign: 'center',
        fontSize: 20
    },
    imageStyle: {
        height: '60%',
        width: '100%',
        margin: 3
    },
    contentStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})

export default CatagoryScreen