import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        flexDirection: "row",
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
});

export default styles;
