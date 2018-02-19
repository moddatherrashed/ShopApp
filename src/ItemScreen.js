import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Button, Badge } from 'native-base'
import ScreenSize from './ScreenSize'
import Modal from "react-native-modal"

class ItemScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            size: 'Select Size'
        }
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    onSelectSize(sizeAttr) {
        this.setState({
            isModalVisible: false,
            size: sizeAttr
        })
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
            <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
                <ScrollView style={{ flex: 1.9 }}>
                    <View style={{ margin: 5, backgroundColor: '#FFFFFF', elevation: 15, marginBottom: 10, borderRadius: 5 }}>
                        <Image
                            style={{ height: ScreenSize.height * 0.6, width: '100%', flex: 0.9, }}
                            source={params.url}
                            resizeMode='contain'
                        />
                        <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'column', flex: 2 }}>
                                <Text style={{ padding: 5, flex: 1, textAlign: 'left', fontWeight: 'bold' }}>{params.name}</Text>
                                <Text style={{ padding: 10, textAlign: 'left', flex: 1, fontWeight: 'bold', fontSize: 20 }}>50 JD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Button bordered style={{ borderColor: '#363A57', justifyContent: 'center', width: '100%' }}
                                    onPress={() => {
                                        this.setState({
                                            isModalVisible: true
                                        })
                                    }}
                                >
                                    <Text style={{ padding: 5, color: '#363A57', textAlign: 'center' }}>{this.state.size}</Text>
                                </Button>
                            </View>
                            <Icon name='ios-star-outline' style={{ color: 'gray', padding: 10, flex: 1, textAlign: 'right' }} />
                        </View>
                    </View>
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>Descrption</Text>
                    <View style={{ backgroundColor: '#FFFFFF', elevation: 25, margin: 5, borderRadius: 5, marginBottom: 10 }}>
                        <Text style={{ padding: 20, fontSize: 15 }}>
                            asdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwf
                        </Text>
                    </View>
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible}
                    style={{
                        justifyContent: "flex-end",
                        margin: 0
                    }}>
                    <View style={{ backgroundColor: '#FFFFFF', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: 25
                        }}>Select Size</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: ScreenSize.width * 0.1,
                            flex: 5
                        }} >
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('S')}
                                onBackButtonPress={() => this._toggleModal}
                                style={{
                                    padding: 5,
                                    flex: 1
                                }}
                            >
                                <Text style={{ borderWidth: 0.5, padding: 2, textAlign: 'center', borderColor: '#363A57', color: '#363A57' }}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XS')}
                                onBackButtonPress={() => this._toggleModal}
                                style={{
                                    padding: 5,
                                    flex: 1
                                }}
                            >
                                <Text style={{ borderWidth: 0.5, padding: 2, textAlign: 'center', borderColor: '#363A57', color: '#363A57' }}>XS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('L')}
                                onBackButtonPress={() => this._toggleModal}
                                style={{
                                    padding: 5,
                                    flex: 1
                                }}
                            >
                                <Text style={{ borderWidth: 0.5, padding: 2, textAlign: 'center', borderColor: '#363A57', color: '#363A57' }}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XL')}
                                onBackButtonPress={() => this._toggleModal}
                                style={{
                                    padding: 5,
                                    flex: 1
                                }}
                            >
                                <Text style={{ borderWidth: 0.5, padding: 2, textAlign: 'center', borderColor: '#363A57', color: '#363A57' }}>XL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XXL')}
                                onBackButtonPress={() => this._toggleModal}
                                style={{
                                    padding: 5,
                                    flex: 1
                                }}
                            >
                                <Text style={{ borderWidth: 0.5, padding: 2, textAlign: 'center', borderColor: '#363A57', color: '#363A57' }}>XXL</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            
                            <Button full style={{ backgroundColor: '#363A57', height: '100%', flex: 1, borderWidth: 0.5, borderColor: '#FFFFFF' }}
                                onPress={() => this.setState({ isModalVisible: false })}>
                                <Text style={{ color: '#FFFFFF' }} >cancel</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 0.1, backgroundColor: '#323232', elevation: 15 }}>
                    <Button full style={{ backgroundColor: '#363A57', height: '100%' }}
                        onPress={() => this.setState({ isModalVisible: true })}>
                        <Text style={{ color: '#FFFFFF' }} >Add To Cart</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default ItemScreen