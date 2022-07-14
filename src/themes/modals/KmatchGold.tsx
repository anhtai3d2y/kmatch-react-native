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
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        width: width - 100,
        alignItems: "center",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    textSayHello: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonSayHello: {
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: colors.redColor,
    },
    textHideModal: {
        color: colors.redColor,
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonHideModal: {
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: colors.redOpacityColor,
    },

    wrapper: {},
    slideHeader: {
        flexDirection: "row",
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginLeft: 10,
        marginBottom: 10,
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
    },

    roundIcon: {
        backgroundColor: "#fff",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    priceText: {
        marginTop: 30,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.goldColor,
        borderRadius: 20,
    },
    priceTextStyle: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        padding: 10,
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    desciption: {
        marginTop: 20,
    },
});

export default styles;
