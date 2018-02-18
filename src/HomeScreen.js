import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import { Content, Container, Body, Button, Icon, Badge } from 'native-base';
import ScreenSize from './ScreenSize'
import SearchBar from './components/SearchBar'
import SearchHeader from 'react-native-search-header'
import { StackNavigator } from 'react-navigation'
import CatagoryScreen from './CatagoryScreen'
import ItemScreen from './ItemScreen'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Sport',
                    image: { uri: 'http://www.jeffbaynes.co.uk/images/large/jeffbaynes.co/6e537634efa75a047035907c3725ce48_LRG.jpg' }
                },
                {
                    name: 'Male',
                    image: { uri: 'https://www.billboard.com/files/stylus/103009-jason_derulo2_617_409.jpg' }
                },
                {
                    name: 'Female',
                    image: { uri: 'http://wallpaperscraft.ru/image/blondinka_devushka_tatuirovka_volosy_mayka_63855_2560x1600.jpg' }
                },
                {
                    name: 'Accessoies',
                    image: { uri: 'https://ae01.alicdn.com/kf/HTB1guoRKVXXXXXCXFXXq6xXFXXXz/Yunkingdom-Nepal-Bracelets-Colorful-Antique-Silver-Color-Bracelets-Nice-Accessories-Women-s-Vintage-Bracelets-YUN0568.jpg' }
                }],
            offerFlag: false
        }
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name='home' style={{ color: '#363A57' }} />
        ),
        title: `Home`,
        headerTintColor: '#363A57',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerRight: <Button transparent
            onPress={() => _this.searchHeader.show()}>
            <Icon name='cart' style={{ color: '#363A57' }} />
        </Button>,
        headerLeft: <Button transparent
            onPress={() => {
                _this.props.navigation.navigate('DrawerOpen')
            }}>
            <Icon name='menu' style={{ color: '#363A57' }} />
        </Button>
    }

    componentDidMount() {
        _this = this

    }
    renderOffer(width, height, context) {
        if (this.state.offerFlag) {
            return (
                <TouchableOpacity style={{
                    margin: 5, backgroundColor: '#FFFFFF',
                    elevation: 5, borderRadius: 5
                }}

                >
                    <Image
                        style={{ height: height * 0.5, width: '100%', borderRadius: 5 }}
                        source={{ uri: 'https://static.pexels.com/photos/428338/pexels-photo-428338.jpeg' }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            )
        }
    }

    render() {
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

            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <SearchHeader
                        ref={(searchHeader) => {
                            this.searchHeader = searchHeader;
                        }}
                        headerBgColor='#363A57'
                    />
                    <ImageBackground
                        source={{ uri: 'http://www.tokkoro.com/picsup/3063936-blue-jeans_blur_clothes_cold_couple_fashion_girl_jacket_leisure_love_man_model_outdoors_path_pathway_pavement_people_photoshoot_romance_romantic_scarf_shoes_style_stylish_together_togetherness_wa.jpg' }}
                        style={{
                            height: ScreenSize.height * 0.88,
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                        <Button full style={{ marginLeft: 50, marginRight: 50, marginBottom: 30, backgroundColor: '#FFFFFF' }}
                            onPress={() => this.props.navigation.navigate('OpenDrawer')} >
                            <Text style={styles.textStyle}>Women</Text>
                        </Button>
                        <Button full style={{ marginLeft: 50, marginRight: 50, marginBottom: 30, backgroundColor: '#FFFFFF' }} >
                            <Text style={styles.textStyle}>Man</Text>
                        </Button>
                        <Button full style={{ marginLeft: 50, marginRight: 50, marginBottom: 30, backgroundColor: '#FFFFFF' }} >
                            <Text style={styles.textStyle}>Accessoies</Text>
                        </Button>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }
}

const StackNavigation = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    CatagoryScreen: { screen: CatagoryScreen },
    ItemScreen: { screen: ItemScreen },
})

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: '#363A57',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default StackNavigation