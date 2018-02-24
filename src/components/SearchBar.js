import React from 'react'
import { TextInput, Image, View } from 'react-native'
import { Icon } from 'native-base'

const SearchBar = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            elevation: 5,
        }}>
            <Icon name='search' style={{
                color: '#363A57',
                padding: 7,
                elevation: 15
            }} />
            <TextInput
                style={{
                    height: 42,
                    width: '90%',
                }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder='search for...'
                placeholderTextColor='#363A57'
                underlineColorAndroid="transparent"

            />
        </View>
    )
}

export default SearchBar