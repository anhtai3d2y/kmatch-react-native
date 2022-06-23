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
        fontSize: 24,
        color: colors.redColor,
    },
    content: {
        marginTop: 20,
        alignItems: "center",
    },
    inputCode: {
        marginTop: 50,
        flexDirection: "row",
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
});

export default styles;
