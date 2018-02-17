import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { Drawer, Content, Body, Button, Icon, Badge } from 'native-base';
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
                    icon: 'ios-walk-outline'
                },
                {
                    name: 'Male',
                    icon: 'ios-man'
                },
                {
                    name: 'Female',
                    icon: 'ios-woman'
                },
                {
                    name: 'Accessoies',
                    icon: 'md-watch'
                }],
            offerFlag: true
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
        header: null
    }
    componentDidMount() {
        _this = this

    }
    renderOffer(width, height) {
        if (this.state.offerFlag) {
            return (
                <View style={{
                    margin: 5, backgroundColor: '#FFFFFF',
                    elevation: 5, borderRadius: 5
                }}>
                    <Image
                        style={{ height: height * 0.5, width: '100%', borderRadius: 5 }}
                        source={{ uri: 'https://static.pexels.com/photos/428338/pexels-photo-428338.jpeg' }}
                        resizeMode="cover"
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
                <View style={{ flexDirection: 'row' ,height : width*.37,justifyContent : 'center'}}>
                    <Button transparent
                        onPress={() => {
                            if (_this.openFlag == 0) {
                                _this.openDrawer()
                                openFlag = 1
                            } else {
                                _this.closeDrawer()
                                openFlag = 0
                            }
                        }}>
                        <Icon name='menu' style={{ color: '#363A57'}} />
                    </Button>
                    <SearchBar value={this.state.text} onChangeText={(text) => this.setState({ text })}/>
                    <Button vertical transparent>
                        <Badge style={{ height : '50%'}}><Text style={{ color: '#FFFFFF' }}>5</Text></Badge>
                        <Icon name='cart' style={{ color: '#363A57' }} />
                    </Button>
                </View>

                <Content >
                    <ScrollView style={{ flex: 1 }}>
                        {this.renderOffer(width, height)}
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
                                            borderColor: '#6DB0FF',
                                            elevation: 25,
                                            backgroundColor: '#FFFFFF'
                                        }}
                                        onPress={() => navigate('CatagoryScreen', { name: item.name })}>
                                        <Icon
                                            name={item.icon}
                                            style={{ fontSize: 120, color: '#46454d' }}
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
        color: '#46454d',
        marginBottom: 10
    }
})

export default HomeScreen