import React from 'react'
import { TextInput, Image, View } from 'react-native'
import {Icon} from 'native-base'

const SearchBar = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', margin : 5 , elevation: 5,borderRadius : 10}}>
            <Icon name='search' style={{ color: '#46454d',padding :7,elevation: 15 }} />
            <TextInput
                style={{ height: 40, width: '85%' }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder='search for...'
                placeholderTextColor='#46454d'
                underlineColorAndroid="#46454d"

            />
        </View>
    )
}

export default SearchBar