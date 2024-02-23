import React from 'react'
import { View, Text } from 'react-native'
import Style from '../Style'
import { useTheme } from '../context/UseTheme'

export default function Home() {
    const isDarkMode = useTheme()
    console.log(isDarkMode)
    return (
        <View style={[Style.container, isDarkMode ? Style.dark : Style.light]}>
            <Text style={isDarkMode ? Style.dark : Style.light}>Home</Text>
        </View>
    )
}
