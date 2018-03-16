import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon, Button } from 'native-base'

class DoneScreen extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 15, margin: 10, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Icon name='ios-checkmark-circle' style={{ color: '#009432' }} />
                    <Text style={{ fontWeight: 'bold', margin: 5, color: '#363A57' }}>Done</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', color: '#363A57', padding: 15, textAlign: 'center', fontSize: 25 }}>Shipping Information</Text>
                    <Text style={{ fontWeight: 'bold', color: '#363A57', padding: 15, textAlign: 'center' }}>Full Name: moddather rashed</Text>
                    <Text style={{ fontWeight: 'bold', color: '#363A57', padding: 15, textAlign: 'center' }}>Address: Eptingerstrasse 28, Basel</Text>
                    <Text style={{ fontWeight: 'bold', color: '#363A57', padding: 15, textAlign: 'center' }}>Mobile Number: 0774044019</Text>
                    <Text style={{ fontWeight: 'bold', color: '#363A57', padding: 15, textAlign: 'center' }}>Total ammount: 50 JOD</Text>
                </View>
                <Button full style={{
                    backgroundColor: '#363A57',
                    margin: 10,
                    elevation: 5,
                    borderRadius: 5
                }} onPress={this.props.onDonePressed}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Done</Text>
                </Button>
            </ScrollView>
        )
    }
}

export default DoneScreen