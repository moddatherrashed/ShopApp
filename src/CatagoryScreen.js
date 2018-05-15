import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, ImageBackground, I18nManager, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import ScreenSize from './ScreenSize'
import ItemScreen from './ItemScreen';
import SearchBar from './components/SearchBar'
import styleColors from './components/screenColors'
import apiGetRequests from './components/apiGetRequests'
import strings from './components/strings'

class CatagoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            searchText: '',
            loading: true
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

    renderProductsList(filterSearch, width,navigate) {
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
                    keyExtractor={item => item.s_name}
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
                                onPress={() => navigate("ItemScreen", { name: item.f_name, url: "http://cart.jamrahgroup.com/storage/" + item.image, quantity: item.quantity, price: item.price, description: item.description })}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: "http://cart.jamrahgroup.com/storage/" + item.image }}
                                    resizeMode="contain"
                                />
                                <Text style={styles.textStyle}>{item.s_name}</Text>
                                <Text style={styles.priceTextStyle}>{item.price} {I18nManager.isRTL ? "دينار" : "JD"}</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity>
                                        <Icon name='ios-add' style={{ fontWeight: 'bold', color: styleColors.barsAndButtonsColor }} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>

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
                return data.s_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1

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

                        this.renderProductsList(filterSearch, width,navigate)
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