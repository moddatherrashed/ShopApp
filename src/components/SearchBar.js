import React from 'react'
import { TextInput, Image, View } from 'react-native'


const SearchBar = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#363A57', }}>
            <Image source={require('../icons/search.png')} style={{ height: 40, width: 40 }} />
            <TextInput
                style={{ height: 40, width: '85%' }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder='search for...'
                placeholderTextColor='#6db0ff'
                underlineColorAndroid="#6db0ff"

            />
        </View>
    )
}

export default SearchBar