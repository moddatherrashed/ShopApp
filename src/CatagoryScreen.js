import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import ScreenSize from './ScreenSize'
import ItemScreen from './ItemScreen';
import SearchBar from './components/SearchBar'
import styleColors from './components/screenColors'

class CatagoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                name: 'Grssay Jacket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 15
            },
            {
                name: 'Gray Jassscket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 20
            },
            {
                name: 'Gray Jadddcket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 25
            },
            {
                name: 'Gray Jacffffket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 10
            },
            {
                name: 'Gray Jaccccket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 11
            },
            {
                name: 'Gray Jacrrket',
                url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
                quantity: 1,
                price: 11.5
            },
            ],
            searchText: ''
        }
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
                return data.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1

            }
        )
        return (
            <ScrollView>
                <SearchBar
                    onChangeText={(searchText) => this.search(searchText)}
                />
                <FlatList
                    horizontal={false}
                    numColumns={colNum}
                    keyExtractor={item => item.name}
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
                                    padding: 3,
                                    elevation: 15,
                                    backgroundColor: '#FFFFFF'
                                }}
                                onPress={() => navigate("ItemScreen", { name: item.name, url: item.url, quantity: item.quantity, price: item.price })}>
                                <Image
                                    style={styles.imageStyle}
                                    source={item.url}
                                    resizeMode="contain"
                                />
                                <Text style={styles.textStyle}>{item.name}</Text>
                                <Text style={styles.priceTextStyle}>{item.price} JD</Text>
                                <View style={{ alignItems: 'flex-end', padding: 5 }}>
                                    <TouchableOpacity>
                                        <Icon name='ios-add' style={{ fontWeight: 'bold', color: styleColors.barsAndButtonsColor }} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>

                        </View>
                    }
                />
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