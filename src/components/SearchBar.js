import React from 'react'
import { TextInput, Image, View } from 'react-native'
import { Icon } from 'native-base'
import styleColors from './screenColors'

const SearchBar = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: styleColors.searchBarColor,
            elevation: 5,
        }}>
            <Icon name='search' style={{
                color: styleColors.serachBarTextColor,
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
                placeholderTextColor= {styleColors.serachBarTextColor}
                underlineColorAndroid="transparent"

            />
        </View>
    )
}

export default SearchBar