import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import LoginScreen from '../checkoutScreens/LoginScreen'
const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#363A57',
    separatorFinishedColor: '#363A57',
    separatorUnFinishedColor: '#606270',
    stepIndicatorFinishedColor: '#363A57',
    stepIndicatorUnFinishedColor: '#606270',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#363A57',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: '#363A57'
}


class CheckoutScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={["Account", "Profile", "Band", "Membership", "Dashboard"]} />
                </View>
                <Swiper style={styles.wrapper} showsButtons={false} ref='swiper' showsPagination={false}>
                    <View style={styles.slide1}>
                        <LoginScreen onLoginPressed={
                            () => {
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollBy(1)
                            }
                        } />
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    stepIndicator: {
        marginVertical: 50,
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        height: 150
    },
    slide1: {
        flex: 1,

        backgroundColor: '#FFFFFF',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default CheckoutScreen