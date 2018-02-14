import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'


class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'sport' },
                { name: 'male' },
                { name: 'female' },
                { name: 'accessoies' }]
        }
    }
    render() {
        return (
            <View>
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
                        <TouchableOpacity 
                        style={styles.containerStyle}
                        onPress={() => alert(index + " " + item.name)}>
                            <View>

                                <Text style={styles.textStyle}>{item.name}</Text>

                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center'
    },
    containerStyle: {
        flex: 1,
        margin: 5,
        height: 200,
        width: 200,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 120,
        borderColor: '#03A9F4',
        borderWidth: 2
    }
})

export default HomeScreen