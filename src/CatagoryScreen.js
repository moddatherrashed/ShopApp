import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import ScreenSize from './ScreenSize'
import ItemScreen from './ItemScreen';
import SearchBar from './components/SearchBar'
class CatagoryScreen extends Component {
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
                },
                {
                    name: 'Adidas sss',
                    url: { uri: 'http://www.sportzone.sk/img/cache/public/f1-w800-h800-r-b255-255-255-o-f1/photos/57/566/56517.jpg' }
                },
                {
                    name: 'Water Prof aaaa',
                    url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
                },
                {
                    name: 'White T-eeee',
                    url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' }
                }],
            searchText: ''
        }
    }

    static navigationOptions = ({ navigation }) => ({

        title: `${navigation.state.params.name}`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
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
                                    height: width * 2,
                                    width: width * 1.28,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    margin: 1,
                                    padding: 2,
                                    elevation: 15,
                                    borderWidth: 0.5,
                                    backgroundColor: '#FFFFFF'
                                }}
                                onPress={() => navigate("ItemScreen", { name: item.name, url: item.url })}>
                                <Image
                                    style={styles.imageStyle}
                                    source={item.url}
                                    resizeMode="contain"
                                />
                                <Text style={styles.textStyle}>{item.name}</Text>
                                <Text style={styles.priceTextStyle}>50 JD</Text>
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
        color: '#46454d'
    },
    priceTextStyle: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 20
    },
    imageStyle: {
        height: '80%',
        width: '100%',
        margin: 3
    },
    contentStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})

export default CatagoryScreen