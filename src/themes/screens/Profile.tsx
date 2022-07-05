import {StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/Colors";
import {width} from "../../constants/Layout";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 30,
    },
    messageHeader: {
        alignItems: "center",
        width: width,
    },
    info: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textInfo: {
        fontSize: 24,
        fontWeight: "500",
    },
    actions: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    actionName: {
        marginTop: 10,
        alignSelf: "center",
        color: "#ccc",
        fontWeight: "700",
    },
    action: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        marginHorizontal: 30,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    swiperPackage: {
        position: "absolute",
        zIndex: -1,
        bottom: 0,
        height: 300,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grayColor,
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5",
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9",
    },
    text: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default styles;
