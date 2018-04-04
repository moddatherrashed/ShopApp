import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet
} from 'react-native'
import { Icon, Button, Badge } from 'native-base'
import ScreenSize from './ScreenSize'
import Modal from "react-native-modal"
import CartScreen from './CartScreen'

class ItemScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            size: 'Select Size',
            favBtn: 'ios-star-outline',
            dialgoBox: false,
            fav: ''
        }
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible })

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

    async setCartItems(value) {
        try {
            const retrievedItem = await AsyncStorage.getItem('cartItems');
            alert(retrievedItem)
            if (retrievedItem === null) {
                await AsyncStorage.setItem('cartItems', JSON.stringify([value]))
            } else {
                const item = JSON.parse(retrievedItem)
                item.push(value)
                //alert(item)
                await AsyncStorage.setItem('cartItems', JSON.stringify(item))
            }

        } catch (error) {
            alert("Error saving data ===" + error)
        }
    }

    async saveFavoraites(value) {
        try {
            const retrievedItem = await AsyncStorage.getItem('fav');
            if (retrievedItem === null) {
                await AsyncStorage.setItem('fav', JSON.stringify([value]))
            } else {
                const item = JSON.parse(retrievedItem)
                item.push(value)
                //alert(item)
                await AsyncStorage.setItem('fav', JSON.stringify(item))
            }

        } catch (error) {
            alert("Error saving data ===" + error)
        }
    }

    itemIsFav(namesArray, name) {
        if (namesArray === null) {
            return false
        }
        for (let i = 0; i < namesArray.length; i++) {
            if (namesArray[i].name === name) {
                return true
            }

        }
        return false
    }
    async getKey() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('fav'))
            this.setState({ fav: value });
            this.itemIsFav(this.state.fav, this.props.navigation.state.params.name) ? this.setState({ favBtn: 'ios-star' }) : this.setState({ favBtn: 'ios-star-outline' })
        } catch (error) {
            alert("Error retrieving data get key " + error);
        }
    }
    componentWillMount() {
        this.getKey()
    }

    render() {
        const { params } = this.props.navigation.state
        const { navigate } = this.props.navigation
        return (
            <View style={styles.conatinerStyle}>
                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageStyle}
                            source={params.url}
                            resizeMode='contain'
                        />
                        <View style={styles.priceNameFavContainer}>
                            <View style={styles.namePriceConatiner}>
                                <Text style={styles.nameTextStyle}>{params.name}</Text>
                                <Text style={styles.priceTextStyle}>{params.price}</Text>
                            </View>
                            <View style={styles.sizeSelectorStyle}>
                                <Button bordered style={styles.sizeBtnStyle}
                                    onPress={() => {
                                        this.setState({
                                            isModalVisible: true
                                        })
                                    }}
                                >
                                    <Text style={styles.sizeTextStyle}>{this.state.size}</Text>
                                </Button>
                            </View>
                            <TouchableOpacity style={styles.iconTouchStyle}
                                onPress={() => {
                                    if (this.state.favBtn === 'ios-star-outline') {
                                        this.setState({
                                            favBtn: 'ios-star'
                                        })
                                        this.saveFavoraites(params)

                                    } else {
                                        this.setState({
                                            favBtn: 'ios-star-outline'
                                        })

                                        let restOfOrders = this.state.fav
                                        let index = restOfOrders.findIndex(x => x.name == params.name);
                                        restOfOrders.splice(index, 1)
                                        this.setState({
                                            fav: restOfOrders
                                        })
                                        AsyncStorage.setItem('fav', JSON.stringify(this.state.fav))
                                    }
                                }}>
                                <Icon name={this.state.favBtn} style={styles.iconFavStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.descriptionTextStyle}>Descrption</Text>
                    <View style={styles.descriptionContainerStyle}>
                        <Text style={styles.descriptionTextStyle}>
                            this is dummu description just to show how it looks like, please do not read it
                        </Text>
                    </View>
                </ScrollView>
                <Modal isVisible={this.state.isModalVisible}
                    style={styles.ModalStyle}>
                    <View style={styles.conatainerModalStyle}>
                        <Text style={{
                            fontSize: 25
                        }}>Select Size</Text>
                        <View style={styles.containerSizeStyle} >
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('S')}
                                onBackButtonPress={() => this._toggleModal}
                                style={styles.sizeTouchStyle}
                            >
                                <Text style={styles.sizeTouchTextStyle}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XS')}
                                onBackButtonPress={() => this._toggleModal}
                                style={styles.sizeTouchStyle}
                            >
                                <Text style={styles.sizeTouchTextStyle}>XS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('L')}
                                onBackButtonPress={() => this._toggleModal}
                                style={styles.sizeTouchStyle}
                            >
                                <Text style={styles.sizeTouchTextStyle}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XL')}
                                onBackButtonPress={() => this._toggleModal}
                                style={styles.sizeTouchStyle}
                            >
                                <Text style={styles.sizeTouchTextStyle}>XL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSelectSize('XXL')}
                                onBackButtonPress={() => this._toggleModal}
                                style={styles.sizeTouchStyle}
                            >
                                <Text style={styles.sizeTouchTextStyle}>XXL</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cancelBtnConatinaerStyle}>

                            <Button full style={styles.cancelBtnStyle}
                                onPress={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.textBtnsStyle} >cancel</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Modal
                    isVisible={this.state.dialgoBox}>
                    <View style={{ height: ScreenSize.height * 0.4, backgroundColor: '#FFFFFF', borderRadius: 10, justifyContent: 'space-around' }}>
                        <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#363A57', padding: ScreenSize.height * 0.03 }}>Awesome Choise</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#363A57', padding: ScreenSize.height * 0.03 }}>What do you want to do now ?</Text>
                        </View>
                        <View style={{ paddingTop: ScreenSize.height * 0.1, height: ScreenSize.height * 0.2, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Button style={{
                                width: '40%',
                                backgroundColor: '#363A57',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '5%',
                                borderColor: '#FFFFFF',
                                borderRadius: 10,

                            }}
                                onPress={() => {
                                    this.setState({ dialgoBox: false })
                                }}>
                                <Text style={styles.textBtnsStyle} >Continue Shopping</Text>
                            </Button>
                            <Button style={{
                                backgroundColor: '#363A57',
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
                                <Text style={styles.textBtnsStyle} >View Cart</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View style={styles.addToCartContainerStyle}>
                    <Button full style={styles.addToCartBtnStyle}
                        onPress={() => {
                            if (this.state.size === 'Select Size') {
                                this.setState({ isModalVisible: true })

                            } else {
                                this.setCartItems(params)
                                alert(params)
                                this.setState({ dialgoBox: true })

                            }
                        }}>
                        <Text style={styles.textBtnsStyle} >Add To Cart</Text>
                    </Button>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    addToCartBtnStyle: {
        backgroundColor: '#363A57',
        height: '100%'
    },
    addToCartContainerStyle: {
        flex: 0.1,
        backgroundColor: '#323232',
        elevation: 15
    },
    textBtnsStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    cancelBtnStyle: {
        backgroundColor: '#363A57',
        height: '100%',
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#FFFFFF'
    },

    cancelBtnConatinaerStyle: {
        flexDirection: 'row',
        flex: 2
    },
    ModalStyle: {
        justifyContent: "flex-end",
        margin: 0
    },
    sizeTouchTextStyle: {
        borderWidth: 0.5,
        padding: 2,
        textAlign: 'center',
        borderColor: '#363A57',
        color: '#363A57'
    },
    containerSizeStyle: {
        flexDirection: 'row',
        marginTop: ScreenSize.width * 0.1,
        flex: 5
    },
    sizeTouchStyle: {
        padding: 5,
        flex: 1
    },
    conatainerModalStyle: {
        backgroundColor: '#FFFFFF',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    conatinerStyle: {
        flex: 2,
        backgroundColor: '#FFFFFF'
    },
    imageContainer: {
        margin: 5,
        backgroundColor: '#FFFFFF',
        elevation: 15,
        marginBottom: 10,
        borderRadius: 5
    },
    priceNameFavContainer: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameTextStyle: {
        padding: 5,
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    priceTextStyle: {
        padding: 10,
        textAlign: 'left',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20
    },
    namePriceConatiner: {
        flexDirection: 'column',
        flex: 1.5
    },
    sizeSelectorStyle: {
        flexDirection: 'row',
        flex: 1.5
    },
    scrollViewStyle: {
        flex: 1.9
    },
    sizeBtnStyle: {
        borderColor: '#363A57',
        justifyContent: 'center',
        width: '100%'
    },
    sizeTextStyle: {
        padding: 5,
        color: '#363A57',
        textAlign: 'center'
    },
    iconFavStyle: {
        color: '#363A57',
        padding: 10,
        flex: 1,
        textAlign: 'right'
    },
    iconTouchStyle: {
        padding: 10,
        flex: 1
    },
    imageStyle: {
        height: ScreenSize.height * 0.6,
        width: '100%',
        flex: 0.9,
    },
    descriptionTextStyle: {
        padding: 5,
        fontWeight: 'bold',
        color: '#363A57'
    },
    descriptionContainerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 25,
        margin: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    descriptionTextStyle: {
        padding: 20,
        fontSize: 15
    }
})
export default ItemScreen