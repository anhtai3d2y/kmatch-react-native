import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: width,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        marginTop: 100,
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: colors.redOpacityColor,
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonOutline: {
        backgroundColor: colors.redColor,
        marginTop: 5,
        borderColor: colors.redColor,
        borderWidth: 2,
    },
    buttonText: {
        color: colors.redColor,
        fontWeight: "600",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default styles;
