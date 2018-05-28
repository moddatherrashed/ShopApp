import React from 'react'
import { View, Text, TextInput, StatusBar, TouchableOpacity, FlatList, Image, I18nManager } from 'react-native'
import { Icon } from 'native-base'
import styleColors from './screenColors'
import strings from './strings'
import apiGetRequests from '../components/apiGetRequests'

class SearchModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChanged: false,
      searchedProducts: [],
      searchText: ''
    }
  }
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    apiGetRequests.getRequests('getProducts', 0).then((res) => {
      //alert(JSON.stringify(res))
      this.setState({
        searchedProducts: res.products
      })
    })
  }
  renderResult(filterSearch) {
    const { navigate } = this.props.navigation

    if (filterSearch.length === 0) {
      return (<Text style={{ color: 'gray', fontSize: 35, textAlign: 'center' }}>No Results</Text>
      )
    } else {
      return (
        <FlatList
          contentContainerStyle={{ margin: 2 }}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          data={filterSearch}
          renderItem={({ item, index }) =>
            <TouchableOpacity style={{
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              width: '100%',
              marginBottom: 5,
            }} onPress={() => {
              navigate("ItemScreen", { id: item.id, name: I18nManager.isRTL ? item.full_name_ar : item.full_name_en, url: item.image, quantity: "1", price: item.price, description: I18nManager.isRTL ? item.description_ar : item.description_en })
            }}>
              <View style={{ flexDirection: 'row', flex: 6 }}>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: 20, padding: 10, color: styleColors.ordersScreenTextColor }}> {I18nManager.isRTL ? item.name_ar : item.name_en}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      )
    }
  }
  render() {
    let filterSearch = this.state.searchedProducts.filter(
      (data) => {
        return (I18nManager.isRTL ? data.name_ar : data.name_en).toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
      }
    )
    return (
      <View style={{ flex: 2 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#EF9267"
          hidden={false} />
        <View style={{ backgroundColor: '#F26422', flexDirection: 'row' }}>
          <TextInput
            style={{ flex: 1.9, height: 50 }}
            underlineColorAndroid="#FFFFFF"
            placeholderTextColor="#FFFFFF"
            placeholder={I18nManager.isRTL ? '... ابحث عن جميع المنتجات' : 'Search for all product ..'}
            onChangeText={(searchText) => {
              this.setState({ searchText: searchText })
            }}
          />
          <TouchableOpacity style={{ flex: 0.1, padding: 5 }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Icon name='ios-close' style={{ color: 'white', fontSize: 40 }} />
          </TouchableOpacity>
        </View>

        {this.renderResult(filterSearch)}
      </View>
    )
  }
}

export default SearchModal