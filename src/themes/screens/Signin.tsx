import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: fonts.mainFontBold,
        marginTop: 40,
        marginBottom: 20,
        color: "#000",
        fontSize: 20,
    },
    input: {
        color: "black",
        fontSize: 18,
        width: width - 60,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.redOpacityColor,
        borderRadius: 15,
        marginTop: 15,
        height: 50,
    },
    button: {
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "black",
        fontWeight: "600",
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: colors.redColor,
        marginTop: 5,
        borderColor: colors.redColor,
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default styles;
