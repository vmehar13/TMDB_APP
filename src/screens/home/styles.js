import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export default StyleSheet.create({
    base: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        flex: 1
    },
    moviesList: {
        marginTop: SIZES.height * .01,
        paddingBottom: SIZES.height * .05
    },
    loadMore: {
        color: COLORS.primary,
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    }
})