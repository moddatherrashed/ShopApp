import React from 'react'
import { View, Text, Animated } from 'react-native'


const Badge = ({ text, badgeScale }) => {
    return (
        <Animated.View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderWidth: 0.8,
            borderColor: '#FFFFFF',
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: 10,
            left: 0,
            top: 0,
            transform: [{
                scale: badgeScale
            }]
        }}>
            <Text style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontSize: 10
            }}>
                {text}
            </Text>
        </Animated.View>
    )
}

export default Badge