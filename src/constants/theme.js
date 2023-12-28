import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // primaryg: "#42C6A5",     // Green
    // primary: "#4157FF",     // blue
    primary: "#F47B20",   // orange
    secondary2: "#FFF0E4",   // light yellow
    bluePrimary:"#9284DF", 
    blue: "#6C92E0",
    button: "#78258B",    // Orange
    primary3: "#33354E",    // Dark Blue
    secondary: "#FC2626",   // Red
    bottomgray:"#777777", 
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",
    lightBlack:"#353638",
    golden: "#FF931E",
    yellow: "#EED202",
    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",

    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentWhite2: "rgba(255, 255, 255, 0.2)",
    transparentWhite3: "rgba(255, 255, 255, 0.2)",
    transparentWhite4: "rgba(255, 255, 255, 0.6)",
    transparentWhite5: "rgba(255, 255, 255, 0.8)",
    transparentWhite6: "rgba(255, 255, 255, 0.9)",
    transparentWhite7: "rgba(255, 255, 255, 1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack2: "rgba(0, 0, 0, 0.2)",
    transparentBlack3: "rgba(0, 0, 0, 0.3)",
    transparentBlack4: "rgba(0, 0, 0, 0.4)",
    transparentBlack5: "rgba(0, 0, 0, 0.5)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)",
    transparentBlack8: "rgba(0, 0, 0, 0.8)",
    transparentBlack9: "rgba(0, 0, 0, 0.9)",
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 19,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    name: "dark",
    backgroundColor1: COLORS.gray85,
    backgroundColor2: COLORS.gray90,
    backgroundColor3: COLORS.gray90,
    backgroundColor4: COLORS.primary,
    backgroundColor5: COLORS.gray85,
    backgroundColor6: COLORS.black,
    backgroundColor7: COLORS.gray90,
    backgroundColor8: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textColor: COLORS.white,
    textColor2: COLORS.white,
    textColor3: COLORS.gray40,
    textColor4: COLORS.white,
    textColor5: COLORS.gray30,
    textColor6: COLORS.gray30,
    textColor7: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundColor1: COLORS.white,
    backgroundColor2: COLORS.primary3,
    backgroundColor3: COLORS.additionalColor11,
    backgroundColor4: COLORS.white,
    backgroundColor5: COLORS.additionalColor13,
    backgroundColor6: COLORS.primary3,
    backgroundColor7: COLORS.white,
    backgroundColor8: COLORS.gray10,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textColor: COLORS.black,
    textColor2: COLORS.primary,
    textColor3: COLORS.gray80,
    textColor4: COLORS.white,
    textColor5: COLORS.black,
    textColor6: COLORS.gray,
    textColor7: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
