import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const {width, height } = Dimensions.get('window')

export default StyleSheet.create({
    base: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        minHeight: height * .9
        // flex: 1
    },
    hostelCard: {
        overflow: 'hidden',
        elevation: 1.5,
        backgroundColor: COLORS.blue,
        marginTop: height * .01
        // shadowColor:COLORS.black
    },
    hostelCardRow: {
        flexDirection: "row",
        alignItems: 'center',
        // height: height * .2,
        justifyContent: "space-evenly"
    },
    hostelCardTextSection: {
        width: width * .9
    },
    hostelCardImage: {
        width: width * .9,
        height: width *.9,
        borderRadius: 10,
        elevation: 10
    },
    hostelTitle: {
        fontSize: 20,
        color: COLORS.gray80,
        fontFamily: 'Poppins-Medium',
    },
    hostelDescription: {
        fontSize: 14,
        color: COLORS.gray80,
        fontWeight: "300",
        fontFamily: 'Poppins-Medium',
    },
    hostelPrice: {
        fontSize: 16,
        color: COLORS.gray80,
        fontWeight: "600",
        fontFamily: 'Poppins-Medium',
        marginTop: height *.01
    },
    genere: {
        marginTop: height *.01,
        padding: 5,
        flexWrap: "wrap"
    }
})