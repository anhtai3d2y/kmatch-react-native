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
    header: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        marginTop: 30,
    },
    backButton: {
        marginLeft: 30,
    },
    title: {
        marginLeft: 30,
        fontSize: 20,
        color: colors.redColor,
    },
    body: {
        alignItems: "center",
    },
    content: {
        marginTop: 20,
        alignItems: "center",
    },
    inputCode: {
        marginTop: 50,
        flexDirection: "row",
        alignSelf: "center",
    },
    inputBlock: {
        borderColor: "#ccc",
        color: "#ccc",
        fontSize: 40,
        borderWidth: 1,
        width: 50,
        height: 50,
        marginLeft: 2,
        marginRight: 2,
        textAlign: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    keyboard: {
        marginTop: 50,
        marginHorizontal: 35,
        alignSelf: "flex-end",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    key: {
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        width: 100,
        height: 60,
    },
    keyText: {
        fontSize: 30,
    },
    input: {
        color: "black",
        fontSize: 18,
        width: width - 60,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: colors.redColor,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
        alignSelf: "center",
    },
    button: {
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        marginBottom: 10,
        alignSelf: "center",
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
