import { View, Text, StyleSheet, Pressable, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, images } from '../../constants'
import imageConnect from '../../services/imageConnect'
const { width, height } = Dimensions.get('window')

const MovieCard = ({data, onPress}) => {
    return (
        <Pressable style={styles.hostelCard}
            onPress={onPress}
        >
            <View style={styles.hostelCardRow}>
            <Image source={data.backdrop_path ? { uri: imageConnect(data.backdrop_path) } : images.cancelImg1} style={styles.hostelCardImage} />
                <View style={styles.hostelCardTextSection}>
                    <Text style={styles.hostelTitle} numberOfLines={2} >{data.title}</Text>
                    <Text style={styles.hostelDescription} numberOfLines={4}>{data.overview}</Text>
                    <Text style={styles.hostelPrice} >{data?.release_date}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    hostelCard: {
        width: width * .92,
        borderRadius: 13,
        overflow: 'hidden',
        elevation: 1.5,
        backgroundColor: COLORS.blue,
        height: height * .2,
        marginTop: height * .01
        // shadowColor:COLORS.black
    },
    hostelCardRow: {
        flexDirection: "row",
        alignItems: 'center',
        height: height * .2,
        justifyContent: "space-evenly"
    },
    hostelCardTextSection: {
        width: width * .5
    },
    hostelCardImage: {
        width: width * .32,
        height: width *.32,
        borderRadius: 10,
        elevation: 10
    },
    hostelTitle: {
        fontSize: 18,
        color: COLORS.white,
        fontFamily: 'Poppins-Medium',
    },
    hostelDescription: {
        fontSize: 12,
        color: COLORS.white,
        fontWeight: "300",
        fontFamily: 'Poppins-Medium',
    },
    hostelPrice: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "600",
        fontFamily: 'Poppins-Medium',
        marginTop: height *.01
    }
})