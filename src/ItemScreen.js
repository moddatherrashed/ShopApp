import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import ScreenSize from './ScreenSize'
class ItemScreen extends Component {
    render() {
        return (
            <View style={{ flex: 2 }}>
                <ScrollView style={{ flex: 1.9 }}>
                    <View style={{padding : 15,backgroundColor : '#FFFFFF', elevation: 15, marginBottom : 20}}>
                        <Image
                            style={{ height: ScreenSize.height * 0.6, width: '100%', flex: 0.9, }}
                            source={{ uri: 'https://i2.wp.com/pinkfortitude.com/wp-content/uploads/2015/07/29-Insider-Tips-for-Clothes-Shopping-on-eBay-by-coconutheadsurvivalguide.com_.jpg?resize=700%2C1000' }}
                            resizeMode='contain'
                        />
                        <Text>Product Name</Text>
                    </View>
                    <View style={{backgroundColor :'#FFFFFF',height : ScreenSize.height*0.4, elevation: 15,}}>
                    
                    </View>
                </ScrollView>
                <View style={{ flex: 0.1, backgroundColor: '#323232' }}>

                </View>
            </View>
        )
    }
}

export default ItemScreen