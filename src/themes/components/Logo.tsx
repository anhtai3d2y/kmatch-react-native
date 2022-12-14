import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logo: {
        height: 100,
        width: 109,
    },
    title: {
        fontFamily: fonts.mainFont,
        fontSize: 50,
        color: colors.redColor,
        fontWeight: "700",
    },
});

export default styles;
