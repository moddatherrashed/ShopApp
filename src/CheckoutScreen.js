import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import LoginScreen from '../src/checkoutScreens/LoginScreen'
import InformationScreen from '../src/checkoutScreens/InformationScreen'
import DoneScreen from '../src/checkoutScreens/DoneScreen'
import ScreenSize from './ScreenSize';

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

    onNextPagePressed(ref, pageNumber) {
        ref.scrollView.scrollTo({ x: ((pageNumber - 1) * ScreenSize.width), y: 0, animated: true })
    }

    render() {
        let context = this
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator stepCount={3} customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={["Account", "Information", "Done"]} />
                </View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}
                    ref='swiper'
                >
                    <View style={styles.slide}>
                        <LoginScreen onLoginPressed={
                            () => {
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: 1 * ScreenSize.width })
                            }} />
                    </View>
                    <View style={styles.slide}>
                        <InformationScreen onNextPressed={
                            () => {
                                let counter = this.state.currentPage
                                counter++
                                this.setState({
                                    currentPage: counter
                                })
                                this.refs.swiper.scrollTo({ x: 2 * ScreenSize.width })
                            }
                        } />
                    </View>
                    <View style={styles.slide}>
                        <DoneScreen onDonePressed={() => {
                            let counter = this.state.currentPage
                            counter++
                            this.setState({
                                currentPage: counter
                            })
                        }} />
                    </View>
                </ScrollView>
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
    slide: {
        flex: 1,
        width: ScreenSize.width,
        backgroundColor: '#FFFFFF',
    },
    slide2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    slide3: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default CheckoutScreen