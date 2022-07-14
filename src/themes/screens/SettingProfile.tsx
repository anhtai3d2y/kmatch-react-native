import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";
import {widthPercentageToDP} from "../../helpers";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.grayColor,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 30,
    },
    packageView: {
        marginTop: 20,
        alignItems: "center",
    },
    package: {
        backgroundColor: colors.white,
        width: width - 15,
        height: 80,
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    packageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 15,
    },
    packageItemBox: {
        backgroundColor: colors.white,
        width: (width - 25) / 2,
        height: 80,
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    slideHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grayColor,
    },
    text: {
        marginLeft: 10,
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
    },
    badge: {
        borderRadius: 10,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    roundIcon: {
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 20,
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
    packageItemText: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    infoView: {
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: colors.white,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        height: 40,
        borderWidth: 0.5,
        borderColor: colors.grayColor,
    },
    buttonContainer: {
        marginTop: 20,
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
});

export default styles;
