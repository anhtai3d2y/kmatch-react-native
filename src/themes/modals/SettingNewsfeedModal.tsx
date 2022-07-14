import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {width, height} from "../../constants/Layout";

const styles = StyleSheet.create({
    backgroundView: {},
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    modalView: {
        width: width - 10,
        height: height - 100,
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonContainer: {
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        width: width - 60,
    },
    textField: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.redColor,
    },
    inputSelect: {
        color: "black",
        width: width * 0.8,
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 5,
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
        marginBottom: 10,
    },
});

export default styles;
