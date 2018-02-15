import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Content } from 'native-base';

export default class SideBar extends Component {
    render() {
        return (
            <Content style={{ flex: 1, backgroundColor: '#363A57' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/cat.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 20 }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/account.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 15 }}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/cart.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 15 }}>Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/deli.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 15 }}>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/fav.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 15 }}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/contact.png')} style={{ height: 40, width: 40, marginTop: 20 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 15 }}>Connect with us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('../icons/settings.png')} style={{ height: 40, width: 40, marginTop: 60 }} />
                        <Text style={{ color: '#FFFFFF', marginTop: 60 }}>Language Selector</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FFFFFF', marginTop: 60, marginBottom: 20, alignItems: 'center', justifyContent: 'center', height: 50, width: 100 }}>
                            <Text style={{ color: '#000', textAlign: 'center' }}>Our Logo</Text>
                        </View>
                    </View>
                </View>
            </Content>
        );
    }
}

module.exports = SideBar;