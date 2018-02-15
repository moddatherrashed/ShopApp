import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Icon, Button } from 'native-base'
import ScreenSize from './ScreenSize'
class ItemScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

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
        return (
            <View style={{ flex: 2 }}>
                <ScrollView style={{ flex: 1.9 }}>
                    <View style={{ margin: 5, backgroundColor: '#FFFFFF', elevation: 15, marginBottom: 10, borderRadius: 5 }}>
                        <Image
                            style={{ height: ScreenSize.height * 0.6, width: '100%', flex: 0.9, }}
                            source={params.url}
                            resizeMode='contain'
                        />
                        <View style={{ flexDirection: 'row', flex: 3, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ padding: 5, flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{params.name}</Text>
                                <Text style={{ padding: 10, textAlign: 'left', flex: 1, fontWeight: 'bold', fontSize: 20 }}>50 JD</Text>
                            </View>
                            <Icon name='ios-star-outline' style={{ color: 'gray', padding: 10, flex: 1, textAlign: 'right' }} />
                        </View>
                    </View>
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>Descrption</Text>
                    <View style={{ backgroundColor: '#FFFFFF', elevation: 15, margin: 5, borderRadius: 5 }}>
                        <Text style={{ padding: 20, fontSize: 15 }}>
                            asdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwf
                        </Text>
                    </View>
                </ScrollView>
                <View style={{ flex: 0.1, backgroundColor: '#323232'  }}>
                    <Button full style={{ backgroundColor: '#363A57', height : '100%' }}>
                        <Text style={{ color: '#FFFFFF' }} >Add To Cart</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default ItemScreen