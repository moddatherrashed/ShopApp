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
            dialgoBox: false
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
                                <Text style={styles.priceTextStyle}>50 JD</Text>
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
                                    } else {
                                        this.setState({
                                            favBtn: 'ios-star-outline'
                                        })
                                    }
                                }}>
                                <Icon name={this.state.favBtn} style={styles.iconFavStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.descriptionTextStyle}>Descrption</Text>
                    <View style={styles.descriptionContainerStyle}>
                        <Text style={styles.descriptionTextStyle}>
                            asdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwfasdlkjaslkjc kajef lkjwf lkjwf
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
                    <View style={{ height: '40%', backgroundColor: '#FFFFFF', borderRadius: 10 }}>
                        <View style={{ height: '80%', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#363A57' }}>Awesome Choise</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#363A57', marginTop: '20%' }}>What do you want to do now ?</Text>
                        </View>
                        <View style={{ marginBottom: 20, width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row' }}>
                            <Button style={{
                                height: 50,
                                width: '50%',
                                backgroundColor: '#363A57',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 5,
                                borderColor: '#FFFFFF',
                                borderRadius: 10
                            }}
                                onPress={() => {
                                    this.setState({ dialgoBox: false })
                                }}>
                                <Text style={styles.textBtnsStyle} >Continue Shopping</Text>
                            </Button>
                            <Button style={{
                                height: 50,
                                backgroundColor: '#363A57',
                                width: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 5,
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