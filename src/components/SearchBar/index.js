import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { icons } from '../../constants'

const SearchBar = ({ value, onChangeText }) => {
    return (
        <View style={styles.base}>
            <View style={styles.search_touc}>
                <Image source={icons.Search}
                    resizeMode="contain"
                    style={styles.search_icon}
                />
                <TextInput style={styles.search_text}
                    value={value}
                    placeholder='Search for movies, videos and more'
                    onChangeText={onChangeText}
                    placeholderTextColor={COLORS.gray40}
                />
                {/* <Image source={icons.Filter}
                resizeMode="contain"
                style={styles.filter_icon}
            /> */}
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    // ==================search box =====================
    base: {
        alignItems: 'center',
        marginTop: SIZES.height * .02,
        width: SIZES.width
    },
    search_icon: {
        width: SIZES.width * .054,
        height: SIZES.height * .027,
        marginLeft: SIZES.width * .03
    },
    search_touc: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%',
        backgroundColor: '#F5F5F5',
        height: SIZES.height * .054,
        borderRadius: 8,
        elevation: 4
    },
    filter_icon: {
        width: SIZES.width * .04,
        height: SIZES.height * .02,
        position: 'absolute',
        right: SIZES.width * .05
    },
    search_text: {
        fontSize: 15,
        color: COLORS.gray70,
        marginLeft: SIZES.width * .02,
        width: SIZES.width * .9
    },
})