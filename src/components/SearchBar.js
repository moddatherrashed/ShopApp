import React from 'react'
import { TextInput, Image, View, I18nManager } from 'react-native'
import { Icon } from 'native-base'
import styleColors from './screenColors'
import strings from './strings'
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
                editable={props.editable}
                selectTextOnFocus={props.selectTextOnFocus}
                value={props.value}
                placeholder={I18nManager.isRTL ? strings.ar.search : strings.en.search}
                placeholderTextColor={styleColors.serachBarTextColor}
                underlineColorAndroid="transparent"

            />
        </View>
    )
}

export default SearchBar