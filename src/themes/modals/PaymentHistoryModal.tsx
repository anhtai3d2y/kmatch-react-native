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
    buttonText: {
        color: colors.redColor,
        fontWeight: "600",
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
    },
    paymentBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.8,
        marginBottom: 10,
    },
});

export default styles;
