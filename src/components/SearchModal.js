import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, I18nManager } from 'react-native'
import { Icon } from 'native-base'
import styleColors from './screenColors'
import strings from './strings'
class SearchModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChanged: false,
      orders: [{
        name: '11111',
        url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
        date: '02-06-2018'
      },
      {
        name: '22222',
        url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
        date: '02-06-2018'
      },
      {
        name: '33333',
        url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
        date: '02-06-2018'
      },
      {
        name: '444444',
        url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
        date: '02-06-2018'
      },
      {
        name: '5555555',
        url: { uri: 'https://4fstore.com/gfx/1510748446.4518.jpg' },
        date: '02-06-2018'
      },
      {
        name: 'Adidas Jacket',
        url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
        date: '02-06-2018'
      },
      {
        name: 'Water Prof Jacket',
        url: { uri: 'http://www.blackhoodies.co.uk/image/cache/catalog/BLKREDTS011-540x720.jpg' },
        date: '02-06-2018'
      },
      {
        name: 'White T-shirt',
        url: { uri: 'https://4f.com.pl/gfx/big/1508938910.8935.jpg' },
        date: '02-06-2018'
      }]
    }
  }
  static navigationOptions = {
    header: null
  }

  renderResult() {
    if (this.state.isChanged) {
      return (<Text style={{ color: '#FFFFFF', fontSize: 35 }}>Results</Text>
      )
    } else {
      return (
        <FlatList
          contentContainerStyle={{ margin: 2 }}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          data={this.state.orders}
          renderItem={({ item, index }) =>
            <TouchableOpacity style={{
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              width: '100%',
              marginBottom: 5,
            }}>
              <View style={{ flexDirection: 'row', flex: 6 }}>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: 20, padding: 10, color: styleColors.ordersScreenTextColor }}> {item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      )
    }
  }
  render() {
    return (
      <View style={{ flex: 2 }}>
        <View style={{ backgroundColor: '#F26422', flexDirection: 'row' }}>
          <TextInput
            style={{ flex: 1.9, height: 50 }}
            underlineColorAndroid="#FFFFFF"
            placeholderTextColor="#FFFFFF"
            placeholder='search for ..'
          />
          <TouchableOpacity style={{ flex: 0.1, padding: 5 }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Icon name='ios-close' style={{ color: 'white', fontSize: 40 }} />
          </TouchableOpacity>
        </View>
       
        {this.renderResult()}
      </View>
    )
  }
}

export default SearchModal