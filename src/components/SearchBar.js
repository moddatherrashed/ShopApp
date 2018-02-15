import React from 'react'
import { TextInput, Image, View } from 'react-native'
import {Icon} from 'native-base'

const SearchBar = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#363A57', elevation: 5}}>
            <Icon name='search' style={{ color: '#FFFFFF',padding :7,elevation: 15 }} />
            <TextInput
                style={{ height: 40, width: '85%' }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder='search for...'
                placeholderTextColor='#FFFFFF'
                underlineColorAndroid="#FFFFFF"

            />
        </View>
    )
}

export default SearchBar