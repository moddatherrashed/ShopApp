import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import ScreenSize from './ScreenSize'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Sport',
                    url: require('./icons/sport.png')
                },
                {
                    name: 'Male',
                    url: require('./icons/man.png')
                },
                {
                    name: 'Female',
                    url: require('./icons/women.png')
                },
                {
                    name: 'Accessoies',
                    url: require('./icons/access.png')
                }]
        }
    }

    render() {
        let width = ScreenSize.width
        let height = ScreenSize.height
        if (width > height) {
            //tablet
            width = height * 0.40

        } else {
            //normal phone
            width = width * 0.37
        }
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Catagories</Text>
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
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: ScreenSize.width * 0.5
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    margin: 5,
                                    height: width,
                                    width: width,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100,
                                    borderColor: '#FFFFFF',
                                    borderWidth: 1,
                                    backgroundColor: '#6DB0FF'
                                }}
                                onPress={() => alert(width + 'sss' + height)}>
                                <Image
                                    style={{ height: '100%', width: '100%', borderRadius: 100 }}
                                    source={item.url}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color : '#46454d'
    }
})

export default HomeScreen