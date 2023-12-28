import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.base}>
        <ActivityIndicator size={50} color={COLORS.primary} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center"
    },
})