import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import ScreenSize from './ScreenSize'

class CatagoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Sport',
                    url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' }
                },
                {
                    name: 'Male',
                    url: { uri: 'http://www.sportzone.sk/img/cache/public/f1-w800-h800-r-b255-255-255-o-f1/photos/57/566/56517.jpg' }
                },
                {
                    name: 'Female',
                    url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' }
                },
                {
                    name: 'Accessoies',
                    url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' }
                }]
        }
    }

    static navigationOptions = ({ navigation }) => ({

        title: `${navigation.state.params.name}`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },

    })

    render() {
        const { params } = this.props.navigation.state
        const { navigate } = this.props.navigation
        let width = ScreenSize.width
        let height = ScreenSize.height
        if (width > height) {
            //tablet
            width = height * 0.37

        } else {
            //normal phone
            width = width * 0.37
        }
        return (
            <ScrollView>
                <View style={{
                    borderWidth: 1, borderColor: '#FFFFFF', margin: 5, backgroundColor: '#FFFFFF',
                    elevation: 5,
                }}>
                    <Image
                        style={{ height: ScreenSize.height * 0.4, width: ScreenSize.width }}
                        source={{ uri: 'https://wallpaperscraft.com/image/adidas_sport_style_clothes_42702_2048x1152.jpg' }}
                        resizeMode="stretch"
                    />
                </View>
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={item => item.name}
                    contentContainerStyle={{
                        justifyContent: 'center',
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
                                onPress={() => alert('hello')}>
                                <Image
                                    style={{ height: '80%', width: '100%', margin: 3 }}
                                    source={item.url}
                                    resizeMode="contain"
                                />
                                <Text style={styles.textStyle}>{item.name}</Text>
                                <Text style={{ fontWeight: "bold", color: '#000', fontSize: 20 }}>50 JD</Text>
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
    }
})

export default CatagoryScreen