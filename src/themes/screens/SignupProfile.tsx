import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";
import {widthPercentageToDP} from "../../helpers";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 30,
    },
    avatar: {
        marginVertical: 20,
        borderWidth: 2,
        borderColor: colors.redColor,
        borderRadius: 100,
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        width: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white",
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: colors.redColor,
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: colors.redColor,
        width: width * 0.8,
    },
    text: {
        fontSize: 16,
    },
    input: {
        color: "black",
        width: width * 0.8,
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 8,
    },

    image: {
        marginVertical: 24,
        alignItems: "center",
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
