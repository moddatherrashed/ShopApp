import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { Drawer, Content, Body, Button, Icon } from 'native-base';
import ScreenSize from './ScreenSize'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'

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
                }],
            offerFlag: false
        }
    }
    closeDrawer() {
        this.drawer._root.close()
        this.openFlag = 0
    }
    openDrawer() {
        this.drawer._root.open()
        this.openFlag = 1
    }
    static navigationOptions = {
        title: `online shop`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#363A57',
        },
        headerRight: <Button transparent>
            <Icon name='cart' style={{ color: '#FFFFFF' }} />
        </Button>,
        headerLeft: <Button transparent
            onPress={() => {
                if (_this.openFlag == 0) {
                    _this.openDrawer()
                    openFlag = 1
                } else {
                    _this.closeDrawer()
                    openFlag = 0
                }
            }}>
            <Icon name='menu' style={{ color: '#FFFFFF' }} />
        </Button>
    }
    componentDidMount() {
        _this = this

    }
    renderOffer() {
        if (this.state.offerFlag) {
            return (
                <View style={{
                    borderWidth: 1, borderColor: '#FFFFFF', margin: 5, backgroundColor: '#6DB0FF',
                    elevation: 5,
                }}>
                    <Image
                        style={{ height: ScreenSize.height * 0.3, width: ScreenSize.width }}
                        source={require('./icons/sport.png')}
                        resizeMode="contain"
                    />
                </View>
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
            <Drawer
                ref={(ref) => { this.drawer = ref }}
                content={<SideBar />}
                onClose={() => this.closeDrawer()} >
                <SearchBar value={this.state.text} onChangeText={(text) => this.setState({ text })} />
                <Content >
                    <ScrollView style={{ flex: 1 }}>
                        {this.renderOffer()}
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#46454d' }}>Catagories</Text>
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
                                        width: ScreenSize.width * 0.5,
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
                                            elevation: 15,
                                            backgroundColor: '#6DB0FF'
                                        }}
                                        onPress={() => navigate('CatagoryScreen', { name: item.name })}>
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
                    </ScrollView>
                </Content>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: '#46454d'
    }
})

export default HomeScreen