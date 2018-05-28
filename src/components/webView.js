import React, { Component } from 'react';
import { WebView } from 'react-native';
import styleColors from './screenColors'

class webView extends Component {

    static navigationOptions = {
        headerTintColor: styleColors.toolBarTextColor,
        headerStyle: {
            backgroundColor: styleColors.toolBarColor,
        },
    }
    render() {
        const { params } = this.props.navigation.state
        return (
            <WebView
                source={{ uri: params.url }}
            />
        );
    }
}

export default webView