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
            data: []
        }
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name='home' style={{ color: '#FFFFFF' }} />
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
    onNavigate(context, params) {
        context.props.navigation.navigate('CatagoryScreen', params)
    }
    render() {
        const { navigate } = this.props.navigation
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
                            height: ScreenSize.height * 0.91,
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                        <Button full style={styles.ButtonStyle}
                            onPress={() => this.onNavigate(this, { name: 'Women' })} >
                            <Text style={styles.textStyle}>Women</Text>
                        </Button>
                        <Button full style={styles.ButtonStyle}
                            onPress={() => this.onNavigate(this, { name: 'Man' })}>
                            <Text style={styles.textStyle}>Man</Text>
                        </Button>
                        <Button full style={styles.ButtonStyle}
                            onPress={() => this.onNavigate(this, { name: 'Accessoies' })} >
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
    },
    ButtonStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        backgroundColor: '#FFFFFF'

    }
})

export default StackNavigation