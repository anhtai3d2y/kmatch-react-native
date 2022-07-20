import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {width, height} from "../../constants/Layout";

const styles = StyleSheet.create({
    scroll_view: {
        backgroundColor: "#fff",
        marginBottom: 60,
    },
    userHeader: {
        position: "absolute",
        top: 20,
        height: 50,
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    headerImage: {
        borderWidth: 1,
        borderColor: colors.redColor,
        borderRadius: 20,
        height: 35,
        width: 35,
    },
    container: {
        backgroundColor: "#fff",
        paddingTop: 65,
        position: "relative",
    },
    containerMessage: {
        backgroundColor: "#fff",
        paddingTop: 10,
        marginBottom: 65,
    },
    messageHeader: {
        alignItems: "center",
        width: width,
    },
    boxChat: {
        flexDirection: "row",
        width: width,
        height: 60,
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        paddingRight: 10,
    },
    input: {
        width: width * 0.6,
        height: 40,
        backgroundColor: "#ccc",
        borderRadius: 20,
        padding: 10,
    },
    send: {
        width: width * 0.2,
        height: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
