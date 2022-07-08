import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: width - 20,
        height: 30,
    },
    amountContainer: {
        position: "absolute",
        left: 0,
        alignItems: "flex-start",
    },
    starContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    bootsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    logoContainer: {
        flexDirection: "row",
    },
    bootsTimeContainer: {
        position: "absolute",
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    amountStar: {
        marginLeft: 5,
        color: colors.superlike,
        fontWeight: "bold",
        fontSize: 12,
    },
    amountBoots: {
        color: colors.boots,
        fontWeight: "bold",
        fontSize: 12,
    },
    logo: {
        height: 22,
        width: 24,
    },
    title: {
        marginLeft: 5,
        fontFamily: fonts.mainFont,
        fontSize: 24,
        color: colors.redColor,
        fontWeight: "700",
    },
    bootsTime: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        color: colors.like,
        marginRight: 2,
        fontWeight: "bold",
        fontSize: 12,
    },
});

export default styles;
